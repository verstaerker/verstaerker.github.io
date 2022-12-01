(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function l(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(a){if(a.ep)return;a.ep=!0;const r=l(a);fetch(a.href,r)}})();function Uo(e,n){const l=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)l[t[a]]=!0;return n?a=>!!l[a.toLowerCase()]:a=>!!l[a]}function le(e){if(ls(e)){const n={};for(let l=0;l<e.length;l++){const t=e[l],a=Ns(t)?m8(t):le(t);if(a)for(const r in a)n[r]=a[r]}return n}else{if(Ns(e))return e;if(js(e))return e}}const d8=/;(?![^(]*\))/g,f8=/:([^]+)/,B8=/\/\*.*?\*\//gs;function m8(e){const n={};return e.replace(B8,"").split(d8).forEach(l=>{if(l){const t=l.split(f8);t.length>1&&(n[t[0].trim()]=t[1].trim())}}),n}function Ls(e){let n="";if(Ns(e))n=e;else if(ls(e))for(let l=0;l<e.length;l++){const t=Ls(e[l]);t&&(n+=t+" ")}else if(js(e))for(const l in e)e[l]&&(n+=l+" ");return n.trim()}function ps(e){if(!e)return null;let{class:n,style:l}=e;return n&&!Ns(n)&&(e.class=Ls(n)),l&&(e.style=le(l)),e}const D8="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g8=Uo(D8),C8="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",v8=Uo(C8);function wi(e){return!!e||e===""}const Tn=e=>Ns(e)?e:e==null?"":ls(e)||js(e)&&(e.toString===Ti||!is(e.toString))?JSON.stringify(e,xi,2):String(e),xi=(e,n)=>n&&n.__v_isRef?xi(e,n.value):Yn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((l,[t,a])=>(l[`${t} =>`]=a,l),{})}:Si(n)?{[`Set(${n.size})`]:[...n.values()]}:js(n)&&!ls(n)&&!$i(n)?String(n):n,Ps={},Gn=[],Se=()=>{},b8=()=>!1,_8=/^on[^a-z]/,Ho=e=>_8.test(e),_a=e=>e.startsWith("onUpdate:"),ie=Object.assign,Ea=(e,n)=>{const l=e.indexOf(n);l>-1&&e.splice(l,1)},E8=Object.prototype.hasOwnProperty,gs=(e,n)=>E8.call(e,n),ls=Array.isArray,Yn=e=>zo(e)==="[object Map]",Si=e=>zo(e)==="[object Set]",is=e=>typeof e=="function",Ns=e=>typeof e=="string",ka=e=>typeof e=="symbol",js=e=>e!==null&&typeof e=="object",Oi=e=>js(e)&&is(e.then)&&is(e.catch),Ti=Object.prototype.toString,zo=e=>Ti.call(e),k8=e=>zo(e).slice(8,-1),$i=e=>zo(e)==="[object Object]",Fa=e=>Ns(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mo=Uo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=e=>{const n=Object.create(null);return l=>n[l]||(n[l]=e(l))},F8=/-(\w)/g,ze=Vo(e=>e.replace(F8,(n,l)=>l?l.toUpperCase():"")),w8=/\B([A-Z])/g,Rn=Vo(e=>e.replace(w8,"-$1").toLowerCase()),Wo=Vo(e=>e.charAt(0).toUpperCase()+e.slice(1)),rt=Vo(e=>e?`on${Wo(e)}`:""),Nl=(e,n)=>!Object.is(e,n),Zn=(e,n)=>{for(let l=0;l<e.length;l++)e[l](n)},Eo=(e,n,l)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:l})},ko=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let gr;const x8=()=>gr||(gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let he;class Pi{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=he,!n&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}run(n){if(this.active){const l=he;try{return he=this,n()}finally{he=l}}}on(){he=this}off(){he=this.parent}stop(n){if(this.active){let l,t;for(l=0,t=this.effects.length;l<t;l++)this.effects[l].stop();for(l=0,t=this.cleanups.length;l<t;l++)this.cleanups[l]();if(this.scopes)for(l=0,t=this.scopes.length;l<t;l++)this.scopes[l].stop(!0);if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function S8(e){return new Pi(e)}function O8(e,n=he){n&&n.active&&n.effects.push(e)}function Ri(){return he}function Li(e){he&&he.cleanups.push(e)}const wa=e=>{const n=new Set(e);return n.w=0,n.n=0,n},ji=e=>(e.w&An)>0,Mi=e=>(e.n&An)>0,T8=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=An},$8=e=>{const{deps:n}=e;if(n.length){let l=0;for(let t=0;t<n.length;t++){const a=n[t];ji(a)&&!Mi(a)?a.delete(e):n[l++]=a,a.w&=~An,a.n&=~An}n.length=l}},Rt=new WeakMap;let bl=0,An=1;const Lt=30;let Fe;const xn=Symbol(""),jt=Symbol("");class xa{constructor(n,l=null,t){this.fn=n,this.scheduler=l,this.active=!0,this.deps=[],this.parent=void 0,O8(this,t)}run(){if(!this.active)return this.fn();let n=Fe,l=an;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Fe,Fe=this,an=!0,An=1<<++bl,bl<=Lt?T8(this):Cr(this),this.fn()}finally{bl<=Lt&&$8(this),An=1<<--bl,Fe=this.parent,an=l,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(Cr(this),this.onStop&&this.onStop(),this.active=!1)}}function Cr(e){const{deps:n}=e;if(n.length){for(let l=0;l<n.length;l++)n[l].delete(e);n.length=0}}let an=!0;const Ii=[];function cl(){Ii.push(an),an=!1}function il(){const e=Ii.pop();an=e===void 0?!0:e}function ge(e,n,l){if(an&&Fe){let t=Rt.get(e);t||Rt.set(e,t=new Map);let a=t.get(l);a||t.set(l,a=wa()),Ni(a)}}function Ni(e,n){let l=!1;bl<=Lt?Mi(e)||(e.n|=An,l=!ji(e)):l=!e.has(Fe),l&&(e.add(Fe),Fe.deps.push(e))}function Qe(e,n,l,t,a,r){const c=Rt.get(e);if(!c)return;let i=[];if(n==="clear")i=[...c.values()];else if(l==="length"&&ls(e)){const p=ko(t);c.forEach((y,u)=>{(u==="length"||u>=p)&&i.push(y)})}else switch(l!==void 0&&i.push(c.get(l)),n){case"add":ls(e)?Fa(l)&&i.push(c.get("length")):(i.push(c.get(xn)),Yn(e)&&i.push(c.get(jt)));break;case"delete":ls(e)||(i.push(c.get(xn)),Yn(e)&&i.push(c.get(jt)));break;case"set":Yn(e)&&i.push(c.get(xn));break}if(i.length===1)i[0]&&Mt(i[0]);else{const p=[];for(const y of i)y&&p.push(...y);Mt(wa(p))}}function Mt(e,n){const l=ls(e)?e:[...e];for(const t of l)t.computed&&vr(t);for(const t of l)t.computed||vr(t)}function vr(e,n){(e!==Fe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const P8=Uo("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ka)),R8=Sa(),L8=Sa(!1,!0),j8=Sa(!0),br=M8();function M8(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...l){const t=_s(this);for(let r=0,c=this.length;r<c;r++)ge(t,"get",r+"");const a=t[n](...l);return a===-1||a===!1?t[n](...l.map(_s)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...l){cl();const t=_s(this)[n].apply(this,l);return il(),t}}),e}function Sa(e=!1,n=!1){return function(t,a,r){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return n;if(a==="__v_raw"&&r===(e?n?su:Ki:n?Wi:Vi).get(t))return t;const c=ls(t);if(!e&&c&&gs(br,a))return Reflect.get(br,a,r);const i=Reflect.get(t,a,r);return(ka(a)?Ui.has(a):P8(a))||(e||ge(t,"get",a),n)?i:xs(i)?c&&Fa(a)?i:i.value:js(i)?e?En(i):Rs(i):i}}const I8=Hi(),N8=Hi(!0);function Hi(e=!1){return function(l,t,a,r){let c=l[t];if(nl(c)&&xs(c)&&!xs(a))return!1;if(!e&&(!Fo(a)&&!nl(a)&&(c=_s(c),a=_s(a)),!ls(l)&&xs(c)&&!xs(a)))return c.value=a,!0;const i=ls(l)&&Fa(t)?Number(t)<l.length:gs(l,t),p=Reflect.set(l,t,a,r);return l===_s(r)&&(i?Nl(a,c)&&Qe(l,"set",t,a):Qe(l,"add",t,a)),p}}function U8(e,n){const l=gs(e,n);e[n];const t=Reflect.deleteProperty(e,n);return t&&l&&Qe(e,"delete",n,void 0),t}function H8(e,n){const l=Reflect.has(e,n);return(!ka(n)||!Ui.has(n))&&ge(e,"has",n),l}function z8(e){return ge(e,"iterate",ls(e)?"length":xn),Reflect.ownKeys(e)}const zi={get:R8,set:I8,deleteProperty:U8,has:H8,ownKeys:z8},V8={get:j8,set(e,n){return!0},deleteProperty(e,n){return!0}},W8=ie({},zi,{get:L8,set:N8}),Oa=e=>e,Ko=e=>Reflect.getPrototypeOf(e);function ao(e,n,l=!1,t=!1){e=e.__v_raw;const a=_s(e),r=_s(n);l||(n!==r&&ge(a,"get",n),ge(a,"get",r));const{has:c}=Ko(a),i=t?Oa:l?Pa:Ul;if(c.call(a,n))return i(e.get(n));if(c.call(a,r))return i(e.get(r));e!==a&&e.get(n)}function ro(e,n=!1){const l=this.__v_raw,t=_s(l),a=_s(e);return n||(e!==a&&ge(t,"has",e),ge(t,"has",a)),e===a?l.has(e):l.has(e)||l.has(a)}function co(e,n=!1){return e=e.__v_raw,!n&&ge(_s(e),"iterate",xn),Reflect.get(e,"size",e)}function _r(e){e=_s(e);const n=_s(this);return Ko(n).has.call(n,e)||(n.add(e),Qe(n,"add",e,e)),this}function Er(e,n){n=_s(n);const l=_s(this),{has:t,get:a}=Ko(l);let r=t.call(l,e);r||(e=_s(e),r=t.call(l,e));const c=a.call(l,e);return l.set(e,n),r?Nl(n,c)&&Qe(l,"set",e,n):Qe(l,"add",e,n),this}function kr(e){const n=_s(this),{has:l,get:t}=Ko(n);let a=l.call(n,e);a||(e=_s(e),a=l.call(n,e)),t&&t.call(n,e);const r=n.delete(e);return a&&Qe(n,"delete",e,void 0),r}function Fr(){const e=_s(this),n=e.size!==0,l=e.clear();return n&&Qe(e,"clear",void 0,void 0),l}function io(e,n){return function(t,a){const r=this,c=r.__v_raw,i=_s(c),p=n?Oa:e?Pa:Ul;return!e&&ge(i,"iterate",xn),c.forEach((y,u)=>t.call(a,p(y),p(u),r))}}function po(e,n,l){return function(...t){const a=this.__v_raw,r=_s(a),c=Yn(r),i=e==="entries"||e===Symbol.iterator&&c,p=e==="keys"&&c,y=a[e](...t),u=l?Oa:n?Pa:Ul;return!n&&ge(r,"iterate",p?jt:xn),{next(){const{value:A,done:h}=y.next();return h?{value:A,done:h}:{value:i?[u(A[0]),u(A[1])]:u(A),done:h}},[Symbol.iterator](){return this}}}}function en(e){return function(...n){return e==="delete"?!1:this}}function K8(){const e={get(r){return ao(this,r)},get size(){return co(this)},has:ro,add:_r,set:Er,delete:kr,clear:Fr,forEach:io(!1,!1)},n={get(r){return ao(this,r,!1,!0)},get size(){return co(this)},has:ro,add:_r,set:Er,delete:kr,clear:Fr,forEach:io(!1,!0)},l={get(r){return ao(this,r,!0)},get size(){return co(this,!0)},has(r){return ro.call(this,r,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:io(!0,!1)},t={get(r){return ao(this,r,!0,!0)},get size(){return co(this,!0)},has(r){return ro.call(this,r,!0)},add:en("add"),set:en("set"),delete:en("delete"),clear:en("clear"),forEach:io(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=po(r,!1,!1),l[r]=po(r,!0,!1),n[r]=po(r,!1,!0),t[r]=po(r,!0,!0)}),[e,l,n,t]}const[q8,G8,Y8,Z8]=K8();function Ta(e,n){const l=n?e?Z8:Y8:e?G8:q8;return(t,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?t:Reflect.get(gs(l,a)&&a in t?l:t,a,r)}const Q8={get:Ta(!1,!1)},J8={get:Ta(!1,!0)},X8={get:Ta(!0,!1)},Vi=new WeakMap,Wi=new WeakMap,Ki=new WeakMap,su=new WeakMap;function eu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nu(e){return e.__v_skip||!Object.isExtensible(e)?0:eu(k8(e))}function Rs(e){return nl(e)?e:$a(e,!1,zi,Q8,Vi)}function lu(e){return $a(e,!1,W8,J8,Wi)}function En(e){return $a(e,!0,V8,X8,Ki)}function $a(e,n,l,t,a){if(!js(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=a.get(e);if(r)return r;const c=nu(e);if(c===0)return e;const i=new Proxy(e,c===2?t:l);return a.set(e,i),i}function Qn(e){return nl(e)?Qn(e.__v_raw):!!(e&&e.__v_isReactive)}function nl(e){return!!(e&&e.__v_isReadonly)}function Fo(e){return!!(e&&e.__v_isShallow)}function qi(e){return Qn(e)||nl(e)}function _s(e){const n=e&&e.__v_raw;return n?_s(n):e}function qo(e){return Eo(e,"__v_skip",!0),e}const Ul=e=>js(e)?Rs(e):e,Pa=e=>js(e)?En(e):e;function Ra(e){an&&Fe&&(e=_s(e),Ni(e.dep||(e.dep=wa())))}function La(e,n){e=_s(e),e.dep&&Mt(e.dep)}function xs(e){return!!(e&&e.__v_isRef===!0)}function V(e){return Gi(e,!1)}function Ve(e){return Gi(e,!0)}function Gi(e,n){return xs(e)?e:new ou(e,n)}class ou{constructor(n,l){this.__v_isShallow=l,this.dep=void 0,this.__v_isRef=!0,this._rawValue=l?n:_s(n),this._value=l?n:Ul(n)}get value(){return Ra(this),this._value}set value(n){const l=this.__v_isShallow||Fo(n)||nl(n);n=l?n:_s(n),Nl(n,this._rawValue)&&(this._rawValue=n,this._value=l?n:Ul(n),La(this))}}function _(e){return xs(e)?e.value:e}const tu={get:(e,n,l)=>_(Reflect.get(e,n,l)),set:(e,n,l,t)=>{const a=e[n];return xs(a)&&!xs(l)?(a.value=l,!0):Reflect.set(e,n,l,t)}};function Yi(e){return Qn(e)?e:new Proxy(e,tu)}class au{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:l,set:t}=n(()=>Ra(this),()=>La(this));this._get=l,this._set=t}get value(){return this._get()}set value(n){this._set(n)}}function Zi(e){return new au(e)}function ru(e){const n=ls(e)?new Array(e.length):{};for(const l in e)n[l]=iu(e,l);return n}class cu{constructor(n,l,t){this._object=n,this._key=l,this._defaultValue=t,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function iu(e,n,l){const t=e[n];return xs(t)?t:new cu(e,n,l)}var Qi;class pu{constructor(n,l,t,a){this._setter=l,this.dep=void 0,this.__v_isRef=!0,this[Qi]=!1,this._dirty=!0,this.effect=new xa(n,()=>{this._dirty||(this._dirty=!0,La(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=t}get value(){const n=_s(this);return Ra(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Qi="__v_isReadonly";function yu(e,n,l=!1){let t,a;const r=is(e);return r?(t=e,a=Se):(t=e.get,a=e.set),new pu(t,a,r||!a,l)}function rn(e,n,l,t){let a;try{a=t?e(...t):e()}catch(r){Go(r,n,l)}return a}function Oe(e,n,l,t){if(is(e)){const r=rn(e,n,l,t);return r&&Oi(r)&&r.catch(c=>{Go(c,n,l)}),r}const a=[];for(let r=0;r<e.length;r++)a.push(Oe(e[r],n,l,t));return a}function Go(e,n,l,t=!0){const a=n?n.vnode:null;if(n){let r=n.parent;const c=n.proxy,i=l;for(;r;){const y=r.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](e,c,i)===!1)return}r=r.parent}const p=n.appContext.config.errorHandler;if(p){rn(p,null,10,[e,c,i]);return}}uu(e,l,a,t)}function uu(e,n,l,t=!0){console.error(e)}let Hl=!1,It=!1;const se=[];let Ie=0;const Jn=[];let Ge=null,Cn=0;const Ji=Promise.resolve();let ja=null;function ee(e){const n=ja||Ji;return e?n.then(this?e.bind(this):e):n}function Au(e){let n=Ie+1,l=se.length;for(;n<l;){const t=n+l>>>1;zl(se[t])<e?n=t+1:l=t}return n}function Ma(e){(!se.length||!se.includes(e,Hl&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?se.push(e):se.splice(Au(e.id),0,e),Xi())}function Xi(){!Hl&&!It&&(It=!0,ja=Ji.then(ep))}function hu(e){const n=se.indexOf(e);n>Ie&&se.splice(n,1)}function du(e){ls(e)?Jn.push(...e):(!Ge||!Ge.includes(e,e.allowRecurse?Cn+1:Cn))&&Jn.push(e),Xi()}function wr(e,n=Hl?Ie+1:0){for(;n<se.length;n++){const l=se[n];l&&l.pre&&(se.splice(n,1),n--,l())}}function sp(e){if(Jn.length){const n=[...new Set(Jn)];if(Jn.length=0,Ge){Ge.push(...n);return}for(Ge=n,Ge.sort((l,t)=>zl(l)-zl(t)),Cn=0;Cn<Ge.length;Cn++)Ge[Cn]();Ge=null,Cn=0}}const zl=e=>e.id==null?1/0:e.id,fu=(e,n)=>{const l=zl(e)-zl(n);if(l===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return l};function ep(e){It=!1,Hl=!0,se.sort(fu);const n=Se;try{for(Ie=0;Ie<se.length;Ie++){const l=se[Ie];l&&l.active!==!1&&rn(l,null,14)}}finally{Ie=0,se.length=0,sp(),Hl=!1,ja=null,(se.length||Jn.length)&&ep()}}function Bu(e,n,...l){if(e.isUnmounted)return;const t=e.vnode.props||Ps;let a=l;const r=n.startsWith("update:"),c=r&&n.slice(7);if(c&&c in t){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:A,trim:h}=t[u]||Ps;h&&(a=l.map(f=>Ns(f)?f.trim():f)),A&&(a=l.map(ko))}let i,p=t[i=rt(n)]||t[i=rt(ze(n))];!p&&r&&(p=t[i=rt(Rn(n))]),p&&Oe(p,e,6,a);const y=t[i+"Once"];if(y){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Oe(y,e,6,a)}}function np(e,n,l=!1){const t=n.emitsCache,a=t.get(e);if(a!==void 0)return a;const r=e.emits;let c={},i=!1;if(!is(e)){const p=y=>{const u=np(y,n,!0);u&&(i=!0,ie(c,u))};!l&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}return!r&&!i?(js(e)&&t.set(e,null),null):(ls(r)?r.forEach(p=>c[p]=null):ie(c,r),js(e)&&t.set(e,c),c)}function Yo(e,n){return!e||!Ho(n)?!1:(n=n.slice(2).replace(/Once$/,""),gs(e,n[0].toLowerCase()+n.slice(1))||gs(e,Rn(n))||gs(e,n))}let Qs=null,Zo=null;function wo(e){const n=Qs;return Qs=e,Zo=e&&e.type.__scopeId||null,n}function bb(e){Zo=e}function _b(){Zo=null}function T(e,n=Qs,l){if(!n||e._n)return e;const t=(...a)=>{t._d&&Mr(-1);const r=wo(n);let c;try{c=e(...a)}finally{wo(r),t._d&&Mr(1)}return c};return t._n=!0,t._c=!0,t._d=!0,t}function ct(e){const{type:n,vnode:l,proxy:t,withProxy:a,props:r,propsOptions:[c],slots:i,attrs:p,emit:y,render:u,renderCache:A,data:h,setupState:f,ctx:d,inheritAttrs:g}=e;let C,b;const E=wo(e);try{if(l.shapeFlag&4){const w=a||t;C=Me(u.call(w,w,A,r,f,h,d)),b=p}else{const w=n;C=Me(w.length>1?w(r,{attrs:p,slots:i,emit:y}):w(r,null)),b=n.props?p:mu(p)}}catch(w){wl.length=0,Go(w,e,1),C=M(hn)}let v=C;if(b&&g!==!1){const w=Object.keys(b),{shapeFlag:R}=v;w.length&&R&7&&(c&&w.some(_a)&&(b=Du(b,c)),v=$n(v,b))}return l.dirs&&(v=$n(v),v.dirs=v.dirs?v.dirs.concat(l.dirs):l.dirs),l.transition&&(v.transition=l.transition),C=v,wo(E),C}const mu=e=>{let n;for(const l in e)(l==="class"||l==="style"||Ho(l))&&((n||(n={}))[l]=e[l]);return n},Du=(e,n)=>{const l={};for(const t in e)(!_a(t)||!(t.slice(9)in n))&&(l[t]=e[t]);return l};function gu(e,n,l){const{props:t,children:a,component:r}=e,{props:c,children:i,patchFlag:p}=n,y=r.emitsOptions;if(n.dirs||n.transition)return!0;if(l&&p>=0){if(p&1024)return!0;if(p&16)return t?xr(t,c,y):!!c;if(p&8){const u=n.dynamicProps;for(let A=0;A<u.length;A++){const h=u[A];if(c[h]!==t[h]&&!Yo(y,h))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:t===c?!1:t?c?xr(t,c,y):!0:!!c;return!1}function xr(e,n,l){const t=Object.keys(n);if(t.length!==Object.keys(e).length)return!0;for(let a=0;a<t.length;a++){const r=t[a];if(n[r]!==e[r]&&!Yo(l,r))return!0}return!1}function Cu({vnode:e,parent:n},l){for(;n&&n.subTree===e;)(e=n.vnode).el=l,n=n.parent}const lp=e=>e.__isSuspense;function vu(e,n){n&&n.pendingBranch?ls(e)?n.effects.push(...e):n.effects.push(e):du(e)}function fe(e,n){if(Ys){let l=Ys.provides;const t=Ys.parent&&Ys.parent.provides;t===l&&(l=Ys.provides=Object.create(t)),l[e]=n}}function U(e,n,l=!1){const t=Ys||Qs;if(t){const a=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return l&&is(n)?n.call(t.proxy):n}}function pl(e,n){return Ia(e,null,n)}const yo={};function As(e,n,l){return Ia(e,n,l)}function Ia(e,n,{immediate:l,deep:t,flush:a,onTrack:r,onTrigger:c}=Ps){const i=Ys;let p,y=!1,u=!1;if(xs(e)?(p=()=>e.value,y=Fo(e)):Qn(e)?(p=()=>e,t=!0):ls(e)?(u=!0,y=e.some(v=>Qn(v)||Fo(v)),p=()=>e.map(v=>{if(xs(v))return v.value;if(Qn(v))return kn(v);if(is(v))return rn(v,i,2)})):is(e)?n?p=()=>rn(e,i,2):p=()=>{if(!(i&&i.isUnmounted))return A&&A(),Oe(e,i,3,[h])}:p=Se,n&&t){const v=p;p=()=>kn(v())}let A,h=v=>{A=b.onStop=()=>{rn(v,i,4)}},f;if(Wl)if(h=Se,n?l&&Oe(n,i,3,[p(),u?[]:void 0,h]):p(),a==="sync"){const v=h5();f=v.__watcherHandles||(v.__watcherHandles=[])}else return Se;let d=u?new Array(e.length).fill(yo):yo;const g=()=>{if(!!b.active)if(n){const v=b.run();(t||y||(u?v.some((w,R)=>Nl(w,d[R])):Nl(v,d)))&&(A&&A(),Oe(n,i,3,[v,d===yo?void 0:u&&d[0]===yo?[]:d,h]),d=v)}else b.run()};g.allowRecurse=!!n;let C;a==="sync"?C=g:a==="post"?C=()=>Zs(g,i&&i.suspense):(g.pre=!0,i&&(g.id=i.uid),C=()=>Ma(g));const b=new xa(p,C);n?l?g():d=b.run():a==="post"?Zs(b.run.bind(b),i&&i.suspense):b.run();const E=()=>{b.stop(),i&&i.scope&&Ea(i.scope.effects,b)};return f&&f.push(E),E}function bu(e,n,l){const t=this.proxy,a=Ns(e)?e.includes(".")?op(t,e):()=>t[e]:e.bind(t,t);let r;is(n)?r=n:(r=n.handler,l=n);const c=Ys;ol(this);const i=Ia(a,r.bind(t),l);return c?ol(c):Sn(),i}function op(e,n){const l=n.split(".");return()=>{let t=e;for(let a=0;a<l.length&&t;a++)t=t[l[a]];return t}}function kn(e,n){if(!js(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),xs(e))kn(e.value,n);else if(ls(e))for(let l=0;l<e.length;l++)kn(e[l],n);else if(Si(e)||Yn(e))e.forEach(l=>{kn(l,n)});else if($i(e))for(const l in e)kn(e[l],n);return e}function tp(e,n){e.shapeFlag&6&&e.component?tp(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Es(e){return is(e)?{setup:e,name:e.name}:e}const Xn=e=>!!e.type.__asyncLoader,ap=e=>e.type.__isKeepAlive,_u={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const l=Ln(),t=l.ctx;if(!t.renderer)return()=>{const E=n.default&&n.default();return E&&E.length===1?E[0]:E};const a=new Map,r=new Set;let c=null;const i=l.suspense,{renderer:{p,m:y,um:u,o:{createElement:A}}}=t,h=A("div");t.activate=(E,v,w,R,L)=>{const I=E.component;y(E,v,w,0,i),p(I.vnode,E,v,w,I,i,R,E.slotScopeIds,L),Zs(()=>{I.isDeactivated=!1,I.a&&Zn(I.a);const J=E.props&&E.props.onVnodeMounted;J&&Ce(J,I.parent,E)},i)},t.deactivate=E=>{const v=E.component;y(E,h,null,1,i),Zs(()=>{v.da&&Zn(v.da);const w=E.props&&E.props.onVnodeUnmounted;w&&Ce(w,v.parent,E),v.isDeactivated=!0},i)};function f(E){it(E),u(E,l,i,!0)}function d(E){a.forEach((v,w)=>{const R=Kt(v.type);R&&(!E||!E(R))&&g(w)})}function g(E){const v=a.get(E);!c||v.type!==c.type?f(v):c&&it(c),a.delete(E),r.delete(E)}As(()=>[e.include,e.exclude],([E,v])=>{E&&d(w=>_l(E,w)),v&&d(w=>!_l(v,w))},{flush:"post",deep:!0});let C=null;const b=()=>{C!=null&&a.set(C,pt(l.subTree))};return yl(b),Na(b),Jo(()=>{a.forEach(E=>{const{subTree:v,suspense:w}=l,R=pt(v);if(E.type===R.type){it(R);const L=R.component.da;L&&Zs(L,w);return}f(E)})}),()=>{if(C=null,!n.default)return null;const E=n.default(),v=E[0];if(E.length>1)return c=null,E;if(!ll(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return c=null,v;let w=pt(v);const R=w.type,L=Kt(Xn(w)?w.type.__asyncResolved||{}:R),{include:I,exclude:J,max:ts}=e;if(I&&(!L||!_l(I,L))||J&&L&&_l(J,L))return c=w,v;const us=w.key==null?R:w.key,Ds=a.get(us);return w.el&&(w=$n(w),v.shapeFlag&128&&(v.ssContent=w)),C=us,Ds?(w.el=Ds.el,w.component=Ds.component,w.transition&&tp(w,w.transition),w.shapeFlag|=512,r.delete(us),r.add(us)):(r.add(us),ts&&r.size>parseInt(ts,10)&&g(r.values().next().value)),w.shapeFlag|=256,c=w,lp(v.type)?v:w}}},rp=_u;function _l(e,n){return ls(e)?e.some(l=>_l(l,n)):Ns(e)?e.split(",").includes(n):e.test?e.test(n):!1}function Eu(e,n){cp(e,"a",n)}function ku(e,n){cp(e,"da",n)}function cp(e,n,l=Ys){const t=e.__wdc||(e.__wdc=()=>{let a=l;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qo(n,t,l),l){let a=l.parent;for(;a&&a.parent;)ap(a.parent.vnode)&&Fu(t,n,l,a),a=a.parent}}function Fu(e,n,l,t){const a=Qo(n,e,t,!0);Xo(()=>{Ea(t[n],a)},l)}function it(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function pt(e){return e.shapeFlag&128?e.ssContent:e}function Qo(e,n,l=Ys,t=!1){if(l){const a=l[e]||(l[e]=[]),r=n.__weh||(n.__weh=(...c)=>{if(l.isUnmounted)return;cl(),ol(l);const i=Oe(n,l,e,c);return Sn(),il(),i});return t?a.unshift(r):a.push(r),r}}const Je=e=>(n,l=Ys)=>(!Wl||e==="sp")&&Qo(e,(...t)=>n(...t),l),wu=Je("bm"),yl=Je("m"),xu=Je("bu"),Na=Je("u"),Jo=Je("bum"),Xo=Je("um"),Su=Je("sp"),Ou=Je("rtg"),Tu=Je("rtc");function $u(e,n=Ys){Qo("ec",e,n)}function Q(e,n){const l=Qs;if(l===null)return e;const t=nt(l)||l.proxy,a=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[c,i,p,y=Ps]=n[r];c&&(is(c)&&(c={mounted:c,updated:c}),c.deep&&kn(i),a.push({dir:c,instance:t,value:i,oldValue:void 0,arg:p,modifiers:y}))}return e}function dn(e,n,l,t){const a=e.dirs,r=n&&n.dirs;for(let c=0;c<a.length;c++){const i=a[c];r&&(i.oldValue=r[c].value);let p=i.dir[t];p&&(cl(),Oe(p,l,8,[e.el,i,e,n]),il())}}const ip="components",Pu="directives";function xo(e,n){return pp(ip,e,!0,n)||e}const Ru=Symbol();function vs(e){return pp(Pu,e)}function pp(e,n,l=!0,t=!1){const a=Qs||Ys;if(a){const r=a.type;if(e===ip){const i=Kt(r,!1);if(i&&(i===n||i===ze(n)||i===Wo(ze(n))))return r}const c=Sr(a[e]||r[e],n)||Sr(a.appContext[e],n);return!c&&t?r:c}}function Sr(e,n){return e&&(e[n]||e[ze(n)]||e[Wo(ze(n))])}function so(e,n,l,t){let a;const r=l&&l[t];if(ls(e)||Ns(e)){a=new Array(e.length);for(let c=0,i=e.length;c<i;c++)a[c]=n(e[c],c,void 0,r&&r[c])}else if(typeof e=="number"){a=new Array(e);for(let c=0;c<e;c++)a[c]=n(c+1,c,void 0,r&&r[c])}else if(js(e))if(e[Symbol.iterator])a=Array.from(e,(c,i)=>n(c,i,void 0,r&&r[i]));else{const c=Object.keys(e);a=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const y=c[i];a[i]=n(e[y],y,i,r&&r[i])}}else a=[];return l&&(l[t]=a),a}function $e(e,n,l={},t,a){if(Qs.isCE||Qs.parent&&Xn(Qs.parent)&&Qs.parent.isCE)return n!=="default"&&(l.name=n),M("slot",l,t&&t());let r=e[n];r&&r._c&&(r._d=!1),D();const c=r&&yp(r(l)),i=q(ws,{key:l.key||c&&c.key||`_${n}`},c||(t?t():[]),c&&e._===1?64:-2);return!a&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function yp(e){return e.some(n=>ll(n)?!(n.type===hn||n.type===ws&&!yp(n.children)):!0)?e:null}const Nt=e=>e?vp(e)?nt(e)||e.proxy:Nt(e.parent):null,kl=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Nt(e.parent),$root:e=>Nt(e.root),$emit:e=>e.emit,$options:e=>Ua(e),$forceUpdate:e=>e.f||(e.f=()=>Ma(e.update)),$nextTick:e=>e.n||(e.n=ee.bind(e.proxy)),$watch:e=>bu.bind(e)}),yt=(e,n)=>e!==Ps&&!e.__isScriptSetup&&gs(e,n),Lu={get({_:e},n){const{ctx:l,setupState:t,data:a,props:r,accessCache:c,type:i,appContext:p}=e;let y;if(n[0]!=="$"){const f=c[n];if(f!==void 0)switch(f){case 1:return t[n];case 2:return a[n];case 4:return l[n];case 3:return r[n]}else{if(yt(t,n))return c[n]=1,t[n];if(a!==Ps&&gs(a,n))return c[n]=2,a[n];if((y=e.propsOptions[0])&&gs(y,n))return c[n]=3,r[n];if(l!==Ps&&gs(l,n))return c[n]=4,l[n];Ut&&(c[n]=0)}}const u=kl[n];let A,h;if(u)return n==="$attrs"&&ge(e,"get",n),u(e);if((A=i.__cssModules)&&(A=A[n]))return A;if(l!==Ps&&gs(l,n))return c[n]=4,l[n];if(h=p.config.globalProperties,gs(h,n))return h[n]},set({_:e},n,l){const{data:t,setupState:a,ctx:r}=e;return yt(a,n)?(a[n]=l,!0):t!==Ps&&gs(t,n)?(t[n]=l,!0):gs(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=l,!0)},has({_:{data:e,setupState:n,accessCache:l,ctx:t,appContext:a,propsOptions:r}},c){let i;return!!l[c]||e!==Ps&&gs(e,c)||yt(n,c)||(i=r[0])&&gs(i,c)||gs(t,c)||gs(kl,c)||gs(a.config.globalProperties,c)},defineProperty(e,n,l){return l.get!=null?e._.accessCache[n]=0:gs(l,"value")&&this.set(e,n,l.value,null),Reflect.defineProperty(e,n,l)}};let Ut=!0;function ju(e){const n=Ua(e),l=e.proxy,t=e.ctx;Ut=!1,n.beforeCreate&&Or(n.beforeCreate,e,"bc");const{data:a,computed:r,methods:c,watch:i,provide:p,inject:y,created:u,beforeMount:A,mounted:h,beforeUpdate:f,updated:d,activated:g,deactivated:C,beforeDestroy:b,beforeUnmount:E,destroyed:v,unmounted:w,render:R,renderTracked:L,renderTriggered:I,errorCaptured:J,serverPrefetch:ts,expose:us,inheritAttrs:Ds,components:Gs,directives:Ws,filters:Is}=n;if(y&&Mu(y,t,null,e.appContext.config.unwrapInjectedRef),c)for(const Y in c){const ns=c[Y];is(ns)&&(t[Y]=ns.bind(l))}if(a){const Y=a.call(l,l);js(Y)&&(e.data=Rs(Y))}if(Ut=!0,r)for(const Y in r){const ns=r[Y],ds=is(ns)?ns.bind(l,l):is(ns.get)?ns.get.bind(l,l):Se,ks=!is(ns)&&is(ns.set)?ns.set.bind(l):Se,te=S({get:ds,set:ks});Object.defineProperty(t,Y,{enumerable:!0,configurable:!0,get:()=>te.value,set:Hs=>te.value=Hs})}if(i)for(const Y in i)up(i[Y],t,l,Y);if(p){const Y=is(p)?p.call(l):p;Reflect.ownKeys(Y).forEach(ns=>{fe(ns,Y[ns])})}u&&Or(u,e,"c");function $s(Y,ns){ls(ns)?ns.forEach(ds=>Y(ds.bind(l))):ns&&Y(ns.bind(l))}if($s(wu,A),$s(yl,h),$s(xu,f),$s(Na,d),$s(Eu,g),$s(ku,C),$s($u,J),$s(Tu,L),$s(Ou,I),$s(Jo,E),$s(Xo,w),$s(Su,ts),ls(us))if(us.length){const Y=e.exposed||(e.exposed={});us.forEach(ns=>{Object.defineProperty(Y,ns,{get:()=>l[ns],set:ds=>l[ns]=ds})})}else e.exposed||(e.exposed={});R&&e.render===Se&&(e.render=R),Ds!=null&&(e.inheritAttrs=Ds),Gs&&(e.components=Gs),Ws&&(e.directives=Ws)}function Mu(e,n,l=Se,t=!1){ls(e)&&(e=Ht(e));for(const a in e){const r=e[a];let c;js(r)?"default"in r?c=U(r.from||a,r.default,!0):c=U(r.from||a):c=U(r),xs(c)&&t?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>c.value,set:i=>c.value=i}):n[a]=c}}function Or(e,n,l){Oe(ls(e)?e.map(t=>t.bind(n.proxy)):e.bind(n.proxy),n,l)}function up(e,n,l,t){const a=t.includes(".")?op(l,t):()=>l[t];if(Ns(e)){const r=n[e];is(r)&&As(a,r)}else if(is(e))As(a,e.bind(l));else if(js(e))if(ls(e))e.forEach(r=>up(r,n,l,t));else{const r=is(e.handler)?e.handler.bind(l):n[e.handler];is(r)&&As(a,r,e)}}function Ua(e){const n=e.type,{mixins:l,extends:t}=n,{mixins:a,optionsCache:r,config:{optionMergeStrategies:c}}=e.appContext,i=r.get(n);let p;return i?p=i:!a.length&&!l&&!t?p=n:(p={},a.length&&a.forEach(y=>So(p,y,c,!0)),So(p,n,c)),js(n)&&r.set(n,p),p}function So(e,n,l,t=!1){const{mixins:a,extends:r}=n;r&&So(e,r,l,!0),a&&a.forEach(c=>So(e,c,l,!0));for(const c in n)if(!(t&&c==="expose")){const i=Iu[c]||l&&l[c];e[c]=i?i(e[c],n[c]):n[c]}return e}const Iu={data:Tr,props:Dn,emits:Dn,methods:Dn,computed:Dn,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:Dn,directives:Dn,watch:Uu,provide:Tr,inject:Nu};function Tr(e,n){return n?e?function(){return ie(is(e)?e.call(this,this):e,is(n)?n.call(this,this):n)}:n:e}function Nu(e,n){return Dn(Ht(e),Ht(n))}function Ht(e){if(ls(e)){const n={};for(let l=0;l<e.length;l++)n[e[l]]=e[l];return n}return e}function ae(e,n){return e?[...new Set([].concat(e,n))]:n}function Dn(e,n){return e?ie(ie(Object.create(null),e),n):n}function Uu(e,n){if(!e)return n;if(!n)return e;const l=ie(Object.create(null),e);for(const t in n)l[t]=ae(e[t],n[t]);return l}function Hu(e,n,l,t=!1){const a={},r={};Eo(r,et,1),e.propsDefaults=Object.create(null),Ap(e,n,a,r);for(const c in e.propsOptions[0])c in a||(a[c]=void 0);l?e.props=t?a:lu(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function zu(e,n,l,t){const{props:a,attrs:r,vnode:{patchFlag:c}}=e,i=_s(a),[p]=e.propsOptions;let y=!1;if((t||c>0)&&!(c&16)){if(c&8){const u=e.vnode.dynamicProps;for(let A=0;A<u.length;A++){let h=u[A];if(Yo(e.emitsOptions,h))continue;const f=n[h];if(p)if(gs(r,h))f!==r[h]&&(r[h]=f,y=!0);else{const d=ze(h);a[d]=zt(p,i,d,f,e,!1)}else f!==r[h]&&(r[h]=f,y=!0)}}}else{Ap(e,n,a,r)&&(y=!0);let u;for(const A in i)(!n||!gs(n,A)&&((u=Rn(A))===A||!gs(n,u)))&&(p?l&&(l[A]!==void 0||l[u]!==void 0)&&(a[A]=zt(p,i,A,void 0,e,!0)):delete a[A]);if(r!==i)for(const A in r)(!n||!gs(n,A)&&!0)&&(delete r[A],y=!0)}y&&Qe(e,"set","$attrs")}function Ap(e,n,l,t){const[a,r]=e.propsOptions;let c=!1,i;if(n)for(let p in n){if(mo(p))continue;const y=n[p];let u;a&&gs(a,u=ze(p))?!r||!r.includes(u)?l[u]=y:(i||(i={}))[u]=y:Yo(e.emitsOptions,p)||(!(p in t)||y!==t[p])&&(t[p]=y,c=!0)}if(r){const p=_s(l),y=i||Ps;for(let u=0;u<r.length;u++){const A=r[u];l[A]=zt(a,p,A,y[A],e,!gs(y,A))}}return c}function zt(e,n,l,t,a,r){const c=e[l];if(c!=null){const i=gs(c,"default");if(i&&t===void 0){const p=c.default;if(c.type!==Function&&is(p)){const{propsDefaults:y}=a;l in y?t=y[l]:(ol(a),t=y[l]=p.call(null,n),Sn())}else t=p}c[0]&&(r&&!i?t=!1:c[1]&&(t===""||t===Rn(l))&&(t=!0))}return t}function hp(e,n,l=!1){const t=n.propsCache,a=t.get(e);if(a)return a;const r=e.props,c={},i=[];let p=!1;if(!is(e)){const u=A=>{p=!0;const[h,f]=hp(A,n,!0);ie(c,h),f&&i.push(...f)};!l&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!p)return js(e)&&t.set(e,Gn),Gn;if(ls(r))for(let u=0;u<r.length;u++){const A=ze(r[u]);$r(A)&&(c[A]=Ps)}else if(r)for(const u in r){const A=ze(u);if($r(A)){const h=r[u],f=c[A]=ls(h)||is(h)?{type:h}:Object.assign({},h);if(f){const d=Lr(Boolean,f.type),g=Lr(String,f.type);f[0]=d>-1,f[1]=g<0||d<g,(d>-1||gs(f,"default"))&&i.push(A)}}}const y=[c,i];return js(e)&&t.set(e,y),y}function $r(e){return e[0]!=="$"}function Pr(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Rr(e,n){return Pr(e)===Pr(n)}function Lr(e,n){return ls(n)?n.findIndex(l=>Rr(l,e)):is(n)&&Rr(n,e)?0:-1}const dp=e=>e[0]==="_"||e==="$stable",Ha=e=>ls(e)?e.map(Me):[Me(e)],Vu=(e,n,l)=>{if(n._n)return n;const t=T((...a)=>Ha(n(...a)),l);return t._c=!1,t},fp=(e,n,l)=>{const t=e._ctx;for(const a in e){if(dp(a))continue;const r=e[a];if(is(r))n[a]=Vu(a,r,t);else if(r!=null){const c=Ha(r);n[a]=()=>c}}},Bp=(e,n)=>{const l=Ha(n);e.slots.default=()=>l},Wu=(e,n)=>{if(e.vnode.shapeFlag&32){const l=n._;l?(e.slots=_s(n),Eo(n,"_",l)):fp(n,e.slots={})}else e.slots={},n&&Bp(e,n);Eo(e.slots,et,1)},Ku=(e,n,l)=>{const{vnode:t,slots:a}=e;let r=!0,c=Ps;if(t.shapeFlag&32){const i=n._;i?l&&i===1?r=!1:(ie(a,n),!l&&i===1&&delete a._):(r=!n.$stable,fp(n,a)),c=n}else n&&(Bp(e,n),c={default:1});if(r)for(const i in a)!dp(i)&&!(i in c)&&delete a[i]};function mp(){return{app:null,config:{isNativeTag:b8,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qu=0;function Gu(e,n){return function(t,a=null){is(t)||(t=Object.assign({},t)),a!=null&&!js(a)&&(a=null);const r=mp(),c=new Set;let i=!1;const p=r.app={_uid:qu++,_component:t,_props:a,_container:null,_context:r,_instance:null,version:d5,get config(){return r.config},set config(y){},use(y,...u){return c.has(y)||(y&&is(y.install)?(c.add(y),y.install(p,...u)):is(y)&&(c.add(y),y(p,...u))),p},mixin(y){return r.mixins.includes(y)||r.mixins.push(y),p},component(y,u){return u?(r.components[y]=u,p):r.components[y]},directive(y,u){return u?(r.directives[y]=u,p):r.directives[y]},mount(y,u,A){if(!i){const h=M(t,a);return h.appContext=r,u&&n?n(h,y):e(h,y,A),i=!0,p._container=y,y.__vue_app__=p,nt(h.component)||h.component.proxy}},unmount(){i&&(e(null,p._container),delete p._container.__vue_app__)},provide(y,u){return r.provides[y]=u,p}};return p}}function Vt(e,n,l,t,a=!1){if(ls(e)){e.forEach((h,f)=>Vt(h,n&&(ls(n)?n[f]:n),l,t,a));return}if(Xn(t)&&!a)return;const r=t.shapeFlag&4?nt(t.component)||t.component.proxy:t.el,c=a?null:r,{i,r:p}=e,y=n&&n.r,u=i.refs===Ps?i.refs={}:i.refs,A=i.setupState;if(y!=null&&y!==p&&(Ns(y)?(u[y]=null,gs(A,y)&&(A[y]=null)):xs(y)&&(y.value=null)),is(p))rn(p,i,12,[c,u]);else{const h=Ns(p),f=xs(p);if(h||f){const d=()=>{if(e.f){const g=h?gs(A,p)?A[p]:u[p]:p.value;a?ls(g)&&Ea(g,r):ls(g)?g.includes(r)||g.push(r):h?(u[p]=[r],gs(A,p)&&(A[p]=u[p])):(p.value=[r],e.k&&(u[e.k]=p.value))}else h?(u[p]=c,gs(A,p)&&(A[p]=c)):f&&(p.value=c,e.k&&(u[e.k]=c))};c?(d.id=-1,Zs(d,l)):d()}}}const Zs=vu;function Yu(e){return Zu(e)}function Zu(e,n){const l=x8();l.__VUE__=!0;const{insert:t,remove:a,patchProp:r,createElement:c,createText:i,createComment:p,setText:y,setElementText:u,parentNode:A,nextSibling:h,setScopeId:f=Se,insertStaticContent:d}=e,g=(B,m,k,x=null,$=null,N=null,K=!1,j=null,H=!!m.dynamicChildren)=>{if(B===m)return;B&&!dl(B,m)&&(x=z(B),Hs(B,$,N,!0),B=null),m.patchFlag===-2&&(H=!1,m.dynamicChildren=null);const{type:P,ref:ss,shapeFlag:Z}=m;switch(P){case st:C(B,m,k,x);break;case hn:b(B,m,k,x);break;case ut:B==null&&E(m,k,x,K);break;case ws:Gs(B,m,k,x,$,N,K,j,H);break;default:Z&1?R(B,m,k,x,$,N,K,j,H):Z&6?Ws(B,m,k,x,$,N,K,j,H):(Z&64||Z&128)&&P.process(B,m,k,x,$,N,K,j,H,fs)}ss!=null&&$&&Vt(ss,B&&B.ref,N,m||B,!m)},C=(B,m,k,x)=>{if(B==null)t(m.el=i(m.children),k,x);else{const $=m.el=B.el;m.children!==B.children&&y($,m.children)}},b=(B,m,k,x)=>{B==null?t(m.el=p(m.children||""),k,x):m.el=B.el},E=(B,m,k,x)=>{[B.el,B.anchor]=d(B.children,m,k,x,B.el,B.anchor)},v=({el:B,anchor:m},k,x)=>{let $;for(;B&&B!==m;)$=h(B),t(B,k,x),B=$;t(m,k,x)},w=({el:B,anchor:m})=>{let k;for(;B&&B!==m;)k=h(B),a(B),B=k;a(m)},R=(B,m,k,x,$,N,K,j,H)=>{K=K||m.type==="svg",B==null?L(m,k,x,$,N,K,j,H):ts(B,m,$,N,K,j,H)},L=(B,m,k,x,$,N,K,j)=>{let H,P;const{type:ss,props:Z,shapeFlag:es,transition:os,dirs:Bs}=B;if(H=B.el=c(B.type,N,Z&&Z.is,Z),es&8?u(H,B.children):es&16&&J(B.children,H,null,x,$,N&&ss!=="foreignObject",K,j),Bs&&dn(B,null,x,"created"),Z){for(const Ss in Z)Ss!=="value"&&!mo(Ss)&&r(H,Ss,null,Z[Ss],N,B.children,x,$,W);"value"in Z&&r(H,"value",null,Z.value),(P=Z.onVnodeBeforeMount)&&Ce(P,x,B)}I(H,B,B.scopeId,K,x),Bs&&dn(B,null,x,"beforeMount");const Os=(!$||$&&!$.pendingBranch)&&os&&!os.persisted;Os&&os.beforeEnter(H),t(H,m,k),((P=Z&&Z.onVnodeMounted)||Os||Bs)&&Zs(()=>{P&&Ce(P,x,B),Os&&os.enter(H),Bs&&dn(B,null,x,"mounted")},$)},I=(B,m,k,x,$)=>{if(k&&f(B,k),x)for(let N=0;N<x.length;N++)f(B,x[N]);if($){let N=$.subTree;if(m===N){const K=$.vnode;I(B,K,K.scopeId,K.slotScopeIds,$.parent)}}},J=(B,m,k,x,$,N,K,j,H=0)=>{for(let P=H;P<B.length;P++){const ss=B[P]=j?ln(B[P]):Me(B[P]);g(null,ss,m,k,x,$,N,K,j)}},ts=(B,m,k,x,$,N,K)=>{const j=m.el=B.el;let{patchFlag:H,dynamicChildren:P,dirs:ss}=m;H|=B.patchFlag&16;const Z=B.props||Ps,es=m.props||Ps;let os;k&&fn(k,!1),(os=es.onVnodeBeforeUpdate)&&Ce(os,k,m,B),ss&&dn(m,B,k,"beforeUpdate"),k&&fn(k,!0);const Bs=$&&m.type!=="foreignObject";if(P?us(B.dynamicChildren,P,j,k,x,Bs,N):K||ns(B,m,j,null,k,x,Bs,N,!1),H>0){if(H&16)Ds(j,m,Z,es,k,x,$);else if(H&2&&Z.class!==es.class&&r(j,"class",null,es.class,$),H&4&&r(j,"style",Z.style,es.style,$),H&8){const Os=m.dynamicProps;for(let Ss=0;Ss<Os.length;Ss++){const zs=Os[Ss],_e=Z[zs],Nn=es[zs];(Nn!==_e||zs==="value")&&r(j,zs,_e,Nn,$,B.children,k,x,W)}}H&1&&B.children!==m.children&&u(j,m.children)}else!K&&P==null&&Ds(j,m,Z,es,k,x,$);((os=es.onVnodeUpdated)||ss)&&Zs(()=>{os&&Ce(os,k,m,B),ss&&dn(m,B,k,"updated")},x)},us=(B,m,k,x,$,N,K)=>{for(let j=0;j<m.length;j++){const H=B[j],P=m[j],ss=H.el&&(H.type===ws||!dl(H,P)||H.shapeFlag&70)?A(H.el):k;g(H,P,ss,null,x,$,N,K,!0)}},Ds=(B,m,k,x,$,N,K)=>{if(k!==x){if(k!==Ps)for(const j in k)!mo(j)&&!(j in x)&&r(B,j,k[j],null,K,m.children,$,N,W);for(const j in x){if(mo(j))continue;const H=x[j],P=k[j];H!==P&&j!=="value"&&r(B,j,P,H,K,m.children,$,N,W)}"value"in x&&r(B,"value",k.value,x.value)}},Gs=(B,m,k,x,$,N,K,j,H)=>{const P=m.el=B?B.el:i(""),ss=m.anchor=B?B.anchor:i("");let{patchFlag:Z,dynamicChildren:es,slotScopeIds:os}=m;os&&(j=j?j.concat(os):os),B==null?(t(P,k,x),t(ss,k,x),J(m.children,k,ss,$,N,K,j,H)):Z>0&&Z&64&&es&&B.dynamicChildren?(us(B.dynamicChildren,es,k,$,N,K,j),(m.key!=null||$&&m===$.subTree)&&za(B,m,!0)):ns(B,m,k,ss,$,N,K,j,H)},Ws=(B,m,k,x,$,N,K,j,H)=>{m.slotScopeIds=j,B==null?m.shapeFlag&512?$.ctx.activate(m,k,x,K,H):Is(m,k,x,$,N,K,H):Ts(B,m,H)},Is=(B,m,k,x,$,N,K)=>{const j=B.component=a5(B,x,$);if(ap(B)&&(j.ctx.renderer=fs),r5(j),j.asyncDep){if($&&$.registerDep(j,$s),!B.el){const H=j.subTree=M(hn);b(null,H,m,k)}return}$s(j,B,m,k,$,N,K)},Ts=(B,m,k)=>{const x=m.component=B.component;if(gu(B,m,k))if(x.asyncDep&&!x.asyncResolved){Y(x,m,k);return}else x.next=m,hu(x.update),x.update();else m.el=B.el,x.vnode=m},$s=(B,m,k,x,$,N,K)=>{const j=()=>{if(B.isMounted){let{next:ss,bu:Z,u:es,parent:os,vnode:Bs}=B,Os=ss,Ss;fn(B,!1),ss?(ss.el=Bs.el,Y(B,ss,K)):ss=Bs,Z&&Zn(Z),(Ss=ss.props&&ss.props.onVnodeBeforeUpdate)&&Ce(Ss,os,ss,Bs),fn(B,!0);const zs=ct(B),_e=B.subTree;B.subTree=zs,g(_e,zs,A(_e.el),z(_e),B,$,N),ss.el=zs.el,Os===null&&Cu(B,zs.el),es&&Zs(es,$),(Ss=ss.props&&ss.props.onVnodeUpdated)&&Zs(()=>Ce(Ss,os,ss,Bs),$)}else{let ss;const{el:Z,props:es}=m,{bm:os,m:Bs,parent:Os}=B,Ss=Xn(m);if(fn(B,!1),os&&Zn(os),!Ss&&(ss=es&&es.onVnodeBeforeMount)&&Ce(ss,Os,m),fn(B,!0),Z&&as){const zs=()=>{B.subTree=ct(B),as(Z,B.subTree,B,$,null)};Ss?m.type.__asyncLoader().then(()=>!B.isUnmounted&&zs()):zs()}else{const zs=B.subTree=ct(B);g(null,zs,k,x,B,$,N),m.el=zs.el}if(Bs&&Zs(Bs,$),!Ss&&(ss=es&&es.onVnodeMounted)){const zs=m;Zs(()=>Ce(ss,Os,zs),$)}(m.shapeFlag&256||Os&&Xn(Os.vnode)&&Os.vnode.shapeFlag&256)&&B.a&&Zs(B.a,$),B.isMounted=!0,m=k=x=null}},H=B.effect=new xa(j,()=>Ma(P),B.scope),P=B.update=()=>H.run();P.id=B.uid,fn(B,!0),P()},Y=(B,m,k)=>{m.component=B;const x=B.vnode.props;B.vnode=m,B.next=null,zu(B,m.props,x,k),Ku(B,m.children,k),cl(),wr(),il()},ns=(B,m,k,x,$,N,K,j,H=!1)=>{const P=B&&B.children,ss=B?B.shapeFlag:0,Z=m.children,{patchFlag:es,shapeFlag:os}=m;if(es>0){if(es&128){ks(P,Z,k,x,$,N,K,j,H);return}else if(es&256){ds(P,Z,k,x,$,N,K,j,H);return}}os&8?(ss&16&&W(P,$,N),Z!==P&&u(k,Z)):ss&16?os&16?ks(P,Z,k,x,$,N,K,j,H):W(P,$,N,!0):(ss&8&&u(k,""),os&16&&J(Z,k,x,$,N,K,j,H))},ds=(B,m,k,x,$,N,K,j,H)=>{B=B||Gn,m=m||Gn;const P=B.length,ss=m.length,Z=Math.min(P,ss);let es;for(es=0;es<Z;es++){const os=m[es]=H?ln(m[es]):Me(m[es]);g(B[es],os,k,null,$,N,K,j,H)}P>ss?W(B,$,N,!0,!1,Z):J(m,k,x,$,N,K,j,H,Z)},ks=(B,m,k,x,$,N,K,j,H)=>{let P=0;const ss=m.length;let Z=B.length-1,es=ss-1;for(;P<=Z&&P<=es;){const os=B[P],Bs=m[P]=H?ln(m[P]):Me(m[P]);if(dl(os,Bs))g(os,Bs,k,null,$,N,K,j,H);else break;P++}for(;P<=Z&&P<=es;){const os=B[Z],Bs=m[es]=H?ln(m[es]):Me(m[es]);if(dl(os,Bs))g(os,Bs,k,null,$,N,K,j,H);else break;Z--,es--}if(P>Z){if(P<=es){const os=es+1,Bs=os<ss?m[os].el:x;for(;P<=es;)g(null,m[P]=H?ln(m[P]):Me(m[P]),k,Bs,$,N,K,j,H),P++}}else if(P>es)for(;P<=Z;)Hs(B[P],$,N,!0),P++;else{const os=P,Bs=P,Os=new Map;for(P=Bs;P<=es;P++){const ye=m[P]=H?ln(m[P]):Me(m[P]);ye.key!=null&&Os.set(ye.key,P)}let Ss,zs=0;const _e=es-Bs+1;let Nn=!1,Br=0;const hl=new Array(_e);for(P=0;P<_e;P++)hl[P]=0;for(P=os;P<=Z;P++){const ye=B[P];if(zs>=_e){Hs(ye,$,N,!0);continue}let je;if(ye.key!=null)je=Os.get(ye.key);else for(Ss=Bs;Ss<=es;Ss++)if(hl[Ss-Bs]===0&&dl(ye,m[Ss])){je=Ss;break}je===void 0?Hs(ye,$,N,!0):(hl[je-Bs]=P+1,je>=Br?Br=je:Nn=!0,g(ye,m[je],k,null,$,N,K,j,H),zs++)}const mr=Nn?Qu(hl):Gn;for(Ss=mr.length-1,P=_e-1;P>=0;P--){const ye=Bs+P,je=m[ye],Dr=ye+1<ss?m[ye+1].el:x;hl[P]===0?g(null,je,k,Dr,$,N,K,j,H):Nn&&(Ss<0||P!==mr[Ss]?te(je,k,Dr,2):Ss--)}}},te=(B,m,k,x,$=null)=>{const{el:N,type:K,transition:j,children:H,shapeFlag:P}=B;if(P&6){te(B.component.subTree,m,k,x);return}if(P&128){B.suspense.move(m,k,x);return}if(P&64){K.move(B,m,k,fs);return}if(K===ws){t(N,m,k);for(let Z=0;Z<H.length;Z++)te(H[Z],m,k,x);t(B.anchor,m,k);return}if(K===ut){v(B,m,k);return}if(x!==2&&P&1&&j)if(x===0)j.beforeEnter(N),t(N,m,k),Zs(()=>j.enter(N),$);else{const{leave:Z,delayLeave:es,afterLeave:os}=j,Bs=()=>t(N,m,k),Os=()=>{Z(N,()=>{Bs(),os&&os()})};es?es(N,Bs,Os):Os()}else t(N,m,k)},Hs=(B,m,k,x=!1,$=!1)=>{const{type:N,props:K,ref:j,children:H,dynamicChildren:P,shapeFlag:ss,patchFlag:Z,dirs:es}=B;if(j!=null&&Vt(j,null,k,B,!0),ss&256){m.ctx.deactivate(B);return}const os=ss&1&&es,Bs=!Xn(B);let Os;if(Bs&&(Os=K&&K.onVnodeBeforeUnmount)&&Ce(Os,m,B),ss&6)O(B.component,k,x);else{if(ss&128){B.suspense.unmount(k,x);return}os&&dn(B,null,m,"beforeUnmount"),ss&64?B.type.remove(B,m,k,$,fs,x):P&&(N!==ws||Z>0&&Z&64)?W(P,m,k,!1,!0):(N===ws&&Z&384||!$&&ss&16)&&W(H,m,k),x&&sn(B)}(Bs&&(Os=K&&K.onVnodeUnmounted)||os)&&Zs(()=>{Os&&Ce(Os,m,B),os&&dn(B,null,m,"unmounted")},k)},sn=B=>{const{type:m,el:k,anchor:x,transition:$}=B;if(m===ws){In(k,x);return}if(m===ut){w(B);return}const N=()=>{a(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(B.shapeFlag&1&&$&&!$.persisted){const{leave:K,delayLeave:j}=$,H=()=>K(k,N);j?j(B.el,N,H):H()}else N()},In=(B,m)=>{let k;for(;B!==m;)k=h(B),a(B),B=k;a(m)},O=(B,m,k)=>{const{bum:x,scope:$,update:N,subTree:K,um:j}=B;x&&Zn(x),$.stop(),N&&(N.active=!1,Hs(K,B,m,k)),j&&Zs(j,m),Zs(()=>{B.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&B.asyncDep&&!B.asyncResolved&&B.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},W=(B,m,k,x=!1,$=!1,N=0)=>{for(let K=N;K<B.length;K++)Hs(B[K],m,k,x,$)},z=B=>B.shapeFlag&6?z(B.component.subTree):B.shapeFlag&128?B.suspense.next():h(B.anchor||B.el),X=(B,m,k)=>{B==null?m._vnode&&Hs(m._vnode,null,null,!0):g(m._vnode||null,B,m,null,null,null,k),wr(),sp(),m._vnode=B},fs={p:g,um:Hs,m:te,r:sn,mt:Is,mc:J,pc:ns,pbc:us,n:z,o:e};let Cs,as;return n&&([Cs,as]=n(fs)),{render:X,hydrate:Cs,createApp:Gu(X,Cs)}}function fn({effect:e,update:n},l){e.allowRecurse=n.allowRecurse=l}function za(e,n,l=!1){const t=e.children,a=n.children;if(ls(t)&&ls(a))for(let r=0;r<t.length;r++){const c=t[r];let i=a[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[r]=ln(a[r]),i.el=c.el),l||za(c,i)),i.type===st&&(i.el=c.el)}}function Qu(e){const n=e.slice(),l=[0];let t,a,r,c,i;const p=e.length;for(t=0;t<p;t++){const y=e[t];if(y!==0){if(a=l[l.length-1],e[a]<y){n[t]=a,l.push(t);continue}for(r=0,c=l.length-1;r<c;)i=r+c>>1,e[l[i]]<y?r=i+1:c=i;y<e[l[r]]&&(r>0&&(n[t]=l[r-1]),l[r]=t)}}for(r=l.length,c=l[r-1];r-- >0;)l[r]=c,c=n[c];return l}const Ju=e=>e.__isTeleport,Fl=e=>e&&(e.disabled||e.disabled===""),jr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Wt=(e,n)=>{const l=e&&e.to;return Ns(l)?n?n(l):null:l},Xu={__isTeleport:!0,process(e,n,l,t,a,r,c,i,p,y){const{mc:u,pc:A,pbc:h,o:{insert:f,querySelector:d,createText:g,createComment:C}}=y,b=Fl(n.props);let{shapeFlag:E,children:v,dynamicChildren:w}=n;if(e==null){const R=n.el=g(""),L=n.anchor=g("");f(R,l,t),f(L,l,t);const I=n.target=Wt(n.props,d),J=n.targetAnchor=g("");I&&(f(J,I),c=c||jr(I));const ts=(us,Ds)=>{E&16&&u(v,us,Ds,a,r,c,i,p)};b?ts(l,L):I&&ts(I,J)}else{n.el=e.el;const R=n.anchor=e.anchor,L=n.target=e.target,I=n.targetAnchor=e.targetAnchor,J=Fl(e.props),ts=J?l:L,us=J?R:I;if(c=c||jr(L),w?(h(e.dynamicChildren,w,ts,a,r,c,i),za(e,n,!0)):p||A(e,n,ts,us,a,r,c,i,!1),b)J||uo(n,l,R,y,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Ds=n.target=Wt(n.props,d);Ds&&uo(n,Ds,null,y,0)}else J&&uo(n,L,I,y,1)}Dp(n)},remove(e,n,l,t,{um:a,o:{remove:r}},c){const{shapeFlag:i,children:p,anchor:y,targetAnchor:u,target:A,props:h}=e;if(A&&r(u),(c||!Fl(h))&&(r(y),i&16))for(let f=0;f<p.length;f++){const d=p[f];a(d,n,l,!0,!!d.dynamicChildren)}},move:uo,hydrate:s5};function uo(e,n,l,{o:{insert:t},m:a},r=2){r===0&&t(e.targetAnchor,n,l);const{el:c,anchor:i,shapeFlag:p,children:y,props:u}=e,A=r===2;if(A&&t(c,n,l),(!A||Fl(u))&&p&16)for(let h=0;h<y.length;h++)a(y[h],n,l,2);A&&t(i,n,l)}function s5(e,n,l,t,a,r,{o:{nextSibling:c,parentNode:i,querySelector:p}},y){const u=n.target=Wt(n.props,p);if(u){const A=u._lpa||u.firstChild;if(n.shapeFlag&16)if(Fl(n.props))n.anchor=y(c(e),n,i(e),l,t,a,r),n.targetAnchor=A;else{n.anchor=c(e);let h=A;for(;h;)if(h=c(h),h&&h.nodeType===8&&h.data==="teleport anchor"){n.targetAnchor=h,u._lpa=n.targetAnchor&&c(n.targetAnchor);break}y(A,n,u,l,t,a,r)}Dp(n)}return n.anchor&&c(n.anchor)}const e5=Xu;function Dp(e){const n=e.ctx;if(n&&n.ut){let l=e.children[0].el;for(;l!==e.targetAnchor;)l.nodeType===1&&l.setAttribute("data-v-owner",n.uid),l=l.nextSibling;n.ut()}}const ws=Symbol(void 0),st=Symbol(void 0),hn=Symbol(void 0),ut=Symbol(void 0),wl=[];let we=null;function D(e=!1){wl.push(we=e?null:[])}function n5(){wl.pop(),we=wl[wl.length-1]||null}let Vl=1;function Mr(e){Vl+=e}function gp(e){return e.dynamicChildren=Vl>0?we||Gn:null,n5(),Vl>0&&we&&we.push(e),e}function F(e,n,l,t,a,r){return gp(s(e,n,l,t,a,r,!0))}function q(e,n,l,t,a){return gp(M(e,n,l,t,a,!0))}function ll(e){return e?e.__v_isVNode===!0:!1}function dl(e,n){return e.type===n.type&&e.key===n.key}const et="__vInternal",Cp=({key:e})=>e!=null?e:null,Do=({ref:e,ref_key:n,ref_for:l})=>e!=null?Ns(e)||xs(e)||is(e)?{i:Qs,r:e,k:n,f:!!l}:e:null;function s(e,n=null,l=null,t=0,a=null,r=e===ws?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Cp(n),ref:n&&Do(n),scopeId:Zo,slotScopeIds:null,children:l,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:t,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Qs};return i?(Va(p,l),r&128&&e.normalize(p)):l&&(p.shapeFlag|=Ns(l)?8:16),Vl>0&&!c&&we&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&we.push(p),p}const M=l5;function l5(e,n=null,l=null,t=0,a=null,r=!1){if((!e||e===Ru)&&(e=hn),ll(e)){const i=$n(e,n,!0);return l&&Va(i,l),Vl>0&&!r&&we&&(i.shapeFlag&6?we[we.indexOf(e)]=i:we.push(i)),i.patchFlag|=-2,i}if(p5(e)&&(e=e.__vccOpts),n){n=rs(n);let{class:i,style:p}=n;i&&!Ns(i)&&(n.class=Ls(i)),js(p)&&(qi(p)&&!ls(p)&&(p=ie({},p)),n.style=le(p))}const c=Ns(e)?1:lp(e)?128:Ju(e)?64:js(e)?4:is(e)?2:0;return s(e,n,l,t,a,c,r,!0)}function rs(e){return e?qi(e)||et in e?ie({},e):e:null}function $n(e,n,l=!1){const{props:t,ref:a,patchFlag:r,children:c}=e,i=n?hs(t||{},n):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Cp(i),ref:n&&n.ref?l&&a?ls(a)?a.concat(Do(n)):[a,Do(n)]:Do(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ws?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$n(e.ssContent),ssFallback:e.ssFallback&&$n(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function o(e=" ",n=0){return M(st,null,e,n)}function ms(e="",n=!1){return n?(D(),q(hn,null,e)):M(hn,null,e)}function Me(e){return e==null||typeof e=="boolean"?M(hn):ls(e)?M(ws,null,e.slice()):typeof e=="object"?ln(e):M(st,null,String(e))}function ln(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$n(e)}function Va(e,n){let l=0;const{shapeFlag:t}=e;if(n==null)n=null;else if(ls(n))l=16;else if(typeof n=="object")if(t&65){const a=n.default;a&&(a._c&&(a._d=!1),Va(e,a()),a._c&&(a._d=!0));return}else{l=32;const a=n._;!a&&!(et in n)?n._ctx=Qs:a===3&&Qs&&(Qs.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else is(n)?(n={default:n,_ctx:Qs},l=32):(n=String(n),t&64?(l=16,n=[o(n)]):l=8);e.children=n,e.shapeFlag|=l}function hs(...e){const n={};for(let l=0;l<e.length;l++){const t=e[l];for(const a in t)if(a==="class")n.class!==t.class&&(n.class=Ls([n.class,t.class]));else if(a==="style")n.style=le([n.style,t.style]);else if(Ho(a)){const r=n[a],c=t[a];c&&r!==c&&!(ls(r)&&r.includes(c))&&(n[a]=r?[].concat(r,c):c)}else a!==""&&(n[a]=t[a])}return n}function Ce(e,n,l,t=null){Oe(e,n,7,[l,t])}const o5=mp();let t5=0;function a5(e,n,l){const t=e.type,a=(n?n.appContext:e.appContext)||o5,r={uid:t5++,vnode:e,type:t,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hp(t,a),emitsOptions:np(t,a),emit:null,emitted:null,propsDefaults:Ps,inheritAttrs:t.inheritAttrs,ctx:Ps,data:Ps,props:Ps,attrs:Ps,slots:Ps,refs:Ps,setupState:Ps,setupContext:null,suspense:l,suspenseId:l?l.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Bu.bind(null,r),e.ce&&e.ce(r),r}let Ys=null;const Ln=()=>Ys||Qs,ol=e=>{Ys=e,e.scope.on()},Sn=()=>{Ys&&Ys.scope.off(),Ys=null};function vp(e){return e.vnode.shapeFlag&4}let Wl=!1;function r5(e,n=!1){Wl=n;const{props:l,children:t}=e.vnode,a=vp(e);Hu(e,l,a,n),Wu(e,t);const r=a?c5(e,n):void 0;return Wl=!1,r}function c5(e,n){const l=e.type;e.accessCache=Object.create(null),e.proxy=qo(new Proxy(e.ctx,Lu));const{setup:t}=l;if(t){const a=e.setupContext=t.length>1?_p(e):null;ol(e),cl();const r=rn(t,e,0,[e.props,a]);if(il(),Sn(),Oi(r)){if(r.then(Sn,Sn),n)return r.then(c=>{Ir(e,c,n)}).catch(c=>{Go(c,e,0)});e.asyncDep=r}else Ir(e,r,n)}else bp(e,n)}function Ir(e,n,l){is(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:js(n)&&(e.setupState=Yi(n)),bp(e,l)}let Nr;function bp(e,n,l){const t=e.type;if(!e.render){if(!n&&Nr&&!t.render){const a=t.template||Ua(e).template;if(a){const{isCustomElement:r,compilerOptions:c}=e.appContext.config,{delimiters:i,compilerOptions:p}=t,y=ie(ie({isCustomElement:r,delimiters:i},c),p);t.render=Nr(a,y)}}e.render=t.render||Se}ol(e),cl(),ju(e),il(),Sn()}function i5(e){return new Proxy(e.attrs,{get(n,l){return ge(e,"get","$attrs"),n[l]}})}function _p(e){const n=t=>{e.exposed=t||{}};let l;return{get attrs(){return l||(l=i5(e))},slots:e.slots,emit:e.emit,expose:n}}function nt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yi(qo(e.exposed)),{get(n,l){if(l in n)return n[l];if(l in kl)return kl[l](e)},has(n,l){return l in n||l in kl}}))}function Kt(e,n=!0){return is(e)?e.displayName||e.name:e.name||n&&e.__name}function p5(e){return is(e)&&"__vccOpts"in e}const S=(e,n)=>yu(e,n,Wl);function y5(){return u5().slots}function u5(){const e=Ln();return e.setupContext||(e.setupContext=_p(e))}function Be(e,n,l){const t=arguments.length;return t===2?js(n)&&!ls(n)?ll(n)?M(e,null,[n]):M(e,n):M(e,null,n):(t>3?l=Array.prototype.slice.call(arguments,2):t===3&&ll(l)&&(l=[l]),M(e,n,l))}const A5=Symbol(""),h5=()=>U(A5),d5="3.2.45",f5="http://www.w3.org/2000/svg",vn=typeof document<"u"?document:null,Ur=vn&&vn.createElement("template"),B5={insert:(e,n,l)=>{n.insertBefore(e,l||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,l,t)=>{const a=n?vn.createElementNS(f5,e):vn.createElement(e,l?{is:l}:void 0);return e==="select"&&t&&t.multiple!=null&&a.setAttribute("multiple",t.multiple),a},createText:e=>vn.createTextNode(e),createComment:e=>vn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,l,t,a,r){const c=l?l.previousSibling:n.lastChild;if(a&&(a===r||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),l),!(a===r||!(a=a.nextSibling)););else{Ur.innerHTML=t?`<svg>${e}</svg>`:e;const i=Ur.content;if(t){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}n.insertBefore(i,l)}return[c?c.nextSibling:n.firstChild,l?l.previousSibling:n.lastChild]}};function m5(e,n,l){const t=e._vtc;t&&(n=(n?[n,...t]:[...t]).join(" ")),n==null?e.removeAttribute("class"):l?e.setAttribute("class",n):e.className=n}function D5(e,n,l){const t=e.style,a=Ns(l);if(l&&!a){for(const r in l)qt(t,r,l[r]);if(n&&!Ns(n))for(const r in n)l[r]==null&&qt(t,r,"")}else{const r=t.display;a?n!==l&&(t.cssText=l):n&&e.removeAttribute("style"),"_vod"in e&&(t.display=r)}}const Hr=/\s*!important$/;function qt(e,n,l){if(ls(l))l.forEach(t=>qt(e,n,t));else if(l==null&&(l=""),n.startsWith("--"))e.setProperty(n,l);else{const t=g5(e,n);Hr.test(l)?e.setProperty(Rn(t),l.replace(Hr,""),"important"):e[t]=l}}const zr=["Webkit","Moz","ms"],At={};function g5(e,n){const l=At[n];if(l)return l;let t=ze(n);if(t!=="filter"&&t in e)return At[n]=t;t=Wo(t);for(let a=0;a<zr.length;a++){const r=zr[a]+t;if(r in e)return At[n]=r}return n}const Vr="http://www.w3.org/1999/xlink";function C5(e,n,l,t,a){if(t&&n.startsWith("xlink:"))l==null?e.removeAttributeNS(Vr,n.slice(6,n.length)):e.setAttributeNS(Vr,n,l);else{const r=v8(n);l==null||r&&!wi(l)?e.removeAttribute(n):e.setAttribute(n,r?"":l)}}function v5(e,n,l,t,a,r,c){if(n==="innerHTML"||n==="textContent"){t&&c(t,a,r),e[n]=l==null?"":l;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=l;const p=l==null?"":l;(e.value!==p||e.tagName==="OPTION")&&(e.value=p),l==null&&e.removeAttribute(n);return}let i=!1;if(l===""||l==null){const p=typeof e[n];p==="boolean"?l=wi(l):l==null&&p==="string"?(l="",i=!0):p==="number"&&(l=0,i=!0)}try{e[n]=l}catch{}i&&e.removeAttribute(n)}function Vn(e,n,l,t){e.addEventListener(n,l,t)}function b5(e,n,l,t){e.removeEventListener(n,l,t)}function _5(e,n,l,t,a=null){const r=e._vei||(e._vei={}),c=r[n];if(t&&c)c.value=t;else{const[i,p]=E5(n);if(t){const y=r[n]=w5(t,a);Vn(e,i,y,p)}else c&&(b5(e,i,c,p),r[n]=void 0)}}const Wr=/(?:Once|Passive|Capture)$/;function E5(e){let n;if(Wr.test(e)){n={};let t;for(;t=e.match(Wr);)e=e.slice(0,e.length-t[0].length),n[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Rn(e.slice(2)),n]}let ht=0;const k5=Promise.resolve(),F5=()=>ht||(k5.then(()=>ht=0),ht=Date.now());function w5(e,n){const l=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=l.attached)return;Oe(x5(t,l.value),n,5,[t])};return l.value=e,l.attached=F5(),l}function x5(e,n){if(ls(n)){const l=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{l.call(e),e._stopped=!0},n.map(t=>a=>!a._stopped&&t&&t(a))}else return n}const Kr=/^on[a-z]/,S5=(e,n,l,t,a=!1,r,c,i,p)=>{n==="class"?m5(e,t,a):n==="style"?D5(e,l,t):Ho(n)?_a(n)||_5(e,n,l,t,c):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):O5(e,n,t,a))?v5(e,n,t,r,c,i,p):(n==="true-value"?e._trueValue=t:n==="false-value"&&(e._falseValue=t),C5(e,n,t,a))};function O5(e,n,l,t){return t?!!(n==="innerHTML"||n==="textContent"||n in e&&Kr.test(n)&&is(l)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Kr.test(n)&&Ns(l)?!1:n in e}const qr=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ls(n)?l=>Zn(n,l):n};function T5(e){e.target.composing=!0}function Gr(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const $5={created(e,{modifiers:{lazy:n,trim:l,number:t}},a){e._assign=qr(a);const r=t||a.props&&a.props.type==="number";Vn(e,n?"change":"input",c=>{if(c.target.composing)return;let i=e.value;l&&(i=i.trim()),r&&(i=ko(i)),e._assign(i)}),l&&Vn(e,"change",()=>{e.value=e.value.trim()}),n||(Vn(e,"compositionstart",T5),Vn(e,"compositionend",Gr),Vn(e,"change",Gr))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:l,trim:t,number:a}},r){if(e._assign=qr(r),e.composing||document.activeElement===e&&e.type!=="range"&&(l||t&&e.value.trim()===n||(a||e.type==="number")&&ko(e.value)===n))return;const c=n==null?"":n;e.value!==c&&(e.value=c)}},P5={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yr=(e,n)=>l=>{if(!("key"in l))return;const t=Rn(l.key);if(n.some(a=>a===t||P5[a]===t))return e(l)},Ep={beforeMount(e,{value:n},{transition:l}){e._vod=e.style.display==="none"?"":e.style.display,l&&n?l.beforeEnter(e):fl(e,n)},mounted(e,{value:n},{transition:l}){l&&n&&l.enter(e)},updated(e,{value:n,oldValue:l},{transition:t}){!n!=!l&&(t?n?(t.beforeEnter(e),fl(e,!0),t.enter(e)):t.leave(e,()=>{fl(e,!1)}):fl(e,n))},beforeUnmount(e,{value:n}){fl(e,n)}};function fl(e,n){e.style.display=n?e._vod:"none"}const R5=ie({patchProp:S5},B5);let Zr;function L5(){return Zr||(Zr=Yu(R5))}const j5=(...e)=>{const n=L5().createApp(...e),{mount:l}=n;return n.mount=t=>{const a=M5(t);if(!a)return;const r=n._component;!is(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.innerHTML="";const c=l(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),c},n};function M5(e){return Ns(e)?document.querySelector(e):e}var Qr;const Pe=typeof window<"u",I5=e=>typeof e<"u",N5=Object.prototype.toString,Oo=e=>typeof e=="function",U5=e=>typeof e=="number",kp=e=>typeof e=="string",Gt=e=>N5.call(e)==="[object Object]",Yt=()=>+Date.now(),xl=()=>{};Pe&&((Qr=window==null?void 0:window.navigator)==null?void 0:Qr.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Xs(e){return typeof e=="function"?e():_(e)}function H5(e,n){function l(...t){e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})}return l}const Fp=e=>e();function z5(e=Fp){const n=V(!0);function l(){n.value=!1}function t(){n.value=!0}return{isActive:n,pause:l,resume:t,eventFilter:(...r)=>{n.value&&e(...r)}}}function V5(e){return e}function W5(e,n){var l;if(typeof e=="number")return e+n;const t=((l=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:l[0])||"",a=e.slice(t.length),r=parseFloat(t)+n;return Number.isNaN(r)?e:r+a}function K5(e,n){let l,t,a;const r=V(!0),c=()=>{r.value=!0,a()};As(e,c,{flush:"sync"});const i=Oo(n)?n:n.get,p=Oo(n)?void 0:n.set,y=Zi((u,A)=>(t=u,a=A,{get(){return r.value&&(l=i(),r.value=!1),t(),l},set(h){p==null||p(h)}}));return Object.isExtensible(y)&&(y.trigger=c),y}function We(e){return Ri()?(Li(e),!0):!1}function q5(e){if(!xs(e))return Rs(e);const n=new Proxy({},{get(l,t,a){return _(Reflect.get(e.value,t,a))},set(l,t,a){return xs(e.value[t])&&!xs(a)?e.value[t].value=a:e.value[t]=a,!0},deleteProperty(l,t){return Reflect.deleteProperty(e.value,t)},has(l,t){return Reflect.has(e.value,t)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Rs(n)}function wp(e){return typeof e=="function"?S(e):V(e)}var G5=Object.defineProperty,Y5=Object.defineProperties,Z5=Object.getOwnPropertyDescriptors,Jr=Object.getOwnPropertySymbols,Q5=Object.prototype.hasOwnProperty,J5=Object.prototype.propertyIsEnumerable,Xr=(e,n,l)=>n in e?G5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,X5=(e,n)=>{for(var l in n||(n={}))Q5.call(n,l)&&Xr(e,l,n[l]);if(Jr)for(var l of Jr(n))J5.call(n,l)&&Xr(e,l,n[l]);return e},sA=(e,n)=>Y5(e,Z5(n));function eA(e){if(!xs(e))return ru(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const l in e.value)n[l]=Zi(()=>({get(){return e.value[l]},set(t){if(Array.isArray(e.value)){const a=[...e.value];a[l]=t,e.value=a}else{const a=sA(X5({},e.value),{[l]:t});Object.setPrototypeOf(a,e.value),e.value=a}}}));return n}function Wa(e,n=!0){Ln()?yl(e):n?e():ee(e)}function nA(e){Ln()&&Xo(e)}function lA(e,n=1e3,l={}){const{immediate:t=!0,immediateCallback:a=!1}=l;let r=null;const c=V(!1);function i(){r&&(clearInterval(r),r=null)}function p(){c.value=!1,i()}function y(){_(n)<=0||(c.value=!0,a&&e(),i(),r=setInterval(e,Xs(n)))}if(t&&Pe&&y(),xs(n)){const u=As(n,()=>{c.value&&Pe&&y()});We(u)}return We(p),{isActive:c,pause:p,resume:y}}function oA(e,n,l={}){const{immediate:t=!0}=l,a=V(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function i(){a.value=!1,c()}function p(...y){c(),a.value=!0,r=setTimeout(()=>{a.value=!1,r=null,e(...y)},Xs(n))}return t&&(a.value=!0,Pe&&p()),We(i),{isPending:a,start:p,stop:i}}function xp(e=!1,n={}){const{truthyValue:l=!0,falsyValue:t=!1}=n,a=xs(e),r=V(e);function c(i){if(arguments.length)return r.value=i,r.value;{const p=Xs(l);return r.value=r.value===p?Xs(t):p,r.value}}return a?c:[r,c]}var sc=Object.getOwnPropertySymbols,tA=Object.prototype.hasOwnProperty,aA=Object.prototype.propertyIsEnumerable,rA=(e,n)=>{var l={};for(var t in e)tA.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&sc)for(var t of sc(e))n.indexOf(t)<0&&aA.call(e,t)&&(l[t]=e[t]);return l};function cA(e,n,l={}){const t=l,{eventFilter:a=Fp}=t,r=rA(t,["eventFilter"]);return As(e,H5(a,n),r)}var iA=Object.defineProperty,pA=Object.defineProperties,yA=Object.getOwnPropertyDescriptors,To=Object.getOwnPropertySymbols,Sp=Object.prototype.hasOwnProperty,Op=Object.prototype.propertyIsEnumerable,ec=(e,n,l)=>n in e?iA(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,uA=(e,n)=>{for(var l in n||(n={}))Sp.call(n,l)&&ec(e,l,n[l]);if(To)for(var l of To(n))Op.call(n,l)&&ec(e,l,n[l]);return e},AA=(e,n)=>pA(e,yA(n)),hA=(e,n)=>{var l={};for(var t in e)Sp.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&To)for(var t of To(e))n.indexOf(t)<0&&Op.call(e,t)&&(l[t]=e[t]);return l};function dA(e,n,l={}){const t=l,{eventFilter:a}=t,r=hA(t,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:y}=z5(a);return{stop:cA(e,n,AA(uA({},r),{eventFilter:c})),pause:i,resume:p,isActive:y}}var Tp="usehead",nc="head:count",dt="data-head-attrs",$p="data-meta-body",fA=(e,n)=>{const l=t=>{if(t.props.renderPriority)return t.props.renderPriority;switch(t.tag){case"base":return-1;case"meta":return t.props.charset?-2:t.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return l(e)-l(n)},BA=e=>{if(!["meta","base","script","link","title"].includes(e.tag))return!1;const{props:n,tag:l}=e;if(l==="base"||l==="title")return l;if(l==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const t=["key","id","name","property","http-equiv"];for(const a of t){let r;if(typeof n.getAttribute=="function"&&n.hasAttribute(a)?r=n.getAttribute(a):r=n[a],r!==void 0)return`${l}-${a}-${r}`}return!1};function Zt(e){const n=Xs(e);return!e||!n?n:Array.isArray(n)?n.map(Zt):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([l,t])=>l==="titleTemplate"?[l,_(t)]:[l,Zt(t)])):n}function mA(e){return{...e,input:Zt(e.input)}}function lc(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){const l=n.getAttribute("nonce");if(l&&!e.getAttribute("nonce")){const t=n.cloneNode(!0);return t.setAttribute("nonce",""),t.nonce=l,l===e.nonce&&e.isEqualNode(t)}}return e.isEqualNode(n)}var oc=(e,n)=>{const l=e.getAttribute(dt);if(l)for(const a of l.split(","))a in n||e.removeAttribute(a);const t=[];for(const a in n){const r=n[a];r!=null&&(r===!1?e.removeAttribute(a):e.setAttribute(a,r),t.push(a))}t.length?e.setAttribute(dt,t.join(",")):e.removeAttribute(dt)},DA=(e,n,l)=>{const t=l.createElement(e);for(const a of Object.keys(n))if(a==="body"&&n.body===!0)t.setAttribute($p,"true");else{const r=n[a];if(a==="renderPriority"||a==="key"||r===!1)continue;a==="children"||a==="textContent"?t.textContent=r:a==="innerHTML"?t.innerHTML=r:t.setAttribute(a,r)}return t},gA=(e=window.document,n,l)=>{var t,a;const r=e.head,c=e.body;let i=r.querySelector(`meta[name="${nc}"]`);const p=c.querySelectorAll(`[${$p}]`),y=i?Number(i.getAttribute("content")):0,u=[],A=[];if(p)for(let f=0;f<p.length;f++)p[f]&&((t=p[f].tagName)==null?void 0:t.toLowerCase())===n&&A.push(p[f]);if(i)for(let f=0,d=i.previousElementSibling;f<y;f++,d=(d==null?void 0:d.previousElementSibling)||null)((a=d==null?void 0:d.tagName)==null?void 0:a.toLowerCase())===n&&u.push(d);else i=e.createElement("meta"),i.setAttribute("name",nc),i.setAttribute("content","0"),r.append(i);let h=l.map(f=>{var d;return{element:DA(f.tag,f.props,e),body:(d=f.props.body)!=null?d:!1}});h=h.filter(f=>{for(let d=0;d<u.length;d++){const g=u[d];if(lc(g,f.element))return u.splice(d,1),!1}for(let d=0;d<A.length;d++){const g=A[d];if(lc(g,f.element))return A.splice(d,1),!1}return!0}),A.forEach(f=>{var d;return(d=f.parentNode)==null?void 0:d.removeChild(f)}),u.forEach(f=>{var d;return(d=f.parentNode)==null?void 0:d.removeChild(f)}),h.forEach(f=>{f.body===!0?c.insertAdjacentElement("beforeend",f.element):r.insertBefore(f.element,i)}),i.setAttribute("content",`${y-u.length+h.filter(f=>!f.body).length}`)},CA=({domCtx:e,document:n,previousTags:l})=>{n||(n=window.document),e.title!==void 0&&(n.title=e.title),oc(n.documentElement,e.htmlAttrs),oc(n.body,e.bodyAttrs);const t=new Set([...Object.keys(e.actualTags),...l]);for(const a of t)gA(n,a,e.actualTags[a]||[]);l.clear(),Object.keys(e.actualTags).forEach(a=>l.add(a))},vA=()=>{const e=U(Tp);if(!e)throw new Error("You may forget to apply app.use(head)");return e},bA=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],_A=(e,n)=>e==null?"":typeof e=="function"?e(n):e.replace("%s",n!=null?n:""),EA=e=>{const n=[],l=Object.keys(e),t=a=>(a.hid&&(a.key=a.hid,delete a.hid),a.vmid&&(a.key=a.vmid,delete a.vmid),a);for(const a of l)if(e[a]!=null)switch(a){case"title":n.push({tag:a,props:{textContent:e[a]}});break;case"titleTemplate":break;case"base":n.push({tag:a,props:{key:"default",...e[a]}});break;default:if(bA.includes(a)){const r=e[a];Array.isArray(r)?r.forEach(c=>{const i=t(c);n.push({tag:a,props:i})}):r&&n.push({tag:a,props:t(r)})}break}return n},kA=e=>{let n=[];const l=new Set;let t=0;const a=[],r=[];e&&n.push({input:e});let c=null,i;const p={install(y){y.config.globalProperties.$head=p,y.provide(Tp,p)},hookBeforeDomUpdate:a,hookTagsResolved:r,get headTags(){const y=[],u={},A=n.map(mA),h=A.map(d=>d.input.titleTemplate).reverse().find(d=>d!=null);A.forEach((d,g)=>{EA(d.input).forEach((b,E)=>{var v;if(b._position=g*1e4+E,b._options&&delete b._options,d.options&&(b._options=d.options),h&&b.tag==="title"&&(b.props.textContent=_A(h,b.props.textContent)),!((v=b._options)!=null&&v.raw)){for(const R in b.props)R.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",b),delete b.props[R]);b.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",b),delete b.props.innerHTML)}const w=BA(b);w?u[w]=b:y.push(b)})}),y.push(...Object.values(u));const f=y.sort((d,g)=>d._position-g._position);return p.hookTagsResolved.forEach(d=>d(f)),f},addHeadObjs(y,u){const A={input:y,options:u,id:t++};return n.push(A),()=>{n=n.filter(h=>h.id!==A.id)}},removeHeadObjs(y){n=n.filter(u=>u.input!==y)},updateDOM:(y,u)=>{i={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const h of p.headTags.sort(fA)){if(h.tag==="title"){i.title=h.props.textContent;continue}if(h.tag==="htmlAttrs"||h.tag==="bodyAttrs"){Object.assign(i[h.tag],h.props);continue}i.actualTags[h.tag]=i.actualTags[h.tag]||[],i.actualTags[h.tag].push(h)}const A=()=>{c=null;for(const h in p.hookBeforeDomUpdate)if(p.hookBeforeDomUpdate[h](i.actualTags)===!1)return;CA({domCtx:i,document:y,previousTags:l})};if(u){A();return}c=c||ee(()=>A())}};return p},FA=typeof window<"u",wA=(e,n={})=>{const l=vA(),t=l.addHeadObjs(e,n);FA&&(pl(()=>{l.updateDOM()}),Jo(()=>{t(),l.updateDOM()}))},xA=e=>{wA(e)};const Sl=Symbol("v-click-clicks"),bn=Symbol("v-click-clicks-elements"),Qt=Symbol("v-click-clicks-order-map"),Ol=Symbol("v-click-clicks-disabled"),Pp=Symbol("slidev-slide-scale"),G=Symbol("slidev-slidev-context"),SA=Symbol("slidev-route"),OA=Symbol("slidev-slide-context"),gn="slidev-vclick-target",ft="slidev-vclick-hidden",TA="slidev-vclick-fade",Bt="slidev-vclick-hidden-explicitly",Bl="slidev-vclick-current",Ao="slidev-vclick-prior";function Jt(e,n){if(!e)return!1;const l=e.indexOf(n);return l>=0?(e.splice(l,1),!0):!1}function $A(...e){let n,l,t;e.length===1?(n=0,t=1,[l]=e):[n,l,t=1]=e;const a=[];let r=n;for(;r<l;)a.push(r),r+=t||1;return a}function PA(e){return e!=null}function RA(e,n){return Object.fromEntries(Object.entries(e).map(([l,t])=>n(l,t)).filter(PA))}const El={theme:"seriph",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:!1,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"none",layout:"center"},bs=El;var ki;const cn=(ki=bs.aspectRatio)!=null?ki:16/9;var Fi;const pn=(Fi=bs.canvasWidth)!=null?Fi:980,Ka=Math.ceil(pn/cn),Rp=S(()=>RA(bs.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function be(e,n,l){Object.defineProperty(e,n,{value:l,writable:!0,enumerable:!1})}const jn=Rs({page:0,clicks:0});let LA=[],jA=[];be(jn,"$syncUp",!0);be(jn,"$syncDown",!0);be(jn,"$paused",!1);be(jn,"$onSet",e=>LA.push(e));be(jn,"$onPatch",e=>jA.push(e));be(jn,"$patch",async()=>!1);function Lp(e,n,l=!1){const t=[];let a=!1,r=!1,c,i;const p=Rs(n);function y(f){t.push(f)}function u(f,d){clearTimeout(c),a=!0,p[f]=d,c=setTimeout(()=>a=!1,0)}function A(f){a||(clearTimeout(i),r=!0,Object.entries(f).forEach(([d,g])=>{p[d]=g}),i=setTimeout(()=>r=!1,0))}function h(f){let d;l?l&&window.addEventListener("storage",C=>{C&&C.key===f&&C.newValue&&A(JSON.parse(C.newValue))}):(d=new BroadcastChannel(f),d.addEventListener("message",C=>A(C.data)));function g(){!l&&d&&!r?d.postMessage(_s(p)):l&&!r&&window.localStorage.setItem(f,JSON.stringify(p)),a||t.forEach(C=>C(p))}if(As(p,g,{deep:!0}),l){const C=window.localStorage.getItem(f);C&&A(JSON.parse(C))}}return{init:h,onPatch:y,patch:u,state:p}}const{init:MA,onPatch:IA,patch:tc,state:mt}=Lp(jn,{page:1,clicks:0}),Mn=Rs({});let NA=[],UA=[];be(Mn,"$syncUp",!0);be(Mn,"$syncDown",!0);be(Mn,"$paused",!1);be(Mn,"$onSet",e=>NA.push(e));be(Mn,"$onPatch",e=>UA.push(e));be(Mn,"$patch",async()=>!1);const{init:HA,onPatch:zA,patch:jp,state:$o}=Lp(Mn,{},!1),VA="modulepreload",WA=function(e){return"/talks/write-unmaintainable-code/"+e},ac={},Pn=function(n,l,t){if(!l||l.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(l.map(r=>{if(r=WA(r),r in ac)return;ac[r]=!0;const c=r.endsWith(".css"),i=c?'[rel="stylesheet"]':"";if(!!t)for(let u=a.length-1;u>=0;u--){const A=a[u];if(A.href===r&&(!c||A.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":VA,c||(y.as="script",y.crossOrigin=""),y.href=r,document.head.appendChild(y),c)return new Promise((u,A)=>{y.addEventListener("load",u),y.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};function xe(e){var n;const l=Xs(e);return(n=l==null?void 0:l.$el)!=null?n:l}const oe=Pe?window:void 0,Mp=Pe?window.document:void 0,KA=Pe?window.navigator:void 0;function ys(...e){let n,l,t,a;if(kp(e[0])||Array.isArray(e[0])?([l,t,a]=e,n=oe):[n,l,t,a]=e,!n)return xl;Array.isArray(l)||(l=[l]),Array.isArray(t)||(t=[t]);const r=[],c=()=>{r.forEach(u=>u()),r.length=0},i=(u,A,h)=>(u.addEventListener(A,h,a),()=>u.removeEventListener(A,h,a)),p=As(()=>xe(n),u=>{c(),u&&r.push(...l.flatMap(A=>t.map(h=>i(u,A,h))))},{immediate:!0,flush:"post"}),y=()=>{p(),c()};return We(y),y}function qA(e,n,l={}){const{window:t=oe,ignore:a,capture:r=!0,detectIframe:c=!1}=l;if(!t)return;let i=!0,p;const y=f=>{t.clearTimeout(p);const d=xe(e);if(!(!d||d===f.target||f.composedPath().includes(d))){if(!i){i=!0;return}n(f)}},u=f=>a&&a.some(d=>{const g=xe(d);return g&&(f.target===g||f.composedPath().includes(g))}),A=[ys(t,"click",y,{passive:!0,capture:r}),ys(t,"pointerdown",f=>{const d=xe(e);d&&(i=!f.composedPath().includes(d)&&!u(f))},{passive:!0}),ys(t,"pointerup",f=>{if(f.button===0){const d=f.composedPath();f.composedPath=()=>d,p=t.setTimeout(()=>y(f),50)}},{passive:!0}),c&&ys(t,"blur",f=>{var d;const g=xe(e);((d=t.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(g!=null&&g.contains(t.document.activeElement))&&n(f)})].filter(Boolean);return()=>A.forEach(f=>f())}const GA=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function YA(...e){let n,l,t={};e.length===3?(n=e[0],l=e[1],t=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,l=e[0],t=e[1]):(n=e[0],l=e[1]):(n=!0,l=e[0]);const{target:a=oe,eventName:r="keydown",passive:c=!1}=t,i=GA(n);return ys(a,r,y=>{i(y)&&l(y)},c)}function ZA(e={}){const{window:n=oe}=e,l=K5(()=>null,()=>n==null?void 0:n.document.activeElement);return n&&(ys(n,"blur",l.trigger,!0),ys(n,"focus",l.trigger,!0)),l}function eo(e,n=!1){const l=V(),t=()=>l.value=Boolean(e());return t(),Wa(t,n),l}function Wn(e,n={}){const{window:l=oe}=n,t=eo(()=>l&&"matchMedia"in l&&typeof l.matchMedia=="function");let a;const r=V(!1),c=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},i=()=>{!t.value||(c(),a=l.matchMedia(wp(e).value),r.value=a.matches,"addEventListener"in a?a.addEventListener("change",i):a.addListener(i))};return pl(i),We(()=>c()),r}const QA={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var JA=Object.defineProperty,rc=Object.getOwnPropertySymbols,XA=Object.prototype.hasOwnProperty,sh=Object.prototype.propertyIsEnumerable,cc=(e,n,l)=>n in e?JA(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,eh=(e,n)=>{for(var l in n||(n={}))XA.call(n,l)&&cc(e,l,n[l]);if(rc)for(var l of rc(n))sh.call(n,l)&&cc(e,l,n[l]);return e};function nh(e,n={}){function l(i,p){let y=e[i];return p!=null&&(y=W5(y,p)),typeof y=="number"&&(y=`${y}px`),y}const{window:t=oe}=n;function a(i){return t?t.matchMedia(i).matches:!1}const r=i=>Wn(`(min-width: ${l(i)})`,n),c=Object.keys(e).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>r(p),enumerable:!0,configurable:!0}),i),{});return eh({greater(i){return Wn(`(min-width: ${l(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return Wn(`(max-width: ${l(i,-.1)})`,n)},smallerOrEqual(i){return Wn(`(max-width: ${l(i)})`,n)},between(i,p){return Wn(`(min-width: ${l(i)}) and (max-width: ${l(p,-.1)})`,n)},isGreater(i){return a(`(min-width: ${l(i,.1)})`)},isGreaterOrEqual(i){return a(`(min-width: ${l(i)})`)},isSmaller(i){return a(`(max-width: ${l(i,-.1)})`)},isSmallerOrEqual(i){return a(`(max-width: ${l(i)})`)},isInBetween(i,p){return a(`(min-width: ${l(i)}) and (max-width: ${l(p,-.1)})`)}},c)}function lh(e={}){const{navigator:n=KA,read:l=!1,source:t,copiedDuring:a=1500,legacy:r=!1}=e,c=["copy","cut"],i=eo(()=>n&&"clipboard"in n),p=S(()=>i.value||r),y=V(""),u=V(!1),A=oA(()=>u.value=!1,a);function h(){i.value?n.clipboard.readText().then(C=>{y.value=C}):y.value=g()}if(p.value&&l)for(const C of c)ys(C,h);async function f(C=Xs(t)){p.value&&C!=null&&(i.value?await n.clipboard.writeText(C):d(C),y.value=C,u.value=!0,A.start())}function d(C){const b=document.createElement("textarea");b.value=C!=null?C:"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function g(){var C,b,E;return(E=(b=(C=document==null?void 0:document.getSelection)==null?void 0:C.call(document))==null?void 0:b.toString())!=null?E:""}return{isSupported:p,text:y,copied:u,copy:f}}function oh(e){return JSON.parse(JSON.stringify(e))}const Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sa="__vueuse_ssr_handlers__";Xt[sa]=Xt[sa]||{};const th=Xt[sa];function ah(e,n){return th[e]||n}function rh(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ch=Object.defineProperty,ic=Object.getOwnPropertySymbols,ih=Object.prototype.hasOwnProperty,ph=Object.prototype.propertyIsEnumerable,pc=(e,n,l)=>n in e?ch(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,yc=(e,n)=>{for(var l in n||(n={}))ih.call(n,l)&&pc(e,l,n[l]);if(ic)for(var l of ic(n))ph.call(n,l)&&pc(e,l,n[l]);return e};const yh={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Le(e,n,l,t={}){var a;const{flush:r="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:y=!1,shallow:u,window:A=oe,eventFilter:h,onError:f=I=>{console.error(I)}}=t,d=(u?Ve:V)(n);if(!l)try{l=ah("getDefaultStorage",()=>{var I;return(I=oe)==null?void 0:I.localStorage})()}catch(I){f(I)}if(!l)return d;const g=Xs(n),C=rh(g),b=(a=t.serializer)!=null?a:yh[C],{pause:E,resume:v}=dA(d,()=>w(d.value),{flush:r,deep:c,eventFilter:h});return A&&i&&ys(A,"storage",L),L(),d;function w(I){try{I==null?l.removeItem(e):l.setItem(e,b.write(I))}catch(J){f(J)}}function R(I){E();try{const J=I?I.newValue:l.getItem(e);if(J==null)return p&&g!==null&&l.setItem(e,b.write(g)),g;if(!I&&y){const ts=b.read(J);return Oo(y)?y(ts,g):C==="object"&&!Array.isArray(ts)?yc(yc({},g),ts):ts}else return typeof J!="string"?J:b.read(J)}catch(J){f(J)}finally{v()}}function L(I){if(!(I&&I.storageArea!==l)){if(I&&I.key===null){d.value=g;return}I&&I.key!==e||(d.value=R(I))}}}function uh(e){return Wn("(prefers-color-scheme: dark)",e)}var Ah=Object.defineProperty,hh=Object.defineProperties,dh=Object.getOwnPropertyDescriptors,uc=Object.getOwnPropertySymbols,fh=Object.prototype.hasOwnProperty,Bh=Object.prototype.propertyIsEnumerable,Ac=(e,n,l)=>n in e?Ah(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,mh=(e,n)=>{for(var l in n||(n={}))fh.call(n,l)&&Ac(e,l,n[l]);if(uc)for(var l of uc(n))Bh.call(n,l)&&Ac(e,l,n[l]);return e},Dh=(e,n)=>hh(e,dh(n));function Eb(e,n={}){var l,t,a;const r=(l=n.draggingElement)!=null?l:oe,c=(t=n.handle)!=null?t:e,i=V((a=Xs(n.initialValue))!=null?a:{x:0,y:0}),p=V(),y=d=>n.pointerTypes?n.pointerTypes.includes(d.pointerType):!0,u=d=>{Xs(n.preventDefault)&&d.preventDefault(),Xs(n.stopPropagation)&&d.stopPropagation()},A=d=>{var g;if(!y(d)||Xs(n.exact)&&d.target!==Xs(e))return;const C=Xs(e).getBoundingClientRect(),b={x:d.pageX-C.left,y:d.pageY-C.top};((g=n.onStart)==null?void 0:g.call(n,b,d))!==!1&&(p.value=b,u(d))},h=d=>{var g;!y(d)||!p.value||(i.value={x:d.pageX-p.value.x,y:d.pageY-p.value.y},(g=n.onMove)==null||g.call(n,i.value,d),u(d))},f=d=>{var g;!y(d)||!p.value||(p.value=void 0,(g=n.onEnd)==null||g.call(n,i.value,d),u(d))};return Pe&&(ys(c,"pointerdown",A,!0),ys(r,"pointermove",h,!0),ys(r,"pointerup",f,!0)),Dh(mh({},eA(i)),{position:i,isDragging:S(()=>!!p.value),style:S(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var hc=Object.getOwnPropertySymbols,gh=Object.prototype.hasOwnProperty,Ch=Object.prototype.propertyIsEnumerable,vh=(e,n)=>{var l={};for(var t in e)gh.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&hc)for(var t of hc(e))n.indexOf(t)<0&&Ch.call(e,t)&&(l[t]=e[t]);return l};function bh(e,n,l={}){const t=l,{window:a=oe}=t,r=vh(t,["window"]);let c;const i=eo(()=>a&&"ResizeObserver"in a),p=()=>{c&&(c.disconnect(),c=void 0)},y=As(()=>xe(e),A=>{p(),i.value&&a&&A&&(c=new ResizeObserver(n),c.observe(A,r))},{immediate:!0,flush:"post"}),u=()=>{p(),y()};return We(u),{isSupported:i,stop:u}}function _h(e,n={}){const{immediate:l=!0,window:t=oe}=n,a=V(!1);let r=null;function c(){!a.value||!t||(e(),r=t.requestAnimationFrame(c))}function i(){!a.value&&t&&(a.value=!0,c())}function p(){a.value=!1,r!=null&&t&&(t.cancelAnimationFrame(r),r=null)}return l&&i(),We(p),{isActive:a,pause:p,resume:i}}function Eh(e,n={width:0,height:0},l={}){const{box:t="content-box"}=l,a=V(n.width),r=V(n.height);return bh(e,([c])=>{const i=t==="border-box"?c.borderBoxSize:t==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;i?(a.value=i.reduce((p,{inlineSize:y})=>p+y,0),r.value=i.reduce((p,{blockSize:y})=>p+y,0)):(a.value=c.contentRect.width,r.value=c.contentRect.height)},l),As(()=>xe(e),c=>{a.value=c?n.width:0,r.value=c?n.height:0}),{width:a,height:r}}const dc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function kh(e,n={}){const{document:l=Mp,autoExit:t=!1}=n,a=e||(l==null?void 0:l.querySelector("html")),r=V(!1);let c=dc[0];const i=eo(()=>{if(l){for(const g of dc)if(g[1]in l)return c=g,!0}else return!1;return!1}),[p,y,u,,A]=c;async function h(){!i.value||(l!=null&&l[u]&&await l[y](),r.value=!1)}async function f(){if(!i.value)return;await h();const g=xe(a);g&&(await g[p](),r.value=!0)}async function d(){r.value?await h():await f()}return l&&ys(l,A,()=>{r.value=!!(l!=null&&l[u])},!1),t&&We(h),{isSupported:i,isFullscreen:r,enter:f,exit:h,toggle:d}}function Fh(e,n,l={}){const{root:t,rootMargin:a="0px",threshold:r=.1,window:c=oe}=l,i=eo(()=>c&&"IntersectionObserver"in c);let p=xl;const y=i.value?As(()=>({el:xe(e),root:xe(t)}),({el:A,root:h})=>{if(p(),!A)return;const f=new IntersectionObserver(n,{root:h,rootMargin:a,threshold:r});f.observe(A),p=()=>{f.disconnect(),p=xl}},{immediate:!0,flush:"post"}):xl,u=()=>{p(),y()};return We(u),{isSupported:i,stop:u}}const wh={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function xh(e={}){const{reactive:n=!1,target:l=oe,aliasMap:t=wh,passive:a=!0,onEventFired:r=xl}=e,c=Rs(new Set),i={toJSON(){return{}},current:c},p=n?Rs(i):i,y=new Set,u=new Set;function A(g,C){g in p&&(n?p[g]=C:p[g].value=C)}function h(){for(const g of u)A(g,!1)}function f(g,C){var b,E;const v=(b=g.key)==null?void 0:b.toLowerCase(),R=[(E=g.code)==null?void 0:E.toLowerCase(),v].filter(Boolean);v&&(C?c.add(v):c.delete(v));for(const L of R)u.add(L),A(L,C);v==="meta"&&!C?(y.forEach(L=>{c.delete(L),A(L,!1)}),y.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&C&&[...c,...R].forEach(L=>y.add(L))}ys(l,"keydown",g=>(f(g,!0),r(g)),{passive:a}),ys(l,"keyup",g=>(f(g,!1),r(g)),{passive:a}),ys("blur",h,{passive:!0}),ys("focus",h,{passive:!0});const d=new Proxy(p,{get(g,C,b){if(typeof C!="string")return Reflect.get(g,C,b);if(C=C.toLowerCase(),C in t&&(C=t[C]),!(C in p))if(/[+_-]/.test(C)){const v=C.split(/[+_-]/g).map(w=>w.trim());p[C]=S(()=>v.every(w=>_(d[w])))}else p[C]=V(!1);const E=Reflect.get(g,C,b);return n?_(E):E}});return d}function kb(e={}){const{type:n="page",touch:l=!0,resetOnTouchEnds:t=!1,initialValue:a={x:0,y:0},window:r=oe,eventFilter:c}=e,i=V(a.x),p=V(a.y),y=V(null),u=g=>{n==="page"?(i.value=g.pageX,p.value=g.pageY):n==="client"&&(i.value=g.clientX,p.value=g.clientY),y.value="mouse"},A=()=>{i.value=a.x,p.value=a.y},h=g=>{if(g.touches.length>0){const C=g.touches[0];n==="page"?(i.value=C.pageX,p.value=C.pageY):n==="client"&&(i.value=C.clientX,p.value=C.clientY),y.value="touch"}},f=g=>c===void 0?u(g):c(()=>u(g),{}),d=g=>c===void 0?h(g):c(()=>h(g),{});return r&&(ys(r,"mousemove",f,{passive:!0}),ys(r,"dragover",f,{passive:!0}),l&&(ys(r,"touchstart",d,{passive:!0}),ys(r,"touchmove",d,{passive:!0}),t&&ys(r,"touchend",A,{passive:!0}))),{x:i,y:p,sourceType:y}}var Ze;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ze||(Ze={}));function Sh(e,n={}){const l=wp(e),{threshold:t=50,onSwipe:a,onSwipeEnd:r,onSwipeStart:c}=n,i=Rs({x:0,y:0}),p=(L,I)=>{i.x=L,i.y=I},y=Rs({x:0,y:0}),u=(L,I)=>{y.x=L,y.y=I},A=S(()=>i.x-y.x),h=S(()=>i.y-y.y),{max:f,abs:d}=Math,g=S(()=>f(d(A.value),d(h.value))>=t),C=V(!1),b=V(!1),E=S(()=>g.value?d(A.value)>d(h.value)?A.value>0?Ze.LEFT:Ze.RIGHT:h.value>0?Ze.UP:Ze.DOWN:Ze.NONE),v=L=>{var I,J,ts;const us=L.buttons===0,Ds=L.buttons===1;return(ts=(J=(I=n.pointerTypes)==null?void 0:I.includes(L.pointerType))!=null?J:us||Ds)!=null?ts:!0},w=[ys(e,"pointerdown",L=>{var I,J;if(!v(L))return;b.value=!0,(J=(I=l.value)==null?void 0:I.style)==null||J.setProperty("touch-action","none");const ts=L.target;ts==null||ts.setPointerCapture(L.pointerId);const{clientX:us,clientY:Ds}=L;p(us,Ds),u(us,Ds),c==null||c(L)}),ys(e,"pointermove",L=>{if(!v(L)||!b.value)return;const{clientX:I,clientY:J}=L;u(I,J),!C.value&&g.value&&(C.value=!0),C.value&&(a==null||a(L))}),ys(e,"pointerup",L=>{var I,J;!v(L)||(C.value&&(r==null||r(L,E.value)),b.value=!1,C.value=!1,(J=(I=l.value)==null?void 0:I.style)==null||J.setProperty("touch-action","initial"))})],R=()=>w.forEach(L=>L());return{isSwiping:En(C),direction:En(E),posStart:En(i),posEnd:En(y),distanceX:A,distanceY:h,stop:R}}let Oh=0;function Fb(e,n={}){const l=V(!1),{document:t=Mp,immediate:a=!0,manual:r=!1,id:c=`vueuse_styletag_${++Oh}`}=n,i=V(e);let p=()=>{};const y=()=>{if(!t)return;const A=t.getElementById(c)||t.createElement("style");A.isConnected||(A.type="text/css",A.id=c,n.media&&(A.media=n.media),t.head.appendChild(A)),!l.value&&(p=As(i,h=>{A.innerText=h},{immediate:!0}),l.value=!0)},u=()=>{!t||!l.value||(p(),t.head.removeChild(t.getElementById(c)),l.value=!1)};return a&&!r&&Wa(y),r||We(u),{id:c,css:i,unload:u,load:y,isLoaded:En(l)}}var Th=Object.defineProperty,fc=Object.getOwnPropertySymbols,$h=Object.prototype.hasOwnProperty,Ph=Object.prototype.propertyIsEnumerable,Bc=(e,n,l)=>n in e?Th(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Rh=(e,n)=>{for(var l in n||(n={}))$h.call(n,l)&&Bc(e,l,n[l]);if(fc)for(var l of fc(n))Ph.call(n,l)&&Bc(e,l,n[l]);return e};function wb(e={}){const{controls:n=!1,offset:l=0,immediate:t=!0,interval:a="requestAnimationFrame",callback:r}=e,c=V(Yt()+l),i=()=>c.value=Yt()+l,p=r?()=>{i(),r(c.value)}:i,y=a==="requestAnimationFrame"?_h(p,{immediate:t}):lA(p,a,{immediate:t});return n?Rh({timestamp:c},y):c}var Lh=Object.defineProperty,mc=Object.getOwnPropertySymbols,jh=Object.prototype.hasOwnProperty,Mh=Object.prototype.propertyIsEnumerable,Dc=(e,n,l)=>n in e?Lh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Ih=(e,n)=>{for(var l in n||(n={}))jh.call(n,l)&&Dc(e,l,n[l]);if(mc)for(var l of mc(n))Mh.call(n,l)&&Dc(e,l,n[l]);return e};const Nh={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ih({linear:V5},Nh);function Ue(e,n,l,t={}){var a,r,c;const{clone:i=!1,passive:p=!1,eventName:y,deep:u=!1,defaultValue:A}=t,h=Ln(),f=l||(h==null?void 0:h.emit)||((a=h==null?void 0:h.$emit)==null?void 0:a.bind(h))||((c=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:c.bind(h==null?void 0:h.proxy));let d=y;n||(n="modelValue"),d=y||d||`update:${n.toString()}`;const g=b=>i?Oo(i)?i(b):oh(b):b,C=()=>I5(e[n])?g(e[n]):A;if(p){const b=C(),E=V(b);return As(()=>e[n],v=>E.value=g(v)),As(E,v=>{(v!==e[n]||u)&&f(d,v)},{deep:u}),E}else return S({get(){return C()},set(b){f(d,b)}})}function xb({window:e=oe}={}){if(!e)return V(!1);const n=V(e.document.hasFocus());return ys(e,"blur",()=>{n.value=!1}),ys(e,"focus",()=>{n.value=!0}),n}function Uh(e={}){const{window:n=oe,initialWidth:l=1/0,initialHeight:t=1/0,listenOrientation:a=!0,includeScrollbar:r=!0}=e,c=V(l),i=V(t),p=()=>{n&&(r?(c.value=n.innerWidth,i.value=n.innerHeight):(c.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return p(),Wa(p),ys("resize",p,{passive:!0}),a&&ys("orientationchange",p,{passive:!0}),{width:c,height:i}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kn=typeof window<"u";function Hh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Fs=Object.assign;function Dt(e,n){const l={};for(const t in n){const a=n[t];l[t]=Re(a)?a.map(e):e(a)}return l}const Tl=()=>{},Re=Array.isArray,zh=/\/$/,Vh=e=>e.replace(zh,"");function gt(e,n,l="/"){let t,a={},r="",c="";const i=n.indexOf("#");let p=n.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(t=n.slice(0,p),r=n.slice(p+1,i>-1?i:n.length),a=e(r)),i>-1&&(t=t||n.slice(0,i),c=n.slice(i,n.length)),t=Gh(t!=null?t:n,l),{fullPath:t+(r&&"?")+r+c,path:t,query:a,hash:c}}function Wh(e,n){const l=n.query?e(n.query):"";return n.path+(l&&"?")+l+(n.hash||"")}function gc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Kh(e,n,l){const t=n.matched.length-1,a=l.matched.length-1;return t>-1&&t===a&&tl(n.matched[t],l.matched[a])&&Ip(n.params,l.params)&&e(n.query)===e(l.query)&&n.hash===l.hash}function tl(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ip(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const l in e)if(!qh(e[l],n[l]))return!1;return!0}function qh(e,n){return Re(e)?Cc(e,n):Re(n)?Cc(n,e):e===n}function Cc(e,n){return Re(n)?e.length===n.length&&e.every((l,t)=>l===n[t]):e.length===1&&e[0]===n}function Gh(e,n){if(e.startsWith("/"))return e;if(!e)return n;const l=n.split("/"),t=e.split("/");let a=l.length-1,r,c;for(r=0;r<t.length;r++)if(c=t[r],c!==".")if(c==="..")a>1&&a--;else break;return l.slice(0,a).join("/")+"/"+t.slice(r-(r===t.length?1:0)).join("/")}var Kl;(function(e){e.pop="pop",e.push="push"})(Kl||(Kl={}));var $l;(function(e){e.back="back",e.forward="forward",e.unknown=""})($l||($l={}));function Yh(e){if(!e)if(Kn){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Vh(e)}const Zh=/^[^#]+#/;function Qh(e,n){return e.replace(Zh,"#")+n}function Jh(e,n){const l=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:n.behavior,left:t.left-l.left-(n.left||0),top:t.top-l.top-(n.top||0)}}const lt=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xh(e){let n;if("el"in e){const l=e.el,t=typeof l=="string"&&l.startsWith("#"),a=typeof l=="string"?t?document.getElementById(l.slice(1)):document.querySelector(l):l;if(!a)return;n=Jh(a,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function vc(e,n){return(history.state?history.state.position-n:-1)+e}const ea=new Map;function sd(e,n){ea.set(e,n)}function ed(e){const n=ea.get(e);return ea.delete(e),n}let nd=()=>location.protocol+"//"+location.host;function Np(e,n){const{pathname:l,search:t,hash:a}=n,r=e.indexOf("#");if(r>-1){let i=a.includes(e.slice(r))?e.slice(r).length:1,p=a.slice(i);return p[0]!=="/"&&(p="/"+p),gc(p,"")}return gc(l,e)+t+a}function ld(e,n,l,t){let a=[],r=[],c=null;const i=({state:h})=>{const f=Np(e,location),d=l.value,g=n.value;let C=0;if(h){if(l.value=f,n.value=h,c&&c===d){c=null;return}C=g?h.position-g.position:0}else t(f);a.forEach(b=>{b(l.value,d,{delta:C,type:Kl.pop,direction:C?C>0?$l.forward:$l.back:$l.unknown})})};function p(){c=l.value}function y(h){a.push(h);const f=()=>{const d=a.indexOf(h);d>-1&&a.splice(d,1)};return r.push(f),f}function u(){const{history:h}=window;!h.state||h.replaceState(Fs({},h.state,{scroll:lt()}),"")}function A(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:p,listen:y,destroy:A}}function bc(e,n,l,t=!1,a=!1){return{back:e,current:n,forward:l,replaced:t,position:window.history.length,scroll:a?lt():null}}function od(e){const{history:n,location:l}=window,t={value:Np(e,l)},a={value:n.state};a.value||r(t.value,{back:null,current:t.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(p,y,u){const A=e.indexOf("#"),h=A>-1?(l.host&&document.querySelector("base")?e:e.slice(A))+p:nd()+e+p;try{n[u?"replaceState":"pushState"](y,"",h),a.value=y}catch(f){console.error(f),l[u?"replace":"assign"](h)}}function c(p,y){const u=Fs({},n.state,bc(a.value.back,p,a.value.forward,!0),y,{position:a.value.position});r(p,u,!0),t.value=p}function i(p,y){const u=Fs({},a.value,n.state,{forward:p,scroll:lt()});r(u.current,u,!0);const A=Fs({},bc(t.value,p,null),{position:u.position+1},y);r(p,A,!1),t.value=p}return{location:t,state:a,push:i,replace:c}}function td(e){e=Yh(e);const n=od(e),l=ld(e,n.state,n.location,n.replace);function t(r,c=!0){c||l.pauseListeners(),history.go(r)}const a=Fs({location:"",base:e,go:t,createHref:Qh.bind(null,e)},n,l);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function ad(e){return typeof e=="string"||e&&typeof e=="object"}function Up(e){return typeof e=="string"||typeof e=="symbol"}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hp=Symbol("");var _c;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_c||(_c={}));function al(e,n){return Fs(new Error,{type:e,[Hp]:!0},n)}function Ke(e,n){return e instanceof Error&&Hp in e&&(n==null||!!(e.type&n))}const Ec="[^/]+?",rd={sensitive:!1,strict:!1,start:!0,end:!0},cd=/[.+*?^${}()[\]/\\]/g;function id(e,n){const l=Fs({},rd,n),t=[];let a=l.start?"^":"";const r=[];for(const y of e){const u=y.length?[]:[90];l.strict&&!y.length&&(a+="/");for(let A=0;A<y.length;A++){const h=y[A];let f=40+(l.sensitive?.25:0);if(h.type===0)A||(a+="/"),a+=h.value.replace(cd,"\\$&"),f+=40;else if(h.type===1){const{value:d,repeatable:g,optional:C,regexp:b}=h;r.push({name:d,repeatable:g,optional:C});const E=b||Ec;if(E!==Ec){f+=10;try{new RegExp(`(${E})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${d}" (${E}): `+w.message)}}let v=g?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;A||(v=C&&y.length<2?`(?:/${v})`:"/"+v),C&&(v+="?"),a+=v,f+=20,C&&(f+=-8),g&&(f+=-20),E===".*"&&(f+=-50)}u.push(f)}t.push(u)}if(l.strict&&l.end){const y=t.length-1;t[y][t[y].length-1]+=.7000000000000001}l.strict||(a+="/?"),l.end?a+="$":l.strict&&(a+="(?:/|$)");const c=new RegExp(a,l.sensitive?"":"i");function i(y){const u=y.match(c),A={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",d=r[h-1];A[d.name]=f&&d.repeatable?f.split("/"):f}return A}function p(y){let u="",A=!1;for(const h of e){(!A||!u.endsWith("/"))&&(u+="/"),A=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:d,repeatable:g,optional:C}=f,b=d in y?y[d]:"";if(Re(b)&&!g)throw new Error(`Provided param "${d}" is an array but it is not repeatable (* or + modifiers)`);const E=Re(b)?b.join("/"):b;if(!E)if(C)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):A=!0);else throw new Error(`Missing required param "${d}"`);u+=E}}return u||"/"}return{re:c,score:t,keys:r,parse:i,stringify:p}}function pd(e,n){let l=0;for(;l<e.length&&l<n.length;){const t=n[l]-e[l];if(t)return t;l++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function yd(e,n){let l=0;const t=e.score,a=n.score;for(;l<t.length&&l<a.length;){const r=pd(t[l],a[l]);if(r)return r;l++}if(Math.abs(a.length-t.length)===1){if(kc(t))return 1;if(kc(a))return-1}return a.length-t.length}function kc(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const ud={type:0,value:""},Ad=/[a-zA-Z0-9_]/;function hd(e){if(!e)return[[]];if(e==="/")return[[ud]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(f){throw new Error(`ERR (${l})/"${y}": ${f}`)}let l=0,t=l;const a=[];let r;function c(){r&&a.push(r),r=[]}let i=0,p,y="",u="";function A(){!y||(l===0?r.push({type:0,value:y}):l===1||l===2||l===3?(r.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:y,regexp:u,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),y="")}function h(){y+=p}for(;i<e.length;){if(p=e[i++],p==="\\"&&l!==2){t=l,l=4;continue}switch(l){case 0:p==="/"?(y&&A(),c()):p===":"?(A(),l=1):h();break;case 4:h(),l=t;break;case 1:p==="("?l=2:Ad.test(p)?h():(A(),l=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+p:l=3:u+=p;break;case 3:A(),l=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,u="";break;default:n("Unknown state");break}}return l===2&&n(`Unfinished custom RegExp for param "${y}"`),A(),c(),a}function dd(e,n,l){const t=id(hd(e.path),l),a=Fs(t,{record:e,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function fd(e,n){const l=[],t=new Map;n=xc({strict:!1,end:!0,sensitive:!1},n);function a(u){return t.get(u)}function r(u,A,h){const f=!h,d=Bd(u);d.aliasOf=h&&h.record;const g=xc(n,u),C=[d];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of v)C.push(Fs({},d,{components:h?h.record.components:d.components,path:w,aliasOf:h?h.record:d}))}let b,E;for(const v of C){const{path:w}=v;if(A&&w[0]!=="/"){const R=A.record.path,L=R[R.length-1]==="/"?"":"/";v.path=A.record.path+(w&&L+w)}if(b=dd(v,A,g),h?h.alias.push(b):(E=E||b,E!==b&&E.alias.push(b),f&&u.name&&!wc(b)&&c(u.name)),d.children){const R=d.children;for(let L=0;L<R.length;L++)r(R[L],b,h&&h.children[L])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&p(b)}return E?()=>{c(E)}:Tl}function c(u){if(Up(u)){const A=t.get(u);A&&(t.delete(u),l.splice(l.indexOf(A),1),A.children.forEach(c),A.alias.forEach(c))}else{const A=l.indexOf(u);A>-1&&(l.splice(A,1),u.record.name&&t.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function i(){return l}function p(u){let A=0;for(;A<l.length&&yd(u,l[A])>=0&&(u.record.path!==l[A].record.path||!zp(u,l[A]));)A++;l.splice(A,0,u),u.record.name&&!wc(u)&&t.set(u.record.name,u)}function y(u,A){let h,f={},d,g;if("name"in u&&u.name){if(h=t.get(u.name),!h)throw al(1,{location:u});g=h.record.name,f=Fs(Fc(A.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Fc(u.params,h.keys.map(E=>E.name))),d=h.stringify(f)}else if("path"in u)d=u.path,h=l.find(E=>E.re.test(d)),h&&(f=h.parse(d),g=h.record.name);else{if(h=A.name?t.get(A.name):l.find(E=>E.re.test(A.path)),!h)throw al(1,{location:u,currentLocation:A});g=h.record.name,f=Fs({},A.params,u.params),d=h.stringify(f)}const C=[];let b=h;for(;b;)C.unshift(b.record),b=b.parent;return{name:g,path:d,params:f,matched:C,meta:Dd(C)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:y,removeRoute:c,getRoutes:i,getRecordMatcher:a}}function Fc(e,n){const l={};for(const t of n)t in e&&(l[t]=e[t]);return l}function Bd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:md(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function md(e){const n={},l=e.props||!1;if("component"in e)n.default=l;else for(const t in e.components)n[t]=typeof l=="boolean"?l:l[t];return n}function wc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dd(e){return e.reduce((n,l)=>Fs(n,l.meta),{})}function xc(e,n){const l={};for(const t in e)l[t]=t in n?n[t]:e[t];return l}function zp(e,n){return n.children.some(l=>l===e||zp(e,l))}const Vp=/#/g,gd=/&/g,Cd=/\//g,vd=/=/g,bd=/\?/g,Wp=/\+/g,_d=/%5B/g,Ed=/%5D/g,Kp=/%5E/g,kd=/%60/g,qp=/%7B/g,Fd=/%7C/g,Gp=/%7D/g,wd=/%20/g;function qa(e){return encodeURI(""+e).replace(Fd,"|").replace(_d,"[").replace(Ed,"]")}function xd(e){return qa(e).replace(qp,"{").replace(Gp,"}").replace(Kp,"^")}function na(e){return qa(e).replace(Wp,"%2B").replace(wd,"+").replace(Vp,"%23").replace(gd,"%26").replace(kd,"`").replace(qp,"{").replace(Gp,"}").replace(Kp,"^")}function Sd(e){return na(e).replace(vd,"%3D")}function Od(e){return qa(e).replace(Vp,"%23").replace(bd,"%3F")}function Td(e){return e==null?"":Od(e).replace(Cd,"%2F")}function Po(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function $d(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<t.length;++a){const r=t[a].replace(Wp," "),c=r.indexOf("="),i=Po(c<0?r:r.slice(0,c)),p=c<0?null:Po(r.slice(c+1));if(i in n){let y=n[i];Re(y)||(y=n[i]=[y]),y.push(p)}else n[i]=p}return n}function Sc(e){let n="";for(let l in e){const t=e[l];if(l=Sd(l),t==null){t!==void 0&&(n+=(n.length?"&":"")+l);continue}(Re(t)?t.map(r=>r&&na(r)):[t&&na(t)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+l,r!=null&&(n+="="+r))})}return n}function Pd(e){const n={};for(const l in e){const t=e[l];t!==void 0&&(n[l]=Re(t)?t.map(a=>a==null?null:""+a):t==null?t:""+t)}return n}const Rd=Symbol(""),Oc=Symbol(""),Ga=Symbol(""),Yp=Symbol(""),la=Symbol("");function ml(){let e=[];function n(t){return e.push(t),()=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)}}function l(){e=[]}return{add:n,list:()=>e,reset:l}}function on(e,n,l,t,a){const r=t&&(t.enterCallbacks[a]=t.enterCallbacks[a]||[]);return()=>new Promise((c,i)=>{const p=A=>{A===!1?i(al(4,{from:l,to:n})):A instanceof Error?i(A):ad(A)?i(al(2,{from:n,to:A})):(r&&t.enterCallbacks[a]===r&&typeof A=="function"&&r.push(A),c())},y=e.call(t&&t.instances[a],n,l,p);let u=Promise.resolve(y);e.length<3&&(u=u.then(p)),u.catch(A=>i(A))})}function Ct(e,n,l,t){const a=[];for(const r of e)for(const c in r.components){let i=r.components[c];if(!(n!=="beforeRouteEnter"&&!r.instances[c]))if(Ld(i)){const y=(i.__vccOpts||i)[n];y&&a.push(on(y,l,t,r,c))}else{let p=i();a.push(()=>p.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${r.path}"`));const u=Hh(y)?y.default:y;r.components[c]=u;const h=(u.__vccOpts||u)[n];return h&&on(h,l,t,r,c)()}))}}return a}function Ld(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tc(e){const n=U(Ga),l=U(Yp),t=S(()=>n.resolve(_(e.to))),a=S(()=>{const{matched:p}=t.value,{length:y}=p,u=p[y-1],A=l.matched;if(!u||!A.length)return-1;const h=A.findIndex(tl.bind(null,u));if(h>-1)return h;const f=$c(p[y-2]);return y>1&&$c(u)===f&&A[A.length-1].path!==f?A.findIndex(tl.bind(null,p[y-2])):h}),r=S(()=>a.value>-1&&Nd(l.params,t.value.params)),c=S(()=>a.value>-1&&a.value===l.matched.length-1&&Ip(l.params,t.value.params));function i(p={}){return Id(p)?n[_(e.replace)?"replace":"push"](_(e.to)).catch(Tl):Promise.resolve()}return{route:t,href:S(()=>t.value.href),isActive:r,isExactActive:c,navigate:i}}const jd=Es({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tc,setup(e,{slots:n}){const l=Rs(Tc(e)),{options:t}=U(Ga),a=S(()=>({[Pc(e.activeClass,t.linkActiveClass,"router-link-active")]:l.isActive,[Pc(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:l.isExactActive}));return()=>{const r=n.default&&n.default(l);return e.custom?r:Be("a",{"aria-current":l.isExactActive?e.ariaCurrentValue:null,href:l.href,onClick:l.navigate,class:a.value},r)}}}),Md=jd;function Id(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Nd(e,n){for(const l in n){const t=n[l],a=e[l];if(typeof t=="string"){if(t!==a)return!1}else if(!Re(a)||a.length!==t.length||t.some((r,c)=>r!==a[c]))return!1}return!0}function $c(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pc=(e,n,l)=>e!=null?e:n!=null?n:l,Ud=Es({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:l}){const t=U(la),a=S(()=>e.route||t.value),r=U(Oc,0),c=S(()=>{let y=_(r);const{matched:u}=a.value;let A;for(;(A=u[y])&&!A.components;)y++;return y}),i=S(()=>a.value.matched[c.value]);fe(Oc,S(()=>c.value+1)),fe(Rd,i),fe(la,a);const p=V();return As(()=>[p.value,i.value,e.name],([y,u,A],[h,f,d])=>{u&&(u.instances[A]=y,f&&f!==u&&y&&y===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),y&&u&&(!f||!tl(u,f)||!h)&&(u.enterCallbacks[A]||[]).forEach(g=>g(y))},{flush:"post"}),()=>{const y=a.value,u=e.name,A=i.value,h=A&&A.components[u];if(!h)return Rc(l.default,{Component:h,route:y});const f=A.props[u],d=f?f===!0?y.params:typeof f=="function"?f(y):f:null,C=Be(h,Fs({},d,n,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(A.instances[u]=null)},ref:p}));return Rc(l.default,{Component:C,route:y})||C}}});function Rc(e,n){if(!e)return null;const l=e(n);return l.length===1?l[0]:l}const Hd=Ud;function zd(e){const n=fd(e.routes,e),l=e.parseQuery||$d,t=e.stringifyQuery||Sc,a=e.history,r=ml(),c=ml(),i=ml(),p=Ve(nn);let y=nn;Kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dt.bind(null,O=>""+O),A=Dt.bind(null,Td),h=Dt.bind(null,Po);function f(O,W){let z,X;return Up(O)?(z=n.getRecordMatcher(O),X=W):X=O,n.addRoute(X,z)}function d(O){const W=n.getRecordMatcher(O);W&&n.removeRoute(W)}function g(){return n.getRoutes().map(O=>O.record)}function C(O){return!!n.getRecordMatcher(O)}function b(O,W){if(W=Fs({},W||p.value),typeof O=="string"){const B=gt(l,O,W.path),m=n.resolve({path:B.path},W),k=a.createHref(B.fullPath);return Fs(B,m,{params:h(m.params),hash:Po(B.hash),redirectedFrom:void 0,href:k})}let z;if("path"in O)z=Fs({},O,{path:gt(l,O.path,W.path).path});else{const B=Fs({},O.params);for(const m in B)B[m]==null&&delete B[m];z=Fs({},O,{params:A(O.params)}),W.params=A(W.params)}const X=n.resolve(z,W),fs=O.hash||"";X.params=u(h(X.params));const Cs=Wh(t,Fs({},O,{hash:xd(fs),path:X.path})),as=a.createHref(Cs);return Fs({fullPath:Cs,hash:fs,query:t===Sc?Pd(O.query):O.query||{}},X,{redirectedFrom:void 0,href:as})}function E(O){return typeof O=="string"?gt(l,O,p.value.path):Fs({},O)}function v(O,W){if(y!==O)return al(8,{from:W,to:O})}function w(O){return I(O)}function R(O){return w(Fs(E(O),{replace:!0}))}function L(O){const W=O.matched[O.matched.length-1];if(W&&W.redirect){const{redirect:z}=W;let X=typeof z=="function"?z(O):z;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=E(X):{path:X},X.params={}),Fs({query:O.query,hash:O.hash,params:"path"in X?{}:O.params},X)}}function I(O,W){const z=y=b(O),X=p.value,fs=O.state,Cs=O.force,as=O.replace===!0,B=L(z);if(B)return I(Fs(E(B),{state:typeof B=="object"?Fs({},fs,B.state):fs,force:Cs,replace:as}),W||z);const m=z;m.redirectedFrom=W;let k;return!Cs&&Kh(t,X,z)&&(k=al(16,{to:m,from:X}),ks(X,X,!0,!1)),(k?Promise.resolve(k):ts(m,X)).catch(x=>Ke(x)?Ke(x,2)?x:ds(x):Y(x,m,X)).then(x=>{if(x){if(Ke(x,2))return I(Fs({replace:as},E(x.to),{state:typeof x.to=="object"?Fs({},fs,x.to.state):fs,force:Cs}),W||m)}else x=Ds(m,X,!0,as,fs);return us(m,X,x),x})}function J(O,W){const z=v(O,W);return z?Promise.reject(z):Promise.resolve()}function ts(O,W){let z;const[X,fs,Cs]=Vd(O,W);z=Ct(X.reverse(),"beforeRouteLeave",O,W);for(const B of X)B.leaveGuards.forEach(m=>{z.push(on(m,O,W))});const as=J.bind(null,O,W);return z.push(as),Un(z).then(()=>{z=[];for(const B of r.list())z.push(on(B,O,W));return z.push(as),Un(z)}).then(()=>{z=Ct(fs,"beforeRouteUpdate",O,W);for(const B of fs)B.updateGuards.forEach(m=>{z.push(on(m,O,W))});return z.push(as),Un(z)}).then(()=>{z=[];for(const B of O.matched)if(B.beforeEnter&&!W.matched.includes(B))if(Re(B.beforeEnter))for(const m of B.beforeEnter)z.push(on(m,O,W));else z.push(on(B.beforeEnter,O,W));return z.push(as),Un(z)}).then(()=>(O.matched.forEach(B=>B.enterCallbacks={}),z=Ct(Cs,"beforeRouteEnter",O,W),z.push(as),Un(z))).then(()=>{z=[];for(const B of c.list())z.push(on(B,O,W));return z.push(as),Un(z)}).catch(B=>Ke(B,8)?B:Promise.reject(B))}function us(O,W,z){for(const X of i.list())X(O,W,z)}function Ds(O,W,z,X,fs){const Cs=v(O,W);if(Cs)return Cs;const as=W===nn,B=Kn?history.state:{};z&&(X||as?a.replace(O.fullPath,Fs({scroll:as&&B&&B.scroll},fs)):a.push(O.fullPath,fs)),p.value=O,ks(O,W,z,as),ds()}let Gs;function Ws(){Gs||(Gs=a.listen((O,W,z)=>{if(!In.listening)return;const X=b(O),fs=L(X);if(fs){I(Fs(fs,{replace:!0}),X).catch(Tl);return}y=X;const Cs=p.value;Kn&&sd(vc(Cs.fullPath,z.delta),lt()),ts(X,Cs).catch(as=>Ke(as,12)?as:Ke(as,2)?(I(as.to,X).then(B=>{Ke(B,20)&&!z.delta&&z.type===Kl.pop&&a.go(-1,!1)}).catch(Tl),Promise.reject()):(z.delta&&a.go(-z.delta,!1),Y(as,X,Cs))).then(as=>{as=as||Ds(X,Cs,!1),as&&(z.delta&&!Ke(as,8)?a.go(-z.delta,!1):z.type===Kl.pop&&Ke(as,20)&&a.go(-1,!1)),us(X,Cs,as)}).catch(Tl)}))}let Is=ml(),Ts=ml(),$s;function Y(O,W,z){ds(O);const X=Ts.list();return X.length?X.forEach(fs=>fs(O,W,z)):console.error(O),Promise.reject(O)}function ns(){return $s&&p.value!==nn?Promise.resolve():new Promise((O,W)=>{Is.add([O,W])})}function ds(O){return $s||($s=!O,Ws(),Is.list().forEach(([W,z])=>O?z(O):W()),Is.reset()),O}function ks(O,W,z,X){const{scrollBehavior:fs}=e;if(!Kn||!fs)return Promise.resolve();const Cs=!z&&ed(vc(O.fullPath,0))||(X||!z)&&history.state&&history.state.scroll||null;return ee().then(()=>fs(O,W,Cs)).then(as=>as&&Xh(as)).catch(as=>Y(as,O,W))}const te=O=>a.go(O);let Hs;const sn=new Set,In={currentRoute:p,listening:!0,addRoute:f,removeRoute:d,hasRoute:C,getRoutes:g,resolve:b,options:e,push:w,replace:R,go:te,back:()=>te(-1),forward:()=>te(1),beforeEach:r.add,beforeResolve:c.add,afterEach:i.add,onError:Ts.add,isReady:ns,install(O){const W=this;O.component("RouterLink",Md),O.component("RouterView",Hd),O.config.globalProperties.$router=W,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>_(p)}),Kn&&!Hs&&p.value===nn&&(Hs=!0,w(a.location).catch(fs=>{}));const z={};for(const fs in nn)z[fs]=S(()=>p.value[fs]);O.provide(Ga,W),O.provide(Yp,Rs(z)),O.provide(la,p);const X=O.unmount;sn.add(O),O.unmount=function(){sn.delete(O),sn.size<1&&(y=nn,Gs&&Gs(),Gs=null,p.value=nn,Hs=!1,$s=!1),X()}}};return In}function Un(e){return e.reduce((n,l)=>n.then(()=>l()),Promise.resolve())}function Vd(e,n){const l=[],t=[],a=[],r=Math.max(n.matched.length,e.matched.length);for(let c=0;c<r;c++){const i=n.matched[c];i&&(e.matched.find(y=>tl(y,i))?t.push(i):l.push(i));const p=e.matched[c];p&&(n.matched.find(y=>tl(y,p))||a.push(p))}return[l,t,a]}const vt=V(!1),Pl=V(!1),qn=V(!1),Wd=V(!0),oa=nh({xs:460,...QA}),On=Uh(),Zp=xh(),Kd=S(()=>On.height.value-On.width.value/cn>180),Qp=kh(Pe?document.body:null),sl=ZA(),qd=S(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=sl.value)==null?void 0:e.tagName)||"")||((n=sl.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Gd=S(()=>{var e;return["BUTTON","A"].includes(((e=sl.value)==null?void 0:e.tagName)||"")});Le("slidev-camera","default");Le("slidev-mic","default");const go=Le("slidev-scale",0),re=Le("slidev-show-overview",!1),bt=Le("slidev-presenter-cursor",!0),Lc=Le("slidev-show-editor",!1);Le("slidev-editor-width",Pe?window.innerWidth*.4:100);const Jp=xp(re);function jc(e,n,l,t=a=>a){return e*t(.5-n*(.5-l))}function Yd(e){return[-e[0],-e[1]]}function ke(e,n){return[e[0]+n[0],e[1]+n[1]]}function ve(e,n){return[e[0]-n[0],e[1]-n[1]]}function Ee(e,n){return[e[0]*n,e[1]*n]}function Zd(e,n){return[e[0]/n,e[1]/n]}function Dl(e){return[e[1],-e[0]]}function Mc(e,n){return e[0]*n[0]+e[1]*n[1]}function Qd(e,n){return e[0]===n[0]&&e[1]===n[1]}function Jd(e){return Math.hypot(e[0],e[1])}function Xd(e){return e[0]*e[0]+e[1]*e[1]}function Ic(e,n){return Xd(ve(e,n))}function Xp(e){return Zd(e,Jd(e))}function sf(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function gl(e,n,l){let t=Math.sin(l),a=Math.cos(l),r=e[0]-n[0],c=e[1]-n[1],i=r*a-c*t,p=r*t+c*a;return[i+n[0],p+n[1]]}function ta(e,n,l){return ke(e,Ee(ve(n,e),l))}function Nc(e,n,l){return ke(e,Ee(n,l))}var{min:Hn,PI:ef}=Math,Uc=.275,Cl=ef+1e-4;function nf(e,n={}){let{size:l=16,smoothing:t=.5,thinning:a=.5,simulatePressure:r=!0,easing:c=Y=>Y,start:i={},end:p={},last:y=!1}=n,{cap:u=!0,easing:A=Y=>Y*(2-Y)}=i,{cap:h=!0,easing:f=Y=>--Y*Y*Y+1}=p;if(e.length===0||l<=0)return[];let d=e[e.length-1].runningLength,g=i.taper===!1?0:i.taper===!0?Math.max(l,d):i.taper,C=p.taper===!1?0:p.taper===!0?Math.max(l,d):p.taper,b=Math.pow(l*t,2),E=[],v=[],w=e.slice(0,10).reduce((Y,ns)=>{let ds=ns.pressure;if(r){let ks=Hn(1,ns.distance/l),te=Hn(1,1-ks);ds=Hn(1,Y+(te-Y)*(ks*Uc))}return(Y+ds)/2},e[0].pressure),R=jc(l,a,e[e.length-1].pressure,c),L,I=e[0].vector,J=e[0].point,ts=J,us=J,Ds=ts,Gs=!1;for(let Y=0;Y<e.length;Y++){let{pressure:ns}=e[Y],{point:ds,vector:ks,distance:te,runningLength:Hs}=e[Y];if(Y<e.length-1&&d-Hs<3)continue;if(a){if(r){let Cs=Hn(1,te/l),as=Hn(1,1-Cs);ns=Hn(1,w+(as-w)*(Cs*Uc))}R=jc(l,a,ns,c)}else R=l/2;L===void 0&&(L=R);let sn=Hs<g?A(Hs/g):1,In=d-Hs<C?f((d-Hs)/C):1;R=Math.max(.01,R*Math.min(sn,In));let O=(Y<e.length-1?e[Y+1]:e[Y]).vector,W=Y<e.length-1?Mc(ks,O):1,z=Mc(ks,I)<0&&!Gs,X=W!==null&&W<0;if(z||X){let Cs=Ee(Dl(I),R);for(let as=1/13,B=0;B<=1;B+=as)us=gl(ve(ds,Cs),ds,Cl*B),E.push(us),Ds=gl(ke(ds,Cs),ds,Cl*-B),v.push(Ds);J=us,ts=Ds,X&&(Gs=!0);continue}if(Gs=!1,Y===e.length-1){let Cs=Ee(Dl(ks),R);E.push(ve(ds,Cs)),v.push(ke(ds,Cs));continue}let fs=Ee(Dl(ta(O,ks,W)),R);us=ve(ds,fs),(Y<=1||Ic(J,us)>b)&&(E.push(us),J=us),Ds=ke(ds,fs),(Y<=1||Ic(ts,Ds)>b)&&(v.push(Ds),ts=Ds),w=ns,I=ks}let Ws=e[0].point.slice(0,2),Is=e.length>1?e[e.length-1].point.slice(0,2):ke(e[0].point,[1,1]),Ts=[],$s=[];if(e.length===1){if(!(g||C)||y){let Y=Nc(Ws,Xp(Dl(ve(Ws,Is))),-(L||R)),ns=[];for(let ds=1/13,ks=ds;ks<=1;ks+=ds)ns.push(gl(Y,Ws,Cl*2*ks));return ns}}else{if(!(g||C&&e.length===1))if(u)for(let ns=1/13,ds=ns;ds<=1;ds+=ns){let ks=gl(v[0],Ws,Cl*ds);Ts.push(ks)}else{let ns=ve(E[0],v[0]),ds=Ee(ns,.5),ks=Ee(ns,.51);Ts.push(ve(Ws,ds),ve(Ws,ks),ke(Ws,ks),ke(Ws,ds))}let Y=Dl(Yd(e[e.length-1].vector));if(C||g&&e.length===1)$s.push(Is);else if(h){let ns=Nc(Is,Y,R);for(let ds=1/29,ks=ds;ks<1;ks+=ds)$s.push(gl(ns,Is,Cl*3*ks))}else $s.push(ke(Is,Ee(Y,R)),ke(Is,Ee(Y,R*.99)),ve(Is,Ee(Y,R*.99)),ve(Is,Ee(Y,R)))}return E.concat($s,v.reverse(),Ts)}function lf(e,n={}){var l;let{streamline:t=.5,size:a=16,last:r=!1}=n;if(e.length===0)return[];let c=.15+(1-t)*.85,i=Array.isArray(e[0])?e:e.map(({x:f,y:d,pressure:g=.5})=>[f,d,g]);if(i.length===2){let f=i[1];i=i.slice(0,-1);for(let d=1;d<5;d++)i.push(ta(i[0],f,d/4))}i.length===1&&(i=[...i,[...ke(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,A=p[0],h=i.length-1;for(let f=1;f<i.length;f++){let d=r&&f===h?i[f].slice(0,2):ta(A.point,i[f],c);if(Qd(A.point,d))continue;let g=sf(d,A.point);if(u+=g,f<h&&!y){if(u<a)continue;y=!0}A={point:d,pressure:i[f][2]>=0?i[f][2]:.5,vector:Xp(ve(A.point,d)),distance:g,runningLength:u},p.push(A)}return p[0].vector=((l=p[1])==null?void 0:l.vector)||[0,0],p}function of(e,n={}){return nf(lf(e,n),n)}var tf=()=>({events:{},emit(e,...n){let l=this.events[e]||[];for(let t=0,a=l.length;t<a;t++)l[t](...n)},on(e,n){var l;return(l=this.events[e])!=null&&l.push(n)||(this.events[e]=[n]),()=>{var t;this.events[e]=(t=this.events[e])==null?void 0:t.filter(a=>n!==a)}}});function Ro(e,n){return e-n}function af(e){return e<0?-1:1}function Lo(e){return[Math.abs(e),af(e)]}function sy(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var rf=2,Ye=rf,ul=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var a;var n;const l=this.drauu.el,t=(a=this.drauu.options.coordinateScale)!=null?a:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*t,y:(e.pageY-r.top)*t,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const c=r.matrixTransform((n=l.getScreenCTM())==null?void 0:n.inverse());return{x:c.x*t,y:c.y*t,pressure:e.pressure}}}createElement(e,n){var a;const l=document.createElementNS("http://www.w3.org/2000/svg",e),t=n?{...this.brush,...n}:this.brush;return l.setAttribute("fill",(a=t.fill)!=null?a:"transparent"),l.setAttribute("stroke",t.color),l.setAttribute("stroke-width",t.size.toString()),l.setAttribute("stroke-linecap","round"),t.dasharray&&l.setAttribute("stroke-dasharray",t.dasharray),l}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(Ye))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},cf=class extends ul{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=of(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const l=n.reduce((t,[a,r],c,i)=>{const[p,y]=i[(c+1)%i.length];return t.push(a,r,(a+p)/2,(r+y)/2),t},["M",...n[0],"Q"]);return l.push("Z"),l.map(t=>typeof t=="number"?t.toFixed(2):t).join(" ")}},pf=class extends ul{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,l]=Lo(e.x-this.start.x),[t,a]=Lo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,t);n=r,t=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",t);else{const[r,c]=[this.start.x,this.start.x+n*l].sort(Ro),[i,p]=[this.start.y,this.start.y+t*a].sort(Ro);this.attr("cx",(r+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-r)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function ey(e,n){const l=document.createElementNS("http://www.w3.org/2000/svg","defs"),t=document.createElementNS("http://www.w3.org/2000/svg","marker"),a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill",n),t.setAttribute("id",e),t.setAttribute("viewBox","0 -5 10 10"),t.setAttribute("refX","5"),t.setAttribute("refY","0"),t.setAttribute("markerWidth","4"),t.setAttribute("markerHeight","4"),t.setAttribute("orient","auto"),a.setAttribute("d","M0,-5L10,0L0,5"),t.appendChild(a),l.appendChild(t),l}var yf=class extends ul{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=sy(),l=document.createElementNS("http://www.w3.org/2000/svg","g");return l.append(ey(n,this.brush.color)),l.append(this.el),this.attr("marker-end",`url(#${n})`),l}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:l}=e;if(this.shiftPressed){const t=e.x-this.start.x,a=e.y-this.start.y;if(a!==0){let r=t/a;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+a*r,l=this.start.y+a):(n=this.start.x+t,l=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-l),this.attr("x2",n),this.attr("y2",l)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",l)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},uf=class extends ul{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,l]=Lo(e.x-this.start.x),[t,a]=Lo(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,t);n=r,t=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-t),this.attr("width",n*2),this.attr("height",t*2);else{const[r,c]=[this.start.x,this.start.x+n*l].sort(Ro),[i,p]=[this.start.y,this.start.y+t*a].sort(Ro);this.attr("x",r),this.attr("y",i),this.attr("width",c-r),this.attr("height",p-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Af(e,n){const l=e.x-n.x,t=e.y-n.y;return l*l+t*t}function hf(e,n,l){let t=n.x,a=n.y,r=l.x-t,c=l.y-a;if(r!==0||c!==0){const i=((e.x-t)*r+(e.y-a)*c)/(r*r+c*c);i>1?(t=l.x,a=l.y):i>0&&(t+=r*i,a+=c*i)}return r=e.x-t,c=e.y-a,r*r+c*c}function df(e,n){let l=e[0];const t=[l];let a;for(let r=1,c=e.length;r<c;r++)a=e[r],Af(a,l)>n&&(t.push(a),l=a);return l!==a&&a&&t.push(a),t}function aa(e,n,l,t,a){let r=t,c=0;for(let i=n+1;i<l;i++){const p=hf(e[i],e[n],e[l]);p>r&&(c=i,r=p)}r>t&&(c-n>1&&aa(e,n,c,t,a),a.push(e[c]),l-c>1&&aa(e,c,l,t,a))}function ff(e,n){const l=e.length-1,t=[e[0]];return aa(e,0,l,n,t),t.push(e[l]),t}function Hc(e,n,l=!1){if(e.length<=2)return e;const t=n!==void 0?n*n:1;return e=l?e:df(e,t),e=ff(e,t),e}var Bf=class extends ul{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=sy();const n=ey(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Hc(this.points,1,!0),this.count=0),this.attr("d",Vc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Vc(Hc(this.points,1,!0))),!e.getTotalLength()))}};function mf(e,n){const l=n.x-e.x,t=n.y-e.y;return{length:Math.sqrt(l**2+t**2),angle:Math.atan2(t,l)}}function zc(e,n,l,t){const a=n||e,r=l||e,c=.2,i=mf(a,r),p=i.angle+(t?Math.PI:0),y=i.length*c,u=e.x+Math.cos(p)*y,A=e.y+Math.sin(p)*y;return{x:u,y:A}}function Df(e,n,l){const t=zc(l[n-1],l[n-2],e),a=zc(e,l[n-1],l[n+1],!0);return`C ${t.x.toFixed(Ye)},${t.y.toFixed(Ye)} ${a.x.toFixed(Ye)},${a.y.toFixed(Ye)} ${e.x.toFixed(Ye)},${e.y.toFixed(Ye)}`}function Vc(e){return e.reduce((n,l,t,a)=>t===0?`M ${l.x.toFixed(Ye)},${l.y.toFixed(Ye)}`:`${n} ${Df(l,t,a)}`,"")}var gf=class extends ul{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(l,t)=>{if(l&&l.length)for(let a=0;a<l.length;a++){const r=l[a];if(r.getTotalLength){const c=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=r.getPointAtLength(c*i/this.pathSubFactor),y=r.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:y.x,y1:p.y,y2:y.y,segment:i,element:t||r})}}else r.children&&n(r.children,r)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const l=this.pathFragments[n],t={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(l,t)&&(l.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,l)=>!e.includes(l))),e.length>0}lineLineIntersect(e,n){const l=e.x1,t=e.x2,a=n.x1,r=n.x2,c=e.y1,i=e.y2,p=n.y1,y=n.y2,u=(l-t)*(p-y)-(c-i)*(a-r),A=(l*i-c*t)*(a-r)-(l-t)*(a*y-p*r),h=(l*i-c*t)*(p-y)-(c-i)*(a*y-p*r),f=(d,g,C)=>d>=g&&d<=C?!0:d>=C&&d<=g;if(u===0)return!1;{const d={x:A/u,y:h/u};return f(d.x,l,t)&&f(d.y,c,i)&&f(d.x,a,r)&&f(d.y,p,y)}}};function Cf(e){return{draw:new Bf(e),stylus:new cf(e),line:new yf(e),rectangle:new uf(e),ellipse:new pf(e),eraseLine:new gf(e)}}var vf=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=tf(),this._models=Cf(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const l=this.resolveSelector(n)||this.el,t=this.eventStart.bind(this),a=this.eventMove.bind(this),r=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);l.addEventListener("pointerdown",t,{passive:!1}),window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{l.removeEventListener("pointerdown",t),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function bf(e){return new vf(e)}const ra=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],He=Le("slidev-drawing-enabled",!1),Sb=Le("slidev-drawing-pinned",!1),_f=V(!1),Ef=V(!1),kf=V(!1),ql=V(!1),Fn=q5(Le("slidev-drawing-brush",{color:ra[0],size:4,mode:"stylus"})),Wc=V("stylus"),ny=S(()=>bs.drawings.syncAll||Ne.value);let Gl=!1;const vl=S({get(){return Wc.value},set(e){Wc.value=e,e==="arrow"?(Fn.mode="line",Fn.arrowEnd=!0):(Fn.mode=e,Fn.arrowEnd=!1)}}),Ff=Rs({brush:Fn,acceptsInputTypes:S(()=>He.value?void 0:["pen"]),coordinateTransform:!1}),ce=qo(bf(Ff));function wf(){ce.clear(),ny.value&&jp(Vs.value,"")}function ly(){var e;Ef.value=ce.canRedo(),_f.value=ce.canUndo(),kf.value=!!((e=ce.el)!=null&&e.children.length)}function xf(e){Gl=!0;const n=$o[e||Vs.value];n!=null?ce.load(n):ce.clear(),Gl=!1}ce.on("changed",()=>{if(ly(),!Gl){const e=ce.dump(),n=Vs.value;($o[n]||"")!==e&&ny.value&&jp(n,ce.dump())}});zA(e=>{Gl=!0,e[Vs.value]!=null&&ce.load(e[Vs.value]||""),Gl=!1,ly()});ee(()=>{As(Vs,()=>{!ce.mounted||xf()},{immediate:!0})});ce.on("start",()=>ql.value=!0);ce.on("end",()=>ql.value=!1);window.addEventListener("keydown",e=>{if(!He.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let l=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?ce.redo():ce.undo():e.code==="Escape"?He.value=!1:e.code==="KeyL"&&n?vl.value="line":e.code==="KeyA"&&n?vl.value="arrow":e.code==="KeyS"&&n?vl.value="stylus":e.code==="KeyR"&&n?vl.value="rectangle":e.code==="KeyE"&&n?vl.value="ellipse":e.code==="KeyC"&&n?wf():e.code.startsWith("Digit")&&n&&+e.code[5]<=ra.length?Fn.color=ra[+e.code[5]-1]:l=!1,l&&(e.preventDefault(),e.stopPropagation())},!1);function Ks(...e){return S(()=>e.every(n=>Xs(n)))}function Ae(e){return S(()=>!Xs(e))}const Kc=uh(),_t=Le("slidev-color-schema","auto"),ca=S(()=>bs.colorSchema!=="auto"),Ya=S({get(){return ca.value?bs.colorSchema==="dark":_t.value==="auto"?Kc.value:_t.value==="dark"},set(e){ca.value||(_t.value=e===Kc.value?"auto":e?"dark":"light")}}),oy=xp(Ya);Pe&&As(Ya,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const Co=V(1),vo=S(()=>qs.length-1),me=V(0),Za=V(0);function Sf(){me.value>Co.value&&(me.value-=1)}function Of(){me.value<vo.value&&(me.value+=1)}function Tf(){if(me.value>Co.value){let e=me.value-Za.value;e<Co.value&&(e=Co.value),me.value=e}}function $f(){if(me.value<vo.value){let e=me.value+Za.value;e>vo.value&&(e=vo.value),me.value=e}}function Pf(){const{escape:e,space:n,shift:l,left:t,right:a,up:r,down:c,enter:i,d:p,g:y,o:u}=Zp;let A=[{name:"next_space",key:Ks(n,Ae(l)),fn:yn,autoRepeat:!0},{name:"prev_space",key:Ks(n,l),fn:un,autoRepeat:!0},{name:"next_right",key:Ks(a,Ae(l),Ae(re)),fn:yn,autoRepeat:!0},{name:"prev_left",key:Ks(t,Ae(l),Ae(re)),fn:un,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:yn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:un,autoRepeat:!0},{name:"next_down",key:Ks(c,Ae(re)),fn:Zl,autoRepeat:!0},{name:"prev_up",key:Ks(r,Ae(re)),fn:()=>Ql(!1),autoRepeat:!0},{name:"next_shift",key:Ks(a,l),fn:Zl,autoRepeat:!0},{name:"prev_shift",key:Ks(t,l),fn:()=>Ql(!1),autoRepeat:!0},{name:"toggle_dark",key:Ks(p,Ae(He)),fn:oy},{name:"toggle_overview",key:Ks(u,Ae(He)),fn:Jp},{name:"hide_overview",key:Ks(e,Ae(He)),fn:()=>re.value=!1},{name:"goto",key:Ks(y,Ae(He)),fn:()=>qn.value=!qn.value},{name:"next_overview",key:Ks(a,re),fn:Of},{name:"prev_overview",key:Ks(t,re),fn:Sf},{name:"up_overview",key:Ks(r,re),fn:Tf},{name:"down_overview",key:Ks(c,re),fn:$f},{name:"goto_from_overview",key:Ks(i,re),fn:()=>{rl(me.value),re.value=!1}}];const h=new Set(A.map(d=>d.name));if(A.filter(d=>d.name&&h.has(d.name)).length===0){const d=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(d),console.warn(d)}return A}const ty=Ks(Ae(qd),Ae(Gd),Wd);function Rf(e,n,l=!1){typeof e=="string"&&(e=Zp[e]);const t=Ks(e,ty);let a=0,r;const c=()=>{if(clearTimeout(r),!t.value){a=0;return}l&&(r=setTimeout(c,Math.max(1e3-a*250,150)),a++),n()};return As(t,c,{flush:"sync"})}function Lf(e,n){return YA(e,l=>{!ty.value||l.repeat||n()})}function jf(){const e=Pf();new Map(e.map(l=>[l.key,l])).forEach(l=>{l.fn&&Rf(l.key,l.fn,l.autoRepeat)}),Lf("f",()=>Qp.toggle())}const Mf={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},If=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Nf=[If];function Uf(e,n){return D(),F("svg",Mf,Nf)}const Hf={name:"carbon-close",render:Uf};function Qa(e){var l,t;const n=(t=(l=e==null?void 0:e.meta)==null?void 0:l.slide)==null?void 0:t.no;return n!=null?`slidev-page-${n}`:""}const ay=Es({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;U(G);const l=V(),t=Eh(l),a=S(()=>n.width?n.width:t.width.value),r=S(()=>n.width?n.width/cn:t.height.value);n.width&&pl(()=>{l.value&&(l.value.style.width=`${a.value}px`,l.value.style.height=`${r.value}px`)});const c=S(()=>a.value/r.value),i=S(()=>n.scale?n.scale:c.value<cn?a.value/pn:r.value*cn/pn),p=S(()=>({height:`${Ka}px`,width:`${pn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),y=S(()=>({"select-none":!bs.selectable,"slidev-code-line-numbers":bs.lineNumbers}));return fe(Pp,i),(u,A)=>(D(),F("div",{id:"slide-container",ref_key:"root",ref:l,class:Ls(_(y))},[s("div",{id:"slide-content",style:le(_(p))},[$e(u.$slots,"default")],4),$e(u.$slots,"controls")],2))}});const Ja=Es({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const l=Ue(e,"clicks",n),t=Ue(e,"clicksElements",n),a=Ue(e,"clicksDisabled",n),r=Ue(e,"clicksOrderMap",n);t.value.length=0,fe(SA,e.route),fe(OA,e.context),fe(Sl,l),fe(Ol,a),fe(bn,t),fe(Qt,r)},render(){var e,n;return this.$props.is?Be(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),zf=["innerHTML"],Vf=Es({__name:"DrawingPreview",props:{page:null},setup(e){return U(G),(n,l)=>_($o)[e.page]?(D(),F("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:_($o)[e.page]},null,8,zf)):ms("v-if",!0)}}),Wf={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Kf=["onClick"],qf=Es({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:n}){const l=e;U(G);const t=Ue(l,"modelValue",n);function a(){t.value=!1}function r(f){rl(f),a()}function c(f){return f===me.value}const i=oa.smaller("xs"),p=oa.smaller("sm"),y=4*16*2,u=2*16,A=S(()=>i.value?On.width.value-y:p.value?(On.width.value-y-u)/2:300),h=S(()=>Math.floor((On.width.value-y)/(A.value+u)));return pl(()=>{me.value=Vs.value,Za.value=h.value}),(f,d)=>{const g=Hf;return D(),F(ws,null,[Q(s("div",Wf,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:le(`grid-template-columns: repeat(auto-fit,minmax(${_(A)}px,1fr))`)},[(D(!0),F(ws,null,so(_(qs).slice(0,-1),(C,b)=>(D(),F("div",{key:C.path,class:"relative"},[s("div",{class:Ls(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(b+1)}]),onClick:E=>r(+C.path)},[(D(),q(ay,{key:C.path,width:_(A),"clicks-disabled":!0,class:"pointer-events-none"},{default:T(()=>[M(_(Ja),{is:C==null?void 0:C.component,"clicks-disabled":!0,class:Ls(_(Qa)(C)),route:C,context:"overview"},null,8,["is","class","route"]),M(Vf,{page:+C.path},null,8,["page"])]),_:2},1032,["width"]))],10,Kf),s("div",{class:"absolute top-0 opacity-50",style:le(`left: ${_(A)+5}px`)},Tn(b+1),5)]))),128))],4)],512),[[Ep,_(t)]]),_(t)?(D(),F("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:a},[M(g)])):ms("v-if",!0)],64)}}});const Gf="/talks/write-unmaintainable-code/assets/logo.b72bde5d.png",Yf={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Zf=Es({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const l=e;U(G);const t=Ue(l,"modelValue",n);function a(){t.value=!1}return(r,c)=>(D(),q(rp,null,[_(t)?(D(),F("div",Yf,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>a())}),s("div",{class:Ls(["m-auto rounded-md bg-main shadow",l.class]),"dark:border":"~ gray-400 opacity-10"},[$e(r.$slots,"default")],2)])):ms("v-if",!0)],1024))}}),Qf={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Jf=["innerHTML"],Xf=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:Gf,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),o("dev ")])])],-1),sB=Es({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const l=e;U(G);const t=Ue(l,"modelValue",n),a=S(()=>typeof bs.info=="string");return(r,c)=>(D(),q(Zf,{modelValue:_(t),"onUpdate:modelValue":c[0]||(c[0]=i=>xs(t)?t.value=i:null),class:"px-6 py-4"},{default:T(()=>[s("div",Qf,[_(a)?(D(),F("div",{key:0,class:"mb-4",innerHTML:_(bs).info},null,8,Jf)):ms("v-if",!0),Xf])]),_:1},8,["modelValue"]))}});const eB=["disabled","onKeydown"],nB=Es({__name:"Goto",setup(e){U(G);const n=V(),l=V(""),t=S(()=>{if(l.value.startsWith("/"))return!!qs.find(c=>c.path===l.value.substring(1));{const c=+l.value;return!isNaN(c)&&c>0&&c<=by.value}});function a(){t.value&&(l.value.startsWith("/")?rl(l.value.substring(1)):rl(+l.value)),r()}function r(){qn.value=!1}return As(qn,async c=>{var i,p;c?(await ee(),l.value="",(i=n.value)==null||i.focus()):(p=n.value)==null||p.blur()}),As(l,c=>{c.match(/^[^0-9/]/)&&(l.value=l.value.substring(1))}),(c,i)=>(D(),F("div",{id:"slidev-goto-dialog",class:Ls(["fixed right-5 bg-main transform transition-all",_(qn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Q(s("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=p=>l.value=p),type:"text",disabled:!_(qn),class:Ls(["outline-none bg-transparent",{"text-red-400":!_(t)&&l.value}]),placeholder:"Goto...",onKeydown:[Yr(a,["enter"]),Yr(r,["escape"])],onBlur:r},null,42,eB),[[$5,l.value]])],2))}}),lB=Es({__name:"Controls",setup(e){U(G);const n=Ve(),l=Ve();return(t,a)=>(D(),F(ws,null,[M(qf,{modelValue:_(re),"onUpdate:modelValue":a[0]||(a[0]=r=>xs(re)?re.value=r:null)},null,8,["modelValue"]),M(nB),_(n)?(D(),q(_(n),{key:0})):ms("v-if",!0),_(l)?(D(),q(_(l),{key:1,modelValue:_(vt),"onUpdate:modelValue":a[1]||(a[1]=r=>xs(vt)?vt.value=r:null)},null,8,["modelValue"])):ms("v-if",!0),_(bs).info?(D(),q(sB,{key:2,modelValue:_(Pl),"onUpdate:modelValue":a[2]||(a[2]=r=>xs(Pl)?Pl.value=r:null)},null,8,["modelValue"])):ms("v-if",!0)],64))}}),oB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tB=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),aB=[tB];function rB(e,n){return D(),F("svg",oB,aB)}const cB={name:"carbon-settings-adjust",render:rB},iB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pB=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),yB=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),uB=[pB,yB];function AB(e,n){return D(),F("svg",iB,uB)}const hB={name:"carbon-information",render:AB},dB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fB=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),BB=[fB];function mB(e,n){return D(),F("svg",dB,BB)}const DB={name:"carbon-download",render:mB},gB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},CB=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),vB=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),bB=[CB,vB];function _B(e,n){return D(),F("svg",gB,bB)}const EB={name:"carbon-user-speaker",render:_B},kB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},FB=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),wB=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),xB=[FB,wB];function SB(e,n){return D(),F("svg",kB,xB)}const OB={name:"carbon-presentation-file",render:SB},TB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$B=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),PB=[$B];function RB(e,n){return D(),F("svg",TB,PB)}const LB={name:"carbon-pen",render:RB},jB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},MB=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),IB=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),NB=[MB,IB];function UB(e,n){return D(),F("svg",jB,NB)}const HB={name:"ph-cursor-duotone",render:UB},zB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},VB=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),WB=[VB];function KB(e,n){return D(),F("svg",zB,WB)}const ry={name:"ph-cursor-fill",render:KB},qB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},GB=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),YB=[GB];function ZB(e,n){return D(),F("svg",qB,YB)}const QB={name:"carbon-sun",render:ZB},JB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},XB=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),s3=[XB];function e3(e,n){return D(),F("svg",JB,s3)}const n3={name:"carbon-moon",render:e3},l3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o3=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),t3=[o3];function a3(e,n){return D(),F("svg",l3,t3)}const r3={name:"carbon-apps",render:a3},c3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i3=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),p3=[i3];function y3(e,n){return D(),F("svg",c3,p3)}const u3={name:"carbon-arrow-right",render:y3},A3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h3=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),d3=[h3];function f3(e,n){return D(),F("svg",A3,d3)}const B3={name:"carbon-arrow-left",render:f3},m3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D3=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),g3=[D3];function C3(e,n){return D(),F("svg",m3,g3)}const v3={name:"carbon-maximize",render:C3},b3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},_3=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),E3=[_3];function k3(e,n){return D(),F("svg",b3,E3)}const F3={name:"carbon-minimize",render:k3},w3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x3=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),S3=[x3];function O3(e,n){return D(),F("svg",w3,S3)}const T3={name:"carbon-checkmark",render:O3},$3={class:"select-list"},P3={class:"title"},R3={class:"items"},L3=["onClick"],j3=Es({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const l=e;U(G);const t=Ue(l,"modelValue",n,{passive:!0});return(a,r)=>{const c=T3;return D(),F("div",$3,[s("div",P3,Tn(e.title),1),s("div",R3,[(D(!0),F(ws,null,so(e.items,i=>(D(),F("div",{key:i.value,class:Ls(["item",{active:_(t)===i.value}]),onClick:()=>{var p;t.value=i.value,(p=i.onClick)==null||p.call(i)}},[M(c,{class:Ls(["text-green-500",{"opacity-0":_(t)!==i.value}])},null,8,["class"]),o(" "+Tn(i.display||i.value),1)],10,L3))),128))])])}}});const cy=(e,n)=>{const l=e.__vccOpts||e;for(const[t,a]of n)l[t]=a;return l},M3=cy(j3,[["__scopeId","data-v-7dd0eaca"]]),I3={class:"text-sm"},N3=Es({__name:"Settings",setup(e){U(G);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(l,t)=>(D(),F("div",I3,[M(M3,{modelValue:_(go),"onUpdate:modelValue":t[0]||(t[0]=a=>xs(go)?go.value=a:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),U3={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},H3=Es({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const l=e;U(G);const t=Ue(l,"modelValue",n,{passive:!0}),a=V();return qA(a,()=>{t.value=!1}),(r,c)=>(D(),F("div",{ref_key:"el",ref:a,class:"flex relative"},[s("button",{class:Ls({disabled:e.disabled}),onClick:c[0]||(c[0]=i=>t.value=!_(t))},[$e(r.$slots,"button",{class:Ls({disabled:e.disabled})})],2),(D(),q(rp,null,[_(t)?(D(),F("div",U3,[$e(r.$slots,"menu")])):ms("v-if",!0)],1024))],512))}}),z3={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ho={__name:"VerticalDivider",setup(e){return U(G),(n,l)=>(D(),F("div",z3))}},V3={render(){return[]}},W3={class:"icon-btn"},K3={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},q3={class:"my-auto"},G3={class:"opacity-50"},Y3=Es({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;U(G);const l=oa.smaller("md"),{isFullscreen:t,toggle:a}=Qp,r=S(()=>pa.value?`?password=${pa.value}`:""),c=S(()=>`/presenter/${Vs.value}${r.value}`),i=S(()=>`/${Vs.value}${r.value}`),p=V(),y=()=>{p.value&&sl.value&&p.value.contains(sl.value)&&sl.value.blur()},u=S(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),A=Ve(),h=Ve();return Pn(()=>import("./DrawingControls.bf78b7e1.js"),["assets/DrawingControls.bf78b7e1.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.0b9685ba.js"]).then(f=>h.value=f.default),(f,d)=>{const g=F3,C=v3,b=B3,E=u3,v=r3,w=n3,R=QB,L=ry,I=HB,J=LB,ts=OB,us=xo("RouterLink"),Ds=EB,Gs=DB,Ws=hB,Is=cB;return D(),F("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[s("div",{class:Ls(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",_(u)]),onMouseleave:y},[_(qe)?ms("v-if",!0):(D(),F("button",{key:0,class:"icon-btn",onClick:d[0]||(d[0]=(...Ts)=>_(a)&&_(a)(...Ts))},[_(t)?(D(),q(g,{key:0})):(D(),q(C,{key:1}))])),s("button",{class:Ls(["icon-btn",{disabled:!_(Z0)}]),onClick:d[1]||(d[1]=(...Ts)=>_(un)&&_(un)(...Ts))},[M(b)],2),s("button",{class:Ls(["icon-btn",{disabled:!_(Y0)}]),title:"Next",onClick:d[2]||(d[2]=(...Ts)=>_(yn)&&_(yn)(...Ts))},[M(E)],2),_(qe)?ms("v-if",!0):(D(),F("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:d[3]||(d[3]=Ts=>_(Jp)())},[M(v)])),_(ca)?ms("v-if",!0):(D(),F("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:d[4]||(d[4]=Ts=>_(oy)())},[_(Ya)?(D(),q(w,{key:0})):(D(),q(R,{key:1}))])),M(ho),_(qe)?ms("v-if",!0):(D(),F(ws,{key:3},[!_(Ne)&&!_(l)&&_(A)?(D(),F(ws,{key:0},[M(_(A)),M(ho)],64)):ms("v-if",!0),_(Ne)?(D(),F("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:d[5]||(d[5]=Ts=>bt.value=!_(bt))},[_(bt)?(D(),q(L,{key:0})):(D(),q(I,{key:1,class:"opacity-50"}))])):ms("v-if",!0)],64)),!_(bs).drawings.presenterOnly&&!_(qe)?(D(),F(ws,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:d[6]||(d[6]=Ts=>He.value=!_(He))},[M(J),_(He)?(D(),F("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:le({background:_(Fn).color})},null,4)):ms("v-if",!0)]),M(ho)],64)):ms("v-if",!0),_(qe)?ms("v-if",!0):(D(),F(ws,{key:5},[_(Ne)?(D(),q(us,{key:0,to:_(i),class:"icon-btn",title:"Play Mode"},{default:T(()=>[M(ts)]),_:1},8,["to"])):ms("v-if",!0),_(K0)?(D(),q(us,{key:1,to:_(c),class:"icon-btn",title:"Presenter Mode"},{default:T(()=>[M(Ds)]),_:1},8,["to"])):ms("v-if",!0),ms("v-if",!0)],64)),(D(),F(ws,{key:6},[_(bs).download?(D(),F("button",{key:0,class:"icon-btn",onClick:d[8]||(d[8]=(...Ts)=>_(ya)&&_(ya)(...Ts))},[M(Gs)])):ms("v-if",!0)],64)),!_(Ne)&&_(bs).info&&!_(qe)?(D(),F("button",{key:7,class:"icon-btn",onClick:d[9]||(d[9]=Ts=>Pl.value=!_(Pl))},[M(Ws)])):ms("v-if",!0),!_(Ne)&&!_(qe)?(D(),q(H3,{key:8},{button:T(()=>[s("button",W3,[M(Is)])]),menu:T(()=>[M(N3)]),_:1})):ms("v-if",!0),_(qe)?ms("v-if",!0):(D(),q(ho,{key:9})),s("div",K3,[s("div",q3,[o(Tn(_(Vs))+" ",1),s("span",G3,"/ "+Tn(_(by)),1)])]),M(_(V3))],34)],512)}}}),iy={render(){return[]}},py={render(){return[]}},Z3={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Q3=Es({__name:"PresenterMouse",setup(e){return U(G),(n,l)=>{const t=ry;return _(mt).cursor?(D(),F("div",Z3,[M(t,{class:"absolute",style:le({left:`${_(mt).cursor.x}%`,top:`${_(mt).cursor.y}%`})},null,8,["style"])])):ms("v-if",!0)}}}),J3=Es({__name:"SlidesShow",props:{context:null},setup(e){U(G),As(de,()=>{var l,t;((l=de.value)==null?void 0:l.meta)&&de.value.meta.preload!==!1&&(de.value.meta.__preloaded=!0),((t=Et.value)==null?void 0:t.meta)&&Et.value.meta.preload!==!1&&(Et.value.meta.__preloaded=!0)},{immediate:!0});const n=Ve();return Pn(()=>import("./DrawingLayer.7c1674e5.js"),[]).then(l=>n.value=l.default),(l,t)=>(D(),F(ws,null,[ms(" Global Bottom "),M(_(py)),ms(" Slides "),(D(!0),F(ws,null,so(_(qs),a=>{var r,c;return D(),F(ws,{key:a.path},[((r=a.meta)==null?void 0:r.__preloaded)||a===_(de)?Q((D(),q(_(Ja),{key:0,is:a==null?void 0:a.component,clicks:a===_(de)?_(Te):0,"clicks-elements":((c=a.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Ls(_(Qa)(a)),route:a,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ep,a===_(de)]]):ms("v-if",!0)],64)}),128)),ms(" Global Top "),M(_(iy)),_(n)?(D(),q(_(n),{key:0})):ms("v-if",!0),_(Ne)?ms("v-if",!0):(D(),q(Q3,{key:1}))],64))}}),X3=Es({__name:"Play",setup(e){U(G),jf();const n=V();function l(r){var c;Lc.value||((c=r.target)==null?void 0:c.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?yn():un())}X0(n);const t=S(()=>Kd.value||Lc.value);Ve();const a=Ve();return Pn(()=>import("./DrawingControls.bf78b7e1.js"),["assets/DrawingControls.bf78b7e1.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.0b9685ba.js"]).then(r=>a.value=r.default),(r,c)=>(D(),F(ws,null,[s("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:le(_(Rp))},[M(ay,{class:"w-full h-full",style:le({background:"var(--slidev-slide-container-background, black)"}),width:_(er)?_(On).width.value:void 0,scale:_(go),onPointerdown:l},{default:T(()=>[M(J3,{context:"slide"})]),controls:T(()=>[s("div",{class:Ls(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[_(t)?"opacity-100 right-0":"opacity-0 p-2",_(ql)?"pointer-events-none":""]])},[M(Y3,{class:"m-auto",persist:_(t)},null,8,["persist"])],2),!_(bs).drawings.presenterOnly&&!_(qe)&&_(a)?(D(),q(_(a),{key:0,class:"ml-0"})):ms("v-if",!0)]),_:1},8,["style","width","scale"]),ms("v-if",!0)],4),M(lB)],64))}});function yy(e){const n=S(()=>e.value.path),l=S(()=>qs.length-1),t=S(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),a=S(()=>ot(t.value)),r=S(()=>qs.find(h=>h.path===`${t.value}`)),c=S(()=>{var h,f,d;return(d=(f=(h=r.value)==null?void 0:h.meta)==null?void 0:f.slide)==null?void 0:d.id}),i=S(()=>{var h,f;return((f=(h=r.value)==null?void 0:h.meta)==null?void 0:f.layout)||(t.value===1?"cover":"default")}),p=S(()=>qs.find(h=>h.path===`${Math.min(qs.length,t.value+1)}`)),y=S(()=>qs.filter(h=>{var f,d;return(d=(f=h.meta)==null?void 0:f.slide)==null?void 0:d.title}).reduce((h,f)=>(nr(h,f),h),[])),u=S(()=>lr(y.value,r.value)),A=S(()=>or(u.value));return{route:e,path:n,total:l,currentPage:t,currentPath:a,currentRoute:r,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:y,treeWithActiveStatuses:u,tree:A}}function uy(e,n,l){const t=V(0);ee(()=>{De.afterEach(async()=>{await ee(),t.value+=1})});const a=S(()=>{var p,y;return t.value,((y=(p=n.value)==null?void 0:p.meta)==null?void 0:y.__clicksElements)||[]}),r=S(()=>{var p,y,u;return+((u=(y=(p=n.value)==null?void 0:p.meta)==null?void 0:y.clicks)!=null?u:a.value.length)}),c=S(()=>l.value<qs.length-1||e.value<r.value),i=S(()=>l.value>1||e.value>0);return{clicks:e,clicksElements:a,clicksTotal:r,hasNext:c,hasPrev:i}}const s7=["id"],qc=Es({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:n}){const l=e,t=Ue(l,"clicksElements",n),a=S(()=>({height:`${Ka}px`,width:`${pn}px`})),r=Ve();Pn(()=>import("./DrawingPreview.9d8cb423.js"),[]).then(y=>r.value=y.default);const c=S(()=>l.clicks),i=uy(c,l.nav.currentRoute,l.nav.currentPage),p=S(()=>`${l.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return fe(G,Rs({nav:{...l.nav,...i},configs:bs,themeConfigs:S(()=>bs.themeConfig)})),(y,u)=>{var A;return D(),F("div",{id:_(p),class:"slide-container",style:le(_(a))},[M(_(py)),M(_(Ja),{is:(A=e.route)==null?void 0:A.component,"clicks-elements":_(t),"onUpdate:clicks-elements":u[0]||(u[0]=h=>xs(t)?t.value=h:null),clicks:_(c),"clicks-disabled":!1,class:Ls(_(Qa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),_(r)?(D(),q(_(r),{key:0,page:+e.route.path},null,8,["page"])):ms("v-if",!0),M(_(iy))],12,s7)}}}),e7=Es({__name:"PrintSlide",props:{route:null},setup(e){var r;const n=e;U(G);const l=Rs(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),t=S(()=>n.route),a=yy(t);return(c,i)=>(D(),F(ws,null,[M(qc,{"clicks-elements":l,"onUpdate:clicks-elements":i[0]||(i[0]=p=>l=p),clicks:0,nav:_(a),route:_(t)},null,8,["clicks-elements","nav","route"]),_(Rl)?ms("v-if",!0):(D(!0),F(ws,{key:0},so(l.length,p=>(D(),q(qc,{key:p,clicks:p,nav:_(a),route:_(t)},null,8,["clicks","nav","route"]))),128))],64))}}),n7={id:"print-content"},l7=Es({__name:"PrintContainer",props:{width:null},setup(e){const n=e;U(G);const l=S(()=>n.width),t=S(()=>n.width/cn),a=S(()=>l.value/t.value),r=S(()=>a.value<cn?l.value/pn:t.value*cn/pn),c=qs.slice(0,-1),i=S(()=>({"select-none":!bs.selectable,"slidev-code-line-numbers":bs.lineNumbers}));return fe(Pp,r),(p,y)=>(D(),F("div",{id:"print-container",class:Ls(_(i))},[s("div",n7,[(D(!0),F(ws,null,so(_(c),u=>(D(),q(e7,{key:u.path,route:u},null,8,["route"]))),128))]),$e(p.$slots,"controls")],2))}});const o7=Es({__name:"Print",setup(e){U(G);function n(l,{slots:t}){if(t.default)return Be("style",t.default())}return pl(()=>{er?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(l,t)=>(D(),F(ws,null,[M(n,null,{default:T(()=>[o(" @page { size: "+Tn(_(pn))+"px "+Tn(_(Ka))+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:le(_(Rp))},[M(l7,{class:"w-full h-full",style:le({background:"var(--slidev-slide-container-background, black)"}),width:_(On).width.value},null,8,["style","width"])],4)],64))}});const t7={class:"slidev-layout end"},a7={__name:"end",setup(e){return U(G),(n,l)=>(D(),F("div",t7," END "))}},r7=cy(a7,[["__scopeId","data-v-ab32435f"]]),Ay="/talks/write-unmaintainable-code/assets/title.c823e607.png",c7={class:"slidev-layout center h-full grid place-content-center"},i7={class:"my-auto"},Js={__name:"center",setup(e){return U(G),(n,l)=>(D(),F("div",c7,[s("div",i7,[$e(n.$slots,"default")])]))}},p7=s("h1",null,null,-1),y7=s("img",{src:Ay,style:{width:"80%",height:"auto",display:"block",margin:"auto"}},null,-1),u7={__name:"1",setup(e){const n={theme:"seriph",background:"none",highlighter:"shiki",lineNumbers:!1,layout:"center",download:!0};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[p7,y7]),_:1},16))}},Gc="/talks/write-unmaintainable-code/assets/logo-valantic-white.7c05d55f.svg",A7="/talks/write-unmaintainable-code/assets/logo-valantic.9d068f76.svg",h7="/talks/write-unmaintainable-code/assets/netflix.ee856748.svg",d7="/talks/write-unmaintainable-code/assets/vue.17ff892a.svg";function Yc(e){return e.startsWith("/")?"/talks/write-unmaintainable-code/"+e.slice(1):e}function f7(e,n=!1){const l=e&&e[0]==="#"&&e.startsWith("rgb"),t={background:l?e:void 0,color:e&&!l?"white":void 0,backgroundImage:l?void 0:e?n?`linear-gradient(#0005, #0008), url(${Yc(e)})`:`url("${Yc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const B7={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},m7=Es({__name:"image-left",props:{image:{type:String},class:{type:String}},setup(e){const n=e;U(G);const l=S(()=>f7(n.image));return(t,a)=>(D(),F("div",B7,[s("div",{class:"w-full w-full",style:le(_(l))},null,4),s("div",{class:Ls(["slidev-layout default",n.class])},[$e(t.$slots,"default")],2)]))}}),D7=s("picture",{style:{display:"block","margin-bottom":"3vh"}},[s("source",{media:"prefers-color-scheme: dark",src:Gc}),s("source",{media:"prefers-color-scheme: light",src:A7}),s("img",{style:{width:"5vw",height:"auto"},src:Gc})],-1),g7=s("h1",null,"Patric Eberle",-1),C7=s("p",null,"Senior Frontend Developer and Teamlead",-1),v7=s("ul",{style:{display:"flex","align-items":"center","list-style":"none",padding:"0",margin:"12vh 0 0 0",gap:"1vw"}},[s("li",{style:{margin:"0",padding:"0"}},"\u{1F3B2}"),s("li",{style:{margin:"0",padding:"0"}},"\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}"),s("li",{style:{margin:"0",padding:"0"}},[s("img",{src:h7,style:{width:"1em",height:"auto"}})]),s("li",{style:{margin:"0",padding:"0"}},"\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F"),s("li",{style:{margin:"0",padding:"0"}},"\u{1F9D8}\u{1F3FB}\u200D\u2642\uFE0F"),s("li",{style:{margin:"0",padding:"0"}},[s("img",{src:d7,style:{width:"1em",height:"auto"}})])],-1),b7=s("ul",{style:{"list-style":"none",padding:"0",margin:"4vh 0 0 0",gap:"1vw","font-size":"0.8em"}},[s("li",{style:{margin:"0",padding:"0 0 1vh 0"}},[s("a",{class:"hidden-link",href:"https://github.com/patric-eberle"},"https://github.com/patric-eberle")]),s("li",{style:{margin:"0",padding:"0 0 1vh 0"}},[s("a",{class:"hidden-link",href:"https://www.linkedin.com/in/patric-eberle-22518911a"},"https://www.linkedin.com/in/patric-eberle-22518911a")]),s("li",{style:{margin:"0",padding:"0 0 1vh 0"}},[s("a",{class:"hidden-link",href:"mailto:patric.eberle@cec.valantic.com"},"patric.eberle@cec.valantic.com")])],-1),_7={__name:"2",setup(e){const n={layout:"image-left",image:"patric.jpg"};return U(G),(l,t)=>(D(),q(m7,ps(rs(n)),{default:T(()=>[D7,g7,C7,v7,b7]),_:1},16))}},E7=s("h1",null,null,-1),k7=s("img",{src:Ay,style:{width:"80%",height:"auto",display:"block",margin:"auto"}},null,-1),F7={__name:"3",setup(e){const n={layout:"center"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[E7,k7]),_:1},16))}},w7="/talks/write-unmaintainable-code/assets/thanos.b72cb7a2.jpg",x7=s("h1",null,"Your worst enemies",-1),S7=s("img",{src:w7,style:{width:"80%",height:"auto",display:"block",margin:"auto"}},null,-1),O7={__name:"4",setup(e){const n={layout:"center",class:"text-center"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[x7,S7]),_:1},16))}},T7="/talks/write-unmaintainable-code/assets/prettier.34f74219.svg",$7=s("img",{src:T7},null,-1),P7={__name:"5",setup(e){const n={layout:"center",class:"text-center",info:"Prettier 1"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[$7]),_:1},16))}},R7="/talks/write-unmaintainable-code/assets/prettier2.7a84c98c.svg",L7={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},Ms=Es({__name:"two-cols",props:{class:{type:String}},setup(e){const n=e;return U(G),(l,t)=>(D(),F("div",L7,[s("div",{class:Ls(["col-left",n.class])},[$e(l.$slots,"default")],2),s("div",{class:Ls(["col-right",n.class])},[$e(l.$slots,"right")],2)]))}}),j7=s("div",{class:"center-horizontal center-vertical"},[s("img",{src:R7,style:{width:"9vw",height:"auto"}})],-1),M7={class:"center-vertical"},I7=s("li",null,"Opinionated code formatter",-1),N7={__name:"6",setup(e){const n={layout:"two-cols",info:"Prettier 2"};return U(G),(l,t)=>{const a=vs("click");return D(),q(Ms,ps(rs(n)),{right:T(r=>[s("ul",M7,[I7,Q((D(),F("li",null,[o("Automated code styles")])),[[a]]),Q((D(),F("li",null,[o("Supports Git Hooks")])),[[a]]),Q((D(),F("li",null,[o("Supports CI")])),[[a]])])]),default:T(()=>[j7]),_:1},16)}}},U7="/talks/write-unmaintainable-code/assets/eslint.e996b5ec.svg",H7=s("img",{src:U7,style:{width:"25vw",height:"auto"}},null,-1),z7={__name:"7",setup(e){const n={layout:"center",class:"text-center",info:"ESLint 1"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[H7]),_:1},16))}},V7="/talks/write-unmaintainable-code/assets/eslint2.6b48de43.svg",W7=s("div",{class:"center-horizontal center-vertical"},[s("img",{src:V7,style:{width:"8vw",height:"auto"}})],-1),K7={class:"center-vertical"},q7=s("li",null,"Enforces best practices",-1),G7={__name:"8",setup(e){const n={layout:"two-cols",info:"ESLint 2"};return U(G),(l,t)=>{const a=vs("click");return D(),q(Ms,ps(rs(n)),{right:T(r=>[s("ul",K7,[q7,Q((D(),F("li",null,[o("Enforces code styles")])),[[a]]),Q((D(),F("li",null,[o("Supports `--fix`")])),[[a]]),Q((D(),F("li",null,[o("Supports Git Hooks")])),[[a]]),Q((D(),F("li",null,[o("Supports CI")])),[[a]])])]),default:T(()=>[W7]),_:1},16)}}},hy="/talks/write-unmaintainable-code/assets/typescript.139ae451.svg",Y7=s("img",{src:hy,style:{width:"10vw",height:"auto"}},null,-1),Z7={__name:"9",setup(e){const n={layout:"center",class:"text-center",info:"TypeScript 1"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[Y7]),_:1},16))}},Q7=s("div",{class:"center-horizontal center-vertical"},[s("img",{src:hy,style:{width:"8vw",height:"auto"}})],-1),J7={class:"center-vertical"},X7=s("li",null,"Superset of JS",-1),sm={__name:"10",setup(e){const n={layout:"two-cols",info:"TypeScript 2"};return U(G),(l,t)=>{const a=vs("click");return D(),q(Ms,ps(rs(n)),{right:T(r=>[s("ul",J7,[X7,Q((D(),F("li",null,[o("Enforces strict types")])),[[a]]),Q((D(),F("li",null,[o("Improves code hinting")])),[[a]])])]),default:T(()=>[Q7]),_:1},16)}}},dy="/talks/write-unmaintainable-code/assets/vscode.85f38917.svg",fy="/talks/write-unmaintainable-code/assets/phpstorm.1d16fcdc.svg",By="/talks/write-unmaintainable-code/assets/webstorm.f7f6b6c6.svg",em=s("div",{style:{display:"flex",gap:"2vw"}},[s("img",{src:dy,style:{width:"3vw",height:"auto"}}),s("img",{src:fy,style:{width:"3vw",height:"auto"}}),s("img",{src:By,style:{width:"3vw",height:"auto"}}),s("span",{style:{"font-size":"3vw"}},"\u2026")],-1),nm={__name:"11",setup(e){const n={layout:"center",class:"text-center",info:"IDE 1"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[em]),_:1},16))}},lm=s("div",{class:"center-horizontal center-vertical",style:{gap:"3vh"}},[s("img",{src:dy,style:{width:"6vh",height:"auto"}}),s("img",{src:fy,style:{width:"6vh",height:"auto"}}),s("img",{src:By,style:{width:"6vh",height:"auto"}})],-1),om={class:"center-vertical"},tm=s("li",null,"Autocompletion",-1),am={__name:"12",setup(e){const n={layout:"two-cols",info:"IDE 2"};return U(G),(l,t)=>{const a=vs("click");return D(),q(Ms,ps(rs(n)),{right:T(r=>[s("ul",om,[tm,Q((D(),F("li",null,[o("Auto formatting")])),[[a]]),Q((D(),F("li",null,[o("Type hints")])),[[a]]),Q((D(),F("li",null,[o("Code hints")])),[[a]]),Q((D(),F("li",null,[o("Go to definition/usage")])),[[a]]),Q((D(),F("li",null,[o("Spell checking")])),[[a]])])]),default:T(()=>[lm]),_:1},16)}}},rm=s("h1",null,"How to fight enemies?",-1),cm=s("img",{src:"https://media.giphy.com/media/WwC5VAvhHoH7EjCpPz/giphy.gif"},null,-1),im={__name:"13",setup(e){const n={layout:"center",info:"Fight",class:"text-center"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[rm,cm]),_:1},16))}},pm=s("h1",null,"How to fight against enemies?",-1),ym={class:"center-vertical"},um=s("li",null,"Ignore setup instructions",-1),Am={__name:"14",setup(e){const n={layout:"center",info:"Fight"};return U(G),(l,t)=>{const a=vs("click");return D(),q(Js,ps(rs(n)),{default:T(()=>[pm,s("ul",ym,[um,Q((D(),F("li",null,[o("Skip Git Hooks")])),[[a]]),Q((D(),F("li",null,[o("Ignore pipelines")])),[[a]]),Q((D(),F("li",null,[o("Fight opinions")])),[[a]]),Q((D(),F("li",null,[o("Use your own setup")])),[[a]])])]),_:1},16)}}},hm=s("h1",null,"Hackers: choose your weapons!",-1),dm=s("img",{src:"https://media.giphy.com/media/1eEv7v51FEI3L54jpr/giphy.gif"},null,-1),fm={__name:"15",setup(e){const n={layout:"center",class:"text-center",info:"Weapons"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[hm,dm]),_:1},16))}},Bm={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},mm=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),Dm=[mm];function gm(e,n){return D(),F("svg",Bm,Dm)}const Cm={name:"ph-clipboard",render:gm},vm={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},bm=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),_m=[bm];function Em(e,n){return D(),F("svg",vm,_m)}const km={name:"ph-check-circle",render:Em};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function my(e){return typeof e>"u"||e===null}function Fm(e){return typeof e=="object"&&e!==null}function wm(e){return Array.isArray(e)?e:my(e)?[]:[e]}function xm(e,n){var l,t,a,r;if(n)for(r=Object.keys(n),l=0,t=r.length;l<t;l+=1)a=r[l],e[a]=n[a];return e}function Sm(e,n){var l="",t;for(t=0;t<n;t+=1)l+=e;return l}function Om(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Tm=my,$m=Fm,Pm=wm,Rm=Sm,Lm=Om,jm=xm,Xa={isNothing:Tm,isObject:$m,toArray:Pm,repeat:Rm,isNegativeZero:Lm,extend:jm};function Dy(e,n){var l="",t=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(l+='in "'+e.mark.name+'" '),l+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(l+=`

`+e.mark.snippet),t+" "+l):t}function Yl(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Dy(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Yl.prototype=Object.create(Error.prototype);Yl.prototype.constructor=Yl;Yl.prototype.toString=function(n){return this.name+": "+Dy(this,n)};var _n=Yl,Mm=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Im=["scalar","sequence","mapping"];function Nm(e){var n={};return e!==null&&Object.keys(e).forEach(function(l){e[l].forEach(function(t){n[String(t)]=l})}),n}function Um(e,n){if(n=n||{},Object.keys(n).forEach(function(l){if(Mm.indexOf(l)===-1)throw new _n('Unknown option "'+l+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(l){return l},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=Nm(n.styleAliases||null),Im.indexOf(this.kind)===-1)throw new _n('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var ne=Um;function Zc(e,n){var l=[];return e[n].forEach(function(t){var a=l.length;l.forEach(function(r,c){r.tag===t.tag&&r.kind===t.kind&&r.multi===t.multi&&(a=c)}),l[a]=t}),l}function Hm(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,l;function t(a){a.multi?(e.multi[a.kind].push(a),e.multi.fallback.push(a)):e[a.kind][a.tag]=e.fallback[a.tag]=a}for(n=0,l=arguments.length;n<l;n+=1)arguments[n].forEach(t);return e}function ia(e){return this.extend(e)}ia.prototype.extend=function(n){var l=[],t=[];if(n instanceof ne)t.push(n);else if(Array.isArray(n))t=t.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(l=l.concat(n.implicit)),n.explicit&&(t=t.concat(n.explicit));else throw new _n("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");l.forEach(function(r){if(!(r instanceof ne))throw new _n("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new _n("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new _n("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),t.forEach(function(r){if(!(r instanceof ne))throw new _n("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var a=Object.create(ia.prototype);return a.implicit=(this.implicit||[]).concat(l),a.explicit=(this.explicit||[]).concat(t),a.compiledImplicit=Zc(a,"implicit"),a.compiledExplicit=Zc(a,"explicit"),a.compiledTypeMap=Hm(a.compiledImplicit,a.compiledExplicit),a};var zm=ia,Vm=new ne("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Wm=new ne("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Km=new ne("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),qm=new zm({explicit:[Vm,Wm,Km]});function Gm(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Ym(){return null}function Zm(e){return e===null}var Qm=new ne("tag:yaml.org,2002:null",{kind:"scalar",resolve:Gm,construct:Ym,predicate:Zm,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Jm(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function Xm(e){return e==="true"||e==="True"||e==="TRUE"}function sD(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var eD=new ne("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Jm,construct:Xm,predicate:sD,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function nD(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function lD(e){return 48<=e&&e<=55}function oD(e){return 48<=e&&e<=57}function tD(e){if(e===null)return!1;var n=e.length,l=0,t=!1,a;if(!n)return!1;if(a=e[l],(a==="-"||a==="+")&&(a=e[++l]),a==="0"){if(l+1===n)return!0;if(a=e[++l],a==="b"){for(l++;l<n;l++)if(a=e[l],a!=="_"){if(a!=="0"&&a!=="1")return!1;t=!0}return t&&a!=="_"}if(a==="x"){for(l++;l<n;l++)if(a=e[l],a!=="_"){if(!nD(e.charCodeAt(l)))return!1;t=!0}return t&&a!=="_"}if(a==="o"){for(l++;l<n;l++)if(a=e[l],a!=="_"){if(!lD(e.charCodeAt(l)))return!1;t=!0}return t&&a!=="_"}}if(a==="_")return!1;for(;l<n;l++)if(a=e[l],a!=="_"){if(!oD(e.charCodeAt(l)))return!1;t=!0}return!(!t||a==="_")}function aD(e){var n=e,l=1,t;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),t=n[0],(t==="-"||t==="+")&&(t==="-"&&(l=-1),n=n.slice(1),t=n[0]),n==="0")return 0;if(t==="0"){if(n[1]==="b")return l*parseInt(n.slice(2),2);if(n[1]==="x")return l*parseInt(n.slice(2),16);if(n[1]==="o")return l*parseInt(n.slice(2),8)}return l*parseInt(n,10)}function rD(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Xa.isNegativeZero(e)}var cD=new ne("tag:yaml.org,2002:int",{kind:"scalar",resolve:tD,construct:aD,predicate:rD,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),iD=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function pD(e){return!(e===null||!iD.test(e)||e[e.length-1]==="_")}function yD(e){var n,l;return n=e.replace(/_/g,"").toLowerCase(),l=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?l===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:l*parseFloat(n,10)}var uD=/^[-+]?[0-9]+e/;function AD(e,n){var l;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Xa.isNegativeZero(e))return"-0.0";return l=e.toString(10),uD.test(l)?l.replace("e",".e"):l}function hD(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Xa.isNegativeZero(e))}var dD=new ne("tag:yaml.org,2002:float",{kind:"scalar",resolve:pD,construct:yD,predicate:hD,represent:AD,defaultStyle:"lowercase"}),fD=qm.extend({implicit:[Qm,eD,cD,dD]}),BD=fD,gy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Cy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function mD(e){return e===null?!1:gy.exec(e)!==null||Cy.exec(e)!==null}function DD(e){var n,l,t,a,r,c,i,p=0,y=null,u,A,h;if(n=gy.exec(e),n===null&&(n=Cy.exec(e)),n===null)throw new Error("Date resolve error");if(l=+n[1],t=+n[2]-1,a=+n[3],!n[4])return new Date(Date.UTC(l,t,a));if(r=+n[4],c=+n[5],i=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(u=+n[10],A=+(n[11]||0),y=(u*60+A)*6e4,n[9]==="-"&&(y=-y)),h=new Date(Date.UTC(l,t,a,r,c,i,p)),y&&h.setTime(h.getTime()-y),h}function gD(e){return e.toISOString()}var CD=new ne("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:mD,construct:DD,instanceOf:Date,represent:gD});function vD(e){return e==="<<"||e===null}var bD=new ne("tag:yaml.org,2002:merge",{kind:"scalar",resolve:vD}),sr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function _D(e){if(e===null)return!1;var n,l,t=0,a=e.length,r=sr;for(l=0;l<a;l++)if(n=r.indexOf(e.charAt(l)),!(n>64)){if(n<0)return!1;t+=6}return t%8===0}function ED(e){var n,l,t=e.replace(/[\r\n=]/g,""),a=t.length,r=sr,c=0,i=[];for(n=0;n<a;n++)n%4===0&&n&&(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)),c=c<<6|r.indexOf(t.charAt(n));return l=a%4*6,l===0?(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)):l===18?(i.push(c>>10&255),i.push(c>>2&255)):l===12&&i.push(c>>4&255),new Uint8Array(i)}function kD(e){var n="",l=0,t,a,r=e.length,c=sr;for(t=0;t<r;t++)t%3===0&&t&&(n+=c[l>>18&63],n+=c[l>>12&63],n+=c[l>>6&63],n+=c[l&63]),l=(l<<8)+e[t];return a=r%3,a===0?(n+=c[l>>18&63],n+=c[l>>12&63],n+=c[l>>6&63],n+=c[l&63]):a===2?(n+=c[l>>10&63],n+=c[l>>4&63],n+=c[l<<2&63],n+=c[64]):a===1&&(n+=c[l>>2&63],n+=c[l<<4&63],n+=c[64],n+=c[64]),n}function FD(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var wD=new ne("tag:yaml.org,2002:binary",{kind:"scalar",resolve:_D,construct:ED,predicate:FD,represent:kD}),xD=Object.prototype.hasOwnProperty,SD=Object.prototype.toString;function OD(e){if(e===null)return!0;var n=[],l,t,a,r,c,i=e;for(l=0,t=i.length;l<t;l+=1){if(a=i[l],c=!1,SD.call(a)!=="[object Object]")return!1;for(r in a)if(xD.call(a,r))if(!c)c=!0;else return!1;if(!c)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function TD(e){return e!==null?e:[]}var $D=new ne("tag:yaml.org,2002:omap",{kind:"sequence",resolve:OD,construct:TD}),PD=Object.prototype.toString;function RD(e){if(e===null)return!0;var n,l,t,a,r,c=e;for(r=new Array(c.length),n=0,l=c.length;n<l;n+=1){if(t=c[n],PD.call(t)!=="[object Object]"||(a=Object.keys(t),a.length!==1))return!1;r[n]=[a[0],t[a[0]]]}return!0}function LD(e){if(e===null)return[];var n,l,t,a,r,c=e;for(r=new Array(c.length),n=0,l=c.length;n<l;n+=1)t=c[n],a=Object.keys(t),r[n]=[a[0],t[a[0]]];return r}var jD=new ne("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:RD,construct:LD}),MD=Object.prototype.hasOwnProperty;function ID(e){if(e===null)return!0;var n,l=e;for(n in l)if(MD.call(l,n)&&l[n]!==null)return!1;return!0}function ND(e){return e!==null?e:{}}var UD=new ne("tag:yaml.org,2002:set",{kind:"mapping",resolve:ID,construct:ND});BD.extend({implicit:[CD,bD],explicit:[wD,$D,jD,UD]});function Qc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var HD=new Array(256),zD=new Array(256);for(var zn=0;zn<256;zn++)HD[zn]=Qc(zn)?1:0,zD[zn]=Qc(zn);function VD(e){return Array.from(new Set(e))}function Jc(...e){let n,l,t;e.length===1?(n=0,t=1,[l]=e):[n,l,t=1]=e;const a=[];let r=n;for(;r<l;)a.push(r),r+=t||1;return a}function WD(e,n){if(!n||n==="all"||n==="*")return Jc(1,e+1);const l=[];for(const t of n.split(/[,;]/g))if(!t.includes("-"))l.push(+t);else{const[a,r]=t.split("-",2);l.push(...Jc(+a,r?+r+1:e+1))}return VD(l).filter(t=>t<=e).sort((t,a)=>t-a)}const KD=["title"],Us=Es({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;U(G);const l=U(Sl),t=U(bn),a=U(Ol);function r(A=5){const h=[],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=f.length;for(let g=0;g<A;g++)h.push(f.charAt(Math.floor(Math.random()*d)));return h.join("")}const c=V(),i=Ln();yl(()=>{const A=n.at==null?t==null?void 0:t.value.length:n.at,h=S(()=>a!=null&&a.value?n.ranges.length-1:Math.min(Math.max(0,((l==null?void 0:l.value)||0)-(A||0)),n.ranges.length-1)),f=S(()=>n.ranges[h.value]||"");if(n.ranges.length>=2&&!(a!=null&&a.value)){const d=r(),g=$A(n.ranges.length-1).map(C=>d+C);t!=null&&t.value&&(t.value.push(...g),Xo(()=>g.forEach(C=>Jt(t.value,C)),i))}pl(()=>{if(!c.value)return;const g=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const C of g){const b=Array.from(C.querySelectorAll(".line")),E=WD(b.length,f.value);if(b.forEach((v,w)=>{const R=E.includes(w+1);v.classList.toggle(gn,!0),v.classList.toggle("highlighted",R),v.classList.toggle("dishonored",!R)}),n.maxHeight){const v=C.querySelector(".line.highlighted");v&&v.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:y}=lh();function u(){var h,f;const A=(f=(h=c.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:f.textContent;A&&y(A)}return(A,h)=>{const f=km,d=Cm;return D(),F("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:le({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[$e(A.$slots,"default"),_(bs).codeCopy?(D(),F("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:_(p)?"Copied":"Copy",onClick:h[0]||(h[0]=g=>u())},[_(p)?(D(),q(f,{key:0,class:"p-2 w-8 h-8"})):(D(),q(d,{key:1,class:"p-2 w-8 h-8"}))],8,KD)):ms("v-if",!0)],4)}}}),qD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"result"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"callback"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"result"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"callback"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),GD={__name:"16",setup(e){const n={layout:"center",info:"Weapons"};return U(G),(l,t)=>{const a=Us;return D(),q(Js,ps(rs(n)),{default:T(()=>[M(a,hs({},{ranges:[""]}),{default:T(()=>[qD]),_:1},16)]),_:1},16)}}},YD=s("h1",null,"Naming",-1),ZD={__name:"17",setup(e){const n={layout:"center",class:"text-center",info:"Weapons"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[YD]),_:1},16))}},QD=s("h1",null,"Naming",-1),JD=s("div",{class:"",style:{"padding-right":"2vw"}},[s("h2",null,"Use single letters, symbols, emojis or accented letters"),s("br"),o("\xA0 "),s("br"),o("\xA0 "),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4")])])])])],-1),XD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"result"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"callback"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"result"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"callback"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),sg={__name:"18",setup(e){const n={layout:"two-cols",info:"Naming 1.1"};return U(G),(l,t)=>{const a=Us;return D(),q(Ms,ps(rs(n)),{right:T(r=>[M(a,hs({},{ranges:["all","12-15"]}),{default:T(()=>[XD]),_:1},16)]),default:T(()=>[QD,JD]),_:1},16)}}},eg=s("h1",null,"Naming",-1),ng=s("div",{class:"",style:{"padding-right":"2vw"}},[s("h2",null,"Use single letters, symbols, emojis or accented letters"),s("br"),o("\xA0 "),s("br"),o("\xA0 "),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4")])])])])],-1),lg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"result"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"callback"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"result"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"callback"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),og={__name:"19",setup(e){const n={layout:"two-cols",info:"Naming 1.2"};return U(G),(l,t)=>{const a=Us;return D(),q(Ms,ps(rs(n)),{right:T(r=>[M(a,hs({},{ranges:["12-15"]}),{default:T(()=>[lg]),_:1},16)]),default:T(()=>[eg,ng]),_:1},16)}}},tg=s("h1",null,"Naming",-1),ag={class:"",style:{"padding-right":"2vw"}},rg=s("h2",null,"Use single letters, symbols, emojis or accented letters",-1),cg=s("br",null,null,-1),ig=s("br",null,null,-1),pg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4")])])])],-1),yg={class:"",style:{"padding-right":"2vw"}},ug=s("h2",null,"Use abbreviations and A.C.R.O.N.Y.M.S.",-1),Ag=s("br",null,null,-1),hg=s("br",null,null,-1),dg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"col, fn, gt, arg, obj, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"opts, conf, imo, bg, chk, ge")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"col, fn, gt, arg, obj, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"opts, conf, imo, bg, chk, ge")])])])],-1),fg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"result"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"callback"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"result"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"callback"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Bg={__name:"20",setup(e){const n={layout:"two-cols",info:"Naming 2.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[M(a,hs({},{ranges:["12-15","10,16,20"]}),{default:T(()=>[fg]),_:1},16)]),default:T(()=>[tg,Q((D(),F("div",ag,[rg,cg,o("\xA0 "),ig,o("\xA0 "),pg])),[[r]]),Q((D(),F("div",yg,[ug,Ag,o("\xA0 "),hg,o("\xA0 "),dg])),[[c]])]),_:1},16)}}},mg=s("h1",null,"Naming",-1),Dg={class:"",style:{"padding-right":"2vw"}},gg=s("h2",null,"Use abbreviations and A.C.R.O.N.Y.M.S.",-1),Cg=s("br",null,null,-1),vg=s("br",null,null,-1),bg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"col, fn, gt, arg, obj,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"opts, conf, imo, bg, chk, ge")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"col, fn, gt, arg, obj,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"opts, conf, imo, bg, chk, ge")])])])],-1),_g={class:"",style:{"padding-right":"2vw"}},Eg=s("h2",null,"Use foreign, made up or lesser known, alternative words with the same meaning",-1),kg=s("br",null,null,-1),Fg=s("br",null,null,-1),wg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"reprezenti, opcioj, lischt\xE4,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"grid, expense, humptyDumpty")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"reprezenti, opcioj, lischt\xE4,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"grid, expense, humptyDumpty")])])])],-1),xg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"callback"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"callback"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Sg={__name:"21",setup(e){const n={layout:"two-cols",info:"Naming 2.2"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[M(a,hs({},{ranges:["10,16,20","4,5,9,12-15"]}),{default:T(()=>[xg]),_:1},16)]),default:T(()=>[mg,Q((D(),F("div",Dg,[gg,Cg,o("\xA0 "),vg,o("\xA0 "),bg])),[[r]]),Q((D(),F("div",_g,[Eg,kg,o("\xA0 "),Fg,o("\xA0 "),wg])),[[c]])]),_:1},16)}}},Og=s("h1",null,"Naming",-1),Tg={class:"",style:{"padding-right":"2vw"}},$g=s("h2",null,"Use foreign, made up or lesser known, alternative words with the same meaning",-1),Pg=s("br",null,null,-1),Rg=s("br",null,null,-1),Lg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"reprezenti, opcioj, lischt\xE4,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"grid, expense, humptyDumpty")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"reprezenti, opcioj, lischt\xE4,")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"grid, expense, humptyDumpty")])])])],-1),jg={class:"",style:{"padding-right":"2vw"}},Mg=s("h2",null,"Misspell everything",-1),Ig=s("br",null,null,-1),Ng=s("br",null,null,-1),Ug=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"reandom, randem, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"eveerything, everyting, evrything, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"vaule, vlaue, vale")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"reandom, randem, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"eveerything, everyting, evrything, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"vaule, vlaue, vale")])])])],-1),Hg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),zg={__name:"22",setup(e){const n={layout:"two-cols",info:"Naming 3.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[M(a,hs({},{ranges:["4,5,9,12-15","13,15,16"]}),{default:T(()=>[Hg]),_:1},16)]),default:T(()=>[Og,Q((D(),F("div",Tg,[$g,Pg,o("\xA0 "),Rg,o("\xA0 "),Lg])),[[r]]),Q((D(),F("div",jg,[Mg,Ig,o("\xA0 "),Ng,o("\xA0 "),Ug])),[[c]])]),_:1},16)}}},Vg=s("h1",null,"Naming",-1),Wg={class:"",style:{"padding-right":"2vw"}},Kg=s("h2",null,"Misspell everything",-1),qg=s("br",null,null,-1),Gg=s("br",null,null,-1),Yg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"reandom, randem, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"eveerything, everyting, evrything, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"vaule, vlaue, vale")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"reandom, randem, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"eveerything, everyting, evrything, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"vaule, vlaue, vale")])])])],-1),Zg={class:"",style:{"padding-right":"2vw"}},Qg=s("h2",null,"Use random capitalization or formats",-1),Jg=s("br",null,null,-1),Xg=s("br",null,null,-1),s9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"comPutdyNamIcValuE, get_distance_from_la, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"calculate-distance-to-moon, valueA, valuea")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"comPutdyNamIcValuE, get_distance_from_la, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"calculate-distance-to-moon, valueA, valuea")])])])],-1),e9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),n9={__name:"23",setup(e){const n={layout:"two-cols",info:"Naming 4.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[M(a,hs({},{ranges:["13,15,16","9"]}),{default:T(()=>[e9]),_:1},16)]),default:T(()=>[Vg,Q((D(),F("div",Wg,[Kg,qg,o("\xA0 "),Gg,o("\xA0 "),Yg])),[[r]]),Q((D(),F("div",Zg,[Qg,Jg,o("\xA0 "),Xg,o("\xA0 "),s9])),[[c]])]),_:1},16)}}},l9=s("h1",null,"Naming",-1),o9=s("div",{class:"",style:{"padding-right":"2vw"}},[s("h2",null,"Use random capitalization or formats"),s("br"),o("\xA0 "),s("br"),o("\xA0 "),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"comPutdyNamIcValuE, get_distance_from_la, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"calculate-distance-to-moon, valueA, valuea")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"comPutdyNamIcValuE, get_distance_from_la, ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"calculate-distance-to-moon, valueA, valuea")])])])])],-1),t9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),a9={__name:"24",setup(e){const n={layout:"two-cols",info:"Naming 4.1"};return U(G),(l,t)=>{const a=Us;return D(),q(Ms,ps(rs(n)),{right:T(r=>[M(a,hs({},{ranges:["9"]}),{default:T(()=>[t9]),_:1},16)]),default:T(()=>[l9,o9]),_:1},16)}}},r9={style:{"padding-right":"0.5vw"}},c9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"result"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"callback"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"result"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"callback"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),p9={__name:"25",setup(e){const n={layout:"two-cols",info:"Naming 4.1"};return U(G),(l,t)=>{const a=Us;return D(),q(Ms,ps(rs(n)),{right:T(r=>[M(a,hs({},{ranges:[""]}),{default:T(()=>[i9]),_:1},16)]),default:T(()=>[s("div",r9,[M(a,hs({},{ranges:[""]}),{default:T(()=>[c9]),_:1},16)])]),_:1},16)}}},y9=s("h1",null,"Comments",-1),u9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#dbd7ca"}},"<!-- TODO: update this -->")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393a34"}},"<!-- TODO: update this -->")])])])],-1),A9=[u9],h9={__name:"26",setup(e){const n={layout:"center",class:"text-center",info:"Comments"};return U(G),(l,t)=>{const a=vs("click");return D(),q(Js,ps(rs(n)),{default:T(()=>[y9,Q((D(),F("div",null,A9)),[[a]])]),_:1},16)}}},d9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),f9={__name:"27",setup(e){const n={layout:"center",info:"Comments 1.1"};return U(G),(l,t)=>{const a=Us;return D(),q(Js,ps(rs(n)),{default:T(()=>[M(a,hs({},{ranges:[""]}),{default:T(()=>[d9]),_:1},16)]),_:1},16)}}},B9=s("h1",null,"Comments",-1),m9=s("div",{class:"",style:{"padding-right":"2vw"}},[s("h2",null,"Write lying or nonsensical comments"),s("br"),o("\xA0 "),s("br"),o("\xA0 "),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Make snafucated.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"makeSnafucated"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Make snafucated.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"makeSnafucated"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")])])])])],-1),D9={class:"hide-for-real"},g9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),C9={class:"hide-for-real"},v9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),b9={__name:"28",setup(e){const n={layout:"two-cols",info:"Comments 2.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[Q((D(),F("div",D9,[M(a,hs({},{ranges:["all","2,5"]}),{default:T(()=>[g9]),_:1},16)])),[[r]]),Q((D(),F("div",C9,[M(a,hs({},{ranges:["2,5"]}),{default:T(()=>[v9]),_:1},16)])),[[c]])]),default:T(()=>[B9,m9]),_:1},16)}}},_9=s("h1",null,"Comments",-1),E9={class:"hide-for-real",style:{"padding-right":"2vw"}},k9=s("h2",null,"Write lying or nonsensical comments",-1),F9=s("br",null,null,-1),w9=s("br",null,null,-1),x9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Make snafucated.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"makeSnafucated"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Make snafucated.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"makeSnafucated"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")])])])],-1),S9={class:"hide-for-real",style:{"padding-right":"2vw"}},O9=s("h2",null,'Document the obvious. Document the "how", not "why".',-1),T9=s("br",null,null,-1),$9=s("br",null,null,-1),P9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Add '1' to 'i'.")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Add '1' to 'i'.")])])])],-1),R9={class:"hide-for-real"},L9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),j9={class:"hide-for-real"},M9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Push value.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return result.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Push value.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return result.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),I9={__name:"29",setup(e){const n={layout:"two-cols",info:"Comments 3.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[Q((D(),F("div",R9,[M(a,hs({},{ranges:["2,5","12,16,20"]}),{default:T(()=>[L9]),_:1},16)])),[[r]]),Q((D(),F("div",j9,[M(a,hs({},{ranges:["12-16,20"]}),{default:T(()=>[M9]),_:1},16)])),[[c]])]),default:T(()=>[_9,Q((D(),F("div",E9,[k9,F9,o("\xA0 "),w9,o("\xA0 "),x9])),[[r]]),Q((D(),F("div",S9,[O9,T9,o("\xA0 "),$9,o("\xA0 "),P9])),[[c]])]),_:1},16)}}},N9=s("h1",null,"Comments",-1),U9={class:"hide-for-real",style:{"padding-right":"2vw"}},H9=s("h2",null,'Document the obvious. Document the "how", not "why".',-1),z9=s("br",null,null,-1),V9=s("br",null,null,-1),W9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#CB7676"}},"++"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Add '1' to 'i'.")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#AB5959"}},"++"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Add '1' to 'i'.")])])])],-1),K9={class:"hide-for-real",style:{"padding-right":"2vw"}},q9=s("h2",null,"Use comments instead of variables",-1),G9=s("br",null,null,-1),Y9=s("br",null,null,-1),Z9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"60"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// minutes * milliseconds * seconds = X minutes")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"60"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// minutes * milliseconds * seconds = X minutes")])])])],-1),Q9={class:"hide-for-real"},J9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"res"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Push value.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"res"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return result.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"res"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Push value.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"res"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return result.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),X9={class:"hide-for-real"},sC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// ResultList.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Push value to ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// ResultList.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Push value to ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),eC={__name:"30",setup(e){const n={layout:"two-cols",info:"Comments 4.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[Q((D(),F("div",Q9,[M(a,hs({},{ranges:["12-16,20","10,21,25"]}),{default:T(()=>[J9]),_:1},16)])),[[r]]),Q((D(),F("div",X9,[M(a,hs({},{ranges:["10,21,25"]}),{default:T(()=>[sC]),_:1},16)])),[[c]])]),default:T(()=>[N9,Q((D(),F("div",U9,[H9,z9,o("\xA0 "),V9,o("\xA0 "),W9])),[[r]]),Q((D(),F("div",K9,[q9,G9,o("\xA0 "),Y9,o("\xA0 "),Z9])),[[c]])]),_:1},16)}}},nC=s("h1",null,"Comments",-1),lC={class:"hide-for-real",style:{"padding-right":"2vw"}},oC=s("h2",null,"Use comments instead of variables",-1),tC=s("br",null,null,-1),aC=s("br",null,null,-1),rC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1000"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"*"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"60"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Minutes * Milliseconds * Seconds = X Minutes")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1000"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"*"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"60"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Minutes * Milliseconds * Seconds = X Minutes")])])])],-1),cC={class:"hide-for-real",style:{"padding-right":"2vw"}},iC=s("h2",null,"Use various formats",-1),pC=s("br",null,null,-1),yC=s("br",null,null,-1),uC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/* Some men just want to watch the world burn. */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/** Some men just want to watch the world burn. **/")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/* Some men just want to watch the world burn. */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/** Some men just want to watch the world burn. **/")])])])],-1),AC={class:"hide-for-real"},hC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// ResultList.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Push value to ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// ResultList.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Push value to ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),dC={class:"hide-for-real"},fC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* ResultList. */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#758575"}},"/**** Push value to ResultList. ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* ResultList. */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#A0ADA0"}},"/**** Push value to ResultList. ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),BC={__name:"31",setup(e){const n={layout:"two-cols",info:"Comments 5.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[Q((D(),F("div",AC,[M(a,hs({},{ranges:["10,21,25","10,12,14"]}),{default:T(()=>[hC]),_:1},16)])),[[r]]),Q((D(),F("div",dC,[M(a,hs({},{ranges:["10,12-14,17,23"]}),{default:T(()=>[fC]),_:1},16)])),[[c]])]),default:T(()=>[nC,Q((D(),F("div",lC,[oC,tC,o("\xA0 "),aC,o("\xA0 "),rC])),[[r]]),Q((D(),F("div",cC,[iC,pC,o("\xA0 "),yC,o("\xA0 "),uC])),[[c]])]),_:1},16)}}},mC=s("h1",null,"Comments",-1),DC={class:"hide-for-real",style:{"padding-right":"2vw"}},gC=s("h2",null,"Use various formats",-1),CC=s("br",null,null,-1),vC=s("br",null,null,-1),bC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/* Some men just want to watch the world burn. */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/** Some men just want to watch the world burn. **/")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/* Some men just want to watch the world burn. */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// Some men just want to watch the world burn.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/** Some men just want to watch the world burn. **/")])])])],-1),_C={class:"hide-for-real",style:{"padding-right":"2vw"}},EC=s("h2",null,"Finally, you can also apply anything from the 'Naming' section.",-1),kC=s("br",null,null,-1),FC=s("br",null,null,-1),wC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// Sm3 M3n jst want")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"//      to WaTch THE WORLD BURN.")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// Sm3 M3n jst want")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"//      to WaTch THE WORLD BURN.")])])])],-1),xC={class:"hide-for-real"},SC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* ResultList. */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#758575"}},"/**** Push value to ResultList. ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get keys of object.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him crush your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* ResultList. */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Loop lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#A0ADA0"}},"/**** Push value to ResultList. ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return ResultList.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),OC={class:"hide-for-real"},TC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),$C={__name:"32",setup(e){const n={layout:"two-cols",info:"Comments 5.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[Q((D(),F("div",xC,[M(a,hs({},{ranges:["10,12-14,17,23","2,4,5,10,13,23,28"]}),{default:T(()=>[SC]),_:1},16)])),[[r]]),Q((D(),F("div",OC,[M(a,hs({},{ranges:["2,4,5,10,13,23,28"]}),{default:T(()=>[TC]),_:1},16)])),[[c]])]),default:T(()=>[mC,Q((D(),F("div",DC,[gC,CC,o("\xA0 "),vC,o("\xA0 "),bC])),[[r]]),Q((D(),F("div",_C,[EC,kC,o("\xA0 "),FC,o("\xA0 "),wC])),[[c]])]),_:1},16)}}},PC={style:{"padding-right":"0.5vw"}},RC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"result"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"callback"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"result"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"callback"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),LC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),jC={__name:"33",setup(e){const n={layout:"two-cols",info:"Naming 4.1"};return U(G),(l,t)=>{const a=Us;return D(),q(Ms,ps(rs(n)),{right:T(r=>[M(a,hs({},{ranges:[""]}),{default:T(()=>[LC]),_:1},16)]),default:T(()=>[s("div",PC,[M(a,hs({},{ranges:[""]}),{default:T(()=>[RC]),_:1},16)])]),_:1},16)}}},MC=s("h1",null,"Additional hints",-1),IC=s("img",{src:"https://media.giphy.com/media/mxQUQbIjXMSwo/giphy.gif"},null,-1),NC={__name:"34",setup(e){const n={layout:"center",class:"text-center",info:"Hints"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[MC,IC]),_:1},16))}},UC=s("h1",null,"Hints",-1),HC=s("div",{class:"hide-for-real",style:{"padding-right":"2vw"}},[s("h2",null,"Make conditions as complex as possible"),s("br"),o("\xA0 "),s("br"),o("\xA0 "),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// 1")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#B8A965"}},"isNotAvailable"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"isNotVisible"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// 2")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'button'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"?"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'button'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// 3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"isOrderButtonDisabled"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isLoggedInUser")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"items"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"items"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"getRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"backToCartRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"placeOrderRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"placeQuoteRequestIsRunning"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// 1")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#8C862B"}},"isNotAvailable"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"isNotVisible"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// 2")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'button'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"?"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'button'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// 3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"isOrderButtonDisabled"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isLoggedInUser")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"items"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"items"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"getRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"backToCartRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"placeOrderRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"placeQuoteRequestIsRunning"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])])],-1),zC={class:"hide-for-real"},VC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),WC={class:"hide-for-real"},KC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"continue"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"else"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"continue"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"else"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),qC={__name:"35",setup(e){const n={layout:"two-cols",info:"Hints 1.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[Q((D(),F("div",zC,[M(a,hs({},{ranges:["all","17,22-25"]}),{default:T(()=>[VC]),_:1},16)])),[[r]]),Q((D(),F("div",WC,[M(a,hs({},{ranges:["17,22-27"]}),{default:T(()=>[KC]),_:1},16)])),[[c]])]),default:T(()=>[UC,HC]),_:1},16)}}},GC=s("h1",null,"Hints",-1),YC={class:"hide-for-real",style:{"padding-right":"2vw"}},ZC=s("h2",null,"Make conditions as complex as possible",-1),QC=s("br",null,null,-1),JC=s("br",null,null,-1),XC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// 1")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#B8A965"}},"isNotAvailable"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"isNotVisible"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// 2")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'button'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"?"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'button'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"null"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// 3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"isOrderButtonDisabled"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isLoggedInUser")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"items"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"items"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"getRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"backToCartRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"placeOrderRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"this"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"placeQuoteRequestIsRunning"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// 1")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#8C862B"}},"isNotAvailable"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"isNotVisible"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// 2")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'button'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"?"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'button'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"null"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// 3")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"isOrderButtonDisabled"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isLoggedInUser")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"items"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"items"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"getRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"backToCartRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"placeOrderRequestIsRunning")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"this"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"placeQuoteRequestIsRunning"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),s0={class:"hide-for-real",style:{"padding-right":"2vw"}},e0=s("h2",null,"Drop linebreaks",-1),n0=s("br",null,null,-1),l0=s("br",null,null,-1),o0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"mappedProducts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"products"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"product"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"product"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isAvailable"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#C98A7D"}},"').sort((product_a, productB) => product_a.name.localCompare(productB.name)).map(({ id, name } => ({ id, name }))"),s("span",{style:{color:"#FDAEB7"}},";")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"mappedProducts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"products"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"product"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"product"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isAvailable"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#B56959"}},"').sort((product_a, productB) => product_a.name.localCompare(productB.name)).map(({ id, name } => ({ id, name }))"),s("span",{style:{color:"#B31D28"}},";")]),o(`
`),s("span",{class:"line"})])])],-1),t0={class:"hide-for-real"},a0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"continue"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"else"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"////// Check loop position.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Update loop index.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"continue"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"else"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),r0={class:"hide-for-real"},c0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Loop index. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Check loop position. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Update loop index. */"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"continue"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"else"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Loop index. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Check loop position. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Update loop index. */"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"continue"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"else"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),i0={__name:"36",setup(e){const n={layout:"two-cols",info:"Comments 2.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[Q((D(),F("div",t0,[M(a,hs({},{ranges:["15-19,22-27"]}),{default:T(()=>[a0]),_:1},16)])),[[r]]),Q((D(),F("div",r0,[M(a,hs({},{ranges:["15,19"]}),{default:T(()=>[c0]),_:1},16)])),[[c]])]),default:T(()=>[GC,Q((D(),F("div",YC,[ZC,QC,o("\xA0 "),JC,o("\xA0 "),XC])),[[r]]),Q((D(),F("div",s0,[e0,n0,o("\xA0 "),l0,o("\xA0 "),o0])),[[c]])]),_:1},16)}}},p0=s("h1",null,"Hints",-1),y0={class:"hide-for-real",style:{"padding-right":"2vw"}},u0=s("h2",null,"Drop linebreaks",-1),A0=s("br",null,null,-1),h0=s("br",null,null,-1),d0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"mappedProducts"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"products"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"product"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"product"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"isAvailable"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#C98A7D"}},"').sort((product_a, productB) => product_a.name.localCompare(productB.name)).map(({ id, name } => ({ id, name }))"),s("span",{style:{color:"#FDAEB7"}},";")]),o(`
`),s("span",{class:"line"})])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"mappedProducts"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"products"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"product"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"product"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"isAvailable"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#B56959"}},"').sort((product_a, productB) => product_a.name.localCompare(productB.name)).map(({ id, name } => ({ id, name }))"),s("span",{style:{color:"#B31D28"}},";")]),o(`
`),s("span",{class:"line"})])])],-1),f0={class:"hide-for-real",style:{"padding-right":"2vw"}},B0=s("h2",null,"Get rid of semicolons and brackets",-1),m0=s("br",null,null,-1),D0=s("br",null,null,-1),g0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'foo'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"b"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'baa'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#B8A965"}},"c"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"return")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'foo'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"b"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'baa'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#8C862B"}},"c"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"return")])])])],-1),C0={class:"hide-for-real"},v0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Loop index. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Check loop position. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Update loop index. */"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"continue"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"else"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Loop index. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Check loop position. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Update loop index. */"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"continue"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"else"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),b0={class:"hide-for-real"},_0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Loop index. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Check loop position. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Update loop index. */"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"continue")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Loop index. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Check loop position. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Update loop index. */"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"continue")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),E0={__name:"37",setup(e){const n={layout:"two-cols",info:"Comments 3.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[Q((D(),F("div",C0,[M(a,hs({},{ranges:["15,19","10,16,19,22"]}),{default:T(()=>[v0]),_:1},16)])),[[r]]),Q((D(),F("div",b0,[M(a,hs({},{ranges:["10,16,19-21,24"]}),{default:T(()=>[_0]),_:1},16)])),[[c]])]),default:T(()=>[p0,Q((D(),F("div",y0,[u0,A0,o("\xA0 "),h0,o("\xA0 "),d0])),[[r]]),Q((D(),F("div",f0,[B0,m0,o("\xA0 "),D0,o("\xA0 "),g0])),[[c]])]),_:1},16)}}},k0=s("h1",null,"Hints",-1),F0=s("div",{class:"hide-for-real",style:{"padding-right":"2vw"}},[s("h2",null,"Use random linebreaks, indents and quotation marks"),s("br"),o("\xA0 "),s("br"),o("\xA0 "),s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"foo"')]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"b"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'baa'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"c"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"`bar`")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#B8A965"}},"c"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}},"   "),s("span",{style:{color:"#4D9375"}},"return")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"foo"')]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"b"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'baa'")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"c"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"`bar`")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#8C862B"}},"c"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}},"   "),s("span",{style:{color:"#1C6B48"}},"return")])])])])],-1),w0={class:"hide-for-real"},x0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Loop index. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Check loop position. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Update loop index. */"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"continue")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Loop index. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Check loop position. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Update loop index. */"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"continue")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),S0={class:"hide-for-real"},O0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}},"   "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}}," *[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}},"     "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Loop index. */"),s("span",{style:{color:"#DBD7CA"}}," ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"       "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Check loop position. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Update loop index. */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"continue")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}},"   "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}}," *[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}},"     "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Loop index. */"),s("span",{style:{color:"#393A34"}}," ")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"       "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Check loop position. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Update loop index. */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"continue")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),T0={__name:"38",setup(e){const n={layout:"two-cols",info:"Comments 4.1"};return U(G),(l,t)=>{const a=Us,r=vs("click-hide"),c=vs("after");return D(),q(Ms,ps(rs(n)),{right:T(i=>[Q((D(),F("div",w0,[M(a,hs({},{ranges:["all"]}),{default:T(()=>[x0]),_:1},16)])),[[r]]),Q((D(),F("div",S0,[M(a,hs({},{ranges:[""]}),{default:T(()=>[O0]),_:1},16)])),[[c]])]),default:T(()=>[k0,F0]),_:1},16)}}},$0={style:{"padding-right":"0.5vw"}},P0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#758575"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"function"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#758575"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"*[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filter"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"callback"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"result"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"value"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"callback"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"index"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"sourceArray"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"value"),s("span",{style:{color:"#858585"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"result"),s("span",{style:{color:"#858585"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Filters an array by calling the given condition callback for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#A0ADA0"}}," - The array to be filtered.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"function"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#A0ADA0"}}," - Condition callback that is called for each entry.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"*[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filter"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"callback"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"result"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"value"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},"];")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"callback"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"index"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"sourceArray"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"value"),s("span",{style:{color:"#8E8F8B"}},");")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"result"),s("span",{style:{color:"#8E8F8B"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),R0=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Get_keys of")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}},"   "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"array"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#758575"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"param"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}},"Function "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#758575"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," * "),s("span",{style:{color:"#858585"}},"@"),s("span",{style:{color:"#CB7676"}},"returns"),s("span",{style:{color:"#758575"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#A1B567"}}," *[]"),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}}," */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"filTerArRayelEmentS"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}},"     "),s("span",{style:{color:"#B8A965"}},"thanos"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* a */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"//")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"for"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Loop index. */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"       "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#429988"}},"length"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"||"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"0"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Check loop position. */"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"/* Update loop index. */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#D4976C"}},"vaule"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#758575"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"!"),s("span",{style:{color:"#A1B567"}},"thanos"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"\xEC"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"lischt\xE4"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"==="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"continue")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"push"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"vaule"),s("span",{style:{color:"#858585"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"/**")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Get_keys of")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * Obj.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}},"   "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"array"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#A0ADA0"}}," - The to be Filtred Array.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"param"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}},"Function "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#A0ADA0"}}," - Let him CRUSH your team members.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," *")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," * "),s("span",{style:{color:"#8E8F8B"}},"@"),s("span",{style:{color:"#AB5959"}},"returns"),s("span",{style:{color:"#A0ADA0"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#6C7834"}}," *[]"),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}}," */")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"filTerArRayelEmentS"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}},"     "),s("span",{style:{color:"#8C862B"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* a */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Oolp lischt\xE4 items.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"for"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Loop index. */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"       "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#2F8A89"}},"length"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"||"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"0"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Check loop position. */"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"/* Update loop index. */")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A65E2B"}},"vaule"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},"]")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A0ADA0"}},"/**** Posh value to A ****/")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"!"),s("span",{style:{color:"#6C7834"}},"thanos"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"\xEC"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"lischt\xE4"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"==="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"continue")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"push"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"vaule"),s("span",{style:{color:"#8E8F8B"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Return a.")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),L0={__name:"39",setup(e){const n={layout:"two-cols",info:"Naming 4.1"};return U(G),(l,t)=>{const a=Us;return D(),q(Ms,ps(rs(n)),{right:T(r=>[M(a,hs({},{ranges:[""]}),{default:T(()=>[R0]),_:1},16)]),default:T(()=>[s("div",$0,[M(a,hs({},{ranges:[""]}),{default:T(()=>[P0]),_:1},16)])]),_:1},16)}}},j0=s("h1",null,"WTFAA****RG!",-1),M0=s("img",{src:"https://media.giphy.com/media/LTM9zeisAfX9xQbz8Y/giphy.gif"},null,-1),I0={__name:"40",setup(e){const n={layout:"center",class:"text-center",info:"Hints"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[j0,M0]),_:1},16))}},N0=s("h1",null,"Thank you!",-1),U0={__name:"41",setup(e){const n={layout:"center",class:"text-center",info:"Hints"};return U(G),(l,t)=>(D(),q(Js,ps(rs(n)),{default:T(()=>[N0]),_:1},16))}},H0=[{path:"1",name:"page-1",component:u7,meta:{theme:"seriph",background:"none",highlighter:"shiki",lineNumbers:!1,layout:"center",download:!0,slide:{raw:`---
theme: seriph
background: none
highlighter: shiki
lineNumbers: false
layout: center
download: true
---

#
<img src="/public/title.png" style="width: 80%; height: auto; display: block; margin: auto;">

<!--
Guten Abend alle zusammen

Sch\xF6n das ihr hier zur valantic gefunden habt.
-->
`,content:`#
<img src="/public/title.png" style="width: 80%; height: auto; display: block; margin: auto;">`,frontmatter:{theme:"seriph",background:"none",highlighter:"shiki",lineNumbers:!1,layout:"center",download:!0},note:`Guten Abend alle zusammen

Sch\xF6n das ihr hier zur valantic gefunden habt.`,index:0,start:0,end:18,notesHTML:`<p>Guten Abend alle zusammen</p>
<p>Sch\xF6n das ihr hier zur valantic gefunden habt.</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:_7,meta:{layout:"image-left",image:"patric.jpg",slide:{raw:`---
layout: image-left
image: patric.jpg
---

<picture style="display: block; margin-bottom: 3vh;">
 <source media="prefers-color-scheme: dark" src="/public/logo-valantic-white.svg">
 <source media="prefers-color-scheme: light" src="/public/logo-valantic.svg">
 <img style="width: 5vw; height: auto;" src="/public/logo-valantic-white.svg">
</picture>
<h1>Patric Eberle</h1>

Senior Frontend Developer and Teamlead

<ul style="display: flex; align-items:center; list-style: none; padding: 0; margin: 12vh 0 0 0; gap: 1vw;">
  <li style="margin: 0; padding: 0;">\u{1F3B2}</li>
  <li style="margin: 0; padding: 0;">\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}</li>
  <li style="margin: 0; padding: 0;">
    <img src="/public/netflix.svg" style="width: 1em; height: auto">
  </li>
  <li style="margin: 0; padding: 0;">\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F</li>
  <li style="margin: 0; padding: 0;">\u{1F9D8}\u{1F3FB}\u200D\u2642\uFE0F</li>
  <li style="margin: 0; padding: 0;">
    <img src="/public/vue.svg" style="width: 1em; height: auto">
  </li>
</ul>

<ul style="list-style: none; padding: 0; margin: 4vh 0 0 0; gap: 1vw; font-size: 0.8em;">
  <li style="margin: 0; padding: 0 0 1vh 0;">
    <a class="hidden-link" href="https://github.com/patric-eberle">https://github.com/patric-eberle</a>
  </li>
  <li style="margin: 0; padding: 0 0 1vh 0;">
    <a class="hidden-link" href="https://www.linkedin.com/in/patric-eberle-22518911a">https://www.linkedin.com/in/patric-eberle-22518911a</a>
  </li>
  <li style="margin: 0; padding: 0 0 1vh 0;">
    <a class="hidden-link" href="mailto:patric.eberle@cec.valantic.com">patric.eberle@cec.valantic.com</a>
  </li>
</ul>

<!--
Mein Name ist Patric Eberle

Ich bin
- **Senior Frontend Developer**
- **Lead** von einem 5 K\xF6pfigen Frontendteam beim Valantic
- **seit 2016** bei valantic

In meiner Freizeit
- mit Freunden f\xFCr einen **Strategiespieleabend** treffen
- Geniesse ich die Zeit mit meiner **Partnerin**
- Verbringe ich zu viel Zeit auf **Netflix**
- **Laufe** ich gerne
- habe ich **Yoga** entdeckt
- bin ich **Vue Enthusiast**

Meine **Kontaktm\xF6glichkeiten** verraten es schon:
Ich **bin kein sozialer Mensch**.

Danken m\xF6chte ich auch **Mathias Ober**,
der mich nicht nur bei der Umsetzung,

sondern **in der Vergangenheit** auch mit
**diversen inspierierenden Beispielen** unterst\xFCtz hat.

**Ah Mist** ... dass wollten wir ja gar nicht erw\xE4hnen \u{1F62C}
-->
`,content:`<picture style="display: block; margin-bottom: 3vh;">
 <source media="prefers-color-scheme: dark" src="/public/logo-valantic-white.svg">
 <source media="prefers-color-scheme: light" src="/public/logo-valantic.svg">
 <img style="width: 5vw; height: auto;" src="/public/logo-valantic-white.svg">
</picture>
<h1>Patric Eberle</h1>

Senior Frontend Developer and Teamlead

<ul style="display: flex; align-items:center; list-style: none; padding: 0; margin: 12vh 0 0 0; gap: 1vw;">
  <li style="margin: 0; padding: 0;">\u{1F3B2}</li>
  <li style="margin: 0; padding: 0;">\u{1F469}\u{1F3FD}\u200D\u2764\uFE0F\u200D\u{1F468}\u{1F3FB}</li>
  <li style="margin: 0; padding: 0;">
    <img src="/public/netflix.svg" style="width: 1em; height: auto">
  </li>
  <li style="margin: 0; padding: 0;">\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F</li>
  <li style="margin: 0; padding: 0;">\u{1F9D8}\u{1F3FB}\u200D\u2642\uFE0F</li>
  <li style="margin: 0; padding: 0;">
    <img src="/public/vue.svg" style="width: 1em; height: auto">
  </li>
</ul>

<ul style="list-style: none; padding: 0; margin: 4vh 0 0 0; gap: 1vw; font-size: 0.8em;">
  <li style="margin: 0; padding: 0 0 1vh 0;">
    <a class="hidden-link" href="https://github.com/patric-eberle">https://github.com/patric-eberle</a>
  </li>
  <li style="margin: 0; padding: 0 0 1vh 0;">
    <a class="hidden-link" href="https://www.linkedin.com/in/patric-eberle-22518911a">https://www.linkedin.com/in/patric-eberle-22518911a</a>
  </li>
  <li style="margin: 0; padding: 0 0 1vh 0;">
    <a class="hidden-link" href="mailto:patric.eberle@cec.valantic.com">patric.eberle@cec.valantic.com</a>
  </li>
</ul>`,frontmatter:{layout:"image-left",image:"patric.jpg"},note:`Mein Name ist Patric Eberle

Ich bin
- **Senior Frontend Developer**
- **Lead** von einem 5 K\xF6pfigen Frontendteam beim Valantic
- **seit 2016** bei valantic

In meiner Freizeit
- mit Freunden f\xFCr einen **Strategiespieleabend** treffen
- Geniesse ich die Zeit mit meiner **Partnerin**
- Verbringe ich zu viel Zeit auf **Netflix**
- **Laufe** ich gerne
- habe ich **Yoga** entdeckt
- bin ich **Vue Enthusiast**

Meine **Kontaktm\xF6glichkeiten** verraten es schon:
Ich **bin kein sozialer Mensch**.

Danken m\xF6chte ich auch **Mathias Ober**,
der mich nicht nur bei der Umsetzung,

sondern **in der Vergangenheit** auch mit
**diversen inspierierenden Beispielen** unterst\xFCtz hat.

**Ah Mist** ... dass wollten wir ja gar nicht erw\xE4hnen \u{1F62C}`,index:1,start:18,end:85,notesHTML:`<p>Mein Name ist Patric Eberle</p>
<p>Ich bin</p>
<ul>
<li><strong>Senior Frontend Developer</strong></li>
<li><strong>Lead</strong> von einem 5 K\xF6pfigen Frontendteam beim Valantic</li>
<li><strong>seit 2016</strong> bei valantic</li>
</ul>
<p>In meiner Freizeit</p>
<ul>
<li>mit Freunden f\xFCr einen <strong>Strategiespieleabend</strong> treffen</li>
<li>Geniesse ich die Zeit mit meiner <strong>Partnerin</strong></li>
<li>Verbringe ich zu viel Zeit auf <strong>Netflix</strong></li>
<li><strong>Laufe</strong> ich gerne</li>
<li>habe ich <strong>Yoga</strong> entdeckt</li>
<li>bin ich <strong>Vue Enthusiast</strong></li>
</ul>
<p>Meine <strong>Kontaktm\xF6glichkeiten</strong> verraten es schon:
Ich <strong>bin kein sozialer Mensch</strong>.</p>
<p>Danken m\xF6chte ich auch <strong>Mathias Ober</strong>,
der mich nicht nur bei der Umsetzung,</p>
<p>sondern <strong>in der Vergangenheit</strong> auch mit
<strong>diversen inspierierenden Beispielen</strong> unterst\xFCtz hat.</p>
<p><strong>Ah Mist</strong> ... dass wollten wir ja gar nicht erw\xE4hnen \u{1F62C}</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:F7,meta:{layout:"center",slide:{raw:`---
layout: center
---

#
<img src="/public/title.png" style="width: 80%; height: auto; display: block; margin: auto;">

<!--
In meinem Talk geht es um das Thema
welche Praktiken ihr anwenden k\xF6nnt,

um euch **als Entwickler
unentbehrlich zu machen**.

Sprich, wie schreibt man Code,
den im **Optimalfall nur ihr versteht**.
-->
`,content:`#
<img src="/public/title.png" style="width: 80%; height: auto; display: block; margin: auto;">`,frontmatter:{layout:"center"},note:`In meinem Talk geht es um das Thema
welche Praktiken ihr anwenden k\xF6nnt,

um euch **als Entwickler
unentbehrlich zu machen**.

Sprich, wie schreibt man Code,
den im **Optimalfall nur ihr versteht**.`,index:2,start:85,end:103,notesHTML:`<p>In meinem Talk geht es um das Thema
welche Praktiken ihr anwenden k\xF6nnt,</p>
<p>um euch <strong>als Entwickler
unentbehrlich zu machen</strong>.</p>
<p>Sprich, wie schreibt man Code,
den im <strong>Optimalfall nur ihr versteht</strong>.</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:O7,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Your worst enemies

<img src="/public/thanos.jpg" style="width: 80%; height: auto; display: block; margin: auto;">

<!--
**Bevor** wir aber **einsteigen**

m\xFCssen wir uns mit **unseren Gegenspielern**
vertraut machen, die sich **f\xFCr ein 
geordnetes Universum** einsetzen

uns aber **beim Schreiben** unseres
**professionellen Codes in die Quere**
kommen k\xF6nnten.
-->
`,title:"Your worst enemies",level:1,content:`# Your worst enemies

<img src="/public/thanos.jpg" style="width: 80%; height: auto; display: block; margin: auto;">`,frontmatter:{layout:"center",class:"text-center"},note:`**Bevor** wir aber **einsteigen**

m\xFCssen wir uns mit **unseren Gegenspielern**
vertraut machen, die sich **f\xFCr ein 
geordnetes Universum** einsetzen

uns aber **beim Schreiben** unseres
**professionellen Codes in die Quere**
kommen k\xF6nnten.`,index:3,start:103,end:124,notesHTML:`<p><strong>Bevor</strong> wir aber <strong>einsteigen</strong></p>
<p>m\xFCssen wir uns mit <strong>unseren Gegenspielern</strong>
vertraut machen, die sich <strong>f\xFCr ein
geordnetes Universum</strong> einsetzen</p>
<p>uns aber <strong>beim Schreiben</strong> unseres
<strong>professionellen Codes in die Quere</strong>
kommen k\xF6nnten.</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:P7,meta:{layout:"center",class:"text-center",info:"Prettier 1",slide:{raw:`---
layout: center
class: 'text-center'
info: Prettier 1
---

<img src="/public/prettier.svg">
`,content:'<img src="/public/prettier.svg">',frontmatter:{layout:"center",class:"text-center",info:"Prettier 1"},index:4,start:124,end:132,notesHTML:"",filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:N7,meta:{layout:"two-cols",info:"Prettier 2",slide:{raw:`---
layout: two-cols
info: Prettier 2
---

<div class="center-horizontal center-vertical">
  <img src="/public/prettier2.svg" style="width: 9vw; height: auto;">
</div>

::right::

<ul class="center-vertical">
  <li>Opinionated code formatter</li>
  <li v-click>Automated code styles</li>
  <li v-click>Supports Git Hooks</li>
  <li v-click>Supports CI</li>
</ul>

<!--
Prettier ist

- **rechthaberischer** Code Formatierer<br>
*Kein Mitspracherecht, etwas f\xFCr Amateure*

- **Automatisiert** das anwenden von Codestyles<br>
*Kontrollverlust \xFCber eigenen Code*

- Kann in **Git Hooks** ausgef\xFChrt werden<br>
*Code wird einfach \xFCberschrieben*

- Kann in **Continious Integration Pipelines** ausgef\xFChrt werden<br>
*Vortlaufende Integration, Nicht angepasste Code f\xFChrt zum Abbruch der Pipeline*
-->
`,content:`<div class="center-horizontal center-vertical">
  <img src="/public/prettier2.svg" style="width: 9vw; height: auto;">
</div>

::right::

<ul class="center-vertical">
  <li>Opinionated code formatter</li>
  <li v-click>Automated code styles</li>
  <li v-click>Supports Git Hooks</li>
  <li v-click>Supports CI</li>
</ul>`,frontmatter:{layout:"two-cols",info:"Prettier 2"},note:`Prettier ist

- **rechthaberischer** Code Formatierer<br>
*Kein Mitspracherecht, etwas f\xFCr Amateure*

- **Automatisiert** das anwenden von Codestyles<br>
*Kontrollverlust \xFCber eigenen Code*

- Kann in **Git Hooks** ausgef\xFChrt werden<br>
*Code wird einfach \xFCberschrieben*

- Kann in **Continious Integration Pipelines** ausgef\xFChrt werden<br>
*Vortlaufende Integration, Nicht angepasste Code f\xFChrt zum Abbruch der Pipeline*`,index:5,start:132,end:166,notesHTML:`<p>Prettier ist</p>
<ul>
<li>
<p><strong>rechthaberischer</strong> Code Formatierer<br>
<em>Kein Mitspracherecht, etwas f\xFCr Amateure</em></p>
</li>
<li>
<p><strong>Automatisiert</strong> das anwenden von Codestyles<br>
<em>Kontrollverlust \xFCber eigenen Code</em></p>
</li>
<li>
<p>Kann in <strong>Git Hooks</strong> ausgef\xFChrt werden<br>
<em>Code wird einfach \xFCberschrieben</em></p>
</li>
<li>
<p>Kann in <strong>Continious Integration Pipelines</strong> ausgef\xFChrt werden<br>
<em>Vortlaufende Integration, Nicht angepasste Code f\xFChrt zum Abbruch der Pipeline</em></p>
</li>
</ul>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:z7,meta:{layout:"center",class:"text-center",info:"ESLint 1",slide:{raw:`---
layout: center
class: 'text-center'
info: ESLint 1
---

<img src="/public/eslint.svg" style="width: 25vw; height: auto;">
`,content:'<img src="/public/eslint.svg" style="width: 25vw; height: auto;">',frontmatter:{layout:"center",class:"text-center",info:"ESLint 1"},index:6,start:166,end:174,notesHTML:"",filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:G7,meta:{layout:"two-cols",info:"ESLint 2",slide:{raw:`---
layout: two-cols
info: ESLint 2
---

<div class="center-horizontal center-vertical">
  <img src="/public/eslint2.svg" style="width: 8vw; height: auto;">
</div>

::right::

<ul class="center-vertical">
  <li>Enforces best practices</li>
  <li v-click>Enforces code styles</li>
  <li v-click>Supports \`--fix\`</li>
  <li v-click>Supports Git Hooks</li>
  <li v-click>Supports CI</li>
</ul>

<!--
- **Zwingt** sogenannte **"Best Practices"** auf<br>
*Anf\xE4nger haben mitspracherecht*


- Setzt **Codestyle-Standards** durch<br>
*Meine Kreativit\xE4t wird unterdr\xFCck, ich bin eingeschr\xE4nkt*

- **Automatische Korrektur**<br>
*Kann von jedem Anf\xE4nger ausgef\xFChrt werden*

- Kann ebenfalls in den **Git Hooks und CI Pipelines** ausgef\xFChrt werden
-->
`,content:`<div class="center-horizontal center-vertical">
  <img src="/public/eslint2.svg" style="width: 8vw; height: auto;">
</div>

::right::

<ul class="center-vertical">
  <li>Enforces best practices</li>
  <li v-click>Enforces code styles</li>
  <li v-click>Supports \`--fix\`</li>
  <li v-click>Supports Git Hooks</li>
  <li v-click>Supports CI</li>
</ul>`,frontmatter:{layout:"two-cols",info:"ESLint 2"},note:`- **Zwingt** sogenannte **"Best Practices"** auf<br>
*Anf\xE4nger haben mitspracherecht*


- Setzt **Codestyle-Standards** durch<br>
*Meine Kreativit\xE4t wird unterdr\xFCck, ich bin eingeschr\xE4nkt*

- **Automatische Korrektur**<br>
*Kann von jedem Anf\xE4nger ausgef\xFChrt werden*

- Kann ebenfalls in den **Git Hooks und CI Pipelines** ausgef\xFChrt werden`,index:7,start:174,end:207,notesHTML:`<ul>
<li>
<p><strong>Zwingt</strong> sogenannte <strong>&quot;Best Practices&quot;</strong> auf<br>
<em>Anf\xE4nger haben mitspracherecht</em></p>
</li>
<li>
<p>Setzt <strong>Codestyle-Standards</strong> durch<br>
<em>Meine Kreativit\xE4t wird unterdr\xFCck, ich bin eingeschr\xE4nkt</em></p>
</li>
<li>
<p><strong>Automatische Korrektur</strong><br>
<em>Kann von jedem Anf\xE4nger ausgef\xFChrt werden</em></p>
</li>
<li>
<p>Kann ebenfalls in den <strong>Git Hooks und CI Pipelines</strong> ausgef\xFChrt werden</p>
</li>
</ul>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Z7,meta:{layout:"center",class:"text-center",info:"TypeScript 1",slide:{raw:`---
layout: center
class: 'text-center'
info: TypeScript 1
---

<img src="/public/typescript.svg" style="width: 10vw; height: auto;">
`,content:'<img src="/public/typescript.svg" style="width: 10vw; height: auto;">',frontmatter:{layout:"center",class:"text-center",info:"TypeScript 1"},index:8,start:207,end:215,notesHTML:"",filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:sm,meta:{layout:"two-cols",info:"TypeScript 2",slide:{raw:`---
layout: two-cols
info: TypeScript 2
---

<div class="center-horizontal center-vertical">
  <img src="/public/typescript.svg" style="width: 8vw; height: auto;">
</div>

::right::

<ul class="center-vertical">
  <li>Superset of JS</li>
  <li v-click>Enforces strict types</li>
  <li v-click>Improves code hinting</li>
</ul>

<!--
- Ein **Superset von JS**<br>
*"Erweitert" JS mit Typisierung und einigen anderen Besonderheiten*

- *Erzwingt spezifische Typen*<br>
*Verhindert "ung\xFCltige" Typen und mehrfache Verwenden von Variablen*

- Unterst\xFCtz IDE beim Anzeigen von *Code-Hinweisen*<br>
*Selbst Unerfahren glauben, komplexe Software bedienen zu k\xF6nnen, Code dokumentiert sich selbst*
-->
`,content:`<div class="center-horizontal center-vertical">
  <img src="/public/typescript.svg" style="width: 8vw; height: auto;">
</div>

::right::

<ul class="center-vertical">
  <li>Superset of JS</li>
  <li v-click>Enforces strict types</li>
  <li v-click>Improves code hinting</li>
</ul>`,frontmatter:{layout:"two-cols",info:"TypeScript 2"},note:`- Ein **Superset von JS**<br>
*"Erweitert" JS mit Typisierung und einigen anderen Besonderheiten*

- *Erzwingt spezifische Typen*<br>
*Verhindert "ung\xFCltige" Typen und mehrfache Verwenden von Variablen*

- Unterst\xFCtz IDE beim Anzeigen von *Code-Hinweisen*<br>
*Selbst Unerfahren glauben, komplexe Software bedienen zu k\xF6nnen, Code dokumentiert sich selbst*`,index:9,start:215,end:243,notesHTML:`<ul>
<li>
<p>Ein <strong>Superset von JS</strong><br>
<em>&quot;Erweitert&quot; JS mit Typisierung und einigen anderen Besonderheiten</em></p>
</li>
<li>
<p><em>Erzwingt spezifische Typen</em><br>
<em>Verhindert &quot;ung\xFCltige&quot; Typen und mehrfache Verwenden von Variablen</em></p>
</li>
<li>
<p>Unterst\xFCtz IDE beim Anzeigen von <em>Code-Hinweisen</em><br>
<em>Selbst Unerfahren glauben, komplexe Software bedienen zu k\xF6nnen, Code dokumentiert sich selbst</em></p>
</li>
</ul>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:nm,meta:{layout:"center",class:"text-center",info:"IDE 1",slide:{raw:`---
layout: center
class: 'text-center'
info: IDE 1
---

<div style="display: flex; gap: 2vw;">
  <img src="/public/vscode.svg" style="width: 3vw; height: auto;">
  <img src="/public/phpstorm.svg" style="width: 3vw; height: auto;">
  <img src="/public/webstorm.svg" style="width: 3vw; height: auto;">
  <span style="font-size: 3vw;">\u2026</span>
</div>
`,content:`<div style="display: flex; gap: 2vw;">
  <img src="/public/vscode.svg" style="width: 3vw; height: auto;">
  <img src="/public/phpstorm.svg" style="width: 3vw; height: auto;">
  <img src="/public/webstorm.svg" style="width: 3vw; height: auto;">
  <span style="font-size: 3vw;">\u2026</span>
</div>`,frontmatter:{layout:"center",class:"text-center",info:"IDE 1"},index:10,start:243,end:256,notesHTML:"",filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:am,meta:{layout:"two-cols",info:"IDE 2",slide:{raw:`---
layout: two-cols
info: IDE 2
---

<div class="center-horizontal center-vertical" style="gap: 3vh;">
  <img src="/public/vscode.svg" style="width: 6vh; height: auto;">
  <img src="/public/phpstorm.svg" style="width: 6vh; height: auto;">
  <img src="/public/webstorm.svg" style="width: 6vh; height: auto;">
</div>

::right::

<ul class="center-vertical">
  <li>Autocompletion</li>
  <li v-click>Auto formatting</li>
  <li v-click>Type hints</li>
  <li v-click>Code hints</li>
  <li v-click>Go to definition/usage</li>
  <li v-click>Spell checking</li>
</ul>

<!--
IDEs

- **Vervollst\xE4ndigungshilfe**<br>
*Unterst\xFCtzen unerfahrene Entwickler beim Erg\xE4nzen von bestehendem Code*

- **Code Formatierung**<br>
*Kann Detailarbeit innert Sekunden \xFCber den Haufen werfen*

- **Typen Informationen**<br>
*Versuchen automatisiert Informationen \xFCber den Code zu extrahieren*

- **Code Empfehlungen/Dokumentation**<br>
*Gibt Unerfahrenen Hintergrundinformationen zu unbekannten Eigenschaften*

- **Zu Definitionen und Verwendungen springen**<br>
*Erlaubt es Anf\xE4ngern sich im Code zu bewegen als w\xFCrden sie sich auskennen*

- **Rechtschreibpr\xFCfung**<br>
*F\xFCgt st\xF6rende, optische Elemente zum Code hinzu*
-->
`,content:`<div class="center-horizontal center-vertical" style="gap: 3vh;">
  <img src="/public/vscode.svg" style="width: 6vh; height: auto;">
  <img src="/public/phpstorm.svg" style="width: 6vh; height: auto;">
  <img src="/public/webstorm.svg" style="width: 6vh; height: auto;">
</div>

::right::

<ul class="center-vertical">
  <li>Autocompletion</li>
  <li v-click>Auto formatting</li>
  <li v-click>Type hints</li>
  <li v-click>Code hints</li>
  <li v-click>Go to definition/usage</li>
  <li v-click>Spell checking</li>
</ul>`,frontmatter:{layout:"two-cols",info:"IDE 2"},note:`IDEs

- **Vervollst\xE4ndigungshilfe**<br>
*Unterst\xFCtzen unerfahrene Entwickler beim Erg\xE4nzen von bestehendem Code*

- **Code Formatierung**<br>
*Kann Detailarbeit innert Sekunden \xFCber den Haufen werfen*

- **Typen Informationen**<br>
*Versuchen automatisiert Informationen \xFCber den Code zu extrahieren*

- **Code Empfehlungen/Dokumentation**<br>
*Gibt Unerfahrenen Hintergrundinformationen zu unbekannten Eigenschaften*

- **Zu Definitionen und Verwendungen springen**<br>
*Erlaubt es Anf\xE4ngern sich im Code zu bewegen als w\xFCrden sie sich auskennen*

- **Rechtschreibpr\xFCfung**<br>
*F\xFCgt st\xF6rende, optische Elemente zum Code hinzu*`,index:11,start:256,end:300,notesHTML:`<p>IDEs</p>
<ul>
<li>
<p><strong>Vervollst\xE4ndigungshilfe</strong><br>
<em>Unterst\xFCtzen unerfahrene Entwickler beim Erg\xE4nzen von bestehendem Code</em></p>
</li>
<li>
<p><strong>Code Formatierung</strong><br>
<em>Kann Detailarbeit innert Sekunden \xFCber den Haufen werfen</em></p>
</li>
<li>
<p><strong>Typen Informationen</strong><br>
<em>Versuchen automatisiert Informationen \xFCber den Code zu extrahieren</em></p>
</li>
<li>
<p><strong>Code Empfehlungen/Dokumentation</strong><br>
<em>Gibt Unerfahrenen Hintergrundinformationen zu unbekannten Eigenschaften</em></p>
</li>
<li>
<p><strong>Zu Definitionen und Verwendungen springen</strong><br>
<em>Erlaubt es Anf\xE4ngern sich im Code zu bewegen als w\xFCrden sie sich auskennen</em></p>
</li>
<li>
<p><strong>Rechtschreibpr\xFCfung</strong><br>
<em>F\xFCgt st\xF6rende, optische Elemente zum Code hinzu</em></p>
</li>
</ul>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:im,meta:{layout:"center",info:"Fight",class:"text-center",slide:{raw:`---
layout: center
info: Fight
class: text-center
---

<h1>How to fight enemies?</h1>
<img src="https://media.giphy.com/media/WwC5VAvhHoH7EjCpPz/giphy.gif">

<!--
Was kannst du **gegen** diese **Abnormalit\xE4ten** unternehmen?
-->
`,content:`<h1>How to fight enemies?</h1>
<img src="https://media.giphy.com/media/WwC5VAvhHoH7EjCpPz/giphy.gif">`,frontmatter:{layout:"center",info:"Fight",class:"text-center"},note:"Was kannst du **gegen** diese **Abnormalit\xE4ten** unternehmen?",index:12,start:300,end:313,notesHTML:`<p>Was kannst du <strong>gegen</strong> diese <strong>Abnormalit\xE4ten</strong> unternehmen?</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Am,meta:{layout:"center",info:"Fight",slide:{raw:`---
layout: center
info: Fight
---

<h1>How to fight against enemies?</h1>
<ul class="center-vertical">
  <li>Ignore setup instructions</li>
  <li v-click>Skip Git Hooks</li>
  <li v-click>Ignore pipelines</li>
  <li v-click>Fight opinions</li>
  <li v-click>Use your own setup</li>
</ul>

<!--
- Ignoriere gezielt **Installationsinstruktionen**<br>
*Git Hooks, Scripts und Pipelines manipulieren*

- *Git Hooks* beim Commit *unterbinden*

- **Pipelines** beim Mergen **ignorieren**<br>
*Achte darauf, dass du Adminrechte zu Beginn des Projektes beantragst*

- F\xFCr **Diskussionen** mit Anf\xE4ngern und Besserwissern **wapnen**<br>
*Suche stichfeste, nicht wiederlegbare Argumente f\xFCr
Diskussionen, im Notfall ein Streitgespr\xE4ch beginnen*

- Eigenes **Softwaresetup** verwenden<br>
*Dabei geziehlt Projektvorgaben und Best Practices ignorieren*
-->
`,content:`<h1>How to fight against enemies?</h1>
<ul class="center-vertical">
  <li>Ignore setup instructions</li>
  <li v-click>Skip Git Hooks</li>
  <li v-click>Ignore pipelines</li>
  <li v-click>Fight opinions</li>
  <li v-click>Use your own setup</li>
</ul>`,frontmatter:{layout:"center",info:"Fight"},note:`- Ignoriere gezielt **Installationsinstruktionen**<br>
*Git Hooks, Scripts und Pipelines manipulieren*

- *Git Hooks* beim Commit *unterbinden*

- **Pipelines** beim Mergen **ignorieren**<br>
*Achte darauf, dass du Adminrechte zu Beginn des Projektes beantragst*

- F\xFCr **Diskussionen** mit Anf\xE4ngern und Besserwissern **wapnen**<br>
*Suche stichfeste, nicht wiederlegbare Argumente f\xFCr
Diskussionen, im Notfall ein Streitgespr\xE4ch beginnen*

- Eigenes **Softwaresetup** verwenden<br>
*Dabei geziehlt Projektvorgaben und Best Practices ignorieren*`,index:13,start:313,end:344,notesHTML:`<ul>
<li>
<p>Ignoriere gezielt <strong>Installationsinstruktionen</strong><br>
<em>Git Hooks, Scripts und Pipelines manipulieren</em></p>
</li>
<li>
<p><em>Git Hooks</em> beim Commit <em>unterbinden</em></p>
</li>
<li>
<p><strong>Pipelines</strong> beim Mergen <strong>ignorieren</strong><br>
<em>Achte darauf, dass du Adminrechte zu Beginn des Projektes beantragst</em></p>
</li>
<li>
<p>F\xFCr <strong>Diskussionen</strong> mit Anf\xE4ngern und Besserwissern <strong>wapnen</strong><br>
<em>Suche stichfeste, nicht wiederlegbare Argumente f\xFCr
Diskussionen, im Notfall ein Streitgespr\xE4ch beginnen</em></p>
</li>
<li>
<p>Eigenes <strong>Softwaresetup</strong> verwenden<br>
<em>Dabei geziehlt Projektvorgaben und Best Practices ignorieren</em></p>
</li>
</ul>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:fm,meta:{layout:"center",class:"text-center",info:"Weapons",slide:{raw:`---
layout: center
class: text-center
info: Weapons
---

<h1>Hackers: choose your weapons!</h1>
<img src="https://media.giphy.com/media/1eEv7v51FEI3L54jpr/giphy.gif">

<!--
Jetzt wird es **endlich Zeit einzutauchen**!
-->
`,content:`<h1>Hackers: choose your weapons!</h1>
<img src="https://media.giphy.com/media/1eEv7v51FEI3L54jpr/giphy.gif">`,frontmatter:{layout:"center",class:"text-center",info:"Weapons"},note:"Jetzt wird es **endlich Zeit einzutauchen**!",index:14,start:344,end:357,notesHTML:`<p>Jetzt wird es <strong>endlich Zeit einzutauchen</strong>!</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:GD,meta:{layout:"center",info:"Weapons",slide:{raw:`---
layout: center
info: Weapons
---

\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`

<!--
**Beispielcode**

Eine Array **Filtermethode**

Gibt es zwar **nativ**, aber es **immer gut eigene Methoden f\xFCr generelle Prozesse** zu schreiben

- **Dokumentation**
- Erwartet **2 Variablen**
- Methode **iteriert** \xFCber Eintr\xE4ge
- Ruft f\xFCr jeden Eintrag die **Callback** Funktion auf
- Gibt das **reduzierte Array zur\xFCck**
-->
`,content:`\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\``,frontmatter:{layout:"center",info:"Weapons"},note:`**Beispielcode**

Eine Array **Filtermethode**

Gibt es zwar **nativ**, aber es **immer gut eigene Methoden f\xFCr generelle Prozesse** zu schreiben

- **Dokumentation**
- Erwartet **2 Variablen**
- Methode **iteriert** \xFCber Eintr\xE4ge
- Ruft f\xFCr jeden Eintrag die **Callback** Funktion auf
- Gibt das **reduzierte Array zur\xFCck**`,index:15,start:357,end:400,notesHTML:`<p><strong>Beispielcode</strong></p>
<p>Eine Array <strong>Filtermethode</strong></p>
<p>Gibt es zwar <strong>nativ</strong>, aber es <strong>immer gut eigene Methoden f\xFCr generelle Prozesse</strong> zu schreiben</p>
<ul>
<li><strong>Dokumentation</strong></li>
<li>Erwartet <strong>2 Variablen</strong></li>
<li>Methode <strong>iteriert</strong> \xFCber Eintr\xE4ge</li>
<li>Ruft f\xFCr jeden Eintrag die <strong>Callback</strong> Funktion auf</li>
<li>Gibt das <strong>reduzierte Array zur\xFCck</strong></li>
</ul>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:ZD,meta:{layout:"center",class:"text-center",info:"Weapons",slide:{raw:`---
layout: center
class: text-center
info: Weapons
---

<h1>Naming</h1>

<!--
Die **Basis, wie jeder professionelle Entwickler weiss**, ist die Benennung von Code Elementen.

Hier haben wir die **gr\xF6sste, kreative Freiheit**.

Achte darauf, dass du **Code f\xFCr**

- **dich**
- **Maschinen bzw. Browser**

die **Lesbarkeit f\xFCr andere Entwickler bewusst ignorieren**!
-->
`,content:"<h1>Naming</h1>",frontmatter:{layout:"center",class:"text-center",info:"Weapons"},note:`Die **Basis, wie jeder professionelle Entwickler weiss**, ist die Benennung von Code Elementen.

Hier haben wir die **gr\xF6sste, kreative Freiheit**.

Achte darauf, dass du **Code f\xFCr**

- **dich**
- **Maschinen bzw. Browser**

die **Lesbarkeit f\xFCr andere Entwickler bewusst ignorieren**!`,index:16,start:400,end:421,notesHTML:`<p>Die <strong>Basis, wie jeder professionelle Entwickler weiss</strong>, ist die Benennung von Code Elementen.</p>
<p>Hier haben wir die <strong>gr\xF6sste, kreative Freiheit</strong>.</p>
<p>Achte darauf, dass du <strong>Code f\xFCr</strong></p>
<ul>
<li><strong>dich</strong></li>
<li><strong>Maschinen bzw. Browser</strong></li>
</ul>
<p>die <strong>Lesbarkeit f\xFCr andere Entwickler bewusst ignorieren</strong>!</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:sg,meta:{layout:"two-cols",info:"Naming 1.1",slide:{raw:`---
layout: two-cols
info: Naming 1.1
---

<h1>Naming</h1>

<div class="" style="padding-right: 2vw;">
  <h2>Use single letters, symbols, emojis or accented letters</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4
  \`\`\`
</div>

::right::

\`\`\`js {all|12-15}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`

<!--
Achtung: basierend auf der verwendeten **Programmiersprache** sind einige der Empfehlungen **ggf. nicht anwendbar**.

- **Einzelne Buchstaben**
- **Symbole & Sonderzeichen**
- **Sonderzeichen, die 2 Tastendr\xFCcke ben\xF6tigen**
- **Emojis**


K\xF6nnten **alles mit einzelnen Buchstaben** ersetzten.

Aus **Gr\xFCnden der Nachvollziehbarkeit** beschr\xE4nken wir uns auf "index"
-->
`,content:`<h1>Naming</h1>

<div class="" style="padding-right: 2vw;">
  <h2>Use single letters, symbols, emojis or accented letters</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4
  \`\`\`
</div>

::right::

\`\`\`js {all|12-15}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 1.1"},note:`Achtung: basierend auf der verwendeten **Programmiersprache** sind einige der Empfehlungen **ggf. nicht anwendbar**.

- **Einzelne Buchstaben**
- **Symbole & Sonderzeichen**
- **Sonderzeichen, die 2 Tastendr\xFCcke ben\xF6tigen**
- **Emojis**


K\xF6nnten **alles mit einzelnen Buchstaben** ersetzten.

Aus **Gr\xFCnden der Nachvollziehbarkeit** beschr\xE4nken wir uns auf "index"`,index:17,start:421,end:478,notesHTML:`<p>Achtung: basierend auf der verwendeten <strong>Programmiersprache</strong> sind einige der Empfehlungen <strong>ggf. nicht anwendbar</strong>.</p>
<ul>
<li><strong>Einzelne Buchstaben</strong></li>
<li><strong>Symbole &amp; Sonderzeichen</strong></li>
<li><strong>Sonderzeichen, die 2 Tastendr\xFCcke ben\xF6tigen</strong></li>
<li><strong>Emojis</strong></li>
</ul>
<p>K\xF6nnten <strong>alles mit einzelnen Buchstaben</strong> ersetzten.</p>
<p>Aus <strong>Gr\xFCnden der Nachvollziehbarkeit</strong> beschr\xE4nken wir uns auf &quot;index&quot;</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:og,meta:{layout:"two-cols",info:"Naming 1.2",slide:{raw:`---
layout: two-cols
info: Naming 1.2
---

<h1>Naming</h1>

<div class="" style="padding-right: 2vw;">
  <h2>Use single letters, symbols, emojis or accented letters</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4
  \`\`\`
</div>

::right::

\`\`\`js {12-15}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let i = 0; i < sourceArray.length; i += 1) {
    const value = sourceArray[i];

    if (callback(value, i, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`
`,content:`<h1>Naming</h1>

<div class="" style="padding-right: 2vw;">
  <h2>Use single letters, symbols, emojis or accented letters</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4
  \`\`\`
</div>

::right::

\`\`\`js {12-15}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let i = 0; i < sourceArray.length; i += 1) {
    const value = sourceArray[i];

    if (callback(value, i, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 1.2"},index:18,start:478,end:521,notesHTML:"",filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Bg,meta:{layout:"two-cols",info:"Naming 2.1",slide:{raw:`---
layout: two-cols
info: Naming 2.1
---

<h1>Naming</h1>

<div v-click-hide class="" style="padding-right: 2vw;">
  <h2>Use single letters, symbols, emojis or accented letters</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4
  \`\`\`
</div>

<div v-after class="" style="padding-right: 2vw;">
  <h2>Use abbreviations and A.C.R.O.N.Y.M.S.</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  col, fn, gt, arg, obj, 
  opts, conf, imo, bg, chk, ge
  \`\`\`
</div>



::right::

\`\`\`js {12-15|10,16,20}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let \xEC = 0; \xEC < sourceArray.length; \xEC += 1) {
    const value = sourceArray[\xEC];

    if (callback(value, \xEC, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`

<!--
Wir k\xF6nnen einfach **i** verwenden.

Besser w\xE4re ein **nicht verfolgbarer Buchstabe** z.B. **l**oop, **d**urchgang oder **v**ariable

Oder wir k\xF6nnen einen **Akzent** verwenden

_

Auch **Abk\xFCrzungen** sind eine sehr gute Idee

Im besten Fall hat die Abk\xFCrzung **mehrere Bedeutungen**
-->
`,content:`<h1>Naming</h1>

<div v-click-hide class="" style="padding-right: 2vw;">
  <h2>Use single letters, symbols, emojis or accented letters</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  a, b, c, \u{1F36C}, \u{1D63C}, \u{1D7D9}. \xED, \xE4
  \`\`\`
</div>

<div v-after class="" style="padding-right: 2vw;">
  <h2>Use abbreviations and A.C.R.O.N.Y.M.S.</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  col, fn, gt, arg, obj, 
  opts, conf, imo, bg, chk, ge
  \`\`\`
</div>



::right::

\`\`\`js {12-15|10,16,20}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let \xEC = 0; \xEC < sourceArray.length; \xEC += 1) {
    const value = sourceArray[\xEC];

    if (callback(value, \xEC, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 2.1"},note:`Wir k\xF6nnen einfach **i** verwenden.

Besser w\xE4re ein **nicht verfolgbarer Buchstabe** z.B. **l**oop, **d**urchgang oder **v**ariable

Oder wir k\xF6nnen einen **Akzent** verwenden

_

Auch **Abk\xFCrzungen** sind eine sehr gute Idee

Im besten Fall hat die Abk\xFCrzung **mehrere Bedeutungen**`,index:19,start:521,end:591,notesHTML:`<p>Wir k\xF6nnen einfach <strong>i</strong> verwenden.</p>
<p>Besser w\xE4re ein <strong>nicht verfolgbarer Buchstabe</strong> z.B. <strong>l</strong>oop, <strong>d</strong>urchgang oder <strong>v</strong>ariable</p>
<p>Oder wir k\xF6nnen einen <strong>Akzent</strong> verwenden</p>
<p>_</p>
<p>Auch <strong>Abk\xFCrzungen</strong> sind eine sehr gute Idee</p>
<p>Im besten Fall hat die Abk\xFCrzung <strong>mehrere Bedeutungen</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Sg,meta:{layout:"two-cols",info:"Naming 2.2",slide:{raw:`---
layout: two-cols
info: Naming 2.2
---

<h1>Naming</h1>

<div v-click-hide class="" style="padding-right: 2vw;">
  <h2>Use abbreviations and A.C.R.O.N.Y.M.S.</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  col, fn, gt, arg, obj,
  opts, conf, imo, bg, chk, ge
  \`\`\`
</div>

<div v-after class="" style="padding-right: 2vw;">
  <h2>Use foreign, made up or lesser known, alternative words with the same meaning</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  reprezenti, opcioj, lischt\xE4,
  grid, expense, humptyDumpty
  \`\`\`
</div>

::right::


\`\`\`js {10,16,20|4,5,9,12-15}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const res = [];

  for (let \xEC = 0; \xEC < sourceArray.length; \xEC += 1) {
    const value = sourceArray[\xEC];

    if (callback(value, \xEC, sourceArray)) {
      res.push(value);
    }
  }

  return res;
}
\`\`\`

<!--
Ebenfalls sehr wirkungsvoll

- **Fremdsprachen** verwenden
- Lokale **Dialekte**
- **Mehrdeutige** W\xF6rter
- **Erfundene oder fiktionale** W\xF6rter
-->
`,content:`<h1>Naming</h1>

<div v-click-hide class="" style="padding-right: 2vw;">
  <h2>Use abbreviations and A.C.R.O.N.Y.M.S.</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  col, fn, gt, arg, obj,
  opts, conf, imo, bg, chk, ge
  \`\`\`
</div>

<div v-after class="" style="padding-right: 2vw;">
  <h2>Use foreign, made up or lesser known, alternative words with the same meaning</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  reprezenti, opcioj, lischt\xE4,
  grid, expense, humptyDumpty
  \`\`\`
</div>

::right::


\`\`\`js {10,16,20|4,5,9,12-15}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const res = [];

  for (let \xEC = 0; \xEC < sourceArray.length; \xEC += 1) {
    const value = sourceArray[\xEC];

    if (callback(value, \xEC, sourceArray)) {
      res.push(value);
    }
  }

  return res;
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 2.2"},note:`Ebenfalls sehr wirkungsvoll

- **Fremdsprachen** verwenden
- Lokale **Dialekte**
- **Mehrdeutige** W\xF6rter
- **Erfundene oder fiktionale** W\xF6rter`,index:20,start:591,end:656,notesHTML:`<p>Ebenfalls sehr wirkungsvoll</p>
<ul>
<li><strong>Fremdsprachen</strong> verwenden</li>
<li>Lokale <strong>Dialekte</strong></li>
<li><strong>Mehrdeutige</strong> W\xF6rter</li>
<li><strong>Erfundene oder fiktionale</strong> W\xF6rter</li>
</ul>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:zg,meta:{layout:"two-cols",info:"Naming 3.1",slide:{raw:`---
layout: two-cols
info: Naming 3.1
---

<h1>Naming</h1>

<div v-click-hide class="" style="padding-right: 2vw;">
  <h2>Use foreign, made up or lesser known, alternative words with the same meaning</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  reprezenti, opcioj, lischt\xE4,
  grid, expense, humptyDumpty
  \`\`\`
</div>

<div v-after class="" style="padding-right: 2vw;">
  <h2>Misspell everything</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  reandom, randem, 
  eveerything, everyting, evrything, 
  vaule, vlaue, vale
  \`\`\`
</div>

::right::

\`\`\`js {4,5,9,12-15|13,15,16}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const value = lischt\xE4[\xEC];

    if (thanos(value, \xEC, lischt\xE4)) {
      res.push(value);
    }
  }

  return res;
}
\`\`\`

<!--
**Rechtschreibfehler** einbauen

Dadurch lassen sich auch **Variationen von Variablennamen** generieren

**Verwechslungsgefahr** f\xFCr Elemente steigt bei Amateuren

Erzeugt **Unsicherheit**
-->
`,content:`<h1>Naming</h1>

<div v-click-hide class="" style="padding-right: 2vw;">
  <h2>Use foreign, made up or lesser known, alternative words with the same meaning</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  reprezenti, opcioj, lischt\xE4,
  grid, expense, humptyDumpty
  \`\`\`
</div>

<div v-after class="" style="padding-right: 2vw;">
  <h2>Misspell everything</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  reandom, randem, 
  eveerything, everyting, evrything, 
  vaule, vlaue, vale
  \`\`\`
</div>

::right::

\`\`\`js {4,5,9,12-15|13,15,16}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const value = lischt\xE4[\xEC];

    if (thanos(value, \xEC, lischt\xE4)) {
      res.push(value);
    }
  }

  return res;
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 3.1"},note:`**Rechtschreibfehler** einbauen

Dadurch lassen sich auch **Variationen von Variablennamen** generieren

**Verwechslungsgefahr** f\xFCr Elemente steigt bei Amateuren

Erzeugt **Unsicherheit**`,index:21,start:656,end:722,notesHTML:`<p><strong>Rechtschreibfehler</strong> einbauen</p>
<p>Dadurch lassen sich auch <strong>Variationen von Variablennamen</strong> generieren</p>
<p><strong>Verwechslungsgefahr</strong> f\xFCr Elemente steigt bei Amateuren</p>
<p>Erzeugt <strong>Unsicherheit</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:n9,meta:{layout:"two-cols",info:"Naming 4.1",slide:{raw:`---
layout: two-cols
info: Naming 4.1
---

<h1>Naming</h1>

<div v-click-hide class="" style="padding-right: 2vw;">
  <h2>Misspell everything</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  reandom, randem, 
  eveerything, everyting, evrything, 
  vaule, vlaue, vale
  \`\`\`
</div>

<div v-after class="" style="padding-right: 2vw;">
  <h2>Use random capitalization or formats</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  comPutdyNamIcValuE, get_distance_from_la, 
  calculate-distance-to-moon, valueA, valuea
  \`\`\`
</div>

::right::


\`\`\`js {13,15,16|9}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\`

<!--
Verwende **zuf\xE4llige Gross-/Kleinbuchstabenkombinationen**

**Lesbarkeit** f\xFCr unerfahrene Entwickler **nimmt exponentiel ab**
-->
`,content:`<h1>Naming</h1>

<div v-click-hide class="" style="padding-right: 2vw;">
  <h2>Misspell everything</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  reandom, randem, 
  eveerything, everyting, evrything, 
  vaule, vlaue, vale
  \`\`\`
</div>

<div v-after class="" style="padding-right: 2vw;">
  <h2>Use random capitalization or formats</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  comPutdyNamIcValuE, get_distance_from_la, 
  calculate-distance-to-moon, valueA, valuea
  \`\`\`
</div>

::right::


\`\`\`js {13,15,16|9}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 4.1"},note:`Verwende **zuf\xE4llige Gross-/Kleinbuchstabenkombinationen**

**Lesbarkeit** f\xFCr unerfahrene Entwickler **nimmt exponentiel ab**`,index:22,start:722,end:785,notesHTML:`<p>Verwende <strong>zuf\xE4llige Gross-/Kleinbuchstabenkombinationen</strong></p>
<p><strong>Lesbarkeit</strong> f\xFCr unerfahrene Entwickler <strong>nimmt exponentiel ab</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:a9,meta:{layout:"two-cols",info:"Naming 4.1",slide:{raw:`---
layout: two-cols
info: Naming 4.1
---

<h1>Naming</h1>

<div class="" style="padding-right: 2vw;">
  <h2>Use random capitalization or formats</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  comPutdyNamIcValuE, get_distance_from_la, 
  calculate-distance-to-moon, valueA, valuea
  \`\`\`
</div>

::right::


\`\`\`js {9}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\``,content:`<h1>Naming</h1>

<div class="" style="padding-right: 2vw;">
  <h2>Use random capitalization or formats</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`text
  comPutdyNamIcValuE, get_distance_from_la, 
  calculate-distance-to-moon, valueA, valuea
  \`\`\`
</div>

::right::


\`\`\`js {9}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 4.1"},index:23,start:785,end:829,notesHTML:"",filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:p9,meta:{layout:"two-cols",info:"Naming 4.1",slide:{raw:`---
layout: two-cols
info: Naming 4.1
---

<div style="padding-right: 0.5vw;">

\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`

</div>

::right::


\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\`

<!--
So, dass **sieht schon viel besser** aus

Code, bei dem **Anf\xE4nger merkliche Schwierigkeiten** haben werden
-->
`,content:`<div style="padding-right: 0.5vw;">

\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`

</div>

::right::


\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 4.1"},note:`So, dass **sieht schon viel besser** aus

Code, bei dem **Anf\xE4nger merkliche Schwierigkeiten** haben werden`,index:24,start:829,end:895,notesHTML:`<p>So, dass <strong>sieht schon viel besser</strong> aus</p>
<p>Code, bei dem <strong>Anf\xE4nger merkliche Schwierigkeiten</strong> haben werden</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:h9,meta:{layout:"center",class:"text-center",info:"Comments",slide:{raw:`---
layout: center
class: text-center
info: Comments
---

<h1>Comments</h1>

<div v-click>

\`\`\`
<!-- TODO: update this -->
\`\`\`

</div>

<!--
Kommentare

Werden **oft von anderen eingefordert**

**Profis kennen ihren Code** und brauchen keine "Hilfestellung"

Maxime: **Kommentiere alles Selbsterkl\xE4rende, ignoriere alles Komplexe**
-->
`,content:`<h1>Comments</h1>

<div v-click>

\`\`\`
<!-- TODO: update this -->
\`\`\`

</div>`,frontmatter:{layout:"center",class:"text-center",info:"Comments"},note:`Kommentare

Werden **oft von anderen eingefordert**

**Profis kennen ihren Code** und brauchen keine "Hilfestellung"

Maxime: **Kommentiere alles Selbsterkl\xE4rende, ignoriere alles Komplexe**`,index:25,start:895,end:921,notesHTML:`<p>Kommentare</p>
<p>Werden <strong>oft von anderen eingefordert</strong></p>
<p><strong>Profis kennen ihren Code</strong> und brauchen keine &quot;Hilfestellung&quot;</p>
<p>Maxime: <strong>Kommentiere alles Selbsterkl\xE4rende, ignoriere alles Komplexe</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:f9,meta:{layout:"center",info:"Comments 1.1",slide:{raw:`---
layout: center
info: Comments 1.1
---

\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\`

<!--
Wir **wenden unsere Verbesserung** auf das Resultat aus dem **letzten Kapitel** an
-->
`,content:`\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\``,frontmatter:{layout:"center",info:"Comments 1.1"},note:"Wir **wenden unsere Verbesserung** auf das Resultat aus dem **letzten Kapitel** an",index:26,start:921,end:954,notesHTML:`<p>Wir <strong>wenden unsere Verbesserung</strong> auf das Resultat aus dem <strong>letzten Kapitel</strong> an</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:b9,meta:{layout:"two-cols",info:"Comments 2.1",slide:{raw:`---
layout: two-cols
info: Comments 2.1
---

<h1>Comments</h1>

<div class="" style="padding-right: 2vw;">
  <h2>Write lying or nonsensical comments</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  /**
   * Make snafucated.
   */
  function makeSnafucated() {}
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {all|2,5}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {2,5}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\`

</div>

<!--
Verwende wenn m\xF6glich **irref\xFChrende, sinnlose oder l\xFCgende** Kommentare
-->
`,content:`<h1>Comments</h1>

<div class="" style="padding-right: 2vw;">
  <h2>Write lying or nonsensical comments</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  /**
   * Make snafucated.
   */
  function makeSnafucated() {}
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {all|2,5}
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {2,5}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\`

</div>`,frontmatter:{layout:"two-cols",info:"Comments 2.1"},note:"Verwende wenn m\xF6glich **irref\xFChrende, sinnlose oder l\xFCgende** Kommentare",index:27,start:954,end:1036,notesHTML:`<p>Verwende wenn m\xF6glich <strong>irref\xFChrende, sinnlose oder l\xFCgende</strong> Kommentare</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:I9,meta:{layout:"two-cols",info:"Comments 3.1",slide:{raw:`---
layout: two-cols
info: Comments 3.1
---

<h1>Comments</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Write lying or nonsensical comments</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  /**
   * Make snafucated.
   */
  function makeSnafucated() {}
  \`\`\`
</div>

<div v-after class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Document the obvious. Document the "how", not "why".</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  i++; // Add '1' to 'i'.
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {2,5|12,16,20}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {12-16,20}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  // Loop lischt\xE4 items.
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; // Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule); // Push value.
    }
  }

  return res; // Return result.
}
\`\`\`

</div>

<!--
Dokumentiere das **Offensichtliche**

Beschreibe das **Wie**, **nicht das Warum**
-->
`,content:`<h1>Comments</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Write lying or nonsensical comments</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  /**
   * Make snafucated.
   */
  function makeSnafucated() {}
  \`\`\`
</div>

<div v-after class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Document the obvious. Document the "how", not "why".</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  i++; // Add '1' to 'i'.
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {2,5|12,16,20}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  for (let \xEC = 0; \xEC < lischt\xE4.length; \xEC += 1) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule);
    }
  }

  return res;
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {12-16,20}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  // Loop lischt\xE4 items.
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; // Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule); // Push value.
    }
  }

  return res; // Return result.
}
\`\`\`

</div>`,frontmatter:{layout:"two-cols",info:"Comments 3.1"},note:`Dokumentiere das **Offensichtliche**

Beschreibe das **Wie**, **nicht das Warum**`,index:28,start:1036,end:1135,notesHTML:`<p>Dokumentiere das <strong>Offensichtliche</strong></p>
<p>Beschreibe das <strong>Wie</strong>, <strong>nicht das Warum</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:eC,meta:{layout:"two-cols",info:"Comments 4.1",slide:{raw:`---
layout: two-cols
info: Comments 4.1
---

<h1>Comments</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Document the obvious. Document the "how", not "why".</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  i++; // Add '1' to 'i'.
  \`\`\`
</div>

<div v-after class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Use comments instead of variables</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  return value * 1000 * 60; // minutes * milliseconds * seconds = X minutes
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {12-16,20|10,21,25}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  // Loop lischt\xE4 items.
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; // Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule); // Push value.
    }
  }

  return res; // Return result.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {10,21,25}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; // ResultList.

  // Loop lischt\xE4 items.
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; // Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      a.push(vaule); // Push value to ResultList.
    }
  }

  return a; // Return ResultList.
}
\`\`\`
</div>

<!--
Verwende **Kommentare, anstelle von aussagekr\xE4ftigen Variablennamen**
-->
`,content:`<h1>Comments</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Document the obvious. Document the "how", not "why".</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  i++; // Add '1' to 'i'.
  \`\`\`
</div>

<div v-after class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Use comments instead of variables</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  return value * 1000 * 60; // minutes * milliseconds * seconds = X minutes
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {12-16,20|10,21,25}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const res = [];

  // Loop lischt\xE4 items.
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; // Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      res.push(vaule); // Push value.
    }
  }

  return res; // Return result.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {10,21,25}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; // ResultList.

  // Loop lischt\xE4 items.
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; // Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      a.push(vaule); // Push value to ResultList.
    }
  }

  return a; // Return ResultList.
}
\`\`\`
</div>`,frontmatter:{layout:"two-cols",info:"Comments 4.1"},note:"Verwende **Kommentare, anstelle von aussagekr\xE4ftigen Variablennamen**",index:29,start:1135,end:1233,notesHTML:`<p>Verwende <strong>Kommentare, anstelle von aussagekr\xE4ftigen Variablennamen</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:BC,meta:{layout:"two-cols",info:"Comments 5.1",slide:{raw:`---
layout: two-cols
info: Comments 5.1
---

<h1>Comments</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Use comments instead of variables</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  return value * 1000 * 60; // Minutes * Milliseconds * Seconds = X Minutes
  \`\`\`
</div>

<div v-after class="hide-for-real" style="padding-right: 2vw;">
  <h2>Use various formats</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  /* Some men just want to watch the world burn. */
  
  // Some men just want to watch the world burn.
  
  /**
   * Some men just want to watch the world burn.
   */
  
  //
  // Some men just want to watch the world burn.
  //
  
  /** Some men just want to watch the world burn. **/
  \`\`\`

</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {10,21,25|10,12,14}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; // ResultList.

  // Loop lischt\xE4 items.
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; // Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      a.push(vaule); // Push value to ResultList.
    }
  }

  return a; // Return ResultList.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {10,12-14,17,23}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* ResultList. */

  //
  // Loop lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Push value to ResultList. ****/
      a.push(vaule);
    }
  }

  return a; // Return ResultList.
}
\`\`\`

</div>

<!--
Nutze **wahllose Kommentarformate**
-->
`,content:`<h1>Comments</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Use comments instead of variables</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  return value * 1000 * 60; // Minutes * Milliseconds * Seconds = X Minutes
  \`\`\`
</div>

<div v-after class="hide-for-real" style="padding-right: 2vw;">
  <h2>Use various formats</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  /* Some men just want to watch the world burn. */
  
  // Some men just want to watch the world burn.
  
  /**
   * Some men just want to watch the world burn.
   */
  
  //
  // Some men just want to watch the world burn.
  //
  
  /** Some men just want to watch the world burn. **/
  \`\`\`

</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {10,21,25|10,12,14}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; // ResultList.

  // Loop lischt\xE4 items.
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; // Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      a.push(vaule); // Push value to ResultList.
    }
  }

  return a; // Return ResultList.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {10,12-14,17,23}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* ResultList. */

  //
  // Loop lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Push value to ResultList. ****/
      a.push(vaule);
    }
  }

  return a; // Return ResultList.
}
\`\`\`

</div>`,frontmatter:{layout:"two-cols",info:"Comments 5.1"},note:"Nutze **wahllose Kommentarformate**",index:30,start:1233,end:1348,notesHTML:`<p>Nutze <strong>wahllose Kommentarformate</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:$C,meta:{layout:"two-cols",info:"Comments 5.1",slide:{raw:`---
layout: two-cols
info: Comments 5.1
---

<h1>Comments</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Use various formats</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  /* Some men just want to watch the world burn. */
  
  // Some men just want to watch the world burn.
  
  /**
   * Some men just want to watch the world burn.
   */
  
  //
  // Some men just want to watch the world burn.
  //
  
  /** Some men just want to watch the world burn. **/
  \`\`\`

</div>

<div v-after class="hide-for-real" style="padding-right: 2vw;">
  <h2>Finally, you can also apply anything from the 'Naming' section.</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  // Sm3 M3n jst want
  //      to WaTch THE WORLD BURN.
  \`\`\`

</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {10,12-14,17,23|2,4,5,10,13,23,28}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* ResultList. */

  //
  // Loop lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Push value to ResultList. ****/
      a.push(vaule);
    }
  }

  return a; // Return ResultList.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {2,4,5,10,13,23,28}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Posh value to A ****/
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\`

</div>

<!--
Abschliessend

- JSDoc l\xFCckenhaft verwenden
-->
`,content:`<h1>Comments</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Use various formats</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  /* Some men just want to watch the world burn. */
  
  // Some men just want to watch the world burn.
  
  /**
   * Some men just want to watch the world burn.
   */
  
  //
  // Some men just want to watch the world burn.
  //
  
  /** Some men just want to watch the world burn. **/
  \`\`\`

</div>

<div v-after class="hide-for-real" style="padding-right: 2vw;">
  <h2>Finally, you can also apply anything from the 'Naming' section.</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  // Sm3 M3n jst want
  //      to WaTch THE WORLD BURN.
  \`\`\`

</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {10,12-14,17,23|2,4,5,10,13,23,28}
/**
 * Get keys of object.
 *
 * @param {array} lischt\xE4 - The array to be filtered.
 * @param {function} thanos - Let him crush your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* ResultList. */

  //
  // Loop lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Push value to ResultList. ****/
      a.push(vaule);
    }
  }

  return a; // Return ResultList.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {2,4,5,10,13,23,28}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Posh value to A ****/
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\`

</div>`,frontmatter:{layout:"two-cols",info:"Comments 5.1"},note:`Abschliessend

- JSDoc l\xFCckenhaft verwenden`,index:31,start:1348,end:1470,notesHTML:`<p>Abschliessend</p>
<ul>
<li>JSDoc l\xFCckenhaft verwenden</li>
</ul>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:jC,meta:{layout:"two-cols",info:"Naming 4.1",slide:{raw:`---
layout: two-cols
info: Naming 4.1
---

<div style="padding-right: 0.5vw;">

\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`

</div>

::right::


\`\`\`js
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Posh value to A ****/
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\`
`,content:`<div style="padding-right: 0.5vw;">

\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`

</div>

::right::


\`\`\`js
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Posh value to A ****/
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 4.1"},index:32,start:1470,end:1538,notesHTML:"",filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:NC,meta:{layout:"center",class:"text-center",info:"Hints",slide:{raw:`---
layout: center
class: text-center
info: Hints
---

<h1>Additional hints</h1>

<img src="https://media.giphy.com/media/mxQUQbIjXMSwo/giphy.gif">

<!--
**Tipps f\xFCr Fortgeschrittene**
-->
`,content:`<h1>Additional hints</h1>

<img src="https://media.giphy.com/media/mxQUQbIjXMSwo/giphy.gif">`,frontmatter:{layout:"center",class:"text-center",info:"Hints"},note:"**Tipps f\xFCr Fortgeschrittene**",index:33,start:1538,end:1552,notesHTML:`<p><strong>Tipps f\xFCr Fortgeschrittene</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:qC,meta:{layout:"two-cols",info:"Hints 1.1",slide:{raw:`---
layout: two-cols
info: Hints 1.1
---

<h1>Hints</h1>

<div class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Make conditions as complex as possible</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  // 1
  if (!isNotAvailable && isNotVisible) {}

  // 2
  return this.value || this.type === 'button' ? 'button' : null;

  // 3
  function isOrderButtonDisabled() {
    return !this.isLoggedInUser
      || (this.items && !this.items.length)
      || this.getRequestIsRunning
      || this.backToCartRequestIsRunning
      || this.placeOrderRequestIsRunning
      || this.placeQuoteRequestIsRunning;
  };
  \`\`\`

</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {all|17,22-25}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Posh value to A ****/
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {17,22-27}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < (lischt\xE4 && lischt\xE4.length || 0); ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) {
      continue;
    } else {
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\`

</div>

<!--
Schreibe if/else Anweisungen so kompliziert wie m\xF6glich

- **Doppelte Verneinung**
- **Inline If/Else** statt **Or** verwenden
- Komplexe Pr\xFCfungen **niemals** aufteilen
-->
`,content:`<h1>Hints</h1>

<div class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Make conditions as complex as possible</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  // 1
  if (!isNotAvailable && isNotVisible) {}

  // 2
  return this.value || this.type === 'button' ? 'button' : null;

  // 3
  function isOrderButtonDisabled() {
    return !this.isLoggedInUser
      || (this.items && !this.items.length)
      || this.getRequestIsRunning
      || this.backToCartRequestIsRunning
      || this.placeOrderRequestIsRunning
      || this.placeQuoteRequestIsRunning;
  };
  \`\`\`

</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {all|17,22-25}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < lischt\xE4.length; ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    if (thanos(vaule, \xEC, lischt\xE4)) {
      /**** Posh value to A ****/
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {17,22-27}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < (lischt\xE4 && lischt\xE4.length || 0); ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) {
      continue;
    } else {
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\`

</div>`,frontmatter:{layout:"two-cols",info:"Hints 1.1"},note:`Schreibe if/else Anweisungen so kompliziert wie m\xF6glich

- **Doppelte Verneinung**
- **Inline If/Else** statt **Or** verwenden
- Komplexe Pr\xFCfungen **niemals** aufteilen`,index:34,start:1552,end:1668,notesHTML:`<p>Schreibe if/else Anweisungen so kompliziert wie m\xF6glich</p>
<ul>
<li><strong>Doppelte Verneinung</strong></li>
<li><strong>Inline If/Else</strong> statt <strong>Or</strong> verwenden</li>
<li>Komplexe Pr\xFCfungen <strong>niemals</strong> aufteilen</li>
</ul>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:i0,meta:{layout:"two-cols",info:"Comments 2.1",slide:{raw:`---
layout: two-cols
info: Comments 2.1
---

<h1>Hints</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Make conditions as complex as possible</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  // 1
  if (!isNotAvailable && isNotVisible) {}

  // 2
  return this.value || this.type === 'button' ? 'button' : null;

  // 3
  function isOrderButtonDisabled() {
    return !this.isLoggedInUser
      || (this.items && !this.items.length)
      || this.getRequestIsRunning
      || this.backToCartRequestIsRunning
      || this.placeOrderRequestIsRunning
      || this.placeQuoteRequestIsRunning;
  };
  \`\`\`

</div>

<div v-after class="hide-for-real" style="padding-right: 2vw;">
  <h2>Drop linebreaks</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  const mappedProducts = products.filter(product => product.isAvailable === true').sort((product_a, productB) => product_a.name.localCompare(productB.name)).map(({ id, name } => ({ id, name }));

  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {15-19,22-27}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < (lischt\xE4 && lischt\xE4.length || 0); ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) {
      continue;
    } else {
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {15,19}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (let \xEC = 0; /* Loop index. */ \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */) {
    const vaule = lischt\xE4[\xEC];

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) { continue; } else { a.push(vaule); }
  }

  return a; // Return a.
}
\`\`\`

</div>

<!--
**Verzichte* so oft wie m\xF6glich **auf Zeilenumbr\xFCche**

Mit einem **ultraweiten Monitor** kannst du so mehr Code auf dem Bildschirm darstellen als **minderbemittelte Entwickler**

Das Resultat seht ihr auf diesem **Mini-Fernseher** leider nicht
-->
`,content:`<h1>Hints</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Make conditions as complex as possible</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  // 1
  if (!isNotAvailable && isNotVisible) {}

  // 2
  return this.value || this.type === 'button' ? 'button' : null;

  // 3
  function isOrderButtonDisabled() {
    return !this.isLoggedInUser
      || (this.items && !this.items.length)
      || this.getRequestIsRunning
      || this.backToCartRequestIsRunning
      || this.placeOrderRequestIsRunning
      || this.placeQuoteRequestIsRunning;
  };
  \`\`\`

</div>

<div v-after class="hide-for-real" style="padding-right: 2vw;">
  <h2>Drop linebreaks</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  const mappedProducts = products.filter(product => product.isAvailable === true').sort((product_a, productB) => product_a.name.localCompare(productB.name)).map(({ id, name } => ({ id, name }));

  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js {15-19,22-27}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (
    let \xEC = 0; // Loop index.
    \xEC < (lischt\xE4 && lischt\xE4.length || 0); ////// Check loop position.
    \xEC += 1 // Update loop index.
  ) {
    const vaule = lischt\xE4[\xEC];

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) {
      continue;
    } else {
      a.push(vaule);
    }
  }

  return a; // Return a.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {15,19}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (let \xEC = 0; /* Loop index. */ \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */) {
    const vaule = lischt\xE4[\xEC];

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) { continue; } else { a.push(vaule); }
  }

  return a; // Return a.
}
\`\`\`

</div>`,frontmatter:{layout:"two-cols",info:"Comments 2.1"},note:`**Verzichte* so oft wie m\xF6glich **auf Zeilenumbr\xFCche**

Mit einem **ultraweiten Monitor** kannst du so mehr Code auf dem Bildschirm darstellen als **minderbemittelte Entwickler**

Das Resultat seht ihr auf diesem **Mini-Fernseher** leider nicht`,index:35,start:1668,end:1789,notesHTML:`<p>*<em>Verzichte</em> so oft wie m\xF6glich <strong>auf Zeilenumbr\xFCche</strong></p>
<p>Mit einem <strong>ultraweiten Monitor</strong> kannst du so mehr Code auf dem Bildschirm darstellen als <strong>minderbemittelte Entwickler</strong></p>
<p>Das Resultat seht ihr auf diesem <strong>Mini-Fernseher</strong> leider nicht</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:E0,meta:{layout:"two-cols",info:"Comments 3.1",slide:{raw:`---
layout: two-cols
info: Comments 3.1
---

<h1>Hints</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Drop linebreaks</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  const mappedProducts = products.filter(product => product.isAvailable === true').sort((product_a, productB) => product_a.name.localCompare(productB.name)).map(({ id, name } => ({ id, name }));

  \`\`\`

</div>

<div v-after class="hide-for-real" style="padding-right: 2vw;">
  <h2>Get rid of semicolons and brackets</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  const a = 'foo'
  const b = 'baa'

  if (!c) return
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js  {15,19|10,16,19,22}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (let \xEC = 0; /* Loop index. */ \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */) {
    const vaule = lischt\xE4[\xEC];

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) { continue; } else { a.push(vaule); }
  }

  return a; // Return a.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {10,16,19-21,24}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = [] /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (let \xEC = 0; /* Loop index. */ \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */) {
    const vaule = lischt\xE4[\xEC]

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) continue
    
    a.push(vaule)
  }

  return a // Return a.
}
\`\`\`

</div>

<!--
Spare **Tastenanschl\xE4ge**

Nur **Profis wissen**, wo diese Zeichen zwingend zu verwenden sind

**Maskiere Ausf\xFChrungsabfolgen**
-->
`,content:`<h1>Hints</h1>

<div v-click-hide class=" hide-for-real" style="padding-right: 2vw;">
  <h2>Drop linebreaks</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  const mappedProducts = products.filter(product => product.isAvailable === true').sort((product_a, productB) => product_a.name.localCompare(productB.name)).map(({ id, name } => ({ id, name }));

  \`\`\`

</div>

<div v-after class="hide-for-real" style="padding-right: 2vw;">
  <h2>Get rid of semicolons and brackets</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  const a = 'foo'
  const b = 'baa'

  if (!c) return
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js  {15,19|10,16,19,22}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = []; /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (let \xEC = 0; /* Loop index. */ \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */) {
    const vaule = lischt\xE4[\xEC];

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) { continue; } else { a.push(vaule); }
  }

  return a; // Return a.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js {10,16,19-21,24}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = [] /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (let \xEC = 0; /* Loop index. */ \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */) {
    const vaule = lischt\xE4[\xEC]

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) continue
    
    a.push(vaule)
  }

  return a // Return a.
}
\`\`\`

</div>`,frontmatter:{layout:"two-cols",info:"Comments 3.1"},note:`Spare **Tastenanschl\xE4ge**

Nur **Profis wissen**, wo diese Zeichen zwingend zu verwenden sind

**Maskiere Ausf\xFChrungsabfolgen**`,index:36,start:1789,end:1893,notesHTML:`<p>Spare <strong>Tastenanschl\xE4ge</strong></p>
<p>Nur <strong>Profis wissen</strong>, wo diese Zeichen zwingend zu verwenden sind</p>
<p><strong>Maskiere Ausf\xFChrungsabfolgen</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:T0,meta:{layout:"two-cols",info:"Comments 4.1",slide:{raw:`---
layout: two-cols
info: Comments 4.1
---

<h1>Hints</h1>

<div class="hide-for-real" style="padding-right: 2vw;">
  <h2>Use random linebreaks, indents and quotation marks</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  const a = "foo"

  const b = 'baa'
  const c = \`bar\`
  if (!c)   return
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js  {all}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = [] /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (let \xEC = 0; /* Loop index. */ \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */) {
    const vaule = lischt\xE4[\xEC]

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) continue

    a.push(vaule)
  }

  return a // Return a.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js
/**
 * Get_keys of
 * Obj.
 * 
 * 
 * @param   {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function } thanos - Let him CRUSH your team members.
 * 
 * @returns { *[]}
 */

function filTerArRayelEmentS(lischt\xE4,     thanos) {
  
  const a = [] /* a */
  //
  // Oolp lischt\xE4 items.
  //
  
  for (let \xEC = 0; /* Loop index. */ 
       \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */
  ) {
    const  vaule = lischt\xE4[\xEC]
    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) continue
    a.push(vaule)
  }
  return a // Return a.
}
\`\`\`

</div>

<!--
Wahllose **Zeilenabst\xE4nde und Anf\xFChrungszeichen**

**Profis k\xF6nnen komplexen Code lesen**
-->
`,content:`<h1>Hints</h1>

<div class="hide-for-real" style="padding-right: 2vw;">
  <h2>Use random linebreaks, indents and quotation marks</h2>
  <br>&nbsp;
  <br>&nbsp;

  \`\`\`js
  const a = "foo"

  const b = 'baa'
  const c = \`bar\`
  if (!c)   return
  \`\`\`
</div>

::right::

<div v-click-hide class="hide-for-real">

\`\`\`js  {all}
/**
 * Get_keys of Obj.
 *
 * @param {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function} thanos - Let him CRUSH your team members.
 *
 * @returns {*[]}
 */
function filTerArRayelEmentS(lischt\xE4, thanos) {
  const a = [] /* a */

  //
  // Oolp lischt\xE4 items.
  //
  for (let \xEC = 0; /* Loop index. */ \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */) {
    const vaule = lischt\xE4[\xEC]

    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) continue

    a.push(vaule)
  }

  return a // Return a.
}
\`\`\`

</div>

<div v-after class="hide-for-real">

\`\`\`js
/**
 * Get_keys of
 * Obj.
 * 
 * 
 * @param   {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function } thanos - Let him CRUSH your team members.
 * 
 * @returns { *[]}
 */

function filTerArRayelEmentS(lischt\xE4,     thanos) {
  
  const a = [] /* a */
  //
  // Oolp lischt\xE4 items.
  //
  
  for (let \xEC = 0; /* Loop index. */ 
       \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */
  ) {
    const  vaule = lischt\xE4[\xEC]
    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) continue
    a.push(vaule)
  }
  return a // Return a.
}
\`\`\`

</div>`,frontmatter:{layout:"two-cols",info:"Comments 4.1"},note:`Wahllose **Zeilenabst\xE4nde und Anf\xFChrungszeichen**

**Profis k\xF6nnen komplexen Code lesen**`,index:37,start:1893,end:1989,notesHTML:`<p>Wahllose <strong>Zeilenabst\xE4nde und Anf\xFChrungszeichen</strong></p>
<p><strong>Profis k\xF6nnen komplexen Code lesen</strong></p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:L0,meta:{layout:"two-cols",info:"Naming 4.1",slide:{raw:`---
layout: two-cols
info: Naming 4.1
---

<div style="padding-right: 0.5vw;">

\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`

</div>

::right::


\`\`\`js
/**
 * Get_keys of
 * Obj.
 *
 *
 * @param   {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function } thanos - Let him CRUSH your team members.
 *
 * @returns { *[]}
 */

function filTerArRayelEmentS(lischt\xE4,     thanos) {

  const a = [] /* a */
  //
  // Oolp lischt\xE4 items.
  //

  for (let \xEC = 0; /* Loop index. */
       \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */
  ) {
    const  vaule = lischt\xE4[\xEC]
    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) continue
    a.push(vaule)
  }
  return a // Return a.
}
\`\`\`

<!--
Ein **Meisterwerk**

**Fl\xFCche und emotionale Ausbr\xFCche von Amateur-Kollegen** unterstreichen die professionelle Qualit\xE4t des Codes
-->
`,content:`<div style="padding-right: 0.5vw;">

\`\`\`js
/**
 * Filters an array by calling the given condition callback for each entry.
 *
 * @param {array} sourceArray - The array to be filtered.
 * @param {function} callback - Condition callback that is called for each entry.
 *
 * @returns {*[]}
 */
function filter(sourceArray, callback) {
  const result = [];

  for (let index = 0; index < sourceArray.length; index += 1) {
    const value = sourceArray[index];

    if (callback(value, index, sourceArray)) {
      result.push(value);
    }
  }

  return result;
}
\`\`\`

</div>

::right::


\`\`\`js
/**
 * Get_keys of
 * Obj.
 *
 *
 * @param   {array} lischt\xE4 - The to be Filtred Array.
 * @param {Function } thanos - Let him CRUSH your team members.
 *
 * @returns { *[]}
 */

function filTerArRayelEmentS(lischt\xE4,     thanos) {

  const a = [] /* a */
  //
  // Oolp lischt\xE4 items.
  //

  for (let \xEC = 0; /* Loop index. */
       \xEC < (lischt\xE4 && lischt\xE4.length || 0); /* Check loop position. */ \xEC += 1 /* Update loop index. */
  ) {
    const  vaule = lischt\xE4[\xEC]
    /**** Posh value to A ****/
    if (!thanos(vaule, \xEC, lischt\xE4) === true) continue
    a.push(vaule)
  }
  return a // Return a.
}
\`\`\``,frontmatter:{layout:"two-cols",info:"Naming 4.1"},note:`Ein **Meisterwerk**

**Fl\xFCche und emotionale Ausbr\xFCche von Amateur-Kollegen** unterstreichen die professionelle Qualit\xE4t des Codes`,index:38,start:1989,end:2062,notesHTML:`<p>Ein <strong>Meisterwerk</strong></p>
<p><strong>Fl\xFCche und emotionale Ausbr\xFCche von Amateur-Kollegen</strong> unterstreichen die professionelle Qualit\xE4t des Codes</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:I0,meta:{layout:"center",class:"text-center",info:"Hints",slide:{raw:`---
layout: center
class: 'text-center'
info: Hints
---

<h1>WTFAA****RG!</h1>

<img src="https://media.giphy.com/media/LTM9zeisAfX9xQbz8Y/giphy.gif">
`,content:`<h1>WTFAA****RG!</h1>

<img src="https://media.giphy.com/media/LTM9zeisAfX9xQbz8Y/giphy.gif">`,frontmatter:{layout:"center",class:"text-center",info:"Hints"},index:39,start:2062,end:2072,notesHTML:"",filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:U0,meta:{layout:"center",class:"text-center",info:"Hints",slide:{raw:`---
layout: center
class: text-center
info: Hints
---

<h1>Thank you!</h1>

<!--
**Herzlichen Dank** f\xFCr eure Aufmerksamkeit

Wer sich **gut unterhalten** gef\xFChlt hat, **darf sich gerne bei uns bewerben**

Wer sich **inspiriert gef\xFChlt** hat, **lieber nicht** \u{1F609}
-->
`,content:"<h1>Thank you!</h1>",frontmatter:{layout:"center",class:"text-center",info:"Hints"},note:`**Herzlichen Dank** f\xFCr eure Aufmerksamkeit

Wer sich **gut unterhalten** gef\xFChlt hat, **darf sich gerne bei uns bewerben**

Wer sich **inspiriert gef\xFChlt** hat, **lieber nicht** \u{1F609}`,index:40,start:2072,end:2088,notesHTML:`<p><strong>Herzlichen Dank</strong> f\xFCr eure Aufmerksamkeit</p>
<p>Wer sich <strong>gut unterhalten</strong> gef\xFChlt hat, <strong>darf sich gerne bei uns bewerben</strong></p>
<p>Wer sich <strong>inspiriert gef\xFChlt</strong> hat, <strong>lieber nicht</strong> \u{1F609}</p>
`,filepath:"/Users/patric/Projects/verstaerker/verstaerker.github.io/talks/write-unmaintainable-code-source/presentation/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",component:r7,meta:{layout:"end"}}],qs=H0,z0=[{name:"play",path:"/",component:X3,children:[...qs]},{name:"print",path:"/print",component:o7},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>Pn(()=>import("./PresenterPrint.cd59d432.js"),["assets/PresenterPrint.cd59d432.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.4c66a5a6.js"])},{name:"presenter",path:"/presenter/:no",component:()=>Pn(()=>import("./Presenter.c70ef3ea.js"),["assets/Presenter.c70ef3ea.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.4c66a5a6.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.0b9685ba.js","assets/Presenter.2b62ea14.css"]),beforeEnter:e=>{if(!El.remote||El.remote===e.query.password)return!0;if(El.remote&&e.query.password===void 0){const n=prompt("Enter password");if(El.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],De=zd({history:td("/talks/write-unmaintainable-code/"),routes:z0});function V0(e,n,{mode:l="replace"}={}){return S({get(){const t=De.currentRoute.value.query[e];return t==null?n!=null?n:null:Array.isArray(t)?t.filter(Boolean):t},set(t){ee(()=>{De[_(l)]({query:{...De.currentRoute.value.query,[e]:t}})})}})}const vy=V(0);ee(()=>{De.afterEach(async()=>{await ee(),vy.value+=1})});const Xe=S(()=>De.currentRoute.value),er=S(()=>Xe.value.query.print!==void 0),W0=S(()=>Xe.value.query.print==="clicks"),qe=S(()=>Xe.value.query.embedded!==void 0),Ne=S(()=>Xe.value.path.startsWith("/presenter")),Rl=S(()=>er.value&&!W0.value),pa=S(()=>Xe.value.query.password),K0=S(()=>!Ne.value&&(!bs.remote||pa.value===bs.remote)),Xc=V0("clicks","0"),by=S(()=>qs.length-1),q0=S(()=>Xe.value.path),Vs=S(()=>parseInt(q0.value.split(/\//g).slice(-1)[0])||1);S(()=>ot(Vs.value));const de=S(()=>qs.find(e=>e.path===`${Vs.value}`));S(()=>{var e,n,l;return(l=(n=(e=de.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:l.id});S(()=>{var e,n;return((n=(e=de.value)==null?void 0:e.meta)==null?void 0:n.layout)||(Vs.value===1?"cover":"default")});const Et=S(()=>qs.find(e=>e.path===`${Math.min(qs.length,Vs.value+1)}`)),G0=S(()=>{var e,n;return vy.value,((n=(e=de.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Te=S({get(){if(Rl.value)return 99999;let e=+(Xc.value||0);return isNaN(e)&&(e=0),e},set(e){Xc.value=e.toString()}}),jo=S(()=>{var e,n,l;return+((l=(n=(e=de.value)==null?void 0:e.meta)==null?void 0:n.clicks)!=null?l:G0.value.length)}),Y0=S(()=>Vs.value<qs.length-1||Te.value<jo.value),Z0=S(()=>Vs.value>1||Te.value>0),Q0=S(()=>qs.filter(e=>{var n,l;return(l=(n=e.meta)==null?void 0:n.slide)==null?void 0:l.title}).reduce((e,n)=>(nr(e,n),e),[])),J0=S(()=>lr(Q0.value,de.value));S(()=>or(J0.value));function yn(){jo.value<=Te.value?Zl():Te.value+=1}async function un(){Te.value<=0?await Ql():Te.value-=1}function ot(e){return Ne.value?`/presenter/${e}`:`/${e}`}function Zl(){const e=Math.min(qs.length,Vs.value+1);return rl(e)}async function Ql(e=!0){const n=Math.max(1,Vs.value-1);await rl(n),e&&jo.value&&De.replace({query:{...Xe.value.query,clicks:jo.value}})}function rl(e,n){return De.push({path:ot(e),query:{...Xe.value.query,clicks:n}})}function X0(e){const n=V(0),{direction:l,distanceX:t,distanceY:a}=Sh(e,{onSwipeStart(r){r.pointerType==="touch"&&(ql.value||(n.value=Yt()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||ql.value)return;const c=Math.abs(t.value),i=Math.abs(a.value);c/window.innerWidth>.3||c>100?l.value===Ze.LEFT?yn():un():(i/window.innerHeight>.4||i>200)&&(l.value===Ze.DOWN?Ql():Zl())}})}async function ya(){const{saveAs:e}=await Pn(()=>import("./FileSaver.min.7f56e709.js").then(n=>n.F),[]);e(kp(bs.download)?bs.download:bs.exportFilename?`${bs.exportFilename}.pdf`:"/talks/write-unmaintainable-code/slidev-exported.pdf",`${bs.title}.pdf`)}async function sv(e){var n,l;if(e==null){const t=(l=(n=de.value)==null?void 0:n.meta)==null?void 0:l.slide;if(!(t!=null&&t.filepath))return!1;e=`${t.filepath}:${t.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function nr(e,n,l=1){var a,r,c,i,p;const t=(r=(a=n.meta)==null?void 0:a.slide)==null?void 0:r.level;t&&t>l&&e.length>0?nr(e[e.length-1].children,n,l+1):e.push({children:[],level:l,path:n.path,hideInToc:Boolean((c=n.meta)==null?void 0:c.hideInToc),title:(p=(i=n.meta)==null?void 0:i.slide)==null?void 0:p.title})}function lr(e,n,l=!1,t){return e.map(a=>{const r={...a,active:a.path===(n==null?void 0:n.path),hasActiveParent:l};return r.children.length>0&&(r.children=lr(r.children,n,r.active||r.hasActiveParent,r)),t&&(r.active||r.activeParent)&&(t.activeParent=!0),r})}function or(e,n=1){return e.filter(l=>!l.hideInToc).map(l=>({...l,children:or(l.children,n+1)}))}function ev(){const e=bs.titleTemplate.replace("%s",bs.title||"Slidev");xA({title:e}),MA(`${e} - shared`),HA(`${e} - drawings`);function n(){Ne.value&&(tc("page",+Vs.value),tc("clicks",Te.value))}De.afterEach(n),As(Te,n),IA(l=>{(+l.page!=+Vs.value||Te.value!==l.clicks)&&De.replace({path:ot(l.page),query:{...De.currentRoute.value.query,clicks:l.clicks||0}})})}const nv=Es({__name:"App",setup(e){return U(G),ev(),(n,l)=>{const t=xo("RouterView"),a=xo("StarportCarrier");return D(),F(ws,null,[M(t),M(a)],64)}}});function kt(e){return e!==null&&typeof e=="object"}function ua(e,n,l=".",t){if(!kt(n))return ua(e,{},l,t);const a=Object.assign({},n);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const c=e[r];c!=null&&(t&&t(a,r,c,l)||(Array.isArray(c)&&Array.isArray(a[r])?a[r]=[...c,...a[r]]:kt(c)&&kt(a[r])?a[r]=ua(c,a[r],(l?`${l}.`:"")+r.toString(),t):a[r]=c))}return a}function lv(e){return(...n)=>n.reduce((l,t)=>ua(l,t,"",e),{})}const ov=lv(),_y=1/60*1e3,tv=typeof performance<"u"?()=>performance.now():()=>Date.now(),Ey=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(tv()),_y);function av(e){let n=[],l=[],t=0,a=!1,r=!1;const c=new WeakSet,i={schedule:(p,y=!1,u=!1)=>{const A=u&&a,h=A?n:l;return y&&c.add(p),h.indexOf(p)===-1&&(h.push(p),A&&a&&(t=n.length)),p},cancel:p=>{const y=l.indexOf(p);y!==-1&&l.splice(y,1),c.delete(p)},process:p=>{if(a){r=!0;return}if(a=!0,[n,l]=[l,n],l.length=0,t=n.length,t)for(let y=0;y<t;y++){const u=n[y];u(p),c.has(u)&&(i.schedule(u),e())}a=!1,r&&(r=!1,i.process(p))}};return i}const rv=40;let Aa=!0,Jl=!1,ha=!1;const el={delta:0,timestamp:0},no=["read","update","preRender","render","postRender"],tt=no.reduce((e,n)=>(e[n]=av(()=>Jl=!0),e),{}),da=no.reduce((e,n)=>{const l=tt[n];return e[n]=(t,a=!1,r=!1)=>(Jl||pv(),l.schedule(t,a,r)),e},{}),cv=no.reduce((e,n)=>(e[n]=tt[n].cancel,e),{});no.reduce((e,n)=>(e[n]=()=>tt[n].process(el),e),{});const iv=e=>tt[e].process(el),ky=e=>{Jl=!1,el.delta=Aa?_y:Math.max(Math.min(e-el.timestamp,rv),1),el.timestamp=e,ha=!0,no.forEach(iv),ha=!1,Jl&&(Aa=!1,Ey(ky))},pv=()=>{Jl=!0,Aa=!0,ha||Ey(ky)},Fy=()=>el;function wy(e,n){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(l[t[a]]=e[t[a]]);return l}var yv=function(){},si=function(){};const fa=(e,n,l)=>Math.min(Math.max(l,e),n),Ft=.001,uv=.01,ei=10,Av=.05,hv=1;function dv({duration:e=800,bounce:n=.25,velocity:l=0,mass:t=1}){let a,r;yv(e<=ei*1e3);let c=1-n;c=fa(Av,hv,c),e=fa(uv,ei,e/1e3),c<1?(a=y=>{const u=y*c,A=u*e,h=u-l,f=Ba(y,c),d=Math.exp(-A);return Ft-h/f*d},r=y=>{const A=y*c*e,h=A*l+l,f=Math.pow(c,2)*Math.pow(y,2)*e,d=Math.exp(-A),g=Ba(Math.pow(y,2),c);return(-a(y)+Ft>0?-1:1)*((h-f)*d)/g}):(a=y=>{const u=Math.exp(-y*e),A=(y-l)*e+1;return-Ft+u*A},r=y=>{const u=Math.exp(-y*e),A=(l-y)*(e*e);return u*A});const i=5/e,p=Bv(a,r,i);if(e=e*1e3,isNaN(p))return{stiffness:100,damping:10,duration:e};{const y=Math.pow(p,2)*t;return{stiffness:y,damping:c*2*Math.sqrt(t*y),duration:e}}}const fv=12;function Bv(e,n,l){let t=l;for(let a=1;a<fv;a++)t=t-e(t)/n(t);return t}function Ba(e,n){return e*Math.sqrt(1-n*n)}const mv=["duration","bounce"],Dv=["stiffness","damping","mass"];function ni(e,n){return n.some(l=>e[l]!==void 0)}function gv(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ni(e,Dv)&&ni(e,mv)){const l=dv(e);n=Object.assign(Object.assign(Object.assign({},n),l),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function tr(e){var{from:n=0,to:l=1,restSpeed:t=2,restDelta:a}=e,r=wy(e,["from","to","restSpeed","restDelta"]);const c={done:!1,value:n};let{stiffness:i,damping:p,mass:y,velocity:u,duration:A,isResolvedFromDuration:h}=gv(r),f=li,d=li;function g(){const C=u?-(u/1e3):0,b=l-n,E=p/(2*Math.sqrt(i*y)),v=Math.sqrt(i/y)/1e3;if(a===void 0&&(a=Math.min(Math.abs(l-n)/100,.4)),E<1){const w=Ba(v,E);f=R=>{const L=Math.exp(-E*v*R);return l-L*((C+E*v*b)/w*Math.sin(w*R)+b*Math.cos(w*R))},d=R=>{const L=Math.exp(-E*v*R);return E*v*L*(Math.sin(w*R)*(C+E*v*b)/w+b*Math.cos(w*R))-L*(Math.cos(w*R)*(C+E*v*b)-w*b*Math.sin(w*R))}}else if(E===1)f=w=>l-Math.exp(-v*w)*(b+(C+v*b)*w);else{const w=v*Math.sqrt(E*E-1);f=R=>{const L=Math.exp(-E*v*R),I=Math.min(w*R,300);return l-L*((C+E*v*b)*Math.sinh(I)+w*b*Math.cosh(I))/w}}}return g(),{next:C=>{const b=f(C);if(h)c.done=C>=A;else{const E=d(C)*1e3,v=Math.abs(E)<=t,w=Math.abs(l-b)<=a;c.done=v&&w}return c.value=c.done?l:b,c},flipTarget:()=>{u=-u,[n,l]=[l,n],g()}}}tr.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const li=e=>0,xy=(e,n,l)=>{const t=n-e;return t===0?1:(l-e)/t},ar=(e,n,l)=>-l*e+l*n+e,Sy=(e,n)=>l=>Math.max(Math.min(l,n),e),Ll=e=>e%1?Number(e.toFixed(5)):e,Xl=/(-)?([\d]*\.?[\d])+/g,ma=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Cv=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function lo(e){return typeof e=="string"}const oo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},jl=Object.assign(Object.assign({},oo),{transform:Sy(0,1)}),fo=Object.assign(Object.assign({},oo),{default:1}),rr=e=>({test:n=>lo(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Bn=rr("deg"),Ml=rr("%"),cs=rr("px"),oi=Object.assign(Object.assign({},Ml),{parse:e=>Ml.parse(e)/100,transform:e=>Ml.transform(e*100)}),cr=(e,n)=>l=>Boolean(lo(l)&&Cv.test(l)&&l.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(l,n)),Oy=(e,n,l)=>t=>{if(!lo(t))return t;const[a,r,c,i]=t.match(Xl);return{[e]:parseFloat(a),[n]:parseFloat(r),[l]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},wn={test:cr("hsl","hue"),parse:Oy("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:l,alpha:t=1})=>"hsla("+Math.round(e)+", "+Ml.transform(Ll(n))+", "+Ml.transform(Ll(l))+", "+Ll(jl.transform(t))+")"},vv=Sy(0,255),wt=Object.assign(Object.assign({},oo),{transform:e=>Math.round(vv(e))}),tn={test:cr("rgb","red"),parse:Oy("red","green","blue"),transform:({red:e,green:n,blue:l,alpha:t=1})=>"rgba("+wt.transform(e)+", "+wt.transform(n)+", "+wt.transform(l)+", "+Ll(jl.transform(t))+")"};function bv(e){let n="",l="",t="",a="";return e.length>5?(n=e.substr(1,2),l=e.substr(3,2),t=e.substr(5,2),a=e.substr(7,2)):(n=e.substr(1,1),l=e.substr(2,1),t=e.substr(3,1),a=e.substr(4,1),n+=n,l+=l,t+=t,a+=a),{red:parseInt(n,16),green:parseInt(l,16),blue:parseInt(t,16),alpha:a?parseInt(a,16)/255:1}}const Da={test:cr("#"),parse:bv,transform:tn.transform},pe={test:e=>tn.test(e)||Da.test(e)||wn.test(e),parse:e=>tn.test(e)?tn.parse(e):wn.test(e)?wn.parse(e):Da.parse(e),transform:e=>lo(e)?e:e.hasOwnProperty("red")?tn.transform(e):wn.transform(e)},Ty="${c}",$y="${n}";function _v(e){var n,l,t,a;return isNaN(e)&&lo(e)&&((l=(n=e.match(Xl))===null||n===void 0?void 0:n.length)!==null&&l!==void 0?l:0)+((a=(t=e.match(ma))===null||t===void 0?void 0:t.length)!==null&&a!==void 0?a:0)>0}function Py(e){typeof e=="number"&&(e=`${e}`);const n=[];let l=0;const t=e.match(ma);t&&(l=t.length,e=e.replace(ma,Ty),n.push(...t.map(pe.parse)));const a=e.match(Xl);return a&&(e=e.replace(Xl,$y),n.push(...a.map(oo.parse))),{values:n,numColors:l,tokenised:e}}function Ry(e){return Py(e).values}function Ly(e){const{values:n,numColors:l,tokenised:t}=Py(e),a=n.length;return r=>{let c=t;for(let i=0;i<a;i++)c=c.replace(i<l?Ty:$y,i<l?pe.transform(r[i]):Ll(r[i]));return c}}const Ev=e=>typeof e=="number"?0:e;function kv(e){const n=Ry(e);return Ly(e)(n.map(Ev))}const to={test:_v,parse:Ry,createTransformer:Ly,getAnimatableNone:kv},Fv=new Set(["brightness","contrast","saturate","opacity"]);function wv(e){let[n,l]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[t]=l.match(Xl)||[];if(!t)return e;const a=l.replace(t,"");let r=Fv.has(n)?1:0;return t!==l&&(r*=100),n+"("+r+a+")"}const xv=/([a-z-]*)\(.*?\)/g,ga=Object.assign(Object.assign({},to),{getAnimatableNone:e=>{const n=e.match(xv);return n?n.map(wv).join(" "):e}});function xt(e,n,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?e+(n-e)*6*l:l<1/2?n:l<2/3?e+(n-e)*(2/3-l)*6:e}function ti({hue:e,saturation:n,lightness:l,alpha:t}){e/=360,n/=100,l/=100;let a=0,r=0,c=0;if(!n)a=r=c=l;else{const i=l<.5?l*(1+n):l+n-l*n,p=2*l-i;a=xt(p,i,e+1/3),r=xt(p,i,e),c=xt(p,i,e-1/3)}return{red:Math.round(a*255),green:Math.round(r*255),blue:Math.round(c*255),alpha:t}}const Sv=(e,n,l)=>{const t=e*e,a=n*n;return Math.sqrt(Math.max(0,l*(a-t)+t))},Ov=[Da,tn,wn],ai=e=>Ov.find(n=>n.test(e)),jy=(e,n)=>{let l=ai(e),t=ai(n),a=l.parse(e),r=t.parse(n);l===wn&&(a=ti(a),l=tn),t===wn&&(r=ti(r),t=tn);const c=Object.assign({},a);return i=>{for(const p in c)p!=="alpha"&&(c[p]=Sv(a[p],r[p],i));return c.alpha=ar(a.alpha,r.alpha,i),l.transform(c)}},Tv=e=>typeof e=="number",$v=(e,n)=>l=>n(e(l)),My=(...e)=>e.reduce($v);function Iy(e,n){return Tv(e)?l=>ar(e,n,l):pe.test(e)?jy(e,n):Uy(e,n)}const Ny=(e,n)=>{const l=[...e],t=l.length,a=e.map((r,c)=>Iy(r,n[c]));return r=>{for(let c=0;c<t;c++)l[c]=a[c](r);return l}},Pv=(e,n)=>{const l=Object.assign(Object.assign({},e),n),t={};for(const a in l)e[a]!==void 0&&n[a]!==void 0&&(t[a]=Iy(e[a],n[a]));return a=>{for(const r in t)l[r]=t[r](a);return l}};function ri(e){const n=to.parse(e),l=n.length;let t=0,a=0,r=0;for(let c=0;c<l;c++)t||typeof n[c]=="number"?t++:n[c].hue!==void 0?r++:a++;return{parsed:n,numNumbers:t,numRGB:a,numHSL:r}}const Uy=(e,n)=>{const l=to.createTransformer(n),t=ri(e),a=ri(n);return t.numHSL===a.numHSL&&t.numRGB===a.numRGB&&t.numNumbers>=a.numNumbers?My(Ny(t.parsed,a.parsed),l):c=>`${c>0?n:e}`},Rv=(e,n)=>l=>ar(e,n,l);function Lv(e){if(typeof e=="number")return Rv;if(typeof e=="string")return pe.test(e)?jy:Uy;if(Array.isArray(e))return Ny;if(typeof e=="object")return Pv}function jv(e,n,l){const t=[],a=l||Lv(e[0]),r=e.length-1;for(let c=0;c<r;c++){let i=a(e[c],e[c+1]);if(n){const p=Array.isArray(n)?n[c]:n;i=My(p,i)}t.push(i)}return t}function Mv([e,n],[l]){return t=>l(xy(e,n,t))}function Iv(e,n){const l=e.length,t=l-1;return a=>{let r=0,c=!1;if(a<=e[0]?c=!0:a>=e[t]&&(r=t-1,c=!0),!c){let p=1;for(;p<l&&!(e[p]>a||p===t);p++);r=p-1}const i=xy(e[r],e[r+1],a);return n[r](i)}}function Hy(e,n,{clamp:l=!0,ease:t,mixer:a}={}){const r=e.length;si(r===n.length),si(!t||!Array.isArray(t)||t.length===r-1),e[0]>e[r-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const c=jv(n,t,a),i=r===2?Mv(e,c):Iv(e,c);return l?p=>i(fa(e[0],e[r-1],p)):i}const at=e=>n=>1-e(1-n),ir=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,Nv=e=>n=>Math.pow(n,e),zy=e=>n=>n*n*((e+1)*n-e),Uv=e=>{const n=zy(e);return l=>(l*=2)<1?.5*n(l):.5*(2-Math.pow(2,-10*(l-1)))},Vy=1.525,Hv=4/11,zv=8/11,Vv=9/10,Wy=e=>e,pr=Nv(2),Wv=at(pr),Ky=ir(pr),qy=e=>1-Math.sin(Math.acos(e)),Gy=at(qy),Kv=ir(Gy),yr=zy(Vy),qv=at(yr),Gv=ir(yr),Yv=Uv(Vy),Zv=4356/361,Qv=35442/1805,Jv=16061/1805,Mo=e=>{if(e===1||e===0)return e;const n=e*e;return e<Hv?7.5625*n:e<zv?9.075*n-9.9*e+3.4:e<Vv?Zv*n-Qv*e+Jv:10.8*e*e-20.52*e+10.72},Xv=at(Mo),s6=e=>e<.5?.5*(1-Mo(1-e*2)):.5*Mo(e*2-1)+.5;function e6(e,n){return e.map(()=>n||Ky).splice(0,e.length-1)}function n6(e){const n=e.length;return e.map((l,t)=>t!==0?t/(n-1):0)}function l6(e,n){return e.map(l=>l*n)}function bo({from:e=0,to:n=1,ease:l,offset:t,duration:a=300}){const r={done:!1,value:e},c=Array.isArray(n)?n:[e,n],i=l6(t&&t.length===c.length?t:n6(c),a);function p(){return Hy(i,c,{ease:Array.isArray(l)?l:e6(c,l)})}let y=p();return{next:u=>(r.value=y(u),r.done=u>=a,r),flipTarget:()=>{c.reverse(),y=p()}}}function o6({velocity:e=0,from:n=0,power:l=.8,timeConstant:t=350,restDelta:a=.5,modifyTarget:r}){const c={done:!1,value:n};let i=l*e;const p=n+i,y=r===void 0?p:r(p);return y!==p&&(i=y-n),{next:u=>{const A=-i*Math.exp(-u/t);return c.done=!(A>a||A<-a),c.value=c.done?y:y+A,c},flipTarget:()=>{}}}const ci={keyframes:bo,spring:tr,decay:o6};function t6(e){if(Array.isArray(e.to))return bo;if(ci[e.type])return ci[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?bo:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?tr:bo}function Yy(e,n,l=0){return e-n-l}function a6(e,n,l=0,t=!0){return t?Yy(n+-e,n,l):n-(e-n)+l}function r6(e,n,l,t){return t?e>=n+l:e<=-l}const c6=e=>{const n=({delta:l})=>e(l);return{start:()=>da.update(n,!0),stop:()=>cv.update(n)}};function Zy(e){var n,l,{from:t,autoplay:a=!0,driver:r=c6,elapsed:c=0,repeat:i=0,repeatType:p="loop",repeatDelay:y=0,onPlay:u,onStop:A,onComplete:h,onRepeat:f,onUpdate:d}=e,g=wy(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:C}=g,b,E=0,v=g.duration,w,R=!1,L=!0,I;const J=t6(g);!((l=(n=J).needsInterpolation)===null||l===void 0)&&l.call(n,t,C)&&(I=Hy([0,100],[t,C],{clamp:!1}),t=0,C=100);const ts=J(Object.assign(Object.assign({},g),{from:t,to:C}));function us(){E++,p==="reverse"?(L=E%2===0,c=a6(c,v,y,L)):(c=Yy(c,v,y),p==="mirror"&&ts.flipTarget()),R=!1,f&&f()}function Ds(){b.stop(),h&&h()}function Gs(Is){if(L||(Is=-Is),c+=Is,!R){const Ts=ts.next(Math.max(0,c));w=Ts.value,I&&(w=I(w)),R=L?Ts.done:c<=0}d==null||d(w),R&&(E===0&&(v!=null||(v=c)),E<i?r6(c,v,y,L)&&us():Ds())}function Ws(){u==null||u(),b=r(Gs),b.start()}return a&&Ws(),{stop:()=>{A==null||A(),b.stop()}}}function Qy(e,n){return n?e*(1e3/n):0}function i6({from:e=0,velocity:n=0,min:l,max:t,power:a=.8,timeConstant:r=750,bounceStiffness:c=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:y,driver:u,onUpdate:A,onComplete:h,onStop:f}){let d;function g(v){return l!==void 0&&v<l||t!==void 0&&v>t}function C(v){return l===void 0?t:t===void 0||Math.abs(l-v)<Math.abs(t-v)?l:t}function b(v){d==null||d.stop(),d=Zy(Object.assign(Object.assign({},v),{driver:u,onUpdate:w=>{var R;A==null||A(w),(R=v.onUpdate)===null||R===void 0||R.call(v,w)},onComplete:h,onStop:f}))}function E(v){b(Object.assign({type:"spring",stiffness:c,damping:i,restDelta:p},v))}if(g(e))E({from:e,velocity:n,to:C(e)});else{let v=a*n+e;typeof y<"u"&&(v=y(v));const w=C(v),R=w===l?-1:1;let L,I;const J=ts=>{L=I,I=ts,n=Qy(ts-L,Fy().delta),(R===1&&ts>w||R===-1&&ts<w)&&E({from:ts,to:w,velocity:n})};b({type:"decay",from:e,velocity:n,timeConstant:r,power:a,restDelta:p,modifyTarget:y,onUpdate:g(v)?J:void 0})}return{stop:()=>d==null?void 0:d.stop()}}const Jy=(e,n)=>1-3*n+3*e,Xy=(e,n)=>3*n-6*e,s8=e=>3*e,Io=(e,n,l)=>((Jy(n,l)*e+Xy(n,l))*e+s8(n))*e,e8=(e,n,l)=>3*Jy(n,l)*e*e+2*Xy(n,l)*e+s8(n),p6=1e-7,y6=10;function u6(e,n,l,t,a){let r,c,i=0;do c=n+(l-n)/2,r=Io(c,t,a)-e,r>0?l=c:n=c;while(Math.abs(r)>p6&&++i<y6);return c}const A6=8,h6=.001;function d6(e,n,l,t){for(let a=0;a<A6;++a){const r=e8(n,l,t);if(r===0)return n;const c=Io(n,l,t)-e;n-=c/r}return n}const _o=11,Bo=1/(_o-1);function f6(e,n,l,t){if(e===n&&l===t)return Wy;const a=new Float32Array(_o);for(let c=0;c<_o;++c)a[c]=Io(c*Bo,e,l);function r(c){let i=0,p=1;const y=_o-1;for(;p!==y&&a[p]<=c;++p)i+=Bo;--p;const u=(c-a[p])/(a[p+1]-a[p]),A=i+u*Bo,h=e8(A,e,l);return h>=h6?d6(c,A,e,l):h===0?A:u6(c,i,i+Bo,e,l)}return c=>c===0||c===1?c:Io(r(c),n,t)}const St={};class B6{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,l,t){if(!!this.subscriptions.size)for(const a of this.subscriptions)a(n,l,t)}clear(){this.subscriptions.clear()}}const ii=e=>!isNaN(parseFloat(e));class m6{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new B6,this.canTrackVelocity=!1,this.updateAndNotify=l=>{this.prev=this.current,this.current=l;const{delta:t,timestamp:a}=Fy();this.lastUpdated!==a&&(this.timeDelta=t,this.lastUpdated=a),da.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>da.postRender(this.velocityCheck),this.velocityCheck=({timestamp:l})=>{this.canTrackVelocity||(this.canTrackVelocity=ii(this.current)),l!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=ii(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Qy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(l=>{const{stop:t}=n(l);this.stopAnimation=t}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function D6(e){return new m6(e)}const{isArray:g6}=Array;function C6(){const e=V({}),n=t=>{const a=r=>{!e.value[r]||(e.value[r].stop(),e.value[r].destroy(),delete e.value[r])};t?g6(t)?t.forEach(a):a(t):Object.keys(e.value).forEach(a)},l=(t,a,r)=>{if(e.value[t])return e.value[t];const c=D6(a);return c.onChange(i=>r[t]=i),e.value[t]=c,c};return nA(n),{motionValues:e,get:l,stop:n}}const v6=e=>Array.isArray(e),mn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ot=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),b6=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Tt=()=>({type:"keyframes",ease:"linear",duration:300}),_6=e=>({type:"keyframes",duration:800,values:e}),pi={default:b6,x:mn,y:mn,z:mn,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scaleX:Ot,scaleY:Ot,scale:Ot,backgroundColor:Tt,color:Tt,opacity:Tt},n8=(e,n)=>{let l;return v6(n)?l=_6:l=pi[e]||pi.default,{to:n,...l(n)}},yi={...oo,transform:Math.round},l8={color:pe,backgroundColor:pe,outlineColor:pe,fill:pe,stroke:pe,borderColor:pe,borderTopColor:pe,borderRightColor:pe,borderBottomColor:pe,borderLeftColor:pe,borderWidth:cs,borderTopWidth:cs,borderRightWidth:cs,borderBottomWidth:cs,borderLeftWidth:cs,borderRadius:cs,radius:cs,borderTopLeftRadius:cs,borderTopRightRadius:cs,borderBottomRightRadius:cs,borderBottomLeftRadius:cs,width:cs,maxWidth:cs,height:cs,maxHeight:cs,size:cs,top:cs,right:cs,bottom:cs,left:cs,padding:cs,paddingTop:cs,paddingRight:cs,paddingBottom:cs,paddingLeft:cs,margin:cs,marginTop:cs,marginRight:cs,marginBottom:cs,marginLeft:cs,rotate:Bn,rotateX:Bn,rotateY:Bn,rotateZ:Bn,scale:fo,scaleX:fo,scaleY:fo,scaleZ:fo,skew:Bn,skewX:Bn,skewY:Bn,distance:cs,translateX:cs,translateY:cs,translateZ:cs,x:cs,y:cs,z:cs,perspective:cs,transformPerspective:cs,opacity:jl,originX:oi,originY:oi,originZ:cs,zIndex:yi,filter:ga,WebkitFilter:ga,fillOpacity:jl,strokeOpacity:jl,numOctaves:yi},ur=e=>l8[e],o8=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function E6(e,n){let l=ur(e);return l!==ga&&(l=to),l.getAnimatableNone?l.getAnimatableNone(n):void 0}const k6={linear:Wy,easeIn:pr,easeInOut:Ky,easeOut:Wv,circIn:qy,circInOut:Kv,circOut:Gy,backIn:yr,backInOut:Gv,backOut:qv,anticipate:Yv,bounceIn:Xv,bounceInOut:s6,bounceOut:Mo},ui=e=>{if(Array.isArray(e)){const[n,l,t,a]=e;return f6(n,l,t,a)}else if(typeof e=="string")return k6[e];return e},F6=e=>Array.isArray(e)&&typeof e[0]!="number",Ai=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&to.test(n)&&!n.startsWith("url("));function w6(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function x6({ease:e,times:n,delay:l,...t}){const a={...t};return n&&(a.offset=n),e&&(a.ease=F6(e)?e.map(ui):ui(e)),l&&(a.elapsed=-l),a}function S6(e,n,l){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),w6(n),O6(e)||(e={...e,...n8(l,n.to)}),{...n,...x6(e)}}function O6({delay:e,repeat:n,repeatType:l,repeatDelay:t,from:a,...r}){return!!Object.keys(r).length}function T6(e,n){return e[n]||e.default||e}function $6(e,n,l,t,a){const r=T6(t,e);let c=r.from===null||r.from===void 0?n.get():r.from;const i=Ai(e,l);c==="none"&&i&&typeof l=="string"&&(c=E6(e,l));const p=Ai(e,c);function y(A){const h={from:c,to:l,velocity:t.velocity?t.velocity:n.getVelocity(),onUpdate:f=>n.set(f)};return r.type==="inertia"||r.type==="decay"?i6({...h,...r}):Zy({...S6(r,h,e),onUpdate:f=>{h.onUpdate(f),r.onUpdate&&r.onUpdate(f)},onComplete:()=>{t.onComplete&&t.onComplete(),a&&a(),A&&A()}})}function u(A){return n.set(l),t.onComplete&&t.onComplete(),a&&a(),A&&A(),{stop:()=>{}}}return!p||!i||r.type===!1?u:y}function P6(){const{motionValues:e,stop:n,get:l}=C6();return{motionValues:e,stop:n,push:(a,r,c,i={},p)=>{const y=c[a],u=l(a,y,c);if(i&&i.immediate){u.set(r);return}const A=$6(a,u,r,i,p);u.start(A)}}}function R6(e,n={},{motionValues:l,push:t,stop:a}=P6()){const r=_(n),c=V(!1);As(l,A=>{c.value=Object.values(A).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0});const i=A=>{if(!r||!r[A])throw new Error(`The variant ${A} does not exist.`);return r[A]},p=A=>(typeof A=="string"&&(A=i(A)),Promise.all(Object.entries(A).map(([h,f])=>{if(h!=="transition")return new Promise(d=>t(h,f,e,A.transition||n8(h,A[h]),d))}).filter(Boolean)));return{isAnimating:c,apply:p,set:A=>{const h=Gt(A)?A:i(A);Object.entries(h).forEach(([f,d])=>{f!=="transition"&&t(f,d,e,{immediate:!0})})},leave:async A=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){A();return}await p(h),A()},stop:a}}const Ar=typeof window<"u",L6=()=>Ar&&window.onpointerdown===null,j6=()=>Ar&&window.ontouchstart===null,M6=()=>Ar&&window.onmousedown===null;function I6({target:e,state:n,variants:l,apply:t}){const a=_(l),r=V(!1),c=V(!1),i=V(!1),p=S(()=>{let u=[];return a&&(a.hovered&&(u=[...u,...Object.keys(a.hovered)]),a.tapped&&(u=[...u,...Object.keys(a.tapped)]),a.focused&&(u=[...u,...Object.keys(a.focused)])),u}),y=S(()=>{const u={};Object.assign(u,n.value),r.value&&a.hovered&&Object.assign(u,a.hovered),c.value&&a.tapped&&Object.assign(u,a.tapped),i.value&&a.focused&&Object.assign(u,a.focused);for(const A in u)p.value.includes(A)||delete u[A];return u});a.hovered&&(ys(e,"mouseenter",()=>r.value=!0),ys(e,"mouseleave",()=>{r.value=!1,c.value=!1}),ys(e,"mouseout",()=>{r.value=!1,c.value=!1})),a.tapped&&(M6()&&(ys(e,"mousedown",()=>c.value=!0),ys(e,"mouseup",()=>c.value=!1)),L6()&&(ys(e,"pointerdown",()=>c.value=!0),ys(e,"pointerup",()=>c.value=!1)),j6()&&(ys(e,"touchstart",()=>c.value=!0),ys(e,"touchend",()=>c.value=!1))),a.focused&&(ys(e,"focus",()=>i.value=!0),ys(e,"blur",()=>i.value=!1)),As(y,t)}function N6({set:e,target:n,apply:l,variants:t,variant:a}){const r=_(t);As(()=>n,()=>{!r||(r.initial&&e("initial"),r.enter&&(a.value="enter"))},{immediate:!0,flush:"pre"})}function U6({state:e,apply:n}){As(e,l=>{l&&n(l)},{immediate:!0})}function H6({target:e,variants:n,variant:l}){const t=_(n);t&&(t.visible||t.visibleOnce)&&Fh(e,([{isIntersecting:a}])=>{t.visible?a?l.value="visible":l.value="initial":t.visibleOnce&&(a&&l.value!=="visibleOnce"?l.value="visibleOnce":l.value||(l.value="initial"))})}function z6(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&N6(e),n.syncVariants&&U6(e),n.visibilityHooks&&H6(e),n.eventListeners&&I6(e)}function t8(e={}){const n=Rs({...e}),l=V({});return As(n,()=>{const t={};for(const[a,r]of Object.entries(n)){const c=ur(a),i=o8(r,c);t[a]=i}l.value=t},{immediate:!0,deep:!0}),{state:n,style:l}}function hr(e,n){As(()=>xe(e),l=>{!l||n(l)},{immediate:!0})}const V6={x:"translateX",y:"translateY",z:"translateZ"};function a8(e={},n=!0){const l=Rs({...e}),t=V("");return As(l,a=>{let r="",c=!1;if(n&&(a.x||a.y||a.z)){const i=[a.x||0,a.y||0,a.z||0].map(cs.transform).join(",");r+=`translate3d(${i}) `,c=!0}for(const[i,p]of Object.entries(a)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const y=ur(i),u=o8(p,y);r+=`${V6[i]||i}(${u}) `}n&&!c&&(r+="translateZ(0px) "),t.value=r.trim()},{immediate:!0,deep:!0}),{state:l,transform:t}}const W6=["","X","Y","Z"],K6=["perspective","translate","scale","rotate","skew"],r8=["transformPerspective","x","y","z"];K6.forEach(e=>{W6.forEach(n=>{const l=e+n;r8.push(l)})});const q6=new Set(r8);function dr(e){return q6.has(e)}const G6=new Set(["originX","originY","originZ"]);function c8(e){return G6.has(e)}function Y6(e){const n={},l={};return Object.entries(e).forEach(([t,a])=>{dr(t)||c8(t)?n[t]=a:l[t]=a}),{transform:n,style:l}}function i8(e){const{transform:n,style:l}=Y6(e),{transform:t}=a8(n),{style:a}=t8(l);return t.value&&(a.value.transform=t.value),a.value}function Z6(e,n){let l,t;const{state:a,style:r}=t8();return hr(e,c=>{t=c;for(const i of Object.keys(l8))c.style[i]===null||c.style[i]===""||dr(i)||c8(i)||(a[i]=c.style[i]);l&&Object.entries(l).forEach(([i,p])=>c.style[i]=p),n&&n(a)}),As(r,c=>{if(!t){l=c;return}for(const i in c)t.style[i]=c[i]},{immediate:!0}),{style:a}}function Q6(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const l=t=>t.endsWith("px")||t.endsWith("deg")?parseFloat(t):isNaN(Number(t))?Number(t):t;return n.reduce((t,a)=>{if(!a)return t;const[r,c]=a.split("("),p=c.split(",").map(u=>l(u.endsWith(")")?u.replace(")",""):u.trim())),y=p.length===1?p[0]:p;return{...t,[r]:y}},{})}function J6(e,n){Object.entries(Q6(n)).forEach(([l,t])=>{const a=["x","y","z"];if(l==="translate3d"){if(t===0){a.forEach(r=>e[r]=0);return}t.forEach((r,c)=>e[a[c]]=r);return}if(t=parseFloat(t),l==="translateX"){e.x=t;return}if(l==="translateY"){e.y=t;return}if(l==="translateZ"){e.z=t;return}e[l]=t})}function X6(e,n){let l,t;const{state:a,transform:r}=a8();return hr(e,c=>{t=c,c.style.transform&&J6(a,c.style.transform),l&&(c.style.transform=l),n&&n(a)}),As(r,c=>{if(!t){l=c;return}t.style.transform=c},{immediate:!0}),{transform:a}}function s1(e,n){const l=Rs({}),t=c=>Object.entries(c).forEach(([i,p])=>l[i]=p),{style:a}=Z6(e,t),{transform:r}=X6(e,t);return As(l,c=>{Object.entries(c).forEach(([i,p])=>{const y=dr(i)?r:a;y[i]&&y[i]===p||(y[i]=p)})},{immediate:!0,deep:!0}),hr(e,()=>n&&t(n)),{motionProperties:l,style:a,transform:r}}function e1(e={}){const n=_(e),l=V();return{state:S(()=>{if(!!l.value)return n[l.value]}),variant:l}}function p8(e,n={},l){const{motionProperties:t}=s1(e),{variant:a,state:r}=e1(n),c=R6(t,n),i={target:e,variant:a,variants:n,state:r,motionProperties:t,...c};return z6(i,l),i}const n1=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],l1=(e,n)=>{const l=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};l&&(l.variants&&Gt(l.variants)&&(n.value={...n.value,...l.variants}),n1.forEach(t=>{if(t==="delay"){if(l&&l[t]&&U5(l[t])){const a=l[t];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:a,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:a,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:a,...n.value.visibleOnce.transition}))}return}t==="visible-once"&&(t="visibleOnce"),l&&l[t]&&Gt(l[t])&&(n.value[t]=l[t])}))},$t=e=>({created:(l,t,a)=>{const r=t.value&&typeof t.value=="string"?t.value:a.key;r&&St[r]&&St[r].stop();const c=V(e||{});typeof t.value=="object"&&(c.value=t.value),l1(a,c);const i=p8(l,c);l.motionInstance=i,r&&(St[r]=i)},getSSRProps(l,t){let{initial:a}=l.value||t&&(t==null?void 0:t.props)||{};a=_(a);const r=ov((e==null?void 0:e.initial)||{},a||{});return!r||Object.keys(r).length===0?void 0:{style:i8(r)}}}),o1={initial:{opacity:0},enter:{opacity:1}},t1={initial:{opacity:0},visible:{opacity:1}},a1={initial:{opacity:0},visibleOnce:{opacity:1}},r1={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},c1={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},i1={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},p1={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},y1={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},u1={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},A1={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},h1={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},d1={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},f1={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},B1={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},m1={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},D1={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},g1={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},C1={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},v1={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},b1={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},_1={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},E1={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},k1={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},F1={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},w1={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},x1={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},S1={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},O1={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},T1={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},$1={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ca={__proto__:null,fade:o1,fadeVisible:t1,fadeVisibleOnce:a1,pop:r1,popVisible:c1,popVisibleOnce:i1,rollBottom:D1,rollLeft:p1,rollRight:A1,rollTop:f1,rollVisibleBottom:g1,rollVisibleLeft:y1,rollVisibleRight:h1,rollVisibleTop:B1,rollVisibleOnceBottom:C1,rollVisibleOnceLeft:u1,rollVisibleOnceRight:d1,rollVisibleOnceTop:m1,slideBottom:O1,slideLeft:v1,slideRight:E1,slideTop:w1,slideVisibleBottom:T1,slideVisibleLeft:b1,slideVisibleRight:k1,slideVisibleTop:x1,slideVisibleOnceBottom:$1,slideVisibleOnceLeft:_1,slideVisibleOnceRight:F1,slideVisibleOnceTop:S1},P1=Es({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const n=y5(),l=Rs({});if(!e.is&&!n.default)return()=>Be("div",{});const t=S(()=>{let p;return e.preset&&(p=Ca[e.preset]),p}),a=S(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),r=S(()=>{const p={...a.value,...t.value||{},...e.variants||{}};return e.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(e.delay)),p}),c=S(()=>{if(!e.is)return;let p=e.is;return typeof c.value=="string"&&!g8(p)&&(p=xo(p)),p});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const p=y=>{var u;(u=y.variants)!=null&&u.initial&&y.set("initial"),setTimeout(()=>{var A,h,f;(A=y.variants)!=null&&A.enter&&y.apply("enter"),(h=y.variants)!=null&&h.visible&&y.apply("visible"),(f=y.variants)!=null&&f.visibleOnce&&y.apply("visibleOnce")},10)};Na(()=>Object.entries(l).forEach(([y,u])=>p(u)))}return{slots:n,component:c,motionConfig:r,instances:l}},render({slots:e,motionConfig:n,instances:l,component:t}){var i;const a=i8(n.initial||{}),r=(p,y)=>(p.props||(p.props={}),p.props.style=a,p.props.onVnodeMounted=({el:u})=>{const A=p8(u,n);l[y]=A},p);if(t){const p=Be(t,void 0,e);return r(p,0),p}return(((i=e.default)==null?void 0:i.call(e))||[]).map((p,y)=>r(p,y))}});function R1(e){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",l="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",t=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,a=>`-${a}`).toLowerCase().replace(/\s+/g,"-").replace(t,a=>l.charAt(n.indexOf(a))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const L1={install(e,n){if(e.directive("motion",$t()),e.component("Motion",P1),!n||n&&!n.excludePresets)for(const l in Ca){const t=Ca[l];e.directive(`motion-${R1(l)}`,$t(t))}if(n&&n.directives)for(const l in n.directives){const t=n.directives[l];t.initial,e.directive(`motion-${l}`,$t(t))}}};var hi;const Il=typeof window<"u",j1=Object.prototype.toString,M1=e=>j1.call(e)==="[object Object]";Il&&((hi=window==null?void 0:window.navigator)==null?void 0:hi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function I1(e){return Ri()?(Li(e),!0):!1}function N1(e){var n;const l=_(e);return(n=l==null?void 0:l.$el)!=null?n:l}const U1=Il?window:void 0,va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ba="__vueuse_ssr_handlers__";va[ba]=va[ba]||{};va[ba];function H1(e,n={}){const{immediate:l=!0,window:t=U1}=n,a=V(!1);let r=null;function c(){!a.value||!t||(e(),r=t.requestAnimationFrame(c))}function i(){!a.value&&t&&(a.value=!0,c())}function p(){a.value=!1,r!=null&&t&&(t.cancelAnimationFrame(r),r=null)}return l&&i(),I1(p),{isActive:a,pause:p,resume:i}}var di;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(di||(di={}));const fr="vue-starport-injection",y8="vue-starport-options",z1={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},u8={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var V1=Object.defineProperty,No=Object.getOwnPropertySymbols,A8=Object.prototype.hasOwnProperty,h8=Object.prototype.propertyIsEnumerable,fi=(e,n,l)=>n in e?V1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,W1=(e,n)=>{for(var l in n||(n={}))A8.call(n,l)&&fi(e,l,n[l]);if(No)for(var l of No(n))h8.call(n,l)&&fi(e,l,n[l]);return e},Bi=(e,n)=>{var l={};for(var t in e)A8.call(e,t)&&n.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&No)for(var t of No(e))n.indexOf(t)<0&&h8.call(e,t)&&(l[t]=e[t]);return l};const K1=Es({name:"StarportProxy",props:W1({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},u8),setup(e,n){const l=U(fr),t=S(()=>l.getInstance(e.port,e.component)),a=V(),r=t.value.generateId(),c=V(!1);return t.value.isVisible||(t.value.land(),c.value=!0),yl(async()=>{t.value.el||(t.value.el=a.value,await ee(),c.value=!0,t.value.rect.update())}),Jo(async()=>{t.value.rect.update(),t.value.liftOff(),t.value.el=void 0,c.value=!1,!t.value.options.keepAlive&&(await ee(),await ee(),!t.value.el&&l.dispose(t.value.port))}),As(()=>e,async()=>{t.value.props&&await ee();const i=e,{props:p}=i,y=Bi(i,["props"]);t.value.props=p||{},t.value.setLocalOptions(y)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:p,mountedProps:y}=i,u=Bi(i,["initialProps","mountedProps"]),A=hs(u,(c.value?y:p)||{});return Be("div",hs(A,{id:r,ref:a,"data-starport-proxy":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true"}),n.slots.default?Be(n.slots.default):void 0)}}});var q1=Object.defineProperty,G1=Object.defineProperties,Y1=Object.getOwnPropertyDescriptors,mi=Object.getOwnPropertySymbols,Z1=Object.prototype.hasOwnProperty,Q1=Object.prototype.propertyIsEnumerable,Di=(e,n,l)=>n in e?q1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,J1=(e,n)=>{for(var l in n||(n={}))Z1.call(n,l)&&Di(e,l,n[l]);if(mi)for(var l of mi(n))Q1.call(n,l)&&Di(e,l,n[l]);return e},X1=(e,n)=>G1(e,Y1(n));const sb=Es({name:"Starport",inheritAttrs:!0,props:u8,setup(e,n){const l=V(!1);return yl(()=>{l.value=!0}),()=>{var c,i;const t=(i=(c=n.slots).default)==null?void 0:i.call(c);if(!t)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(t.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${t.length}`);const a=t[0];let r=a.type;return(!M1(r)||ll(r))&&(r={render(){return t}}),Be(K1,X1(J1({},e),{key:e.port,component:qo(r),props:a.props}))}}});function eb(e){const n=Rs({height:0,width:0,left:0,top:0,update:t,listen:r,pause:c,margin:"0px",padding:"0px"}),l=Il?document.documentElement||document.body:void 0;function t(){if(!Il)return;const i=N1(e);if(!i)return;const{height:p,width:y,left:u,top:A}=i.getBoundingClientRect(),h=window.getComputedStyle(i),f=h.margin,d=h.padding;Object.assign(n,{height:p,width:y,left:u,top:l.scrollTop+A,margin:f,padding:d})}const a=H1(t,{immediate:!1});function r(){!Il||(t(),a.resume())}function c(){a.pause()}return n}let nb=(e,n=21)=>(l=n)=>{let t="",a=l;for(;a--;)t+=e[Math.random()*e.length|0];return t};const gi=nb("abcdefghijklmnopqrstuvwxyz",5);function Ci(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function lb(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var ob=Object.defineProperty,vi=Object.getOwnPropertySymbols,tb=Object.prototype.hasOwnProperty,ab=Object.prototype.propertyIsEnumerable,bi=(e,n,l)=>n in e?ob(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,Pt=(e,n)=>{for(var l in n||(n={}))tb.call(n,l)&&bi(e,l,n[l]);if(vi)for(var l of vi(n))ab.call(n,l)&&bi(e,l,n[l]);return e};function rb(e,n,l={}){const t=lb(n),a=Ci(t)||gi(),r=V(),c=V(null),i=V(!1),p=V(!1),y=S8(!0),u=V({}),A=S(()=>Pt(Pt(Pt({},z1),l),u.value)),h=V(0);let f;y.run(()=>{f=eb(r),As(r,async b=>{b&&(p.value=!0),await ee(),r.value||(p.value=!1)})});const d=Ci(e);function g(){return`starport-${a}-${d}-${gi()}`}const C=g();return Rs({el:r,id:C,port:e,props:c,rect:f,scope:y,isLanded:i,isVisible:p,options:A,liftOffTime:h,component:n,componentName:t,componentId:a,generateId:g,setLocalOptions(b={}){u.value=JSON.parse(JSON.stringify(b))},elRef(){return r},liftOff(){!i.value||(i.value=!1,h.value=Date.now(),f.listen())},land(){i.value||(i.value=!0,f.pause())}})}function cb(e){const n=Rs(new Map);function l(a,r){let c=n.get(a);return c||(c=rb(a,r,e),n.set(a,c)),c.component=r,c}function t(a){var r;(r=n.get(a))==null||r.scope.stop(),n.delete(a)}return{portMap:n,dispose:t,getInstance:l}}var ib=Object.defineProperty,pb=Object.defineProperties,yb=Object.getOwnPropertyDescriptors,_i=Object.getOwnPropertySymbols,ub=Object.prototype.hasOwnProperty,Ab=Object.prototype.propertyIsEnumerable,Ei=(e,n,l)=>n in e?ib(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,hb=(e,n)=>{for(var l in n||(n={}))ub.call(n,l)&&Ei(e,l,n[l]);if(_i)for(var l of _i(n))Ab.call(n,l)&&Ei(e,l,n[l]);return e},db=(e,n)=>pb(e,yb(n));const fb=Es({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=U(fr);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const l=S(()=>n.getInstance(e.port,e.component)),t=S(()=>{var c;return((c=l.value.el)==null?void 0:c.id)||l.value.id}),a=S(()=>{const c=Date.now()-l.value.liftOffTime,i=Math.max(0,l.value.options.duration-c),p=l.value.rect,y={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!l.value.isVisible||!l.value.el?db(hb({},y),{zIndex:-1,display:"none"}):(l.value.isLanded?y.display="none":Object.assign(y,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:l.value.options.easing}),y)}),r={};return()=>{const c=!!(l.value.isLanded&&l.value.el);return Be("div",{style:a.value,"data-starport-craft":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true",onTransitionend:l.value.land},Be(e5,{to:c?`#${t.value}`:"body",disabled:!c},Be(l.value.component,hs(r,l.value.props))))}}}),Bb=Es({name:"StarportCarrier",setup(e,{slots:n}){const l=cb(U(y8,{}));return Ln().appContext.app.provide(fr,l),()=>{var a;return[(a=n.default)==null?void 0:a.call(n),Array.from(l.portMap.entries()).map(([r,{component:c}])=>Be(fb,{key:r,port:r,component:c}))]}}});function mb(e={}){return{install(n){n.provide(y8,e),n.component("Starport",sb),n.component("StarportCarrier",Bb)}}}function Db(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(L1),e.app.use(mb({keepAlive:!0}))}function ue(e,n,l){var t,a;return(a=((t=e.instance)==null?void 0:t.$).provides[n])!=null?a:l}function gb(){return{install(e){e.directive("click",{name:"v-click",mounted(n,l){var u,A,h,f;if(Rl.value||((u=ue(l,Ol))==null?void 0:u.value))return;const t=ue(l,bn),a=ue(l,Sl),r=ue(l,Qt),c=l.modifiers.hide!==!1&&l.modifiers.hide!=null,i=l.modifiers.fade!==!1&&l.modifiers.fade!=null,p=((A=t==null?void 0:t.value)==null?void 0:A.length)||0,y=i?TA:ft;if(t&&!((h=t==null?void 0:t.value)!=null&&h.includes(n))&&t.value.push(n),l.value==null&&(l.value=t==null?void 0:t.value.length),!(r!=null&&r.value.has(l.value)))r==null||r.value.set(l.value,[n]);else if(!((f=r==null?void 0:r.value.get(l.value))!=null&&f.includes(n))){const d=(r==null?void 0:r.value.get(l.value))||[];r==null||r.value.set(l.value,[n].concat(d))}n==null||n.classList.toggle(gn,!0),a&&As(a,()=>{var b;const d=(b=a==null?void 0:a.value)!=null?b:0,g=l.value!=null?d>=l.value:d>p;n.classList.contains(Bt)||n.classList.toggle(y,!g),c!==!1&&c!==void 0&&n.classList.toggle(y,g),n.classList.toggle(Bl,!1);const C=r==null?void 0:r.value.get(d);C==null||C.forEach((E,v)=>{E.classList.toggle(Ao,!1),v===C.length-1?E.classList.toggle(Bl,!0):E.classList.toggle(Ao,!0)}),n.classList.contains(Bl)||n.classList.toggle(Ao,g)},{immediate:!0})},unmounted(n,l){n==null||n.classList.toggle(gn,!1);const t=ue(l,bn);t!=null&&t.value&&Jt(t.value,n)}}),e.directive("after",{name:"v-after",mounted(n,l){var i,p;if(Rl.value||((i=ue(l,Ol))==null?void 0:i.value))return;const t=ue(l,bn),a=ue(l,Sl),r=ue(l,Qt),c=t==null?void 0:t.value.length;l.value==null&&(l.value=t==null?void 0:t.value.length),r!=null&&r.value.has(l.value)?(p=r==null?void 0:r.value.get(l.value))==null||p.push(n):r==null||r.value.set(l.value,[n]),n==null||n.classList.toggle(gn,!0),a&&As(a,()=>{var u,A,h;const y=((u=a.value)!=null?u:0)>=((h=(A=l.value)!=null?A:c)!=null?h:0);n.classList.contains(Bt)||n.classList.toggle(ft,!y),n.classList.toggle(Bl,!1),n.classList.contains(Bl)||n.classList.toggle(Ao,y)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(gn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,l){var c,i,p;if(Rl.value||((c=ue(l,Ol))==null?void 0:c.value))return;const t=ue(l,bn),a=ue(l,Sl),r=((i=t==null?void 0:t.value)==null?void 0:i.length)||0;t&&!((p=t==null?void 0:t.value)!=null&&p.includes(n))&&t.value.push(n),n==null||n.classList.toggle(gn,!0),a&&As(a,()=>{var A;const y=(A=a==null?void 0:a.value)!=null?A:0,u=l.value!=null?y>=l.value:y>r;n.classList.toggle(ft,u),n.classList.toggle(Bt,u)},{immediate:!0})},unmounted(n,l){n==null||n.classList.toggle(gn,!1);const t=ue(l,bn);t!=null&&t.value&&Jt(t.value,n)}})}}}function Cb(e,n){const l=yy(e),t=uy(n,l.currentRoute,l.currentPage);return{nav:{...l,...t,downloadPDF:ya,next:yn,nextSlide:Zl,openInEditor:sv,prev:un,prevSlide:Ql},configs:bs,themeConfigs:S(()=>bs.themeConfig)}}function vb(){return{install(e){const n=Cb(Xe,Te);e.provide(G,Rs(n))}}}const Al=j5(nv);Al.use(De);Al.use(kA());Al.use(gb());Al.use(vb());Db({app:Al,router:De});Al.mount("#app");export{nB as $,jf as A,X0 as B,yl as C,Rs as D,kb as E,ws as F,xb as G,As as H,T as I,xs as J,re as K,qf as L,bb as M,_b as N,Te as O,jo as P,Y0 as Q,Et as R,mt as S,ql as T,bt as U,J3 as V,Qa as W,Ja as X,Y3 as Y,Vs as Z,ay as _,G as a,cy as a0,Le as a1,Eb as a2,$e as a3,vl as a4,ho as a5,Fn as a6,He as a7,ra as a8,_f as a9,Ef as aa,kf as ab,wf as ac,Q as ad,Ep as ae,Sb as af,ce as ag,LB as ah,Pp as ai,xf as aj,Jo as ak,Vf as al,xA as b,bs as c,Es as d,yu as e,F as f,s as g,_ as h,U as i,qs as j,by as k,o as l,M as m,le as n,D as o,ms as p,Rp as q,so as r,Ls as s,Tn as t,Fb as u,V as v,wb as w,S as x,de as y,q as z};
