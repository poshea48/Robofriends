(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(37)},29:function(e,n,t){},31:function(e,n,t){},33:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(15),c=t.n(a),i=t(9),s=t(7),l=t(18),u=t(19),d=(t(29),t(2)),h=t(3),f=t(5),b=t(4),p=t(6),g=function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return console.log("Header"),r.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),n}(o.Component),E=function(e){var n=e.profile,t=n.username,o=n.name,a=n.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,o),r.a.createElement("p",null,a)))},m=function(e){var n=e.cards;return console.log("CardList"),r.a.createElement("div",null,n.map(function(e){return r.a.createElement(E,{key:e.id,profile:e})}))},v=(t(31),function(e){var n=e.searchChange;return console.log("SearchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue'",name:"searchfield",type:"search",placeholder:"search robots",onChange:n}))}),O=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},w=function(e){function n(e){var t;return Object(d.a)(this,n),(t=Object(f.a)(this,Object(b.a)(n).call(this,e))).state={hasError:!1},t}return Object(p.a)(n,e),Object(h.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"ooooops.  No bueno"):this.props.children}}]),n}(o.Component),y=(t(33),function(e){function n(){return Object(d.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc helvetica"},r.a.createElement(g,null),r.a.createElement(v,{searchChange:t}),r.a.createElement(O,null,r.a.createElement(w,null,r.a.createElement(m,{cards:c}))))}}]),n}(o.Component)),R=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})})})}}})(y),j=(t(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C=t(8),k={searchField:""},_={isPending:!1,robots:[],error:""},N=Object(l.createLogger)(),T=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object(C.a)({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object(C.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(C.a)({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(C.a)({},e,{error:n.payload,isPending:!1});default:return e}}}),F=Object(s.d)(T,Object(s.a)(u.a,N));c.a.render(r.a.createElement(i.a,{store:F},r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RoboFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/RoboFriends","/service-worker.js");j?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):S(n,e)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.cb3834f3.chunk.js.map