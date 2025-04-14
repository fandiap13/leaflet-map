import { Feature, ResponseGeoData } from "@/types/PantauMapTypeNew";
import axios from "axios";
import osmtogeojson from "osmtogeojson";

export const getCoordinatesAPI = async ({
  q,
  country = "Indonesia",
  details = 1,
  addressType,
  city,
  county,
  state,
}: {
  q: string;
  state?: string;
  city?: string;
  county?: string;
  country?: string;
  details?: number;
  addressType: number;
}) => {
  try {
    const search = q.toLowerCase().trim() == "dki jakarta" ? "Jakarta" : q;

    let params: any = {
      format: "json",
      addressdetails: details,
    };

    if (addressType == 1) {
      params = {
        ...params,
        state: state,
      };
    } else if (addressType == 2) {
      params = {
        ...params,
        state: state,
        county: county,
      };
    } else if (addressType == 3) {
      params = {
        ...params,
        state: state,
        county: county,
        city: city,
      };
    } else {
      params = {
        q: `${search}, ${country}`,
      };
    }

    const { data } = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params,
      }
    );

    // const query = `
    // [out:json][timeout:25];
    // area["name"="Indonesia"]["admin_level"="2"]->.a;
    // (
    //   relation["admin_level"="4"]["boundary"="administrative"](area.a);
    // );
    // out body;
    // >;
    // out skel qt;
    // `;

    // await fetch("https://overpass-api.de/api/interpreter", {
    //   method: "POST",
    //   body: query,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data); // use osmtogeojson to convert if needed
    //   });

    // console.log({ data });

    // const searchState =
    //   addressType == 1
    //     ? "state"
    //     : addressType == 2
    //     ? "city"
    //     : addressType == 3
    //     ? "city_district"
    //     : "";

    // const dataFilter = data.filter(
    //   (item: any) => item.addresstype == searchState
    // );

    // console.log({ dataFilter });

    // if (
    //   dataFilter.length > 0 &&
    //   (searchState == "" || search == "Jakarta" || data.length == 1)
    // ) {
    //   // const responseData =
    //   //   searchState == "" || search == "Jakarta" || data.length == 1
    //   //     ? data
    //   //     : dataFilter;
    //   // return responseData;
    //   return dataFilter;
    // } else {
    //   return data;
    // }

    return data;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

// const convertOverpassToGeoData = (overpassData: any): ResponseGeoData => {
//   const relation = overpassData.elements.find(
//     (el: any) => el.type === "relation"
//   );
//   if (!relation) throw new Error("Relation not found in Overpass response");

//   const outerMembers = relation.members.filter(
//     (m: any) => m.role === "outer" && m.geometry
//   );

//   const coordinates = outerMembers.map((member: any) =>
//     member.geometry.map((point: any) => [point.lon, point.lat])
//   );

//   const feature: Feature = {
//     type: "Feature",
//     geometry: {
//       type: coordinates.length > 1 ? "MultiPolygon" : "Polygon",
//       // type: "Polygon",
//       coordinates: coordinates.length > 1 ? [coordinates] : [coordinates[0]],
//     },
//     properties: {
//       KODE: relation.id,
//       NAME_0: relation.tags?.["name"] || "Unknown",
//       NAME_1: relation.tags?.["name"] || "Unknown",
//     },
//   };

//   const responseGeoData: ResponseGeoData = {
//     type: "FeatureCollection",
//     name: relation.tags?.["name"] || "Unknown",
//     features: [feature],
//   };

//   return responseGeoData;
// };

// export const getGeoJson = async ({
//   placeID,
//   country,
// }: {
//   placeID?: string | number;
//   country: string;
// }) => {
//   try {
//     let response;
//     // if (placeID) {
//     //   response = await axios.get(
//     //     `https://overpass-api.de/api/interpreter?data=[out:json];relation(${placeID});out%20geom;`
//     //   );
//     // const geoData = convertOverpassToGeoData(response?.data);
//     // } else {
//     const overpassQuery = `
//         [out:json];
//         area[name="${country}"]->.searchArea;
//         relation["admin_level"="4"]["boundary"="administrative"](area.searchArea);
//         out body;
//         >;
//         out skel qt;
//       `;
//     response = await axios.post(
//       "https://overpass-api.de/api/interpreter",
//       overpassQuery
//     );
//     // console.log(response.data);
//     // console.log(response.data.elements);

//     if (!response.data.elements || response.data.elements.length === 0) {
//       console.error("No elements found in response");
//       return null;
//     }

//     // Untuk debugging
//     const relations = response.data.elements.filter(
//       (el: any) => el.type === "relation"
//     );
//     const nodes = response.data.elements.filter(
//       (el: any) => el.type === "node"
//     );
//     const ways = response.data.elements.filter((el: any) => el.type === "way");

//     console.log(
//       `Found: ${relations.length} relations, ${ways.length} ways, ${nodes.length} nodes`
//     );

//     const geoData = {
//       type: "FeatureCollection",
//       features: response.data.elements
//         .filter((el: any) => el.nodes && Array.isArray(el.nodes))
//         .map((el: any) => ({
//           type: "Feature",
//           properties: el.tags,
//           geometry: {
//             type: "Polygon",
//             coordinates: [
//               el.nodes.map((nodeId: number) => {
//                 const node = response.data.elements.find(
//                   (n: any) => n.id === nodeId
//                 );
//                 return [node?.lon, node?.lat];
//               }),
//             ],
//           },
//         })),
//     };

//     // }

//     // const geoData = convertOverpassToGeoData(response?.data);
//     // console.log({ geoJson });

//     console.log({ geoData });

//     return geoData;
//   } catch (error) {
//     console.error("Error fetching geojson:", error);
//     // return null;
//     throw error;
//   }
// };

export const getGeoJson = async ({
  placeID,
  country,
}: {
  placeID?: string | number;
  country: string;
}) => {
  try {
    const response = await axios.get(
      `https://overpass-api.de/api/interpreter?data=[out:json];relation(${placeID});out%20geom;`
      // `https://overpass-api.de/api/interpreter?data=[out:json];relation(${placeID});(._;>>;);out body;`
    );
    const geoJson = osmtogeojson(response.data);
    return geoJson;
    // console.log({ geoJson });
    // const geoData = convertOverpassToGeoData(response?.data);
    // return geoData;
  } catch (error) {
    console.error("Error fetching geojson:", error);
    // return null;
    throw error;
  }
};
