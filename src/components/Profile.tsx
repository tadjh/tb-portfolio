import profilePictureSquare from "/img/jpg/tadjh_profile_square.jpg";
import profilePicturePortrait from "/img/jpg/tadjh_profile_4x5.jpg";

interface ProfileProps {
  aspectRatio?: "square" | "portrait";
}

export default function Profile({ aspectRatio = "square" }: ProfileProps) {
  if (aspectRatio === "portrait")
    return (
      <div className="relative min-h-[400px]">
        <span className="absolute top-0 left-0 right-0 bottom-0 box-border block overflow-hidden">
          <img
            src={profilePicturePortrait}
            alt="Tadjh Brooks Profile Picutre Portrait"
            // layout="fill"
            className="object-cover transition-transform hover:scale-110"
            // priority
          />
        </span>
      </div>
    );
  return (
    <img
      className="rounded-lg"
      src={profilePictureSquare}
      alt="Tadjh Brooks Profile Picture Square"
      width={384}
      height={384}
    />
  );
}
