# Setup Database & Backend untuk Game AlgoVerse by Ridiey

Dokumen ini berisi panduan langkah demi langkah untuk melakukan setup database dan backend untuk project AlgoVerse.

---

### 1. Prasyarat (Install yang Dibutuhkan)

- **Node.js**: Direkomendasikan menggunakan versi 18 atau yang lebih baru.
- **MySQL**: Versi dan port bisa disesuaikan dengan konfigurasi sistem.
- **VS Code Extension**:
  - **Nama**: REST Client
  - **Publisher**: Huachao Mao
  - **Cara Install**:
    1.  Buka Visual Studio Code.
    2.  Masuk ke menu Extensions melalui sidebar atau dengan shortcut `Ctrl+Shift+X`.
    3.  Cari `REST Client` dari publisher `Huachao Mao` dan klik **Install**.

### 2. Clone dan Install Dependensi

Lakukan clone repository project dan install semua dependensi yang dibutuhkan.

```sh
# Ganti <url-project> dengan URL repository Git Anda
$ git clone <url-project>

# Masuk ke direktori project
$ cd <nama-folder-project>

# Install semua package yang terdaftar di package.json
$ npm install
```

### 3. Setup File `.env`

**Contoh isi file `.env`:**

```env
# Ganti 'user', 'password', 'localhost', '3306'
# sesuai dengan konfigurasi MySQL Anda.
DATABASE_URL="mysql://user:password@localhost:3306/algoverse_db"

# Port untuk menjalankan server backend
PORT="3000"
```

> **PENTING:** Sesuaikan nilai `user`, `password`, `localhost`, dan `3306` dengan konfigurasi database MySQL di mesin Anda.

### 4. Setup Proyek Prisma

Inisialisasi project dan install Prisma sebagai ORM (Object-Relational Mapping).

```sh
# Inisialisasi package.json (jika belum ada)
$ npm init -y

# Install Prisma sebagai dev dependency
$ npm install prisma --save-dev

# Install Express dan Prisma Client
$ npm install express
$ npm install @prisma/client

# Buat direktori /prisma dengan schema.prisma dan file .env
$ npx prisma init
```

### 5. Migrasi Database dan Generate Client

Langkah ini akan membuat tabel-tabel di database Anda sesuai dengan skema Prisma dan men-generate Prisma Client.

```sh
# Menjalankan migrasi database
# Anda akan diminta untuk memberi nama migrasi (contoh: init)
$ npx prisma migrate dev --name init

# Generate Prisma Client agar bisa digunakan di kode
$ npx prisma generate
```

### 6. Jalankan Aplikasi

Pastikan Anda memiliki file server utama (misalnya `index.js`) dengan setup Express seperti di bawah ini untuk menjalankan server.

**Contoh `index.js`:**

```javascript
const express = require("express");
const app = express();
const gameRoutes = require("./routes/game"); // Sesuaikan dengan path routes Anda

// Middleware untuk membaca body JSON dari request
app.use(express.json());

// Menggunakan routes yang sudah dibuat
app.use("/api", gameRoutes);

// Menjalankan server
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
```

Jalankan server dengan perintah:

```sh
$ node index.js
```

### 7. Tes API dengan REST Client

Setelah server berjalan, Anda bisa melakukan tes endpoint API.

1.  Buka file `testing.http` (atau file `.http` lainnya) di VS Code.
2.  Arahkan kursor Anda ke salah satu request API yang tersedia.
3.  Klik tombol **"Send Request"** yang muncul di atasnya.
4.  Periksa respon yang diterima di VS Code dan pastikan data sudah masuk/berubah di database Anda.
5.  Jika terjadi error, silakan hubungi Ridiey untuk diskusi lebih lanjut.

### 8. Catatan Tambahan

- **Port MySQL**: Anda **BEBAS** menggunakan port mana pun untuk MySQL, tidak harus `3306` atau `3310`. Pastikan port tersebut sesuai dengan yang Anda tulis di file `.env`.
- **File `.env`**: File ini **WAJIB** disesuaikan oleh setiap developer sesuai dengan konfigurasi lokal masing-masing (terutama `USERNAME`, `PASSWORD`, dan `PORT` database).
- **Urutan**: Pastikan Anda menjalankan semua langkah di atas secara berurutan sebelum mencoba menjalankan gamenya.

---

_Readme ini dibuat untuk mempermudah setup project AlgoVerse._
