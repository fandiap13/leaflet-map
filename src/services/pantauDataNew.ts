import {
  MasterKabupatenData,
  MasterKecamatanData,
  MasterProvinsiData,
  MonitoringWNIResponse,
} from "@/types/PantauMapTypeNew";

export const indonesiaBounds: L.LatLngBoundsExpression = [
  [-11.0, 94.0], // Barat Daya (Sumatera bagian barat)
  [6.5, 141.0], // Timur Laut (Papua bagian timur)
];

// Data Master Provinsi dengan Koordinat
export const provinsiData: MasterProvinsiData[] = [
  { id: 1, nama: "DKI Jakarta", koordinat: { lat: -6.2088, lng: 106.8456 } },
  { id: 2, nama: "Jawa Barat", koordinat: { lat: -6.9175, lng: 107.6191 } },
  { id: 3, nama: "Jawa Timur", koordinat: { lat: -7.2575, lng: 112.7521 } },
  { id: 4, nama: "Sumatera Utara", koordinat: { lat: 3.5952, lng: 98.6722 } },
  {
    id: 5,
    nama: "Sulawesi Selatan",
    koordinat: { lat: -5.1477, lng: 119.4327 },
  },
  { id: 6, nama: "Bali", koordinat: { lat: -8.6705, lng: 115.2126 } },
  { id: 7, nama: "Yogyakarta", koordinat: { lat: -7.7479, lng: 110.3554 } },
  {
    id: 8,
    nama: "Kalimantan Timur",

    koordinat: { lat: -0.5021, lng: 117.1537 },
  },
  { id: 9, nama: "Papua", koordinat: { lat: -2.5337, lng: 140.7181 } },
  { id: 10, nama: "Riau", koordinat: { lat: 0.5071, lng: 101.4478 } },
  { id: 11, nama: "Lampung", koordinat: { lat: -5.4297, lng: 105.2615 } },
  {
    id: 12,
    nama: "Kalimantan Selatan",

    koordinat: { lat: -3.3204, lng: 114.5908 },
  },
  { id: 13, nama: "Maluku", koordinat: { lat: -3.695, lng: 128.1814 } },
  {
    id: 14,
    nama: "Sulawesi Selatan",

    koordinat: { lat: -5.1477, lng: 119.4327 },
  },
  { id: 15, nama: "Kepulauan Riau", koordinat: { lat: 1.1346, lng: 104.0666 } },
  { id: 16, nama: "NTT", koordinat: { lat: -10.1772, lng: 123.607 } },
  { id: 17, nama: "Sulawesi Utara", koordinat: { lat: 1.4748, lng: 124.8442 } },
  {
    id: 18,
    nama: "Bangka Belitung",

    koordinat: { lat: -2.1291, lng: 106.1126 },
  },
  { id: 19, nama: "Gorontalo", koordinat: { lat: 0.5412, lng: 123.0595 } },
  { id: 20, nama: "Maluku Utara", koordinat: { lat: 0.7893, lng: 127.3886 } },
  { id: 21, nama: "Jawa Tengah", koordinat: { lat: -7.1501, lng: 110.1403 } },
  { id: 22, nama: "Banten", koordinat: { lat: -6.4058, lng: 106.064 } },
  { id: 23, nama: "Aceh", koordinat: { lat: 4.6951, lng: 96.7494 } },
  {
    id: 24,
    nama: "Sumatera Barat",

    koordinat: { lat: -0.7393, lng: 100.8008 },
  },
  {
    id: 25,
    nama: "Sumatera Selatan",

    koordinat: { lat: -3.3194, lng: 103.9144 },
  },
  {
    id: 26,
    nama: "Kalimantan Barat",

    koordinat: { lat: -0.2787, lng: 111.4752 },
  },
  {
    id: 27,
    nama: "Kalimantan Tengah",

    koordinat: { lat: -1.6814, lng: 113.3823 },
  },
  {
    id: 28,
    nama: "Kalimantan Utara",

    koordinat: { lat: 3.0731, lng: 116.0414 },
  },
  { id: 29, nama: "Sulawesi Tengah", koordinat: { lat: -1.43, lng: 121.4456 } },
  {
    id: 30,
    nama: "Sulawesi Tenggara",

    koordinat: { lat: -4.1449, lng: 122.1746 },
  },
  {
    id: 31,
    nama: "Sulawesi Barat",

    koordinat: { lat: -2.8977, lng: 119.1514 },
  },
  { id: 32, nama: "NTB", koordinat: { lat: -8.6529, lng: 117.3616 } },
  { id: 33, nama: "Papua Barat", koordinat: { lat: -1.3361, lng: 133.1747 } },
  { id: 34, nama: "Papua Selatan", koordinat: { lat: -6.25, lng: 140.5 } },
];

