(this["webpackJsonpmy-icon-app"]=this["webpackJsonpmy-icon-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(11),r=a.n(c),o=(a(23),a(12)),l=a(13),s=a(16),m=a(14),u=a(17),p=(a(24),a(15)),d=a.n(p),v=function(e){return i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,e.title))},h=function(e){var t="like-icon ";return e.el.marked&&(t+=" like-icon-red"),i.a.createElement("div",{className:"main-content_block"},i.a.createElement("img",{className:"main-content_img",src:e.el.download_url,alt:"picture "+e.el.id}),i.a.createElement("div",{className:"main-content_img_description"},i.a.createElement("div",{className:"main-content_img_description_author"},i.a.createElement("h5",null,e.el.author)),i.a.createElement("div",{className:"main-content_img_description_like"},i.a.createElement("span",{className:t,onClick:e.onLikeClick},"\u2665"))))},f=function(e){var t="nav-button ";return e&&e.isActive&&(t+=" active-button"),console.log(e),i.a.createElement("div",{className:t,"data-name":e.dataName,onClick:function(){return e.changeShowScreen({props:e})}},e.title)},E=function(e){return i.a.createElement("nav",{className:"nav"},e.props.param.buttons.map((function(t,a){return i.a.createElement(f,{dataName:t.dataName,title:t.title,key:t.id,isActive:e.props.param.buttons[a].isActive,changeShowScreen:e.props.changeShowScreen})})))},k=function(e){var t=function(t){return t.map((function(t){return i.a.createElement(h,{el:t,key:t.id,onLikeClick:function(){return e.onLikeClick(t.id)}})}))};return i.a.createElement("main",{className:"App-main"},i.a.createElement(E,{props:e}),!e.param.isLoading&&"pictures"===e.param.screenShow&&i.a.createElement("div",{className:"main-pictures main-content"},t(e.param.apiData)),!e.param.isLoading&&"favorites"===e.param.screenShow&&i.a.createElement("div",{className:"main-favorites main-content"},t(e.param.favorites)))},g=(a(42),function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Loading..."),i.a.createElement("div",{className:"lds-roller"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)))}),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).changeShowScreen=function(e){if(a.setState({screenShow:e.props.dataName}),!e.props.isActive){var t=a.state.buttons.concat();t.forEach((function(t){t.isActive=t.dataName===e.props.dataName})),a.setState({buttons:t})}},a.onLikeClick=function(e){var t=a.state.apiData.concat(),n=a.state.favorites.concat(),i=t.find((function(t){return t.id===e}));if(i.marked)return n.forEach((function(e,t){e.id===i.id&&n.splice(t,1)})),a.setState({favorites:n,apiData:t}),i.marked=!1;i.marked=!0,n.push(i),a.setState({favorites:n,apiData:t})},a.state={isLoading:!0,screenShow:"pictures",apiData:[],favorites:[],buttons:[{id:1,title:"Pictures",dataName:"pictures",isActive:!0},{id:2,title:"Favorites",dataName:"favorites",isActive:!1}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://picsum.photos/v2/list").then((function(t){e.setState({apiData:e.state.apiData.concat(t.data),isLoading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,{title:"Choice your picture"}),this.state.isLoading?i.a.createElement(g,null):i.a.createElement(k,{param:this.state,changeShowScreen:this.changeShowScreen,onLikeClick:this.onLikeClick}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.a8a0d389.chunk.js.map