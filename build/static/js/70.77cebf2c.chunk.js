(this["webpackJsonpbookeinstein-app"]=this["webpackJsonpbookeinstein-app"]||[]).push([[70],{1064:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var a=n(7),c=n(0),i=n(54),s=n(21),l=n(750),o=n(342),r=n(290),j=n.n(r),d=n(745),b=n(222),u=n(20),O=n(65),h=n(223),v=n(746),x=n(747),g=n(748),f=n(113),p=n(749),m=n(158),k=n(742),C=n(346),N=n(738),P=n(26),I=n(96),S=n.n(I),w=n(173),D=n(968),y=n(62),T=n(82),A=(n(71),n(40)),B=n(69),E=n(1),U=Object(l.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:e.palette.action.hover}}}}))(d.a);function z(){var e,t=Object(y.a)(),n=Object(s.b)(),l=Object(o.a)(),r=(Object(A.g)(),Object(c.useState)(!1)),d=Object(a.a)(r,2),I=d[0],z=d[1],H=Object(c.useState)(0),J=Object(a.a)(H,2),M=J[0],R=J[1],V=Object(c.useState)(25),F=Object(a.a)(V,2),G=F[0],L=F[1],q=Object(s.c)((function(e){return e.books})).allBooks,K=Object(c.useState)(""),Q=Object(a.a)(K,2),W=Q[0],X=Q[1],Y=Object(c.useState)([]),Z=Object(a.a)(Y,2),$=(Z[0],Z[1],Object(s.c)((function(e){return null===e||void 0===e?void 0:e.userProfile})).loggedUserProfile),_=null===$||void 0===$?void 0:$.profileId,ee=Object(c.useState)({isOpen:!1,title:"",subTitle:""}),te=Object(a.a)(ee,2),ne=te[0],ae=te[1];return Object(c.useEffect)((function(){n(Object(T.b)(W||"",M+1,G))}),[G,W,M]),Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(i.a,{children:[Object(E.jsxs)("div",{className:t.titleContainer,children:[Object(E.jsx)(S.a,{className:t.viewIcon}),Object(E.jsx)("span",{className:t.pageTitle,children:"\xa0 All Books "})]}),Object(E.jsxs)(b.a,{elevation:5,className:t.root,children:[Object(E.jsx)(u.a,{container:!0,spacing:3,children:Object(E.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(O.a,{className:t.searchControl,id:"input-search-header",value:W,onChange:function(e){return function(e){X(e.target.value),R(0)}(e)},placeholder:"Search",startAdornment:Object(E.jsx)(h.a,{position:"start",children:Object(E.jsx)(P.U,{stroke:1.5,size:"1rem",className:t.startAdornment})})})})}),Object(E.jsx)(v.a,{className:t.tableContainer,children:Object(E.jsxs)(x.a,{className:t.table,"aria-label":"simple table",children:[Object(E.jsx)(g.a,{className:t.tableHeaderCell,children:Object(E.jsxs)(U,{children:[Object(E.jsx)(f.a,{children:" Cover "}),Object(E.jsx)(f.a,{children:" Title "}),Object(E.jsx)(f.a,{children:" Author "}),Object(E.jsx)(f.a,{children:" Publisher "}),Object(E.jsx)(f.a,{children:" Isbn No. "}),Object(E.jsx)(f.a,{align:"center",children:" Shelf No. "}),Object(E.jsx)(f.a,{align:"center",children:" Status "}),Object(E.jsx)(f.a,{align:"right",children:" Cart "})]})}),Object(E.jsx)(p.a,{children:null===q||void 0===q||null===(e=q.content)||void 0===e?void 0:e.map((function(e,a){var c;"enhanced-table-checkbox-".concat(a);return Object(E.jsxs)(U,{children:[Object(E.jsx)(f.a,{children:Object(E.jsx)("img",{src:null===e||void 0===e||null===(c=e.imageUrls)||void 0===c?void 0:c[0],alt:"book",width:"60px",height:100})}),Object(E.jsxs)(f.a,{children:[" ",null===e||void 0===e?void 0:e.title," "]}),Object(E.jsxs)(f.a,{children:[" ",null===e||void 0===e?void 0:e.author," "]}),Object(E.jsxs)(f.a,{children:[" ",null===e||void 0===e?void 0:e.publisher," "]}),Object(E.jsxs)(f.a,{children:[" ",null===e||void 0===e?void 0:e.isbn," "]}),Object(E.jsxs)(f.a,{align:"center",children:[" ",null===e||void 0===e?void 0:e.shelfId," "]}),Object(E.jsx)(f.a,{align:"center",children:Object(E.jsx)(m.a,{className:t.status,style:{backgroundColor:"ACTIVE"===(null===e||void 0===e?void 0:e.status)&&l.palette.success.main||"PENDING"===(null===e||void 0===e?void 0:e.status)&&"blue"||"INACTIVE"===(null===e||void 0===e?void 0:e.status)&&l.palette.warning.dark},children:null===e||void 0===e?void 0:e.status})}),Object(E.jsx)(f.a,{align:"right",children:Object(E.jsx)(k.a,{title:"Cart Book",children:Object(E.jsx)(C.a,{children:Object(E.jsx)(j.a,{color:"primary",style:{cursor:"pointer"},onClick:function(){return function(e){var t={bookId:e};n(Object(B.b)(t,_))}(null===e||void 0===e?void 0:e.id)}})})})})]},null===e||void 0===e?void 0:e.id)}))})]})}),Object(E.jsx)(N.a,{rowsPerPageOptions:[25,50,100],component:"div",count:(null===q||void 0===q?void 0:q.totalElements)||0,rowsPerPage:G,page:M,onPageChange:function(e,t){R(t)},onRowsPerPageChange:function(e){L(+e.target.value)},sx:{".MuiTablePagination-displayedRows":{marginBottom:0},".MuiTablePagination-selectLabel":{marginBottom:0}}})]}),ne&&Object(E.jsx)(w.a,{confirmDialog:ne,setConfirmDialog:ae}),Object(E.jsx)(D.a,{isDeleted:I,setIsDeleted:z,message:"Book Deleted Successfully"})]})})}},968:function(e,t,n){"use strict";var a=n(1105),c=n(1104),i=n(342),s=n(1);t.a=function(e){var t=e.isDeleted,n=e.setDeleted,l=e.message,o=Object(i.a)();return Object(s.jsx)(a.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:3e3,onClose:function(){return n(!1)},children:Object(s.jsx)(c.a,{onClose:function(){return n(!1)},severity:"info",style:{background:o.palette.info.dark,color:"#fff"},children:l})})}}}]);
//# sourceMappingURL=70.77cebf2c.chunk.js.map