import { auth } from "@clerk/nextjs/server";

export async function getUserIdServer() {
  const { userId } = await auth();
  return userId ?? null;
}
