---
# Proyek: Aplikasi Todo List Sederhana

Ini adalah aplikasi **Todo List** sederhana yang dibangun menggunakan **React.js**. Aplikasi ini memungkinkan pengguna untuk menambahkan tugas baru, menandai tugas sebagai selesai atau belum selesai, dan memfilter daftar tugas berdasarkan statusnya.
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
- **CSS**: Untuk _styling_ dasar (jika ada file `App.css` yang disertakan).

---

## Cara Menjalankan Proyek (Lokal)

Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi Todo List ini di komputermu:

### Prasyarat

Pastikan kamu sudah menginstal [Node.js](https://nodejs.org/en/) (yang juga menyertakan npm) di sistemmu. Kamu bisa memeriksanya dengan menjalankan perintah berikut di terminal:

```bash
node -v
npm -v
```

### Instalasi dan Menjalankan Aplikasi

1.  **Kloning Repositori (Jika dari GitHub):**
    Jika kamu mendapatkan kode ini dari GitHub, kloning repositori ke mesin lokalmu:

    ```bash
    git clone https://github.com/ilhamhafizha/todo.git
    ```

    _(Ganti URL dengan URL repositori proyekmu jika berbeda)_

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

Aplikasi Todo List sekarang sudah berjalan di _browser_ kamu\!

---

## Struktur Kode (Gambaran Umum `App.js`)

Berikut adalah gambaran singkat tentang fungsionalitas utama di dalam file `App.js`:

- **State Management**: Menggunakan `useState` untuk mengelola `todos` (daftar tugas) dan `filter` (status filter saat ini).
  ```javascript
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  ```
- **`handleClick`**: Fungsi untuk menambahkan tugas baru ke daftar `todos`.
- **`handleClickItemClick`**: Fungsi untuk mengubah status `completed` dari tugas yang dipilih.
- **`filterTodo`**: Fungsi _helper_ untuk menentukan apakah sebuah tugas harus ditampilkan berdasarkan filter yang aktif.
- **`visibleTodos`**: Variabel yang menyimpan daftar tugas yang difilter dan akan dirender.
- **Render**: Bagian _return_ yang berisi elemen UI seperti tombol tambah, tombol filter, dan daftar tugas yang dirender secara dinamis menggunakan `.map()`.

---
