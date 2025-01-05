"use client";
import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log(session, status);
  if (session && session.user) {
    return (
      <>
        {session.user.email} としてサインイン中 <br />
        <button onClick={() => signOut()}>サインアウト</button>
      </>
    );
  }
  return (
    <>
      サインインしてません
      <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Home;
