document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================================
    // 1. LOGIKA TOMBOL SAPA (Sudah benar dan berada di dalam DOMContentLoaded)
    // =========================================================

    const tombolSapa = document.getElementById('sapaButton');

    if (tombolSapa) {
        tombolSapa.addEventListener('click', function() {
            console.log('Tombol Sapa diklik. Memberikan feedback non-blocking.');
            
            const feedbackArea = document.getElementById('feedback-area');
            if (feedbackArea) {
                feedbackArea.textContent = '👋 Halo! Terima Kasih sudah berkunjung!';
                feedbackArea.style.color = 'green';
            } else {
                 // Tambahkan fallback alert() jika feedbackArea tidak ada di HTML
                 alert('Halo! Terima Kasih sudah berkunjung!'); 
            }
        });
    }

    // =========================================================
    // 2. LOGIKA TOMBOL DARK/LIGHT MODE (KODE SUDAH DIPINDAHKAN KE SINI)
    // =========================================================
    
    // Variabel ini sekarang dijamin akan menemukan elemen karena sudah di dalam DOMContentLoaded
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.getElementById('main-body'); 
    
    // Memastikan kedua elemen ditemukan sebelum melanjutkan
    if (themeToggle && body) { 
        
        function toggleTheme() {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = 'Ganti Mode Terang ☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = 'Ganti Mode Gelap 🌙';
                localStorage.setItem('theme', 'light');
            }
        }

        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            
            if (savedTheme === 'dark') {
                body.classList.add('dark-mode');
                themeToggle.textContent = 'Ganti Mode Terang ☀️';
            } else {
                themeToggle.textContent = 'Ganti Mode Gelap 🌙';
            }
        }

        themeToggle.addEventListener('click', toggleTheme);
        loadTheme();
    }
    // ⬆️ SEMUA KODE SEKARANG ADA DI DALAM BLOK INI ⬆️
});
