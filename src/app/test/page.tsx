"use client";
// Library
import {
  ChangeEvent,
  useLayoutEffect,
  useRef,
  useState,
  useTransition,
} from "react";
// Components
import VideoCom from "@/components/VideoCom";
import { Button, Input } from "antd";
// Styles
import styles from "./styles.module.css";

interface ITypeVideo {
  play: () => void;
  pause: () => void;
}

export const Test: any = () => {
  const [num, setNum] = useState<number>(0);
  const refVideo = useRef<ITypeVideo>();
  const [textValue, setTextValue] = useState("");

  const [isPending, startTransition] = useTransition();

  useLayoutEffect(() => {
    if (num > 3) setNum(0);
  }, [num]);

  const onPlay = () => {
    refVideo.current && refVideo.current.play();
  };

  const onPause = () => {
    refVideo.current && refVideo.current.pause();
  };

  const increaseNumber = () => {
    setNum(num + 1);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);

    startTransition(() => {
      setTimeout(() => {
        console.log("debounce done");
      }, 1000);
    });
  };

  return (
    <div>
      <VideoCom ref={refVideo} />
      <Button type="primary" onClick={onPlay}>
        Play
      </Button>
      <Button danger onClick={onPause}>
        Pause
      </Button>
      <div className={styles.textNum}>{num}</div>
      <Button onClick={increaseNumber}>Click</Button>
      <Input value={textValue} onChange={onChangeText} />
    </div>
  );
};

export default Test;
