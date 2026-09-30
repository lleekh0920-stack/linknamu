import { clicksCollection } from "@/lib/mongodb";
import { profile } from "@/data/profile";

// 모든 링크의 클릭 수를 { [링크 id]: 횟수 } 형태로 한 번에 반환
export async function GET() {
  const ids = profile.links.map((link) => link.id);
  const docs = await clicksCollection()
    .find({ _id: { $in: ids } })
    .toArray();

  const counts: Record<string, number> = Object.fromEntries(ids.map((id) => [id, 0]));
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return Response.json(counts);
}