// Data Master Kabupaten dengan Koordinat (melanjutkan dari data yang ada, ditambah beberapa)
export const kabupatenData: MasterKabupatenData[] = [
  {
    id: 1,
    nama: "Jakarta Pusat",
    provinsiId: 1,
    koordinat: { lat: -6.2088, lng: 106.8456 },
  },
  {
    id: 2,
    nama: "Bandung",
    provinsiId: 2,
    koordinat: { lat: -6.9175, lng: 107.6191 },
  },
  {
    id: 3,
    nama: "Surabaya",
    provinsiId: 3,
    koordinat: { lat: -7.2575, lng: 112.7521 },
  },
  {
    id: 4,
    nama: "Medan",
    provinsiId: 4,
    koordinat: { lat: 3.5952, lng: 98.6722 },
  },
  {
    id: 5,
    nama: "Makassar",
    provinsiId: 5,
    koordinat: { lat: -5.1477, lng: 119.4327 },
  },
  {
    id: 6,
    nama: "Denpasar",
    provinsiId: 6,
    koordinat: { lat: -8.6705, lng: 115.2126 },
  },
  {
    id: 7,
    nama: "Sleman",
    provinsiId: 7,
    koordinat: { lat: -7.7479, lng: 110.3554 },
  },
  {
    id: 8,
    nama: "Samarinda",
    provinsiId: 8,
    koordinat: { lat: -0.5021, lng: 117.1537 },
  },
  {
    id: 9,
    nama: "Jayapura",
    provinsiId: 9,
    koordinat: { lat: -2.5337, lng: 140.7181 },
  },
  {
    id: 10,
    nama: "Pekanbaru",
    provinsiId: 10,
    koordinat: { lat: 0.5071, lng: 101.4478 },
  },
  {
    id: 11,
    nama: "Bandar Lampung",
    provinsiId: 11,
    koordinat: { lat: -5.4297, lng: 105.2615 },
  },
  {
    id: 12,
    nama: "Banjarmasin",
    provinsiId: 12,
    koordinat: { lat: -3.3204, lng: 114.5908 },
  },
  {
    id: 13,
    nama: "Ambon",
    provinsiId: 13,
    koordinat: { lat: -3.695, lng: 128.1814 },
  },
  {
    id: 14,
    nama: "Makassar",
    provinsiId: 14,
    koordinat: { lat: -5.1477, lng: 119.4327 },
  },
  {
    id: 15,
    nama: "Batam",
    provinsiId: 15,
    koordinat: { lat: 1.1346, lng: 104.0666 },
  },
  {
    id: 16,
    nama: "Kupang",
    provinsiId: 16,
    koordinat: { lat: -10.1772, lng: 123.607 },
  },
  {
    id: 17,
    nama: "Manado",
    provinsiId: 17,
    koordinat: { lat: 1.4748, lng: 124.8442 },
  },
  {
    id: 18,
    nama: "Pangkal Pinang",
    provinsiId: 18,
    koordinat: { lat: -2.1291, lng: 106.1126 },
  },
  {
    id: 19,
    nama: "Gorontalo",
    provinsiId: 19,
    koordinat: { lat: 0.5412, lng: 123.0595 },
  },
  {
    id: 20,
    nama: "Ternate",
    provinsiId: 20,
    koordinat: { lat: 0.7893, lng: 127.3886 },
  },
  {
    id: 21,
    nama: "Jakarta Utara",
    provinsiId: 1,
    koordinat: { lat: -6.1339, lng: 106.8823 },
  },
  {
    id: 22,
    nama: "Jakarta Selatan",
    provinsiId: 1,
    koordinat: { lat: -6.2614, lng: 106.8106 },
  },
  {
    id: 23,
    nama: "Jakarta Timur",
    provinsiId: 1,
    koordinat: { lat: -6.225, lng: 106.9004 },
  },
  {
    id: 24,
    nama: "Jakarta Barat",
    provinsiId: 1,
    koordinat: { lat: -6.1683, lng: 106.7588 },
  },
  {
    id: 25,
    nama: "Kepulauan Seribu",
    provinsiId: 1,
    koordinat: { lat: -5.6122, lng: 106.6171 },
  },
  {
    id: 26,
    nama: "Bandung Barat",
    provinsiId: 2,
    koordinat: { lat: -6.8652, lng: 107.4961 },
  },
  {
    id: 27,
    nama: "Cimahi",
    provinsiId: 2,
    koordinat: { lat: -6.8845, lng: 107.5413 },
  },
  {
    id: 28,
    nama: "Bekasi",
    provinsiId: 2,
    koordinat: { lat: -6.2349, lng: 107.0019 },
  },
  {
    id: 29,
    nama: "Bogor",
    provinsiId: 2,
    koordinat: { lat: -6.5944, lng: 106.7892 },
  },
  {
    id: 30,
    nama: "Depok",
    provinsiId: 2,
    koordinat: { lat: -6.4025, lng: 106.7942 },
  },
  {
    id: 31,
    nama: "Malang",
    provinsiId: 3,
    koordinat: { lat: -7.9797, lng: 112.6304 },
  },
  {
    id: 32,
    nama: "Sidoarjo",
    provinsiId: 3,
    koordinat: { lat: -7.4478, lng: 112.6718 },
  },
  {
    id: 33,
    nama: "Gresik",
    provinsiId: 3,
    koordinat: { lat: -7.1631, lng: 112.6532 },
  },
  {
    id: 34,
    nama: "Mojokerto",
    provinsiId: 3,
    koordinat: { lat: -7.4678, lng: 112.4351 },
  },
  {
    id: 35,
    nama: "Semarang",
    provinsiId: 21,
    koordinat: { lat: -7.0051, lng: 110.4381 },
  },
  {
    id: 36,
    nama: "Solo",
    provinsiId: 21,
    koordinat: { lat: -7.5695, lng: 110.8272 },
  },
  {
    id: 37,
    nama: "Yogyakarta",
    provinsiId: 7,
    koordinat: { lat: -7.7956, lng: 110.3695 },
  },
  {
    id: 38,
    nama: "Tangerang",
    provinsiId: 22,
    koordinat: { lat: -6.1785, lng: 106.6305 },
  },
  {
    id: 39,
    nama: "Serang",
    provinsiId: 22,
    koordinat: { lat: -6.1103, lng: 106.1639 },
  },
  {
    id: 40,
    nama: "Banda Aceh",
    provinsiId: 23,
    koordinat: { lat: 5.5482, lng: 95.3237 },
  },
];

