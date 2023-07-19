// Library
import { forwardRef, useImperativeHandle, useRef } from "react";
// Static
import clipTiktok from "@/../public/video/clipTiktok.mp4";

const VideoCom = (_: any, ref: any) => {
  const refVideo = useRef<HTMLVideoElement>(null);

  useImperativeHandle(ref, () => ({
    play() {
      refVideo.current && refVideo.current.play();
    },
    pause() {
      refVideo.current && refVideo.current.pause();
    },
  }));

  return <video ref={refVideo} src={clipTiktok} width={280}></video>;
};

export default forwardRef(VideoCom);
