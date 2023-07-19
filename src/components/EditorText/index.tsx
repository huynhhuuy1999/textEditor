import { Input } from "antd";
import React, { useId, useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import styles from "./styles.module.css";

interface IEditorText {
  styleCustom: Object;
}

export const EditorText: React.FC<IEditorText> = ({ styleCustom }) => {
  const { TextArea } = Input;
  const [text, setText] = useState("");
  const idText = useId();

  const onCopy = () => {
    var copyText: any = document.getElementById(idText);
    if (copyText) {
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);

      // Alert the copied text
      // alert("Copied the text: " + copyText.value);
    }
  };
  return (
    <div>
      <TextArea
        className={styles.textArea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styleCustom}
        id={idText}
      />
      <div className={styles.iconCopy}>
        <AiFillCopy onClick={onCopy} />
      </div>
    </div>
  );
};

export default EditorText;
