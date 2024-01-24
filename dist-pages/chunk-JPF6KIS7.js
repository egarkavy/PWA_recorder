import{a as J,c as K,g as L,h as U,i as W}from"./chunk-LHRYJLCQ.js";import"./chunk-XQD7CUYD.js";import{a as G}from"./chunk-3H7GWFCG.js";import{e as j,j as k,k as z}from"./chunk-HXNQIXC2.js";import{D as A,S as H}from"./chunk-N5OPLCCF.js";import{e as N}from"./chunk-BDQICLCY.js";import{Ab as T,Fa as f,Nb as b,Ob as E,Qa as l,Qb as I,Ta as x,Ua as D,Va as p,Wa as _,Xa as c,Ya as m,Yb as V,Za as u,_b as Q,ab as M,da as o,ea as v,fb as w,hb as g,kb as R,lb as F,p as C,qb as $,sb as r,tb as d,ub as y,vb as B,wb as S,xb as O,z as P,zb as q}from"./chunk-5ARDGOVG.js";var X=["pageTitleTemplate"];function Y(t,n){if(t&1&&(u(0,"pyp-patient-info",1),r(1,"async")),t&2){let s=g();l("patient",d(1,1,s.details$))}}function Z(t,n){if(t&1&&(u(0,"pyp-transcription-item",2),r(1,"async")),t&2){let s=g();l("item",d(1,1,s.freshestTranscription$))}}function tt(t,n){t&1&&M(0)}function et(t,n){if(t&1&&(c(0,"div",6),p(1,tt,1,0,"ng-container",7),m()),t&2){g();let s=R(10);f(),l("ngTemplateOutlet",s)}}function it(t,n){t&1&&u(0,"mat-spinner",8),t&2&&l("diameter",50)}function nt(t,n){t&1&&(c(0,"span",9),F(1,"Patient View"),m())}var xt=(()=>{let n=class n{constructor(){this.hostClass="flex-all-available-space",this.viewContainerRef=o(D),this.toolbarBridgeService=o(G),this.router=o(Q),this.activatedRoute=o(V),this.patientDetailsFacade=o(k),this.transcriptionsFacade=o(z),this.details$=this.patientDetailsFacade.details$,this.transcriptions$=this.transcriptionsFacade.transcriptions$,this.isPatientPending$=this.patientDetailsFacade.isInit$,this.isTranscriptionsPending$=this.transcriptionsFacade.isInit$,this.freshestTranscription$=this.transcriptions$.pipe(P(e=>e.length>0),C(e=>e.sort((i,a)=>new Date(a.createdOn).getTime()-new Date(i.createdOn).getTime())[0]))}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{let i=e.get("id");i&&(this.patientDetailsFacade.requestDetails(i),this.transcriptionsFacade.requestTranscriptions(i))})}ngAfterViewInit(){if(this.pageTitleTemplate){let e=new A(this.pageTitleTemplate,this.viewContainerRef);this.toolbarBridgeService.setToolbarMiddlePortal(e)}}play(){this.router.navigate(["transcription"],{relativeTo:this.activatedRoute})}delete(e){this.transcriptionsFacade.deleteTranscription(e)}save(e){this.transcriptionsFacade.saveTranscription(e)}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=v({type:n,selectors:[["pyp-patient-details"]],viewQuery:function(i,a){if(i&1&&O(X,5,B),i&2){let h;S(h=q())&&(a.pageTitleTemplate=h.first)}},hostVars:2,hostBindings:function(i,a){i&2&&x(a.hostClass)},standalone:!0,features:[$],decls:13,vars:12,consts:[[1,"grow","flex","flex-col"],[3,"patient"],[3,"item"],[1,"bottom-0","sticky","self-center",3,"playRequest"],["spinnerTemplate",""],["pageTitleTemplate",""],[1,"transcriptions-spinner"],[4,"ngTemplateOutlet"],["color","primary",1,"m-auto",3,"diameter"],[1,"line-clamp-2","whitespace-normal"]],template:function(i,a){i&1&&(c(0,"div",0),p(1,Y,2,3,"pyp-patient-info",1),r(2,"equal"),r(3,"async"),p(4,Z,2,3,"pyp-transcription-item",2),r(5,"equal"),r(6,"async"),p(7,et,2,1),m(),c(8,"pyp-player-navigator",3),w("playRequest",function(){return a.play()}),m(),p(9,it,1,1,"ng-template",null,4,T)(11,nt,2,0,"ng-template",null,5,T)),i&2&&(f(),_(1,y(2,2,d(3,5,a.isPatientPending$),!1)?1:-1),f(3),_(4,y(5,7,d(6,10,a.isTranscriptionsPending$),!1)?4:7))},dependencies:[I,b,E,j,N,J,K,H,W,U,L],styles:[".patient-spinner[_ngcontent-%COMP%], .transcriptions-spinner[_ngcontent-%COMP%]{display:flex;flex-grow:1}.patient-spinner.transcriptions-spinner[_ngcontent-%COMP%], .transcriptions-spinner.transcriptions-spinner[_ngcontent-%COMP%]{flex-grow:4}"],changeDetection:0});let t=n;return t})();export{xt as PatientDetailsComponent};