export interface FilterMap {
  provinsi: string;
  kab: string;
  kec: string;
}

interface Geometry {
  // type: "MultiPolygon";
  type:
    | "Point"
    | "MultiPoint"
    | "LineString"
    | "MultiLineString"
    | "Polygon"
    | "MultiPolygon"
    | "GeometryCollection"
    | "Feature"
    | "FeatureCollection";
  coordinates: any[];
}

interface Properties {
  KODE: number;
  NAME_0: string;
  NAME_1: string;
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface ResponseGeoData {
  type:
    | "Point"
    | "MultiPoint"
    | "LineString"
    | "MultiLineString"
    | "Polygon"
    | "MultiPolygon"
    | "GeometryCollection"
    | "Feature"
    | "FeatureCollection";
  name: string;
  features: Feature[];
}

export interface Koordinat {
  lat: number;
  lng: number;
}

export interface MasterProvinsiData {
  id: number;
  nama: string;
  koordinat?: Koordinat;
}
export interface MasterKabupatenData {
  id: number;
  nama: string;
  provinsiId: number;
  koordinat?: Koordinat;
}
export interface MasterKecamatanData {
  id: number;
  nama: string;
  kabupatenId: number;
  provinsiId: number;
  koordinat?: Koordinat;
}

/**
 * Interface for Monitoring WNI Data Structure
 */

// Meta information
interface Meta {
  timestamp: string;
  totalProvinsi: number;
  totalKabupaten: number;
  totalKecamatan: number;
}

// Filter options
interface Filters {
  provinsi: string[];
  negara: string[];
  tahun: number[];
}

// Demographic data by gender
interface GenderData {
  lakiLaki: number;
  perempuan: number;
}

// Age group data
interface AgeGroupData {
  kelompok: string;
  jumlah: number;
}

// Occupation data
interface OccupationData {
  pekerjaan: string;
  jumlah: number;
}

// Year-over-year comparison
interface YearlyComparison {
  persentase: number;
  status: "naik" | "turun" | "tetap";
}

// Population demographic data
interface PopulationData {
  total: number;
  perbandinganTahunSebelumnya: YearlyComparison;
  berdasarkanGender: GenderData;
  berdasarkanKelompokUsia: AgeGroupData[];
  berdasarkanPekerjaan: OccupationData[];
}

// Immigration services data
interface ImmigrationServices {
  paspor: number;
  splp: number;
  visa: number;
  izinTinggal: number;
  lainnya: number;
}

// Consular services data
interface ConsularServices {
  legalisasiDokumen: number;
  suratKeterangan: number;
  aktaKelahiran: number;
  aktaKematian: number;
  pelayananHukum: number;
  lainnya: number;
}

// All services recap
interface ServicesRecap {
  keimigrasian: ImmigrationServices;
  kekonsuleran: ConsularServices;
}

// Summary data item with name and count
interface SummaryDataItem {
  nama: string;
  jumlah: number;
  persentase?: number;
}

// Summary conclusions
interface Conclusions {
  pekerjaanTerbanyak: SummaryDataItem;
  pekerjaanTersedikit: SummaryDataItem;
  kelompokUsiaTerbanyak: SummaryDataItem;
  kelompokUsiaTersedikit: SummaryDataItem;
  rekapLayananTerbanyak: SummaryDataItem;
  rekapLayananTersedikit: SummaryDataItem;
  genderDominan: SummaryDataItem;
}

// Base location data
export interface LocationBase {
  id: string;
  nama: string;
  lat: number;
  long: number;
  jumlahPenduduk: PopulationData;
  totalPemohon: number;
  status?: number; // 1 = provinsi, 2 = kabupaten, 3 = kecamatan
  rekapLayanan: ServicesRecap;
  kesimpulan: Conclusions;
  provinsi?: LocationBase[];
  kecamatan?: LocationBase[];
  kabupaten?: LocationBase[];
}

// Kecamatan (sub-district) data
// interface Kecamatan extends LocationBase {}

// Kabupaten (district) data
// interface Kabupaten extends LocationBase {
//   kecamatan?: Kecamatan[];
// }

// // Provinsi (province) data
// export interface Provinsi extends LocationBase {
//   kabupaten?: Kabupaten[];
// }

// Main data structure
export interface MonitoringData {
  provinsi: LocationBase[];
}

// Complete response structure
export interface MonitoringWNIResponse {
  meta: Meta;
  filters: Filters;
  data: MonitoringData;
}
