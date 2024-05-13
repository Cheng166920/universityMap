<template>
<div id="vue-mapbox"></div>

<!-- <div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
  <div id="left-panel" class="" style="height: 867px;">
    <div id="searchbox" class="clearfix">
      <div id="searchbox-container">
        <div id="sole-searchbox-content" class="searchbox-content" style="display: block;">
          <input id="sole-input" class="searchbox-content-common" type="text" name="word" autocomplete="off" maxlength="256" placeholder="搜地点、查公交、找路线"
            value="">
          <div class="input-clear" title="清空" style="display: none;"></div>
          <div class="searchbox-content-button right-button route-button loading-button" data-title="路线" data-tooltip="2">
          </div>
        </div>
        <div id="route-searchbox-content" class="searchbox-content route-searchbox-content bus" style="display: none;">
          <div class="route-header">
            <div class="searchbox-content-common route-tabs">
              <div class="tab-item bus-tab" data-index="bus">
                <i></i>
                <span>公交</span>
              </div>
              <div class="tab-item drive-tab" data-index="drive">
                <i></i>
                <span>驾车</span>
              </div>
              <div class="tab-item walk-tab" data-index="walk">
                <i></i>
                <span>步行</span>
              </div>
              <div class="tab-item bike-tab" data-index="bike">
                <i></i>
                <span>骑行</span>
              </div>
              <div class="arrow-wrap"></div>
            </div>
            <div class="searchbox-content-button right-button cancel-button loading-button" data-title="关闭路线" data-tooltip="3">
            </div>
          </div>
          <div class="routebox">
            <div class="searchbox-content-common routebox-content">
              <div class="routebox-revert" title="切换起终点">
                <div class="routebox-revert-icon"> </div>
              </div>
              <div class="routebox-inputs">
                <div class="routebox-input route-start">
                  <div class="route-input-icon"> </div>
                  <input autocomplete="off" maxlength="256" placeholder="输入起点或在图区上选点" class="route-start-input" type="text"
                    value="">
                  <div class="input-clear" title="清空" style="display: none;"> </div>
                  <div class="route-input-add-icon"> </div>
                </div>
                <div class="routebox-input route-end">
                  <div class="route-input-icon"> </div>
                  <input autocomplete="off" maxlength="256" placeholder="输入终点" class="route-end-input" type="text" value="">
                  <div class="input-clear" title="清空" style="display: none;"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button id="search-button" data-title="搜索" data-tooltip="1"></button>
      <div id="toast-wrapper">
        <div id="toast">
          <! <img class="info-tip-img" src="/wolfman/static/common/images/transparent.gif" alt=""> -->
          <!-- <span class="info-tip-text"></span>
        </div>
      </div>
    </div>
    <ul id="cards-level0" class="cardlist"></ul>
    <ul id="cards-level1" class="cardlist"></ul>
    <ul id="cards-level2" class="cardlist"></ul> 
  </div> -->
</template>

<script>
    import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
    import mapboxgl from 'mapbox-gl'; 
    import 'mapbox-gl/dist/mapbox-gl.css';
    import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
    import '@mapbox/search-js-web'
    // import { MapboxSearchBox } from '@mapbox/search-js-web';
	export default {
		name: 'mapboxMap',
		data() {
			return {
				map: null,
			}
		},
		mounted() {
			this.initMap();
		},
		methods: {
			initMap() {			
				mapboxgl.accessToken = 'pk.eyJ1Ijoia2V5NTYzIiwiYSI6ImNsbHg1N25iYjFtb28zbHBoYzZza3hvdjYifQ.kIhZshouuoSoMk3K8kNimQ'
				this.map = new mapboxgl.Map({
				container: 'vue-mapbox', 
				style: 'mapbox://styles/key563/clupa7hbr00hz01r7c1wz042j', 
				center: [108, 34], 
				zoom: 4, 
				});
                // this.map.addControl(new MapboxSearchBox({accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl}), 'top-left')
                this.map.addControl(new MapboxGeocoder({accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl}),'top-left')
                this.map.addControl(new mapboxgl.FullscreenControl())//全屏
                this.map.addControl(new mapboxgl.NavigationControl())//放大缩小
                this.map.addControl(new mapboxgl.ScaleControl())//比例尺
			}
		}
	}
