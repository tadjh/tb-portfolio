import { useMemo } from "react";
import slugify from "slugify";
import { composeKey } from "../utils";
import Tag from "./Tag";

interface TagListProps {
  label: string;
  tags: string[];
}

export default function TagList({ label, tags }: TagListProps) {
  const slug = useMemo(() => slugify(label), [label]);
  return (
    <div className="flex flex-row flex-wrap gap-2">
      <Tag primary>{label}</Tag>
      {tags.map((tag, index) => (
        <Tag key={composeKey(slug, index)}>{tag}</Tag>
      ))}
    </div>
  );
}
