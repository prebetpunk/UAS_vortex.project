function validasiForm() {
  let nama = document.getElementById("nama").value;
  let jumlah = document.getElementById("jumlah").value;
  let kategori = document.getElementById("kategori").value;

  if (nama === "" || jumlah === "" || kategori === "") {
    alert("Semua data harus diisi!");
    return false;
  }
  alert("Transaksi berhasil disimpan");
  return true;
}

