(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),a=n(7),i=n.n(a),j=(n(13),n(2)),r=n(3),l=n(5),o=n(4),b=n(0),p=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"inputDiv",children:[Object(b.jsx)("label",{children:this.props.label}),Object(b.jsx)("div",{className:"inputField",children:"textarea"===this.props.type?Object(b.jsx)("textarea",{}):Object(b.jsx)("input",{type:this.props.type})})]})}}]),n}(c.Component),u=n(8),x=function(){return Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(b.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})]})},O=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(j.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={sectionNum:0},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)(b.Fragment,{children:[Object(u.a)(Array(this.state.sectionNum)).map((function(e,n){return Object(b.jsx)(t.props.section,{},n)})),Object(b.jsxs)("button",{className:"newBtn",onClick:function(){t.setState({sectionNum:t.state.sectionNum+1})},children:[Object(b.jsx)(x,{}),"New Section"]})]})}}]),n}(c.Component);n(15);function h(){return Object(b.jsxs)("section",{id:"personal",children:[Object(b.jsx)(p,{label:"First Name",type:"text"}),Object(b.jsx)(p,{label:"Last Name",type:"text"}),Object(b.jsx)(p,{label:"Email",type:"email"}),Object(b.jsx)(p,{label:"Phone",type:"tel"}),Object(b.jsx)(p,{label:"Professional Summary",type:"textarea"})]})}function d(){return Object(b.jsxs)("section",{id:"employment",children:[Object(b.jsx)(p,{label:"Job Title",type:"text"}),Object(b.jsx)(p,{label:"Company",type:"text"}),Object(b.jsx)(p,{label:"Start Date",type:"date"}),Object(b.jsx)(p,{label:"End Date",type:"date"}),Object(b.jsx)(p,{label:"Description",type:"textarea"})]})}function y(){return Object(b.jsxs)("section",{id:"education",children:[Object(b.jsx)(p,{label:"School",type:"text"}),Object(b.jsx)(p,{label:"Degree",type:"text"}),Object(b.jsx)(p,{label:"Start Date",type:"date"}),Object(b.jsx)(p,{label:"End Date",type:"date"}),Object(b.jsx)(p,{label:"Description",type:"textarea"})]})}var v=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(d,{}),Object(b.jsx)(O,{section:d}),Object(b.jsx)(d,{}),Object(b.jsx)(O,{section:y})]})}}]),n}(c.Component);v.state={sections:{}},v.handleClick=function(){var t=Object.assign({},v.state.section,{employment:1});v.setState({sections:t})};var m=v,f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.e4b884df.chunk.js.map