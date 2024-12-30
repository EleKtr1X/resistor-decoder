(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function y(){}function ye(t){return t()}function ae(){return Object.create(null)}function S(t){t.forEach(ye)}function ke(t){return typeof t=="function"}function j(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ae(t){return Object.keys(t).length===0}function ce(t){return t==null?"":t}function E(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function D(t){t.parentNode&&t.parentNode.removeChild(t)}function De(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function B(){return L(" ")}function Be(){return L("")}function K(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function d(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ne(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.data!==e&&(t.data=e)}function F(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Oe(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,r,e),l}class Ge{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,r=null){this.e||(this.is_svg?this.e=q(n.nodeName):this.e=v(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)$(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(D)}}let Z;function V(t){Z=t}function $e(){if(!Z)throw new Error("Function called outside component initialization");return Z}function Pe(t){$e().$$.on_mount.push(t)}function X(){const t=$e();return(e,n,{cancelable:r=!1}={})=>{const l=t.$$.callbacks[e];if(l){const o=Oe(e,n,{cancelable:r});return l.slice().forEach(i=>{i.call(t,o)}),!o.defaultPrevented}return!0}}const U=[],fe=[];let Y=[];const ue=[],Le=Promise.resolve();let re=!1;function Se(){re||(re=!0,Le.then(Fe))}function le(t){Y.push(t)}const te=new Set;let x=0;function Fe(){if(x!==0)return;const t=Z;do{try{for(;x<U.length;){const e=U[x];x++,V(e),Re(e.$$)}}catch(e){throw U.length=0,x=0,e}for(V(null),U.length=0,x=0;fe.length;)fe.pop()();for(let e=0;e<Y.length;e+=1){const n=Y[e];te.has(n)||(te.add(n),n())}Y.length=0}while(U.length);for(;ue.length;)ue.pop()();re=!1,te.clear(),V(t)}function Re(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(le)}}function Me(t){const e=[],n=[];Y.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Y=e}const J=new Set;let R;function z(){R={r:0,c:[],p:R}}function I(){R.r||S(R.c),R=R.p}function b(t,e){t&&t.i&&(J.delete(t),t.i(e))}function w(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),R.c.push(()=>{J.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function O(t){t&&t.c()}function T(t,e,n,r){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),r||le(()=>{const i=t.$$.on_mount.map(ye).filter(ke);t.$$.on_destroy?t.$$.on_destroy.push(...i):S(i),t.$$.on_mount=[]}),o.forEach(le)}function A(t,e){const n=t.$$;n.fragment!==null&&(Me(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function je(t,e){t.$$.dirty[0]===-1&&(U.push(t),Se(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,r,l,o,i,a=[-1]){const s=Z;V(t);const c=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:l,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:ae(),dirty:a,skip_bound:!1,root:e.target||s.$$.root};i&&i(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(_,g,...k)=>{const N=k.length?k[0]:g;return c.ctx&&l(c.ctx[_],c.ctx[_]=N)&&(!c.skip_bound&&c.bound[_]&&c.bound[_](N),u&&je(t,_)),g}):[],c.update(),u=!0,S(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const _=Ne(e.target);c.fragment&&c.fragment.l(_),_.forEach(D)}else c.fragment&&c.fragment.c();e.intro&&b(t.$$.fragment),T(t,e.target,e.anchor,e.customElement),Fe()}V(s)}class H{$destroy(){A(this,1),this.$destroy=y}$on(e,n){if(!ke(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Ae(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function xe(t){let e,n,r,l,o,i,a,s,c;return{c(){e=v("div"),n=v("div"),r=L(t[0]),l=B(),o=v("div"),i=v("i"),d(n,"class","text"),d(i,"class",a=ce(t[1])+" svelte-ni3q29"),d(o,"class","icon"),d(e,"class","button svelte-ni3q29"),d(e,"tabindex","0")},m(u,_){$(u,e,_),E(e,n),E(n,r),E(e,l),E(e,o),E(o,i),s||(c=[K(e,"click",t[3]),K(e,"keypress",t[4])],s=!0)},p(u,[_]){_&1&&Q(r,u[0]),_&2&&a!==(a=ce(u[1])+" svelte-ni3q29")&&d(i,"class",a)},i:y,o:y,d(u){u&&D(e),s=!1,S(c)}}}function Ue(t,e,n){let{text:r}=e,{icon:l}=e,o=X();const i=()=>o("click"),a=()=>o("click");return t.$$set=s=>{"text"in s&&n(0,r=s.text),"icon"in s&&n(1,l=s.icon)},[r,l,o,i,a]}class ze extends H{constructor(e){super(),W(this,e,Ue,xe,j,{text:0,icon:1})}}function Ie(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var oe={exports:{}},ee={},se={};Object.defineProperty(se,"__esModule",{value:!0});se.hexToRgb=function(e){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null};Object.defineProperty(ee,"__esModule",{value:!0});ee.isDarkColor=void 0;var Ye=se;ee.isDarkColor=function(e,n){if(n&&n.override){var r=Object.keys(n.override).find(function(u){return u.toLowerCase()===e.toLowerCase()});if(r!==void 0)return n.override[r]}var l=(0,Ye.hexToRgb)(e),o=l.r,i=l.g,a=l.b,s=[o/255,i/255,a/255].map(function(u){return u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4)}),c=.2126*s[0]+.7152*s[1]+.0722*s[2];return c<=.179};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=ee;e.default=n.isDarkColor,t.exports=e.default})(oe,oe.exports);const de=Ie(oe.exports),ne={0:"#000000",1:"#8C4D19",2:"#DE4439",3:"#EF8228",4:"#FCD500",5:"#53C638",6:"#1A94D0",7:"#7E43B1",8:"#999999",9:"#EEEEEE"},ge={1:"#000000",10:"#8C4D19",100:"#DE4439",1e3:"#EF8228",1e4:"#FCD500",1e5:"#53C638",1e6:"#1A94D0",1e7:"#7E43B1",1e8:"#999999",1e9:"#EEEEEE",.1:"url(#gold)",.01:"url(#silver)"},qe={1:"#8C4D19",2:"#DE4439",.5:"#53C638",.25:"#1A94D0",.1:"#7E43B1",.05:"#999999",5:"url(#gold)",10:"url(#silver)"},Ke={250:"#000000",100:"#8C4D19",50:"#DE4439",15:"#EF8228",25:"#FCD500",20:"#53C638",10:"#1A94D0",5:"#7E43B1",1:"#999999"},Te={"#000000":"#FFF","#8C4D19":"#FFF","#DE4439":"#000","#EF8228":"#000","#FCD500":"#000","#53C638":"#000","#1A94D0":"#000","#7E43B1":"#FFF","#999999":"#000","#EEEEEE":"#000","url(#gold)":"#000","url(#silver)":"#000"};function ie(t){return Intl.NumberFormat("en",{notation:"compact",maximumSignificantDigits:3}).format(t).replace("B","G").replace("K","k")}function We(t){let e,n,r;return{c(){e=v("li"),e.textContent=`${t[1]}`,d(e,"tabindex","0"),d(e,"class","svelte-1yjr0id"),F(e,"background",t[2]),F(e,"color",Te[t[2]]||"#000")},m(l,o){$(l,e,o),n||(r=[K(e,"click",t[4]),K(e,"keypress",t[5])],n=!0)},p:y,i:y,o:y,d(l){l&&D(e),n=!1,S(r)}}}function He(t,e,n){let{option:r}=e,l=r[1],o=r[2]||"#EEEEEE";const i=X(),a=()=>i("selectChange",r),s=()=>i("selectChange",r);return t.$$set=c=>{"option"in c&&n(0,r=c.option)},[r,l,o,i,a,s]}class Ve extends H{constructor(e){super(),W(this,e,He,We,j,{option:0})}}function he(t,e,n){const r=t.slice();return r[9]=e[n],r}function me(t){let e,n,r=t[0],l=[];for(let i=0;i<r.length;i+=1)l[i]=pe(he(t,r,i));const o=i=>w(l[i],1,1,()=>{l[i]=null});return{c(){e=v("ul");for(let i=0;i<l.length;i+=1)l[i].c();d(e,"class","options svelte-wzgym8")},m(i,a){$(i,e,a);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null);n=!0},p(i,a){if(a&65){r=i[0];let s;for(s=0;s<r.length;s+=1){const c=he(i,r,s);l[s]?(l[s].p(c,a),b(l[s],1)):(l[s]=pe(c),l[s].c(),b(l[s],1),l[s].m(e,null))}for(z(),s=r.length;s<l.length;s+=1)o(s);I()}},i(i){if(!n){for(let a=0;a<r.length;a+=1)b(l[a]);n=!0}},o(i){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)w(l[a]);n=!1},d(i){i&&D(e),De(l,i)}}}function pe(t){let e,n;return e=new Ve({props:{option:t[9]}}),e.$on("selectChange",t[7]),{c(){O(e.$$.fragment)},m(r,l){T(e,r,l),n=!0},p(r,l){const o={};l&1&&(o.option=r[9]),e.$set(o)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){A(e,r)}}}function Ze(t){let e,n,r,l,o,i,a,s,c,u,_,g,k,N,P,m=t[2]&&me(t);return{c(){e=v("div"),n=v("div"),r=L(t[1]),l=B(),o=v("div"),i=v("div"),a=L(t[3]),s=B(),c=v("div"),u=v("i"),g=B(),m&&m.c(),d(n,"class","header svelte-wzgym8"),d(u,"class",_="fa-solid fa-angle-"+(t[2]?"up":"down")+" fa-xs"),d(c,"class","arrow svelte-wzgym8"),d(i,"class","selected svelte-wzgym8"),d(i,"tabindex","0"),F(i,"background",t[4]),d(o,"class","dropdown svelte-wzgym8"),F(o,"color",de(t[4])?"white":"black"),d(e,"class","container svelte-wzgym8")},m(h,f){$(h,e,f),E(e,n),E(n,r),E(e,l),E(e,o),E(o,i),E(i,a),E(i,s),E(i,c),E(c,u),E(o,g),m&&m.m(o,null),k=!0,N||(P=[K(i,"click",t[5]),K(i,"keypress",t[5])],N=!0)},p(h,[f]){(!k||f&2)&&Q(r,h[1]),(!k||f&8)&&Q(a,h[3]),(!k||f&4&&_!==(_="fa-solid fa-angle-"+(h[2]?"up":"down")+" fa-xs"))&&d(u,"class",_),f&16&&F(i,"background",h[4]),h[2]?m?(m.p(h,f),f&4&&b(m,1)):(m=me(h),m.c(),b(m,1),m.m(o,null)):m&&(z(),w(m,1,1,()=>{m=null}),I()),f&16&&F(o,"color",de(h[4])?"white":"black")},i(h){k||(b(m),k=!0)},o(h){w(m),k=!1},d(h){h&&D(e),m&&m.d(),N=!1,S(P)}}}function Je(t,e,n){const r=X();let{data:l}=e,{name:o}=e,i=!1,a=l[0][1],s=l[0][2]||"#EEEEEE";function c(){n(2,i=!i)}function u(g){n(2,i=!1),n(3,a=g[1]),n(4,s=g[2]||"#EEEEEE"),r("selectChange",[o,g[0]])}const _=g=>u(g.detail);return t.$$set=g=>{"data"in g&&n(0,l=g.data),"name"in g&&n(1,o=g.name)},[l,o,i,a,s,c,u,_]}class M extends H{constructor(e){super(),W(this,e,Je,Ze,j,{data:0,name:1})}}const Qe=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
  <defs>\r
    <style>\r
      .cls-1 {\r
        fill: url(#linear-gradient);\r
      }\r
\r
      .cls-1, .cls-2, .cls-3, .cls-4 {\r
        stroke-width: 0px;\r
      }\r
\r
      .cls-3 {\r
        fill: url(#linear-gradient-2);\r
      }\r
\r
      .cls-4 {\r
        fill: url(#linear-gradient-3);\r
      }\r
    </style>\r
    <linearGradient id="linear-gradient" x1="87.56" y1="-27.44" x2="212.44" y2="97.44" gradientUnits="userSpaceOnUse">\r
      <stop offset="0" stop-color="#e1ccb4"/>\r
      <stop offset="1" stop-color="#cc967a"/>\r
    </linearGradient>\r
    <linearGradient id="linear-gradient-2" x1="0" y1="35" x2="50" y2="35" gradientUnits="userSpaceOnUse">\r
      <stop offset="0" stop-color="#ccc"/>\r
      <stop offset=".51" stop-color="#cacaca"/>\r
      <stop offset=".7" stop-color="#c3c3c3"/>\r
      <stop offset=".83" stop-color="#b7b7b7"/>\r
      <stop offset=".94" stop-color="#a6a6a6"/>\r
      <stop offset="1" stop-color="#999"/>\r
    </linearGradient>\r
    <linearGradient id="linear-gradient-3" x1="22.09" y1="132.32" x2="72.09" y2="132.32" gradientTransform="translate(322.09 167.32) rotate(-180)" xlink:href="#linear-gradient-2"/>\r
    <linearGradient id="gold" gradientTransform="rotate(45)">\r
      <stop offset="0" stop-color="rgb(255, 229, 89)"/>\r
      <stop offset="1" stop-color="rgb(255, 154, 0)"/>\r
    </linearGradient>\r
    <linearGradient id="silver" gradientTransform="rotate(45)">\r
      <stop offset="0" stop-color="rgb(250, 250, 250)"/>\r
      <stop offset="1" stop-color="rgb(180, 180, 180)"/>\r
    </linearGradient>\r
  \r
  </defs>\r
  <path class="cls-1" d="m232.73,0h-22.76c-5.5,0-9.96,4.46-9.96,9.96v.04h-100v-.04c0-5.5-4.46-9.96-9.96-9.96h-22.76c-9.54,0-17.27,7.73-17.27,17.27v35.45c0,9.54,7.73,17.27,17.27,17.27h22.76c5.5,0,9.96-4.46,9.96-9.96v-.04h100v.04c0,5.5,4.46,9.96,9.96,9.96h22.76c9.54,0,17.27-7.73,17.27-17.27V17.27c0-9.54-7.73-17.27-17.27-17.27Z"/>\r
  <rect class="cls-3" y="28.75" width="50" height="12.5"/>\r
  <rect class="cls-4" x="250" y="28.75" width="50" height="12.5"/>\r
</svg>`;function _e(t,e,n){const r=t.slice();return r[6]=e[n],r}function Xe(t){let e,n,r=t[6].value+"",l;return{c(){e=q("rect"),n=q("text"),l=L(r),d(e,"class","band-rect"),F(e,"fill",t[6].color),d(e,"x",t[6].x),d(e,"y",t[6].small?66.5:76.5),d(e,"height","11"),d(e,"width","0"),d(e,"rx","1"),d(n,"class","band-text"),d(n,"x",t[6].x+6.25),d(n,"y",t[6].small?75:85),F(n,"font-size","9px"),F(n,"fill",Te[t[6].color]),F(n,"margin","0"),F(n,"font-weight","bold"),d(n,"text-anchor","middle")},m(o,i){$(o,e,i),$(o,n,i),E(n,l)},p:y,d(o){o&&D(e),o&&D(n)}}}function Ee(t){let e,n,r=t[6].value!=null&&Xe(t);return{c(){e=q("rect"),r&&r.c(),n=Be(),F(e,"fill",t[6].color),d(e,"x",t[6].x),d(e,"y",t[6].small?10:0),d(e,"width","12.5"),d(e,"height",t[6].small?50:70)},m(l,o){$(l,e,o),r&&r.m(l,o),$(l,n,o)},p(l,o){l[6].value!=null&&r.p(l,o)},d(l){l&&D(e),r&&r.d(l),l&&D(n)}}}function et(t){let e,n,r,l,o,i=t[0],a=[];for(let s=0;s<i.length;s+=1)a[s]=Ee(_e(t,i,s));return{c(){e=q("svg"),n=new Ge(!0),r=Be();for(let s=0;s<a.length;s+=1)a[s].c();l=q("script"),o=L(`rects = document.getElementsByClassName(\`band-rect\`);\r
    texts = document.getElementsByClassName(\`band-text\`);\r
    for (i = 0; i < rects.length; i++) {\r
      rects[i].setAttribute('x', (+rects[i].getAttribute('x') - (((texts[i].getComputedTextLength()) * 0.5)) + 3.75))\r
      rects[i].setAttribute('width', texts[i].getComputedTextLength() + 5)\r
    }\r
      // rect.setAttribute('width', (text.getBBox().width).toString());`),n.a=r,d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),d(e,"viewBox","0 0 300 90"),d(e,"width","800px"),d(e,"class","preview svelte-14fc3mg")},m(s,c){$(s,e,c),n.m(Qe,e),E(e,r);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(e,null);E(e,l),E(l,o)},p(s,[c]){if(c&1){i=s[0];let u;for(u=0;u<i.length;u+=1){const _=_e(s,i,u);a[u]?a[u].p(_,c):(a[u]=Ee(_),a[u].c(),a[u].m(e,l))}for(;u<a.length;u+=1)a[u].d(1);a.length=i.length}},i:y,o:y,d(s){s&&D(e),De(a,s)}}}function tt(t,e,n){let{bandCount:r}=e,{digits:l}=e,{multiplier:o}=e,{tolerance:i}=e,{tempcoeff:a}=e;const s=[{bandNumber:1,value:l[0],color:ne[l[0]],x:70,small:!1},{bandNumber:2,value:l[1],color:ne[l[1]],x:105,small:!0},{bandNumber:3,value:r>4?l[2]:`\xD7${ie(o)}`,color:r>4?ne[l[2]]:ge[o],x:125,small:!0},{bandNumber:4,value:r>4?`\xD7${ie(o)}`:null,color:r>4?ge[o]:"none",x:145,small:!0},{bandNumber:r<5?4:5,value:r>3?`\xB1${i}%`:null,color:r>3?qe[i]:"none",x:182.5,small:!0},{bandNumber:6,value:r==6?`${a} ppm/K`:null,color:r==6?Ke[a]:"none",x:217.5,small:!1}];return t.$$set=c=>{"bandCount"in c&&n(1,r=c.bandCount),"digits"in c&&n(2,l=c.digits),"multiplier"in c&&n(3,o=c.multiplier),"tolerance"in c&&n(4,i=c.tolerance),"tempcoeff"in c&&n(5,a=c.tempcoeff)},[s,r,l,o,i,a]}class nt extends H{constructor(e){super(),W(this,e,tt,et,j,{bandCount:1,digits:2,multiplier:3,tolerance:4,tempcoeff:5})}}function rt(t){let e,n,r,l,o,i;return o=new ze({props:{text:"Copy Result",icon:"fa-solid fa-copy"}}),o.$on("click",t[1]),{c(){e=v("div"),n=v("h1"),r=L(t[0]),l=B(),O(o.$$.fragment),d(n,"class","svelte-1go2g8o"),d(e,"class","result svelte-1go2g8o")},m(a,s){$(a,e,s),E(e,n),E(n,r),E(e,l),T(o,e,null),i=!0},p(a,[s]){(!i||s&1)&&Q(r,a[0])},i(a){i||(b(o.$$.fragment,a),i=!0)},o(a){w(o.$$.fragment,a),i=!1},d(a){a&&D(e),A(o)}}}function lt(t,e,n){let{bandCount:r}=e,{digits:l}=e,{multiplier:o}=e,{tolerance:i}=e,{tempcoeff:a}=e,c=`${ie(parseInt(l.join(""))*o)} \u03A9`;r>=4?c+=` \xB1 ${i}%`:c+=" \xB1 20%",r==6&&(c+=` ${a} ppm/K`);let u=X();Pe(async()=>{u("resultUpdate",c)});async function _(){await navigator.clipboard.writeText(c),alert("Copied result to clipboard!")}return t.$$set=g=>{"bandCount"in g&&n(2,r=g.bandCount),"digits"in g&&n(3,l=g.digits),"multiplier"in g&&n(4,o=g.multiplier),"tolerance"in g&&n(5,i=g.tolerance),"tempcoeff"in g&&n(6,a=g.tempcoeff)},[c,_,r,l,o,i,a]}class ot extends H{constructor(e){super(),W(this,e,lt,rt,j,{bandCount:2,digits:3,multiplier:4,tolerance:5,tempcoeff:6})}}function be(t){let e,n,r,l;return e=new nt({props:{bandCount:t[0],digits:t[1],multiplier:t[2],tolerance:t[3],tempcoeff:t[4]}}),r=new ot({props:{bandCount:t[0],digits:t[1],multiplier:t[2],tolerance:t[3],tempcoeff:t[4]}}),r.$on("resultUpdate",t[7]),{c(){O(e.$$.fragment),n=B(),O(r.$$.fragment)},m(o,i){T(e,o,i),$(o,n,i),T(r,o,i),l=!0},p(o,i){const a={};i&1&&(a.bandCount=o[0]),i&2&&(a.digits=o[1]),i&4&&(a.multiplier=o[2]),i&8&&(a.tolerance=o[3]),i&16&&(a.tempcoeff=o[4]),e.$set(a);const s={};i&1&&(s.bandCount=o[0]),i&2&&(s.digits=o[1]),i&4&&(s.multiplier=o[2]),i&8&&(s.tolerance=o[3]),i&16&&(s.tempcoeff=o[4]),r.$set(s)},i(o){l||(b(e.$$.fragment,o),b(r.$$.fragment,o),l=!0)},o(o){w(e.$$.fragment,o),w(r.$$.fragment,o),l=!1},d(o){A(e,o),o&&D(n),A(r,o)}}}function we(t){let e,n;return e=new M({props:{data:[[0,"Black","#000000"],[1,"Brown","#8C4D19"],[2,"Red","#DE4439"],[3,"Orange","#EF8228"],[4,"Yellow","#FCD500"],[5,"Green","#53C638"],[6,"Blue","#1A94D0"],[7,"Purple","#7E43B1"],[8,"Grey","#999999"],[9,"White","#EEEEEE"]],name:"3rd Digit"}}),e.$on("selectChange",t[11]),{c(){O(e.$$.fragment)},m(r,l){T(e,r,l),n=!0},p:y,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){A(e,r)}}}function Ce(t){let e,n;return e=new M({props:{data:[[1,"Brown","#8C4D19"],[2,"Red","#DE4439"],[.5,"Green","#53C638"],[.25,"Blue","#1A94D0"],[.1,"Purple","#7E43B1"],[.05,"Grey","#999999"],[5,"Gold","#FFB800"],[10,"Silver","#DCDCDC"]],name:"Tolerance"}}),e.$on("selectChange",t[13]),{c(){O(e.$$.fragment)},m(r,l){T(e,r,l),n=!0},p:y,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){A(e,r)}}}function ve(t){let e,n;return e=new M({props:{data:[[100,"Brown","#8C4D19"],[50,"Red","#DE4439"],[15,"Orange","#EF8228"],[25,"Yellow","#FCD500"],[10,"Blue","#1A94D0"],[5,"Purple","#7E43B1"]],name:"Temp. Coeff."}}),e.$on("selectChange",t[14]),{c(){O(e.$$.fragment)},m(r,l){T(e,r,l),n=!0},p:y,i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){A(e,r)}}}function it(t){let e,n=[t[0],t[1],t[2],t[3],t[4]],r,l,o,i,a,s,c,u,_,g,k,N,P,m=be(t);o=new M({props:{data:[[3,"3 Bands"],[4,"4 Bands"],[5,"5 Bands"],[6,"6 Bands"]],name:"Band Count"}}),o.$on("selectChange",t[8]),a=new M({props:{data:[[1,"Brown","#8C4D19"],[2,"Red","#DE4439"],[3,"Orange","#EF8228"],[4,"Yellow","#FCD500"],[5,"Green","#53C638"],[6,"Blue","#1A94D0"],[7,"Purple","#7E43B1"],[8,"Grey","#999999"],[9,"White","#EEEEEE"]],name:"1st Digit"}}),a.$on("selectChange",t[9]),c=new M({props:{data:[[0,"Black","#000000"],[1,"Brown","#8C4D19"],[2,"Red","#DE4439"],[3,"Orange","#EF8228"],[4,"Yellow","#FCD500"],[5,"Green","#53C638"],[6,"Blue","#1A94D0"],[7,"Purple","#7E43B1"],[8,"Grey","#999999"],[9,"White","#EEEEEE"]],name:"2nd Digit"}}),c.$on("selectChange",t[10]);let h=t[0]>=5&&we(t);g=new M({props:{data:[[1,"Black","#000000"],[10,"Brown","#8C4D19"],[100,"Red","#DE4439"],[1e3,"Orange","#EF8228"],[1e4,"Yellow","#FCD500"],[1e5,"Green","#53C638"],[1e6,"Blue","#1A94D0"],[1e7,"Purple","#7E43B1"],[1e8,"Grey","#999999"],[1e9,"White","#EEEEEE"],[.1,"Gold","#FFB800"],[.01,"Silver","#DCDCDC"]],name:"Multiplier"}}),g.$on("selectChange",t[12]);let f=t[0]>=4&&Ce(t),C=t[0]==6&&ve(t);return{c(){e=v("main"),m.c(),r=B(),l=v("div"),O(o.$$.fragment),i=B(),O(a.$$.fragment),s=B(),O(c.$$.fragment),u=B(),h&&h.c(),_=B(),O(g.$$.fragment),k=B(),f&&f.c(),N=B(),C&&C.c(),d(l,"class","dropdowns svelte-8w9x3r")},m(p,G){$(p,e,G),m.m(e,null),E(e,r),E(e,l),T(o,l,null),E(l,i),T(a,l,null),E(l,s),T(c,l,null),E(l,u),h&&h.m(l,null),E(l,_),T(g,l,null),E(l,k),f&&f.m(l,null),E(l,N),C&&C.m(l,null),P=!0},p(p,[G]){G&31&&j(n,n=[p[0],p[1],p[2],p[3],p[4]])?(z(),w(m,1,1,y),I(),m=be(p),m.c(),b(m,1),m.m(e,r)):m.p(p,G),p[0]>=5?h?(h.p(p,G),G&1&&b(h,1)):(h=we(p),h.c(),b(h,1),h.m(l,_)):h&&(z(),w(h,1,1,()=>{h=null}),I()),p[0]>=4?f?(f.p(p,G),G&1&&b(f,1)):(f=Ce(p),f.c(),b(f,1),f.m(l,N)):f&&(z(),w(f,1,1,()=>{f=null}),I()),p[0]==6?C?(C.p(p,G),G&1&&b(C,1)):(C=ve(p),C.c(),b(C,1),C.m(l,null)):C&&(z(),w(C,1,1,()=>{C=null}),I())},i(p){P||(b(m),b(o.$$.fragment,p),b(a.$$.fragment,p),b(c.$$.fragment,p),b(h),b(g.$$.fragment,p),b(f),b(C),P=!0)},o(p){w(m),w(o.$$.fragment,p),w(a.$$.fragment,p),w(c.$$.fragment,p),w(h),w(g.$$.fragment,p),w(f),w(C),P=!1},d(p){p&&D(e),m.d(p),A(o),A(a),A(c),h&&h.d(),A(g),f&&f.d(),C&&C.d()}}}function st(t,e,n){let r=3,l=["1","0"],o=1,i=1,a=100;function s(f){switch(console.log(f),f[0]){case"Band Count":r>3&&f[1]==3&&n(3,i=1),r==6&&f[1]<6&&n(4,a=100),r<5&&f[1]>=5?l.push("0"):r>=5&&f[1]<5&&l.pop(),n(0,r=f[1]);break;case"1st Digit":n(1,l[0]=f[1].toString(),l);break;case"2nd Digit":n(1,l[1]=f[1].toString(),l);break;case"3rd Digit":n(1,l[2]=f[1].toString(),l);break;case"Multiplier":n(2,o=f[1]);break;case"Tolerance":n(3,i=f[1]);break;case"Temp. Coeff.":n(4,a=f[1]);break}}function c(f){}return[r,l,o,i,a,s,c,f=>(f.detail,void 0),f=>s(f.detail),f=>s(f.detail),f=>s(f.detail),f=>s(f.detail),f=>s(f.detail),f=>s(f.detail),f=>s(f.detail)]}class at extends H{constructor(e){super(),W(this,e,st,it,j,{})}}new at({target:document.getElementById("app")});
