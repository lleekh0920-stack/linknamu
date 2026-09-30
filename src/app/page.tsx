import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex flex-1 justify-center px-6 py-16 sm:py-24">
      <div className="flex w-full max-w-sm flex-col gap-12">
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <LinkList links={profile.links} />
      </div>
    </main>
  );
}
