(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,s)=>{const i=s(377),a=s(613),{lightningChart:r,AxisTickStrategies:n,OHLCSeriesTypes:o,emptyLine:c,Themes:l}=i,{createProgressiveTraceGenerator:u}=a,g=new Date(2018,0,1),d=g.getTime(),m=r({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Dashboard({numberOfColumns:1,numberOfRows:2}),h=m.createChartXY({columnIndex:0,rowIndex:0,theme:l[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0});h.getDefaultAxisX().setTickStrategy(n.DateTime,(e=>e.setDateOrigin(g))),h.setTitle("Default packing resolution").setCursor((e=>{e.setTickMarkerYVisible(!1),e.setGridStrokeYStyle(c)})),h.setPadding({right:42}),h.getDefaultAxisY().setTitle("USD");const k=m.createChartXY({columnIndex:0,rowIndex:1});k.getDefaultAxisX().setTickStrategy(n.DateTime,(e=>e.setDateOrigin(g))),k.setTitle("Very small packing resolution").setCursor((e=>{e.setTickMarkerYVisible(!1),e.setGridStrokeYStyle(c)})),k.setPadding({right:42}),k.getDefaultAxisY().setTitle("USD");const D=h.addOHLCSeries({seriesConstructor:o.AutomaticPacking}).setName("Default packing resolution"),f=k.addOHLCSeries({seriesConstructor:o.AutomaticPacking}).setName("Very small packing resolution").setPackingResolution(1e3);u().setNumberOfPoints(3600).generate().toPromise().then((e=>e.map((e=>({x:d+1e3*e.x,y:e.y}))))).then((e=>e.map((e=>({x:e.x-d,y:e.y}))))).then((e=>{D.add(e),f.add(e),h.getDefaultAxisX().fit(),k.getDefaultAxisX().fit()}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);