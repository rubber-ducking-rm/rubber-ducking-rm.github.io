(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411,931,355,699],{1198:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,3026))},3026:function(e,t,n){"use strict";var o=n(7437),a=n(6463),u=n(1723);t.default=e=>{let{type:t,pages:n,currentPage:l=1}=e,s=(0,a.useRouter)(),r=n.length;console.log("totalpa",r);let h=Math.max(l-Math.floor(2.5),1),c=Math.min(h+5-1,r);c-h+1<5&&(h=Math.max(c-5+1,1));let i=[];for(let e=h;e<=c;e++)i.push(e);return(0,o.jsx)(u.Z,{count:r,defaultPage:1,page:l,variant:"outlined",shape:"rounded",onChange:(e,n)=>{s.push("/".concat(t,"/").concat(n))}})}}},function(e){e.O(0,[540,231,85,971,23,744],function(){return e(e.s=1198)}),_N_E=e.O()}]);