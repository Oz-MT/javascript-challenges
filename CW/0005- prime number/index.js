//? Girilen sayının asal sayı olup olmadığını söyleyen bir program yazın.

const sayi = parseInt(prompt("Lütfen pozitif bir sayı giriniz: "));
let asal = true;

if (sayi >= 2) {
  for (i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      asal = false;
      break;
    }
  }
} else {
  asal = false;
}

let sonuc = asal ? `${sayi} sayısı asaldır.` : `${sayi} sayısı asal değildir.`;
console.log(sonuc);
