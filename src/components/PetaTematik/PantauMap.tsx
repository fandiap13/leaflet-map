"use client"

import MapView from './MapView';
import NavbarComponent from '../layout/NavbarComponent';
import { useSidebarContext } from '@/context/SidebarContext';
import { exampleMonitoringData } from '@/services/pantauDataNew';
import { useState } from 'react';
import { FilterMap } from '@/types/PantauMapTypeNew';
const geojsonUrl: string = process.env.NEXT_PUBLIC_API_GEO_JSON as string;

const initialFilterData: FilterMap = {
    provinsi: "",
    kab: "",
    kec: "",
};

export default function PantauMap() {
    const [filterData, setFilterData] = useState(initialFilterData);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilterData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className='w-full'>
            <NavbarComponent />

            <div className='w-full h-full lg:h-[calc(100vh-80px)]'>
                <MapView
                    populationData={exampleMonitoringData.data.provinsi}
                    geoUrl={geojsonUrl}
                    filterData={filterData}
                    handleChange={handleChange}
                    setFilterData={setFilterData}
                />
            </div>
        </div>
    );
}

