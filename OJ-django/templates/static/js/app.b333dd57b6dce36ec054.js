webpackJsonp([1],{"5I2F":function(t,e){},"9t0L":function(t,e){},EXNr:function(t,e){},"G+/m":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"dhl"},[a("span",{staticClass:"bt"},[t._v("BUCT-CSDB")]),t._v(" "),a("a",{attrs:{href:"#/home"}},[t._v("主页")]),t._v(" "),a("a",{attrs:{href:"#/student"}},[t._v("排名")]),t._v(" "),a("a",{attrs:{href:"#/user"}},[t._v("登录")]),t._v(" "),a("a",{attrs:{href:"#/pspace"}},[t._v("我的")]),t._v(" "),a("span",{staticClass:"hi"},[t._v("欢迎使用:"+t._s(t.userid))])]),t._v(" "),a("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App",data:function(){return{userid:2019110015}},methods:{}},s,!1,function(t){a("Ult1")},"data-v-dbce54d6",null).exports,r=a("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"id"},[e("p",[this._v("953众包调试项目@"),e("a",{attrs:{href:"http://www.buctcoder.com",target:"_blank"}},[this._v("BUCTOJ")])]),this._v(" "),e("p",[this._v("有事请联系工程松鼠QQ：982125792")]),this._v(" "),e("p",[this._v("我的问题你来包，你的问题大家包!ヽ( ⌒ω⌒)人(=^‥^= )ﾉ")])])}]};var l=a("VU/8")({name:"Footer"},o,!1,function(t){a("d+hr")},"data-v-2009605c",null).exports,c={name:"Quecard",data:function(){return{lists:[]}},methods:{getdata:function(){var t=this;this.$axios.get("http://localhost:3000/user").then(function(e){console.log(e),t.lists=e.data,t.lists.forEach(function(t,e){0==t.rtype?t.rtype="格式错误":1==t.rtype?t.rtype="结果错误":2==t.rtype?t.rtype="运行错误":3==t.rtype?t.rtype="时间超限":4==t.rtype?t.rtype="内存超限":5==t.rtype?t.rtype="输出超限":6==t.rtype&&(t.rtype="编译错误")})})}},created:function(){this.getdata()}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("el-popover",{attrs:{placement:"bottom",title:"",width:"400",trigger:"hover"}},[a("el-carousel",{attrs:{slot:"reference",interval:5e3},slot:"reference"},t._l(t.lists,function(e){return a("el-carousel-item",{key:e},[a("br"),a("br"),t._v(" "),a("p",{staticClass:"medium"},[t._v("提交编号:"+t._s(e.tjbh))]),t._v(" "),a("p",{staticClass:"medium"},[t._v("错误类型:"+t._s(e.rtype))]),t._v(" "),a("p",{staticClass:"medium"},[t._v("学号:"+t._s(e.stdnb))]),t._v(" "),a("div",{attrs:{slot:"—"},slot:"—"},[a("h3",[t._v("问题描述")]),t._v(" "),a("p",[t._v(t._s(e.wtms))])])])}),1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(c,d,!1,function(t){a("nxp7")},null,null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-button",{attrs:{plain:""},on:{click:this.open1}},[this._v("\r\n        有人发布\r\n    ")]),this._v(" "),e("el-button",{attrs:{plain:""},on:{click:this.open2}},[this._v("\r\n        有人回答\r\n    ")])],1)},staticRenderFns:[]},h=a("VU/8")({name:"Notice",methods:{open1:function(){this.$notify({title:"新问题",message:"20191100xx发布了问题841454",offset:50,duration:5500})},open2:function(){this.$notify({title:"恭喜大佬",message:"20191100XX解决了问题814561获得5积分",offset:50,duration:5500})}}},u,!1,null,null,null).exports,m=a("Icdr");a("4UDB"),a("Oq2I"),a("miEh"),a("80cc");var v={name:"Sightdata",data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){this.drawLine()},methods:{drawLine:function(){m.init(document.getElementById("main")).setOption({title:{text:""},tooltip:{trigger:"axis"},legend:{data:["结果错误","格式错误","运行错误","时间超限","内存超限"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{type:"value"},series:[{name:"格式错误",type:"line",stack:"总量",data:[120,132,101,134,90,230,210]},{name:"时间超限",type:"line",stack:"总量",data:[220,182,191,234,290,330,310]},{name:"运行错误",type:"line",stack:"总量",data:[150,232,201,154,190,330,410]},{name:"内存超限",type:"line",stack:"总量",data:[320,332,301,334,390,330,320]},{name:"结果错误",type:"line",stack:"总量",data:[820,932,901,934,1290,1330,1320]}]})}}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main"}})},staticRenderFns:[]},_=a("VU/8")(v,f,!1,null,null,null).exports,b=a("Icdr");a("GbHy"),a("Oq2I"),a("miEh"),a("80cc");var g={name:"Sightdata",data:function(){return{msg:"Welcome to Your Vue.js App"}},mounted:function(){this.drawLine()},methods:{drawLine:function(){b.init(document.getElementById("main")).setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["提交量","解决量"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"",type:"bar",barWidth:"50%",data:[39,30],itemStyle:{normal:{color:function(t){return["#d14a61","#5793f3"][t.dataIndex]}}}}]})}}},x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:"main"}})},staticRenderFns:[]},w=a("VU/8")(g,x,!1,null,null,null).exports,y={data:function(){return{nowDate:"",nowWeek:""}},methods:{currentTime:function(){setInterval(this.formatDate,500)},formatDate:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate(),s=t.getDay(),i=t.getHours();i=i<10?"0"+i:i;var r=t.getMinutes();r=r<10?"0"+r:r;var o=t.getSeconds();o=o<10?"0"+o:o,this.nowDate=e+"/"+a+"/"+n+" "+i+":"+r+":"+o,this.week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][s]}},mounted:function(){this.currentTime()},beforeDestroy:function(){this.formatDate&&clearInterval(this.formatDate)}},C={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},D=a("VU/8")(y,C,!1,null,null,null).exports,k={name:"home",data:function(){return{user:[],index:1}},components:{Footer:l,Quecard:p,Notice:h,Sightdata:_,Sightdata2:w,Time:D},methods:{Week:function(){this.index=1},Daily:function(){this.index=0}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[t._m(0),t._v(" "),a("div",{staticStyle:{width:"100%",height:"100%",border:"0px solid silver",position:"relative"}},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),t._v(" "),a("Quecard",{staticClass:"wtk"}),t._v(" "),1==t.index?a("div",[a("Sightdata",{staticClass:"tjt"})],1):t._e(),t._v(" "),0==t.index?a("div",[a("Sightdata2",{staticClass:"tjt"})],1):t._e(),t._v(" "),a("div",{staticClass:"but"},[a("el-button",{attrs:{type:"primary",plain:"",size:"mini",round:""},on:{click:t.Week}},[t._v("本周数据")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:"",size:"mini",round:""},on:{click:t.Daily}},[t._v("今日数据")])],1),t._v(" "),a("Notice",{staticClass:"xx"}),a("Time",{ref:"hello"}),t._v(" "),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],1),t._v(" "),a("Footer",{staticStyle:{"margin-top":"21px"}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"n",attrs:{href:"#/quebase"}},[e("i",{staticClass:"el-icon-mouse"}),this._v("我要调试")]),this._v(" "),e("a",{staticClass:"y",attrs:{href:"#/forhelp"}},[e("i",{staticClass:"el-icon-s-opportunity"}),this._v("我要求助")])])}]};var S=a("VU/8")(k,$,!1,function(t){a("5I2F")},"data-v-a0979106",null).exports,z={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"onlin"},[e("form",{staticClass:"box",attrs:{action:"#",method:"get"}},[e("h2",[this._v("Crowdsourcing debugging")]),this._v(" "),e("div",{staticClass:"sr"},[e("div",{staticClass:"u"},[this._v("学号: "),e("input",{attrs:{type:"text",name:"idt",placeholder:"username"}})]),this._v(" "),e("div",{staticClass:"p"},[this._v("密码: "),e("input",{attrs:{type:"password",name:"pwd",placeholder:"password"}})]),this._v(" "),e("input",{staticStyle:{"font-size":"13px"},attrs:{type:"submit",name:"",value:"登录"}})])])])}]};var E=a("VU/8")({name:"User",data:function(){return{list:[]}},methods:{}},z,!1,function(t){a("OTKL")},"data-v-5cbd864e",null).exports,j={data:function(){return{tableData:[],total:0,search:"",currentPage:1,pagesize:10,centerDialogVisible:!1}},methods:{getdata:function(){var t=this;this.$axios.get("http://localhost:3000/rank").then(function(e){console.log(e),t.tableData=e.data,t.total=t.tableData.length})},handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t}},created:function(){this.getdata()}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("积分榜")]),t._v(" "),a("el-table",{staticStyle:{width:"100%",margin:"0px auto"},attrs:{data:t.tableData.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"排名",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stdnu",label:"学号",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"",width:"600",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"conut",label:"解题数",width:"180",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"credit",label:"积分",width:"180",align:"center"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var V=a("VU/8")(j,F,!1,function(t){a("frCt")},"data-v-2a28dab0",null).exports,q={name:"Forhelp",data:function(){return{form:{stdnb:"",wtbh:"",tjbh:"",rtype:"",wtms:""}}},components:{Time:D},methods:{save:function(t){if(/^2[1234567890]\d{8}$/.test(this.form.stdnb)){if(this.form.stdnb&&this.form.wtbh&&this.form.tjbh&&this.form.rtype&&this.form.wtms){var e={stdnb:this.form.stdnb,questionid:this.form.wtbh,tjbh:this.form.tjbh,wtms:this.form.wtms,rtype:this.form.rtype,time:this.$refs.hello.nowDate,count:6};this.$axios.post("http://localhost:3000/user",e).then(function(t){console.log(t)}),t.preventDefault(),this.$message({message:"提交成功",type:"success",duration:1500})}else this.$message({message:"请输入完整信息",type:"warning",duration:1500});t.preventDefault()}else this.$message({message:"请输入正确的学号",type:"warning"})}}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"qz"},[t._m(0),t._v(" "),a("div",{staticClass:"quelist"},[a("el-form",{ref:"form",staticClass:"farm",attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{staticStyle:{width:"59%"},model:{value:t.form.stdnb,callback:function(e){t.$set(t.form,"stdnb",e)},expression:"form.stdnb"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"问题编号"}},[a("el-input",{staticStyle:{width:"59%"},model:{value:t.form.wtbh,callback:function(e){t.$set(t.form,"wtbh",e)},expression:"form.wtbh"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"提交编号"}},[a("el-input",{staticStyle:{width:"59%"},model:{value:t.form.tjbh,callback:function(e){t.$set(t.form,"tjbh",e)},expression:"form.tjbh"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"错误类型"}},[a("el-select",{attrs:{placeholder:"请选择错误类型"},model:{value:t.form.rtype,callback:function(e){t.$set(t.form,"rtype",e)},expression:"form.rtype"}},[a("el-option",{attrs:{label:"格式错误",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"结果错误",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"运行错误",value:"2"}}),t._v(" "),a("el-option",{attrs:{label:"时间超限",value:"3"}}),t._v(" "),a("el-option",{attrs:{label:"内存超限",value:"4"}}),t._v(" "),a("el-option",{attrs:{label:"输出超限",value:"5"}}),t._v(" "),a("el-option",{attrs:{label:"编译错误",value:"6"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"问题描述"}},[a("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:9},model:{value:t.form.wtms,callback:function(e){t.$set(t.form,"wtms",e)},expression:"form.wtms"}})],1),t._v(" "),a("el-form-item",[a("el-button",{staticClass:"fb",attrs:{type:"primary",plain:""},on:{click:t.save}},[t._v("发布问题"),a("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1)],1),t._v(" "),a("Time",{ref:"hello"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"n",attrs:{href:"#/quebase"}},[e("i",{staticClass:"el-icon-mouse"}),this._v("我要调试")])])}]};var U=a("VU/8")(q,T,!1,function(t){a("EXNr")},"data-v-fefffdda",null).exports,A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-row",{staticClass:"row-header",attrs:{type:"flex",justify:"left"}},[a("el-col",{attrs:{span:3}},[a("h2",{staticClass:"header-h2"},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[t._v("个人信息\n                        "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("a",{attrs:{href:"#app1"}},[t._v("我的代码")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#app2"}},[t._v("我的解答")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#app3"}},[t._v("我的收藏")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#app4"}},[t._v("优质解答")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#app5"}},[t._v("最新消息提醒")])])],1)],1)],1)])],1),t._v(" "),a("el-backtop",{attrs:{target:"row-header"}},[a("i",{staticClass:"el-icon-caret-top"})]),t._v(" "),a("el-row",{staticStyle:{height:"3500px",background:"#eeeeee"},attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:15}},[a("br"),t._v(" "),a("h1",{staticStyle:{"font-size":"50px"}},[t._v("hi,"+t._s(t.welcome))]),t._v(" "),a("p",[t._v("希望你有愉快的体验")]),t._v(" "),a("el-row",{attrs:{id:"app0",gutter:20}},[a("el-col",{attrs:{span:24,offset:0}},[a("el-card",{attrs:{shadow:"always"}},[a("h1",[t._v("个人信息")]),t._v(" "),a("el-divider"),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData0,border:"true"}},[a("el-table-column",{attrs:{prop:"date",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name"}})],1)],1)],1)],1),t._v(" "),a("el-row",{attrs:{id:"app1",gutter:20}},[a("el-col",{attrs:{span:24,offset:0}},[a("el-card",{attrs:{shadow:"always"}},[a("h1",[t._v("我的代码")]),t._v(" "),a("el-divider"),t._v(" "),a("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("el-dropdown-menu",[a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("查看")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("新增")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("删除")])])],1)],1),t._v(" "),a("span",[t._v("xiaohu")])],1),t._v(" "),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData1,border:"true"}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"代码代号"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("el-row",{attrs:{id:"app2",gutter:20}},[a("el-col",{attrs:{span:24,offset:0}},[a("el-card",{attrs:{shadow:"always"}},[a("h1",[t._v("我的解答")]),t._v(" "),a("el-divider"),t._v(" "),a("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("查看")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("新增")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("删除")])])],1)],1),t._v(" "),a("span",[t._v("xiaohu")])],1),t._v(" "),a("el-main",[a("el-table",{attrs:{data:t.tableData2}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"代码代号"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("el-row",{attrs:{id:"app3",gutter:20}},[a("el-col",{attrs:{span:24,offset:0}},[a("el-card",{attrs:{shadow:"always"}},[a("h1",[t._v("我的收藏")]),t._v(" "),a("el-divider"),t._v(" "),a("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("查看")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("新增")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("删除")])])],1)],1),t._v(" "),a("span",[t._v("xiaohu")])],1),t._v(" "),a("el-main",[a("el-table",{attrs:{data:t.tableData3}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"代码代号"}})],1)],1)],1)],1)],1)],1)],1),t._v(" "),a("el-row",{attrs:{id:"app4",gutter:20}},[a("el-col",{attrs:{span:24,offset:0}},[a("el-card",{attrs:{shadow:"always"}},[a("h1",[t._v("优质解答")]),t._v(" "),a("el-divider"),t._v(" "),a("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[a("el-container",[a("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[a("el-dropdown",[a("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("查看")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("新增")])]),t._v(" "),a("el-dropdown-item",[a("a",{attrs:{href:"#/ccc"}},[t._v("删除")])])],1)],1),t._v(" "),a("span",[t._v("xiaohu")])],1),t._v(" "),a("el-main",[a("el-table",{attrs:{data:t.tableData4}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"140"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"代码代号"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"#app"}},[this._v("up")])])}]};var R=a("VU/8")({name:"Pspace",data:function(){return{tableData0:[{date:"姓名",name:"xiaohu"},{date:"学号",name:"2019000000"},{date:"我的提问数",name:"132"},{date:"我的解答数",name:"111",address:""},{date:"我的收藏数",name:"321"},{date:"我的评级",name:"四星级用户"},{date:"我的评级",name:"四星级用户"}],tableData1:[{date:"2020-10-05",name:"xiaohu",address:"#1212424"},{date:"2020-10-05",name:"xiaofen",address:"#826813"},{date:"2020-10-05",name:"xiaolv",address:"#028014"},{date:"2020-10-05",name:"xiaohuang",address:"#921849"},{date:"2020-10-05",name:"xiaoji",address:"#1923712"},{date:"2020-10-05",name:"xiaoshe",address:"#812832"},{date:"2020-10-05",name:"xiaohu",address:"#8129749"}],tableData2:[{date:"2020-10-05",name:"xiaohu",address:"#1212424"},{date:"2020-10-05",name:"xiaofen",address:"#826813"},{date:"2020-10-05",name:"xiaolv",address:"#028014"},{date:"2020-10-05",name:"xiaohuang",address:"#921849"},{date:"2020-10-05",name:"xiaoji",address:"#1923712"},{date:"2020-10-05",name:"xiaoshe",address:"#812832"},{date:"2020-10-05",name:"xiaohu",address:"#8129749"}],tableData3:[{date:"2020-10-05",name:"xiaohu",address:"#1212424"},{date:"2020-10-05",name:"xiaofen",address:"#826813"},{date:"2020-10-05",name:"xiaolv",address:"#028014"},{date:"2020-10-05",name:"xiaohuang",address:"#921849"},{date:"2020-10-05",name:"xiaoji",address:"#1923712"},{date:"2020-10-05",name:"xiaoshe",address:"#812832"},{date:"2020-10-05",name:"xiaohu",address:"#8129749"}],tableData4:[{date:"2020-10-05",name:"xiaohu",address:"#1212424"},{date:"2020-10-05",name:"xiaofen",address:"#826813"},{date:"2020-10-05",name:"xiaolv",address:"#028014"},{date:"2020-10-05",name:"xiaohuang",address:"#921849"},{date:"2020-10-05",name:"xiaoji",address:"#1923712"},{date:"2020-10-05",name:"xiaoshe",address:"#812832"},{date:"2020-10-05",name:"xiaohu",address:"#8129749"}],tableData5:[{date:"2020-10-05",name:"xiaohu",address:"#1212424"},{date:"2020-10-05",name:"xiaofen",address:"#826813"},{date:"2020-10-05",name:"xiaolv",address:"#028014"},{date:"2020-10-05",name:"xiaohuang",address:"#921849"},{date:"2020-10-05",name:"xiaoji",address:"#1923712"},{date:"2020-10-05",name:"xiaoshe",address:"#812832"},{date:"2020-10-05",name:"xiaohu",address:"#8129749"}],welcome:"欢迎来到个人主页",pj_name:"个人主页"}},methods:{reastForm:function(t){this.$refs[t].resetFields()},goto:function(){this.$router.push("/about")}}},A,!1,function(t){a("T/Ex")},null,null).exports,P=new n.default,B={data:function(){return{tableData:[],indexData:{stdnb:"",questionid:"",tjbh:"",wtms:"",count:"",time:""},index:0,total:0,currentPage:1,pagesize:9,centerDialogVisible:!1,drawer:!1,innerDrawer:!1,reverse:!1,activities:[{content:"问题提交",icon:"el-icon-s-promotion",type:"primary",size:"large",timestamp:""}],indexAnswer:[]}},methods:{filterTag:function(t,e){return e.tag===t},getdata:function(){var t=this;this.$axios.get("http://localhost:3000/user").then(function(e){console.log(e),t.tableData=e.data,t.total=t.tableData.length,t.tableData.forEach(function(t,e){0==t.rtype?t.rtype="格式错误":1==t.rtype?t.rtype="结果错误":2==t.rtype?t.rtype="运行错误":3==t.rtype?t.rtype="时间超限":4==t.rtype?t.rtype="内存超限":5==t.rtype?t.rtype="输出超限":6==t.rtype&&(t.rtype="编译错误")})})},handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t},lookAnswer:function(t,e){this.drawer=!0,this.indexData=e,this.index=t,this.activities[0].timestamp=this.indexData.time;var a=this;this.$axios.get("http://localhost:3000/answer?tjbh="+a.indexData.tjbh).then(function(t){console.log(t.data),a.indexAnswer=t.data,console.log(a.indexAnswer);for(var e=t.data.length,n=1;n<=e;n++){var s={content:"我也不会",icon:"el-icon-s-flag",type:"success",size:"large",timestamp:t.data[n-1].antime};a.activities.push(s)}})},lookAnswerdetail:function(){this.innerDrawer=!0},store:function(){this.$message({message:"收藏成功",type:"success",duration:1500})},cleardrawer:function(){this.activities=[{content:"问题提交",timestamp:"",icon:"el-icon-s-promotion",type:"primary",size:"large"}],this.drawer=!1},lookquestion:function(t,e){this.centerDialogVisible=!0,this.indexData=e,this.index=t},pickquestion:function(){var t=this;this.$confirm("您确定要领取此问题吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.centerDialogVisible=!1,t.index+=1,t.indexData.count-=1;var e={count:t.indexData.count};console.log(e),t.$axios.patch("http://localhost:3000/user/"+t.index,e),t.$message({type:"success",message:"领取成功!"}),t.$router.push({path:"/answer"})}).catch(function(){t.$message({type:"info",message:"已取消"})})}},created:function(){this.getdata()},beforeDestroy:function(){P.$emit("add",this.indexData)}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base"},[t._m(0),t._v(" "),a("h2",[t._v("悬赏榜")]),t._v(" "),a("el-table",{staticStyle:{width:"100%",margin:"0px auto"},attrs:{data:t.tableData.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),stripe:"","row-style":{height:"20px"}}},[a("el-table-column",{attrs:{label:"学号",prop:"stdnb",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"问题编号",prop:"questionid",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"错误类型",prop:"rtype",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"待答次数",prop:"count",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"提交时间",prop:"time",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}},{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"info",round:"",plain:""},on:{click:function(a){return t.lookquestion(e.$index,e.row)}}},[t._v("问题详情"),a("i",{staticClass:"el-icon-reading"})])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"right",width:"60px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{icon:"el-icon-search",size:"small",circle:""},on:{click:function(a){return t.lookAnswer(e.$index,e.row)}}})]}}])})],1),t._v(" "),a("el-drawer",{attrs:{title:"wutilishangyin",visible:t.drawer,"with-header":!1,"before-close":t.cleardrawer,"show-close":!0,size:"23%"},on:{"update:visible":function(e){t.drawer=e}}},[a("el-button",{staticStyle:{margin:"0px auto","margin-bottom":"-20px",display:"block"},attrs:{type:"text"},on:{click:t.lookAnswerdetail}},[a("h3",[t._v("解答情况 "),a("i",{staticClass:"el-icon-more-outline"})])]),a("br"),a("br"),t._v(" "),a("el-timeline",{attrs:{reverse:t.reverse}},t._l(t.activities,function(e,n){return a("el-timeline-item",{key:n,attrs:{icon:e.icon,type:e.type,size:e.size,timestamp:e.timestamp}},[t._v("\n      "+t._s(e.content)+"\n    ")])}),1),t._v(" "),a("el-drawer",{staticStyle:{overflow:"scroll"},attrs:{title:"inner","append-to-body":!0,"with-header":!1,visible:t.innerDrawer,direction:"rtl",size:"40%"},on:{"update:visible":function(e){t.innerDrawer=e}}},[a("el-button",{staticStyle:{margin:"0px auto","margin-bottom":"-20px",display:"block"},attrs:{type:"text"},on:{click:function(t){}}},[a("h3",[t._v("解答详情"),a("i",{staticClass:"el-icon-more"})])]),t._v(" "),a("br"),a("br"),t._v(" "),t._l(t.indexAnswer,function(e){return a("el-card",{key:e,staticClass:"box-card",staticStyle:{"margin-bottom":"20px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"text-align":"center","font-weight":"600","margin-bottom":"0px"}},[t._v("回答时间:"+t._s(e.antime)+"                                                                         "),a("el-button",{staticStyle:{right:"3px"},attrs:{type:"danger",icon:"el-icon-star-off",size:"small",circle:"",plain:""},on:{click:t.store}})],1),t._v(" "),a("el-divider")],1),t._v(" "),a("div",{staticClass:"item",staticStyle:{"margin-top":"-39px"}},[a("span",[t._v("回答者:"+t._s(e.answerer))]),a("br"),a("br"),t._v(" "),a("span",[t._v("得分:"+t._s(e.getscore))]),a("br"),a("br"),t._v(" "),a("p",{staticClass:"wtms"},[a("pre",[t._v("回答内容:"+t._s(e.andetail))])])])])})],2)],1),t._v(" "),a("el-dialog",{attrs:{title:"问题详情",visible:t.centerDialogVisible,width:"39%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[a("p",{staticStyle:{"margin-top":"0px"}},[t._v("\n      问题编号:"),a("a",{staticClass:"wtbh",attrs:{href:"http://www.buctcoder.com/problem.php?id="+t.indexData.questionid,target:"_blank"}},[t._v(t._s(t.indexData.questionid))])]),t._v(" "),a("p"),t._v(" "),a("p",[t._v("提交编号:"+t._s(t.indexData.tjbh))]),t._v(" "),a("p",[t._v("问题描述:"),a("pre",[t._v(t._s(t.indexData.wtms))])]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v("     \n      "),a("el-button",{attrs:{type:"primary"},on:{click:t.pickquestion}},[t._v("领取问题")])],1)]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pagesize,layout:"total, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{staticClass:"n",attrs:{href:"#/quebase"}},[e("i",{staticClass:"el-icon-mouse"}),this._v("我要调试")]),this._v(" "),e("a",{staticClass:"y",attrs:{href:"#/forhelp"}},[e("i",{staticClass:"el-icon-s-opportunity"}),this._v("我要求助")])])}]};var L=a("VU/8")(B,I,!1,function(t){a("yBaN"),a("9t0L")},"data-v-70ee9b94",null).exports,N={data:function(){return{indexData:{stdnb:"",questionid:"",tjbh:"",wtms:"",count:""},textarea:"",getscore:10,anstdnb:"unkonwer"}},methods:{open1:function(){var t=this;this.$confirm("您是否要提交?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={tjbh:t.indexData.tjbh,andetail:t.textarea,answerer:t.anstdnb,getscore:t.getscore,antime:t.$refs.hello.nowDate};t.$axios.post("http://localhost:3000/answer",e),t.$message({type:"success",message:"提交成功!"})}).catch(function(){t.$message({type:"info",message:"已取消"})})}},components:{Time:D},created:function(){var t=this;P.$on("add",function(e){console.log(e),t.indexData=e})},beforeDestroy:function(){P.$off("add")}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gun"},[a("Time",{ref:"hello"}),t._v(" "),a("el-container",[a("el-header",[a("h4",[t._v("问题编号:"),a("a",{attrs:{href:"http://www.buctcoder.com/problem.php?id="+t.indexData.questionid,target:"_blank"}},[t._v(t._s(t.indexData.questionid))]),t._v("      提交编号:"+t._s(t.indexData.tjbh))])]),t._v(" "),a("el-container",[a("el-aside",{attrs:{width:"500px"}},[a("div",{staticClass:"hh"},[a("h3",[t._v("问题描述")]),t._v(" "),a("el-card",{attrs:{shadow:"always"}},[a("p",{staticClass:"wtms"},[a("pre",[t._v(t._s(t.indexData.wtms))])])])],1)]),t._v(" "),a("el-container",[a("el-main",[a("h3",[t._v("作答区")]),t._v(" "),a("el-input",{attrs:{type:"textarea",rows:30,placeholder:"请输入内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),t._v(" "),a("br"),a("br"),t._v(" "),a("el-button",{on:{click:t.open1}},[t._v("提交")]),t._v(" "),a("el-button",{on:{click:t.hold}},[t._v("保存")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var O=a("VU/8")(N,W,!1,function(t){a("G+/m")},"data-v-41d0d29a",null).exports;n.default.use(r.a);var Q=new r.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:S},{path:"/user",component:E},{path:"/student",component:V},{path:"/forhelp",component:U},{path:"/pspace",component:R},{path:"/quebase",component:L},{path:"/answer",component:O}]}),G=(a("tvR6"),a("zL8q")),H=a.n(G),M=a("mtWM"),X=a.n(M);n.default.use(H.a),n.default.prototype.$axios=X.a,n.default.config.productionTip=!1,new n.default({el:"#app",router:Q,components:{App:i},template:"<App/>"})},OTKL:function(t,e){},"T/Ex":function(t,e){},Ult1:function(t,e){},"d+hr":function(t,e){},frCt:function(t,e){},nxp7:function(t,e){},tvR6:function(t,e){},yBaN:function(t,e){}},["NHnr"]);