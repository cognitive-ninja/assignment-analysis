(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(11),s=a.n(i),o=(a(104),a(74),a(152)),l=a(51),d=a(159),j=a(15),b=a(156),m=a(77),h=a.n(m),u=a(154),p=a(158),x=a(83),O=Object(o.a)((function(e){return{root:{color:"white"}}}));function g(){var e=O(),t=r.a.useState(null),a=Object(j.a)(t,2),c=a[0],i=a[1],s=Boolean(c),o=function(){i(null)};return Object(n.jsxs)(u.a,{container:!0,justify:"flex-end",children:[Object(n.jsx)(b.a,{className:e.root,"aria-label":"settings","aria-haspopup":"true","aria-controls":"menu-appbar",onClick:function(e){i(e.currentTarget)},children:Object(n.jsx)(h.a,{})}),Object(n.jsxs)(x.a,{id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:s,onClose:o,children:[Object(n.jsx)(p.a,{onClick:o,children:"Leave Class"}),Object(n.jsx)(p.a,{onClick:o,children:"Leave & Delete Class"})]})]})}var f=a(10),y=a(29),v=a.p+"static/media/classcard_back_2.2b8e1295.png",C=Object(o.a)((function(e){return{root:{minHeight:200,minWidth:350,marginLeft:40,marginTop:30,display:"inline-block",fontFamily:"Lucida","&:hover":{boxShadow:"1px 1px 15px rgba(0, 0, 0, 0.4)"},backgroundImage:"url('".concat(v,"')"),border:"7px solid #2E3B55",color:"white",textShadow:"3px 1px #2E3B55",borderRadius:"15px",padding:"20px",img:"width: 100%"},openButton:{marginTop:15,marginBottom:15,fontFamily:"Montserrat",backgroundColor:" rgba(0, 0, 0, 0.6)",color:"white"},content:{fontFamily:"Montserrat",fontWeight:"bold"},link:{textDecoration:"none"}}}));function S(){var e=C();return Object(n.jsx)(y.a.div,{children:Object(n.jsxs)("div",{style:{display:"inline-block"},children:[console.log("ClassCard Loaded"),Object(n.jsxs)(y.a.Card,{className:e.root,initial:{scale:0},animate:{rotate:360,scale:1},transition:{delay:.4,type:"spring",stiffness:260,damping:20},whileHover:{scale:1.1,delay:0},children:[Object(n.jsx)(g,{className:e.rightButton}),Object(n.jsxs)(l.a,{className:e.content,children:["Class: FYCSE",Object(n.jsx)("br",{}),"Class Teacher: Mr. K. V. Madhale"]}),Object(n.jsx)(f.b,{to:"/classes/FYCSE",className:e.link,children:Object(n.jsx)(d.a,{variant:"contained",size:"large",className:e.openButton,children:"Open"})})]}),Object(n.jsxs)(y.a.Card,{className:e.root,initial:{scale:0},animate:{rotate:360,scale:1},transition:{delay:.4,type:"spring",stiffness:260,damping:20},whileHover:{scale:1.1,delay:0},children:[Object(n.jsx)(g,{}),Object(n.jsxs)(l.a,{className:e.content,children:["Class: SYCSE",Object(n.jsx)("br",{}),"Class Teacher: Dr. N. L. Gavankar"]}),Object(n.jsx)(f.b,{to:"/classes/SYCSE",className:e.link,children:Object(n.jsx)(d.a,{variant:"contained",size:"large",className:e.openButton,children:"Open"})})]}),Object(n.jsxs)(y.a.Card,{className:e.root,initial:{scale:0},animate:{rotate:360,scale:1},transition:{delay:.4,type:"spring",stiffness:260,damping:20},whileHover:{scale:1.1,delay:0},children:[Object(n.jsx)(g,{}),Object(n.jsxs)(l.a,{className:e.content,children:["Class: TYCSE",Object(n.jsx)("br",{}),"Class Teacher: Mr. A. R. Surve"]}),Object(n.jsx)(f.b,{to:"/classes/TYCSE",className:e.link,children:Object(n.jsx)(d.a,{variant:"contained",size:"large",className:e.openButton,children:"Open"})})]})]})})}var N=a(12),w=a.p+"static/media/new_sub_back_3.0a4ec893.jpg",k=Object(c.createContext)(),F=function(e){var t=Object(c.useState)(!0),a=Object(j.a)(t,2),r=a[0],i=a[1];return Object(n.jsx)(k.Provider,{value:[r,i],children:e.children})},T=Object(o.a)((function(e){return{root:{minHeight:200,minWidth:350,marginLeft:40,marginTop:40,display:"inline-block",fontFamily:"Lucida","&:hover":{boxShadow:"1px 1px 15px rgba(0, 0, 0, 0.4)"},backgroundImage:"url('".concat(w,"')"),border:"7px solid #2E3B55",color:"white",textShadow:"1px 1px #2E3B55",borderRadius:"15px",padding:"20px",img:"width: 100%"},openButton:{marginTop:15,marginBottom:15,fontFamily:"Montserrat",backgroundColor:" rgba(0, 0, 0, 0.6)",color:"white"},content:{fontFamily:"Montserrat",fontWeight:"Normal",marginTop:50},link:{textDecoration:"none"}}}));function E(){var e=Object(c.useContext)(k),t=Object(j.a)(e,2),a=t[0],r=(t[1],T());return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{style:{display:"inline-block"},children:[console.log("SubjectCard Loaded"),Object(n.jsxs)(y.a.Card,{className:r.root,whileTap:{scale:.95},whileHover:{scale:.95},children:[Object(n.jsxs)(l.a,{className:r.content,children:["Subject: Chemistry",Object(n.jsx)("br",{}),"Subject Teacher: Mr. A. A. Powar"]}),a&&Object(n.jsx)(f.b,{to:"/postAssignment/classes/FYCSE/Chemistry",className:r.link,children:Object(n.jsx)(d.a,{variant:"contained",size:"large",className:r.openButton,children:"Open"})}),!a&&Object(n.jsx)(f.b,{to:"/submitAssignment/classes/FYCSE/Chemistry",className:r.link,children:Object(n.jsx)(d.a,{variant:"contained",size:"large",className:r.openButton,children:"Open"})})]}),Object(n.jsxs)(y.a.Card,{className:r.root,whileTap:{scale:.95},whileHover:{scale:.95},children:[Object(n.jsxs)(l.a,{className:r.content,children:["Subject: Mechanics",Object(n.jsx)("br",{}),"Subject Teacher: Mr. Pavan B."]}),Object(n.jsx)(f.b,{to:"/postAssignment/classes/FYCSE/Mechanics/",className:r.link,children:Object(n.jsx)(d.a,{variant:"contained",size:"large",className:r.openButton,children:"Open"})})]}),Object(n.jsxs)(y.a.Card,{className:r.root,whileTap:{scale:.95},whileHover:{scale:.95},children:[Object(n.jsxs)(l.a,{className:r.content,children:["Subject: Electronics",Object(n.jsx)("br",{}),"Subject Teacher: Mr. Narayan Marathe"]}),Object(n.jsx)(f.b,{to:"/postAssignment/classes/FYCSE/Electronics/",className:r.link,children:Object(n.jsx)(d.a,{variant:"contained",size:"large",className:r.openButton,children:"Open"})})]}),Object(n.jsxs)(y.a.Card,{className:r.root,whileTap:{scale:.95},whileHover:{scale:.95},children:[Object(n.jsxs)(l.a,{className:r.content,children:["Subject: C Programming Lab",Object(n.jsx)("br",{}),"Subject Teacher: Mr. Kiran Kamble"]}),Object(n.jsx)(f.b,{to:"/postAssignment/classes/FYCSE/CPL/",className:r.link,children:Object(n.jsx)(d.a,{variant:"contained",size:"large",className:r.openButton,children:"Open"})})]})]})})}var A=a(167);function B(){var e=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"50ch"},fontFamily:"Montserrat",backgroundColor:"rgb(233,215,195)"},input:{display:"none"},styling:{backgroundColor:"rgb(233,215,195)",height:"100vh"}}}))(),t=r.a.useRef(null);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("form",{className:e.styling,style:{fontFamily:"Montserrat",fontWeight:"Normal"},children:[Object(n.jsx)("h2",{children:"Post a new assignment"}),Object(n.jsxs)("label",{children:[Object(n.jsx)("p",{id:"uploaded",children:"Upload here:"}),Object(n.jsx)("input",{onChange:function(e){var t=Array.from(e.target.files);console.log("files:",t);var a=document.createElement("p"),n=document.createTextNode(t[0].name);a.appendChild(n),document.getElementById("uploaded").appendChild(a)},ref:t,type:"file",className:e.input,id:"contained-button-file",multiple:!0}),Object(n.jsx)("label",{htmlFor:"contained-button-file",children:Object(n.jsx)(d.a,{variant:"contained",color:"primary",component:"span",children:"Upload"})})]}),Object(n.jsx)("p",{children:"Add title and some description about assignment:"}),Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(A.a,{id:"standard-basic",label:"Title of an Assignment",required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(A.a,{id:"standard-basic",label:"Description of an Assignment",required:!0}),Object(n.jsx)("br",{})]}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{variant:"outlined",color:"secondary",type:"submit",value:"Submit",children:"Submit"}),Object(n.jsx)(d.a,{variant:"outlined",color:"secondary",type:"reset",value:"Reset",children:"Reset"})]})})}function M(){var e=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"50ch"},fontFamily:"Montserrat",backgroundColor:"rgb(233,215,195)"},input:{display:"none"},styling:{backgroundColor:"rgb(233,215,195)",height:"100vh"}}})),t=r.a.useRef(null);var a=e();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("form",{className:a.styling,style:{fontFamily:"Montserrat",fontWeight:"Normal"},children:[Object(n.jsx)("h2",{children:"Submit an Assignment"}),Object(n.jsxs)("label",{children:[Object(n.jsx)("p",{id:"uploaded",children:"Submit here:"}),Object(n.jsx)("input",{onChange:function(e){var t=Array.from(e.target.files);console.log("files:",t);var a=document.createElement("p"),n=document.createTextNode(t[0].name);a.appendChild(n),document.getElementById("uploaded").appendChild(a)},ref:t,type:"file",className:a.input,id:"contained-button-file",multiple:!0}),Object(n.jsx)("label",{htmlFor:"contained-button-file",children:Object(n.jsx)(d.a,{variant:"contained",color:"primary",component:"span",children:"Upload"})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(A.a,{id:"standard-basic",label:"Any Comment"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)(d.a,{variant:"outlined",color:"secondary",type:"submit",value:"Submit",children:"Submit"}),Object(n.jsx)(d.a,{variant:"outlined",color:"secondary",type:"reset",value:"Reset",children:"Reset"})]})})}function I(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h1",{style:{fontFamily:"Montserrat",fontWeight:"bolder",marginTop:"18%",textShadow:"2px 2px #ffffff",fontSize:"50px"},children:"Academics made so easy..."})})}var z=a(163),L=a(164),P=a(81),W=a.n(P),Y=a(67),D=a(4),R=a(21),H=a(170),q=a(160),U=a(157),_=a(161),G=a(78),J=a.n(G),K=a(79),V=a.n(K),Q=a(80),X=a.n(Q),Z=a(118),$=a(162),ee=Object(o.a)((function(e){return{root:{display:"flex",fontFamily:"Montserrat"},menuButton:{marginRight:e.spacing(2),color:"white"},hide:{display:"none"},drawer:{color:"white",width:240,flexShrink:0},drawerPaper:{backgroundColor:"rgba(255, 228, 196, 0.564)",color:"black",width:240},drawerHeader:Object(Y.a)(Object(Y.a)({color:"white",display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),drawerIcon:{color:"black"},drawerTitle:{fontWeight:"bold",fontSize:"18px"},drawerList:{marginLeft:"20px",fontSize:"15px"}}}));function te(){var e=ee(),t=Object(R.a)(),a=r.a.useState(!1),c=Object(j.a)(a,2),i=c[0],s=c[1],o=function(){s(!1)};return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(q.a,{}),Object(n.jsx)(b.a,{color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},edge:"start",className:Object(D.a)(e.menuButton,i&&e.hide),children:Object(n.jsx)(J.a,{})}),Object(n.jsxs)(H.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper},children:[Object(n.jsx)("div",{className:e.drawerHeader,children:Object(n.jsx)(b.a,{onClick:o,className:e.drawerIcon,children:"ltr"===t.direction?Object(n.jsx)(V.a,{}):Object(n.jsx)(X.a,{})})}),Object(n.jsx)(_.a,{className:e.drawerIcon}),Object(n.jsxs)(U.a,{children:[Object(n.jsx)(Z.a,{button:!0,onClick:o,component:f.b,to:"/classes",children:Object(n.jsx)($.a,{disableTypography:!0,primary:"CLASSES",className:e.drawerTitle})},"CLASSES"),["FYCSE","SYCSE","TYCSE"].map((function(t,a){return Object(n.jsx)(Z.a,{button:!0,component:f.b,onClick:o,to:"/classes/".concat(t),children:Object(n.jsx)($.a,{disableTypography:!0,className:e.drawerList,primary:t})},t)}))]}),Object(n.jsx)(_.a,{}),Object(n.jsx)(U.a,{children:Object(n.jsx)(Z.a,{button:!0,onClick:o,component:f.b,to:"/settings",children:Object(n.jsx)($.a,{disableTypography:!0,primary:"SETTINGS",className:e.drawerTitle})},"SETTINGS")})]})]})}var ae=Object(c.createContext)(),ne=function(e){var t=Object(c.useState)(!1),a=Object(j.a)(t,2),r=a[0],i=a[1];return Object(n.jsx)(ae.Provider,{value:[r,i],children:e.children})},ce=Object(o.a)((function(e){return{root:{},menuButton:{},title:{},linkStyle:{textDecoration:"None",color:"white",alignContent:"centre",fontWeight:"bold",fontFamily:"Montserrat",textShadow:"2px 2px black"},authStyle:{marginLeft:e.spacing(2),fontFamily:"Montserrat",fontWeight:"4px"},signIn:{fontFamily:"Montserrat",fontWeight:"4px"}}}));function re(){var e=ce(),t=r.a.useState(null),a=Object(j.a)(t,2),i=a[0],s=a[1],o=Boolean(i),m=Object(c.useContext)(ae),h=Object(j.a)(m,1)[0],u=function(){s(null)};return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(z.a,{position:"static",style:{background:"#2E3B55"},children:Object(n.jsxs)(L.a,{style:{justifyContent:"flex-end"},children:[h&&Object(n.jsx)(te,{}),Object(n.jsx)(l.a,{variant:"h6",style:{alignItems:"center",flexGrow:.8},children:Object(n.jsx)(f.b,{to:"/",className:e.linkStyle,children:" Assignment Analyzer"})}),!h&&Object(n.jsx)(f.b,{to:"/signin",style:{textDecoration:"none",fontFamily:"Montserrat"},children:Object(n.jsx)(d.a,{className:e.signIn,variant:"contained",color:"default",children:"Sign In"})}),!h&&Object(n.jsx)(f.b,{to:"/signup",style:{textDecoration:"none"},children:Object(n.jsx)(d.a,{className:e.authStyle,variant:"contained",color:"default",children:"Sign Up"})}),h&&Object(n.jsxs)("div",{style:{marginLeft:"auto"},children:[Object(n.jsx)(b.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(n.jsx)(W.a,{})}),Object(n.jsxs)(x.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"bottom",horizontal:"right"},open:o,onClose:u,children:[Object(n.jsx)(p.a,{onClick:u,component:f.b,to:"/profile",children:"Profile"}),Object(n.jsx)(p.a,{onClick:u,component:f.b,to:"/create",children:"Create Classroom"}),Object(n.jsx)(p.a,{onClick:u,component:f.b,to:"/join",children:"Join Classroom"})]})]})]})})})}var ie=a(171),se=a(166),oe=a(165),le=a(117),de=a(168),je=a.p+"static/media/home_backg_2.888c554a.jpg";function be(){return Object(n.jsxs)(l.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(f.b,{color:"inherit",to:"/",children:"Assignment Analyzer"})," ",(new Date).getFullYear(),"."]})}var me=Object(o.a)((function(e){return{root:{height:"100vh"},image:{backgroundColor:"rgb(233,215,195)",backgroundImage:"url(".concat(je,")"),backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",height:"100vh"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function he(){var e=me(),t=Object(c.useContext)(ae),a=Object(j.a)(t,2),r=(a[0],a[1]),i=Object(c.useContext)(k),s=Object(j.a)(i,2),o=s[0],b=s[1],m=Object(c.useState)(""),h=Object(j.a)(m,2),p=h[0],x=h[1],O=Object(c.useState)(""),g=Object(j.a)(O,2),y=g[0],v=g[1],C=Object(N.e)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(u.a,{container:!0,component:"main",className:e.root,children:[Object(n.jsx)(q.a,{}),Object(n.jsx)(u.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:8,md:5,component:le.a,elevation:6,square:!0,children:Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(l.a,{component:"h1",variant:"h5",children:"Sign In"}),Object(n.jsxs)("form",{className:e.form,method:"Post",children:[Object(n.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:p,onChange:function(e){return x(e.target.value)},autoComplete:"email",autoFocus:!0}),Object(n.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:y,onChange:function(e){return v(e.target.value)}}),Object(n.jsx)(oe.a,{children:Object(n.jsx)(se.a,{control:Object(n.jsx)(ie.a,{checked:o,onChange:function(e){b(e.target.checked)},"aria-label":"login switch"}),label:o?"Sign in As a Teacher":"Sign in As a Student"})}),Object(n.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",style:{background:"#2E3B55"},className:e.submit,onClick:function(){p&&y&&(C.push("/"),r(!0))},children:Object(n.jsx)("div",{style:{color:"white"},children:"Sign In"})}),Object(n.jsx)(f.b,{to:"/signup",variant:"body2",style:{textDecoration:"none",fontSize:"15px"},children:"Don't have an account? Sign Up"}),Object(n.jsx)(de.a,{mt:5,children:Object(n.jsx)(be,{})})]})]})})]})})}function ue(){return Object(n.jsxs)(l.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(f.b,{color:"inherit",to:"/",children:"Assignment Analyzer"})," ",(new Date).getFullYear(),"."]})}var pe=Object(o.a)((function(e){return{root:{height:"100vh"},image:{backgroundColor:"rgb(233,215,195)",backgroundImage:"url(".concat(je,")"),backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",height:"100vh"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function xe(){var e=pe();return Object(n.jsxs)(u.a,{container:!0,component:"main",className:e.root,children:[Object(n.jsx)(q.a,{}),Object(n.jsx)(u.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),Object(n.jsx)(u.a,{item:!0,xs:12,sm:8,md:5,component:le.a,elevation:6,square:!0,children:Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(l.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(n.jsxs)("form",{className:e.form,method:"Post",children:[Object(n.jsx)("div",{className:"d-flex flex-row",children:Object(n.jsxs)("div",{className:"p-2 flex-fill",children:[Object(n.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,autoFocus:!0,name:"firstname",label:"First Name",type:"text",id:"firstname",style:{width:"260px",marginRight:"42px"}}),Object(n.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,name:"lastname",label:"Last Name",type:"text",id:"lastname",style:{width:"260px"}})]})}),Object(n.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}),Object(n.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(n.jsx)(d.a,{type:"submit",fullWidth:!0,variant:"contained",style:{background:"#2E3B55"},className:e.submit,children:Object(n.jsx)("div",{style:{color:"white"},children:"Sign Up"})}),Object(n.jsx)(f.b,{to:"/signin",variant:"body2",style:{textDecoration:"none",fontSize:"15px"},children:"Already have an account? Sign In"}),Object(n.jsx)(de.a,{mt:5,children:Object(n.jsx)(ue,{})})]})]})})]})}var Oe=a(82),ge=a.n(Oe)()();var fe=function(){return Object(n.jsx)(ne,{children:Object(n.jsx)(F,{children:Object(n.jsx)(f.a,{history:ge,children:Object(n.jsxs)("div",{className:"App",style:{height:"1500"},children:[Object(n.jsx)(re,{}),Object(n.jsx)(N.a,{exact:!0,path:"/",component:I}),Object(n.jsx)(N.a,{exact:!0,path:"/signin",component:he}),Object(n.jsx)(N.a,{exact:!0,path:"/signup",component:xe}),Object(n.jsx)(N.a,{exact:!0,path:"/classes",component:S}),Object(n.jsx)(N.a,{exact:!0,path:"/classes/FYCSE",component:E}),Object(n.jsx)(N.a,{path:"/postAssignment",component:B}),Object(n.jsx)(N.a,{path:"/submitAssignment",component:M})]})})})})},ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,174)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(fe,{})}),document.getElementById("root")),ye()},74:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.630c34c0.chunk.js.map