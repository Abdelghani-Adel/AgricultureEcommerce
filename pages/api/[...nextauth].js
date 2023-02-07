import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    CredentialProvider({
      name: "credentials",
      credential: {
        username: {
          label: "email",
          type: "email",
        },
        password: { label: "password", type: "password" },
        authorize: (credential) => {},
      },
    }),
  ],
  callbacks: {
    jwt: async () => {},
    session: () => {},
  },
  secret: "test",
};

export default NextAuth(authOptions);
