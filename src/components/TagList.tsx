import { Badge } from "./ui/badge";

interface TagListProps {
  label: string;
  tags: string[];
}

export default function TagList({ label, tags }: TagListProps) {
  return (
    <div className="font-fade flex flex-row flex-wrap gap-2">
      <Badge variant="primary">{label}</Badge>
      <ul aria-label={label} className="contents">
        {tags.map((tag) => (
          <Badge key={tag} render={<li />}>
            {tag}
          </Badge>
        ))}
      </ul>
    </div>
  );
}
