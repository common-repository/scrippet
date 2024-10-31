(()=>{"use strict";var e,t={702:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.element,i=window.wp.blockEditor;function r(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e[i];n+=r.before.length,t.push({nature:r.nature,position:n,content:r.content})}return t}const o=!1;var a=" \f\n\r\t\v",l=new RegExp("[A-Za-z]"),s=["INT","EXT","EST","INT./EXT","INT/EXT","I/E"];function c(e,t){e.lineno++,o&&console.log(`# lineno=${e.lineno} line=${t}`);const n=function(e,t,n){var i,r=e.state,o=!1,a=e.nestedDepth?e.nestedDepth:0,l=-1,s=-1;0===r?(i=void 0,e.blocks=[],e.lineno=n):(i=e.blocks[e.blocks.length-1],s=0);for(let u=0;u<t.length;u++)if(o)o=!1;else{var c=t.charAt(u);if(0===r)l<0&&(l=u),"/"===c?r=1:"["===c&&(r=2);else if(1===r)"*"===c?(i={nature:"comment",before:t.substring(l,u-1),start:{lineno:n,column:u-1},content:[]},e.blocks.push(i),l=-1,s=u+1,r=100):r="["===c?2:0;else if(2===r)"["===c?(i={nature:"note",before:t.substring(l,u-1),start:{lineno:n,column:u-1},content:[]},e.blocks.push(i),l=-1,s=u+1,r=200):r="/"===c?1:0;else if(100===r)"*"===c?r=101:"/"==c&&(r=105);else if(101===r)if("/"===c)if(0===a){if(!i)throw new Error("internal error (1)");i.end={lineno:n,column:u},i.content.push(t.substring(s,u-1).trim()),r=0}else a--,r=100;else r=100;else if(105===r)"*"===c?a++:r=100;else if(200===r)"]"===c?r=201:"["===c&&(r=205);else if(201===r)if("]"===c){if(!i)throw new Error("internal error (2)");0===a?(i.end={lineno:n,column:u},i.content.push(t.substring(s,u-1).trim()),r=0):(a--,r=200)}else r=200;else 205===r&&("["===c?a++:r=200);o="\\"==c}if(1!=r&&2!=r||(r=0),0===r)0===e.blocks.length?(e.line=t,e.lastChunk=""):(e.line="",e.blocks.forEach((function(t,n,i){e.line+=t.before})),l>=0&&(e.lastChunk=t.substring(l),e.line+=e.lastChunk),e.line=e.line.trim()),e.nestedDepth=0;else{if(e.nestedDepth=a,r>=100&&r<200){if(r=100,!i)throw new Error("internal error (3)");i.content.push(t.substring(s).trim())}if(r>=200&&r<300){if(!i)throw new Error("internal error (4)");r=200,i.content.push(t.substring(s).trim())}}return e.state=r,r}(e.blockContext,t,e.lineno);if(o&&console.log(`# parseBlock state=${n}`),0===n){var i={line:t=e.blockContext.line,lineno:e.lineno,blocks:r(e.blockContext.blocks)};if(e.line0?e.line1=i:(e.line0=i,e.line1=void 0),e.line1){e.nextLineBlank=f(e.line1.line);for(var a=!1;!a;)a=h(e,e.line0.line,e.line0.blocks,e.line0.lineno);e.previousLineBlank=f(e.line0.line),e.line0=e.line1,e.line1=void 0}e.blockContext={state:0,nestedDepth:0,line:"",lineno:0,blocks:[],lastChunk:""}}}function u(e,t){for(var n=0;n<e.length;n++)e[n].position=e[n].position+t}function f(e){for(var t=0,n=0;n<e.length;n++){var i=e.charAt(n);if(a.indexOf(i)<0)return!1;t++}return t<2}function g(e,t){var n,i=0,r=0,o=0;for(i=0;i<e.length;i++)if(n=e.charAt(i),a.indexOf(n)<0){r=i;break}for(i=e.length-1;i>=0;i--)if(n=e.charAt(i),a.indexOf(n)<0){o=i;break}return u(t,-r),0===o?"":e.substring(r,o+1)}function h(e,t,n,i){var r,o=g(t,n),a=f(t);if(a&&n.length>0&&e.notif.block(n),0===e.state){if(a)return!0;if((r=t.indexOf(":"))<0)return e.state=10,!1;e.state=2,e.metaInformation={},p(e,t,r)}else if(2==e.state)if("\t"===t.charAt(0)||"   "===t.substring(0,3)){if(!e.currentKey)throw new Error("internal error");e.metaInformation[e.currentKey].push(t.trim())}else{if(!((r=t.indexOf(":"))>0))return e.notif.titlePage(e.metaInformation),e.state=10,!1;p(e,t,r)}else{if(10!=e.state)throw new Error("Invalid state:"+e.state);if(!a){var c=d(o,0,"><");c&&0===c.before.trim().length&&0===c.after.trim().length?(u(n,c.before.length+1),e.notif.action(g(c.between,n),n,{alignment:"centered"})):"="===o.charAt(0)&&o.length>=3&&"="===o.charAt(1)&&"="===o.charAt(2)?e.notif.pageBreak():"#"===o.charAt(0)&&function(e,t,n){var i=0,r=0;for(r=0;r<t.length;r++){var o=t.charAt(r);if("#"==o)i++;else if(" "!=o&&"\t"!=o)break}var a=t.substring(r).trim();return e.notif.section(a,i,n),!0}(e,o,i)||"="===o.charAt(0)&&function(e,t){var n=t.substring(1).trim();return e.notif.synopsis(n),!0}(e,o)||(e.previousLineBlank&&e.nextLineBlank||">"===t.charAt(0))&&function(e,t){var n=!1;return">"==t.charAt(0)?n=t.substring(1).trim():"TO:"===t.substring(t.length-3)&&t.toUpperCase()===t&&(n=t.trim()),!!n&&(e.notif.transition(n),!0)}(e,t)||e.previousLineBlank&&function(e,t,n){var i=!1;if("."===t.charAt(0)&&t.length>1&&"."!==t.charAt(1))i=t.substring(1).trim();else{var r=m(t,0," .");s.indexOf(r.toUpperCase())>=0&&(i=t.trim())}return!!i&&(e.notif.sceneHeading(i,n),!0)}(e,o,i)||e.previousLineBlank&&!e.nextLineBlank&&function(e,t){var n=!1;"^"===t.charAt(t.length-1)&&(n=!0,t=t.substring(0,t.length-1).trim());var i,r=!1;if("@"===t.charAt(0))r=t.substring(1).trim();else{var o=m(t,0,"(").trim();if(o.length>0&&o.toUpperCase()===o)for(var a=0;a<o.length;a++)if(i=o.charAt(a),l.test(i)){r=t;break}}if(r){var s,c=d(r,0,"()");return c&&(r=c.before.trim(),s=c.between.trim()),s?e.notif.character(r,{extension:s,isDualDialogue:n}):e.notif.character(r,{isDualDialogue:n}),!0}return!1}(e,o)||(!e.previousLineBlank&&function(e){return"character"===e.lastElementNature||"dialogue"===e.lastElementNature||"parenthetical"===e.lastElementNature}(e)?function(e,t){if("("===t.charAt(0)){var n=t.indexOf(")");if(n>0){e.notif.parenthetical(t.substring(1,n));var i=t.substring(n+1).trim();i.length>0&&e.notif.dialogue(i)}else e.notif.parenthetical(t.substring(1))}else e.notif.dialogue(t)}(e,o):e.notif.action(o,n,{}))}}return!0}function p(e,t,n){var i=t.substring(0,n).trim();if(e.currentKey=i,e.metaInformation[e.currentKey]=[],n<t.length){var r=t.substring(n+1).trim();r.length>0&&e.metaInformation[e.currentKey].push(r)}}function d(e,t,n){for(var i=0,r={before:"",between:"",after:""},o=t;o<e.length;o++){var a=e.charAt(o);if(0===i&&a===n[0])r.before=e.substring(t,o),i=1;else{if(1===i&&a===n[1]){r.after=e.substring(o+1),i=3;break}1===i&&(r.between=r.between+a)}}return 3===i&&r}function m(e,t,n){for(var i=t;i<e.length;i++){var r=e.charAt(i);if(n.indexOf(r)>=0)return e.substring(t,i)}return e.substring(t)}function v(e,t){var n=function(e){return{state:0,lineno:0,blockContext:{state:0,nestedDepth:0,line:"",lineno:0,blocks:[],lastChunk:""},metaInformation:{},previousLineBlank:!0,nextLineBlank:void 0,notif:e||{startOfDocument:function(){console.log("startOfDocument")},titlePage:function(e){console.log("titlePage:",e)},sceneHeading:function(e,t){console.log("sceneHeading:<"+e+">",t)},action:function(e,t,n){console.log("action:<"+e+"> options:",n)},pageBreak:function(){console.log("pageBreak")},dualDialogueStart:function(){console.log("dualDialogueStart")},dualDialogueEnd:function(){console.log("dualDialogueEnd")},dialogueStart:function(){console.log("dialogueStart")},dialogueEnd:function(){console.log("dialogueEnd")},character:function(e,t){t.extension?console.log("character:<"+e+"> option:",t):console.log("character:<"+e+">")},parenthetical:function(e){console.log("parenthetical:<"+e+">")},dialogue:function(e){console.log("dialogue:<"+e+">")},transition:function(e){console.log("transition:<"+e+">")},section:function(e,t,n){console.log("section:"+t+"<"+e+">",n)},synopsis:function(e){console.log("synopsis:<"+e+">")},block:function(e){console.log("block:<"+e+">")},endOfDocument:function(){console.log("endOfDocument")}}}}();n.notif=function(e,t,n){var i=!1,r=[];function o(){r.length>0&&(t.dialogueStart(),r.forEach((function(e){e()})),t.dialogueEnd()),r.length=0}function a(){o(),i&&(t.dualDialogueEnd(),i=!1)}return{startOfDocument:function(){t.startOfDocument(),e.lastElementNature="startOfDocument"},titlePage:function(n){t.titlePage(n),e.lastElementNature="titlePage"},sceneHeading:function(n,i){a(),t.sceneHeading(n,i),e.lastElementNature="sceneHeading"},action:function(n,i,r){a(),t.action(n,i,r),e.lastElementNature="action"},pageBreak:function(){a(),t.pageBreak(),e.lastElementNature="pageBreak"},character:function(n,a){r.length>0&&(a.isDualDialogue&&!i?(t.dualDialogueStart(),i=!0,o()):(o(),i&&(t.dualDialogueEnd(),i=!1))),r.push((function(){t.character(n,a)})),e.lastElementNature="character"},parenthetical:function(n){r.push((function(){t.parenthetical(n)})),e.lastElementNature="parenthetical"},dialogue:function(n){r.push((function(){t.dialogue(n)})),e.lastElementNature="dialogue"},transition:function(n){a(),t.transition(n),e.lastElementNature="transition"},section:function(n,i,r){a(),t.section(n,i,r),e.lastElementNature="section"},synopsis:function(n){t.synopsis(n),e.lastElementNature="synopsis"},block:function(e){t.block(e)},dialogueStart:function(){t.dialogueStart(),e.lastElementNature="dialogueStart"},dialogueEnd:function(){t.dialogueEnd(),e.lastElementNature="dialogueEnd"},dualDialogueStart:function(){t.dualDialogueStart(),e.lastElementNature="dualDialogueStart"},dualDialogueEnd:function(){t.dualDialogueEnd(),e.lastElementNature="dualDialogueEnd"},endOfDocument:function(){a(),t.endOfDocument(),e.lastElementNature="endOfDocument"}}}(n,t);const i=e.split(/\r?\n/);n.notif.startOfDocument();for(const e of i)c(n,e);c(n,""),2===n.state&&n.notif.titlePage(n.metaInformation),n.notif.endOfDocument()}function b(e){var t={type:".",text:"",parts:[]};return E(e,0,t),t}function E(e,t,n){const i=e.length;let r="";const o=n.type,a="."!==o[0];function l(e){r+=e}function s(t,n){return t+n<i?e.charAt(t+n):""}function c(t,i){var o={type:i,text:"",parts:[]},a=E(e,t+i.length,o);return a>=0&&(r.length>0&&(n.parts.push({type:".",text:r,parts:[]}),r=""),n.parts.push(o)),a}let u;for(u=t;u<i;u++){const t=e.charAt(u),i=u>0&&" "===e.charAt(u-1);if("\\"!==t){if(a&&t===o[0]&&!i){for(var f=!0,g=0;g<o.length;g++)if(s(u,g)!==o[g]){f=!1;break}if(f)return n.parts.push({type:".",text:r,parts:[]}),r="",u+o.length-1}if("_"===t){const e=c(u,"_");e<0?l(t):u=e}else if("*"===t)if("*"===s(u,1))if("*"===s(u,2)){const e=c(u,"***");e<0?l(t):u=e}else{const e=c(u,"**");e<0?l(t):u=e}else{const e=c(u,"*");e<0?l(t):u=e}else l(t)}else l(s(u,1)),u++}return a?-1:(r.length>0&&(n.parts.push({type:".",text:r,parts:[]}),r=""),u)}function k(e,t){const n=[];return e.length>0&&n.push(e),t.forEach((e=>{n.push(...w(e))})),n}function w(e){switch(k(e.text,e.parts),e.type){case".":default:return k(e.text,e.parts);case"_":return[(0,t.createElement)("u",{},k(e.text,e.parts))];case"*":return[(0,t.createElement)("em",{},k(e.text,e.parts))];case"**":return[(0,t.createElement)("strong",{},k(e.text,e.parts))];case"***":return[(0,t.createElement)("strong",{},(0,t.createElement)("em",{},k(e.text,e.parts)))]}}function L(e){return w(b(e))}function D(e){const n=function(){const e=[],n=[];function i(t){e.push(t)}function r(t,n){e.push(`${t}||${n}`)}function o(t,n){e.push(`${t}||${JSON.stringify(n)}`)}const a={startOfDocument:function(){i("startOfDocument")},titlePage:function(e){o("titlePage",e)},sceneHeading:function(i,r){var o,a;o=i,a=r,e.push(`sceneHeading||${o}||${a}`),n.push((0,t.createElement)("p",{className:"sceneheader"},i))},action:function(i,r,o){var a,l,s;a=i,l=r,s=o,e.push(`action||${a}||${JSON.stringify(l)}||${JSON.stringify(s)}`),n.push((0,t.createElement)("p",{className:"action"},L(i)))},pageBreak:function(){i("pageBreak")},dualDialogueStart:function(){i("dualDialogueStart")},dualDialogueEnd:function(){i("dualDialogueEnd")},dialogueStart:function(){i("dialogueStart")},dialogueEnd:function(){i("dialogueEnd")},character:function(i,r){var o,a;o=i,a=r,e.push(`character||${o}||${JSON.stringify(a)}`),n.push((0,t.createElement)("p",{className:"character"},i))},parenthetical:function(e){r("parenthetical",e),n.push((0,t.createElement)("p",{className:"parenthetical"},`(${e})`))},dialogue:function(e){r("dialogue",e),n.push((0,t.createElement)("p",{className:"dialogue"},L(e)))},transition:function(e){r("transition",e),n.push((0,t.createElement)("p",{className:"transition"},e))},section:function(t,n,i){!function(t,n,i,r){e.push(`section||${n}||${i}||${JSON.stringify(r)}`)}(0,t,n,i)},synopsis:function(e){r("synopsis",e)},block:function(e){o("block",e)},endOfDocument:function(){i("endOfDocument")}};return{getNotification:()=>a,getResult:()=>(0,t.createElement)("div",{className:"scrippet-fountain-html"},n)}}();return v(e||"",n.getNotification()),n.getResult()}(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},(0,t.createElement)("path",{d:"M245.2 153.5a36 36 0 0 0-32-60.7 36 36 0 0 0-20.3-65.6 36 36 0 0 0-29.7 15.7 36 36 0 0 0-60.7-32.1 36 36 0 0 0-9.9 32.1 36 36 0 0 0-65.7 20.2 36 36 0 0 0 15.7 29.7 36.5 36.5 0 0 0-6.7-.6 35.7 35.7 0 0 0-35.9 36A35.7 35.7 0 0 0 36 164c2.2 0 4.5-.3 6.6-.7A36 36 0 0 0 63 229.1a36 36 0 0 0 29.7-15.8 36 36 0 0 0 60.7 32.2 36 36 0 0 0 9.9-32.2 36 36 0 0 0 65.6-20.2 36 36 0 0 0-15.7-29.7 36.4 36.4 0 0 0 32.1-9.9"}),(0,t.createElement)("path",{fill:"#FFB13B",d:"M234.4 113.5c-8-8-21.1-8-29.2 0h-42.1l29.8-29.8a20.6 20.6 0 1 0-20.6-20.6l-29.9 29.8V50.7a20.6 20.6 0 1 0-29.1 0V93L83.5 63.1a20.6 20.6 0 1 0-20.6 20.6l29.8 29.8H50.5a20.6 20.6 0 1 0 0 29.2h42.2l-29.8 29.8a20.6 20.6 0 1 0 20.6 20.6l29.8-29.8v42.2a20.6 20.6 0 1 0 29.1 0v-42.2l29.9 29.8a20.6 20.6 0 1 0 20.6-20.6L163 142.7h42.1a20.6 20.6 0 1 0 29.2-29.2"}));const C=(0,t.createElement)("svg",{width:"235",height:"267",viewBox:"0 0 235 267",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("mask",{id:"path-1-inside-1_3_22",fill:"white"},(0,t.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 0C8.9543 0 0 8.9543 0 20V200C0 211.046 8.9543 220 20 220H77.4955C77.823 220.842 78.2765 221.664 78.8661 222.446L109.287 262.781C113.341 268.157 121.441 268.071 125.381 262.611L154.941 221.64C155.325 221.108 155.647 220.56 155.912 220H215C226.046 220 235 211.046 235 200V20C235 8.95431 226.046 0 215 0H20Z"})),(0,t.createElement)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 0C8.9543 0 0 8.9543 0 20V200C0 211.046 8.9543 220 20 220H77.4955C77.823 220.842 78.2765 221.664 78.8661 222.446L109.287 262.781C113.341 268.157 121.441 268.071 125.381 262.611L154.941 221.64C155.325 221.108 155.647 220.56 155.912 220H215C226.046 220 235 211.046 235 200V20C235 8.95431 226.046 0 215 0H20Z",fill:"white"}),(0,t.createElement)("path",{d:"M77.4955 220L91.4748 214.561L87.7549 205H77.4955V220ZM78.8661 222.446L66.8903 231.478L66.8903 231.478L78.8661 222.446ZM109.287 262.781L121.263 253.749L121.263 253.749L109.287 262.781ZM125.381 262.611L137.545 271.388L137.545 271.388L125.381 262.611ZM154.941 221.64L142.777 212.864L142.777 212.864L154.941 221.64ZM155.912 220V205H146.405L142.347 213.597L155.912 220ZM15 20C15 17.2386 17.2386 15 20 15V-15C0.670039 -15 -15 0.670022 -15 20H15ZM15 200V20H-15V200H15ZM20 205C17.2386 205 15 202.761 15 200H-15C-15 219.33 0.670032 235 20 235V205ZM77.4955 205H20V235H77.4955V205ZM90.842 213.414C91.0759 213.724 91.299 214.11 91.4748 214.561L63.5162 225.439C64.347 227.574 65.4772 229.604 66.8903 231.478L90.842 213.414ZM121.263 253.749L90.842 213.414L66.8903 231.478L97.3115 271.814L121.263 253.749ZM113.216 253.834C115.186 251.104 119.236 251.062 121.263 253.749L97.3115 271.814C107.447 285.252 127.697 285.037 137.545 271.388L113.216 253.834ZM142.777 212.864L113.216 253.834L137.545 271.388L167.105 230.417L142.777 212.864ZM142.347 213.597C142.479 213.317 142.627 213.072 142.777 212.864L167.105 230.417C168.023 229.145 168.816 227.802 169.476 226.403L142.347 213.597ZM215 205H155.912V235H215V205ZM220 200C220 202.761 217.761 205 215 205V235C234.33 235 250 219.33 250 200H220ZM220 20V200H250V20H220ZM215 15C217.761 15 220 17.2386 220 20H250C250 0.670037 234.33 -15 215 -15V15ZM20 15H215V-15H20V15Z",fill:"black",mask:"url(#path-1-inside-1_3_22)"}),(0,t.createElement)("path",{d:"M117 249L83.225 204.75H150.775L117 249Z",fill:"white"}),(0,t.createElement)("path",{d:"M79.9 176V51.4H159.3V71.8H102.3V98.8H148.7V119.2H102.3V176H79.9Z",fill:"black"})),N=JSON.parse('{"UU":"scriptview/scrippet-block"}');(0,e.registerBlockType)(N.UU,{edit:function({attributes:e,setAttributes:r,isSelected:o}){const{fountainSource:a=""}=e,l=(0,i.useBlockProps)();return(0,n.useEffect)((function(){const e=D(a);r({fountainHtml:e})}),[]),(0,t.createElement)("div",{...l},o&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)("pre",{className:"mermaid-editor wp-block-code"},(0,t.createElement)(i.PlainText,{onChange:function(e){r({fountainSource:e})},value:a})),(0,t.createElement)("hr",null),(0,t.createElement)("p",{className:"mermaid-preview"},"Preview: ")),D(a))},icon:C,save:function(e){const{fountainSource:n}=e.attributes,r=i.useBlockProps.save({className:"scrippet-block"});return(0,t.createElement)("div",{...r},(0,t.createElement)("pre",{className:"scrippet-fountain-source",style:{display:"none"}},n),D(n))}})}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,i),o.exports}i.m=t,e=[],i.O=(t,n,r,o)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](n[s])))?n.splice(s--,1):(l=!1,o<a&&(a=o));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,a=n[0],l=n[1],s=n[2],c=0;if(a.some((t=>0!==e[t]))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(s)var u=s(i)}for(t&&t(n);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(u)},n=self.webpackChunkscrippet_block=self.webpackChunkscrippet_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=i.O(void 0,[350],(()=>i(702)));r=i.O(r)})();