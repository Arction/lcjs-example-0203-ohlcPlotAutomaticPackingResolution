(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,s)=>{const i=s(475),r=s(27),{lightningChart:a,AxisTickStrategies:n,OHLCSeriesTypes:o,emptyLine:l,Themes:u}=i,{createProgressiveTraceGenerator:c}=r,g=new Date(2018,0,1),k=g.getTime(),m=a().Dashboard({numberOfColumns:1,numberOfRows:2}),d=m.createChartXY({columnIndex:0,rowIndex:0});d.getDefaultAxisX().setTickStrategy(n.DateTime,(e=>e.setDateOrigin(g))),d.setTitle("Default packing resolution").setAutoCursor((e=>{e.setTickMarkerYVisible(!1),e.setGridStrokeYStyle(l)})),d.setPadding({right:42}),d.getDefaultAxisY().setTitle("USD");const D=m.createChartXY({columnIndex:0,rowIndex:1});D.getDefaultAxisX().setTickStrategy(n.DateTime,(e=>e.setDateOrigin(g))),D.setTitle("Very small packing resolution").setAutoCursor((e=>{e.setTickMarkerYVisible(!1),e.setGridStrokeYStyle(l)})),D.setPadding({right:42}),D.getDefaultAxisY().setTitle("USD");const f=d.addOHLCSeries({seriesConstructor:o.AutomaticPacking}).setName("Default packing resolution"),x=D.addOHLCSeries({seriesConstructor:o.AutomaticPacking}).setName("Very small packing resolution").setPackingResolution(1e3);c().setNumberOfPoints(3600).generate().toPromise().then((e=>e.map((e=>({x:k+1e3*e.x,y:e.y}))))).then((e=>e.map((e=>({x:e.x-k,y:e.y}))))).then((e=>{f.add(e),x.add(e),d.getDefaultAxisX().fit(),D.getDefaultAxisX().fit()}))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);