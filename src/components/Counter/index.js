import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="counter-card">
      <div className="display">{count}</div>
      <div className="btns">
        <div
          className="increment"
          onClick={() =>
            dispatch({
              type: "SET_STATE",
              payload: { ...count, count: count + 1 },
            })
          }
        >
          <FontAwesomeIcon icon={faPlusSquare} />
        </div>

        <div
          className="decrement"
          onClick={() =>
            dispatch({
              type: "SET_STATE",
              payload: { ...count, count: count - 1 },
            })
          }
        >
          <FontAwesomeIcon icon={faMinusSquare} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
