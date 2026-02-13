"use server";

import { headers } from "next/headers";
import { auth } from "../auth";
import { APIError } from "better-auth";

export const signUp = async (email: string, password: string, name: string) => {
  try {
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });
    return result;
  } catch (err) {
    if (err instanceof APIError) {
      console.log("error value: " + err.status);
      if (err.status == 400) {
        throw new Error("Invalid Email");
      }
      throw new Error(err.message);
    }
    throw new Error("Unknown Error");
  }
};

export const signIn = async (email: string, password: string) => {
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  return result;
};

export const signInSocial = async (provider: "google") => {
  try {
    const { url } = await auth.api.signInSocial({
      body: {
        provider,
        callbackURL: "/dashboard",
      },
    });
    if (url) {
      return url;
    }
  } catch (err) {
    console.error(err);
    throw new Error("Something went wrong");
  }
};

export const signOut = async () => {
  const result = await auth.api.signOut({
    headers: await headers(),
  });
  return result;
};

export const getSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
};
