"use client";
// Library
import { useRef } from "react";
// Components
import VideoCom from "@/components/VideoCom";
import { Button } from "antd";

interface ITypeVideo {
  play: () => void;
  pause: () => void;
}

export const Test: any = () => {
  const refVideo = useRef<ITypeVideo>();

  const onPlay = () => {
    refVideo.current && refVideo.current.play();
  };

  const onPause = () => {
    refVideo.current && refVideo.current.pause();
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
    </div>
  );
};

export default Test;
