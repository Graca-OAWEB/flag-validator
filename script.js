document.getElementById("card-number").addEventListener("input", function () {
    let cardNumber = this.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    this.value = cardNumber.replace(/(\d{4})/g, "$1 ").trim(); // Formata com espaços

    let brand = detectCardBrand(cardNumber);
    document.getElementById("card-brand").innerText = brand ? "Bandeira: " + brand : "";
});

function detectCardBrand(number) {
    const brands = {
        "Visa": /^4/,
        "Mastercard": /^5[1-5]/,
        "American Express": /^3[47]/,
        "Diners Club": /^3[068]/,
        "Discover": /^6011/,
        "JCB": /^35/,
        "Hipercard": /^6062/,
        "Elo": /^(50|60|65|62)/,
        "Voyager": /^8699/,
        "EnRoute": /^(2014|2149)/
    };

    for (let brand in brands) {
        if (brands[brand].test(number)) {
            return brand;
        }
    }
    return "";
}
