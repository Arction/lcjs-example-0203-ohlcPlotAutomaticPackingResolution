(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,s)=>{const i=s(809),{lightningChart:r,AxisTickStrategies:a,OHLCSeriesTypes:n,emptyLine:o,Themes:u}=i,{createProgressiveTraceGenerator:l}=s(27),c=new Date(2018,0,1),g=r().Dashboard({numberOfColumns:1,numberOfRows:2}),d=g.createChartXY({columnIndex:0,rowIndex:0});d.getDefaultAxisX().setTickStrategy(a.DateTime,(e=>e.setDateOrigin(c))),d.setTitle("Default packing resolution").setAutoCursor((e=>{e.disposeTickMarkerY(),e.setGridStrokeYStyle(o)})),d.setPadding({right:42}),d.getDefaultAxisY().setTitle("USD");const k=g.createChartXY({columnIndex:0,rowIndex:1});k.getDefaultAxisX().setTickStrategy(a.DateTime,(e=>e.setDateOrigin(c))),k.setTitle("Very small packing resolution").setAutoCursor((e=>{e.disposeTickMarkerY(),e.setGridStrokeYStyle(o)})),k.setPadding({right:42}),k.getDefaultAxisY().setTitle("USD");const m=d.addOHLCSeries({seriesConstructor:n.AutomaticPacking}).setName("Default packing resolution"),D=k.addOHLCSeries({seriesConstructor:n.AutomaticPacking}).setName("Very small packing resolution").setPackingResolution(1e3);l().setNumberOfPoints(3600).generate().toPromise().then((e=>e.map((e=>({x:1e3*e.x,y:e.y}))))).then((e=>{m.add(e),D.add(e),d.getDefaultAxisX().fit(),k.getDefaultAxisX().fit()}))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);