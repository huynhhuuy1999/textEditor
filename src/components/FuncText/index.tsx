// Library
import { Checkbox } from "antd";
import { ReactNode } from "react";
import { RxLetterCaseUppercase } from "react-icons/rx";

// Styles
import globalStyles from "@/app/global.module.css";
import styles from "./styles.module.css";

//Constant

interface OptionCheckbox {
  label: ReactNode;
  value: string;
}

export const FuncText = () => {
  const options: OptionCheckbox[] = [
    { label: <RxLetterCaseUppercase />, value: globalStyles.uppercase },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];
  return (
    <div className={styles.container}>
      <span className={styles.title}>Func text</span>
      <Checkbox.Group onChange={(e) => console.log(e)}>
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
