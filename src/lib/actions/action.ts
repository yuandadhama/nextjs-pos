"use server";

import { cookies } from "next/headers";

export const setCookieByKey = async (key: string, value: string) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value);
};

export const readCookie = async (key: string): Promise<string | null> => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(key);
  if (!cookieValue) return null;
  return cookieValue.value;
};

export const deleteCookie = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};
