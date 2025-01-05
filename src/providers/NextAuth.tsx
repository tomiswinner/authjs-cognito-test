"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

// SessionProviderはuseContextを含むのでClient Componentsにしなければいけないことに注意です．
const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
