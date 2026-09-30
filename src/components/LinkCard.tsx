type LinkCardProps = {
  title: string;
  url: string;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, clickCount, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative flex h-16 w-full items-center justify-center rounded-2xl border border-(--glass-border) bg-(--glass-bg) px-16 text-[15px] font-semibold shadow-(--glass-shadow) backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-(--glass-bg-hover) hover:shadow-(--glass-shadow-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
      <span className="absolute right-5 text-xs font-medium tabular-nums text-muted">
        {clickCount.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
