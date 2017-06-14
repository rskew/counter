// Compiled by ClojureScript 1.9.229 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__6409__auto__ = elem.textContent;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args7682 = [];
var len__7484__auto___7685 = arguments.length;
var i__7485__auto___7686 = (0);
while(true){
if((i__7485__auto___7686 < len__7484__auto___7685)){
args7682.push((arguments[i__7485__auto___7686]));

var G__7687 = (i__7485__auto___7686 + (1));
i__7485__auto___7686 = G__7687;
continue;
} else {
}
break;
}

var G__7684 = args7682.length;
switch (G__7684) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7682.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args7689 = [];
var len__7484__auto___7692 = arguments.length;
var i__7485__auto___7693 = (0);
while(true){
if((i__7485__auto___7693 < len__7484__auto___7692)){
args7689.push((arguments[i__7485__auto___7693]));

var G__7694 = (i__7485__auto___7693 + (1));
i__7485__auto___7693 = G__7694;
continue;
} else {
}
break;
}

var G__7691 = args7689.length;
switch (G__7691) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7689.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args7697 = [];
var len__7484__auto___7700 = arguments.length;
var i__7485__auto___7701 = (0);
while(true){
if((i__7485__auto___7701 < len__7484__auto___7700)){
args7697.push((arguments[i__7485__auto___7701]));

var G__7702 = (i__7485__auto___7701 + (1));
i__7485__auto___7701 = G__7702;
continue;
} else {
}
break;
}

