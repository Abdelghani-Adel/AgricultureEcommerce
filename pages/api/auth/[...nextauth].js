import NextAuth from "next-auth";
import { AuthenticationAPI } from "../../../services/AuthenticationAPI";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

const authApi = new AuthenticationAPI();

export const authOptions = {
  session: {
    strategy: "jwt",
    jwt: true,
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        const reqBody = {
          email: credentials.email,
          password: credentials.password,
          rememberMe: true,
        };
        const res = await authApi.Login(reqBody);
        if (res.token) {
          return { ...res };
        }

        // throw new Error("Incorrect Credentials");
        return null;
      },
      secret: "8F8D1546C2C1A23FECE7FCEE13E542DCA4F4B6613A072DE63B7F7F9C1F13263F",
    }),
  ],
  secret: "mvOHAEhOWjGtUo7tS6VuAUByEWnTh67AzdrP1HRvNOA=",
  callbacks: {
    async jwt({ token, user, account }) {
      // token.exp = 1676200560000;
      // token.expires = 1676200560000;
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      session.accessToken = token.accessToken;
      return { ...session, ...token };
      // return { ...token };
    },

    async redirect({ url, baseUrl }) {
      return `${process.env.NEXT_PUBLIC_CURRENT_HOST}`;
    },
  },
};

export default NextAuth(authOptions);
