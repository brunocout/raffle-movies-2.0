var _=Object.defineProperty,D=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var x=(t,n,s)=>n in t?_(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,g=(t,n)=>{for(var s in n||(n={}))M.call(n,s)&&x(t,s,n[s]);if(f)for(var s of f(n))w.call(n,s)&&x(t,s,n[s]);return t},v=(t,n)=>D(t,q(n));var b=(t,n)=>{var s={};for(var r in t)M.call(t,r)&&n.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&f)for(var r of f(t))n.indexOf(r)<0&&w.call(t,r)&&(s[r]=t[r]);return s};import{j as k,R as P,a as E,b as T,r as d,c as K,d as G,e as A,u as Y,f as z,B as H,g as J,h as W}from"./vendor.4552b3a1.js";const U=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}};U();const Z="392f56ed610e68191dc6dd37d25782a6",Q="https://api.themoviedb.org/3",V="pt-BR",C="https://image.tmdb.org/t/p/original";var O=async t=>await fetch(`${Q}/search/movie?api_key=${Z}&language=${V}&query=${t}`).then(n=>n.json());const e=k.exports.jsx,o=k.exports.jsxs,u=a=>{var i=a,{children:t,className:n="",component:s="a"}=i,r=b(i,["children","className","component"]);return e(s,v(g({className:`button ${n}`},r),{children:t}))};const X=({data:t,indexOf:n,removeFromSlot:s})=>o("div",{className:"movies-sprites",onClick:a=>{s(n)},children:[e("div",{className:"remove-sprite",children:e(P,{})}),e("img",{src:t})]});const ee=({data:t,img_url:n})=>{let s=new Date(t.release_date);return o("div",{className:"raffled-container",children:[e("div",{className:"raffled-sprite",children:e("img",{src:n+t.poster_path})}),o("div",{className:"raffled-info",children:[e("h1",{className:"title",children:t.title}),e("p",{className:"overview",children:t.overview}),o("div",{className:"raffled-details",children:[o("span",{className:"date details",children:[e(E,{className:"ri-line"})," ",s.getFullYear()]}),o("span",{className:"vote details",children:[e(T,{className:"ri-line"})," ",t.vote_average]})]})]})]})};const N=i=>{var c=i,{type:t,className:n,name:s,placeholder:r}=c,a=b(c,["type","className","name","placeholder"]);return e("input",v(g({type:t,name:s,placeholder:r},a),{className:n}))},te=()=>{const[t,n]=d.exports.useState([]),[s,r]=d.exports.useState(""),[a,i]=d.exports.useState([]),[c,h]=d.exports.useState([]),[y,$]=d.exports.useState(),[S,m]=d.exports.useState({type:"",message:""});console.log(t);const j=l=>{const p=document.querySelector(".input-container");/[a-zA-Z0-9]/.test(l.target.value)?(p.classList.remove("error-input"),m({}),(l.key===13||l.key=="Enter")&&R()):(p.classList.add("error-input"),m({type:"error",message:"Just use letters and numbers!"}),r(""))},R=()=>{c.length=0,L()},L=()=>{s.length!=0&&(O(s).then(l=>{t.length<=9?n([...t,l.results[0]]):m({type:"error",message:"You have reached the maximum number of movies in the list. Click on the raffle button."})}),i([...a,s]),r(""))},F=()=>{B()},B=()=>{const l=Math.floor(Math.random()*a.length);O(a[l]).then(p=>{a.length!=0&&a.length>=2?(m({}),t.length=0,h(p.results[0]),a.length=0):m({type:"error",message:"You need to have 2 or more items on your list to be able to raffle."})})},I=l=>{$(t.splice(l,1)),a.splice(l,1)};return e("div",{className:"raffle-content",children:o("div",{className:"raffle",children:[o("div",{className:"raffle-container",children:[e("h1",{children:"Choose the Movies"}),e("p",{children:"Add movies"}),o("div",{className:"input-container",children:[e(u,{component:"button",className:"add-button",onClick:R,children:e(K,{})}),e(N,{type:"text",name:"search",placeholder:"eg. Spider Man",onChange:l=>r(l.target.value),value:s,onKeyDown:j,maxLength:"40",className:"raffle-input"})]}),e("div",{className:S.type==="error"?"notification error":"hidden",children:e("p",{children:S.message})}),e(u,{component:"button",className:"raffle-button",onClick:F,children:"Raffle now"})]}),e("div",{className:"bar"}),c.length!=0?e(ee,{data:c,img_url:C}):t.length!=0?e("div",{className:"movies-container",children:t.map(l=>e(X,{data:C+(l==null?void 0:l.poster_path),indexOf:t.indexOf(l),removeFromSlot:I}))}):e("p",{children:"Add movies to the list... Lets raffle. \u{1F609}"})]})})};const se=()=>e("div",{className:"home",children:o("main",{className:"main container",children:[o("div",{className:"home-message",children:[e("h1",{children:"Raffle Movies: What Should i Watch?"}),o("p",{children:["Based on a list of movies from 2 to 10, I, ",e("span",{children:"Raffle Movies"})," will raffle a suggestion for you, who are undecided on which movie to watch \u{1F60A}"]})]}),e(te,{})]})});const ne=()=>{const[t,n]=d.exports.useState({name:"",email:"",message:"",subjext:"",accessKey:"7e564d6d-e70c-4a13-b576-1dba21877d0d"}),[s,r]=d.exports.useState({type:"",message:""}),a=c=>{n(v(g({},t),{[c.target.name]:c.target.value}))};return o("form",{action:"https://api.staticforms.xyz/submit",method:"POST",className:"form",onSubmit:async c=>{c.preventDefault();try{const y=await(await fetch("https://api.staticforms.xyz/submit",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json();y.success?r({type:"success",message:"Thank you for sending this suggestion, we will read it with care."}):r({type:"error",message:y.message})}catch(h){console.log(h),r({type:"error",message:"An error occurred while submitting your suggestion, please try again."})}},children:[e(N,{type:"text",name:"name",placeholder:"Name",className:"input",required:!0,onChange:a}),e(N,{type:"text",name:"subject",placeholder:"Subject",className:"input",required:!0,onChange:a}),e(N,{type:"email",name:"email",placeholder:"Email",className:"input",required:!0,onChange:a}),e("textarea",{placeholder:"Message",name:"message",onChange:a,required:!0}),e("div",{className:s.type==="success"?"notification success":"hidden",children:e("p",{children:s.message})}),e("div",{className:s.type==="error"?"notification error":"hidden",children:e("p",{children:s.message})}),e(u,{component:"button",className:"form-button",type:"submit",children:"Send"})]})};const ae=()=>o("main",{className:"suggest-container",children:[o("div",{className:"form-container",children:[e("h1",{children:"Suggest"}),e("p",{children:"Suggest me something"}),e(ne,{})]}),e("div",{className:"suggest-banner",children:e("img",{src:"assets/images/email-banner.png"})})]}),re=()=>o(G,{children:[e(A,{path:"/raffle-movies-website/",element:e(se,{})}),e(A,{path:"/raffle-movies-website/suggest",element:e(ae,{})})]});const oe=()=>e("footer",{className:"footer",children:o("p",{children:["A fun and personal project created by ",e("span",{children:"Bruno Coutinho"}),". Source code available on Github."]})});const ie=()=>{const t=Y();return e("nav",{className:"nav",children:o("div",{className:"navbar container",children:[e("div",{className:"logo",children:e(u,{component:"button",onClick:()=>t("/raffle-movies-website/"),children:e("img",{src:"assets/images/logo.png"})})}),e("div",{className:"menu-container",children:e("ul",{className:"menu",children:e("li",{children:o(u,{component:"button",className:"navlink",onClick:()=>t("/raffle-movies-website/suggest"),children:["Suggest me ",e(z,{})]})})})})]})})};function le(){return e("div",{className:"App",children:o(H,{children:[e(ie,{}),e(re,{}),e(oe,{})]})})}J.render(e(W.StrictMode,{children:e(le,{})}),document.getElementById("root"));
