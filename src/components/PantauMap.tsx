"use client"

import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
// import L from 'leaflet';
import { Modal } from 'flowbite-react';
import dynamic from 'next/dynamic';

export interface ProvinceData {
    province: string;
    capital: string;
    population: number;
    males: number;
    females: number;
    coordinates: [number, number];
    description: string;
    economicData: {
        gdp: string;
        mainIndustries: string[];
    };
    socialIndicators: {
        literacy: string;
        poverty: string;
        unemployment: string;
    };
}

// const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
// const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
// const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
// const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => ({ default: mod.MapContainer })), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => ({ default: mod.TileLayer })), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => ({ default: mod.Marker })), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => ({ default: mod.Popup })), { ssr: false });

// Ensure Leaflet is only loaded in the browser
const isBrowser = typeof window !== "undefined";
const L = isBrowser ? require("leaflet") : null;

const populationData: ProvinceData[] = [
    {
        province: 'Jawa Barat',
        capital: 'Bandung',
        population: 49189794,
        males: 24594897,
        females: 24594897,
        coordinates: [-6.9175, 107.6191],
        description: 'Jawa Barat adalah provinsi dengan jumlah penduduk terpadat di Indonesia, terletak di bagian barat Pulau Jawa.',
        economicData: {
            gdp: 'Rp 1.841 triliun',
            mainIndustries: ['Pertanian', 'Manufaktur', 'Pariwisata']
        },
        socialIndicators: {
            literacy: '95.3%',
            poverty: '8.6%',
            unemployment: '6.5%'
        }
    },
    {
        province: 'Jawa Timur',
        capital: 'Surabaya',
        population: 39294118,
        males: 19647059,
        females: 19647059,
        coordinates: [-7.2575, 112.7521],
        description: 'Jawa Timur merupakan provinsi terbesar kedua di Pulau Jawa dengan ekonomi yang kuat dan beragam.',
        economicData: {
            gdp: 'Rp 1.654 triliun',
            mainIndustries: ['Industri', 'Perdagangan', 'Perikanan']
        },
        socialIndicators: {
            literacy: '94.7%',
            poverty: '10.2%',
            unemployment: '5.9%'
        }
    },
    // Tambahkan provinsi lain dengan detail serupa
];

// Custom marker icon
const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

export default function PantauMap() {
    const [isClient, setIsClient] = useState<boolean>(false);
    const [selectedProvince, setSelectedProvince] = useState<ProvinceData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleMarkerClick = (province: ProvinceData) => {
        setSelectedProvince(province);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProvince(null);
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div>Loading...</div>
    }

    return (
        // <div className="container mx-auto p-4">
        <div className="w-full h-screen max-h-screen">
            {/* <h1 className="text-2xl font-bold mb-4">Mappig Gw</h1> */}

            {/* Peta */}
            <div>
                <MapContainer
                    center={[-2.8, 120]}
                    zoom={4}
                    className='w-full h-screen'
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {populationData.map((province, index) => (
                        <Marker
                            key={index}
                            position={province.coordinates as L.LatLngTuple}
                            icon={customIcon}
                            eventHandlers={{
                                click: () => handleMarkerClick(province)
                            }}
                        >
                            <Popup>
                                <div>
                                    <h3 className="font-bold text-lg">{province.province}</h3>
                                    <p>Total Penduduk: {province.population.toLocaleString()} jiwa</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            {/* Modal Detail Provinsi */}
            {selectedProvince && (
                <Modal show={isModalOpen} onClose={closeModal} size="4xl" style={{ zIndex: "9999" }}>
                    <Modal.Header>{selectedProvince.province}</Modal.Header>
                    <Modal.Body>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Kolom Kiri - Informasi Umum */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3">Informasi Umum</h3>
                                <p className="mb-4">{selectedProvince.description}</p>

                                <div className="bg-gray-100 p-4 rounded">
                                    <h4 className="font-bold mb-2">Statistik Penduduk</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <p className="font-semibold">Total Penduduk</p>
                                            <p>{selectedProvince.population.toLocaleString()} jiwa</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-blue-600">Laki-laki</p>
                                            <p>{selectedProvince.males.toLocaleString()} jiwa</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-pink-600">Perempuan</p>
                                            <p>{selectedProvince.females.toLocaleString()} jiwa</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Ibu Kota</p>
                                            <p>{selectedProvince.capital}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Kolom Kanan - Data Ekonomi dan Sosial */}
                            <div>
                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold mb-3">Data Ekonomi</h3>
                                    <div className="bg-gray-100 p-4 rounded">
                                        <p><strong>GDP:</strong> {selectedProvince.economicData.gdp}</p>
                                        <p><strong>Industri Utama:</strong></p>
                                        <ul className="list-disc pl-5">
                                            {selectedProvince.economicData.mainIndustries.map((industry, idx) => (
                                                <li key={idx}>{industry}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Indikator Sosial</h3>
                                    <div className="bg-gray-100 p-4 rounded">
                                        <p><strong>Tingkat Literasi:</strong> {selectedProvince.socialIndicators.literacy}</p>
                                        <p><strong>Tingkat Kemiskinan:</strong> {selectedProvince.socialIndicators.poverty}</p>
                                        <p><strong>Tingkat Pengangguran:</strong> {selectedProvince.socialIndicators.unemployment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}

