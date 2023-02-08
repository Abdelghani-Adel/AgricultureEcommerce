import NextAuth from "next-auth";
import { AuthenticationAPI } from "../../../services/AuthenticationAPI";
import CredentialsProvider from "next-auth/providers/credentials";

const authApi = new AuthenticationAPI();

export const authOptions = {
  session: {
    strategy: "jwt",
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
          return { user: { ...res } };
        }

        throw new Error("Incorrect Credentials");
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // the user present here gets the same data as received from DB call  made above -> fetchUserInfo(credentials.opt)

      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      // user param present in the session(function) does not recive all the data from DB call -> fetchUserInfo(credentials.opt)

      return token;
    },
  },
};

export default NextAuth(authOptions);
