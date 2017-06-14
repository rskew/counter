// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
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
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args12369 = [];
var len__7484__auto___12372 = arguments.length;
var i__7485__auto___12373 = (0);
while(true){
if((i__7485__auto___12373 < len__7484__auto___12372)){
args12369.push((arguments[i__7485__auto___12373]));

var G__12374 = (i__7485__auto___12373 + (1));
i__7485__auto___12373 = G__12374;
continue;
} else {
}
break;
}

var G__12371 = args12369.length;
switch (G__12371) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12369.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index(class_name,c__$1);
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
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.cst$kw$display) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$top,r.top,cljs.core.cst$kw$bottom,r.bottom,cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$right,r.right,cljs.core.cst$kw$width,r.width,cljs.core.cst$kw$height,r.height], null);
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
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args12376 = [];
var len__7484__auto___12379 = arguments.length;
var i__7485__auto___12380 = (0);
while(true){
if((i__7485__auto___12380 < len__7484__auto___12379)){
args12376.push((arguments[i__7485__auto___12380]));

var G__12381 = (i__7485__auto___12380 + (1));
i__7485__auto___12380 = G__12381;
continue;
} else {
}
break;
}

var G__12378 = args12376.length;
switch (G__12378) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12376.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args12384 = [];
var len__7484__auto___12387 = arguments.length;
var i__7485__auto___12388 = (0);
while(true){
if((i__7485__auto___12388 < len__7484__auto___12387)){
args12384.push((arguments[i__7485__auto___12388]));

var G__12389 = (i__7485__auto___12388 + (1));
i__7485__auto___12388 = G__12389;
continue;
} else {
}
break;
}

