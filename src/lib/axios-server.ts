import _axios from "axios";

const axiosServer = _axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false
})

axiosServer.interceptors.request.use(async (config) => {
    // const session = await getSession()
    // const user = session?.user as any

    // user?.access_token && (config.headers["Authorization"] = `${user?.token_type} ${user?.access_token}`)

    return config
}, err => {
    return Promise.reject(err)
})

axiosServer.interceptors.response.use((response) => {
    return response
}, async err => {

    // const session = await getSession()
    // const user = session?.user as any

    if (err.response?.status == 401) {
        // const response = await getRefreshToken(user?.access_token) as any
        // console.log("Update TOKEN", response?.access_token);
        // const { update } = useSession()


        // update({ access_token: response?.access_token })
        // return axios(err.config)
    }
    return Promise.reject(err);
})

export default axiosServer