
// import { getRoleUser, loginGoogle, loginUser } from "@/store/slices/userSlice";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleCredential from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login",
        error: "/auth/login",
        newUser: "/auth/complete/phone"
    },
    providers: [
        Credentials({
            credentials: {
                email: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any): Promise<any | null> {
                try {
                    const user = {} as any
                    return {
                        ...user,
                        access_token: user.access_token,
                    }
                } catch (error: any) {
                    throw Error(error?.response?.data?.message || error.message);
                }
            }
        }),
        GoogleCredential({
            clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
            async profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                }
            },
        })
    ],
    callbacks: {
        jwt: async ({ token, user, trigger, session }: any) => {
            user && (token.user = user)
            if (trigger === 'update') {
                if (session.new_user !== undefined) {
                    token.user.new_user = session.new_user
                }
            }
            return token
        },
        session: async ({ session, token }: any) => {
            session.user = token.user
            return session
        },
        signIn: async ({ user, account }: any) => {
            if (account.provider == "google") {
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar: user.image,
                    access_token: account.access_token
                }
                return true
            } else {
                return false
            }
        },
        async redirect({ baseUrl, url }) {
            return baseUrl
        },
    },

    session: {
        strategy: "jwt",
        maxAge: parseInt(process.env.NEXTAUTH_MAX_AGE as string)
    }
}