(this["webpackJsonpbookeinstein-app"]=this["webpackJsonpbookeinstein-app"]||[]).push([[37],{1138:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ie}));var c=n(16),o=n(4),i=n(28),a=n(7),s=n(0),r=n(54),l=n(173),u=n(21),d=n(946),b=n(750),j=n(745),v=n(222),f=n(20),O=n(65),h=n(223),p=n(119),m=n(746),g=n(747),x=n(748),y=n(113),A=n(749),w=n(742),q=n(346),k=n(738),N=n(26),S=n(936),Q=n.n(S),C=n(980),P=n.n(C),T=n(40),U=n(288),E=n.n(U),D=n(289),I=n.n(D),L=n(96),z=n.n(L),F=n(43),M=n(85),_=n(34),R=n(38),V=n(64),G=n.n(V),B=n(740),H=n(898),J=n(158),K=n(741),W=n(899),X=n(343),Y=n(900),Z=n(140),$=n(1),ee=R.d({question:R.f("Enter Question here").required("Question is required"),answer:R.f("Enter Answer").required("Answer is required")});function te(e){var t=e.openAddUpdateQAs,n=e.setOpenAddUpdateQAs,c=e.isEditData,o=e.QAId,i=Object(Z.a)(),a=Object(u.b)(),s={question:(null===c||void 0===c?void 0:c.question)||"",answer:(null===c||void 0===c?void 0:c.answer)||""},r=Object(F.f)({mode:"onChange",resolver:Object(M.a)(ee),defaultValues:s}),l=r.reset,b=r.handleSubmit,j=function(){n(!1),l()};return Object($.jsx)("div",{children:Object($.jsxs)(B.a,{open:t,classes:{paper:i.dialog},children:[Object($.jsx)(H.a,{className:i.dialogTitle,children:Object($.jsxs)("div",{className:i.dialogTitleChild,children:[Object($.jsx)(J.a,{style:{fontSize:"20px"},children:c?"Update QA":"Add QA"}),Object($.jsx)(K.a,{to:"#",onClick:j,children:Object($.jsx)(G.a,{className:i.closeIcon})})]})}),Object($.jsxs)(_.a,{methods:r,onSubmit:b((function(e){var t={question:null===e||void 0===e?void 0:e.question,answer:null===e||void 0===e?void 0:e.answer};c?(a(Object(d.l)(t,c.id,(function(){a(Object(d.g)(o))}))),j()):(a(Object(d.d)(t,o,(function(){a(Object(d.g)(o))}))),j())})),children:[Object($.jsx)(W.a,{children:Object($.jsxs)(f.a,{container:!0,spacing:2,children:[Object($.jsxs)(f.a,{item:!0,xs:12,sm:6,children:[Object($.jsxs)("label",{className:i.label,children:["Question ",Object($.jsx)("span",{className:i.mandatory,children:" * "})]}),Object($.jsx)(_.d,{name:"question",placeholder:"Question here",className:i.textField,autoFocus:!0})]}),Object($.jsxs)(f.a,{item:!0,xs:12,sm:6,children:[Object($.jsxs)("label",{className:i.label,children:["Answer ",Object($.jsx)("span",{className:i.mandatory,children:" * "})]}),Object($.jsx)(_.d,{name:"answer",placeholder:"Answer Here",className:i.textField})]})]})}),Object($.jsx)(X.a,{style:{marginTop:15}}),Object($.jsxs)(Y.a,{className:i.dialogAction,children:[Object($.jsx)(p.a,{variant:"outlined",color:"primary",className:i.buttonCancel,onClick:j,children:"Close"}),Object($.jsx)(p.a,{variant:"contained",color:"primary",type:"submit",className:i.buttonSubmit,children:c?"Update":"Add"})]})]})]})})}var ne=n(62),ce=n(46),oe=Object(b.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(j.a);function ie(){var e=Object(ne.a)();Object(ce.a)({roleList:["ADMIN","SUPER_ADMIN"]});var t=Object(u.b)(),n=Object(T.i)().id,b=Object(s.useState)(""),j=Object(a.a)(b,2),S=j[0],C=j[1],U=Object(s.useState)(!1),D=Object(a.a)(U,2),L=D[0],F=D[1],M=Object(s.useState)(0),_=Object(a.a)(M,2),R=_[0],V=_[1],G=Object(s.useState)(10),B=Object(a.a)(G,2),H=B[0],J=B[1],K=Object(s.useState)({isOpen:!1,title:"",subTitle:""}),W=Object(a.a)(K,2),X=W[0],Y=W[1],Z=Object(s.useState)(null),ee=Object(a.a)(Z,2),ie=ee[0],ae=ee[1],se=Object(u.c)((function(e){return null===e||void 0===e?void 0:e.faq})).allQAs,re=null===se||void 0===se?void 0:se.content,le=function(){var e=Object(i.a)(Object(c.a)().mark((function e(i){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y(Object(o.a)(Object(o.a)({},X),{},{isOpen:!1})),t(Object(d.e)(i,(function(){t(Object(d.g)(n))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){t(Object(d.g)(n,H,S||"",R+1))}),[H,S,R]),Object($.jsx)($.Fragment,{children:Object($.jsxs)(r.a,{children:[Object($.jsxs)("div",{className:e.titleContainer,children:[Object($.jsx)(z.a,{className:e.viewIcon}),Object($.jsx)("span",{className:e.pageTitle,children:"\xa0 All QAs "})]}),Object($.jsxs)(v.a,{elevation:5,className:e.root,children:[Object($.jsxs)(f.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object($.jsx)("div",{children:Object($.jsx)(O.a,{className:e.searchControl,id:"input-search-header",value:S,onChange:function(e){return C(e.target.value)},placeholder:"Search on QUESTIONS",startAdornment:Object($.jsx)(h.a,{position:"start",children:Object($.jsx)(N.U,{stroke:1.5,size:"1rem",className:e.startAdornment})})})}),Object($.jsx)("div",{children:Object($.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){F(!0),ae(null)},className:e.btnAdd,children:"Add QAs"})})]}),Object($.jsx)(m.a,{className:e.tableContainer,children:Object($.jsxs)(g.a,{className:e.table,"aria-label":"simple table",children:[Object($.jsx)(x.a,{className:e.tableHeaderCell,children:Object($.jsxs)(oe,{children:[Object($.jsx)(y.a,{children:" Question "}),Object($.jsx)(y.a,{children:" Answer "}),Object($.jsx)(y.a,{align:"center",children:" Shift "}),Object($.jsx)(y.a,{align:"right",children:" Action "})]})}),re?Object($.jsx)(A.a,{children:null===re||void 0===re?void 0:re.map((function(e,c){return Object($.jsxs)(oe,{children:[Object($.jsxs)(y.a,{children:[" ",null===e||void 0===e?void 0:e.question," "]}),Object($.jsxs)(y.a,{children:[" ",null===e||void 0===e?void 0:e.answer," "]}),Object($.jsxs)(y.a,{align:"center",style:{cursor:"pointer"},children:[Object($.jsx)(Q.a,{onClick:function(){return c=null===e||void 0===e?void 0:e.id,void t(Object(d.j)(c,(function(){t(Object(d.g)(n))})));var c}}),Object($.jsx)(P.a,{onClick:function(){return c=null===e||void 0===e?void 0:e.id,void t(Object(d.i)(c,(function(){t(Object(d.g)(n))})));var c}})]}),Object($.jsxs)(y.a,{align:"right",children:[Object($.jsx)(w.a,{title:"Update QA",children:Object($.jsx)(q.a,{onClick:function(){return function(e){F(!0),ae(e)}(e)},children:Object($.jsx)(E.a,{color:"primary",style:{cursor:"pointer"}})})}),Object($.jsx)(q.a,{onClick:function(){Y({isOpen:!0,title:"Delete QA",subTitle:"Are you sure you want to delete this QA.",onConfirm:function(){le(null===e||void 0===e?void 0:e.id)}})},children:Object($.jsx)(I.a,{color:"error",style:{cursor:"pointer"}})})]})]},c)}))}):Object($.jsx)("caption",{style:{textAlign:"center"},children:" Sorry! No data available "})]})}),Object($.jsx)(k.a,{rowsPerPageOptions:[10,15,25],component:"div",count:(null===se||void 0===se?void 0:se.totalElements)||0,rowsPerPage:H,page:R,onPageChange:function(e,t){V(t)},onRowsPerPageChange:function(e){J(+e.target.value)},sx:{".MuiTablePagination-displayedRows":{marginBottom:0},".MuiTablePagination-selectLabel":{marginBottom:0}}})]}),L&&Object($.jsx)(te,{openAddUpdateQAs:L,setOpenAddUpdateQAs:F,isEditData:ie,QAId:n}),X&&Object($.jsx)(l.a,{confirmDialog:X,setConfirmDialog:Y})]})})}},936:function(e,t,n){"use strict";var c=n(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(50)),i=n(1),a=(0,o.default)((0,i.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.default=a},946:function(e,t,n){"use strict";n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return j})),n.d(t,"k",(function(){return f})),n.d(t,"h",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"l",(function(){return O})),n.d(t,"j",(function(){return x})),n.d(t,"i",(function(){return y})),n.d(t,"e",(function(){return g}));var c=n(16),o=n(28),i=n(11),a=n(9),s=n(5),r=function(e){return{type:s.Pd,error:e}},l=function(e){return{type:s.nb,error:e}},u=function(e){return{type:s.mc,error:e}},d=function(e,t){return function(n){try{Object(i.a)("https://prodservice.bookeinstein.com","POST","documents-service/faqs-service/faq-categories",e,!0).then((function(e){n(Object(a.b)(null===e||void 0===e?void 0:e.message)),t&&t(e)})).catch((function(e){var t;console.log(e),n(Object(a.b)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message))}))}catch(c){console.log(c)}}},b=function(e,t){return function(n){try{Object(i.a)("https://prodservice.bookeinstein.com","POST","subscriptions-service/module-subscriptions",e,!0).then((function(e){n(Object(a.b)(null===e||void 0===e?void 0:e.message)),t&&t(e)})).catch((function(e){var t;n(Object(a.b)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message))}))}catch(c){console.log(c)}}},j=function(e,t){return function(){var n=Object(o.a)(Object(c.a)().mark((function n(o){var s,r;return Object(c.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(i.a)("https://prodservice.bookeinstein.com","POST","subscriptions-service/plan-subscriptions",e,!0);case 3:return s=n.sent,o(Object(a.b)(null===s||void 0===s?void 0:s.message)),t&&t(s),n.abrupt("return",s);case 9:throw n.prev=9,n.t0=n.catch(0),console.error(n.t0),o(Object(a.b)(null===n.t0||void 0===n.t0||null===(r=n.t0.data)||void 0===r?void 0:r.message)),n.t0;case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},v=function(e,t,n){return function(c){try{Object(i.a)("https://prodservice.bookeinstein.com","POST","documents-service/faqs-service/faqs/category/".concat(t),e,!0).then((function(e){c(Object(a.b)(null!==e&&void 0!==e&&e.message?null===e||void 0===e?void 0:e.message:"QA Added Successfully")),n&&n(e)})).catch((function(e){var t;console.log(e),c(Object(a.b)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message))}))}catch(o){console.log(o)}}},f=function(e,t,n){return function(c){try{Object(i.a)("https://prodservice.bookeinstein.com","PUT","documents-service/faqs-service/faq-categories/".concat(t),e,!0).then((function(e){e&&(c(Object(a.b)(null===e||void 0===e?void 0:e.message)),n&&n(e))})).catch((function(e){var t;console.log(e),c(Object(a.b)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message))}))}catch(o){console.log(o)}}},O=function(e,t,n){return function(c){try{Object(i.a)("https://prodservice.bookeinstein.com","PUT","documents-service/faqs-service/faqs/".concat(t),e,!0).then((function(e){e&&(c(Object(a.b)(null===e||void 0===e?void 0:e.message)),n&&n(e))})).catch((function(e){var t;console.log(e),c(Object(a.b)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message))}))}catch(o){console.log(o)}}},h=function(e,t){return function(n){n({type:s.Qd});try{Object(i.a)("https://prodservice.bookeinstein.com","GET","documents-service/faqs-service/faq-categories/".concat(e),!0).then((function(e){n(function(e){return{type:s.Rd,payload:e}}({getFAQData:e})),t&&t(e)})).catch((function(e){var t;n(r(e)),n(Object(a.b)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message))}))}catch(c){n(r("Something went wrong"))}}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(c){c({type:s.ob});try{Object(i.a)("https://prodservice.bookeinstein.com","GET","documents-service/faqs-service/faq-categories?pageNumber=".concat(n,"&pageSize=").concat(e,"&searchKey=").concat(t),!0).then((function(e){c(function(e){return{type:s.pb,payload:e}}({allFAQs:e}))})).catch((function(e){var t;c(l(e)),c(Object(a.b)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message))}))}catch(o){c(l("Something went wrong"))}}},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return function(o){o({type:s.nc});try{Object(i.a)("https://prodservice.bookeinstein.com","GET","documents-service/faqs-service/faqs/category/".concat(e,"?searchKey=").concat(n,"&pageNumber=").concat(c,"&pageSize=").concat(t),!0).then((function(e){o(function(e){return{type:s.oc,payload:e}}({allQAs:e}))})).catch((function(e){var t;o(u(e)),o(Object(a.b)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message))}))}catch(r){o(u("Something went wrong"))}}},g=function(e,t){return function(n){try{Object(i.a)("https://prodservice.bookeinstein.com","DELETE","documents-service/faqs-service/faqs/".concat(e),!0).then((function(e){n(Object(a.b)("QA Deleted Successfully")),t&&t(e)})).catch((function(e){console.log(e)}))}catch(c){console.log(c)}}},x=function(e,t){return function(n){try{Object(i.a)("https://prodservice.bookeinstein.com","PUT","documents-service/faqs-service/faqs/".concat(e,"/shift?shiftDown=false"),!0).then((function(e){n(Object(a.b)(null===e||void 0===e?void 0:e.message)),t&&t(e)})).catch((function(e){console.log(e)}))}catch(c){console.log(c)}}},y=function(e,t){return function(n){try{Object(i.a)("https://prodservice.bookeinstein.com","PUT","documents-service/faqs-service/faqs/".concat(e,"/shift?shiftDown=true"),!0).then((function(e){n(Object(a.b)(null===e||void 0===e?void 0:e.message)),t&&t(e)})).catch((function(e){console.log(e)}))}catch(c){console.log(c)}}}},980:function(e,t,n){"use strict";var c=n(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(50)),i=n(1),a=(0,o.default)((0,i.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=a}}]);
//# sourceMappingURL=37.b8e705e2.chunk.js.map