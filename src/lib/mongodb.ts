import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다 (.env.local 확인)");
}

// 개발 중 HMR로 모듈이 다시 로드돼도 연결을 하나만 쓰도록 global에 보관
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClient?: MongoClient;
};

const client = globalForMongo._mongoClient ?? new MongoClient(uri);
if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClient = client;
}

export type ClickDoc = {
  _id: string; // 링크 id
  count: number;
};

export function clicksCollection() {
  return client.db().collection<ClickDoc>("clicks");
}
