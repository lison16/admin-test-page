(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"+rU0":function(t,a,e){"use strict";var n=e("cyzb"),s=e.n(n);s.a},JwnE:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Row",{attrs:{gutter:10}},[e("i-col",{attrs:{span:"6"}},[e("Card",[e("Upload",{attrs:{action:"","before-upload":t.beforeUpload}},[e("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("上传Csv文件")]),t._v("\n            点击上传Csv文件\n      ")],1),t._v(" "),e("p",[t._v("util.js提供两个方法用来实现这个功能：")]),t._v(" "),e("p",{staticClass:"update-table-intro"},[e("Icon",{staticStyle:{"margin-right":"10px"},attrs:{size:10,type:"heart"}}),e("span",{staticClass:"code-high-line"},[t._v("getArrayFromFile")]),t._v("：将Csv文件解析为二维数组")],1),t._v(" "),e("p",{staticClass:"update-table-intro"},[e("Icon",{staticStyle:{"margin-right":"10px"},attrs:{size:10,type:"heart"}}),e("span",{staticClass:"code-high-line"},[t._v("getTableDataFromArray")]),t._v("：将二维数组转为表格数据，具体请看文档")],1)],1)],1),t._v(" "),e("i-col",{attrs:{span:"18"}},[e("Table",{attrs:{height:500,columns:t.columns,data:t.tableData}})],1)],1)},s=[],o=e("wnYN"),r={name:"update_table_page",data:function(){return{columns:[],tableData:[]}},methods:{beforeUpload:function(t){var a=this;return Object(o["d"])(t).then(function(t){var e=Object(o["k"])(t),n=e.columns,s=e.tableData;a.columns=n,a.tableData=s}).catch(function(){a.$Notice.warning({title:"只能上传Csv文件",desc:"只能上传Csv文件，请重新上传"})}),!1}}},i=r,c=(e("+rU0"),e("KHd+")),l=Object(c["a"])(i,n,s,!1,null,null,null);a["default"]=l.exports},cyzb:function(t,a,e){}}]);
//# sourceMappingURL=11.35f7f3a3.js.map