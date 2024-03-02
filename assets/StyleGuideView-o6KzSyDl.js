import{_ as w,r as k,A as b,o as h,h as c,b as e,m as a,a as s,D as m,C as u,l as f,f as A,w as t,p as B,d as S,E as v,i}from"./index-sCitLiO-.js";import{_ as y}from"./rpm-logo-stroke-sunset-HHnJv8hx.js";import{A as p}from"./ASection-rKayyccd.js";import{I as L}from"./IconArrowHead-pTD9Vyy2.js";import{A as l}from"./ACard-B_vZ6TBT.js";const D={key:0,class:"accordion__heading"},M={key:1,class:"accordion__text"},$={key:2,class:"accordion__footer"},V={__name:"OldAccordion",props:{theme:{type:String,default:"clr"},btnTheme:{type:String,default:""},borderless:Boolean,heading:Boolean,text:Boolean,footer:Boolean},emits:["accordionClick"],setup(r,{emit:g}){const x=g,d=k(!1),C=b(()=>({"max-height":d.value?"5000px":"64px",width:d.value?"100%":"64px"})),T=b(()=>({opacity:d.value?1:0}));function F(){d.value=!d.value,x("accordionClick")}return(_,xs)=>(h(),c("div",{style:m(C.value),class:a([`accordion accordion--${r.theme}`,"main-container",{borderless:r.borderless}])},[e("div",{class:a(`accordion__body--${r.theme}`)},[e("div",{class:a(`accordion__controller--${r.theme}`)},[e("button",{class:a(`accordion__controller__btn--${r.theme} btn--${r.btnTheme}`),onClick:F,title:"More..."},[s(L,{class:a(d.value?"arrow-up":"arrow-down")},null,8,["class"])],2)],2),e("div",{style:m(T.value),class:"content-wrapper"},[r.heading?(h(),c("div",D,[u(_.$slots,"heading",{},void 0,!0)])):f("",!0),r.text?(h(),c("div",M,[u(_.$slots,"text",{},void 0,!0)])):f("",!0),u(_.$slots,"default",{},void 0,!0),r.footer?(h(),c("div",$,[u(_.$slots,"footer",{},void 0,!0)])):f("",!0)],4)],2)],6))}},n=w(V,[["__scopeId","data-v-2aca908c"]]),o=r=>(B("data-v-dd1e1776"),r=r(),S(),r),I={class:"main main__style-guide"},E=o(()=>e("h1",null,"STYLE GUIDE",-1)),z=o(()=>e("div",{class:"cutout--dk--fat"},[e("p",{style:{margin:"1rem auto"}},"For now, this style guide is mostly a staging area where I can experiment with new features and styles. Eventually, this section will serve as an example of the final styles and reusable features in this portfolio. Which I hope will serve as a something of a template for Bootstrapping future projects.")],-1)),W=o(()=>e("img",{src:v,width:"130px",alt:"My Logo"},null,-1)),j=o(()=>e("h2",null,"Light Section",-1)),G=o(()=>e("h3",null,"Reusable Component",-1)),H=o(()=>e("p",null,[i("This is a reusable "),e("code",null,"Section"),i(" component. The use of slots facilitates content injection. Which means the headings, this block of text, the footer below, and even the accordion after that are completely optional, adding to the component's flexibility.")],-1)),N=o(()=>e("p",null,"Modular Sass with a blend of helpful utility classes and BEM selectors makes this component more maintainable and a breeze to use with little-to-no added styles.",-1)),R=o(()=>e("p",null,[e("b",null,"Section footer:"),i(" for "),e("a",{href:"Links"},"Links"),i(", "),e("button",{style:{border:"1px solid rgba(0, 0, 0, 0.1)"}},"Buttons"),i(", notes, or whatever.")],-1)),O={class:"flex--row--right"},Y=o(()=>e("h3",null,"Light Accordion",-1)),P=o(()=>e("p",null,[i("This is a reusable "),e("code",null,"Accordion"),i(" component. The use of slots facilitates content injection. Which means the headings, this block of text, the footer below, and even the accordion after that are completely optional, adding to the component's flexibility.")],-1)),U=o(()=>e("p",null,"Modular Sass with a blend of helpful utility classes and BEM selectors makes this component more maintainable and a breeze to use with little-to-no added styles.",-1)),q={class:"card-box"},J=o(()=>e("h4",null,"Red Card",-1)),K=o(()=>e("p",null,"This is a reusable card component",-1)),Q=o(()=>e("p",null,"Footer",-1)),X=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Z=o(()=>e("p",null,"Text content goes here.",-1)),ee=o(()=>e("p",null,"Footer",-1)),te=o(()=>e("h4",null,"Green Card",-1)),oe=o(()=>e("p",null,"This is a reusable card component",-1)),se=o(()=>e("p",null,"Footer",-1)),ne=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),le=o(()=>e("p",null,"Text content goes here.",-1)),re=o(()=>e("p",null,"Footer",-1)),ie=o(()=>e("h4",null,"Blue Card",-1)),de=o(()=>e("p",null,"This is a reusable card component",-1)),ae=o(()=>e("p",null,"Footer",-1)),he=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),ce=o(()=>e("p",null,"Text content goes here.",-1)),_e=o(()=>e("p",null,"Footer",-1)),ue=o(()=>e("h4",null,"Yellow Card",-1)),pe=o(()=>e("p",null,"This is a reusable card component",-1)),fe=o(()=>e("p",null,"Footer",-1)),ge=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),xe=o(()=>e("p",null,"Text content goes here.",-1)),be=o(()=>e("p",null,"Footer",-1)),me=o(()=>e("h4",null,"Light Card",-1)),we=o(()=>e("p",null,"This is a reusable card component",-1)),ve=o(()=>e("p",null,"Footer",-1)),ye=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Ce=o(()=>e("p",null,"Text content goes here.",-1)),Te=o(()=>e("p",null,"Footer",-1)),Fe=o(()=>e("h4",null,"Dark Card",-1)),ke=o(()=>e("p",null,"This is a reusable card component",-1)),Ae=o(()=>e("p",null,"Footer",-1)),Be=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Se=o(()=>e("p",null,"Text content goes here.",-1)),Le=o(()=>e("p",null,"Footer",-1)),De=o(()=>e("h4",null,"Clear Card",-1)),Me=o(()=>e("p",null,"This is a reusable card component",-1)),$e=o(()=>e("p",null,"Footer",-1)),Ve=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Ie=o(()=>e("p",null,"Text content goes here.",-1)),Ee=o(()=>e("p",null,"Footer",-1)),ze=o(()=>e("p",null,"This is a footer",-1)),We=o(()=>e("img",{src:y,width:"130px",alt:"My Logo"},null,-1)),je=o(()=>e("h2",null,"Dark Section",-1)),Ge=o(()=>e("h3",null,"Reusable Component",-1)),He=o(()=>e("p",null,[i("This is a reusable "),e("code",null,"Section"),i(" component. The use of slots facilitates content injection. Which means the headings, this block of text, the footer below, and even the accordion after that are completely optional, adding to the component's flexibility.")],-1)),Ne=o(()=>e("p",null,"Modular Sass with a blend of helpful utility classes and BEM selectors makes this component more maintainable and a breeze to use with little-to-no added styles.",-1)),Re=o(()=>e("p",null,[e("b",null,"Section footer:"),i(" for "),e("a",{href:"Links"},"Links"),i(", "),e("button",{style:{color:"#eee",border:"1px solid rgba(255, 255, 255, 0.1)"}},"Buttons"),i(", notes, or whatever.")],-1)),Oe=o(()=>e("h3",null,"Dark Accordion",-1)),Ye=o(()=>e("p",null,[i("This is a reusable "),e("code",null,"Accordion"),i(" component. The use of slots facilitates content injection. Which means the headings, this block of text, the footer below, and even the accordion after that are completely optional, adding to the component's flexibility.")],-1)),Pe=o(()=>e("p",null,"Modular Sass with a blend of helpful utility classes and BEM selectors makes this component more maintainable and a breeze to use with little-to-no added styles.",-1)),Ue={class:"card-box"},qe=o(()=>e("h4",null,"Red Card",-1)),Je=o(()=>e("p",null,"This is a reusable card component",-1)),Ke=o(()=>e("p",null,"Footer",-1)),Qe=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Xe=o(()=>e("p",null,"Text content goes here.",-1)),Ze=o(()=>e("p",null,"Footer",-1)),et=o(()=>e("h4",null,"Green Card",-1)),tt=o(()=>e("p",null,"This is a reusable card component",-1)),ot=o(()=>e("p",null,"Footer",-1)),st=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),nt=o(()=>e("p",null,"Text content goes here.",-1)),lt=o(()=>e("p",null,"Footer",-1)),rt=o(()=>e("h4",null,"Blue Card",-1)),it=o(()=>e("p",null,"This is a reusable card component",-1)),dt=o(()=>e("p",null,"Footer",-1)),at=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),ht=o(()=>e("p",null,"Text content goes here.",-1)),ct=o(()=>e("p",null,"Footer",-1)),_t=o(()=>e("h4",null,"Yellow Card",-1)),ut=o(()=>e("p",null,"This is a reusable card component",-1)),pt=o(()=>e("p",null,"Footer",-1)),ft=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),gt=o(()=>e("p",null,"Text content goes here.",-1)),xt=o(()=>e("p",null,"Footer",-1)),bt=o(()=>e("h4",null,"Light Card",-1)),mt=o(()=>e("p",null,"This is a reusable card component",-1)),wt=o(()=>e("p",null,"Footer",-1)),vt=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),yt=o(()=>e("p",null,"Text content goes here.",-1)),Ct=o(()=>e("p",null,"Footer",-1)),Tt=o(()=>e("h4",null,"Dark Card",-1)),Ft=o(()=>e("p",null,"This is a reusable card component",-1)),kt=o(()=>e("p",null,"Footer",-1)),At=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Bt=o(()=>e("p",null,"Text content goes here.",-1)),St=o(()=>e("p",null,"Footer",-1)),Lt=o(()=>e("h4",null,"Clear Card",-1)),Dt=o(()=>e("p",null,"This is a reusable card component",-1)),Mt=o(()=>e("p",null,"Footer",-1)),$t=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Vt=o(()=>e("p",null,"Text content goes here.",-1)),It=o(()=>e("p",null,"Footer",-1)),Et=o(()=>e("p",null,"Footer",-1)),zt=o(()=>e("hr",null,null,-1)),Wt=o(()=>e("div",{class:"cutout--dk"},[e("h2",null,"Cards — light, clear, dark")],-1)),jt={class:"flex--row--left"},Gt=o(()=>e("h5",null,"Clear Accordion",-1)),Ht=o(()=>e("p",null,"Text content goes here.",-1)),Nt={class:"card-box"},Rt=o(()=>e("h4",null,"Light Card",-1)),Ot=o(()=>e("p",null,"This is a reusable card component",-1)),Yt=o(()=>e("p",null,"Footer",-1)),Pt=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Ut=o(()=>e("p",null,"Text content goes here.",-1)),qt=o(()=>e("p",null,"Footer",-1)),Jt=o(()=>e("h4",null,"Clear Card",-1)),Kt=o(()=>e("p",null,"This is a reusable card component",-1)),Qt=o(()=>e("p",null,"Footer",-1)),Xt=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Zt=o(()=>e("p",null,"Text content goes here.",-1)),eo=o(()=>e("p",null,"Footer",-1)),to=o(()=>e("h4",null,"Dark Card",-1)),oo=o(()=>e("p",null,"This is a reusable card component",-1)),so=o(()=>e("p",null,"Footer",-1)),no=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),lo=o(()=>e("p",null,"Text content goes here.",-1)),ro=o(()=>e("p",null,"Footer",-1)),io={class:"card-box"},ao=o(()=>e("h4",null,"Dark Card",-1)),ho=o(()=>e("p",null,"This is a reusable card component",-1)),co=o(()=>e("p",null,"Footer",-1)),_o=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),uo=o(()=>e("p",null,"Text content goes here.",-1)),po=o(()=>e("p",null,"Footer",-1)),fo=o(()=>e("h4",null,"Clear Card",-1)),go=o(()=>e("p",null,"This is a reusable card component",-1)),xo=o(()=>e("p",null,"Footer",-1)),bo=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),mo=o(()=>e("p",null,"Text content goes here.",-1)),wo=o(()=>e("p",null,"Footer",-1)),vo=o(()=>e("h4",null,"Light Card",-1)),yo=o(()=>e("p",null,"This is a reusable card component",-1)),Co=o(()=>e("p",null,"Footer",-1)),To=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Fo=o(()=>e("p",null,"Text content goes here.",-1)),ko=o(()=>e("p",null,"Footer",-1)),Ao={class:"card-box"},Bo=o(()=>e("h4",null,"Light Card",-1)),So=o(()=>e("p",null,"This is a reusable card component",-1)),Lo=o(()=>e("p",null,"Footer",-1)),Do=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Mo=o(()=>e("p",null,"Text content goes here.",-1)),$o=o(()=>e("p",null,"Footer",-1)),Vo={class:"card-box"},Io=o(()=>e("h4",null,"Clear Card",-1)),Eo=o(()=>e("p",null,"This is a reusable card component",-1)),zo=o(()=>e("p",null,"Footer",-1)),Wo=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),jo=o(()=>e("p",null,"Text content goes here.",-1)),Go=o(()=>e("p",null,"Footer",-1)),Ho={class:"card-box"},No=o(()=>e("h4",null,"Dark Card",-1)),Ro=o(()=>e("p",null,"This is a reusable card component",-1)),Oo=o(()=>e("p",null,"Footer",-1)),Yo=o(()=>e("h5",null,"Clear Borderless Accordion",-1)),Po=o(()=>e("p",null,"Text content goes here.",-1)),Uo=o(()=>e("p",null,"Footer",-1)),qo=o(()=>e("p",null,"Footer",-1)),Jo=o(()=>e("br",null,null,-1)),Ko=o(()=>e("hr",null,null,-1)),Qo=o(()=>e("img",{src:v,width:"130px",alt:"My Logo"},null,-1)),Xo=o(()=>e("h2",null,"Light Section",-1)),Zo=o(()=>e("h3",null,"Links & Buttons",-1)),es={class:"flex--row--right"},ts=o(()=>e("h3",null,"Light Accordion",-1)),os=o(()=>e("p",null,"Text content goes here.",-1)),ss=o(()=>e("div",{class:"flex--row--se--wrap gap--10 pad-xy--10 mar-xy--10"},[e("a",{href:"#"},"Link"),e("a",{href:"#",class:"link--hover"},"Hover"),e("a",{href:"#",class:"link--active"},"Active"),e("a",{href:"#",class:"link--focus"},"Focus"),e("a",{href:"#",class:"link--focus-visible"},"Focus Visible"),e("a",{href:"#",class:"link--visited"},"Visited"),e("a",{href:"#",class:"link--disabled",disabled:""},"Disabled")],-1)),ns=o(()=>e("div",{class:"flex--row--se gap--10 pad-xy--10 mar-xy--10"},[e("button",{class:"btn btn--primary"},"Primary"),e("button",{class:"btn btn--secondary"},"Secondary")],-1)),ls=o(()=>e("div",{class:"flex--row--sa gap--10 pad-xy--10 mar-xy--10"},[e("button",{class:"btn btn--hover"},"Hover"),e("button",{class:"btn btn--active"},"Active"),e("button",{class:"btn btn--focus"},"Focus"),e("button",{class:"btn btn--focus-visible"},"Focus Visible"),e("button",{class:"btn",disabled:""},"Disabled")],-1)),rs=o(()=>e("p",null,"This is a footer.",-1)),is=o(()=>e("img",{src:y,width:"130px",alt:"My Logo"},null,-1)),ds=o(()=>e("h2",null,"Dark Section",-1)),as=o(()=>e("h3",null,"Links & Buttons",-1)),hs=o(()=>e("h3",null,"Dark Accordion",-1)),cs=o(()=>e("p",null,"Text content goes here.",-1)),_s=o(()=>e("div",{class:"flex--row--se--wrap gap--10 pad-xy--10 mar-xy--10"},[e("a",{href:"#"},"Link"),e("a",{href:"#",class:"link--hover"},"Hover"),e("a",{href:"#",class:"link--active"},"Active"),e("a",{href:"#",class:"link--focus"},"Focus"),e("a",{href:"#",class:"link--focus-visible"},"Focus Visible"),e("a",{href:"#",class:"link--visited"},"Visited"),e("a",{href:"#",class:"link--disabled",disabled:""},"Disabled")],-1)),us=o(()=>e("div",{class:"flex--row--se gap--10 pad-xy--10 mar-xy--10"},[e("button",{class:"btn btn--primary"},"Primary"),e("button",{class:"btn btn--secondary"},"Secondary")],-1)),ps=o(()=>e("div",{class:"flex--row--sa gap--10 pad-xy--10 mar-xy--10"},[e("button",{class:"btn btn--hover"},"Hover"),e("button",{class:"btn btn--active"},"Active"),e("button",{class:"btn btn--focus"},"Focus"),e("button",{class:"btn btn--focus-visible"},"Focus Visible"),e("button",{class:"btn",disabled:""},"Disabled")],-1)),fs=o(()=>e("p",null,"Footer.",-1)),gs={__name:"StyleGuideView",setup(r){return A(()=>window.scrollTo(0,0)),(x,d)=>(h(),c("main",I,[E,z,s(p,{light:"",borderless:"",hero:"",heading:"",subheading:"",text:"",footer:""},{hero:t(()=>[W]),heading:t(()=>[j]),subheading:t(()=>[G]),text:t(()=>[H,N]),footer:t(()=>[R]),supplemental:t(()=>[e("div",O,[s(n,{theme:"lt",heading:"",text:"",footer:""},{heading:t(()=>[Y]),text:t(()=>[P,U]),footer:t(()=>[ze]),default:t(()=>[e("div",q,[s(l,{theme:"red",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[J]),text:t(()=>[K]),footer:t(()=>[Q]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[X]),text:t(()=>[Z]),footer:t(()=>[ee]),_:1})]),_:1}),s(l,{theme:"green",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[te]),text:t(()=>[oe]),footer:t(()=>[se]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[ne]),text:t(()=>[le]),footer:t(()=>[re]),_:1})]),_:1}),s(l,{theme:"blue",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[ie]),text:t(()=>[de]),footer:t(()=>[ae]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[he]),text:t(()=>[ce]),footer:t(()=>[_e]),_:1})]),_:1}),s(l,{theme:"yellow",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[ue]),text:t(()=>[pe]),footer:t(()=>[fe]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[ge]),text:t(()=>[xe]),footer:t(()=>[be]),_:1})]),_:1}),s(l,{theme:"lt",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[me]),text:t(()=>[we]),footer:t(()=>[ve]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[ye]),text:t(()=>[Ce]),footer:t(()=>[Te]),_:1})]),_:1}),s(l,{theme:"dk",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[Fe]),text:t(()=>[ke]),footer:t(()=>[Ae]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[Be]),text:t(()=>[Se]),footer:t(()=>[Le]),_:1})]),_:1}),s(l,{theme:"clr",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[De]),text:t(()=>[Me]),footer:t(()=>[$e]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[Ve]),text:t(()=>[Ie]),footer:t(()=>[Ee]),_:1})]),_:1})])]),_:1})])]),_:1}),s(p,{hero:"",borderless:"",heading:"",subheading:"",text:"",footer:""},{hero:t(()=>[We]),heading:t(()=>[je]),subheading:t(()=>[Ge]),text:t(()=>[He,Ne]),footer:t(()=>[Re]),supplemental:t(()=>[s(n,{theme:"dk",heading:"",text:"",footer:""},{heading:t(()=>[Oe]),text:t(()=>[Ye,Pe]),footer:t(()=>[Et]),default:t(()=>[e("div",Ue,[s(l,{theme:"red",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[qe]),text:t(()=>[Je]),footer:t(()=>[Ke]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[Qe]),text:t(()=>[Xe]),footer:t(()=>[Ze]),_:1})]),_:1}),s(l,{theme:"green",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[et]),text:t(()=>[tt]),footer:t(()=>[ot]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[st]),text:t(()=>[nt]),footer:t(()=>[lt]),_:1})]),_:1}),s(l,{theme:"blue",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[rt]),text:t(()=>[it]),footer:t(()=>[dt]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[at]),text:t(()=>[ht]),footer:t(()=>[ct]),_:1})]),_:1}),s(l,{theme:"yellow",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[_t]),text:t(()=>[ut]),footer:t(()=>[pt]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[ft]),text:t(()=>[gt]),footer:t(()=>[xt]),_:1})]),_:1}),s(l,{theme:"lt",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[bt]),text:t(()=>[mt]),footer:t(()=>[wt]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[vt]),text:t(()=>[yt]),footer:t(()=>[Ct]),_:1})]),_:1}),s(l,{theme:"dk",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[Tt]),text:t(()=>[Ft]),footer:t(()=>[kt]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[At]),text:t(()=>[Bt]),footer:t(()=>[St]),_:1})]),_:1}),s(l,{theme:"clr",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[Lt]),text:t(()=>[Dt]),footer:t(()=>[Mt]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[$t]),text:t(()=>[Vt]),footer:t(()=>[It]),_:1})]),_:1})])]),_:1})]),_:1}),zt,Wt,e("div",jt,[s(n,{heading:"",text:"",footer:""},{heading:t(()=>[Gt]),text:t(()=>[Ht]),footer:t(()=>[qo]),default:t(()=>[e("div",Nt,[s(l,{theme:"lt",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[Rt]),text:t(()=>[Ot]),footer:t(()=>[Yt]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[Pt]),text:t(()=>[Ut]),footer:t(()=>[qt]),_:1})]),_:1}),s(l,{theme:"clr",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[Jt]),text:t(()=>[Kt]),footer:t(()=>[Qt]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[Xt]),text:t(()=>[Zt]),footer:t(()=>[eo]),_:1})]),_:1}),s(l,{theme:"dk",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[to]),text:t(()=>[oo]),footer:t(()=>[so]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[no]),text:t(()=>[lo]),footer:t(()=>[ro]),_:1})]),_:1})]),e("div",io,[s(l,{theme:"dk",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[ao]),text:t(()=>[ho]),footer:t(()=>[co]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[_o]),text:t(()=>[uo]),footer:t(()=>[po]),_:1})]),_:1}),s(l,{theme:"clr",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[fo]),text:t(()=>[go]),footer:t(()=>[xo]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[bo]),text:t(()=>[mo]),footer:t(()=>[wo]),_:1})]),_:1}),s(l,{theme:"lt",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[vo]),text:t(()=>[yo]),footer:t(()=>[Co]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[To]),text:t(()=>[Fo]),footer:t(()=>[ko]),_:1})]),_:1})]),e("div",Ao,[s(l,{theme:"lt",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[Bo]),text:t(()=>[So]),footer:t(()=>[Lo]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[Do]),text:t(()=>[Mo]),footer:t(()=>[$o]),_:1})]),_:1})]),e("div",Vo,[s(l,{theme:"clr",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[Io]),text:t(()=>[Eo]),footer:t(()=>[zo]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[Wo]),text:t(()=>[jo]),footer:t(()=>[Go]),_:1})]),_:1})]),e("div",Ho,[s(l,{theme:"dk",heading:"",text:"",footer:"",drawer:""},{heading:t(()=>[No]),text:t(()=>[Ro]),footer:t(()=>[Oo]),drawer:t(()=>[s(n,{borderless:"",heading:"",text:"",footer:""},{heading:t(()=>[Yo]),text:t(()=>[Po]),footer:t(()=>[Uo]),_:1})]),_:1})])]),_:1})]),Jo,Ko,s(p,{light:"",hero:"",heading:"",subheading:""},{hero:t(()=>[Qo]),heading:t(()=>[Xo]),subheading:t(()=>[Zo]),supplemental:t(()=>[e("div",es,[s(n,{theme:"lt",heading:"",text:"",footer:""},{heading:t(()=>[ts]),text:t(()=>[os]),footer:t(()=>[rs]),default:t(()=>[ss,ns,ls]),_:1})])]),_:1}),s(p,{hero:"",heading:"",subheading:""},{hero:t(()=>[is]),heading:t(()=>[ds]),subheading:t(()=>[as]),supplemental:t(()=>[s(n,{theme:"dk",heading:"",text:"",footer:""},{heading:t(()=>[hs]),text:t(()=>[cs]),footer:t(()=>[fs]),default:t(()=>[_s,us,ps]),_:1})]),_:1})]))}},Cs=w(gs,[["__scopeId","data-v-dd1e1776"]]);export{Cs as default};