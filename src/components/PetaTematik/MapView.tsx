"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react'
// import 'leaflet/dist/leaflet.css';
// import "leaflet-defaulticon-compatibility"
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
// import "leaflet.fullscreen";
// import "leaflet.fullscreen/Control.FullScreen.css"; // Pastikan CSS diimport
// import 'leaflet-minimap/dist/Control.MiniMap.min.css';

import FullscreenControlComponent from './FullScreenControlComponent';
import { Button, Label, Modal, Select } from 'flowbite-react';
import { FilterMap, LocationBase, ResponseGeoData } from '@/types/PantauMapTypeNew';
import { indonesiaBounds, kabupatenData, kecamatanData, provinsiData } from '@/services/pantauDataNew';
import { getCoordinatesAPI, getGeoJson } from '@/services/coordinate';
import { CoordinatePlace } from '@/types/coordinateType';
import Swal from 'sweetalert2';
import LoadingComponentNew from '../LoadingComponentNew';
// import L from 'leaflet';

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => ({ default: mod.MapContainer })), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => ({ default: mod.TileLayer })), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => ({ default: mod.Marker })), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => ({ default: mod.Popup })), { ssr: false });
const GeoJSON = dynamic(() => import('react-leaflet').then((mod) => mod.GeoJSON), { ssr: false });
const ShowMapBounds = dynamic(() => import('@/components/PetaTematik/ShowMapBounds'), { ssr: false });

// Ensure Leaflet is only loaded in the browser
// const isBrowser = typeof window !== "undefined";
// const L = isBrowser ? require("leaflet") : null;

// MiniMap component
const MiniMapControl = dynamic(
    () => {
        return import('./MiniMapControl');
    },
    { ssr: false }
);

const LeafletCSS = () => {
    useEffect(() => {
        require('leaflet/dist/leaflet.css');
        require('leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css');
        require('leaflet.fullscreen/Control.FullScreen.css');
        require('leaflet-minimap/dist/Control.MiniMap.min.css');
    }, []);
    return null;
};

interface MapViewProps {
    geoUrl: string;
    populationData: LocationBase[],
    filterData: FilterMap;
    setFilterData: React.Dispatch<React.SetStateAction<FilterMap>>;
    handleChange: (e: any) => void;
}

const initialGeojsonStyle: any = {
    color: "rgba(255, 0, 0)",
    weight: 2,
    dashArray: '3',
    fillOpacity: 0.5,
    fillColor: 'white',
    opacity: 1,
}

