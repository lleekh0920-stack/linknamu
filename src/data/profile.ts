// 보여 주기용 더미 데이터 — 실제 내용으로 교체 예정
export type Link = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  links: Link[];
};

export const profile: Profile = {
  name: "이강혁",
  bio: "풀스택 개발자 | AI로 아이디어를 실체화 하고 싶어요",
  imageUrl: "/profile.jpg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "blog", title: "Blog", url: "https://example.com" },
    { id: "instagram", title: "Instagram", url: "https://www.instagram.com" },
  ],
};