var G__7699 = args7697.length;
switch (G__7699) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7697.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__7696_SHARP_){
return !((p1__7696_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___7716 = arguments.length;
var i__7485__auto___7717 = (0);
while(true){
if((i__7485__auto___7717 < len__7484__auto___7716)){
args__7491__auto__.push((arguments[i__7485__auto___7717]));

var G__7718 = (i__7485__auto___7717 + (1));
i__7485__auto___7717 = G__7718;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__7706_7719 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__7707_7720 = null;
var count__7708_7721 = (0);
var i__7709_7722 = (0);
while(true){
if((i__7709_7722 < count__7708_7721)){
var vec__7710_7723 = cljs.core._nth.call(null,chunk__7707_7720,i__7709_7722);
var k_7724 = cljs.core.nth.call(null,vec__7710_7723,(0),null);
var v_7725 = cljs.core.nth.call(null,vec__7710_7723,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_7724),v_7725);

var G__7726 = seq__7706_7719;
var G__7727 = chunk__7707_7720;
var G__7728 = count__7708_7721;
var G__7729 = (i__7709_7722 + (1));
seq__7706_7719 = G__7726;
chunk__7707_7720 = G__7727;
count__7708_7721 = G__7728;
i__7709_7722 = G__7729;
continue;
} else {
var temp__4657__auto___7730 = cljs.core.seq.call(null,seq__7706_7719);
if(temp__4657__auto___7730){
var seq__7706_7731__$1 = temp__4657__auto___7730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7706_7731__$1)){
var c__7220__auto___7732 = cljs.core.chunk_first.call(null,seq__7706_7731__$1);
var G__7733 = cljs.core.chunk_rest.call(null,seq__7706_7731__$1);
var G__7734 = c__7220__auto___7732;
var G__7735 = cljs.core.count.call(null,c__7220__auto___7732);
var G__7736 = (0);
seq__7706_7719 = G__7733;
chunk__7707_7720 = G__7734;
count__7708_7721 = G__7735;
i__7709_7722 = G__7736;
continue;
} else {
var vec__7713_7737 = cljs.core.first.call(null,seq__7706_7731__$1);
var k_7738 = cljs.core.nth.call(null,vec__7713_7737,(0),null);
var v_7739 = cljs.core.nth.call(null,vec__7713_7737,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_7738),v_7739);

var G__7740 = cljs.core.next.call(null,seq__7706_7731__$1);
var G__7741 = null;
var G__7742 = (0);
var G__7743 = (0);
seq__7706_7719 = G__7740;
chunk__7707_7720 = G__7741;
count__7708_7721 = G__7742;
i__7709_7722 = G__7743;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq7704){
var G__7705 = cljs.core.first.call(null,seq7704);
var seq7704__$1 = cljs.core.next.call(null,seq7704);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7705,seq7704__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___7750 = arguments.length;
var i__7485__auto___7751 = (0);
while(true){
if((i__7485__auto___7751 < len__7484__auto___7750)){
args__7491__auto__.push((arguments[i__7485__auto___7751]));

var G__7752 = (i__7485__auto___7751 + (1));
i__7485__auto___7751 = G__7752;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__7746_7753 = cljs.core.seq.call(null,keywords);
var chunk__7747_7754 = null;
var count__7748_7755 = (0);
var i__7749_7756 = (0);
while(true){
if((i__7749_7756 < count__7748_7755)){
var kw_7757 = cljs.core._nth.call(null,chunk__7747_7754,i__7749_7756);
style.removeProperty(dommy.utils.as_str.call(null,kw_7757));

var G__7758 = seq__7746_7753;
var G__7759 = chunk__7747_7754;
var G__7760 = count__7748_7755;
var G__7761 = (i__7749_7756 + (1));
seq__7746_7753 = G__7758;
chunk__7747_7754 = G__7759;
count__7748_7755 = G__7760;
i__7749_7756 = G__7761;
continue;
} else {
var temp__4657__auto___7762 = cljs.core.seq.call(null,seq__7746_7753);
if(temp__4657__auto___7762){
var seq__7746_7763__$1 = temp__4657__auto___7762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7746_7763__$1)){
var c__7220__auto___7764 = cljs.core.chunk_first.call(null,seq__7746_7763__$1);
var G__7765 = cljs.core.chunk_rest.call(null,seq__7746_7763__$1);
var G__7766 = c__7220__auto___7764;
var G__7767 = cljs.core.count.call(null,c__7220__auto___7764);
var G__7768 = (0);
seq__7746_7753 = G__7765;
chunk__7747_7754 = G__7766;
count__7748_7755 = G__7767;
i__7749_7756 = G__7768;
continue;
} else {
var kw_7769 = cljs.core.first.call(null,seq__7746_7763__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_7769));

var G__7770 = cljs.core.next.call(null,seq__7746_7763__$1);
var G__7771 = null;
var G__7772 = (0);
var G__7773 = (0);
seq__7746_7753 = G__7770;
chunk__7747_7754 = G__7771;
count__7748_7755 = G__7772;
i__7749_7756 = G__7773;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq7744){
var G__7745 = cljs.core.first.call(null,seq7744);
var seq7744__$1 = cljs.core.next.call(null,seq7744);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7745,seq7744__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___7786 = arguments.length;
var i__7485__auto___7787 = (0);
while(true){
if((i__7485__auto___7787 < len__7484__auto___7786)){
args__7491__auto__.push((arguments[i__7485__auto___7787]));

var G__7788 = (i__7485__auto___7787 + (1));
i__7485__auto___7787 = G__7788;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__7776_7789 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__7777_7790 = null;
var count__7778_7791 = (0);
var i__7779_7792 = (0);
while(true){
if((i__7779_7792 < count__7778_7791)){
var vec__7780_7793 = cljs.core._nth.call(null,chunk__7777_7790,i__7779_7792);
var k_7794 = cljs.core.nth.call(null,vec__7780_7793,(0),null);
var v_7795 = cljs.core.nth.call(null,vec__7780_7793,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_7794,[cljs.core.str(v_7795),cljs.core.str("px")].join(''));

var G__7796 = seq__7776_7789;
var G__7797 = chunk__7777_7790;
var G__7798 = count__7778_7791;
var G__7799 = (i__7779_7792 + (1));
seq__7776_7789 = G__7796;
chunk__7777_7790 = G__7797;
count__7778_7791 = G__7798;
i__7779_7792 = G__7799;
continue;
} else {
var temp__4657__auto___7800 = cljs.core.seq.call(null,seq__7776_7789);
if(temp__4657__auto___7800){
var seq__7776_7801__$1 = temp__4657__auto___7800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7776_7801__$1)){
var c__7220__auto___7802 = cljs.core.chunk_first.call(null,seq__7776_7801__$1);
var G__7803 = cljs.core.chunk_rest.call(null,seq__7776_7801__$1);
var G__7804 = c__7220__auto___7802;
var G__7805 = cljs.core.count.call(null,c__7220__auto___7802);
var G__7806 = (0);
seq__7776_7789 = G__7803;
chunk__7777_7790 = G__7804;
count__7778_7791 = G__7805;
i__7779_7792 = G__7806;
continue;
} else {
var vec__7783_7807 = cljs.core.first.call(null,seq__7776_7801__$1);
var k_7808 = cljs.core.nth.call(null,vec__7783_7807,(0),null);
var v_7809 = cljs.core.nth.call(null,vec__7783_7807,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_7808,[cljs.core.str(v_7809),cljs.core.str("px")].join(''));

var G__7810 = cljs.core.next.call(null,seq__7776_7801__$1);
var G__7811 = null;
var G__7812 = (0);
var G__7813 = (0);
seq__7776_7789 = G__7810;
chunk__7777_7790 = G__7811;
count__7778_7791 = G__7812;
i__7779_7792 = G__7813;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq7774){
var G__7775 = cljs.core.first.call(null,seq7774);
var seq7774__$1 = cljs.core.next.call(null,seq7774);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7775,seq7774__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args7814 = [];
var len__7484__auto___7833 = arguments.length;
var i__7485__auto___7834 = (0);
while(true){
if((i__7485__auto___7834 < len__7484__auto___7833)){
args7814.push((arguments[i__7485__auto___7834]));

var G__7835 = (i__7485__auto___7834 + (1));
i__7485__auto___7834 = G__7835;
continue;
} else {
}
break;
}

var G__7820 = args7814.length;
switch (G__7820) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args7814.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7503__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__7821 = elem;
(G__7821[k__$1] = v);

return G__7821;
} else {
var G__7822 = elem;
G__7822.setAttribute(k__$1,v);

return G__7822;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__7823_7837 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__7824_7838 = null;
var count__7825_7839 = (0);
var i__7826_7840 = (0);
while(true){
if((i__7826_7840 < count__7825_7839)){
var vec__7827_7841 = cljs.core._nth.call(null,chunk__7824_7838,i__7826_7840);
var k_7842__$1 = cljs.core.nth.call(null,vec__7827_7841,(0),null);
var v_7843__$1 = cljs.core.nth.call(null,vec__7827_7841,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_7842__$1,v_7843__$1);

var G__7844 = seq__7823_7837;
var G__7845 = chunk__7824_7838;
var G__7846 = count__7825_7839;
var G__7847 = (i__7826_7840 + (1));
seq__7823_7837 = G__7844;
chunk__7824_7838 = G__7845;
count__7825_7839 = G__7846;
i__7826_7840 = G__7847;
continue;
} else {
var temp__4657__auto___7848 = cljs.core.seq.call(null,seq__7823_7837);
if(temp__4657__auto___7848){
var seq__7823_7849__$1 = temp__4657__auto___7848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7823_7849__$1)){
var c__7220__auto___7850 = cljs.core.chunk_first.call(null,seq__7823_7849__$1);
var G__7851 = cljs.core.chunk_rest.call(null,seq__7823_7849__$1);
var G__7852 = c__7220__auto___7850;
var G__7853 = cljs.core.count.call(null,c__7220__auto___7850);
var G__7854 = (0);
seq__7823_7837 = G__7851;
chunk__7824_7838 = G__7852;
count__7825_7839 = G__7853;
i__7826_7840 = G__7854;
continue;
} else {
var vec__7830_7855 = cljs.core.first.call(null,seq__7823_7849__$1);
var k_7856__$1 = cljs.core.nth.call(null,vec__7830_7855,(0),null);
var v_7857__$1 = cljs.core.nth.call(null,vec__7830_7855,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_7856__$1,v_7857__$1);

var G__7858 = cljs.core.next.call(null,seq__7823_7849__$1);
var G__7859 = null;
var G__7860 = (0);
var G__7861 = (0);
seq__7823_7837 = G__7858;
chunk__7824_7838 = G__7859;
count__7825_7839 = G__7860;
i__7826_7840 = G__7861;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq7815){
var G__7816 = cljs.core.first.call(null,seq7815);
var seq7815__$1 = cljs.core.next.call(null,seq7815);
var G__7817 = cljs.core.first.call(null,seq7815__$1);
var seq7815__$2 = cljs.core.next.call(null,seq7815__$1);
var G__7818 = cljs.core.first.call(null,seq7815__$2);
var seq7815__$3 = cljs.core.next.call(null,seq7815__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7816,G__7817,G__7818,seq7815__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args7862 = [];
var len__7484__auto___7872 = arguments.length;
var i__7485__auto___7873 = (0);
while(true){
if((i__7485__auto___7873 < len__7484__auto___7872)){
args7862.push((arguments[i__7485__auto___7873]));

var G__7874 = (i__7485__auto___7873 + (1));
i__7485__auto___7873 = G__7874;
continue;
} else {
}
break;
}

var G__7867 = args7862.length;
switch (G__7867) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args7862.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_7876__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_7876__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_7876__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__7868_7877 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__7869_7878 = null;
var count__7870_7879 = (0);
var i__7871_7880 = (0);
while(true){
if((i__7871_7880 < count__7870_7879)){
var k_7881__$1 = cljs.core._nth.call(null,chunk__7869_7878,i__7871_7880);
dommy.core.remove_attr_BANG_.call(null,elem,k_7881__$1);

var G__7882 = seq__7868_7877;
var G__7883 = chunk__7869_7878;
var G__7884 = count__7870_7879;
var G__7885 = (i__7871_7880 + (1));
seq__7868_7877 = G__7882;
chunk__7869_7878 = G__7883;
count__7870_7879 = G__7884;
i__7871_7880 = G__7885;
continue;
} else {
var temp__4657__auto___7886 = cljs.core.seq.call(null,seq__7868_7877);
if(temp__4657__auto___7886){
var seq__7868_7887__$1 = temp__4657__auto___7886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7868_7887__$1)){
var c__7220__auto___7888 = cljs.core.chunk_first.call(null,seq__7868_7887__$1);
var G__7889 = cljs.core.chunk_rest.call(null,seq__7868_7887__$1);
var G__7890 = c__7220__auto___7888;
var G__7891 = cljs.core.count.call(null,c__7220__auto___7888);
var G__7892 = (0);
seq__7868_7877 = G__7889;
chunk__7869_7878 = G__7890;
count__7870_7879 = G__7891;
i__7871_7880 = G__7892;
continue;
} else {
var k_7893__$1 = cljs.core.first.call(null,seq__7868_7887__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_7893__$1);

var G__7894 = cljs.core.next.call(null,seq__7868_7887__$1);
var G__7895 = null;
var G__7896 = (0);
var G__7897 = (0);
seq__7868_7877 = G__7894;
chunk__7869_7878 = G__7895;
count__7870_7879 = G__7896;
i__7871_7880 = G__7897;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq7863){
var G__7864 = cljs.core.first.call(null,seq7863);
var seq7863__$1 = cljs.core.next.call(null,seq7863);
var G__7865 = cljs.core.first.call(null,seq7863__$1);
var seq7863__$2 = cljs.core.next.call(null,seq7863__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7864,G__7865,seq7863__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args7898 = [];
var len__7484__auto___7901 = arguments.length;
var i__7485__auto___7902 = (0);
while(true){
if((i__7485__auto___7902 < len__7484__auto___7901)){
args7898.push((arguments[i__7485__auto___7902]));

var G__7903 = (i__7485__auto___7902 + (1));
i__7485__auto___7902 = G__7903;
continue;
} else {
}
break;
}

var G__7900 = args7898.length;
switch (G__7900) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7898.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args7905 = [];
var len__7484__auto___7923 = arguments.length;
var i__7485__auto___7924 = (0);
while(true){
if((i__7485__auto___7924 < len__7484__auto___7923)){
args7905.push((arguments[i__7485__auto___7924]));

var G__7925 = (i__7485__auto___7924 + (1));
i__7485__auto___7924 = G__7925;
continue;
} else {
}
break;
}

var G__7910 = args7905.length;
switch (G__7910) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args7905.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___7927 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___7927)){
var class_list_7928 = temp__4655__auto___7927;
var seq__7911_7929 = cljs.core.seq.call(null,classes__$1);
var chunk__7912_7930 = null;
var count__7913_7931 = (0);
var i__7914_7932 = (0);
while(true){
if((i__7914_7932 < count__7913_7931)){
var c_7933 = cljs.core._nth.call(null,chunk__7912_7930,i__7914_7932);
class_list_7928.add(c_7933);

var G__7934 = seq__7911_7929;
var G__7935 = chunk__7912_7930;
var G__7936 = count__7913_7931;
var G__7937 = (i__7914_7932 + (1));
seq__7911_7929 = G__7934;
chunk__7912_7930 = G__7935;
count__7913_7931 = G__7936;
i__7914_7932 = G__7937;
continue;
} else {
var temp__4657__auto___7938 = cljs.core.seq.call(null,seq__7911_7929);
if(temp__4657__auto___7938){
var seq__7911_7939__$1 = temp__4657__auto___7938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7911_7939__$1)){
var c__7220__auto___7940 = cljs.core.chunk_first.call(null,seq__7911_7939__$1);
var G__7941 = cljs.core.chunk_rest.call(null,seq__7911_7939__$1);
var G__7942 = c__7220__auto___7940;
var G__7943 = cljs.core.count.call(null,c__7220__auto___7940);
var G__7944 = (0);
seq__7911_7929 = G__7941;
chunk__7912_7930 = G__7942;
count__7913_7931 = G__7943;
i__7914_7932 = G__7944;
continue;
} else {
var c_7945 = cljs.core.first.call(null,seq__7911_7939__$1);
class_list_7928.add(c_7945);

var G__7946 = cljs.core.next.call(null,seq__7911_7939__$1);
var G__7947 = null;
var G__7948 = (0);
var G__7949 = (0);
seq__7911_7929 = G__7946;
chunk__7912_7930 = G__7947;
count__7913_7931 = G__7948;
i__7914_7932 = G__7949;
continue;
}
} else {
}
}
break;
}
} else {
var seq__7915_7950 = cljs.core.seq.call(null,classes__$1);
var chunk__7916_7951 = null;
var count__7917_7952 = (0);
var i__7918_7953 = (0);
while(true){
if((i__7918_7953 < count__7917_7952)){
var c_7954 = cljs.core._nth.call(null,chunk__7916_7951,i__7918_7953);
var class_name_7955 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_7955,c_7954))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_7955 === ""))?c_7954:[cljs.core.str(class_name_7955),cljs.core.str(" "),cljs.core.str(c_7954)].join('')));
}

var G__7956 = seq__7915_7950;
var G__7957 = chunk__7916_7951;
var G__7958 = count__7917_7952;
var G__7959 = (i__7918_7953 + (1));
seq__7915_7950 = G__7956;
chunk__7916_7951 = G__7957;
count__7917_7952 = G__7958;
i__7918_7953 = G__7959;
continue;
} else {
var temp__4657__auto___7960 = cljs.core.seq.call(null,seq__7915_7950);
if(temp__4657__auto___7960){
var seq__7915_7961__$1 = temp__4657__auto___7960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7915_7961__$1)){
var c__7220__auto___7962 = cljs.core.chunk_first.call(null,seq__7915_7961__$1);
var G__7963 = cljs.core.chunk_rest.call(null,seq__7915_7961__$1);
var G__7964 = c__7220__auto___7962;
var G__7965 = cljs.core.count.call(null,c__7220__auto___7962);
var G__7966 = (0);
seq__7915_7950 = G__7963;
chunk__7916_7951 = G__7964;
count__7917_7952 = G__7965;
i__7918_7953 = G__7966;
continue;
} else {
var c_7967 = cljs.core.first.call(null,seq__7915_7961__$1);
var class_name_7968 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_7968,c_7967))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_7968 === ""))?c_7967:[cljs.core.str(class_name_7968),cljs.core.str(" "),cljs.core.str(c_7967)].join('')));
}

var G__7969 = cljs.core.next.call(null,seq__7915_7961__$1);
var G__7970 = null;
var G__7971 = (0);
var G__7972 = (0);
seq__7915_7950 = G__7969;
chunk__7916_7951 = G__7970;
count__7917_7952 = G__7971;
i__7918_7953 = G__7972;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__7919_7973 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__7920_7974 = null;
var count__7921_7975 = (0);
var i__7922_7976 = (0);
while(true){
if((i__7922_7976 < count__7921_7975)){
var c_7977 = cljs.core._nth.call(null,chunk__7920_7974,i__7922_7976);
dommy.core.add_class_BANG_.call(null,elem,c_7977);

var G__7978 = seq__7919_7973;
var G__7979 = chunk__7920_7974;
var G__7980 = count__7921_7975;
var G__7981 = (i__7922_7976 + (1));
seq__7919_7973 = G__7978;
chunk__7920_7974 = G__7979;
count__7921_7975 = G__7980;
i__7922_7976 = G__7981;
continue;
} else {
var temp__4657__auto___7982 = cljs.core.seq.call(null,seq__7919_7973);
if(temp__4657__auto___7982){
var seq__7919_7983__$1 = temp__4657__auto___7982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7919_7983__$1)){
var c__7220__auto___7984 = cljs.core.chunk_first.call(null,seq__7919_7983__$1);
var G__7985 = cljs.core.chunk_rest.call(null,seq__7919_7983__$1);
var G__7986 = c__7220__auto___7984;
var G__7987 = cljs.core.count.call(null,c__7220__auto___7984);
var G__7988 = (0);
seq__7919_7973 = G__7985;
chunk__7920_7974 = G__7986;
count__7921_7975 = G__7987;
i__7922_7976 = G__7988;
continue;
} else {
var c_7989 = cljs.core.first.call(null,seq__7919_7983__$1);
dommy.core.add_class_BANG_.call(null,elem,c_7989);

var G__7990 = cljs.core.next.call(null,seq__7919_7983__$1);
var G__7991 = null;
var G__7992 = (0);
var G__7993 = (0);
seq__7919_7973 = G__7990;
chunk__7920_7974 = G__7991;
count__7921_7975 = G__7992;
i__7922_7976 = G__7993;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq7906){
var G__7907 = cljs.core.first.call(null,seq7906);
var seq7906__$1 = cljs.core.next.call(null,seq7906);
var G__7908 = cljs.core.first.call(null,seq7906__$1);
var seq7906__$2 = cljs.core.next.call(null,seq7906__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7907,G__7908,seq7906__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args7994 = [];
var len__7484__auto___8004 = arguments.length;
var i__7485__auto___8005 = (0);
while(true){
if((i__7485__auto___8005 < len__7484__auto___8004)){
args7994.push((arguments[i__7485__auto___8005]));

var G__8006 = (i__7485__auto___8005 + (1));
i__7485__auto___8005 = G__8006;
continue;
} else {
}
break;
}

var G__7999 = args7994.length;
switch (G__7999) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args7994.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___8008 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___8008)){
var class_list_8009 = temp__4655__auto___8008;
class_list_8009.remove(c__$1);
} else {
var class_name_8010 = dommy.core.class$.call(null,elem);
var new_class_name_8011 = dommy.utils.remove_class_str.call(null,class_name_8010,c__$1);
if((class_name_8010 === new_class_name_8011)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_8011);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__8000 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__8001 = null;
var count__8002 = (0);
var i__8003 = (0);
while(true){
if((i__8003 < count__8002)){
var c = cljs.core._nth.call(null,chunk__8001,i__8003);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__8012 = seq__8000;
var G__8013 = chunk__8001;
var G__8014 = count__8002;
var G__8015 = (i__8003 + (1));
seq__8000 = G__8012;
chunk__8001 = G__8013;
count__8002 = G__8014;
i__8003 = G__8015;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8000);
if(temp__4657__auto__){
var seq__8000__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8000__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__8000__$1);
var G__8016 = cljs.core.chunk_rest.call(null,seq__8000__$1);
var G__8017 = c__7220__auto__;
var G__8018 = cljs.core.count.call(null,c__7220__auto__);
var G__8019 = (0);
seq__8000 = G__8016;
chunk__8001 = G__8017;
count__8002 = G__8018;
i__8003 = G__8019;
continue;
} else {
var c = cljs.core.first.call(null,seq__8000__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__8020 = cljs.core.next.call(null,seq__8000__$1);
var G__8021 = null;
var G__8022 = (0);
var G__8023 = (0);
seq__8000 = G__8020;
chunk__8001 = G__8021;
count__8002 = G__8022;
i__8003 = G__8023;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq7995){
var G__7996 = cljs.core.first.call(null,seq7995);
var seq7995__$1 = cljs.core.next.call(null,seq7995);
var G__7997 = cljs.core.first.call(null,seq7995__$1);
var seq7995__$2 = cljs.core.next.call(null,seq7995__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7996,G__7997,seq7995__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args8024 = [];
var len__7484__auto___8027 = arguments.length;
var i__7485__auto___8028 = (0);
while(true){
if((i__7485__auto___8028 < len__7484__auto___8027)){
args8024.push((arguments[i__7485__auto___8028]));

var G__8029 = (i__7485__auto___8028 + (1));
i__7485__auto___8028 = G__8029;
continue;
} else {
}
break;
}

var G__8026 = args8024.length;
switch (G__8026) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8024.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___8031 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___8031)){
var class_list_8032 = temp__4655__auto___8031;
class_list_8032.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args8033 = [];
var len__7484__auto___8036 = arguments.length;
var i__7485__auto___8037 = (0);
while(true){
if((i__7485__auto___8037 < len__7484__auto___8036)){
args8033.push((arguments[i__7485__auto___8037]));

var G__8038 = (i__7485__auto___8037 + (1));
i__7485__auto___8037 = G__8038;
continue;
} else {
}
break;
}

var G__8035 = args8033.length;
switch (G__8035) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8033.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args8040 = [];
var len__7484__auto___8043 = arguments.length;
var i__7485__auto___8044 = (0);
while(true){
if((i__7485__auto___8044 < len__7484__auto___8043)){
args8040.push((arguments[i__7485__auto___8044]));

var G__8045 = (i__7485__auto___8044 + (1));
i__7485__auto___8044 = G__8045;
continue;
} else {
}
break;
}

var G__8042 = args8040.length;
switch (G__8042) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8040.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args8047 = [];
var len__7484__auto___8058 = arguments.length;
var i__7485__auto___8059 = (0);
while(true){
if((i__7485__auto___8059 < len__7484__auto___8058)){
args8047.push((arguments[i__7485__auto___8059]));

var G__8060 = (i__7485__auto___8059 + (1));
i__7485__auto___8059 = G__8060;
continue;
} else {
}
break;
}

var G__8052 = args8047.length;
switch (G__8052) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args8047.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__8053 = parent;
G__8053.appendChild(child);

return G__8053;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__8054_8062 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__8055_8063 = null;
var count__8056_8064 = (0);
var i__8057_8065 = (0);
while(true){
if((i__8057_8065 < count__8056_8064)){
var c_8066 = cljs.core._nth.call(null,chunk__8055_8063,i__8057_8065);
dommy.core.append_BANG_.call(null,parent,c_8066);

var G__8067 = seq__8054_8062;
var G__8068 = chunk__8055_8063;
var G__8069 = count__8056_8064;
var G__8070 = (i__8057_8065 + (1));
seq__8054_8062 = G__8067;
chunk__8055_8063 = G__8068;
count__8056_8064 = G__8069;
i__8057_8065 = G__8070;
continue;
} else {
var temp__4657__auto___8071 = cljs.core.seq.call(null,seq__8054_8062);
if(temp__4657__auto___8071){
var seq__8054_8072__$1 = temp__4657__auto___8071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8054_8072__$1)){
var c__7220__auto___8073 = cljs.core.chunk_first.call(null,seq__8054_8072__$1);
var G__8074 = cljs.core.chunk_rest.call(null,seq__8054_8072__$1);
var G__8075 = c__7220__auto___8073;
var G__8076 = cljs.core.count.call(null,c__7220__auto___8073);
var G__8077 = (0);
seq__8054_8062 = G__8074;
chunk__8055_8063 = G__8075;
count__8056_8064 = G__8076;
i__8057_8065 = G__8077;
continue;
} else {
var c_8078 = cljs.core.first.call(null,seq__8054_8072__$1);
dommy.core.append_BANG_.call(null,parent,c_8078);

var G__8079 = cljs.core.next.call(null,seq__8054_8072__$1);
var G__8080 = null;
var G__8081 = (0);
var G__8082 = (0);
seq__8054_8062 = G__8079;
chunk__8055_8063 = G__8080;
count__8056_8064 = G__8081;
i__8057_8065 = G__8082;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq8048){
var G__8049 = cljs.core.first.call(null,seq8048);
var seq8048__$1 = cljs.core.next.call(null,seq8048);
var G__8050 = cljs.core.first.call(null,seq8048__$1);
var seq8048__$2 = cljs.core.next.call(null,seq8048__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8049,G__8050,seq8048__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args8083 = [];
var len__7484__auto___8094 = arguments.length;
var i__7485__auto___8095 = (0);
while(true){
if((i__7485__auto___8095 < len__7484__auto___8094)){
args8083.push((arguments[i__7485__auto___8095]));

var G__8096 = (i__7485__auto___8095 + (1));
i__7485__auto___8095 = G__8096;
continue;
} else {
}
break;
}

var G__8088 = args8083.length;
switch (G__8088) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args8083.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__8089 = parent;
G__8089.insertBefore(child,parent.firstChild);

return G__8089;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__8090_8098 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__8091_8099 = null;
var count__8092_8100 = (0);
var i__8093_8101 = (0);
while(true){
if((i__8093_8101 < count__8092_8100)){
var c_8102 = cljs.core._nth.call(null,chunk__8091_8099,i__8093_8101);
dommy.core.prepend_BANG_.call(null,parent,c_8102);

var G__8103 = seq__8090_8098;
var G__8104 = chunk__8091_8099;
var G__8105 = count__8092_8100;
var G__8106 = (i__8093_8101 + (1));
seq__8090_8098 = G__8103;
chunk__8091_8099 = G__8104;
count__8092_8100 = G__8105;
i__8093_8101 = G__8106;
continue;
} else {
var temp__4657__auto___8107 = cljs.core.seq.call(null,seq__8090_8098);
if(temp__4657__auto___8107){
var seq__8090_8108__$1 = temp__4657__auto___8107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8090_8108__$1)){
var c__7220__auto___8109 = cljs.core.chunk_first.call(null,seq__8090_8108__$1);
var G__8110 = cljs.core.chunk_rest.call(null,seq__8090_8108__$1);
var G__8111 = c__7220__auto___8109;
var G__8112 = cljs.core.count.call(null,c__7220__auto___8109);
var G__8113 = (0);
seq__8090_8098 = G__8110;
chunk__8091_8099 = G__8111;
count__8092_8100 = G__8112;
i__8093_8101 = G__8113;
continue;
} else {
var c_8114 = cljs.core.first.call(null,seq__8090_8108__$1);
dommy.core.prepend_BANG_.call(null,parent,c_8114);

var G__8115 = cljs.core.next.call(null,seq__8090_8108__$1);
var G__8116 = null;
var G__8117 = (0);
var G__8118 = (0);
seq__8090_8098 = G__8115;
chunk__8091_8099 = G__8116;
count__8092_8100 = G__8117;
i__8093_8101 = G__8118;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq8084){
var G__8085 = cljs.core.first.call(null,seq8084);
var seq8084__$1 = cljs.core.next.call(null,seq8084);
var G__8086 = cljs.core.first.call(null,seq8084__$1);
var seq8084__$2 = cljs.core.next.call(null,seq8084__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8085,G__8086,seq8084__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___8119 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___8119)){
var next_8120 = temp__4655__auto___8119;
dommy.core.insert_before_BANG_.call(null,elem,next_8120);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args8121 = [];
var len__7484__auto___8125 = arguments.length;
var i__7485__auto___8126 = (0);
while(true){
if((i__7485__auto___8126 < len__7484__auto___8125)){
args8121.push((arguments[i__7485__auto___8126]));

var G__8127 = (i__7485__auto___8126 + (1));
i__7485__auto___8126 = G__8127;
continue;
} else {
}
break;
}

var G__8123 = args8121.length;
switch (G__8123) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8121.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__8124 = p;
G__8124.removeChild(elem);

return G__8124;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8129){
var vec__8130 = p__8129;
var special_mouse_event = cljs.core.nth.call(null,vec__8130,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__8130,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__8130,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__8130,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__6409__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__6397__auto__ = related_target;
if(cljs.core.truth_(and__6397__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__6397__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__8130,special_mouse_event,real_mouse_event))
});})(vec__8130,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__6397__auto__ = selected_target;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__6397__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__6409__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8136 = arguments.length;
var i__7485__auto___8137 = (0);
while(true){
if((i__7485__auto___8137 < len__7484__auto___8136)){
args__7491__auto__.push((arguments[i__7485__auto___8137]));

var G__8138 = (i__7485__auto___8137 + (1));
i__7485__auto___8137 = G__8138;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq8133){
var G__8134 = cljs.core.first.call(null,seq8133);
var seq8133__$1 = cljs.core.next.call(null,seq8133);
var G__8135 = cljs.core.first.call(null,seq8133__$1);
var seq8133__$2 = cljs.core.next.call(null,seq8133__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8134,G__8135,seq8133__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8178 = arguments.length;
var i__7485__auto___8179 = (0);
while(true){
if((i__7485__auto___8179 < len__7484__auto___8178)){
args__7491__auto__.push((arguments[i__7485__auto___8179]));

var G__8180 = (i__7485__auto___8179 + (1));
i__7485__auto___8179 = G__8180;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__8141_8181 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_8182 = cljs.core.nth.call(null,vec__8141_8181,(0),null);
var selector_8183 = cljs.core.nth.call(null,vec__8141_8181,(1),null);
var seq__8144_8184 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__8151_8185 = null;
var count__8152_8186 = (0);
var i__8153_8187 = (0);
while(true){
if((i__8153_8187 < count__8152_8186)){
var vec__8160_8188 = cljs.core._nth.call(null,chunk__8151_8185,i__8153_8187);
var orig_type_8189 = cljs.core.nth.call(null,vec__8160_8188,(0),null);
var f_8190 = cljs.core.nth.call(null,vec__8160_8188,(1),null);
var seq__8154_8191 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8189,cljs.core.PersistentArrayMap.fromArray([orig_type_8189,cljs.core.identity], true, false)));
var chunk__8156_8192 = null;
var count__8157_8193 = (0);
var i__8158_8194 = (0);
while(true){
if((i__8158_8194 < count__8157_8193)){
var vec__8163_8195 = cljs.core._nth.call(null,chunk__8156_8192,i__8158_8194);
var actual_type_8196 = cljs.core.nth.call(null,vec__8163_8195,(0),null);
var factory_8197 = cljs.core.nth.call(null,vec__8163_8195,(1),null);
var canonical_f_8198 = (cljs.core.truth_(selector_8183)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8182,selector_8183):cljs.core.identity).call(null,factory_8197.call(null,f_8190));
dommy.core.update_event_listeners_BANG_.call(null,elem_8182,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8183,actual_type_8196,f_8190], null),canonical_f_8198);

if(cljs.core.truth_(elem_8182.addEventListener)){
elem_8182.addEventListener(cljs.core.name.call(null,actual_type_8196),canonical_f_8198);
} else {
elem_8182.attachEvent(cljs.core.name.call(null,actual_type_8196),canonical_f_8198);
}

var G__8199 = seq__8154_8191;
var G__8200 = chunk__8156_8192;
var G__8201 = count__8157_8193;
var G__8202 = (i__8158_8194 + (1));
seq__8154_8191 = G__8199;
chunk__8156_8192 = G__8200;
count__8157_8193 = G__8201;
i__8158_8194 = G__8202;
continue;
} else {
var temp__4657__auto___8203 = cljs.core.seq.call(null,seq__8154_8191);
if(temp__4657__auto___8203){
var seq__8154_8204__$1 = temp__4657__auto___8203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8154_8204__$1)){
var c__7220__auto___8205 = cljs.core.chunk_first.call(null,seq__8154_8204__$1);
var G__8206 = cljs.core.chunk_rest.call(null,seq__8154_8204__$1);
var G__8207 = c__7220__auto___8205;
var G__8208 = cljs.core.count.call(null,c__7220__auto___8205);
var G__8209 = (0);
seq__8154_8191 = G__8206;
chunk__8156_8192 = G__8207;
count__8157_8193 = G__8208;
i__8158_8194 = G__8209;
continue;
} else {
var vec__8166_8210 = cljs.core.first.call(null,seq__8154_8204__$1);
var actual_type_8211 = cljs.core.nth.call(null,vec__8166_8210,(0),null);
var factory_8212 = cljs.core.nth.call(null,vec__8166_8210,(1),null);
var canonical_f_8213 = (cljs.core.truth_(selector_8183)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8182,selector_8183):cljs.core.identity).call(null,factory_8212.call(null,f_8190));
dommy.core.update_event_listeners_BANG_.call(null,elem_8182,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8183,actual_type_8211,f_8190], null),canonical_f_8213);

if(cljs.core.truth_(elem_8182.addEventListener)){
elem_8182.addEventListener(cljs.core.name.call(null,actual_type_8211),canonical_f_8213);
} else {
elem_8182.attachEvent(cljs.core.name.call(null,actual_type_8211),canonical_f_8213);
}

var G__8214 = cljs.core.next.call(null,seq__8154_8204__$1);
var G__8215 = null;
var G__8216 = (0);
var G__8217 = (0);
seq__8154_8191 = G__8214;
chunk__8156_8192 = G__8215;
count__8157_8193 = G__8216;
i__8158_8194 = G__8217;
continue;
}
} else {
}
}
break;
}

var G__8218 = seq__8144_8184;
var G__8219 = chunk__8151_8185;
var G__8220 = count__8152_8186;
var G__8221 = (i__8153_8187 + (1));
seq__8144_8184 = G__8218;
chunk__8151_8185 = G__8219;
count__8152_8186 = G__8220;
i__8153_8187 = G__8221;
continue;
} else {
var temp__4657__auto___8222 = cljs.core.seq.call(null,seq__8144_8184);
if(temp__4657__auto___8222){
var seq__8144_8223__$1 = temp__4657__auto___8222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8144_8223__$1)){
var c__7220__auto___8224 = cljs.core.chunk_first.call(null,seq__8144_8223__$1);
var G__8225 = cljs.core.chunk_rest.call(null,seq__8144_8223__$1);
var G__8226 = c__7220__auto___8224;
var G__8227 = cljs.core.count.call(null,c__7220__auto___8224);
var G__8228 = (0);
seq__8144_8184 = G__8225;
chunk__8151_8185 = G__8226;
count__8152_8186 = G__8227;
i__8153_8187 = G__8228;
continue;
} else {
var vec__8169_8229 = cljs.core.first.call(null,seq__8144_8223__$1);
var orig_type_8230 = cljs.core.nth.call(null,vec__8169_8229,(0),null);
var f_8231 = cljs.core.nth.call(null,vec__8169_8229,(1),null);
var seq__8145_8232 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8230,cljs.core.PersistentArrayMap.fromArray([orig_type_8230,cljs.core.identity], true, false)));
var chunk__8147_8233 = null;
var count__8148_8234 = (0);
var i__8149_8235 = (0);
while(true){
if((i__8149_8235 < count__8148_8234)){
var vec__8172_8236 = cljs.core._nth.call(null,chunk__8147_8233,i__8149_8235);
var actual_type_8237 = cljs.core.nth.call(null,vec__8172_8236,(0),null);
var factory_8238 = cljs.core.nth.call(null,vec__8172_8236,(1),null);
var canonical_f_8239 = (cljs.core.truth_(selector_8183)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8182,selector_8183):cljs.core.identity).call(null,factory_8238.call(null,f_8231));
dommy.core.update_event_listeners_BANG_.call(null,elem_8182,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8183,actual_type_8237,f_8231], null),canonical_f_8239);

if(cljs.core.truth_(elem_8182.addEventListener)){
elem_8182.addEventListener(cljs.core.name.call(null,actual_type_8237),canonical_f_8239);
} else {
elem_8182.attachEvent(cljs.core.name.call(null,actual_type_8237),canonical_f_8239);
}

var G__8240 = seq__8145_8232;
var G__8241 = chunk__8147_8233;
var G__8242 = count__8148_8234;
var G__8243 = (i__8149_8235 + (1));
seq__8145_8232 = G__8240;
chunk__8147_8233 = G__8241;
count__8148_8234 = G__8242;
i__8149_8235 = G__8243;
continue;
} else {
var temp__4657__auto___8244__$1 = cljs.core.seq.call(null,seq__8145_8232);
if(temp__4657__auto___8244__$1){
var seq__8145_8245__$1 = temp__4657__auto___8244__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8145_8245__$1)){
var c__7220__auto___8246 = cljs.core.chunk_first.call(null,seq__8145_8245__$1);
var G__8247 = cljs.core.chunk_rest.call(null,seq__8145_8245__$1);
var G__8248 = c__7220__auto___8246;
var G__8249 = cljs.core.count.call(null,c__7220__auto___8246);
var G__8250 = (0);
seq__8145_8232 = G__8247;
chunk__8147_8233 = G__8248;
count__8148_8234 = G__8249;
i__8149_8235 = G__8250;
continue;
} else {
var vec__8175_8251 = cljs.core.first.call(null,seq__8145_8245__$1);
var actual_type_8252 = cljs.core.nth.call(null,vec__8175_8251,(0),null);
var factory_8253 = cljs.core.nth.call(null,vec__8175_8251,(1),null);
var canonical_f_8254 = (cljs.core.truth_(selector_8183)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8182,selector_8183):cljs.core.identity).call(null,factory_8253.call(null,f_8231));
dommy.core.update_event_listeners_BANG_.call(null,elem_8182,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8183,actual_type_8252,f_8231], null),canonical_f_8254);

if(cljs.core.truth_(elem_8182.addEventListener)){
elem_8182.addEventListener(cljs.core.name.call(null,actual_type_8252),canonical_f_8254);
} else {
elem_8182.attachEvent(cljs.core.name.call(null,actual_type_8252),canonical_f_8254);
}

var G__8255 = cljs.core.next.call(null,seq__8145_8245__$1);
var G__8256 = null;
var G__8257 = (0);
var G__8258 = (0);
seq__8145_8232 = G__8255;
chunk__8147_8233 = G__8256;
count__8148_8234 = G__8257;
i__8149_8235 = G__8258;
continue;
}
} else {
}
}
break;
}

