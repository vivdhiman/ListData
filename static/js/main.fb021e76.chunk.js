(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{26:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n(2),c=n.n(a),r=n(14),i=n.n(r),o=(n(26),n(5)),u=n.n(o),d=n(15),h=n(16),l=n(17),j=n(3),b=n(20),f=n(19),p=n(18),O=n.n(p),g=function(t){Object(b.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(h.a)(this,n),(t=e.call(this)).state={res_data:"",list:[]},t.getTodos=t.getTodos.bind(Object(j.a)(t)),t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getTodos()}},{key:"getTodos",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://reqres.in/api/users?page=2").then((function(t){return t})).catch((function(t){console.log(t)}));case 2:e=t.sent,n=e.data,this.setState({res_data:n,list:n.data});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"LIST OF USERS: "}),this.state.list&&this.state.list.map((function(t){return Object(s.jsx)("table",{children:Object(s.jsx)("tr",{children:Object(s.jsxs)("td",{children:[t.first_name," ",t.last_name]})})})}))]})}}]),n}(a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),s(t),a(t),c(t),r(t)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.fb021e76.chunk.js.map