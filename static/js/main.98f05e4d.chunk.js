(this.webpackJsonpgoogle_react_map=this.webpackJsonpgoogle_react_map||[]).push([[0],{214:function(t,e,a){},215:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(12),d=a.n(r),u=a(16),s=a.n(u),o=a(20),l=a(59),c=a(26),g=a(41),h=a(89),p=a(56),f=a.n(p),m=function(){var t=Object(o.a)(s.a.mark((function t(){var e,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("https://covid-india-cases.herokuapp.com/states");case 3:return e=t.sent,a=e.data,t.abrupt("return",{data:a});case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.a.get("http://covid19-india-adhikansh.herokuapp.com/summary");case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),A=a(237);function v(t){var e=t.setSingleStateData,a=Object(n.useState)([]),r=Object(c.a)(a,2),d=r[0],u=r[1];return Object(n.useEffect)((function(){(function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:e=t.sent,u(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),h.a.map((function(t,a){return i.a.createElement(g.a,{key:a,latitude:parseFloat(t.latitude),longitude:parseFloat(t.longitude)},i.a.createElement(A.a,{title:t.state,placement:"right",arrow:!0},i.a.createElement("svg",{height:20,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:"#d00",stroke:"none",transform:"translate(".concat(-10,"px,").concat(-20,"px)")},onClick:function(){var a=d.find((function(e){return e.state===t.state}));e(a),console.log(a)}},i.a.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\nc0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\nC20.1,15.8,20.2,15.8,20.2,15.7z"}))))}))}var y=a(57);function S(t){var e=t.SingleStateData,a=t.CountryData,n=e?i.a.createElement(y.a,{data:{labels:["No of Cases","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(44, 130, 201, 1)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[e.noOfCases,e.cured,e.deaths]}]},option:{title:{display:!0,text:"".concat(e.state)}}}):i.a.createElement(y.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a["Active cases"],a["Cured/Discharged/Migrated"],a.Death]}]},option:{title:{display:!0,text:"India"}}});return i.a.createElement("div",null,n)}var E=a(94),z=a.n(E),k=a(58),N=a.n(k),U=a(234),w=a(238),O=a(235),x=a(236),I=a(45);function j(t){var e=t.setSingleStateData,a=t.SingleStateData,n=t.CountryData;return i.a.createElement(U.a,{container:!0,className:N.a.grid_container},i.a.createElement(w.a,{className:N.a.card_container},i.a.createElement(O.a,{title:a?a.state:"India",subheader:a?"India - Covid-19 Tracker":"Covid-19 Tracker",action:i.a.createElement("img",{style:{width:"70px",height:"70px"},onClick:function(){return e(null)},src:z.a})}),i.a.createElement(x.a,null,i.a.createElement(I.a,{variant:"subtitle1"},"Number of confirmed cases : ",a?a.noOfCases:n["Total Cases"]),i.a.createElement(I.a,{variant:"subtitle1"},"Number of deaths due to Covid-19 : ",a?a.deaths:n.Death),i.a.createElement(I.a,{variant:"subtitle1"},"Number of recovered cases : ",a?a.cured:n["Cured/Discharged/Migrated"]),i.a.createElement(S,{SingleStateData:a,CountryData:n}))))}a(214);function P(){var t=Object(n.useState)(null),e=Object(c.a)(t,2),a=e[0],r=e[1],d=Object(n.useState)({}),u=Object(c.a)(d,2),h=u[0],p=u[1],f=Object(n.useState)({latitude:20.5937,longitude:78.9629,width:window.innerWidth,height:window.innerHeight,zoom:4}),m=Object(c.a)(f,2),A=m[0],y=m[1];return Object(n.useEffect)((function(){var t=function(){y(Object(l.a)(Object(l.a)({},A),{},{width:window.innerWidth,height:window.innerHeight}))};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}})),Object(n.useEffect)((function(){(function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:e=t.sent,p(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),i.a.createElement(g.b,Object.assign({},A,{mapboxApiAccessToken:"pk.eyJ1IjoibWF5YW5rYjAyIiwiYSI6ImNrYXhpejEzOTA2bmwyeG8yeXQxZ3RvbzgifQ.enI58rx-GVSqu74g0wi_YQ",mapStyle:"mapbox://styles/mayankb02/ckaxk7z3p01gh1io1qs92uj4j",onViewportChange:function(t){y(t)}}),i.a.createElement(v,{setSingleStateData:r}),i.a.createElement(j,{setSingleStateData:r,SingleStateData:a,CountryData:h}))}d.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(P,null)),document.getElementById("root"))},58:function(t,e,a){t.exports={grid_container:"Info_grid_container__1JLHx",card_container:"Info_card_container__rHRZ2"}},89:function(t){t.exports=JSON.parse('{"a":[{"state":"Andaman and Nicobar Islands","latitude":"11.66702557","longitude":"92.73598262","id":"1"},{"state":"Andhra Pradesh","latitude":"14.7504291","longitude":"78.57002559","id":"2"},{"state":"Arunachal Pradesh","latitude":"27.10039878","longitude":"93.61660071","id":"3"},{"state":"Assam","latitude":"26.7499809","longitude":"94.21666744","id":"4"},{"state":"Bihar","latitude":"25.78541445","longitude":"87.4799727","id":"5"},{"state":"Chandigarh","latitude":"30.71999697","longitude":"76.78000565","id":"6"},{"state":"Chhattisgarh","latitude":"22.09042035","longitude":"82.15998734","id":"7"},{"state":"Dadar Nagar Haveli","latitude":"20.26657819","longitude":"73.0166178","id":"8"},{"state":"Delhi","latitude":"28.6699929","longitude":"77.23000403","id":"9"},{"state":"Gujarat","latitude":"22.309425","longitude":"72.13623","id":"10"},{"state":"Goa","latitude":"15.491997","longitude":"73.81800065","id":"11"},{"state":"Haryana","latitude":"28.45000633","longitude":"77.01999101","id":"12"},{"state":"Himachal Pradesh","latitude":"31.10002545","longitude":"77.16659704","id":"13"},{"state":"Jammu and Kashmir","latitude":"34.29995933","longitude":"74.46665849","id":"14"},{"state":"Jharkhand","latitude":"23.6102","longitude":"85.2799","id":"15"},{"state":"Karnataka","latitude":"12.57038129","longitude":"76.91999711","id":"16"},{"state":"Kerala","latitude":"8.900372741","longitude":"76.56999263","id":"17"},{"state":"Ladakh","latitude":"34.152588","longitude":"77.577049","id":"18"},{"state":"Lakshadweep","latitude":"10.56257331","longitude":"72.63686717","id":"19"},{"state":"Madhya Pradesh","latitude":"21.30039105","longitude":"76.13001949","id":"20"},{"state":"Maharashtra","latitude":"19.25023195","longitude":"73.16017493","id":"21"},{"state":"Manipur","latitude":"24.79997072","longitude":"93.95001705","id":"22"},{"state":"Meghalaya","latitude":"25.57049217","longitude":"91.8800142","id":"23"},{"state":"Mizoram","latitude":"23.71039899","longitude":"92.72001461","id":"24"},{"state":"Nagaland","latitude":"25.6669979","longitude":"94.11657019","id":"25"},{"state":"Odisha","latitude":"20.940920","longitude":"84.803467","id":"26"},{"state":"Puducherry","latitude":"11.93499371","longitude":"79.83000037","id":"27"},{"state":"Punjab","latitude":"31.51997398","longitude":"75.98000281","id":"28"},{"state":"Rajasthan","latitude":"27.391277","longitude":"73.432617","id":"29"},{"state":"Sikkim","latitude":"27.3333303","longitude":"88.6166475","id":"30"},{"state":"Tamil Nadu","latitude":"11.92038576","longitude":"78.15004187","id":"31"},{"state":"Telengana","latitude":"17.123184","longitude":"79.208824","id":"32"},{"state":"Tripura","latitude":"23.83540428","longitude":"91.27999914","id":"33"},{"state":"Uttar Pradesh","latitude":"27.59998069","longitude":"78.05000565","id":"34"},{"state":"Uttarakhand","latitude":"30.32040895","longitude":"78.05000565","id":"35"},{"state":"West Bengal","latitude":"22.978624","longitude":"87.747803","id":"36"}]}')},94:function(t,e){t.exports="data:image/png;base64,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"},97:function(t,e,a){t.exports=a(215)}},[[97,1,2]]]);
//# sourceMappingURL=main.98f05e4d.chunk.js.map