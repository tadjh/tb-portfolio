import { useEffect, useRef, useState } from "react";
import bingoJingle from "../assets/audio/Bingo_Theme_by_Tadjh_Brooks.mp3";
import Audio from "./Audio";
import Confetti from "./Confetti";

interface BingoJinglesProps extends React.HTMLAttributes<HTMLDivElement> {}

let lowerVolume = false;

export default function BingoJingles({ ...props }: BingoJinglesProps) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);
  const playRef = useRef(false);

  function handlePlay(event: React.SyntheticEvent<HTMLAudioElement>) {
    if (!lowerVolume) {
      event.currentTarget.volume = 0.5;
      lowerVolume = true;
    }
    playRef.current = true;
    setPlaying(true);
  }

  function handlePause() {
    playRef.current = false;
    setPlaying(false);
  }

  useEffect(() => {
    if (ref.current && !lowerVolume) {
      ref.current.volume = 0.5;
      lowerVolume = true;
    }
  });

  return (
    <div {...props}>
      <Audio
        ref={ref}
        src={bingoJingle}
        onPlay={handlePlay}
        onPause={handlePause}
      />
      {playing && <Confetti playRef={playRef} />}
    </div>
  );
}
