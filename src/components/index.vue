<template>
    <div class="mainBox">
      <header class="index-title">松塔镇农村信息管理系统 <i class="useIcon"></i></header>
      <div class="toolbar">
        <div class="switchVillage" v-on:click="jump()">
          <span class="switchVillage-sp switchVillageLocation">
            <!-- <img src="../assets/images/location.png" class="switchVillageImg" > -->
          </span>
          <span class="switchVillage-sp">里庄村</span>
          <span class="switchVillage-sp switchVillagedown"></span>
          <!-- <i class="switchVillageDown"></i> -->
        </div>
        <div class="searchBarr" v-on:click="goDk()">
          <span class="search-bg"></span>
          <input type="text" placeholder="请输入要查找的地块" class = "search-ipt">
        </div>

      </div>
      <div id="map">
        <div class="legend"></div>
        <div class="location">
          <img src="../assets/images/locationbg.png" alt="" class="locationbg">
        </div>
        <div class="zoombtnb ol-zoom-in"></div>
         <div class="zoombtns ol-zoom-out"></div>
      </div>
    </div>
</template>
<script>
import 'ol/ol.css'
import {get as getProjection} from 'ol/proj'
import {getWidth, getTopLeft} from 'ol/extent'
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import WMTS from 'ol/source/WMTS'
import WMTSTileGrid from 'ol/tilegrid/WMTS'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import olStyle from 'ol/style/Style'
import olstyleIcon from 'ol/style/Icon'
import olstyleText from 'ol/style/Text'
import olstyleFill from 'ol/style/Fill'
import olstyleStroke from 'ol/style/Stroke'
import {defaults as defaultControls} from 'ol/control'
import MousePosition from 'ol/control/MousePosition'
import XYZ from 'ol/source/XYZ';
import {createStringXY} from 'ol/coordinate'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      var layer = new TileLayer({
        source: new XYZ({// 谷歌地图
          url: 'http://mt2.google.cn/vt/lyrs=y&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=G'
        })
      })
      var views = new View({
        center: [116.3, 39.9],
        zoom: 9,
        minZoom: 5,
        maxZoom: 20,
        projection: 'EPSG:4326' // 投影
      })
          var imMap = new Map({
        target: 'map',
        logo: false,
        allOverlays: false,
        layers: [
          layer
        ],
        view: views,
        eventListeners: {
          featureover: function (e) {
            e.feature.renderIntent = 'select';
            e.feature.layer.drawFeature(e.feature)
                }
        }
      })
    },
    jump () {
      this.$router.push({path: '/Village'})
    },
    goDk () {
      this.$router.push({path: '/Dk'})
    }
  }

}
</script>
<style lang = "less">
.mainBox{
  width: 7rem;
  height: 100%;
}
#map{
  width: 100%;
  height:calc( 100% - 2.24rem);
  position: relative;
}
.index-title{
  width: 100%;
  height: 1.12rem;
  font-size: 0.43rem;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  line-height: 1.12rem;
  background:  #2CC98C;
  position: relative;
}
.useIcon{
  display: block;
  position: absolute;
  right: .3rem;
  top: .17rem;
  width: .7rem;
  height: .7rem;
  background: url("../assets/images/use.png");
  background-size:cover;
}
.toolbar{
  width: 100%;
  height: 1.12rem;
  font-size: 0.43rem;
}
.switchVillage{
  display: block;
  width: 30%;
  /* background: red; */
  height: 100%;
  font-size: .4rem;
  color: #999999;
  letter-spacing: 0;
  line-height: 1.12rem;
  text-align: center;
  float: left;
}
.switchVillage-sp{
  display: block;
  float: left;
  margin-left: .1rem;

}
.switchVillagedown{
  width: .27rem;
  height: .21rem;
  background:url( "../assets/images/downjt.png") no-repeat center center;
  background-size: cover;
  align-self: center;
  margin-top:.45rem;

}
.switchVillageLocation{
  width: .3rem;
  height: .4rem;
  background:url( "../assets/images/location.png") no-repeat center center;
  background-size: cover;
  align-self: center;
  margin-top:.35rem;
  margin-left: .3rem;

}
.searchBarr{
  width: 70%;
  float: left;
  height: 100%;
}
.search-bg{
  display: block;
  width: .43rem;
  height: .43rem;
  float: left;
  background: url('../assets/images/search.png') no-repeat center center;
  background-size: cover;
  margin-top:.35rem;

}
.search-ipt{
  BACKGROUND-COLOR: transparent;
  color: #999999;
  outline:medium;
   border:none;
   margin-top:.35rem;
   float: left;
   padding-left: .2rem;
}
input::-webkit-input-placeholder {
    color:#999999;
    }
.legend{
  width: 2.4rem;
  height: 1.9rem;
  background: url("../assets/images/legend.png") no-repeat center center;
  background-size: cover;
  position: absolute;
  top: .3rem;
  right: .3rem;
  z-index: 99;
}
.location{
  width: 1rem;
  height: 1rem;
  position: absolute;
  background:#FFFFFF ;
  left: .3rem;
  bottom:1rem;
  z-index: 99;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.14);
  border-radius: 10px;
}
.locationbg{
  width: 1rem;
  height: 1rem;
}

.ol-zoom{
  display: none;

}
#map .ol-control{
  bottom: .5rem;
  right: .5rem;
}
.zoombtnb{
  width: 0.93rem;
  height: 0.93rem;
  background: url("../assets/images/big.png") no-repeat center center;
  background-size: cover;
  position: absolute;
  bottom: 3rem;
  right: .5rem;
  z-index: 99;
}
.zoombtns{
  width: 0.93rem;
  height: 0.93rem;
  background: url("../assets/images/small.png") no-repeat center center;
  background-size: cover;
  position: absolute;
  bottom: 2rem;
  right: .5rem;
  z-index: 99;
}

</style>
