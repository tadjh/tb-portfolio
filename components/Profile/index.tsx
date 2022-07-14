import Image from "next/image";
import profilePictureSquare from "../../public/img/tadjh_profile_square.jpg";
import profilePicturePortrait from "../../public/img/tadjh_profile_4x5.jpg";

interface ProfileProps {
  aspectRatio?: "square" | "portrait";
}

export default function Profile({ aspectRatio = "square" }: ProfileProps) {
  if (aspectRatio === "portrait")
    return (
      <div className="relative min-h-[400px]">
        <Image
          src={profilePicturePortrait}
          alt="Tadjh Brooks Profile Picutre Portrait"
          width={1600}
          height={2000}
          layout="fill"
          className="object-cover transition-transform hover:scale-110"
        />
      </div>
    );
  return (
    <Image
      className="rounded-lg"
      src={profilePictureSquare}
      alt="Tadjh Brooks Profile Picture Square"
      width={384}
      height={384}
    />
  );
}
