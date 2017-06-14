// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('counter.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('dommy.core');
counter.core.buttons_look_off = (function counter$core$buttons_look_off(buttons){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13126_SHARP_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(p1__13126_SHARP_,cljs.core.array_seq([cljs.core.cst$kw$border,"5px solid rgba(100,200,100,0.2)"], 0));
}),buttons));
});
counter.core.button_look_on = (function counter$core$button_look_on(button){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(button,cljs.core.array_seq([cljs.core.cst$kw$border,"5px solid rgba(100,200,100,1)"], 0));
});
counter.core.main = (function counter$core$main(){
var bignum = dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$div);
var counter__$1 = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var buttons_row1 = dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$div);
var buttons_row2 = dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$div);
var inc1 = dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$div);
var inc10 = dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$div);
var dec1 = dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$div);
var dec10 = dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$div);
var increment = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1)) : cljs.core.atom.call(null,(1)));
var reset = dommy.core.create_element.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$div);
dommy.core.set_class_BANG_(bignum,"bignum");

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(document.body,bignum);

dommy.core.set_class_BANG_(buttons_row1,"buttons-row1");

dommy.core.set_class_BANG_(buttons_row2,"buttons-row2");

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(document.body,buttons_row1);

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(document.body,buttons_row2);

dommy.core.set_class_BANG_(inc1,"inc");

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(buttons_row1,inc1);

goog.dom.setTextContent(inc1,"+1");

dommy.core.set_class_BANG_(dec1,"inc");

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(buttons_row2,dec1);

goog.dom.setTextContent(dec1,"-1");

dommy.core.set_class_BANG_(inc10,"inc");

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(buttons_row1,inc10);

goog.dom.setTextContent(inc10,"+10");

dommy.core.set_class_BANG_(dec10,"inc");

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(buttons_row2,dec10);

goog.dom.setTextContent(dec10,"-10");

dommy.core.set_class_BANG_(reset,"reset");

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(document.body,reset);

goog.dom.setTextContent(reset,"Reset");

counter.core.buttons_look_off(dommy.utils.__GT_Array(document.getElementsByClassName("inc")));

counter.core.button_look_on(inc1);

cljs.core.add_watch(counter__$1,cljs.core.cst$kw$update_DASH_bignum,((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (key,atom,old_state,new_state){
var G__13130 = bignum;
var G__13131 = [cljs.core.str(new_state)].join('');
return goog.dom.setTextContent(G__13130,G__13131);
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(counter__$1,(0)) : cljs.core.reset_BANG_.call(null,counter__$1,(0)));

window.addEventListener("keydown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2([cljs.core.str(event.keyCode)].join(''),"32")){
event.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter__$1,((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (p1__13127_SHARP_){
return (p1__13127_SHARP_ + (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(increment) : cljs.core.deref.call(null,increment)));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);
} else {
return null;
}
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

inc1.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
counter.core.buttons_look_off(dommy.utils.__GT_Array(document.getElementsByClassName("inc")));

counter.core.button_look_on(inc1);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(increment,(1)) : cljs.core.reset_BANG_.call(null,increment,(1)));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

dec1.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
counter.core.buttons_look_off(dommy.utils.__GT_Array(document.getElementsByClassName("inc")));

counter.core.button_look_on(dec1);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(increment,(-1)) : cljs.core.reset_BANG_.call(null,increment,(-1)));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

inc10.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
counter.core.buttons_look_off(dommy.utils.__GT_Array(document.getElementsByClassName("inc")));

counter.core.button_look_on(inc10);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(increment,(10)) : cljs.core.reset_BANG_.call(null,increment,(10)));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

dec10.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
counter.core.buttons_look_off(dommy.utils.__GT_Array(document.getElementsByClassName("inc")));

counter.core.button_look_on(dec10);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(increment,(-10)) : cljs.core.reset_BANG_.call(null,increment,(-10)));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

return reset.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(counter__$1,(0)) : cljs.core.reset_BANG_.call(null,counter__$1,(0)));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);
});
window.addEventListener("DOMContentLoaded",counter.core.main);
