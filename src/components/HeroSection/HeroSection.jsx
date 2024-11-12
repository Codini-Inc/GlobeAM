"use client";

import { useEffect, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

const useMapChart = (chartDivRef) => {
  const [mapState, setMapState] = useState({
    root: null,
    chart: null,
    series: {},
  });

  useEffect(() => {
    if (!chartDivRef.current || mapState.root) return;

    const root = am5.Root.new(chartDivRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    root.container.set("width", am5.percent(100));
    root.container.set("height", am5.percent(100));

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        rotationX: 0,
        projection: am5map.geoOrthographic(),
        homeGeoPoint: { latitude: 0, longitude: 0 },
        wheelX: "none",
        wheelY: "none",
      })
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        calculate: true,
        fill: am5.color(0x2c5282),
        stroke: am5.color(0x4299e1),
        strokeWidth: 0.5,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: am5.color(0x2c5282),
      strokeWidth: 0.5,
      stroke: am5.color(0x4299e1),
      cursorOverStyle: "pointer",
      states: {
        hover: {
          fill: am5.color(0x3182ce),
        },
      },
    });

    const graticuleSeries = chart.series.push(
      am5map.GraticuleSeries.new(root, {})
    );
    graticuleSeries.mapLines.template.setAll({
      stroke: am5.color(0x4299e1),
      strokeOpacity: 0.2,
    });

    const citySeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    citySeries.bullets.push(function () {
      const circle = am5.Circle.new(root, {
        radius: 5,
        tooltipText: "{title}",
        tooltipY: 0,
        fill: am5.color(0xfcd34d),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2,
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    const cities = [
      { latitude: 48.8567, longitude: 2.351, title: "Paris" },
      { latitude: 25.7617, longitude: -80.1918, title: "Miami" },
      { latitude: 36.8476, longitude: 10.2176, title: "Tunisia" },
      { latitude: 29.3117, longitude: 47.4818, title: "Kuwait" },
    ];

    const cityPoints = cities.map((city) =>
      citySeries.pushDataItem({
        latitude: city.latitude,
        longitude: city.longitude,
        title: city.title,
      })
    );

    const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));

    lineSeries.mapLines.template.setAll({
      stroke: am5.color(0x3b82f6),
      strokeOpacity: 0.6,
      strokeWidth: 2,
    });

    const lineDataItem = lineSeries.pushDataItem({
      pointsToConnect: cityPoints,
    });

    const planeSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));

    const plane = am5.Graphics.new(root, {
      svgPath:
        "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47",
      scale: 0.06,
      centerY: am5.p50,
      centerX: am5.p50,
      fill: am5.color(0xfcd34d),
    });

    planeSeries.bullets.push(() => {
      const container = am5.Container.new(root, {});
      container.children.push(plane);
      return am5.Bullet.new(root, { sprite: container });
    });

    const planeDataItem = planeSeries.pushDataItem({
      lineDataItem: lineDataItem,
      positionOnLine: 0,
      autoRotate: true,
    });

    planeDataItem.dataContext = { prevPosition: 0 };

    planeDataItem.animate({
      key: "positionOnLine",
      to: 1,
      duration: 15000,
      loops: Infinity,
      easing: am5.ease.yoyo(am5.ease.linear),
    });

    planeDataItem.on("positionOnLine", (value) => {
      if (planeDataItem.dataContext.prevPosition <= value) {
        plane.set("rotation", 0);
      } else {
        plane.set("rotation", -180);
      }
      planeDataItem.dataContext.prevPosition = value;
    });

    setMapState({
      root,
      chart,
      series: {
        polygons: polygonSeries,
        graticule: graticuleSeries,
        cities: citySeries,
        lines: lineSeries,
        plane: planeSeries,
      },
    });

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartDivRef]);

  return mapState;
};

const InteractiveMap = () => {
  const chartDivRef = useRef(null);
  useMapChart(chartDivRef);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Content Container */}
          <div className="text-white space-y-8 p-8 md:pl-12">
            <h1 className="text-5xl !title-large leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
              Excellence Médicale
              <br />
              Sans Frontières
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
              Votre passerelle vers des soins médicaux d'excellence, alliant
              expertise internationale et accompagnement personnalisé. Des
              interventions de pointe réalisées par des spécialistes de renommée
              mondiale.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-blue-500/25">
                {/* Start Exploring */}
                Réservez maintenant
              </button>
              <button className="px-8 py-4 border border-blue-400 hover:bg-blue-800/30 rounded-lg font-semibold transition-colors duration-200">
                {/* Learn More */}
                Explorer
              </button>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-[600px]">
            <div
              ref={chartDivRef}
              className="absolute inset-0"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