var G__8259 = cljs.core.next.call(null,seq__8144_8223__$1);
var G__8260 = null;
var G__8261 = (0);
var G__8262 = (0);
seq__8144_8184 = G__8259;
chunk__8151_8185 = G__8260;
count__8152_8186 = G__8261;
i__8153_8187 = G__8262;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq8139){
var G__8140 = cljs.core.first.call(null,seq8139);
var seq8139__$1 = cljs.core.next.call(null,seq8139);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8140,seq8139__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8302 = arguments.length;
var i__7485__auto___8303 = (0);
while(true){
if((i__7485__auto___8303 < len__7484__auto___8302)){
args__7491__auto__.push((arguments[i__7485__auto___8303]));

var G__8304 = (i__7485__auto___8303 + (1));
i__7485__auto___8303 = G__8304;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__8265_8305 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_8306 = cljs.core.nth.call(null,vec__8265_8305,(0),null);
var selector_8307 = cljs.core.nth.call(null,vec__8265_8305,(1),null);
var seq__8268_8308 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__8275_8309 = null;
var count__8276_8310 = (0);
var i__8277_8311 = (0);
while(true){
if((i__8277_8311 < count__8276_8310)){
var vec__8284_8312 = cljs.core._nth.call(null,chunk__8275_8309,i__8277_8311);
var orig_type_8313 = cljs.core.nth.call(null,vec__8284_8312,(0),null);
var f_8314 = cljs.core.nth.call(null,vec__8284_8312,(1),null);
var seq__8278_8315 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8313,cljs.core.PersistentArrayMap.fromArray([orig_type_8313,cljs.core.identity], true, false)));
var chunk__8280_8316 = null;
var count__8281_8317 = (0);
var i__8282_8318 = (0);
while(true){
if((i__8282_8318 < count__8281_8317)){
var vec__8287_8319 = cljs.core._nth.call(null,chunk__8280_8316,i__8282_8318);
var actual_type_8320 = cljs.core.nth.call(null,vec__8287_8319,(0),null);
var __8321 = cljs.core.nth.call(null,vec__8287_8319,(1),null);
var keys_8322 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8307,actual_type_8320,f_8314], null);
var canonical_f_8323 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8306),keys_8322);
dommy.core.update_event_listeners_BANG_.call(null,elem_8306,dommy.utils.dissoc_in,keys_8322);

if(cljs.core.truth_(elem_8306.removeEventListener)){
elem_8306.removeEventListener(cljs.core.name.call(null,actual_type_8320),canonical_f_8323);
} else {
elem_8306.detachEvent(cljs.core.name.call(null,actual_type_8320),canonical_f_8323);
}

var G__8324 = seq__8278_8315;
var G__8325 = chunk__8280_8316;
var G__8326 = count__8281_8317;
var G__8327 = (i__8282_8318 + (1));
seq__8278_8315 = G__8324;
chunk__8280_8316 = G__8325;
count__8281_8317 = G__8326;
i__8282_8318 = G__8327;
continue;
} else {
var temp__4657__auto___8328 = cljs.core.seq.call(null,seq__8278_8315);
if(temp__4657__auto___8328){
var seq__8278_8329__$1 = temp__4657__auto___8328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8278_8329__$1)){
var c__7220__auto___8330 = cljs.core.chunk_first.call(null,seq__8278_8329__$1);
var G__8331 = cljs.core.chunk_rest.call(null,seq__8278_8329__$1);
var G__8332 = c__7220__auto___8330;
var G__8333 = cljs.core.count.call(null,c__7220__auto___8330);
var G__8334 = (0);
seq__8278_8315 = G__8331;
chunk__8280_8316 = G__8332;
count__8281_8317 = G__8333;
i__8282_8318 = G__8334;
continue;
} else {
var vec__8290_8335 = cljs.core.first.call(null,seq__8278_8329__$1);
var actual_type_8336 = cljs.core.nth.call(null,vec__8290_8335,(0),null);
var __8337 = cljs.core.nth.call(null,vec__8290_8335,(1),null);
var keys_8338 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8307,actual_type_8336,f_8314], null);
var canonical_f_8339 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8306),keys_8338);
dommy.core.update_event_listeners_BANG_.call(null,elem_8306,dommy.utils.dissoc_in,keys_8338);

