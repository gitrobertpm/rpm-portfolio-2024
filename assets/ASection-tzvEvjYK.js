import{_ as u,o as s,e as o,b as d,l as n,u as c,m as a,q as l}from"./index-2yVDP9gg.js";const r={class:"section"},_={class:"section__main__hero"},h={class:"section__main__body"},m={class:"section__main__footer"},f={class:"section__supplemental"},v={__name:"ASection",props:{light:Boolean,hero:Boolean,heading:Boolean,subheading:Boolean,text:Boolean,footer:Boolean},setup(e){const i=e.light?"lt":"dk";return(t,g)=>(s(),o("div",r,[d("div",{class:n(["section__main",{"section__main--reverse":e.light}])},[d("div",_,[e.hero?(s(),o("div",{key:0,class:n(`cutout--${c(i)}--img`)},[a(t.$slots,"hero",{},void 0,!0)],2)):l("",!0)]),d("div",h,[e.heading?(s(),o("div",{key:0,class:n(`cutout--${c(i)}`)},[a(t.$slots,"heading",{},void 0,!0)],2)):l("",!0),e.subheading?(s(),o("div",{key:1,class:n(`cutout--${c(i)}`)},[a(t.$slots,"subheading",{},void 0,!0)],2)):l("",!0),e.text?(s(),o("div",{key:2,class:n(`cutout--${c(i)}--fat`)},[a(t.$slots,"text",{},void 0,!0)],2)):l("",!0),d("div",m,[e.footer?(s(),o("div",{key:0,class:n(`cutout--${c(i)}--chubby`)},[a(t.$slots,"footer",{},void 0,!0)],2)):l("",!0)])])],2),d("div",f,[a(t.$slots,"supplemental",{},void 0,!0)])]))}},b=u(v,[["__scopeId","data-v-ae67f8be"]]);export{b as A};