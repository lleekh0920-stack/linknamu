type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-16 w-full items-center justify-center rounded-2xl border border-(--glass-border) bg-(--glass-bg) text-[15px] font-semibold shadow-(--glass-shadow) backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-(--glass-bg-hover) hover:shadow-(--glass-shadow-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
    </a>
  );
}