const MapView: React.FC<MapViewProps> = ({ geoUrl, populationData, filterData, setFilterData, handleChange }) => {
    const filterProvById = (id: number | string) => {
        return provinsiData.find((provinsi) =>
            provinsi.id == id
        );
    };

    const filterKabById = (id: number | string) => {
        return kabupatenData.find((kab) =>
            kab.id == id
        );
    };

    const filterKecById = (id: number | string) => {
        return kecamatanData.find((kec) =>
            kec.id == id
        );
    };

    const filteredKabupaten = kabupatenData.filter(
        (kab) => kab.provinsiId.toString() === filterData.provinsi
    );

    const filteredKecamatan = kecamatanData.filter(
        (kec) => kec.kabupatenId.toString() === filterData.kab
    );

    const onEachFeature = (feature: any, layer: any) => {
        layer.on({
            mouseover: (e: any) => {
                const layer = e.target;
                layer.setStyle({
                    // weight: 2,
                    // color: '#666',
                    dashArray: '',
                    fillOpacity: 0.9
                });
            },
            mouseout: (e: any) => {
                const layer = e.target;
                layer.setStyle(geoJsonStyle);
            },
            click: (e: any) => {
                // Logic saat region diklik
                const regionName = feature.properties.name;
                // setSelectedRegion(regionName);
                // Di sini Anda bisa melakukan pencarian atau operasi lain berdasarkan region
            }
        });
    };

    const [mapKey, setMapKey] = useState(0);

    const [geoJsonStyle, setGeoJsonStyle] = useState<any>(initialGeojsonStyle); // GeoJsonPropsStyle

    const [dataMap, setDataMap] = useState<LocationBase[]>(populationData);
    const [loadingGet, setLoadingGet] = useState(false);
    const [geoData, setGeoData] = useState<ResponseGeoData | null>(null);

    const [selectedProvince, setSelectedProvince] = useState<LocationBase | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [isNotDisabledZoom, setisNotDisabledZoom] = useState(true);
    const [maxBounds, setMaxBounds] = useState<L.LatLngBoundsExpression>(indonesiaBounds);
    const [centerPosition, setCenterPosition] = useState<[number, number]>(dataMap.length > 0 ? [dataMap[0].lat, dataMap[0].long] : [-2.8, 120]);
    const [zoom, setZoom] = useState<number>(5);
    const [minZoom, setMinZoom] = useState<number>(5)
    const [statusMap, setStatusMap] = useState<number>(dataMap.length > 0 && dataMap[0].status ? dataMap[0].status : 1);
    const [loading, setLoading] = useState(true);
    const [customIcon, setCustomIcon] = useState<any>(null);

    // Initialize Leaflet icon on client-side only
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const L = require('leaflet');
            require('leaflet-defaulticon-compatibility');
            require('leaflet.fullscreen');

            setCustomIcon(
                new L.Icon({
                    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41]
                })
            );

            setLoading(false);
        }
    }, []);

    const reloadMap = async () => {
        setMapKey(prev => prev + 1);
    };

    const aturUlang = () => {
        setGeoJsonStyle(initialGeojsonStyle);
    }

    const handleMarkerClick = async (location: LocationBase) => {
        setSelectedProvince(location);
        setIsModalOpen(true);
    }

    const handleChangeProv = (e: any) => {
        if (e.target.value == "") {
            setStatusMap(1);
        } else {
            setStatusMap(1);
        }

        handleChange(e);
        setFilterData((prev) => ({
            ...prev,
            kab: "",
            kec: "",
        }));
    }

    const handleChangeKab = (e: any) => {
        if (e.target.value == "") {
            setStatusMap(1);
        } else {
            setStatusMap(2);
        }

        handleChange(e);
        setFilterData((prev) => ({
            ...prev,
            kec: "",
        }));

    }

    const handleChangeKec = (e: any) => {
        if (e.target.value == "") {
            setStatusMap(2);
        } else {
            setStatusMap(3);
        }

        handleChange(e);
    }

    const handleSubmitFilterData = async (e: any) => {
        e.preventDefault();

        if (filterData.provinsi == "") {
            return;
        };

        let locationName: string = "";
        let provinceName: string = "";
        let cityName: string = "";
        let countyName: string = "";
        let locationId: string | number = "";

        // provinsi
        const province = filterProvById(filterData.provinsi);
        const kabupaten = filterKabById(filterData.kab);
        const kecamatan = filterKecById(filterData.kec);

        provinceName = province?.nama || "";
        countyName = kabupaten?.nama || "";
        cityName = kecamatan?.nama || "";

        // provinsi
        if (statusMap == 1) {
            locationName = province?.nama ? `${province.nama}` : "";
            locationId = province?.id || "";
        }
        // kabupaten
        if (statusMap == 2) {
            locationName = `${kabupaten?.nama}, ${province?.nama}` || "";
            locationId = kabupaten?.id || "";
        }
        // kecamatan
        if (statusMap == 3) {
            locationName = `${kecamatan?.nama}, ${kabupaten?.nama}, ${province?.nama} ` || "";
            locationId = kecamatan?.id || "";
        }

        console.log({
            q: locationName,
            addressType: statusMap,
            city: cityName,
            county: countyName,
            state: provinceName,
        });

        try {
            setLoadingGet(true);
            const data = await getCoordinatesAPI({
                q: locationName,
                addressType: statusMap,
                city: cityName,
                county: countyName,
                state: provinceName,
            });

            if (data.length > 0) {
                const response: CoordinatePlace = data[0];

                // buat geo baru
                const dataGeoJson: any = await getGeoJson({ placeID: response.osm_id, country: "Indonesia" });
                console.log({ dataGeoJson });
                if (dataGeoJson) {
                    setGeoData(dataGeoJson);
                }

                setCenterPosition([parseFloat(response.lat), parseFloat(response.lon)])

                if (statusMap == 1) {
                    setZoom(9);
                    setMinZoom(7);

                    const kabData = populationData.find((prov) => prov.id == locationId);
                    if (kabData?.kabupaten && kabData.kabupaten.length > 0) {
                        setDataMap(kabData.kabupaten);
                        console.log({ kabData: kabData?.kabupaten });
                    }

                    if (dataGeoJson) {
                        setGeoJsonStyle((prev: any) => ({
                            ...prev,
                            fillColor: 'rgba(255,0,0)',
                            fillOpacity: 0.3,
                            weight: 2,
                            opacity: 1,
                            color: 'white',
                        }));
                    }
                }

                if (statusMap == 2) {
                    setZoom(10);
                    setMinZoom(9);

                    const kecData = dataMap.find((kab) => kab.id === locationId);
                    if (kecData?.kecamatan && kecData.kecamatan.length > 0) {
                        setDataMap(kecData.kecamatan);
                        console.log({ kecData: kecData?.kecamatan });
                    }

                    if (dataGeoJson) {
                        setGeoJsonStyle((prev: any) => ({
                            ...prev,
                            fillColor: '#3388ff',
                            weight: 2,
                            opacity: 1,
                            color: 'white',
                        }));
                    }

                    //     // setCustomIcon(prev =>
                    //     //     new L.Icon({
                    //     //         ...prev.options,
                    //     //         iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    //     //     })
                    //     // );
                    // }
                }

                if (statusMap == 3) {
                    setZoom(12);
                    setMinZoom(10);

                    if (dataGeoJson) {
                        setGeoJsonStyle((prev: any) => ({
                            ...prev,
                            fillColor: 'yellow',
                            weight: 2,
                            opacity: 1,
                            color: 'white',
                        }));

                        //     // setCustomIcon(prev =>
                        //     //     new L.Icon({
                        //     //         ...prev.options,
                        //     //         iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        //     //     })
                        //     // );
                    }
                }

                setisNotDisabledZoom(false);
            } else {
                Swal.fire({
                    title: "Peringatan!",
                    text: "Data lokasi tidak ditemukan!",
                    icon: "error"
                });
            }
        } catch (error: any) {
            Swal.fire({
                title: "Error!",
                text: error.message || "Data lokasi tidak ditemukan!",
                icon: "error"
            });
        } finally {
            setLoadingGet(false);
            reloadMap();
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProvince(null);
    };

    return (
        <div className='w-full h-full flex flex-col-reverse lg:flex-row'>
            <LeafletCSS />
            <div className='w-full lg:w-3/4'>
                {!loading && (
                    <MapContainer
                        key={mapKey}
                        center={centerPosition}
                        zoom={zoom}
                        minZoom={minZoom}
                        maxBounds={maxBounds}
                        maxBoundsViscosity={1.0}
                        className='w-full h-screen lg:h-full'
                    // scrollWheelZoom={isNotDisabledZoom}
                    // doubleClickZoom={isNotDisabledZoom}
                    // boxZoom={isNotDisabledZoom}
                    // touchZoom={isNotDisabledZoom}
                    // keyboard={isNotDisabledZoom}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />

                        {/* <ShowMapBounds /> */}

                        {/* Tambahkan FullscreenControl */}
                        <FullscreenControlComponent />

                        {/* Add MiniMap Component */}
                        <MiniMapControl position="bottomright" />

                        {/* {Object.entries(provincePolygons).map(([provinceName, geoJSON]) => (
                                 <GeoJSON
                                     key={provinceName}
                                     data={geoJSON}
                                     style={geoJSONStyle}
                                     onEachFeature={onEachFeature}
                                 />
                             ))} */}

                        {geoData && (
                            <GeoJSON
                                data={geoData}
                                style={geoJsonStyle}
                                onEachFeature={onEachFeature}
                            // onEachFeature={(feature, layer) => {
                            //     // if (feature.properties && feature.properties.Propinsi) {
                            //     //     layer.bindPopup(`<b>Provinsi:</b> ${feature.properties.Propinsi}`);
                            //     // }
                            //     layer.on("click", () => handleFeatureClick(feature));
                            // }}
                            />
                        )}

                        {dataMap.map((province, index) => (
                            <Marker
                                key={index}
                                position={[province.lat, province.long] as L.LatLngTuple}
                                icon={customIcon}
                                eventHandlers={{
                                    click: () => handleMarkerClick(province)
                                }}
                            >
                                {/* <Popup>
                         <div>
                             <h3 className="font-bold text-lg">{province.nama}</h3>
                             <p>Total Penduduk: {province.total_pemohon.toLocaleString()} jiwa</p>
                         </div>
                     </Popup> */}
                            </Marker>
                        ))}
                    </MapContainer>
                )}
            </div>

            <div className="w-full lg:w-1/4 h-auto lg:h-[calc(100vh-80px)] bg-white  border p-4">
                <h3 className='font-semibold text-lg'>Pencarian Wilayah</h3>

                <form onSubmit={handleSubmitFilterData}>
                    <div className="flex flex-row lg:flex-col gap-2 mt-2">
                        <div className='flex-1'>
                            <div className="mb-2 block">
                                <Label htmlFor="provinsi">Provinsi</Label>
                            </div>
                            <Select name="provinsi" id="provinsi" onChange={handleChangeProv} value={filterData.provinsi} required>
                                <option value="">-- pilih --</option>
                                {provinsiData.map((prov) => (
                                    <option key={prov.id} value={prov.id}>
                                        {prov.nama}
                                    </option>
                                ))}
                            </Select>
                        </div>

                        <div className='flex-1'>
                            <div className="mb-2 block">
                                <Label htmlFor="kab">Kab/Kota</Label>
                            </div>
                            <Select name="kab" id="kab" onChange={handleChangeKab} value={filterData.kab}>
                                <option value="">-- pilih --</option>
                                {filteredKabupaten.map((kab) => (
                                    <option key={kab.id} value={kab.id}>
                                        {kab.nama}
                                    </option>
                                ))}
                            </Select>
                        </div>

                        <div className='flex-1'>
                            <div className="mb-2 block">
                                <Label htmlFor="kec">Kecamatan</Label>
                            </div>
                            <Select name="kec" id="kec" onChange={handleChangeKec}
                                value={filterData.kec}>
                                <option value="">-- pilih --</option>
                                {filteredKecamatan.map((kec) => (
                                    <option key={kec.id} value={kec.id}>
                                        {kec.nama}
                                    </option>
                                ))}
                            </Select>
                        </div>
                    </div>

                    <div className='mt-4 flex flex-row lg:flex-col gap-2'>
                        <Button type='submit' color='warning' fullSized className='rounded'>Tampilkan</Button>

                        <Button
                            type='button'
                            color='dark'
                            onClick={aturUlang}
                            fullSized
                            className='w-full bg-dark/80 text-white hover:bg-dark/70 rounded'>
                            Atur Ulang
                        </Button>
                    </div>
                </form>
            </div>


            {/* Modal Detail Provinsi */}
            {selectedProvince && (
                <Modal show={isModalOpen} onClose={closeModal} size="4xl" style={{ zIndex: "9999" }}>
                    <Modal.Header className="">{selectedProvince.nama}</Modal.Header>
                    <Modal.Body className="space-y-6 bg-white">
                        <div>
                            <h3 className="text-lg font-semibold">Jumlah Penduduk</h3>
                            <p>Total: {selectedProvince.jumlahPenduduk.total.toLocaleString()}</p>
                            <p>
                                Perbandingan Tahun Sebelumnya: {selectedProvince.jumlahPenduduk.perbandinganTahunSebelumnya.persentase}% (
                                {selectedProvince.jumlahPenduduk.perbandinganTahunSebelumnya.status})
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">Berdasarkan Gender</h3>
                            <ul className="list-disc ml-5">
                                <li>Laki-laki: {selectedProvince.jumlahPenduduk.berdasarkanGender.lakiLaki.toLocaleString()}</li>
                                <li>Perempuan: {selectedProvince.jumlahPenduduk.berdasarkanGender.perempuan.toLocaleString()}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">Kelompok Usia</h3>
                            <ul className="list-disc ml-5">
                                {selectedProvince.jumlahPenduduk.berdasarkanKelompokUsia.map((item: any) => (
                                    <li key={item.kelompok}>
                                        {item.kelompok}: {item.jumlah.toLocaleString()}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">Pekerjaan</h3>
                            <ul className="list-disc ml-5">
                                {selectedProvince.jumlahPenduduk.berdasarkanPekerjaan.map((item: any) => (
                                    <li key={item.pekerjaan}>
                                        {item.pekerjaan}: {item.jumlah.toLocaleString()}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">Total Pemohon: {selectedProvince.totalPemohon.toLocaleString()}</h3>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">Kesimpulan</h3>
                            <ul className="list-disc ml-5">
                                <li>Pekerjaan Terbanyak: {selectedProvince.kesimpulan.pekerjaanTerbanyak.nama} ({selectedProvince.kesimpulan.pekerjaanTerbanyak.jumlah})</li>
                                <li>Pekerjaan Tersedikit: {selectedProvince.kesimpulan.pekerjaanTersedikit.nama} ({selectedProvince.kesimpulan.pekerjaanTersedikit.jumlah})</li>
                                <li>Usia Terbanyak: {selectedProvince.kesimpulan.kelompokUsiaTerbanyak.nama} ({selectedProvince.kesimpulan.kelompokUsiaTerbanyak.jumlah})</li>
                                <li>Usia Tersedikit: {selectedProvince.kesimpulan.kelompokUsiaTersedikit.nama} ({selectedProvince.kesimpulan.kelompokUsiaTersedikit.jumlah})</li>
                                <li>Gender Dominan: {selectedProvince.kesimpulan.genderDominan.nama} ({selectedProvince.kesimpulan.genderDominan.jumlah} orang, {selectedProvince.kesimpulan.genderDominan.persentase}%)</li>
                                <li>Layanan Terbanyak: {selectedProvince.kesimpulan.rekapLayananTerbanyak.nama} ({selectedProvince.kesimpulan.rekapLayananTerbanyak.jumlah})</li>
                                <li>Layanan Tersedikit: {selectedProvince.kesimpulan.rekapLayananTersedikit.nama} ({selectedProvince.kesimpulan.rekapLayananTersedikit.jumlah})</li>
                            </ul>
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            <LoadingComponentNew loading={loadingGet} />
        </div>
    )
}

export default React.memo(MapView)