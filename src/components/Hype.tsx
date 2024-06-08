import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import Counter from "./Counter";
import { motion } from "framer-motion";
import { composeKey } from "../utils";

interface HypeProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { icon?: IconDefinition; value: number; label: string }[];
}

export default function Hype({ items }: HypeProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 1 } },
      }}
      className="mx-auto flex flex-wrap justify-center gap-4 md:gap-8"
      style={{
        gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, minmax(0, 1fr))`,
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={composeKey("counter", index)}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex items-center justify-center gap-x-2 rounded-lg bg-orange-tadjh px-3 py-1.5 font-mono text-lg text-white/90 md:gap-x-3 md:text-2xl"
        >
          {item.icon && (
            <FontAwesomeIcon
              icon={item.icon}
              className="h-5 w-5 md:h-8 md:w-8"
            />
          )}
          <Counter value={item.value} delay={index} />
          {item.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
