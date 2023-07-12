"use client";
import { EditorText, FuncText } from "@/components";
import Logo from "@/components/Logo";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [stylesCustom, setStyleCustom] = useState({});
  const convertStyleCustom = (value: CheckboxValueType[]) => {
    const styles = Object.assign({}, value) ? Object.assign({}, value)[0] : {};

    setStyleCustom(styles);
  };

  return (
    <div>
      <Logo />
      <div>
        <EditorText styleCustom={stylesCustom} />
        <FuncText onChangeFunc={convertStyleCustom} />
      </div>
      <Link href={"test"}>Click to test page</Link>
    </div>
  );
}
