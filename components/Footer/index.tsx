import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CustomLink from "../../components/CustomLink";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between gap-x-4 font-mono">
      <div>
        <CustomLink href="https://github.com/tadjh">
          <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
          github.com/tadjh
        </CustomLink>
        <CustomLink href="mailTo:info@tadjh.dev">
          <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
          info@tadjh.dev
        </CustomLink>
      </div>
      <span className="flex flex-row items-end gap-x-2">
        &copy; {new Date().getFullYear()}{" "}
        <CustomLink
          href="https://tadjh.dev"
          className="hover:cursor-pointer hover:text-blue-600 hover:underline"
        >
          tadjh.dev
        </CustomLink>
      </span>
    </footer>
  );
}
