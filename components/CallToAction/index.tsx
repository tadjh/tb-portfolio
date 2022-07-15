import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "../../config";
import Profile from "../Profile";
import Socials from "../Socials";

export default function CallToAction() {
  return (
    <div className="relative grid grid-cols-1 overflow-hidden rounded-lg bg-orange-tadjh text-white/90 md:grid-cols-2">
      <div className="flex flex-col gap-y-8 p-6 md:p-10">
        <div className="flex flex-1 flex-col gap-y-8">
          <h2>{`Hi I'm ${config.siteTitle.split(" ")[0]}`}</h2>
          <h3 className="group">
            <a
              href="mailTo:hello@tadjh.dev"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-x-2 hover:cursor-pointer hover:underline"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-8 w-8 transition-transform group-hover:scale-110"
              />
              {config.email}
            </a>
          </h3>
        </div>
        <p className="indent-12">{config.bio}</p>
        <div className="font-mono text-xl">
          <div>{config.siteTitle}</div>
          <div className="group flex flex-row items-center gap-x-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="h-6 w-6 transition-transform group-hover:scale-110"
            />
            {config.location}
          </div>
        </div>
        <Socials />
      </div>
      <Profile aspectRatio="portrait" />
    </div>
  );
}
