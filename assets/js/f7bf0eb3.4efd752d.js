"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[22546],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),k=a,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5864:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"Restoring Backups\u2014Docker Installs",shortTitle:"Restores",weight:3,aliases:["/rancher/v2.5/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.5/en/backups/restorations/single-node-restoration","/rancher/v2.5/en/backups/v2.5/docker-installs/docker-restores","/rancher/v2.x/en/backups/v2.5/docker-installs/docker-restores/"]},s=void 0,c={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",id:"version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",title:"Restoring Backups\u2014Docker Installs",description:"If you encounter a disaster scenario, you can restore your Rancher Server to your most recent backup.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Restoring Backups\u2014Docker Installs",shortTitle:"Restores",weight:3,aliases:["/rancher/v2.5/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.5/en/backups/restorations/single-node-restoration","/rancher/v2.5/en/backups/v2.5/docker-installs/docker-restores","/rancher/v2.x/en/backups/v2.5/docker-installs/docker-restores/"]},sidebar:"tutorialSidebar",previous:{title:"Backing up Rancher Installed with Docker",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},next:{title:"Backing up a Cluster",permalink:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"}},u={},d=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Restoring Backups",id:"restoring-backups",level:2}],p={toc:d};function k(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you encounter a disaster scenario, you can restore your Rancher Server to your most recent backup."),(0,o.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"During restore of your backup, you'll enter a series of commands, filling placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (",(0,o.kt)("inlineCode",{parentName:"p"},"<EXAMPLE>"),"). Here's an example of a command with a placeholder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run  --volumes-from <RANCHER_CONTAINER_NAME> -v $PWD:/backup \\\nbusybox sh -c "rm /var/lib/rancher/* -rf  && \\\ntar pzxvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>"\n')),(0,o.kt)("p",null,"In this command, ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_VERSION>-<DATE>")," are environment variables for your Rancher deployment."),(0,o.kt)("p",null,"Cross reference the image and reference table below to learn how to obtain this placeholder data. Write down or copy this information before starting the procedure below."),(0,o.kt)("sup",null,"Terminal ",(0,o.kt)("code",null,"docker ps")," Command, Displaying Where to Find ",(0,o.kt)("code",null,"<RANCHER_CONTAINER_TAG>")," and ",(0,o.kt)("code",null,"<RANCHER_CONTAINER_NAME>")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Placeholder Reference",src:r(50953).Z,width:"1275",height:"258"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_TAG>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The rancher/rancher image you pulled for initial install.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_NAME>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of your Rancher container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The version number for your Rancher backup.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<DATE>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,o.kt)("td",{parentName:"tr",align:null},"The date that the data container or backup was created.")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can obtain ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_TAG>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," by logging into your Rancher Server by remote connection and entering the command to view the containers that are running: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". You can also view containers that are stopped using a different command: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -a"),". Use these commands for help anytime during while creating backups."),(0,o.kt)("h2",{id:"restoring-backups"},"Restoring Backups"),(0,o.kt)("p",null,"Using a ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"backup")," that you created earlier, restore Rancher to its last known healthy state."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using a remote Terminal connection, log into the node running your Rancher Server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the container currently running Rancher Server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the name of your Rancher container:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker stop <RANCHER_CONTAINER_NAME>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move the backup tarball that you created during completion of ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"Creating Backups\u2014Docker Installs")," onto your Rancher Server. Change to the directory that you moved it to. Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," to confirm that it's there."),(0,o.kt)("p",{parentName:"li"},"If you followed the naming convention we suggested in ",(0,o.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"Creating Backups\u2014Docker Installs"),", it will have a name similar to  ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command to delete your current state data and replace it with your backup data, replacing the placeholders. Don't forget to close the quotes."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning!")," This command deletes all current state data from your Rancher Server container. Any changes saved after your backup tarball was created will be lost.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'docker run  --volumes-from <RANCHER_CONTAINER_NAME> -v $PWD:/backup \\\nbusybox sh -c "rm /var/lib/rancher/* -rf  && \\\ntar pzxvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"\n')),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step Result:")," A series of commands should run.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart your Rancher Server container, replacing the placeholder. It will restart using your backup data."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker start <RANCHER_CONTAINER_NAME>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait a few moments and then open Rancher in a web browser. Confirm that the restore succeeded and that your data is restored."))))}k.isMDXComponent=!0},50953:function(e,t,r){t.Z=r.p+"assets/images/placeholder-ref-70c9571e1a85164291c80a55c7c614b5.png"}}]);