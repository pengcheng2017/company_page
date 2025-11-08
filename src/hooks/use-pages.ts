import { API_URL } from "@/constant/apiUrl";
import axiosServer from "@/lib/axios-server";
import { MetadataTypes } from "@/types/metadataTypes.interface";
import { headers } from "next/headers";


export default async function usePages({ locale }: { locale?: string }) {
    const heads = headers()
    const path = heads.get('x-url')

    const raw = {
        slug: path,
        type: "landing",
        locale: locale || "en"
    }

    try {
        const { data } = await axiosServer.get(API_URL.pages, { params: raw })
        return data as MetadataTypes
    } catch (error: any) {
        console.log(error?.response?.data);
        return null
    }
}