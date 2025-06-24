---
# Proyek: Aplikasi Todo List Sederhana
---

## Fitur Utama

- **Menambah Todo Baru**: Pengguna dapat menambahkan tugas baru ke daftar. Setiap tugas memiliki `ID` unik dan `title` otomatis.
- **Mengubah Status Selesai**: Pengguna dapat dengan mudah menandai tugas sebagai selesai atau belum selesai dengan mengklik kotak centang.
- **Memfilter Todo**: Aplikasi menyediakan opsi untuk melihat:
  - Semua tugas (`All`)
  - Tugas yang sudah selesai (`Completed`)
  - Tugas yang belum selesai (`Uncompleted`)
- **Tampilan Dinamis**: Daftar tugas diperbarui secara _real-time_ berdasarkan penambahan, perubahan status, atau filter yang diterapkan.

---

## Teknologi yang Digunakan

- **React.js**: Library JavaScript untuk membangun _user interface_.
- **JavaScript (ES6+)**: Bahasa pemrograman utama.
- **HTML**: Struktur dasar halaman web.

---
### Prasyarat

Pastikan kamu sudah menginstal [Node.js](https://nodejs.org/en/) (yang juga menyertakan npm) di sistemmu. Kamu bisa memeriksanya dengan menjalankan perintah berikut di terminal:

```bash
node -v
npm -v
```

### Instalasi dan Menjalankan Aplikasi

1.  **Kloning Repositori :**
    ```bash
    git clone https://github.com/ilhamhafizha/todo-list.git
    ```


2.  **Navigasi ke Direktori Proyek:**
    Masuk ke folder proyek setelah di-_clone_ atau setelah kamu membuat proyek `todo-list` dengan `create-react-app`:

    ```bash
    cd todo-list
    ```

3.  **Instal Dependensi:**
    Instal semua paket yang dibutuhkan oleh proyek:

    ```bash
    npm install
    ```

4.  **Jalankan Aplikasi:**
    Mulai server pengembangan. Aplikasi akan terbuka di _browser_ default-mu (biasanya di `http://localhost:3000`):

    ```bash
    npm start
    ```

Aplikasi Todo List sekarang sudah berjalan
---