(this["webpackJsonpreact-certification-2020"]=this["webpackJsonpreact-certification-2020"]||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){e.exports=n(48)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),l=n.n(c),i=n(3),o=n(1),u=n(9),m=Object(a.createContext)(),s=n(15),d=n.n(s),p=n(22);function f(){return(f=Object(p.a)(d.a.mark((function e(t){var n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrSoy7RbcW2fEfna7ipATtTs4qyjloW2I&q=".concat(t,"&part=snippet&maxResults=25"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=(r=a.items).filter((function(e){return"youtube#video"===e.id.kind})),c=r.map((function(e){return{id:e.id.videoId,channelId:e.snippet.channelId,channelTitle:e.snippet.channelTitle,description:e.snippet.description,thumbnails:e.snippet.thumbnails,width:e.snippet.thumbnails.medium.width,height:e.snippet.thumbnails.medium.height,title:e.snippet.title,url:e.snippet.thumbnails.medium.url}})),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(e){return f.apply(this,arguments)},g=function(e){try{var t=window.localStorage.getItem(e);return JSON.parse(t)}catch(n){return console.error('Error parsing storage item "'.concat(e,'".')),null}},b=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))};function x(){var e=Object(a.useContext)(m);if(!e)throw new Error('Can\'t use "useAuth" without an AuthProvider!');return e}var E,v,w,y,j,O,k,N=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(u.a)(n,2),l=c[0],i=c[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),d=s[0],p=s[1],f=Object(a.useState)("Wizeline"),x=Object(u.a)(f,2),E=x[0],v=x[1];Object(a.useEffect)((function(){var e=g("wa_cert_authenticated"),t=Boolean(e);h(E).then((function(e){p(e)})),i(t)}),[E]);var w=Object(a.useCallback)((function(){i(!0),b("wa_cert_authenticated",!0)}),[]),y=Object(a.useCallback)((function(){i(!1),b("wa_cert_authenticated",!1)}),[]);return r.a.createElement(m.Provider,{value:{login:w,logout:y,authenticated:l,videos:d,category:E,setCategory:v}},t)},S=n(5),C=n(6),A=C.a.div(E||(E=Object(S.a)(["\n    background: white;\n    text-align: justify;\n    padding-left: 30px;\n    padding-right: 30px;\n    margin-bottom: 20px;\n    margin-left: 10px;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n\n    @media (max-width: 1070px)  {\n        background: white;\n        text-align: justify;\n        margin-bottom: 20px;\n        margin-left: 0px;\n    }\n\n    @media (max-width: 400px) {\n        background: white;\n        text-align: justify;\n        margin-bottom: 20px;\n        margin-left: 0px;\n    }\n"]))),I=C.a.div(v||(v=Object(S.a)(["\n    display: flex;\n    margin-left: 10px;\n\n    > iframe {\n        width: 700px;\n    }\n\n    @media (max-width: 1070px)  {\n        background: black;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        margin-left: 0px;\n    }\n\n    @media (max-width: 400px)  {\n        background: black;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        margin-left: 0px;\n        width: 400px;\n        height: 200px;\n\n        > iframe{\n            width: 400px;\n        }\n}\n"]))),F=C.a.div(w||(w=Object(S.a)(['\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin-right: 20px;\n    margin-left: 20px;\n\n\n    :after {\n        content: "";\n        display: table;\n        clear: both;\n    }\n\n    @media (max-width: 1070px)  {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-right: 250px;\n        margin-left: 250px;\n    }\n\n    @media (max-width: 400px)  {\n        display: flex;\n        justify-content: center;\n        margin: 0 20px;\n        margin-right: 0px;\n    }\n']))),_=C.a.div(y||(y=Object(S.a)(["\n    display: flex;\n    justify-content: center;\n\n    @media (max-width: 1070px)  {\n        display: inline;\n        margin-bottom: 20px;\n    }\n\n    @media (max-width: 400px)  {\n        display: inline;\n        margin-bottom: 20px;\n        width: 400px;   \n    }\n"]))),q=C.a.div(j||(j=Object(S.a)(["\n    width: 100%;\n    background: transparent;\n    padding: 8px;\n"]))),T=C.a.div(O||(O=Object(S.a)(["\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    width: 30%;\n    background-color: #f1f1f1;\n    margin-bottom: 16px;\n    border-radius: 6px;\n    overflow: hidden;\n"]))),W=C.a.input(k||(k=Object(S.a)(["\n    color: #f2f2f2;\n    padding: 8px 16px 8px 0;\n    padding-right: 8px;\n    color: black;\n    height: 27px;\n    margin: 8px 16px 8px 0;\n    padding: 8px;\n    border-radius: 3px;\n    border: none;\n}\n"]))),z=function(e){var t=e.video;return r.a.createElement(T,{style:{width:t.width}},r.a.createElement("div",null,r.a.createElement(i.b,{to:"./".concat(t.id)},r.a.createElement("img",{onClick:function(){console.log("hola")},width:t.width,height:t.height,src:t.url,alt:"video"}))),r.a.createElement(q,null,t.title,t.description))};var J=function(e){var t=e.videos;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(z,{key:e.id,video:e})})))};var L=function(e){e.setCategory;var t=x().videos;return r.a.createElement(F,null,r.a.createElement(J,{videos:t}))};n(43);var P=function(){var e=Object(o.g)(),t=Object(a.useRef)(null),n=x(),c=n.authenticated,l=n.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"homepage",ref:t},r.a.createElement("h1",null,"Hello stranger!"),c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Good to have you back"),r.a.createElement("span",null,r.a.createElement(i.b,{to:"/",onClick:function(t){t.preventDefault(),l(),e.push("/")}},"\u2190 logout"),r.a.createElement("span",{className:"separator"}),r.a.createElement(i.b,{to:"/secret"},"show me something cool \u2192"))):r.a.createElement(i.b,{to:"/login"},"let me in \u2192")),r.a.createElement(L,null))};n(44);var R=function(){var e=x().login;console.log(x());var t=Object(o.g)();return r.a.createElement("section",{className:"login"},r.a.createElement("h1",null,"Welcome back!"),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e(),t.push("/secret")},className:"login-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},r.a.createElement("strong",null,"username "),r.a.createElement("input",{required:!0,type:"text",id:"username"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},r.a.createElement("strong",null,"password "),r.a.createElement("input",{required:!0,type:"password",id:"password"}))),r.a.createElement("button",{type:"submit"},"login")))};n(45);var B=function(){return r.a.createElement("section",{className:"not-found"},r.a.createElement(i.b,{to:"/",className:"home-link"},"home"),r.a.createElement("img",{src:"404.gif",alt:"page not found"}))};var D=function(){return r.a.createElement("section",null,r.a.createElement("pre",null,"welcome, voyager...",r.a.createElement(i.b,{to:"/"}," \u2190 go back")),r.a.createElement("iframe",{width:"800",height:"450",allowFullScreen:!0,frameBorder:"0",title:"rick roll",src:"https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}))};n(46);var M=function(e){var t=e.children;return r.a.createElement("main",{className:"container"},t)},H=n(13),Q=["isAuthenticated","component"];var G=function(e){var t=e.isAuthenticated,n=e.component,a=Object(H.a)(e,Q);return r.a.createElement(o.b,Object.assign({},a,{component:function(e){return t?r.a.createElement(o.a,{to:"/"}):r.a.createElement(n,e)}}))},X=["isAuthenticated","component"];var K=function(e){var t=e.isAuthenticated,n=e.component,a=Object(H.a)(e,X);return localStorage.setItem("lastPath",a.location.pathname),r.a.createElement(o.b,Object.assign({},a,{component:function(e){return t?r.a.createElement(n,e):r.a.createElement(o.a,{to:"/login"})}}))},U=n(10),V=n.n(U);function Y(){var e=Object(a.useState)("wizeline"),t=Object(u.a)(e,2),n=t[0],c=t[1],l=x().setCategory;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.trim().length>2&&(l((function(){return n})),c(""))}},r.a.createElement(W,{className:"navbar-text navbar-subtitle-input",placeholder:"Search",type:"text",value:n,onChange:function(e){c(e.target.value)}}))}Y.prototype={setCategory:V.a.func.isRequired};var Z=Y;n(20);var $,ee,te,ne=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,1)[0];return r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onChange:function(){t((function(){return"checked"}))}}),r.a.createElement("span",{className:"slider round"}))};var ae=C.a.div($||($=Object(S.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n\n    @media screen and (max-width: 768px) {    \n        display: none;\n        flex-wrap: wrap;\n        flex-direction: column;\n        align-items: flex-start;\n    }\n      \n"]))),re=C.a.div(ee||(ee=Object(S.a)(["\n    display: flex;\n    justify-content: flex-end;\n    flex-direction: column;\n    align-items: flex-end;\n    width: 100%;\n\n\n    @media screen and (max-width: 768px) {\n        align-items: flex-end;\n    }\n"])));function ce(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{className:"navbar-text",to:"/"},r.a.createElement("i",{className:"fa fa-home"}),"Home"),r.a.createElement("div",null,r.a.createElement(le,null,r.a.createElement(i.c,{activeClassName:"active",className:"navbar-text",exact:!0,to:"/secret"},r.a.createElement("i",{className:"fa fa-star"}),"Favorites"),r.a.createElement(ne,null),r.a.createElement(Z,null),r.a.createElement(i.c,{activeClassName:"active",className:"navbar-text",exact:!0,to:"/login"},r.a.createElement("i",{className:"fa fa-arrow-right"}),"Login"))))}var le=C.a.ul(te||(te=Object(S.a)(["\n    display: flex;\n    align-items: center;\n    padding-left: 0;\n    margin: 0;\n\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        padding-top: 0px;\n        align-items: flex-end;\n    }      \n"]))),ie=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement("nav",{className:"topnav"},r.a.createElement("div",{className:"navbar-toggle-menu",onClick:function(){c((function(e){return!e}))}},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement(ae,null,r.a.createElement(ce,null)),n&&r.a.createElement(re,null,r.a.createElement(ce,null)))};var oe=function(){var e=x().videos,t=Object(o.h)().videoId,n=e.find((function(e){return e.id===t}));return console.log(n),r.a.createElement(_,null,r.a.createElement("div",null,r.a.createElement(I,null,r.a.createElement("iframe",{title:"wizeline video",height:400,src:"https://www.youtube.com/embed/".concat(t),allowFullScreen:!0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})),r.a.createElement(A,null,r.a.createElement("b",null,n.title),r.a.createElement("p",null,n.description))),r.a.createElement(L,null))};var ue=function(){return r.a.createElement(i.a,null,r.a.createElement(N,null,r.a.createElement(ie,null),r.a.createElement(M,null,r.a.createElement(o.d,null,r.a.createElement(G,{exact:!0,path:"/",component:P,isAuthenticated:!1}),r.a.createElement(G,{exact:!0,path:"/:videoId",component:oe,isAuthenticated:!1}),r.a.createElement(G,{exact:!0,path:"/login",component:R,isAuthenticated:!1}),r.a.createElement(K,{exact:!0,path:"/secret",component:D,isAuthenticated:!0}),r.a.createElement(o.b,{path:"*"},r.a.createElement(B,null))))))};function me(e){return Math.floor(Math.random()*e)}var se=function(){return Object(a.useLayoutEffect)((function(){var e=document.body;function t(){var t=me(100),n=me(100);e.style.setProperty("--bg-position","".concat(t,"% ").concat(n,"%"))}var n=setInterval(t,3e3);return e.addEventListener("click",t),function(){clearInterval(n),e.removeEventListener("click",t)}}),[]),r.a.createElement(ue,null)};n(47);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4f0ed9ce.chunk.js.map