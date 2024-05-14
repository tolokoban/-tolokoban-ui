"use strict";(self.webpackChunk_tolokoban_ui=self.webpackChunk_tolokoban_ui||[]).push([[179],{1624:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(1354),l=t.n(o),r=t(6314),a=t.n(r)()(l());a.push([n.id,".\\---lib-dist-view-InputText-InputText-module_InputText_gH580l {\n    font: inherit;\n    background: transparent;\n    width: 100%;\n    border: 1px solid color-mix(\n        in srgb,\n        currentColor,\n        transparent 90%\n    );\n    background-color: color-mix(\n        in srgb,\n        var(--theme-color-input),\n        transparent 90%\n    );\n    padding: 0 0.5em;\n    line-height: 2em;\n    height: 2em;\n    color: inherit;\n    border-bottom: 2px solid currentColor;\n    transition: all 0.2s;\n}\n\n.\\---lib-dist-view-InputText-InputText-module_InputText_gH580l:focus {\n    background-color: var(--theme-color-input);\n    color: var(--theme-color-on-input);\n    border: none;\n    outline: none;\n}\n\n.\\---lib-dist-view-InputText-InputText-module_InputText_gH580l.\\---lib-dist-view-InputText-InputText-module_invalid_FGNLMM {\n    background-color: var(--theme-color-error);\n    color: var(--theme-color-on-error);\n}\n","",{version:3,sources:["webpack://./../lib/dist/view/InputText/InputText.module.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX;;;;KAIC;IACD;;;;KAIC;IACD,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,cAAc;IACd,qCAAqC;IACrC,oBAAoB;AACxB;;AAEA;IACI,0CAA0C;IAC1C,kCAAkC;IAClC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,0CAA0C;IAC1C,kCAAkC;AACtC",sourcesContent:[".InputText {\n    font: inherit;\n    background: transparent;\n    width: 100%;\n    border: 1px solid color-mix(\n        in srgb,\n        currentColor,\n        transparent 90%\n    );\n    background-color: color-mix(\n        in srgb,\n        var(--theme-color-input),\n        transparent 90%\n    );\n    padding: 0 0.5em;\n    line-height: 2em;\n    height: 2em;\n    color: inherit;\n    border-bottom: 2px solid currentColor;\n    transition: all 0.2s;\n}\n\n.InputText:focus {\n    background-color: var(--theme-color-input);\n    color: var(--theme-color-on-input);\n    border: none;\n    outline: none;\n}\n\n.InputText.invalid {\n    background-color: var(--theme-color-error);\n    color: var(--theme-color-on-error);\n}\n"],sourceRoot:""}]),a.locals={InputText:"---lib-dist-view-InputText-InputText-module_InputText_gH580l",invalid:"---lib-dist-view-InputText-InputText-module_invalid_FGNLMM"};const i=a},5036:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(1354),l=t.n(o),r=t(6314),a=t.n(r)()(l());a.push([n.id,".\\---lib-dist-view-Label-Label-module_LabelContent_YYb190 {\n    all: inherit;\n    margin: 0;\n    padding: 0;\n    display: contents;\n}\n\n.\\---lib-dist-view-Label-Label-module_Label_mUUrOO {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 90%;\n    opacity: 0.5;\n}\n","",{version:3,sources:["webpack://./../lib/dist/view/Label/Label.module.css"],names:[],mappings:"AAAA;IACI,YAAY;IACZ,SAAS;IACT,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,cAAc;IACd,YAAY;AAChB",sourcesContent:[".LabelContent {\n    all: inherit;\n    margin: 0;\n    padding: 0;\n    display: contents;\n}\n\n.Label {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 90%;\n    opacity: 0.5;\n}\n"],sourceRoot:""}]),a.locals={LabelContent:"---lib-dist-view-Label-Label-module_LabelContent_YYb190",Label:"---lib-dist-view-Label-Label-module_Label_mUUrOO"};const i=a},7179:(n,e,t)=>{t.r(e),t.d(e,{default:()=>c});var o=t(4848),l=t(2296),r=t(5865),a=t(6540),i=t(5895),s=t(1323);function u(){const[n,e]=a.useState("Mr Bean");return(0,o.jsx)(i.a,{value:"What's your name?",title:"This is a tooltip...",children:(0,o.jsx)(s.H,{value:n,onChange:e})})}function A(){return(0,o.jsx)(l.A,{title:'import { ViewLabel } from "@tolokoban/ui"',children:(0,o.jsx)(r.A,{description:"# Default usage\n",example:'import React from "react"\nimport { ViewInputText, ViewLabel } from "@tolokoban/ui"\n\nexport default function Demo() {\n    const [name, setName] = React.useState("Mr Bean")\n    return (\n        <ViewLabel value="What\'s your name?" title="This is a tooltip...">\n            <ViewInputText value={name} onChange={setName} />\n        </ViewLabel>\n    )\n}\n',children:(0,o.jsx)(u,{})})})}function c(){return(0,o.jsx)(A,{})}},1323:(n,e,t)=>{t.d(e,{H:()=>T});var o=t(4848),l=t(6540),r=t(9142),a=t(9494),i=t(5895),s=t(5072),u=t.n(s),A=t(7825),c=t.n(A),d=t(7659),p=t.n(d),m=t(5056),b=t.n(m),C=t(540),h=t.n(C),I=t(1113),v=t.n(I),x=t(1624),g={};g.styleTagTransform=v(),g.setAttributes=b(),g.insert=p().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=h(),u()(x.A,g);const f=x.A&&x.A.locals?x.A.locals:void 0,w=r.A.classNames;function T(n){const{className:e,placeholder:t,value:r="",label:s,name:u,autofocus:A=!1,onChange:c,onEnterKeyPressed:d,type:p="text",maxWidth:m,validator:b}=n,[C,h]=l.useState(!1),[I,v]=l.useState(r);l.useEffect((()=>{null==c||c(I)}),[c,I]);const x=Object.assign({},(0,a.S)(n));m&&(x.maxWidth=m);const g=(0,o.jsx)("input",{className:w.join(e,f.InputText,C&&f.invalid),style:x,autoFocus:A,placeholder:t,type:p,value:I,name:u,onChange:n=>{const e=n.target.value;if(h(!1),b)if(b instanceof RegExp){if(b.lastIndex=-1,!b.test(e))return void h(!0)}else"function"==typeof b&&h(!b(e));v(e)},onKeyDown:n=>{C||"Enter"===n.key&&(n.preventDefault(),n.stopPropagation(),null==d||d(I))}});return s?(0,o.jsx)(i.a,{value:s,children:g}):g}},5895:(n,e,t)=>{t.d(e,{a:()=>f});var o=t(4848),l=t(6540),r=t(9142),a=t(5072),i=t.n(a),s=t(7825),u=t.n(s),A=t(7659),c=t.n(A),d=t(5056),p=t.n(d),m=t(540),b=t.n(m),C=t(1113),h=t.n(C),I=t(5036),v={};v.styleTagTransform=h(),v.setAttributes=p(),v.insert=c().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=b(),i()(I.A,v);const x=I.A&&I.A.locals?I.A.locals:void 0,g=r.A.classNames;function f({color:n,className:e,value:t,title:r,children:a}){const i=`labelled/${l.useId()}`;if(!t)return(0,o.jsx)(o.Fragment,{children:a});const s={};return n&&(s.color=`var(--theme-color-${n})`),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("label",{htmlFor:i,title:r,className:g.join(e,x.Label),style:s,children:t}),a&&(0,o.jsx)("div",{id:i,className:x.LabelContent,children:a})]})}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFdEIsTUFBT3NCLEVBQU8wQixTQUFVYixJQUFXQSxDQUN4RSxDLCtMQ2xDSTFCLEVBQVUsQ0FBQyxFQUVmQSxFQUFRQyxrQkFBb0IsSUFDNUJELEVBQVFFLGNBQWdCLElBRWxCRixFQUFRRyxPQUFTLFNBQWMsS0FBTSxRQUUzQ0gsRUFBUUksT0FBUyxJQUNqQkosRUFBUUssbUJBQXFCLElBRWhCLElBQUksSUFBU0wsR0FLbkIsUUFBZSxLQUFXLElBQVFiLE9BQVMsSUFBUUEsWUFBU21CLEVDdEI3REMsRUFBSSxJQUFNQyxXQUNULFNBQVNnQyxHQUFVLE1BQUVDLEVBQUssVUFBRTlCLEVBQVMsTUFBRXBCLEVBQUssTUFBRUMsRUFBSyxTQUFFK0MsSUFDeEQsTUFBTXJELEVBQUssWUFBWSxZQUN2QixJQUFLSyxFQUNELE9BQU8sU0FBSyxXQUFXLENBQUVnRCxTQUFVQSxJQUN2QyxNQUFNaEIsRUFBUSxDQUFDLEVBR2YsT0FGSWtCLElBQ0FsQixFQUFNa0IsTUFBUSxxQkFBcUJBLE9BQy9CLFVBQU0sV0FBVyxDQUFFRixTQUFVLEVBQUMsU0FBSyxRQUFTLENBQUVHLFFBQVN4RCxFQUFJTSxNQUFPQSxFQUFPbUIsVUFBV0osRUFBRW9CLEtBQUtoQixFQUFXLEVBQU9nQyxPQUFRcEIsTUFBT0EsRUFBT2dCLFNBQVVoRCxJQUFVZ0QsSUFBYSxTQUFLLE1BQU8sQ0FBRXJELEdBQUlBLEVBQUl5QixVQUFXLEVBQU9pQyxhQUFjTCxTQUFVQSxNQUNoUCxDIiwic291cmNlcyI6WyIvaG9tZS9wZXRpdGplYS9Db2RlL2luc3BpcmF0aW9uL3VpL2xpYi9kaXN0L3ZpZXcvSW5wdXRUZXh0L0lucHV0VGV4dC5tb2R1bGUuY3NzIiwiL2hvbWUvcGV0aXRqZWEvQ29kZS9pbnNwaXJhdGlvbi91aS9saWIvZGlzdC92aWV3L0xhYmVsL0xhYmVsLm1vZHVsZS5jc3MiLCIvaG9tZS9wZXRpdGplYS9Db2RlL2luc3BpcmF0aW9uL3VpL2RvYy9zcmMvYXBwL3ZpZXcvTGFiZWwvZGVtby9EZWZhdWx0L0RlZmF1bHQudHN4IiwiL2hvbWUvcGV0aXRqZWEvQ29kZS9pbnNwaXJhdGlvbi91aS9kb2Mvc3JjL2FwcC92aWV3L0xhYmVsL0xhYmVsLnRzeCIsIi9ob21lL3BldGl0amVhL0NvZGUvaW5zcGlyYXRpb24vdWkvZG9jL3NyYy9hcHAvdmlldy9MYWJlbC9wYWdlLnRzeCIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3VpLy4uL2xpYi9kaXN0L3ZpZXcvSW5wdXRUZXh0L0lucHV0VGV4dC5tb2R1bGUuY3NzP2U3NzMiLCIvaG9tZS9wZXRpdGplYS9Db2RlL2luc3BpcmF0aW9uL3VpL2xpYi9kaXN0L3ZpZXcvSW5wdXRUZXh0L0lucHV0VGV4dC5qcyIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3VpLy4uL2xpYi9kaXN0L3ZpZXcvTGFiZWwvTGFiZWwubW9kdWxlLmNzcz9mZDlmIiwiL2hvbWUvcGV0aXRqZWEvQ29kZS9pbnNwaXJhdGlvbi91aS9saWIvZGlzdC92aWV3L0xhYmVsL0xhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9kb2Mvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL2RvYy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5cXFxcLS0tbGliLWRpc3Qtdmlldy1JbnB1dFRleHQtSW5wdXRUZXh0LW1vZHVsZV9JbnB1dFRleHRfZ0g1ODBsIHtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChcbiAgICAgICAgaW4gc3JnYixcbiAgICAgICAgY3VycmVudENvbG9yLFxuICAgICAgICB0cmFuc3BhcmVudCA5MCVcbiAgICApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChcbiAgICAgICAgaW4gc3JnYixcbiAgICAgICAgdmFyKC0tdGhlbWUtY29sb3ItaW5wdXQpLFxuICAgICAgICB0cmFuc3BhcmVudCA5MCVcbiAgICApO1xuICAgIHBhZGRpbmc6IDAgMC41ZW07XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgY3VycmVudENvbG9yO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uXFxcXC0tLWxpYi1kaXN0LXZpZXctSW5wdXRUZXh0LUlucHV0VGV4dC1tb2R1bGVfSW5wdXRUZXh0X2dINTgwbDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItaW5wdXQpO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1vbi1pbnB1dCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5cXFxcLS0tbGliLWRpc3Qtdmlldy1JbnB1dFRleHQtSW5wdXRUZXh0LW1vZHVsZV9JbnB1dFRleHRfZ0g1ODBsLlxcXFwtLS1saWItZGlzdC12aWV3LUlucHV0VGV4dC1JbnB1dFRleHQtbW9kdWxlX2ludmFsaWRfRkdOTE1NIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1lcnJvcik7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLW9uLWVycm9yKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vbGliL2Rpc3Qvdmlldy9JbnB1dFRleHQvSW5wdXRUZXh0Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWDs7OztLQUlDO0lBQ0Q7Ozs7S0FJQztJQUNELGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxxQ0FBcUM7SUFDckMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLklucHV0VGV4dCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KFxcbiAgICAgICAgaW4gc3JnYixcXG4gICAgICAgIGN1cnJlbnRDb2xvcixcXG4gICAgICAgIHRyYW5zcGFyZW50IDkwJVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoXFxuICAgICAgICBpbiBzcmdiLFxcbiAgICAgICAgdmFyKC0tdGhlbWUtY29sb3ItaW5wdXQpLFxcbiAgICAgICAgdHJhbnNwYXJlbnQgOTAlXFxuICAgICk7XFxuICAgIHBhZGRpbmc6IDAgMC41ZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAyZW07XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcblxcbi5JbnB1dFRleHQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1pbnB1dCk7XFxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1vbi1pbnB1dCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLklucHV0VGV4dC5pbnZhbGlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItZXJyb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3Itb24tZXJyb3IpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJJbnB1dFRleHRcIjogYC0tLWxpYi1kaXN0LXZpZXctSW5wdXRUZXh0LUlucHV0VGV4dC1tb2R1bGVfSW5wdXRUZXh0X2dINTgwbGAsXG5cdFwiaW52YWxpZFwiOiBgLS0tbGliLWRpc3Qtdmlldy1JbnB1dFRleHQtSW5wdXRUZXh0LW1vZHVsZV9pbnZhbGlkX0ZHTkxNTWBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9kb2Mvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL2RvYy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5cXFxcLS0tbGliLWRpc3Qtdmlldy1MYWJlbC1MYWJlbC1tb2R1bGVfTGFiZWxDb250ZW50X1lZYjE5MCB7XG4gICAgYWxsOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG4uXFxcXC0tLWxpYi1kaXN0LXZpZXctTGFiZWwtTGFiZWwtbW9kdWxlX0xhYmVsX21VVXJPTyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vbGliL2Rpc3Qvdmlldy9MYWJlbC9MYWJlbC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkxhYmVsQ29udGVudCB7XFxuICAgIGFsbDogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxuLkxhYmVsIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtc2l6ZTogOTAlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkxhYmVsQ29udGVudFwiOiBgLS0tbGliLWRpc3Qtdmlldy1MYWJlbC1MYWJlbC1tb2R1bGVfTGFiZWxDb250ZW50X1lZYjE5MGAsXG5cdFwiTGFiZWxcIjogYC0tLWxpYi1kaXN0LXZpZXctTGFiZWwtTGFiZWwtbW9kdWxlX0xhYmVsX21VVXJPT2Bcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0lucHV0VGV4dCwgVmlld0xhYmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiTXIgQmVhblwiKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3TGFiZWwgdmFsdWU9XCJXaGF0J3MgeW91ciBuYW1lP1wiIHRpdGxlPVwiVGhpcyBpcyBhIHRvb2x0aXAuLi5cIj5cbiAgICAgICAgICAgIDxWaWV3SW5wdXRUZXh0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17c2V0TmFtZX0gLz5cbiAgICAgICAgPC9WaWV3TGFiZWw+XG4gICAgKVxufVxuIiwiLyoqXG4gKiAyMDI0LTA1LTE0VDEyOjA4OjA5LjcxMVpcbiAqXG4gKiBUaGlzIGZpbGUgaGFzIGJlZW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgd2l0aDpcbiAqIG5wbSBydW4gZ2VuZXJhdGVcbiAqIFxuICogUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQgbWFudWFsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFZpZXdEb2N1bWVudGF0aW9uIGZyb20gXCJAL3ZpZXcvVmlld0RvY3VtZW50YXRpb25cIlxuaW1wb3J0IFZpZXdEZW1vIGZyb20gXCJAL3ZpZXcvVmlld0RlbW9cIlxuaW1wb3J0IERlbW9EZWZhdWx0IGZyb20gXCIuL2RlbW8vRGVmYXVsdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhYmVsRG9jdW1lbnRhdGlvbigpIHtcbiAgICByZXR1cm4gPFZpZXdEb2N1bWVudGF0aW9uIHRpdGxlPSdpbXBvcnQgeyBWaWV3TGFiZWwgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiJz5cbiAgICAgICAgPFZpZXdEZW1vXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17XCIjIERlZmF1bHQgdXNhZ2VcXG5cIn1cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10ZW1wbGF0ZS1jdXJseS1pbi1zdHJpbmdcbiAgICAgICAgICAgIGV4YW1wbGU9e1wiaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCB7IFZpZXdJbnB1dFRleHQsIFZpZXdMYWJlbCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoXFxcIk1yIEJlYW5cXFwiKVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdMYWJlbCB2YWx1ZT1cXFwiV2hhdCdzIHlvdXIgbmFtZT9cXFwiIHRpdGxlPVxcXCJUaGlzIGlzIGEgdG9vbHRpcC4uLlxcXCI+XFxuICAgICAgICAgICAgPFZpZXdJbnB1dFRleHQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtzZXROYW1lfSAvPlxcbiAgICAgICAgPC9WaWV3TGFiZWw+XFxuICAgIClcXG59XFxuXCJ9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxEZW1vRGVmYXVsdCAvPlxuICAgICAgICA8L1ZpZXdEZW1vPlxuICAgIDwvVmlld0RvY3VtZW50YXRpb24+XG59IiwiLyoqXG4gKiAyMDI0LTA1LTE0VDEyOjA4OjA5LjcxMVpcbiAqXG4gKiBUaGlzIGZpbGUgaGFzIGJlZW4gYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgd2l0aDpcbiAqIG5wbSBydW4gZ2VuZXJhdGVcbiAqIFxuICogUGxlYXNlIGRvIG5vdCBtb2RpZnkgaXQgbWFudWFsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFZpZXdMYWJlbCBmcm9tIFwiLi9MYWJlbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VWaWV3TGFiZWwoKSB7XG4gICAgcmV0dXJuIDxWaWV3TGFiZWwgLz5cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL2RvYy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9kb2Mvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL2RvYy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL2RvYy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9kb2Mvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL2RvYy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vZG9jL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVsxXSEuL0lucHV0VGV4dC5tb2R1bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vZG9jL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVsxXSEuL0lucHV0VGV4dC5tb2R1bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiLi4vLi4vdGhlbWUvaW5kZXguanNcIjtcbmltcG9ydCB7IHN0eWxlU3BhY2UgfSBmcm9tIFwiLi4vLi4vdGhlbWUvc3R5bGVzL3NwYWNlLmpzXCI7XG5pbXBvcnQgeyBWaWV3TGFiZWwgfSBmcm9tIFwiLi4vTGFiZWwvaW5kZXguanNcIjtcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vSW5wdXRUZXh0Lm1vZHVsZS5jc3NcIjtcbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzO1xuZXhwb3J0IGZ1bmN0aW9uIFZpZXdJbnB1dFRleHQocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgcGxhY2Vob2xkZXIsIHZhbHVlID0gXCJcIiwgbGFiZWwsIG5hbWUsIGF1dG9mb2N1cyA9IGZhbHNlLCBvbkNoYW5nZSwgb25FbnRlcktleVByZXNzZWQsIHR5cGUgPSBcInRleHRcIiwgbWF4V2lkdGgsIHZhbGlkYXRvciwgfSA9IHByb3BzO1xuICAgIGNvbnN0IFtpbnZhbGlkLCBzZXRJbnZhbGlkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSBSZWFjdC51c2VTdGF0ZSh2YWx1ZSk7XG4gICAgY29uc3QgaGFuZGxlS2V5ZG93biA9IChldnQpID0+IHtcbiAgICAgICAgaWYgKGludmFsaWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChldnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb25FbnRlcktleVByZXNzZWQgPT09IG51bGwgfHwgb25FbnRlcktleVByZXNzZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uRW50ZXJLZXlQcmVzc2VkKHRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcbiAgICAgICAgc2V0SW52YWxpZChmYWxzZSk7XG4gICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IubGFzdEluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW52YWxpZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWxpZGF0b3IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHNldEludmFsaWQoIXZhbGlkYXRvcih2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRleHQodmFsdWUpO1xuICAgIH07XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKHRleHQpO1xuICAgIH0sIFtvbkNoYW5nZSwgdGV4dF0pO1xuICAgIGNvbnN0IHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGVTcGFjZShwcm9wcykpO1xuICAgIGlmIChtYXhXaWR0aClcbiAgICAgICAgc3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aDtcbiAgICBjb25zdCBpbnB1dCA9IChfanN4KFwiaW5wdXRcIiwgeyBjbGFzc05hbWU6ICQuam9pbihjbGFzc05hbWUsIFN0eWxlcy5JbnB1dFRleHQsIGludmFsaWQgJiYgU3R5bGVzLmludmFsaWQpLCBzdHlsZTogc3R5bGUsIGF1dG9Gb2N1czogYXV0b2ZvY3VzLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIHR5cGU6IHR5cGUsIHZhbHVlOiB0ZXh0LCBuYW1lOiBuYW1lLCBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLCBvbktleURvd246IGhhbmRsZUtleWRvd24gfSkpO1xuICAgIHJldHVybiBsYWJlbCA/IF9qc3goVmlld0xhYmVsLCB7IHZhbHVlOiBsYWJlbCwgY2hpbGRyZW46IGlucHV0IH0pIDogaW5wdXQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTVzV3ZFhSVVpYaDBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZMaTR2TGk0dmMzSmpMM1pwWlhjdlNXNXdkWFJVWlhoMEwwbHVjSFYwVkdWNGRDNTBjM2dpWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxFOUJRVThzUzBGQlN5eExRVUZMTEUxQlFVMHNUMEZCVHl4RFFVRkJPMEZCUlRsQ0xFOUJRVThzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4elFrRkJjMElzUTBGQlFUdEJRVU0xUXl4UFFVRlBMRVZCUVcxQ0xGVkJRVlVzUlVGQlJTeE5RVUZOTERaQ1FVRTJRaXhEUVVGQk8wRkJRM3BGTEU5QlFVOHNSVUZCUlN4VFFVRlRMRVZCUVVVc1RVRkJUU3h0UWtGQmJVSXNRMEZCUVR0QlFVczNReXhQUVVGUExFMUJRVTBzVFVGQlRTeDNRa0ZCZDBJc1EwRkJRVHRCUVVVelF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGQk8wRkJiMFF4UWl4TlFVRk5MRlZCUVZVc1lVRkJZU3hEUVVGRExFdEJRWGxDTzBsQlEyNUVMRTFCUVUwc1JVRkRSaXhUUVVGVExFVkJRMVFzVjBGQlZ5eEZRVU5ZTEV0QlFVc3NSMEZCUnl4RlFVRkZMRVZCUTFZc1MwRkJTeXhGUVVOTUxFbEJRVWtzUlVGRFNpeFRRVUZUTEVkQlFVY3NTMEZCU3l4RlFVTnFRaXhSUVVGUkxFVkJRMUlzYVVKQlFXbENMRVZCUTJwQ0xFbEJRVWtzUjBGQlJ5eE5RVUZOTEVWQlEySXNVVUZCVVN4RlFVTlNMRk5CUVZNc1IwRkRXaXhIUVVGSExFdEJRVXNzUTBGQlFUdEpRVU5VTEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJWU3hEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRVHRKUVVOdVJDeE5RVUZOTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVFN1NVRkROME1zVFVGQlRTeGhRVUZoTEVkQlFVY3NRMEZCUXl4SFFVRXdReXhGUVVGRkxFVkJRVVU3VVVGRGFrVXNTVUZCU1N4UFFVRlBPMWxCUVVVc1QwRkJUVHRSUVVWdVFpeEpRVUZKTEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1QwRkJUeXhGUVVGRkxFTkJRVU03V1VGRGRFSXNSMEZCUnl4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGQk8xbEJRM0JDTEVkQlFVY3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRVHRaUVVOeVFpeHBRa0ZCYVVJc1lVRkJha0lzYVVKQlFXbENMSFZDUVVGcVFpeHBRa0ZCYVVJc1EwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlFUdFJRVU0zUWl4RFFVRkRPMGxCUTB3c1EwRkJReXhEUVVGQk8wbEJRMFFzVFVGQlRTeFpRVUZaTEVkQlFVY3NRMEZCUXl4SFFVRjNReXhGUVVGRkxFVkJRVVU3VVVGRE9VUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVRTdVVUZET1VJc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzFGQlEycENMRWxCUVVrc1UwRkJVeXhGUVVGRkxFTkJRVU03V1VGRFdpeEpRVUZKTEZOQlFWTXNXVUZCV1N4TlFVRk5MRVZCUVVVc1EwRkJRenRuUWtGRE9VSXNVMEZCVXl4RFFVRkRMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlFUdG5Ra0ZEZUVJc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRenR2UWtGRGVrSXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk8yOUNRVU5vUWl4UFFVRk5PMmRDUVVOV0xFTkJRVU03V1VGRFRDeERRVUZETzJsQ1FVRk5MRWxCUVVrc1QwRkJUeXhUUVVGVExFdEJRVXNzVlVGQlZTeEZRVUZGTEVOQlFVTTdaMEpCUTNwRExGVkJRVlVzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGQk8xbEJRMnBETEVOQlFVTTdVVUZEVEN4RFFVRkRPMUZCUTBRc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzBsQlEyeENMRU5CUVVNc1EwRkJRVHRKUVVORUxFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RlFVRkZPMUZCUTJwQ0xGRkJRVkVzWVVGQlVpeFJRVUZSTEhWQ1FVRlNMRkZCUVZFc1EwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlFUdEpRVU53UWl4RFFVRkRMRVZCUVVVc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUVR0SlFVTndRaXhOUVVGTkxFdEJRVXNzY1VKQlEwb3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVOMlFpeERRVUZCTzBsQlEwUXNTVUZCU1N4UlFVRlJPMUZCUVVVc1MwRkJTeXhEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVRTdTVUZEZGtNc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGRFZpeG5Ra0ZEU1N4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGRFlpeFRRVUZUTEVWQlExUXNUVUZCVFN4RFFVRkRMRk5CUVZNc1JVRkRhRUlzVDBGQlR5eEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUXpWQ0xFVkJRMFFzUzBGQlN5eEZRVUZGTEV0QlFVc3NSVUZEV2l4VFFVRlRMRVZCUVVVc1UwRkJVeXhGUVVOd1FpeFhRVUZYTEVWQlFVVXNWMEZCVnl4RlFVTjRRaXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVU5XTEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUTFnc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGRFZpeFJRVUZSTEVWQlFVVXNXVUZCV1N4RlFVTjBRaXhUUVVGVExFVkJRVVVzWVVGQllTeEhRVU14UWl4RFFVTk1MRU5CUVVFN1NVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCUXl4VFFVRlRMRWxCUVVNc1MwRkJTeXhGUVVGRkxFdEJRVXNzV1VGQlJ5eExRVUZMTEVkQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGQk8wRkJRM1pGTEVOQlFVTWlmUT09IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vZG9jL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL2RvYy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vZG9jL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vZG9jL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL2RvYy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vZG9jL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9kb2Mvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4vTGFiZWwubW9kdWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL2RvYy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi9MYWJlbC5tb2R1bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gXCIuLi8uLi90aGVtZS9pbmRleC5qc1wiO1xuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9MYWJlbC5tb2R1bGUuY3NzXCI7XG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lcztcbmV4cG9ydCBmdW5jdGlvbiBWaWV3TGFiZWwoeyBjb2xvciwgY2xhc3NOYW1lLCB2YWx1ZSwgdGl0bGUsIGNoaWxkcmVuLCB9KSB7XG4gICAgY29uc3QgaWQgPSBgbGFiZWxsZWQvJHtSZWFjdC51c2VJZCgpfWA7XG4gICAgaWYgKCF2YWx1ZSlcbiAgICAgICAgcmV0dXJuIF9qc3goX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KTtcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgIGlmIChjb2xvcilcbiAgICAgICAgc3R5bGUuY29sb3IgPSBgdmFyKC0tdGhlbWUtY29sb3ItJHtjb2xvcn0pYDtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goXCJsYWJlbFwiLCB7IGh0bWxGb3I6IGlkLCB0aXRsZTogdGl0bGUsIGNsYXNzTmFtZTogJC5qb2luKGNsYXNzTmFtZSwgU3R5bGVzLkxhYmVsKSwgc3R5bGU6IHN0eWxlLCBjaGlsZHJlbjogdmFsdWUgfSksIGNoaWxkcmVuICYmIChfanN4KFwiZGl2XCIsIHsgaWQ6IGlkLCBjbGFzc05hbWU6IFN0eWxlcy5MYWJlbENvbnRlbnQsIGNoaWxkcmVuOiBjaGlsZHJlbiB9KSldIH0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVRHRmlaV3d1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk4dUxpOXpjbU12ZG1sbGR5OU1ZV0psYkM5TVlXSmxiQzUwYzNnaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRTlCUVU4c1MwRkJTeXhMUVVGTExFMUJRVTBzVDBGQlR5eERRVUZCTzBGQlJUbENMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeHpRa0ZCYzBJc1EwRkJRVHRCUVVrMVF5eFBRVUZQTEUxQlFVMHNUVUZCVFN4dlFrRkJiMElzUTBGQlFUdEJRVVYyUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZCTzBGQlowSXhRaXhOUVVGTkxGVkJRVlVzVTBGQlV5eERRVUZETEVWQlEzUkNMRXRCUVVzc1JVRkRUQ3hUUVVGVExFVkJRMVFzUzBGQlN5eEZRVU5NTEV0QlFVc3NSVUZEVEN4UlFVRlJMRWRCUTBzN1NVRkRZaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eFpRVUZaTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGQk8wbEJRM1JETEVsQlFVa3NRMEZCUXl4TFFVRkxPMUZCUVVVc1QwRkJUeXcwUWtGQlJ5eFJRVUZSTEVkQlFVa3NRMEZCUVR0SlFVVnNReXhOUVVGTkxFdEJRVXNzUjBGQmQwSXNSVUZCUlN4RFFVRkJPMGxCUTNKRExFbEJRVWtzUzBGQlN6dFJRVUZGTEV0QlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc2NVSkJRWEZDTEV0QlFVc3NSMEZCUnl4RFFVRkJPMGxCUTNSRUxFOUJRVThzUTBGRFNDdzRRa0ZEU1N4blFrRkRTU3hQUVVGUExFVkJRVVVzUlVGQlJTeEZRVU5ZTEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUTFvc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGRE1VTXNTMEZCU3l4RlFVRkZMRXRCUVVzc1dVRkZXQ3hMUVVGTExFZEJRMFlzUlVGRFVDeFJRVUZSTEVsQlFVa3NRMEZEVkN4alFVRkxMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVVzVTBGQlV5eEZRVUZGTEUxQlFVMHNRMEZCUXl4WlFVRlpMRmxCUTNSRExGRkJRVkVzUjBGRFVDeERRVU5VTEVsQlEwWXNRMEZEVGl4RFFVRkJPMEZCUTB3c1EwRkJReUo5Il0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwibG9jYWxzIiwiRGVtbyIsIm5hbWUiLCJzZXROYW1lIiwidmFsdWUiLCJ0aXRsZSIsIm9uQ2hhbmdlIiwiTGFiZWxEb2N1bWVudGF0aW9uIiwiVmlld0RvY3VtZW50YXRpb24iLCJWaWV3RGVtbyIsImRlc2NyaXB0aW9uIiwiZXhhbXBsZSIsIlBhZ2VWaWV3TGFiZWwiLCJvcHRpb25zIiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJzZXRBdHRyaWJ1dGVzIiwiaW5zZXJ0IiwiZG9tQVBJIiwiaW5zZXJ0U3R5bGVFbGVtZW50IiwidW5kZWZpbmVkIiwiJCIsImNsYXNzTmFtZXMiLCJWaWV3SW5wdXRUZXh0IiwicHJvcHMiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiYXV0b2ZvY3VzIiwib25FbnRlcktleVByZXNzZWQiLCJ0eXBlIiwibWF4V2lkdGgiLCJ2YWxpZGF0b3IiLCJpbnZhbGlkIiwic2V0SW52YWxpZCIsInRleHQiLCJzZXRUZXh0Iiwic3R5bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJpbnB1dCIsImpvaW4iLCJJbnB1dFRleHQiLCJhdXRvRm9jdXMiLCJldnQiLCJ0YXJnZXQiLCJSZWdFeHAiLCJsYXN0SW5kZXgiLCJ0ZXN0Iiwib25LZXlEb3duIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjaGlsZHJlbiIsIlZpZXdMYWJlbCIsImNvbG9yIiwiaHRtbEZvciIsIkxhYmVsIiwiTGFiZWxDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==