(function(e){function t(t){for(var o,l,i=t[0],c=t[1],s=t[2],d=0,v=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&v.push(a[l][0]),a[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(v.length)v.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},r=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},r=[],l=n("a6f4"),i=Object(l["c"])({}),c=i,s=n("2877"),u=n("6544"),d=n.n(u),v=n("7496"),f=n("f6c4"),p=Object(s["a"])(c,a,r,!1,null,null,null),m=p.exports;d()(p,{VApp:v["a"],VMain:f["a"]});var b=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[e._l(e.notes,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",md:"3"}},[n("note",{attrs:{note:t,readonly:""},on:{delete:e.onClickDelete}})],1)})),n("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12",md:"3"}},[n("v-btn",{attrs:{color:"primary",to:{name:"AddNote"}}},[e._v(" Добавить запись ")])],1)],2),n("v-dialog",{attrs:{width:"500px",persistent:""},model:{value:e.delDialog,callback:function(t){e.delDialog=t},expression:"delDialog"}},[n("v-card",[n("v-toolbar",{attrs:{dense:"",elevation:"0",title:"",dark:"",color:"primary"}},[n("v-toolbar-title",[e._v(" Удаление записи ")]),n("v-spacer"),n("v-icon",{on:{click:e.resetDialog}},[e._v(" mdi-close ")])],1),n("v-card-text",{staticClass:"pt-5"},[n("div",{staticClass:"body-1"},[e._v(" Вы действительно хотите удалить эту запись? ")])]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.resetDialog}},[e._v(" Отмена ")]),n("v-spacer"),n("v-btn",{attrs:{color:"error"},on:{click:e.onConfirmDelete}},[e._v(" Удалить ")])],1)],1)],1)],1)},h=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"d-flex flex-column",attrs:{height:"100%"}},[n("v-card-title",[e._v(" "+e._s(e.note.title)+" ")]),n("v-card-text",[n("div",{staticClass:"body-1"},[e._v(" Список дел ")]),n("todo-list",{attrs:{items:e.note.todoList,readonly:e.readonly,limit:3}})],1),n("v-spacer"),n("v-card-actions",[n("v-btn",{attrs:{color:"error",text:""},on:{click:e.onClickDelete}},[e._v(" Удалить ")]),n("v-spacer"),n("v-btn",{attrs:{color:"primary",to:{name:"EditNote",params:{id:e.note.id}}}},[e._v(" Редактировать ")])],1)],1)},x=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list",[e._l(e.limitedList,(function(t){return n("todo-item",{key:t.id,attrs:{todo:t,readonly:e.readonly,edit:e.edit},on:{delete:e.onDelete,change:e.onChange}})})),e.limitedList.length?e._e():n("v-alert",{staticClass:"font-weight-bold mt-3",attrs:{border:"left",type:"info",text:""}},[e._v(" На сегодня задач нету ")])],2)},_=[],k=(n("fb6a"),n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-list-item",{staticClass:"pt-3"},[n("v-list-item-action",[n("v-checkbox",{attrs:{readonly:e.readonly,"hide-details":""},on:{change:e.change},model:{value:e.todo.completed,callback:function(t){e.$set(e.todo,"completed",t)},expression:"todo.completed"}})],1),n("v-list-item-content",{staticClass:"mr-3"},[e.edit?n("v-text-field",{attrs:{label:"Задача","hide-details":"",outlined:"",dense:""},on:{change:e.change},model:{value:e.todo.title,callback:function(t){e.$set(e.todo,"title",t)},expression:"todo.title"}}):n("v-list-item-title",[e._v(" "+e._s(e.todo.title)+" ")])],1),e.edit?n("v-list-item-action",[n("v-btn",{attrs:{icon:"",color:"error"},on:{click:e.onClickDelete}},[n("v-icon",[e._v(" mdi-delete ")])],1)],1):e._e()],1)}),O=[],V=Object(l["c"])({props:{readonly:Boolean,edit:Boolean,todo:{type:Object,required:!0}},setup:function(e,t){var n=function(){t.emit("delete",e.todo.id)},o=function(){t.emit("change")};return{onClickDelete:n,change:o}}}),j=V,w=n("8336"),N=n("ac7c"),T=n("132d"),D=n("da13"),S=n("1800"),I=n("5d23"),L=n("8654"),$=Object(s["a"])(j,k,O,!1,null,null,null),A=$.exports;d()($,{VBtn:w["a"],VCheckbox:N["a"],VIcon:T["a"],VListItem:D["a"],VListItemAction:S["a"],VListItemContent:I["a"],VListItemTitle:I["b"],VTextField:L["a"]});var B=Object(l["c"])({components:{TodoItem:A},props:{limit:{type:Number,default:-1},edit:Boolean,readonly:Boolean,items:{type:Array,default:function(){return[]}}},setup:function(e,t){var n=Object(l["a"])((function(){return e.limit<=0?e.items:e.items.slice(0,e.limit)})),o=function(e){t.emit("delete",e)},a=function(){t.emit("change")};return{limitedList:n,onDelete:o,onChange:a}}}),E=B,J=n("0798"),M=n("8860"),P=Object(s["a"])(E,C,_,!1,null,null,null),R=P.exports;d()(P,{VAlert:J["a"],VList:M["a"]});var F=Object(l["c"])({components:{TodoList:R},props:{readonly:Boolean,note:{type:Object,required:!0}},setup:function(e,t){var n=function(){t.emit("delete",e.note.id)};return{onClickDelete:n}}}),q=F,z=n("b0af"),G=n("99d9"),H=n("2fa4"),K=Object(s["a"])(q,y,x,!1,null,null,null),Q=K.exports;d()(K,{VBtn:w["a"],VCard:z["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VSpacer:H["a"]});n("7db0"),n("c740"),n("a434");var U=n("5530"),W=function(){var e=localStorage.getItem("notes"),t=Object(l["f"])(e?JSON.parse(e):[{id:1,title:"Действия с заметкой",todoList:[{id:1,title:"сохранить изменения",completed:!0},{id:2,title:"отменить редактирование (необходимо подтверждение)",completed:!0},{id:3,title:"удалить (необходимо подтверждение)",completed:!0},{id:4,title:"отменить внесенное изменение",completed:!0},{id:5,title:"повторить отмененное изменение",completed:!0}]},{id:2,title:"Действия с пунктами Todo",todoList:[{id:1,title:"добавить",completed:!0},{id:2,title:"удалить",completed:!0},{id:3,title:"отредактировать текст",completed:!0},{id:4,title:"отметить как выполненный",completed:!0}]},{id:3,title:"Действия на главной",todoList:[{id:1,title:"перейти к созданию новой заметки",completed:!0},{id:2,title:"перейти к изменению",completed:!0},{id:3,title:"удалить (необходимо подтверждение)",completed:!0}]}]),n=function(){localStorage.setItem("notes",JSON.stringify(t.value))},o=function(){return{id:Math.round(999999*Math.random()),todoList:[]}},a=function(e){var n=t.value.find((function(t){return t.id==e}));return n?Object(U["a"])({},n):null},r=function(e){var o=t.value.findIndex((function(t){return t.id==e}));t.value.splice(o,1),n()},i=function(e){t.value.push(e),n()},c=function(e){var o=t.value.findIndex((function(t){return t.id==e.id}));t.value[o]=e,n()};return{notes:t,deleteNote:r,addNote:i,findNote:a,noteFactory:o,updateNote:c}},X=Object(l["c"])({components:{Note:Q},setup:function(){var e=Object(l["f"])(!1),t=Object(l["f"])(null),n=W(),o=n.notes,a=n.deleteNote,r=function(n){t.value=n,e.value=!0},i=function(){e.value=!1,t.value=null},c=function(e){a(e),i()};return{notes:o,onClickDelete:r,delDialog:e,noteId:t,onConfirmDelete:c,resetDialog:i}}}),Y=X,Z=n("62ad"),ee=n("a523"),te=n("169a"),ne=n("0fd9"),oe=n("71d9"),ae=n("2a7f"),re=Object(s["a"])(Y,g,h,!1,null,null,null),le=re.exports;d()(re,{VBtn:w["a"],VCard:z["a"],VCardActions:G["a"],VCardText:G["b"],VCol:Z["a"],VContainer:ee["a"],VDialog:te["a"],VIcon:T["a"],VRow:ne["a"],VSpacer:H["a"],VToolbar:oe["a"],VToolbarTitle:ae["a"]});var ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",[n("v-card-title",[e._v(" Создать новую заметку "),n("v-spacer"),n("v-icon",{staticClass:"mr-3",attrs:{disabled:e.logIndex<=0,color:"primary"},on:{click:e.rollback}},[e._v(" mdi-history ")]),n("v-icon",{attrs:{disabled:e.logIndex==e.logStack.length-1,color:"primary"},on:{click:e.forward}},[e._v(" mdi-update ")])],1),n("v-card-text",[n("v-form",{ref:"form"},[n("v-text-field",{attrs:{label:"Заголовок",outlined:"",rules:[e.rules.required]},on:{blur:e.onBlurNoteTitle},model:{value:e.note.title,callback:function(t){e.$set(e.note,"title",t)},expression:"note.title"}})],1),n("div",{staticClass:"d-flex justify-space-between align-center pt-3"},[n("div",{staticClass:"body-1"},[e._v(" Список дел ")]),n("v-btn",{attrs:{color:"primary"},on:{click:e.onClickAddTodo}},[n("div",[e._v(" Новая задача ")]),n("v-icon",[e._v(" mdi-plus ")])],1)],1),n("todo-list",{staticStyle:{"max-height":"400px","overflow-y":"auto"},attrs:{items:e.note.todoList,edit:""},on:{delete:e.onDeleteTodo,change:e.onChange}})],1),n("v-card-actions",[e.id?n("v-btn",{staticClass:"mr-3",attrs:{color:"error",text:""},on:{click:e.onClickDeleteNote}},[e._v(" Удалить ")]):e._e(),n("v-spacer"),n("v-btn",{staticClass:"mr-3",attrs:{color:"accent",outlined:"",text:""},on:{click:e.onClickCancelEdit}},[e._v(" Отмена ")]),n("v-btn",{attrs:{color:"primary"},on:{click:e.onClickSave}},[e._v(" Сохранить ")])],1)],1)],1)],1),n("ConfirmDialog",{ref:"dialog"})],1)},ce=[],se=(n("96cf"),n("1da1")),ue=function(){var e=Object(l["d"])();if(!e)throw new ReferenceError("Not found vue instance.");var t=Object(l["a"])((function(){return e.$route}));return{route:t,router:e.$router}},de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"500px",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dense:"",elevation:"0",title:"",dark:"",color:"primary"}},[n("v-toolbar-title",[e._v(" "+e._s(e.state.title)+" ")]),n("v-spacer"),n("v-icon",{on:{click:e.cancel}},[e._v(" mdi-close ")])],1),n("v-card-text",{staticClass:"pt-5"},[n("div",{staticClass:"body-1"},[e._v(" "+e._s(e.state.message)+" ")])]),n("v-card-actions",[n("v-btn",{attrs:{color:"accent",text:""},on:{click:e.cancel}},[e._v(" Нет ")]),n("v-spacer"),n("v-btn",{attrs:{color:"primary"},on:{click:e.agree}},[e._v(" Да ")])],1)],1)],1)},ve=[],fe=(n("d3b7"),Object(l["c"])({setup:function(){var e=Object(l["f"])(!1),t=Object(l["e"])({title:"",message:"",resolve:null,reject:null}),n=function(){t.resolve&&(t.resolve(!0),e.value=!1)},o=function(){t.resolve&&(t.resolve(!1),e.value=!1)},a=function(n,o){return e.value=!0,t.title=n,t.message=o,new Promise((function(e,n){t.resolve=e,t.reject=n}))};return{dialog:e,confirm:a,agree:n,cancel:o,state:t}}})),pe=fe,me=Object(s["a"])(pe,de,ve,!1,null,null,null),be=me.exports;d()(me,{VBtn:w["a"],VCard:z["a"],VCardActions:G["a"],VCardText:G["b"],VDialog:te["a"],VIcon:T["a"],VSpacer:H["a"],VToolbar:oe["a"],VToolbarTitle:ae["a"]});var ge=Object(l["c"])({components:{TodoList:R,ConfirmDialog:be},setup:function(){var e,t=Object(l["f"])(null),n=Object(l["f"])(null),o=ue(),a=o.route,r=o.router,i=W(),c=i.addNote,s=i.findNote,u=i.noteFactory,d=i.updateNote,v=i.deleteNote,f=parseInt(a.value.params.id),p={required:function(e){return!!e||"Обязательное поле"}},m=Object(l["f"])(-1),b=Object(l["f"])([]),g=Object(l["f"])(f&&null!==(e=s(f))&&void 0!==e?e:u()),h=function(e){var t=JSON.parse(JSON.stringify(e));b.value[m.value+1]?b.value.splice(m.value+1,b.value.length-m.value+1,t):b.value.push(t),m.value++};h(g.value);var y=function(){m.value--,g.value=JSON.parse(JSON.stringify(b.value[m.value]))},x=function(){m.value++,g.value=JSON.parse(JSON.stringify(b.value[m.value]))},C=function(){t.value&&t.value.validate()&&(f?d(g.value):c(g.value),r.push("/"))},_=function(){g.value.todoList.push({id:Math.round(999999*Math.random()),completed:!1,title:""}),h(g.value)},k=function(){h(g.value)},O=function(){h(g.value)},V=function(e){var t=g.value.todoList.findIndex((function(t){return t.id==e}));g.value.todoList.splice(t,1),h(g.value)},j=function(){var e=Object(se["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.value){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.value.confirm("Удаление записи","Вы действительно хотите удалить эту заметку?");case 4:if(!e.sent){e.next=7;break}v(g.value.id),r.push("/");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(se["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.value){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.value.confirm("Отмена изменений","Вы дейстивтельно хотите отменить все изменения?");case 4:if(!e.sent){e.next=6;break}r.push("/");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{id:f,note:g,rules:p,form:t,onClickSave:C,onClickAddTodo:_,onDeleteTodo:V,onClickDeleteNote:j,dialog:n,onClickCancelEdit:w,rollback:y,forward:x,logStack:b,onBlurNoteTitle:k,logIndex:m,onChange:O}}}),he=ge,ye=n("4bd4"),xe=Object(s["a"])(he,ie,ce,!1,null,null,null),Ce=xe.exports;d()(xe,{VBtn:w["a"],VCard:z["a"],VCardActions:G["a"],VCardText:G["b"],VCardTitle:G["c"],VCol:Z["a"],VContainer:ee["a"],VForm:ye["a"],VIcon:T["a"],VRow:ne["a"],VSpacer:H["a"],VTextField:L["a"]}),o["a"].use(b["a"]);var _e=[{path:"/",name:"Notes",component:le},{path:"/add",name:"AddNote",component:Ce},{path:"/edit/:id",name:"EditNote",component:Ce}],ke=new b["a"]({mode:"history",base:"/",routes:_e}),Oe=ke,Ve=n("2f62");o["a"].use(Ve["a"]);var je=new Ve["a"].Store({state:{},mutations:{},actions:{},modules:{}}),we=n("f309");o["a"].use(we["a"]);var Ne=new we["a"]({});o["a"].use(l["b"]),new o["a"]({router:Oe,store:je,vuetify:Ne,render:function(e){return e(m)}}).$mount("#app")}});
//# sourceMappingURL=app.cae747db.js.map