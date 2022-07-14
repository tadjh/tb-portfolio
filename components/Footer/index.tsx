import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import CustomLink from "../../components/CustomLink";
import Socials from "../Socials";
import Image from "next/image";
import profilePicture from "../../public/img/tadjh_profile_4x5.jpg";
import Copyright from "../Copyright";
import { config } from "../../config";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="grid grid-cols-2 overflow-hidden rounded-lg bg-orange-tadjh text-white">
        <div className="flex flex-col gap-y-8 p-10">
          <div className="flex flex-1 flex-col gap-y-8">
            <h2>Hi I&apos;m Tadjh</h2>
            <h3>
              <CustomLink href="mailTo:info@tadjh.dev">
                <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8" />
                hello@tadjh.dev
              </CustomLink>
            </h3>
          </div>
          <p className="indent-12">{config.bio}</p>
          <div className="font-mono text-xl">
            <div>Tadjh Brooks</div>
            <div className="flex flex-row items-center gap-x-2">
              <FontAwesomeIcon icon={faLocationDot} className="h-6 w-6" />
              Sherman Oaks, CA
            </div>
          </div>
          <Socials />
        </div>
        <Image
          src={profilePicture}
          alt="Tadjh Brooks Profile Picutre"
          width={512}
          height={640}
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <Copyright />
    </footer>
  );
}
