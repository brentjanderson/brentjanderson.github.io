(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u}),n.d(t,"pageQuery",function(){return c});var a=n(0),r=n.n(a),i=n(152),l=n(153);function u(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.j,null,r.a.createElement(i.a,null,r.a.createElement("article",null,r.a.createElement("h1",null,n.title),r.a.createElement("p",null,n.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))))))}var c="1579142440"},146:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),u=n(145),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var o=n(146),s=n.n(o);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Brent Anderson",description:"Brent Anderson's musings"}}}}},149:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),u=n(50),c=n(2),o=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},150:function(e,t,n){},153:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),l=n(4),u=n.n(l),c=n(154),o=n.n(c),s=n(147),d=(n(155),n(7)),m=n.n(d),f=n(49),p=n.n(f),h=n(152),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggle=n.toggle.bind(p()(p()(n))),n.state={isOpen:!1},n}m()(t,e);var n=t.prototype;return n.toggle=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){return i.a.createElement("div",null,i.a.createElement(h.g,{fixed:"top-sticky",light:!0,color:"light",expand:"md"},i.a.createElement(h.h,{href:"/"},"Brent Anderson"),i.a.createElement(h.i,{onClick:this.toggle}),i.a.createElement(h.b,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(h.d,{navbar:!0},i.a.createElement(h.e,null,i.a.createElement(h.f,{href:"/"},"Home")),i.a.createElement(h.e,null,i.a.createElement(h.f,{href:"/about"},"About")),i.a.createElement(h.e,null,i.a.createElement(h.f,{href:"/blog"},"Blog")),i.a.createElement(h.e,null,i.a.createElement(h.f,{href:"/contact"},"Contact"))))))},t}(i.a.Component),E=(n(156),n(150),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"2328579951",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.title},{name:"keywords",content:"brent anderson, software, engineering, essays"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t))},data:a})});E.propTypes={children:u.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-603e4e10880a8b368f93.js.map