var G__12386 = args12384.length;
switch (G__12386) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12384.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__12383_SHARP_){
return !((p1__12383_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
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
var len__7484__auto___12403 = arguments.length;
var i__7485__auto___12404 = (0);
while(true){
if((i__7485__auto___12404 < len__7484__auto___12403)){
args__7491__auto__.push((arguments[i__7485__auto___12404]));

var G__12405 = (i__7485__auto___12404 + (1));
i__7485__auto___12404 = G__12405;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__12393_12406 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__12394_12407 = null;
var count__12395_12408 = (0);
var i__12396_12409 = (0);
while(true){
if((i__12396_12409 < count__12395_12408)){
var vec__12397_12410 = chunk__12394_12407.cljs$core$IIndexed$_nth$arity$2(null,i__12396_12409);
var k_12411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12397_12410,(0),null);
var v_12412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12397_12410,(1),null);
style.setProperty(dommy.utils.as_str(k_12411),v_12412);

var G__12413 = seq__12393_12406;
var G__12414 = chunk__12394_12407;
var G__12415 = count__12395_12408;
var G__12416 = (i__12396_12409 + (1));
seq__12393_12406 = G__12413;
chunk__12394_12407 = G__12414;
count__12395_12408 = G__12415;
i__12396_12409 = G__12416;
continue;
} else {
var temp__4657__auto___12417 = cljs.core.seq(seq__12393_12406);
if(temp__4657__auto___12417){
var seq__12393_12418__$1 = temp__4657__auto___12417;
if(cljs.core.chunked_seq_QMARK_(seq__12393_12418__$1)){
var c__7220__auto___12419 = cljs.core.chunk_first(seq__12393_12418__$1);
var G__12420 = cljs.core.chunk_rest(seq__12393_12418__$1);
var G__12421 = c__7220__auto___12419;
var G__12422 = cljs.core.count(c__7220__auto___12419);
var G__12423 = (0);
seq__12393_12406 = G__12420;
chunk__12394_12407 = G__12421;
count__12395_12408 = G__12422;
i__12396_12409 = G__12423;
continue;
} else {
var vec__12400_12424 = cljs.core.first(seq__12393_12418__$1);
var k_12425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12400_12424,(0),null);
var v_12426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12400_12424,(1),null);
style.setProperty(dommy.utils.as_str(k_12425),v_12426);

var G__12427 = cljs.core.next(seq__12393_12418__$1);
var G__12428 = null;
var G__12429 = (0);
var G__12430 = (0);
seq__12393_12406 = G__12427;
chunk__12394_12407 = G__12428;
count__12395_12408 = G__12429;
i__12396_12409 = G__12430;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq12391){
var G__12392 = cljs.core.first(seq12391);
var seq12391__$1 = cljs.core.next(seq12391);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12392,seq12391__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12437 = arguments.length;
var i__7485__auto___12438 = (0);
while(true){
if((i__7485__auto___12438 < len__7484__auto___12437)){
args__7491__auto__.push((arguments[i__7485__auto___12438]));

var G__12439 = (i__7485__auto___12438 + (1));
i__7485__auto___12438 = G__12439;
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
var seq__12433_12440 = cljs.core.seq(keywords);
var chunk__12434_12441 = null;
var count__12435_12442 = (0);
var i__12436_12443 = (0);
while(true){
if((i__12436_12443 < count__12435_12442)){
var kw_12444 = chunk__12434_12441.cljs$core$IIndexed$_nth$arity$2(null,i__12436_12443);
style.removeProperty(dommy.utils.as_str(kw_12444));

var G__12445 = seq__12433_12440;
var G__12446 = chunk__12434_12441;
var G__12447 = count__12435_12442;
var G__12448 = (i__12436_12443 + (1));
seq__12433_12440 = G__12445;
chunk__12434_12441 = G__12446;
count__12435_12442 = G__12447;
i__12436_12443 = G__12448;
continue;
} else {
var temp__4657__auto___12449 = cljs.core.seq(seq__12433_12440);
if(temp__4657__auto___12449){
var seq__12433_12450__$1 = temp__4657__auto___12449;
if(cljs.core.chunked_seq_QMARK_(seq__12433_12450__$1)){
var c__7220__auto___12451 = cljs.core.chunk_first(seq__12433_12450__$1);
var G__12452 = cljs.core.chunk_rest(seq__12433_12450__$1);
var G__12453 = c__7220__auto___12451;
var G__12454 = cljs.core.count(c__7220__auto___12451);
var G__12455 = (0);
seq__12433_12440 = G__12452;
chunk__12434_12441 = G__12453;
count__12435_12442 = G__12454;
i__12436_12443 = G__12455;
continue;
} else {
var kw_12456 = cljs.core.first(seq__12433_12450__$1);
style.removeProperty(dommy.utils.as_str(kw_12456));

var G__12457 = cljs.core.next(seq__12433_12450__$1);
var G__12458 = null;
var G__12459 = (0);
var G__12460 = (0);
seq__12433_12440 = G__12457;
chunk__12434_12441 = G__12458;
count__12435_12442 = G__12459;
i__12436_12443 = G__12460;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq12431){
var G__12432 = cljs.core.first(seq12431);
var seq12431__$1 = cljs.core.next(seq12431);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12432,seq12431__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12473 = arguments.length;
var i__7485__auto___12474 = (0);
while(true){
if((i__7485__auto___12474 < len__7484__auto___12473)){
args__7491__auto__.push((arguments[i__7485__auto___12474]));

var G__12475 = (i__7485__auto___12474 + (1));
i__7485__auto___12474 = G__12475;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__12463_12476 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__12464_12477 = null;
var count__12465_12478 = (0);
var i__12466_12479 = (0);
while(true){
if((i__12466_12479 < count__12465_12478)){
var vec__12467_12480 = chunk__12464_12477.cljs$core$IIndexed$_nth$arity$2(null,i__12466_12479);
var k_12481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12467_12480,(0),null);
var v_12482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12467_12480,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_12481,[cljs.core.str(v_12482),cljs.core.str("px")].join('')], 0));

var G__12483 = seq__12463_12476;
var G__12484 = chunk__12464_12477;
var G__12485 = count__12465_12478;
var G__12486 = (i__12466_12479 + (1));
seq__12463_12476 = G__12483;
chunk__12464_12477 = G__12484;
count__12465_12478 = G__12485;
i__12466_12479 = G__12486;
continue;
} else {
var temp__4657__auto___12487 = cljs.core.seq(seq__12463_12476);
if(temp__4657__auto___12487){
var seq__12463_12488__$1 = temp__4657__auto___12487;
if(cljs.core.chunked_seq_QMARK_(seq__12463_12488__$1)){
var c__7220__auto___12489 = cljs.core.chunk_first(seq__12463_12488__$1);
var G__12490 = cljs.core.chunk_rest(seq__12463_12488__$1);
var G__12491 = c__7220__auto___12489;
var G__12492 = cljs.core.count(c__7220__auto___12489);
var G__12493 = (0);
seq__12463_12476 = G__12490;
chunk__12464_12477 = G__12491;
count__12465_12478 = G__12492;
i__12466_12479 = G__12493;
continue;
} else {
var vec__12470_12494 = cljs.core.first(seq__12463_12488__$1);
var k_12495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12470_12494,(0),null);
var v_12496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12470_12494,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([k_12495,[cljs.core.str(v_12496),cljs.core.str("px")].join('')], 0));

var G__12497 = cljs.core.next(seq__12463_12488__$1);
var G__12498 = null;
var G__12499 = (0);
var G__12500 = (0);
seq__12463_12476 = G__12497;
chunk__12464_12477 = G__12498;
count__12465_12478 = G__12499;
i__12466_12479 = G__12500;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq12461){
var G__12462 = cljs.core.first(seq12461);
var seq12461__$1 = cljs.core.next(seq12461);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12462,seq12461__$1);
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
var args12501 = [];
var len__7484__auto___12520 = arguments.length;
var i__7485__auto___12521 = (0);
while(true){
if((i__7485__auto___12521 < len__7484__auto___12520)){
args12501.push((arguments[i__7485__auto___12521]));

var G__12522 = (i__7485__auto___12521 + (1));
i__7485__auto___12521 = G__12522;
continue;
} else {
}
break;
}

var G__12507 = args12501.length;
switch (G__12507) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12501.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7503__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__12508 = elem;
(G__12508[k__$1] = v);

return G__12508;
} else {
var G__12509 = elem;
G__12509.setAttribute(k__$1,v);

return G__12509;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__12510_12524 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__12511_12525 = null;
var count__12512_12526 = (0);
var i__12513_12527 = (0);
while(true){
if((i__12513_12527 < count__12512_12526)){
var vec__12514_12528 = chunk__12511_12525.cljs$core$IIndexed$_nth$arity$2(null,i__12513_12527);
var k_12529__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12514_12528,(0),null);
var v_12530__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12514_12528,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_12529__$1,v_12530__$1);

var G__12531 = seq__12510_12524;
var G__12532 = chunk__12511_12525;
var G__12533 = count__12512_12526;
var G__12534 = (i__12513_12527 + (1));
seq__12510_12524 = G__12531;
chunk__12511_12525 = G__12532;
count__12512_12526 = G__12533;
i__12513_12527 = G__12534;
continue;
} else {
var temp__4657__auto___12535 = cljs.core.seq(seq__12510_12524);
if(temp__4657__auto___12535){
var seq__12510_12536__$1 = temp__4657__auto___12535;
if(cljs.core.chunked_seq_QMARK_(seq__12510_12536__$1)){
var c__7220__auto___12537 = cljs.core.chunk_first(seq__12510_12536__$1);
var G__12538 = cljs.core.chunk_rest(seq__12510_12536__$1);
var G__12539 = c__7220__auto___12537;
var G__12540 = cljs.core.count(c__7220__auto___12537);
var G__12541 = (0);
seq__12510_12524 = G__12538;
chunk__12511_12525 = G__12539;
count__12512_12526 = G__12540;
i__12513_12527 = G__12541;
continue;
} else {
var vec__12517_12542 = cljs.core.first(seq__12510_12536__$1);
var k_12543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12517_12542,(0),null);
var v_12544__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12517_12542,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_12543__$1,v_12544__$1);

var G__12545 = cljs.core.next(seq__12510_12536__$1);
var G__12546 = null;
var G__12547 = (0);
var G__12548 = (0);
seq__12510_12524 = G__12545;
chunk__12511_12525 = G__12546;
count__12512_12526 = G__12547;
i__12513_12527 = G__12548;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq12502){
var G__12503 = cljs.core.first(seq12502);
var seq12502__$1 = cljs.core.next(seq12502);
var G__12504 = cljs.core.first(seq12502__$1);
var seq12502__$2 = cljs.core.next(seq12502__$1);
var G__12505 = cljs.core.first(seq12502__$2);
var seq12502__$3 = cljs.core.next(seq12502__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12503,G__12504,G__12505,seq12502__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args12549 = [];
var len__7484__auto___12559 = arguments.length;
var i__7485__auto___12560 = (0);
while(true){
if((i__7485__auto___12560 < len__7484__auto___12559)){
args12549.push((arguments[i__7485__auto___12560]));

var G__12561 = (i__7485__auto___12560 + (1));
i__7485__auto___12560 = G__12561;
continue;
} else {
}
break;
}

var G__12554 = args12549.length;
switch (G__12554) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12549.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_12563__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_12563__$1))){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_12563__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__12555_12564 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__12556_12565 = null;
var count__12557_12566 = (0);
var i__12558_12567 = (0);
while(true){
if((i__12558_12567 < count__12557_12566)){
var k_12568__$1 = chunk__12556_12565.cljs$core$IIndexed$_nth$arity$2(null,i__12558_12567);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_12568__$1);

var G__12569 = seq__12555_12564;
var G__12570 = chunk__12556_12565;
var G__12571 = count__12557_12566;
var G__12572 = (i__12558_12567 + (1));
seq__12555_12564 = G__12569;
chunk__12556_12565 = G__12570;
count__12557_12566 = G__12571;
i__12558_12567 = G__12572;
continue;
} else {
var temp__4657__auto___12573 = cljs.core.seq(seq__12555_12564);
if(temp__4657__auto___12573){
var seq__12555_12574__$1 = temp__4657__auto___12573;
if(cljs.core.chunked_seq_QMARK_(seq__12555_12574__$1)){
var c__7220__auto___12575 = cljs.core.chunk_first(seq__12555_12574__$1);
var G__12576 = cljs.core.chunk_rest(seq__12555_12574__$1);
var G__12577 = c__7220__auto___12575;
var G__12578 = cljs.core.count(c__7220__auto___12575);
var G__12579 = (0);
seq__12555_12564 = G__12576;
chunk__12556_12565 = G__12577;
count__12557_12566 = G__12578;
i__12558_12567 = G__12579;
continue;
} else {
var k_12580__$1 = cljs.core.first(seq__12555_12574__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_12580__$1);

var G__12581 = cljs.core.next(seq__12555_12574__$1);
var G__12582 = null;
var G__12583 = (0);
var G__12584 = (0);
seq__12555_12564 = G__12581;
chunk__12556_12565 = G__12582;
count__12557_12566 = G__12583;
i__12558_12567 = G__12584;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq12550){
var G__12551 = cljs.core.first(seq12550);
var seq12550__$1 = cljs.core.next(seq12550);
var G__12552 = cljs.core.first(seq12550__$1);
var seq12550__$2 = cljs.core.next(seq12550__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12551,G__12552,seq12550__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args12585 = [];
var len__7484__auto___12588 = arguments.length;
var i__7485__auto___12589 = (0);
while(true){
if((i__7485__auto___12589 < len__7484__auto___12588)){
args12585.push((arguments[i__7485__auto___12589]));

var G__12590 = (i__7485__auto___12589 + (1));
i__7485__auto___12589 = G__12590;
continue;
} else {
}
break;
}

var G__12587 = args12585.length;
switch (G__12587) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12585.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args12592 = [];
var len__7484__auto___12610 = arguments.length;
var i__7485__auto___12611 = (0);
while(true){
if((i__7485__auto___12611 < len__7484__auto___12610)){
args12592.push((arguments[i__7485__auto___12611]));

var G__12612 = (i__7485__auto___12611 + (1));
i__7485__auto___12611 = G__12612;
continue;
} else {
}
break;
}

var G__12597 = args12592.length;
switch (G__12597) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12592.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4655__auto___12614 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___12614)){
var class_list_12615 = temp__4655__auto___12614;
var seq__12598_12616 = cljs.core.seq(classes__$1);
var chunk__12599_12617 = null;
var count__12600_12618 = (0);
var i__12601_12619 = (0);
while(true){
if((i__12601_12619 < count__12600_12618)){
var c_12620 = chunk__12599_12617.cljs$core$IIndexed$_nth$arity$2(null,i__12601_12619);
class_list_12615.add(c_12620);

var G__12621 = seq__12598_12616;
var G__12622 = chunk__12599_12617;
var G__12623 = count__12600_12618;
var G__12624 = (i__12601_12619 + (1));
seq__12598_12616 = G__12621;
chunk__12599_12617 = G__12622;
count__12600_12618 = G__12623;
i__12601_12619 = G__12624;
continue;
} else {
var temp__4657__auto___12625 = cljs.core.seq(seq__12598_12616);
if(temp__4657__auto___12625){
var seq__12598_12626__$1 = temp__4657__auto___12625;
if(cljs.core.chunked_seq_QMARK_(seq__12598_12626__$1)){
var c__7220__auto___12627 = cljs.core.chunk_first(seq__12598_12626__$1);
var G__12628 = cljs.core.chunk_rest(seq__12598_12626__$1);
var G__12629 = c__7220__auto___12627;
var G__12630 = cljs.core.count(c__7220__auto___12627);
var G__12631 = (0);
seq__12598_12616 = G__12628;
chunk__12599_12617 = G__12629;
count__12600_12618 = G__12630;
i__12601_12619 = G__12631;
continue;
} else {
var c_12632 = cljs.core.first(seq__12598_12626__$1);
class_list_12615.add(c_12632);

var G__12633 = cljs.core.next(seq__12598_12626__$1);
var G__12634 = null;
var G__12635 = (0);
var G__12636 = (0);
seq__12598_12616 = G__12633;
chunk__12599_12617 = G__12634;
count__12600_12618 = G__12635;
i__12601_12619 = G__12636;
continue;
}
} else {
}
}
break;
}
} else {
var seq__12602_12637 = cljs.core.seq(classes__$1);
var chunk__12603_12638 = null;
var count__12604_12639 = (0);
var i__12605_12640 = (0);
while(true){
if((i__12605_12640 < count__12604_12639)){
var c_12641 = chunk__12603_12638.cljs$core$IIndexed$_nth$arity$2(null,i__12605_12640);
var class_name_12642 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_12642,c_12641))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_12642 === ""))?c_12641:[cljs.core.str(class_name_12642),cljs.core.str(" "),cljs.core.str(c_12641)].join('')));
}

var G__12643 = seq__12602_12637;
var G__12644 = chunk__12603_12638;
var G__12645 = count__12604_12639;
var G__12646 = (i__12605_12640 + (1));
seq__12602_12637 = G__12643;
chunk__12603_12638 = G__12644;
count__12604_12639 = G__12645;
i__12605_12640 = G__12646;
continue;
} else {
var temp__4657__auto___12647 = cljs.core.seq(seq__12602_12637);
if(temp__4657__auto___12647){
var seq__12602_12648__$1 = temp__4657__auto___12647;
if(cljs.core.chunked_seq_QMARK_(seq__12602_12648__$1)){
var c__7220__auto___12649 = cljs.core.chunk_first(seq__12602_12648__$1);
var G__12650 = cljs.core.chunk_rest(seq__12602_12648__$1);
var G__12651 = c__7220__auto___12649;
var G__12652 = cljs.core.count(c__7220__auto___12649);
var G__12653 = (0);
seq__12602_12637 = G__12650;
chunk__12603_12638 = G__12651;
count__12604_12639 = G__12652;
i__12605_12640 = G__12653;
continue;
} else {
var c_12654 = cljs.core.first(seq__12602_12648__$1);
var class_name_12655 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_12655,c_12654))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_12655 === ""))?c_12654:[cljs.core.str(class_name_12655),cljs.core.str(" "),cljs.core.str(c_12654)].join('')));
}

var G__12656 = cljs.core.next(seq__12602_12648__$1);
var G__12657 = null;
var G__12658 = (0);
var G__12659 = (0);
seq__12602_12637 = G__12656;
chunk__12603_12638 = G__12657;
count__12604_12639 = G__12658;
i__12605_12640 = G__12659;
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
var seq__12606_12660 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__12607_12661 = null;
var count__12608_12662 = (0);
var i__12609_12663 = (0);
while(true){
if((i__12609_12663 < count__12608_12662)){
var c_12664 = chunk__12607_12661.cljs$core$IIndexed$_nth$arity$2(null,i__12609_12663);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_12664);

var G__12665 = seq__12606_12660;
var G__12666 = chunk__12607_12661;
var G__12667 = count__12608_12662;
var G__12668 = (i__12609_12663 + (1));
seq__12606_12660 = G__12665;
chunk__12607_12661 = G__12666;
count__12608_12662 = G__12667;
i__12609_12663 = G__12668;
continue;
} else {
var temp__4657__auto___12669 = cljs.core.seq(seq__12606_12660);
if(temp__4657__auto___12669){
var seq__12606_12670__$1 = temp__4657__auto___12669;
if(cljs.core.chunked_seq_QMARK_(seq__12606_12670__$1)){
var c__7220__auto___12671 = cljs.core.chunk_first(seq__12606_12670__$1);
var G__12672 = cljs.core.chunk_rest(seq__12606_12670__$1);
var G__12673 = c__7220__auto___12671;
var G__12674 = cljs.core.count(c__7220__auto___12671);
var G__12675 = (0);
seq__12606_12660 = G__12672;
chunk__12607_12661 = G__12673;
count__12608_12662 = G__12674;
i__12609_12663 = G__12675;
continue;
} else {
var c_12676 = cljs.core.first(seq__12606_12670__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_12676);

var G__12677 = cljs.core.next(seq__12606_12670__$1);
var G__12678 = null;
var G__12679 = (0);
var G__12680 = (0);
seq__12606_12660 = G__12677;
chunk__12607_12661 = G__12678;
count__12608_12662 = G__12679;
i__12609_12663 = G__12680;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq12593){
var G__12594 = cljs.core.first(seq12593);
var seq12593__$1 = cljs.core.next(seq12593);
var G__12595 = cljs.core.first(seq12593__$1);
var seq12593__$2 = cljs.core.next(seq12593__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12594,G__12595,seq12593__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args12681 = [];
var len__7484__auto___12691 = arguments.length;
var i__7485__auto___12692 = (0);
while(true){
if((i__7485__auto___12692 < len__7484__auto___12691)){
args12681.push((arguments[i__7485__auto___12692]));

var G__12693 = (i__7485__auto___12692 + (1));
i__7485__auto___12692 = G__12693;
continue;
} else {
}
break;
}

var G__12686 = args12681.length;
switch (G__12686) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12681.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___12695 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___12695)){
var class_list_12696 = temp__4655__auto___12695;
class_list_12696.remove(c__$1);
} else {
var class_name_12697 = dommy.core.class$(elem);
var new_class_name_12698 = dommy.utils.remove_class_str(class_name_12697,c__$1);
if((class_name_12697 === new_class_name_12698)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_12698);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__12687 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__12688 = null;
var count__12689 = (0);
var i__12690 = (0);
while(true){
if((i__12690 < count__12689)){
var c = chunk__12688.cljs$core$IIndexed$_nth$arity$2(null,i__12690);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__12699 = seq__12687;
var G__12700 = chunk__12688;
var G__12701 = count__12689;
var G__12702 = (i__12690 + (1));
seq__12687 = G__12699;
chunk__12688 = G__12700;
count__12689 = G__12701;
i__12690 = G__12702;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__12687);
if(temp__4657__auto__){
var seq__12687__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12687__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__12687__$1);
var G__12703 = cljs.core.chunk_rest(seq__12687__$1);
var G__12704 = c__7220__auto__;
var G__12705 = cljs.core.count(c__7220__auto__);
var G__12706 = (0);
seq__12687 = G__12703;
chunk__12688 = G__12704;
count__12689 = G__12705;
i__12690 = G__12706;
continue;
} else {
var c = cljs.core.first(seq__12687__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__12707 = cljs.core.next(seq__12687__$1);
var G__12708 = null;
var G__12709 = (0);
var G__12710 = (0);
seq__12687 = G__12707;
chunk__12688 = G__12708;
count__12689 = G__12709;
i__12690 = G__12710;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq12682){
var G__12683 = cljs.core.first(seq12682);
var seq12682__$1 = cljs.core.next(seq12682);
var G__12684 = cljs.core.first(seq12682__$1);
var seq12682__$2 = cljs.core.next(seq12682__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12683,G__12684,seq12682__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args12711 = [];
var len__7484__auto___12714 = arguments.length;
var i__7485__auto___12715 = (0);
while(true){
if((i__7485__auto___12715 < len__7484__auto___12714)){
args12711.push((arguments[i__7485__auto___12715]));

var G__12716 = (i__7485__auto___12715 + (1));
i__7485__auto___12715 = G__12716;
continue;
} else {
}
break;
}

var G__12713 = args12711.length;
switch (G__12713) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12711.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___12718 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___12718)){
var class_list_12719 = temp__4655__auto___12718;
class_list_12719.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args12720 = [];
var len__7484__auto___12723 = arguments.length;
var i__7485__auto___12724 = (0);
while(true){
if((i__7485__auto___12724 < len__7484__auto___12723)){
args12720.push((arguments[i__7485__auto___12724]));

var G__12725 = (i__7485__auto___12724 + (1));
i__7485__auto___12724 = G__12725;
continue;
} else {
}
break;
}

var G__12722 = args12720.length;
switch (G__12722) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12720.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.array_seq([cljs.core.cst$kw$display,((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args12727 = [];
var len__7484__auto___12730 = arguments.length;
var i__7485__auto___12731 = (0);
while(true){
if((i__7485__auto___12731 < len__7484__auto___12730)){
args12727.push((arguments[i__7485__auto___12731]));

var G__12732 = (i__7485__auto___12731 + (1));
i__7485__auto___12731 = G__12732;
continue;
} else {
}
break;
}

var G__12729 = args12727.length;
switch (G__12729) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12727.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args12734 = [];
var len__7484__auto___12745 = arguments.length;
var i__7485__auto___12746 = (0);
while(true){
if((i__7485__auto___12746 < len__7484__auto___12745)){
args12734.push((arguments[i__7485__auto___12746]));

var G__12747 = (i__7485__auto___12746 + (1));
i__7485__auto___12746 = G__12747;
continue;
} else {
}
break;
}

var G__12739 = args12734.length;
switch (G__12739) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12734.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__12740 = parent;
G__12740.appendChild(child);

return G__12740;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__12741_12749 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__12742_12750 = null;
var count__12743_12751 = (0);
var i__12744_12752 = (0);
while(true){
if((i__12744_12752 < count__12743_12751)){
var c_12753 = chunk__12742_12750.cljs$core$IIndexed$_nth$arity$2(null,i__12744_12752);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12753);

var G__12754 = seq__12741_12749;
var G__12755 = chunk__12742_12750;
var G__12756 = count__12743_12751;
var G__12757 = (i__12744_12752 + (1));
seq__12741_12749 = G__12754;
chunk__12742_12750 = G__12755;
count__12743_12751 = G__12756;
i__12744_12752 = G__12757;
continue;
} else {
var temp__4657__auto___12758 = cljs.core.seq(seq__12741_12749);
if(temp__4657__auto___12758){
var seq__12741_12759__$1 = temp__4657__auto___12758;
if(cljs.core.chunked_seq_QMARK_(seq__12741_12759__$1)){
var c__7220__auto___12760 = cljs.core.chunk_first(seq__12741_12759__$1);
var G__12761 = cljs.core.chunk_rest(seq__12741_12759__$1);
var G__12762 = c__7220__auto___12760;
var G__12763 = cljs.core.count(c__7220__auto___12760);
var G__12764 = (0);
seq__12741_12749 = G__12761;
chunk__12742_12750 = G__12762;
count__12743_12751 = G__12763;
i__12744_12752 = G__12764;
continue;
} else {
var c_12765 = cljs.core.first(seq__12741_12759__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12765);

var G__12766 = cljs.core.next(seq__12741_12759__$1);
var G__12767 = null;
var G__12768 = (0);
var G__12769 = (0);
seq__12741_12749 = G__12766;
chunk__12742_12750 = G__12767;
count__12743_12751 = G__12768;
i__12744_12752 = G__12769;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq12735){
var G__12736 = cljs.core.first(seq12735);
var seq12735__$1 = cljs.core.next(seq12735);
var G__12737 = cljs.core.first(seq12735__$1);
var seq12735__$2 = cljs.core.next(seq12735__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12736,G__12737,seq12735__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args12770 = [];
var len__7484__auto___12781 = arguments.length;
var i__7485__auto___12782 = (0);
while(true){
if((i__7485__auto___12782 < len__7484__auto___12781)){
args12770.push((arguments[i__7485__auto___12782]));

var G__12783 = (i__7485__auto___12782 + (1));
i__7485__auto___12782 = G__12783;
continue;
} else {
}
break;
}

var G__12775 = args12770.length;
switch (G__12775) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7503__auto__ = (new cljs.core.IndexedSeq(args12770.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7503__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__12776 = parent;
G__12776.insertBefore(child,parent.firstChild);

return G__12776;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__12777_12785 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__12778_12786 = null;
var count__12779_12787 = (0);
var i__12780_12788 = (0);
while(true){
if((i__12780_12788 < count__12779_12787)){
var c_12789 = chunk__12778_12786.cljs$core$IIndexed$_nth$arity$2(null,i__12780_12788);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12789);

var G__12790 = seq__12777_12785;
var G__12791 = chunk__12778_12786;
var G__12792 = count__12779_12787;
var G__12793 = (i__12780_12788 + (1));
seq__12777_12785 = G__12790;
chunk__12778_12786 = G__12791;
count__12779_12787 = G__12792;
i__12780_12788 = G__12793;
continue;
} else {
var temp__4657__auto___12794 = cljs.core.seq(seq__12777_12785);
if(temp__4657__auto___12794){
var seq__12777_12795__$1 = temp__4657__auto___12794;
if(cljs.core.chunked_seq_QMARK_(seq__12777_12795__$1)){
var c__7220__auto___12796 = cljs.core.chunk_first(seq__12777_12795__$1);
var G__12797 = cljs.core.chunk_rest(seq__12777_12795__$1);
var G__12798 = c__7220__auto___12796;
var G__12799 = cljs.core.count(c__7220__auto___12796);
var G__12800 = (0);
seq__12777_12785 = G__12797;
chunk__12778_12786 = G__12798;
count__12779_12787 = G__12799;
i__12780_12788 = G__12800;
continue;
} else {
var c_12801 = cljs.core.first(seq__12777_12795__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_12801);

var G__12802 = cljs.core.next(seq__12777_12795__$1);
var G__12803 = null;
var G__12804 = (0);
var G__12805 = (0);
seq__12777_12785 = G__12802;
chunk__12778_12786 = G__12803;
count__12779_12787 = G__12804;
i__12780_12788 = G__12805;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq12771){
var G__12772 = cljs.core.first(seq12771);
var seq12771__$1 = cljs.core.next(seq12771);
var G__12773 = cljs.core.first(seq12771__$1);
var seq12771__$2 = cljs.core.next(seq12771__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12772,G__12773,seq12771__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
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
var temp__4655__auto___12806 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___12806)){
var next_12807 = temp__4655__auto___12806;
dommy.core.insert_before_BANG_(elem,next_12807);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
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
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args12808 = [];
var len__7484__auto___12812 = arguments.length;
var i__7485__auto___12813 = (0);
while(true){
if((i__7485__auto___12813 < len__7484__auto___12812)){
args12808.push((arguments[i__7485__auto___12813]));

var G__12814 = (i__7485__auto___12813 + (1));
i__7485__auto___12813 = G__12814;
continue;
} else {
}
break;
}

var G__12810 = args12808.length;
switch (G__12810) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12808.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__12811 = p;
G__12811.removeChild(elem);

return G__12811;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12816){
var vec__12817 = p__12816;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12817,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12817,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__12817,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__12817,special_mouse_event,real_mouse_event){
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
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__6397__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__12817,special_mouse_event,real_mouse_event))
});})(vec__12817,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__6397__auto__ = selected_target;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__6397__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
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
var len__7484__auto___12823 = arguments.length;
var i__7485__auto___12824 = (0);
while(true){
if((i__7485__auto___12824 < len__7484__auto___12823)){
args__7491__auto__.push((arguments[i__7485__auto___12824]));

var G__12825 = (i__7485__auto___12824 + (1));
i__7485__auto___12824 = G__12825;
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
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq12820){
var G__12821 = cljs.core.first(seq12820);
var seq12820__$1 = cljs.core.next(seq12820);
var G__12822 = cljs.core.first(seq12820__$1);
var seq12820__$2 = cljs.core.next(seq12820__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12821,G__12822,seq12820__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest).call(null,elem_sel);
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
var len__7484__auto___12865 = arguments.length;
var i__7485__auto___12866 = (0);
while(true){
if((i__7485__auto___12866 < len__7484__auto___12865)){
args__7491__auto__.push((arguments[i__7485__auto___12866]));

var G__12867 = (i__7485__auto___12866 + (1));
i__7485__auto___12866 = G__12867;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__12828_12868 = dommy.core.elem_and_selector(elem_sel);
var elem_12869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12828_12868,(0),null);
var selector_12870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12828_12868,(1),null);
var seq__12831_12871 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__12838_12872 = null;
var count__12839_12873 = (0);
var i__12840_12874 = (0);
while(true){
if((i__12840_12874 < count__12839_12873)){
var vec__12847_12875 = chunk__12838_12872.cljs$core$IIndexed$_nth$arity$2(null,i__12840_12874);
var orig_type_12876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12847_12875,(0),null);
var f_12877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12847_12875,(1),null);
var seq__12841_12878 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12876,cljs.core.PersistentArrayMap.fromArray([orig_type_12876,cljs.core.identity], true, false)));
var chunk__12843_12879 = null;
var count__12844_12880 = (0);
var i__12845_12881 = (0);
while(true){
if((i__12845_12881 < count__12844_12880)){
var vec__12850_12882 = chunk__12843_12879.cljs$core$IIndexed$_nth$arity$2(null,i__12845_12881);
var actual_type_12883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12850_12882,(0),null);
var factory_12884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12850_12882,(1),null);
var canonical_f_12885 = (cljs.core.truth_(selector_12870)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12869,selector_12870):cljs.core.identity).call(null,(factory_12884.cljs$core$IFn$_invoke$arity$1 ? factory_12884.cljs$core$IFn$_invoke$arity$1(f_12877) : factory_12884.call(null,f_12877)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12869,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12870,actual_type_12883,f_12877], null),canonical_f_12885], 0));

if(cljs.core.truth_(elem_12869.addEventListener)){
elem_12869.addEventListener(cljs.core.name(actual_type_12883),canonical_f_12885);
} else {
elem_12869.attachEvent(cljs.core.name(actual_type_12883),canonical_f_12885);
}

var G__12886 = seq__12841_12878;
var G__12887 = chunk__12843_12879;
var G__12888 = count__12844_12880;
var G__12889 = (i__12845_12881 + (1));
seq__12841_12878 = G__12886;
chunk__12843_12879 = G__12887;
count__12844_12880 = G__12888;
i__12845_12881 = G__12889;
continue;
} else {
var temp__4657__auto___12890 = cljs.core.seq(seq__12841_12878);
if(temp__4657__auto___12890){
var seq__12841_12891__$1 = temp__4657__auto___12890;
if(cljs.core.chunked_seq_QMARK_(seq__12841_12891__$1)){
var c__7220__auto___12892 = cljs.core.chunk_first(seq__12841_12891__$1);
var G__12893 = cljs.core.chunk_rest(seq__12841_12891__$1);
var G__12894 = c__7220__auto___12892;
var G__12895 = cljs.core.count(c__7220__auto___12892);
var G__12896 = (0);
seq__12841_12878 = G__12893;
chunk__12843_12879 = G__12894;
count__12844_12880 = G__12895;
i__12845_12881 = G__12896;
continue;
} else {
var vec__12853_12897 = cljs.core.first(seq__12841_12891__$1);
var actual_type_12898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12853_12897,(0),null);
var factory_12899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12853_12897,(1),null);
var canonical_f_12900 = (cljs.core.truth_(selector_12870)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12869,selector_12870):cljs.core.identity).call(null,(factory_12899.cljs$core$IFn$_invoke$arity$1 ? factory_12899.cljs$core$IFn$_invoke$arity$1(f_12877) : factory_12899.call(null,f_12877)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12869,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12870,actual_type_12898,f_12877], null),canonical_f_12900], 0));

if(cljs.core.truth_(elem_12869.addEventListener)){
elem_12869.addEventListener(cljs.core.name(actual_type_12898),canonical_f_12900);
} else {
elem_12869.attachEvent(cljs.core.name(actual_type_12898),canonical_f_12900);
}

var G__12901 = cljs.core.next(seq__12841_12891__$1);
var G__12902 = null;
var G__12903 = (0);
var G__12904 = (0);
seq__12841_12878 = G__12901;
chunk__12843_12879 = G__12902;
count__12844_12880 = G__12903;
i__12845_12881 = G__12904;
continue;
}
} else {
}
}
break;
}

var G__12905 = seq__12831_12871;
var G__12906 = chunk__12838_12872;
var G__12907 = count__12839_12873;
var G__12908 = (i__12840_12874 + (1));
seq__12831_12871 = G__12905;
chunk__12838_12872 = G__12906;
count__12839_12873 = G__12907;
i__12840_12874 = G__12908;
continue;
} else {
var temp__4657__auto___12909 = cljs.core.seq(seq__12831_12871);
if(temp__4657__auto___12909){
var seq__12831_12910__$1 = temp__4657__auto___12909;
if(cljs.core.chunked_seq_QMARK_(seq__12831_12910__$1)){
var c__7220__auto___12911 = cljs.core.chunk_first(seq__12831_12910__$1);
var G__12912 = cljs.core.chunk_rest(seq__12831_12910__$1);
var G__12913 = c__7220__auto___12911;
var G__12914 = cljs.core.count(c__7220__auto___12911);
var G__12915 = (0);
seq__12831_12871 = G__12912;
chunk__12838_12872 = G__12913;
count__12839_12873 = G__12914;
i__12840_12874 = G__12915;
continue;
} else {
var vec__12856_12916 = cljs.core.first(seq__12831_12910__$1);
var orig_type_12917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12856_12916,(0),null);
var f_12918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12856_12916,(1),null);
var seq__12832_12919 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_12917,cljs.core.PersistentArrayMap.fromArray([orig_type_12917,cljs.core.identity], true, false)));
var chunk__12834_12920 = null;
var count__12835_12921 = (0);
var i__12836_12922 = (0);
while(true){
if((i__12836_12922 < count__12835_12921)){
var vec__12859_12923 = chunk__12834_12920.cljs$core$IIndexed$_nth$arity$2(null,i__12836_12922);
var actual_type_12924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12859_12923,(0),null);
var factory_12925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12859_12923,(1),null);
var canonical_f_12926 = (cljs.core.truth_(selector_12870)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12869,selector_12870):cljs.core.identity).call(null,(factory_12925.cljs$core$IFn$_invoke$arity$1 ? factory_12925.cljs$core$IFn$_invoke$arity$1(f_12918) : factory_12925.call(null,f_12918)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12869,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12870,actual_type_12924,f_12918], null),canonical_f_12926], 0));

