(this["webpackJsonpbookeinstein-app"]=this["webpackJsonpbookeinstein-app"]||[]).push([[75],{1063:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var n=a(7),i=a(0),c=a(21),l=a(750),s=a(342),o=a(936),r=a.n(o),d=a(745),j=a(222),b=a(20),u=a(65),h=a(223),O=a(746),v=a(747),x=a(748),g=a(113),p=a(749),m=a(158),f=a(742),N=a(346),P=a(738),k=a(26),C=a(353),A=a(46),w=a(54),I=a(82),E=a(1),S=Object(l.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(d.a);function T(){var e;Object(A.a)({roleList:["ADMIN","SUPER_ADMIN"]});var t=Object(C.a)(),a=Object(c.b)(),l=Object(s.a)(),o=(Object(c.c)((function(e){return null===e||void 0===e?void 0:e.userProfile})).loggedUserProfile,Object(i.useState)(0)),d=Object(n.a)(o,2),T=d[0],y=d[1],B=Object(i.useState)(25),M=Object(n.a)(B,2),U=M[0],V=M[1],D=Object(c.c)((function(e){return e.books})).allBooks,L=Object(i.useState)(""),R=Object(n.a)(L,2),_=R[0],z=R[1];return Object(i.useEffect)((function(){a(Object(I.e)(_||"",T+1,U))}),[U,_,T]),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(w.a,{children:[Object(E.jsx)("div",{className:t.titleContainer,children:Object(E.jsx)("span",{className:t.pageTitle,children:"\xa0 All Deleted Books "})}),Object(E.jsxs)(j.a,{elevation:5,className:t.root,children:[Object(E.jsx)(b.a,{container:!0,spacing:3,children:Object(E.jsx)(b.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(u.a,{className:t.searchControl,id:"input-search-header",value:_,onChange:function(e){return function(e){z(e.target.value),y(0)}(e)},placeholder:"Search",startAdornment:Object(E.jsx)(h.a,{position:"start",children:Object(E.jsx)(k.U,{stroke:1.5,size:"1rem",className:t.startAdornment})})})})}),Object(E.jsx)(O.a,{className:t.tableContainer,children:Object(E.jsxs)(v.a,{className:t.table,"aria-label":"simple table",children:[Object(E.jsx)(x.a,{className:t.tableHeaderCell,children:Object(E.jsxs)(S,{children:[Object(E.jsx)(g.a,{children:" Cover "}),Object(E.jsx)(g.a,{children:" Title "}),Object(E.jsx)(g.a,{children:" Author "}),Object(E.jsx)(g.a,{children:" Publisher "}),Object(E.jsx)(g.a,{children:" Isbn No. "}),Object(E.jsx)(g.a,{align:"center",children:" Shelf No. "}),Object(E.jsx)(g.a,{align:"center",children:" Status "}),Object(E.jsx)(g.a,{align:"right",children:" Action "})]})}),Object(E.jsx)(p.a,{children:null===D||void 0===D||null===(e=D.content)||void 0===e?void 0:e.map((function(e,n){var i;return Object(E.jsxs)(S,{children:[Object(E.jsx)(g.a,{children:Object(E.jsx)("img",{src:null===e||void 0===e||null===(i=e.imageUrls)||void 0===i?void 0:i[0],alt:"book",width:"60px",height:100})}),Object(E.jsxs)(g.a,{children:[" ",null===e||void 0===e?void 0:e.title," "]}),Object(E.jsxs)(g.a,{children:[" ",null===e||void 0===e?void 0:e.author," "]}),Object(E.jsxs)(g.a,{children:[" ",null===e||void 0===e?void 0:e.publisher," "]}),Object(E.jsxs)(g.a,{children:[" ",null===e||void 0===e?void 0:e.isbn," "]}),Object(E.jsxs)(g.a,{align:"center",children:[" ",null===e||void 0===e?void 0:e.shelfId," "]}),Object(E.jsx)(g.a,{align:"center",children:Object(E.jsx)(m.a,{className:t.status,style:{backgroundColor:"ACTIVE"===(null===e||void 0===e?void 0:e.status)&&l.palette.success.main||"PENDING"===(null===e||void 0===e?void 0:e.status)&&"blue"||"INACTIVE"===(null===e||void 0===e?void 0:e.status)&&l.palette.warning.dark},children:null===e||void 0===e?void 0:e.status})}),Object(E.jsx)(g.a,{align:"center",children:Object(E.jsx)(f.a,{title:"Restore Book ",children:Object(E.jsx)(N.a,{onClick:function(){var t;t=null===e||void 0===e?void 0:e.id,a(Object(I.a)({status:"ACTIVE"},t,(function(){a(Object(I.e)(_||"",T+1,U))})))},children:Object(E.jsx)(r.a,{color:"primary",style:{cursor:"pointer"}})})})})]},null===e||void 0===e?void 0:e.id)}))})]})}),Object(E.jsx)(P.a,{rowsPerPageOptions:[25,50,100],component:"div",count:(null===D||void 0===D?void 0:D.totalElements)||0,rowsPerPage:U,page:T,onPageChange:function(e,t){y(t)},onRowsPerPageChange:function(e){V(+e.target.value)},sx:{".MuiTablePagination-displayedRows":{marginBottom:0},".MuiTablePagination-selectLabel":{marginBottom:0}}})]})]})})}},936:function(e,t,a){"use strict";var n=a(45);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(50)),c=a(1),l=(0,i.default)((0,c.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.default=l}}]);
//# sourceMappingURL=75.7d5898e3.chunk.js.map