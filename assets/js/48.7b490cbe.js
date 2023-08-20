"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48],{9058:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(3366),l=a(7294),n=a(6010),i=a(7961),o=a(7524),s=a(9960),m=a(5999),c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function u(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(c.sidebarItemList,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:c.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title))})))))}var d=a(3102);function g(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function v(e){return l.createElement(d.Zo,{component:g,props:e})}function f(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(v,{sidebar:t}):l.createElement(u,{sidebar:t}):null}var h=["sidebar","toc","children"];function p(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,h),m=t&&t.items.length>0;return l.createElement(i.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(f,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},390:function(e,t,a){a.d(t,{Z:function(){return R}});var r=a(7294),l=a(6010),n=a(9460),i=a(4996);function o(e){var t,a=e.children,l=e.className,o=(0,n.C)(),s=o.frontMatter,m=o.assets,c=(0,i.C)().withBaseUrl,u=null!=(t=m.image)?t:s.image;return r.createElement("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&r.createElement("meta",{itemProp:"image",content:c(u,{absolute:!0})}),a)}var s=a(9960),m={title:"title_f1Hy"};function c(e){var t=e.className,a=(0,n.C)(),i=a.metadata,o=a.isBlogPostPage,c=i.permalink,u=i.title,d=o?"h1":"h2";return r.createElement(d,{className:(0,l.Z)(m.title,t),itemProp:"headline"},o?u:r.createElement(s.Z,{itemProp:"url",to:c},u))}var u=a(5999),d=a(8824),g={container:"container_mt6G"};function v(e){var t,a=e.readingTime,l=(t=(0,d.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return r.createElement(r.Fragment,null,l(a))}function f(e){var t=e.date,a=e.formattedDate;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function h(){return r.createElement(r.Fragment,null," \xb7 ")}function p(e){var t=e.className,a=(0,n.C)().metadata,i=a.date,o=a.formattedDate,s=a.readingTime;return r.createElement("div",{className:(0,l.Z)(g.container,"margin-vert--md",t)},r.createElement(f,{date:i,formattedDate:o}),void 0!==s&&r.createElement(r.Fragment,null,r.createElement(h,null),r.createElement(v,{readingTime:s})))}function b(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function E(e){var t=e.author,a=e.className,n=t.name,i=t.title,o=t.url,s=t.imageURL,m=t.email,c=o||m&&"mailto:"+m||void 0;return r.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},s&&r.createElement(b,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(b,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),i&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}var P={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){var t=e.className,a=(0,n.C)(),i=a.metadata.authors,o=a.assets;if(0===i.length)return null;var s=i.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?P.imageOnlyAuthorRow:"row",t)},i.map((function(e,t){var a;return r.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?P.imageOnlyAuthorCol:P.authorCol),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(a=o.authorsImageUrls[t])?a:e.imageURL})}))})))}function _(){return r.createElement("header",null,r.createElement(c,null),r.createElement(p,null),r.createElement(N,null))}var Z=a(8780),k=a(6905);function I(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage;return r.createElement("div",{id:i?Z.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},r.createElement(k.Z,null,t))}var C=a(4881),w=a(1526),T=a(7462),y=a(3366),F=["blogPostTitle"];function L(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function B(e){var t=e.blogPostTitle,a=(0,y.Z)(e,F);return r.createElement(s.Z,(0,T.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),r.createElement(L,null))}var A={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function M(){var e=(0,n.C)(),t=e.metadata,a=e.isBlogPostPage,i=t.tags,o=t.title,s=t.editUrl,m=t.hasTruncateMarker,c=!a&&m,u=i.length>0;return u||c||s?r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",a&&A.blogPostFooterDetailsFull)},u&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},r.createElement(w.Z,{tags:i})),a&&s&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(C.Z,{editUrl:s})),c&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":u})},r.createElement(B,{blogPostTitle:o,to:t.permalink}))):null}function R(e){var t=e.children,a=e.className,i=(0,n.C)().isBlogPostPage?void 0:"margin-bottom--xl";return r.createElement(o,{className:(0,l.Z)(i,a)},r.createElement(_,null),r.createElement(I,null,t),r.createElement(M,null))}},9460:function(e,t,a){a.d(t,{C:function(){return o},n:function(){return i}});var r=a(7294),l=a(9688),n=r.createContext(null);function i(e){var t=e.children,a=e.content,l=e.isBlogPostPage,i=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==l&&l});return r.createElement(n.Provider,{value:i},t)}function o(){var e=(0,r.useContext)(n);if(null===e)throw new l.i6("BlogPostProvider");return e}},8824:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(7294),l=a(2263),n=["zero","one","two","few","many","other"];function i(e){return n.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:i(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);