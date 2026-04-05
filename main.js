array = JSON.parse(localStorage.getItem("menu")) || [];

        let totalkeseluruhan = array.reduce((total, item) => total + item.harga, 0);
        let totalformatted = totalkeseluruhan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
        let totalElement = document.getElementById("total");
        if (totalElement) {
            totalElement.textContent = `Total Keseluruhan: ${totalformatted}`;
        }

function tampilkanDatapelanggan() {
    let output = "";
    let el = document.getElementById("output2");
    
    if (!el) return;

    array.forEach((item) => {
        let hargaFormatted = item.harga.toLocaleString('id-ID', { 
            style: 'currency', currency: 'IDR', minimumFractionDigits: 0 
        });

        output += `
            <div class="menu-item">
                <h4>${item.nama}</h4>
                <p>${hargaFormatted}</p>
                <p><em>${item.jenis}</em></p>
            </div>`;
    });
    
    el.innerHTML = output;
}

tampilkanDatapelanggan();

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

    console.log(array);
    localStorage.setItem("menu", JSON.stringify(array));
    simpan();
}}

function hapusdata(index) {
    let comfirmdelete = confirm("Apakah Anda yakin ingin menghapus data ini?");

    if (!comfirmdelete) {
        return;
    } else {
        array.splice(index, 1);
        localStorage.setItem("menu", JSON.stringify(array));
        total();
        simpan();
    }
}

if (document.getElementById("output")) {
    simpan();
}

function editdata(index) {
    let item = array[index];

    let namabaru = prompt("Masukkan nama makanan baru:", item.nama);
    let hargabaru = prompt("Masukkan harga baru:", item.harga);
    let jenisbaru = prompt("Masukkan jenis baru: (makanan berat/makanan ringan)", item.jenis);

    if (namabaru && hargabaru && jenisbaru) {
        array[index] = {
            nama: namabaru,
            harga: Number(hargabaru),
            jenis: jenisbaru
        };
        

        localStorage.setItem("menu", JSON.stringify(array));
        simpan();
        total();
    } else {
        alert("Semua prompt harus diisi");
        return;
    }
}   
    
function tampilkanData() {
    let output = "";
    let output2 = "";
    
    array.forEach((item, index) => {
        let harga = item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

        let kontenbase = `
        <h4>${item.nama}</h4>
        <p>${harga}</p>
        <p><em>${item.jenis}</em></p>
        `

        output += `
        <div class="menu-item">
        ${kontenbase}
        <button class="delete-button" onclick="hapusdata(${index})">Hapus</button>
        <button class="edit-button" onclick="editdata(${index})">Edit</button>
        </div>`;

        output2 += `
        <div class="menu-item">
        ${kontenbase}
        </div>`;
    });

    let outputtombol = document.getElementById("output");
    if (outputtombol) {
        outputtombol.innerHTML = output;
    }
    let outputkos = document.getElementById("output2");
    if (outputkos) {
        outputkos.innerHTML = output2;
    }
}

function total() {
    let totalkeseluruhan = array.reduce((total, item) => total + item.harga, 0);
        let totalformatted = totalkeseluruhan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
        let totalElement = document.getElementById("total");
        if (totalElement) {
            totalElement.textContent = `Total Keseluruhan: ${totalformatted}`;
        }
}

function simpan() {
    localStorage.setItem("menu", JSON.stringify(array));
    tampilkanData();
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
