"use client";
import { useRouter } from "next/navigation";

export const Test = () => {
  const router = useRouter();
  return (
    <div>
      atest <button onClick={() => router.back()}>go back</button>
    </div>
  );
};

export default Test;
