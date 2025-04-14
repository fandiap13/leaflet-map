"use client";

import { useEffect, useState } from "react";
import PantauMap from "../components/PetaTematik/PantauMap";
import LoadingPageComponent from "@/components/LoadingPageComponent";

export default function Home() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingPageComponent />
  }

  return <PantauMap />;
}
