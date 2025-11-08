import _axios from "axios";
import { getSession, signOut } from "next-auth/react";

const axios = _axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false,
})

axios.interceptors.request.use(async (config) => {
    const session = await getSession()
    const user = session?.user as any
    
    user?.access_token && (config.headers["Authorization"] = `Bearer ${user?.access_token}`)

    return config
}, err => {
    return Promise.reject(err)
})

axios.interceptors.response.use((response) => {
    return response
}, async err => {

    const session = await getSession()
    const user = session?.user as any

    if (err.response?.status == 401 && user?.access_token) {
        // const response = await getRefreshToken(user?.access_token) as any
        // console.log("Update TOKEN", response?.access_token);
        // const { update } = useSession()


        // update({ access_token: response?.access_token })
        // return axios(err.config)
        return signOut().then(() => {
            window.location.href = "/api/game"
        })
    }
    return Promise.reject(err);
})

export default axios