if(cljs.core.truth_(elem_12869.addEventListener)){
elem_12869.addEventListener(cljs.core.name(actual_type_12924),canonical_f_12926);
} else {
elem_12869.attachEvent(cljs.core.name(actual_type_12924),canonical_f_12926);
}

var G__12927 = seq__12832_12919;
var G__12928 = chunk__12834_12920;
var G__12929 = count__12835_12921;
var G__12930 = (i__12836_12922 + (1));
seq__12832_12919 = G__12927;
chunk__12834_12920 = G__12928;
count__12835_12921 = G__12929;
i__12836_12922 = G__12930;
continue;
} else {
var temp__4657__auto___12931__$1 = cljs.core.seq(seq__12832_12919);
if(temp__4657__auto___12931__$1){
var seq__12832_12932__$1 = temp__4657__auto___12931__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12832_12932__$1)){
var c__7220__auto___12933 = cljs.core.chunk_first(seq__12832_12932__$1);
var G__12934 = cljs.core.chunk_rest(seq__12832_12932__$1);
var G__12935 = c__7220__auto___12933;
var G__12936 = cljs.core.count(c__7220__auto___12933);
var G__12937 = (0);
seq__12832_12919 = G__12934;
chunk__12834_12920 = G__12935;
count__12835_12921 = G__12936;
i__12836_12922 = G__12937;
continue;
} else {
var vec__12862_12938 = cljs.core.first(seq__12832_12932__$1);
var actual_type_12939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12862_12938,(0),null);
var factory_12940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12862_12938,(1),null);
var canonical_f_12941 = (cljs.core.truth_(selector_12870)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_12869,selector_12870):cljs.core.identity).call(null,(factory_12940.cljs$core$IFn$_invoke$arity$1 ? factory_12940.cljs$core$IFn$_invoke$arity$1(f_12918) : factory_12940.call(null,f_12918)));
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12869,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12870,actual_type_12939,f_12918], null),canonical_f_12941], 0));

