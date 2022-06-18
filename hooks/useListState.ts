import { useCallback, useReducer } from "react";


export const useListState = () => {

  // ===========================================================================
  // Variables
  // ===========================================================================

  type State = {
    count: number;
  }

  const initialState: State = {
    count: 0,
  };

  enum ActionKind {
    Increase = "increment",
    Decrease = "decrement",
  }

  type Action = {
    type: ActionKind,
  }

  // ===========================================================================
  // Handlers
  // ===========================================================================

  const reducer = (state: State, action: Action) => {
    const { type } = action;

    const reducerFunc = {
      [ActionKind.Increase]: function incre() {
        return { count: state.count + 1 };
      },

      [ActionKind.Decrease]: function decre() {
        return { count: state.count - 1 };
      },

      default: function () {
        throw new Error();
      },
    };
    const func = reducerFunc?.[type];

    return func ? func() : reducerFunc?.default();
  };

  // ===========================================================================
  // Reducer
  // ===========================================================================

  const [storeLocal, dispatching] = useReducer(reducer, initialState);

  // ===========================================================================
  // Dispatch
  // ===========================================================================

  const onIncreasing = useCallback(() => {
    dispatching({ type: ActionKind.Increase });
  }, [ActionKind.Increase]);

  const onDecreasing = useCallback(() => {
    dispatching({ type: ActionKind.Decrease });
  }, [ActionKind.Decrease]);

  // ===========================================================================
  // Export
  // ===========================================================================

  return {
    onIncreasing: onIncreasing,
    onDecreasing: onDecreasing,
    count: storeLocal.count,
  };
};
