import{_ as r}from"./BoxArtors.8973de27.js";import{a,e as u,q as p,o as c,h as _,l as d,b as l,i as e}from"./entry.43d7aee6.js";import{_ as m}from"./maisie-williams.7d879680.js";import{_ as v}from"./peter-dinklage.c05d7f61.js";import"./nuxt-link.792f8392.js";const b={class:"popup"},h=d('<div class="popup-wrap" data-v-06d139c2><div class="popup-blog" data-v-06d139c2><h2 class="popup-h2" data-v-06d139c2>Pet-проект</h2><p class="popup-text" data-v-06d139c2>фреймворк: Nuxt 3</p><p class="popup-text" data-v-06d139c2>анимация: GSAP</p><p class="popup-text" data-v-06d139c2>плагины: ScrollTrigger, ScrollSmoother</p><p class="popup-text" data-v-06d139c2>задача: Создать бесшовное, адаптивное приложене и подружить его с плагинами</p><button class="popup-button" data-v-06d139c2>Close</button></div></div>',1),f=[h],g={__name:"PopUp",setup(n){return u(()=>{const t=document.querySelector(".popup"),o=document.querySelector(".popup-blog");document.querySelector(".popup-button").addEventListener("click",()=>{o.classList.remove("popup-blog-active"),setTimeout(()=>{t.classList.remove("popup-active")},1e3)}),p.popup||setTimeout(()=>{t.classList.add("popup-active"),o.classList.add("popup-blog-active"),p.popup=!0},1e3)}),(t,o)=>(c(),_("div",b,f))}},x=a(g,[["__scopeId","data-v-06d139c2"]]),S=""+globalThis.__publicAssetsURL("images/throne.jpg"),y=""+globalThis.__publicAssetsURL("images/img-1000/throne(1000).jpg");const L=S,T={class:"home-wrap"},B=d('<img src="'+m+'" class="image" alt="" data-v-4b1b848f><img src="'+v+'" class="image" alt="" data-v-4b1b848f><picture data-v-4b1b848f><source media="screen and (min-width: 992px)" srcset="'+L+'" data-v-4b1b848f><img src="'+y+'" class="home-img" alt="" data-v-4b1b848f></picture><div class="home-text" data-v-4b1b848f><h1 class="home-h1" data-v-4b1b848f>Game<span data-v-4b1b848f>of</span><wbr data-v-4b1b848f>Thrones</h1><p class="home-h3" data-v-4b1b848f>Actors</p></div>',4),$={__name:"index",setup(n){return l({title:"Game of Thrones"}),(t,o)=>{const s=r,i=x;return c(),_("div",T,[B,e(s),e(i)])}}},k=a($,[["__scopeId","data-v-4b1b848f"]]);export{k as default};