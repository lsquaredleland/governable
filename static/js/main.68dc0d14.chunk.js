(this.webpackJsonpgovernable=this.webpackJsonpgovernable||[]).push([[0],{199:function(e,t,n){e.exports=n(337)},204:function(e,t,n){},207:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},208:function(e,t,n){},336:function(e,t,n){e.exports=n.p+"static/media/ABOUT.2616be68.md"},337:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(23),o=n.n(l),c=(n(204),n(24)),i=n(132),s=n(69),u=n(11),m=(n(207),n(208),n(414)),d=n(367),p=n(366),f=n(175),g=n.n(f),E=n(27),h=n(28);function v(){var e=Object(E.a)(["\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: 1800px;\n  width: 100%;\n  padding: 0 24px;\n"]);return v=function(){return e},e}var b=h.a.div(v()),x=function(e){var t=e.children;return r.a.createElement(b,null,t)},y=n(417),w=n(180),j=n.n(w),O=n(179),k=n.n(O);function F(){var e=Object(E.a)(["\n  align-items: center;\n  color: #FFF;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  position: relative;\n"]);return F=function(){return e},e}function C(){var e=Object(E.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n"]);return C=function(){return e},e}function _(){var e=Object(E.a)(["\n  background: #000;\n  display: flex;\n  margin-top: -80px;\n  min-height: calc(50vh - 80px);\n  position: relative;\n  touch-action: none;\n"]);return _=function(){return e},e}var N=h.a.div(_()),S=h.a.div(C()),A=h.a.div(F()),R=function(e){var t=e.proposal,n=t.id,l=t.title,o=Object(a.useContext)(Ie),c=o.UpdateVoters,i=o.proposals;return r.a.createElement(N,{id:"hero"},r.a.createElement(A,null,r.a.createElement(S,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",{style:{margin:0,padding:0,fontSize:"2vmax",fontWeight:500,textShadow:"0px 4px 4px black"}},"Compound Divided")),r.a.createElement("div",{style:{display:"flex"}},n>1?r.a.createElement(y.a,{style:{float:"left",height:"20px"},onClick:function(){return n>1?c(n-1):null}},r.a.createElement(k.a,{style:{color:"#FFF",fontSize:24}})):null,r.a.createElement("h2",{style:{margin:0,padding:0,fontSize:"1vmax",fontWeight:500,textShadow:"0px 4px 4px black",display:"flex"}},r.a.createElement("div",null,r.a.createElement("a",{style:{color:"grey"}},("00"+n).slice(-3)),"  ",l)),n<i.length?r.a.createElement(y.a,{style:{float:"right",height:"20px"},onClick:function(){return n<i.length?c(n+1):null}},r.a.createElement(j.a,{style:{color:"#FFF",fontSize:24}})):null)),r.a.createElement("div",{style:{position:"relative",top:-80}})))},I=n(190),B=n(415),W=Object(p.a)((function(e){return{tokenIcon:{alignItems:"center",backgroundColor:e.palette.grey[400],borderRadius:48,display:"flex",height:44,width:44}}})),z=function(e){var t=e.src,n=(e.alt,W());return r.a.createElement("img",{className:n.tokenIcon,src:t,alt:""})},D=Object(p.a)((function(e){return{progressBar:{height:"30px",width:"100%"},bar:{position:"absolute",height:10,borderRadius:5}}})),P=function(e){var t=e.side,n=e.percentage,a=e.color,l=D();return r.a.createElement(B.a,{className:l.progressBar},r.a.createElement("div",{style:{width:"100%",height:"30px"}},r.a.createElement("h3",{style:{float:"left"}},t),r.a.createElement("h3",{style:{float:"right"}},n,"%")),r.a.createElement("div",{style:{position:"relative",marginTop:20}},r.a.createElement("div",{className:l.bar,style:{width:"100%",background:"lightgrey",right:0}}),r.a.createElement("div",{className:l.bar,style:{width:"".concat(n,"%"),background:a}})))},T=Object(p.a)((function(e){return{headerRow:{alignItems:"center",borderBottom:"1px solid ".concat(e.palette.grey[100]),height:80,paddingLeft:24,paddingRight:24,"&:hover":{}}}})),L=function(e){var t=e.children,n=T();return r.a.createElement(B.a,{className:n.headerRow},t)},M=Object(p.a)((function(e){return{row:{alignItems:"center",borderBottom:"1px solid ".concat(e.palette.grey[100]),display:"flex",height:50,paddingLeft:24,paddingRight:24,"&:hover":{}}}})),V=function(e){var t=e.children,n=M();return r.a.createElement(B.a,{className:n.row},t)},H=Object(p.a)((function(e){return{name:{marginLeft:e.spacing(2)},tokenCell:{alignItems:"center",display:"flex",flex:1}}})),U=function(e){var t=e.name,n=e.tokenIcon,a=H();return r.a.createElement(B.a,{className:a.tokenCell},n,r.a.createElement("span",{className:a.name},t))},J=Object(p.a)((function(e){return{tflCell:{fontWeight:300}}})),q=function(e){var t=e.time,n=J();return r.a.createElement(B.a,{className:n.tflCell},t)},Y=Object(p.a)((function(e){return{tflCell:{fontWeight:500,width:140}}})),$=function(e){var t=e.amount,n=Y();return r.a.createElement(B.a,{className:n.tflCell},t.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,","))},G=function(e){var t=e.side,n=e.percentage,l=e.color,o=Object(a.useContext)(Ie),c=o.voters,i=o.setModal,s=c.filter((function(e){return"For"===t?!0===e.support:!1===e.support})).sort((function(e,t){return t.votes-e.votes}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{key:"Votes"},r.a.createElement(P,{side:t,percentage:n,color:l})),r.a.createElement(V,{key:"Header"},r.a.createElement(U,{name:"Address"}),r.a.createElement($,{amount:"Votes"}),r.a.createElement(q,{time:"Time"})),s.slice(0,4).map((function(e,t){var n=e.display_name?e.display_name:e.address.slice(0,10);return r.a.createElement(V,{key:e.address},r.a.createElement(U,{name:n,tokenIcon:r.a.createElement(z,{src:e.image_url,alt:n})}),r.a.createElement($,{amount:e.votes}),r.a.createElement(q,{time:e.time}))})),s.length>4?r.a.createElement(V,{key:"Expand"},r.a.createElement(B.a,{style:{margin:"0 auto",fontWeight:500},onClick:function(e){return i(t)}},"Show More")):"")},K={stick:{position:"sticky",top:"20px"}},Q=function(e){var t=e.tweets,n=e.side,a=e.percentage,l=e.color;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:0===t.length?K.stick:{}},r.a.createElement(d.a,{elevation:3},r.a.createElement(G,{side:n,percentage:a,color:l})),r.a.createElement("br",null),r.a.createElement("div",null,'Latest "',n,'" Tweets (',t.length,")")),t.map((function(e,n){return r.a.createElement("div",{key:n,style:n===t.length-1?K.stick:{}},r.a.createElement(I.a,{tweetId:e}))})))},X=n(75),Z=n(181),ee=function(e){var t=e.voters,n={address:"All Votes",color:"#ffe0c7",children:[{address:"Pro",color:"#04D394",children:t.filter((function(e){return!0===e.support})).map((function(e){return Object(X.a)(Object(X.a)({},e),{},{color:"yellow"})}))},{address:"Neg",color:"#DE5F67",children:t.filter((function(e){return!1===e.support})).map((function(e){return Object(X.a)(Object(X.a)({},e),{},{color:"#DE5F67"})}))}]},a=t.reduce((function(e,t){return e+(!0===t.support?t.votes:0)}),0),l=t.reduce((function(e,t){return e+(!1===t.support?t.votes:0)}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"500px"}},r.a.createElement(Z.a,{root:n,margin:{top:20,right:20,bottom:20,left:20},identity:"address",value:"votes",colors:function(e){return e.color},padding:6,label:function(e){var n=t.find((function(t){return t.address===e.id}));return n&&null!=n.display_name?n.display_name:e.id.slice(0,5)},labelTextColor:"black",borderWidth:2,borderColor:{from:"color"},defs:[{id:"lines",type:"patternLines",background:"none",color:"inherit",rotation:-45,lineWidth:5,spacing:8}],fill:[{match:{depth:1},id:"lines"}],animate:!1,tooltip:function(e){var t=-1===["All Votes","Pro","Neg"].indexOf(e.id),n=e.value/(e.data.support?a:l)*100;t||(n=e.value/(a+l)*100);var o=e.value.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");return r.a.createElement("div",{style:{display:"inline-flex"}},t?r.a.createElement(z,{src:e.data.image_url,style:{float:"left"}}):"",r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("strong",null,e.label||e.id,":"),r.a.createElement("div",null,o," (",n.toFixed(2),"%)"),t?r.a.createElement("div",null,"date",": ",e.data.time):""))}})))},te=n(416),ne=n(409),ae=n(413),re=n(412),le=n(408),oe=n(410),ce=n(411),ie=Object(p.a)((function(e){return{table:{padding:20},headerRow:{fontWeight:700},tableContainer:{maxHeight:"calc(100% - 200px)",margin:"100px",background:"white",overflowY:"auto"}}})),se=function(e){var t=e.row,n=t.address,a=t.display_name,l=t.votes,o=t.time,c=l.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");return r.a.createElement(ce.a,{key:n},r.a.createElement(re.a,{component:"th",scope:"row"},a||n),r.a.createElement(re.a,{align:"right"},n),r.a.createElement(re.a,{align:"right"},c),r.a.createElement(re.a,{align:"right"},o))},ue=function(){var e=Object(a.useContext)(Ie),t=e.modal,n=e.setModal,l=e.voters,o="For"===t||"Against"===t,c=l.filter((function(e){return"For"===t?!0===e.support:!1===e.support})).sort((function(e,t){return t.votes-e.votes})),i=ie();return r.a.createElement(te.a,{open:o,onClose:function(){n(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{className:i.tableContainer},r.a.createElement(le.a,{component:d.a},r.a.createElement(ne.a,{className:i.table,"aria-label":"simple table"},r.a.createElement(oe.a,null,r.a.createElement(ce.a,null,r.a.createElement(re.a,{className:i.headerRow},"Name"),r.a.createElement(re.a,{className:i.headerRow,align:"right"},"Address"),r.a.createElement(re.a,{className:i.headerRow,align:"right"},"Votes"),r.a.createElement(re.a,{className:i.headerRow,align:"right"},"Date"))),r.a.createElement(ae.a,null,c.map((function(e,t){return r.a.createElement(se,{row:e,key:t})})))))))},me=Object(p.a)((function(e){return{paper:{padding:20,textAlign:"center",fontFamily:"Roboto"}}})),de=function(){var e=Object(a.useContext)(Ie),t=e.tweets,n=e.proposals,l=(e.setCurrentProposal,e.currentProposal),o=e.voters,c=(Object(u.g)().proposalNum,n.find((function(e){return e.id===l}))||{}),i=t.find((function(e){return e.id===l}))||{},s=function(e){return(parseFloat(e)/(parseFloat(c.for_votes)+parseFloat(c.against_votes))*100).toFixed(2)},p=new g.a.Converter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{proposal:c}),r.a.createElement(ue,null),r.a.createElement(x,null,r.a.createElement("div",{style:{marginTop:-68,position:"relative"}},r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:3},r.a.createElement(Q,{side:"For",percentage:s(c.for_votes),color:"#04D394",tweets:i.pro||[]})),r.a.createElement(m.a,{item:!0,xs:6},r.a.createElement("div",{style:{position:"sticky",top:20}},r.a.createElement(d.a,{className:me.paper,elevation:3},o.length>0?r.a.createElement(ee,{voters:o}):null),r.a.createElement(m.a,{item:!0,xs:7},r.a.createElement(d.a,{className:me.paper,elevation:3,style:{marginTop:"20px"}},r.a.createElement("div",{style:{height:"100%",textAlign:"left",padding:"1em"}},r.a.createElement("h3",null,"Details"),c.description&&c.description.split("\n\n").map((function(e,t){var n=p.makeHtml(e).replace("<img","<img style='width:100%'");return r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n},key:t})}))))))),r.a.createElement(m.a,{item:!0,xs:3},r.a.createElement(Q,{side:"Against",percentage:s(c.against_votes),color:"#DE5F67",tweets:i.neg||[]}))))))},pe=n(188),fe=n.n(pe),ge={paper:{margin:"20px",fontFamily:"Roboto",padding:"10px 20px 20px 20px"}},Ee=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),l=t[0],o=t[1];return Object(a.useEffect)((function(){var e=n(336);fetch(e).then((function(e){return e.text()})).then((function(e){o(fe()(e))}))}),[]),r.a.createElement(x,null,r.a.createElement(m.a,{item:!0,xs:5},r.a.createElement(d.a,{elevation:3,style:ge.paper},r.a.createElement("article",{dangerouslySetInnerHTML:{__html:l}}))))},he=n(131),ve=n.n(he),be=n(189),xe=n.n(be);function ye(){var e=Object(E.a)(["\n  align-items: center;\n  display: flex;\n  margin: 0 -12px;\n"]);return ye=function(){return e},e}function we(){var e=Object(E.a)(["\n  color: #FFF;\n  padding: 0 12px;\n  text-decoration: none;\n"]);return we=function(){return e},e}function je(){var e=Object(E.a)(["\n  background-color: ",";\n  color: #FFF;\n"]);return je=function(){return e},e}function Oe(){var e=Object(E.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 24px;\n  font-weight: 700;\n"]);return Oe=function(){return e},e}function ke(){var e=Object(E.a)(["\n  align-items: center;\n  display: flex;\n  height: 80px;\n  justify-content: space-between;\n  position: relative;\n  z-index: 2;\n"]);return ke=function(){return e},e}var Fe=h.a.div(ke()),Ce=h.a.div(Oe()),_e=h.a.header(je(),(function(e){return e.transparent?"transparent":"black"})),Ne=Object(h.a)(s.b)(we()),Se=h.a.nav(ye()),Ae=function(){return r.a.createElement(_e,{transparent:!1},r.a.createElement(x,null,r.a.createElement(Fe,null,r.a.createElement(Ne,{to:"/"},r.a.createElement(Ce,null,r.a.createElement(ve.a,null),r.a.createElement("div",{style:{width:4}}),r.a.createElement("span",null,"A House Divided"),r.a.createElement("div",{style:{width:4}}),r.a.createElement(ve.a,{style:{transform:"rotate(180deg)"}}))),r.a.createElement(Se,null,r.a.createElement(Ne,{to:"/Compound"},"Compound"),r.a.createElement(Ne,{to:"/about"},"About"),r.a.createElement(y.a,{onClick:function(){return window.open("https://github.com/lsquaredleland/governable","_blank")}},r.a.createElement(xe.a,{style:{color:"white"}}))))))},Re=[{id:1,pro:["1254846366506905601","1254899993443471360","1256090650170327041"],neg:["1254669301308506113","1255235435447685120","1255181493279707136","1255609457519652864"]},{id:2,pro:[],neg:["1255609457519652864"],abstrain:["1256313098723569664"]},{id:3,pro:["1260986319972429824"],neg:[]},{id:4,pro:[],neg:[]},{id:7,pro:["1270905785149583360"],neg:[]},{id:8,pro:["1274577400232153100","1273706416973512706"],neg:[]},{id:9,pro:[],neg:["1274041263214354432","1274577400232153100","1274579517143580672","1273706416973512706"]}],Ie=r.a.createContext({}),Be=function(e){var t=e.currentProposal,n=Object(u.h)();return r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"".concat(n.path,"/:proposalNum")},r.a.createElement(de,null)),r.a.createElement(u.b,{exact:!0,path:n.path},r.a.createElement(de,null),"// ",r.a.createElement(u.a,{to:"/Compound/".concat(t)})))},We=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)([]),m=Object(c.a)(o,2),d=m[0],p=m[1],f=Object(a.useState)([]),g=Object(c.a)(f,2),E=g[0],h=g[1],v=Object(a.useState)(1),b=Object(c.a)(v,2),x=b[0],y=b[1],w=Object(a.useState)(void 0),j=Object(c.a)(w,2),O=j[0],k=j[1];i.a.initialize("UA-169309883-1"),i.a.pageview(window.location.pathname+window.location.search);var F=function(e){fetch("https://api.compound.finance/api/v2/governance/proposal_vote_receipts?proposal_id=".concat(e,"&page_size=100")).then((function(e){return e.json()})).then((function(t){y(e);var n=t.proposal_vote_receipts.map((function(e){var t=e.support,n=e.votes,a=e.voter;return{support:t,address:a.address,display_name:a.display_name,image_url:a.image_url,votes:parseFloat(n),time:"4/27 - 12:00"}}));p(n)}),(function(e){console.log(e)}))};return Object(a.useEffect)((function(){l(Re),fetch("https://api.compound.finance/api/v2/governance/proposals").then((function(e){return e.json()})).then((function(e){h(e.proposals),F(e.proposals.length)}),(function(e){console.log(e)})),F(1)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(Ae,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/about"},r.a.createElement(Ee,null)),r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(u.a,{to:"/Compound"})),r.a.createElement(u.b,{path:"/Compound"},r.a.createElement(Ie.Provider,{value:{tweets:n,proposals:E,currentProposal:x,setCurrentProposal:y,voters:d,UpdateVoters:F,modal:O,setModal:k}},r.a.createElement("div",{className:"App"},r.a.createElement(Be,{currentProposal:x})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[199,1,2]]]);
//# sourceMappingURL=main.68dc0d14.chunk.js.map