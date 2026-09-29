import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={128}
        height={128}
        priority
        className="size-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_12px_32px_-10px_rgb(150_85_45/0.45),0_2px_6px_rgb(150_85_45/0.12)] sm:size-32 dark:ring-white/15"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed break-keep text-muted">
        {bio}
      </p>
    </header>
  );
}
