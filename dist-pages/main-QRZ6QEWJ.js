import{A as V,B as $e,C as ze,D as Be,E as _e,F as qe,c as Re,d as st,e as ct,f as U,g as Rt,h as at,i as Ce,j as ke,k as Me,l as Ct,m as De,n as je,o as pt,p as P,q as Pe,r as Ne,s as Fe,t as $,u as ut,w as lt,x as Le,y as Z,z as Ue}from"./chunk-FYWMRVMU.js";import{$b as Ae,A as _,B as q,C as x,E as et,F as te,G as ee,H as D,Ha as de,Hb as ve,Ib as Se,J as re,Jb as it,M as oe,N as ne,Pa as nt,R as ie,S as se,T as ce,V as ae,Wa as me,Wb as wt,X as M,Y as rt,Z as pe,Zb as Ie,_ as ue,a as T,ac as ye,b as w,ba as S,bc as xe,ca as bt,cb as ge,da as L,ea as A,ec as be,f as At,fa as g,fc as Te,g as Gt,ga as le,ha as Tt,hc as Oe,i as Kt,ic as we,k as Zt,l as Yt,m as Xt,o as F,oc as Ve,p as K,pa as fe,q as Jt,r as I,ta as ot,u as Qt,v as yt,va as he,vb as Ee,wa as Ot,x as xt}from"./chunk-56L6RQYV.js";var He=[{path:"",loadChildren:()=>import("./chunk-5UT4BKYZ.js").then(e=>e.featureShellRoutes)}];var X="Service workers are disabled or not supported by this browser";function _r(e){return yt(()=>K(new Error(e)))}var H=class{constructor(t){if(this.serviceWorker=t,!t)this.worker=this.events=this.registration=_r(X);else{let r=xt(t,"controllerchange").pipe(I(()=>t.controller)),o=yt(()=>F(t.controller)),s=Qt(o,r);this.worker=s.pipe(x(f=>!!f)),this.registration=this.worker.pipe(M(()=>t.getRegistration()));let u=xt(t,"message").pipe(I(f=>f.data)).pipe(x(f=>f&&f.type)).pipe(ie());u.connect(),this.events=u}}postMessage(t,n){return this.worker.pipe(D(1),pe(r=>{r.postMessage(T({action:t},n))})).toPromise().then(()=>{})}postMessageWithOperation(t,n,r){let o=this.waitForOperationCompleted(r),s=this.postMessage(t,n);return Promise.all([s,o]).then(([,p])=>p)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(t){let n;return typeof t=="string"?n=r=>r.type===t:n=r=>t.includes(r.type),this.events.pipe(x(n))}nextEventOfType(t){return this.eventsOfType(t).pipe(D(1))}waitForOperationCompleted(t){return this.eventsOfType("OPERATION_COMPLETED").pipe(x(n=>n.nonce===t),D(1),I(n=>{if(n.result!==void 0)return n.result;throw new Error(n.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},qr=(()=>{let t=class t{get isEnabled(){return this.sw.isEnabled}constructor(r){if(this.sw=r,this.pushManager=null,this.subscriptionChanges=new Gt,!r.isEnabled){this.messages=q,this.notificationClicks=q,this.subscription=q;return}this.messages=this.sw.eventsOfType("PUSH").pipe(I(s=>s.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(I(s=>s.data)),this.pushManager=this.sw.registration.pipe(I(s=>s.pushManager));let o=this.pushManager.pipe(M(s=>s.getSubscription()));this.subscription=_(o,this.subscriptionChanges)}requestSubscription(r){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(X));let o={userVisibleOnly:!0},s=this.decodeBase64(r.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),p=new Uint8Array(new ArrayBuffer(s.length));for(let i=0;i<s.length;i++)p[i]=s.charCodeAt(i);return o.applicationServerKey=p,this.pushManager.pipe(M(i=>i.subscribe(o)),D(1)).toPromise().then(i=>(this.subscriptionChanges.next(i),i))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(X));let r=o=>{if(o===null)throw new Error("Not subscribed to push notifications.");return o.unsubscribe().then(s=>{if(!s)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(D(1),M(r)).toPromise()}decodeBase64(r){return atob(r)}};t.\u0275fac=function(o){return new(o||t)(A(H))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),Vr=(()=>{let t=class t{get isEnabled(){return this.sw.isEnabled}constructor(r){if(this.sw=r,!r.isEnabled){this.versionUpdates=q,this.unrecoverable=q;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(X));let r=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:r},r)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(X));let r=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:r},r)}};t.\u0275fac=function(o){return new(o||t)(A(H))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})();var We=new L("NGSW_REGISTER_SCRIPT");function Hr(e,t,n,r){return()=>{if(!(wt(r)&&"serviceWorker"in navigator&&n.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let o;if(typeof n.registrationStrategy=="function")o=n.registrationStrategy();else{let[p,...i]=(n.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":o=F(null);break;case"registerWithDelay":o=Ge(+i[0]||0);break;case"registerWhenStable":o=i[0]?_(Ke(e),Ge(+i[0])):Ke(e);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${n.registrationStrategy}`)}}e.get(nt).runOutsideAngular(()=>o.pipe(D(1)).subscribe(()=>navigator.serviceWorker.register(t,{scope:n.scope}).catch(p=>console.error("Service worker registration failed with:",p))))}}function Ge(e){return F(null).pipe(re(e))}function Ke(e){return e.get(Se).isStable.pipe(x(n=>n))}function Wr(e,t){return new H(wt(t)&&e.enabled!==!1?navigator.serviceWorker:void 0)}var Y=class{};function Ze(e,t={}){return ot([qr,Vr,{provide:We,useValue:e},{provide:Y,useValue:t},{provide:H,useFactory:Wr,deps:[Y,Ot]},{provide:ve,useFactory:Hr,deps:[he,We,Y,Ot],multi:!0}])}var J={Token:"token"};var ft=(()=>{let t=class t{constructor(r){this.lsService=r}hasToken(){return this.lsService.getItem(J.Token)!==null}setToken(r){this.lsService.setItem(J.Token,r)}getToken(){return this.lsService.getItem(J.Token)}reset(){this.lsService.removeItem(J.Token)}};t.\u0275fac=function(o){return new(o||t)(A(_e))},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var kt=function(e){return e.Auth="auth",e}(kt||{});var Ye=(e,t)=>{let n=g(ft);if(n.hasToken()){let r=n.getToken();return t(e.clone({headers:e.headers.set("Authorization",`Bearer ${r}`)}))}return t(e)};var y=ct({source:"Auth",events:{Init:U(),Login:st(),LoginSuccess:st(),LoginError:st(),Logout:U(),LogoutSuccess:U()}});var Xe={modelStatus:V.Init,loginError:"",userId:null,externalUserId:null};var Je=ut(Xe,$(y.login,e=>w(T({},e),{modelStatus:V.Pending,loginError:""})),$(y.loginSuccess,e=>w(T({},e),{modelStatus:V.Success})),$(y.loginError,(e,{error:t})=>w(T({},e),{modelStatus:V.Error,loginError:t})));var Qe={activeRequests:0};var W=ct({source:"App",events:{"Request Begin":U(),"Request End":U()}});var tr=ut(Qe,$(W.requestBegin,e=>w(T({},e),{activeRequests:e.activeRequests+1})),$(W.requestEnd,e=>w(T({},e),{activeRequests:e.activeRequests-1})));var ht="core",z=function(e){return e.App="app",e.Auth="auth",e}(z||{}),er={[z.App]:tr,[z.Auth]:Je};var rr=(()=>{let t=class t{constructor(){this.apiService=g(ze)}login(r){return this.apiService.post("account",r)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var or=(()=>{let t=class t{constructor(){this.authApiService=g(rr)}login(r){return this.authApiService.login(r)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var nr=(()=>{let t=class t{constructor(){this.actions$=g(Le),this.apiFacade=g(or),this.authService=g(ft),this.router=g(Te),this.logout$=this.actions$.pipe(Z(y.logout)),this.login$=lt(()=>this.actions$.pipe(Z(y.login),oe(({auth:r})=>this.apiFacade.login(r).pipe(qe(o=>y.loginSuccess({session:o}),o=>y.loginError({error:o})))))),this.loginSuccess$=lt(()=>this.actions$.pipe(Z(y.loginSuccess),I(({session:r})=>{this.authService.setToken(r.token),this.router.navigate(["/"])})),{dispatch:!1}),this.onLogout$=lt(()=>this.actions$.pipe(Z(y.logout),M(()=>(this.authService.reset(),this.router.navigate(["/",kt.Auth]))),I(()=>y.logoutSuccess())),{dispatch:!1})}ngrxOnInitEffects(){return y.init()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})();var ir=()=>[Ne(ht,er),Ue(nr)];var dt=Pe(ht);var Mt=P(dt,e=>e[z.Auth]),sr=P(Mt,e=>e.loginError),cr=P(Mt,e=>e.userId),ar=P(Mt,e=>e.externalUserId);var pr=(()=>{let t=class t{constructor(){this.store=g(pt),this.loginError$=this.store.select(sr),this.externalUserId$=this.store.select(ar).pipe(x(r=>!!r)),this.userId$=this.store.select(cr).pipe(x(r=>!!r))}login(r){this.store.dispatch(y.login({auth:r}))}logout(){this.store.dispatch(y.logout())}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var Gr=P(dt,e=>e[z.App]),ur=P(Gr,e=>e.activeRequests!==0);var lr=(()=>{let t=class t{constructor(){this.store=g(pt),this.appHasActiveRequests$=this.store.select(ur)}requestStarted(){this.store.dispatch(W.requestBegin())}requestEnded(){this.store.dispatch(W.requestEnd())}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var fr=(e,t)=>{let n=g(pr);return t(e).pipe(et(r=>r instanceof Ie&&r.status===401?(n.logout(),K(()=>r)):K(()=>r)))};var hr=(e,t)=>{let n=g(lr);return n.requestStarted(),t(e).pipe(ne(()=>n.requestEnded()))};var tt="PERFORM_ACTION",Kr="REFRESH",Ar="RESET",yr="ROLLBACK",xr="COMMIT",br="SWEEP",Tr="TOGGLE_ACTION",Or="SET_ACTIONS_ACTIVE",wr="JUMP_TO_STATE",Rr="JUMP_TO_ACTION",Vt="IMPORT_STATE",Cr="LOCK_CHANGES",kr="PAUSE_RECORDING",G=class{constructor(t,n){if(this.action=t,this.timestamp=n,this.type=tt,typeof t.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},Dt=class{constructor(){this.type=Kr}},jt=class{constructor(t){this.timestamp=t,this.type=Ar}},Pt=class{constructor(t){this.timestamp=t,this.type=yr}},Nt=class{constructor(t){this.timestamp=t,this.type=xr}},Ft=class{constructor(){this.type=br}},Lt=class{constructor(t){this.id=t,this.type=Tr}},dr=class{constructor(t,n,r=!0){this.start=t,this.end=n,this.active=r,this.type=Or}},Ut=class{constructor(t){this.index=t,this.type=wr}},$t=class{constructor(t){this.actionId=t,this.type=Rr}},zt=class{constructor(t){this.nextLiftedState=t,this.type=Vt}},Bt=class{constructor(t){this.status=t,this.type=Cr}},_t=class{constructor(t){this.status=t,this.type=kr}},mr=class{constructor(){this.maxAge=!1}},vt=new L("@ngrx/store-devtools Options"),gr=new L("@ngrx/store-devtools Initial Config");function Mr(){return null}var Zr="NgRx Store DevTools";function Yr(e){let t={maxAge:!1,monitor:Mr,actionSanitizer:void 0,stateSanitizer:void 0,name:Zr,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},n=typeof e=="function"?e():e,r=n.logOnly?{pause:!0,export:!0,test:!0}:!1,o=n.features||r||t.features;o.import===!0&&(o.import="custom");let s=Object.assign({},t,{features:o},n);if(s.maxAge&&s.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${s.maxAge}`);return s}function Er(e,t){return e.filter(n=>t.indexOf(n)<0)}function Dr(e){let{computedStates:t,currentStateIndex:n}=e;if(n>=t.length){let{state:o}=t[t.length-1];return o}let{state:r}=t[n];return r}function Ri(e){return e.actionsById[e.nextActionId-1]}function Q(e){return new G(e,+Date.now())}function Xr(e,t){return Object.keys(t).reduce((n,r)=>{let o=Number(r);return n[o]=jr(e,t[o],o),n},{})}function jr(e,t,n){return w(T({},t),{action:e(t.action,n)})}function Jr(e,t){return t.map((n,r)=>({state:Pr(e,n.state,r),error:n.error}))}function Pr(e,t,n){return e(t,n)}function Nr(e){return e.predicate||e.actionsSafelist||e.actionsBlocklist}function Qr(e,t,n,r){let o=[],s={},p=[];return e.stagedActionIds.forEach((i,E)=>{let u=e.actionsById[i];u&&(E&&Ht(e.computedStates[E],u,t,n,r)||(s[i]=u,o.push(i),p.push(e.computedStates[E])))}),w(T({},e),{stagedActionIds:o,actionsById:s,computedStates:p})}function Ht(e,t,n,r,o){let s=n&&!n(e,t.action),p=r&&!t.action.type.match(r.map(E=>vr(E)).join("|")),i=o&&t.action.type.match(o.map(E=>vr(E)).join("|"));return s||p||i}function vr(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Fr(e){return{ngZone:e?g(nt):null,connectInZone:e}}var St=(()=>{let t=class t extends at{};t.\u0275fac=(()=>{let r;return function(s){return(r||(r=fe(t)))(s||t)}})(),t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})(),mt={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},qt=new L("@ngrx/store-devtools Redux Devtools Extension"),Lr=(()=>{let _DevtoolsExtension=class _DevtoolsExtension{constructor(e,t,n){this.config=t,this.dispatcher=n,this.zoneConfig=Fr(this.config.connectInZone),this.devtoolsExtension=e,this.createActionStreams()}notify(e,t){if(this.devtoolsExtension)if(e.type===tt){if(t.isLocked||t.isPaused)return;let n=Dr(t);if(Nr(this.config)&&Ht(n,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let r=this.config.stateSanitizer?Pr(this.config.stateSanitizer,n,t.currentStateIndex):n,o=this.config.actionSanitizer?jr(this.config.actionSanitizer,e,t.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(o,r))}else{let n=w(T({},t),{stagedActionIds:t.stagedActionIds,actionsById:this.config.actionSanitizer?Xr(this.config.actionSanitizer,t.actionsById):t.actionsById,computedStates:this.config.stateSanitizer?Jr(this.config.stateSanitizer,t.computedStates):t.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,n,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new At(e=>{let t=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=t,t.init(),t.subscribe(n=>e.next(n)),t.unsubscribe}):Yt}createActionStreams(){let e=this.createChangesObservable().pipe(ce()),t=e.pipe(x(i=>i.type===mt.START)),n=e.pipe(x(i=>i.type===mt.STOP)),r=e.pipe(x(i=>i.type===mt.DISPATCH),I(i=>this.unwrapAction(i.payload)),te(i=>i.type===Vt?this.dispatcher.pipe(x(E=>E.type===Ct),Jt(1e3),ee(1e3),I(()=>i),et(()=>F(i)),D(1)):F(i))),s=e.pipe(x(i=>i.type===mt.ACTION),I(i=>this.unwrapAction(i.payload))).pipe(rt(n)),p=r.pipe(rt(n));this.start$=t.pipe(rt(n)),this.actions$=this.start$.pipe(M(()=>s)),this.liftedActions$=this.start$.pipe(M(()=>p))}unwrapAction(action){return typeof action=="string"?eval(`(${action})`):action}getExtensionConfig(e){let t={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return e.maxAge!==!1&&(t.maxAge=e.maxAge),t}sendToReduxDevtools(e){try{e()}catch(t){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",t)}}};_DevtoolsExtension.\u0275fac=function(t){return new(t||_DevtoolsExtension)(A(qt),A(vt),A(St))},_DevtoolsExtension.\u0275prov=S({token:_DevtoolsExtension,factory:_DevtoolsExtension.\u0275fac});let DevtoolsExtension=_DevtoolsExtension;return DevtoolsExtension})(),Et={type:Rt},to="@ngrx/store-devtools/recompute",eo={type:to};function Ur(e,t,n,r,o){if(r)return{state:n,error:"Interrupted by an error up the chain"};let s=n,p;try{s=e(n,t)}catch(i){p=i.toString(),o.handleError(i)}return{state:s,error:p}}function gt(e,t,n,r,o,s,p,i,E){if(t>=e.length&&e.length===s.length)return e;let u=e.slice(0,t),f=s.length-(E?1:0);for(let c=t;c<f;c++){let d=s[c],O=o[d].action,l=u[c-1],a=l?l.state:r,C=l?l.error:void 0,k=p.indexOf(d)>-1?l:Ur(n,O,a,C,i);u.push(k)}return E&&u.push(e[e.length-1]),u}function ro(e,t){return{monitorState:t(void 0,{}),nextActionId:1,actionsById:{0:Q(Et)},stagedActionIds:[0],skippedActionIds:[],committedState:e,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function oo(e,t,n,r,o={}){return s=>(p,i)=>{let{monitorState:E,actionsById:u,nextActionId:f,stagedActionIds:c,skippedActionIds:d,committedState:O,currentStateIndex:l,computedStates:a,isLocked:C,isPaused:b}=p||t;p||(u=Object.create(u));function k(v){let m=v,j=c.slice(1,m+1);for(let R=0;R<j.length;R++)if(a[R+1].error){m=R,j=c.slice(1,m+1);break}else delete u[j[R]];d=d.filter(R=>j.indexOf(R)===-1),c=[0,...c.slice(m+1)],O=a[m].state,a=a.slice(m),l=l>m?l-m:0}function B(){u={0:Q(Et)},f=1,c=[0],d=[],O=a[l].state,l=0,a=[]}let h=0;switch(i.type){case Cr:{C=i.status,h=1/0;break}case kr:{b=i.status,b?(c=[...c,f],u[f]=new G({type:"@ngrx/devtools/pause"},+Date.now()),f++,h=c.length-1,a=a.concat(a[a.length-1]),l===c.length-2&&l++,h=1/0):B();break}case Ar:{u={0:Q(Et)},f=1,c=[0],d=[],O=e,l=0,a=[];break}case xr:{B();break}case yr:{u={0:Q(Et)},f=1,c=[0],d=[],l=0,a=[];break}case Tr:{let{id:v}=i;d.indexOf(v)===-1?d=[v,...d]:d=d.filter(j=>j!==v),h=c.indexOf(v);break}case Or:{let{start:v,end:m,active:j}=i,R=[];for(let It=v;It<m;It++)R.push(It);j?d=Er(d,R):d=[...d,...R],h=c.indexOf(v);break}case wr:{l=i.index,h=1/0;break}case Rr:{let v=c.indexOf(i.actionId);v!==-1&&(l=v),h=1/0;break}case br:{c=Er(c,d),d=[],l=Math.min(l,c.length-1);break}case tt:{if(C)return p||t;if(b||p&&Ht(p.computedStates[l],i,o.predicate,o.actionsSafelist,o.actionsBlocklist)){let m=a[a.length-1];a=[...a.slice(0,-1),Ur(s,i.action,m.state,m.error,n)],h=1/0;break}o.maxAge&&c.length===o.maxAge&&k(1),l===c.length-1&&l++;let v=f++;u[v]=i,c=[...c,v],h=c.length-1;break}case Vt:{({monitorState:E,actionsById:u,nextActionId:f,stagedActionIds:c,skippedActionIds:d,committedState:O,currentStateIndex:l,computedStates:a,isLocked:C,isPaused:b}=i.nextLiftedState);break}case Rt:{h=0,o.maxAge&&c.length>o.maxAge&&(a=gt(a,h,s,O,u,c,d,n,b),k(c.length-o.maxAge),h=1/0);break}case Ct:{if(a.filter(m=>m.error).length>0)h=0,o.maxAge&&c.length>o.maxAge&&(a=gt(a,h,s,O,u,c,d,n,b),k(c.length-o.maxAge),h=1/0);else{if(!b&&!C){l===c.length-1&&l++;let m=f++;u[m]=new G(i,+Date.now()),c=[...c,m],h=c.length-1,a=gt(a,h,s,O,u,c,d,n,b)}a=a.map(m=>w(T({},m),{state:s(m.state,eo)})),l=c.length-1,o.maxAge&&c.length>o.maxAge&&k(c.length-o.maxAge),h=1/0}break}default:{h=1/0;break}}return a=gt(a,h,s,O,u,c,d,n,b),E=r(E,i),{monitorState:E,actionsById:u,nextActionId:f,stagedActionIds:c,skippedActionIds:d,committedState:O,currentStateIndex:l,computedStates:a,isLocked:C,isPaused:b}}}var Sr=(()=>{let t=class t{constructor(r,o,s,p,i,E,u,f){let c=ro(u,f.monitor),d=oo(u,c,E,f.monitor,f),O=_(_(o.asObservable().pipe(ae(1)),p.actions$).pipe(I(Q)),r,p.liftedActions$).pipe(Xt(Zt)),l=s.pipe(I(d)),a=Fr(f.connectInZone),C=new Kt(1);this.liftedStateSubscription=O.pipe(ue(l),Ir(a),se(({state:B},[h,v])=>{let m=v(B,h);return h.type!==tt&&Nr(f)&&(m=Qr(m,f.predicate,f.actionsSafelist,f.actionsBlocklist)),p.notify(h,m),{state:m,action:h}},{state:c,action:null})).subscribe(({state:B,action:h})=>{if(C.next(B),h.type===tt){let v=h.action;i.next(v)}}),this.extensionStartSubscription=p.start$.pipe(Ir(a)).subscribe(()=>{this.refresh()});let b=C.asObservable(),k=b.pipe(I(Dr));Object.defineProperty(k,"state",{value:Re(k,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=r,this.liftedState=b,this.state=k}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(r){this.dispatcher.next(r)}next(r){this.dispatcher.next(r)}error(r){}complete(){}performAction(r){this.dispatch(new G(r,+Date.now()))}refresh(){this.dispatch(new Dt)}reset(){this.dispatch(new jt(+Date.now()))}rollback(){this.dispatch(new Pt(+Date.now()))}commit(){this.dispatch(new Nt(+Date.now()))}sweep(){this.dispatch(new Ft)}toggleAction(r){this.dispatch(new Lt(r))}jumpToAction(r){this.dispatch(new $t(r))}jumpToState(r){this.dispatch(new Ut(r))}importState(r){this.dispatch(new zt(r))}lockChanges(r){this.dispatch(new Bt(r))}pauseRecording(r){this.dispatch(new _t(r))}};t.\u0275fac=function(o){return new(o||t)(A(St),A(at),A(ke),A(Lr),A(De),A(de),A(Ce),A(vt))},t.\u0275prov=S({token:t,factory:t.\u0275fac});let e=t;return e})();function Ir({ngZone:e,connectInZone:t}){return n=>t?new At(r=>n.subscribe({next:o=>e.run(()=>r.next(o)),error:o=>e.run(()=>r.error(o)),complete:()=>e.run(()=>r.complete())})):n}var no=new L("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function io(e,t){return!!e||t.monitor!==Mr}function so(){let e="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[e]<"u"?window[e]:null}function Wt(e={}){return ot([Lr,St,Sr,{provide:gr,useValue:e},{provide:no,deps:[qt,vt],useFactory:io},{provide:qt,useFactory:so},{provide:vt,deps:[gr],useFactory:Yr},{provide:je,deps:[Sr],useFactory:co},{provide:Me,useExisting:St}])}function co(e){return e.state}var Ci=(()=>{let t=class t{static instrument(r={}){return{ngModule:t,providers:[Wt(r)]}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=Tt({type:t}),t.\u0275inj=bt({});let e=t;return e})();var $r=(e,t)=>[Fe(),Ve(),ir(),Ae(ye([Ye,fr,hr])),Wt({logOnly:it()}),{provide:$e,useValue:e},{provide:Be,useValue:t}];var zr={providers:[Oe(He),Ze("ngsw-worker.js",{enabled:!it(),registrationStrategy:"registerWhenStable:30000"}),$r("http://localhost:3000/api",localStorage)]};var Br=(()=>{let t=class t{constructor(){this.hostClass="flex-all-available-space",this.title="pieces-in-your-pocket"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=le({type:t,selectors:[["pieces-root"]],hostVars:2,hostBindings:function(o,s){o&2&&me(s.hostClass)},standalone:!0,features:[Ee],decls:1,vars:0,template:function(o,s){o&1&&ge(0,"router-outlet")},dependencies:[we,be],changeDetection:0});let e=t;return e})();xe(Br,zr).catch(e=>console.error(e));