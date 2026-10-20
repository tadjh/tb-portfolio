import {
  ACESFilmicToneMapping,
  type PerspectiveCamera,
  SRGBColorSpace,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export type SceneHandle = [WebGLRenderer, PerspectiveCamera];

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

export async function createScene(
  model: string,
  parent: HTMLDivElement,
  progress: HTMLProgressElement,
): Promise<SceneHandle | null> {
  const { width, height } = parent.getBoundingClientRect();

  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(width, height);
  parent.appendChild(renderer.domElement);
  const scene = new Scene();

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.outputColorSpace = SRGBColorSpace;

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
    const camera = gltf.cameras[0] as PerspectiveCamera;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target = new Vector3(0, 1.6, 0);
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
