import "../config/fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface OffCanvasMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function OffCanvasMenu({ children }: OffCanvasMenuProps) {
  return (
    <div>
      <Sheet>
        <SheetTrigger
          aria-label="Open menu"
          className="cursor-pointer text-black/90 transition hover:scale-110 hover:text-orange-tadjh active:-rotate-90 dark:text-white/90"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 md:h-8 md:w-8" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="group w-full items-center gap-y-8 border-none bg-linear-to-br from-orange-500 to-orange-tadjhDark p-10 text-white sm:max-w-none dark:bg-transparent"
          closeClassName="top-6 right-6 opacity-90 md:top-8 md:right-8 [&_svg]:h-8 [&_svg]:w-8"
        >
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation and social links
          </SheetDescription>
          <nav aria-label="Main" className="contents">
            {children}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
