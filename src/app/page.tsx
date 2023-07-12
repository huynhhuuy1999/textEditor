"use client";
import { EditorText, FuncText } from "@/components";
import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <span>
      <EditorText />
      <FuncText />
      <Link href={"test"}>Click to test page</Link>
    </span>
  );
}