if(cljs.core.truth_(elem_12869.addEventListener)){
elem_12869.addEventListener(cljs.core.name(actual_type_12939),canonical_f_12941);
} else {
elem_12869.attachEvent(cljs.core.name(actual_type_12939),canonical_f_12941);
}

var G__12942 = cljs.core.next(seq__12832_12932__$1);
var G__12943 = null;
var G__12944 = (0);
var G__12945 = (0);
seq__12832_12919 = G__12942;
chunk__12834_12920 = G__12943;
count__12835_12921 = G__12944;
i__12836_12922 = G__12945;
continue;
}
} else {
}
}
break;
}

var G__12946 = cljs.core.next(seq__12831_12910__$1);
var G__12947 = null;
var G__12948 = (0);
var G__12949 = (0);
seq__12831_12871 = G__12946;
chunk__12838_12872 = G__12947;
count__12839_12873 = G__12948;
i__12840_12874 = G__12949;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq12826){
var G__12827 = cljs.core.first(seq12826);
var seq12826__$1 = cljs.core.next(seq12826);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12827,seq12826__$1);
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
var len__7484__auto___12989 = arguments.length;
var i__7485__auto___12990 = (0);
while(true){
if((i__7485__auto___12990 < len__7484__auto___12989)){
args__7491__auto__.push((arguments[i__7485__auto___12990]));

var G__12991 = (i__7485__auto___12990 + (1));
i__7485__auto___12990 = G__12991;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__12952_12992 = dommy.core.elem_and_selector(elem_sel);
var elem_12993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12952_12992,(0),null);
var selector_12994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12952_12992,(1),null);
var seq__12955_12995 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__12962_12996 = null;
var count__12963_12997 = (0);
var i__12964_12998 = (0);
while(true){
if((i__12964_12998 < count__12963_12997)){
var vec__12971_12999 = chunk__12962_12996.cljs$core$IIndexed$_nth$arity$2(null,i__12964_12998);
var orig_type_13000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12971_12999,(0),null);
var f_13001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12971_12999,(1),null);
var seq__12965_13002 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_13000,cljs.core.PersistentArrayMap.fromArray([orig_type_13000,cljs.core.identity], true, false)));
var chunk__12967_13003 = null;
var count__12968_13004 = (0);
var i__12969_13005 = (0);
while(true){
if((i__12969_13005 < count__12968_13004)){
var vec__12974_13006 = chunk__12967_13003.cljs$core$IIndexed$_nth$arity$2(null,i__12969_13005);
var actual_type_13007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12974_13006,(0),null);
var __13008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12974_13006,(1),null);
var keys_13009 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12994,actual_type_13007,f_13001], null);
var canonical_f_13010 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12993),keys_13009);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12993,dommy.utils.dissoc_in,cljs.core.array_seq([keys_13009], 0));

