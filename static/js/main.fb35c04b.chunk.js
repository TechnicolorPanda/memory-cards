(this["webpackJsonpmemory-cards"]=this["webpackJsonpmemory-cards"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(7),i=c.n(a),s=(c(18),c(8)),j=c(9),o=c(13),u=c(11),b=(c(19),c(12)),g=c(2),m=(c(20),c(10)),l=c.n(m),d=c(0),p=function(e){var t=e.imageArray,c=e.pickImage,n=e.selectImage,r=e.reset;return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("div",{className:"row",children:c.map((function(e){return Object(d.jsx)("div",{className:"column",children:Object(d.jsx)("button",{onClick:n,children:Object(d.jsx)("img",{src:t[e],alt:t[e]})})},l()())}))}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"reset",onClick:r,children:"New Game"})})]})},f=(c(6),function(e){var t=e.currentScore,c=e.highScore;return Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)("div",{className:"nav-bar",id:"scoreBar",children:[Object(d.jsxs)("p",{id:"current-score",children:["Score: ",t]}),Object(d.jsxs)("p",{id:"high-score",children:["High Score: ",c]})]})})}),O=function(e){var t=e.currentScore,c=Object(n.useState)(0),r=Object(g.a)(c,2),a=r[0],i=r[1];return Object(n.useEffect)((function(){t>a&&i(t)}),[t]),Object(d.jsx)("div",{children:Object(d.jsx)(f,{currentScore:t,highScore:a})})},h=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),i=Object(g.a)(a,2),s=i[0],j=i[1],o=Object(n.useState)(0),u=Object(g.a)(o,2),m=u[0],l=u[1],f=["./images/airplant.jpeg","./images/bamboo.jpeg","./images/begonia.jpeg","./images/birkin.jpeg","./images/cactus.jpeg","./images/fiddleleaffig.jpeg","./images/monstera.jpeg","./images/pilea.jpeg","./images/pothos.jpeg","./images/anthurium.jpeg","./images/rubberplant.jpeg","./images/scindapsis.jpeg","./images/plant.jpeg","./images/stromanthe.jpeg","./images/zzplant.jpeg"];function h(){var e=[];5===function(e){for(var t=0;t<5;t++){var c=Math.floor(15*Math.random());e.push(c);var n=Object(b.a)(new Set(e));if(4===t)return n}}(e).length?r(e):h()}Object(n.useEffect)((function(){r((function(e){return e.splice(0,5)})),h()}),[m]);return Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{currentScore:m}),Object(d.jsx)(p,{imageArray:f,pickImage:c,selectImage:function(e){var t=e.target.src;j((function(t){return t.concat(e.target.src)}));for(var c=0;c<s.length-1;c++)t===s[c]&&(j([]),l(-1));l((function(e){return e+1}))}.bind(undefined),reset:function(){r([]),j([]),l(0),r((function(e){return e.splice(0,5)})),h()}})]})},v=function(e){Object(o.a)(c,e);var t=Object(u.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"play-board",children:Object(d.jsx)(h,{})})}}]),c}(n.Component);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))},6:function(e,t,c){}},[[23,1,2]]]);
//# sourceMappingURL=main.fb35c04b.chunk.js.map