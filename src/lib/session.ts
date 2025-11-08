import { getServerSession } from "next-auth"
import { authOptions } from "./auth"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

const useSession = async (state?: string) => {
    const data = await getServerSession(authOptions) as any
    const heads = headers()
    const path = heads.get('x-url')
    const newUser = data?.user.access_token && data?.user?.new_user

    if (state == "transaction") {
        if (!data?.user.access_token) {
            return redirect("/auth/login")
        }
    } else if (state == "authenticated") {
        if (data?.user.access_token && !data?.user?.new_user) {
            return redirect("/");
        }
    } else if (state == "base") {
        if (newUser && !path?.includes("/auth")) {
            return redirect("/auth/complete/phone");
        }
    }
    
    return {
        ...data,
        newUser
    }
}

export default useSession