</script>
<style scoped>
	#vue-mapbox {
		width: 100%;
		position: absolute;
        top: 0;
        bottom: 0;
	}
    /* #left-panel {
    position: absolute;
    left: 20px;
    top: 85px;
    overflow: hidden;
    pointer-events: none;
}
#searchbox {
    border-radius: 2px;
    width: 425px;
    position: relative;
    z-index: 5;
}
.clearfix:before, .clearfix:after {
    display: table;
    content: "";
}
#searchbox #searchbox-container {
    position: relative;
    z-index: 2;
    pointer-events: auto;
    width: 368px;
    float: left;
    box-sizing: border-box;
    box-shadow: 1px 2px 1px rgba(0,0,0,.15);
}
#sole-searchbox-content {
    position: relative;
}
.searchbox-content {
    width: 368px;
    border-radius: 2px 0 0 2px;
    background: #fff;
}
#sole-searchbox-content.is-complete #sole-input {
    border-right: 10px solid transparent;
}
#sole-searchbox-content #sole-input {
    box-sizing: border-box;
    border: 0;
    padding: 9px 0;
    border-left: 10px solid transparent;
    border-right: 27px solid transparent;
    line-height: 20px;
    font-size: 16px;
    height: 38px;
    color: #333;
    position: relative;
    border-radius: 2px 0 0 2px;
}
.searchbox-content .searchbox-content-common {
    box-sizing: border-box;
    float: left;
    width: 329px;
    height: 38px;
}
input, button, select, textarea {
    outline: 0;
    font-family: inherit;
}
#sole-searchbox-content .input-clear {
    right: 39px;
}
.searchbox-content .input-clear {
    cursor: pointer;
    position: absolute;
    width: 27px;
    height: 38px;
    top: 0;
    background: url(//webmap1.bdimg.com/wolfman/static/common/images/new/searchbox_f175577.png) no-repeat 0 -114px #fff;
    display: none;
}
.searchbox-content .searchbox-content-button.cancel-button {
    background: url(//webmap1.bdimg.com/wolfman/static/common/images/new/searchbox_f175577.png) no-repeat 0 -38px;
}
 
.searchbox-content .searchbox-content-button {
    box-sizing: border-box;
    float: left;
    height: 38px;
    width: 39px;
    cursor: pointer;
    position: relative;
}
.searchbox-content:after {
    font-size: 0;
    zoom: 1;
    content: " ";
    clear: both;
    display: block;
    height: 0;
    visibility: hidden;
}
.searchbox-content .searchbox-content-button.right-button:before {
    content: '';
    position: absolute;
    width: 38px;
    left: 0;
    top: 6px;
    height: 26px;
    border-left: 1px solid #eee;
}
.route-searchbox-content {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-bottom-right-radius: 2px;
}
.searchbox-content {
    width: 368px;
    border-radius: 2px 0 0 2px;
    background: #fff;
}
.bus {
    zoom: 1;
}
.route-header {
    overflow: hidden;
}
.routebox {
    -webkit-transition: max-height 1s ease-in;
    transition: max-height 1s ease-in;
    overflow: hidden;
}
.searchbox-content .searchbox-content-common {
    box-sizing: border-box;
    float: left;
    width: 329px;
    height: 38px;
}
.route-tabs {
    position: relative;
    border-bottom: 1px solid #A3C7FF;
    color: #333;
    text-decoration: none;
}
.searchbox-content .searchbox-content-button.cancel-button {
    background: url(//webmap1.bdimg.com/wolfman/static/common/images/new/searchbox_f175577.png) no-repeat 0 -38px;
}
.searchbox-content .searchbox-content-button {
    box-sizing: border-box;
    float: left;
    height: 38px;
    width: 39px;
    cursor: pointer;
    position: relative;
}
.route-searchbox-content.bus .tab-item.bus-tab {
    color: #3385ff;
}
.route-tabs .tab-item {
    box-sizing: border-box;
    font-size: 12px;
    float: left;
    width: 25%;
    height: 37px;
    line-height: 37px;
    text-align: center;
    cursor: pointer;
}
 
.route-searchbox-content.bus .arrow-wrap {
    left: 12.5%;
}
 
.route-tabs .arrow-wrap {
    top: 34px;
    -webkit-transition: left .2s ease-in;
    transition: left .2s ease-in;
}
.arrow-wrap {
    position: absolute;
    height: 6px;
    width: 6px;
    background: #fff;
    border-top: 1px solid #A5C4FF;
    border-left: 1px solid #A5C4FF;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
 
#searchbox #search-button {
    pointer-events: auto;
    background: url(//webmap1.bdimg.com/wolfman/static/common/images/new/searchbox_f175577.png) no-repeat 0 -76px #3385ff;
    width: 57px;
    height: 38px;
    float: left;
    border: 0;
    padding: 0;
    cursor: pointer;
    border-radius: 0 2px 2px 0;
    box-shadow: 1px 2px 1px rgba(0,0,0,.15);
}
#toast-wrapper {
    pointer-events: auto;
    visibility: hidden;
    position: absolute;
    width: 368px;
    height: 35px;
    left: 0;
    bottom: -35px;
    z-index: 1;
    -webkit-transition: visibility .5s;
    transition: visibility .5s;
    overflow: hidden;
}
.clearfix:after {
    clear: both;
}
.clearfix:before, .clearfix:after {
    display: table;
    content: "";
}
#toast {
    box-sizing: border-box;
    width: 100%;
    line-height: 33px;
    height: 35px;
    text-align: center;
    background: #ffffdf;
    border: 1px solid #f4f4d3;
    color: #666;
    -webkit-transition: -webkit-transform .5s;
    transition: transform .5s;
    -webkit-transform: translate3d(0,-100%,0);
    transform: translate3d(0,-100%,0);
}
#toast .info-tip-img {
    background: url(//webmap0.bdimg.com/wolfman/static/common/images/fav/tip_3f7f5a2.png) 0 0 no-repeat;
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin-right: 8px;
}
img, table {
    border: 0;
}
#toast .info-tip-text {
    vertical-align: -2px;
}
#cards-level1 {
    z-index: 1;
}
#cards-level0 {
    z-index: 2;
}
.cardlist {
    width: 368px;
    position: relative;
    z-index: 0;
}
 
ul, ol {
    list-style: none;
} */
</style>


