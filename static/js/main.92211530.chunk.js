(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(9),s=c.n(r),i=c(2),o=(c(14),c(0)),l=function(){return Object(o.jsxs)("header",{className:"app__header",children:[Object(o.jsx)("h1",{className:"app__title",children:Object(o.jsxs)("a",{href:"#",children:[Object(o.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(o.jsx)("nav",{className:"app__menu",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",children:"Comics"})})]})})]})},u=(c(16),c.p,c.p+"static/media/mjolnir.61f31e18.png"),j=c(3),h=c.n(j),m=c(5),d=function(){var e="apikey=2619eead8ecde910454bb92ec2aec32f",t=function(){var e=Object(m.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("ERROR_SERVICE");case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var c=Object(m.a)(h.a.mark((function c(){var a,n,s=arguments;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:210,c.next=3,t("https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=".concat(a,"&").concat(e));case 3:return n=c.sent,c.abrupt("return",n.data.results.map(r));case 5:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),a=function(){var c=Object(m.a)(h.a.mark((function c(a){var n;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t("https://gateway.marvel.com:443/v1/public/characters/".concat(a,"?").concat(e));case 2:return n=c.sent,c.abrupt("return",r(n.data.results[0]));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),n=function(){var c=Object(m.a)(h.a.mark((function c(a){var n;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log(a),c.next=3,t("https://gateway.marvel.com:443/v1/public/characters/".concat(a,"?").concat(e));case 3:return n=c.sent,c.abrupt("return",s(n.data.results[0]));case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}(),r=function(e){return e.description||(e.description="Sorry, no information"),{id:e.id,name:e.name,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,description:e.description.slice(0,200),urls:e.urls[1].url}},s=function(e){return e.description||(e.description="Sorry, no information"),{id:e.id,comi:e.comics.items.slice(0,10),name:e.name,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,description:e.description.slice(0,200),wiki:e.urls[1].url}};return{getAllCharacters:c,getCharacter:a,getCharacterComics:n}},b=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),c=t[0],n=t[1],r=d().getCharacter,s=function(){var e=Math.floor(-100*Math.random()+1011400);r(e).then((function(e){return n(e)}))};Object(a.useEffect)((function(){s()}),[]);c.id;var l=c.name,j=c.description,h=c.thumbnail,m=c.urls,b="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===h?{objectFit:"fill"}:{objectFit:"cover"};return Object(o.jsxs)("div",{className:"randomchar",children:[Object(o.jsxs)("div",{className:"randomchar__block",children:[Object(o.jsx)("img",{src:h,alt:"Random character",style:b,className:"randomchar__img"}),Object(o.jsxs)("div",{className:"randomchar__info",children:[Object(o.jsx)("p",{className:"randomchar__name",children:l}),Object(o.jsx)("p",{className:"randomchar__descr",children:j}),Object(o.jsxs)("div",{className:"randomchar__btns",children:[Object(o.jsx)("a",{href:m,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:"#",className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsxs)("div",{className:"randomchar__static",children:[Object(o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(o.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(o.jsx)("button",{onClick:s,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"try it"})}),Object(o.jsx)("img",{src:u,alt:"mjolnir",className:"randomchar__decoration"})]})]})},O=c(8),f=(c(18),c.p,function(e){var t=e.seacrchId,c=Object(a.useState)([]),n=Object(i.a)(c,2),r=n[0],s=n[1],l=d(),u=l.getAllCharacters,j=(l.getCharacterComics,Object(a.useState)(210)),h=Object(i.a)(j,2),m=h[0],b=h[1];Object(a.useEffect)((function(){u(m).then((function(e){s([].concat(Object(O.a)(r),Object(O.a)(e)))}))}),[m]);var f=function(e){var c=e.map((function(e,c){return Object(o.jsxs)("li",{onClick:function(){return t(e.id)},className:"char__item",children:[Object(o.jsx)("img",{src:e.thumbnail,alt:"abyss"}),Object(o.jsxs)("div",{className:"char__name",children:['"',e.name,'"']})]},e.id+c)}));return Object(o.jsx)("ul",{className:"char__grid",children:c})}(r);return Object(o.jsxs)("div",{className:"char__list",children:[f,Object(o.jsx)("button",{onClick:function(){console.log("1"),b(m+9)},className:"button button__main button__long",children:Object(o.jsx)("div",{className:"inner",children:"load more"})})]})}),p=(c(19),function(e){var t=e.changeID,c=d().getCharacterComics,n=Object(a.useState)([]),r=Object(i.a)(n,2),s=r[0],l=r[1],u=Object(a.useState)([]),j=Object(i.a)(u,2),h=j[0],m=j[1];Object(a.useEffect)((function(){c(t).then((function(e){l(e),m(e.comi)}))}),[t]);var b=function(e){var t=e.map((function(e,t){return Object(o.jsx)("li",{className:"char__comics-item",children:e.name},Math.floor(191900*Math.random()))}));return Object(o.jsx)("ul",{className:"char__comics-list",children:t})}(h),O=s.thumbnail,f=s.description,p=s.urls,x=s.name,_=s.wiki;return Object(o.jsxs)("div",{className:"char__info",children:[Object(o.jsxs)("div",{className:"char__basics",children:[Object(o.jsx)("img",{src:O,alt:"abyss"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"char__info-name",children:x}),Object(o.jsxs)("div",{className:"char__btns",children:[Object(o.jsx)("a",{href:p,className:"button button__main",children:Object(o.jsx)("div",{className:"inner",children:"homepage"})}),Object(o.jsx)("a",{href:_,className:"button button__secondary",children:Object(o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(o.jsx)("div",{className:"char__descr",children:f}),Object(o.jsx)("div",{className:"char__comics",children:"Comics:"}),b]})}),x=c.p+"static/media/vision.067d4ae1.png",_=function(){var e=Object(a.useState)(1010336),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(l,{}),Object(o.jsxs)("main",{children:[Object(o.jsx)(b,{}),Object(o.jsxs)("div",{className:"char__content",children:[Object(o.jsx)(f,{seacrchId:function(e){n(e)}}),Object(o.jsx)(p,{changeID:c})]}),Object(o.jsx)("img",{className:"bg-decoration",src:x,alt:"vision"})]})]})};c(20);s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.92211530.chunk.js.map