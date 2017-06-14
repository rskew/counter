// Compiled by ClojureScript 1.9.229 {}
goog.provide('counter.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('dommy.core');
counter.core.buttons_look_off = (function counter$core$buttons_look_off(buttons){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__8439_SHARP_){
return dommy.core.set_style_BANG_.call(null,p1__8439_SHARP_,new cljs.core.Keyword(null,"border","border",1444987323),"5px solid rgba(100,200,100,0.2)");
}),buttons));
});
counter.core.button_look_on = (function counter$core$button_look_on(button){
return dommy.core.set_style_BANG_.call(null,button,new cljs.core.Keyword(null,"border","border",1444987323),"5px solid rgba(100,200,100,1)");
});
counter.core.main = (function counter$core$main(){
var bignum = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var counter__$1 = cljs.core.atom.call(null,(0));
var buttons_row1 = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var buttons_row2 = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var inc1 = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var inc10 = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var dec1 = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var dec10 = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var increment = cljs.core.atom.call(null,(1));
var reset = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
dommy.core.set_class_BANG_.call(null,bignum,"bignum");

dommy.core.append_BANG_.call(null,document.body,bignum);

dommy.core.set_class_BANG_.call(null,buttons_row1,"buttons-row1");

dommy.core.set_class_BANG_.call(null,buttons_row2,"buttons-row2");

dommy.core.append_BANG_.call(null,document.body,buttons_row1);

dommy.core.append_BANG_.call(null,document.body,buttons_row2);

dommy.core.set_class_BANG_.call(null,inc1,"inc");

dommy.core.append_BANG_.call(null,buttons_row1,inc1);

goog.dom.setTextContent(inc1,"+1");

dommy.core.set_class_BANG_.call(null,dec1,"inc");

dommy.core.append_BANG_.call(null,buttons_row2,dec1);

goog.dom.setTextContent(dec1,"-1");

dommy.core.set_class_BANG_.call(null,inc10,"inc");

dommy.core.append_BANG_.call(null,buttons_row1,inc10);

goog.dom.setTextContent(inc10,"+10");

dommy.core.set_class_BANG_.call(null,dec10,"inc");

dommy.core.append_BANG_.call(null,buttons_row2,dec10);

goog.dom.setTextContent(dec10,"-10");

dommy.core.set_class_BANG_.call(null,reset,"reset");

dommy.core.append_BANG_.call(null,document.body,reset);

goog.dom.setTextContent(reset,"Reset");

counter.core.buttons_look_off.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByClassName("inc")));

counter.core.button_look_on.call(null,inc1);

cljs.core.add_watch.call(null,counter__$1,new cljs.core.Keyword(null,"update-bignum","update-bignum",-199339669),((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (key,atom,old_state,new_state){
return goog.dom.setTextContent(bignum,[cljs.core.str(new_state)].join(''));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

cljs.core.reset_BANG_.call(null,counter__$1,(0));

window.addEventListener("keydown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
if(cljs.core._EQ_.call(null,[cljs.core.str(event.keyCode)].join(''),"32")){
event.preventDefault();

return cljs.core.swap_BANG_.call(null,counter__$1,((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (p1__8440_SHARP_){
return (p1__8440_SHARP_ + cljs.core.deref.call(null,increment));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);
} else {
return null;
}
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

inc1.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
counter.core.buttons_look_off.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByClassName("inc")));

counter.core.button_look_on.call(null,inc1);

return cljs.core.reset_BANG_.call(null,increment,(1));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

dec1.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
counter.core.buttons_look_off.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByClassName("inc")));

counter.core.button_look_on.call(null,dec1);

return cljs.core.reset_BANG_.call(null,increment,(-1));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

inc10.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
counter.core.buttons_look_off.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByClassName("inc")));

counter.core.button_look_on.call(null,inc10);

return cljs.core.reset_BANG_.call(null,increment,(10));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

dec10.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
counter.core.buttons_look_off.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByClassName("inc")));

counter.core.button_look_on.call(null,dec10);

return cljs.core.reset_BANG_.call(null,increment,(-10));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);

return reset.addEventListener("mousedown",((function (bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset){
return (function (event){
return cljs.core.reset_BANG_.call(null,counter__$1,(0));
});})(bignum,counter__$1,buttons_row1,buttons_row2,inc1,inc10,dec1,dec10,increment,reset))
);
});
window.addEventListener("DOMContentLoaded",counter.core.main);

//# sourceMappingURL=core.js.map