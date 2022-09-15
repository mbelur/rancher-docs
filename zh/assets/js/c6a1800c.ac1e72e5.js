"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9595],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(86010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),u=a(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,i=e.lazy,d=e.block,m=e.defaultValue,k=e.values,h=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:f[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,s.U)(),w=v.tabGroupChoices,C=v.setTabGroupChoices,x=(0,r.useState)(b),I=x[0],E=x[1],S=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var R=w[h];null!=R&&R!==I&&y.some((function(e){return e.value===R}))&&E(R)}var P=function(e){var t=e.currentTarget,a=S.indexOf(t),n=y[a].value;n!==I&&(A(t),E(n),null!=h&&C(h,String(n)))},K=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=S.indexOf(e.currentTarget)+1;a=null!=(n=S[r])?n:S[0];break;case"ArrowLeft":var o,i=S.indexOf(e.currentTarget)-1;a=null!=(o=S[i])?o:S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},y.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return S.push(e)},onKeyDown:K,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},1454:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(65488),l=a(85162),s=["components"],u={title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",weight:1200,aliases:["/rancher/v2.x/en/admin-settings/authentication/keycloak/"]},c=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak.md",tags:[],version:"2.5",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Configuring Keycloak (SAML)",description:"Create a Keycloak SAML client and configure Rancher to work with Keycloak. By the end your users will be able to sign into Rancher using their Keycloak logins",weight:1200,aliases:["/rancher/v2.x/en/admin-settings/authentication/keycloak/"]},sidebar:"tutorialSidebar",previous:{title:"Configuring GitHub",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-github"},next:{title:"Configuring PingIdentity (SAML)",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting the IDP Metadata",id:"getting-the-idp-metadata",level:2},{value:"Configuring Keycloak in Rancher",id:"configuring-keycloak-in-rancher",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"Annex: Troubleshooting",id:"annex-troubleshooting",level:2},{value:"You are not redirected to Keycloak",id:"you-are-not-redirected-to-keycloak",level:3},{value:"Forbidden message displayed after IdP login",id:"forbidden-message-displayed-after-idp-login",level:3},{value:"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata",id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata",level:3},{value:"Keycloak Error: &quot;We&#39;re sorry, failed to process response&quot;",id:"keycloak-error-were-sorry-failed-to-process-response",level:3},{value:"Keycloak Error: &quot;We&#39;re sorry, invalid requester&quot;",id:"keycloak-error-were-sorry-invalid-requester",level:3}],k={toc:m};function h(e){var t=e.components,u=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If your organization uses Keycloak Identity Provider (IdP) for user authentication, you can configure Rancher to allow your users to log in using their IdP credentials."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You must have a ",(0,o.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_installation/"},"Keycloak IdP Server")," configured.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Keycloak, create a ",(0,o.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"new SAML client"),", with the settings below. See the ",(0,o.kt)("a",{parentName:"p",href:"https://www.keycloak.org/docs/latest/server_admin/#saml-clients"},"Keycloak documentation")," for help."),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Setting"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Sign Documents")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Sign Assertions")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ON")," ",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"All other ",(0,o.kt)("inlineCode",{parentName:"td"},"ON/OFF")," Settings"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"OFF"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Client ID")),(0,o.kt)("td",{parentName:"tr",align:null},"Either ",(0,o.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata")," or the value configured in the ",(0,o.kt)("inlineCode",{parentName:"td"},"Entry ID Field")," of the Rancher Keycloak configuration",(0,o.kt)("sup",null,"2"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Client Name")),(0,o.kt)("td",{parentName:"tr",align:null},"<CLIENT_NAME> (e.g. ",(0,o.kt)("inlineCode",{parentName:"td"},"rancher"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Client Protocol")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SAML"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Valid Redirect URI")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/acs"))))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"><sup>1</sup>: Optionally, you can enable either one or both of these settings.\n><sup>2</sup>: Rancher SAML metadata won't be generated until a SAML provider is configured and saved.\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(91906).Z,width:"1962",height:"2292"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the new SAML client, create Mappers to expose the users fields"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Add all "Builtin Protocol Mappers"\n',(0,o.kt)("img",{src:a(1051).Z,width:"2618",height:"898"})),(0,o.kt)("li",{parentName:"ul"},'Create a new "Group list" mapper to map the member attribute to a user\'s groups\n',(0,o.kt)("img",{src:a(19640).Z,width:"1522",height:"1070"}))))),(0,o.kt)("h2",{id:"getting-the-idp-metadata"},"Getting the IDP Metadata"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Keycloak 5 and earlier",mdxType:"TabItem"},(0,o.kt)("p",null,"To get the IDP metadata, export a ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.xml")," file from your Keycloak client.\nFrom the ",(0,o.kt)("strong",{parentName:"p"},"Installation")," tab, choose the ",(0,o.kt)("strong",{parentName:"p"},"SAML Metadata IDPSSODescriptor")," format option and download your file.")),(0,o.kt)(l.Z,{value:"Keycloak 6-13",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Configure")," section, click the ",(0,o.kt)("strong",{parentName:"li"},"Realm Settings")," tab."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"General")," tab."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Endpoints")," field, click ",(0,o.kt)("strong",{parentName:"li"},"SAML 2.0 Identity Provider Metadata"),".")),(0,o.kt)("p",null,"Verify the IDP metadata contains the following attributes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"\nxmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"\nxmlns:ds="http://www.w3.org/2000/09/xmldsig#"\n')),(0,o.kt)("p",null,"Some browsers, such as Firefox, may render/process the document such that the contents appear to have been modified, and some attributes appear to be missing. In this situation, use the raw response data that can be found using your browser."),(0,o.kt)("p",null,"The following is an example process for Firefox, but will vary slightly for other browsers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},"F12")," to access the developer console."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Network")," tab."),(0,o.kt)("li",{parentName:"ol"},"From the table, click the row containing ",(0,o.kt)("inlineCode",{parentName:"li"},"descriptor"),"."),(0,o.kt)("li",{parentName:"ol"},"From the details pane, click the ",(0,o.kt)("strong",{parentName:"li"},"Response")," tab."),(0,o.kt)("li",{parentName:"ol"},"Copy the raw response data.")),(0,o.kt)("p",null,"The XML obtained contains ",(0,o.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor")," as the root element. Rancher expects the root element to be ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityDescriptor")," rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"EntitiesDescriptor"),". So before passing this XML to Rancher, follow these steps to adjust it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy all the attributes from ",(0,o.kt)("inlineCode",{parentName:"li"},"EntitiesDescriptor")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"EntityDescriptor")," that are not present."),(0,o.kt)("li",{parentName:"ol"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"<EntitiesDescriptor>")," tag from the beginning."),(0,o.kt)("li",{parentName:"ol"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"</EntitiesDescriptor>")," from the end of the xml.")),(0,o.kt)("p",null,"You are left with something similar as the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" entityID="https://{KEYCLOAK-URL}/auth/realms/{REALM-NAME}">\n....\n</EntityDescriptor>\n'))),(0,o.kt)(l.Z,{value:"Keycloak 14+",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Configure")," section, click the ",(0,o.kt)("strong",{parentName:"li"},"Realm Settings")," tab."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"General")," tab."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Endpoints")," field, click ",(0,o.kt)("strong",{parentName:"li"},"SAML 2.0 Identity Provider Metadata"),".")),(0,o.kt)("p",null,"Verify the IDP metadata contains the following attributes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata"\nxmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"\nxmlns:ds="http://www.w3.org/2000/09/xmldsig#"\n')),(0,o.kt)("p",null,"Some browsers, such as Firefox, may render/process the document such that the contents appear to have been modified, and some attributes appear to be missing. In this situation, use the raw response data that can be found using your browser."),(0,o.kt)("p",null,"The following is an example process for Firefox, but will vary slightly for other browsers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},"F12")," to access the developer console."),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Network")," tab."),(0,o.kt)("li",{parentName:"ol"},"From the table, click the row containing ",(0,o.kt)("inlineCode",{parentName:"li"},"descriptor"),"."),(0,o.kt)("li",{parentName:"ol"},"From the details pane, click the ",(0,o.kt)("strong",{parentName:"li"},"Response")," tab."),(0,o.kt)("li",{parentName:"ol"},"Copy the raw response data.")))),(0,o.kt)("h2",{id:"configuring-keycloak-in-rancher"},"Configuring Keycloak in Rancher"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,o.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Keycloak"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure Keycloak Account")," form. For help with filling the form, see the ",(0,o.kt)("a",{parentName:"p",href:"#configuration-reference"},"configuration reference"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After you complete the ",(0,o.kt)("strong",{parentName:"p"},"Configure Keycloak Account")," form, click ",(0,o.kt)("strong",{parentName:"p"},"Authenticate with Keycloak"),", which is at the bottom of the page."),(0,o.kt)("p",{parentName:"li"},"Rancher redirects you to the IdP login page. Enter credentials that authenticate with Keycloak IdP to validate your Rancher Keycloak configuration."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You may have to disable your popup blocker to see the IdP login page.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with Keycloak. Your users can now sign into Rancher using their Keycloak logins."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SAML Provider Caveats:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"SAML Protocol does not support search or lookup for users or groups. Therefore, there is no validation on users or groups when adding them to Rancher."),(0,o.kt)("li",{parentName:"ul"},"When adding users, the exact user IDs (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"UID Field"),") must be entered correctly. As you type the user ID, there will be no search for other  user IDs that may match."),(0,o.kt)("li",{parentName:"ul"},"When adding groups, you must select the group from the drop-down that is next to the text box. Rancher assumes that any input from the text box is a user."),(0,o.kt)("li",{parentName:"ul"},"The group drop-down shows only the groups that you are a member of. You will not be able to add groups that you are not a member of.")))),(0,o.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,o.kt)("td",{parentName:"tr",align:null},"The attribute that contains the display name of users. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"givenName"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,o.kt)("td",{parentName:"tr",align:null},"The attribute that contains the user name/given name. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"email"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,o.kt)("td",{parentName:"tr",align:null},"An attribute that is unique to every user. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"email"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,o.kt)("td",{parentName:"tr",align:null},"Make entries for managing group memberships. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Example: ",(0,o.kt)("inlineCode",{parentName:"td"},"member"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Entity ID Field"),(0,o.kt)("td",{parentName:"tr",align:null},"The ID that needs to be configured as a client ID in the Keycloak client. ",(0,o.kt)("br",null),(0,o.kt)("br",null),"Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/keycloak/saml/metadata"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,o.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,o.kt)("td",{parentName:"tr",align:null},"A key/certificate pair to create a secure shell between Rancher and your IdP.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IDP-metadata"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("inlineCode",{parentName:"td"},"metadata.xml")," file that you exported from your IdP server.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," You can generate a key/certificate pair using an openssl command. For example:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"   openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.cert\n"))),(0,o.kt)("h2",{id:"annex-troubleshooting"},"Annex: Troubleshooting"),(0,o.kt)("p",null,"If you are experiencing issues while testing the connection to the Keycloak server, first double-check the configuration option of your SAML client. You may also inspect the Rancher logs to help pinpointing the problem cause. Debug logs may contain more detailed information about the error. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/faq/technical-items#how-can-i-enable-debug-logging"},"How can I enable debug logging")," in this documentation."),(0,o.kt)("h3",{id:"you-are-not-redirected-to-keycloak"},"You are not redirected to Keycloak"),(0,o.kt)("p",null,"When you click on ",(0,o.kt)("strong",{parentName:"p"},"Authenticate with Keycloak"),", you are not redirected to your IdP."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify your Keycloak client configuration."),(0,o.kt)("li",{parentName:"ul"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"li"},"Force Post Binding")," set to ",(0,o.kt)("inlineCode",{parentName:"li"},"OFF"),".")),(0,o.kt)("h3",{id:"forbidden-message-displayed-after-idp-login"},"Forbidden message displayed after IdP login"),(0,o.kt)("p",null,"You are correctly redirected to your IdP login page and you are able to enter your credentials, however you get a ",(0,o.kt)("inlineCode",{parentName:"p"},"Forbidden")," message afterwards."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check the Rancher debug log."),(0,o.kt)("li",{parentName:"ul"},"If the log displays ",(0,o.kt)("inlineCode",{parentName:"li"},"ERROR: either the Response or Assertion must be signed"),", make sure either ",(0,o.kt)("inlineCode",{parentName:"li"},"Sign Documents")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Sign assertions")," is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"ON")," in your Keycloak client.")),(0,o.kt)("h3",{id:"http-502-when-trying-to-access-v1-samlkeycloaksamlmetadata"},"HTTP 502 when trying to access /v1-saml/keycloak/saml/metadata"),(0,o.kt)("p",null,"This is usually due to the metadata not being created until a SAML provider is configured.\nTry configuring and saving keycloak as your SAML provider and then accessing the metadata."),(0,o.kt)("h3",{id:"keycloak-error-were-sorry-failed-to-process-response"},'Keycloak Error: "We\'re sorry, failed to process response"'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,o.kt)("li",{parentName:"ul"},"If the log displays ",(0,o.kt)("inlineCode",{parentName:"li"},"failed: org.keycloak.common.VerificationException: Client does not have a public key"),", set ",(0,o.kt)("inlineCode",{parentName:"li"},"Encrypt Assertions")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")),(0,o.kt)("h3",{id:"keycloak-error-were-sorry-invalid-requester"},'Keycloak Error: "We\'re sorry, invalid requester"'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check your Keycloak log."),(0,o.kt)("li",{parentName:"ul"},"If the log displays ",(0,o.kt)("inlineCode",{parentName:"li"},"request validation failed: org.keycloak.common.VerificationException: SigAlg was null"),", set ",(0,o.kt)("inlineCode",{parentName:"li"},"Client Signature Required")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"OFF")," in your Keycloak client.")))}h.isMDXComponent=!0},1051:function(e,t,a){t.Z=a.p+"assets/images/keycloak-saml-client-builtin-mappers-00ff9682000bed21181c493512aaac6f.png"},91906:function(e,t,a){t.Z=a.p+"assets/images/keycloak-saml-client-configuration-c6ef99ce0f7510ce130ee88e940cc430.png"},19640:function(e,t,a){t.Z=a.p+"assets/images/keycloak-saml-client-group-mapper-bc05499e6b7e1f429b0a97490c1d9ddd.png"}}]);