(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e354c8fe"],{"1f4f":function(e,t,a){"use strict";var s=a("5530"),n=(a("a9e3"),a("8b37"),a("80d2")),i=a("7560"),r=a("58df");t["a"]=Object(r["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"3f3d":function(e,t,a){"use strict";a.r(t);var s=a("5d23"),n=a("1f4f"),i=(a("b0c0"),function(){var e=this,t=e._self._c;return t("div",[t(s["c"],{staticClass:"text-wrap"},[e._v(" You can show a dense version of the table by using the "),t("code",[e._v("dense")]),e._v(" prop. ")]),t("div",{staticClass:"mt-4"},[t(n["a"],{attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Name")]),t("th",{staticClass:"text-left"},[e._v("Calories")])])]),t("tbody",e._l(e.desserts,(function(a){return t("tr",{key:a.name},[t("td",[e._v(e._s(a.name))]),t("td",[e._v(e._s(a.calories))])])})),0)]},proxy:!0}])})],1)],1)}),r=[],o={name:"TableSimpleDense",data:function(){return{desserts:[{name:"Frozen Yogurt",calories:159},{name:"Ice cream sandwich",calories:237},{name:"Eclair",calories:262},{name:"Cupcake",calories:305},{name:"Gingerbread",calories:356},{name:"Jelly bean",calories:375},{name:"Lollipop",calories:392},{name:"Honeycomb",calories:408},{name:"Donut",calories:452},{name:"KitKat",calories:518}]}}},l=o,c=a("2877"),d=Object(c["a"])(l,i,r,!1,null,null,null);t["default"]=d.exports},"8b37":function(e,t,a){}}]);
//# sourceMappingURL=chunk-e354c8fe.06b82e8e.js.map