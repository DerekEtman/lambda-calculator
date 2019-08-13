import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [opState, setOpState] = useState(operators);
  // STEP 2 - add the imported data to state
  // let opArr = Array.from(operators);
  // console.log(opArr);

  return (
    <div>
      {operators.map((op, item) => {
        return <OperatorButton key={item} operatorProp={op.value}/>
      })}
    </div>
  );
};

export default Operators;