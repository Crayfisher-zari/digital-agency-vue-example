import{a as r,G as d,B as i,r as p,w as _,o as m,c as f,x as l,f as u,s as a,h,u as x,D as y}from"./entry.ded7dba3.js";import{L as B,H as k,T as v,B as n}from"./TextInput.ed9f378a.js";const V={class:"colSpan-9 oneTime"},b=u("p",null,"〇〇アプリに表示されているワンタイムパスワードを入力してください",-1),T=r({__name:"onetime",setup(g){const t=d();i({title:"ワンタイムパスワード",bodyAttrs:{class:"color-scheme-light"}});const s=()=>{t.push("/")},e=p("");return _(e,()=>{e.value.length>5&&t.push("/examples")}),(w,o)=>(m(),f(B,null,{default:l(()=>[u("div",V,[a(k,{headingLevel:1},{default:l(()=>[h("多要素認証が必要です")]),_:1}),b,a(v,{modelValue:x(e),"onUpdate:modelValue":o[0]||(o[0]=c=>y(e)?e.value=c:null),label:"ワンタイムパスワード",type:"text",placeHolder:"000000"},null,8,["modelValue"]),a(n,{label:"アプリをダウンロードしていない方はこちら",type:"tertiary",onClick:s}),a(n,{label:"戻る",type:"secondary",onClick:s,class:"backButton"})])]),_:1}))}});export{T as default};
