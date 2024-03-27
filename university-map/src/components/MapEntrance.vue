<script setup lang="ts">
// mapboxgl地图
import mapboxgl from 'mapbox-gl';
import { onMounted } from 'vue';
import { ref } from 'vue';
// import axios from 'axios';
interface GeoJSONFeatureProperties {
  [key: string]: any;
}

interface GeoJSONFeature {
  type: string;
  properties: GeoJSONFeatureProperties;
  geometry: {
    type: string;
    coordinates: number[][];
  };
}

interface GeoJSON {
  type: string;
  features: GeoJSONFeature[];
}

let geojsonData: GeoJSON | null = null;

const fetchGeoJsonData = async () => {
  try {
    const response = await fetch('boundary.geojson');
    if (!response.ok) {
      throw new Error('Failed to fetch GeoJSON data');
    }
    geojsonData = await response.json();
  } catch (error) {
    console.error('Error fetching GeoJSON data:', error);
  }
};

const map = ref<mapboxgl.Map | null>(null);
const initMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2V5NTYzIiwiYSI6ImNsbHg1N25iYjFtb28zbHBoYzZza3hvdjYifQ.kIhZshouuoSoMk3K8kNimQ';
    map.value = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/key563/clu8ikpuc00hv01p8d4ejfjpj',
        center: [111, 32],

        minZoom: 3,
        zoom: 3.4
    });
    map.value.setPitch(0);

    map.value.on('load', () => {
        // 添加 GeoJSON 数据源
        if (map.value && geojsonData) {
          map.value.addSource('boundary', {
            type: 'geojson',
            data: geojsonData as unknown as GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>
          });
          // 添加图层
        map.value.addLayer({
            id: 'boundary-layer',
            type: 'line', // 将类型修改为线图层
            source: 'boundary',
            paint: {
                'line-color': '#088', // 线的颜色
                'line-width': 2 // 线的宽度
            }
        });
        }
        
    });
   // map.value.on('zoom', listenToZoom);
};
const addSource = () => {
        map.value?.on('load', () => {
        // 添加 GeoJSON 数据源
        map.value?.addSource('boundary', {
            type: 'geojson',
            data: 'boundary.geojson'
        });

        // 添加图层
        map.value?.addLayer({
            id: 'boundary-layer',
            type: 'line', // 将类型修改为线图层
            source: 'boundary',
            paint: {
                'line-color': '#088', // 线的颜色
                'line-width': 2 // 线的宽度
            }
        });
    });
};

onMounted(() => {
    fetchGeoJsonData();
    initMap();
});

</script>

<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<style scoped>
#map { 
  position:absolute;top:0rem;bottom:0rem; width:60%;
  overflow: hidden; 
} 
</style>