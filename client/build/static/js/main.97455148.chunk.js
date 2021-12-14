(this["webpackJsonpfundraiser-app"]=this["webpackJsonpfundraiser-app"]||[]).push([[0],{123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){"use strict";t.r(a);var s,n,i,c,r,l=t(3),d=t.n(l),o=t(45),j=t.n(o),b=(t(75),t(27)),m=t(68),h=t(6),u=t(67),O=t(136),x=t(138),p=t(135),f=t(66),g=(t(76),t(12)),N=t(61),v=t(62),w=t(46),k=new(function(){function e(){Object(N.a)(this,e)}return Object(v.a)(e,[{key:"getProfile",value:function(){return Object(w.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(w.a)(e).exp<Date.now90/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),y=t(0),C=function(){return Object(y.jsx)(y.Fragment,{children:k.loggedIn()?Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(g.Navbar,{alignLinks:"right",brand:Object(y.jsx)("a",{className:"brand-logo",href:"#",children:"Helpr"}),id:"mobile-nav",menuIcon:Object(y.jsx)(g.Icon,{children:"menu"}),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0},children:[Object(y.jsx)(g.NavItem,{href:"/createFundraiser",children:"Create a Fundraiser"}),Object(y.jsx)(g.NavItem,{onClick:k.logout,href:"/",children:"Logout"})]})}):Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(g.Navbar,{alignLinks:"right",brand:Object(y.jsx)("a",{className:"brand-logo",href:"/",children:"Helpr"}),id:"mobile-nav",menuIcon:Object(y.jsx)(g.Icon,{children:"menu"}),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0},children:Object(y.jsxs)(g.Dropdown,{id:"Dropdown_8",options:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,container:null,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250},trigger:Object(y.jsx)(g.Button,{node:"button",children:"Login/Sign Up"}),children:[Object(y.jsx)("a",{href:"/login",children:"Login"}),Object(y.jsx)("a",{href:"/signup",children:"Sign Up"})]})})})})},$=function(){return Object(y.jsx)("footer",{children:Object(y.jsx)("div",{children:Object(y.jsx)("h6",{children:"All donations are final."})})})},F=t(36),I=t(47),S=t.n(I),D=t(63),E=t(21),T=t(139),L=t(28),A=t(137),P=(Object(A.a)(s||(s=Object(L.a)(["\n    mutation login($email: String! $password: String!) {\n        login(email: $email, password: $password){\n            token\n            user {\n                _id\n            }\n        }\n    }\n"]))),Object(A.a)(n||(n=Object(L.a)(["\n    mutation addUser(\n        $firstName: String!\n        $lastName: String!\n        $email: String!\n        $password: String!\n    ) {\n        addUser(\n        firstName: $firstName\n        lastName: $lastName\n        email: $email\n        password: $password\n        ) {\n          token\n          user {\n            _id\n          }\n        }\n    }\n"])))),_=(Object(A.a)(i||(i=Object(L.a)(["\n    mutation createFundraiser(\n        $fundraiserName: String!\n        $goal: Int!\n    ) {\n        createFundraiser(\n            fundraiserName: $fundraiserName\n            goal: $goal\n        ) {\n            user{\n                _id\n            }\n        }\n    }\n"]))),Object(A.a)(c||(c=Object(L.a)(["\n mutation deleteFundraiser($fundraiserName: [ID]!) {\n     deleteFundraiser(fundraiserName: $fundraiserName) {\n             _id\n             userName\n             email\n             fundraiser {\n                 fundraiserName\n                 goal\n                 fundraiserDate\n                 description\n            }\n        }\n    }\n"]))),Object(A.a)(r||(r=Object(L.a)(["\n    mutation updateFundraiser($fundraiserName: [ID]!) {\n        updateFundraiser(fundraiserName: $fundraiserName) {\n            _id\n            userName\n            email\n            fundraiser {\n                fundraiserName\n                goal\n                fundraiserDate\n                description\n            }\n        }\n    }\n"]))),function(e){var a=Object(l.useState)({firstName:"",lastName:"",email:"",password:""}),t=Object(E.a)(a,2),s=t[0],n=t[1],i=Object(T.a)(P),c=Object(E.a)(i,2),r=c[0],d=(c[1].data,function(){var e=Object(D.a)(S.a.mark((function e(a){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,r({variables:{email:s.email,password:s.password,firstName:s.firstName,lastName:s.lastName}});case 3:t=e.sent,console.log(t),n=t.data.addUser.token,k.login(n);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),o=function(e){var a=e.target,t=a.name,i=a.value;n(Object(b.a)(Object(b.a)({},s),{},Object(F.a)({},t,i)))};return Object(y.jsx)("form",{className:"register-form",children:Object(y.jsxs)("div",{id:"register",className:"card-content",children:[Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"input-field col s12",children:[Object(y.jsx)("input",{id:"firstname-register",type:"text",className:"validate",name:"firstName",onChange:o}),Object(y.jsx)("label",{htmlFor:"firstname-register",children:"First Name"})]})}),Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"input-field col s12",children:[Object(y.jsx)("input",{id:"lastname-register",type:"text",className:"validate",name:"lastName",onChange:o}),Object(y.jsx)("label",{htmlFor:"lastname-register",children:"Last Name"})]})}),Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"input-field col s12",children:[Object(y.jsx)("input",{id:"email-register",type:"email",className:"validate",name:"email",onChange:o}),Object(y.jsx)("label",{htmlFor:"email-register",children:"Email"})]})}),Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"input-field col s12",children:[Object(y.jsx)("input",{id:"password-register",type:"password",className:"validate",name:"password",onChange:o}),Object(y.jsx)("label",{htmlFor:"password-register",children:"Password"})]})}),Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"input-field col s12",children:[Object(y.jsx)("input",{id:"confirm-password-register",type:"password",className:"validate"}),Object(y.jsx)("label",{htmlFor:"confirm-password-register",children:"Confirm Password"})]})}),Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col s10 offset-s1",children:Object(y.jsx)("button",{style:{width:"100%"},className:"btn btn-large waves-effect waves-light",type:"submit",name:"action",onClick:d,children:"REGISTER"})})})]})})}),U=(t(123),t.p+"static/media/charity-cleanup.e3ab40c5.jpg");var R=function(e){return Object(y.jsx)("div",{className:"fundraiser-card",children:Object(y.jsx)(g.Row,{children:Object(y.jsx)(g.Col,{offset:"m3",s:12,m:6,children:Object(y.jsxs)(g.Card,{header:Object(y.jsx)(g.CardTitle,{image:U}),children:[Object(y.jsxs)("a",{href:"/fundraiserInfoCard",className:"card-link",children:[Object(y.jsx)("span",{id:"fundraiser-card-tile",className:"card-title fundraiser-card-title",children:"Clean Up The Park"}),Object(y.jsx)("span",{className:"card-title fundraiser-card-subtitle",children:"Chicago, IL"}),Object(y.jsx)("p",{className:"fundraiser-card-description",id:"fundraiser-card-description",children:"We are raising funds to help cleanup and revitalize the neighborhood park. If we all chip in a little bit we can make this neighborhood a better place to live."}),Object(y.jsx)("div",{className:"card-progress-bar",children:Object(y.jsx)("div",{id:"modded",children:Object(y.jsxs)("div",{className:"progress blue lighten-4 tooltipped","data-position":"top","data-tooltip":"Progress was at 50% when tested",children:[Object(y.jsx)("span",{}),Object(y.jsx)("div",{id:"fundraiser-card-progress",className:"determinate blue",style:{width:"20%",animation:"grow 2s"},children:"20%"})]})})}),Object(y.jsxs)("div",{className:"card-content fundraiser-card-stats-wrapper",children:[Object(y.jsx)(g.Col,{className:"center-align",s:6,children:Object(y.jsxs)("p",{id:"fundraiser-card-amount-raised",children:[Object(y.jsx)("span",{className:"fundraiser-card-stats",children:"Raised:"}),"$10,000"]})}),Object(y.jsx)(g.Col,{className:"center-align",s:6,children:Object(y.jsxs)("p",{id:"fundraiser-card-amount-goal",children:[Object(y.jsx)("span",{className:"fundraiser-card-stats",children:"Goal:"}),"$50,000"]})})]})]}),Object(y.jsx)("a",{id:"card-make-donation-button",href:"/donate",children:Object(y.jsx)("div",{className:"card-donate-button-wrapper green white-text",children:Object(y.jsx)("h5",{className:"center-align",children:"MAKE A DONATION"})})})]})})})})},M=function(){return Object(y.jsx)("div",{children:Object(y.jsx)("h1",{children:"404 Page Not Found"})})},z=(t(124),t.p+"static/media/charity-cleanup.e3ab40c5.jpg");var G=function(e){return Object(y.jsx)("div",{className:"fundraiser-info-card",children:Object(y.jsx)("div",{className:"col s12",children:Object(y.jsx)("div",{className:"card",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col s12 m6",children:[Object(y.jsx)("div",{className:"card-image",children:Object(y.jsx)("img",{src:z})}),Object(y.jsxs)("div",{className:"card-content white black-text",children:[Object(y.jsx)("span",{id:"fundraiser-card-tile",className:"card-title fundraiser-card-title",children:"Clean Up The Park"}),Object(y.jsx)("span",{className:"card-title fundraiser-card-subtitle",children:"Chicago, IL"}),Object(y.jsx)("p",{id:"fundraiser-card-description",children:"We are raising funds to help cleanup and revitalize the neighborhood park. If we all chip in a little bit we can make this neighborhood a better place to live."})]})]}),Object(y.jsx)("div",{className:"col s12 m6 blue-col",children:Object(y.jsxs)("div",{className:"col s12 blue lighten-2 center-align white-text blue-col",children:[Object(y.jsxs)("div",{className:"col s6 center-align fundraiser-info-stats",children:[Object(y.jsx)("span",{className:"fundraiser-card-stats",children:"Raised:"}),Object(y.jsx)("h5",{className:"dollars-bold",children:"$10,000"})]}),Object(y.jsxs)("div",{className:"col s6 center-align fundraiser-info-stats",children:[Object(y.jsx)("span",{className:"fundraiser-card-stats",children:"Goal:"}),Object(y.jsx)("h5",{className:"dollars-bold",children:"$50,000"})]}),Object(y.jsx)("div",{className:"card-progress-bar campaign-info-progress-bar-wrapper",children:Object(y.jsx)("div",{id:"modded",children:Object(y.jsxs)("div",{className:"progress blue lighten-4 tooltipped border border-white","data-position":"top","data-tooltip":"20% of the target funds have been raised",children:[Object(y.jsx)("span",{}),Object(y.jsx)("div",{id:"fundraiser-info-progress",className:"determinate blue",style:{width:"20%",animation:"grow 2s"},children:"20%"})]})})}),Object(y.jsxs)("div",{className:"donors-list-wrapper",children:[Object(y.jsx)("h5",{className:"center-align",children:"Recent Donations"}),Object(y.jsx)("div",{className:"card",children:Object(y.jsxs)("ul",{className:"collection with-header black-text left-align",children:[Object(y.jsxs)("li",{className:"collection-item",children:["Sal",Object(y.jsx)("div",{className:" secondary-content right-align",children:"$100.00"})]}),Object(y.jsxs)("li",{className:"collection-item",children:["Matthew",Object(y.jsx)("div",{className:" secondary-content right-align",children:"$100.00"})]}),Object(y.jsxs)("li",{className:"collection-item",children:["Cam",Object(y.jsx)("div",{className:" secondary-content right-align",children:"$100.00"})]}),Object(y.jsxs)("li",{className:"collection-item",children:["Jon",Object(y.jsx)("div",{className:" secondary-content right-align",children:"$100.00"})]}),Object(y.jsxs)("li",{className:"collection-item",children:["Paul",Object(y.jsx)("div",{className:" secondary-content right-align",children:"$100.00"})]})]})})]}),Object(y.jsx)("div",{children:Object(y.jsx)("a",{id:"card-make-donation-button",href:"/donate",children:Object(y.jsx)("div",{className:"card-donate-button-wrapper green white-text",children:Object(y.jsx)("h5",{className:"center-align",children:"MAKE A DONATION"})})})})]})})]})})})})};var B=function(e){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col s12",children:Object(y.jsx)("div",{className:"card",children:Object(y.jsxs)("div",{className:"card-content",children:[Object(y.jsx)("div",{id:"create-post-header",children:Object(y.jsx)("span",{className:"card-title",children:"Make A Donation"})}),Object(y.jsx)("div",{id:"p-divider",className:"divider"}),Object(y.jsxs)("div",{className:"row create-fundraiser-button-row center-align",children:[Object(y.jsxs)("div",{className:"card-content",children:[Object(y.jsx)("span",{id:"fundraiser-card-tile",className:"card-title fundraiser-card-title",children:"Clean Up The Park"}),Object(y.jsx)("span",{className:"card-title fundraiser-card-subtitle",children:"Chicago, IL"})]}),Object(y.jsx)("div",{className:"col s12 center-align",children:Object(y.jsx)("p",{children:"How much would you like to donate?"})}),Object(y.jsxs)("div",{className:"input-field col s8 m6 offset-s2 offset-m3",children:[Object(y.jsx)("input",{id:"donation-amount",type:"text",className:"validate"}),Object(y.jsx)("label",{htmlFor:"donation-amount",children:"$ Amount"})]}),Object(y.jsx)("div",{className:"input-field col s6",children:Object(y.jsx)("button",{id:"canel-make-donation-button",className:"btn waves-effect waves-light fwb red",type:"button",name:"action",children:"Cancel"})}),Object(y.jsx)("div",{className:"input-field col s6",children:Object(y.jsx)("button",{id:"make-donation-button",className:"btn waves-effect waves-light fwb green",type:"submit",name:"action",children:"Donate"})})]})]})})})})})},H=function(e){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"card-content grey lighten-4",children:Object(y.jsx)("div",{className:"card",children:Object(y.jsx)("form",{className:"login-form",children:Object(y.jsxs)("div",{id:"sign-in",className:"card-content",children:[Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"input-field col s12",children:[Object(y.jsx)("input",{id:"email-login",type:"email",className:"validate"}),Object(y.jsx)("label",{htmlFor:"email-login",children:"Email"})]})}),Object(y.jsx)("div",{className:"row",children:Object(y.jsxs)("div",{className:"input-field col s12",children:[Object(y.jsx)("input",{id:"password-login",type:"password",className:"validate"}),Object(y.jsx)("label",{htmlFor:"password-login",children:"Password"})]})}),Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col s10 offset-s1",children:Object(y.jsx)("button",{style:{width:"100%"},className:"btn btn-large waves-effect waves-light",type:"submit",name:"action",children:"LOGIN"})})})]})})})})})},J=function(){return Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col s12",children:Object(y.jsx)("div",{className:"card",children:Object(y.jsxs)("div",{className:"card-content",children:[Object(y.jsx)("div",{id:"create-post-header",children:Object(y.jsx)("span",{className:"card-title",children:"Create New Fundraising Campaign"})}),Object(y.jsx)("div",{id:"p-divider",className:"divider"}),Object(y.jsxs)("div",{className:"row create-fundraiser-button-row",children:[Object(y.jsxs)("div",{className:"input-field col s12 m6",children:[Object(y.jsx)("input",{id:"fundraiser-title",type:"text",className:"validate"}),Object(y.jsx)("label",{htmlFor:"fundraiser-title",children:"Title"})]}),Object(y.jsxs)("div",{className:"input-field col s12 m6",children:[Object(y.jsx)("input",{id:"fundraiser-location",type:"text",className:"validate"}),Object(y.jsx)("label",{htmlFor:"fundraiser-location",children:"Location"})]}),Object(y.jsxs)("div",{className:"input-field col s12 m6",children:[Object(y.jsx)("input",{id:"fundraiser-goal",type:"text",className:"validate"}),Object(y.jsx)("label",{htmlFor:"fundraiser-goal",children:"$ Amount"})]}),Object(y.jsxs)("div",{className:"input-field col s12",children:[Object(y.jsx)("textarea",{id:"fundraiser-description",className:"materialize-textarea",defaultValue:""}),Object(y.jsx)("label",{htmlFor:"fundraiser-description",children:"Description"})]}),Object(y.jsx)("div",{className:"input-field col s6",children:Object(y.jsx)("button",{id:"canel-create-fundraiser-button",className:"btn waves-effect waves-light fwb red",type:"button",name:"action",children:"Cancel"})}),Object(y.jsx)("div",{className:"input-field col s6",children:Object(y.jsx)("button",{id:"create-fundraiser-button",className:"btn waves-effect waves-light fwb green",type:"submit",name:"action",children:"Create"})})]})]})})})})},W=Object(u.a)({uri:"/graphql",credentials:"same-origin"}),K=Object(f.a)((function(e,a){var t=a.headers,s=localStorage.getItem("id_token");return{headers:Object(b.a)(Object(b.a)({},t),{},{authorization:s?"Bearer ".concat(s):""})}})),q=new O.a({link:K.concat(W),cache:new x.a});var V=function(){return Object(y.jsx)(p.a,{client:q,children:Object(y.jsxs)(m.a,{children:[Object(y.jsx)(C,{}),Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{exact:!0,path:"/",element:Object(y.jsx)(R,{})}),Object(y.jsx)(h.a,{exact:!0,path:"/signup",element:Object(y.jsx)(_,{})}),Object(y.jsx)(h.a,{exact:!0,path:"/login",element:Object(y.jsx)(H,{})}),Object(y.jsx)(h.a,{exact:!0,path:"/fundraiserInfoCard",element:Object(y.jsx)(G,{})}),Object(y.jsx)(h.a,{exact:!0,path:"/donate",element:Object(y.jsx)(B,{})}),Object(y.jsx)(h.a,{exact:!0,path:"/createFundraiser",element:Object(y.jsx)(J,{})}),Object(y.jsx)(h.a,{element:Object(y.jsx)(M,{})})]}),Object(y.jsx)($,{})]})})};j.a.render(Object(y.jsx)(d.a.StrictMode,{children:Object(y.jsx)(V,{})}),document.getElementById("root"))},75:function(e,a,t){}},[[125,1,2]]]);
//# sourceMappingURL=main.97455148.chunk.js.map