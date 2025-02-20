"use server"

import { requiredUser } from "./utils/hooks"

export async function onboardUser() {
  const session = await requiredUser()



}