if(cljs.core.truth_(elem_8306.removeEventListener)){
elem_8306.removeEventListener(cljs.core.name.call(null,actual_type_8336),canonical_f_8339);
} else {
elem_8306.detachEvent(cljs.core.name.call(null,actual_type_8336),canonical_f_8339);
}

var G__8340 = cljs.core.next.call(null,seq__8278_8329__$1);
var G__8341 = null;
var G__8342 = (0);
var G__8343 = (0);
seq__8278_8315 = G__8340;
chunk__8280_8316 = G__8341;
count__8281_8317 = G__8342;
i__8282_8318 = G__8343;
continue;
}
} else {
}
}
break;
}

var G__8344 = seq__8268_8308;
var G__8345 = chunk__8275_8309;
var G__8346 = count__8276_8310;
var G__8347 = (i__8277_8311 + (1));
seq__8268_8308 = G__8344;
chunk__8275_8309 = G__8345;
count__8276_8310 = G__8346;
i__8277_8311 = G__8347;
continue;
} else {
var temp__4657__auto___8348 = cljs.core.seq.call(null,seq__8268_8308);
if(temp__4657__auto___8348){
var seq__8268_8349__$1 = temp__4657__auto___8348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8268_8349__$1)){
var c__7220__auto___8350 = cljs.core.chunk_first.call(null,seq__8268_8349__$1);
var G__8351 = cljs.core.chunk_rest.call(null,seq__8268_8349__$1);
var G__8352 = c__7220__auto___8350;
var G__8353 = cljs.core.count.call(null,c__7220__auto___8350);
var G__8354 = (0);
seq__8268_8308 = G__8351;
chunk__8275_8309 = G__8352;
count__8276_8310 = G__8353;
i__8277_8311 = G__8354;
continue;
} else {
var vec__8293_8355 = cljs.core.first.call(null,seq__8268_8349__$1);
var orig_type_8356 = cljs.core.nth.call(null,vec__8293_8355,(0),null);
var f_8357 = cljs.core.nth.call(null,vec__8293_8355,(1),null);
var seq__8269_8358 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8356,cljs.core.PersistentArrayMap.fromArray([orig_type_8356,cljs.core.identity], true, false)));
var chunk__8271_8359 = null;
var count__8272_8360 = (0);
var i__8273_8361 = (0);
while(true){
if((i__8273_8361 < count__8272_8360)){
var vec__8296_8362 = cljs.core._nth.call(null,chunk__8271_8359,i__8273_8361);
var actual_type_8363 = cljs.core.nth.call(null,vec__8296_8362,(0),null);
var __8364 = cljs.core.nth.call(null,vec__8296_8362,(1),null);
var keys_8365 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8307,actual_type_8363,f_8357], null);
var canonical_f_8366 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8306),keys_8365);
dommy.core.update_event_listeners_BANG_.call(null,elem_8306,dommy.utils.dissoc_in,keys_8365);

