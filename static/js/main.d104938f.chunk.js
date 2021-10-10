(this["webpackJsonpmaterial-ui-one"]=this["webpackJsonpmaterial-ui-one"]||[]).push([[0],{119:function(e,t,n){},128:function(e,t,n){},133:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(41),s=n.n(o),c=n(50),r=(n(119),n(16)),d=n(15),l=n(63),h=n(37),u=n(38),j=n(18),b=n(52),p=n(51),O=n(189),g=n(190),x=n(195),m=n(196),f=n(187),v=n(94),k=n.n(v),C=n(97),y=n.n(C),S=n(95),w=n.n(S),T=n(96),E=n.n(T),M=n(1),B=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={trashIsWarning:!1,isEditing:!1,todoValue:a.props.task,backButtonLit:!1},a.handleDelete=a.handleDelete.bind(Object(j.a)(a)),a.shadeRed=a.shadeRed.bind(Object(j.a)(a)),a.shadeBlue=a.shadeBlue.bind(Object(j.a)(a)),a.toggleEditMode=a.toggleEditMode.bind(Object(j.a)(a)),a.handleSubmitChange=a.handleSubmitChange.bind(Object(j.a)(a)),a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.shadeGreen=a.shadeGreen.bind(Object(j.a)(a)),a.shadeNotGreen=a.shadeNotGreen.bind(Object(j.a)(a)),a.handleSwitch=a.handleSwitch.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"handleSwitch",value:function(){this.props.toggleCompleted(this.props.id,this.props.completed)}},{key:"shadeNotGreen",value:function(){this.setState({backButtonLit:!1})}},{key:"shadeGreen",value:function(){this.setState({backButtonLit:!0})}},{key:"handleChange",value:function(e){this.setState((function(t){return{todoValue:e.target.value}}))}},{key:"handleSubmitChange",value:function(e){e.preventDefault(),this.props.alterTodo(this.props.id,this.state.todoValue),this.setState({isEditing:!1})}},{key:"toggleEditMode",value:function(){this.setState((function(e){return{isEditing:!e.isEditing}}))}},{key:"shadeBlue",value:function(){this.setState({trashIsWarning:!1})}},{key:"shadeRed",value:function(){this.setState({trashIsWarning:!0})}},{key:"handleDelete",value:function(){this.props.delete(this.props.id)}},{key:"render",value:function(){return Object(M.jsx)(O.a,{marginTop:"18px",marginBottom:"11px",container:!0,justifyContent:"flex-end",spacing:0,direction:"column",alignItems:"center",children:Object(M.jsx)(g.a,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center"},children:Object(M.jsx)(g.a,{sx:{display:"flex",justifyContent:"space-between",width:{md:300,lg:400,xl:500},pt:1,pb:1,pl:1,pr:1,border:.5,borderRadius:3,borderColor:"blueviolet"},children:Object(M.jsxs)(x.a,{sx:{display:"flex",justifyContent:"space-between"},children:[this.state.isEditing?Object(M.jsx)("form",{children:Object(M.jsx)(m.a,{value:this.state.todoValue,name:"change",onChange:this.handleChange,sx:{paddingTop:.5}})}):Object(M.jsx)(O.a,{sx:this.props.completed?{textDecoration:"line-through"}:"",children:this.props.task}),this.state.isEditing?Object(M.jsxs)(O.a,{children:[Object(M.jsx)(O.a,{hover:!0,children:Object(M.jsx)(E.a,{color:this.state.backButtonLit?"success":"",onMouseEnter:this.shadeGreen,onMouseLeave:this.shadeNotGreen,onClick:this.toggleEditMode})}),Object(M.jsx)(O.a,{hover:!0,children:Object(M.jsx)(y.a,{sx:{paddingTop:1.4},color:this.state.trashIsWarning?"error":"seagreen",onMouseEnter:this.shadeRed,onMouseLeave:this.shadeBlue,onClick:this.handleSubmitChange})})]}):Object(M.jsxs)(O.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},hover:!0,children:[Object(M.jsx)(k.a,{color:this.state.trashIsWarning?"error":"secondary",onMouseEnter:this.shadeRed,onMouseLeave:this.shadeBlue,onClick:this.handleDelete}),Object(M.jsx)(w.a,{sx:{paddingBottom:.25,paddingLeft:1.5},fontSize:"inherit",color:"primary",onClick:this.toggleEditMode}),Object(M.jsx)(f.a,{size:"small",checked:this.props.completed,onChange:this.handleSwitch,inputProps:{"aria-label":"controlled"}})]})]})})})})}}]),n}(a.Component),I=n(13),L=n(183),z=n(198);function D(e){var t=Object(a.useState)(""),n=Object(I.a)(t,2),i=n[0],o=n[1];return Object(M.jsx)("div",{children:Object(M.jsxs)(O.a,{marginTop:"30px",container:!0,spacing:0,direction:"column",alignItems:"center",children:[Object(M.jsx)("form",{children:Object(M.jsx)(L.a,{onChange:function(e){o(e.target.value)},value:i,id:"standard-basic",label:"Create a to-do",color:"secondary"})}),Object(M.jsx)(z.a,{sx:{marginTop:1},onClick:function(t){t.preventDefault(),e.addTodo(e.id,i),o("")},variant:"outlined",children:"Submit"})]})})}var N=n(185),G=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={todos:JSON.parse(window.localStorage.getItem("todos")||"[]")},a.addTodo=a.addTodo.bind(Object(j.a)(a)),a.deleteThisTodo=a.deleteThisTodo.bind(Object(j.a)(a)),a.alterTodo=a.alterTodo.bind(Object(j.a)(a)),a.toggleCompleted=a.toggleCompleted.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"toggleCompleted",value:function(e,t){this.setState((function(n){return{todos:n.todos.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},{completed:!t}):n}))}}))}},{key:"alterTodo",value:function(e,t){var n=this;console.log(e,t),this.setState((function(a){return{todos:n.state.todos.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},{task:t}):n}))}}))}},{key:"deleteThisTodo",value:function(e){this.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))}},{key:"addTodo",value:function(e,t){if(t){var n={task:t,id:Object(N.a)(),completed:!1};this.setState((function(e){return{todos:[].concat(Object(d.a)(e.todos),[n])}}))}else alert("you must have something in your todo in order to submit")}},{key:"componentDidUpdate",value:function(){window.localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"componentDidMount",value:function(){console.log("mounted the component")}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return Object(M.jsx)(B,{delete:e.deleteThisTodo,id:t.id,task:t.task,completed:t.completed,toggleCompleted:e.toggleCompleted,alterTodo:e.alterTodo},t.id)}));return Object(M.jsx)("div",{children:Object(M.jsx)(O.a,{container:!0,spacing:2,children:Object(M.jsxs)(O.a,{item:!0,xs:12,md:12,children:[Object(M.jsx)(D,{addTodo:this.addTodo}),Object(M.jsx)(x.a,{children:t})]})})})}}]),n}(i.a.Component),R=n(3),P=(n(128),n(4)),W=n(178),F=n(191),J=n(192),V=n(193),A=n(194),U=n(21),q=n(186),H=n(104),K=n(98),Q=n.n(K),X=n(99),Y=n.n(X),Z=n(101),$=n.n(Z),_=n(102),ee=n.n(_),te=n(103),ne=n.n(te),ae=Object(P.a)("div")((function(e){var t=e.theme;return Object(R.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(W.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(W.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),ie=Object(P.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),oe=Object(P.a)(U.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(R.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}}));function se(){var e=a.useState(null),t=Object(I.a)(e,2),n=t[0],i=t[1],o=a.useState(null),s=Object(I.a)(o,2),r=s[0],d=s[1],l=Boolean(n),h=Boolean(r),u=function(){d(null)},j=function(){i(null),u()},b="primary-search-account-menu",p=Object(M.jsxs)(H.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:b,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:j,children:[Object(M.jsx)(q.a,{onClick:j,children:"Profile"}),Object(M.jsx)(q.a,{onClick:j,children:"My account"})]}),O="primary-search-account-menu-mobile",x=Object(M.jsx)(H.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},id:O,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:u});return Object(M.jsxs)(g.a,{sx:{flexGrow:1},children:[Object(M.jsx)(F.a,{position:"static",children:Object(M.jsxs)(J.a,{children:[Object(M.jsx)(V.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(M.jsx)(Q.a,{})}),Object(M.jsx)(A.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"Check it off!"}),Object(M.jsxs)(ae,{children:[Object(M.jsx)(ie,{children:Object(M.jsx)(Y.a,{})}),Object(M.jsx)(oe,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(M.jsx)(g.a,{sx:{flexGrow:1}}),Object(M.jsxs)(g.a,{sx:{display:{xs:"none",md:"flex"}},children:[Object(M.jsx)(V.a,{size:"large","aria-label":"show 4 new mails",color:"inherit"}),Object(M.jsx)(c.b,{className:"inactive-link",activeClassName:"active-link",to:"/about",children:Object(M.jsx)(V.a,{size:"large","aria-label":"show 0 new notifications",color:"inherit",children:Object(M.jsx)($.a,{})})}),Object(M.jsx)(c.b,{className:"inactive-link",activeClassName:"active-link",to:"/todos",children:Object(M.jsx)(V.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":b,"aria-haspopup":"true",color:"inherit",children:Object(M.jsx)(ee.a,{})})})]}),Object(M.jsx)(g.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(M.jsx)(V.a,{size:"large","aria-label":"show more","aria-controls":O,"aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit",children:Object(M.jsx)(ne.a,{})})})]})}),x,p]})}n(133);var ce=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(M.jsx)("div",{className:"About-container",children:Object(M.jsx)("h2",{children:"About Page"})})}}]),n}(a.Component);var re=function(){return Object(M.jsxs)("div",{children:[Object(M.jsx)(se,{sx:{height:400}}),Object(M.jsxs)(r.c,{children:[Object(M.jsx)(r.a,{exact:!0,path:"/todos",render:function(){return Object(M.jsx)(G,{})}}),Object(M.jsx)(r.a,{exact:!0,path:"/about",render:function(){return Object(M.jsx)(ce,{})}})]})]})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};s.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(c.a,{children:Object(M.jsx)(re,{})})}),document.getElementById("root")),de()}},[[135,1,2]]]);
//# sourceMappingURL=main.d104938f.chunk.js.map