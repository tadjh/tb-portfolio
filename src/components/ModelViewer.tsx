import type { SceneHandle } from "./modelScene";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";
import { toggleScrollbar } from "../utils";

interface ModelViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  height: string | number | undefined;
  width: string | number | undefined;
  model: string;
}

function resizeScene([renderer, camera]: SceneHandle, parent: HTMLDivElement) {
  const { width, height } = parent.getBoundingClientRect();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

let isInit = true;

export default function ModelViewer({
  className,
  model,
  height,
  width,
  ...props
}: ModelViewerProps) {
  const parent = useRef<HTMLDivElement | null>(null);
  const renderer = useRef<SceneHandle | null>(null);
  const progress = useRef<HTMLProgressElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function handleFullscreen() {
    setIsFullscreen((prevState) => !prevState);
    toggleScrollbar();
  }

  useEffect(() => {
    const loadModel = async () => {
      if (parent.current && progress.current) {
        // Load three.js on demand so the island shell doesn't wait on it
        const { createScene } = await import("./modelScene");
        renderer.current = await createScene(
          model,
          parent.current,
          progress.current,
        );
      }
    };

    if (renderer.current === null) {
      loadModel();
    }

    // return () => {
    //   if (parent.current && canvas.current) {
    //     parent.current.removeChild(canvas.current);
    //     canvas.current = null;
    //   }
    // };
  });

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }

    if (parent.current && renderer.current) {
      if (isFullscreen) {
        parent.current.style.position = "fixed";
        parent.current.style.height = "100vh";
        parent.current.style.width = "100vw";
        parent.current.style.maxWidth = "100%";
        parent.current.style.top = "0";
        parent.current.style.left = "0";
        parent.current.style.backgroundColor = "#000";
        parent.current.style.display = "flex";
        parent.current.style.justifyContent = "center";
        parent.current.style.alignItems = "center";
        resizeScene(renderer.current, parent.current);
      } else {
        parent.current.removeAttribute("style");
        parent.current.style.height = String(height);
        parent.current.style.width = String(width);
        resizeScene(renderer.current, parent.current);
      }
    }
  }, [isFullscreen]);

  return (
    <div
      id="model-viewer"
      ref={parent}
      style={{ height, width }}
      className="group relative z-30 mx-auto max-w-sm md:max-w-full"
      {...props}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-full w-full -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center justify-center" //flex
      >
        <label htmlFor="model-viewer-progress">Initializing...</label>
        <progress id="model-viewer-progress" ref={progress} value={0} max={100}>
          0%
        </progress>
        <div>0%</div>
      </div>
      <a
        href={isFullscreen ? "#fullscreen" : "#model-viewer"}
        className="absolute bottom-0 right-0 cursor-pointer p-4 text-neutral-500 transition-transform group-hover:scale-110"
        onClick={handleFullscreen}
        title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? (
          <FontAwesomeIcon icon={faCompress} className="h-8 w-8" />
        ) : (
          <FontAwesomeIcon icon={faExpand} className="h-8 w-8" />
        )}
      </a>
    </div>
  );
}
