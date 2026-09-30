import { MongoClient } from "mongodb";

// 개발 중 HMR로 모듈이 다시 로드돼도 연결을 하나만 쓰도록 global에 보관
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClient?: MongoClient;
};

// 빌드 중에는 환경 변수가 없을 수 있으므로, 실제로 DB를 쓸 때 처음 연결을 만든다
function getClient() {
  if (globalForMongo._mongoClient) {
    return globalForMongo._mongoClient;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다 (.env.local 확인)");
  }

  const client = new MongoClient(uri);
  globalForMongo._mongoClient = client;
  return client;
}

export type ClickDoc = {
  _id: string; // 링크 id
  count: number;
};

export function clicksCollection() {
  return getClient().db().collection<ClickDoc>("clicks");
}
