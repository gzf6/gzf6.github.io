(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ETYp:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class u{}var o=t("pMnS"),i=t("oBZk"),c=t("ZZ/e"),b=t("SVse"),r=t("s7LF"),s=t("u82U"),a=t("ei81");class g{constructor(n){this.convrPrv=n,this.convrBubbleList=[],this.convrBubbleType=s.a,this.myself={id:1,avatar:"assets/icon/favicon.png",name:"guan"},this.text=""}ngOnInit(){this.getConvrBubbleList()}getConvrBubbleList(){this.convrBubbleList=this.convrPrv.getConvrBubbleList()}createBubble(n,l){if(this.text||l){let t={id:this.convrBubbleList[this.convrBubbleList.length-1].id++,type:n,createTime:(new Date).getTime()};switch(n){case s.a.text:Object.assign(t,{user:this.myself,text:this.text});break;case s.a.sys:Object.assign(t,{sys:this.text});break;default:let n,e=l.target.files[0],u=new FileReader;u.readAsDataURL(e),u.onloadend=()=>{Object.assign(t,{user:this.myself,img:n=u.result}),this.sendBubble(t)}}n!==s.a.img&&this.sendBubble(t)}}sendBubble(n){this.convrBubbleList.push(n),this.text="",requestAnimationFrame(()=>{this.content.scrollToBottom(200)})}}var p=e.pb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]{padding:0 .5rem .5rem}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]{margin-top:1rem;display:-webkit-box;display:-ms-flexbox;display:flex}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{padding-top:1.5rem;width:2rem}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:2rem;height:2rem}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{height:1.5rem;text-align:center;color:var(--ion-color-medium);font-size:12px}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin:0 0 5px 5px;color:var(--ion-color-dark)}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .name.myself[_ngcontent-%COMP%]{margin:0 5px 5px 0;text-align:end}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-left:5px}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bubble-box[_ngcontent-%COMP%]{padding:10px;background-color:var(--ion-color-secondary);border-radius:5px}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bubble-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sys[_ngcontent-%COMP%]{width:100%;text-align:center;color:var(--ion-color-medium)}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .content.myself[_ngcontent-%COMP%]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-left:0;margin-right:5px}ion-content[_ngcontent-%COMP%]   .convr-bubble-list[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]   .content.myself[_ngcontent-%COMP%]   .bubble-box[_ngcontent-%COMP%]{background-color:var(--ion-color-success)}ion-footer[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid var(--ion-color-medium);display:inline-block;width:100%}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:relative}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   .img-picker[_ngcontent-%COMP%]{position:absolute;top:0;left:0;opacity:0;width:100%;height:100%}"]],data:{}});function m(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,2,"ion-avatar",[],null,null,null,i.z,i.b)),e.qb(1,49152,null,0,c.d,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null))],null,(function(n,l){n(l,2,0,null==l.parent.context.$implicit?null:l.parent.context.$implicit.user.avatar,null==l.parent.context.$implicit?null:l.parent.context.$implicit.user.name)}))}function C(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,2,"div",[["class","name"]],[[2,"myself",null]],null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Jb(2,null,["",""]))],null,(function(n,l){n(l,0,0,l.component.myself.id===(null==l.parent.context.$implicit?null:l.parent.context.$implicit.user.id)),n(l,2,0,null==l.parent.context.$implicit?null:l.parent.context.$implicit.user.name)}))}function d(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"div",[["class","bubble-box text"]],null,null,null,null,null)),(n()(),e.Jb(1,null,[" "," "]))],null,(function(n,l){n(l,1,0,null==l.parent.context.$implicit?null:l.parent.context.$implicit.text)}))}function x(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"div",[["class","bubble-box image"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,1,0,null==l.parent.context.$implicit?null:l.parent.context.$implicit.img)}))}function M(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"div",[["class","sys"]],null,null,null,null,null)),(n()(),e.Jb(1,null,[" "," "]))],null,(function(n,l){n(l,1,0,null==l.parent.context.$implicit?null:l.parent.context.$implicit.sys)}))}function f(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,2,"ion-avatar",[],null,null,null,i.z,i.b)),e.qb(1,49152,null,0,c.d,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null))],null,(function(n,l){n(l,2,0,null==l.parent.context.$implicit?null:l.parent.context.$implicit.user.avatar,null==l.parent.context.$implicit?null:l.parent.context.$implicit.user.name)}))}function v(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,21,"div",[["class","bubble"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,3,"div",[["class","left"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,2,"div",[["class","avatar"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,m)),e.qb(4,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(5,0,null,null,13,"div",[["class","center"]],null,null,null,null,null)),(n()(),e.rb(6,0,null,null,3,"div",[["class","time"]],null,null,null,null,null)),(n()(),e.rb(7,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.Jb(8,null,["",""])),e.Fb(9,2),(n()(),e.gb(16777216,null,null,1,null,C)),e.qb(11,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(12,0,null,null,6,"div",[["class","content"]],[[2,"myself",null]],null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,d)),e.qb(14,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,x)),e.qb(16,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,M)),e.qb(18,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(19,0,null,null,2,"div",[["class","right"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,f)),e.qb(21,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,4,0,l.context.$implicit.type!==t.convrBubbleType.sys&&t.myself.id!==(null==l.context.$implicit?null:l.context.$implicit.user.id)),n(l,11,0,l.context.$implicit.type!==t.convrBubbleType.sys),n(l,14,0,l.context.$implicit.type===t.convrBubbleType.text),n(l,16,0,l.context.$implicit.type===t.convrBubbleType.img),n(l,18,0,l.context.$implicit.type===t.convrBubbleType.sys),n(l,21,0,l.context.$implicit.type!==t.convrBubbleType.sys&&t.myself.id===(null==l.context.$implicit?null:l.context.$implicit.user.id))}),(function(n,l){var t=l.component,u=e.Kb(l,8,0,n(l,9,0,e.Cb(l.parent,0),l.context.$implicit.createTime,"yyyy-MM-dd hh:mm:ss"));n(l,8,0,u),n(l,12,0,l.context.$implicit.type!==t.convrBubbleType.sys&&t.myself.id===(null==l.context.$implicit?null:l.context.$implicit.user.id))}))}function O(n){return e.Lb(0,[e.Eb(0,b.d,[e.s]),e.Hb(402653184,1,{content:0}),(n()(),e.rb(2,0,null,null,11,"ion-header",[],null,null,null,i.G,i.i)),e.qb(3,49152,null,0,c.z,[e.h,e.k,e.x],null,null),(n()(),e.rb(4,0,null,0,9,"ion-toolbar",[],null,null,null,i.V,i.x)),e.qb(5,49152,null,0,c.Ab,[e.h,e.k,e.x],null,null),(n()(),e.rb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.D,i.f)),e.qb(7,49152,null,0,c.j,[e.h,e.k,e.x],null,null),(n()(),e.rb(8,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==e.Cb(n,10).onClick(t)&&u),u}),i.A,i.c)),e.qb(9,49152,null,0,c.e,[e.h,e.k,e.x],null,null),e.qb(10,16384,null,0,c.f,[[2,c.gb],c.Fb],null,null),(n()(),e.rb(11,0,null,0,2,"ion-title",[],null,null,null,i.U,i.w)),e.qb(12,49152,null,0,c.yb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(-1,0,["Conversation Detail"])),(n()(),e.rb(14,0,null,null,4,"ion-content",[],null,null,null,i.E,i.g)),e.qb(15,49152,[[1,4]],0,c.s,[e.h,e.k,e.x],null,null),(n()(),e.rb(16,0,null,0,2,"div",[["class","convr-bubble-list"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,v)),e.qb(18,278528,null,0,b.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.rb(19,0,null,null,24,"ion-footer",[],null,null,null,i.F,i.h)),e.qb(20,49152,null,0,c.x,[e.h,e.k,e.x],null,null),(n()(),e.rb(21,0,null,0,22,"ion-toolbar",[],null,null,null,i.V,i.x)),e.qb(22,49152,null,0,c.Ab,[e.h,e.k,e.x],null,null),(n()(),e.rb(23,0,null,0,20,"ion-item",[],null,null,null,i.M,i.l)),e.qb(24,49152,null,0,c.F,[e.h,e.k,e.x],null,null),(n()(),e.rb(25,0,null,0,5,"input",[["class","text-input"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keydown.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var u=!0,o=n.component;return"input"===l&&(u=!1!==e.Cb(n,26)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.Cb(n,26).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.Cb(n,26)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.Cb(n,26)._compositionEnd(t.target.value)&&u),"ngModelChange"===l&&(u=!1!==(o.text=t)&&u),"keydown.enter"===l&&(u=!1!==o.createBubble(o.convrBubbleType.text)&&u),u}),null,null)),e.qb(26,16384,null,0,r.b,[e.B,e.k,[2,r.a]],null,null),e.Gb(1024,null,r.d,(function(n){return[n]}),[r.b]),e.qb(28,671744,null,0,r.g,[[8,null],[8,null],[8,null],[6,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,r.e,null,[r.g]),e.qb(30,16384,null,0,r.f,[[4,r.e]],null,null),(n()(),e.rb(31,0,null,0,3,"ion-button",[["slot","end"]],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.createBubble(u.convrBubbleType.text)&&e),e}),i.C,i.e)),e.qb(32,49152,null,0,c.i,[e.h,e.k,e.x],null,null),(n()(),e.rb(33,0,null,0,1,"ion-icon",[["name","send"],["slot","icon-only"]],null,null,null,i.H,i.j)),e.qb(34,49152,null,0,c.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.rb(35,0,null,0,4,"ion-button",[["color","tertiary"],["slot","end"]],null,null,null,i.C,i.e)),e.qb(36,49152,null,0,c.i,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.rb(37,0,null,0,1,"ion-icon",[["name","images"],["slot","icon-only"]],null,null,null,i.H,i.j)),e.qb(38,49152,null,0,c.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.rb(39,0,null,0,0,"input",[["accept","image/x-png,image/gif,image/jpeg,image/bmp,image/png"],["class","img-picker"],["type","file"]],null,[[null,"change"]],(function(n,l,t){var e=!0,u=n.component;return"change"===l&&(e=!1!==u.createBubble(u.convrBubbleType.img,t)&&e),e}),null,null)),(n()(),e.rb(40,0,null,0,3,"ion-button",[["color","success"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;return"click"===l&&(e=!1!==u.createBubble(u.convrBubbleType.sys)&&e),e}),i.C,i.e)),e.qb(41,49152,null,0,c.i,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.rb(42,0,null,0,1,"ion-icon",[["name","text"],["slot","icon-only"]],null,null,null,i.H,i.j)),e.qb(43,49152,null,0,c.A,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){var t=l.component;n(l,18,0,t.convrBubbleList),n(l,28,0,t.text),n(l,34,0,"send"),n(l,36,0,"tertiary"),n(l,38,0,"images"),n(l,41,0,"success"),n(l,43,0,"text")}),(function(n,l){n(l,25,0,e.Cb(l,30).ngClassUntouched,e.Cb(l,30).ngClassTouched,e.Cb(l,30).ngClassPristine,e.Cb(l,30).ngClassDirty,e.Cb(l,30).ngClassValid,e.Cb(l,30).ngClassInvalid,e.Cb(l,30).ngClassPending)}))}function P(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"app-conversation-detail",[],null,null,null,O,p)),e.qb(1,114688,null,0,g,[a.a],null,null)],(function(n,l){n(l,1,0)}),null)}var _=e.nb("app-conversation-detail",g,P,{},{},[]),h=t("iInd");class y{}t.d(l,"ConversationDetailPageModuleNgFactory",(function(){return k}));var k=e.ob(u,[],(function(n){return e.zb([e.Ab(512,e.j,e.Z,[[8,[o.a,_]],[3,e.j],e.v]),e.Ab(4608,b.l,b.k,[e.s,[2,b.r]]),e.Ab(4608,r.i,r.i,[]),e.Ab(4608,c.a,c.a,[e.x,e.g]),e.Ab(4608,c.Eb,c.Eb,[c.a,e.j,e.p]),e.Ab(4608,c.Hb,c.Hb,[c.a,e.j,e.p]),e.Ab(1073742336,b.b,b.b,[]),e.Ab(1073742336,r.h,r.h,[]),e.Ab(1073742336,r.c,r.c,[]),e.Ab(1073742336,c.Cb,c.Cb,[]),e.Ab(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),e.Ab(1073742336,y,y,[]),e.Ab(1073742336,u,u,[]),e.Ab(1024,h.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);