(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{KdGq:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("gWZ8")),s=a(r("d6i3")),i=a(r("eHn4")),u=a(r("p0pE")),d=r("yiAB"),c={first_name:"",last_name:"",company:"",phone:"",address1:"",city:"",country:"",province:"",zip:""},l={first_name:"",last_name:"",company:"",phone:"",address1:"",city:"",country:"",province:"",zip:""},o={namespace:"draftorderdetails",state:{thisDetails:"",customers:[],products:[],customer:"",shipping_address:c,billing_address:l,line_items:[],note:""},effects:{setDetails_e:s.default.mark(function e(t,r){var a,n,c,o,p,f,_,m,y,h,v,x,w,g,b,k,q,D,B,C,I;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,c=r.select,e.next=3,c();case 3:if(o=e.sent,p=o.drafts,""!==p.thisDetails){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,a(d.queryDetails,p.thisDetails);case 9:if(f=e.sent,_=f.data.draft_order.line_items.map(function(e){return{id:e.variant_id,product_id:e.product_id,title:e.variant_title,sku:e.sku,price:e.price,inventory_quantity:1,product_title:e.title,image_src:"",quantity:e.quantity}}),null!==f.data.draft_order.customer){e.next=16;break}return e.next=14,n({type:"setDetails_r",payload:{thisDetails:f.data.draft_order,line_items:_,note:f.data.draft_order.note}});case 14:e.next=18;break;case 16:return e.next=18,n({type:"setDetails_r",payload:{thisDetails:f.data.draft_order,customer:f.data.draft_order.customer,shipping_address:f.data.draft_order.shipping_address,billing_address:f.data.draft_order.billing_address?f.data.draft_order.billing_address:l,line_items:_,note:f.data.draft_order.note}});case 18:m={},h=!0,v=!1,x=void 0,e.prev=22,w=f.data.draft_order.line_items.values()[Symbol.iterator]();case 24:if(h=(g=w.next()).done){e.next=52;break}return b=g.value,e.next=28,a(d.queryImages,b.product_id);case 28:for(y=e.sent,m=(0,u.default)({},m,(0,i.default)({},b.product_id+"v"+b.variant_id,y.data.images[0].src)),k=!0,q=!1,D=void 0,e.prev=33,B=y.data.images[Symbol.iterator]();!(k=(C=B.next()).done);k=!0)I=C.value,I.variant_ids.includes(b.variant_id)&&(m=(0,u.default)({},m,(0,i.default)({},b.product_id+"v"+b.variant_id,I.src)));e.next=41;break;case 37:e.prev=37,e.t0=e["catch"](33),q=!0,D=e.t0;case 41:e.prev=41,e.prev=42,k||null==B.return||B.return();case 44:if(e.prev=44,!q){e.next=47;break}throw D;case 47:return e.finish(44);case 48:return e.finish(41);case 49:h=!0,e.next=24;break;case 52:e.next=58;break;case 54:e.prev=54,e.t1=e["catch"](22),v=!0,x=e.t1;case 58:e.prev=58,e.prev=59,h||null==w.return||w.return();case 61:if(e.prev=61,!v){e.next=64;break}throw x;case 64:return e.finish(61);case 65:return e.finish(58);case 66:return _=_.map(function(e){return(0,u.default)({},e,{image_src:m[e.product_id+"v"+e.id]})}),console.log(_),e.next=70,n({type:"setDetails_r",payload:{line_items:_}});case 70:case"end":return e.stop()}},e,null,[[22,54,58,66],[33,37,41,49],[42,,44,48],[59,,61,65]])}),setCustomers_e:s.default.mark(function e(t,r){var a,n,i;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,r.select,e.next=3,a(d.queryCustomers);case 3:return i=e.sent,e.next=6,n({type:"setCustomers_r",payload:i.data.customers});case 6:case"end":return e.stop()}},e)}),setProducts_e:s.default.mark(function e(t,r){var a,n,i,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,r.select,e.next=3,a(d.queryProducts);case 3:return i=e.sent,c=i.data.products.map(function(e){var t=e.variants.map(function(t){return null===t.image_id?{id:t.id,product_id:t.product_id,title:t.title,sku:t.sku,price:t.price,inventory_quantity:t.inventory_quantity,product_title:e.title,image_src:e.image.src,quantity:1}:{id:t.id,product_id:t.product_id,title:t.title,sku:t.sku,price:t.price,inventory_quantity:t.inventory_quantity,product_title:e.title,image_src:e.images[e.images.findIndex(function(e){return e.id===t.image_id})].src,quantity:1}});return(0,u.default)({},e,{variants:t})}),e.next=7,n({type:"setProducts_r",payload:c});case 7:case"end":return e.stop()}},e)}),setCustomer_e:s.default.mark(function e(t,r){var a,n,i,u,d,c,l,o,p,f,_,m,y,h,v,x,w,g,b,k;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r.call,a=r.put,n=r.select,e.next=3,n();case 3:i=e.sent,u=i.draftorderdetails,c=!0,l=!1,o=void 0,e.prev=8,p=u.customers.values()[Symbol.iterator]();case 10:if(c=(f=p.next()).done){e.next=17;break}if(d=f.value,d.id!==t.payload){e.next=14;break}return e.abrupt("break",17);case 14:c=!0,e.next=10;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](8),l=!0,o=e.t0;case 23:e.prev=23,e.prev=24,c||null==p.return||p.return();case 26:if(e.prev=26,!l){e.next=29;break}throw o;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return e.next=33,a({type:"setCustomer_r",payload:d});case 33:return _=d.default_address,m=_.first_name,y=_.last_name,h=_.company,v=_.phone,x=_.address1,w=_.city,g=_.country,b=_.province,k=_.zip,e.next=36,a({type:"setShippingAddress_r",payload:{first_name:m,last_name:y,company:h,phone:v,address1:x,city:w,country:g,province:b,zip:k}});case 36:return e.next=38,a({type:"setBillingAddress_r",payload:{first_name:m,last_name:y,company:h,phone:v,address1:x,city:w,country:g,province:b,zip:k}});case 38:case"end":return e.stop()}},e,null,[[8,19,23,31],[24,,26,30]])}),createCustomer_e:s.default.mark(function e(t,r){var a,n,i,u,c,l,o,p,f,_,m,y,h;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,r.select,e.next=3,a(d.createCustomer,t.payload);case 3:if(i=e.sent,null!==i){e.next=8;break}alert("\u521b\u5efa\u5931\u8d25"),e.next=15;break;case 8:return e.next=10,n({type:"setCustomer_r",payload:i.data.customer});case 10:return u=i.data.customer.default_address,c=u.first_name,l=u.last_name,o=u.company,p=u.phone,f=u.address1,_=u.city,m=u.country,y=u.province,h=u.zip,e.next=13,n({type:"setShippingAddress_r",payload:{first_name:c,last_name:l,company:o,phone:p,address1:f,city:_,country:m,province:y,zip:h}});case 13:return e.next=15,n({type:"setBillingAddress_r",payload:{first_name:c,last_name:l,company:o,phone:p,address1:f,city:_,country:m,province:y,zip:h}});case 15:case"end":return e.stop()}},e)}),setLineItemsQuantity_e:s.default.mark(function e(t,r){var a,n,i,d,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r.call,a=r.put,n=r.select,e.next=3,n();case 3:return i=e.sent,d=i.draftorderdetails,c=d.line_items.map(function(e){return e.id===t.payload.id&&(e=(0,u.default)({},e,{quantity:t.payload.quantity})),e}),e.next=8,a({type:"setLineItemsQuantity_r",payload:c});case 8:case"end":return e.stop()}},e)}),removeItem_e:s.default.mark(function e(t,r){var a,i,u,d,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r.call,a=r.put,i=r.select,e.next=3,i();case 3:return u=e.sent,d=u.draftorderdetails,c=(0,n.default)(d.line_items),c.splice(c.findIndex(function(e){return e.id===t.payload}),1),e.next=9,a({type:"removeItem_r",payload:c});case 9:case"end":return e.stop()}},e)}),updateDraftOrder_e:s.default.mark(function e(t,r){var a,n,i,u,c,l,o,p,f,_,m,y,h;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,n=r.put,i=r.select,e.next=3,i();case 3:return u=e.sent,c=u.draftorderdetails,l={},o=c.thisDetails,p=c.shipping_address,f=c.billing_address,_=c.note,m=c.line_items.map(function(e){return{variant_id:e.id,quantity:e.quantity}}),""!==c.customer?(y={id:c.customer.id},l={draft_order:{id:o.id,line_items:m,customer:y,shipping_address:p,billing_address:f,note:_}}):l={draft_order:{id:o.id,line_items:m,customer:null,shipping_address:null,billing_address:null,note:_}},e.next=11,a(d.updateDraftOrder,o.id,l);case 11:if(h=e.sent,null!==h){e.next=16;break}alert("\u66f4\u65b0\u8349\u7a3f\u8ba2\u5355\u5931\u8d25\uff01"),e.next=20;break;case 16:return alert("\u66f4\u65b0\u8349\u7a3f\u8ba2\u5355\u6210\u529f\uff01"),console.log(h),e.next=20,n({type:"resetState_r"});case 20:case"end":return e.stop()}},e)}),deleteDraftOrder_e:s.default.mark(function e(t,r){var a;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=r.call,r.put,r.select,e.next=3,a(d.deleteDraftOrder,t.payload);case 3:location.hash="/orders/draft_orders";case 4:case"end":return e.stop()}},e)})},reducers:{setDetails_r:function(e,t){return(0,u.default)({},e,t.payload)},resetState_r:function(e,t){return(0,u.default)({},e,{thisDetails:"",customer:"",shipping_address:c,billing_address:l,line_items:[],note:""})},setCustomer_r:function(e,t){return(0,u.default)({},e,{customer:t.payload})},setCustomers_r:function(e,t){return(0,u.default)({},e,{customers:t.payload})},setProducts_r:function(e,t){return(0,u.default)({},e,{products:t.payload})},setShippingAddress_r:function(e,t){return(0,u.default)({},e,{shipping_address:t.payload})},setBillingAddress_r:function(e,t){return(0,u.default)({},e,{billing_address:t.payload})},setLineItems_r:function(e,t){return(0,u.default)({},e,{line_items:e.line_items.concat(t.payload)})},setLineItemsQuantity_r:function(e,t){return(0,u.default)({},e,{line_items:t.payload})},removeItem_r:function(e,t){return(0,u.default)({},e,{line_items:t.payload})},setNote_r:function(e,t){return(0,u.default)({},e,{note:t.payload})}}},p=o;t.default=p},yiAB:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryCustomers=d,t.createCustomer=l,t.updateDraftOrder=p,t.queryProducts=_,t.queryDetails=y,t.queryImages=v,t.deleteDraftOrder=w;var n=a(r("d6i3")),s=a(r("1l/V")),i=a(r("t3Un")),u=r("dENc");function d(){return c.apply(this,arguments)}function c(){return c=(0,s.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.get(u.apiBase+"/customers.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),c.apply(this,arguments)}function l(e){return o.apply(this,arguments)}function o(){return o=(0,s.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.post(u.apiBase+"/customers.json",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),o.apply(this,arguments)}function p(e,t){return f.apply(this,arguments)}function f(){return f=(0,s.default)(n.default.mark(function e(t,r){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.put(u.apiBase+"/draft_orders/"+t+".json",r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function _(){return m.apply(this,arguments)}function m(){return m=(0,s.default)(n.default.mark(function e(){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.get(u.apiBase+"/products.json?fields=id,title,variants,image,images");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function y(e){return h.apply(this,arguments)}function h(){return h=(0,s.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.get(u.apiBase+"/draft_orders/"+t+".json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return x=(0,s.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.get(u.apiBase+"/products/"+t+"/images.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return g=(0,s.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.default.delete(u.apiBase+"/draft_orders/"+t+".json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),g.apply(this,arguments)}}}]);