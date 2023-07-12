"use client";
import { EditorText, FuncText } from "@/components";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Logo />
      <div>
        <EditorText />
        <FuncText />
      </div>
      <Link href={"test"}>Click to test page</Link>
    </div>
  );
}
