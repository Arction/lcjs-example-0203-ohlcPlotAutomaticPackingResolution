(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,s)=>{const i=s(475),r=s(27),{lightningChart:a,AxisTickStrategies:n,OHLCSeriesTypes:o,emptyLine:l,Themes:u}=i,{createProgressiveTraceGenerator:c}=r,g=new Date(2018,0,1),k=a().Dashboard({numberOfColumns:1,numberOfRows:2}),d=k.createChartXY({columnIndex:0,rowIndex:0});d.getDefaultAxisX().setTickStrategy(n.DateTime,(e=>e.setDateOrigin(g))),d.setTitle("Default packing resolution").setAutoCursor((e=>{e.setTickMarkerYVisible(!1),e.setGridStrokeYStyle(l)})),d.setPadding({right:42}),d.getDefaultAxisY().setTitle("USD");const m=k.createChartXY({columnIndex:0,rowIndex:1});m.getDefaultAxisX().setTickStrategy(n.DateTime,(e=>e.setDateOrigin(g))),m.setTitle("Very small packing resolution").setAutoCursor((e=>{e.setTickMarkerYVisible(!1),e.setGridStrokeYStyle(l)})),m.setPadding({right:42}),m.getDefaultAxisY().setTitle("USD");const D=d.addOHLCSeries({seriesConstructor:o.AutomaticPacking}).setName("Default packing resolution"),f=m.addOHLCSeries({seriesConstructor:o.AutomaticPacking}).setName("Very small packing resolution").setPackingResolution(1e3);c().setNumberOfPoints(3600).generate().toPromise().then((e=>e.map((e=>({x:1e3*e.x,y:e.y}))))).then((e=>{D.add(e),f.add(e),d.getDefaultAxisX().fit(),m.getDefaultAxisX().fit()}))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);