"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/data/profile";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 모두 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => {
        // 받는 사이에 클릭한 것이 있으면 큰 값을 유지
        setCounts((prev) => {
          const next = { ...data };
          for (const [id, count] of Object.entries(prev)) {
            next[id] = Math.max(next[id] ?? 0, count);
          }
          return next;
        });
      })
      .catch((error) => console.error("클릭 수를 불러오지 못했습니다", error));
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 반영하고, 서버에는 새 탭으로 이동해도 요청이 끝나도록 keepalive로 전송
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${encodeURIComponent(id)}`, { method: "POST", keepalive: true }).catch(
      (error) => console.error("클릭 수를 저장하지 못했습니다", error),
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            clickCount={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
