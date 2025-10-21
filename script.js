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
