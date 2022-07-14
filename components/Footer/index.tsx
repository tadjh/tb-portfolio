import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import CustomLink from "../../components/CustomLink";
import Socials from "../Socials";
import Copyright from "../Copyright";
import { config } from "../../config";
import Theme from "../Theme";
import Profile from "../Profile";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="relative grid grid-cols-1 overflow-hidden rounded-lg bg-orange-tadjh text-white/90 md:grid-cols-2">
        <div className="flex flex-col gap-y-8 p-6 md:p-10">
          <div className="flex flex-1 flex-col gap-y-8">
            <h2 className="text-inherit">Hi I&apos;m Tadjh</h2>
            <h3 className="text-inherit">
              <CustomLink href="mailTo:info@tadjh.dev">
                <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8" />
                hello@tadjh.dev
              </CustomLink>
            </h3>
          </div>
          <p className="indent-12 text-inherit">{config.bio}</p>
          <div className="font-mono text-xl">
            <div>Tadjh Brooks</div>
            <div className="flex flex-row items-center gap-x-2">
              <FontAwesomeIcon icon={faLocationDot} className="h-6 w-6" />
              Sherman Oaks, CA
            </div>
          </div>
          <Socials />
        </div>
        <Profile aspectRatio="portrait" />
      </div>
      <div className="flex justify-between">
        <Theme />
        <Copyright />
      </div>
    </footer>
  );
}
