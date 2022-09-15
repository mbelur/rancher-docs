"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29797],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=s,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3463:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return m}});var r=t(87462),s=t(63366),i=(t(67294),t(3905)),o=["components"],a={title:"Minimum EKS Permissions",weight:1},c=void 0,l={unversionedId:"reference-guides/amazon-eks-permissions/minimum-eks-permissions",id:"reference-guides/amazon-eks-permissions/minimum-eks-permissions",title:"Minimum EKS Permissions",description:"Documented here is a minimum set of permissions necessary to use all functionality of the EKS driver in Rancher. Additional permissions are required for Rancher to provision the Service Role and VPC resources. Optionally these resources can be created before the cluster creation and will be selectable when defining the cluster configuration.",source:"@site/docs/reference-guides/amazon-eks-permissions/minimum-eks-permissions.md",sourceDirName:"reference-guides/amazon-eks-permissions",slug:"/reference-guides/amazon-eks-permissions/minimum-eks-permissions",permalink:"/reference-guides/amazon-eks-permissions/minimum-eks-permissions",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/amazon-eks-permissions/minimum-eks-permissions.md",tags:[],version:"current",lastUpdatedAt:1663284193,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Minimum EKS Permissions",weight:1},sidebar:"tutorialSidebar",previous:{title:"Creating an EKS Cluster",permalink:"/pages-for-subheaders/amazon-eks-permissions"},next:{title:"Rancher Backup Configuration Reference",permalink:"/pages-for-subheaders/backup-restore-configuration"}},u={},m=[{value:"Service Role Permissions",id:"service-role-permissions",level:3},{value:"VPC Permissions",id:"vpc-permissions",level:3}],p={toc:m};function d(e){var n=e.components,t=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Documented here is a minimum set of permissions necessary to use all functionality of the EKS driver in Rancher. Additional permissions are required for Rancher to provision the ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Role")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VPC")," resources. Optionally these resources can be created ",(0,i.kt)("strong",{parentName:"p"},"before")," the cluster creation and will be selectable when defining the cluster configuration."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Resource"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Service Role"),(0,i.kt)("td",{parentName:"tr",align:null},"The service role provides Kubernetes the permissions it requires to manage resources on your behalf. Rancher can create the service role with the following ",(0,i.kt)("a",{parentName:"td",href:"#service-role-permissions"},"Service Role Permissions"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VPC"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides isolated network resources utilised by EKS and worker nodes. Rancher can create the VPC resources with the following ",(0,i.kt)("a",{parentName:"td",href:"#vpc-permissions"},"VPC Permissions"),".")))),(0,i.kt)("p",null,"Resource targeting uses ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," as the ARN of many of the resources created cannot be known before creating the EKS cluster in Rancher."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "EC2Permisssions",\n            "Effect": "Allow",\n            "Action": [\n                "ec2:RunInstances",\n                "ec2:RevokeSecurityGroupIngress",\n                "ec2:RevokeSecurityGroupEgress",\n                "ec2:DescribeInstanceTypes",\n                "ec2:DescribeRegions",\n                "ec2:DescribeVpcs",\n                "ec2:DescribeTags",\n                "ec2:DescribeSubnets",\n                "ec2:DescribeSecurityGroups",\n                "ec2:DescribeRouteTables",\n                "ec2:DescribeLaunchTemplateVersions",\n                "ec2:DescribeLaunchTemplates",\n                "ec2:DescribeKeyPairs",\n                "ec2:DescribeInternetGateways",\n                "ec2:DescribeImages",\n                "ec2:DescribeAvailabilityZones",\n                "ec2:DescribeAccountAttributes",\n                "ec2:DeleteTags",\n                "ec2:DeleteSecurityGroup",\n                "ec2:DeleteKeyPair",\n                "ec2:CreateTags",\n                "ec2:CreateSecurityGroup",\n                "ec2:CreateLaunchTemplateVersion",\n                "ec2:CreateLaunchTemplate",\n                "ec2:CreateKeyPair",\n                "ec2:AuthorizeSecurityGroupIngress",\n                "ec2:AuthorizeSecurityGroupEgress"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "CloudFormationPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "cloudformation:ListStacks",\n                "cloudformation:ListStackResources",\n                "cloudformation:DescribeStacks",\n                "cloudformation:DescribeStackResources",\n                "cloudformation:DescribeStackResource",\n                "cloudformation:DeleteStack",\n                "cloudformation:CreateStackSet",\n                "cloudformation:CreateStack"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "IAMPermissions",\n            "Effect": "Allow",\n            "Action": [\n                "iam:PassRole",\n                "iam:ListRoles",\n                "iam:ListRoleTags",\n                "iam:ListInstanceProfilesForRole",\n                "iam:ListInstanceProfiles",\n                "iam:ListAttachedRolePolicies",\n                "iam:GetRole",\n                "iam:GetInstanceProfile",\n                "iam:DetachRolePolicy",\n                "iam:DeleteRole",\n                "iam:CreateRole",\n                "iam:AttachRolePolicy"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "KMSPermisssions",\n            "Effect": "Allow",\n            "Action": "kms:ListKeys",\n            "Resource": "*"\n        },\n        {\n            "Sid": "EKSPermisssions",\n            "Effect": "Allow",\n            "Action": [\n                "eks:UpdateNodegroupVersion",\n                "eks:UpdateNodegroupConfig",\n                "eks:UpdateClusterVersion",\n                "eks:UpdateClusterConfig",\n                "eks:UntagResource",\n                "eks:TagResource",\n                "eks:ListUpdates",\n                "eks:ListTagsForResource",\n                "eks:ListNodegroups",\n                "eks:ListFargateProfiles",\n                "eks:ListClusters",\n                "eks:DescribeUpdate",\n                "eks:DescribeNodegroup",\n                "eks:DescribeFargateProfile",\n                "eks:DescribeCluster",\n                "eks:DeleteNodegroup",\n                "eks:DeleteFargateProfile",\n                "eks:DeleteCluster",\n                "eks:CreateNodegroup",\n                "eks:CreateFargateProfile",\n                "eks:CreateCluster"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,i.kt)("h3",{id:"service-role-permissions"},"Service Role Permissions"),(0,i.kt)("p",null,"Permissions required for Rancher to create service role on users behalf during the EKS cluster creation process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "IAMPermisssions",\n      "Effect": "Allow",\n      "Action": [\n        "iam:AddRoleToInstanceProfile",\n        "iam:AttachRolePolicy",\n        "iam:CreateInstanceProfile",\n        "iam:CreateRole",\n        "iam:CreateServiceLinkedRole",\n        "iam:DeleteInstanceProfile",\n        "iam:DeleteRole",\n        "iam:DetachRolePolicy",\n        "iam:GetInstanceProfile",\n        "iam:GetRole",\n        "iam:ListAttachedRolePolicies",\n        "iam:ListInstanceProfiles",\n        "iam:ListInstanceProfilesForRole",\n        "iam:ListRoles",\n        "iam:ListRoleTags",\n        "iam:PassRole",\n        "iam:RemoveRoleFromInstanceProfile"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"When an EKS cluster is created, Rancher will create a service role with the following trust policy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": "sts:AssumeRole",\n      "Principal": {\n        "Service": "eks.amazonaws.com"\n      },\n      "Effect": "Allow",\n      "Sid": ""\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"This role will also have two role policy attachments with the following policies ARNs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"arn:aws:iam::aws:policy/AmazonEKSClusterPolicy\narn:aws:iam::aws:policy/AmazonEKSServicePolicy\n")),(0,i.kt)("h3",{id:"vpc-permissions"},"VPC Permissions"),(0,i.kt)("p",null,"Permissions required for Rancher to create VPC and associated resources."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "VPCPermissions",\n      "Effect": "Allow",\n      "Action": [\n        "ec2:ReplaceRoute",\n        "ec2:ModifyVpcAttribute",\n        "ec2:ModifySubnetAttribute",\n        "ec2:DisassociateRouteTable",\n        "ec2:DetachInternetGateway",\n        "ec2:DescribeVpcs",\n        "ec2:DeleteVpc",\n        "ec2:DeleteTags",\n        "ec2:DeleteSubnet",\n        "ec2:DeleteRouteTable",\n        "ec2:DeleteRoute",\n        "ec2:DeleteInternetGateway",\n        "ec2:CreateVpc",\n        "ec2:CreateSubnet",\n        "ec2:CreateSecurityGroup",\n        "ec2:CreateRouteTable",\n        "ec2:CreateRoute",\n        "ec2:CreateInternetGateway",\n        "ec2:AttachInternetGateway",\n        "ec2:AssociateRouteTable"\n      ],\n      "Resource": "*"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);