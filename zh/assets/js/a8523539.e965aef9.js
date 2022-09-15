"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3957],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19383:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Restore Configuration",shortTitle:"Restore",weight:2,aliases:["/rancher/v2.5/en/backups/v2.5/configuration/restore-config","/rancher/v2.x/en/backups/v2.5/configuration/restore-config/"]},c=void 0,u={unversionedId:"reference-guides/backup-restore-configuration/restore-configuration",id:"version-2.5/reference-guides/backup-restore-configuration/restore-configuration",title:"Restore Configuration",description:"The Restore Create page lets you provide details of the backup to restore from",source:"@site/versioned_docs/version-2.5/reference-guides/backup-restore-configuration/restore-configuration.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/restore-configuration",permalink:"/zh/v2.5/reference-guides/backup-restore-configuration/restore-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/backup-restore-configuration/restore-configuration.md",tags:[],version:"2.5",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Restore Configuration",shortTitle:"Restore",weight:2,aliases:["/rancher/v2.5/en/backups/v2.5/configuration/restore-config","/rancher/v2.x/en/backups/v2.5/configuration/restore-config/"]},sidebar:"tutorialSidebar",previous:{title:"Backup Configuration",permalink:"/zh/v2.5/reference-guides/backup-restore-configuration/backup-configuration"},next:{title:"Backup Storage Location Configuration",permalink:"/zh/v2.5/reference-guides/backup-restore-configuration/storage-configuration"}},s={},p=[{value:"Backup Source",id:"backup-source",level:2},{value:"An existing backup config",id:"an-existing-backup-config",level:3},{value:"The default storage target",id:"the-default-storage-target",level:3},{value:"An S3-compatible object store",id:"an-s3-compatible-object-store",level:3},{value:"Encryption",id:"encryption",level:2},{value:"Prune During Restore",id:"prune-during-restore",level:2},{value:"Getting the Backup Filename from S3",id:"getting-the-backup-filename-from-s3",level:2}],f={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Restore Create page lets you provide details of the backup to restore from"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41399).Z,width:"2870",height:"1074"})),(0,i.kt)("h2",{id:"backup-source"},"Backup Source"),(0,i.kt)("p",null,"Provide details of the backup file and its storage location, which the operator will then use to perform the restore. Select from the following options to provide these details"),(0,i.kt)("h3",{id:"an-existing-backup-config"},"An existing backup config"),(0,i.kt)("p",null,"Selecting this option will populate the ",(0,i.kt)("strong",{parentName:"p"},"Target Backup")," dropdown with the Backups available in this cluster. Select the Backup from the dropdown, and that will fill out the ",(0,i.kt)("strong",{parentName:"p"},"Backup Filename")," field for you, and will also pass the backup source information from the selected Backup to the operator."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23553).Z,width:"2358",height:"1030"})),(0,i.kt)("p",null,"If the Backup custom resource does not exist in the cluster, you need to get the exact filename and provide the backup source details with the default storage target or an S3-compatible object store."),(0,i.kt)("h3",{id:"the-default-storage-target"},"The default storage target"),(0,i.kt)("p",null,"Select this option if you are restoring from a backup file that exists in the default storage location configured at the operator-level. The operator-level configuration is the storage location that was configured when the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator was installed or upgraded. Provide the exact filename in the ",(0,i.kt)("strong",{parentName:"p"},"Backup Filename")," field."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(61272).Z,width:"2366",height:"878"})),(0,i.kt)("h3",{id:"an-s3-compatible-object-store"},"An S3-compatible object store"),(0,i.kt)("p",null,"Select this option if no default storage location is configured at the operator-level, OR if the backup file exists in a different S3 bucket than the one configured as the default storage location. Provide the exact filename in the ",(0,i.kt)("strong",{parentName:"p"},"Backup Filename")," field. Refer to ",(0,i.kt)("a",{parentName:"p",href:"#getting-the-backup-filename-from-s3"},"this section")," for exact steps on getting the backup filename from s3. Fill in all the details for the S3 compatible object store. Its fields are exactly same as ones for the ",(0,i.kt)("inlineCode",{parentName:"p"},"backup.StorageLocation")," configuration in the ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/backup-restore-configuration/backup-configuration#storage-location"},"Backup custom resource.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(17357).Z,width:"2344",height:"1332"})," "),(0,i.kt)("h2",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"If the backup was created with encryption enabled, its file will have ",(0,i.kt)("inlineCode",{parentName:"p"},".enc")," suffix. Choosing such a Backup, or providing a backup filename with ",(0,i.kt)("inlineCode",{parentName:"p"},".enc")," suffix will display another dropdown named ",(0,i.kt)("strong",{parentName:"p"},"Encryption Config Secret"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(11896).Z,width:"2362",height:"338"})," "),(0,i.kt)("p",null,"The Secret selected from this dropdown must have the same contents as the one used for the Backup custom resource while performing the backup. If the encryption configuration doesn't match, the restore will fail"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Encryption Config Secret")," dropdown will filter out and list only those Secrets that have this exact key"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"encryptionConfigSecretName")),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the name of the Secret from ",(0,i.kt)("inlineCode",{parentName:"td"},"cattle-resources-system")," namespace, that contains the encryption config file.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important"),"\nThis field should only be set if the backup was created with encryption enabled. Providing the incorrect encryption config will cause the restore to fail.")),(0,i.kt)("h2",{id:"prune-during-restore"},"Prune During Restore"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prune"),":  In order to fully restore Rancher from a backup, and to go back to the exact state it was at when the backup was performed, we need to delete any additional resources that were created by Rancher after the backup was taken. The operator does so if the ",(0,i.kt)("strong",{parentName:"li"},"Prune")," flag is enabled. Prune is enabled by default and it is recommended to keep it enabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delete Timeout"),": This is the amount of time the operator will wait while deleting a resource before editing the resource to remove finalizers and attempt deletion again.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"prune")),(0,i.kt)("td",{parentName:"tr",align:null},"Delete the resources managed by Rancher that are not present in the backup (Recommended).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deleteTimeoutSeconds")),(0,i.kt)("td",{parentName:"tr",align:null},"Amount of time the operator will wait while deleting a resource before editing the resource to remove finalizers and attempt deletion again.")))),(0,i.kt)("h2",{id:"getting-the-backup-filename-from-s3"},"Getting the Backup Filename from S3"),(0,i.kt)("p",null,"This is the name of the backup file that the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator will use to perform the restore."),(0,i.kt)("p",null,"To obtain this file name from S3, go to your S3 bucket (and folder if it was specified while performing backup)."),(0,i.kt)("p",null,"Copy the filename and store it in your Restore custom resource. So assuming the name of your backup file is ",(0,i.kt)("inlineCode",{parentName:"p"},"backupfile"),","),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If your bucket name is ",(0,i.kt)("inlineCode",{parentName:"li"},"s3bucket")," and no folder was specified, then the ",(0,i.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use will be ",(0,i.kt)("inlineCode",{parentName:"li"},"backupfile"),"."),(0,i.kt)("li",{parentName:"ul"},"If your bucket name is ",(0,i.kt)("inlineCode",{parentName:"li"},"s3bucket")," and the base folder is",(0,i.kt)("inlineCode",{parentName:"li"},"s3folder"),", the ",(0,i.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use is only ",(0,i.kt)("inlineCode",{parentName:"li"},"backupfile")," ."),(0,i.kt)("li",{parentName:"ul"},"If there is a subfolder inside ",(0,i.kt)("inlineCode",{parentName:"li"},"s3Folder")," called ",(0,i.kt)("inlineCode",{parentName:"li"},"s3sub"),", and that has your backup file, then the ",(0,i.kt)("inlineCode",{parentName:"li"},"backupFilename")," to use is ",(0,i.kt)("inlineCode",{parentName:"li"},"s3sub/backupfile"),".")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"YAML Directive Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"backupFilename")),(0,i.kt)("td",{parentName:"tr",align:null},"This is the name of the backup file that the ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher-backup")," operator will use to perform the restore.")))))}d.isMDXComponent=!0},61272:function(e,t,n){t.Z=n.p+"assets/images/default-95cca92f765567228a78287139a2c1a0.png"},11896:function(e,t,n){t.Z=n.p+"assets/images/encryption-8dfdf6319173018658b2e21a06664814.png"},23553:function(e,t,n){t.Z=n.p+"assets/images/existing-109a6b8a8171763189d2bf81535eb275.png"},41399:function(e,t,n){t.Z=n.p+"assets/images/restore-e471e6f7f7070cbd282958fb299e04d2.png"},17357:function(e,t,n){t.Z=n.p+"assets/images/s3store-35e51e0c0b4d58a3cf9c79a1014be661.png"}}]);