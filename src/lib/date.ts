export default function FormatDate(date: string) {
    const dateFormat = new Date(date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
    return dateFormat.replace("pukul ", "- ")
}