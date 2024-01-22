import{a as L,c as z,l as G,m as J,n as K}from"./chunk-HCYGNKKK.js";import{a as k}from"./chunk-L6DPNSRK.js";import{d as I,k as Q,q as H,v as N,w as j}from"./chunk-6RS4YFKS.js";import"./chunk-FYWMRVMU.js";import{M as A}from"./chunk-VHR34GYZ.js";import{Bb as B,Cb as S,Db as F,Fb as $,Gb as P,Ia as d,Sb as q,Ta as l,Tb as O,Vb as E,Wa as x,Xa as D,Ya as r,Za as C,ab as c,bb as m,cb as g,dc as b,fa as p,fb as y,fc as V,ga as v,kb as M,mb as f,pb as h,qb as R,vb as w,xb as s,yb as u,zb as T}from"./chunk-56L6RQYV.js";var U=["pageTitleTemplate"];function W(t,e){if(t&1&&(g(0,"pyp-patient-info",1),s(1,"async")),t&2){let n=f();l("patient",u(1,1,n.details$))}}function X(t,e){t&1&&y(0)}function Y(t,e){if(t&1&&(c(0,"div",6),r(1,X,1,0,"ng-container",7),m()),t&2){f();let n=h(11);d(),l("ngTemplateOutlet",n)}}function Z(t,e){if(t&1&&(g(0,"pyp-transcription-list",2),s(1,"async")),t&2){let n=f();l("list",u(1,1,n.transcriptions$))}}function tt(t,e){t&1&&y(0)}function et(t,e){if(t&1&&(c(0,"div",8),r(1,tt,1,0,"ng-container",7),m()),t&2){f();let n=h(11);d(),l("ngTemplateOutlet",n)}}function it(t,e){t&1&&g(0,"mat-spinner",9),t&2&&l("diameter",100)}function nt(t,e){t&1&&(c(0,"span",10),R(1,"Patient View"),m())}var vt=(()=>{let e=class e{constructor(){this.hostClass="flex-all-available-space",this.viewContainerRef=p(D),this.toolbarBridgeService=p(k),this.router=p(V),this.activatedRoute=p(b),this.patientDetailsFacade=p(N),this.transcriptionsFacade=p(j),this.details$=this.patientDetailsFacade.details$,this.transcriptions$=this.transcriptionsFacade.transcriptions$,this.isPatientPending$=this.patientDetailsFacade.pending$,this.isTranscriptionsPending$=this.transcriptionsFacade.pending$}ngOnInit(){this.activatedRoute.paramMap.subscribe(a=>{let i=a.get("id");i&&(this.patientDetailsFacade.requestDetails(i),this.transcriptionsFacade.requestTranscriptions(i))})}ngAfterViewInit(){if(this.pageTitleTemplate){let a=new I(this.pageTitleTemplate,this.viewContainerRef);this.toolbarBridgeService.setToolbarMiddlePortal(a)}}play(){this.router.navigate(["transcription"],{relativeTo:this.activatedRoute})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=v({type:e,selectors:[["pyp-patient-details"]],viewQuery:function(i,o){if(i&1&&F(U,5,B),i&2){let _;S(_=$())&&(o.pageTitleTemplate=_.first)}},hostVars:2,hostBindings:function(i,o){i&2&&x(o.hostClass)},standalone:!0,features:[w],decls:14,vars:12,consts:[[1,"grow","flex","flex-col"],[3,"patient"],[3,"list"],[1,"bottom-0","sticky","self-center",3,"playRequest"],["spinnerTemplate",""],["pageTitleTemplate",""],[1,"patient-spinner"],[4,"ngTemplateOutlet"],[1,"transcriptions-spinner"],["color","primary",1,"m-auto",3,"diameter"],[1,"line-clamp-2","whitespace-normal"]],template:function(i,o){i&1&&(c(0,"div",0),r(1,W,2,3,"pyp-patient-info",1),s(2,"equal"),s(3,"async"),r(4,Y,2,1)(5,Z,2,3,"pyp-transcription-list",2),s(6,"equal"),s(7,"async"),r(8,et,2,1),m(),c(9,"pyp-player-navigator",3),M("playRequest",function(){return o.play()}),m(),r(10,it,1,1,"ng-template",null,4,P)(12,nt,2,0,"ng-template",null,5,P)),i&2&&(d(),C(1,T(2,2,u(3,5,o.isPatientPending$),!1)?1:4),d(4),C(5,T(6,7,u(7,10,o.isTranscriptionsPending$),!1)?5:8))},dependencies:[E,q,O,H,A,L,G,z,Q,K,J],styles:[".patient-spinner[_ngcontent-%COMP%], .transcriptions-spinner[_ngcontent-%COMP%]{display:flex;flex-grow:1}.patient-spinner.transcriptions-spinner[_ngcontent-%COMP%], .transcriptions-spinner.transcriptions-spinner[_ngcontent-%COMP%]{flex-grow:4}"],changeDetection:0});let t=e;return t})();export{vt as PatientDetailsComponent};