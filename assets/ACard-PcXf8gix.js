import{_,o as a,e as t,b as r,z as n,A as o,j as s}from"./index-V-g7Kay_.js";const i={class:"card__main"},c={class:"card__main__body"},l={key:1,class:"card__main__body__text"},m={key:0,class:"card__main__footer"},u={key:0,class:"card__drawer"},h={__name:"ACard",props:{theme:{type:String,default:"dk"},heading:Boolean,text:Boolean,footer:Boolean,drawer:Boolean},setup(e){return(d,f)=>(a(),t("div",{class:n(`card card--${e.theme}`)},[r("div",i,[r("div",c,[e.heading?(a(),t("div",{key:0,class:n(`card__main__body__heading card__main__body__heading--${e.theme}`)},[o(d.$slots,"heading",{},void 0,!0)],2)):s("",!0),e.text?(a(),t("div",l,[o(d.$slots,"text",{},void 0,!0)])):s("",!0)]),e.footer?(a(),t("div",m,[o(d.$slots,"footer",{},void 0,!0)])):s("",!0)]),e.drawer?(a(),t("div",u,[o(d.$slots,"drawer",{},void 0,!0)])):s("",!0)],2))}},v=_(h,[["__scopeId","data-v-1b474a47"]]);export{v as A};
