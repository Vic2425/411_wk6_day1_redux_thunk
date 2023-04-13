(window.webpackJsonpinstructor_411_wk5_day1_mapstatetoprops=window.webpackJsonpinstructor_411_wk5_day1_mapstatetoprops||[]).push([[0],{127:function(e,t,a){e.exports=a(146)},135:function(e,t,a){},143:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(100),c=(a(135),a(204)),o=a(205),i=a(206),s=a(154),m=a(106),u=a.n(m),d=a(39),p=function(){return r.a.createElement(c.a,{position:"relative"},r.a.createElement(o.a,null,r.a.createElement(i.a,{color:"inherit"},r.a.createElement(u.a,null)),r.a.createElement(s.a,{variant:"h6",style:{flexGrow:"1"}},"FakeCars.com"),r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(d.b,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(d.b,{to:"/about"},"About")),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(d.b,{to:"/dashboard"},"Dasboard")),r.a.createElement("li",{className:"nav-list-item"},r.a.createElement(d.b,{to:"/import"},"Import")))))},h=(a(143),a(27)),E=a(26),g=a(207),f=a(208),b=a(189),w=a(209),y=(a(99),function(e){return r.a.createElement("div",{className:"card-container"},e.cars.map(function(e,t){return r.a.createElement(g.a,{key:t,className:"card"},r.a.createElement(f.a,{className:"text-gray"},r.a.createElement("span",null,e.name.toUpperCase()),r.a.createElement("ul",null,r.a.createElement("li",null,"Miles per Gallon: ",e.mpg),r.a.createElement("li",null,"Cylinders: ",e.cylinders),r.a.createElement("li",null,"Horsepower: ",e.horsepower))),r.a.createElement(b.a,null),r.a.createElement(w.a,{style:{color:"mediumblue"}},r.a.createElement(d.b,{to:"/car/".concat(e.id)},"See More Details")))}))}),v=Object(E.b)(function(e){return{cars:e.cars}})(y),k=a(53),O=a(54),C=a(77),j=a(73),x=a(78),A=a(201),S=a(197),D=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(C.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={checked:!0,heading:"About FakeCars.com"},a.toggleSwitch=function(){var e=!a.state.checked;return e?a.setState({heading:"About FakeCars.com",checked:e}):a.setState({heading:"About Cars.com",checked:e})},a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-gray"},r.a.createElement(A.a,{maxWidth:"sm"},r.a.createElement("h1",{style:{textAlign:"center"}},this.state.heading),r.a.createElement("p",null,'FakeCars.com was created to solve a specific problem. That problem is quick and reliable access to details about many different models, all in one place. We had to use the word "Fake" in our name so that we don\'t get sued by the real\xa0',r.a.createElement("a",{style:{color:"mediumblue"},href:"https://www.cars.com",target:"_blank"},"Cars.com"),"\xa0but we won't worry too much about that. We've provided a link to the actual cars.com above and we did not receive any money from them to do so. Although, there's an argument that maybe we should since we are a top-notch coding bootcamp and anyone would want to be associated with us :)"),r.a.createElement(b.a,null),r.a.createElement("p",null,'If you\'d like you can toggle the word "Fake" because why not? We have the potential to be the real cars.com if we wanted to be.'),r.a.createElement(S.a,{checked:this.state.checked,color:"primary",onChange:this.toggleSwitch})))}}]),t}(n.Component),M=a(200),N=a(202),T=function(e){var t=e.match.params.id,a=e.cars.find(function(e){return e.id==t});return r.a.createElement(A.a,{maxWidth:"sm",className:"car-container"},r.a.createElement(M.a,{className:"car-paper"},r.a.createElement("h2",null,a.name),Object.keys(a).map(function(e,t){return r.a.createElement(N.a,{label:"".concat(e,": ").concat(a[e])})})))},_=Object(E.b)(function(e){return{cars:e.cars}})(T),F=a(213),P=a(214),R=a(215),W=a(216),H=a(217),I=a(112),q=a.n(I),U=a(110),G=a.n(U);function K(){return r.a.createElement("h6",null,"Horsepower: \xa0",r.a.createElement("span",{style:{background:"#C13C37"}},"\xa0 \xa0 \xa0"),"\xa0",r.a.createElement("span",null,"Over 200"),"\xa0",r.a.createElement("span",{style:{background:"#E38627"}},"\xa0 \xa0 \xa0"),"\xa0",r.a.createElement("span",null,"Under 200"))}var B=function(e){var t=e.cars.filter(function(e){return e.horsepower>=200}),a=e.cars.filter(function(e){return e.horsepower<200});return r.a.createElement("div",null,r.a.createElement(G.a,{style:{width:"200px"},data:[{title:"Over",value:t.length,color:"#C13C37"},{title:"Under",value:a.length,color:"#E38627"}],label:!0,labelStyle:{fill:"white",fontSize:"small"}}),r.a.createElement(K,null))},J=Object(E.b)(function(e){return{cars:e.cars}})(B),V=function(e){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Total:"),r.a.createElement("h1",null,e.cars.length))},L=Object(E.b)(function(e){return{cars:e.cars}})(V),z=a(3),$=a(203),Q=a(210),X=a(192),Y=a(212),Z=a(194);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach(function(t){Object(z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ae=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(C.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,name:"",mpg:"",cylinders:"",horsepower:""},a.toggleDialog=function(){return a.setState({open:!a.state.open})},a.handleTextChange=function(e){var t=te({},a.state);t[e.target.id]=e.target.value,a.setState(t)},a.handleSubmit=function(e){e.preventDefault();var t=te({},a.state);t.id=a.props.carTotal+1,delete t.open,console.log("THE CAR",t),a.props.addCar(t),a.setState({open:!1})},a.componentDidUpdate=function(e,t){t.open!==a.state.open&&a.setState({name:"",mpg:"",cylinders:"",horsepower:""})},a}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"Add Car:"),r.a.createElement($.a,{variant:"contained",className:"add-car",onClick:this.toggleDialog},"Add Car")),r.a.createElement("div",null,r.a.createElement(Q.a,{open:this.state.open,onClose:this.toggleDialog},r.a.createElement(X.a,null,"Add New Car"),r.a.createElement(Y.a,null,r.a.createElement("form",{onSubmit:this.handleSubmit,style:{display:"flex",flexDirection:"column",width:"350px"}},r.a.createElement(Z.a,{id:"name",placeholder:"Name",value:this.state.name,onChange:this.handleTextChange,required:!0}),r.a.createElement(Z.a,{id:"mpg",placeholder:"Miles per gallon",value:this.state.mpg,onChange:this.handleTextChange,required:!0}),r.a.createElement(Z.a,{id:"cylinders",placeholder:"Cylinders",value:this.state.cylinders,onChange:this.handleTextChange,required:!0}),r.a.createElement(Z.a,{id:"horsepower",placeholder:"Horsepower",value:this.state.horsepower,onChange:this.handleTextChange,required:!0}),r.a.createElement("br",null),r.a.createElement($.a,{variant:"contained",color:"primary",type:"submit"},"Submit"))))))}}]),t}(n.Component),ne=Object(E.b)(null,function(e){return{addCar:function(t){return e(function(e){return{type:"ADD_CAR",value:e}}(t))}}})(ae),re=function(e){return r.a.createElement(A.a,{maxWidth:"lg",className:"car-container"},r.a.createElement("h4",null,"Welcome, ",e.user.username),r.a.createElement("div",{className:"flex-container"},r.a.createElement(J,null),r.a.createElement(L,null),r.a.createElement(ne,{carTotal:e.cars.length})),r.a.createElement(F.a,null,r.a.createElement(P.a,null,r.a.createElement(R.a,null,r.a.createElement(W.a,null,"Id"),r.a.createElement(W.a,null,"Make/Model"),r.a.createElement(W.a,null,"MPG"),r.a.createElement(W.a,null,"Cylinders"),r.a.createElement(W.a,null,"Horsepower"),r.a.createElement(W.a,null,"Delete"))),r.a.createElement(H.a,null,e.cars.map(function(t,a){return r.a.createElement(R.a,{key:t.id},r.a.createElement(W.a,{component:"th",scope:"row"},t.id),r.a.createElement(W.a,null,t.name),r.a.createElement(W.a,null,t.mpg),r.a.createElement(W.a,null,t.cylinders),r.a.createElement(W.a,null,t.horsepower),r.a.createElement(W.a,null,r.a.createElement(q.a,{onClick:function(){return e.removeCar(a)},className:"icon text-red"})))}))))},le=Object(E.b)(function(e){return{user:e.user,cars:e.cars}},function(e){return{removeCar:function(t){return e(function(e){return{type:"REMOVE_CAR",value:e}}(t))}}})(re),ce=a(13),oe=a(218),ie=a(115),se=a(198),me=a(113),ue=a.n(me),de=function(e){var t=Object(n.useState)(null),a=Object(ce.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(null),i=Object(ce.a)(o,2),s=i[0],m=i[1];return r.a.createElement(oe.a,{sx:{mt:"15px",mx:"auto",width:"60%"}},r.a.createElement("p",null),r.a.createElement($.a,{variant:"contained",color:"primary",onClick:e.fetchMakes},"Import"),r.a.createElement("h2",null,"COUNT: ",e.makes.length),r.a.createElement(F.a,null,r.a.createElement(P.a,null,r.a.createElement(R.a,null,r.a.createElement(W.a,null,"ID"),r.a.createElement(W.a,null,"Make"),r.a.createElement(W.a,null,"Actions"))),r.a.createElement(H.a,null,e.makes.map(function(e,t){return r.a.createElement(R.a,{key:t},r.a.createElement(W.a,null,e.MakeId),r.a.createElement(W.a,null,e.MakeName),r.a.createElement(W.a,null,r.a.createElement(ue.a,{onClick:function(t){return function(e,t){c(e.currentTarget),m(t),console.log(t)}(t,e.MakeId)}})))}))),r.a.createElement(ie.a,{anchorEl:l,open:Boolean(l),onClose:function(){return c(null)}},r.a.createElement(se.a,{onClick:function(){e.deleteMake(s),c(null),m(null)}},"Delete")))},pe=Object(E.b)(function(e){return{makes:e.makes}},function(e){return{fetchMakes:function(){return e(function(e){fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json").then(function(e){return e.json()}).then(function(t){var a={type:"FETCH_MAKES",value:t.Results};e(a)})})},deleteMake:function(t){return e({type:"DELETE_MAKE",value:t})}}})(de),he=function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:v}),r.a.createElement(h.a,{path:"/about",component:D}),r.a.createElement(h.a,{path:"/car/:id",component:_}),r.a.createElement(h.a,{path:"/dashboard",component:le}),r.a.createElement(h.a,{path:"/import",component:pe}))},Ee=a(49),ge=a(114),fe=a(19),be=Object(Ee.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e},cars:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CAR":return[].concat(Object(fe.a)(e),[t.value]);case"REMOVE_CAR":var a=Object(fe.a)(e);return a.splice(t.value,1),a;default:return e}},makes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MAKES":return t.value;case"DELETE_MAKE":var a=Object(fe.a)(e);return a.splice(t.value,1),a;default:return e}}}),we=Object(Ee.d)(be,{user:{username:"test-user-1",email:"test-user@example.com"},cars:[{id:1,name:"chevrolet chevelle malibu",mpg:18,cylinders:8,horsepower:130},{id:2,name:"buick skylark 320",mpg:15,cylinders:8,horsepower:165},{id:3,name:"plymouth satellite",mpg:18,cylinders:8,horsepower:150},{id:4,name:"amc rebel sst",mpg:16,cylinders:8,horsepower:150},{id:5,name:"ford torino",mpg:17,cylinders:8,horsepower:140},{id:6,name:"ford galaxie 500",mpg:15,cylinders:8,horsepower:198},{id:7,name:"chevrolet impala",mpg:14,cylinders:8,horsepower:220},{id:8,name:"plymouth fury iii",mpg:14,cylinders:8,horsepower:215},{id:9,name:"pontiac catalina",mpg:14,cylinders:8,horsepower:225},{id:10,name:"amc ambassador dpl",mpg:15,cylinders:8,horsepower:190},{id:11,name:"citroen ds-21 pallas",mpg:"unknown",cylinders:4,horsepower:115},{id:12,name:"chevrolet chevelle concours (sw)",mpg:"unknown",cylinders:8,horsepower:165},{id:13,name:"ford torino (sw)",mpg:"unknown",cylinders:8,horsepower:153},{id:14,name:"plymouth satellite (sw)",mpg:"unknown",cylinders:8,horsepower:175},{id:15,name:"amc rebel sst (sw)",mpg:"unknown",cylinders:8,horsepower:175},{id:16,name:"dodge challenger se",mpg:15,cylinders:8,horsepower:170},{id:17,name:"plymouth 'cuda 340",mpg:14,cylinders:8,horsepower:160},{id:18,name:"ford mustang boss 302",mpg:"unknown",cylinders:8,horsepower:140},{id:19,name:"chevrolet monte carlo",mpg:15,cylinders:8,horsepower:150},{id:20,name:"buick estate wagon (sw)",mpg:14,cylinders:8,horsepower:225}],makes:[]},Object(Ee.a)(ge.a));var ye=function(){return r.a.createElement(E.a,{store:we},r.a.createElement(d.a,null,r.a.createElement(p,null),r.a.createElement(he,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(l.createRoot)(document.getElementById("root")).render(r.a.createElement(ye,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e){e.exports=JSON.parse("{}")}},[[127,1,2]]]);
//# sourceMappingURL=main.ab48a906.chunk.js.map