// Data Master Kecamatan dengan Koordinat (melanjutkan dari data yang ada, ditambah beberapa)
export const kecamatanData: MasterKecamatanData[] = [
  {
    id: 1,
    nama: "Gambir",
    kabupatenId: 1,
    provinsiId: 1,
    koordinat: { lat: -6.2088, lng: 106.8456 },
  },
  {
    id: 2,
    nama: "Tanah Abang",
    kabupatenId: 1,
    provinsiId: 1,
    koordinat: { lat: -6.201, lng: 106.818 },
  },
  {
    id: 3,
    nama: "Menteng",
    kabupatenId: 1,
    provinsiId: 1,
    koordinat: { lat: -6.197, lng: 106.8275 },
  },
  {
    id: 4,
    nama: "Coblong",
    kabupatenId: 2,
    provinsiId: 2,
    koordinat: { lat: -6.9175, lng: 107.6191 },
  },
  {
    id: 5,
    nama: "Cibeunying Kaler",
    kabupatenId: 2,
    provinsiId: 2,
    koordinat: { lat: -6.9004, lng: 107.6326 },
  },
  {
    id: 6,
    nama: "Sukajadi",
    kabupatenId: 2,
    provinsiId: 2,
    koordinat: { lat: -6.8952, lng: 107.5939 },
  },
  {
    id: 7,
    nama: "Gubeng",
    kabupatenId: 3,
    provinsiId: 3,
    koordinat: { lat: -7.2575, lng: 112.7521 },
  },
  {
    id: 8,
    nama: "Tegalsari",
    kabupatenId: 3,
    provinsiId: 3,
    koordinat: { lat: -7.2702, lng: 112.7401 },
  },
  {
    id: 9,
    nama: "Wonokromo",
    kabupatenId: 3,
    provinsiId: 3,
    koordinat: { lat: -7.2994, lng: 112.7369 },
  },
  {
    id: 10,
    nama: "Medan Baru",
    kabupatenId: 4,
    provinsiId: 4,
    koordinat: { lat: 3.5952, lng: 98.6722 },
  },
  {
    id: 11,
    nama: "Medan Selayang",
    kabupatenId: 4,
    provinsiId: 4,
    koordinat: { lat: 3.56, lng: 98.6494 },
  },
  {
    id: 12,
    nama: "Medan Sunggal",
    kabupatenId: 4,
    provinsiId: 4,
    koordinat: { lat: 3.5855, lng: 98.6195 },
  },
  {
    id: 13,
    nama: "Panakkukang",
    kabupatenId: 5,
    provinsiId: 5,
    koordinat: { lat: -5.1477, lng: 119.4327 },
  },
  {
    id: 14,
    nama: "Makassar",
    kabupatenId: 5,
    provinsiId: 5,
    koordinat: { lat: -5.1501, lng: 119.4125 },
  },
  {
    id: 15,
    nama: "Denpasar Selatan",
    kabupatenId: 6,
    provinsiId: 6,
    koordinat: { lat: -8.6705, lng: 115.2126 },
  },
  {
    id: 16,
    nama: "Denpasar Utara",
    kabupatenId: 6,
    provinsiId: 6,
    koordinat: { lat: -8.6387, lng: 115.2194 },
  },
  {
    id: 17,
    nama: "Depok",
    kabupatenId: 7,
    provinsiId: 7,
    koordinat: { lat: -7.7479, lng: 110.3554 },
  },
  {
    id: 18,
    nama: "Mlati",
    kabupatenId: 7,
    provinsiId: 7,
    koordinat: { lat: -7.7476, lng: 110.3331 },
  },
  {
    id: 19,
    nama: "Gamping",
    kabupatenId: 7,
    provinsiId: 7,
    koordinat: { lat: -7.7769, lng: 110.3042 },
  },
  {
    id: 20,
    nama: "Samarinda Ulu",
    kabupatenId: 8,
    provinsiId: 8,
    koordinat: { lat: -0.5021, lng: 117.1537 },
  },
  {
    id: 21,
    nama: "Samarinda Ilir",
    kabupatenId: 8,
    provinsiId: 8,
    koordinat: { lat: -0.4873, lng: 117.152 },
  },
  {
    id: 22,
    nama: "Abepura",
    kabupatenId: 9,
    provinsiId: 9,
    koordinat: { lat: -2.5337, lng: 140.7181 },
  },
  {
    id: 23,
    nama: "Jayapura Utara",
    kabupatenId: 9,
    provinsiId: 9,
    koordinat: { lat: -2.5196, lng: 140.734 },
  },
  {
    id: 24,
    nama: "Tampan",
    kabupatenId: 10,
    provinsiId: 10,
    koordinat: { lat: 0.5071, lng: 101.4478 },
  },
  {
    id: 25,
    nama: "Bukit Raya",
    kabupatenId: 10,
    provinsiId: 10,
    koordinat: { lat: 0.4995, lng: 101.4688 },
  },
  {
    id: 26,
    nama: "Tanjung Karang Pusat",
    kabupatenId: 11,
    provinsiId: 11,
    koordinat: { lat: -5.4297, lng: 105.2615 },
  },
  {
    id: 27,
    nama: "Teluk Betung",
    kabupatenId: 11,
    provinsiId: 11,
    koordinat: { lat: -5.458, lng: 105.2625 },
  },
  {
    id: 28,
    nama: "Banjarmasin Tengah",
    kabupatenId: 12,
    provinsiId: 12,
    koordinat: { lat: -3.3204, lng: 114.5908 },
  },
  {
    id: 29,
    nama: "Banjarmasin Utara",
    kabupatenId: 12,
    provinsiId: 12,
    koordinat: { lat: -3.2944, lng: 114.5861 },
  },
  {
    id: 30,
    nama: "Nusaniwe",
    kabupatenId: 13,
    provinsiId: 13,
    koordinat: { lat: -3.695, lng: 128.1814 },
  },
  {
    id: 31,
    nama: "Sirimau",
    kabupatenId: 13,
    provinsiId: 13,
    koordinat: { lat: -3.7042, lng: 128.1816 },
  },
  {
    id: 32,
    nama: "Panakkukang",
    kabupatenId: 14,
    provinsiId: 14,
    koordinat: { lat: -5.1477, lng: 119.4327 },
  },
  {
    id: 33,
    nama: "Mariso",
    kabupatenId: 14,
    provinsiId: 14,
    koordinat: { lat: -5.1589, lng: 119.4097 },
  },
  {
    id: 34,
    nama: "Lubuk Baja",
    kabupatenId: 15,
    provinsiId: 15,
    koordinat: { lat: 1.1346, lng: 104.0666 },
  },
  {
    id: 35,
    nama: "Batam Kota",
    kabupatenId: 15,
    provinsiId: 15,
    koordinat: { lat: 1.138, lng: 104.0526 },
  },
  {
    id: 36,
    nama: "Kelapa Lima",
    kabupatenId: 16,
    provinsiId: 16,
    koordinat: { lat: -10.1772, lng: 123.607 },
  },
  {
    id: 37,
    nama: "Kota Raja",
    kabupatenId: 16,
    provinsiId: 16,
    koordinat: { lat: -10.1657, lng: 123.5794 },
  },
  {
    id: 38,
    nama: "Sario",
    kabupatenId: 17,
    provinsiId: 17,
    koordinat: { lat: 1.4748, lng: 124.8442 },
  },
  {
    id: 39,
    nama: "Wenang",
    kabupatenId: 17,
    provinsiId: 17,
    koordinat: { lat: 1.4935, lng: 124.8423 },
  },
  {
    id: 40,
    nama: "Rangkui",
    kabupatenId: 18,
    provinsiId: 18,
    koordinat: { lat: -2.1291, lng: 106.1126 },
  },
  {
    id: 41,
    nama: "Gerunggang",
    kabupatenId: 18,
    provinsiId: 18,
    koordinat: { lat: -2.115, lng: 106.1096 },
  },
  {
    id: 42,
    nama: "Kota Selatan",
    kabupatenId: 19,
    provinsiId: 19,
    koordinat: { lat: 0.5412, lng: 123.0595 },
  },
  {
    id: 43,
    nama: "Kota Utara",
    kabupatenId: 19,
    provinsiId: 19,
    koordinat: { lat: 0.5571, lng: 123.0582 },
  },
  {
    id: 44,
    nama: "Ternate Tengah",
    kabupatenId: 20,
    provinsiId: 20,
    koordinat: { lat: 0.7893, lng: 127.3886 },
  },
  {
    id: 45,
    nama: "Ternate Utara",
    kabupatenId: 20,
    provinsiId: 20,
    koordinat: { lat: 0.8063, lng: 127.3785 },
  },
  {
    id: 46,
    nama: "Sawah Besar",
    kabupatenId: 1,
    provinsiId: 1,
    koordinat: { lat: -6.1617, lng: 106.8293 },
  },
  {
    id: 47,
    nama: "Kemayoran",
    kabupatenId: 1,
    provinsiId: 1,
    koordinat: { lat: -6.1586, lng: 106.8501 },
  },
  {
    id: 48,
    nama: "Senen",
    kabupatenId: 1,
    provinsiId: 1,
    koordinat: { lat: -6.1767, lng: 106.8441 },
  },
  {
    id: 49,
    nama: "Cempaka Putih",
    kabupatenId: 1,
    provinsiId: 1,
    koordinat: { lat: -6.1687, lng: 106.8706 },
  },
  {
    id: 50,
    nama: "Johar Baru",
    kabupatenId: 1,
    provinsiId: 1,
    koordinat: { lat: -6.1811, lng: 106.8597 },
  },
];

