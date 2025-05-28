import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"

// 사용자가 로그인했는지 확인하고, 로그인했으면 사용자 정보를 가져옴
export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}
