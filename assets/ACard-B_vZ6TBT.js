import{_,o as a,h as d,b as r,m as n,C as o,l as s}from"./index-sCitLiO-.js";const i={class:"card__main"},c={class:"card__main__body"},l={key:1,class:"card__main__body__text"},m={key:0,class:"card__main__footer"},u={key:0,class:"card__drawer"},h={__name:"ACard",props:{theme:{type:String,default:"dk"},heading:Boolean,text:Boolean,footer:Boolean,drawer:Boolean},setup(e){return(t,f)=>(a(),d("div",{class:n(`card card--${e.theme}`)},[r("div",i,[r("div",c,[e.heading?(a(),d("div",{key:0,class:n(`card__main__body__heading card__main__body__heading--${e.theme}`)},[o(t.$slots,"heading",{},void 0,!0)],2)):s("",!0),e.text?(a(),d("div",l,[o(t.$slots,"text",{},void 0,!0)])):s("",!0)]),e.footer?(a(),d("div",m,[o(t.$slots,"footer",{},void 0,!0)])):s("",!0)]),e.drawer?(a(),d("div",u,[o(t.$slots,"drawer",{},void 0,!0)])):s("",!0)],2))}},v=_(h,[["__scopeId","data-v-4edde902"]]);export{v as A};