(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,6,7],{422:function(e,t,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(133).default)("56d5e9ca",content,!0,{sourceMap:!1})},423:function(e,t,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(133).default)("db4b6cb4",content,!0,{sourceMap:!1})},424:function(e,t,n){"use strict";n.r(t);n(30),n(44),n(75),n(37),n(76);var r=n(24),o=(n(416),n(417),n(45),n(14),n(421),n(134)),c=n(77),l=n(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"ProductsTable",data:function(){return{traineeCount:[]}},computed:f({},Object(o.b)("products",["displayColunmns","tableValues"])),beforeUpdate:function(){var e=this;this.traineeCount=Array(this.tableValues.length).fill(0),Object(l.nextTick)((function(){var t=structuredClone(e.traineeCount);e.setTraineeCount(t)}))},methods:f(f({},Object(c.b)("products",["setTraineeCount","updateTraineeCount"])),{},{handleTraineeCountChange:function(e,t){this.updateTraineeCount({index:e,value:t})}})},h=(n(434),n(58)),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("el-table",{attrs:{id:"productstable",data:e.tableValues,border:"",height:"700"}},[e._l(e.displayColunmns,(function(e){return t("el-table-column",{key:e,attrs:{prop:e,label:e,width:"DENOMINACAO"===e?280:120}})})),e._v(" "),t("el-table-column",{attrs:{label:"SALDO INFORMADO",width:"210"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-input-number",{attrs:{min:0,max:999999,step:1,precision:0},on:{change:function(t){return e.handleTraineeCountChange(n.$index,e.traineeCount[n.$index])}},model:{value:e.traineeCount[n.$index],callback:function(t){e.$set(e.traineeCount,n.$index,t)},expression:"traineeCount[scope.$index]"}})]}}])})],2)],1)}),[],!1,null,null,null);t.default=component.exports},425:function(e,t,n){"use strict";n.r(t);n(30),n(44),n(75),n(37),n(76);var r=n(24),o=(n(416),n(417),n(45),n(14),n(421),n(59),n(134)),c=n(77),l=n(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"ProductsTable",data:function(){return{traineeCount2:[]}},computed:f({},Object(o.b)("products",["displayColunmns","tableValues","supervisorCount","traineeCount"])),mounted:function(){var e=this;this.$root.$on("formatPDF",(function(){return e.formataRows()}))},beforeUpdate:function(){var e=this;this.traineeCount2=Array(this.tableValues.length).fill(0),Object(l.nextTick)((function(){var t=structuredClone(e.traineeCount2);e.setTraineeCount(t)}))},methods:f(f({},Object(c.b)("products",["setTraineeCount","updateTraineeCount"])),{},{handleTraineeCountChange:function(e,t){this.updateTraineeCount({index:e,value:t})},tableRowClassName:function(e){e.row;var t=e.rowIndex;if(t%19==0&&0!==t&&19!==t||18===t)return"html2pdf__page-break"},rowClassName:function(e){return this.isCountCorrect[e]?"success-row":"warning-row"},formataRows:function(){var e=document.getElementsByClassName("el-table__row");console.log(e)},compareValues:function(){var e=this,t=this.traineeCount.map((function(t,n){return t===e.supervisorCount[n]}));this.isCountCorrect=t}})},h=(n(436),n(58)),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("div",[t("el-table",{attrs:{id:"productsTablePDF",data:e.tableValues,border:"","row-class-name":e.tableRowClassName}},[e._l(e.displayColunmns,(function(e){return t("el-table-column",{key:e,attrs:{prop:e,label:e,width:"COD"===e||"UN"===e||"COMPLEM"===e?100:280}})})),e._v(" "),t("el-table-column",{attrs:{label:"SALDO INFORMADO",width:"170"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("span",[e._v("\n          "+e._s(e.traineeCount[n.$index])+"\n        ")])]}}])})],2)],1)}),[],!1,null,null,null);t.default=component.exports},426:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},427:function(e,t,n){var content=n(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(133).default)("ad43f85e",content,!0,{sourceMap:!1})},434:function(e,t,n){"use strict";n(422)},435:function(e,t,n){var r=n(132)(!1);r.push([e.i,"#productstable{width:100%}.warning-row{background-color:#c4344e!important;color:#4e0817;font-weight:700}.success-row{background-color:#82f4b1!important;color:#108149;font-weight:700}",""]),e.exports=r},436:function(e,t,n){"use strict";n(423)},437:function(e,t,n){var r=n(132)(!1);r.push([e.i,'.productsTablePDF{color:#000;font-size:12px;font-family:"Roboto",sans-serif;font-weight:400;line-height:1.5;letter-spacing:.00938em;text-align:center;border-collapse:collapse;border-spacing:0;width:100%;margin-bottom:1rem;background-color:transparent;border:1px solid #000}.warning-row{background-color:#c4344e!important;color:#4e0817;font-weight:700}.success-row{background-color:#82f4b1!important;color:#108149;font-weight:700}',""]),e.exports=r},438:function(e,t,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(133).default)("d00118ba",content,!0,{sourceMap:!1})},439:function(e,t,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(133).default)("b1a9127a",content,!0,{sourceMap:!1})},440:function(e,t,n){"use strict";var r=n(2),o=n(441).trim;r({target:"String",proto:!0,forced:n(442)("trim")},{trim:function(){return o(this)}})},441:function(e,t,n){var r=n(5),o=n(26),c=n(13),l=n(426),d=r("".replace),f="["+l+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(e){return function(t){var n=c(o(t));return 1&e&&(n=d(n,m,"")),2&e&&(n=d(n,h,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},442:function(e,t,n){var r=n(98).PROPER,o=n(3),c=n(426);e.exports=function(e){return o((function(){return!!c[e]()||"​᠎"!=="​᠎"[e]()||r&&c[e].name!==e}))}},443:function(e,t,n){"use strict";n(427)},444:function(e,t,n){var r=n(132)(!1);r.push([e.i,".container[data-v-601f1078]{width:350px;text-align:center}",""]),e.exports=r},445:function(e,t,n){"use strict";n(438)},446:function(e,t,n){var r=n(132)(!1);r.push([e.i,".container[data-v-3afd3ebe]{width:100%;display:flex;flex-direction:column;align-items:center}.el-button[data-v-3afd3ebe]{margin-top:20px}",""]),e.exports=r},447:function(e,t,n){"use strict";n(439)},448:function(e,t,n){var r=n(132)(!1);r.push([e.i,".el-button[data-v-6e1d76ea]{margin-top:20px}",""]),e.exports=r},449:function(e,t,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(133).default)("f049cc34",content,!0,{sourceMap:!1})},451:function(e,t,n){"use strict";n.r(t);n(38),n(45),n(30),n(44),n(75),n(76);var r=n(24),o=(n(14),n(37),n(27),n(269),n(440),n(77));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"UploadPanel",data:function(){return{trainee:{name:"",id:"",countStartTimestamp:""},constructTableValues:[],supervisorInformedCount:[],computado:!1}},methods:l(l({},Object(o.b)("products",["setTableValues","setSupervisorCount","setTraineePersonalInfo"])),{},{submitUpload:function(){var e=this,t=this.$refs.upload.uploadFiles[0].raw,n=new FileReader;n.onload=function(t){t.target.result.split("\n").forEach((function(line){line.trim().match(/^\d/)&&(e.constructTableValues.push({COD:line.substring(0,11).trim(),DENOMINACAO:line.substring(11,42).trim(),COMPLEM:line.substring(42,53).trim(),UN:line.substring(53,57).trim(),"SALDO ATUAL":line.substring(117,127).trim()}),e.supervisorInformedCount.push(parseInt(line.substring(117,127).trim())))})),e.setTableValues(e.constructTableValues),e.setSupervisorCount(e.supervisorInformedCount),e.trainee.countStartTimestamp=(new Date).getTime(),e.setTraineePersonalInfo(e.trainee),e.$refs.upload.submit(),e.computado=!0},n.readAsText(t)},handleExceed:function(e,t){this.$message.warning("Only 1 file can be uploaded at a time")}})},f=(n(443),n(58)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return e.computado?e._e():t("div",{staticClass:"container"},[t("div",[t("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.trainee,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"Nome",prop:"name",rules:[{required:!0,message:"Por favor, insira seu nome",trigger:"blur"}]}},[t("el-input",{model:{value:e.trainee.name,callback:function(t){e.$set(e.trainee,"name",t)},expression:"trainee.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"ID",prop:"id",rules:[{required:!0,message:"Por favor, insira seu ID",trigger:"blur"}]}},[t("el-input",{model:{value:e.trainee.id,callback:function(t){e.$set(e.trainee,"id",t)},expression:"trainee.id"}})],1)],1)],1),e._v(" "),t("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"nada","auto-upload":!1,limit:1,"on-exceed":e.handleExceed}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("\n      Selecionar Gabarito\n    ")]),e._v(" "),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v("\n      Gerar Tabela\n    ")]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n      Arquivo de texto contendo os dados do estoque\n    ")])],1)],1)}),[],!1,null,"601f1078",null);t.default=component.exports},452:function(e,t,n){"use strict";n.r(t);n(38),n(45),n(30),n(44),n(14),n(75),n(37),n(76);var r=n(12),o=n(24),c=(n(79),n(59),n(134)),l=n(77),d=n(450),f=n(424),m=n(425);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={name:"UserDashboard",components:{ProductsTable:f.default,ProductsTablePDF:m.default,VueHtml2pdf:d.a},data:function(){return{isCountCorrect:[],erros:0,acertos:0,computado:!1}},computed:v({},Object(c.b)("products",["supervisorCount","traineeCount","traineePersonalInfo"])),methods:v(v({},Object(l.b)("products",["setTraineeInsertedValues","updateTraineeEndCountTimeStamp"])),{},{rowClassName:function(e){return this.isCountCorrect[e]?(this.acertos+=1,"success-row"):(this.erros+=1,"warning-row")},compareValues:function(){var e=this,t=this.traineeCount.map((function(t,n){return t===e.supervisorCount[n]}));this.isCountCorrect=t},handleSubmitCount:function(){this.updateTraineeEndCountTimeStamp((new Date).getTime()),this.compareValues();for(var e=document.getElementsByClassName("el-table__row"),i=0;i<e.length;i++)e[i].classList.add(this.rowClassName(i));this.$root.$emit("formatPDF"),this.$emit("formatPDF"),this.computado=!0},handleDownloadPDF:function(){this.$refs.html2Pdf.downloadPdf()},handleResetCount:function(){this.setTraineeInsertedValues([]),this.computado=!1,this.acertos=0,this.erros=0;for(var e=document.getElementsByClassName("el-table__row"),i=0;i<e.length;i++)e[i].classList.remove("success-row"),e[i].classList.remove("warning-row")},beforeDownload:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.html2pdf,o=e.options,c=e.pdfContent,n.next=3,r().set(o).from(c).toPdf().get("pdf").then((function(e){for(var n=e.internal.getNumberOfPages(),i=1;i<=n;i++)e.setPage(i),e.text("Nome do funcionário: ".concat(t.traineePersonalInfo.name),.2,.3),e.text("Início da contagem: ".concat(new Date(t.traineePersonalInfo.countStartTimestamp).toLocaleString("pt-BR")),.2,.5),e.text("Fim da contagem: ".concat(new Date(t.traineePersonalInfo.endCountTimestamp).toLocaleString("pt-BR")),.2,.7),e.text("Página "+i+" de "+n,.68*e.internal.pageSize.getWidth(),e.internal.pageSize.getHeight()-.3)})).save();case 3:case"end":return n.stop()}}),n)})))()}})},w=(n(445),n(58)),component=Object(w.a)(O,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"container"},[t("ProductsTable"),e._v(" "),t("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":!1,"enable-download":!1,"preview-modal":!1,"paginate-elements-by-height":1400,"manual-pagination":!0,"pdf-content-width":"800px",margin:"20","html-to-pdf-options":{margin:[1,.2,.2,.2],filename:"hehehe.pdf",image:{type:"jpeg",quality:2},html2canvas:{scale:2,letterRendering:!0},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}}},on:{beforeDownload:function(t){return e.beforeDownload(t)}}},[t("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[t("ProductsTablePDF")],1)])],1),e._v(" "),t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmitCount}},[e._v("\n      Enviar Contagem\n    ")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.handleDownloadPDF}},[e._v("\n      Download PDF\n    ")]),e._v(" "),e.computado?t("div",{staticClass:"container"},[t("h1",[e._v("\n        "+e._s(e.traineePersonalInfo.name)+"  você acertou "+e._s(e.acertos)+" de "+e._s(e.erros+e.acertos)+" produtos\n      ")]),e._v(" "),t("el-button",{attrs:{type:"primary",disabled:e.computado},on:{click:e.handleResetCount}},[e._v("\n        Refazer Contagem\n      ")])],1):e._e()],1)])}),[],!1,null,"3afd3ebe",null);t.default=component.exports;installComponents(component,{ProductsTable:n(424).default,ProductsTablePDF:n(425).default})},453:function(e,t,n){"use strict";n.r(t);var r={name:"PageFooter"},o=(n(447),n(58)),component=Object(o.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,"6e1d76ea",null);t.default=component.exports},454:function(e,t,n){"use strict";n(449)},455:function(e,t,n){var r=n(132)(!1);r.push([e.i,".container[data-v-5862a81c]{display:flex;flex-direction:column;align-items:center}",""]),e.exports=r},461:function(e,t,n){"use strict";n.r(t);var r={name:"IndexPage"},o=(n(454),n(58)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("UploadPanel"),e._v(" "),t("UserDashboard"),e._v(" "),t("PageFooter")],1)}),[],!1,null,"5862a81c",null);t.default=component.exports;installComponents(component,{UploadPanel:n(451).default,UserDashboard:n(452).default,PageFooter:n(453).default})}}]);