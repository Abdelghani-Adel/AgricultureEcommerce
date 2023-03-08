import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthenticationAPI } from "../../../services/AuthenticationAPI";

const authApi = new AuthenticationAPI();

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials, req) {
        const reqBody = {
          email: credentials.email,
          password: credentials.password,
          rememberMe: true,
        };

        // DB lookup
        const res = await authApi.Login(reqBody);

        if (res.token) {
          const expiration = new Date();
          expiration.setMinutes(expiration.getMinutes() + 1);
          return { ...res, expiration: expiration };
        }

        // Login failed
        return null;
      },
      secret: "8F8D1546C2C1A23FECE7FCEE13E542DCA4F4B6613A072DE63B7F7F9C1F13263F",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      let now = new Date();
      let exp = new Date(token.expiration);
      return { ...session, ...token, test1: now, test2: exp };
      // if (now.getTime() <= exp.getTime()) {
      // }
      // return {};
    },

    async redirect({ url, baseUrl }) {
      return `${process.env.NEXT_PUBLIC_CURRENT_HOST}`;
    },
  },
  secret: "mvOHAEhOWjGtUo7tS6VuAUByEWnTh67AzdrP1HRvNOA=",
  jwt: {
    secret: "mvOHAEhOWjGtUo7tS6VuAUByEWnTh67AzdrP1HRvNOA=",
  },
  session: {
    strategy: "jwt",
    // maxAge: 60,
  },
  pages: {
    signIn: "/login",
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session`,
      options: {
        httpOnly: false,
        sameSite: "lax",
        path: "/",
        secure: false,
      },
    },
  },
};

export default NextAuth(authOptions);
