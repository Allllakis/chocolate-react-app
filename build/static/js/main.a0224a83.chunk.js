(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3QEI0",total:"Cart_total__15tSB",actions:"Cart_actions__5io6v","button--alt":"Cart_button--alt__1GbyA",button:"Cart_button__2MDtN"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__3Lx2X",modal:"Modal_modal__2JbhN","slide-down":"Modal_slide-down__1NiAU"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__2yaoZ",icon:"HeaderCartButton_icon__3X6ye",badge:"HeaderCartButton_badge__3oDUZ",bump:"HeaderCartButton_bump__3Cj47"}},function(e,t,n){e.exports={meal:"MealItem_meal__wGIq7",description:"MealItem_description__2rExH",price:"MealItem_price__1hY5f"}},,function(e,t,n){e.exports={header:"Header_header__2zcGA","main-image":"Header_main-image__2IxI2"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3NBw4","meals-appear":"AvailableMeals_meals-appear__LDtF-"}},function(e,t,n){e.exports={card:"Card_card__3_EYS"}},function(e,t,n){e.exports={form:"MealItemForm_form__24Xib"}},function(e,t,n){e.exports={input:"Input_input__sXRDQ"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__nxZij"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),i=(n(19),n(1)),r=n(4),s=n.n(r),o=n(0),l=function(e){return Object(o.jsx)("div",{className:s.a.backdrop})},d=function(e){s.a.modal,s.a.content,e.children},j=document.getElementById("overlays"),u=function(e){return Object(o.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(o.jsx)(l,{}),j),c.a.createPortal(Object(o.jsx)(d,{children:e.children}),j)]})},m=n(2),b=n.n(m),h=function(e){var t=Object(o.jsx)("ul",{className:b.a["cart-items"],children:[{id:1,name:"Milk chocolate"}].map((function(e){return Object(o.jsx)("li",{children:e.name})}))});return Object(o.jsxs)(u,{children:[t,Object(o.jsxs)("div",{className:b.a.total,children:[Object(o.jsx)("span",{children:"Total amount"}),Object(o.jsx)("span",{children:"28.73"})]}),Object(o.jsxs)("div",{className:b.a.actions,children:[Object(o.jsx)("button",{className:b.a["button--alt"],children:"Close"}),Object(o.jsx)("button",{className:b.a.button,children:"Order"})]})]})},x=n.p+"static/media/chocolate.9063965e.jpg",p=n(8),_=n.n(p),O=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},f=n(5),g=n.n(f),v=function(e){return Object(o.jsxs)("button",{className:g.a.button,children:[Object(o.jsx)("span",{className:g.a.icon,children:Object(o.jsx)(O,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:g.a.badge,children:"3"})]})},N=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsxs)("header",{className:_.a.header,children:[Object(o.jsx)("h1",{children:"Meals"}),Object(o.jsx)(v,{})]}),Object(o.jsx)("div",{className:_.a["main-image"],children:Object(o.jsx)("img",{src:x,alt:"chocolate and raspberries"})})]})},w=n(9),y=n.n(w),M=n(10),C=n.n(M),H=function(e){return Object(o.jsx)("div",{className:C.a.card,children:e.children})},I=n(6),k=n.n(I),A=n(11),B=n.n(A),F=n(14),D=n(12),z=n.n(D),E=function(e){return Object(o.jsxs)("div",{className:z.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(F.a)({id:e.input.id},e.input))]})},X=function(e){return Object(o.jsxs)("form",{className:B.a.form,children:[Object(o.jsx)(E,{label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"})]})},Y=function(e){var t="".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:k.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:k.a.description,children:e.description}),Object(o.jsx)("div",{className:k.a.price,children:t})]}),Object(o.jsx)("div",{children:Object(o.jsx)(X,{})})]})},q=[{id:"m1",name:"Milk chocolate",description:"Delicate and melts in your mouth",price:15.99},{id:"m2",name:"White chocolate",description:"Amazing sweet taste without cloying, which you fall in love with the first time and forever",price:25.89},{id:"m3",name:"Dark chocolate",description:"Invigorating and energizing chocolate with elite cocoa from Nicaragua",price:20.59},{id:"m4",name:"Bitter chocolate",description:"Finest cocoa beans, signature silky smooth texture, unique roasting and grinding process, filigree decoration and elegant packaging.",price:31.19}],G=function(e){var t=q.map((function(e){return Object(o.jsx)(Y,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:y.a.meals,children:Object(o.jsx)(H,{children:Object(o.jsx)("ul",{children:t})})})},J=n(13),S=n.n(J),Z=function(e){return Object(o.jsxs)("section",{className:S.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious coffee and chocolate, Delivered to You"}),Object(o.jsx)("p",{children:"Chouse your favorite coffe and chocolate"}),Object(o.jsx)("p",{children:"All our chocolate are cooked with high-quality ingredients"})]})},L=function(e){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(Z,{}),Object(o.jsx)(G,{})]})};var P=function(){return Object(o.jsxs)(i.Fragment,{children:[Object(o.jsx)(h,{}),Object(o.jsx)(N,{}),Object(o.jsx)("main",{children:Object(o.jsx)(L,{})})]})};c.a.render(Object(o.jsx)(P,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a0224a83.chunk.js.map