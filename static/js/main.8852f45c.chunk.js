(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),l=(n(14),n(5)),s=n(1),i=n(2),d=n(4),u=n(3),m=function(t){var e=t.todos,n=t.deletetodo,a=e.length?e.map((function(t){return o.a.createElement("div",{className:"collection-item",key:"todo.id"},o.a.createElement("p",null,t.content),o.a.createElement("button",{onClick:function(){n(t.id)}},"Remove"))})):o.a.createElement("p",{className:"center"},"No Winners yet !");return o.a.createElement("div",{className:"todos collection"},a)},h=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={content:null},t.handlechange=function(e){t.setState({content:e.target.value})},t.handlesubmit=function(e){e.preventDefault(),t.props.addtodo(t.state),t.setState({content:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handlesubmit},o.a.createElement("label",null,"Update Winners : "),o.a.createElement("input",{type:"text",id:"content",onChange:this.handlechange,value:this.state.content}),o.a.createElement("button",{className:"right"},"Add"))}}]),n}(a.Component),f=function(t){var e=t.todos1,n=t.deletetodo1,a=e.length?e.map((function(t){return o.a.createElement("div",{className:"collection-item",key:"todo.id"},o.a.createElement("p",null,t.content),o.a.createElement("button",{onClick:function(){n(t.id)}},"Remove"))})):o.a.createElement("p",{className:"center"},"No Award's left !");return o.a.createElement("div",{className:"todos collection"},a)},p=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={content:null},t.handlechange=function(e){t.setState({content:e.target.value})},t.handlesubmit=function(e){e.preventDefault(),t.props.addtodo1(t.state),t.setState({content:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handlesubmit},o.a.createElement("label",null,"Update Awards : "),o.a.createElement("input",{type:"text",id:"content",onChange:this.handlechange,value:this.state.content}),o.a.createElement("button",{className:"right"},"Add"))}}]),n}(a.Component),v=n(8),E=n.n(v),b=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={todos:[{id:1,content:"full house 1 -  priyansh !"},{id:2,content:"first line - gautam !"}],todos1:[]},t.deletetodo=function(e){var n=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:n})},t.deletetodo1=function(e){var n=t.state.todos1.filter((function(t){return t.id!==e}));t.setState({todos1:n})},t.addtodo=function(e){e.id=Math.random();var n=[].concat(Object(l.a)(t.state.todos),[e]);t.setState({todos:n})},t.addtodo1=function(e){e.id=Math.random();var n=[].concat(Object(l.a)(t.state.todos1),[e]);t.setState({todos1:n})},t}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-app"},o.a.createElement("img",{src:E.a,alt:"lahs-img"}),o.a.createElement("h1",{className:"todo-heading center red-text"},"Tambola"),o.a.createElement("h2",{className:"todo-heading center blue-text"},"Winner List"),o.a.createElement("div",{className:"Todo-List container"},o.a.createElement(m,{todos:this.state.todos,deletetodo:this.deletetodo}),o.a.createElement(h,{addtodo:this.addtodo})),o.a.createElement("h2",{className:"todo-heading center blue-text"},"Awards Left"),o.a.createElement("div",{className:"Todo-List container"},o.a.createElement(f,{todos1:this.state.todos1,deletetodo1:this.deletetodo1}),o.a.createElement(p,{addtodo1:this.addtodo1})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n.p+"static/media/lahs.d4c84980.jpeg"},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.8852f45c.chunk.js.map