import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";

interface ModelViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  height: string | number | undefined;
  width: string | number | undefined;
  model: string;
}
// TODO Add fullscreen button
export default function ModelViewer({
  className,
  model,
  height,
  width,
  ...props
}: ModelViewerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createScene = async (ref: HTMLDivElement) => {
      const { width, height } = ref.getBoundingClientRect();

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      ref.appendChild(renderer.domElement);

      const scene = new THREE.Scene();

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      const loader = new GLTFLoader();
      try {
        const gltf = await loader.loadAsync(model, function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        });
        scene.add(gltf.scene);
        console.log(gltf.scene);
        const camera = gltf.cameras[0] as THREE.PerspectiveCamera;
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target = new THREE.Vector3(0, 1.6, 0);
        controls.autoRotate = true;
        console.log(width, height);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setAnimationLoop(animate);
        function animate() {
          controls.update();

          renderer.render(scene, camera);
        }
      } catch (error) {
        console.log("An error happened");
        console.error(error);
      }
    };

    if (ref.current) {
      createScene(ref.current);
    }

    return () => {
      if (ref.current) {
        while (ref.current.firstChild) {
          ref.current.removeChild(ref.current.firstChild);
        }
      }
    };
  });

  return (
    <div
      ref={ref}
      style={{ height, width }}
      className="mx-auto max-w-full overflow-hidden rounded-lg shadow-2xl"
      {...props}
    ></div>
  );
}
