import{A as Z,C as _,E as b,Ea as V,F as J,Fa as W,Ga as X,H as Se,Ha as ke,I as Fe,Jb as ee,K as be,L as je,M as xe,Ma as w,Na as Ue,O as Y,P as we,Pa as Ne,Q as Oe,S as Te,Xb as _e,Y as Ae,Yb as p,_ as P,_b as Pe,a as h,aa as Ce,b as g,ba as m,da as c,e as ge,ea as d,f as R,fa as u,g as k,h as U,i as Re,k as ve,m as Ie,o as N,pa as De,r as v,ra as Q,sa as j,t as B,ta as x,ua as $,va as Me}from"./chunk-56L6RQYV.js";function vt(e){e||($(vt),e=u(w));let t=new R(o=>e.onDestroy(o.next.bind(o)));return o=>o.pipe(Ae(t))}function It(e,t){!t?.injector&&$(It);let o=t?.injector??u(Me),n=new Re(1),r=Ue(()=>{let i;try{i=e()}catch(s){X(()=>n.error(s));return}X(()=>n.next(i))},{injector:o,manualCleanup:!0});return o.get(w).onDestroy(()=>{r.destroy(),n.complete()}),n.asObservable()}function te(e,t){let o=!t?.manualCleanup;o&&!t?.injector&&$(te);let n=o?t?.injector?.get(w)??u(w):null,r;t?.requireSync?r=W({kind:0}):r=W({kind:1,value:t?.initialValue});let i=e.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{if(t?.rejectErrors)throw s;r.set({kind:2,error:s})}});return n?.onDestroy(i.unsubscribe.bind(i)),V(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new Ce(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var ie={};function fe(e,t){if(ie[e]=(ie[e]||0)+1,typeof t=="function")return ne(e,(...n)=>g(h({},t(...n)),{type:e}));switch(t?t._as:"empty"){case"empty":return ne(e,()=>({type:e}));case"props":return ne(e,n=>g(h({},n),{type:e}));default:throw new Error("Unexpected config.")}}function bt(){return{_as:"props",_p:void 0}}function ne(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}function jt(e){return e.charAt(0).toUpperCase()+e.substring(1)}function xt(e){return e.charAt(0).toLowerCase()+e.substring(1)}function sr(e){let{source:t,events:o}=e;return Object.keys(o).reduce((n,r)=>g(h({},n),{[wt(r)]:fe(Ot(t,r),o[r])}),{})}function cr(){return bt()}function wt(e){return e.trim().split(" ").map((t,o)=>o===0?xt(t):jt(t)).join("")}function Ot(e,t){return`[${e}] ${t}`}var et="@ngrx/store/init",S=(()=>{let t=class t extends U{constructor(){super({type:et})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})(),Tt=[S],tt=new c("@ngrx/store Internal Root Guard"),$e=new c("@ngrx/store Internal Initial State"),de=new c("@ngrx/store Initial State"),nt=new c("@ngrx/store Reducer Factory"),Ve=new c("@ngrx/store Internal Reducer Factory Provider"),rt=new c("@ngrx/store Initial Reducers"),re=new c("@ngrx/store Internal Initial Reducers"),ze=new c("@ngrx/store Store Features"),Le=new c("@ngrx/store Internal Store Reducers"),oe=new c("@ngrx/store Internal Feature Reducers"),He=new c("@ngrx/store Internal Feature Configs"),ot=new c("@ngrx/store Internal Store Features"),Ge=new c("@ngrx/store Internal Feature Reducers Token"),it=new c("@ngrx/store Feature Reducers"),qe=new c("@ngrx/store User Provided Meta Reducers"),z=new c("@ngrx/store Meta Reducers"),Ke=new c("@ngrx/store Internal Resolved Meta Reducers"),Be=new c("@ngrx/store User Runtime Checks Config"),Ze=new c("@ngrx/store Internal User Runtime Checks Config"),O=new c("@ngrx/store Internal Runtime Checks"),le=new c("@ngrx/store Check if Action types are unique"),T=new c("@ngrx/store Root Store Provider"),L=new c("@ngrx/store Feature State Provider");function pe(e,t={}){let o=Object.keys(e),n={};for(let i=0;i<o.length;i++){let s=o[i];typeof e[s]=="function"&&(n[s]=e[s])}let r=Object.keys(n);return function(s,a){s=s===void 0?t:s;let l=!1,E={};for(let f=0;f<r.length;f++){let y=r[f],D=n[y],M=s[y],Ee=D(M,a);E[y]=Ee,l=l||Ee!==M}return l?E:s}}function At(e,t){return Object.keys(e).filter(o=>o!==t).reduce((o,n)=>Object.assign(o,{[n]:e[n]}),{})}function st(...e){return function(t){if(e.length===0)return t;let o=e[e.length-1];return e.slice(0,-1).reduceRight((r,i)=>i(r),o(t))}}function ct(e,t){return Array.isArray(t)&&t.length>0&&(e=st.apply(null,[...t,e])),(o,n)=>{let r=e(o);return(i,s)=>(i=i===void 0?n:i,r(i,s))}}function Ct(e){let t=Array.isArray(e)&&e.length>0?st(...e):o=>o;return(o,n)=>(o=t(o),(r,i)=>(r=r===void 0?n:r,o(r,i)))}var A=class extends R{},H=class extends S{},Dt="@ngrx/store/update-reducers",G=(()=>{let t=class t extends U{get currentReducers(){return this.reducers}constructor(n,r,i,s){super(s(i,r)),this.dispatcher=n,this.initialState=r,this.reducers=i,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let r=n.reduce((i,{reducers:s,reducerFactory:a,metaReducers:l,initialState:E,key:f})=>{let y=typeof s=="function"?Ct(l)(s,E):ct(a,l)(s,E);return i[f]=y,i},{});this.addReducers(r)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(r=>r.key))}addReducer(n,r){this.addReducers({[n]:r})}addReducers(n){this.reducers=h(h({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(r=>{this.reducers=At(this.reducers,r)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Dt,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(r){return new(r||t)(d(H),d(de),d(rt),d(nt))},t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})(),Mt=[G,{provide:A,useExisting:G},{provide:H,useExisting:S}],C=(()=>{let t=class t extends k{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=De(t)))(i||t)}})(),t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})(),kt=[C],q=class extends R{},Je=(()=>{let t=class t extends U{constructor(n,r,i,s){super(s);let l=n.pipe(Ie(ve)).pipe(P(r)),E={state:s},f=l.pipe(Te(Ut,E));this.stateSubscription=f.subscribe(({state:y,action:D})=>{this.next(y),i.next(D)}),this.state=te(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=et,t.\u0275fac=function(r){return new(r||t)(d(S),d(A),d(C),d(de))},t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})();function Ut(e={state:void 0},[t,o]){let{state:n}=e;return{state:o(n,t),action:t}}var Nt=[Je,{provide:q,useExisting:Je}],I=(()=>{let t=class t extends R{constructor(n,r,i){super(),this.actionsObserver=r,this.reducerManager=i,this.source=n,this.state=n.state}select(n,...r){return Pt.call(null,n,...r)(this)}selectSignal(n,r){return V(()=>n(this.state()),r)}lift(n){let r=new t(this,this.actionsObserver,this.reducerManager);return r.operator=n,r}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,r){this.reducerManager.addReducer(n,r)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(r){return new(r||t)(d(q),d(S),d(G))},t.\u0275prov=m({token:t,factory:t.\u0275fac});let e=t;return e})(),_t=[I];function Pt(e,t,...o){return function(r){let i;if(typeof e=="string"){let s=[t,...o].filter(Boolean);i=r.pipe(Oe(e,...s))}else if(typeof e=="function")i=r.pipe(v(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(je())}}var he="https://ngrx.io/guide/store/configuration/runtime-checks";function Ye(e){return e===void 0}function Qe(e){return e===null}function ut(e){return Array.isArray(e)}function $t(e){return typeof e=="string"}function Vt(e){return typeof e=="boolean"}function zt(e){return typeof e=="number"}function at(e){return typeof e=="object"&&e!==null}function Lt(e){return at(e)&&!ut(e)}function Ht(e){if(!Lt(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function se(e){return typeof e=="function"}function Gt(e){return se(e)&&e.hasOwnProperty("\u0275cmp")}function qt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Kt=!1;function Bt(){return Kt}function We(e,t){return e===t}function Zt(e,t,o){for(let n=0;n<e.length;n++)if(!o(e[n],t[n]))return!0;return!1}function ft(e,t=We,o=We){let n=null,r=null,i;function s(){n=null,r=null}function a(f=void 0){i={result:f}}function l(){i=void 0}function E(){if(i!==void 0)return i.result;if(!n)return r=e.apply(null,arguments),n=arguments,r;if(!Zt(arguments,n,t))return r;let f=e.apply(null,arguments);return n=arguments,o(r,f)?r:(r=f,f)}return{memoized:E,reset:s,setResult:a,clearResult:l}}function Jt(...e){return Qt(ft)(...e)}function Yt(e,t,o,n){if(o===void 0){let i=t.map(s=>s(e));return n.memoized.apply(null,i)}let r=t.map(i=>i(e,o));return n.memoized.apply(null,[...r,o])}function Qt(e,t={stateFn:Yt}){return function(...o){let n=o;if(Array.isArray(n[0])){let[f,...y]=n;n=[...f,...y]}else n.length===1&&Wt(n[0])&&(n=Xt(n[0]));let r=n.slice(0,n.length-1),i=n[n.length-1],s=r.filter(f=>f.release&&typeof f.release=="function"),a=e(function(...f){return i.apply(null,f)}),l=ft(function(f,y){return t.stateFn.apply(null,[f,r,y,a])});function E(){l.reset(),a.reset(),s.forEach(f=>f.release())}return Object.assign(l.memoized,{release:E,projector:a.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function ur(e){return Jt(t=>{let o=t[e];return!Bt()&&ee()&&!(e in t)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),o},t=>t)}function Wt(e){return!!e&&typeof e=="object"&&Object.values(e).every(t=>typeof t=="function")}function Xt(e){let t=Object.values(e),o=Object.keys(e),n=(...r)=>o.reduce((i,s,a)=>g(h({},i),{[s]:r[a]}),{});return[...t,n]}function en(e){return e instanceof c?u(e):e}function tn(e,t){return t.map((o,n)=>{if(e[n]instanceof c){let r=u(e[n]);return{key:o.key,reducerFactory:r.reducerFactory?r.reducerFactory:pe,metaReducers:r.metaReducers?r.metaReducers:[],initialState:r.initialState}}return o})}function nn(e){return e.map(t=>t instanceof c?u(t):t)}function dt(e){return typeof e=="function"?e():e}function rn(e,t){return e.concat(t)}function on(){if(u(I,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function sn(e,t){return function(o,n){let r=t.action(n)?ce(n):n,i=e(o,r);return t.state()?ce(i):i}}function ce(e){Object.freeze(e);let t=se(e);return Object.getOwnPropertyNames(e).forEach(o=>{if(!o.startsWith("\u0275")&&qt(e,o)&&(!t||o!=="caller"&&o!=="callee"&&o!=="arguments")){let n=e[o];(at(n)||se(n))&&!Object.isFrozen(n)&&ce(n)}}),e}function cn(e,t){return function(o,n){if(t.action(n)){let i=ue(n);Xe(i,"action")}let r=e(o,n);if(t.state()){let i=ue(r);Xe(i,"state")}return r}}function ue(e,t=[]){return(Ye(e)||Qe(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,r)=>{if(n)return n;let i=e[r];return Gt(i)?n:Ye(i)||Qe(i)||zt(i)||Vt(i)||$t(i)||ut(i)?!1:Ht(i)?ue(i,[...t,r]):{path:[...t,r],value:i}},!1)}function Xe(e,t){if(e===!1)return;let o=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${o}". ${he}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=o,n}function un(e,t){return function(o,n){if(t.action(n)&&!Ne.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${he}#strictactionwithinngzone`);return e(o,n)}}function an(e){return ee()?h({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function fn({strictActionSerializability:e,strictStateSerializability:t}){return o=>e||t?cn(o,{action:n=>e&&!ye(n),state:()=>t}):o}function dn({strictActionImmutability:e,strictStateImmutability:t}){return o=>e||t?sn(o,{action:n=>e&&!ye(n),state:()=>t}):o}function ye(e){return e.type.startsWith("@ngrx")}function ln({strictActionWithinNgZone:e}){return t=>e?un(t,{action:o=>e&&!ye(o)}):t}function pn(e){return[{provide:Ze,useValue:e},{provide:Be,useFactory:hn,deps:[Ze]},{provide:O,deps:[Be],useFactory:an},{provide:z,multi:!0,deps:[O],useFactory:dn},{provide:z,multi:!0,deps:[O],useFactory:fn},{provide:z,multi:!0,deps:[O],useFactory:ln}]}function lt(){return[{provide:le,multi:!0,deps:[O],useFactory:yn}]}function hn(e){return e}function yn(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(ie).filter(([,o])=>o>1).map(([o])=>o);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(o=>`"${o}"`).join(", ")}. ${he}#strictactiontypeuniqueness`)}function ar(e,t,o={}){return x([...In(e,t,o),vn])}function mn(e={},t={}){return[{provide:tt,useFactory:on},{provide:$e,useValue:t.initialState},{provide:de,useFactory:dt,deps:[$e]},{provide:re,useValue:e},{provide:Le,useExisting:e instanceof c?e:re},{provide:rt,deps:[re,[new Q(Le)]],useFactory:en},{provide:qe,useValue:t.metaReducers?t.metaReducers:[]},{provide:Ke,deps:[z,qe],useFactory:rn},{provide:Ve,useValue:t.reducerFactory?t.reducerFactory:pe},{provide:nt,deps:[Ve,Ke],useFactory:ct},Tt,Mt,kt,Nt,_t,pn(t.runtimeChecks),lt()]}function En(){u(S),u(A),u(C),u(I),u(tt,{optional:!0}),u(le,{optional:!0})}var gn=[{provide:T,useFactory:En},{provide:j,multi:!0,useFactory(){return()=>u(T)}}];function fr(e,t){return x([...mn(e,t),gn])}function Rn(){u(T);let e=u(ot),t=u(it),o=u(G);u(le,{optional:!0});let n=e.map((r,i)=>{let a=t.shift()[i];return g(h({},r),{reducers:a,initialState:dt(r.initialState)})});o.addFeatures(n)}var vn=[{provide:L,useFactory:Rn},{provide:j,multi:!0,useFactory(){return()=>u(L)}}];function In(e,t,o={}){return[{provide:He,multi:!0,useValue:e instanceof Object?{}:o},{provide:ze,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(o instanceof c)&&o.reducerFactory?o.reducerFactory:pe,metaReducers:!(o instanceof c)&&o.metaReducers?o.metaReducers:[],initialState:!(o instanceof c)&&o.initialState?o.initialState:void 0}},{provide:ot,deps:[He,ze],useFactory:tn},{provide:oe,multi:!0,useValue:e instanceof Object?e.reducer:t},{provide:Ge,multi:!0,useExisting:t instanceof c?t:oe},{provide:it,multi:!0,deps:[oe,[new Q(Ge)]],useFactory:nn},lt()]}function dr(...e){let t=e.pop(),o=e.map(n=>n.type);return{reducer:t,types:o}}function lr(e,...t){let o=new Map;for(let n of t)for(let r of n.types){let i=o.get(r);if(i){let s=(a,l)=>n.reducer(i(a,l),l);o.set(r,s)}else o.set(r,n.reducer)}return function(n=e,r){let i=o.get(r.type);return i?i(n,r):n}}function bn(e){return J(t=>{let o=e(t),n=Array.isArray(o)?o:[o];return N(t).pipe(P(...n))})}var jn={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},K="__@ngrx/effects_create__";function Ar(e,t={}){let o=t.functional?e:e(),n=h(h({},jn),t);return Object.defineProperty(o,K,{value:n}),o}function xn(e){return Object.getOwnPropertyNames(e).filter(n=>e[n]&&e[n].hasOwnProperty(K)?e[n][K].hasOwnProperty("dispatch"):!1).map(n=>{let r=e[n][K];return h({propertyName:n},r)})}function wn(e){return xn(e)}function pt(e){return Object.getPrototypeOf(e)}function On(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function ht(e){return typeof e=="function"}function Tn(e){return e.filter(ht)}function An(e,t,o){let n=pt(e),i=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,s=wn(e).map(({propertyName:a,dispatch:l,useEffectsErrorHandler:E})=>{let f=typeof e[a]=="function"?e[a]():e[a],y=E?o(f,t):f;return l===!1?y.pipe(Fe()):y.pipe(we()).pipe(v(M=>({effect:e[a],notification:M,propertyName:a,sourceName:i,sourceInstance:e})))});return Z(...s)}var Cn=10;function yt(e,t,o=Cn){return e.pipe(b(n=>(t&&t.handleError(n),o<=1?e:yt(e,t,o-1))))}var Cr=(()=>{let t=class t extends R{constructor(n){super(),n&&(this.source=n)}lift(n){let r=new t;return r.source=this,r.operator=n,r}};t.\u0275fac=function(r){return new(r||t)(d(C))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function Dr(...e){return _(t=>e.some(o=>typeof o=="string"?o===t.type:o.type===t.type))}var Mr=new c("@ngrx/effects Internal Root Guard"),kr=new c("@ngrx/effects User Provided Effects"),Ur=new c("@ngrx/effects Internal Root Effects"),Nr=new c("@ngrx/effects Internal Root Effects Instances"),_r=new c("@ngrx/effects Internal Feature Effects"),Pr=new c("@ngrx/effects Internal Feature Effects Instance Groups"),Dn=new c("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>yt}),Mn="@ngrx/effects/init",kn=fe(Mn);function Un(e,t){if(e.notification.kind==="N"){let o=e.notification.value;!Nn(o)&&t.handleError(new Error(`Effect ${_n(e)} dispatched an invalid action: ${Pn(o)}`))}}function Nn(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function _n({propertyName:e,sourceInstance:t,sourceName:o}){let n=typeof t[e]=="function";return!!o?`"${o}.${String(e)}${n?"()":""}"`:`"${String(e)}()"`}function Pn(e){try{return JSON.stringify(e)}catch{return e}}var $n="ngrxOnIdentifyEffects";function Vn(e){return me(e,$n)}var zn="ngrxOnRunEffects";function Ln(e){return me(e,zn)}var Hn="ngrxOnInitEffects";function Gn(e){return me(e,Hn)}function me(e,t){return e&&t in e&&typeof e[t]=="function"}var mt=(()=>{let t=class t extends k{constructor(n,r){super(),this.errorHandler=n,this.effectsErrorHandler=r}addEffects(n){this.next(n)}toActions(){return this.pipe(Y(n=>On(n)?pt(n):n),B(n=>n.pipe(Y(qn))),B(n=>{let r=n.pipe(xe(s=>Kn(this.errorHandler,this.effectsErrorHandler)(s)),v(s=>(Un(s,this.errorHandler),s.notification)),_(s=>s.kind==="N"&&s.value!=null),be()),i=n.pipe(Se(1),_(Gn),v(s=>s.ngrxOnInitEffects()));return Z(r,i)}))}};t.\u0275fac=function(r){return new(r||t)(d(ke),d(Dn))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function qn(e){return Vn(e)?e.ngrxOnIdentifyEffects():""}function Kn(e,t){return o=>{let n=An(o,e,t);return Ln(o)?o.ngrxOnRunEffects(n):n}}var Bn=(()=>{let t=class t{get isStarted(){return!!this.effectsSubscription}constructor(n,r){this.effectSources=n,this.store=r,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};t.\u0275fac=function(r){return new(r||t)(d(mt),d(I))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function $r(...e){let t=e.flat(),o=Tn(t);return x([o,{provide:j,multi:!0,useValue:()=>{u(T),u(L,{optional:!0});let n=u(Bn),r=u(mt),i=!n.isStarted;i&&n.start();for(let s of t){let a=ht(s)?u(s):s;r.addEffects(a)}i&&u(I).dispatch(kn())}}])}function Hr(e){return Array.isArray(e)?e:[]}var Et=function(e){return e[e.Init=0]="Init",e[e.Pending=1]="Pending",e[e.Success=2]="Success",e[e.Error=3]="Error",e}(Et||{});var gt=new c("API_URL");function F(e){return Object.keys(e).reduce((t,o)=>g(h({},t),{[o]:encodeURI(e[o])}),{})}var io=(()=>{let t=class t{constructor(n,r){this.http=n,this.apiUrl=r}get headers(){let n={"Content-Type":"application/json",Accept:"application/json"};return new _e(n)}get(n,r=new p){return r instanceof p||(r=new p({fromObject:F(r)})),this.http.get(`${this.apiUrl}${n}`,{headers:this.headers,params:r})}post(n,r,i=new p,s=this.headers){i instanceof p||(i=new p({fromObject:F(i)}));let a=r instanceof FormData;return this.http.post(`${this.apiUrl}${n}`,a?r:JSON.stringify(r),{headers:a?void 0:s,params:i})}put(n,r,i=new p){return i instanceof p||(i=new p({fromObject:F(i)})),this.http.put(`${this.apiUrl}${n}`,JSON.stringify(r),{headers:this.headers,params:i})}patch(n,r,i=new p){return i instanceof p||(i=new p({fromObject:F(i)})),this.http.patch(`${this.apiUrl}${n}`,r,{headers:this.headers,params:i})}delete(n,r=new p,i){return r instanceof p||(r=new p({fromObject:F(r)})),this.http.request("delete",`${this.apiUrl}${n}`,{headers:this.headers,params:r,body:i})}};t.\u0275fac=function(r){return new(r||t)(d(Pe),d(gt))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Rt=new c("STORAGE");var po=(()=>{let t=class t{constructor(){this.storage=u(Rt)}get length(){return this.storage.length}clear(){this.storage.clear()}getItem(n){let r=this.storage.getItem(n);if(typeof r=="string")try{return JSON.parse(r)}catch{return null}return null}key(n){return this.storage.key(n)}removeItem(n){this.storage.removeItem(n)}setItem(n,r){let i;try{i=JSON.stringify(r)}catch{i="null"}this.storage.setItem(n,i)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var wo=(e,t)=>ge(v(o=>e(o)),b(o=>N(t(o.message))));export{vt as a,It as b,te as c,bt as d,sr as e,cr as f,et as g,S as h,de as i,A as j,H as k,Dt as l,C as m,q as n,I as o,Jt as p,ur as q,ar as r,fr as s,dr as t,lr as u,bn as v,Ar as w,Cr as x,Dr as y,$r as z,Et as A,gt as B,io as C,Rt as D,po as E,wo as F,Hr as G};
