(window.webpackJsonp=window.webpackJsonp||[]).push([[24,18],{544:function(t,n,e){var content=e(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("b5ec59bc",content,!0,{sourceMap:!1})},558:function(t,n,e){var content=e(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("f665bbb8",content,!0,{sourceMap:!1})},559:function(t,n,e){"use strict";e(544)},560:function(t,n,e){var o=e(29)(!1);o.push([t.i,".plmy[data-v-15c3b10a]{transition:all .4s ease}.plmy[data-v-15c3b10a],.plmy .line2[data-v-15c3b10a]{transform:rotate(0deg)}.open[data-v-15c3b10a]{transform:rotate(1turn)}.open .line2[data-v-15c3b10a]{transform:rotate(90deg)}",""]),t.exports=o},573:function(t,n,e){"use strict";e.r(n);var o={props:{isOpen:{type:Boolean,default:!1}}},c=(e(559),e(14)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("svg",{staticClass:"plmy",class:{open:t.isOpen},attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"}},[n("circle",{attrs:{cx:"50",cy:"50",r:"50",fill:"#3fa4f0",stroke:"none"}}),t._v(" "),n("line",{attrs:{x1:"20",x2:"80",y1:"50",y2:"50",stroke:"white","stroke-width":"10px"}}),t._v(" "),n("line",{staticClass:"line2",attrs:{x1:"50",x2:"50",y1:"20",y2:"80",stroke:"white","stroke-width":"10px"}})])}),[],!1,null,"15c3b10a",null);n.default=component.exports},592:function(t,n,e){"use strict";e(558)},593:function(t,n,e){var o=e(29)(!1);o.push([t.i,'.qa-container[data-v-4c90c5c2]{background-color:#fff;padding:10px;transition:all .4s ease;margin-bottom:20px}.qa-container .question-container[data-v-4c90c5c2]{justify-content:space-between}.qa-container .question-container[data-v-4c90c5c2],.qa-container .question-container .question-row-container[data-v-4c90c5c2]{display:flex;align-items:center;height:100%}.qa-container .question-container .question-row-container .q[data-v-4c90c5c2]{width:80px;display:flex;justify-content:center;font-size:42px;font-weight:900;font-family:"D-DIN-Bold"}.qa-container .question-container .question-row-container P[data-v-4c90c5c2]{font-size:20px;font-weight:700}.qa-container .question-container .plmy-container[data-v-4c90c5c2]{display:flex;width:80px;justify-content:center}.qa-container .question-container .plmy-container svg[data-v-4c90c5c2]{width:30px;height:30px}.qa-container .answer-container[data-v-4c90c5c2]{display:none}.qa-container .answer-container p[data-v-4c90c5c2]{margin-top:10px;font-size:16px;line-height:1.2em;text-align:left;padding:0 80px}.qa-container .show[data-v-4c90c5c2]{display:block}',""]),t.exports=o},616:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{isOpen:!1,num:0}},props:{question:{type:String,default:""},answer:{type:String,default:""}},methods:{updateShowAnswer:function(){this.isOpen=!this.isOpen}}},c=(e(592),e(14)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("li",{staticClass:"qa-container"},[n("div",{staticClass:"question-container"},[n("div",{staticClass:"question-row-container"},[n("span",{staticClass:"q"},[t._v("Q.")]),t._v(" "),n("p",[t._v(t._s(t.question))])]),t._v(" "),n("div",{staticClass:"plmy-container",on:{click:t.updateShowAnswer}},[n("PartsCommonPlusminus",{attrs:{isOpen:t.isOpen}})],1)]),t._v(" "),n("div",{staticClass:"answer-container",class:{show:t.isOpen}},[n("p",[t._v("\n      "+t._s(t.answer)+"\n    ")])])])}),[],!1,null,"4c90c5c2",null);n.default=component.exports;installComponents(component,{PartsCommonPlusminus:e(573).default})}}]);