import { css } from "@emotion/css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BearState, useBearStore } from "../../hooks/useBearStore";
import { useRouter } from "next/router";

type Fn = () => void;
const INITIAL_COUNT = 120;
const MILLISECOND = 1_000;
const TIME_METRE = 60;
const DIMINUTION = 1;

enum STATUS {
    STARTED = "started",
    STOPPED = "stopped",
    RESET = "reset"
};

const STATUS_MAP: Record<STATUS, string> = {
    [STATUS.STARTED]: "Paused",
    [STATUS.STOPPED]: "Play",
    [STATUS.RESET]: "Reset"
}

const DEPLAY_TIME: Record<STATUS, number | null> = {
    [STATUS.STARTED]: MILLISECOND,
    [STATUS.STOPPED]: null,
    [STATUS.RESET]: null
};

const pluralize = (text, count) => {
    if(count === 0 || count === 1) return text;
    return `${text}s`
};

const showDisplayTime = (num: number) => String(num).padStart(2, "0");

export const Timer = () => {
    const [timeToCount, setTime] = useState<number>(INITIAL_COUNT);
    const [status, setStatus] = useState<STATUS>(STATUS.STOPPED);
    const [count, setC] = useState<number>(0);
    const { bears, increase } = useBearStore((state: BearState) => state)

    const secondsToDisplay = timeToCount % TIME_METRE;
    const minutesRemaining = (timeToCount - secondsToDisplay) / TIME_METRE;
    const minutesToDisplay = minutesRemaining % TIME_METRE;
    const hoursToDisplay = (minutesRemaining - minutesToDisplay) / TIME_METRE;

    useCountDown(() => {
        if (timeToCount) {
            setTime(prevTime => prevTime - DIMINUTION);
            return
        }
        setStatus(STATUS.STOPPED);
    }, DEPLAY_TIME[status]);

    const onStart = useCallback(
        () => {
            return setStatus(STATUS.STARTED)
        },
        [],
    );

    const onStop = useCallback(
        () => {
            return setStatus(STATUS.STOPPED)
        },
        [],
    );

    const onReset = useCallback(
        () => {
            setTime(INITIAL_COUNT)
            setStatus(STATUS.STOPPED);
        },
        [],
    );

    const onAction = useCallback((st: STATUS) => {
        const action = {
            [STATUS.STARTED]: onStop,
            [STATUS.STOPPED]: onStart,
            [STATUS.RESET]: onReset,
        }
        return action[st]();
    }, []);

    const { push } = useRouter();

    return <div className={sectionCss}>
        <h1>{bears} around here ...</h1>
        <span>{showDisplayTime(hoursToDisplay)}</span>
        <span>{showDisplayTime(minutesToDisplay)}</span>
        <div className={groupButtonCss}>
            <button onClick={() => onAction(STATUS.STARTED)}>{STATUS_MAP[STATUS.STARTED]}</button>
            <button onClick={() => onAction(STATUS.STOPPED)}>{STATUS_MAP[STATUS.STOPPED]}</button>
            <button onClick={() => onAction(STATUS.RESET)}>{STATUS_MAP[STATUS.RESET]}</button>
            <button onClick={() => increase(1)}>Remove</button>
            <button onClick={() => push("/title")}>Direct</button>
        </div>
    </div>
}

const useCountDown = (callback: Fn, delay: number) => {

    const refCallBack = useRef<Fn>(null);

    refCallBack.current = callback;
    // let id = null;

    useEffect(() => {
        function count() {
            refCallBack.current() // use count here for avoiding keep count when timecount is smaller than 0
        }

        if (delay !== null) {
            let id = setInterval(count, delay); // setInterval's closure only accesses the time variable in the first render
            return () => clearInterval(id)
        }
    }, [delay]);
}

// css

const sectionCss = css`
    display: flex;
    flex-direction: row;
    gap: 8px
`;

const groupButtonCss = css`
    display: flex;
    flex-direction: row;
    gap: 4px
`
const frameCss = css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    align-items: center
`