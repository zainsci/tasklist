(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9307)}])},9307:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(5893),i=n(4620),o=n(7294),l=n(9473),a=function(){return(0,l.I0)()},c=l.v9,s=n(4247),u=n(7931),d=n(1190),f=n(7592),p={closed:{opacity:0},opened:{opacity:1},onexit:{opacity:0}},b={closed:{opacity:0,scale:.95,transition:{duration:.2}},opened:{opacity:1,scale:1,transition:{duration:.2}},onexit:{opacity:0,scale:.95,transition:{duration:.2}}},h=function(e){var t=e.children,n=e.title,i=e.opened,o=e.onClose,l=function(){return o(!i)};return(0,r.jsx)(d.M,{initial:!1,exitBeforeEnter:!0,onExitComplete:function(){return null},children:i&&(0,r.jsx)(f.E.div,{variants:p,initial:"closed",animate:"opened",exit:"onexit",onClick:l,className:"absolute top-0 left-0 p-8 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50",children:(0,r.jsxs)(f.E.div,{variants:b,initial:"closed",animate:"opened",exit:"onexit",onClick:function(e){return e.stopPropagation()},className:"relative w-full bg-white p-5 flex flex-col rounded-md drop-shadow-md",children:[(0,r.jsx)("div",{className:"absolute top-4 right-4 p-0 cursor-pointer rounded-sm hover:bg-slate-100",onClick:l,children:(0,r.jsx)(u.X,{})}),(0,r.jsx)("h3",{className:"text-xl font-semibold mb-2",children:n}),t]})})})},m=n(2624),x=function(){var e=a(),t=c((function(e){return e.TaskReducer.taskList})),n=(0,o.useState)(!1),i=n[0],l=n[1],d=(0,o.useState)(""),f=d[0],p=d[1],b=(0,o.useState)(""),x=b[0],y=b[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{title:"Add New Task",opened:i,onClose:function(){return l(!1)},children:(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("input",{value:f,onChange:function(e){return p(e.target.value)},type:"text",name:"title",placeholder:"Task title here...",className:"block w-full px-3 py-2 sm:text-sm rounded-md border border-gray-300 placeholder-gray-400 focus:border-sky-300 focus:outline-none"}),(0,r.jsx)("textarea",{value:x,onChange:function(e){return y(e.target.value)},name:"description",id:"description",className:"block w-full px-3 py-2 sm:text-sm rounded-md border border-gray-300 placeholder-gray-400 focus:border-sky-300 focus:outline-none min-h-[120px]",placeholder:"Task description here..."}),(0,r.jsx)(m.Z,{onClick:function(){""!==f&&(e((0,s.gI)({id:Math.random().toString(36).substring(2,6),title:f,description:x,completed:!1})),p(""),y(""),l(!i))},children:"Add New Task"})]})},"add-modal"),(0,r.jsx)(m.Z,{onClick:function(){return l(!i)},className:"rounded-full flex justify-center items-center absolute right-4 bottom-4 w-12 h-12",disabled:t.length>=6,"aria-label":"add new task",children:(0,r.jsx)(u.v3,{})})]})},y=n(5948),g=n(6793);function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}function w(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var k=function(e){var t=e.checked,n=e.color,i=void 0===n?"blue":n,o=w(e,["checked","color"]);return(0,r.jsxs)("div",{className:function(){var e=["p-0","flex","justify-center","items-center"],t={red:"text-red-500",green:"text-green-500",blue:"text-blue-500"};return e.push(t[i]||t.blue),e.join(" ")}(),children:[(0,r.jsx)("input",v({type:"checkbox",checked:t,className:"invisible w-0 h-0 overflow-hidden"},o)),t?(0,r.jsx)(u.VW,{}):(0,r.jsx)(u.bK,{})]})},O=function(e){var t=e.task,n=e.showDetail,i=e.setShowDetail,o=a();return(0,r.jsxs)(h,{title:t.title,opened:n,onClose:function(){return i(!n)},children:[(0,r.jsx)("p",{className:"mb-4 whitespace-pre-line",children:t.description}),(0,r.jsx)("div",{className:"flex justify-end items-center space-x-2",children:(0,r.jsx)(m.Z,{variant:"light",color:"red",onClick:function(){return o((0,s.F6)(t.id))},className:"w-min px-3",children:(0,r.jsx)(u.rF,{})})})]})};function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){var t=e.task,n=e.index,i=function(e){e.stopPropagation(),l((0,s.db)(t.id))},l=a(),c=(0,o.useState)(!1),u=c[0],d=c[1];return(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(O,{task:t,showDetail:u,setShowDetail:d}),(0,r.jsx)(y._l,{draggableId:t.id,index:n,children:function(e,n){return(0,r.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){N(e,t,n[t])}))}return e}({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{className:"w-full flex my-1 justify-center items-center rounded-md px-4 py-2 text-[0.8125rem] leading-5 ring-2 bg-white ring-blue-400 ".concat(""),onClick:function(){return d(!u)},children:[(0,r.jsx)("span",{className:"r-2 flex items-center font-semibold ".concat(t.completed&&"line-through"),children:t.title}),(0,r.jsx)("span",{onClick:i,className:"ml-auto cursor-pointer",children:(0,r.jsx)(k,{checked:t.completed})})]}))}},t.id)]})};function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(c){a=!0,i=c}finally{try{l||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(){var e=c((function(e){return e.TaskReducer.taskList})),t=a();g.Z.subscribe((function(){window.localStorage.setItem("task-list",JSON.stringify(g.Z.getState().TaskReducer.taskList))}));var n=function(e,t,n){var r=Array.from(e),i=E(r.splice(t,1),1)[0];return r.splice(n,0,i),r};return(0,r.jsx)(y.Z5,{onDragEnd:function(r){if(r.destination){var i=n(e,r.source.index,r.destination.index);t((0,s.s9)(i))}},children:(0,r.jsx)(y.bK,{droppableId:"droppable",children:function(t,n){return(0,r.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}({},t.droppableProps,{ref:t.innerRef,className:"flex flex-col items-center rounded-md p-4 bg-gray-100",children:[0===e.length?(0,r.jsx)("span",{className:"block w-full bg-white py-2 text-center rounded-lg border border-dashed border-blue-700",children:"Nothing To Do! \ud83e\udd2a"}):e.map((function(e,t){return(0,r.jsx)(S,{task:e,index:t},e.id)})),t.placeholder]}))}})})};function T(){return(0,r.jsx)(i.Z,{children:(0,r.jsxs)("div",{className:"flex-1 w-full p-4 relative",children:[(0,r.jsx)("h1",{className:"h2",children:"Welcome!"}),(0,r.jsx)("div",{className:"h3 rounded-md p-4 flex justify-center items-center",children:(new Date).toLocaleString("en-US",{dateStyle:"medium"})}),(0,r.jsx)(_,{}),(0,r.jsx)(x,{})]})})}}},function(e){e.O(0,[630,919,267,620,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);