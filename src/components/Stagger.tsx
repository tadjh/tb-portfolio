import {
  motion,
  type ForwardRefComponent,
  type HTMLMotionProps,
} from "framer-motion";
import { composeKey } from "../utils";

interface StaggerProps<T>
  extends ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">> {
  items: T[];
}

export default function Stagger<T>({ items, ...props }: StaggerProps<T>) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 1 } },
      }}
      {...props}
    >
      {/* {items.map((item, index) => (
        <motion.div
          key={composeKey("stagger", index)}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
        </motion.div>
      ))} */}
    </motion.div>
  );
}
