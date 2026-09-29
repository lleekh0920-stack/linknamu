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
        width={144}
        height={144}
        priority
        className="size-36 rounded-full border border-zinc-200 object-cover dark:border-zinc-700"
      />
      <h1 className="mt-5 text-xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
