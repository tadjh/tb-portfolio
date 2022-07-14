import Copyright from "../Copyright";
import Theme from "../Theme";
import CallToAction from "../CallToAction";

interface FooterProps {
  simple?: boolean;
}

export default function Footer({ simple = false }: FooterProps) {
  return (
    <footer className="flex flex-col">
      {simple && <CallToAction />}
      <div className="flex justify-between">
        <Theme />
        <Copyright />
      </div>
    </footer>
  );
}
