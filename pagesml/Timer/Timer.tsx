import { css } from "@emotion/css";
import React, { useCallback, useEffect, useRef, useState } from "react";

type Fn = () => void;
const INITIAL_COUNT = 120;
const MILLISECOND = 1_000;
const TIME_METRE = 60;
const DIMINUTION = 1;

enum STATUS {
    STARTED = "started",
    STOPPED = "stopped"
};

const STATUS_MAP: Record<STATUS, string> = {
    [STATUS.STARTED]: "Paused",
    [STATUS.STOPPED]: "Play"
}

const DEPLAY_TIME: Record<STATUS, number | null> = {
    [STATUS.STARTED]: MILLISECOND,
    [STATUS.STOPPED]: null
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

    console.log({
        count
    })

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

    const onAction = useCallback((st: STATUS) => {
        const action = {
            [STATUS.STARTED]: onStop,
            [STATUS.STOPPED]: onStart
        }
        return action[st]();
    }, []);

    const onReset = useCallback(
        () => {
            setTime(INITIAL_COUNT)
            setStatus(STATUS.STOPPED);
        },
        [],
    );

    return <div className={dd}>
        "Tôi không nghĩ cái ngành của chúng tôi lại bê bết như thế này, nghĩ tới cũng thấy rất áy náy", ông Hoàng Trung Liêm, cán bộ được Cục Đăng kiểm biệt phái xuống điều hành trạm 29-06V, chia sẻ. Ông Liêm cho biết dù đã huy động cả những người đã bị khởi tố, trung tâm vẫn thiếu hụt 50% nhân lực.
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
const test = css`
    display: inline
`
const dd =css`
 -webkit-column-count: 5;
 -webket-column-rule-color: lightgreen;
 font-style: italic;
 background-color: lightyellow;
 -webkit-column-gap: 50px
`