var tanya = true;
while (tanya) {
  var angka = prompt('pilih,1-10');
  var hasil = ``;
  var com = Math.floor(Math.random() * 10);
  console.log(com);

  if (angka == com) {
    hasil = `tebakan anda benar`;
  } else if (angka <= com) {
    hasil = `tebakan anda salah`;
  } else if (angka >= com) {
    hasil = `tebakan anda salah`;
  } else {
    hasil = `Kamu tidak memasukan angka`;
  }

  alert('Kamu memilih : ' + angka + ' dan komputer memilih : ' + com + ' \n ' + hasil);

  tanya = confirm('apakah anda ingin menebak lagi?');
}

alert('terimakasih telah bermain ');
