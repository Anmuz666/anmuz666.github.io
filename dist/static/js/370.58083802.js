"use strict";(self["webpackChunkvue2_0"]=self["webpackChunkvue2_0"]||[]).push([[370],{99370:function(t,i,s){s.r(i),s.d(i,{default:function(){return c}});var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"rainbk"},[i("canvas",{ref:"myCanvas"})])},h=[],e={name:"RainEffect",data(){return{canvas:null,ctx:null,width:0,height:0,arr:[],str:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")}},mounted(){this.initCanvas(),window.addEventListener("resize",this.resizeCanvas),setInterval(this.rain,30)},beforeDestroy(){window.removeEventListener("resize",this.resizeCanvas)},methods:{initCanvas(){this.canvas=this.$refs.myCanvas,this.width=this.canvas.offsetWidth,this.height=this.canvas.offsetHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.arr=Array(Math.ceil(this.width/10)).fill(0)},rain(){this.ctx.fillStyle="rgba(0,0,0,0.05)",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.fillStyle="rgba(0, 128, 0, 1)",this.ctx.font="16px Arial",this.arr.forEach(((t,i)=>{const s=this.str[Math.floor(Math.random()*this.str.length)],a=10*i,h=t+10;h>=this.height||Math.random()>.98?this.arr[i]=0:this.arr[i]=h,this.ctx.fillText(s,a,h)}))},resizeCanvas(){this.initCanvas()}}},n=e,r=s(81656),l=(0,r.A)(n,a,h,!1,null,"e41ba2c6",null),c=l.exports}}]);
//# sourceMappingURL=370.58083802.js.map