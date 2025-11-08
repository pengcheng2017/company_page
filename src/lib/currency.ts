const rupiah = (number: any) => {
    if (typeof number !== "number") {
        return parseInt(number).toLocaleString("id-ID");
    }
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number).slice(0, -3);
}
export default rupiah