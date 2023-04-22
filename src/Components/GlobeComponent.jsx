import React, { useRef, useState, useEffect } from "react";
import Globe from "react-globe.gl";
import { globeTexture } from "../assets";
import { globeData, markerSvg } from "../Constants/constants";

const GlobeComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const globeEl = useRef();

  useEffect(() => {
    const handleResize = () => {
      const viewPort = window.innerWidth;
      setIsMobile(viewPort < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    globeEl.current.controls().autoRotate = false;
    globeEl.current.controls().autoRotateSpeed = 0.6;
    globeEl.current.pointOfView({ lat: 46.2, lng: -1.0, altitude: 3 }, 4000);
    globeEl.current.controls().enableZoom = false;
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center cursor-grab">
      <Globe
        ref={globeEl}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={globeTexture}
        htmlElementsData={globeData}
        htmlElement={(d) => {
          const el = document.createElement("div");
          el.innerHTML = markerSvg;
          el.style.color = d.color;
          el.style.width = `${d.size}px`;

          el.style["pointer-events"] = "auto";
          el.style.cursor = "pointer";
          el.onclick = () => console.info(d);
          return el;
        }}
        atmosphereColor="#29c27f"
        width={isMobile ? 600 : 1000}
        height={isMobile ? 600 : 1000}
      />
    </div>
  );
};

export default GlobeComponent;
