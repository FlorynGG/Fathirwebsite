// Data orang dengan link spreadsheet mereka dan nama tombol yang disesuaikan
const peopleData = [
    { 
        name: 'Muis Riadi, S.H, M.Si', 
        spreadsheetLinks: [
            { link: 'https://docs.google.com/spreadsheets/d/1Ih0flvD9H2gv9qX8XWMkMRtu39aGxdNM/edit?gid=1305624778#gid=1305624778', buttonName: 'SURAT CUTI PEJABAT STRUKTURAL' },
            
          //sdh
        ]
    },
    { 
        name: 'Kasim Usman, M.Pd', 
        spreadsheetLinks: [
            { link: 'https://docs.google.com/spreadsheets/d/1TZbicwTqdORVYpoI17uZ-RaaNI_NcH3F/edit?usp=drive_link&ouid=105583565835317724644&rtpof=true&sd=true', buttonName: 'SURAT CUTI WIDYAISWARA DAN PUSTAKAWAN' }
     //sdh
        ]
    },
    { 
        name: 'Mahmudin Amin, S.E ', 
        spreadsheetLinks: [
            { link: 'https://docs.google.com/spreadsheets/d/1It3Yk6jSDAGsoQJ4z8xzPG0KnSpov_QR/edit?usp=drive_link&ouid=105583565835317724644&rtpof=true&sd=true', buttonName: 'SURAT CUTI BAGIAN TATA USAHA' }
           //sdh
        ]
    },
    { 
        name: 'Jihan Bachmid, S.Kom, M.Si', 
        spreadsheetLinks: [
            { link: 'https://docs.google.com/spreadsheets/d/1Tfu8gi-Hvnc-emLF6JHwCd-CAPNv888g/edit?usp=drive_link&ouid=105583565835317724644&rtpof=true&sd=true', buttonName: 'SURAT CUTI SEKSI ADMINISTRASI' }
           //sdh
        ]
    },
    { 
        name: 'Dr.M.Zaenul Ashyuri, S.Ag., M.Hi', 
        spreadsheetLinks: [
            { link: 'https://docs.google.com/spreadsheets/d/1TcgXs9J9--mXwJKxiH8aISKoFgpwl5SN/edit?usp=sharing&ouid=105583565835317724644&rtpof=true&sd=true', buttonName: 'SURAT CUTI WADYAISWARA DAN PUSTAKAWAN' }
        ]
        //sdh
    }
    ,
    { 
        name: 'Tuti Amba, SE', 
        spreadsheetLinks: [
            { link: 'https://docs.google.com/spreadsheets/d/1TjuYSd7EsUl4W3dSO1o3OttyR-yAoVqF/edit?usp=drivesdk&ouid=105583565835317724644&rtpof=true&sd=true', buttonName: 'SURAT CUTI SEKSI TEKNIS' }
        ]
    },
    { 
        name: 'Muchlis Sonu', 
        spreadsheetLinks: [
            { link: 'https://docs.google.com/spreadsheets/d/1Tpi14XHjjIrmMeTA2f2zdm65U40YcYmj/edit?usp=drivesdk&ouid=105583565835317724644&rtpof=true&sd=true', buttonName: 'SURAT CUTI SEKSI TEKNIS' }
//sdh
        ]
    }
];
function displayNamesList() {
    const namesList = document.getElementById('namesList');
    namesList.innerHTML = ''; // Clear previous results

    // Menampilkan semua nama orang yang dapat diklik
    peopleData.forEach(person => {
        const li = document.createElement('li');
        li.textContent = person.name;
        li.onclick = () => showDataButtons(person); // Tampilkan tombol untuk link ke spreadsheet
        namesList.appendChild(li);
    });
}

// Fungsi untuk menampilkan tombol link ke spreadsheet
function showDataButtons(person) {
    // Ganti isi kontainer untuk menampilkan tombol data
    const container = document.getElementById('mainContainer');
    container.innerHTML = `
        <h2>${person.name}</h2>
        <div id="buttonsContainer"></div>
        <button id="backButton" onclick="goBack()">Kembali</button>
    `;

    // Menampilkan tombol berdasarkan jumlah spreadsheetLinks
    const buttonsContainer = document.getElementById('buttonsContainer');
    person.spreadsheetLinks.forEach(linkData => {
        const button = document.createElement('button');
        button.textContent = linkData.buttonName;  // Gunakan nama tombol yang disesuaikan
        button.onclick = () => window.open(linkData.link, '_blank');
        buttonsContainer.appendChild(button);
    });
}

// Fungsi untuk kembali ke daftar nama
function goBack() {
    displayNamesList(); // Menampilkan kembali daftar nama orang
}

// Memuat daftar nama orang ketika halaman dimuat
window.onload = displayNamesList;