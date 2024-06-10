import { forwardRef } from "react";

interface AudioProps extends React.HTMLAttributes<HTMLAudioElement> {
  src: string;
}

const Audio = forwardRef<HTMLAudioElement, AudioProps>(function Audio(
  { src, ...props },
  ref,
) {
  return (
    <audio
      ref={ref}
      controls
      controlsList="nodownload"
      preload="metadata"
      {...props}
    >
      <source src={src} type="audio/mp3" />
    </audio>
  );
});
export default Audio;
