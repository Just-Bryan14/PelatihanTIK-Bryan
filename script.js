document.addEventListener('DOMContentLoaded', function() {
    // 1. Dijalankan setelah HTML dimuat.
    const tombolSapa = document.getElementById('sapaButton');

    if (tombolSapa) {
        // 2. Memastikan elemen ditemukan sebelum melampirkan event.
        tombolSapa.addEventListener('click', function() {
            // 3. Mengganti alert() dengan menampilkan pesan di konsol atau
            //    mengubah elemen HTML (lebih baik) untuk UX yang mulus.
            console.log('Tombol Sapa diklik. Memberikan feedback non-blocking.'); 
            
            // Contoh feedback non-blocking:
            const feedbackArea = document.getElementById('feedback-area'); // Asumsi ada elemen ini
            if (feedbackArea) {
                feedbackArea.textContent = '👋 Halo! Terima Kasih sudah berkunjung!';
                feedbackArea.style.color = 'green';
                // Tambahkan CSS transisi yang halus
            }
        });
    }
});

const themeToggle = document.getElementById('theme-toggle');
    const body = document.getElementById('main-body'); // Mengambil body dengan ID yang sudah kita tambahkan
    
    // Memastikan kedua elemen (tombol mode dan body) ditemukan
    if (themeToggle && body) {
        
        // Fungsi untuk mengganti tema dan menyimpan preferensi
        function toggleTheme() {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = 'Ganti Mode Terang ☀️';
                localStorage.setItem('theme', 'dark'); // Menyimpan di browser
            } else {
                themeToggle.textContent = 'Ganti Mode Gelap 🌙';
                localStorage.setItem('theme', 'light'); // Menyimpan di browser
            }
        }

        // Fungsi untuk memuat tema yang tersimpan saat DOM sudah siap
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            
            if (savedTheme === 'dark') {
                body.classList.add('dark-mode');
                themeToggle.textContent = 'Ganti Mode Terang ☀️';
            } else {
                // Default ke mode terang jika tidak ada atau tersimpan 'light'
                themeToggle.textContent = 'Ganti Mode Gelap 🌙';
            }
        }

        // Tambahkan event listener ke tombol Dark/Light Mode
        themeToggle.addEventListener('click', toggleTheme);

        // Panggil fungsi loadTheme saat DOMContentLoaded
        loadTheme();
    }
});
