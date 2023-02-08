import NextAuth from "next-auth";
import { AuthenticationAPI } from "../../../services/AuthenticationAPI";
import CredentialsProvider from "next-auth/providers/credentials";
// import Provider from "next-auth/providers";

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
          return { email: credentials.email, name: res.token };
        }

        throw new Error("Incorrect Credentials");
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
