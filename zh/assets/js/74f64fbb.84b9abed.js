"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16990],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14587:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"Configuring OpenLDAP",weight:1113,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/authentication/openldap/"]},s=void 0,l={unversionedId:"pages-for-subheaders/configure-openldap",id:"version-2.0-2.4/pages-for-subheaders/configure-openldap",title:"Configuring OpenLDAP",description:"Available as of v2.0.5",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/configure-openldap.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/configure-openldap",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/configure-openldap",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/configure-openldap.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Configuring OpenLDAP",weight:1113,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/authentication/openldap/"]},sidebar:"tutorialSidebar",previous:{title:"Creating an EKS Cluster",permalink:"/zh/v2.0-v2.4/reference-guides/installation-references/amazon-eks-permissions"},next:{title:"OpenLDAP Configuration Reference",permalink:"/zh/v2.0-v2.4/reference-guides/configure-openldap/openldap-config-reference"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure OpenLDAP in Rancher",id:"configure-openldap-in-rancher",level:2},{value:"Test Authentication",id:"test-authentication",level:3},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.0.5")),(0,o.kt)("p",null,"If your organization uses LDAP for user authentication, you can configure Rancher to communicate with an OpenLDAP server to authenticate users. This allows Rancher admins to control access to clusters and projects based on users and groups managed externally in the organisation's central user repository, while allowing end-users to authenticate with their LDAP credentials when logging in to the Rancher UI. "),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Rancher must be configured with a LDAP bind account (aka service account) to search and retrieve LDAP entries pertaining to users and groups that should have access. It is recommended to not use an administrator account or personal account for this purpose and instead create a dedicated account in OpenLDAP with read-only access to users and groups under the configured search base (see below)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Using TLS?")),(0,o.kt)("p",{parentName:"blockquote"},"If the certificate used by the OpenLDAP server is self-signed or not from a recognised certificate authority, make sure have at hand the CA certificate (concatenated with any intermediate certificates) in PEM format. You will have to paste in this certificate during the configuration so that Rancher is able to validate the certificate chain.")),(0,o.kt)("h2",{id:"configure-openldap-in-rancher"},"Configure OpenLDAP in Rancher"),(0,o.kt)("p",null,"Configure the settings for the OpenLDAP server, groups and users. For help filling out each field, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/configure-openldap/openldap-config-reference"},"configuration reference.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Before you proceed with the configuration, please familiarise yourself with the concepts of ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/about-authentication#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into the Rancher UI using the initial local ",(0,o.kt)("inlineCode",{parentName:"li"},"admin")," account."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, navigate to ",(0,o.kt)("strong",{parentName:"li"},"Security")," > ",(0,o.kt)("strong",{parentName:"li"},"Authentication")),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"OpenLDAP"),". The ",(0,o.kt)("strong",{parentName:"li"},"Configure an OpenLDAP server")," form will be displayed.")),(0,o.kt)("h3",{id:"test-authentication"},"Test Authentication"),(0,o.kt)("p",null,"Once you have completed the configuration, proceed by testing  the connection to the OpenLDAP server. Authentication with OpenLDAP will be enabled implicitly if the test is successful."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"The OpenLDAP user pertaining to the credentials entered in this step will be mapped to the local principal account and assigned administrator privileges in Rancher. You should therefore make a conscious decision on which LDAP account you use to perform this step.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"username")," and ",(0,o.kt)("strong",{parentName:"li"},"password")," for the OpenLDAP account that should be mapped to the local principal account."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Authenticate With OpenLDAP")," to test the OpenLDAP connection and finalise the setup.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OpenLDAP authentication is configured."),(0,o.kt)("li",{parentName:"ul"},"The LDAP user pertaining to the entered credentials is mapped to the local principal (administrative) account.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",{parentName:"blockquote"},"You will still be able to login using the locally configured ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," account and password in case of a disruption of LDAP services.")),(0,o.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,o.kt)("p",null,"If you are experiencing issues while testing the connection to the OpenLDAP server, first double-check the credentials entered for the service account as well as the search base configuration. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."))}d.isMDXComponent=!0}}]);