if(cljs.core.truth_(elem_12993.removeEventListener)){
elem_12993.removeEventListener(cljs.core.name(actual_type_13007),canonical_f_13010);
} else {
elem_12993.detachEvent(cljs.core.name(actual_type_13007),canonical_f_13010);
}

var G__13011 = seq__12965_13002;
var G__13012 = chunk__12967_13003;
var G__13013 = count__12968_13004;
var G__13014 = (i__12969_13005 + (1));
seq__12965_13002 = G__13011;
chunk__12967_13003 = G__13012;
count__12968_13004 = G__13013;
i__12969_13005 = G__13014;
continue;
} else {
var temp__4657__auto___13015 = cljs.core.seq(seq__12965_13002);
if(temp__4657__auto___13015){
var seq__12965_13016__$1 = temp__4657__auto___13015;
if(cljs.core.chunked_seq_QMARK_(seq__12965_13016__$1)){
var c__7220__auto___13017 = cljs.core.chunk_first(seq__12965_13016__$1);
var G__13018 = cljs.core.chunk_rest(seq__12965_13016__$1);
var G__13019 = c__7220__auto___13017;
var G__13020 = cljs.core.count(c__7220__auto___13017);
var G__13021 = (0);
seq__12965_13002 = G__13018;
chunk__12967_13003 = G__13019;
count__12968_13004 = G__13020;
i__12969_13005 = G__13021;
continue;
} else {
var vec__12977_13022 = cljs.core.first(seq__12965_13016__$1);
var actual_type_13023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12977_13022,(0),null);
var __13024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12977_13022,(1),null);
var keys_13025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12994,actual_type_13023,f_13001], null);
var canonical_f_13026 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12993),keys_13025);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12993,dommy.utils.dissoc_in,cljs.core.array_seq([keys_13025], 0));

