(function(t){function e(e){for(var s,o,c=e[0],r=e[1],l=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1cf0":function(t,e,a){},"2a7a":function(t,e,a){"use strict";var s=a("fc46"),n=a.n(s);n.a},"2b33":function(t,e,a){},"2b9d":function(t,e,a){"use strict";var s=a("b51c"),n=a.n(s);n.a},"35fd":function(t,e,a){"use strict";var s=a("75ef"),n=a.n(s);n.a},3784:function(t,e,a){"use strict";var s=a("1cf0"),n=a.n(s);n.a},"4a2a":function(t,e,a){"use strict";var s=a("2b33"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("537a");var s=a("ac28"),n=(a("a52c"),a("2ed4")),i=(a("c3a6"),a("ad06")),o=(a("7844"),a("5596")),c=(a("4b0a"),a("2bb1")),r=(a("e7e5"),a("d399")),l=(a("9cb7"),a("66fd")),u=(a("93ac"),a("bb33")),d=(a("591c"),a("7713")),f=(a("ef6f"),a("82a8")),p=(a("e415"),a("2b5e")),m=(a("3c32"),a("417e")),v=(a("f06a"),a("20fb")),h=(a("2b28"),a("9ed2")),g=(a("be39"),a("efa0")),_=(a("4467"),a("c36e")),C=(a("66b9"),a("b650")),b=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:t.transitionName}},[a("router-view",{staticClass:"router-view"})],1)],1)},y=[],w=a("fe3c"),x=a.n(w),I=(a("d3b7"),a("ac1f"),a("5319"),a("bc3a")),$=a.n(I),L=a("4328"),j=a.n(L),O=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{class:["home-header",{active:t.flage}]},[a("i",{staticClass:"iconfont icon-caidan"}),t._m(0),t.isLogin?a("router-link",{staticClass:"iconfont icon-iconyonghu",attrs:{tag:"i",to:"/user"}}):a("router-link",{attrs:{tag:"span",to:"/login"}},[t._v("登陆")])],1),a("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.sliders,(function(t,e){return a("van-swipe-item",{key:e},[a("img",{attrs:{src:t.imgUrl,alt:""}})])})),1),a("section",{staticClass:"category-list"},t._l(t.categoryList,(function(e,s){return a("div",{key:s,on:{click:function(a){return t.goProductList(e)}}},[a("img",{attrs:{src:e.imgUrl}}),a("span",[t._v(t._s(e.name))])])})),0),a("section",{staticClass:"floor-list"},t._l(t.floorList,(function(e,s){return a("div",{key:s,staticClass:"floor-wrap"},[a("img",{staticClass:"floor-head",attrs:{src:e.headUrl}}),a("div",{staticClass:"floor-content"},t._l(e.list,(function(e,s){return a("div",{key:s,staticClass:"floor-category"},[a("p",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.desc))]),a("div",{staticClass:"floor-products"},t._l(e.products,(function(t,e){return a("img",{key:e,attrs:{src:t.imgUrl,alt:""}})})),0)])})),0)])})),0),a("tab-bar")],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-search"},[a("span",{staticClass:"app-name"},[t._v("G")]),a("i",{staticClass:"iconfont icon-search"}),a("span",{staticClass:"search-title"},[t._v("家电返场同价11.11")])])}],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-tabbar",{attrs:{route:!0},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{icon:"wap-home",to:"/home"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{icon:"point-gift",to:"/classfly"}},[t._v("分类")]),a("van-tabbar-item",{attrs:{icon:"shopping-cart",to:"/shopcar"}},[t._v("购物车")]),a("van-tabbar-item",{attrs:{icon:"manager",to:"/my"}},[t._v("我的")])],1)],1)},P=[],z={data:function(){return{active:""}}},B=z,U=a("2877"),M=Object(U["a"])(B,E,P,!1,null,"07d86bc3",null),N=M.exports,A={components:{tabBar:N},data:function(){return{active:0,flage:!1,sliders:[],categoryList:[],floorList:[]}},computed:{isLogin:function(){var t=this.$store.state.userInfo;return t}},methods:{goProductList:function(t){this.$router.push("/poductlist/"+t.categoryId)},pageScroll:function(){window.pageYOffset>100?this.flage=!0:this.flage=!1},getSliders:function(){var t=this;Vt().then((function(e){t.sliders=e}))},getCategory:function(){var t=this;te().then((function(e){t.categoryList=e}))},getFloorList:function(){var t=this;ee().then((function(e){t.floorList=e}))}},created:function(){this.getSliders(),this.getCategory(),this.getFloorList()},mounted:function(){window.addEventListener("scroll",this.pageScroll)}},D=A,H=(a("2a7a"),Object(U["a"])(D,T,S,!1,null,"ad5e4944",null)),G=H.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"category-header"},[a("i",{staticClass:"iconfont icon-left",on:{click:t.goBack}}),t._m(0),a("i",{staticClass:"iconfont icon-More"})]),a("div",{staticClass:"category-wrap"},[a("div",{ref:"slideWrap",staticClass:"nav-slide-wrapper"},[a("ul",{staticClass:"nav-slide"},t._l(t.categoryList,(function(e,s){return a("li",{key:s,class:{active:t.index===s},on:{click:function(e){return t.selectMenu(s)}}},[t._v(t._s(e.name))])})),0)]),a("div",{ref:"conWrap",staticClass:"content-wrapper"},t._l(t.categorys,(function(e,s){return a("div",{key:s,staticClass:"content-slide"},[e.mainImgUrl?a("img",{staticClass:"category-main-img",attrs:{src:e.mainImgUrl,alt:""}}):t._e(),t._l(e.list,(function(e,s){return a("div",{key:s,staticClass:"category-list"},[a("p",{staticClass:"catogory-title"},[t._v(t._s(e.title))]),t._l(e.productList,(function(e,s){return a("div",{key:s,staticClass:"product-item"},[a("img",{staticClass:"product-img",attrs:{src:e.imgUrl}}),a("p",{staticClass:"product-title"},[t._v(t._s(e.title))])])}))],2)}))],2)})),0)]),a("tab-bar")],1)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-search"},[a("i",{staticClass:"iconfont icon-search"}),a("span",{staticClass:"search-title"},[t._v("家电返场同价11.11")])])}],F=a("1fba"),J={components:{tabBar:N},data:function(){return{active:1,categoryList:[],index:0}},created:function(){this.getcategoryList()},mounted:function(){},updated:function(){this.setWrapperHeight();var t=document.querySelector(".nav-slide-wrapper");new F["a"](t);var e=document.querySelector(".content-wrapper");new F["a"](e)},computed:{categorys:function(){return this.categoryList.length>0?[this.categoryList[this.index]]:[]}},methods:{goBack:function(){this.$router.go(-1)},selectMenu:function(t){this.index=t},getcategoryList:function(){var t=this;ne().then((function(e){console.log(e),t.categoryList=e}))},setWrapperHeight:function(){var t=window.screen.height-100;this.$refs.slideWrap.style.height=t+"px",this.$refs.conWrap.style.height=t+"px"}}},Q=J,R=(a("35fd"),Object(U["a"])(Q,W,q,!1,null,"046584ce",null)),X=R.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-box"},[s("z-header",{attrs:{showMore:!0}},[t._v("我的知心Go")]),s("section",{staticClass:"user-page"},[s("div",{staticClass:"user-info"},[s("div",{staticClass:"info"},[s("img",{attrs:{src:a("c121")}}),s("div",[s("p",[t._v(t._s(null==t.$store.state.userInfo?"":t.$store.state.userInfo.username))]),s("span",{staticClass:"name"},[t._v("用户名："+t._s(null==t.$store.state.userInfo?"":t.$store.state.userInfo.username))]),s("span",[t._v(t._s(null==t.$store.state.userInfo?"":t.$store.state.userInfo.phone))])]),s("router-link",{staticClass:"account-management",attrs:{to:"/profile"}},[s("i",{staticClass:"iconfont icon-shezhi"}),t._v("账号管理 ")])],1)]),t._m(0),s("div",[t._m(1),s("p",{staticClass:"recommend-title"},[t._v("为你推荐")]),s("recommend")],1)]),s("tab-bar")],1)},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-menu"},[a("div",{staticClass:"menu-item"},[a("i",{staticClass:"iconfont icon-daifukuan1"}),a("span",[t._v("待付款")])]),a("div",{staticClass:"menu-item"},[a("i",{staticClass:"iconfont icon-daishouhuo1"}),a("span",[t._v("待收货")])]),a("div",{staticClass:"menu-item"},[a("i",{staticClass:"iconfont icon-money"}),a("span",[t._v("已完成")])]),a("div",{staticClass:"menu-item"},[a("i",{staticClass:"iconfont icon-icon1"}),a("span",[t._v("全部订单")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-fork"},[a("div",{staticClass:"fork-item"},[a("i",[t._v("20")]),a("span",[t._v("关注的商品")])]),a("div",{staticClass:"fork-item"},[a("i",[t._v("5")]),a("span",[t._v("关注的店铺")])]),a("div",{staticClass:"fork-item"},[a("i",[t._v("10")]),a("span",[t._v("我的足迹")])])])}],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("i",{staticClass:"iconfont icon-left",on:{click:t.goBack}}),a("span",[t._t("default")],2),t.showMore?a("i",{staticClass:"iconfont icon-More"}):t._e()])},V=[],tt={props:{showMore:{type:Boolean,default:!1}},methods:{goBack:function(){this.$router.go(-1)}}},et=tt,at=(a("2b9d"),Object(U["a"])(et,K,V,!1,null,"19fde0a1",null)),st=at.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommend-list"},t._l(t.commendList,(function(e){return a("div",{key:e.id,staticClass:"recommend-item"},[a("img",{attrs:{src:e.imageHost+e.mainImage}}),a("p",[t._v(t._s(e.name))]),a("i",[t._v("￥ "+t._s(e.price))])])})),0)},it=[],ot={data:function(){return{commendList:[]}},created:function(){this.getCommendList()},methods:{getCommendList:function(){var t=this;le().then((function(e){t.commendList=e}))}}},ct=ot,rt=(a("d058"),Object(U["a"])(ct,nt,it,!1,null,"390acecb",null)),lt=rt.exports,ut={components:{tabBar:N,zHeader:st,recommend:lt},data:function(){return{active:3}}},dt=ut,ft=(a("89d9"),Object(U["a"])(dt,Y,Z,!1,null,"776111ee",null)),pt=ft.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("z-header",{attrs:{showMore:!0}},[t._v("购物车")]),a("section",{staticClass:"shopcart-page"},[a("div",{staticClass:"shopcart-list"},t._l(this.$store.state.cartList,(function(t,e){return a("shopcart-box",{key:t.id,attrs:{cart:t,currentIndex:e}})})),1),a("van-divider",[t._v("可能你还想要")]),a("recommend",{staticClass:"recommend"})],1),a("van-submit-bar",{attrs:{price:100*t.$store.getters.getPrices,"button-text":"提交订单"},on:{submit:t.onSubmit}},[a("van-checkbox",{on:{click:t.clickChecked},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1),a("tab-bar")],1)},vt=[],ht=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-container"},[a("van-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),a("img",{attrs:{src:t.cart.imageHost+t.cart.mainImage,alt:""}}),a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[t._v(t._s(t.cart.name))]),a("p",{staticClass:"subtitle"},[t._v(t._s(t.cart.subtitle))]),a("div",{staticClass:"shopcart-stepper"},[a("span",{staticClass:"shopcart-price"},[t._v("￥ "+t._s(t.cart.price))]),a("van-stepper",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])],1)}),gt=[],_t={props:{cart:{type:Object,required:!0}},data:function(){return{checked:!1,value:this.cart.count}}},Ct=_t,bt=(a("fe11"),Object(U["a"])(Ct,ht,gt,!1,null,"3654211e",null)),kt=bt.exports,yt={components:{tabBar:N,zHeader:st,shopcartBox:kt,recommend:lt},data:function(){return{checked:!1}},created:function(){this.getCartList()},updated:function(){this.checked=this.$store.getters.getAllChecked},methods:{clickChecked:function(){this.checked=!this.checked,this.$store.commit("updateGoods",this.checked)},onSubmit:function(){console.log("点击了提交")},getCartList:function(){var t=this;re().then((function(e){var a=e.filter((function(t){return t.checked=!1,t}));t.$store.commit("saveShopcarts",a)}))}}},wt=yt,xt=(a("3784"),Object(U["a"])(wt,mt,vt,!1,null,"1458de4b",null)),It=xt.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"product-list-header"},[a("header",{staticClass:"category-header wrap"},[a("i",{staticClass:"iconfont icon-left",on:{click:t.backHome}}),t._m(0),a("i",{staticClass:"iconfont icon-More"})]),a("section",{staticClass:"select-menu"},[a("div",{class:["select-item",{"item-color":"default"==t.active}],attrs:{orderby:"default"},on:{click:t.onOrderByPrice}},[t._v("默认排序")]),a("div",{class:["select-item",{"item-color":"price-asc"==t.active}],attrs:{orderby:"price-asc"},on:{click:t.onOrderByPrice}},[t._v(" 升序 "),a("i",{staticClass:"iconfont icon-up1"})]),a("div",{class:["select-item",{"item-color":"price-desc"==t.active}],attrs:{orderby:"price-desc"},on:{click:t.onOrderByPrice}},[t._v(" 降序 "),a("i",{staticClass:"iconfont icon-down1"})]),t._m(1)])]),a("section",{staticClass:"product-list"},[a("div",{staticClass:"product-container"},t._l(t.list,(function(e){return a("van-card",{key:e.id,attrs:{num:e.stock,price:e.price,desc:e.subtitle,title:e.name,thumb:e.imageHost+e.mainImage,"origin-price":e.originalPrice},on:{click:function(a){return t.goProductDetail(e)}}})})),1)])])},Lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-search"},[a("i",{staticClass:"iconfont icon-search"}),a("input",{staticClass:"search-title",attrs:{type:"text"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select-item"},[t._v(" 筛选 "),a("i",{staticClass:"iconfont icon-shaixuan"})])}],jt={data:function(){return{active:"default",categoryId:this.$route.params.categoryId,pageNum:1,pageSize:20,list:[]}},methods:{goProductDetail:function(t){this.$router.push("/product-detail/"+t.id)},getPorductList:function(){var t=this,e={categoryId:this.categoryId,orderBy:this.active,pageNum:this.pageNum,pageSize:this.pageSize};ae(e).then((function(e){console.log(e),t.list=e.list}))},backHome:function(){this.$router.go(-1)},onOrderByPrice:function(t){var e=t.target.getAttribute("orderby");console.log(e),this.active=e,this.getPorductList()}},created:function(){console.log("15465"),console.log(this.$route.params.categoryId),this.getPorductList()}},Ot=jt,Tt=(a("ddc2"),Object(U["a"])(Ot,$t,Lt,!1,null,"37375171",null)),St=Tt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-detail"},[a("header",{staticClass:"detail-nav"},[a("i",{staticClass:"iconfont icon-left",on:{click:t.backPage}}),a("div",{staticClass:"nav-list"},[a("span",{class:0==t.navIndex?"active":"",on:{click:function(e){return t.selectItem(0)}}},[0==t.navIndex?a("i",{staticClass:"iconfont icon-location"}):t._e(),t._v("商品 ")]),a("span",{class:1==t.navIndex?"active":"",on:{click:function(e){return t.selectItem(1)}}},[1==t.navIndex?a("i",{staticClass:"iconfont icon-location"}):t._e(),t._v("商品详情 ")]),a("span",{class:[{active:2==t.navIndex}],on:{click:function(e){return t.selectItem(2)}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:2==t.navIndex,expression:"navIndex == 2"}],staticClass:"iconfont icon-location"}),t._v("商品推荐 ")])]),a("i",{staticClass:"iconfont icon-More"})]),a("section",{staticClass:"product-focus"},[a("van-swipe",{staticClass:"swiper-container",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.sliderList,(function(t,e){return a("van-swipe-item",{key:e},[a("img",{staticClass:"swiper_img",attrs:{src:t,alt:""}})])})),1)],1),a("section",{ref:"detailInfo",staticClass:"detail-info"},[a("p",{staticClass:"detail-info-name"},[t._v(t._s(t.productDetail.name))]),a("p",{staticClass:"detail-info-subtitle"},[t._v(t._s(t.productDetail.subtitle))]),a("div",[a("span",{staticClass:"detail-info-price"},[t._v("￥"+t._s(t.productDetail.price))]),a("span",{staticClass:"detail-info-stock"},[t._v("库存 "+t._s(t.productDetail.stock)+" 件")])])]),a("section",{ref:"detailContent",staticClass:"detail-content",attrs:{id:"content"}},[a("p",{staticClass:"detail-gap"}),t._m(0),a("div",[a("p",[t._l(t.detailImgs,(function(t,e){return a("img",{key:e,attrs:{alt:"A973_01.png",src:t}})})),a("br")],2)])]),a("van-goods-action",[a("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.onClickIcon}}),a("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"},on:{click:t.onClickIcon}}),a("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.onClickButton}}),a("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.onClickButton}})],1),a("van-sku",{attrs:{sku:t.sku,goods:t.goods,"hide-stock":t.sku.hide_stock},on:{"buy-clicked":t.onBuyClicked,"add-cart":t.onAddCartClicked},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("概述")]),a("li",[t._v("参数")]),a("li",[t._v("安装服务")]),a("li",[t._v("常见问题")])])}],zt=(a("d81d"),a("1276"),{data:function(){return{id:this.$route.params.id,navIndex:0,productDetail:{},sliderList:[],detailImgs:[],show:!1,sku:{tree:[{k:"颜色",v:[{id:"001",name:"红色",imgUrl:"http://img.happymmall.com/570186f3-c0d2-4336-a1b7-3e1aff88f73a.jpg",previewImgUrl:"http://img.happymmall.com/570186f3-c0d2-4336-a1b7-3e1aff88f73a.jpg"},{id:"002",name:"蓝色",imgUrl:"http://img.happymmall.com/a73b6326-1204-4937-aa88-097c9eda8a2a.jpg",previewImgUrl:"http://img.happymmall.com/a73b6326-1204-4937-aa88-097c9eda8a2a.jpg"}],k_s:"s1"}],list:[{id:2259,price:100,s1:"001",stock_num:50},{id:2259,price:100,s1:"002",stock_num:50}],price:"100",stock_num:100,collection_id:2261,none_sku:!1},goods:{title:"测试商品",picture:"http://img.happymmall.com/a73b6326-1204-4937-aa88-097c9eda8a2a.jpg"}}},methods:{onClickIcon:function(){this.$toast("点击图标")},onClickButton:function(){this.$toast("点击按钮"),this.show=!0},onBuyClicked:function(){console.log("购买商品")},onAddCartClicked:function(){console.log("添加到购物车")},backPage:function(){this.$router.go(-1)},selectItem:function(t){switch(this.navIndex=t,t){case 0:window.scroll(0,0);break;case 1:window.scroll(0,top-44);break;case 2:window.scroll(0,0);break;default:window.scroll(0,0);break}},getProductDetail:function(){var t=this,e={id:this.id};se(e).then((function(e){t.productDetail=e;var a=t.productDetail.subImages.split(",");t.sliderList=a.map((function(e){var a=t.productDetail.imageHost+e;return a}));var s=/(\/\/\S+(\.jpg|\.png|\.jpeg|\.webp))/g;t.productDetail.detail.replace(s,(function(e){t.detailImgs.push(e)}))}))}},created:function(){this.getProductDetail()},mounted:function(){}}),Bt=zt,Ut=(a("cef8"),Object(U["a"])(Bt,Et,Pt,!1,null,"0816215b",null)),Mt=Ut.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("z-header",[t._v("登陆")]),a("section",{staticClass:"page"},[a("div",{staticClass:"login-page"},[a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"login-text"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"login-username",attrs:{type:"text",placeholder:"用户名/邮箱/已验证手机"},domProps:{value:t.username},on:{mouseenter:t.focusText,mouseleave:t.blurText,input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.usernameClose,expression:"!usernameClose"}],staticClass:"iconfont icon-close",attrs:{"data-close":"username"},on:{click:t.clearText}})]),a("div",{staticClass:"login-text"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],ref:"passwordText",staticClass:"login-password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{mouseenter:t.focusText,mouseleave:t.blurText,input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("div",[a("i",{directives:[{name:"show",rawName:"v-show",value:!t.passwordClose,expression:"!passwordClose"}],staticClass:"iconfont icon-close",attrs:{"data-close":"password"},on:{click:t.clearText}}),t.passwordType?a("i",{staticClass:"iconfont icon-eye eye",on:{click:t.changeType}}):a("i",{staticClass:"iconfont icon-eye1 eye",on:{click:t.changeType}}),a("router-link",{attrs:{tag:"span",to:"./forget-password"}},[t._v("忘记密码")])],1)])]),a("div",{staticClass:"login-error"},[t._v(t._s(t.errMsg))]),a("button",{staticClass:"login-button",class:{active:t.username.trim()&&t.password.trim()},on:{click:t.getUserLogin}},[t._v("登 录")]),a("div",{staticClass:"quick-nav"},[a("router-link",{staticClass:"register-button",attrs:{tag:"span",to:"./register"}},[t._v("快速注册")])],1),t._m(0)])])],1)},At=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"other-login"},[a("div",{staticClass:"other-head"},[a("i"),a("span",[t._v("其它登录方式")]),a("i")]),a("div",{staticClass:"other-con"},[a("div",{staticClass:"login-icon"},[a("i",{staticClass:"iconfont icon-tubiao215"}),a("span",[t._v("QQ")])]),a("div",{staticClass:"login-icon"},[a("i",{staticClass:"iconfont icon-weixin1"}),a("span",[t._v("微信")])])]),a("p",[t._v(" 登录即代表您已同意 "),a("a",[t._v("知心购隐私政策")])])])}],Dt={components:{zHeader:st},data:function(){return{username:"",password:"",errMsg:"",usernameClose:!0,passwordClose:!0,passwordType:0}},methods:{getUserLogin:function(){var t=this,e={username:this.username,password:this.password};ie(e).then((function(e){console.log(e),0==e.status?(localStorage.setItem("zxgToken",e.data.token),oe().then((function(e){t.$store.commit("saveUserInfo",e),localStorage.setItem("isLogin",!0),t.$router.replace("/user")}))):(t.errMsg=e.msg,t.$toast(e.msg))}))},focusText:function(t){var e=t.currentTarget.className;"login-username"===e?this.usernameClose=!1:this.passwordClose=!1},blurText:function(t){var e=t.currentTarget.className;"login-username"===e?this.usernameClose=!0:this.passwordClose=!0},clearText:function(t){var e=t.currentTarget.getAttribute("data-close");this[e]=""},changeType:function(){var t=this.$refs.passwordText.getAttribute("type"),e="";e="password"===t?"text":"password",this.$refs.passwordText.setAttribute("type",e),this.passwordType=!this.passwordType}}},Ht=Dt,Gt=(a("4a2a"),Object(U["a"])(Ht,Nt,At,!1,null,"eecefe7c",null)),Wt=Gt.exports,qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("z-header",{attrs:{showMore:!0}},[t._v("账号管理")]),s("section",{staticClass:"profile-content"},[s("div",{staticClass:"profile-item info"},[s("img",{attrs:{src:a("c121")}}),s("div",[s("span",{staticClass:"username"},[t._v(t._s(null==t.$store.state.userInfo?"":t.$store.state.userInfo.username))]),s("span",{staticClass:"email"},[t._v("邮箱："+t._s(null==t.$store.state.userInfo?"":t.$store.state.userInfo.email))])])]),s("router-link",{staticClass:"profile-item",attrs:{tag:"div",to:"/"}},[s("span",[t._v("修改登录密码")]),s("i",{staticClass:"iconfont icon-right"})]),s("router-link",{staticClass:"profile-item",attrs:{tag:"div",to:"/"}},[s("span",[t._v("修改个人信息")]),s("i",{staticClass:"iconfont icon-right"})]),s("router-link",{staticClass:"profile-item",attrs:{tag:"div",to:"/"}},[s("span",[t._v("收货地址管理")]),s("i",{staticClass:"iconfont icon-right"})])],1),s("section",{staticClass:"profile-footer"},[s("div",{staticClass:"footer-con"},[t._m(0),t._m(1),s("div",{staticClass:"logout",on:{click:t.userLogout}},[s("i",{staticClass:"iconfont icon-40one"}),s("span",[t._v("退出登录")])])]),s("p",{staticClass:"zxg"},[t._v("知心购")])])],1)},Ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"iconfont icon-yijian"}),a("span",[t._v("意见反馈")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"client"},[a("i",[t._v("ZXG")]),a("span",[t._v("客户端")])])}],Jt={methods:{userLogout:function(){var t=this;console.log("退出登陆"),ce().then((function(e){0==e.status?(localStorage.removeItem("zxgToken"),localStorage.removeItem("isLogin"),t.$store.commit("removeUserInfo"),t.$router.replace("/home")):t.$toast(e.msg)}))}},components:{zHeader:st}},Qt=Jt,Rt=(a("61a7"),Object(U["a"])(Qt,qt,Ft,!1,null,"1b13d544",null)),Xt=Rt.exports;b["a"].use(O["a"]);var Yt=[{path:"/",redirect:"/home"},{path:"/classfly",name:"classfly",component:X,meta:{index:1}},{path:"/home",name:"home",component:G,meta:{index:1}},{path:"/shopcar",name:"shopcar",component:It,meta:{auth:!0,index:1}},{path:"/my",name:"my",component:pt,meta:{index:1,auth:!0}},{path:"/poductlist/:categoryId",component:St,meta:{index:2}},{path:"/product-detail/:id",component:Mt,meta:{index:3}},{path:"/login",component:Wt,meta:{index:3}},{path:"/profile",component:Xt,meta:{index:2,auth:!0}}],Zt=new O["a"]({mode:"history",base:"",routes:Yt});Zt.beforeEach((function(t,e,a){console.log(t),t.meta.auth?localStorage.getItem("isLogin")?a():a("/login"):a()}));var Kt=Zt;$.a.defaults.baseURL="http://www.lovegf.cn:9527/api",$.a.interceptors.response.use((function(t){return-2==t.data.status&&(localStorage.removeItem("zxgToken"),localStorage.removeItem("isLogin"),Kt.replace("/home")),t}),(function(t){return Promise.reject(t)}));var Vt=function(){return $.a.get("/home/sliders").then((function(t){if(0==t.data.status)return t.data.data;console.log("获取 轮播数据失败"),Object(r["a"])("接口错误")})).catch((function(t){console.log(t),Object(r["a"])("接口错误")}))},te=function(){return $.a.get("/home/category").then((function(t){if(0==t.data.status)return t.data.data;Object(r["a"])("接口异常")})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},ee=function(){return $.a.get("/home/floorlist").then((function(t){if(0==t.data.status)return t.data.data;Object(r["a"])(t.data.msg)})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},ae=function(t){return $.a.get("/product/list",{params:t}).then((function(t){if(0==t.data.status)return t.data.data;Object(r["a"])(t.data.msg)})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},se=function(t){return $.a.get("/product/detail",{params:t}).then((function(t){if(0==t.data.status)return t.data.data;Object(r["a"])(t.data.msg)})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},ne=function(){return $.a.get("/category/data").then((function(t){if(0==t.data.status)return t.data.data;Object(r["a"])(t.data.msg)})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},ie=function(t){return $.a.post("/user/login",j.a.stringify(t)).then((function(t){return t.data})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},oe=function(){return $.a.get("/user/info",{headers:{Authorization:localStorage.getItem("zxgToken")}}).then((function(t){if(console.log(t.data),0==t.data.status)return t.data.data})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},ce=function(){return $.a.post("/user/logout",null,{headers:{Authorization:localStorage.getItem("zxgToken")}}).then((function(t){return t.data})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},re=function(){return $.a.get("/cart/list",{headers:{Authorization:localStorage.getItem("zxgToken")}}).then((function(t){if(0==t.data.status)return t.data.data;Object(r["a"])(t.data.msg)})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},le=function(){return $.a.get("/product/recommend",{headers:{Authorization:localStorage.getItem("zxgToken")}}).then((function(t){if(0==t.data.status)return t.data.data;Object(r["a"])(t.data.msg)})).catch((function(t){Object(r["a"])("接口异常"+t.message)}))},ue={data:function(){return{transitionName:"fade-rigth"}},created:function(){var t=this;if(!localStorage.getItem("zxgToken"))return null;oe().then((function(e){t.$store.commit("saveUserInfo",e)}))},mounted:function(){x.a.attach(document.body)},watch:{$route:function(t,e){t.meta.index<e.meta.index?this.transitionName="fade-left":t.meta.index>e.meta.index?this.transitionName="fade-rigth":this.transitionName=""}}},de=ue,fe=(a("5c0b"),Object(U["a"])(de,k,y,!1,null,null,null)),pe=fe.exports,me=(a("4160"),a("a434"),a("159b"),a("2f62"));b["a"].use(me["a"]);var ve=new me["a"].Store({state:{userInfo:null,cartList:[]},mutations:{saveUserInfo:function(t,e){t.userInfo=e},removeUserInfo:function(t){t.userInfo=null},saveShopcarts:function(t,e){t.cartList=e},updateGoods:function(t,e){console.log("-updateGoods------",e),t.cartList.forEach((function(t){t.checked=e}))},deleteGood:function(t,e){t.cartList.forEach((function(a,s){a.id===e&&t.cartList.splice(s,1)}))},pushGoods:function(t,e){var a=!0,s=t.cartList.filter((function(t){return t.productId==e.id&&(t.count+=e.count,a=!1),t}));a&&s.push(e),t.cartList=s}},getters:{getCartList:function(t){return t.cartList},getCounts:function(t){var e=0;return t.cartList.forEach((function(t){e+=t.count})),e},getPrices:function(t){var e=0;return t.cartList.forEach((function(t){t.checked&&(e+=t.price*t.count)})),e},getAllChecked:function(t){var e=!0;return t.cartList.forEach((function(t){t.checked||(e=!1)})),e}},actions:{},modules:{}});a("499a");b["a"].use(s["a"]).use(n["a"]).use(i["a"]).use(o["a"]).use(c["a"]).use(r["a"]).use(l["a"]).use(u["a"]).use(d["a"]).use(f["a"]).use(p["a"]).use(m["a"]).use(v["a"]).use(h["a"]).use(g["a"]).use(_["a"]).use(C["a"]),b["a"].config.productionTip=!1,b["a"].prototype.$http=$.a,new b["a"]({router:Kt,store:ve,render:function(t){return t(pe)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"61a7":function(t,e,a){"use strict";var s=a("eaf4"),n=a.n(s);n.a},"75ef":function(t,e,a){},"782a":function(t,e,a){},"89d9":function(t,e,a){"use strict";var s=a("f269"),n=a.n(s);n.a},"92f3":function(t,e,a){},"9c0c":function(t,e,a){},"9d67":function(t,e,a){},b51c:function(t,e,a){},c121:function(t,e,a){t.exports=a.p+"img/user.c9f6417b.png"},cef8:function(t,e,a){"use strict";var s=a("782a"),n=a.n(s);n.a},d058:function(t,e,a){"use strict";var s=a("92f3"),n=a.n(s);n.a},ddc2:function(t,e,a){"use strict";var s=a("e05a"),n=a.n(s);n.a},e05a:function(t,e,a){},eaf4:function(t,e,a){},f269:function(t,e,a){},fc46:function(t,e,a){},fe11:function(t,e,a){"use strict";var s=a("9d67"),n=a.n(s);n.a}});
//# sourceMappingURL=app.b1696a22.js.map