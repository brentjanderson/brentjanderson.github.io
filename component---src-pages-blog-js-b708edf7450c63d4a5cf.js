(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(e,t,n){"use strict";n.r(t);n(80),n(54);var a=n(0),r=n.n(a),l=n(156),i=n(39),c=function(e){var t=e.post;return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(i.Link,{to:t.fields.slug},t.frontmatter.title)),r.a.createElement("p",null,r.a.createElement("strong",null,t.frontmatter.date)),r.a.createElement("p",null,t.excerpt))},o=n(157);n.d(t,"pageQuery",function(){return s});t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter(function(e){return!!e.node.frontmatter.date}).map(function(e){return r.a.createElement(c,{key:e.node.id,post:e.node})});return r.a.createElement(o.a,null,r.a.createElement(l.c,null,r.a.createElement(l.j,null,r.a.createElement(l.a,null,r.a.createElement("div",null,t)))))};var s="2689209706"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Brent Anderson",description:"Brent Anderson's musings"}}}}},154:function(e,t,n){},157:function(e,t,n){"use strict";var a=n(153),r=n(0),l=n.n(r),i=n(1),c=n.n(i),o=n(158),s=n.n(o),u=n(39),m=(n(159),n(6)),d=n.n(m),f=n(40),E=n.n(f),p=n(156),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggle=n.toggle.bind(E()(E()(n))),n.state={isOpen:!1},n}d()(t,e);var n=t.prototype;return n.toggle=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){return l.a.createElement("div",null,l.a.createElement(p.g,{fixed:"top-sticky",light:!0,color:"light",expand:"md"},l.a.createElement(p.h,{href:"/"},"Brent Anderson"),l.a.createElement(p.i,{onClick:this.toggle}),l.a.createElement(p.b,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(p.d,{navbar:!0},l.a.createElement(p.e,null,l.a.createElement(p.f,{href:"/"},"Home")),l.a.createElement(p.e,null,l.a.createElement(p.f,{href:"/about"},"About")),l.a.createElement(p.e,null,l.a.createElement(p.f,{href:"/blog"},"Blog"))))))},t}(l.a.Component),h=(n(160),n(154),function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"2328579951",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.title},{name:"keywords",content:"brent anderson, software, engineering, essays"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",null,t))},data:a})});h.propTypes={children:c.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-blog-js-b708edf7450c63d4a5cf.js.map