if(cljs.core.truth_(elem_12993.removeEventListener)){
elem_12993.removeEventListener(cljs.core.name(actual_type_13023),canonical_f_13026);
} else {
elem_12993.detachEvent(cljs.core.name(actual_type_13023),canonical_f_13026);
}

var G__13027 = cljs.core.next(seq__12965_13016__$1);
var G__13028 = null;
var G__13029 = (0);
var G__13030 = (0);
seq__12965_13002 = G__13027;
chunk__12967_13003 = G__13028;
count__12968_13004 = G__13029;
i__12969_13005 = G__13030;
continue;
}
} else {
}
}
break;
}

var G__13031 = seq__12955_12995;
var G__13032 = chunk__12962_12996;
var G__13033 = count__12963_12997;
var G__13034 = (i__12964_12998 + (1));
seq__12955_12995 = G__13031;
chunk__12962_12996 = G__13032;
count__12963_12997 = G__13033;
i__12964_12998 = G__13034;
continue;
} else {
var temp__4657__auto___13035 = cljs.core.seq(seq__12955_12995);
if(temp__4657__auto___13035){
var seq__12955_13036__$1 = temp__4657__auto___13035;
if(cljs.core.chunked_seq_QMARK_(seq__12955_13036__$1)){
var c__7220__auto___13037 = cljs.core.chunk_first(seq__12955_13036__$1);
var G__13038 = cljs.core.chunk_rest(seq__12955_13036__$1);
var G__13039 = c__7220__auto___13037;
var G__13040 = cljs.core.count(c__7220__auto___13037);
var G__13041 = (0);
seq__12955_12995 = G__13038;
chunk__12962_12996 = G__13039;
count__12963_12997 = G__13040;
i__12964_12998 = G__13041;
continue;
} else {
var vec__12980_13042 = cljs.core.first(seq__12955_13036__$1);
var orig_type_13043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12980_13042,(0),null);
var f_13044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12980_13042,(1),null);
var seq__12956_13045 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_13043,cljs.core.PersistentArrayMap.fromArray([orig_type_13043,cljs.core.identity], true, false)));
var chunk__12958_13046 = null;
var count__12959_13047 = (0);
var i__12960_13048 = (0);
while(true){
if((i__12960_13048 < count__12959_13047)){
var vec__12983_13049 = chunk__12958_13046.cljs$core$IIndexed$_nth$arity$2(null,i__12960_13048);
var actual_type_13050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12983_13049,(0),null);
var __13051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12983_13049,(1),null);
var keys_13052 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12994,actual_type_13050,f_13044], null);
var canonical_f_13053 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12993),keys_13052);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12993,dommy.utils.dissoc_in,cljs.core.array_seq([keys_13052], 0));

