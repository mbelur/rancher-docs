"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[97462],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Docker Install Commands",weight:1},c=void 0,s={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands",id:"version-2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands",title:"Docker Install Commands",description:"The Docker installation is for Rancher users who want to test out Rancher.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands.md",tags:[],version:"2.5",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Docker Install Commands",weight:1},sidebar:"tutorialSidebar",previous:{title:"4. Install Rancher",permalink:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},next:{title:"Installing Rancher on a Single Node Using Docker",permalink:"/v2.5/pages-for-subheaders/rancher-on-a-single-node-with-docker"}},p={},d=[{value:"Option A: Default Self-Signed Certificate",id:"option-a-default-self-signed-certificate",level:3},{value:"Option B: Bring Your Own Certificate: Self-Signed",id:"option-b-bring-your-own-certificate-self-signed",level:3},{value:"Option C: Bring Your Own Certificate: Signed by Recognized CA",id:"option-c-bring-your-own-certificate-signed-by-recognized-ca",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Docker installation is for Rancher users who want to test out Rancher."),(0,i.kt)("p",null,"Instead of running on a Kubernetes cluster, you install the Rancher server component on a single node using a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command. Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server."),(0,i.kt)("p",null,"For Rancher v2.5+, the backup application can be used to migrate the Rancher server from a Docker install to a Kubernetes install using ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"these steps.")),(0,i.kt)("p",null,"For security purposes, SSL (Secure Sockets Layer) is required when using Rancher. SSL secures all Rancher network communication, like when you login or interact with a cluster."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_SYSTEM_DEFAULT_REGISTRY")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,i.kt)("td",{parentName:"tr",align:null},"Configure Rancher server to always pull from your private registry when provisioning clusters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"CATTLE_SYSTEM_CATALOG")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bundled")),(0,i.kt)("td",{parentName:"tr",align:null},"Configure Rancher server to use the packaged copy of Helm system charts. The ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"system charts")," repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS. These ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"Helm charts")," are located in GitHub, but since you are in an air gapped environment, using the charts that are bundled within Rancher is much easier than setting up a Git mirror.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Do you want to...")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Configure custom CA root certificate to access your services? See ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates/"},"Custom CA root certificate"),"."),(0,i.kt)("li",{parentName:"ul"},"Record all transactions with the Rancher API? See ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/reference-guides/single-node-rancher-in-docker/advanced-options#api-audit-log"},"API Auditing"),"."))),(0,i.kt)("p",null,"Choose from the following options:"),(0,i.kt)("h3",{id:"option-a-default-self-signed-certificate"},"Option A: Default Self-Signed Certificate"),(0,i.kt)("details",{id:"option-a"},(0,i.kt)("summary",null,"Click to expand"),(0,i.kt)("p",null,"If you are installing Rancher in a development or testing environment where identity verification isn't a concern, install Rancher using the self-signed certificate that it generates. This installation option omits the hassle of generating a certificate yourself."),(0,i.kt)("p",null,"Log into your Linux host, and then run the installation command below. When entering the command, use the table below to replace each placeholder."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,i.kt)("td",{parentName:"tr",align:null},"Your private registry URL and port.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION_TAG>")),(0,i.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,i.kt)("a",{parentName:"td",href:"/v2.5/reference-guides/installation-references/helm-chart-options"},"Rancher version")," that you want to install.")))),(0,i.kt)("p",null,"As of Rancher v2.5, privileged access is ",(0,i.kt)("a",{parentName:"p",href:"#privileged-access-for-rancher-v2-5"},"required.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    -e CATTLE_SYSTEM_CATALOG=bundled \\ # Use the packaged Rancher system charts\n    --privileged \\\n    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>\n"))),(0,i.kt)("h3",{id:"option-b-bring-your-own-certificate-self-signed"},"Option B: Bring Your Own Certificate: Self-Signed"),(0,i.kt)("details",{id:"option-b"},(0,i.kt)("summary",null,"Click to expand"),(0,i.kt)("p",null,"In development or testing environments where your team will access your Rancher server, create a self-signed certificate for use with your install so that your team can verify they're connecting to your instance of Rancher."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:"),"\nFrom a computer with an internet connection, create a self-signed certificate using ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/"},"OpenSSL")," or another method of your choice."),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The certificate files must be in PEM format."),(0,i.kt)("li",{parentName:"ul"},"In your certificate file, include all intermediate certificates in the chain. Order your certificates with your certificate first, followed by the intermediates. For an example, see ",(0,i.kt)("a",{parentName:"li",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"},"Certificate Troubleshooting.")))),(0,i.kt)("p",null,"After creating your certificate, log into your Linux host, and then run the installation command below. When entering the command, use the table below to replace each placeholder. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," flag and provide the path to your certificates to mount them in your container."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<CERT_DIRECTORY>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the directory containing your certificate files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<FULL_CHAIN.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to your full certificate chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<PRIVATE_KEY.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the private key for your certificate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<CA_CERTS.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the certificate authority's certificate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,i.kt)("td",{parentName:"tr",align:null},"Your private registry URL and port.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION_TAG>")),(0,i.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,i.kt)("a",{parentName:"td",href:"/v2.5/reference-guides/installation-references/helm-chart-options"},"Rancher version")," that you want to install.")))),(0,i.kt)("p",null,"As of Rancher v2.5, privileged access is ",(0,i.kt)("a",{parentName:"p",href:"#privileged-access-for-rancher-v2-5"},"required.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \\\n    -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \\\n    -v /<CERT_DIRECTORY>/<CA_CERTS.pem>:/etc/rancher/ssl/cacerts.pem \\\n    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    -e CATTLE_SYSTEM_CATALOG=bundled \\ # Use the packaged Rancher system charts\n    --privileged \\\n    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>\n"))),(0,i.kt)("h3",{id:"option-c-bring-your-own-certificate-signed-by-recognized-ca"},"Option C: Bring Your Own Certificate: Signed by Recognized CA"),(0,i.kt)("details",{id:"option-c"},(0,i.kt)("summary",null,"Click to expand"),(0,i.kt)("p",null,"In development or testing environments where you're exposing an app publicly, use a certificate signed by a recognized CA so that your user base doesn't encounter security warnings."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")," The certificate files must be in PEM format.")),(0,i.kt)("p",null,"After obtaining your certificate, log into your Linux host, and then run the installation command below. When entering the command, use the table below to replace each placeholder. Because your certificate is signed by a recognized CA, mounting an additional CA certificate file is unnecessary."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<CERT_DIRECTORY>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the directory containing your certificate files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<FULL_CHAIN.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to your full certificate chain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<PRIVATE_KEY.pem>")),(0,i.kt)("td",{parentName:"tr",align:null},"The path to the private key for your certificate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,i.kt)("td",{parentName:"tr",align:null},"Your private registry URL and port.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION_TAG>")),(0,i.kt)("td",{parentName:"tr",align:null},"The release tag of the ",(0,i.kt)("a",{parentName:"td",href:"/v2.5/reference-guides/installation-references/helm-chart-options"},"Rancher version")," that you want to install.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-cacerts")," as argument to the container to disable the default CA certificate generated by Rancher.")),(0,i.kt)("p",null,"As of Rancher v2.5, privileged access is ",(0,i.kt)("a",{parentName:"p",href:"#privileged-access-for-rancher-v2-5"},"required.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n    -p 80:80 -p 443:443 \\\n    --no-cacerts \\\n    -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/rancher/ssl/cert.pem \\\n    -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/rancher/ssl/key.pem \\\n    -e CATTLE_SYSTEM_DEFAULT_REGISTRY=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    -e CATTLE_SYSTEM_CATALOG=bundled \\ # Use the packaged Rancher system charts\n    --privileged\n    <REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher:<RANCHER_VERSION_TAG>\n"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," If you don't intend to send telemetry data, opt out ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/faq/telemetry"},"telemetry")," during the initial login.")))}m.isMDXComponent=!0}}]);