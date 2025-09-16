import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/app/models/User";
import { connectDB } from "@/app/lib/DB";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connectDB();
      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
        });
      }
      return true;
    },

    async session({ session }) {
      await connectDB();
      const userInDb = await User.findOne({ email: session.user.email });

      if (userInDb) {
        session.user.id = userInDb._id.toString();
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// NextAuth handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
