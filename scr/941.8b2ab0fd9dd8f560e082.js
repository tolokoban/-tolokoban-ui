"use strict";(self.webpackChunk_tolokoban_ui=self.webpackChunk_tolokoban_ui||[]).push([[941],{3514:(e,n,o)=>{o.d(n,{A:()=>r});var t=o(1354),i=o.n(t),s=o(6314),a=o.n(s)()(i());a.push([e.id,".src-view-Code-Code-module_Code_PeSzTL {\n    \n}","",{version:3,sources:["webpack://./src/view/Code/Code.module.css"],names:[],mappings:"AAAA;;AAEA",sourcesContent:[".Code {\n    \n}"],sourceRoot:""}]),a.locals={Code:"src-view-Code-Code-module_Code_PeSzTL"};const r=a},7599:(e,n,o)=>{o.d(n,{A:()=>r});var t=o(1354),i=o.n(t),s=o(6314),a=o.n(s)()(i());a.push([e.id,".src-view-ViewDemo-ViewDemo-module_ViewDemo_vx9asV {\n    \n}","",{version:3,sources:["webpack://./src/view/ViewDemo/ViewDemo.module.css"],names:[],mappings:"AAAA;;AAEA",sourcesContent:[".ViewDemo {\n    \n}"],sourceRoot:""}]),a.locals={ViewDemo:"src-view-ViewDemo-ViewDemo-module_ViewDemo_vx9asV"};const r=a},3714:(e,n,o)=>{o.d(n,{A:()=>r});var t=o(1354),i=o.n(t),s=o(6314),a=o.n(s)()(i());a.push([e.id,".src-view-ViewDocumentation-ViewDocumentation-module_ViewDocumentation_kYkS5d > header {\n    background-color: var(--theme-color-primary-2);\n    color: var(--theme-color-on-primary-2);\n    padding: var(--theme-gap-M);\n    margin: 0;\n}\n","",{version:3,sources:["webpack://./src/view/ViewDocumentation/ViewDocumentation.module.css"],names:[],mappings:"AAAA;IACI,8CAA8C;IAC9C,sCAAsC;IACtC,2BAA2B;IAC3B,SAAS;AACb",sourcesContent:[".ViewDocumentation > header {\n    background-color: var(--theme-color-primary-2);\n    color: var(--theme-color-on-primary-2);\n    padding: var(--theme-gap-M);\n    margin: 0;\n}\n"],sourceRoot:""}]),a.locals={ViewDocumentation:"src-view-ViewDocumentation-ViewDocumentation-module_ViewDocumentation_kYkS5d"};const r=a},6941:(e,n,o)=>{o.r(n),o.d(n,{default:()=>d});var t=o(4848),i=o(2296),s=o(8464),a=o(6540),r=o(7049),l=o(3770);function c(){const[e,n]=a.useState(30),[o,i]=a.useState(1.975);return(0,t.jsxs)(r.s,{display:"grid",gridTemplateColumns:"auto 100px",gap:"S",padding:"L",color:"neutral-6",width:"320px",placeItems:"center start",children:[(0,t.jsx)(l.D,{value:e,onChange:n,label:"Liters of oil:",width:"3em"}),(0,t.jsx)(l.D,{value:o,onChange:i,label:"Price per liter:",width:"4em"}),(0,t.jsx)("hr",{style:{gridColumn:"1/-1",width:"100%"}}),(0,t.jsx)("div",{children:"Total to pay:"}),(0,t.jsx)("output",{children:(0,t.jsx)("b",{children:e*o})})]})}function u(){return(0,t.jsx)(i.A,{title:'import { ViewInputNumber } from "@tolokoban/ui"',children:(0,t.jsx)(s.A,{description:"# Default usage\n",example:'import React from "react"\nimport { ViewInputNumber, ViewPanel } from "@tolokoban/ui"\n\nexport default function Demo() {\n    const [a, setA] = React.useState(30)\n    const [b, setB] = React.useState(1.975)\n    return (\n        <ViewPanel\n            display="grid"\n            gridTemplateColumns="auto 100px"\n            gap="S"\n            padding="L"\n            color="neutral-6"\n            width="320px"\n            placeItems="center start"\n        >\n            <ViewInputNumber\n                value={a}\n                onChange={setA}\n                label="Liters of oil:"\n                width="3em"\n            />\n            <ViewInputNumber\n                value={b}\n                onChange={setB}\n                label="Price per liter:"\n                width="4em"\n            />\n            <hr\n                style={{\n                    gridColumn: "1/-1",\n                    width: "100%",\n                }}\n            />\n            <div>Total to pay:</div>\n            <output>\n                <b>{a * b}</b>\n            </output>\n        </ViewPanel>\n    )\n}\n',children:(0,t.jsx)(c,{})})})}function d(){return(0,t.jsx)(u,{})}},8464:(e,n,o)=>{o.d(n,{A:()=>T});var t=o(4848),i=o(6781),s=o(7049),a=o(6540),r=o(9550),l=o(2182),c=o(5726),u=o(9327),d=o(5072),m=o.n(d),A=o(7825),p=o.n(A),h=o(7659),w=o.n(h),v=o(5056),b=o.n(v),g=o(540),x=o.n(g),C=o(1113),V=o.n(C),j=o(3514),D={};D.styleTagTransform=V(),D.setAttributes=b(),D.insert=w().bind(null,"head"),D.domAPI=p(),D.insertStyleElement=x(),m()(j.A,D);const N=j.A&&j.A.locals?j.A.locals:void 0,f=i.Sx.classNames;function I({className:e,children:n}){const[o,i]=a.useState(!1);return(0,t.jsxs)("div",{className:f.join(e,N.Code),children:[(0,t.jsxs)(r.y,{variant:"text",onClick:()=>i(!o),children:[o?(0,t.jsx)(l.A,{}):(0,t.jsx)(c.A,{}),(0,t.jsx)("div",{children:"Example's code:"})]}),o&&(0,t.jsx)(u.f,{children:n})]})}var S=o(7599),y={};y.styleTagTransform=V(),y.setAttributes=b(),y.insert=w().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=x(),m()(S.A,y);const k=S.A&&S.A.locals?S.A.locals:void 0,_=i.Sx.classNames;function T({className:e,example:n,children:o}){return(0,t.jsxs)(s.s,{color:"neutral-4",padding:"M",margin:"M",children:[(0,t.jsx)("div",{className:_.join(e,k.ViewDemo),children:o}),(0,t.jsx)("hr",{}),(0,t.jsx)(I,{children:n})]})}},2296:(e,n,o)=>{o.d(n,{A:()=>V});var t=o(4848),i=o(6781),s=o(7049),a=o(5072),r=o.n(a),l=o(7825),c=o.n(l),u=o(7659),d=o.n(u),m=o(5056),A=o.n(m),p=o(540),h=o.n(p),w=o(1113),v=o.n(w),b=o(3714),g={};g.styleTagTransform=v(),g.setAttributes=A(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=h(),r()(b.A,g);const x=b.A&&b.A.locals?b.A.locals:void 0,C=i.Sx.classNames;function V({className:e,title:n,children:o}){return(0,t.jsxs)("div",{className:C.join(e,x.ViewDocumentation),children:[(0,t.jsx)(s.s,{margin:0,padding:"M",color:"primary-2",children:n}),(0,t.jsx)(s.s,{margin:0,padding:"M",overflow:"auto",children:o})]})}},3770:(e,n,o)=>{o.d(n,{D:()=>s});var t=o(4848),i=o(1323);function s(e){var n,o;const s=null!==(n=e.min)&&void 0!==n?n:Number.NEGATIVE_INFINITY,a=null!==(o=e.max)&&void 0!==o?o:Number.POSITIVE_INFINITY,r=Object.assign(Object.assign({},e),{value:`${e.value}`,onChange:n=>{const o=Number(n);Number.isFinite(o)&&e.onChange(o)},type:"number",validator:e=>{const n=Number(e);return Number.isFinite(n)&&n>=s&&n<=a}});return(0,t.jsx)(i.H,Object.assign({},r))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VzZDLElBQ3hGLE1BQU1DLEVBQU1SLE9BQU9PLEdBQ2ZQLE9BQU9TLFNBQVNELElBQ2hCWixFQUFNbEMsU0FBUzhDLEVBQ25CLEVBQ0RFLEtBQU0sU0FBVUMsVUFBWUosSUFDM0IsTUFBTUMsRUFBTVIsT0FBT08sR0FDbkIsT0FBT1AsT0FBT1MsU0FBU0QsSUFBUUEsR0FBT1QsR0FBT1MsR0FBT04sQ0FBRyxJQUUvRCxPQUFPLFNBQUssSUFBZUcsT0FBT0MsT0FBTyxDQUFDLEVBQUdGLEdBQ2pELEMiLCJzb3VyY2VzIjpbIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9AdG9sb2tvYmFuL3VpL2RvYy9zcmMvdmlldy9Db2RlL0NvZGUubW9kdWxlLmNzcyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9AdG9sb2tvYmFuL3VpL2RvYy9zcmMvdmlldy9WaWV3RGVtby9WaWV3RGVtby5tb2R1bGUuY3NzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL0B0b2xva29iYW4vdWkvZG9jL3NyYy92aWV3L1ZpZXdEb2N1bWVudGF0aW9uL1ZpZXdEb2N1bWVudGF0aW9uLm1vZHVsZS5jc3MiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvQHRvbG9rb2Jhbi91aS9kb2Mvc3JjL2FwcC92aWV3L0lucHV0TnVtYmVyL2RlbW8vRGVmYXVsdC9EZWZhdWx0LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9AdG9sb2tvYmFuL3VpL2RvYy9zcmMvYXBwL3ZpZXcvSW5wdXROdW1iZXIvSW5wdXROdW1iZXIudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL0B0b2xva29iYW4vdWkvZG9jL3NyYy9hcHAvdmlldy9JbnB1dE51bWJlci9wYWdlLnRzeCIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3VpLy4vc3JjL3ZpZXcvQ29kZS9Db2RlLm1vZHVsZS5jc3M/OGM5NiIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9AdG9sb2tvYmFuL3VpL2RvYy9zcmMvdmlldy9Db2RlL0NvZGUudHN4Iiwid2VicGFjazovL0B0b2xva29iYW4vdWkvLi9zcmMvdmlldy9WaWV3RGVtby9WaWV3RGVtby5tb2R1bGUuY3NzP2RmMTgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvQHRvbG9rb2Jhbi91aS9kb2Mvc3JjL3ZpZXcvVmlld0RlbW8vVmlld0RlbW8udHN4Iiwid2VicGFjazovL0B0b2xva29iYW4vdWkvLi9zcmMvdmlldy9WaWV3RG9jdW1lbnRhdGlvbi9WaWV3RG9jdW1lbnRhdGlvbi5tb2R1bGUuY3NzPzkyMDYiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvQHRvbG9rb2Jhbi91aS9kb2Mvc3JjL3ZpZXcvVmlld0RvY3VtZW50YXRpb24vVmlld0RvY3VtZW50YXRpb24udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL0B0b2xva29iYW4vdWkvbGliL2Rpc3Qvdmlldy9JbnB1dE51bWJlci9JbnB1dE51bWJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy12aWV3LUNvZGUtQ29kZS1tb2R1bGVfQ29kZV9QZVN6VEwge1xuICAgIFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXcvQ29kZS9Db2RlLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0FBRUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkNvZGUge1xcbiAgICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiQ29kZVwiOiBgc3JjLXZpZXctQ29kZS1Db2RlLW1vZHVsZV9Db2RlX1BlU3pUTGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXZpZXctVmlld0RlbW8tVmlld0RlbW8tbW9kdWxlX1ZpZXdEZW1vX3Z4OWFzViB7XG4gICAgXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlldy9WaWV3RGVtby9WaWV3RGVtby5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5WaWV3RGVtbyB7XFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJWaWV3RGVtb1wiOiBgc3JjLXZpZXctVmlld0RlbW8tVmlld0RlbW8tbW9kdWxlX1ZpZXdEZW1vX3Z4OWFzVmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXZpZXctVmlld0RvY3VtZW50YXRpb24tVmlld0RvY3VtZW50YXRpb24tbW9kdWxlX1ZpZXdEb2N1bWVudGF0aW9uX2tZa1M1ZCA+IGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeS0yKTtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3Itb24tcHJpbWFyeS0yKTtcbiAgICBwYWRkaW5nOiB2YXIoLS10aGVtZS1nYXAtTSk7XG4gICAgbWFyZ2luOiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlldy9WaWV3RG9jdW1lbnRhdGlvbi9WaWV3RG9jdW1lbnRhdGlvbi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOENBQThDO0lBQzlDLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5WaWV3RG9jdW1lbnRhdGlvbiA+IGhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnktMik7XFxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1vbi1wcmltYXJ5LTIpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS10aGVtZS1nYXAtTSk7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiVmlld0RvY3VtZW50YXRpb25cIjogYHNyYy12aWV3LVZpZXdEb2N1bWVudGF0aW9uLVZpZXdEb2N1bWVudGF0aW9uLW1vZHVsZV9WaWV3RG9jdW1lbnRhdGlvbl9rWWtTNWRgXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdJbnB1dE51bWJlciwgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IFthLCBzZXRBXSA9IFJlYWN0LnVzZVN0YXRlKDMwKVxuICAgIGNvbnN0IFtiLCBzZXRCXSA9IFJlYWN0LnVzZVN0YXRlKDEuOTc1KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3UGFuZWxcbiAgICAgICAgICAgIGRpc3BsYXk9XCJncmlkXCJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJhdXRvIDEwMHB4XCJcbiAgICAgICAgICAgIGdhcD1cIlNcIlxuICAgICAgICAgICAgcGFkZGluZz1cIkxcIlxuICAgICAgICAgICAgY29sb3I9XCJuZXV0cmFsLTZcIlxuICAgICAgICAgICAgd2lkdGg9XCIzMjBweFwiXG4gICAgICAgICAgICBwbGFjZUl0ZW1zPVwiY2VudGVyIHN0YXJ0XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxuICAgICAgICAgICAgICAgIHZhbHVlPXthfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRBfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGl0ZXJzIG9mIG9pbDpcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiM2VtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2J9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEJ9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcmljZSBwZXIgbGl0ZXI6XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjRlbVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGhyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogXCIxLy0xXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+VG90YWwgdG8gcGF5OjwvZGl2PlxuICAgICAgICAgICAgPG91dHB1dD5cbiAgICAgICAgICAgICAgICA8Yj57YSAqIGJ9PC9iPlxuICAgICAgICAgICAgPC9vdXRwdXQ+XG4gICAgICAgIDwvVmlld1BhbmVsPlxuICAgIClcbn1cbiIsIi8qKlxuICogMjAyNC0xMS0wMVQwNzo0NToyNS4zMDNaXG4gKlxuICogVGhpcyBmaWxlIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIHdpdGg6XG4gKiBucG0gcnVuIGdlbmVyYXRlXG4gKiBcbiAqIFBsZWFzZSBkbyBub3QgbW9kaWZ5IGl0IG1hbnVhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBWaWV3RG9jdW1lbnRhdGlvbiBmcm9tIFwiQC92aWV3L1ZpZXdEb2N1bWVudGF0aW9uXCJcbmltcG9ydCBWaWV3RGVtbyBmcm9tIFwiQC92aWV3L1ZpZXdEZW1vXCJcbmltcG9ydCBEZW1vRGVmYXVsdCBmcm9tIFwiLi9kZW1vL0RlZmF1bHRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dE51bWJlckRvY3VtZW50YXRpb24oKSB7XG4gICAgcmV0dXJuIDxWaWV3RG9jdW1lbnRhdGlvbiB0aXRsZT0naW1wb3J0IHsgVmlld0lucHV0TnVtYmVyIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIic+XG4gICAgICAgIDxWaWV3RGVtb1xuICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiIyBEZWZhdWx0IHVzYWdlXFxuXCJ9XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nXG4gICAgICAgICAgICBleGFtcGxlPXtcImltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgeyBWaWV3SW5wdXROdW1iZXIsIFZpZXdQYW5lbCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgW2EsIHNldEFdID0gUmVhY3QudXNlU3RhdGUoMzApXFxuICAgIGNvbnN0IFtiLCBzZXRCXSA9IFJlYWN0LnVzZVN0YXRlKDEuOTc1KVxcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdQYW5lbFxcbiAgICAgICAgICAgIGRpc3BsYXk9XFxcImdyaWRcXFwiXFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1ucz1cXFwiYXV0byAxMDBweFxcXCJcXG4gICAgICAgICAgICBnYXA9XFxcIlNcXFwiXFxuICAgICAgICAgICAgcGFkZGluZz1cXFwiTFxcXCJcXG4gICAgICAgICAgICBjb2xvcj1cXFwibmV1dHJhbC02XFxcIlxcbiAgICAgICAgICAgIHdpZHRoPVxcXCIzMjBweFxcXCJcXG4gICAgICAgICAgICBwbGFjZUl0ZW1zPVxcXCJjZW50ZXIgc3RhcnRcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxcbiAgICAgICAgICAgICAgICB2YWx1ZT17YX1cXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldEF9XFxuICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJMaXRlcnMgb2Ygb2lsOlxcXCJcXG4gICAgICAgICAgICAgICAgd2lkdGg9XFxcIjNlbVxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcXG4gICAgICAgICAgICAgICAgdmFsdWU9e2J9XFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRCfVxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwiUHJpY2UgcGVyIGxpdGVyOlxcXCJcXG4gICAgICAgICAgICAgICAgd2lkdGg9XFxcIjRlbVxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxoclxcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENvbHVtbjogXFxcIjEvLTFcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFxcXCIxMDAlXFxcIixcXG4gICAgICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxkaXY+VG90YWwgdG8gcGF5OjwvZGl2PlxcbiAgICAgICAgICAgIDxvdXRwdXQ+XFxuICAgICAgICAgICAgICAgIDxiPnthICogYn08L2I+XFxuICAgICAgICAgICAgPC9vdXRwdXQ+XFxuICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgKVxcbn1cXG5cIn1cbiAgICAgICAgPlxuICAgICAgICAgICAgPERlbW9EZWZhdWx0IC8+XG4gICAgICAgIDwvVmlld0RlbW8+XG4gICAgPC9WaWV3RG9jdW1lbnRhdGlvbj5cbn0iLCIvKipcbiAqIDIwMjQtMTEtMDFUMDc6NDU6MjUuMzA0WlxuICpcbiAqIFRoaXMgZmlsZSBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCB3aXRoOlxuICogbnBtIHJ1biBnZW5lcmF0ZVxuICogXG4gKiBQbGVhc2UgZG8gbm90IG1vZGlmeSBpdCBtYW51YWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmlld0lucHV0TnVtYmVyIGZyb20gXCIuL0lucHV0TnVtYmVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVZpZXdJbnB1dE51bWJlcigpIHtcbiAgICByZXR1cm4gPFZpZXdJbnB1dE51bWJlciAvPlxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi9Db2RlLm1vZHVsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi9Db2RlLm1vZHVsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lLCBWaWV3QnV0dG9uLCBJY29uQXJyb3dSaWdodCwgSWNvbkFycm93RG93biB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSBcIi4uL0hpZ2hsaWdodFwiXG5cbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlLm1vZHVsZS5jc3NcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgY2hpbGRyZW46IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9OiBDb2RlUHJvcHMpIHtcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXskLmpvaW4oY2xhc3NOYW1lLCBTdHlsZS5Db2RlKX0+XG4gICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwidGV4dFwiIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9PlxuICAgICAgICAgICAgICAgIHtleHBhbmRlZCA/IDxJY29uQXJyb3dEb3duIC8+IDogPEljb25BcnJvd1JpZ2h0IC8+fVxuICAgICAgICAgICAgICAgIDxkaXY+RXhhbXBsZSdzIGNvZGU6PC9kaXY+XG4gICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICB7ZXhwYW5kZWQgJiYgPEhpZ2hsaWdodD57Y2hpbGRyZW59PC9IaWdobGlnaHQ+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVsxXSEuL1ZpZXdEZW1vLm1vZHVsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi9WaWV3RGVtby5tb2R1bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBUaGVtZSwgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGUgZnJvbSBcIi4uL0NvZGVcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL1ZpZXdEZW1vLm1vZHVsZS5jc3NcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgaW50ZXJmYWNlIFZpZXdEZW1vUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICBleGFtcGxlOiBzdHJpbmdcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdEZW1vKHtcbiAgICBjbGFzc05hbWUsXG4gICAgZXhhbXBsZSxcbiAgICBjaGlsZHJlbixcbn06IFZpZXdEZW1vUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1BhbmVsIGNvbG9yPVwibmV1dHJhbC00XCIgcGFkZGluZz1cIk1cIiBtYXJnaW49XCJNXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17JC5qb2luKGNsYXNzTmFtZSwgU3R5bGUuVmlld0RlbW8pfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxDb2RlPntleGFtcGxlfTwvQ29kZT5cbiAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgKVxufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMV0hLi9WaWV3RG9jdW1lbnRhdGlvbi5tb2R1bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzFdIS4vVmlld0RvY3VtZW50YXRpb24ubW9kdWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVGhlbWUsIFZpZXdQYW5lbCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9WaWV3RG9jdW1lbnRhdGlvbi5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IGludGVyZmFjZSBWaWV3RG9jdW1lbnRhdGlvblByb3BzIHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB0aXRsZTogUmVhY3QuUmVhY3ROb2RlXG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3RG9jdW1lbnRhdGlvbih7XG4gICAgY2xhc3NOYW1lLFxuICAgIHRpdGxlLFxuICAgIGNoaWxkcmVuLFxufTogVmlld0RvY3VtZW50YXRpb25Qcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXskLmpvaW4oY2xhc3NOYW1lLCBTdHlsZS5WaWV3RG9jdW1lbnRhdGlvbil9PlxuICAgICAgICAgICAgPFZpZXdQYW5lbCBtYXJnaW49ezB9IHBhZGRpbmc9XCJNXCIgY29sb3I9XCJwcmltYXJ5LTJcIj5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgIDxWaWV3UGFuZWwgbWFyZ2luPXswfSBwYWRkaW5nPVwiTVwiIG92ZXJmbG93PVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgVmlld0lucHV0VGV4dCB9IGZyb20gXCIuLi9JbnB1dFRleHQvaW5kZXguanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBWaWV3SW5wdXROdW1iZXIocHJvcHMpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IG1pbiA9IChfYSA9IHByb3BzLm1pbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuICAgIGNvbnN0IG1heCA9IChfYiA9IHByb3BzLm1heCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGNvbnN0IHRleHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCB7IHZhbHVlOiBgJHtwcm9wcy52YWx1ZX1gLCBvbkNoYW5nZTogKHRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IE51bWJlcih0ZXh0KTtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUobnVtKSkge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKG51bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHR5cGU6IFwibnVtYmVyXCIsIHZhbGlkYXRvcjogKHRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IE51bWJlcih0ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobnVtKSAmJiBudW0gPj0gbWluICYmIG51bSA8PSBtYXg7XG4gICAgICAgIH0gfSk7XG4gICAgcmV0dXJuIF9qc3goVmlld0lucHV0VGV4dCwgT2JqZWN0LmFzc2lnbih7fSwgdGV4dFByb3BzKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lTVzV3ZFhST2RXMWlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk4dUxpOXpjbU12ZG1sbGR5OUpibkIxZEU1MWJXSmxjaTlKYm5CMWRFNTFiV0psY2k1MGMzZ2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVWRCTEU5QlFVOHNSVUZCUlN4aFFVRmhMRVZCUVhOQ0xFMUJRVTBzWTBGQll5eERRVUZCTzBGQmVVSm9SU3hOUVVGTkxGVkJRVlVzWlVGQlpTeERRVUZETEV0QlFUSkNPenRKUVVOMlJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4TlFVRkJMRXRCUVVzc1EwRkJReXhIUVVGSExHMURRVUZKTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlFUdEpRVU5xUkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGQkxFdEJRVXNzUTBGQlF5eEhRVUZITEcxRFFVRkpMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCUVR0SlFVTnFSQ3hOUVVGTkxGTkJRVk1zYlVOQlExSXNTMEZCU3l4TFFVTlNMRXRCUVVzc1JVRkJSU3hIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZEZGtJc1VVRkJVU3hGUVVGRkxFTkJRVU1zU1VGQldTeEZRVUZGTEVWQlFVVTdXVUZEZGtJc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkJPMWxCUTNoQ0xFbEJRVWtzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRE8yZENRVU4yUWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzFsQlEzWkNMRU5CUVVNN1VVRkRUQ3hEUVVGRExFVkJRMFFzU1VGQlNTeEZRVUZGTEZGQlFWRXNSVUZEWkN4VFFVRlRMRVZCUVVVc1EwRkJReXhKUVVGWkxFVkJRVVVzUlVGQlJUdFpRVU40UWl4TlFVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVRTdXVUZEZUVJc1QwRkJUeXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUVR0UlFVTXpSQ3hEUVVGRExFZEJRMG9zUTBGQlFUdEpRVU5FTEU5QlFVOHNTMEZCUXl4aFFVRmhMRzlDUVVGTExGTkJRVk1zUlVGQmEwSXNRMEZCUVR0QlFVTjZSQ3hEUVVGREluMD0iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJsb2NhbHMiLCJEZW1vIiwiYSIsInNldEEiLCJiIiwic2V0QiIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwicGFkZGluZyIsImNvbG9yIiwid2lkdGgiLCJwbGFjZUl0ZW1zIiwidmFsdWUiLCJvbkNoYW5nZSIsImxhYmVsIiwic3R5bGUiLCJncmlkQ29sdW1uIiwiSW5wdXROdW1iZXJEb2N1bWVudGF0aW9uIiwiVmlld0RvY3VtZW50YXRpb24iLCJ0aXRsZSIsIlZpZXdEZW1vIiwiZGVzY3JpcHRpb24iLCJleGFtcGxlIiwiUGFnZVZpZXdJbnB1dE51bWJlciIsIm9wdGlvbnMiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsInNldEF0dHJpYnV0ZXMiLCJpbnNlcnQiLCJkb21BUEkiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJ1bmRlZmluZWQiLCIkIiwiY2xhc3NOYW1lcyIsIkNvZGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJqb2luIiwidmFyaWFudCIsIm9uQ2xpY2siLCJJY29uQXJyb3dEb3duIiwiSWNvbkFycm93UmlnaHQiLCJIaWdobGlnaHQiLCJtYXJnaW4iLCJvdmVyZmxvdyIsIlZpZXdJbnB1dE51bWJlciIsInByb3BzIiwiX2EiLCJfYiIsIm1pbiIsIk51bWJlciIsIk5FR0FUSVZFX0lORklOSVRZIiwibWF4IiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJ0ZXh0UHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXh0IiwibnVtIiwiaXNGaW5pdGUiLCJ0eXBlIiwidmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==