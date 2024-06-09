import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";
import { toggleScrollbar } from "../utils";

interface ModelViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  height: string | number | undefined;
  width: string | number | undefined;
  model: string;
}

function fadeOut<T extends HTMLElement>(
  el: T,
  {
    duration = 2,
    displayNone = false,
    onUpdate = () => {},
    onDone = () => {},
  }: {
    duration?: number;
    displayNone?: boolean;
    onUpdate?: (el: T, percent: number) => void;
    onDone?: (el: T) => void;
  },
) {
  duration *= 1000;
  let start = 0;
  let elapsed = 0;
  function step(timestamp: number) {
    if (!start) {
      start = timestamp;
    }

    elapsed = timestamp - start;

    if (elapsed > duration) {
      el.style.opacity = "0";
      onDone(el);

      if (displayNone) {
        el.style.display = "none";
      }
      return;
    }

    const percent = (duration - elapsed) / duration;
    el.style.opacity = String(percent);
    onUpdate(el, percent);

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

async function createScene(
  model: string,
  parent: HTMLDivElement,
  progress: HTMLProgressElement,
): Promise<[THREE.WebGLRenderer, THREE.PerspectiveCamera] | null> {
  const { width, height } = parent.getBoundingClientRect();

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(width, height);
  parent.appendChild(renderer.domElement);
  const scene = new THREE.Scene();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const loader = new GLTFLoader();
  try {
    const gltf = await loader.loadAsync(model, (event) => {
      const amount = ((event.loaded / event.total) * 100) | 0;
      if (amount >= progress.value) {
        progress.value = amount;
        progress.textContent = `${amount}%`;

        if (progress.previousSibling) {
          if (amount < 20) {
            progress.previousSibling.textContent = "Loading Model...";
          } else if (amount < 30) {
            progress.previousSibling.textContent = "Gathering Assets...";
          } else if (amount < 40) {
            progress.previousSibling.textContent = "Building Meshes...";
          } else if (amount < 80) {
            progress.previousSibling.textContent = "Loading Textures...";
          } else if (amount < 100) {
            progress.previousSibling.textContent = "Constructing Scene...";
          } else {
            progress.previousSibling.textContent = "Enjoy!";
          }
        }

        if (progress.nextSibling) {
          progress.nextSibling.textContent = `${amount}%`;
        }

        // console.log(`[Model Viewer]: model is ${amount}% loaded`);
      }

      if (amount === 100 && progress.parentElement) {
        fadeOut(progress.parentElement, {
          displayNone: true,
          duration: 2,
          // onUpdate: (el, percent) => {
          //   el.style.backdropFilter = `blur(${Math.max((percent * 8) / 10, 0)}px)`;
          // },
          // onDone: (el) => {
          //   el.style.backdropFilter = "blur(0px)";
          // },
        });
      }
    });
    scene.add(gltf.scene);
    const camera = gltf.cameras[0] as THREE.PerspectiveCamera;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target = new THREE.Vector3(0, 1.6, 0);
    controls.autoRotate = true;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setAnimationLoop(animate);
    function animate() {
      controls.update();

      renderer.render(scene, camera);
    }
    return [renderer, camera];
  } catch (error) {
    console.log("An error happened");
    console.error(error);
    return null;
  }
}

function resizeScene(
  [renderer, camera]: [THREE.WebGLRenderer, THREE.PerspectiveCamera],
  parent: HTMLDivElement,
) {
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
  const renderer = useRef<
    [THREE.WebGLRenderer, THREE.PerspectiveCamera] | null
  >(null);
  const progress = useRef<HTMLProgressElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function handleFullscreen() {
    setIsFullscreen((prevState) => !prevState);
    toggleScrollbar();
  }

  useEffect(() => {
    const loadModel = async () => {
      if (parent.current && progress.current) {
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
  // TODO Fix progressbar not working on deployment
  return (
    <div
      ref={parent}
      style={{ height, width }}
      className="group relative z-50 mx-auto max-w-sm md:max-w-full"
      {...props}
    >
      {/* <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center justify-center">
        <label htmlFor="model-viewer-progress">Initializing...</label>
        <progress id="model-viewer-progress" ref={progress} value={0} max={100}>
          0%
        </progress>
        <div>0%</div>
      </div> */}
      <a
        href={isFullscreen ? "#fullscreen" : undefined}
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
