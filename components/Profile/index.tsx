import Image from "next/image";
import profilePicture from "../../public/img/tadjh_profile_square.jpg";

export default function Profile() {
  return (
    <Image
      className="rounded-lg"
      src={profilePicture}
      alt="Tadjh Brooks Profile Picture"
      width={384}
      height={384}
      quality={100}
    />
  );
}
