(this["webpackJsonpbookeinstein-app"]=this["webpackJsonpbookeinstein-app"]||[]).push([[44],{1069:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var o=n(16),c=n(28),i=n(7),a=n(0),s=n(38),r=n(43),l=n(85),d=n(21),u=n(175),b=n(54),p=n(750),j=n(342),f=n(935),v=n(745),O=n(222),h=n(20),x=n(65),m=n(223),g=n(474),w=n(119),y=n(477),D=n(746),k=n(747),A=n(748),S=n(113),E=n(749),T=n(158),P=n(738),B=n(96),C=n.n(B),I=n(62),N=n(46),R=n(26),L=n(34),M=n(1),U=Object(p.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(v.a),z=s.d({startDeliveryDate:s.f().required("Start Date is required"),endDeliveryDate:s.f().required("End Date is required")});function H(){Object(N.a)({roleList:["ADMIN","SCHOOL_ADMIN","SUPER_ADMIN"]});var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],p=Object(a.useState)((new Date).toISOString().substring(0,10)),B=Object(i.a)(p,2),H=B[0],q=B[1],V=Object(a.useState)((new Date).toISOString().substring(0,10)),F=Object(i.a)(V,2),_=F[0],G=F[1],J=Object(a.useState)(!1),W=Object(i.a)(J,2),X=(W[0],W[1]),K=Object(I.a)(),Q=Object(d.b)(),Y=Object(j.a)(),Z=Object(a.useState)(0),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(25),oe=Object(i.a)(ne,2),ce=oe[0],ie=oe[1],ae=Object(d.c)((function(e){return null===e||void 0===e?void 0:e.order})),se=ae.pendingBookData,re=ae.loading,le=null===se||void 0===se?void 0:se.content,de=Object(a.useState)(!1),ue=Object(i.a)(de,2),be=ue[0],pe=ue[1],je=Object(r.f)({mode:"onChange",resolver:Object(l.a)(z),defaultValues:{startDeliveryDate:"",endDeliveryDate:""}}),fe=je.handleSubmit,ve=function(){var e=Object(c.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe(!0),t=null===le||void 0===le?void 0:le.map((function(e){return null===e||void 0===e?void 0:e.orderBookId})),e.next=4,Object(f.d)(t).then((function(e){})).catch((function(e){X(!0),console.log(e)})).finally((function(){pe(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe={someDate:(new Date).toISOString().substring(0,10)};Object(a.useEffect)((function(){try{Q(Object(u.c)(n||"",H,_,ee+1,ce))}catch(e){console.error(e)}}),[n,H,_,ee,ce]);var he=function(){var e=Object(c.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q(Object(u.c)(n||"",H,_,ee+1,ce));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(b.a,{children:[Object(M.jsxs)("div",{className:K.titleContainer,children:[Object(M.jsx)(C.a,{className:K.viewIcon}),Object(M.jsx)("span",{className:K.pageTitle,children:"\xa0 Pending Books "})]}),Object(M.jsxs)(O.a,{elevation:5,className:K.root,children:[Object(M.jsxs)(h.a,{container:!0,spacing:2,style:{display:"flex",justifyContent:"space-between"},children:[Object(M.jsx)(h.a,{item:!0,xs:12,sm:6,md:2,children:Object(M.jsx)(x.a,{className:K.searchControl,id:"input-search-header",value:n,onChange:function(e){return s(e.target.value)},placeholder:"Search",startAdornment:Object(M.jsx)(m.a,{position:"start",children:Object(M.jsx)(R.U,{stroke:1.5,size:"1rem",className:K.startAdornment})})})}),Object(M.jsx)(h.a,{item:!0,xs:12,sm:4,md:6,children:Object(M.jsx)(L.a,{methods:je,onSubmit:fe(he),children:Object(M.jsxs)(h.a,{style:{display:"flex"},children:[Object(M.jsxs)("div",{children:["From: \xa0",Object(M.jsx)(g.a,{type:"date",name:"startDeliveryDate",defaultValue:Oe.someDate,onChange:function(e){return q(e.target.value)}}),"\xa0 To: \xa0",Object(M.jsx)(g.a,{type:"date",name:"endDeliveryDate",defaultValue:Oe.someDate,onChange:function(e){return G(e.target.value)}})]}),"\xa0\xa0 \xa0\xa0",Object(M.jsx)("div",{children:Object(M.jsx)(w.a,{variant:"contained",className:K.btn,onClick:he,type:"submit",style:{alignItems:"center"},children:"View"})})]})})}),Object(M.jsx)(h.a,{item:!0,xs:12,sm:4,md:4,style:{display:"flex",justifyContent:"space-around"},children:Object(M.jsx)(w.a,{variant:"contained",color:"primary",style:{boxShadow:"0 0.5em 0.5em 0.1em secondary",marginBottom:"50px"},onClick:ve,disabled:be,children:be?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(y.a,{size:24,color:"secondary"})," Downloading..."]}):"Export"})})]}),Object(M.jsx)(D.a,{className:K.tableContainer,children:Object(M.jsxs)(k.a,{className:K.table,"aria-label":"simple table",children:[Object(M.jsx)(A.a,{className:K.tableHeaderCell,children:Object(M.jsxs)(U,{children:[Object(M.jsx)(S.a,{align:"center",children:" Sl. No. "}),Object(M.jsx)(S.a,{children:" Customer Details "}),Object(M.jsx)(S.a,{children:" Deliver Status "}),Object(M.jsx)(S.a,{children:" Book Details "}),Object(M.jsx)(S.a,{align:"center",children:" Pickup Date "}),Object(M.jsx)(S.a,{align:"center",children:" Status "})]})}),Object(M.jsx)(E.a,{children:re?Object(M.jsx)(v.a,{children:Object(M.jsx)(S.a,{colSpan:10,align:"center",children:Object(M.jsx)(y.a,{})})}):le?null===le||void 0===le?void 0:le.map((function(e){var t,n,o;return Object(M.jsxs)(U,{children:[Object(M.jsxs)(S.a,{align:"center",children:[" ",null===e||void 0===e?void 0:e.serial," "]}),Object(M.jsxs)(S.a,{style:{fontSize:"15px"},children:[(null===e||void 0===e?void 0:e.firstName)+" "+(null===e||void 0===e?void 0:e.lastName)+" ( ",Object(M.jsxs)("b",{children:["ID - ",null===e||void 0===e?void 0:e.profileId]})," )",Object(M.jsx)("br",{}),Object(M.jsx)("b",{children:" Plan Detail \xa0-\xa0"})," ",(null===e||void 0===e?void 0:e.planName)+" | "+(null===e||void 0===e?void 0:e.pricePaid),Object(M.jsx)("br",{}),(null===e||void 0===e?void 0:e.startDate)+" - "+(null===e||void 0===e?void 0:e.endDate)]}),Object(M.jsxs)(S.a,{children:[" ",Object(M.jsxs)("b",{children:[null===e||void 0===e?void 0:e.addressType," "]}),Object(M.jsx)("br",{}),""!==(null===e||void 0===e?void 0:e.section)?"Section - "+(null===e||void 0===e?void 0:e.section):"",Object(M.jsx)("br",{}),""!==(null===e||void 0===e?void 0:e.classAnd)?"Grade - "+(null===e||void 0===e?void 0:e.classAnd):""]}),Object(M.jsxs)(S.a,{children:[" ",Object(M.jsxs)("b",{children:[null===e||void 0===e||null===(t=e.bookDetail)||void 0===t?void 0:t.title," "]}),Object(M.jsx)("br",{}),"Shelf Id - "+(null===e||void 0===e||null===(n=e.bookDetail)||void 0===n?void 0:n.shelfId),Object(M.jsx)("br",{}),"Isbn - "+(null===e||void 0===e||null===(o=e.bookDetail)||void 0===o?void 0:o.isbn)]}),Object(M.jsxs)(S.a,{align:"center",children:[" ",null===e||void 0===e?void 0:e.dueDate," "]}),Object(M.jsx)(S.a,{align:"center",children:Object(M.jsx)(T.a,{className:K.status,style:{backgroundColor:"NEW"===(null===e||void 0===e?void 0:e.status)&&Y.palette.warning.dark||"CANCELLED"===(null===e||void 0===e?void 0:e.status)&&Y.palette.error.dark||"DELIVERED"===(null===e||void 0===e?void 0:e.status)&&Y.palette.success.dark},children:"RETURNED"===(null===e||void 0===e?void 0:e.status)?"RECEIVED":null===e||void 0===e?void 0:e.status})})]},null===e||void 0===e?void 0:e.id)})):Object(M.jsx)(v.a,{children:Object(M.jsx)(S.a,{colSpan:10,align:"center",children:Object(M.jsx)(T.a,{variant:"caption",children:"Sorry! No data available"})})})})]})}),Object(M.jsx)(P.a,{rowsPerPageOptions:[25,50,100],component:"div",count:(null===se||void 0===se?void 0:se.totalElements)||0,rowsPerPage:ce,page:ee,onPageChange:function(e,t){te(t)},onRowsPerPageChange:function(e){ie(+e.target.value),te(0)},sx:{".MuiTablePagination-displayedRows":{marginBottom:0},".MuiTablePagination-selectLabel":{marginBottom:0}}})]})]})})}},934:function(e,t,n){(function(n){var o,c,i;c=[],void 0===(i="function"===typeof(o=function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){r(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function c(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,n){var s=a.URL||a.webkitURL,r=document.createElement("a");t=t||e.name||"download",r.download=t,r.rel="noopener","string"==typeof e?(r.href=e,r.origin===location.origin?i(r):c(r.href)?o(e,t,n):i(r,r.target="_blank")):(r.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(r.href)}),4e4),setTimeout((function(){i(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,a),n);else if(c(e))o(e,n,a);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){i(s)}))}}:function(e,t,n,c){if((c=c||open("","_blank"))&&(c.document.title=c.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var i="application/octet-stream"===e.type,r=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&r||s)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),c?c.location.href=e:location=e,c=null},d.readAsDataURL(e)}else{var u=a.URL||a.webkitURL,b=u.createObjectURL(e);c?c.location=b:location.href=b,c=null,setTimeout((function(){u.revokeObjectURL(b)}),4e4)}});a.saveAs=r.saveAs=r,e.exports=r})?o.apply(t,c):o)||(e.exports=i)}).call(this,n(176))},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return p}));var o=n(11),c=n(934),i=n.n(c),a=function(e){return new Promise((function(t,n){Object(o.a)("http://localhost:8101","GET","users-service/users/users/export/excel?role=".concat(e),{},!0,{Accept:"*/*","Accept-Encoding":"gzip, deflate, br"},{responseType:"blob"}).then((function(e){i.a.saveAs(new Blob([e]),"excel.xlsx"),t(e)})).catch((function(e){n(e)}))}))},s=function(){return new Promise((function(e,t){Object(o.a)("http://localhost:8101","GET","users-service/users/users/export/excel",{},!0,{Accept:"*/*","Accept-Encoding":"gzip, deflate, br"},{responseType:"blob"}).then((function(t){i.a.saveAs(new Blob([t]),"users.xlsx"),e(t)})).catch((function(e){t(e)}))}))},r=function(e){return new Promise((function(t,n){Object(o.a)("https://prodservice.bookeinstein.com","POST","subscriptions-service/transactions/export/excel",{transactionIds:e},!0,{Accept:"*/*","Accept-Encoding":"gzip, deflate, br"},{responseType:"blob"}).then((function(e){i.a.saveAs(new Blob([e]),"transactions.xlsx"),t(e)})).catch((function(e){n(e)}))}))},l=function(e){return new Promise((function(t,n){Object(o.a)("https://prodservice.bookeinstein.com","POST","subscriptions-service/transactions/module/export/excel",{transactionIds:e},!0,{Accept:"*/*","Accept-Encoding":"gzip, deflate, br"},{responseType:"blob"}).then((function(e){i.a.saveAs(new Blob([e]),"transactions.xlsx"),t(e)})).catch((function(e){n(e)}))}))},d=function(e){return new Promise((function(t,n){Object(o.a)("http://localhost:8102","POST","books-service/books/export/excel",{bookIds:e},!0,{Accept:"*/*","Accept-Encoding":"gzip, deflate, br"},{responseType:"blob"}).then((function(e){i.a.saveAs(new Blob([e]),"books.xlsx"),t(e)})).catch((function(e){n(e)}))}))},u=function(e){return new Promise((function(t,n){Object(o.a)("https://prodservice.bookeinstein.com","POST","orders-service/orders/export/excel",{orderIds:e},!0,{Accept:"*/*","Accept-Encoding":"gzip, deflate, br"},{responseType:"blob"}).then((function(e){i.a.saveAs(new Blob([e]),"orders.xlsx"),t(e)})).catch((function(e){n(e)}))}))},b=function(e){return new Promise((function(t,n){Object(o.a)("https://prodservice.bookeinstein.com","POST","orders-service/orders/books/export/excel",{orderBookIds:e},!0,{Accept:"*/*","Accept-Encoding":"gzip, deflate, br"},{responseType:"blob"}).then((function(e){i.a.saveAs(new Blob([e]),"order-books.xlsx"),t(e)})).catch((function(e){n(e)}))}))},p=function(e){return new Promise((function(t,n){Object(o.a)("https://prodservice.bookeinstein.com","POST","subscriptions-service/plan-subscriptions/export/excel",{subscriptionIds:e},!0,{Accept:"*/*","Accept-Encoding":"gzip, deflate, br"},{responseType:"blob"}).then((function(e){i.a.saveAs(new Blob([e]),"subscriptions.xlsx"),t(e)})).catch((function(e){n(e)}))}))}}}]);
//# sourceMappingURL=44.affde280.chunk.js.map