"use client";
import { EditorText, FuncText } from "@/components";
import Logo from "@/components/Logo";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [stylesCustom, setStyleCustom] = useState({});
  const convertStyleCustom = (value: any[]) => {
    const styles = value.reduce((accumulator, currentValue) => {
      return { ...accumulator, ...currentValue };
    }, {});

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
