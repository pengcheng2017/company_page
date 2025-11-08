
import axios from "./axios";

export default function useInterceptorsLocale(locale: string) {
    axios.defaults.headers.common["lang"] = locale
}