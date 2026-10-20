import "../config/fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbsProps {
  current: string;
  parent?: { slug: string; title: string };
}

export default function Breadcrumbs({ current, parent }: BreadcrumbsProps) {
  return (
    <Breadcrumb className="font-fade mr-auto rounded-lg bg-neutral-200 px-3 py-0.5 shadow-2xl transition-colors hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" title="Return Home" data-astro-prefetch>
            <FontAwesomeIcon
              icon={faHome}
              className="h-4 w-4 transition-transform hover:scale-110"
            />
            <span className="sr-only">Home</span>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {parent && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${parent.slug}`}
                title={`Return to ${parent.title}`}
                data-astro-prefetch
              >
                {parent.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{current}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
