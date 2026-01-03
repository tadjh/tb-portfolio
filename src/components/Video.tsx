import { useEffect, useRef, useState } from "react";

interface VideoProps extends React.MediaHTMLAttributes<HTMLVideoElement> {
  media: string;
  rootMargin?: string;
  loading?: "lazy" | "eager";
}

export default function Video({
  media,
  rootMargin = "300px",
  loading,
  ...props
}: VideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    function load() {
      if (loaded) return;
      const source = document.createElement("source");
      source.src = media;
      source.type = media.endsWith(".webm") ? "video/webm" : "video/mp4";
      el.appendChild(source);
      el.preload = "none";
      el.load();
      setLoaded(true);
    }

    const handleVisibility = async (isVisible: boolean) => {
      if (isVisible && el.autoplay) {
        await el.play();
      } else {
        el.pause();
      }
    };

    if (loading === "eager") {
      load();
      if (el.autoplay) {
        el.play().catch(() => {});
      }
      return;
    }

    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target !== el) continue;

          if (e.isIntersecting) {
            load();
            handleVisibility(true);
          } else {
            handleVisibility(false);
          }
        }
      },
      { rootMargin },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [media, loading, rootMargin, loaded]);

  return <video ref={ref} preload="none" playsInline {...props} />;
}
