"use client";

import { User } from "better-auth";
import { createContext, useContext } from "react";

export const AuthContext = createContext<User | undefined>(undefined);

export function useAuthContext() {
  const user = useContext(AuthContext);

  if (user === undefined) {
    throw new Error("useAuthContext must be used with a AuthContext");
  }

  return user;
}

type authProviderProps = {
  children: React.ReactNode;
  value: User | undefined;
};

export const AuthProvider = ({ children, value }: authProviderProps) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
