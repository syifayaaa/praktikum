function hitung() {
    const PHI = 3.14;
    let jari = document.getElementById("bill").value;
    console.log("jari-jari : " + jari);
    let luas = PHI * jari * jari;
    let kll = 2.0 * PHI * jari;
    console.log("luas : " + luas);
    console.log("kll : " + kll);
    let hasil_nya = document.getElementById("hasil");
    hasil_nya.innerHTML = "Luas : " + luas + "\nkeliling : " + kll;
}