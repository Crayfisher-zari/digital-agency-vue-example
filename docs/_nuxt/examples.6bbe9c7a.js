import{a as k,r as b,b as g,o,e as u,f as t,u as y,h as V,t as m,i as f,j as I,p as E,k as G,l as C,w as $,F as W,m as z,q as w,v as L,c as R,s as c,x as p,T as le,y as te,z as U,A as H,B as ae,C as N,D as oe}from"./entry.967700f8.js";import{L as P,B as D,T as j,g as se,H as S}from"./TextInput.1b92c1b7.js";const ne=e=>(E("data-v-ae263e37"),e=e(),G(),e),ue=["value","name","disabled","checked"],de={key:0,class:"subText"},ie=ne(()=>t("span",{class:"radioIcon"},null,-1)),re=k({__name:"RadioButton",props:{radioStyle:{default:"default"},modelValue:null,radioValue:null,label:null,name:null,subText:{default:void 0},isValid:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,a=b(!1),n=g(()=>l.modelValue===l.radioValue),i=d=>{s("update:modelValue",d.target.value)},r=g(()=>l.isDisabled?"isDisabled":l.isValid?null:"isInvalid");return(d,v)=>(o(),u("label",{class:I([e.radioStyle,y(r),{checked:y(n)},{focused:a.value}])},[t("input",{type:"radio",class:"sr-only",value:e.radioValue,onChange:i,name:e.name,disabled:e.isDisabled,checked:y(n)},null,40,ue),V(m(e.label)+" ",1),e.radioStyle==="tile"&&e.subText!==void 0?(o(),u("span",de,m(e.subText),1)):f("",!0),ie],2))}});const ce=C(re,[["__scopeId","data-v-ae263e37"]]),me={class:"label"},ve={key:0,class:"requiredText isRequired"},be={key:1,class:"requiredText"},he={class:"buttons"},ye={key:0,class:"helpText"},fe=k({__name:"RadioGroup",props:{modelValue:null,groupLabel:null,radioStyle:{default:"default"},name:null,labels:null,values:null,subTexts:{default:void 0},helpText:{default:void 0},errorText:{default:void 0},isRequired:{type:Boolean,default:!1},isValid:{type:Boolean,default:!0},onBlur:{type:Function,default:void 0},isDisabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const a=b(e.modelValue),n=i=>{s("update:modelValue",i)};return $(a,i=>{n(i)}),(i,r)=>(o(),u("div",{class:I(["radioGroup",[{isError:!e.isValid},e.radioStyle]])},[t("p",me,[V(m(e.groupLabel)+" ",1),e.isRequired?(o(),u("span",ve,"必須")):(o(),u("span",be,"任意"))]),t("div",he,[(o(!0),u(W,null,z(e.labels,(d,v)=>(o(),R(ce,{key:e.values[v],modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=h=>a.value=h),radioStyle:e.radioStyle,label:d,radioValue:e.values[v],subText:e.subTexts?e.subTexts[v]:void 0,name:e.name,isValid:e.isValid,isDisabled:e.isDisabled},null,8,["modelValue","radioStyle","label","radioValue","subText","name","isValid","isDisabled"]))),128))]),e.helpText!==void 0?(o(),u("p",ye,m(e.helpText),1)):f("",!0),e.errorText!==void 0?w((o(),u("p",{key:1,class:"errorText"},m(e.errorText),513)),[[L,!e.isValid]]):f("",!0)],2))}});const M=C(fe,[["__scopeId","data-v-7a77aeab"]]),ke=e=>(E("data-v-0d001375"),e=e(),G(),e),xe=["value","name","disabled","checked"],pe=ke(()=>t("span",{class:"checkIcon"},null,-1)),Ve=k({__name:"Checkbox",props:{modelValue:{type:[Array,Boolean]},value:{default:"on"},label:null,name:{default:void 0},isValid:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,a=g(()=>Array.isArray(l.modelValue)?l.modelValue.length===0||l.value===void 0?!1:l.modelValue.includes(l.value):l.modelValue),n=r=>{const d=r.target.checked,v=r.target.value;let h;if(Array.isArray(l.modelValue)){const B=l.modelValue.findIndex(A=>A===l.value),_=B!==-1;!_&&d?h=[...l.modelValue].concat([v]):_&&!d?(h=[...l.modelValue],h.splice(B,1)):h=[...l.modelValue]}else h=d;s("update:modelValue",h)},i=g(()=>l.isDisabled?"isDisabled":l.isValid?null:"isInvalid");return(r,d)=>(o(),u("label",{class:I(`${y(i)??""} `)},[t("input",{type:"checkbox",class:"sr-only",value:e.value,name:e.name,disabled:e.isDisabled,onChange:n,checked:y(a)},null,40,xe),V(m(e.label)+" ",1),pe],2))}});const J=C(Ve,[["__scopeId","data-v-0d001375"]]),Te={class:"label"},ge={key:0,class:"requiredText isRequired"},_e={key:1,class:"requiredText"},Ce={class:"buttons"},$e={key:0,class:"helpText"},Be=k({__name:"CheckboxGroup",props:{modelValue:null,groupLabel:null,name:null,labels:null,values:null,helpText:{default:void 0},errorText:{default:void 0},isRequired:{type:Boolean,default:!1},isValid:{type:Boolean,default:!0},onBlur:{type:Function,default:void 0},isDisabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const a=b(e.modelValue),n=i=>{s("update:modelValue",i)};return $(a,i=>{n(i)}),(i,r)=>(o(),u("div",{class:I(["checkboxGroup",{isError:e.isValid}])},[t("p",Te,[V(m(e.groupLabel)+" ",1),e.isRequired?(o(),u("span",ge,"必須")):(o(),u("span",_e,"任意"))]),t("div",Ce,[(o(!0),u(W,null,z(e.labels,(d,v)=>(o(),R(J,{key:e.values[v],modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=h=>a.value=h),label:d,value:e.values[v],name:e.name,isValid:e.isValid,isDisabled:e.isDisabled},null,8,["modelValue","label","value","name","isValid","isDisabled"]))),128))]),e.helpText!==void 0?(o(),u("p",$e,m(e.helpText),1)):f("",!0),e.errorText!==void 0?w((o(),u("p",{key:1,class:"errorText"},m(e.errorText),513)),[[L,!e.isValid]]):f("",!0)],2))}});const Se=C(Be,[["__scopeId","data-v-8a241d9b"]]),De=["aria-modal","aria-hidden"],Ie={class:"modal colStart-4 colEnd-10"},Ne={class:"buttonWrapper"},we=k({__name:"Modal",props:{title:null,text:null,labelPrimary:null,labelSecondary:{default:""},modelValue:{type:Boolean},onClickPrimary:null,onClickSecondary:{type:Function,default:void 0}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,a=()=>{l.onClickPrimary(),s("update:modelValue",!1)},n=()=>{document.body.style.overflow="hidden";const d=document.querySelector(".scrollbar-gutter");d&&(d.style.scrollbarGutter="stable")},i=()=>{document.body.style.overflow="visible";const d=document.querySelector(".scrollbar-gutter");d&&(d.style.scrollbarGutter="auto")};$(()=>l.modelValue,d=>{d?n():i()});const r=()=>{l.onClickSecondary&&(l.onClickSecondary(),s("update:modelValue",!1))};return(d,v)=>(o(),R(te,{to:"body"},[c(le,null,{default:p(()=>[w(t("div",{class:"modalBg",role:"dialog","aria-modal":e.modelValue?e.modelValue:void 0,"aria-hidden":!e.modelValue,tabindex:"-1"},[c(P,{class:"modalWrapper"},{default:p(()=>[t("div",Ie,[t("h1",null,m(e.title),1),t("p",null,m(e.text),1),t("div",Ne,[c(D,{label:e.labelPrimary,type:"primary",class:"button",onClick:a},null,8,["label"]),r?(o(),R(D,{key:0,label:e.labelSecondary,class:"button",type:"secondary",onClick:r},null,8,["label"])):f("",!0)])])]),_:1})],8,De),[[L,e.modelValue]])]),_:1})]))}});const Le=["href"],Pe={key:1},Re=k({__name:"Pankuzu",props:{list:null},setup(e){const s=e;return(l,a)=>(o(),u("ul",null,[(o(!0),u(W,null,z(s.list,n=>(o(),u("li",{key:n.text},[n.url?(o(),u("a",{key:0,href:n.url},m(n.text),9,Le)):(o(),u("span",Pe,m(n.text),1))]))),128))]))}});const Ue=C(Re,[["__scopeId","data-v-376fd925"]]),He=({label:e,placeHolder:s,supportText:l,isRequired:a})=>{const n=b(""),i=b(!1),r=g(()=>a?!(i.value&&n.value===""):!0);$(n,()=>{!i.value&&n.value!==""&&(i.value=!0)});const v=k({render:()=>H(j,{type:"text",label:e,modelValue:n.value,placeHolder:s,supportText:l,errorText:"必須項目です",isRequired:a,isValid:r.value,"onUpdate:modelValue":h=>{n.value=h}})});return{name:U(n),UseNameInputComponent:v}},qe=()=>{const e=b(""),s=b(!1),l=b(),a=()=>{if(s.value&&e.value===""){l.value="必須項目です";return}if(e.value.length>11){l.value="10桁以内で入力してください";return}l.value=void 0},n=g(()=>l.value===void 0),i=()=>{e.value=e.value.replaceAll("-",""),a()};$(e,()=>{!s.value&&e.value!==""&&(s.value=!0)});const d=k({render:()=>H(j,{type:"tel",label:"電話番号",modelValue:e.value,placeHolder:"0123456789",supportText:"日中に連絡のつきやすい電話番号を記入します。",errorText:l.value,isRequired:!0,isValid:n.value,"onUpdate:modelValue":v=>{e.value=v},onBlur:i,isDisabled:!0})});return{tel:U(e),UseTelInputComponent:d}},Ae={class:"textAreaInputWrapper"},Fe={class:"labelWrapper"},Ee={class:"label"},Ge={class:"requiredText"},We=["value","placeholder","required","aria-invalid","onBlur","disabled"],ze={key:0,class:"supportText"},Me={key:1},je=k({__name:"TextAreaInput",props:{modelValue:null,label:null,placeHolder:{default:""},supportText:{default:null},errorText:{default:null},isRequired:{type:Boolean,default:!1},isValid:{type:Boolean,default:!0},onBlur:{type:[Function,null],default:void 0},isDisabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const l=e,a=`textInput${se()}`,n=g(()=>l.isDisabled?"isDisabled":l.isValid?null:"isInvalid"),i=r=>{s("update:modelValue",r.target.value)};return(r,d)=>(o(),u("div",{class:I(y(n))},[t("label",Ae,[t("span",Fe,[t("span",Ee,m(l.label),1),w(t("span",Ge,"必須",512),[[L,l.isRequired]])]),t("textarea",{class:"textarea",value:l.modelValue,placeholder:l.placeHolder,onInput:i,required:l.isRequired,"aria-invalid":!e.isValid,"aria-describedby":a,onBlur:e.onBlur,disabled:l.isDisabled},null,40,We)]),l.supportText!==null?(o(),u("span",ze,m(l.supportText),1)):f("",!0),l.errorText!==null?(o(),u("span",Me,[w(t("span",{id:a,class:"errorText"},m(l.errorText),513),[[L,!l.isValid]])])):f("",!0)],2))}});const Je=C(je,[["__scopeId","data-v-187a8571"]]),Ke=()=>{const e=b(""),s=b(!1),l=b(null),a=()=>{if(s.value&&e.value===""){l.value="入力必須項目です";return}l.value=null},n=g(()=>l.value===null),i=()=>{a()};$(e,()=>{!s.value&&e.value!==""&&(s.value=!0)});const d=k({render:()=>H(Je,{label:"お問い合わせ詳細",modelValue:e.value,placeHolder:"パスワードを忘れてしまった",supportText:"できる限りくわしくお書きください",errorText:l.value,isRequired:!0,isValid:n.value,"onUpdate:modelValue":v=>{e.value=v},onBlur:i,isDisabled:!1})});return{text:U(e),UseTextAreaInputComponent:d}},Oe=""+new URL("icon_firstPage_dark.b16acad5.svg",import.meta.url).href,K=""+new URL("icon_firstPage.d3b6656f.svg",import.meta.url).href,Qe=""+new URL("icon_arrow_left_dark.5671d093.svg",import.meta.url).href,O=""+new URL("icon_arrow_left.31a1025b.svg",import.meta.url).href,Xe=""+new URL("icon_arrow_right_dark.ee1fc88e.svg",import.meta.url).href,Q=""+new URL("icon_arrow_right.b08b3256.svg",import.meta.url).href,Ye=""+new URL("icon_endPage_dark.e06def08.svg",import.meta.url).href,X=""+new URL("icon_endPage.412afd6d.svg",import.meta.url).href,q=e=>(E("data-v-d1909eb0"),e=e(),G(),e),Ze=Oe,el=K,ll=Qe,tl=O,al=Xe,ol=Q,sl=Ye,nl=X,ul={class:"pagination"},dl=q(()=>t("picture",null,[t("source",{srcset:Ze,media:"(prefers-color-scheme: dark)"}),t("source",{srcset:el}),t("img",{src:K,alt:"最初へ戻る",width:"24",height:"24"})],-1)),il=[dl],rl=q(()=>t("picture",null,[t("source",{srcset:ll,media:"(prefers-color-scheme: dark)"}),t("source",{srcset:tl}),t("img",{src:O,alt:"1つ前に戻る",width:"24",height:"24"})],-1)),cl=[rl],ml={key:0,class:"dot dotPrevious"},vl={class:"current"},bl={key:7,class:"dot dotNext"},hl=q(()=>t("picture",null,[t("source",{srcset:al,media:"(prefers-color-scheme: dark)"}),t("source",{srcset:ol}),t("img",{src:Q,alt:"1つ次に進む",width:"24",height:"24"})],-1)),yl=[hl],fl=q(()=>t("picture",null,[t("source",{srcset:sl,media:"(prefers-color-scheme: dark)"}),t("source",{srcset:nl}),t("img",{src:X,alt:"最後へ進む",width:"24",height:"24"})],-1)),kl=[fl],xl=k({__name:"Pagination",props:{type:{default:"basic"},current:null,min:null,max:null,onClickNumber:null,onClickNext:null,onClickPrevious:null,onClickFirst:null,onClickEnd:null},setup(e){return(s,l)=>(o(),u("div",{class:I(e.type)},[t("div",ul,[t("button",{class:"fistPage",onClick:l[0]||(l[0]=(...a)=>e.onClickFirst&&e.onClickFirst(...a))},il),t("button",{class:"previous",onClick:l[1]||(l[1]=(...a)=>e.onClickPrevious&&e.onClickPrevious(...a))},cl),e.current-4>=e.min?(o(),u("div",ml,"...")):f("",!0),e.current-3>=e.min?(o(),u("button",{key:1,class:"pageNumber",style:{"grid-column":"4/5"},onClick:l[2]||(l[2]=a=>e.onClickNumber(e.current-3))},m(e.current-3),1)):f("",!0),e.current-2>=e.min?(o(),u("button",{key:2,class:"pageNumber",style:{"grid-column":"5/6"},onClick:l[3]||(l[3]=a=>e.onClickNumber(e.current-2))},m(e.current-2),1)):f("",!0),e.current-1>=e.min?(o(),u("button",{key:3,class:"pageNumber",style:{"grid-column":"6/7"},onClick:l[4]||(l[4]=a=>e.onClickNumber(e.current-1))},m(e.current-1),1)):f("",!0),t("p",vl,m(e.current)+"/"+m(e.max),1),e.current+1<=e.max?(o(),u("button",{key:4,class:"pageNumber",style:{"grid-column":"8/9"},onClick:l[5]||(l[5]=a=>e.onClickNumber(e.current+1))},m(e.current+1),1)):f("",!0),e.current+2<=e.max?(o(),u("button",{key:5,class:"pageNumber",style:{"grid-column":"9/10"},onClick:l[6]||(l[6]=a=>e.onClickNumber(e.current+2))},m(e.current+2),1)):f("",!0),e.current+3<=e.max?(o(),u("button",{key:6,class:"pageNumber",style:{"grid-column":"10/11"},onClick:l[7]||(l[7]=a=>e.onClickNumber(e.current+3))},m(e.current+3),1)):f("",!0),e.current+4<=e.max?(o(),u("div",bl,"...")):f("",!0),t("button",{class:"next",onClick:l[8]||(l[8]=(...a)=>e.onClickNext&&e.onClickNext(...a))},yl),t("button",{class:"endPage",onClick:l[9]||(l[9]=(...a)=>e.onClickEnd&&e.onClickEnd(...a))},kl)])],2))}});const pl=C(xl,[["__scopeId","data-v-d1909eb0"]]),Vl=()=>{const e=b(995),s=1,l=999,a=()=>{e.value!==l&&e.value++},n=()=>{e.value!==s&&e.value--},i=B=>{e.value=B},r=()=>{e.value=s},d=()=>{e.value=l},h=k({render:()=>H(pl,{type:"basic",current:e.value,min:s,max:l,onClickNumber:i,onClickNext:a,onClickPrevious:n,onClickFirst:r,onClickEnd:d})});return{pageNumber:U(e),UsePaginationComponent:h}},Tl={class:"inputWrapper"},gl=oe('<div class="tableWrapper"><table class="customTable"><thead><th>Table Hader</th><th>Table Hader</th><th>Table Hader</th><th>Table Hader</th><th>Table Hader</th></thead><tbody><tr><th>Table Hader</th><td>Table Data</td><td>Table Data</td><td>Table Data</td><td>Table Data</td></tr><tr><th>Table Hader</th><td>Table Data</td><td>Table Data</td><td>Table Data</td><td>Table Data</td></tr><tr><th>Table Hader</th><td>Table Data</td><td>Table Data</td><td>Table Data</td><td>Table Data</td></tr><tr><th>Table Hader</th><td>Table Data</td><td>Table Data</td><td>Table Data</td><td>Table Data</td></tr><tr><th>Table Hader</th><td>Table Data</td><td>Table Data</td><td>Table Data</td><td>Table Data</td></tr></tbody></table></div>',1),_l=["src"],Cl=t("div",{class:"layoutBlock colSpan-3"},"4分の1",-1),$l=t("div",{class:"layoutBlock colSpan-6"},"4分の2",-1),Bl=t("div",{class:"layoutBlock colSpan-3"},"4分の1",-1),Sl=t("div",{class:"layoutBlock colSpan-3"},"4分の1",-1),Dl=t("div",{class:"layoutBlock colSpan-3"},"4分の1",-1),Il=t("div",{class:"layoutBlock colSpan-3"},"4分の1",-1),Nl=t("div",{class:"layoutBlock colSpan-3"},"4分の1",-1),wl=t("div",{class:"layoutBlock colSpan-9"},"4分の3",-1),Ll=t("div",{class:"layoutBlock colSpan-3"},"4分の1",-1),Pl=t("div",{class:"layoutBlock colSpan-9"},"4分の3",-1),Rl=t("div",{class:"layoutBlock colSpan-4"},"3分の1",-1),Ul=t("div",{class:"layoutBlock colSpan-4"},"3分の1",-1),Hl=t("div",{class:"layoutBlock colSpan-4"},"3分の1",-1),ql=t("p",null,"タブレットは2列にする",-1),Al=t("div",{class:"layoutBlock colSpan-6 colSpanTablet-1"},"4分の2",-1),Fl=t("div",{class:"layoutBlock colSpan-6 colSpanTablet-1"},"4分の2",-1),El=t("p",null,"真ん中半分だけ使う",-1),Gl=t("div",{class:"layoutBlock colStart-4 colEnd-10"},"4分の2",-1),Ml=k({__name:"examples",setup(e){ae({title:"コンポーネント郡",bodyAttrs:{class:"color-scheme-light"}});const s=()=>{console.log("click")},{UseNameInputComponent:l}=He({label:"姓",isRequired:!0,supportText:"住民票に記載された姓を記入します。",placeHolder:"山田"}),{UseTelInputComponent:a}=qe(),{UseTextAreaInputComponent:n}=Ke(),i=b(null),r=b("3"),d=b(["2"]),v=b(!0),{UsePaginationComponent:h,pageNumber:B}=Vl(),_=b(!1),A=()=>{console.log("ボタン1")},Y=()=>{console.log("ボタン2")},Z=[{text:"ホーム",url:"#!"},{text:"政策",url:"#!"},{text:"審議会・研究会",url:"#!"},{text:"デジタル庁における入札制限等の在り方に関する検討会"}],ee=b("light");return $(ee,F=>{F==="light"&&(document.body.classList.remove("color-scheme-dark"),document.body.classList.add("color-scheme-light")),F==="dark"&&(document.body.classList.remove("color-scheme-light"),document.body.classList.add("color-scheme-dark"))}),(F,x)=>(o(),u("div",null,[c(Ue,{list:Z}),c(S,{headingLevel:1},{default:p(()=>[V("H1 / Bold(700) / 1.5")]),_:1}),c(S,{headingLevel:2},{default:p(()=>[V("H2 / Bold(700) / 1.5")]),_:1}),c(S,{headingLevel:3},{default:p(()=>[V("H3 / Bold(700) / 1.5")]),_:1}),c(S,{headingLevel:4},{default:p(()=>[V("H4 / Bold(700) / 1.5")]),_:1}),c(S,{headingLevel:5},{default:p(()=>[V("H5 / Bold(700) / 1.5")]),_:1}),c(S,{headingLevel:6},{default:p(()=>[V("H6 / Bold(700) / 1.5")]),_:1}),c(D,{label:"ボタン",onClick:s}),c(D,{label:"ボタン",type:"secondary",onClick:s}),c(D,{label:"ボタン",type:"tertiary",onClick:s}),t("div",Tl,[c(y(l)),c(y(a)),c(y(n)),t("div",null,[c(M,{modelValue:y(i),"onUpdate:modelValue":x[0]||(x[0]=T=>N(i)?i.value=T:null),groupLabel:"ラベル",labels:["選択肢1","選択肢2","選択肢3"],values:["1","2","3"],helpText:"ヘルプテキスト",errorText:"エラーテキスト",name:"group",isRequired:!0},null,8,["modelValue"])]),t("div",null,[c(M,{modelValue:y(r),"onUpdate:modelValue":x[1]||(x[1]=T=>N(r)?r.value=T:null),radioStyle:"tile",groupLabel:"ラベル",labels:["選択肢1","選択肢2","選択肢3"],subTexts:["補足説明1","補足説明2","補足説明3"],values:["1","2","3"],helpText:"ヘルプテキスト",errorText:"エラーテキスト",name:"group2",isRequired:!0},null,8,["modelValue"])]),t("div",null,[c(Se,{modelValue:y(d),"onUpdate:modelValue":x[2]||(x[2]=T=>N(d)?d.value=T:null),groupLabel:"ラベル",labels:["選択肢1","選択肢2","選択肢3"],values:["1","2","3"],helpText:"ヘルプテキスト",errorText:"エラーテキスト",name:"group3"},null,8,["modelValue"])]),t("div",null,[c(J,{modelValue:y(v),"onUpdate:modelValue":x[3]||(x[3]=T=>N(v)?v.value=T:null),label:"真偽値1"},null,8,["modelValue"])])]),gl,t("div",null,[t("img",{src:`https://picsum.photos/id/${y(B)}/200/200`,alt:"",width:"200",height:"200"},null,8,_l),c(y(h))]),t("div",null,[c(D,{label:"モーダルを表示",onClick:x[4]||(x[4]=()=>{_.value=!0})}),c(we,{modelValue:y(_),"onUpdate:modelValue":x[5]||(x[5]=T=>N(_)?_.value=T:null),title:"タイトル",text:"テキスト",labelPrimary:"ボタン1",labelSecondary:"ボタン2",onClickPrimary:A,onClickSecondary:Y},null,8,["modelValue"])]),c(P,null,{default:p(()=>[Cl,$l,Bl,Sl,Dl,Il,Nl,wl,Ll,Pl,Rl,Ul,Hl]),_:1}),ql,c(P,null,{default:p(()=>[Al,Fl]),_:1}),El,c(P,null,{default:p(()=>[Gl]),_:1})]))}});export{Ml as default};
