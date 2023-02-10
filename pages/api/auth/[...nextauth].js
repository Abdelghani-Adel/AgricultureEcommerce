import NextAuth from "next-auth";
import { AuthenticationAPI } from "../../../services/AuthenticationAPI";
import CredentialsProvider from "next-auth/providers/credentials";

const authApi = new AuthenticationAPI();

export const authOptions = {
  session: {
    strategy: "jwt",
    jwt: true,
    maxAge: 60 * 60,
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
      secret: "8F8D1546C2C1A23FECE7FCEE13E542DCA4F4B6613A072DE63B7F7F9C1F13263F",
    }),
  ],
  secret: "mvOHAEhOWjGtUo7tS6VuAUByEWnTh67AzdrP1HRvNOA=",
  callbacks: {
    async session({ session, user, token }) {
      return { ...token };
    },
    async jwt({ token, user }) {
      const object = {
        ...token,
        ...user,
      };
      return object;
      // return { ...token, ...user };
    },
    async redirect({ url, baseUrl }) {
      return "http://localhost:8080";
    },
  },
};

export default NextAuth(authOptions);
