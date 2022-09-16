(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["elements-popovers"],{"0706":function(t,o,a){},"798f":function(t,o,a){"use strict";a.r(o);var s=function(){var t=this,o=t._self._c;return o("div",{staticClass:"container"},[o("portal",{attrs:{to:"breadcrumb"}},[o("ul",{staticClass:"navbar-nav flex-row"},[o("li",[o("div",{staticClass:"page-header"},[o("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[o("ol",{staticClass:"breadcrumb"},[o("li",{staticClass:"breadcrumb-item"},[o("a",{attrs:{href:"javascript:;"}},[t._v("Elements")])]),o("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[o("span",[t._v("Popovers")])])])])])])])]),o("div",{staticClass:"container"},[o("div",{staticClass:"nav sidenav"},[o("scrollactive",{staticClass:"sidenav-content",attrs:{tag:"div","active-class":"active",offset:120,modifyUrl:!1,highlightFirstItem:!0}},[o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#popoverDefault"}},[t._v("Default")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#popoverDirections"}},[t._v("Directions")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#popoverDismissible"}},[t._v("Dismissible")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#popoverOptions"}},[t._v("Options")]),o("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#popoverColors"}},[t._v("Colors")])])],1),o("div",{staticClass:"row layout-top-spacing"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"},[o("svg",{staticClass:"feather feather-bell",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[o("path",{attrs:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}}),o("path",{attrs:{d:"M13.73 21a2 2 0 0 1-3.46 0"}})]),t._v(" Documentation: "),o("a",{staticClass:"text-info",attrs:{target:"_blank",href:"https://bootstrap-vue.org/docs/directives/popover"}},[t._v(" https://bootstrap-vue.org/docs/directives/popover ")])])])]),o("div",{staticClass:"row layout-top-spacing"},[o("div",{staticClass:"col-xl-12 col-lg-12 layout-spacing",attrs:{id:"popoverDefault"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(0),o("div",{staticClass:"panel-body text-center"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.left",value:"Tooltip using ANCHOR tag",expression:"'Tooltip using ANCHOR tag'",modifiers:{left:!0}}],staticClass:"mb-3 mr-2",attrs:{tag:"a",variant:"primary"}},[t._v("Link")]),o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.right",value:"Tooltip using BUTTON tag",expression:"'Tooltip using BUTTON tag'",modifiers:{right:!0}}],staticClass:"mb-3",attrs:{variant:"success"}},[t._v("Button")]),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(o){return t.toggleCode("code1")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code1")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<b-button tag="a" v-b-popover.left="\'Tooltip using ANCHOR tag\'" variant="primary" class="mb-3 mr-2">Link</b-button>\n\n<b-button v-b-popover.right="\'Tooltip using BUTTON tag\'" variant="success" class="mb-3">Button</b-button>\n')])])],1):t._e()],1)],1)])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"popoverDirections"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(1),o("div",{staticClass:"panel-body tooltip-section"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.top",value:"Tooltip on top",expression:"'Tooltip on top'",modifiers:{top:!0}}],staticClass:"mb-4 ml-2",attrs:{variant:"info"}},[t._v("Popover on top")])],1),o("div",{staticClass:"col-lg-6"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.right",value:"Tooltip on right",expression:"'Tooltip on right'",modifiers:{right:!0}}],staticClass:"mb-4 ml-2",attrs:{variant:"danger"}},[t._v("Popover on right")])],1),o("div",{staticClass:"col-lg-6"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.bottom",value:"Tooltip on bottom",expression:"'Tooltip on bottom'",modifiers:{bottom:!0}}],staticClass:"mb-4 ml-2",attrs:{variant:"warning"}},[t._v("Popover on bottom")])],1),o("div",{staticClass:"col-lg-6"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.left",value:"Tooltip on left",expression:"'Tooltip on left'",modifiers:{left:!0}}],staticClass:"mb-4 ml-2",attrs:{variant:"secondary"}},[t._v("Popover on left")])],1)]),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(o){return t.toggleCode("code2")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code2")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('\x3c!-- TOP --\x3e\n<b-button v-b-popover.top="\'Tooltip on top\'" variant="info" class="mb-4 ml-2">Popover on top</b-button>\n\n\x3c!-- RIGHT --\x3e\n<b-button v-b-popover.right="\'Tooltip on right\'" variant="danger" class="mb-4 ml-2">Popover on right</b-button>\n\n\x3c!-- BOTTOM --\x3e\n<b-button v-b-popover.bottom="\'Tooltip on bottom\'" variant="warning" class="mb-4 ml-2">Popover on bottom</b-button>\n\n\x3c!-- LEFT --\x3e\n<b-button v-b-popover.left="\'Tooltip on left\'" variant="secondary" class="mb-4 ml-2">Popover on left</b-button>\n')])])],1):t._e()],1)])])]),o("div",{staticClass:"col-xl-12 col-lg-12 layout-spacing",attrs:{id:"popoverDismissible"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(2),o("div",{staticClass:"panel-body text-center"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.focus.left",value:"Lorem ipsum dolor sit.",expression:"'Lorem ipsum dolor sit.'",modifiers:{focus:!0,left:!0}}],staticClass:"mb-3",attrs:{variant:"dark"}},[t._v("Popover on left")]),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(o){return t.toggleCode("code3")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code3")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('<b-button v-b-popover.focus.left="\'Lorem ipsum dolor sit.\'" variant="dark" class="mb-3">Popover on left</b-button>\n')])])],1):t._e()],1)],1)])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"popoverOptions"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(3),o("div",{staticClass:"panel-body align-center basic-tooltip"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-6 mb-4"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.right",value:"On Hover",expression:"'On Hover'",modifiers:{hover:!0,right:!0}}],attrs:{variant:"primary"}},[t._v("On Hover")])],1),o("div",{staticClass:"col-lg-6 mb-4"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.focus.right",value:"On Focus",expression:"'On Focus'",modifiers:{focus:!0,right:!0}}],attrs:{variant:"secondary"}},[t._v("On Focus")])],1),o("div",{staticClass:"col-lg-6 mb-4"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.focus.right",value:{content:"Delay 1s",delay:1e3},expression:"{content : 'Delay 1s', delay : 1000}",modifiers:{focus:!0,right:!0}}],attrs:{variant:"info"}},[t._v("Delay")])],1),o("div",{staticClass:"col-lg-6 mb-4"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.focus.right",value:{content:"Disabled Animation",animation:!1},expression:"{content : 'Disabled Animation', animation : false}",modifiers:{focus:!0,right:!0}}],attrs:{variant:"dark"}},[t._v("Disabled Animation")])],1)]),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(o){return t.toggleCode("code4")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code4")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v('\x3c!-- On Hover --\x3e\n<b-button v-b-popover.hover.right="\'On Hover\'" variant="primary">On Hover</b-button>\n\n\x3c!-- On Focus --\x3e\n<b-button v-b-popover.focus.right="\'On Focus\'" variant="secondary">On Focus</b-button>\n\n\x3c!-- Delay --\x3e\n<b-button v-b-popover.focus.right="{content : \'Delay 1s\', delay : 1000}" variant="info">Delay</b-button>\n\n\x3c!-- Disabled Animation --\x3e\n<b-button v-b-popover.focus.right="{content : \'Disabled Animation\', animation : false}" variant="dark">Disabled Animation</b-button>\n')])])],1):t._e()],1)])])]),o("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"popoverColors"}},[o("div",{staticClass:"statbox panel box box-shadow"},[t._m(4),o("div",{staticClass:"panel-body align-center"},[o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.top",value:{title:"Primary",content:"Primary popover",html:!0,customClass:"popover-primary",variant:"primary"},expression:"{title: 'Primary', content: 'Primary popover', html: true, customClass: 'popover-primary', variant: 'primary'}",modifiers:{top:!0}}],staticClass:"mb-2 mx-1",attrs:{variant:"primary"}},[t._v("Primary")]),o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.top",value:{title:"Success",content:"Success popover",html:!0,customClass:"popover-success",variant:"success"},expression:"{title: 'Success', content: 'Success popover', html: true, customClass: 'popover-success', variant: 'success'}",modifiers:{top:!0}}],staticClass:"mb-2 mx-1",attrs:{variant:"success"}},[t._v("Success")]),o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.top",value:{title:"Info",content:"Info popover",html:!0,customClass:"popover-info",variant:"info"},expression:"{title: 'Info', content: 'Info popover', html: true, customClass: 'popover-info', variant: 'info'}",modifiers:{top:!0}}],staticClass:"mb-2 mx-1",attrs:{variant:"info"}},[t._v("Info")]),o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.top",value:{title:"Danger",content:"Danger popover",html:!0,customClass:"popover-danger",variant:"danger"},expression:"{title: 'Danger', content: 'Danger popover', html: true, customClass: 'popover-danger', variant: 'danger'}",modifiers:{top:!0}}],staticClass:"mb-2 mx-1",attrs:{variant:"danger"}},[t._v("Danger")]),o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.top",value:{title:"Warning",content:"Warning popover",html:!0,customClass:"popover-warning",variant:"warning"},expression:"{title: 'Warning', content: 'Warning popover', html: true, customClass: 'popover-warning', variant: 'warning'}",modifiers:{top:!0}}],staticClass:"mb-2 mx-1",attrs:{variant:"warning"}},[t._v("Warning")]),o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.top",value:{title:"Secondary",content:"Secondary popover",html:!0,customClass:"popover-secondary",variant:"secondary"},expression:"{title: 'Secondary', content: 'Secondary popover', html: true, customClass: 'popover-secondary', variant: 'secondary'}",modifiers:{top:!0}}],staticClass:"mb-2 mx-1",attrs:{variant:"secondary"}},[t._v("Secondary")]),o("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.top",value:{title:"Dark",content:"Dark popover",html:!0,customClass:"popover-dark",variant:"dark"},expression:"{title: 'Dark', content: 'Dark popover', html: true, customClass: 'popover-dark', variant: 'dark'}",modifiers:{top:!0}}],staticClass:"mb-2 mx-1",attrs:{variant:"dark"}},[t._v("Dark")]),o("div",{staticClass:"code-section-container show-code"},[o("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(o){return t.toggleCode("code5")}}},[o("span",[t._v("Code")])]),t.code_arr.includes("code5")?o("div",{staticClass:"code-section text-left"},[o("highlight",[o("pre",[t._v("<b-button v-b-popover.top=\"{title: 'Primary', content: 'Primary popover', html: true, customClass: 'popover-primary', variant: 'primary'}\" variant=\"primary\" class=\"mb-2 mx-1\">Primary</b-button>\n<b-button v-b-popover.top=\"{title: 'Success', content: 'Success popover', html: true, customClass: 'popover-success', variant: 'success'}\" variant=\"success\" class=\"mb-2 mx-1\">Success</b-button>\n<b-button v-b-popover.top=\"{title: 'Info', content: 'Info popover', html: true, customClass: 'info-primary', variant: 'info'}\" variant=\"info\" class=\"mb-2 mx-1\">Info</b-button>\n<b-button v-b-popover.top=\"{title: 'Danger', content: 'Danger popover', html: true, customClass: 'popover-danger', variant: 'danger'}\" variant=\"danger\" class=\"mb-2 mx-1\">Danger</b-button>\n<b-button v-b-popover.top=\"{title: 'Warning', content: 'Warning popover', html: true, customClass: 'popover-warning', variant: 'warning'}\" variant=\"warning\" class=\"mb-2 mx-1\">Warning</b-button>\n<b-button v-b-popover.top=\"{title: 'Secondary', content: 'Secondary popover', html: true, customClass: 'popover-secondary', variant: 'secondary'}\" variant=\"secondary\" class=\"mb-2 mx-1\">Secondary</b-button>\n<b-button v-b-popover.top=\"{title: 'Dark', content: 'Dark popover', html: true, customClass: 'popover-dark', variant: 'dark'}\" variant=\"dark\" class=\"mb-2 mx-1\">Dark</b-button>\n")])])],1):t._e()],1)],1)])])])])],1)},e=[function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v(" Popover ")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v(" Placement")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Dismissible popover")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v("Options")])])])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"panel-heading"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[o("h4",[t._v(" Colors ")])])])])}],i=(a("0706"),a("a2ba"),a("e706")),r={metaInfo:{title:"Popovers"},components:{highlight:i["a"]},data(){return{code_arr:[]}},mounted(){},methods:{toggleCode(t){this.code_arr.includes(t)?this.code_arr=this.code_arr.filter(o=>o!=t):this.code_arr.push(t)}}},n=r,l=a("2877"),c=Object(l["a"])(n,s,e,!1,null,null,null);o["default"]=c.exports},a2ba:function(t,o,a){}}]);
//# sourceMappingURL=elements-popovers.ef5e4efd.js.map