webpackJsonp([0x623bdfc73907],{228:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),u=a(s),i=n(15),c=a(i),f=n(78),d=a(f);n(438);var p=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.subtitle,n=e.author,a=this.props.data.markdownRemark,l=a.fields.tagSlugs,r=u.default.createElement("div",null,u.default.createElement(c.default,{className:"post-single__home-button",to:"/"},"All Articles")),o=u.default.createElement("div",{className:"post-single__tags"},u.default.createElement("ul",{className:"post-single__tags-list"},l&&l.map(function(e,t){return u.default.createElement("li",{className:"post-single__tags-list-item",key:e},u.default.createElement(c.default,{to:e,className:"post-single__tags-list-item-link"},a.frontmatter.tags[t]))}))),s=u.default.createElement("div",null);return u.default.createElement("div",null,r,u.default.createElement("div",{className:"post-single"},u.default.createElement("div",{className:"post-single__inner"},u.default.createElement("h1",{className:"post-single__title"},a.frontmatter.title),u.default.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:a.html}}),u.default.createElement("div",{className:"post-single__date"},u.default.createElement("em",null,"Published ",(0,d.default)(a.frontmatter.date).format("D MMM YYYY")))),u.default.createElement("div",{className:"post-single__footer"},o,u.default.createElement("hr",null),u.default.createElement("p",{className:"post-single__footer-text"},t,u.default.createElement("a",{href:"https://twitter.com/"+n.twitter,target:"_blank",rel:"noopener noreferrer"},u.default.createElement("br",null)," ",u.default.createElement("strong",null,n.name)," on Twitter")),s)))},t}(u.default.Component);t.default=p,e.exports=t.default},438:function(e,t){},237:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=n(1),u=a(s),i=n(22),c=a(i),f=n(228),d=a(f),p=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,a=this.props.data.markdownRemark,l=a.frontmatter,r=l.title,o=l.description,s=null!==o?o:n;return u.default.createElement("div",null,u.default.createElement(c.default,null,u.default.createElement("title",null,r+" - "+t),u.default.createElement("meta",{name:"description",content:s})),u.default.createElement(d.default,this.props))},t}(u.default.Component);t.default=p;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-template-jsx-99309dce293b2d8cd5ad.js.map