if(cljs.core.truth_(elem_12993.removeEventListener)){
elem_12993.removeEventListener(cljs.core.name(actual_type_13050),canonical_f_13053);
} else {
elem_12993.detachEvent(cljs.core.name(actual_type_13050),canonical_f_13053);
}

var G__13054 = seq__12956_13045;
var G__13055 = chunk__12958_13046;
var G__13056 = count__12959_13047;
var G__13057 = (i__12960_13048 + (1));
seq__12956_13045 = G__13054;
chunk__12958_13046 = G__13055;
count__12959_13047 = G__13056;
i__12960_13048 = G__13057;
continue;
} else {
var temp__4657__auto___13058__$1 = cljs.core.seq(seq__12956_13045);
if(temp__4657__auto___13058__$1){
var seq__12956_13059__$1 = temp__4657__auto___13058__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12956_13059__$1)){
var c__7220__auto___13060 = cljs.core.chunk_first(seq__12956_13059__$1);
var G__13061 = cljs.core.chunk_rest(seq__12956_13059__$1);
var G__13062 = c__7220__auto___13060;
var G__13063 = cljs.core.count(c__7220__auto___13060);
var G__13064 = (0);
seq__12956_13045 = G__13061;
chunk__12958_13046 = G__13062;
count__12959_13047 = G__13063;
i__12960_13048 = G__13064;
continue;
} else {
var vec__12986_13065 = cljs.core.first(seq__12956_13059__$1);
var actual_type_13066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12986_13065,(0),null);
var __13067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12986_13065,(1),null);
var keys_13068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_12994,actual_type_13066,f_13044], null);
var canonical_f_13069 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_12993),keys_13068);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_12993,dommy.utils.dissoc_in,cljs.core.array_seq([keys_13068], 0));

