(this["webpackJsonpreact-certification-2020"]=this["webpackJsonpreact-certification-2020"]||[]).push([[0],{20:function(e,t,n){},27:function(e,t,n){e.exports=n(47)},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,r,c,i,l,o=n(0),u=n.n(o),m=n(21),s=n.n(m),d=n(3),p=n(1),f=n(4),b=n(5),h=f.c.div(a||(a=Object(b.a)(["\n    background: white;\n    text-align: justify;\n    width: 700px;\n    padding: 8px;\n    \n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n\n    @media (max-width: 1070px)  {\n        display: flex:\n        align-items: center;\n        background: white;\n        text-align: justify;\n        margin-bottom: 20px;\n        \n    }\n\n    @media (max-width: 400px) {\n        background: white;\n        text-align: justify;\n        margin-bottom: 20px;\n        margin-left: 0px;\n    }\n"]))),v=f.c.div(r||(r=Object(b.a)(["\n    display: flex;\n    margin-left: 0px;\n    \n    > iframe {\n        width: 700px;\n    }\n\n    @media (max-width: 1070px)  {\n        width: 700px;\n        background: black;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        margin-left: 0px;\n    }\n\n    @media (max-width: 400px)  {\n        background: black;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        margin-left: 0px;\n        width: 400px;\n        height: 200px;\n\n        > iframe{\n            width: 400px;\n        }\n}\n"]))),g=f.c.div(c||(c=Object(b.a)(["\n    display: flex;\n    flex-direction: ",';\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin-right: 20px;\n    margin-left: 20px;\n\n\n    :after {\n        content: "";\n        display: table;\n        clear: both;\n    }\n\n    @media (max-width: 1070px)  {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-right: 250px;\n        margin-left: 250px;\n    }\n\n    @media (max-width: 400px)  {\n        display: flex;\n        justify-content: center;\n        margin: 0 20px;\n        margin-right: 0px;\n    }\n'])),(function(e){return e.direction})),x=f.c.div(i||(i=Object(b.a)(["\n    display: flex;\n    @media (max-width: 1070px)  {\n        flex-direction: column;\n        align-items: center;\n        display: flex;\n        margin-bottom: 20px;\n    }\n\n    @media (max-width: 400px)  {\n        display: inline;\n        margin-bottom: 20px;\n        width: 400px;   \n    }\n"]))),E=f.c.label(l||(l=Object(b.a)(["\n    color: #000080;\n"]))),w=n(9),y=Object(o.createContext)();var j=function(e){var t=Object(o.useRef)(!0),n=Object(o.useState)({videos:[],loading:!0,error:null}),a=Object(w.a)(n,2),r=a[0],c=a[1];return Object(o.useEffect)((function(){return function(){t.current=!1}}),[]),Object(o.useEffect)((function(){c({videos:[],loading:!0,error:null}),fetch("https://www.googleapis.com/youtube/v3/search?key=".concat("AIzaSyCrSoy7RbcW2fEfna7ipATtTs4qyjloW2I","&q=").concat(e,"&part=snippet&maxResults=25"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){if(t.current){var n=e.items;n=n.filter((function(e){return"youtube#video"===e.id.kind})),c({loading:!1,error:null,videos:n.map((function(e){return{id:e.id.videoId,channelId:e.snippet.channelId,channelTitle:e.snippet.channelTitle,description:e.snippet.description,thumbnails:e.snippet.thumbnails,width:e.snippet.thumbnails.medium.width,height:e.snippet.thumbnails.medium.height,title:e.snippet.title,url:e.snippet.thumbnails.medium.url,favorite:!1}}))})}}))}),[e]),r},O=n(13),k=n(14),N="[favorites] add",C="[favorites] remove";function S(e,t){switch(console.log(e),t.type){case N:var n=t.payload.id;return Object(k.a)(Object(k.a)({},e),{},Object(O.a)({},n,t.payload));case C:return delete e[t.payload],Object(k.a)({},e);default:return e}}var _=function(e){try{var t=window.localStorage.getItem(e);return JSON.parse(t)}catch(n){return console.error('Error parsing storage item "'.concat(e,'".')),null}},I=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))};function F(){var e=Object(o.useContext)(y);if(!e)throw new Error('Can\'t use "useAuth" without an AuthProvider!');return e}var z,A,R,q=function(e){var t=e.children,n=Object(o.useState)(!1),a=Object(w.a)(n,2),r=a[0],c=a[1],i=Object(o.useState)("Wizeline"),l=Object(w.a)(i,2),m=l[0],s=l[1],d=j(m).videos,p=Object(o.useState)(!1),f=Object(w.a)(p,2),b=f[0],h=f[1],v=Object(o.useReducer)(S,{}),g=Object(w.a)(v,2),x=g[0],E=g[1];Object(o.useEffect)((function(){var e=_("wa_cert_authenticated"),t=Boolean(e);console.log(t),c(t)}),[m]);var O=Object(o.useCallback)((function(){c(!0),I("wa_cert_authenticated",!0)}),[]),k=Object(o.useCallback)((function(){c(!1),I("wa_cert_authenticated",!1)}),[]),F=Object(o.useCallback)((function(e){E({type:N,payload:e})}),[]),z=Object(o.useCallback)((function(e){E({type:C,payload:e})}),[]);return u.a.createElement(y.Provider,{value:{login:O,logout:k,authenticated:r,videos:d,category:m,setCategory:s,isChecked:b,setIsChecked:h,addFavorite:F,removeFavorite:z,favorites:x}},t)},L=f.c.div(z||(z=Object(b.a)(["\n    width: 100%;\n    background: transparent;\n    padding: 8px;\n"]))),T=f.c.div(A||(A=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    width: ","px;\n    background-color: #f1f1f1;\n    margin-bottom: 16px;\n    border-radius: 6px;\n    overflow: hidden;\n"])),(function(e){return e.width})),D=f.c.input(R||(R=Object(b.a)(["\n    color: #f2f2f2;\n    padding: 8px 16px 8px 0;\n    padding-right: 8px;\n    color: black;\n    height: 27px;\n    margin: 8px 16px 8px 0;\n    padding: 8px;\n    border-radius: 3px;\n    border: none;\n}\n"]))),J=function(e){var t=e.video,n=e.isFavorite,a=F(),r=a.authenticated,c=a.addFavorite,i=a.removeFavorite;return u.a.createElement(T,{width:t.width},u.a.createElement("div",null,u.a.createElement(d.b,{to:"/videos/".concat(t.id)},u.a.createElement("img",{width:t.width,height:t.height,src:t.url,alt:"video"}))),r?u.a.createElement(L,null,u.a.createElement("b",null,t.title),u.a.createElement(E,{onClick:function(){n?i(t.id):c(t)}},n?u.a.createElement("i",{className:"fa fa-star"}):u.a.createElement("i",{className:"fa fa-star-half"}),u.a.createElement("hr",null)),t.description):u.a.createElement(L,null,u.a.createElement("b",null,t.title),u.a.createElement("hr",null),t.description))};var W=function(e){var t=e.videos,n=F().favorites;return t.map((function(e){var t=!!n[e.id];return console.log(t),u.a.createElement(J,{key:e.id,video:e,isFavorite:t})}))};var M=function(e){var t=e.videos,n=e.direction;return u.a.createElement(g,{direction:n,className:"animate__animated animate__zoomIn"},u.a.createElement(W,{videos:t}))};n(42);var P=function(){var e=Object(p.g)(),t=Object(o.useRef)(null),n=F(),a=n.authenticated,r=n.logout,c=n.videos;return console.log(F()),u.a.createElement(u.a.Fragment,null,u.a.createElement("section",{className:"homepage animate__animated animate__zoomIn",ref:t},u.a.createElement("h1",null,"Hello stranger!"),a?u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,"Good to have you back"),u.a.createElement("span",null,u.a.createElement(d.b,{to:"/",onClick:function(t){t.preventDefault(),r(),e.push("/")}},"\u2190 logout"),u.a.createElement("span",{className:"separator"}),u.a.createElement(d.b,{to:"/secret"},"show me something cool \u2192"))):u.a.createElement(d.b,{to:"/login"},"let me in \u2192")),u.a.createElement(M,{videos:c,direction:"row"}))};n(43);var B=function(){var e=F().login;console.log(F());var t=Object(p.g)();return u.a.createElement("section",{className:"login animate__animated animate__zoomIn"},u.a.createElement("h1",null,"Welcome back!"),u.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e(),t.push("/")},className:"login-form"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"username"},u.a.createElement("strong",null,"username "),u.a.createElement("input",{required:!0,type:"text",id:"username"}))),u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"password"},u.a.createElement("strong",null,"password "),u.a.createElement("input",{required:!0,type:"password",id:"password"}))),u.a.createElement("button",{type:"submit"},"login")))};n(44);var H=function(){return u.a.createElement("section",{className:"not-found"},u.a.createElement(d.b,{to:"/",className:"home-link"},"home"),u.a.createElement("img",{src:"404.gif",alt:"page not found"}))};var G=function(){var e=F().favorites,t=Object.values(e);return u.a.createElement("section",null,u.a.createElement("pre",{style:{textAlign:"center",fontSize:"30px"}},"Favorites",u.a.createElement(d.b,{to:"/"},"\u2190 go back")),u.a.createElement(M,{videos:t}))};n(45);var K=function(e){var t=e.children;return u.a.createElement("main",{className:"container"},t)},Q=n(10),U=n.n(Q);function V(){var e=Object(o.useState)("wizeline"),t=Object(w.a)(e,2),n=t[0],a=t[1],r=F().setCategory;return u.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.trim().length>2&&(r((function(){return n})),a(""))}},u.a.createElement(D,{className:"navbar-text navbar-subtitle-input",placeholder:"Search",type:"text",value:n,onChange:function(e){a(e.target.value)}}))}V.prototype={setCategory:U.a.func.isRequired};var X=V;n(20);var Y,Z,$,ee=function(){var e=F(),t=e.isChecked,n=e.setIsChecked;return u.a.createElement("div",{onClick:function(){n((function(e){return!e}))}},t?u.a.createElement("div",{className:"switch"},u.a.createElement("input",{type:"checkbox",checked:!0}),u.a.createElement("span",{className:"slider round"})):u.a.createElement("div",{className:"switch"},u.a.createElement("input",{type:"checkbox"}),u.a.createElement("span",{className:"slider round"})))};function te(){var e=Object(p.g)(),t=F(),n=t.authenticated,a=t.logout;return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.b,{className:"navbar-text",to:"/",id:"home"},u.a.createElement("i",{className:"fa fa-home"}),"Home"),u.a.createElement("div",null,u.a.createElement(re,null,n&&u.a.createElement(d.c,{activeClassName:"active",className:"navbar-text",exact:!0,to:"/secret"},u.a.createElement("i",{className:"fa fa-star"}),"Favorites"),u.a.createElement(ee,null),u.a.createElement(X,null),n?u.a.createElement(d.c,{activeClassName:"active",className:"navbar-text",exact:!0,to:"/",onClick:function(t){t.preventDefault(),a(),e.push("/")}},u.a.createElement("i",{className:"fa fa-arrow-right"}),"Logout"):u.a.createElement(d.c,{activeClassName:"active",className:"navbar-text",exact:!0,to:"/login"},u.a.createElement("i",{className:"fa fa-arrow-right"}),"Login"))))}var ne=f.c.div(Y||(Y=Object(b.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n\n    @media screen and (max-width: 768px) {    \n        display: none;\n        flex-wrap: wrap;\n        flex-direction: column;\n        align-items: flex-start;\n    }\n      \n"]))),ae=f.c.div(Z||(Z=Object(b.a)(["\n    display: flex;\n    justify-content: flex-end;\n    flex-direction: column;\n    align-items: flex-end;\n    width: 100%;\n\n\n    @media screen and (max-width: 768px) {\n        align-items: flex-end;\n    }\n"]))),re=f.c.ul($||($=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    padding-left: 0;\n    margin: 0;\n\n\n    @media screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        padding-top: 0px;\n        align-items: flex-end;\n    }      \n"]))),ce=function(){var e=Object(o.useState)(!1),t=Object(w.a)(e,2),n=t[0],a=t[1];return u.a.createElement("nav",{className:"topnav"},u.a.createElement("div",{className:"navbar-toggle-menu",onClick:function(){a((function(e){return!e}))}},u.a.createElement("i",{className:"fa fa-bars"})),u.a.createElement(ne,null,u.a.createElement(te,null)),n&&u.a.createElement(ae,null,u.a.createElement(te,null)))};var ie=function(){var e=F().videos,t=Object(p.h)().videosId,n=e.find((function(e){return e.id===t}));return u.a.createElement(x,null,u.a.createElement("div",null,u.a.createElement(v,null,u.a.createElement("iframe",{title:"wizeline video",height:400,src:"https://www.youtube.com/embed/".concat(n.id),allowFullScreen:!0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"})),u.a.createElement(h,null,u.a.createElement("b",null,n.title),u.a.createElement("hr",null),n.description)),u.a.createElement(M,{videos:e,direction:"column"}))},le=n(26),oe=["children"];var ue,me=function(e){var t=e.children,n=Object(le.a)(e,oe),a=F().authenticated;return u.a.createElement(p.b,Object.assign({},n,{render:function(){return a?t:u.a.createElement(p.a,{to:"/"})}}))},se=Object(f.b)(ue||(ue=Object(b.a)(["\n    body {\n        background-image: ","\n    }\n"])),(function(e){return e.theme.body})),de={body:"linear-gradient( 120deg, #c63030 0, #bbc1bf 19%, #23b16a 42%, #290470 79%, #7ac5d8 100%);"},pe={body:"linear-gradient( 120deg, #eea2a2 0, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)"};var fe=function(){var e=F().isChecked;return u.a.createElement(f.a,{theme:e?de:pe},u.a.createElement(se,null),u.a.createElement(d.a,null,u.a.createElement(ce,null),u.a.createElement(K,null,u.a.createElement(p.d,null,u.a.createElement(p.b,{exact:!0,path:"/"},u.a.createElement(P,null)),u.a.createElement(p.b,{exact:!0,path:"/login"},u.a.createElement(B,null)),u.a.createElement(p.b,{exact:!0,path:"/videos/:videosId"},u.a.createElement(ie,null)),u.a.createElement(me,{exact:!0,path:"/secret"},u.a.createElement(G,null)),u.a.createElement(p.b,{path:"*"},u.a.createElement(H,null))))))};function be(e){return Math.floor(Math.random()*e)}var he=function(){return Object(o.useLayoutEffect)((function(){var e=document.body;function t(){var t=be(100),n=be(100);e.style.setProperty("--bg-position","".concat(t,"% ").concat(n,"%"))}var n=setInterval(t,3e3);return e.addEventListener("click",t),function(){clearInterval(n),e.removeEventListener("click",t)}}),[]),u.a.createElement(q,null,u.a.createElement(fe,null))};n(46);s.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(he,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8917fbc4.chunk.js.map