import React, { useState } from "react";
import { Input } from "antd";
import styles from "./styles.module.css";

interface IEditorText {
  styleCustom: Object;
}

export const EditorText: React.FC<IEditorText> = ({ styleCustom }) => {
  const { TextArea } = Input;
  const [text, setText] = useState("");

  return (
    <div>
      <TextArea
        className={styles.textArea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styleCustom}
      />
    </div>
  );
};

export default EditorText;
