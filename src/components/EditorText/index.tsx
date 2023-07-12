import React, { useState } from "react";
import { Input } from "antd";
import styles from "./styles.module.css";

export const EditorText = () => {
  const { TextArea } = Input;
  const [text, setText] = useState("");
  return (
    <div>
      <TextArea
        className={styles.textArea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        allowClear
        style={{ textTransform: "uppercase", color: "red" }}
      />
    </div>
  );
};

export default EditorText;
