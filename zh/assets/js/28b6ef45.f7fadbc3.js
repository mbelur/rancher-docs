"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[46307],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53699:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],s={title:"2. \u5b89\u88c5 Kubernetes",weight:200},i=void 0,c={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",id:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",title:"2. \u5b89\u88c5 Kubernetes",description:"\u57fa\u7840\u8bbe\u65bd\u914d\u7f6e\u597d\u540e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a RKE \u96c6\u7fa4\u6765\u5b89\u88c5 Rancher\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"2. \u5b89\u88c5 Kubernetes",weight:200},sidebar:"tutorialSidebar",previous:{title:"1. \u914d\u7f6e\u57fa\u7840\u8bbe\u65bd",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure"},next:{title:"3. \u5b89\u88c5 Rancher",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"}},p={},u=[{value:"\u79bb\u7ebf\u4ee3\u7406",id:"\u79bb\u7ebf\u4ee3\u7406",level:4},{value:"\u521b\u5efa RKE \u96c6\u7fa4",id:"\u521b\u5efa-rke-\u96c6\u7fa4",level:3},{value:"\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6",id:"\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u57fa\u7840\u8bbe\u65bd\u914d\u7f6e\u597d\u540e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a RKE \u96c6\u7fa4\u6765\u5b89\u88c5 Rancher\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u5728\u6240\u6709\u4e09\u4e2a Linux \u8282\u70b9\u4e0a\u5b89\u88c5 Docker \u5e76\u8bbe\u7f6e HTTP \u4ee3\u7406\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u4e09\u4e2a\u8282\u70b9\u4e0a\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,l.kt)("p",null,"\u4e3a\u65b9\u4fbf\u8d77\u89c1\uff0c\u5c06\u4ee3\u7406\u7684 IP \u5730\u5740\u548c\u7aef\u53e3\u5bfc\u51fa\u5230\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u5e76\u4e3a\u4f60\u5f53\u524d\u7684 shell \u8bbe\u7f6e HTTP_PROXY \u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'export proxy_host="10.0.0.5:8888"\nexport HTTP_PROXY=http://${proxy_host}\nexport HTTPS_PROXY=http://${proxy_host}\nexport NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16\n')),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u914d\u7f6e apt \u4ee5\u5728\u5b89\u88c5\u5305\u65f6\u4f7f\u7528\u8fd9\u4e2a\u4ee3\u7406\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u4e0d\u662f Ubuntu\uff0c\u8bf7\u76f8\u5e94\u8c03\u6574\u6b65\u9aa4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'cat <<\'EOF\' | sudo tee /etc/apt/apt.conf.d/proxy.conf > /dev/null\nAcquire::http::Proxy "http://${proxy_host}/";\nAcquire::https::Proxy "http://${proxy_host}/";\nEOF\n')),(0,l.kt)("p",null,"\u5b89\u88c5 Docker\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -sL https://releases.rancher.com/install-docker/19.03.sh | sh\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u786e\u4fdd\u4f60\u7684\u5f53\u524d\u7528\u6237\u80fd\u591f\u5728\u6ca1\u6709 sudo \u7684\u60c5\u51b5\u4e0b\u8bbf\u95ee Docker Daemon\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo usermod -aG docker YOUR_USERNAME\n")),(0,l.kt)("p",null,"\u914d\u7f6e Docker Daemon \u4f7f\u7528\u4ee3\u7406\u6765\u62c9\u53d6\u955c\u50cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sudo mkdir -p /etc/systemd/system/docker.service.d\ncat <<\'EOF\' | sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf > /dev/null\n[Service]\nEnvironment="HTTP_PROXY=http://${proxy_host}"\nEnvironment="HTTPS_PROXY=http://${proxy_host}"\nEnvironment="NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16"\nEOF\n')),(0,l.kt)("p",null,"\u8981\u5e94\u7528\u914d\u7f6e\uff0c\u8bf7\u91cd\u65b0\u542f\u52a8 Docker Daemon\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload\nsudo systemctl restart docker\n")),(0,l.kt)("h4",{id:"\u79bb\u7ebf\u4ee3\u7406"},"\u79bb\u7ebf\u4ee3\u7406"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"v2.6.4 \u7684\u65b0\u529f\u80fd")),(0,l.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u5728\u914d\u7f6e\u7684\u79bb\u7ebf\u96c6\u7fa4\u4e2d\u914d\u7f6e\u4e3b\u673a\u9a71\u52a8\u96c6\u7fa4\uff0c\u4ee5\u4f7f\u7528\u4ee3\u7406\u8fdb\u884c\u51fa\u7ad9\u8fde\u63a5\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e\u9ed8\u8ba4\u89c4\u5219\u5916\uff0c\u4f60\u8fd8\u9700\u8981\u989d\u5916\u6dfb\u52a0\u5982\u4e0b\u6240\u793a\u7684\u89c4\u5219\uff0c\u4ee5\u4ece\u4ee3\u7406\u7684 Rancher \u73af\u5883\u4e2d\u914d\u7f6e\u4e3b\u673a\u9a71\u52a8\u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u6839\u636e\u4f60\u7684\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/apt/apt.conf.d/proxy.conf"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"acl SSL_ports port 22\nacl SSL_ports port 2376\n\nacl Safe_ports port 22      # ssh\nacl Safe_ports port 2376    # docker port\n")),(0,l.kt)("h3",{id:"\u521b\u5efa-rke-\u96c6\u7fa4"},"\u521b\u5efa RKE \u96c6\u7fa4"),(0,l.kt)("p",null,"\u5728\u80fd\u901a\u8fc7 SSH \u8bbf\u95ee Linux \u8282\u70b9\u7684\u4e3b\u673a\u4e0a\uff0c\u4f60\u9700\u8981\u6709\u51e0\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u6765\u521b\u5efa\u96c6\u7fa4\u5e76\u4e0e\u4e4b\u4ea4\u4e92\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#download-the-rke-binary"},"RKE CLI binary"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo curl -fsSL -o /usr/local/bin/rke https://github.com/rancher/rke/releases/download/v1.1.4/rke_linux-amd64\nsudo chmod +x /usr/local/bin/rke\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"\nchmod +x ./kubectl\nsudo mv ./kubectl /usr/local/bin/kubectl\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3\nchmod +x get_helm.sh\nsudo ./get_helm.sh\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u521b\u5efa\u4e00\u4e2a\u63cf\u8ff0 RKE \u96c6\u7fa4\u7684 YAML \u6587\u4ef6\u3002\u786e\u4fdd\u8282\u70b9\u7684 IP \u5730\u5740\u548c SSH \u7528\u6237\u540d\u662f\u6b63\u786e\u7684\u3002\u6709\u5173\u96c6\u7fa4 YAML \u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"nodes:\n  - address: 10.0.1.200\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.201\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.202\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n\nservices:\n  etcd:\n    backup_config:\n      interval_hours: 12\n      retention: 6\n")),(0,l.kt)("p",null,"\u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u521b\u5efa Kubernetes \u96c6\u7fa4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yaml\n")),(0,l.kt)("p",null,"RKE \u4f1a\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate")," \u7684\u72b6\u6001\u6587\u4ef6\u3002\u5982\u679c\u4f60\u9700\u8981\u66f4\u65b0\u6216\u4fee\u6539\u96c6\u7fa4\u914d\u7f6e\uff0c\u6216\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4\uff0c\u5219\u9700\u8981\u4f7f\u7528\u8be5\u6587\u4ef6\u3002RKE \u8fd8\u4f1a\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yaml")," \u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u6587\u4ef6\u5728\u672c\u5730\u4f7f\u7528 kubectl \u6216 Helm \u7b49\u5de5\u5177\u8fde\u63a5\u5230\u8fdc\u7aef\u7684 Kubernetes \u96c6\u7fa4\u3002\u8bf7\u5c06\u8fd9\u4e9b\u6587\u4ef6\u4fdd\u5b58\u5728\u5b89\u5168\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u4e2d\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u67e5\u770b\u96c6\u7fa4\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export KUBECONFIG=kube_config_cluster.yaml\nkubectl cluster-info\nkubectl get pods --all-namespaces\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u9a8c\u8bc1\u4f60\u7684\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668\u662f\u5426\u5de5\u4f5c\uff0cDNS \u6761\u76ee\u662f\u5426\u8bbe\u7f6e\u6b63\u786e\u3002\u5982\u679c\u4f60\u5411\u5176\u4e2d\u4e4b\u4e00\u53d1\u9001\u8bf7\u6c42\uff0c\u4f60\u4f1a\u6536\u5230\u6765\u81ea Ingress Controller \u7684 HTTP 404 \u54cd\u5e94\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl 10.0.1.100\ndefault backend - 404\n$ curl rancher.example.com\ndefault backend - 404\n")),(0,l.kt)("h3",{id:"\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6"},"\u4fdd\u5b58\u4f60\u7684\u6587\u4ef6"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u7ef4\u62a4\u3001\u6392\u9664\u95ee\u9898\u548c\u5347\u7ea7\u96c6\u7fa4\u9700\u8981\u7528\u5230\u4ee5\u4e0b\u6587\u4ef6\uff0c\u8bf7\u59a5\u5584\u4fdd\u7ba1\u8fd9\u4e9b\u6587\u4ef6\uff1a"))),(0,l.kt)("p",null,"\u5c06\u4ee5\u4e0b\u6587\u4ef6\u7684\u526f\u672c\u4fdd\u5b58\u5728\u5b89\u5168\u4f4d\u7f6e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),"\uff1aRKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube_config_cluster.yml"),"\uff1a\u96c6\u7fa4\u7684 ",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig \u6587\u4ef6"),"\u3002\u8be5\u6587\u4ef6\u5305\u542b\u53ef\u5b8c\u5168\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),"\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes \u96c6\u7fa4\u72b6\u6001\u6587\u4ef6"),"\u3002\u6b64\u6587\u4ef6\u5305\u542b\u96c6\u7fa4\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5305\u62ec RKE \u914d\u7f6e\u548c\u8bc1\u4e66\u3002")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u540e\u4e24\u4e2a\u6587\u4ef6\u540d\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster")," \u90e8\u5206\u53d6\u51b3\u4e8e\u4f60\u547d\u540d RKE \u96c6\u7fa4\u914d\u7f6e\u6587\u4ef6\u7684\u65b9\u5f0f\u3002"))),(0,l.kt)("h3",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,l.kt)("p",null,"\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"\u6545\u969c\u6392\u9664"),"\u9875\u9762\u3002"),(0,l.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"},"\u5b89\u88c5 Rancher")))}h.isMDXComponent=!0}}]);