!function(t){function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}var n={};o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="",o(o.s=4)}({4:function(t,o,n){t.exports=n("fub0")},fub0:function(t,o){jQuery(document).ready(function(t){t("#toc").hide(),t(document).on("click",".toc-btn a, a.close",function(){return"none"===t("#toc").css("display")?(t(".toc-btn a").addClass("tabbed"),t(".toc-btn").addClass("is-active"),t("#toc").toggle({duration:200}),!1):(t(".toc-btn a").removeClass("tabbed"),t(".toc-btn").removeClass("is-active"),t("#toc").toggle({duration:100}),!1)});var o=t("#toc"),n=t(".toc-btn");o.length>0&&n.length>0&&t(window).height()-(n.offset().top+n.height()+o.height())<0&&(t("#toc > ul").find("li h4:not(:has(a)):not(:empty)").on("click",function(){jQuery(this).parent().next().slideToggle(100);var o=t(this).find(".dashicons");o.hasClass("dashicons-arrow-up")?o.removeClass("dashicons-arrow-up").addClass("dashicons-arrow-down"):o.removeClass("dashicons-arrow-down").addClass("dashicons-arrow-up")}).css("cursor","pointer").prepend('<div class="dashicons dashicons-arrow-up" style="float:right"></div>').parent().next().hide(),t("#toc a[href*='"+window.location.pathname+"']").parent().parent().parent().prev().find("h4:not(:has(a))").trigger("click"))})}});