if(cljs.core.truth_(elem_12993.removeEventListener)){
elem_12993.removeEventListener(cljs.core.name(actual_type_13066),canonical_f_13069);
} else {
elem_12993.detachEvent(cljs.core.name(actual_type_13066),canonical_f_13069);
}

var G__13070 = cljs.core.next(seq__12956_13059__$1);
var G__13071 = null;
var G__13072 = (0);
var G__13073 = (0);
seq__12956_13045 = G__13070;
chunk__12958_13046 = G__13071;
count__12959_13047 = G__13072;
i__12960_13048 = G__13073;
continue;
}
} else {
}
}
break;
}

var G__13074 = cljs.core.next(seq__12955_13036__$1);
var G__13075 = null;
var G__13076 = (0);
var G__13077 = (0);
seq__12955_12995 = G__13074;
chunk__12962_12996 = G__13075;
count__12963_12997 = G__13076;
i__12964_12998 = G__13077;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq12950){
var G__12951 = cljs.core.first(seq12950);
var seq12950__$1 = cljs.core.next(seq12950);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12951,seq12950__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13093 = arguments.length;
var i__7485__auto___13094 = (0);
while(true){
if((i__7485__auto___13094 < len__7484__auto___13093)){
args__7491__auto__.push((arguments[i__7485__auto___13094]));

var G__13095 = (i__7485__auto___13094 + (1));
i__7485__auto___13094 = G__13095;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__13080_13096 = dommy.core.elem_and_selector(elem_sel);
var elem_13097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080_13096,(0),null);
var selector_13098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080_13096,(1),null);
var seq__13083_13099 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__13084_13100 = null;
var count__13085_13101 = (0);
var i__13086_13102 = (0);
while(true){
if((i__13086_13102 < count__13085_13101)){
var vec__13087_13103 = chunk__13084_13100.cljs$core$IIndexed$_nth$arity$2(null,i__13086_13102);
var type_13104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087_13103,(0),null);
var f_13105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087_13103,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_13104,((function (seq__13083_13099,chunk__13084_13100,count__13085_13101,i__13086_13102,vec__13087_13103,type_13104,f_13105,vec__13080_13096,elem_13097,selector_13098){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_13104,dommy$core$this_fn], 0));

return (f_13105.cljs$core$IFn$_invoke$arity$1 ? f_13105.cljs$core$IFn$_invoke$arity$1(e) : f_13105.call(null,e));
});})(seq__13083_13099,chunk__13084_13100,count__13085_13101,i__13086_13102,vec__13087_13103,type_13104,f_13105,vec__13080_13096,elem_13097,selector_13098))
], 0));

var G__13106 = seq__13083_13099;
var G__13107 = chunk__13084_13100;
var G__13108 = count__13085_13101;
var G__13109 = (i__13086_13102 + (1));
seq__13083_13099 = G__13106;
chunk__13084_13100 = G__13107;
count__13085_13101 = G__13108;
i__13086_13102 = G__13109;
continue;
} else {
var temp__4657__auto___13110 = cljs.core.seq(seq__13083_13099);
if(temp__4657__auto___13110){
var seq__13083_13111__$1 = temp__4657__auto___13110;
if(cljs.core.chunked_seq_QMARK_(seq__13083_13111__$1)){
var c__7220__auto___13112 = cljs.core.chunk_first(seq__13083_13111__$1);
var G__13113 = cljs.core.chunk_rest(seq__13083_13111__$1);
var G__13114 = c__7220__auto___13112;
var G__13115 = cljs.core.count(c__7220__auto___13112);
var G__13116 = (0);
seq__13083_13099 = G__13113;
chunk__13084_13100 = G__13114;
count__13085_13101 = G__13115;
i__13086_13102 = G__13116;
continue;
} else {
var vec__13090_13117 = cljs.core.first(seq__13083_13111__$1);
var type_13118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13090_13117,(0),null);
var f_13119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13090_13117,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_13118,((function (seq__13083_13099,chunk__13084_13100,count__13085_13101,i__13086_13102,vec__13090_13117,type_13118,f_13119,seq__13083_13111__$1,temp__4657__auto___13110,vec__13080_13096,elem_13097,selector_13098){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_13118,dommy$core$this_fn], 0));

return (f_13119.cljs$core$IFn$_invoke$arity$1 ? f_13119.cljs$core$IFn$_invoke$arity$1(e) : f_13119.call(null,e));
});})(seq__13083_13099,chunk__13084_13100,count__13085_13101,i__13086_13102,vec__13090_13117,type_13118,f_13119,seq__13083_13111__$1,temp__4657__auto___13110,vec__13080_13096,elem_13097,selector_13098))
], 0));

var G__13120 = cljs.core.next(seq__13083_13111__$1);
var G__13121 = null;
var G__13122 = (0);
var G__13123 = (0);
seq__13083_13099 = G__13120;
chunk__13084_13100 = G__13121;
count__13085_13101 = G__13122;
i__13086_13102 = G__13123;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq13078){
var G__13079 = cljs.core.first(seq13078);
var seq13078__$1 = cljs.core.next(seq13078);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13079,seq13078__$1);
});

