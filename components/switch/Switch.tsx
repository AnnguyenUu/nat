// @ts-nocheck
import { Switch } from "antd";
import React, { useState } from "react";

const useToggle = () => {
  const [on, setOn] = useState<boolean>(false);
  const toggle = () => setOn(!on);

  function callAll(...fns) {
    return (...args) => {
      fns.forEach((fn) => {
        if (fn) fn(...args);
      });
    };
  }

  function getTogglerProps({ onClick, ...props }) {
    return {
      onClick: callAll(onClick, toggle),
      ...props,
    };
  }

  return {
    on: on,
    getTogglerProps: getTogglerProps,
  };
};

const SwitchGetterProps = () => {
  const { on, getTogglerProps } = useToggle();

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "60px",
      gap: 10,
    }}
    >
      <Switch {...getTogglerProps({ checked: on })} />
      <button
        {...getTogglerProps({
          onClick: () => console.info("Button is clicked"),
        })}
      >Switch
      </button>
    </div>
  );
};

export default SwitchGetterProps;