class jenisHewan {
    constructor (namaHewan,harga,kualitas,jenisMasakan) {
        this.hewan1 = namaHewan
        this.hewan2 = harga
        this.hewan3 = kualitas
        this.hewan4 = jenisMasakan
    }
    hargaHewan () {
        return 'harga ' + this.hewan1 + ' adalah ' + this.hewan2
    }
    rasa (daging) {
        return 'rasa daging sapi sangat ' + daging
    }
    masakan () {
        return this.hewan4 + ' adalah masakan daging sapi yg sangat populer di dunia'
    }
    kualitas() {
        return 'kualitas daging ' + this.hewan1 + this.hewan3
    }
}

let hewan = new jenisHewan ('sapi',5000000,'sangat empuk','rendang')
console.log(hewan.hewan1);
console.log(hewan.hewan2);
console.log(hewan.hewan3);
console.log(hewan.hewan4);

console.log(hewan.hargaHewan());
console.log(hewan.rasa('enak'));
console.log(hewan.masakan());
console.log(hewan.kualitas());


function nm() {
    document.getElementById('keberhasilan').innerHTML = '<h2>Berhasil</h2>'
}
const btLogin = document.getElementById('btn-click');
btLogin.addEventListener('dblclick', function() {
    alert ('Tombol di click 2 kali')
})


const btn = document.querySelector('#rpl')
rpl.style.color = 'red'

function o() {
    document.getElementById('rpl').innerHTML = '<h2>X RPL</h2>'
}
const btnOut = document.getElementById('rpl')
btnOut.addEventListener('mouseout',function(event) {
    event.target.style.color = 'green'
})

let nama = document.getElementById('nama')
let kelas = document.getElementById('kelas')
let bntClick = document.getElementById('btn-click')
let bntIn= document.getElementById('btn-in')
let judul= document.getElementById('halo')
let btnRemove= document.getElementById('Remove')
let berhasil= document.getElementById('keberhasilan')
let kejuruan= document.getElementById('rpl')

function p() {
    nama.style.display = 'none'
    kelas.style.display = 'none'
    bntClick.style.display = 'none'
    bntIn.style.display = 'none'
    judul.style.display = 'none'
    btnRemove.style.display = 'none'
    berhasil.style.display = 'none'
    kejuruan.style.display = 'none'
}