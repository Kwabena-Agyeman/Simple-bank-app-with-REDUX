(this["webpackJsonpbank-app"]=this["webpackJsonpbank-app"]||[]).push([[0],{17:function(n,e,t){},18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var o=t(1),a=t(5),i=t.n(a),r=(t(17),t(6)),c=t(7),s=t(12),l=t(11),u=t(8),p=t.n(u),d=t.p+"static/media/girl.26cec75c.png",h=(t(18),t(9)),f=t(3),b=Object(h.a)((function(n,e){switch(console.log(n,e),e.type){case"WITHDRAW_MONEY":return Object(f.a)(Object(f.a)({},n),{},{totalAmount:n.totalAmount-e.payload});default:return n}}),{username:"Kwabena Agyeman",totalAmount:2500701}),m=function(n){return{type:"WITHDRAW_MONEY",payload:n}},g=t(0),w=function(n){Object(s.a)(t,n);var e=Object(l.a)(t);function t(){var n;Object(r.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).withdrawMoney=function(n){var e=n.target.getAttribute("data-amount");b.dispatch(m(Number(e)))},n}return Object(c.a)(t,[{key:"render",value:function(){var n=b.getState(),e=n.totalAmount,t=n.username;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("img",{className:"App__userpic",src:d,alt:"user"}),Object(g.jsxs)("p",{className:"App__username",children:["Hello, ",t,"! "]}),Object(g.jsxs)("div",{className:"App__amount",children:[p()({prefix:"$"})(e),Object(g.jsx)("p",{className:"App__amount--info",children:"Total Amount"})]}),Object(g.jsxs)("section",{className:"App__buttons",children:[Object(g.jsx)("button",{"data-amount":"10000",onClick:this.withdrawMoney,children:"WITHDRAW $10,000"}),Object(g.jsx)("button",{"data-amount":"5000",onClick:this.withdrawMoney,children:"WITHDRAW $5,000"})]})]})}}]),t}(o.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(){if("serviceWorker"in navigator){if(new URL("/Simple-bank-app-with-REDUX",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Simple-bank-app-with-REDUX","/service-worker.js");v?(!function(n){fetch(n).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):A(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):A(n)}))}}function A(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var O=function(){i.a.render(Object(g.jsx)(w,{}),document.getElementById("root")),j()};O(),b.subscribe(O)}},[[22,1,2]]]);
//# sourceMappingURL=main.274579f8.chunk.js.map