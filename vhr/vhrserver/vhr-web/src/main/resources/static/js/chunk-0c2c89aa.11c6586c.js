(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c2c89aa"],{"0aaf":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    综合信息统计\n")])},n=[],r={name:"StaAll"},i=r,s=a("2877"),c=Object(s["a"])(i,l,n,!1,null,"71464d5f",null);e["default"]=c.exports},1937:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    工资表查询\n")])},n=[],r={name:"SalSearch"},i=r,s=a("2877"),c=Object(s["a"])(i,l,n,!1,null,"564a95f9",null);e["default"]=c.exports},"21c7":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    工资表管理\n")])},n=[],r={name:"SalTable"},i=r,s=a("2877"),c=Object(s["a"])(i,l,n,!1,null,"bca3269e",null);e["default"]=c.exports},"2bc5":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:t.showAddSalaryView}},[t._v("添加工资账套")]),a("el-button",{attrs:{icon:"el-icon-refresh",type:"success"},on:{click:t.initSalaries}})],1),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-table",{attrs:{data:t.salaries,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{width:"120",prop:"name",label:"账套名称"}}),a("el-table-column",{attrs:{width:"70",prop:"basicSalary",label:"基本工资"}}),a("el-table-column",{attrs:{width:"70",prop:"trafficSalary",label:"交通补助"}}),a("el-table-column",{attrs:{width:"70",prop:"lunchSalary",label:"午餐补助"}}),a("el-table-column",{attrs:{width:"70",prop:"bonus",label:"奖金"}}),a("el-table-column",{attrs:{width:"100",prop:"createDate",label:"启用时间"}}),a("el-table-column",{attrs:{label:"养老金",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"pensionPer",label:"比率"}}),a("el-table-column",{attrs:{width:"70",prop:"pensionBase",label:"基数"}})],1),a("el-table-column",{attrs:{label:"医疗保险",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"medicalPer",label:"比率"}}),a("el-table-column",{attrs:{width:"70",prop:"medicalBase",label:"基数"}})],1),a("el-table-column",{attrs:{label:"公积金",align:"center"}},[a("el-table-column",{attrs:{width:"70",prop:"accumulationFundPer",label:"比率"}}),a("el-table-column",{attrs:{width:"70",prop:"accumulationFundBase",label:"基数"}})],1),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(a){return t.showEditSalaryView(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.deleteSalary(e.row)}}},[t._v("删除")])]}}])})],1)],1),a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticStyle:{display:"flex","justify-content":"space-around","align-items":"center"}},[a("el-steps",{attrs:{direction:"vertical",active:t.activeItemIndex}},t._l(t.salaryItemName,(function(t,e){return a("el-step",{key:e,attrs:{title:t}})})),1),t._l(t.salary,(function(e,l,n){return a("el-input",{directives:[{name:"show",rawName:"v-show",value:t.activeItemIndex==n,expression:"activeItemIndex==index"}],key:n,staticStyle:{width:"200px"},attrs:{placeholder:"请输入"+t.salaryItemName[n]+"..."},model:{value:t.salary[l],callback:function(e){t.$set(t.salary,l,e)},expression:"salary[title]"}})}))],2),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.preStep}},[t._v(t._s(10==t.activeItemIndex?"取消":"上一步"))]),a("el-button",{attrs:{type:"primary"},on:{click:t.nextStep}},[t._v(t._s(10==t.activeItemIndex?"完成":"下一步"))])],1)])],1)},n=[],r=(a("7f7f"),{name:"SalSob",data:function(){return{dialogVisible:!1,dialogTitle:"添加工资账套",salaries:[],activeItemIndex:0,salaryItemName:["基本工资","交通补助","午餐补助","奖金","养老金比率","养老金基数","医疗保险比率","医疗保险基数","公积金比率","公积金基数","账套名称"],salary:{basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0,name:""}}},mounted:function(){this.initSalaries()},methods:{showEditSalaryView:function(t){this.dialogTitle="修改工资账套",this.dialogVisible=!0,this.salary.basicSalary=t.basicSalary,this.salary.trafficSalary=t.trafficSalary,this.salary.lunchSalary=t.lunchSalary,this.salary.bonus=t.bonus,this.salary.pensionPer=t.pensionPer,this.salary.pensionBase=t.pensionBase,this.salary.medicalPer=t.medicalPer,this.salary.medicalBase=t.medicalBase,this.salary.accumulationFundPer=t.accumulationFundPer,this.salary.accumulationFundBase=t.accumulationFundBase,this.salary.name=t.name,this.salary.id=t.id},deleteSalary:function(t){var e=this;this.$confirm("此操作将删除【"+t.name+"】账套，是否继续？","提示",{cancelButtonText:"取消",confirmButtonText:"确定"}).then((function(){e.deleteRequest("/salary/sob/"+t.id).then((function(t){t&&e.initSalaries()}))})).catch((function(){e.$message.info("取消删除!")}))},preStep:function(){0!=this.activeItemIndex&&(10!=this.activeItemIndex?this.activeItemIndex--:this.dialogVisible=!1)},nextStep:function(){var t=this;10!=this.activeItemIndex?this.activeItemIndex++:this.salary.id?this.putRequest("/salary/sob/",this.salary).then((function(e){e&&(t.initSalaries(),t.dialogVisible=!1)})):this.postRequest("/salary/sob/",this.salary).then((function(e){e&&(t.initSalaries(),t.dialogVisible=!1)}))},showAddSalaryView:function(){this.salary={basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0},this.dialogTitle="添加工资账套",this.activeItemIndex=0,this.dialogVisible=!0},initSalaries:function(){var t=this;this.getRequest("/salary/sob/").then((function(e){e&&(t.salaries=e)}))}}}),i=r,s=a("2877"),c=Object(s["a"])(i,l,n,!1,null,"6f78b826",null);e["default"]=c.exports},"6ac9":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("el-table",{attrs:{data:t.emps,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",fixed:"",width:"120",align:"left"}}),a("el-table-column",{attrs:{prop:"workID",label:"工号",width:"120",align:"left"}}),a("el-table-column",{attrs:{prop:"email",label:"电子邮件",width:"200",align:"left"}}),a("el-table-column",{attrs:{prop:"phone",label:"电话号码",width:"120",align:"left"}}),a("el-table-column",{attrs:{prop:"department.name",label:"所属部门",width:"120",align:"left"}}),a("el-table-column",{attrs:{label:"所属部门",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.salary?a("el-tooltip",{attrs:{placement:"right"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("table",[a("tr",[a("td",[t._v("基本工资")]),a("td",[t._v(t._s(e.row.salary.basicSalary))])]),a("tr",[a("td",[t._v("交通补助")]),a("td",[t._v(t._s(e.row.salary.trafficSalary))])]),a("tr",[a("td",[t._v("午餐补助")]),a("td",[t._v(t._s(e.row.salary.lunchSalary))])]),a("tr",[a("td",[t._v("奖金")]),a("td",[t._v(t._s(e.row.salary.bonus))])]),a("tr",[a("td",[t._v("养老金比率")]),a("td",[t._v(t._s(e.row.salary.pensionPer))])]),a("tr",[a("td",[t._v("养老金基数")]),a("td",[t._v(t._s(e.row.salary.pensionBase))])]),a("tr",[a("td",[t._v("医疗保险比率")]),a("td",[t._v(t._s(e.row.salary.medicalPer))])]),a("tr",[a("td",[t._v("医疗保险基数")]),a("td",[t._v(t._s(e.row.salary.medicalBase))])]),a("tr",[a("td",[t._v("公积金比率")]),a("td",[t._v(t._s(e.row.salary.accumulationFundPer))])]),a("tr",[a("td",[t._v("公积金基数")]),a("td",[t._v(t._s(e.row.salary.accumulationFundBase))])]),a("tr",[a("td",[t._v("启用时间")]),a("td",[t._v(t._s(e.row.salary.createDate))])])])]),a("el-tag",[t._v(t._s(e.row.salary.name))])],1):a("el-tag",[t._v("暂未设置")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"left",title:"修改工资账套",width:"200",trigger:"click"},on:{show:function(a){return t.showPop(e.row.salary)},hide:function(a){return t.hidePop(e.row)}}},[a("div",[a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:t.currentSalary,callback:function(e){t.currentSalary=e},expression:"currentSalary"}},t._l(t.salaries,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),a("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[t._v("修改工资账套")])],1)]}}])})],1),a("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[a("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:t.total},on:{"size-change":t.sizeChange,"current-change":t.currentChange}})],1)],1)])},n=[],r={name:"SalSobCfg",data:function(){return{emps:[],total:0,currentPage:1,currentSize:10,currentSalary:null,salaries:[]}},mounted:function(){this.initEmps(),this.initSalaries()},methods:{sizeChange:function(t){this.currentSize=t,this.initEmps()},currentChange:function(t){this.currentPage=t,this.initEmps()},hidePop:function(t){var e=this;this.currentSalary&&this.putRequest("/salary/sobcfg/?eid="+t.id+"&sid="+this.currentSalary).then((function(t){t&&e.initEmps()}))},showPop:function(t){this.currentSalary=t?t.id:null},initSalaries:function(){var t=this;this.getRequest("/salary/sobcfg/salaries").then((function(e){e&&(t.salaries=e)}))},initEmps:function(){var t=this;this.getRequest("/salary/sobcfg/?page="+this.currentPage+"&size="+this.currentSize).then((function(e){e&&(t.emps=e.data,t.total=e.total)}))}}},i=r,s=a("2877"),c=Object(s["a"])(i,l,n,!1,null,"4129ff7d",null);e["default"]=c.exports},a49a:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    人事记录统计\n")])},n=[],r={name:"StaRecord"},i=r,s=a("2877"),c=Object(s["a"])(i,l,n,!1,null,"0f16d65e",null);e["default"]=c.exports},b419:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    人事信息统计\n")])},n=[],r={name:"StaPers"},i=r,s=a("2877"),c=Object(s["a"])(i,l,n,!1,null,"5b97df8c",null);e["default"]=c.exports},c1d3:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    员工积分统计\n")])},n=[],r={name:"StaScore"},i=r,s=a("2877"),c=Object(s["a"])(i,l,n,!1,null,"14a28673",null);e["default"]=c.exports},fbac:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    月末处理\n")])},n=[],r={name:"SalMonth"},i=r,s=a("2877"),c=Object(s["a"])(i,l,n,!1,null,"51ab19b2",null);e["default"]=c.exports},feca:function(t,e,a){var l={"./Home.vue":"bb51","./Login.vue":"a55b","./chat/FriendChat.vue":"8a18","./emp/EmpAdv.vue":"8759","./emp/EmpBasic.vue":"58da","./per/PerEc.vue":"d9ac","./per/PerEmp.vue":"5865","./per/PerMv.vue":"cfbb","./per/PerSalary.vue":"5a4a","./per/PerTrain.vue":"83ed","./sal/SalMonth.vue":"fbac","./sal/SalSearch.vue":"1937","./sal/SalSob.vue":"2bc5","./sal/SalSobCfg.vue":"6ac9","./sal/SalTable.vue":"21c7","./sta/StaAll.vue":"0aaf","./sta/StaPers.vue":"b419","./sta/StaRecord.vue":"a49a","./sta/StaScore.vue":"c1d3","./sys/SysBasic.vue":"8d67","./sys/SysCfg.vue":"1fe7","./sys/SysData.vue":"d1e3","./sys/SysHr.vue":"418a","./sys/SysInit.vue":"8608","./sys/SysLog.vue":"864e"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(l,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return l[t]}n.keys=function(){return Object.keys(l)},n.resolve=r,t.exports=n,n.id="feca"}}]);
//# sourceMappingURL=chunk-0c2c89aa.11c6586c.js.map