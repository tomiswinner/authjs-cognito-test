import NextAuth from "next-auth";

import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {
  providers: [
    // https://next-auth.js.org/providers/cognito#example
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID ?? "",
      clientSecret: process.env.COGNITO_CLIENT_SECRET ?? "",
      issuer: process.env.COGNITO_ISSUER ?? "",
      authorization: {
        params: {
          // あー、auth.js って redirect  url でapi/auth/callback/cognitoを指定してあげることによって、
          // そこで auth.js が用意してくれるAPI がいい感じにセッションとかを処理してくれるんだね
          redirect_uri: "http://localhost:3000/api/auth/callback/cognito",
        },
      },
    }),
  ],
};

// ↓2つが参考になる
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#convention
// https://nextjs.org/docs/pages/building-your-application/routing/api-routes#http-methods
// // handler として定義して、req.method で分岐するか、あるいは、HTTP method 名に応じて export するかの2通りがあるっぽい

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
