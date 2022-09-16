(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms-validation"],{"0706":function(t,a,s){},c172:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("portal",{attrs:{to:"breadcrumb"}},[a("ul",{staticClass:"navbar-nav flex-row"},[a("li",[a("div",{staticClass:"page-header"},[a("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"javascript:;"}},[t._v("Forms")])]),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[a("span",[t._v("Validation")])])])])])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"nav sidenav"},[a("scrollactive",{staticClass:"sidenav-content",attrs:{tag:"div","active-class":"active",offset:120,modifyUrl:!1,highlightFirstItem:!0}},[a("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#basic"}},[t._v("Basic")]),a("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#email"}},[t._v("Email")]),a("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#select"}},[t._v("Select")]),a("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#custom_styles"}},[t._v("Custom Styles")]),a("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#browser_default"}},[t._v("Browser Default")]),a("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#tooltips"}},[t._v("Tooltips")])])],1),a("div",{staticClass:"row layout-top-spacing"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"},[a("svg",{staticClass:"feather feather-bell",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("path",{attrs:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}}),a("path",{attrs:{d:"M13.73 21a2 2 0 0 1-3.46 0"}})]),t._v(" Documentation: "),a("a",{staticClass:"text-info",attrs:{target:"_blank",href:"https://bootstrap-vue.org/docs/components/form"}},[t._v(" https://bootstrap-vue.org/docs/components/form ")])])])]),a("div",{staticClass:"row layout-top-spacing"},[a("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"basic"}},[a("div",{staticClass:"statbox panel box box-shadow"},[t._m(0),a("div",{staticClass:"panel-body"},[a("b-form",{staticClass:"simple-example",attrs:{novalidate:""},on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.submit_form1.apply(null,arguments)}}},[a("b-form-row",[a("div",{staticClass:"col-md-12 mb-4"},[a("label",{attrs:{for:"fullName"}},[t._v("Full Name")]),a("b-input",{class:[t.is_submit_form1?t.form1.name?"is-valid":"is-invalid":""],attrs:{id:"fullName",placeholder:""},model:{value:t.form1.name,callback:function(a){t.$set(t.form1,"name",a)},expression:"form1.name"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form1&&!t.form1.name}},[t._v("Please fill the name")])],1)]),a("b-button",{staticClass:"mt-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit form")])],1),a("div",{staticClass:"code-section-container show-code"},[a("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(a){return t.toggleCode("code1")}}},[a("span",[t._v("Code")])]),t.code_arr.includes("code1")?a("div",{staticClass:"code-section text-left"},[a("highlight",[a("pre",[t._v('<b-form class="simple-example" novalidate @submit.stop.prevent="submit_form1">\n    <b-form-row>\n        <div class="col-md-12 mb-4">\n            <label for="fullName">Full Name</label>\n            <b-input id="fullName" v-model="form1.name" placeholder="" :class="[is_submit_form1 ? (form1.name ? \'is-valid\' : \'is-invalid\') : \'\']"></b-input>\n            <b-form-valid-feedback>Looks good!</b-form-valid-feedback>\n            <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form1 && !form1.name}">Please fill the name</b-form-invalid-feedback>\n        </div>\n    </b-form-row>\n    <b-button type="submit" variant="primary" class="mt-2">Submit form</b-button>\n</b-form>\n')])])],1):t._e()],1)],1)])]),a("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"email"}},[a("div",{staticClass:"statbox panel box box-shadow"},[t._m(1),a("div",{staticClass:"panel-body"},[a("b-form",{staticClass:"email",attrs:{novalidate:""},on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.submit_form2.apply(null,arguments)}}},[a("b-form-row",[a("div",{staticClass:"col-md-12 mb-4"},[a("label",{attrs:{for:"e_mail"}},[t._v("Email")]),a("b-input",{class:[t.is_submit_form2?t.form2.email&&t.email_validate(t.form2.email)?"is-valid":"is-invalid":""],attrs:{type:"email",id:"e_mail"},model:{value:t.form2.email,callback:function(a){t.$set(t.form2,"email",a)},expression:"form2.email"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form2&&!t.form2.email}},[t._v("Please fill the Email")])],1)]),a("b-button",{staticClass:"mb-4 mt-2",attrs:{variant:"primary",type:"submit"}},[t._v("Submit form")])],1),a("div",{staticClass:"code-section-container show-code"},[a("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(a){return t.toggleCode("code2")}}},[a("span",[t._v("Code")])]),t.code_arr.includes("code2")?a("div",{staticClass:"code-section text-left"},[a("highlight",[a("pre",[t._v('<b-form class="email" novalidate @submit.stop.prevent="submit_form2">\n    <b-form-row>\n        <div class="col-md-12 mb-4">\n            <label for="e_mail">Email</label>\n            <b-input type="email" id="e_mail" v-model="form2.email" :class="[is_submit_form2 ? (form2.email && email_validate(form2.email) ? \'is-valid\' : \'is-invalid\') : \'\']"></b-input>\n            <b-form-valid-feedback>Looks good!</b-form-valid-feedback>\n            <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form2 && !form2.email}">Please fill the Email</b-form-invalid-feedback>\n        </div>\n    </b-form-row>\n    <b-button variant="primary" class="mb-4 mt-2" type="submit">Submit form</b-button>\n</b-form>\n')])])],1):t._e()],1)],1)])]),a("div",{staticClass:"col-lg-12 layout-spacing",attrs:{id:"select"}},[a("div",{staticClass:"statbox panel box box-shadow"},[t._m(2),a("div",{staticClass:"panel-body"},[a("b-form",{staticClass:"select mt-4",attrs:{novalidate:""},on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.submit_form3.apply(null,arguments)}}},[a("b-form-row",[a("div",{staticClass:"col-md-12"},[a("b-form-group",{staticClass:"mb-4"},[a("b-select",{class:[t.is_submit_form3?t.form3.select?"is-valid":"is-invalid":""],model:{value:t.form3.select,callback:function(a){t.$set(t.form3,"select",a)},expression:"form3.select"}},[a("b-select-option",{attrs:{value:""}},[t._v("Open this select menu")]),a("b-select-option",{attrs:{value:"1"}},[t._v("One")]),a("b-select-option",{attrs:{value:"2"}},[t._v("Two")]),a("b-select-option",{attrs:{value:"3"}},[t._v("Three")])],1),a("b-form-valid-feedback",[t._v("Example valid custom select feedback")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form3&&!t.form3.select}},[t._v("Please Select the field")])],1)],1)]),a("b-button",{staticClass:"mt-2",attrs:{variant:"primary",type:"submit"}},[t._v("Submit form")])],1),a("div",{staticClass:"code-section-container show-code"},[a("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(a){return t.toggleCode("code3")}}},[a("span",[t._v("Code")])]),t.code_arr.includes("code3")?a("div",{staticClass:"code-section text-left"},[a("highlight",[a("pre",[t._v('<b-form class="select mt-4" novalidate @submit.stop.prevent="submit_form3">\n    <b-form-row>\n        <div class="col-md-12">\n            <b-form-group class="mb-4">\n                <b-select v-model="form3.select" :class="[is_submit_form3 ? form3.select ? \'is-valid\' : \'is-invalid\' : \'\']">\n                    <b-select-option value="">Open this select menu</b-select-option>\n                    <b-select-option value="1">One</b-select-option>\n                    <b-select-option value="2">Two</b-select-option>\n                    <b-select-option value="3">Three</b-select-option>\n                </b-select>\n                <b-form-valid-feedback>Example valid custom select feedback</b-form-valid-feedback>\n                <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form2 && !form2.email}">Please Select the field</b-form-invalid-feedback>\n            </b-form-group>\n        </div>\n    </b-form-row>\n    <b-button variant="primary" class="mt-2" type="submit">Submit form</b-button>\n</b-form>\n')])])],1):t._e()],1)],1)])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 layout-spacing col-md-12",attrs:{id:"custom_styles"}},[a("div",{staticClass:"statbox panel box box-shadow"},[t._m(3),a("div",{staticClass:"panel-body"},[a("b-form",{staticClass:"needs-validation",attrs:{novalidate:""},on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.submit_form4.apply(null,arguments)}}},[a("b-form-row",[a("div",{staticClass:"col-md-4 mb-4"},[a("label",{attrs:{for:"validationCustom01"}},[t._v("First name")]),a("b-input",{class:[t.is_submit_form4?t.form4.first_name?"is-valid":"is-invalid":""],attrs:{id:"validationCustom01",placeholder:"First name"},model:{value:t.form4.first_name,callback:function(a){t.$set(t.form4,"first_name",a)},expression:"form4.first_name"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form4&&!t.form4.first_name}},[t._v("Please fill the first name")])],1),a("div",{staticClass:"col-md-4 mb-4"},[a("label",{attrs:{for:"validationCustom02"}},[t._v("Last name")]),a("b-input",{class:[t.is_submit_form4?t.form4.last_name?"is-valid":"is-invalid":""],attrs:{id:"validationCustom02",placeholder:"Last name"},model:{value:t.form4.last_name,callback:function(a){t.$set(t.form4,"last_name",a)},expression:"form4.last_name"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form4&&!t.form4.last_name}},[t._v("Please fill the last name")])],1),a("div",{staticClass:"col-md-4 mb-4"},[a("label",{attrs:{for:"validationCustomUsername"}},[t._v("Username")]),a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[t._v("@")])],1),a("b-input",{class:[t.is_submit_form4?t.form4.username?"is-valid":"is-invalid":""],attrs:{id:"validationCustomUsername",placeholder:"Username"},model:{value:t.form4.username,callback:function(a){t.$set(t.form4,"username",a)},expression:"form4.username"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form4&&!t.form4.username}},[t._v("Please choose a username.")])],1)],1)]),a("b-form-row",[a("div",{staticClass:"col-md-6 mb-4"},[a("label",{attrs:{for:"validationCustom03"}},[t._v("City")]),a("b-input",{class:[t.is_submit_form4?t.form4.city?"is-valid":"is-invalid":""],attrs:{id:"validationCustom03",placeholder:"City"},model:{value:t.form4.city,callback:function(a){t.$set(t.form4,"city",a)},expression:"form4.city"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form4&&!t.form4.city}},[t._v("Please provide a valid city.")])],1),a("div",{staticClass:"col-md-3 mb-4"},[a("label",{attrs:{for:"validationCustom04"}},[t._v("State")]),a("b-input",{class:[t.is_submit_form4?t.form4.state?"is-valid":"is-invalid":""],attrs:{id:"validationCustom04",placeholder:"State"},model:{value:t.form4.state,callback:function(a){t.$set(t.form4,"state",a)},expression:"form4.state"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form4&&!t.form4.state}},[t._v("Please provide a valid state.")])],1),a("div",{staticClass:"col-md-3 mb-4"},[a("label",{attrs:{for:"validationCustom05"}},[t._v("Zip")]),a("b-input",{class:[t.is_submit_form4?t.form4.zip?"is-valid":"is-invalid":""],attrs:{id:"validationCustom05",placeholder:"Zip"},model:{value:t.form4.zip,callback:function(a){t.$set(t.form4,"zip",a)},expression:"form4.zip"}}),a("b-form-valid-feedback",[t._v("Looks good!")]),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form4&&!t.form4.zip}},[t._v("Please provide a valid zip.")])],1)]),a("b-form-group",{staticClass:"mb-4"},[a("div",{staticClass:"form-check pl-0"},[a("b-checkbox",{staticClass:"checkbox-primary",model:{value:t.form4.is_terms,callback:function(a){t.$set(t.form4,"is_terms",a)},expression:"form4.is_terms"}},[t._v(" Agree to terms and conditions "),a("b-form-invalid-feedback",{class:{"d-block":t.is_submit_form4&&!t.form4.is_terms}},[t._v("You must agree before submitting.")])],1)],1)]),a("b-button",{staticClass:"mt-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit form")])],1),a("div",{staticClass:"code-section-container show-code"},[a("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(a){return t.toggleCode("code4")}}},[a("span",[t._v("Code")])]),t.code_arr.includes("code4")?a("div",{staticClass:"code-section text-left"},[a("highlight",[a("pre",[t._v('<b-form class="needs-validation" novalidate @submit.stop.prevent="submit_form4">\n    <b-form-row>\n        <div class="col-md-4 mb-4">\n            <label for="validationCustom01">First name</label>\n            <b-input id="validationCustom01" v-model="form4.first_name" :class="[is_submit_form4 ? (form4.first_name ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="First name"></b-input>\n            <b-form-valid-feedback>Looks good!</b-form-valid-feedback>\n            <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form4 && !form4.first_name}">Please fill the first name</b-form-invalid-feedback>\n        </div>\n        <div class="col-md-4 mb-4">\n            <label for="validationCustom02">Last name</label>\n            <b-input id="validationCustom02" v-model="form4.last_name" :class="[is_submit_form4 ? (form4.last_name ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="Last name"></b-input>\n            <b-form-valid-feedback>Looks good!</b-form-valid-feedback>\n            <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form4 && !form4.last_name}">Please fill the last name</b-form-invalid-feedback>\n        </div>\n        <div class="col-md-4 mb-4">\n            <label for="validationCustomUsername">Username</label>\n            <b-input-group>\n                <b-input-group-prepend>\n                    <b-input-group-text>@</b-input-group-text>\n                </b-input-group-prepend>\n                <b-input id="validationCustomUsername" v-model="form4.username" :class="[is_submit_form4 ? (form4.username ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="Username"></b-input>\n\n                <b-form-valid-feedback>Looks good!</b-form-valid-feedback>\n                <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form4 && !form4.username}">Please choose a username.</b-form-invalid-feedback>\n            </b-input-group>\n        </div>\n    </b-form-row>\n    <b-form-row>\n        <div class="col-md-6 mb-4">\n            <label for="validationCustom03">City</label>\n            <b-input id="validationCustom03" v-model="form4.city" :class="[is_submit_form4 ? (form4.city ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="City"></b-input>\n\n            <b-form-valid-feedback>Looks good!</b-form-valid-feedback>\n            <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form4 && !form4.city}">Please provide a valid city.</b-form-invalid-feedback>\n        </div>\n        <div class="col-md-3 mb-4">\n            <label for="validationCustom04">State</label>\n            <b-input id="validationCustom04" v-model="form4.state" :class="[is_submit_form4 ? (form4.state ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="State"></b-input>\n            <b-form-valid-feedback>Looks good!</b-form-valid-feedback>\n            <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form4 && !form4.state}">Please provide a valid state.</b-form-invalid-feedback>\n        </div>\n        <div class="col-md-3 mb-4">\n            <label for="validationCustom05">Zip</label>\n            <b-input id="validationCustom05" v-model="form4.zip" :class="[is_submit_form4 ? (form4.zip ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="Zip"></b-input>\n            <b-form-valid-feedback>Looks good!</b-form-valid-feedback>\n            <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form4 && !form4.zip}">Please provide a valid zip.</b-form-invalid-feedback>\n        </div>\n    </b-form-row>\n    <b-form-group class="mb-4">\n        <div class="form-check pl-0">\n            <b-checkbox class="checkbox-primary" v-model="form4.is_terms">\n                Agree to terms and conditions\n                <b-form-invalid-feedback :class="{\'d-block\' : is_submit_form4 && !form4.is_terms}">You must agree before submitting.</b-form-invalid-feedback>\n            </b-checkbox>\n        </div>\n    </b-form-group>\n    <b-button type="submit" variant="primary" class="mt-2">Submit form</b-button>\n</b-form>\n')])])],1):t._e()],1)],1)])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 layout-spacing col-md-12",attrs:{id:"browser_default"}},[a("div",{staticClass:"statbox panel box box-shadow"},[t._m(4),a("div",{staticClass:"panel-body"},[a("b-form",{on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.submit_form5.apply(null,arguments)}}},[a("b-form-row",[a("div",{staticClass:"col-md-4 mb-4"},[a("label",{attrs:{for:"validationDefault01"}},[t._v("First name")]),a("b-input",{attrs:{id:"validationDefault01",placeholder:"First name",required:""},model:{value:t.form5.first_name,callback:function(a){t.$set(t.form5,"first_name",a)},expression:"form5.first_name"}})],1),a("div",{staticClass:"col-md-4 mb-4"},[a("label",{attrs:{for:"validationDefault02"}},[t._v("Last name")]),a("b-input",{attrs:{id:"validationDefault02",placeholder:"Last name",required:""},model:{value:t.form5.last_name,callback:function(a){t.$set(t.form5,"last_name",a)},expression:"form5.last_name"}})],1),a("div",{staticClass:"col-md-4 mb-4"},[a("label",{attrs:{for:"validationDefaultUsername"}},[t._v("Username")]),a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[t._v("@")])],1),a("b-input",{attrs:{id:"validationDefaultUsername",placeholder:"Username",required:""},model:{value:t.form5.username,callback:function(a){t.$set(t.form5,"username",a)},expression:"form5.username"}})],1)],1)]),a("b-form-row",[a("div",{staticClass:"col-md-6 mb-4"},[a("label",{attrs:{for:"validationDefault03"}},[t._v("City")]),a("b-input",{attrs:{id:"validationDefault03",placeholder:"City",required:""},model:{value:t.form5.city,callback:function(a){t.$set(t.form5,"city",a)},expression:"form5.city"}})],1),a("div",{staticClass:"col-md-3 mb-4"},[a("label",{attrs:{for:"validationDefault04"}},[t._v("State")]),a("b-input",{attrs:{id:"validationDefault04",placeholder:"State",required:""},model:{value:t.form5.state,callback:function(a){t.$set(t.form5,"state",a)},expression:"form5.state"}})],1),a("div",{staticClass:"col-md-3 mb-4"},[a("label",{attrs:{for:"validationDefault05"}},[t._v("Zip")]),a("b-input",{attrs:{id:"validationDefault05",placeholder:"Zip",required:""},model:{value:t.form5.zip,callback:function(a){t.$set(t.form5,"zip",a)},expression:"form5.zip"}})],1)]),a("b-form-group",{staticClass:"mb-4"},[a("b-checkbox",{staticClass:"checkbox-primary",attrs:{required:!0},model:{value:t.form5.is_terms,callback:function(a){t.$set(t.form5,"is_terms",a)},expression:"form5.is_terms"}},[t._v(" Agree to terms and conditions ")])],1),a("b-button",{staticClass:"mt-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit form")])],1),a("div",{staticClass:"code-section-container show-code"},[a("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(a){return t.toggleCode("code5")}}},[a("span",[t._v("Code")])]),t.code_arr.includes("code5")?a("div",{staticClass:"code-section text-left"},[a("highlight",[a("pre",[t._v('<b-form @submit.stop.prevent="submit_form5">\n    <b-form-row>\n        <div class="col-md-4 mb-4">\n            <label for="validationDefault01">First name</label>\n            <b-input id="validationDefault01" v-model="form5.first_name" placeholder="First name" required></b-input>\n        </div>\n        <div class="col-md-4 mb-4">\n            <label for="validationDefault02">Last name</label>\n            <b-input id="validationDefault02" v-model="form5.last_name" placeholder="Last name" required></b-input>\n        </div>\n        <div class="col-md-4 mb-4">\n            <label for="validationDefaultUsername">Username</label>\n            <b-input-group>\n                <b-input-group-prepend>\n                    <b-input-group-text>@</b-input-group-text>\n                </b-input-group-prepend>\n                <b-input id="validationDefaultUsername" v-model="form5.username" placeholder="Username" required></b-input>\n            </b-input-group>\n        </div>\n    </b-form-row>\n    <b-form-row>\n        <div class="col-md-6 mb-4">\n            <label for="validationDefault03">City</label>\n            <b-input id="validationDefault03" v-model="form5.city" placeholder="City" required></b-input>\n        </div>\n        <div class="col-md-3 mb-4">\n            <label for="validationDefault04">State</label>\n            <b-input id="validationDefault04" v-model="form5.state" placeholder="State" required></b-input>\n        </div>\n        <div class="col-md-3 mb-4">\n            <label for="validationDefault05">Zip</label>\n            <b-input id="validationDefault05" v-model="form5.zip" placeholder="Zip" required></b-input>\n        </div>\n    </b-form-row>\n    <b-form-group class="mb-4">\n        <b-checkbox class="checkbox-primary" v-model="form5.is_terms" :required="true">\n            Agree to terms and conditions\n        </b-checkbox>\n\n    </b-form-group>\n    <b-button type="submit" variant="primary" class="mt-2">Submit form</b-button>\n</b-form>\n')])])],1):t._e()],1)],1)])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 layout-spacing col-md-12",attrs:{id:"tooltips"}},[a("div",{staticClass:"statbox panel box box-shadow"},[t._m(5),a("div",{staticClass:"panel-body"},[a("b-form",{staticClass:"needs-validation",attrs:{novalidate:""},on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),t.submit_form6.apply(null,arguments)}}},[a("b-form-row",[a("div",{staticClass:"col-md-4 mb-5"},[a("label",{attrs:{for:"validationCustom01"}},[t._v("First name")]),a("b-input",{class:[t.is_submit_form6?t.form6.first_name?"is-valid":"is-invalid":""],attrs:{id:"validationCustom01",placeholder:"First name"},model:{value:t.form6.first_name,callback:function(a){t.$set(t.form6,"first_name",a)},expression:"form6.first_name"}}),a("div",{staticClass:"valid-tooltip"},[t._v("Looks good!")]),a("div",{staticClass:"invalid-tooltip",class:{"d-block":t.is_submit_form6&&!t.form6.first_name}},[t._v("Please fill the first name")])],1),a("div",{staticClass:"col-md-4 mb-5"},[a("label",{attrs:{for:"validationCustom02"}},[t._v("Last name")]),a("b-input",{class:[t.is_submit_form6?t.form6.last_name?"is-valid":"is-invalid":""],attrs:{id:"validationCustom02",placeholder:"Last name"},model:{value:t.form6.last_name,callback:function(a){t.$set(t.form6,"last_name",a)},expression:"form6.last_name"}}),a("div",{staticClass:"valid-tooltip"},[t._v("Looks good!")]),a("div",{staticClass:"invalid-tooltip",class:{"d-block":t.is_submit_form6&&!t.form6.last_name}},[t._v("Please fill the last name")])],1),a("div",{staticClass:"col-md-4 mb-5"},[a("label",{attrs:{for:"validationCustomUsername"}},[t._v("Username")]),a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[t._v("@")])],1),a("b-input",{class:[t.is_submit_form6?t.form6.username?"is-valid":"is-invalid":""],attrs:{id:"validationCustomUsername",placeholder:"Username"},model:{value:t.form6.username,callback:function(a){t.$set(t.form6,"username",a)},expression:"form6.username"}}),a("div",{staticClass:"invalid-tooltip",class:{"d-block":t.is_submit_form6&&!t.form6.username}},[t._v("Please choose a username.")])],1)],1)]),a("b-form-row",[a("div",{staticClass:"col-md-6 mb-5"},[a("label",{attrs:{for:"validationCustom03"}},[t._v("City")]),a("b-input",{class:[t.is_submit_form6?t.form6.city?"is-valid":"is-invalid":""],attrs:{id:"validationCustom03",placeholder:"City"},model:{value:t.form6.city,callback:function(a){t.$set(t.form6,"city",a)},expression:"form6.city"}}),a("div",{staticClass:"invalid-tooltip",class:{"d-block":t.is_submit_form6&&!t.form6.city}},[t._v("Please provide a valid city.")])],1),a("div",{staticClass:"col-md-3 mb-5"},[a("label",{attrs:{for:"validationCustom04"}},[t._v("State")]),a("b-input",{class:[t.is_submit_form6?t.form6.state?"is-valid":"is-invalid":""],attrs:{id:"validationCustom04",placeholder:"State"},model:{value:t.form6.state,callback:function(a){t.$set(t.form6,"state",a)},expression:"form6.state"}}),a("div",{staticClass:"invalid-tooltip",class:{"d-block":t.is_submit_form6&&!t.form6.state}},[t._v("Please provide a valid state.")])],1),a("div",{staticClass:"col-md-3 mb-5"},[a("label",{attrs:{for:"validationCustom05"}},[t._v("Zip")]),a("b-input",{class:[t.is_submit_form6?t.form6.zip?"is-valid":"is-invalid":""],attrs:{id:"validationCustom05",placeholder:"Zip"},model:{value:t.form6.zip,callback:function(a){t.$set(t.form6,"zip",a)},expression:"form6.zip"}}),a("div",{staticClass:"invalid-tooltip",class:{"d-block":t.is_submit_form6&&!t.form6.zip}},[t._v("Please provide a valid zip.")])],1)]),a("b-form-group",{staticClass:"mb-5"},[a("div",{staticClass:"form-check pl-0"},[a("b-checkbox",{staticClass:"checkbox-primary",model:{value:t.form6.is_terms,callback:function(a){t.$set(t.form6,"is_terms",a)},expression:"form6.is_terms"}},[t._v(" Agree to terms and conditions "),a("div",{staticClass:"invalid-tooltip",class:{"d-block":t.is_submit_form6&&!t.form6.is_terms}},[t._v("You must agree before submitting.")])])],1)]),a("b-button",{staticClass:"mt-2",attrs:{type:"submit",variant:"primary"}},[t._v("Submit form")])],1),a("div",{staticClass:"code-section-container show-code"},[a("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(a){return t.toggleCode("code6")}}},[a("span",[t._v("Code")])]),t.code_arr.includes("code6")?a("div",{staticClass:"code-section text-left"},[a("highlight",[a("pre",[t._v('<b-form class="needs-validation" novalidate @submit.stop.prevent="submit_form6">\n    <b-form-row>\n        <div class="col-md-4 mb-5">\n            <label for="validationCustom01">First name</label>\n            <b-input id="validationCustom01" v-model="form6.first_name" :class="[is_submit_form6 ? (form6.first_name ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="First name"></b-input>\n            <div class="valid-tooltip">Looks good!</div>\n            <div class="invalid-tooltip" :class="{\'d-block\' : is_submit_form6 && !form6.first_name}">Please fill the first name</div>\n        </div>\n        <div class="col-md-4 mb-5">\n            <label for="validationCustom02">Last name</label>\n            <b-input id="validationCustom02" v-model="form6.last_name" :class="[is_submit_form6 ? (form6.last_name ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="Last name"></b-input>\n            <div class="valid-tooltip">Looks good!</div>\n            <div class="invalid-tooltip" :class="{\'d-block\' : is_submit_form6 && !form6.last_name}">Please fill the last name</div>\n        </div>\n        <div class="col-md-4 mb-5">\n            <label for="validationCustomUsername">Username</label>\n            <b-input-group>\n                <b-input-group-prepend>\n                    <b-input-group-text>@</b-input-group-text>\n                </b-input-group-prepend>\n                <b-input id="validationCustomUsername" v-model="form6.username" :class="[is_submit_form6 ? (form6.username ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="Username"></b-input>\n\n                <div class="invalid-tooltip" :class="{\'d-block\' : is_submit_form6 && !form6.username}">Please choose a username.</div>\n            </b-input-group>\n        </div>\n    </b-form-row>\n    <b-form-row>\n        <div class="col-md-6 mb-5">\n            <label for="validationCustom03">City</label>\n            <b-input id="validationCustom03" v-model="form6.city" :class="[is_submit_form6 ? (form6.city ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="City"></b-input>\n\n            <div class="invalid-tooltip" :class="{\'d-block\' : is_submit_form6 && !form6.city}">Please provide a valid city.</div>\n        </div>\n        <div class="col-md-3 mb-5">\n            <label for="validationCustom04">State</label>\n            <b-input id="validationCustom04" v-model="form6.state" :class="[is_submit_form6 ? (form6.state ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="State"></b-input>\n            <div class="invalid-tooltip" :class="{\'d-block\' : is_submit_form6 && !form6.state}">Please provide a valid state.</div>\n        </div>\n        <div class="col-md-3 mb-5">\n            <label for="validationCustom05">Zip</label>\n            <b-input id="validationCustom05" v-model="form6.zip" :class="[is_submit_form6 ? (form6.zip ? \'is-valid\' : \'is-invalid\') : \'\']" placeholder="Zip"></b-input>\n            <div class="invalid-tooltip" :class="{\'d-block\' : is_submit_form6 && !form6.zip}">Please provide a valid zip.</div>\n        </div>\n    </b-form-row>\n    <b-form-group class="mb-5">\n        <div class="form-check pl-0">\n            <b-checkbox class="checkbox-primary" v-model="form6.is_terms">\n                Agree to terms and conditions\n                <div class="invalid-tooltip" :class="{\'d-block\' : is_submit_form6 && !form6.is_terms}">You must agree before submitting.</div>\n            </b-checkbox>\n        </div>\n    </b-form-group>\n    <b-button type="submit" variant="primary" class="mt-2">Submit form</b-button>\n</b-form>\n')])])],1):t._e()],1)],1)])])])])],1)},o=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[a("h4",[t._v("Basic")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[a("h4",[t._v("Email")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[a("h4",[t._v("Select")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[a("h4",[t._v("Custom styles")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[a("h4",[t._v("Browser defaults")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"panel-heading"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[a("h4",[t._v("Tooltips")])])])])}],e=(s("0706"),s("e706")),l={metaInfo:{title:"Bootstrap Form Validation"},components:{highlight:e["a"]},data(){return{code_arr:[],form1:{name:""},is_submit_form1:!1,form2:{email:""},is_submit_form2:!1,form3:{select:""},is_submit_form3:!1,form4:{first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1},is_submit_form4:!1,form5:{first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1},is_submit_form5:!1,form6:{first_name:"Shaun",last_name:"Park",username:"",city:"",state:"",zip:"",is_terms:!1},is_submit_form6:!1}},mounted(){},methods:{toggleCode(t){this.code_arr.includes(t)?this.code_arr=this.code_arr.filter(a=>a!=t):this.code_arr.push(t)},email_validate(t){const a=/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;return a.test(t)},submit_form1(){this.is_submit_form1=!0,this.form1.name&&this.$bvToast.toast("Form submitted successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autohidedelay:2e3})},submit_form2(){this.is_submit_form2=!0,this.email_validate(this.form2.email)&&this.$bvToast.toast("Form submitted successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autohidedelay:2e3})},submit_form3(){this.is_submit_form3=!0,this.form3.select&&this.$bvToast.toast("Form submitted successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autohidedelay:2e3})},submit_form4(){this.is_submit_form4=!0,this.form4.first_name&&this.form4.last_name&&this.form4.username&&this.form4.city&&this.form4.state&&this.form4.zip&&this.form4.is_terms&&this.$bvToast.toast("Form submitted successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autohidedelay:2e3})},submit_form5(){this.is_submit_form5=!0,this.form5.first_name&&this.form5.last_name&&this.form5.username&&this.form5.city&&this.form5.state&&this.form5.zip&&this.form5.is_terms&&this.$bvToast.toast("Form submitted successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autohidedelay:2e3})},submit_form6(){this.is_submit_form6=!0,this.form6.first_name&&this.form6.last_name&&this.form6.username&&this.form6.city&&this.form6.state&&this.form6.zip&&this.form6.is_terms&&this.$bvToast.toast("Form submitted successfully.",{headerClass:"d-none",bodyClass:"toast-success",toaster:"b-toaster-top-center",autohidedelay:2e3})}}},r=l,m=s("2877"),n=Object(m["a"])(r,i,o,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=forms-validation.b7e30ecf.js.map