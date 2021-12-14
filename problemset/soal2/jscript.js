function hitung() {
    const rupiah = 14.650;
    let dollar = document.getElementById("nilai").value;
    console.log("RP :" + dollar);
    let RP = rupiah * dollar;
    console.log("RP " + RP);
    let hasil_nya = document.getElementById("hasil");
    hasil_nya.innerHTML = "RP : " + RP;
}