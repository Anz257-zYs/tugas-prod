array = JSON.parse(localStorage.getItem("menu")) || [];
function tambahdata() {
    
    let nama = document.getElementById("nama").value;
    let harga = Number(document.getElementById("harga").value);
    let jenis = document.getElementById("jenis").value;

    if(nama == "" || harga == "" || jenis == "" ) {
        alert("mohon lengkapi input terlebih dahulu!")
    } else {
       
    let hargaformatted = Number(harga);

    let data = {
        nama: nama,
        harga: hargaformatted,
        jenis: jenis,
    };
    array.push(data);

    localStorage.setItem("menu", JSON.stringify(array));
    tampilkanData();
}}

function hapusdata() {
    let comfirmdelete = confirm("Apakah Anda yakin ingin menghapus semua data?");

    if (!comfirmdelete) {
        return;
    } else {
        array = [];
        localStorage.removeItem("menu");
        document.getElementById("output").innerHTML = "";
    }
}

if (document.getElementById("output")) {
    tampilkanData();
}

function editdata() {
    let daftermenu = JSON.parse(localStorage.getItem("menu")) || [];

    let teledit = prompt("Masukkan nama makanan yang ingin diedit:");
    let item = daftermenu.find(item => item.nama === teledit);

    if (!item) {
        alert("Makanan tidak ditemukan");
        return;
    }

    let nama = prompt("Masukkan nama makanan baru:", item.nama);
    let harga = prompt("Masukkan harga baru:", item.harga);
    let jenis = prompt("Masukkan jenis baru: (makanan berat/makanan ringan)", item.jenis);

    if (nama && harga && jenis) {
        item.nama = nama;
        item.harga = parseInt(harga);
        item.jenis = jenis;

        localStorage.setItem("menu", JSON.stringify(daftermenu));

        tampilkanData();
    } else {
        alert("Semua prompt harus diisi");
        return;
    }
}   
    
function tampilkanData() {
    let output = "";
    let array =JSON.parse(localStorage.getItem("menu")) || [];
    array.forEach((item, index) => {
        let harga = item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

        output += `
        <div class="menu-item">
        <p>
        <h4>${item.nama}</h4>
        <p>${harga}</p>
        <p>${item.jenis}</p>
        </p></div>`
    });
    document.getElementById("output").innerHTML = output;
}

document.getElementById("warna").addEventListener("mouseover", function() {
    this.style.color = "#000000";
});

document.getElementById("warna").addEventListener("mouseout", function() {
    this.style.color = "#333";
});

let jam = document.getElementById('j');

        let pjam = () => {
            jam.textContent = new Date().toLocaleTimeString('id-ID', {
                hour:"2-digit",
                minute:"2-digit",
                second:"2-digit"
            });
        };

        pjam();
        setInterval(pjam, 1000);
