System.register(["./3401ddd8.js","./d313a0a2.js"],(function(e){"use strict";var t,r,n,o,i,a,s,c,l,u,f,p,d,h,m,g,v,y,b,w,O,x,k,C,T,E,R;return{setters:[function(e){t=e.e,r=e.o,n=e.Z,o=e.g,i=e.c,a=e.d,s=e.a,c=e.b,l=e.W,u=e.J,f=e.t,p=e.m,d=e.h,h=e.l,m=e.i,g=e.j,v=e.k,y=e.s,b=e.p,w=e.q,O=e.v,x=e.w,k=e.x,C=e.y,T=e.z,E=e.B},function(e){R=e.a}],execute:function(){var P="undefined"!=typeof Element,S="function"==typeof Map,j="function"==typeof Set,A="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function H(e,r){if(e===r)return!0;if(e&&r&&"object"==t(e)&&"object"==t(r)){if(e.constructor!==r.constructor)return!1;var n,o,i,a;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(!H(e[o],r[o]))return!1;return!0}if(S&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(a=e.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;for(a=e.entries();!(o=a.next()).done;)if(!H(o.value[1],r.get(o.value[0])))return!1;return!0}if(j&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(a=e.entries();!(o=a.next()).done;)if(!r.has(o.value[0]))return!1;return!0}if(A&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(e[o]!==r[o])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;if(P&&e instanceof Element)return!1;for(o=n;0!=o--;)if(("_owner"!==i[o]&&"__v"!==i[o]&&"__o"!==i[o]||!e.$$typeof)&&!H(e[i[o]],r[i[o]]))return!1;return!0}return e!=e&&r!=r}var M=function(e,t){try{return H(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}};function B(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function D(e){return e instanceof L(e).Element||e instanceof Element}function W(e){return e instanceof L(e).HTMLElement||e instanceof HTMLElement}function V(e){return"undefined"!=typeof ShadowRoot&&(e instanceof L(e).ShadowRoot||e instanceof ShadowRoot)}var U={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];W(o)&&B(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});W(n)&&B(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};function z(e){return e.split("-")[0]}var F=Math.max,N=Math.min,q=Math.round;function X(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect(),n=1,o=1;if(W(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(n=q(r.width)/a||1),i>0&&(o=q(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function Y(e){var t=X(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function I(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&V(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function _(e){return L(e).getComputedStyle(e)}function $(e){return["table","td","th"].indexOf(B(e))>=0}function J(e){return((D(e)?e.ownerDocument:e.document)||window.document).documentElement}function Z(e){return"html"===B(e)?e:e.assignedSlot||e.parentNode||(V(e)?e.host:null)||J(e)}function G(e){return W(e)&&"fixed"!==_(e).position?e.offsetParent:null}function K(e){for(var t=L(e),r=G(e);r&&$(r)&&"static"===_(r).position;)r=G(r);return r&&("html"===B(r)||"body"===B(r)&&"static"===_(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&W(e)&&"fixed"===_(e).position)return null;for(var r=Z(e);W(r)&&["html","body"].indexOf(B(r))<0;){var n=_(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}function Q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ee(e,t,r){return F(e,N(t,r))}function te(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function re(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}var ne={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=z(r.placement),c=Q(s),l=[h,m].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return te("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:re(e,x))}(o.padding,r),f=Y(i),p="y"===c?d:h,g="y"===c?v:m,y=r.rects.reference[l]+r.rects.reference[c]-a[c]-r.rects.popper[l],b=a[c]-r.rects.reference[c],w=K(i),O=w?"y"===c?w.clientHeight||0:w.clientWidth||0:0,k=y/2-b/2,C=u[p],T=O-f[l]-u[g],E=O/2-f[l]/2+k,R=ee(C,E,T),P=c;r.modifiersData[n]=((t={})[P]=R,t.centerOffset=R-E,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&I(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var ie={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,f=e.isFixed,p=a.x,y=void 0===p?0:p,b=a.y,w=void 0===b?0:b,O="function"==typeof u?u({x:y,y:w}):{x:y,y:w};y=O.x,w=O.y;var x=a.hasOwnProperty("x"),k=a.hasOwnProperty("y"),C=h,T=d,E=window;if(l){var R=K(r),P="clientHeight",S="clientWidth";R===L(r)&&"static"!==_(R=J(r)).position&&"absolute"===s&&(P="scrollHeight",S="scrollWidth"),(o===d||(o===h||o===m)&&i===g)&&(T=v,w-=(f&&E.visualViewport?E.visualViewport.height:R[P])-n.height,w*=c?1:-1),o!==h&&(o!==d&&o!==v||i!==g)||(C=m,y-=(f&&E.visualViewport?E.visualViewport.width:R[S])-n.width,y*=c?1:-1)}var j,A=Object.assign({position:s},l&&ie),H=!0===u?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:q(t*n)/n||0,y:q(r*n)/n||0}}({x:y,y:w}):{x:y,y:w};return y=H.x,w=H.y,c?Object.assign({},A,((j={})[T]=k?"0":"",j[C]=x?"0":"",j.transform=(E.devicePixelRatio||1)<=1?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",j)):Object.assign({},A,((t={})[T]=k?w+"px":"",t[C]=x?y+"px":"",t.transform="",t))}var se={passive:!0},ce={left:"right",right:"left",bottom:"top",top:"bottom"};function le(e){return e.replace(/left|right|bottom|top/g,(function(e){return ce[e]}))}var ue={start:"end",end:"start"};function fe(e){return e.replace(/start|end/g,(function(e){return ue[e]}))}function pe(e){var t=L(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function de(e){return X(J(e)).left+pe(e).scrollLeft}function he(e){var t=_(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function me(e){return["html","body","#document"].indexOf(B(e))>=0?e.ownerDocument.body:W(e)&&he(e)?e:me(Z(e))}function ge(e,t){var r;void 0===t&&(t=[]);var n=me(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=L(n),a=o?[i].concat(i.visualViewport||[],he(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(ge(Z(a)))}function ve(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ye(e,t){return t===T?ve(function(e){var t=L(e),r=J(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+de(e),y:s}}(e)):D(t)?function(e){var t=X(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ve(function(e){var t,r=J(e),n=pe(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=F(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=F(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+de(e),c=-n.scrollTop;return"rtl"===_(o||r).direction&&(s+=F(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(J(e)))}function be(e,t,r){var n="clippingParents"===t?function(e){var t=ge(Z(e)),r=["absolute","fixed"].indexOf(_(e).position)>=0&&W(e)?K(e):e;return D(r)?t.filter((function(e){return D(e)&&I(e,r)&&"body"!==B(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=ye(e,r);return t.top=F(n.top,t.top),t.right=N(n.right,t.right),t.bottom=N(n.bottom,t.bottom),t.left=F(n.left,t.left),t}),ye(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function we(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?z(o):null,a=o?oe(o):null,s=r.x+r.width/2-n.width/2,c=r.y+r.height/2-n.height/2;switch(i){case d:t={x:s,y:r.y-n.height};break;case v:t={x:s,y:r.y+r.height};break;case m:t={x:r.x+r.width,y:c};break;case h:t={x:r.x-n.width,y:c};break;default:t={x:r.x,y:r.y}}var l=i?Q(i):null;if(null!=l){var u="y"===l?"height":"width";switch(a){case y:t[l]=t[l]-(r[u]/2-n[u]/2);break;case g:t[l]=t[l]+(r[u]/2-n[u]/2)}}return t}function Oe(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.boundary,a=void 0===i?E:i,s=r.rootBoundary,c=void 0===s?T:s,l=r.elementContext,u=void 0===l?b:l,f=r.altBoundary,p=void 0!==f&&f,h=r.padding,g=void 0===h?0:h,y=te("number"!=typeof g?g:re(g,x)),w=u===b?k:b,O=e.rects.popper,C=e.elements[p?w:u],R=be(D(C)?C:C.contextElement||J(e.elements.popper),a,c),P=X(e.elements.reference),S=we({reference:P,element:O,strategy:"absolute",placement:o}),j=ve(Object.assign({},O,S)),A=u===b?j:P,H={top:R.top-A.top+y.top,bottom:A.bottom-R.bottom+y.bottom,left:R.left-A.left+y.left,right:A.right-R.right+y.right},M=e.modifiersData.offset;if(u===b&&M){var B=M[o];Object.keys(H).forEach((function(e){var t=[m,v].indexOf(e)>=0?1:-1,r=[d,v].indexOf(e)>=0?"y":"x";H[e]+=B[r]*t}))}return H}var xe={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,c=r.fallbackPlacements,l=r.padding,u=r.boundary,f=r.rootBoundary,p=r.altBoundary,g=r.flipVariations,b=void 0===g||g,k=r.allowedAutoPlacements,T=t.options.placement,E=z(T),R=c||(E!==T&&b?function(e){if(z(e)===w)return[];var t=le(e);return[fe(e),t,fe(t)]}(T):[le(T)]),P=[T].concat(R).reduce((function(e,r){return e.concat(z(r)===w?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,l=void 0===c?O:c,u=oe(n),f=u?s?C:C.filter((function(e){return oe(e)===u})):x,p=f.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=f);var d=p.reduce((function(t,r){return t[r]=Oe(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[z(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:u,rootBoundary:f,padding:l,flipVariations:b,allowedAutoPlacements:k}):r)}),[]),S=t.rects.reference,j=t.rects.popper,A=new Map,H=!0,M=P[0],B=0;B<P.length;B++){var L=P[B],D=z(L),W=oe(L)===y,V=[d,v].indexOf(D)>=0,U=V?"width":"height",F=Oe(t,{placement:L,boundary:u,rootBoundary:f,altBoundary:p,padding:l}),N=V?W?m:h:W?v:d;S[U]>j[U]&&(N=le(N));var q=le(N),X=[];if(i&&X.push(F[D]<=0),s&&X.push(F[N]<=0,F[q]<=0),X.every((function(e){return e}))){M=L,H=!1;break}A.set(L,X)}if(H)for(var Y=function(e){var t=P.find((function(t){var r=A.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return M=t,"break"},I=b?3:1;I>0&&"break"!==Y(I);I--);t.placement!==M&&(t.modifiersData[n]._skip=!0,t.placement=M,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ke(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ce(e){return[d,m,v,h].some((function(t){return e[t]>=0}))}var Te={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=O.reduce((function(e,r){return e[r]=function(e,t,r){var n=z(e),o=[h,d].indexOf(n)>=0?-1:1,i="function"==typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[h,m].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}},Ee={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,c=r.boundary,l=r.rootBoundary,u=r.altBoundary,f=r.padding,p=r.tether,g=void 0===p||p,b=r.tetherOffset,w=void 0===b?0:b,O=Oe(t,{boundary:c,rootBoundary:l,padding:f,altBoundary:u}),x=z(t.placement),k=oe(t.placement),C=!k,T=Q(x),E="x"===T?"y":"x",R=t.modifiersData.popperOffsets,P=t.rects.reference,S=t.rects.popper,j="function"==typeof w?w(Object.assign({},t.rects,{placement:t.placement})):w,A="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(R){if(i){var B,L="y"===T?d:h,D="y"===T?v:m,W="y"===T?"height":"width",V=R[T],U=V+O[L],q=V-O[D],X=g?-S[W]/2:0,I=k===y?P[W]:S[W],_=k===y?-S[W]:-P[W],$=t.elements.arrow,J=g&&$?Y($):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=Z[L],te=Z[D],re=ee(0,P[W],J[W]),ne=C?P[W]/2-X-re-G-A.mainAxis:I-re-G-A.mainAxis,ie=C?-P[W]/2+X+re+te+A.mainAxis:_+re+te+A.mainAxis,ae=t.elements.arrow&&K(t.elements.arrow),se=ae?"y"===T?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=(B=null==H?void 0:H[T])?B:0,le=V+ie-ce,ue=ee(g?N(U,V+ne-ce-se):U,V,g?F(q,le):q);R[T]=ue,M[T]=ue-V}if(s){var fe,pe="x"===T?d:h,de="x"===T?v:m,he=R[E],me="y"===E?"height":"width",ge=he+O[pe],ve=he-O[de],ye=-1!==[d,h].indexOf(x),be=null!=(fe=null==H?void 0:H[E])?fe:0,we=ye?ge:he-P[me]-S[me]-be+A.altAxis,xe=ye?he+P[me]+S[me]-be-A.altAxis:ve,ke=g&&ye?function(e,t,r){var n=ee(e,t,r);return n>r?r:n}(we,he,xe):ee(g?we:ge,he,g?xe:ve);R[E]=ke,M[E]=ke-he}t.modifiersData[n]=M}},requiresIfExists:["offset"]};function Re(e,t,r){void 0===r&&(r=!1);var n,o,i=W(t),a=W(t)&&function(e){var t=e.getBoundingClientRect(),r=q(t.width)/e.offsetWidth||1,n=q(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),s=J(t),c=X(e,a),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!r)&&(("body"!==B(t)||he(s))&&(l=(n=t)!==L(n)&&W(n)?{scrollLeft:(o=n).scrollLeft,scrollTop:o.scrollTop}:pe(n)),W(t)?((u=X(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=de(s))),{x:c.left+l.scrollLeft-u.x,y:c.top+l.scrollTop-u.y,width:c.width,height:c.height}}function Pe(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}var Se={placement:"bottom",modifiers:[],strategy:"absolute"};function je(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var Ae=function(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?Se:o;return function(e,t,r){void 0===r&&(r=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Se,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],l=!1,u={state:s,setOptions:function(r){var o="function"==typeof r?r(s.options):r;f(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:D(e)?ge(e):e.contextElement?ge(e.contextElement):[],popper:ge(t)};var a,l,d=function(e){var t=Pe(e);return p.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}((a=[].concat(n,s.options.modifiers),l=a.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{}),Object.keys(l).map((function(e){return l[e]}))));return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:n});c.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!l){var e=s.elements,t=e.reference,r=e.popper;if(je(t,r)){s.rects={reference:Re(t,K(r),"fixed"===s.options.strategy),popper:Y(r)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<s.orderedModifiers.length;n++)if(!0!==s.reset){var o=s.orderedModifiers[n],i=o.fn,a=o.options,c=void 0===a?{}:a,f=o.name;"function"==typeof i&&(s=i({state:s,options:c,name:f,instance:u})||s)}else s.reset=!1,n=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){f(),l=!0}};if(!je(e,t))return u;function f(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!l&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,c=L(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",r.update,se)})),s&&c.addEventListener("resize",r.update,se),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",r.update,se)})),s&&c.removeEventListener("resize",r.update,se)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=we({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,l={placement:z(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ae(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ae(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},U,Te,xe,Ee,ne,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Oe(t,{elementContext:"reference"}),s=Oe(t,{altBoundary:!0}),c=ke(a,n),l=ke(s,o,i),u=Ce(c),f=Ce(l);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}}]}),He=r.exports.createContext(),Me=r.exports.createContext();function Be(e){var t=e.children,n=r.exports.useState(null),o=n[0],i=n[1],a=r.exports.useRef(!1);r.exports.useEffect((function(){return function(){a.current=!0}}),[]);var s=r.exports.useCallback((function(e){a.current||i(e)}),[]);return r.exports.createElement(He.Provider,{value:o},r.exports.createElement(Me.Provider,{value:s},t))}var Le=function(e){return Array.isArray(e)?e[0]:e},De=function(e){if("function"==typeof e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},We=function(e,t){if("function"==typeof e)return De(e,t);null!=e&&(e.current=t)},Ve=function(e){return e.reduce((function(e,t){var r=t[0],n=t[1];return e[r]=n,e}),{})},Ue="undefined"!=typeof window&&window.document&&window.document.createElement?r.exports.useLayoutEffect:r.exports.useEffect,ze=[],Fe=function(){},Ne=function(){return Promise.resolve(null)},qe=[];function Xe(e){var t=e.placement,n=void 0===t?"bottom":t,o=e.strategy,i=void 0===o?"absolute":o,a=e.modifiers,s=void 0===a?qe:a,c=e.referenceElement,l=e.onFirstUpdate,u=e.innerRef,f=e.children,p=r.exports.useContext(He),d=r.exports.useState(null),h=d[0],m=d[1],g=r.exports.useState(null),v=g[0],y=g[1];r.exports.useEffect((function(){We(u,h)}),[u,h]);var b=r.exports.useMemo((function(){return{placement:n,strategy:i,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:null!=v,options:{element:v}}])}}),[n,i,l,s,v]),w=function(e,t,n){void 0===n&&(n={});var o=r.exports.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ze},a=r.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],c=a[1],l=r.exports.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,r=Object.keys(t.elements);c({styles:Ve(r.map((function(e){return[e,t.styles[e]||{}]}))),attributes:Ve(r.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),u=r.exports.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[l,{name:"applyStyles",enabled:!1}])};return M(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,l]),f=r.exports.useRef();return Ue((function(){f.current&&f.current.setOptions(u)}),[u]),Ue((function(){if(null!=e&&null!=t){var r=(n.createPopper||Ae)(e,t,u);return f.current=r,function(){r.destroy(),f.current=null}}}),[e,t,n.createPopper]),{state:f.current?f.current.state:null,styles:s.styles,attributes:s.attributes,update:f.current?f.current.update:null,forceUpdate:f.current?f.current.forceUpdate:null}}(c||p,h,b),O=w.state,x=w.styles,k=w.forceUpdate,C=w.update,T=r.exports.useMemo((function(){return{ref:m,style:x.popper,placement:O?O.placement:n,hasPopperEscaped:O&&O.modifiersData.hide?O.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:O&&O.modifiersData.hide?O.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:x.arrow,ref:y},forceUpdate:k||Fe,update:C||Ne}}),[m,y,n,O,x,C,k]);return Le(f)(T)}function Ye(e){var t=e.children,n=e.innerRef,o=r.exports.useContext(Me),i=r.exports.useCallback((function(e){We(n,e),De(o,e)}),[n,o]);return r.exports.useEffect((function(){return function(){return We(n,null)}})),r.exports.useEffect((function(){}),[o]),Le(t)({ref:i})}var Ie=n.createContext({}),_e=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,r)}))}},$e=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},Je=function(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)},Ze=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var r=t.context.parentOutsideRightClickHandler,n=t.props,o=n.hideTooltip;(0,n.clearScheduled)(),o(),r&&r(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,Je(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),a({},e,{style:a({},e.style,t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),a({},e,t.isTriggeredBy("hover")&&{onMouseEnter:_e(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:_e(t.props.hideTooltip,e.onMouseLeave)},{style:a({},e.style,t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}o(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.update()}))).observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,r=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),r&&r(),n&&n()}},r.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},r.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,r=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&r&&r(),!t&&n&&n()}},r.render=function(){var e=this.props,t=e.arrowProps,r=e.placement,o=e.tooltip;return n.createElement(Ie.Provider,{value:this.contextValue},o({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:r,tooltipRef:this.getTooltipRef}))},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(r.exports.Component);Ze.contextType=Ie;var Ge=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var r=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?r():t.setState(e,r)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var r=e.pageX,n=e.pageY;t.clearScheduled();var o={tooltipShown:!0};t.props.followCursor&&(o=a({},o,{pageX:r,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(o)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var r=e.pageX,n=e.pageY,o=t.getState()?"hideTooltip":"showTooltip";t[o]({pageX:r,pageY:n})},t.clickToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var r=e.pageX,n=e.pageY,o=t.props.followCursor?"showTooltip":"toggleTooltip";t[o]({pageX:r,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),a({},e,t.isTriggeredBy("click")&&{onClick:_e(t.clickToggle,e.onClick),onTouchEnd:_e(t.clickToggle,e.onTouchEnd)},t.isTriggeredBy("right-click")&&{onContextMenu:_e(t.contextMenuToggle,e.onContextMenu)},t.isTriggeredBy("hover")&&a({onMouseEnter:_e(t.showTooltip,e.onMouseEnter),onMouseLeave:_e(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:_e(t.showTooltip,e.onMouseMove)}),t.isTriggeredBy("focus")&&{onFocus:_e(t.showTooltip,e.onFocus),onBlur:_e(t.hideTooltip,e.onBlur)})},t}o(t,e);var r=t.prototype;return r.componentWillUnmount=function(){this.clearScheduled()},r.render=function(){var e=this,t=this.props,r=t.children,o=t.tooltip,s=t.placement,c=t.trigger,l=t.getTriggerRef,u=t.modifiers,f=t.closeOnReferenceHidden,p=t.usePortal,d=t.portalContainer,h=t.followCursor,m=t.getTooltipRef,g=t.mutationObserverOptions,v=i(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=n.createElement(Xe,a({innerRef:m,placement:s,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(t){e.popperOffset=t.state.rects.popper}}].concat(u)},v),(function(t){var r=t.ref,i=t.style,s=t.placement,l=t.arrowProps,u=t.isReferenceHidden,p=t.update;if(h&&e.popperOffset){var d=e.state,m=d.pageX,v=d.pageY,y=e.popperOffset,b=y.width,w=y.height,O=m+b>window.pageXOffset+document.body.offsetWidth?m-b:m,x=v+w>window.pageYOffset+document.body.offsetHeight?v-w:v;i.transform="translate3d("+O+"px, "+x+"px, 0"}return n.createElement(Ze,a({arrowProps:l,closeOnReferenceHidden:f,isReferenceHidden:u,placement:s,update:p,style:i,tooltip:o,trigger:c,mutationObserverOptions:g},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:r}))}));return n.createElement(Be,null,n.createElement(Ye,{innerRef:l},(function(t){var n=t.ref;return r({getTriggerProps:e.getTriggerProps,triggerRef:n})})),this.getState()&&(p?R.exports.createPortal(y,d):y))},r.isControlled=function(){return void 0!==this.props.tooltipShown},r.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},r.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(r.exports.Component);Ge.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:$e()?document.body:null,trigger:"hover",usePortal:$e(),mutationObserverOptions:{childList:!0,subtree:!0},modifiers:[]};var Ke=Ge;function Qe(){return Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Qe.apply(this,arguments)}var et,tt,rt=s(1e3)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return t.split("-")[0]===e?r:n})),nt=c.div({position:"absolute",borderStyle:"solid"},(function(e){var t=e.placement,r=0,n=0;switch(!0){case t.startsWith("left")||t.startsWith("right"):n=8;break;case t.startsWith("top")||t.startsWith("bottom"):r=8}return{transform:"translate3d(".concat(r,"px, ").concat(n,"px, 0px)")}}),(function(e){var t=e.theme,r=e.color,n=e.placement;return{bottom:"".concat(rt("top",n,-8,"auto"),"px"),top:"".concat(rt("bottom",n,-8,"auto"),"px"),right:"".concat(rt("left",n,-8,"auto"),"px"),left:"".concat(rt("right",n,-8,"auto"),"px"),borderBottomWidth:"".concat(rt("top",n,"0",8),"px"),borderTopWidth:"".concat(rt("bottom",n,"0",8),"px"),borderRightWidth:"".concat(rt("left",n,"0",8),"px"),borderLeftWidth:"".concat(rt("right",n,"0",8),"px"),borderTopColor:rt("top",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent"),borderBottomColor:rt("bottom",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent"),borderLeftColor:rt("left",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent"),borderRightColor:rt("right",n,t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),"transparent")}})),ot=c.div((function(e){return{display:e.hidden?"none":"inline-block",zIndex:2147483647}}),(function(e){var t=e.theme,r=e.color;return e.hasChrome?{background:t.color[r]||r||"light"===t.base?l(t.background.app):u(t.background.app),filter:"\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ",borderRadius:2*t.appBorderRadius,fontSize:t.typography.size.s1}:{}})),it=function(e){var t=e.placement,r=e.hasChrome,o=e.children,i=e.arrowProps,a=e.tooltipRef,s=e.arrowRef,c=e.color,l=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return n.createElement(ot,Qe({hasChrome:r,placement:t,ref:a},l,{color:c}),r&&n.createElement(nt,Qe({placement:t,ref:s},i,{color:c})),o)};function at(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function st(){return st=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},st.apply(this,arguments)}function ct(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function lt(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}it.displayName="Tooltip",it.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var ut=f.document,ft=c.div(et||(et=lt(["\n  display: inline-block;\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),pt=c.g(tt||(tt=lt(["\n  cursor: ",";\n"])),(function(e){return"hover"===e.mode?"default":"pointer"})),dt=e("WithTooltipPure",(function(e){var t=e.svg,r=e.trigger;e.closeOnClick;var o=e.placement,i=e.modifiers,a=e.hasChrome,s=e.tooltip,c=e.children,l=e.tooltipShown,u=e.onVisibilityChange,f=ct(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),p=t?pt:ft;return n.createElement(Ke,{placement:o,trigger:r,modifiers:i,tooltipShown:l,onVisibilityChange:u,tooltip:function(e){var t=e.getTooltipProps,r=e.getArrowProps,o=e.tooltipRef,i=e.arrowRef,c=e.placement;return n.createElement(it,st({hasChrome:a,placement:c,tooltipRef:o,arrowRef:i,arrowProps:r()},t()),"function"==typeof s?s({onHide:function(){return u(!1)}}):s)}},(function(e){var t=e.getTriggerProps,r=e.triggerRef;return n.createElement(p,st({ref:r},t(),f),c)}))}));dt.displayName="WithTooltipPure",dt.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var ht=function(e){var t=e.startOpen,o=e.onVisibilityChange,i=ct(e,["startOpen","onVisibilityChange"]),a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return at(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?at(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.exports.useState(t||!1),2),s=a[0],c=a[1],l=r.exports.useCallback((function(e){o&&!1===o(e)||c(e)}),[o]);return r.exports.useEffect((function(){var e=function(){return l(!1)};ut.addEventListener("keydown",e,!1);var t=Array.from(ut.getElementsByTagName("iframe")),r=[];return t.forEach((function(t){var n=function(){try{t.contentWindow.document&&(t.contentWindow.document.addEventListener("click",e),r.push((function(){try{t.contentWindow.document.removeEventListener("click",e)}catch(e){}})))}catch(e){}};n(),t.addEventListener("load",n),r.push((function(){t.removeEventListener("load",n)}))})),function(){ut.removeEventListener("keydown",e),r.forEach((function(e){e()}))}})),n.createElement(dt,st({},i,{tooltipShown:s,onVisibilityChange:l}))};e({WithToolTipState:ht,WithTooltip:ht}),ht.displayName="WithToolTipState"}}}));
