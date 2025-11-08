export default function formData(raw: any) {
    const formData = new FormData()
    Object.entries(raw).forEach(([key, val]) => {
        if (Array.isArray(val)) {
            val.forEach((item, index) => {
                Object.entries(item).forEach(([k, v]) => {
                    formData.append(`${key}[${index}][${k}]`, v as string | Blob);
                });
            });
        } else {
            formData.append(key, val ?? null as any);
        }
    });
    
    return formData
}