if(cljs.core.truth_(elem_8306.removeEventListener)){
elem_8306.removeEventListener(cljs.core.name.call(null,actual_type_8363),canonical_f_8366);
} else {
elem_8306.detachEvent(cljs.core.name.call(null,actual_type_8363),canonical_f_8366);
}

var G__8367 = seq__8269_8358;
var G__8368 = chunk__8271_8359;
var G__8369 = count__8272_8360;
var G__8370 = (i__8273_8361 + (1));
seq__8269_8358 = G__8367;
chunk__8271_8359 = G__8368;
count__8272_8360 = G__8369;
i__8273_8361 = G__8370;
continue;
} else {
var temp__4657__auto___8371__$1 = cljs.core.seq.call(null,seq__8269_8358);
if(temp__4657__auto___8371__$1){
var seq__8269_8372__$1 = temp__4657__auto___8371__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8269_8372__$1)){
var c__7220__auto___8373 = cljs.core.chunk_first.call(null,seq__8269_8372__$1);
var G__8374 = cljs.core.chunk_rest.call(null,seq__8269_8372__$1);
var G__8375 = c__7220__auto___8373;
var G__8376 = cljs.core.count.call(null,c__7220__auto___8373);
var G__8377 = (0);
seq__8269_8358 = G__8374;
chunk__8271_8359 = G__8375;
count__8272_8360 = G__8376;
i__8273_8361 = G__8377;
continue;
} else {
var vec__8299_8378 = cljs.core.first.call(null,seq__8269_8372__$1);
var actual_type_8379 = cljs.core.nth.call(null,vec__8299_8378,(0),null);
var __8380 = cljs.core.nth.call(null,vec__8299_8378,(1),null);
var keys_8381 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8307,actual_type_8379,f_8357], null);
var canonical_f_8382 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8306),keys_8381);
dommy.core.update_event_listeners_BANG_.call(null,elem_8306,dommy.utils.dissoc_in,keys_8381);

