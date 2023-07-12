// Library
import { Checkbox } from "antd";
import React, { ReactNode } from "react";
import { RxLetterCaseUppercase } from "react-icons/rx";

// Styles
import styles from "./styles.module.css";
import { NextPage } from "next";
import { CheckboxValueType } from "antd/es/checkbox/Group";

//Constant

interface OptionCheckbox {
  label: ReactNode;
  value: string | Object;
}

interface IFuncText {
  onChangeFunc: (value: CheckboxValueType[]) => void;
}

export const FuncText: React.FC<IFuncText> = ({ onChangeFunc }) => {
  const options: OptionCheckbox[] = [
    { label: <RxLetterCaseUppercase />, value: { textTransform: "uppercase" } },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.title}>Func textsdf</span>
      <Checkbox.Group onChange={onChangeFunc}>
        {options.map((option, index) => {
          return (
            <Checkbox value={option.value} key={index}>
              {option.label}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </div>
  );
};

export default FuncText;