// Example data structure (simplified with 2 provinces)
export const exampleMonitoringData: MonitoringWNIResponse = {
  meta: {
    timestamp: "2025-04-09T10:30:00Z",
    totalProvinsi: 2,
    totalKabupaten: 4,
    totalKecamatan: 4,
  },
  filters: {
    provinsi: ["Semua", "Jawa Barat", "DKI Jakarta"],
    negara: ["Semua", "Malaysia", "Singapura", "Arab Saudi"],
    tahun: [2023, 2024, 2025],
  },
  data: {
    provinsi: [
      {
        id: "jabar",
        nama: "Jawa Barat",
        lat: -6.9175,
        long: 107.6191,
        status: 1,
        jumlahPenduduk: {
          total: 15780,
          perbandinganTahunSebelumnya: {
            persentase: 8.5,
            status: "naik",
          },
          berdasarkanGender: {
            lakiLaki: 8950,
            perempuan: 6830,
          },
          berdasarkanKelompokUsia: [
            { kelompok: "0-17", jumlah: 1243 },
            { kelompok: "18-25", jumlah: 4560 },
            { kelompok: "26-35", jumlah: 5870 },
            { kelompok: "36-45", jumlah: 2780 },
            { kelompok: "46-55", jumlah: 895 },
            { kelompok: "55+", jumlah: 432 },
          ],
          berdasarkanPekerjaan: [
            { pekerjaan: "Pekerja Domestik", jumlah: 3850 },
            { pekerjaan: "Buruh Pabrik", jumlah: 4320 },
            { pekerjaan: "Pekerja Konstruksi", jumlah: 2760 },
            { pekerjaan: "Tenaga Profesional", jumlah: 1540 },
            { pekerjaan: "Lainnya", jumlah: 270 },
          ],
        },
        totalPemohon: 4250,
        rekapLayanan: {
          keimigrasian: {
            paspor: 1850,
            splp: 420,
            visa: 980,
            izinTinggal: 650,
            lainnya: 120,
          },
          kekonsuleran: {
            legalisasiDokumen: 780,
            suratKeterangan: 560,
            aktaKelahiran: 240,
            aktaKematian: 45,
            pelayananHukum: 130,
            lainnya: 170,
          },
        },
        kesimpulan: {
          pekerjaanTerbanyak: {
            nama: "Buruh Pabrik",
            jumlah: 4320,
          },
          pekerjaanTersedikit: {
            nama: "Lainnya",
            jumlah: 270,
          },
          kelompokUsiaTerbanyak: {
            nama: "26-35",
            jumlah: 5870,
          },
          kelompokUsiaTersedikit: {
            nama: "55+",
            jumlah: 432,
          },
          rekapLayananTerbanyak: {
            nama: "Paspor",
            jumlah: 1850,
          },
          rekapLayananTersedikit: {
            nama: "Akta Kematian",
            jumlah: 45,
          },
          genderDominan: {
            nama: "Laki-laki",
            jumlah: 8950,
            persentase: 56.7,
          },
        },
        kabupaten: [
          {
            id: "bandung",
            nama: "Bandung",
            lat: -6.9147,
            long: 107.6098,
            jumlahPenduduk: {
              total: 8450,
              perbandinganTahunSebelumnya: {
                persentase: 9.8,
                status: "naik",
              },
              berdasarkanGender: {
                lakiLaki: 4850,
                perempuan: 3600,
              },
              berdasarkanKelompokUsia: [
                { kelompok: "0-17", jumlah: 645 },
                { kelompok: "18-25", jumlah: 2760 },
                { kelompok: "26-35", jumlah: 3210 },
                { kelompok: "36-45", jumlah: 1230 },
                { kelompok: "46-55", jumlah: 435 },
                { kelompok: "55+", jumlah: 170 },
              ],
              berdasarkanPekerjaan: [
                { pekerjaan: "Pekerja Domestik", jumlah: 2430 },
                { pekerjaan: "Buruh Pabrik", jumlah: 2850 },
                { pekerjaan: "Pekerja Konstruksi", jumlah: 1120 },
                { pekerjaan: "Lainnya", jumlah: 100 },
              ],
            },
            totalPemohon: 2340,
            rekapLayanan: {
              keimigrasian: {
                paspor: 980,
                splp: 230,
                visa: 520,
                izinTinggal: 340,
                lainnya: 70,
              },
              kekonsuleran: {
                legalisasiDokumen: 430,
                suratKeterangan: 290,
                aktaKelahiran: 130,
                aktaKematian: 25,
                pelayananHukum: 65,
                lainnya: 90,
              },
            },
            kesimpulan: {
              pekerjaanTerbanyak: {
                nama: "Buruh Pabrik",
                jumlah: 2850,
              },
              pekerjaanTersedikit: {
                nama: "Lainnya",
                jumlah: 100,
              },
              kelompokUsiaTerbanyak: {
                nama: "26-35",
                jumlah: 3210,
              },
              kelompokUsiaTersedikit: {
                nama: "55+",
                jumlah: 170,
              },
              rekapLayananTerbanyak: {
                nama: "Paspor",
                jumlah: 980,
              },
              rekapLayananTersedikit: {
                nama: "Akta Kematian",
                jumlah: 25,
              },
              genderDominan: {
                nama: "Laki-laki",
                jumlah: 4850,
                persentase: 57.4,
              },
            },
            kecamatan: [
              {
                status: 3,
                id: "kiaracondong",
                nama: "Kiaracondong",
                lat: -6.9301,
                long: 107.6367,
                jumlahPenduduk: {
                  total: 3670,
                  perbandinganTahunSebelumnya: {
                    persentase: 10.2,
                    status: "naik",
                  },
                  berdasarkanGender: {
                    lakiLaki: 2180,
                    perempuan: 1490,
                  },
                  berdasarkanKelompokUsia: [
                    { kelompok: "0-17", jumlah: 290 },
                    { kelompok: "18-25", jumlah: 1190 },
                    { kelompok: "26-35", jumlah: 1390 },
                    { kelompok: "36-45", jumlah: 520 },
                    { kelompok: "46-55", jumlah: 210 },
                    { kelompok: "55+", jumlah: 70 },
                  ],
                  berdasarkanPekerjaan: [
                    { pekerjaan: "Pekerja Domestik", jumlah: 1050 },
                    { pekerjaan: "Buruh Pabrik", jumlah: 1240 },
                    { pekerjaan: "Pekerja Konstruksi", jumlah: 580 },
                    { pekerjaan: "Lainnya", jumlah: 40 },
                  ],
                },
                totalPemohon: 980,
                rekapLayanan: {
                  keimigrasian: {
                    paspor: 410,
                    splp: 95,
                    visa: 220,
                    izinTinggal: 140,
                    lainnya: 30,
                  },
                  kekonsuleran: {
                    legalisasiDokumen: 180,
                    suratKeterangan: 120,
                    aktaKelahiran: 60,
                    aktaKematian: 12,
                    pelayananHukum: 25,
                    lainnya: 35,
                  },
                },
                kesimpulan: {
                  pekerjaanTerbanyak: {
                    nama: "Buruh Pabrik",
                    jumlah: 1240,
                  },
                  pekerjaanTersedikit: {
                    nama: "Lainnya",
                    jumlah: 40,
                  },
                  kelompokUsiaTerbanyak: {
                    nama: "26-35",
                    jumlah: 1390,
                  },
                  kelompokUsiaTersedikit: {
                    nama: "55+",
                    jumlah: 70,
                  },
                  rekapLayananTerbanyak: {
                    nama: "Paspor",
                    jumlah: 410,
                  },
                  rekapLayananTersedikit: {
                    nama: "Akta Kematian",
                    jumlah: 12,
                  },
                  genderDominan: {
                    nama: "Laki-laki",
                    jumlah: 2180,
                    persentase: 59.4,
                  },
                },
              },
            ],
            status: 2,
          },
          {
            id: "bekasi",
            nama: "Bekasi",
            lat: -6.2349,
            long: 106.9896,
            jumlahPenduduk: {
              total: 7330,
              perbandinganTahunSebelumnya: {
                persentase: 7.2,
                status: "naik",
              },
              berdasarkanGender: {
                lakiLaki: 4100,
                perempuan: 3230,
              },
              berdasarkanKelompokUsia: [
                { kelompok: "0-17", jumlah: 598 },
                { kelompok: "18-25", jumlah: 1800 },
                { kelompok: "26-35", jumlah: 2660 },
                { kelompok: "36-45", jumlah: 1550 },
                { kelompok: "46-55", jumlah: 460 },
                { kelompok: "55+", jumlah: 262 },
              ],
              berdasarkanPekerjaan: [
                { pekerjaan: "Pekerja Domestik", jumlah: 1420 },
                { pekerjaan: "Buruh Pabrik", jumlah: 1470 },
                { pekerjaan: "Pekerja Konstruksi", jumlah: 1640 },
                { pekerjaan: "Lainnya", jumlah: 170 },
              ],
            },
            totalPemohon: 1910,
            rekapLayanan: {
              keimigrasian: {
                paspor: 870,
                splp: 190,
                visa: 460,
                izinTinggal: 310,
                lainnya: 50,
              },
              kekonsuleran: {
                legalisasiDokumen: 350,
                suratKeterangan: 270,
                aktaKelahiran: 110,
                aktaKematian: 20,
                pelayananHukum: 65,
                lainnya: 80,
              },
            },
            kesimpulan: {
              pekerjaanTerbanyak: {
                nama: "Pekerja Konstruksi",
                jumlah: 1640,
              },
              pekerjaanTersedikit: {
                nama: "Lainnya",
                jumlah: 170,
              },
              kelompokUsiaTerbanyak: {
                nama: "26-35",
                jumlah: 2660,
              },
              kelompokUsiaTersedikit: {
                nama: "55+",
                jumlah: 262,
              },
              rekapLayananTerbanyak: {
                nama: "Paspor",
                jumlah: 870,
              },
              rekapLayananTersedikit: {
                nama: "Akta Kematian",
                jumlah: 20,
              },
              genderDominan: {
                nama: "Laki-laki",
                jumlah: 4100,
                persentase: 56.0,
              },
            },
            kecamatan: [
              {
                id: "bekasi-utara",
                nama: "Bekasi Utara",
                lat: -6.2085,
                long: 107.0019,
                jumlahPenduduk: {
                  total: 3980,
                  perbandinganTahunSebelumnya: {
                    persentase: 7.5,
                    status: "naik",
                  },
                  berdasarkanGender: {
                    lakiLaki: 2250,
                    perempuan: 1730,
                  },
                  berdasarkanKelompokUsia: [
                    { kelompok: "0-17", jumlah: 320 },
                    { kelompok: "18-25", jumlah: 980 },
                    { kelompok: "26-35", jumlah: 1440 },
                    { kelompok: "36-45", jumlah: 840 },
                    { kelompok: "46-55", jumlah: 260 },
                    { kelompok: "55+", jumlah: 140 },
                  ],
                  berdasarkanPekerjaan: [
                    { pekerjaan: "Pekerja Domestik", jumlah: 780 },
                    { pekerjaan: "Buruh Pabrik", jumlah: 830 },
                    { pekerjaan: "Pekerja Konstruksi", jumlah: 890 },
                    { pekerjaan: "Lainnya", jumlah: 90 },
                  ],
                },
                totalPemohon: 1050,
                rekapLayanan: {
                  keimigrasian: {
                    paspor: 480,
                    splp: 105,
                    visa: 250,
                    izinTinggal: 170,
                    lainnya: 30,
                  },
                  kekonsuleran: {
                    legalisasiDokumen: 190,
                    suratKeterangan: 150,
                    aktaKelahiran: 60,
                    aktaKematian: 12,
                    pelayananHukum: 35,
                    lainnya: 45,
                  },
                },
                kesimpulan: {
                  pekerjaanTerbanyak: {
                    nama: "Pekerja Konstruksi",
                    jumlah: 890,
                  },
                  pekerjaanTersedikit: {
                    nama: "Lainnya",
                    jumlah: 90,
                  },
                  kelompokUsiaTerbanyak: {
                    nama: "26-35",
                    jumlah: 1440,
                  },
                  kelompokUsiaTersedikit: {
                    nama: "55+",
                    jumlah: 140,
                  },
                  rekapLayananTerbanyak: {
                    nama: "Paspor",
                    jumlah: 480,
                  },
                  rekapLayananTersedikit: {
                    nama: "Akta Kematian",
                    jumlah: 12,
                  },
                  genderDominan: {
                    nama: "Laki-laki",
                    jumlah: 2250,
                    persentase: 56.5,
                  },
                },
                status: 3,
              },
            ],
            status: 2,
          },
        ],
      },
      {
        id: "dki-jakarta",
        nama: "DKI Jakarta",
        lat: -6.2088,
        long: 106.8456,
        jumlahPenduduk: {
          total: 12680,
          perbandinganTahunSebelumnya: {
            persentase: 6.2,
            status: "naik",
          },
          berdasarkanGender: {
            lakiLaki: 7120,
            perempuan: 5560,
          },
          berdasarkanKelompokUsia: [
            { kelompok: "0-17", jumlah: 825 },
            { kelompok: "18-25", jumlah: 3580 },
            { kelompok: "26-35", jumlah: 4730 },
            { kelompok: "36-45", jumlah: 2340 },
            { kelompok: "46-55", jumlah: 780 },
            { kelompok: "55+", jumlah: 425 },
          ],
          berdasarkanPekerjaan: [
            { pekerjaan: "Pekerja Domestik", jumlah: 2850 },
            { pekerjaan: "Tenaga Profesional", jumlah: 3670 },
            { pekerjaan: "Pekerja Konstruksi", jumlah: 2180 },
            { pekerjaan: "Lainnya", jumlah: 310 },
          ],
        },
        totalPemohon: 3750,
        rekapLayanan: {
          keimigrasian: {
            paspor: 1580,
            splp: 380,
            visa: 840,
            izinTinggal: 590,
            lainnya: 110,
          },
          kekonsuleran: {
            legalisasiDokumen: 650,
            suratKeterangan: 480,
            aktaKelahiran: 210,
            aktaKematian: 40,
            pelayananHukum: 110,
            lainnya: 150,
          },
        },
        kesimpulan: {
          pekerjaanTerbanyak: {
            nama: "Tenaga Profesional",
            jumlah: 3670,
          },
          pekerjaanTersedikit: {
            nama: "Lainnya",
            jumlah: 310,
          },
          kelompokUsiaTerbanyak: {
            nama: "26-35",
            jumlah: 4730,
          },
          kelompokUsiaTersedikit: {
            nama: "55+",
            jumlah: 425,
          },
          rekapLayananTerbanyak: {
            nama: "Paspor",
            jumlah: 1580,
          },
          rekapLayananTersedikit: {
            nama: "Akta Kematian",
            jumlah: 40,
          },
          genderDominan: {
            nama: "Laki-laki",
            jumlah: 7120,
            persentase: 56.2,
          },
        },
        kabupaten: [
          {
            id: "jakarta-selatan",
            nama: "Jakarta Selatan",
            lat: -6.2615,
            long: 106.8106,
            jumlahPenduduk: {
              total: 6240,
              perbandinganTahunSebelumnya: {
                persentase: 7.1,
                status: "naik",
              },
              berdasarkanGender: {
                lakiLaki: 3480,
                perempuan: 2760,
              },
              berdasarkanKelompokUsia: [
                { kelompok: "0-17", jumlah: 410 },
                { kelompok: "18-25", jumlah: 1780 },
                { kelompok: "26-35", jumlah: 2320 },
                { kelompok: "36-45", jumlah: 1150 },
                { kelompok: "46-55", jumlah: 390 },
                { kelompok: "55+", jumlah: 190 },
              ],
              berdasarkanPekerjaan: [
                { pekerjaan: "Pekerja Domestik", jumlah: 1380 },
                { pekerjaan: "Tenaga Profesional", jumlah: 1850 },
                { pekerjaan: "Pekerja Konstruksi", jumlah: 1030 },
                { pekerjaan: "Lainnya", jumlah: 150 },
              ],
            },
            totalPemohon: 1850,
            rekapLayanan: {
              keimigrasian: {
                paspor: 780,
                splp: 190,
                visa: 410,
                izinTinggal: 290,
                lainnya: 60,
              },
              kekonsuleran: {
                legalisasiDokumen: 320,
                suratKeterangan: 240,
                aktaKelahiran: 110,
                aktaKematian: 20,
                pelayananHukum: 55,
                lainnya: 75,
              },
            },
            kesimpulan: {
              pekerjaanTerbanyak: {
                nama: "Tenaga Profesional",
                jumlah: 1850,
              },
              pekerjaanTersedikit: {
                nama: "Lainnya",
                jumlah: 150,
              },
              kelompokUsiaTerbanyak: {
                nama: "26-35",
                jumlah: 2320,
              },
              kelompokUsiaTersedikit: {
                nama: "55+",
                jumlah: 190,
              },
              rekapLayananTerbanyak: {
                nama: "Paspor",
                jumlah: 780,
              },
              rekapLayananTersedikit: {
                nama: "Akta Kematian",
                jumlah: 20,
              },
              genderDominan: {
                nama: "Laki-laki",
                jumlah: 3480,
                persentase: 55.8,
              },
            },
            kecamatan: [
              {
                id: "kebayoran-baru",
                nama: "Kebayoran Baru",
                lat: -6.2451,
                long: 106.7998,
                jumlahPenduduk: {
                  total: 3240,
                  perbandinganTahunSebelumnya: {
                    persentase: 7.8,
                    status: "naik",
                  },
                  berdasarkanGender: {
                    lakiLaki: 1820,
                    perempuan: 1420,
                  },
                  berdasarkanKelompokUsia: [
                    { kelompok: "0-17", jumlah: 210 },
                    { kelompok: "18-25", jumlah: 920 },
                    { kelompok: "26-35", jumlah: 1210 },
                    { kelompok: "36-45", jumlah: 590 },
                    { kelompok: "46-55", jumlah: 210 },
                    { kelompok: "55+", jumlah: 100 },
                  ],
                  berdasarkanPekerjaan: [
                    { pekerjaan: "Pekerja Domestik", jumlah: 710 },
                    { pekerjaan: "Tenaga Profesional", jumlah: 980 },
                    { pekerjaan: "Pekerja Konstruksi", jumlah: 520 },
                    { pekerjaan: "Lainnya", jumlah: 80 },
                  ],
                },
                totalPemohon: 970,
                rekapLayanan: {
                  keimigrasian: {
                    paspor: 410,
                    splp: 95,
                    visa: 210,
                    izinTinggal: 150,
                    lainnya: 30,
                  },
                  kekonsuleran: {
                    legalisasiDokumen: 170,
                    suratKeterangan: 120,
                    aktaKelahiran: 60,
                    aktaKematian: 12,
                    pelayananHukum: 30,
                    lainnya: 40,
                  },
                },
                kesimpulan: {
                  pekerjaanTerbanyak: {
                    nama: "Tenaga Profesional",
                    jumlah: 980,
                  },
                  pekerjaanTersedikit: {
                    nama: "Lainnya",
                    jumlah: 80,
                  },
                  kelompokUsiaTerbanyak: {
                    nama: "26-35",
                    jumlah: 1210,
                  },
                  kelompokUsiaTersedikit: {
                    nama: "55+",
                    jumlah: 100,
                  },
                  rekapLayananTerbanyak: {
                    nama: "Paspor",
                    jumlah: 410,
                  },
                  rekapLayananTersedikit: {
                    nama: "Akta Kematian",
                    jumlah: 12,
                  },
                  genderDominan: {
                    nama: "Laki-laki",
                    jumlah: 1820,
                    persentase: 56.2,
                  },
                },
                status: 3,
              },
            ],
            status: 2,
          },
        ],
        status: 1,
      },
    ],
  },
};