if(cljs.core.truth_(elem_8306.removeEventListener)){
elem_8306.removeEventListener(cljs.core.name.call(null,actual_type_8379),canonical_f_8382);
} else {
elem_8306.detachEvent(cljs.core.name.call(null,actual_type_8379),canonical_f_8382);
}

var G__8383 = cljs.core.next.call(null,seq__8269_8372__$1);
var G__8384 = null;
var G__8385 = (0);
var G__8386 = (0);
seq__8269_8358 = G__8383;
chunk__8271_8359 = G__8384;
count__8272_8360 = G__8385;
i__8273_8361 = G__8386;
continue;
}
} else {
}
}
break;
}

var G__8387 = cljs.core.next.call(null,seq__8268_8349__$1);
var G__8388 = null;
var G__8389 = (0);
var G__8390 = (0);
seq__8268_8308 = G__8387;
chunk__8275_8309 = G__8388;
count__8276_8310 = G__8389;
i__8277_8311 = G__8390;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq8263){
var G__8264 = cljs.core.first.call(null,seq8263);
var seq8263__$1 = cljs.core.next.call(null,seq8263);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8264,seq8263__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___8406 = arguments.length;
var i__7485__auto___8407 = (0);
while(true){
if((i__7485__auto___8407 < len__7484__auto___8406)){
args__7491__auto__.push((arguments[i__7485__auto___8407]));

var G__8408 = (i__7485__auto___8407 + (1));
i__7485__auto___8407 = G__8408;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__8393_8409 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_8410 = cljs.core.nth.call(null,vec__8393_8409,(0),null);
var selector_8411 = cljs.core.nth.call(null,vec__8393_8409,(1),null);
var seq__8396_8412 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__8397_8413 = null;
var count__8398_8414 = (0);
var i__8399_8415 = (0);
while(true){
if((i__8399_8415 < count__8398_8414)){
var vec__8400_8416 = cljs.core._nth.call(null,chunk__8397_8413,i__8399_8415);
var type_8417 = cljs.core.nth.call(null,vec__8400_8416,(0),null);
var f_8418 = cljs.core.nth.call(null,vec__8400_8416,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_8417,((function (seq__8396_8412,chunk__8397_8413,count__8398_8414,i__8399_8415,vec__8400_8416,type_8417,f_8418,vec__8393_8409,elem_8410,selector_8411){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_8417,dommy$core$this_fn);

return f_8418.call(null,e);
});})(seq__8396_8412,chunk__8397_8413,count__8398_8414,i__8399_8415,vec__8400_8416,type_8417,f_8418,vec__8393_8409,elem_8410,selector_8411))
);

var G__8419 = seq__8396_8412;
var G__8420 = chunk__8397_8413;
var G__8421 = count__8398_8414;
var G__8422 = (i__8399_8415 + (1));
seq__8396_8412 = G__8419;
chunk__8397_8413 = G__8420;
count__8398_8414 = G__8421;
i__8399_8415 = G__8422;
continue;
} else {
var temp__4657__auto___8423 = cljs.core.seq.call(null,seq__8396_8412);
if(temp__4657__auto___8423){
var seq__8396_8424__$1 = temp__4657__auto___8423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8396_8424__$1)){
var c__7220__auto___8425 = cljs.core.chunk_first.call(null,seq__8396_8424__$1);
var G__8426 = cljs.core.chunk_rest.call(null,seq__8396_8424__$1);
var G__8427 = c__7220__auto___8425;
var G__8428 = cljs.core.count.call(null,c__7220__auto___8425);
var G__8429 = (0);
seq__8396_8412 = G__8426;
chunk__8397_8413 = G__8427;
count__8398_8414 = G__8428;
i__8399_8415 = G__8429;
continue;
} else {
var vec__8403_8430 = cljs.core.first.call(null,seq__8396_8424__$1);
var type_8431 = cljs.core.nth.call(null,vec__8403_8430,(0),null);
var f_8432 = cljs.core.nth.call(null,vec__8403_8430,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_8431,((function (seq__8396_8412,chunk__8397_8413,count__8398_8414,i__8399_8415,vec__8403_8430,type_8431,f_8432,seq__8396_8424__$1,temp__4657__auto___8423,vec__8393_8409,elem_8410,selector_8411){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_8431,dommy$core$this_fn);

return f_8432.call(null,e);
});})(seq__8396_8412,chunk__8397_8413,count__8398_8414,i__8399_8415,vec__8403_8430,type_8431,f_8432,seq__8396_8424__$1,temp__4657__auto___8423,vec__8393_8409,elem_8410,selector_8411))
);

var G__8433 = cljs.core.next.call(null,seq__8396_8424__$1);
var G__8434 = null;
var G__8435 = (0);
var G__8436 = (0);
seq__8396_8412 = G__8433;
chunk__8397_8413 = G__8434;
count__8398_8414 = G__8435;
i__8399_8415 = G__8436;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq8391){
var G__8392 = cljs.core.first.call(null,seq8391);
var seq8391__$1 = cljs.core.next.call(null,seq8391);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8392,seq8391__$1);
});


//# sourceMappingURL=core.js.map