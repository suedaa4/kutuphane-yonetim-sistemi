let kitap1 = {
    isim: "Simyacı",
    yazar: "Paulo Coelho",
    sayfaSayisi: 184,
    mevcutMu: true,
}

let kitap2 = {
    isim: "Nutuk",
    yazar: "Mustafa Kemal Atatürk",
    sayfaSayisi: 543,
    mevcutMu: false,
}

function kitapBilgisiGoster(kitapNesnesi) {
    console.log(kitapNesnesi.isim + " - " + kitapNesnesi.yazar + " - " + " (Sayfa: " + kitapNesnesi.sayfaSayisi + ")");

}

function kitapOduncAl(kitapNesnesi) {
    if(kitapNesnesi.mevcutMu == true) {
     kitapNesnesi.mevcutMu = false; 
        console.log(kitapNesnesi.isim + " kitabını başarıyla ödünç aldınız!");  
    } else {
        console.log(kitapNesnesi.isim + " Üzgünüm, kitap şu an başkasında!");
    }  
}

function kitapIadeEt(kitapNesnesi) {
    mevcutMu = true;
    console.log(kitapNesnesi.isim + " kütüphaneye iade edildi. Teşekkürler!");
}
console.log("--- Kütüphane Test Başlıyor ---");
kitapBilgisiGoster(kitap1);

kitapOduncAl(kitap1); 
kitapOduncAl(kitap1); 

kitapIadeEt(kitap1);  
kitapOduncAl(kitap1);