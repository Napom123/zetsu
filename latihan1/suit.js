var tanya = true;

while (tanya) {
  // menangkap pilihan player
  var p = prompt('pilih : batu, gunting, kertas');

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var com = Math.random();
  console.log(com);

  if ((com < 0, 34)) {
    com = `batu`;
  } else if ((com >= 0, 34 && 0, 66)) {
    com = `gunting`;
  } else {
    com = `kertas`;
  }
  console.log(com);

  var hasil = '';
  // menentukan aturan
  //if (com == 'kertas') {
  // hasil = 'MENANG';
  //} else {
  //  hasil = 'KALAH';
  // } //if (com == 'gunting') {
  // hasil = 'MENANG';
  // } else {
  //  hasil = 'KALAH';
  // }  //if (com == 'batu') {
  //hasil = 'MENANG';
  //} else {
  //hasil = 'KALAH';
  //}
  if (p == com) {
    hasil = 'SERI';
  } else if (`${p == 'gunting'}`) {
    hasil = `${com == 'gunting'}` ? 'MENANG' : 'KALAH';
  } else if (`${p == 'batu'}`) {
    hasil = `${com == 'batu'}` ? 'MENANG' : 'KALAH';
  } else if (`${p == 'kertas'}`) {
    hasil = `${com == 'kertas'}` ? 'MENANG' : 'KALAH';
  } else {
    hasil = `memasukan jawaban yang salah`;
  }
  // tampilkan hasil
  alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + com + ' \n Maka hasilnya : kamu ' + hasil);
  tanya = confirm('lagi ?');
}
alert('Terimakasih sudah bermain dengan kami');
