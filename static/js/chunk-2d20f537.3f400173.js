(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f537"],{b2c4:function(a,e,n){"use strict";n.r(e);var t=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{margin:"0 0 5px 20px"}},[a._v("\n    Fixed header, sorted by header order,\n  ")]),a._v(" "),n("fixed-thead"),a._v(" "),n("div",{staticStyle:{margin:"30px 0 5px 20px"}},[a._v("\n    Not fixed header, sorted by click order\n  ")]),a._v(" "),n("unfixed-thead")],1)},l=[],r=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-checkbox-group",{model:{value:a.checkboxVal,callback:function(e){a.checkboxVal=e},expression:"checkboxVal"}},[n("el-checkbox",{attrs:{label:"apple"}},[a._v("\n        apple\n      ")]),a._v(" "),n("el-checkbox",{attrs:{label:"banana"}},[a._v("\n        banana\n      ")]),a._v(" "),n("el-checkbox",{attrs:{label:"orange"}},[a._v("\n        orange\n      ")])],1)],1),a._v(" "),n("el-table",{key:a.key,staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"name",label:"fruitName",width:"180"}}),a._v(" "),a._l(a.formThead,function(e){return n("el-table-column",{key:e,attrs:{label:e},scopedSlots:a._u([{key:"default",fn:function(n){return[a._v("\n        "+a._s(n.row[e])+"\n      ")]}}],null,!0)})})],2)],1)},o=[],c=["apple","banana"],i={data:function(){return{tableData:[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],key:1,formTheadOptions:["apple","banana","orange"],checkboxVal:c,formThead:c}},watch:{checkboxVal:function(a){this.formThead=this.formTheadOptions.filter(function(e){return a.indexOf(e)>=0}),this.key=this.key+1}}},s=i,p=n("6691"),b=Object(p["a"])(s,r,o,!1,null,null,null),u=b.exports,d=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-checkbox-group",{model:{value:a.formThead,callback:function(e){a.formThead=e},expression:"formThead"}},[n("el-checkbox",{attrs:{label:"apple"}},[a._v("\n        apple\n      ")]),a._v(" "),n("el-checkbox",{attrs:{label:"banana"}},[a._v("\n        banana\n      ")]),a._v(" "),n("el-checkbox",{attrs:{label:"orange"}},[a._v("\n        orange\n      ")])],1)],1),a._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"name",label:"fruitName",width:"180"}}),a._v(" "),a._l(a.formThead,function(e){return n("el-table-column",{key:e,attrs:{label:e},scopedSlots:a._u([{key:"default",fn:function(n){return[a._v("\n        "+a._s(n.row[e])+"\n      ")]}}],null,!0)})})],2)],1)},h=[],f={data:function(){return{tableData:[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],formThead:["apple","banana"]}}},v=f,_=Object(p["a"])(v,d,h,!1,null,null,null),m=_.exports,x={name:"DynamicTable",components:{FixedThead:u,UnfixedThead:m}},k=x,g=Object(p["a"])(k,t,l,!1,null,null,null);e["default"]=g.exports}}]);