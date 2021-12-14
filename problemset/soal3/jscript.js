function hitungparkir() {
    let jammasuk = document.getElementById("masuk").value;
    let jamkeluar = document.getElementById("keluar").value;
    let selisih = jamkeluar - jammasuk;
    let biaya = 0;
    const tarifawal = 3000;
    const tarifperjam = 1000;
    if(selisih < 2){
        biaya = tarifawal;
    }else{
        let tambahjam = selisih -2;
        biaya = tarifawal + (tarifperjam * tambahjam)
    }
    let totalbiaya = document.getElementById("biaya");
    totalbiaya.innerHTML = "Biaya parkir" + biaya;
}