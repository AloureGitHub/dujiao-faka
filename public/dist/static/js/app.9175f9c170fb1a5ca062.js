webpackJsonp([1],{"3zXX":function(t,e){},Ef4y:function(t,e){},Kyo1:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};s.d(a,"AGet",function(){return V}),s.d(a,"GetWidth",function(){return H}),s.d(a,"isMobile",function(){return z});var i=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},o,!1,function(t){s("3zXX")},null,null).exports,n=(s("MU8w"),s("NYxO"));i.default.use(n.a);var l=new n.a.Store({state:{loading:"",MobileTransiton:!0},mutations:{setLoad:function(t,e){return t.loading=e},setTransiton:function(t,e){return t.MobileTransiton=e}},getters:{getLoad:function(t){return t.loading},getTransiton:function(t){return t.MobileTransiton}}}),c=s("zL8q"),u=s.n(c),d=(s("tvR6"),s("zZiL"),s("sfy8"),s("/ocq")),h={name:"loading",data:function(){return{}},computed:{item:function(){return this.$store.getters.getLoad}},methods:{},mounted:function(){var t=this;setTimeout(function(){t.$router.push({path:"/goodList/0"})},3e3)}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading-wrap"},[s("div",{staticClass:"laoding-logo"},[s("img",{attrs:{src:"/static/images/loading_logo.png"}}),t._v(" "),s("h1",[t._v(t._s(t.item.sys_name))]),t._v(" "),s("h1",[t._v(t._s(t.item.sys_describe))])]),t._v(" "),s("div",{staticClass:"ouer-statement"},[s("h3",[t._v("注 意：")]),t._v(" "),s("p",[t._v("\n      "+t._s(t.item.sys_index_tips)),s("br"),t._v("\n      "+t._s(t.item.sys_icp)),s("br")])])])},staticRenderFns:[]},m=s("VU/8")(h,p,!1,null,null,null).exports,_={name:"goodList",data:function(){return{page:1,data:[],PageTotal:0,isMobile:this.$custom.isMobile(),isNoDown:!0,mescrollDown:{},mescrollUp:{callback:this.upCallback,use:!0,auto:!1}}},methods:{currentChange:function(t){this.page=t,this._GetDetail()},mobileToBuyCard:function(t){if(!(window.innerWidth<=768))return!1;this.$router.push({path:"/goodList/"+t+"/goodDetail"})},toBuyCard:function(t){this.$router.push({path:"/goodList/"+t+"/goodDetail"})},_GetDetail:function(){var t=this,e={cid:this.$route.params.id,p:this.page};this.$fetch(this.$api.ClassDetail+this.$custom.AGet(e)).then(function(e){200==e.code&&(t.data=e.data.data,t.PageTotal=e.data.total)}).catch(function(e){t.$message.error(e.message)})}},created:function(){this._GetDetail()},watch:{$route:function(t,e){this.page=1,this._GetDetail()}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-list"},[t.data.length>0?[s("el-row",{attrs:{gutter:20}},t._l(t.data,function(e,a){return s("el-col",{key:a,attrs:{xs:12,sm:12,md:8,lg:6,xl:4}},[s("div",{staticClass:"grid-content bg-purple p-item",on:{click:function(s){return t.mobileToBuyCard(e.id)}}},[s("div",{staticClass:"product-img"},[s("img",{attrs:{src:e.product_picture,width:"100%",height:"100%"}})]),t._v(" "),s("div",{staticClass:"product-name"},[t._v(t._s(e.pd_name))]),t._v(" "),s("div",{staticClass:"product-stock"},[t._v("销量:"+t._s(e.sales_volume))]),t._v(" "),s("div",{staticClass:"product-stock"},[t._v("单价:"+t._s(e.actual_price))]),t._v(" "),s("div",{staticClass:"product-stock"},[t._v("库存:"+t._s(e.in_stock))]),t._v(" "),s("div",{staticClass:"product-stock"},[t._v("商品类型:自动发卡")]),t._v(" "),s("div",{staticClass:"product-btn"},[s("el-button",{attrs:{round:"",size:"small"},on:{click:function(s){return t.toBuyCard(e.id)}}},[t._v("立即购买")])],1)])])}),1),t._v(" "),s("el-pagination",{attrs:{background:"","hide-on-single-page":t.isNoDown,layout:"prev, pager, next","current-page":t.page,"page-size":20,total:t.PageTotal},on:{"current-change":t.currentChange}})]:t._e(),t._v(" "),0==t.data.length?[t._m(0)]:t._e()],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("暂无数据")])])}]};var f=s("VU/8")(_,v,!1,function(t){s("Kyo1")},"data-v-2ceb922e",null).exports,g={name:"orderQuery",data:function(){return{searchType:"order",inputAccountOrOrderNum:"",inputSearchPwd:"",data:[],formInline:{user:"",region:""}}},methods:{onCopy:function(t){this.$message.success("复制成功")},showPwdBox:function(){var t=this;this.$prompt("请输入查询密码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"查询密码不能为空"}).then(function(e){var s=e.value;t.inputSearchPwd=s,t._PostSearch("account")}).catch(function(){t.$message({type:"info",message:"取消输入"})})},onSubmit:function(){if(!this.inputAccountOrOrderNum)return this.$message("请输入查询订单号或者查询账户");"order"==this.searchType&&this._PostSearch("order",{p:1}),"account"==this.searchType&&this.showPwdBox()},_PostSearch:function(t){var e=this,s={p:1};"order"==t&&(s.oid=this.inputAccountOrOrderNum),"account"==t&&(s.rcg_account=this.inputAccountOrOrderNum,s.search_pwd=this.inputSearchPwd),this.$post(this.$api.SearchOrder,this.qs.stringify(s)).then(function(t){200==t.code&&(e.data=t.data.data)}).catch(function(t){e.$message.error(t.message)})},orderQuery:function(){this.$custom.isMobile()&&this.$store.commit("setTransiton",!0),this.$router.push({path:"/goodList/0"})}},mounted:function(){return void 0!=this.$route.query.key&&(this.inputAccountOrOrderNum=this.$route.query.key,this._PostSearch("order")),!1}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"query-wrap"},[s("div",{staticClass:"p-header"},[s("div",{staticClass:"p-wrap",staticStyle:{display:"flex"}},[s("div",{staticClass:"p-logo"},[s("img",{attrs:{src:"/static/images/mobile_logo.png",height:"100%",title:"珊瑚数卡"},on:{click:t.orderQuery}})]),t._v(" "),s("div",{staticClass:"m-order-query"},[s("el-button",{staticClass:"order-query",attrs:{size:"mini",round:""},on:{click:t.orderQuery}},[t._v("回到首页")])],1)])]),t._v(" "),s("div",{staticClass:"mobile-header"},[t._m(0),t._v(" "),s("div",{staticClass:"m-order-query"},[s("el-button",{staticClass:"order-query",attrs:{size:"mini",round:""},on:{click:t.orderQuery}},[t._v("回到首页")])],1)]),t._v(" "),s("el-card",{staticClass:"box-card search-order"},[s("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[s("el-form-item",{staticClass:"o-q-a max768Select"},[s("el-select",{attrs:{placeholder:"订单类型"},model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},[s("el-option",{attrs:{label:"订单号查询",value:"order"}}),t._v(" "),s("el-option",{attrs:{label:"账户查询",value:"account"}})],1)],1),t._v(" "),s("el-form-item",{staticClass:"o-q-b"},[s("el-input",{attrs:{placeholder:"order"==t.searchType?"请输入订单号":"请输入账户号"},model:{value:t.inputAccountOrOrderNum,callback:function(e){t.inputAccountOrOrderNum=e},expression:"inputAccountOrOrderNum"}})],1),t._v(" "),s("el-form-item",[s("el-button",{staticClass:"max768Btn",attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"min768Select"},[s("el-select",{attrs:{placeholder:"订单类型"},model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},[s("el-option",{attrs:{label:"订单号查询",value:"order"}}),t._v(" "),s("el-option",{attrs:{label:"账户查询",value:"account"}})],1)],1)])],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("el-button",{staticClass:"min768Btn",attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)],1),t._v(" "),s("el-card",{staticClass:"box-card"},t._l(t.data,function(e,a){return s("div",{key:a,staticClass:"infoBox"},[s("el-row",[s("el-col",{attrs:{xs:24,sm:10}},[s("ul",{staticClass:"infoUl"},[s("li",[s("strong",[t._v("商品名称:")]),t._v(" "+t._s(e.ord_name))]),t._v(" "),s("li",[s("strong",[t._v("充值数量:")]),t._v(" "+t._s(e.ord_num))]),t._v(" "),s("li",[s("strong",[t._v("下单时间:")]),t._v(" "+t._s(e.created_at))]),t._v(" "),s("li",[s("strong",[t._v("付款邮箱/账号:")]),t._v(" "+t._s(e.rcg_account))])])]),t._v(" "),s("el-col",{attrs:{xs:24,sm:8}},[s("ul",{staticClass:"infoUl"},[s("li",[s("strong",[t._v("订单类型:")]),t._v(" "+t._s(1==e.pd_type?"卡密":"代充"))]),t._v(" "),s("li",[s("strong",[t._v("订单总价:")]),t._v(" "+t._s(e.ord_countmoney))]),t._v(" "),s("li",[s("strong",[t._v(" 状态:")]),t._v(" "),1==e.ord_status?s("span",{staticClass:"spanS  spanD"},[t._v("待处理")]):t._e(),t._v(" "),2==e.ord_status?s("span",{staticClass:"spanS spanErr"},[t._v("已处理")]):t._e(),t._v(" "),3==e.ord_status?s("span",{staticClass:"spanS spanSuccess"},[t._v("已完成")]):t._e()]),t._v(" "),s("li",[s("strong",[t._v("支付方式:")]),t._v(" "+t._s(e.pay_type))])])]),t._v(" "),s("el-col",{attrs:{xs:24,sm:6}},[s("div",{staticClass:"CopyBox"},[t._v(t._s(e.ord_info))]),t._v(" "),s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.ord_info,expression:"item.ord_info",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"CopyBtn",attrs:{type:"info"}},[t._v("复制")])],1)],1)],1)}),0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-logo"},[e("img",{attrs:{src:"/static/images/mobile_logo.png",width:"100%",title:"珊瑚数卡"}})])}]};var C=s("VU/8")(g,y,!1,function(t){s("Ef4y")},"data-v-38767f2e",null).exports,w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mobile-header"},[this._m(0),this._v(" "),e("div",{staticClass:"m-order-query"},[e("i",{staticClass:"el-icon-search",on:{click:this.orderQuery}})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-logo"},[e("img",{attrs:{src:"/static/images/mobile_logo.png",width:"100%",title:"珊瑚数卡"}})])}]},b=s("VU/8")({name:"mobileHeader",methods:{orderQuery:function(){this.$router.push({path:"/orderQuery"})}}},w,!1,null,null,null).exports,$={name:"DestktopHeader",data:function(){return{Menu:"",data:"",MobileShow:!1,active:"1"}},methods:{_PostClass:function(){var t=this;this.$fetch(this.$api.leftClassName).then(function(e){if(200==e.code)return t.Menu=e.data,t.data=t.$store.getters.getLoad}).catch(function(e){t.$message.error(res.message)})},goodlist:function(t){this.$router.push({path:"/goodList/"+t})},MobileShowHide:function(){this.MobileShow=!this.MobileShow,this.$store.commit("setTransiton",this.MobileShow)},clickToIndex:function(){this.active=1},handleSelect:function(t){},ifScroll:function(){var t=document.body.clientHeight;setTimeout(function(){document.getElementsByClassName("desktop-meun-wrap")[0].style.height=t-document.getElementsByClassName("desktop-logo")[0].offsetHeight-document.getElementsByClassName("desktop-copy")[0].offsetHeight+"px"},20)}},mounted:function(){this.ifScroll(),this._PostClass()},created:function(){this.$custom.GetWidth<=768||(this.MobileShow=!0)}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{name:"menuICon"}},[s("div",{class:0==t.MobileShow?"min768L":"min768",on:{click:t.MobileShowHide}},[s("img",{attrs:{src:"/static/images/menu.png"}})])]),t._v(" "),s("transition",{attrs:{name:"MobileShowHideStyle"}},[t.MobileShow?s("div",{staticClass:"desktop-header"},[s("div",{staticClass:"desktop-logo"},[s("router-link",{attrs:{to:"/goodList/index"},on:{click:t.clickToIndex}},[s("img",{attrs:{src:"/static/images/desktop_logo.png",width:"100%",title:"回到珊瑚数卡首页"}})])],1),t._v(" "),s("div",{staticClass:"desktop-meun-wrap"},[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.$route.path},on:{select:t.handleSelect}},t._l(t.Menu,function(e,a){return s("el-menu-item",{key:a,attrs:{index:"/goodList/"+e.id},on:{click:function(s){return t.goodlist(e.id)}}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.name))])])}),1)],1),t._v(" "),s("div",{staticClass:"desktop-copy"},[s("hr"),t._v(t._s(t.data.sys_icp)+"\n  \n        "),s("br"),t._v(t._s(t.data.sys_name)+t._s(t.data.sys_describe)+"\n      ")])]):t._e()])],1)},staticRenderFns:[]};var k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"serch-btn tips-top"},[e("span",[e("i",{staticClass:"el-icon-info"}),this._v(" "),e("span",{domProps:{innerHTML:this._s(this.item.sys_top_tips)}})]),this._v(" "),e("div",{staticClass:"desktop-query-btn",staticStyle:{flex:"1"}},[e("router-link",{staticClass:"order-query",attrs:{target:"_blank",to:"/orderQuery"}},[e("i",{staticClass:"el-icon-search"}),this._v("订单查询")])],1)])},staticRenderFns:[]},T={name:"layout",provide:function(){return{reload:this.reload}},data:function(){return{onload:!0,MobileTransiton:!0}},methods:{reload:function(){var t=this;this.onload=!1,this.$nextTick(function(){t.onload=!0})}},components:{desktopHead:s("VU/8")($,x,!1,function(t){s("jy/9")},"data-v-1d9e8dd0",null).exports,mobileHead:b,tipsBar:s("VU/8")({name:"tipsBar",data:function(){return{data:""}},computed:{item:function(){return this.$store.getters.getLoad}}},k,!1,null,null,null).exports},computed:{MobileT:function(){return this.$store.getters.getTransiton}},created:function(){this.$custom.GetWidth<=768&&(this.MobileTransiton=this.$store.getters.getTransiton)},watch:{MobileT:function(t,e){this.MobileTransiton=t},$route:function(t,e){}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-wrap"},[e("desktopHead"),this._v(" "),e("mobileHead"),this._v(" "),e("div",{class:0==this.MobileTransiton?"containerNoPadding":" container "},[e("tipsBar"),this._v(" "),e("transition",{attrs:{name:"fade-transform",mode:"out-in",appear:""}},[this.onload?e("router-view"):this._e()],1)],1)],1)},staticRenderFns:[]};var P=s("VU/8")(T,S,!1,function(t){s("TsaB")},"data-v-e29cde38",null).exports,L=s("MJLE"),F=s.n(L),M={name:"goodDetail",inject:["reload"],data:function(){var t=this;return{data:"",selectPay:"",showDialog:!1,orderData:"",fullscreenLoading:!1,CountdownTimeData:"",CountdownTime:121,IsTime:!0,InterValObj:"",ruleForm2:{num:1,pass:"",email:"",addNew:[]},urlAndCheck:"",validateForm:{num:[{trigger:"change",validator:function(e,s,a){return t.ruleForm2.num=s,t.ruleForm2.num<=0?a(new Error("数量不能小于0")):void 0==t.ruleForm2.num?a(new Error("数量不能为空")):a()}}],email:[{required:!0,message:"请输入账号",trigger:"change"}],pass:[{required:!0,message:"请输入密码",trigger:"change"}]},Clear5sTime:!1,isPayPrice:""}},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$message("请完善数据");e._PostOrder()})},_PostOrder:function(){var t=this;if(""==this.selectPay)return this.$message("请选择支付方式");this.fullscreenLoading=!0;var e=this.selectPay.split(","),s={ord_number:this.ruleForm2.num,search_pwd:this.ruleForm2.pass,id:this.data.id,rcg_account:this.ruleForm2.email,pay_id:e[0],pay_check:e[1]};this.ruleForm2.addNew.forEach(function(t){for(var e in t)if(t.hasOwnProperty(e)){var a=t[e];"field"==e&&(s[a]=t.val)}}),this.$post(this.$api.SubmitOrder,this.qs.stringify(s)).then(function(s){if(200==s.code){if(t.orderData=s.data.orderInfo,"scan"==e[3])return t._hrefNewWindow(s.data.oid);if("dump"==e[3]){t.fullscreenLoading=!1;var a={id:t.selectPay.split(",")[0],oid:s.data.oid,pay_check:t.selectPay.split(",")[1]};window.location.href=t.$api.url+t.selectPay.split(",")[2]+"/"+t.$custom.AGet(a)}}}).catch(function(e){t.fullscreenLoading=!1,t.$message.error(e.message)})},_hrefNewWindow:function(t){var e=this,s={id:this.selectPay.split(",")[0],oid:t,pay_check:this.selectPay.split(",")[1]};this.$fetch(this.$api.url+this.selectPay.split(",")[2]+"/"+this.$custom.AGet(s)).then(function(t){200==t.code&&(e._alertMessage(t.data.type,t.data.url),void 0!=t.data.pay_price&&(e.isPayPrice=t.data.pay_price))}).catch(function(t){e.$message.error(t.message)})},_alertMessage:function(t,e){var s=this;"scan"==t&&(this.fullscreenLoading=!1,this.showDialog=!0,this.InterValObj=window.setInterval(this._PayCountdown,1e3),this.$nextTick(function(){s._Qrcode("payQrcode",e)}))},_SearchOrderStatusFiveSecond:function(){var t=this,e={oid:this.orderData.oid};this.$fetch(this.$api.SearchOrderStatus+this.$custom.AGet(e)).then(function(e){200==e.code&&(t.Clear5sTime=!0,t.$message({message:"支付成功",type:"success",duration:"2000",onClose:function(){t.orderQuery(e.data.oid)}}))})},_PayCountdown:function(){var t=this;if(this.CountdownTime>0){this.CountdownTime=this.CountdownTime-1,this.CountdownTime%5==0&&120!=this.CountdownTime&&(this.Clear5sTime||this._SearchOrderStatusFiveSecond());var e=Math.floor(this.CountdownTime%60),s=Math.floor(this.CountdownTime/60%60);this.CountdownTimeData=s+"分"+e+"秒"}else window.clearInterval(this.InterValObj),this.IsTime=!1,this.$message.error("订单已取消，如需再次购买，请重新提交"),setTimeout(function(){t.reload()},2e3)},_Qrcode:function(t,e){new F.a(t,{width:132,height:132,text:e,colorDark:"#000",colorLight:"#fff"})},orderQuery:function(t){this.$router.push({path:"/orderQuery",query:{key:t}})},_GetGoodsDetail:function(){var t=this,e={cid:this.$route.params.id};this.$fetch(this.$api.GoodDetail+this.$custom.AGet(e)).then(function(e){200==e.code&&(t.data=e.data,null!=e.data.other_ipu&&e.data.other_ipu.forEach(function(e){var s={};for(var a in e)s.val="",e.hasOwnProperty(a)&&(s[a]=e[a]);t.ruleForm2.addNew.push(s)}))}).catch(function(e){t.$message.error(e.message)})},ClickIsPay:function(){this._SearchOrderStatusFiveSecond()},EscPay:function(){this.reload(),window.clearInterval(this.InterValObj),this.InterValObj=""}},mounted:function(){this.$nextTick(function(){this._Qrcode("localQrcode",window.location.href)})},created:function(){this._GetGoodsDetail()}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detailPage"},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v(t._s(t.data.pd_name))])]),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{xs:24,md:12}},[s("div",{staticClass:"good-info"},[s("div",{staticClass:"base-info"},[s("div",{staticClass:"b-img"},[s("img",{attrs:{src:t.data.product_picture}})]),t._v(" "),s("div",{staticClass:"b-text"},[s("h3",[t._v(t._s(t.data.pd_name))]),t._v(" "),s("small",[t._v("库存: "+t._s(t.data.in_stock))]),t._v(" "),s("br"),t._v(" "),s("small",[t._v("销量: "+t._s(t.data.sales_volume))]),t._v(" "),s("br"),t._v(" "),s("small",[t._v("商品类型: 自动发卡")])])]),t._v(" "),s("p",{staticClass:"b-prices"},[s("span",[t._v("￥"+t._s(t.data.actual_price))])]),t._v(" "),t._l(t.data.wholesale_price,function(e,a){return s("p",{key:a,staticStyle:{"line-height":"1",color:"#007bff"}},[t._v("\n            购买"+t._s(e.number)+"个及以上按批发价￥"+t._s(e.price)+"计算\n          ")])})],2)]),t._v(" "),s("el-col",{staticClass:"min768code",attrs:{md:12}},[s("div",{staticClass:"QrcodeBox"},[s("div",{staticClass:"Qrcode",attrs:{id:"localQrcode"}}),t._v(" "),s("span",[t._v("手机扫码购买")])])])],1)],1),t._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{attrs:{gutter:20}},t._l(t.data.pays,function(e,a){return s("el-col",{key:a,attrs:{xs:24,sm:12,md:8,lg:6,xl:4,offset:2}},[s("el-radio",{attrs:{label:e.id+","+e.pay_check+","+e.pay_handleroute+","+e.pay_method,border:""},model:{value:t.selectPay,callback:function(e){t.selectPay=e},expression:"selectPay"}},[t._v(t._s(e.pay_name))])],1)}),1)],1),t._v(" "),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"buy-form"},[s("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm2,"status-icon":"",size:"medium",rules:t.validateForm}},[s("el-form-item",{attrs:{label:1==t.data.pd_types?"购卡数量":"购买数量",prop:"num"}},[s("el-input-number",{attrs:{min:1,"controls-position":"right",type:"number"},model:{value:t.ruleForm2.num,callback:function(e){t.$set(t.ruleForm2,"num",e)},expression:"ruleForm2.num"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{model:{value:t.ruleForm2.email,callback:function(e){t.$set(t.ruleForm2,"email",e)},expression:"ruleForm2.email"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"设置查询密码",prop:"pass"}},[s("el-input",{model:{value:t.ruleForm2.pass,callback:function(e){t.$set(t.ruleForm2,"pass",e)},expression:"ruleForm2.pass"}})],1),t._v(" "),t.ruleForm2.addNew.length>0?t._l(t.ruleForm2.addNew,function(e,a){return s("el-form-item",{key:a,attrs:{label:e.desc,prop:"addNew."+a+".val",rules:{required:"true"==e.rule,message:e.desc+"不能为空",trigger:"change"}}},[s("el-input",{model:{value:e.val,callback:function(s){t.$set(e,"val",s)},expression:"item.val"}})],1)}):t._e(),t._v(" "),s("div",[s("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary",size:"big"},on:{click:function(e){return t.submitForm("ruleForm2")}}},[t._v("立即购买")])],1)],2)],1)]),t._v(" "),s("el-card",{staticClass:"box-card"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:20}},[s("h1",[t._v("商品详情")])])],1),t._v(" "),s("p",{staticClass:"b-descrt",domProps:{innerHTML:t._s(t.data.pd_info)}})],1),t._v(" "),s("el-dialog",{attrs:{title:"支付",visible:t.showDialog,"show-close":!1,"lock-scroll":!0,"close-on-click-modal":!1},on:{"update:visible":function(e){t.showDialog=e}}},[s("el-row",{attrs:{type:"flex",justify:"center"}},[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"QrcodeBox QrcodeBgStyle"},[s("div",{staticClass:"Qrcode",attrs:{id:"payQrcode"}}),t._v(" "),s("span",{staticClass:"PaySpanStyle"},[t._v("支付金额:"+t._s(""!=t.isPayPrice?t.isPayPrice:t.orderData.actual_price)+"元")]),t._v(" "),s("br"),t._v(" "),s("span",{staticStyle:{color:"#fff"}},[t._v("请打开对应app扫一扫支付")]),t._v(" "),s("el-row",[s("el-col",{attrs:{lg:{span:12},sm:{span:24}}},[s("ul",{staticClass:"textUl"},[s("li",{staticClass:"textLi  textLil"},[t._v("商品名称："+t._s(t.orderData.pname))]),t._v(" "),s("li",{staticClass:"textLi  textLil"},[t._v("商品单价：￥"+t._s(t.orderData.price))]),t._v(" "),s("li",{staticClass:"textLi  textLil"},[t._v("订单总额：￥"+t._s(t.orderData.actual_price))])])]),t._v(" "),s("el-col",{attrs:{lg:{span:12},sm:{span:24}}},[s("ul",{staticClass:"textUl"},[s("li",{staticClass:"textLi textLir"},[s("span",[t._v("订单编号：")]),t._v(t._s(t.orderData.oid))]),t._v(" "),s("li",{staticClass:"textLi textLir"},[t._v("购买数量："+t._s(t.orderData.ord_num))]),t._v(" "),s("li",{staticClass:"textLi textLir"},[t._v("购买邮箱/账号："+t._s(t.orderData.rcg_account))])])])],1),t._v(" "),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{lg:24}},[t.IsTime?s("span",{staticClass:"Payli_span"},[t._v(" 剩余支付时间："+t._s(t.CountdownTimeData))]):t._e(),t._v(" "),t.IsTime?t._e():s("span",{staticClass:"Payli_span "},[t._v(" 订单未支付")])])],1)],1)])],1),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"info"},on:{click:t.EscPay}},[t._v("取消支付")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.ClickIsPay}},[t._v("已支付")])],1)],1)],1)},staticRenderFns:[]};var D=s("VU/8")(M,O,!1,function(t){s("v+Ls")},"data-v-9c611e9c",null).exports,B={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"frostedglass"},[e("div",{staticClass:"frostedglass-inner"},[this._v("前端开发")])]),this._v(" "),e("div",{staticClass:"frostedglass"},[e("div",{staticClass:"frostedglass-inner"},[this._v("HTML")])])])}]};var E=s("VU/8")({},B,!1,function(t){s("wVoM")},"data-v-96c35c98",null).exports;i.default.use(d.a);var N=new d.a({mode:"hash",routes:[{path:"/",name:"loading",meta:{tile:"欢迎来到[珊瑚数卡]演示站点"},component:m},{path:"/goodList",component:P,children:[{path:"/goodList/:id",component:f,name:"goodList",meta:{title:"珊瑚数卡-产品列表"}}]},{path:"/goodList",component:P,children:[{path:"/goodList/:id/goodDetail",component:D,name:"goodDetail",meta:{title:"珊瑚数卡-产品详情"}}]},{path:"/orderQuery",component:C,meta:{title:"珊瑚数卡-订单查询"}},{path:"/test",component:E,meta:{title:"test"}}]}),I=(s("rqsT"),s("wvfG")),Q=s.n(I),q="",A=window.location.href,G=window.location.host;q="https:"==document.location.protocol?"https://"+q:"http://"+q;var U={url:q+=G,localUrl:A,system:q+"/api/getSysInfo",leftClassName:q+"/api/getClassifyAll",ClassDetail:q+"/api/getCommodityAllByClassId/",GoodDetail:q+"/api/getCommodityInfoByClassId/",SubmitOrder:q+"/api/postOrders",SearchOrder:q+"/api/searchOrder",SearchOrderStatus:q+"/api/getOrderStatus/"};function V(t){var e="";for(var s in t)t.hasOwnProperty(s)&&(e+=t[s]+"/");return e.substring("",e.length-1)}function H(){return window.innerWidth}function z(){return null!=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}var R=s("Y81h"),j=s.n(R),W=(s("UVIz"),s("mtWM")),X=s.n(W),J=s("mw3O"),K=s.n(J),Y=s("//Fk"),Z=s.n(Y);X.a.defaults.timeout=5e3,X.a.defaults.baseURL="",X.a.interceptors.request.use(function(t){return t.data=t.data,t.headers={"Content-Type":"application/x-www-form-urlencoded"},t},function(t){return Z.a.reject(t)}),X.a.interceptors.response.use(function(t){return 2==t.data.errCode&&router.push({path:"/login",querry:{redirect:router.currentRoute.fullPath}}),t},function(t){return Z.a.reject(t.response.data)}),i.default.use(u.a,{size:"medium",zIndex:3e3}),i.default.use(Q.a),i.default.prototype.$api=U,i.default.prototype.$custom=a,i.default.config.productionTip=!1,j.a.inc(.2),j.a.configure({easing:"ease",speed:500,showSpinner:!1}),N.beforeEach(function(t,e,s){j.a.start(),s()}),N.afterEach(function(){j.a.done()}),i.default.prototype.axios=X.a,i.default.prototype.qs=K.a,i.default.prototype.$post=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Z.a(function(s,a){X.a.post(t,e).then(function(t){s(t.data)},function(t){a(t)})})},i.default.prototype.$fetch=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Z.a(function(s,a){X.a.get(t,{params:e}).then(function(t){s(t.data)}).catch(function(t){a(t)})})},i.default.prototype.$patch=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Z.a(function(s,a){X.a.patch(t,e).then(function(t){s(t.data)},function(t){a(t)})})},i.default.prototype.$put=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Z.a(function(s,a){X.a.put(t,e).then(function(t){s(t.data)},function(t){a(t)})})},new i.default({el:"#app",router:N,store:l,components:{App:r},template:"<App/>",methods:{},mounted:function(){},created:function(){this.$fetch(U.system).then(function(t){if(200==t.code)return document.title=t.data.sys_name,l.commit("setLoad",t.data)})}})},TsaB:function(t,e){},UVIz:function(t,e){},"jy/9":function(t,e){},rqsT:function(t,e){},sfy8:function(t,e){},tvR6:function(t,e){},"v+Ls":function(t,e){},wVoM:function(t,e){},zZiL:function(t,e){}},["NHnr"]);