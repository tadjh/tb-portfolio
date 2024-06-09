interface VideoProps extends React.MediaHTMLAttributes<HTMLVideoElement> {
  media: string;
}

export default function Video({ media, ...props }: VideoProps) {
  return (
    <video {...props}>
      <source src={media} type="video/mp4" />
    </video>
  );
}
