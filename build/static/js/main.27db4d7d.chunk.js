(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(51)},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(28),s=a.n(c),l=a(12),i=a(13),o=a(15),u=a(14),m=a(26),h=a(17),p=a(6),d=a(22);a(36),a(38);d.a.initializeApp({apiKey:"AIzaSyC-B0CkcLFB2Fa-wRSEwmOydQb1ak9ODLE",authDomain:"chatty-2052f.firebaseapp.com",projectId:"chatty-2052f",storageBucket:"chatty-2052f.appspot.com",messagingSenderId:"102528789607",appId:"1:102528789607:web:65a364f5a24e3c77ce38c2",measurementId:"G-3ENQ7F7WGB"});var b=d.a.auth,g=d.a.database();var v=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm fixed-top navbar-light bg-light"},r.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Chatty"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},b().currentUser?r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(p.b,{className:"nav-item nav-link mr-3 btn btn-outline-secondary",to:"/chat"},"Chat"),r.a.createElement("button",{className:"btn btn-primary mr-3",onClick:function(){return b().signOut()}},"Logout")):r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(p.b,{className:"nav-item nav-link mr-3 btn btn-outline-secondary",to:"/login"},"Sign In"),r.a.createElement(p.b,{className:"nav-item nav-link mr-3 btn btn-outline-primary",to:"/signup"},"Sign Up")))))};var f=function(){return r.a.createElement("footer",{className:"pt-5"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",null,"\xa9 Chatty 2021.")))},E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(v,null),r.a.createElement("section",null,r.a.createElement("div",{className:"jumbotron jumbotron-fluid py-5"},r.a.createElement("div",{className:"container text-center py-5"},r.a.createElement("h1",{className:"display-4"},"Welcome to Chatty"),r.a.createElement("p",{className:"lead"},"A great place to share your thoughts with friends"),r.a.createElement("div",{className:"mt-4"},r.a.createElement(p.b,{className:"btn btn-primary px-5 mr-3",to:"/signup"},"Create New Account"),r.a.createElement(p.b,{className:"btn btn-secondary px-5",to:"/login"},"Login to Your Account"))))),r.a.createElement(f,null))}}]),a}(n.Component),y=a(5),N=a.n(y),S=a(11),w=a(7),x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={user:b().currentUser,chats:[],content:"",readError:null,writeError:null,loadingChats:!1},n.handleChange=n.handleChange.bind(Object(w.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(w.a)(n)),n.myRef=r.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(N.a.mark(function e(){var t,a=this;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null,loadingChats:!0}),t=this.myRef.current;try{g.ref("chats").on("value",function(e){var n=[];e.forEach(function(e){n.push(e.val())}),n.sort(function(e,t){return e.timestamp-t.timestamp}),a.setState({chats:n}),t.scrollBy(0,t.scrollHeight),a.setState({loadingChats:!1})})}catch(n){this.setState({readError:n.message,loadingChats:!1})}case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(S.a)(N.a.mark(function e(t){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({writeError:null}),a=this.myRef.current,e.prev=3,e.next=6,g.ref("chats").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid,email:this.state.user.email,photo:this.state.user.photoURL});case 6:this.setState({content:""}),a.scrollBy(0,a.scrollHeight),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.setState({writeError:e.t0.message});case 13:case"end":return e.stop()}},e,this,[[3,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"formatTime",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"}),r.a.createElement("div",{className:"col-md-10 "},r.a.createElement("div",{className:"text-center margin-header"},r.a.createElement("h3",null,"Sofka chat")),r.a.createElement("div",{className:"chat-area",ref:this.myRef},this.state.loadingChats?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):"",this.state.chats.map(function(t){return r.a.createElement("p",{key:t.timestamp,className:"chat-bubble "+(e.state.user.uid===t.uid?"current-user":"")},r.a.createElement("img",{src:t.photo,className:"user-photo",alt:""}),t.content,r.a.createElement("br",null),r.a.createElement("span",{className:"chat-time float-right"},e.formatTime(t.timestamp)),r.a.createElement("span",{className:"chat-time float-left"},t.email))})),r.a.createElement("div",{align:"center"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-group form"},r.a.createElement("textarea",{className:"form-control",name:"content",onChange:this.handleChange,value:this.state.content}),this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{type:"submit",className:"btn btn-submit px-5 mt-4"},"Send")),r.a.createElement("div",{className:"py-5 mx-3"},"Login in as: ",r.a.createElement("strong",{className:"text-info"},this.state.user.email)))))))}}]),a}(n.Component),k=a(21);function j(){var e=new b.GoogleAuthProvider;return b().signInWithPopup(e)}function O(){var e=new b.GithubAuthProvider;return b().signInWithPopup(e)}var C=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(w.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(w.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(w.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(w.a)(e)),e}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(S.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.setState({error:""}),!(this.state.email.length>=41||this.state.password.length>=21)){e.next=5;break}return this.setState({error:"Please enter a valid email and password"}),e.abrupt("return");case 5:return e.prev=5,e.next=8,a=this.state.email,n=this.state.password,b().createUserWithEmailAndPassword(a,n);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(5),this.setState({error:e.t0.message});case 13:case"end":return e.stop()}var a,n},e,this,[[5,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(S.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(S.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),this.setState({error:e.t0.message});case 9:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-5 py-5 px-5",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Sign Up to",r.a.createElement(p.b,{className:"title ml-2",to:"/"},"Chatty")),r.a.createElement("p",{className:"lead"},"Fill in the form below to create an account."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email,required:!0,minLength:15,maxLength:40})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password",required:!0,minLength:8,maxLength:20})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5",type:"submit"},"Sign up")),r.a.createElement("p",null,"You can also sign up with any of these services"),r.a.createElement("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn},"Sign up with Google"),r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn},"Sign up with GitHub"),r.a.createElement("hr",null),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(p.b,{to:"/login"},"Login"))))}}]),a}(n.Component),I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(w.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(w.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(w.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(w.a)(e)),e}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(k.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(S.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,b().signInWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n},e,this,[[2,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(S.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(S.a)(N.a.mark(function e(){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-5 py-5 px-5 content-align-center",autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Login to",r.a.createElement(p.b,{className:"title ml-2",to:"/"},"Chatty")),r.a.createElement("p",{className:"lead"},"Fill in the form below to login to your account."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email,required:!0,minLength:15,maxLength:40})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password",required:!0,minLength:8,maxLength:20})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5",type:"submit"},"Login")),r.a.createElement("p",null,"You can also log in with any of these services"),r.a.createElement("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn},"Sign in with Google"),r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn},"Sign in with GitHub"),r.a.createElement("hr",null),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(p.b,{to:"/signup"},"Sign up"))))}}]),a}(n.Component),L=(a(50),function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Uh Oh! Page not found! 404"))}),A=["component","authenticated"],D=["component","authenticated"];function P(e){var t=e.component,a=e.authenticated,n=Object(m.a)(e,A);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function G(e){var t=e.component,a=e.authenticated,n=Object(m.a)(e,D);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return!1===a?r.a.createElement(t,e):r.a.createElement(h.a,{to:"/chat"})}}))}var B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().onAuthStateChanged(function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})})}},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(p.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:E}),r.a.createElement(P,{exact:!0,path:"/chat",authenticated:this.state.authenticated,component:x}),r.a.createElement(G,{exact:!0,path:"/signup",authenticated:this.state.authenticated,component:C}),r.a.createElement(G,{exact:!0,path:"/login",authenticated:this.state.authenticated,component:I}),r.a.createElement(h.b,{path:"*",component:L})))}}]),a}(n.Component),M=document.getElementById("root");s.a.render(r.a.createElement(B,null),M)}},[[31,1,2]]]);
//# sourceMappingURL=main.27db4d7d.chunk.js.map