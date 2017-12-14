//id 名
const top_div_id="drop-head";//整个div的class name

 //class 名
const caret_cln="caret";//三角型的css样式名
const prt_ul_cln="nav";//父ul的class name
const child_ul_cln="nav-sub";//子的ul的class name
const drop_li_cln="drop";

//class 值
const block="block";//正常显示
const none="none";//隐藏

//属性名
const clazz="class";
const href="href";

//标签名
const Ul="ul";
const A="a";
const Li="li";
const Span="span";

/**
 * 创建dom
 * @param tag
 * @returns {HTMLAnchorElement | HTMLAppletElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLBaseFontElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDirectoryElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFontElement | HTMLFormElement | HTMLFrameElement | HTMLFrameSetElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLModElement | HTMLUnknownElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLPreElement | HTMLMapElement | HTMLMarqueeElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLUnknownElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLParamElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLQuoteElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableDataCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTableSectionElement | HTMLTableHeaderCellElement | HTMLTableSectionElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | MSHTMLWebViewElement | HTMLPreElement | HTMLAnchorElement | HTMLAppletElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLBaseFontElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDirectoryElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFontElement | HTMLFormElement | HTMLFrameElement | HTMLFrameSetElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLModElement | HTMLUnknownElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLPreElement | HTMLMapElement | HTMLMarqueeElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLUnknownElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLParamElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLQuoteElement | HTMLScriptElement | HTMLSelectElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableDataCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTableSectionElement | HTMLTableHeaderCellElement | HTMLTableSectionElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement | MSHTMLWebViewElement | HTMLPreElement}
 */
function createDom(tag){
   return document.createElement(tag);
};

/**
 *
 * @param tag 标签名
 * @param cln  class名
 * @param clv  class值
 * @returns {HTMLAnchorElement|HTMLAppletElement|HTMLAreaElement|HTMLAudioElement|HTMLBaseElement|HTMLBaseFontElement|HTMLQuoteElement|HTMLBodyElement|HTMLBRElement|HTMLButtonElement|HTMLCanvasElement|HTMLTableCaptionElement|HTMLTableColElement|HTMLDataElement|HTMLDataListElement|HTMLModElement|HTMLDirectoryElement|HTMLDivElement|HTMLDListElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHeadingElement|HTMLHeadElement|HTMLHRElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLUnknownElement|HTMLLabelElement|HTMLLegendElement|HTMLLIElement|HTMLLinkElement|HTMLPreElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLObjectElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLProgressElement|HTMLScriptElement|HTMLSelectElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableElement|HTMLTableSectionElement|HTMLTableDataCellElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTableHeaderCellElement|HTMLTimeElement|HTMLTitleElement|HTMLTableRowElement|HTMLTrackElement|HTMLUListElement|HTMLVideoElement|MSHTMLWebViewElement}
 */
function createDomByClassName(tag,cln,clv){
    var dom=document.createElement(tag);
    dom.setAttribute(cln,clv);
    return dom;
};

/**
 * 隐藏标签
 * @param tag
 */
function dispear(tag){
    tag.style.display=none;
};
/**
 * 隐藏标签
 * @param tag
 */
function show(tag){
    tag.style.display=block;
};

var Drop=function(){
       this.render=function(){
        var container=document.getElementById(top_div_id);
           var parent_ul=createDomByClassName(Ul,clazz,prt_ul_cln);
        for(var i=0;i<this.setting.data.length;i++){
            var data=this.setting.data[i];
            var parent_li=createDomByClassName(Li,clazz,drop_li_cln);
            var a=createDom(A);
            a.setAttribute(href,data.url);
            a.innerHTML=data.title;
            //假如有子列表
            if(data.child){
                //创建三角形对象
                var drop_tag=createDomByClassName(Span,clazz,caret_cln);
                a.appendChild(drop_tag);
                parent_li.appendChild(a);
                //创建子ul
                var child_ul=createDom(Ul);
                child_ul.setAttribute(clazz,child_ul_cln);
                for(var j=0;j<data.child.length;j++){
                    //加入到父li
                    var child_li=createDom(Li);
                    var child_a=createDom(A);
                    child_a.setAttribute(href,data.child[j].url);
                    child_a.innerHTML=data.child[j].title;
                    child_li.appendChild(child_a);
                    child_ul.appendChild(child_li);
                }
                //把事件加上去注意（这里需要用匿名函数，因为child_ul是函数外部的变量）
                (function(child_ul){
                    a.onmousemove=function () {
                        show(child_ul);
                    };
                    parent_li.onmousemove=function () {
                        show(child_ul);
                    };
                    parent_li.onmouseout=function () {
                        dispear(child_ul);
                    };
                })(child_ul);

                parent_li.appendChild(child_ul);
            }else{
                parent_li.appendChild(a);
            }
            parent_ul.appendChild(parent_li);
        }
        container.appendChild(parent_ul);
    }
};