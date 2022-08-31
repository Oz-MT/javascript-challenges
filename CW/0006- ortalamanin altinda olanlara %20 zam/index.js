//? ODEV: maaslar dizisi icin maasi ortalamanin altinda olanlara %20 zam yaparak zamli maaslari ayrı bir diziye atalım.

const maaslar = [3000, 5000, 4000, 6000, 6500];

let ortMaas;
let toplamMaas = 0;
maaslar.forEach((maas, indis, arr) => {
  toplamMaas += maas;
  ortMaas = toplamMaas / arr.length;
});

// console.log(toplamMaas);
// console.log(ortMaas);

const zamliMaaslar = maaslar
  .filter((maas) => maas < ortMaas)
  .map((maas) => maas * 1.2);
console.log(zamliMaaslar);
