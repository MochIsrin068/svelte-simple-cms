export function convertToPermalink(text: string) {
    return text
        .toLowerCase()                // Mengubah semua huruf menjadi huruf kecil
        .replace(/[^a-z0-9\s.]/g, '')  // Menghapus semua karakter non-alphanumeric kecuali spasi dan titik
        .trim()                       // Menghapus spasi di awal dan akhir
        .replace(/\s+/g, '-');        // Mengubah semua spasi menjadi tanda hubung
}

// Fungsi untuk mengonversi permalink menjadi teks
export function convertFromPermalink(permalink: string) {
    return permalink
        .replace(/-/g, ' ')           // Mengubah semua tanda hubung menjadi spasi
        .replace(/\b\w/g, char => char.toUpperCase()); // Mengubah huruf pertama setiap kata menjadi huruf besar
}