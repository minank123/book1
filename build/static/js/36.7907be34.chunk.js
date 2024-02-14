(this["webpackJsonpbookeinstein-app"]=this["webpackJsonpbookeinstein-app"]||[]).push([[36],{1123:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return q}));var a=c(7),n=c(0),i=c(21),l=c(745),s=c(222),r=c(343),o=c(20),d=c(65),j=c(158),u=c(746),b=c(747),O=c(748),h=c(113),v=c(749),x=c(742),m=c(346),p=c(97),f=c.n(p),g=c(750),k=c(342),D=c(62),N=c(175),y=c(40),S=c(963),A=c.n(S),E=c(351),I=c.n(E),C=c(971),R=c(64),T=c.n(R),L=c(140),B=c(740),U=c(898),M=c(741),P=c(899),_=c(900),w=c(119),W=c(1),H=Object(g.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(l.a);function Q(e){var t=e.isOpen,c=e.setOpen,a=e.bookOrderId,l=Object(L.a)(),s=Object(i.b)(),d=Object(k.a)(),x=Object(i.c)((function(e){return null===e||void 0===e?void 0:e.order})).bookOrderHistory,m=function(){c(!1)};return Object(n.useEffect)((function(){s(Object(N.e)(a))}),[]),Object(W.jsx)("div",{children:Object(W.jsxs)(B.a,{open:t,maxWidth:"lg",children:[Object(W.jsx)(U.a,{className:l.dialogTitle,children:Object(W.jsxs)("div",{className:l.dialogTitleChild,children:[Object(W.jsx)(j.a,{style:{fontSize:"20px"},children:" Book Order History "}),Object(W.jsx)(M.a,{to:"#",onClick:m,children:Object(W.jsx)(T.a,{className:l.closeIcon})})]})}),Object(W.jsx)(P.a,{children:Object(W.jsx)(o.a,{container:!0,children:Object(W.jsx)(u.a,{className:l.tableContainer,children:Object(W.jsxs)(b.a,{className:l.table,"aria-label":"simple table",children:[Object(W.jsx)(O.a,{className:l.tableHeaderCell,children:Object(W.jsxs)(H,{children:[Object(W.jsx)(h.a,{children:"Book Status "}),Object(W.jsx)(h.a,{children:" Status Date "})]})}),x?Object(W.jsx)(v.a,{children:x.map((function(e,t){return Object(W.jsxs)(H,{children:[Object(W.jsx)(h.a,{children:Object(W.jsx)(j.a,{className:l.status,style:{color:"NEW"===(null===e||void 0===e?void 0:e.orderBookStatus)&&d.palette.warning.dark||"CANCELLED"===(null===e||void 0===e?void 0:e.orderBookStatus)&&d.palette.error.dark||"DELIVERED"===(null===e||void 0===e?void 0:e.orderBookStatus)&&d.palette.success.dark},children:null===e||void 0===e?void 0:e.orderBookStatus})}),Object(W.jsx)(h.a,{children:null===e||void 0===e?void 0:e.statusDate})]},t)}))}):Object(W.jsx)("caption",{style:{textAlign:"center"},children:"Sorry! No data available"})]})})})}),Object(W.jsx)(r.a,{style:{marginTop:15}}),Object(W.jsx)(_.a,{className:l.dialogAction,children:Object(W.jsx)(w.a,{variant:"outlined",color:"secondary",className:l.buttonCancel,onClick:m,children:"Close"})})]})})}var z=c(46),V=Object(g.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(l.a);function q(){var e=Object(D.a)();Object(z.a)({roleList:["ADMIN","SCHOOL_ADMIN","SUPER_ADMIN"]});var t=Object(i.b)(),c=Object(i.c)((function(e){return null===e||void 0===e?void 0:e.userProfile})).loggedUserProfile,l=Object(n.useState)(!1),p=Object(a.a)(l,2),g=p[0],S=p[1],E=Object(n.useState)(!1),R=Object(a.a)(E,2),T=R[0],L=R[1],B=Object(n.useState)(null),U=Object(a.a)(B,2),M=U[0],P=U[1],_=Object(n.useState)(null),w=Object(a.a)(_,2),H=w[0],q=w[1],J=Object(n.useState)(""),G=Object(a.a)(J,2),F=G[0],K=G[1],X=Object(k.a)(),Y=Object(y.i)().id,Z=Object(i.c)((function(e){return null===e||void 0===e?void 0:e.order})).orderData,$=null===Z||void 0===Z?void 0:Z.books;return Object(n.useEffect)((function(){t(Object(N.f)(Y))}),[]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(s.a,{style:{padding:20},children:[Object(W.jsxs)("div",{className:e.titleContainer,children:[Object(W.jsx)(f.a,{className:e.viewIcon}),Object(W.jsx)("span",{className:e.pageTitle,children:"\xa0Order Details "})]}),Object(W.jsx)(r.a,{style:{margin:"30px 0px"}}),Object(W.jsxs)(o.a,{container:!0,rowSpacing:4,style:{padding:10},children:[Object(W.jsxs)(o.a,{item:!0,container:!0,spacing:2,children:[Object(W.jsx)(o.a,{item:!0,xs:12,sm:3,children:Object(W.jsx)("label",{style:{verticalAlign:"sub"},children:"Profile Id"})}),Object(W.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(W.jsx)(d.a,{name:"profileId",disabled:!0,value:null===Z||void 0===Z?void 0:Z.profileId,fullWidth:!0})})]}),Object(W.jsxs)(o.a,{item:!0,container:!0,spacing:2,children:[Object(W.jsx)(o.a,{item:!0,xs:12,sm:3,children:Object(W.jsx)("label",{style:{verticalAlign:"sub"},children:"Order Id"})}),Object(W.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(W.jsx)(d.a,{name:"profileId",disabled:!0,value:null===Z||void 0===Z?void 0:Z.id,fullWidth:!0})})]}),Object(W.jsxs)(o.a,{item:!0,container:!0,spacing:2,children:[Object(W.jsx)(o.a,{item:!0,xs:12,sm:3,children:Object(W.jsx)("label",{style:{verticalAlign:"sub"},children:" Delivery Date"})}),Object(W.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(W.jsx)(d.a,{name:"estimatedDeliveryDate",disabled:!0,value:null===Z||void 0===Z?void 0:Z.deliveryDate,fullWidth:!0})})]}),Object(W.jsxs)(o.a,{item:!0,container:!0,spacing:2,children:[Object(W.jsx)(o.a,{item:!0,xs:12,sm:3,children:Object(W.jsx)("label",{style:{verticalAlign:"sub"},children:"Total Books"})}),Object(W.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(W.jsx)(d.a,{name:"totalBooks",disabled:!0,value:null===Z||void 0===Z?void 0:Z.totalBooks,fullWidth:!0})})]}),Object(W.jsxs)(o.a,{item:!0,container:!0,spacing:2,children:[Object(W.jsx)(o.a,{item:!0,xs:12,sm:3,children:Object(W.jsx)("label",{style:{verticalAlign:"sub"},children:"Status"})}),Object(W.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(W.jsx)(d.a,{name:"status",disabled:!0,value:null===Z||void 0===Z?void 0:Z.status,fullWidth:!0})})]}),Object(W.jsxs)(o.a,{item:!0,container:!0,spacing:2,children:[Object(W.jsx)(o.a,{item:!0,xs:12,sm:3,children:Object(W.jsx)("label",{style:{verticalAlign:"sub"},children:"Created At"})}),Object(W.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(W.jsx)(d.a,{name:"createdAt",disabled:!0,value:new Date(null===Z||void 0===Z?void 0:Z.createdAt).toLocaleString(),fullWidth:!0})})]}),Object(W.jsxs)(o.a,{item:!0,container:!0,spacing:2,children:[Object(W.jsx)(o.a,{item:!0,xs:12,sm:3,children:Object(W.jsx)("label",{style:{verticalAlign:"sub"},children:"Updated At"})}),Object(W.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(W.jsx)(d.a,{name:"updatedAt",disabled:!0,value:new Date(null===Z||void 0===Z?void 0:Z.updatedAt).toLocaleString(),fullWidth:!0})})]})]}),Object(W.jsx)(r.a,{style:{margin:"30px 0px"}}),Object(W.jsxs)(o.a,{container:!0,rowSpacing:4,style:{padding:10},children:[Object(W.jsx)(o.a,{item:!0,xs:12,children:Object(W.jsx)(j.a,{variant:"h4",children:" Book Details "})}),Object(W.jsx)(o.a,{item:!0,xs:12,children:Object(W.jsx)(u.a,{className:e.tableContainer,children:Object(W.jsxs)(b.a,{className:e.table,"aria-label":"simple table",children:[Object(W.jsx)(O.a,{className:e.tableHeaderCell,children:Object(W.jsxs)(V,{children:[Object(W.jsx)(h.a,{children:" Book Name "}),Object(W.jsx)(h.a,{children:" ISBN No "}),Object(W.jsx)(h.a,{children:" Author"}),("ADMIN"===c.role||"SUPER_ADMIN"===c.role)&&Object(W.jsx)(h.a,{align:"center",children:" Due Date"}),("ADMIN"===c.role||"SUPER_ADMIN"===c.role)&&Object(W.jsx)(h.a,{align:"center",children:" Delivered Qty"}),("ADMIN"===c.role||"SUPER_ADMIN"===c.role)&&Object(W.jsx)(h.a,{align:"center",children:" Lost Qty"}),Object(W.jsx)(h.a,{align:"center",children:" Status "}),("ADMIN"===c.role||"SUPER_ADMIN"===c.role)&&Object(W.jsx)(h.a,{align:"right",children:" Actions "})]})}),$?Object(W.jsx)(v.a,{children:null===$||void 0===$?void 0:$.map((function(t,a){var n,i,l;return Object(W.jsxs)(V,{children:[Object(W.jsx)(h.a,{children:null===t||void 0===t||null===(n=t.bookDetail)||void 0===n?void 0:n.title}),Object(W.jsx)(h.a,{children:null===t||void 0===t||null===(i=t.bookDetail)||void 0===i?void 0:i.isbn}),Object(W.jsx)(h.a,{children:null===t||void 0===t||null===(l=t.bookDetail)||void 0===l?void 0:l.author}),("ADMIN"===c.role||"SUPER_ADMIN"===c.role)&&Object(W.jsx)(h.a,{align:"center",children:(null===t||void 0===t?void 0:t.dueDate)||"-"}),("ADMIN"===c.role||"SUPER_ADMIN"===c.role)&&Object(W.jsx)(h.a,{align:"center",children:(null===t||void 0===t?void 0:t.deliveredQuantity)||"-"}),("ADMIN"===c.role||"SUPER_ADMIN"===c.role)&&Object(W.jsx)(h.a,{align:"center",children:(null===t||void 0===t?void 0:t.receivedQuantity)||"-"}),Object(W.jsx)(h.a,{align:"center",children:Object(W.jsx)(j.a,{className:e.status,style:{backgroundColor:"NEW"===(null===t||void 0===t?void 0:t.status)&&X.palette.warning.dark||"CANCELLED"===(null===t||void 0===t?void 0:t.status)&&X.palette.error.dark||"DELIVERED"===(null===t||void 0===t?void 0:t.status)&&X.palette.success.dark},children:null===t||void 0===t?void 0:t.status})}),("ADMIN"===c.role||"SUPER_ADMIN"===c.role)&&Object(W.jsxs)(h.a,{align:"right",children:[Object(W.jsx)(x.a,{title:"Update Book Order Status","aria-label":"Return Book",children:Object(W.jsx)(m.a,{onClick:function(){return e=null===t||void 0===t?void 0:t.bookId,c=t.receivedQuantity,S(!0),q(e),void K(c);var e,c},children:Object(W.jsx)(A.a,{color:"success",style:{cursor:"pointer"}})})}),Object(W.jsx)(x.a,{title:"View Book Order History","aria-label":"Book History",children:Object(W.jsx)(m.a,{onClick:function(){return e=null===t||void 0===t?void 0:t.id,L(!0),void P(e);var e},children:Object(W.jsx)(I.a,{color:"success",style:{cursor:"pointer"}})})})]})]},a)}))}):Object(W.jsx)("caption",{style:{textAlign:"center"},children:"Sorry! No data available"})]})})})]})]}),g&&Object(W.jsx)(C.a,{isData:F,isOpen:g,setOpen:S,profileId:null===Z||void 0===Z?void 0:Z.profileId,bookId:H,orderId:null===Z||void 0===Z?void 0:Z.id}),T&&Object(W.jsx)(Q,{isOpen:T,setOpen:L,bookOrderId:M})]})}},938:function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"d",(function(){return d})),c.d(t,"c",(function(){return j})),c.d(t,"a",(function(){return r}));var a=c(11),n=c(9),i=c(5),l=function(e){return{type:i.xd,error:e}},s=function(e){return{type:i.J,error:e}},r=function(e){return function(t){try{Object(a.a)("https://prodservice.bookeinstein.com","POST","orders-service/bulk/book/return",e,!0).then((function(e){t(Object(n.b)(null===e||void 0===e?void 0:e.message))})).catch((function(e){console.log(e)}))}catch(c){console.log(c)}}},o=function(e,t){return function(c){try{Object(a.a)("https://prodservice.bookeinstein.com","PUT","orders-service/bulk/order/status",e,!0).then((function(e){c(Object(n.b)(null===e||void 0===e?void 0:e.message)),t&&t(e)})).catch((function(e){console.log(e)}))}catch(i){console.log(i)}}},d=function(e){return function(t){t({type:i.yd});try{Object(a.a)("https://prodservice.bookeinstein.com","GET","orders-service/bulk/".concat(e),!0).then((function(e){t(function(e){return{type:i.zd,payload:e}}({bulkData:e}))})).catch((function(e){t(l(e))}))}catch(c){t(l("Something went wrong"))}}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(c){c({type:i.K});try{Object(a.a)("https://prodservice.bookeinstein.com","GET","orders-service/bulk?pageNumber=".concat(t,"&pageSize=").concat(e),!0).then((function(e){c(function(e){return{type:i.L,payload:e}}({allBulkData:e}))})).catch((function(e){c(s(e))}))}catch(n){c(s("Something went wrong"))}}}},963:function(e,t,c){"use strict";var a=c(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(c(50)),i=c(1),l=(0,n.default)((0,i.jsx)("path",{d:"M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"}),"Update");t.default=l},971:function(e,t,c){"use strict";c.d(t,"a",(function(){return T}));var a=c(7),n=c(0),i=c(11),l=c(43),s=c(38),r=c(85),o=c(64),d=c.n(o),j=c(21),u=c(140),b=c(175),O=c(938),h=c(34),v=c(740),x=c(898),m=c(158),p=c(741),f=c(899),g=c(20),k=c(474),D=c(343),N=c(900),y=c(119),S=(c(42),c(9)),A=c(29),E=c.n(A),I=c(1),C=[{id:0,status:"RETURNED"},{id:1,status:"EXTENDED"},{id:2,status:"REPLACED"},{id:3,status:"LOST"},{id:4,status:"DELIVERED"},{id:5,status:"CANCELLED"},{id:6,status:"PARTIAL_RETURNED"}],R=(E.a.get("token"),s.d({orderStatus:s.f().required("Order Status is required")}));function T(e){var t=e.isOpen,c=e.setOpen,s=(e.profileId,e.bookId),o=e.orderId,A=e.isBulk,E=e.isData,T=Object(u.a)(),L=Object(j.b)(),B=Object(n.useState)("RETURNED"),U=Object(a.a)(B,2),M=U[0],P=U[1],_=Object(n.useState)(""),w=Object(a.a)(_,2),W=w[0],H=w[1],Q=Object(l.f)({mode:"onChange",resolver:Object(r.a)(R),defaultValues:{orderStatus:"RETURNED"}}),z=(Q.reset,Q.handleSubmit),V=function(){c(!1)},q=function(){return new Promise((function(e,t){Object(i.a)("https://prodservice.bookeinstein.com","POST","orders-service/orders/".concat(o,"/books/").concat(s,"/return?returnBookStatus=").concat(M,"&receivedQuantity=").concat(W),{},!0).then((function(t){var c,a;e(t),L(Object(S.b)(null!==t&&void 0!==t&&null!==(c=t.data)&&void 0!==c&&c.message?null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message:"Successfull !!")),L(Object(b.f)(o)),V()})).catch((function(e){var c;t(e),L(Object(S.b)(null===e||void 0===e||null===(c=e.data)||void 0===c?void 0:c.message))}))}))};return Object(I.jsx)("div",{children:Object(I.jsxs)(v.a,{open:t,classes:{paper:T.dialog},children:[Object(I.jsx)(x.a,{className:T.dialogTitle,children:Object(I.jsxs)("div",{className:T.dialogTitleChild,children:[Object(I.jsx)(m.a,{style:{fontSize:"20px"},children:" Update Book Status "}),Object(I.jsx)(p.a,{to:"#",onClick:V,children:Object(I.jsx)(d.a,{className:T.closeIcon})})]})}),Object(I.jsxs)(h.a,{methods:Q,onSubmit:z((function(){if(A){var e={bulkReturnBookStatus:M,orderBookIds:o};L(Object(O.a)(e,(function(){L(Object(b.b)())}))),V()}else q(M)})),children:[Object(I.jsx)(f.a,{children:Object(I.jsxs)(g.a,{container:!0,children:[Object(I.jsxs)(g.a,{item:!0,xs:12,children:[Object(I.jsxs)("label",{children:["Status ",Object(I.jsx)("span",{className:T.mandatory,children:"*"})]}),Object(I.jsxs)(h.c,{name:"orderStatus",label:"",onChange:function(t){P(t.target.value),H("PARTIAL_RETURNED"===M?0:e.isData)},value:M,children:[Object(I.jsx)("option",{value:"",children:"Select Status"}),null===C||void 0===C?void 0:C.map((function(e,t){return A&&"PARTIAL_RETURNED"===e.status?null:Object(I.jsx)("option",{value:null===e||void 0===e?void 0:e.status,children:null===e||void 0===e?void 0:e.status},t)}))]})]}),"\xa0",(E||0===E)&&Object(I.jsxs)(g.a,{item:!0,xs:12,children:[Object(I.jsxs)("label",{children:["Lost Book Quantity ",Object(I.jsx)("span",{className:T.mandatory,children:"*"})]}),Object(I.jsx)(k.a,{type:"number",name:"quantity",label:"",value:W,fullWidth:!0,required:!0,disabled:"PARTIAL_RETURNED"!==M,onChange:function(e){return H(e.target.value)}})]})]})}),Object(I.jsx)(D.a,{style:{marginTop:15}}),Object(I.jsxs)(N.a,{className:T.dialogAction,children:[Object(I.jsx)(y.a,{variant:"outlined",color:"secondary",className:T.buttonCancel,onClick:V,children:"Close"}),Object(I.jsx)(y.a,{variant:"contained",type:"submit",className:T.buttonSubmit,children:"Update"})]})]})]})})}}}]);
//# sourceMappingURL=36.7907be34.chunk.js.map