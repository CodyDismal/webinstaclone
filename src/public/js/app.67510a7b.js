(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},o={app:0},r={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9d598ce8","chunk-471e11b3":"b874e05f","chunk-4d7ca8c8":"7c76d405","chunk-5c9f9da1":"23657a1e","chunk-b623ef86":"f721e11d"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-471e11b3":1,"chunk-4d7ca8c8":1,"chunk-5c9f9da1":1,"chunk-b623ef86":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-471e11b3":"8f649bd0","chunk-4d7ca8c8":"a367bf80","chunk-5c9f9da1":"79d62db9","chunk-b623ef86":"f3037739"}[e]+".css",r=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],p.parentNode.removeChild(p),a(s)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"56d7":function(e,t,a){"use strict";a.r(t);a("d3b7"),a("ac1f"),a("466d"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{staticClass:"view"},[a("router-view")],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("WebInstaClone")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[e.isLoggedIn?a("a",{staticClass:"nav-link"},[a("span",[a("router-link",{attrs:{to:{name:"feed"}}},[e._v("Feed")])],1)]):e._e()]),a("li",{staticClass:"nav-item active"},[e.isLoggedIn?a("a",{staticClass:"nav-link"},[a("span",[a("router-link",{attrs:{to:{name:"user",params:{id:e.userId}}}},[e._v("Mój profil")])],1)]):a("a",{staticClass:"nav-link"},[a("router-link",{attrs:{to:"/"}},[e._v("Zaloguj")])],1)]),a("li",{staticClass:"nav-item active"},[e.isLoggedIn?a("a",{staticClass:"nav-link",attrs:{href:""},on:{click:e.logout}},[e._v(" Wyloguj ")]):e._e()])]),a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"submit"}},[a("router-link",{attrs:{to:{name:"new-post"}}},[e._v("Dodaj post")])],1)])])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"Navbar",methods:{logout:function(){var e=this;e.axios.post("/auth/logout").then((function(t){e.$router.push("home"),e.$store.commit("setLoggedIn",!1),e.$store.commit("setLoggedUserId",-1)}))}},computed:{isLoggedIn:function(){return!!this.$store.state.loggedIn},userId:function(){return this.$store.state.loggedUserId}}},l=c,u=(a("db3c"),a("2877")),d=Object(u["a"])(l,s,i,!1,null,"b0887194",null),p=d.exports,m={name:"App",components:{Navbar:p},computed:{loggedIn:function(){return this.$store.state.loggedIn},userId:function(){return this.$store.state.userId}}},f=m,g=(a("034f"),Object(u["a"])(f,o,r,!1,null,null,null)),v=g.exports,h=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"}),a("div",{staticClass:"col-6"},[e.isLoginForm?a("LoginForm"):a("RegistrationForm"),e.isLoginForm?a("p",{staticClass:"little-tip",on:{click:e.changeForm}},[e._v("Nie masz konta? Załóż Sobie!")]):a("p",{staticClass:"little-tip",on:{click:e.changeForm}},[e._v("Masz już konto? Załoguj się!")])],1)])])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"}),a("div",{staticClass:"col-6"},[a("h1",[e._v("WebInstaClone")])])])}],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Podaj email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Hasło"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.login}},[e._v("Zaloguj się")])])])])},y=[],k={name:"LoginForm",data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;this.axios.post("/auth/login",{email:e.email,password:e.password}).then((function(t){e.$store.commit("setLoggedIn",!0),e.$store.commit("setLoggedUserId",t.data.userId),t.data.redirectToFillInfo?e.$router.push("personal-data"):e.$router.push("feed")})).catch((function(e){}))}}},_=k,I=Object(u["a"])(_,C,y,!1,null,"7253e101",null),x=I.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1",placeholder:"Enter email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Hasło")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Hasło"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Powtórz hasło")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCopy,expression:"passwordCopy"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword2",placeholder:"Powtórz hasło"},domProps:{value:e.passwordCopy},on:{input:function(t){t.target.composing||(e.passwordCopy=t.target.value)}}})]),a("div",{staticClass:"form-group form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.agreed,expression:"agreed"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"},domProps:{checked:Array.isArray(e.agreed)?e._i(e.agreed,null)>-1:e.agreed},on:{change:function(t){var a=e.agreed,n=t.target,o=!!n.checked;if(Array.isArray(a)){var r=null,s=e._i(a,r);n.checked?s<0&&(e.agreed=a.concat([r])):s>-1&&(e.agreed=a.slice(0,s).concat(a.slice(s+1)))}else e.agreed=o}}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[e._v("Zgadzam się z RODO, Cookies i t.d.")])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:!e.passwordIsOk},on:{click:e.register}},[e._v(" Załóż konto ")])])]),e.password!==e.passwordCopy?a("div",{staticClass:"alert alert-danger"},[e._v(" Hasła muszą się zgadzać! ")]):e._e(),e.password.length<=3?a("div",{staticClass:"alert alert-danger"},[e._v(" Hasło musi mieć przynajmniej 4 symboli! ")]):e._e(),e.registrationSuccess?a("div",{staticClass:"alert alert-success"},[e._v(" Rejestracja powiodłą się! Sprawdź mail by aktywować konto! ")]):e._e()])},L=[],P={name:"RegistrationForm",data:function(){return{email:"",password:"",passwordCopy:"",agreed:!1,registrationSuccess:!1}},computed:{passwordIsOk:function(){return this.password.length>3&&this.password===this.passwordCopy&&!0===this.agreed}},methods:{register:function(){var e=this;this.axios.post("/auth/register",{email:e.email,password:e.password}).then((function(t){e.registrationSuccess=!0})).catch((function(e){console.log(e)}))}}},E=P,O=Object(u["a"])(E,j,L,!1,null,"1857fa8c",null),$=O.exports,S={name:"home",data:function(){return{isLoginForm:!0}},methods:{changeForm:function(){this.isLoginForm=!this.isLoginForm}},components:{RegistrationForm:$,LoginForm:x}},F=S,N=(a("cccb"),Object(u["a"])(F,b,w,!1,null,null,null)),A=N.exports;n["a"].use(h["a"]);var z=[{path:"/",name:"home",component:A},{path:"/",name:"login",component:A},{path:"/personal-data",name:"personal-data",component:function(){return a.e("about").then(a.bind(null,"3315"))}},{path:"/user/:id",name:"user",component:function(){return a.e("chunk-4d7ca8c8").then(a.bind(null,"1511"))}},{path:"/new-post",name:"new-post",component:function(){return a.e("chunk-5c9f9da1").then(a.bind(null,"6e73"))}},{path:"/post/:id",name:"post",component:function(){return a.e("chunk-b623ef86").then(a.bind(null,"37d3"))}},{path:"/feed",name:"feed",component:function(){return a.e("chunk-471e11b3").then(a.bind(null,"4787"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],T=new h["a"]({mode:"history",base:"/",routes:z}),U=T,H=a("2f62");n["a"].use(H["a"]);var M=new H["a"].Store({state:{loggedIn:!1,userId:-1,loggedUserId:-1},mutations:{setLoggedIn:function(e,t){e.loggedIn=t},setLoggedUserId:function(e,t){e.userId=t,e.loggedUserId=t}},actions:{},modules:{}}),Z=a("bc3a"),R=a.n(Z);function D(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}n["a"].config.productionTip=!1,n["a"].prototype.axios=R.a,n["a"].prototype.axios.interceptors.response.use((function(e){return M.commit("setLoggedIn",D("loggedIn")),M.commit("setLoggedUserId",D("loggedUserId")),e}),(function(e){return 401===e.response.status&&U.push({name:"login"}),Promise.reject(e)})),new n["a"]({router:U,store:M,render:function(e){return e(v)}}).$mount("#app")},"5ced":function(e,t,a){},"85ec":function(e,t,a){},cccb:function(e,t,a){"use strict";var n=a("5ced"),o=a.n(n);o.a},db3c:function(e,t,a){"use strict";var n=a("e978"),o=a.n(n);o.a},e978:function(e,t,a){}});
//# sourceMappingURL=app.67510a7b.js.map