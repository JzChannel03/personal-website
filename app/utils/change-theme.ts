"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const getTheme = async () => {
  return cookies().get("theme")?.value ?? "light";
};

export const changeTheme = async () => {
  console.log("changeTheme");
  if (cookies().get("theme")?.value === "dark") {
    cookies().set("theme", "light", { path: "/" });
  } else {
    cookies().set("theme", "dark", { path: "/" });
  }
  revalidatePath("/");
};
