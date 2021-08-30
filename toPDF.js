

function toPDF() {
    const element = document.getElementById("body1")

    html2pdf()
    .from(element)
    .save("J.ANDRADE_CV.pdf")
}