import{_ as l,o as t,f as o,b as n,s,x as a,j as d,i as y,y as u,a as w,z as m}from"./index-rKuT54o4.js";const $={class:"card__main"},g={class:"card__main__body"},C={key:1,class:"card__main__body__text"},x={key:0,class:"card__main__footer"},k={key:0,class:"card__drawer"},b={__name:"ACard",props:{theme:{type:String,default:"dk"},heading:Boolean,text:Boolean,footer:Boolean,drawer:Boolean},setup(e){return(r,_)=>(t(),o("div",{class:s(`card card--${e.theme}`)},[n("div",$,[n("div",g,[e.heading?(t(),o("div",{key:0,class:s(`card__main__body__heading card__main__body__heading--${e.theme}`)},[a(r.$slots,"heading",{},void 0,!0)],2)):d("",!0),e.text?(t(),o("div",C,[a(r.$slots,"text",{},void 0,!0)])):d("",!0)]),e.footer?(t(),o("div",x,[a(r.$slots,"footer",{},void 0,!0)])):d("",!0)]),e.drawer?(t(),o("div",k,[a(r.$slots,"drawer",{},void 0,!0)])):d("",!0)],2))}},H=l(b,[["__scopeId","data-v-1b474a47"]]),B={},A={width:"100%",height:"100%",viewBox:"0 0 41 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/",fill:"currentColor",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},p=n("g",{transform:"matrix(1,0,0,1,-28.2113,-436.381)"},[n("g",{transform:"matrix(1,3.69779e-32,1.2326e-32,1,-253.789,50.3806)"},[n("path",{d:"M301.16,406.699C301.907,407.424 303.093,407.424 303.84,406.699C307.654,402.997 318.514,392.454 321.947,389.122C322.225,388.853 322.383,388.483 322.386,388.095C322.388,387.708 322.236,387.336 321.962,387.062C321.961,387.061 321.96,387.06 321.96,387.06C321.372,386.472 320.421,386.466 319.826,387.045C315.892,390.872 302.5,403.9 302.5,403.9C302.5,403.9 289.028,390.794 285.139,387.011C284.563,386.45 283.643,386.457 283.075,387.025C283.019,387.081 282.963,387.137 282.908,387.192C282.668,387.432 282.535,387.757 282.537,388.096C282.54,388.435 282.678,388.758 282.921,388.994C286.197,392.174 297.296,402.948 301.16,406.699Z",style:{"fill-rule":"nonzero"}})])],-1),S=[p];function z(e,r){return t(),o("svg",A,S)}const I=l(B,[["render",z]]),N={key:0,class:"accordion__heading"},V={key:1,class:"accordion__text"},j={key:2,class:"accordion__footer"},M={__name:"AnAccordion",props:{theme:{type:String,default:"clr"},btnTheme:{type:String,default:""},borderless:Boolean,heading:Boolean,text:Boolean,footer:Boolean},emits:["accordionClick"],setup(e,{emit:r}){const _=r,c=y(!1),h=u(()=>({"max-height":c.value?"5000px":"64px",width:c.value?"100%":"64px"})),f=u(()=>({opacity:c.value?1:0}));function v(){c.value=!c.value,_("accordionClick")}return(i,T)=>(t(),o("div",{style:m(h.value),class:s([`accordion accordion--${e.theme}`,"main-container",{borderless:e.borderless}])},[n("div",{class:s(`accordion__body--${e.theme}`)},[n("div",{class:s(`accordion__controller--${e.theme}`)},[n("button",{class:s(`accordion__controller__btn--${e.theme} btn--${e.btnTheme}`),onClick:v,title:"More..."},[w(I,{class:s(c.value?"arrow-up":"arrow-down")},null,8,["class"])],2)],2),n("div",{style:m(f.value),class:"content-wrapper"},[e.heading?(t(),o("div",N,[a(i.$slots,"heading",{},void 0,!0)])):d("",!0),e.text?(t(),o("div",V,[a(i.$slots,"text",{},void 0,!0)])):d("",!0),a(i.$slots,"default",{},void 0,!0),e.footer?(t(),o("div",j,[a(i.$slots,"footer",{},void 0,!0)])):d("",!0)],4)],2)],6))}},O=l(M,[["__scopeId","data-v-c479aa8a"]]);export{O as A,H as a};
