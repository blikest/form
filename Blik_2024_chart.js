 import {color,spectrum} from "./Blik_2023_layout.js";
 import {extreme,extract,cluster,prune,sum,rgb} from "./Blik_2023_search.js";
 import {note,infer,buffer,exit,compose,tether,defined,string,functor,array,compound,numeric,finite,when,major,wait,pass,observe,slip,each} from "./Blik_2023_inference.js";
 import extend from './Blik_2023_d4.js';
 import * as d3 from './Bostock_2011_d3.js';
 import {select,selectAll} from './Bostock_2011_d3_select.js';
 import {axisBottom,axisLeft} from './Bostock_2016_axis.js';
 import {resolve,window,fetch,digest} from "./Blik_2023_interface.js";
 import {document,css,capture,ascend,keyboard} from "./Blik_2023_fragment.js";
 import * as vectors from "./Blik_2024_svg.js";
 var {default:awesome}=await resolve.call(import.meta.url,"./blessochampion_2019_awesomesvgs.json");
 var location=new URL(import.meta.url).pathname;

 export function bar(source,negative)
{let x=d3.scaleLinear().domain([0,1]).range([0,1]);
 let y=d3.scaleLinear().domain([negative?-1:0,1]).range([negative?-1:0,source]);
 return extend.call(document({svg:
 {viewBox:negative?"0 0 2 2":"0 0 1 1"
 ,style:"overflow:visible;"
 }})
,{fold:false,rect:{fold:source,"stroke-width":0
 ,height:d=>Math.abs(d),width:1
 ,x:(d,i)=>x(i),y:d=>0<d?0:0
 }});
};

 export function plot(record,{domain,range,power=1}={})
{if(string(record))
 return compose(fetch,digest,infer(plot,arguments[1]))(record);
 record=cluster(record);
 if(string(domain))domain=JSON.parse(domain);
 if(string(range))range=JSON.parse(range);
 if([domain,range].some(Boolean))
 record=Object.fromEntries(Object.entries(record).filter(entry=>
 [domain||[],range||[]].every((extreme,index)=>extreme.every((extreme,pole)=>
 [extreme,entry[index]].sort(extreme=>pole&&-1).reduce((past,next)=>past<=next)))));
 record[Number(extreme(Object.keys(record))[0])-1]=0;
 let [width,height]=
 [Object.keys(record).length*50
 ,Math.pow(extreme(Object.values(record))[1]*2,power)
 ];
 let [min,max]=extreme(Object.keys(record));
 let {1:peak}=extreme(Object.values(record));
 let [x,y]=[[min,max],[peak,-10]].map((domain,index)=>
 d3['scale'+(index?'Linear':'Linear')](domain,[0,[width,height][index]]));
 return compose.call({svg:
 {defs:{filter:prune.call(vectors.effect.contour,([field,value],{length:depth})=>(
  {"flood-color":"#ffb300",id:depth?value:"contour_yellow"}[field]||value))}
 }},document
,{update:true,datum:{record,x,y}
 ,viewBox({record}){return [-50,-30,width+90,height+50];}
 ,g:
 {class:"chart",update:true
 ,path:
[{class:"line",update:true
 ,fill:"none",stroke:"currentColor"
 ,"stroke-width":2
 ,d({record,x,y})
{let line=d3.line().x(({0:field})=>x(Number(field))).y(({1:value})=>y(value)).curve(d3.curveCatmullRom);
 return line(Object.entries(record));
}}
],g:
[{class:"label"
 ,fold:({x,y,record})=>Object.entries(record).map(([field,value])=>({x:x(field),y:y(value),value}))
 ,circle:
 {r:12,fill:"#ffb300",cx:({x})=>x,cy:({y})=>y
 }
 ,text:
 {fill:"black",x:({x})=>x,y:({y})=>y,text:({value})=>value
 ,"text-anchor":"middle","text-size":5,dy:6,filter:"url(#contour_yellow)","font-weight":"bold"
 }
 }
,{class:"x axis",transform:"translate(0,"+height+")",call:axis=>axisBottom(axis.datum().x)(axis),each(){this.firstChild.remove();this.querySelectorAll("text").forEach(n=>n.textContent=n.textContent.replace(",",""));this.querySelectorAll("line").forEach(n=>n.remove())}}
//,{class:"y axis",call:axis=>d3.axisLeft(axis.datum().y)(axis)}
]}
 },tether(extend));
};

 export async function cumulation(source)
{let subjects=Array.from(new Set(Object.values(source).flatMap(({occurrence})=>
 Array.from(occurrence)))).map(name=>(
 {name,concepts:Object.values(source).filter(({occurrence})=>
 Array.from(occurrence).includes(name))
 })).map(({name,concepts},index,subjects)=>(
 {name,concepts,new:concepts.filter(({name})=>
 subjects.slice(0,index).every(({concepts})=>
 concepts.every(({name:past})=>past!==name)))
 }));
 subjects.unshift({name:0,concepts:[],new:[]});
 let categories=Array.from(new Set(source.map(({source:[{name}]})=>name)));
 let x=d3.scaleLinear().domain([0,subjects.length-1]).range([0,500]);
 let y=d3.scaleLinear().domain([0,sum(subjects.map(({new:{length}})=>length))]).range([300,0]);
 return extend.call(document({svg:{viewBox:"0,0,530,330"}})
,{fold:false
 ,g:
 {fold:false,transform:"translate(20,10)"
 ,g:
[{fold:Object.entries({x:axisBottom(x),y:axisLeft(y)})
 ,class:"axis"
 ,transform:([field])=>({x:"translate(0,300)"}[field])
 ,each({1:fragment}){return fragment(select(this));}
 }
,{fold:["",categories].flat().map((category,index)=>
 [category,color[category]||"#D5CBAF",subjects.map((subject,index,subjects)=>
 sum(subjects.slice(0,index+1).map(({new:concepts})=>category
?concepts.filter(({source:[{name}]})=>name===category)
:concepts).map(({length})=>length)))])
 ,class:"line"
 ,path:
 {fold:({2:subjects})=>[subjects]
 ,"stroke-width":1.5,fill:"none"
 ,stroke(){return select(this.parentNode).datum()[1];}
 ,d:d3.line().x((d,i)=>x(i)).y(y).curve(d3.curveMonotoneX)
 }
 ,circle:
 {fold:({2:subjects})=>subjects
 ,fill(){return select(this.parentNode).datum()[1];}
 ,opacity:(d,i)=>i?undefined:0
 ,r:5,cx:(d,i)=>x(i),cy:y
 }
 ,text:
 {fold:({2:subjects})=>subjects
 ,"text-anchor":"middle",dy:"0.3em"
 ,style:{"font-size":"7px",opacity:(d,i)=>i?undefined:0}
 ,x:(d,i)=>x(i),y:y
 ,text:drop(1,2)
 }
 }
]}
 });
};

 export async function matrix(records,range,domain=1)
{if(string(records))
 records=await compose(note,fetch,digest,note)(records);
 if(records.nodeName)
 return infer
(matrix=>({[matrix.id]:Object.fromEntries(Array.from(matrix.querySelectorAll(".record")).slice(0,-1).map(record))})
)(records.closest(".matrix"));
 if(Array.isArray(Object.values(Object.values(records)[0])[0]))
 domain=1;
 if(domain)
 [[domain,records]]=Object.entries(records);
 records=Object.entries(records).map((record,index)=>record.flat());
 let [top,side]=[records.slice(1).map(([{length}])=>length),records[0].slice(1).map(({length})=>length)].map(range=>Math.max(...range));
 let span=[records,[records[0]]].flat().map(record);
 let style=css({".matrix":
 {display:"inline-block",margin:top+"em "+side+"em"
 ,"&>span.record":
 {display:"table-row",height:"1em"
 ,"&>span":
 {display:"table-cell","white-space":"nowrap","vertical-align":"middle"
 ,"&:first-of-type":{"text-align":"right"}
 ,"&:last-of-type":{"text-align":"left"}
 ,"&>span":{display:"block",outline:"none",width:"1.5em",height:"1.5em","text-align":"center",cursor:"pointer","&:empty:not(:focus):after":{content:"'+'","font-size":"2em","line-height":".75em","font-weight":"800",opacity:0.5}}
 }
 ,"&:not(:first-of-type):not(:last-of-type)>span:not(:first-of-type):not(:last-of-type)>span":{"font-size":"1.5em","caret-color":"transparent",cursor:"crosshair"}
 ,"&:not(:first-of-type)>span:first-of-type>span":{direction:"rtl","transform":"translate(1.25em,1em) rotate(-45deg)","transform-origin":"right",height:"2em"}
 ,"&:not(:last-of-type)>span:last-of-type>span":{"transform":"translate(-.25em,-1em) rotate(-45deg)","transform-origin":"left",opacity:0.5}
 ,"&:first-of-type>span:not(:last-of-type)>span":{direction:"rtl","transform":"translate(-1em,-.5em) rotate(45deg)","transform-origin":"left",width:"2em"}
 ,"&:last-of-type>span:not(:first-of-type)>span":{"transform":"translate(1.25em,-.25em) rotate(45deg)","transform-origin":"right",opacity:0.5}
 }
 }});
 let actions=!globalThis.window?"/"+(await resolve("path","relative",".",location)):location;
 return capture.call(document({span:{class:"matrix",id:domain,style:{"#text":style},span,dataset:{source:string(arguments[0])?arguments[0]:""}}}),actions+"/actions");
};

 function record(record,index,records)
{if(record.nodeName)
 return Array.from(record.childNodes).flatMap((node,field,fields)=>
 [record.dataset.source,fields.splice(0).slice(1,-1).map(node=>node.textContent)]);
 let length=Math.max(...records.map(({length})=>length));
 let span=Object.assign
(Array.from({length},field=>0),record
,(!index||!records[index+1])&&[""]
,{[length]:index&&records[index+1]?record[0]:""}
).map((text,field,fields)=>(
 {span:{"#text":String(text??""),contenteditable:true}
 //!index||!defined(records[index+1])||!field||!defined(fields[field+1])
 }));
 return {span,dataset:{source:record[0]},class:"record"};
};

 export var actions=
 {".matrix":
 {async click({target,detail})
{let {nodeValue:value}=target.firstChild||{};
 let records=Array.from(this.querySelectorAll(".record"))
 if(value&&!isNaN(value)&&records.indexOf(target.closest(".record")))
 return detail<2&&await wait(300)()
,target.textContent===value?target.textContent=Number(value)+(detail>1?-1:1):0
,target.dispatchEvent(new KeyboardEvent("keydown",{keyCode:keyboard("enter"),bubbles:true}))
 buffer(compose
(combine(infer(),compose(marks=>marks.indexOf(value)+1,when(major(0)),index=>index%2))
,Reflect.get,mark=>target.textContent=mark
))(Array.from("✓✗"));
},async input({target})
{let [record,field]=ascend.call(target,".record");
 let fields=Array.from(record.childNodes);
 let records=Array.from(record.parentNode.querySelectorAll(".record"));
 let index=fields.indexOf(field);
 let domain=records.indexOf(record);
 let internal=[[domain,records],[index,fields]].map(([index,range])=>
 [-1,1].every(next=>range[index+next]));
 let vertical=(!records[domain-1]&&field.nextSibling)||(!records[domain+1]&&index);
 let mirror=vertical
?records.at(records[domain+1]?-1:0).childNodes[field.nextSibling?index||fields.length-1:0]
:Array.from(records.at(!records[domain-1]||!records[domain+1]?domain?0:-1:domain).childNodes).at(field.nextSibling?-1:0);
 let value=target.textContent;
 if(!internal.every(Boolean))
 mirror.firstChild.textContent=value;
 if(!internal.some(Boolean))return;
 await wait(3000)();
 if(target.textContent!==value)
 return;
 target.dispatchEvent(new KeyboardEvent("keydown",{keyCode:keyboard("enter"),bubbles:true}))
},keydown({target,keyCode,isTrusted})
{let {enter,backspace}=keyboard(keyCode);
 if(!enter&&!backspace)
 return;
 if(enter)
 arguments[0].preventDefault();
 let [past,record,field]=ascend.call(target,".matrix");
 let fields=Array.from(record.childNodes);
 let records=Array.from(record.parentNode.querySelectorAll(".record"));
 let index=fields.indexOf(field);
 let domain=records.indexOf(record);
 let [horizontal,vertical]=[[domain,records],[index,fields]].map(([index,range])=>
 [-1,1].every(next=>range[index+next]));
 if(horizontal&&vertical&&isTrusted)
 return target.dispatchEvent(new MouseEvent("click",{detail:backspace?2:1,bubbles:true}));
 if(backspace)
 return;
 let internal=horizontal||vertical;
 let value=target.textContent;
 if(internal&&!value&&(!isTrusted||!["y","yes"].includes(prompt("remove "+value+"? (yes)")?.toLowerCase())))
 return value;
 let change={[past.id]:horizontal&&vertical
?{[record.dataset.source]:{[index-1]:value}}
:!internal
?(!records[domain-1]&&!fields[index-1])||(!records[domain+1]&&!fields[index+1])?{[records[0].dataset.source]:[value]}:{[value]:[]}
:horizontal?{[record.dataset.source]:null,...value&&{[value]:fields.slice(1,-1).map(({textContent})=>textContent)}}:value
?{[records[0].dataset.source]:{[index-1]:value}}
:Object.fromEntries(records.map(({dataset})=>[dataset.source,{[index-1]:null}]))};
 note(horizontal,vertical,change)
 return buffer(compose
({method:"put",body:JSON.stringify(note(change))},fetch
,when(compose("status",is(200))),"json"
,pass(message=>this.dispatchEvent(new MessageEvent("message",{data:{action:"broadcast",message,room:past.dataset.source+"/"},bubbles:true})))
,horizontal&&vertical?exit:undefined,0,1,matrix
,{style:past.getAttribute("style"),dataset:{source:past.dataset.source}},merge
,slip(past),note,"replaceWith"
),note)(past.dataset.source+"?override="+internal);
}}
 ,".record":observe({hover({target,srcElement,isTrusted:hover})
{let [record,field]=ascend.call(target,".record");
 let internal=["next","previous"].every(next=>[record,field].every(node=>node[next+"Sibling"]));
 if(!internal||!record.previousSibling.classList.contains("record"))return;
 let index=Array.from(record.childNodes).indexOf(field);
 Array.from(record.parentNode.querySelectorAll(".record")).flatMap((first,index,records)=>
 [first,record,records.splice(0).at(-1)]).flatMap((fields,record)=>
 [fields.childNodes[index],...record%2?[fields.firstChild,fields.lastChild]:[]]).forEach(node=>
 node.style.textShadow=hover?"white 0px 0px 2px,white 0px 0px 2px":"none");
}})
 };

 function set(matrix,[name,term],depth)
{return prune.call(matrix,([field,value],path)=>
 path.length===depth&&field==name?term:value
,0,depth);
};

 export function table(source,depth=0,palette=spectrum(color.vibrant))
{let span=Object.entries(source).map(function([field,value],index,{length})
{let shade=depth
?depth<2
?d3.scaleLinear().range(Array(2).fill(rgb(palette(index/(length-1)))).map((rgb,index)=>
 rgb.replace("1)",index+")")))
:palette
:null;
 let pill=string(value)?value.match(/\d+/)
?color.rainbow((15-new Number(value.match(/\d+/)[0])+1)/20)+";color:#212121"
:"shade(1);color:black":"transparent"
 return {span:
[{span:{"#text":field}}
,...[value].flat().map(value=>string(value)
?{span:{"#text":value
 ,style:"background-color:"+pill+";border-radius:1em 1em 1em 1em;height:1em;padding:0 5px 0 5px;white-space:nowrap"
 }}
:table(value,depth+1,shade||palette))
],style:depth?"background-color:"+(shade?.(0.25)):""};
});
 return document({span:
 {class:["table","depth-"+depth],span
 ,...!depth&&
 {style:{"#text":css({".table":
 {"display":"inline-block","max-width":"100%",overflow:"scroll"
 ,"text-align":"left","vertical-align":"middle"
 ,"&>span":
 {display:"flex","justify-content":"space-between","border-radius":"1em",margin:".5em",padding:".25em"
 ,"&>span":
 {display:"inline-block","vertical-align":"middle","align-content":"center"
 }
 }
 ,"&.depth-0>span>span":
 {"&:first-of-type,&:nth-of-type(3):last-of-type":
 {width:"0",margin:"0 .5em","white-space":"nowrap","vertical-align":"middle","transform-origin":"center",transform:"rotate(-90deg)"
 ,"&>span":{display:"inline-block",translate:"-50%"}
 }
 ,"&:nth-of-type(3):last-of-type":{transform:"rotate(90deg)"}
 }
 }})}
 }
 }});
};

 export async function adjacency(source)
{source=["provider","service","stakeholder"].reduce((source,category)=>
 source.sort((past,next)=>next.source[0].name===category?-1:1),source);
 let margin=Math.max(...source.map(({name})=>name.length));
 let matrix=source.map((concept,index,concepts)=>
 [...concept.relations?.entries()||[]].reduce((record,[target,vector])=>
 merge(record,{[source.findIndex(node=>node===target)]:vector},1)
,Array(concepts.length)));
 let imposures=matrix.map((record,index)=>imposure(index,true).toFixed(1));
 let exposures=matrix.map((record,index)=>exposure(index,true).toFixed(1));
 let hierarchy=matrix.map((record,index,matrix)=>
 [imposure(index,true),imposure(index,1/(exposure(index,true)))]);
 let complexity=(12/(matrix.length**3-matrix.length))*matrix.reduce((hierarchy,record,index)=>
 hierarchy+(((imposure(index,true)-sum(imposures))/matrix.length)**2),0);
 let direction=source.reduce((direction,{source:[{name:source}],relations})=>
 Array.from(relations?.entries()||[]).reduce((direction,[{source:[{name:target}]}])=>
 direction.set(source,target),direction),new Map());
 let header=
 {id:"header",td:
 [{"#text":""},source.map(({name},index,source)=>({span:{"#text":name,img:
 capture.call(document({img:
 {src:"/icon/"+name+".png"
 ,style:"background-color:"+color[source[index].source[0].name]
 }}),location+"/chart")}}))].flat()
 };
 let index={td:["",...matrix].map((field,index)=>({"#text":String(index||"")}))};
 let map=matrix.map((record,index)=>(
 {td:[index+1,...record,index+1].map((vector,field)=>(
 {"#text":field&&(field-1<matrix.length)?(vector||0).toFixed(1).toString().replace("0.0",""):String(vector)
 ,style:(field<1||matrix.length<field)||("border:none;background:rgba("+rgb(color[source[field-1].source[0].name]).join(",")+",0.5) linear-gradient(to bottom,rgba("+Array(2).fill(rgb(color[source[index].source[0].name])).join(",0.5),rgba(")+",0.5)")
 }))
 }));
 let degrees=Object.entries({input:exposure,output:imposure}).map(([id,measure],out)=>(
 {id,td:
[document({svg:vectors.object["door_"+(out?"leave":"enter")]})
,...matrix.map((record,index)=>measure(index)).map(value=>
 value?String(value):
 window.document.createRange().createContextualFragment(awesome["fas fa-satellite"+(out?"":"-dish")]))
,0
].map((field,index,values)=>(
 {"#text":index?index>matrix.length
?(sum(values.slice(1,index))/matrix.length).toFixed(2)+" ("+((sum(values.slice(1,index))/(matrix.length*(matrix.length-1)))*100).toFixed(2)+"%)"
:field:field
 ,style:"white-space:nowrap"
 }))
 }));
 let ratio=
 {id:"ratio",td:
["i/o",...matrix.map((record,index)=>
 exposure(index)/imposure(index)),0
].map((field,index,values)=>(
 {"#text":index?index>matrix.length
?(sum(values.slice(1,-1).filter(finite))/values.slice(1,-1).filter(finite).length).toFixed(2)
:field==Infinity?window.document.createRange().createContextualFragment(awesome["fas fa-flag-checkered"])
:field>0?field.toFixed(1)
:window.document.createRange().createContextualFragment(awesome["fas fa-flag-checkered"]):field
 }))
 };
 let weights=
 Object.entries({exposure:exposures,imposure:imposures}).map(([id,values],imposure)=>(
 {id,td:
[{svg:merge(imposure?{style:"transform:scaleX(-1)"}:{},vectors.object["scale_imbalanced"])
 },...values,0
].map((field,index,values)=>index?
 {"#text":index>matrix.length
?(sum(values.slice(1,index))/matrix.length).toFixed(3):field
 ,style:matrix.length<index?undefined:"color:"+(
 [["provider","hazard"],["hazard","stakeholder"]][imposure].includes(source[index-1].source[0].name)?"#c62828":"#2e7d32")
 }:field)
 }));
 let balance=
 {id:"balance",td:
["I/O"
,...matrix.map((record,index)=>exposure(index,true)/imposure(index,true))
,0
].map((field,index,values)=>(
 {"#text":index?index>matrix.length
?(sum(values.slice(1,-1).filter(finite))/values.slice(1,-1).filter(finite).length).toFixed(2)
:field==Infinity?"∞":field>0?field.toFixed(1):"-":field
 }))
 };
 let model=
 {id:"model",td:
[document({svg:vectors.object["active_directory"]}),...hierarchy,complexity
].map(function(field,index)
{return !index?{"#text":field}:index>matrix.length
?{"#text":(field*100).toFixed(2)+"%"}
:{span:
[document.call(bar(field.map?.((outdegree,index,inference)=>
 outdegree===Infinity?inference[0]:outdegree)||[],true),{style:"overflow:visible;fill:"+(["stakeholder","hazard"].includes(source[index-1].source[0].name)?"#c62828":"#2e7d32")})
,document(
 {span:
 {"#text":(field[1]-field[0]).toFixed(1).toString().replace(/.*/,d=>
 ["0.0","Infinity"].includes(d)?"":d[0][0]==="-"?d.substring(1):d)
 ,style:"position:absolute;left:0;right:0;top:0;margin:auto;transform:translate(0,"+Math.max(...field)*45+"%);color:"+(field[1]-field[0]<0
?["hazard"].includes(source[index-1].source[0].name)?"#2e7d32":"#c62828"
:["hazard"].includes(source[index-1].source[0].name)?"#c62828":"#2e7d32")
 }
 })
],style:"position:relative;"
 };
})
 };
 return document({table:
 {class:"adjacency",tr:
 [header,index,...map,index,...degrees,ratio,...weights,balance,model]
 ,style:{"#text":css({".adjacency":
 {"border-spacing":"0"
 ,"text-align":"center","vertical-align":"middle"
 ,"& tr":
 {"&[id] svg":{height:"1em",fill:"currentColor"}
 ,"& td":{"&:first-of-type":{"text-align":"right"},"&:last-of-type":{"text-align":"left"}}
 ,"&#header>td":
 {height:margin*0.8+"em","vertical-align":"bottom"
 ,"&>span":
 {display:"inline-block","white-space":"nowrap",width:"1em"
 ,"transform-origin":"left",transform:"rotate(-90deg) translate(0,0.5em)"
 ,"&>img":{"vertical-align":"middle","border-radius":"50%",height:"1em",transform:"rotate(90deg)"}
 }
 }
 ,"&#model":
 {height:Math.max(...hierarchy.map(([exposure])=>exposure))+"em"
 ,"vertical-align":"top"
 }
 }
 }})}
 }});
 //[awesome["fas fa-cog"],...matrix.map((record,index)=>""/*(1-1/(1+Math.E**(exposure(index,true)*-1)))*/)].reduce((row,field,index)=>{index?bar(field,true).then(bar=>document({"td":{"#text":bar.outerHTML.replace(/#2e7d32/g,["provider","hazard"].includes(Object.values(source)[index-1].path.slice(-1))?"#c62828":"#2e7d32")+document({"span":{"#text":field.toFixed(1),"style":"position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;"}}).outerHTML,"style":"position:relative"}},row)):document({"td":{"#text":field}},row);return row},table.appendChild(window.document.createElement("tr")));
 function exposure(index,weight)
{return matrix.reduce((value,record)=>
 value+(weight?record[index]||0:(record[index]>0)),0);
};
 function imposure(index,weight)
{return matrix[index].reduce((value,field)=>
 value+(numeric(weight)?(field||0)*weight:weight?field||0:(field>0)),0);
};
};

 export async function catalogue(source)
{let homogenous=Object.values(source).every(string);
 let depth=Math.max(...Object.values(prune.call(source,({1:value},{length})=>
 compound(value)?undefined:length,1)));
 let span=Object.entries(source).flatMap(infer(function put([field,value],depth=0)
{let term=string(value);
 let src=term?value:value.icon;
 let img=src&&capture.call(document({img:{src}}),location+"/chart");
 let text={"#text":field,class:term?undefined:"depth-"+depth};
 let span=[img,text].sort(()=>homogenous?1:-1);
 let next=term?[]:Object.entries(extract.call(value,"icon",true)).flatMap(infer(put,depth+1));
 return [span,next].flat();
},0));
 return document({span:
 {span,class:"catalogue",style:{"#text":css({".catalogue":
 {display:"block","column-count":3,"text-align":"center","font-size":".75em"
 ,"&>span":{display:"block","&[class*=depth]":{"font-weight":700}}
 ,"& img":{"clip-path":"margin-box"}
 }})}
 }})
};

 export var chart=
 {img:
 {load({target})
{let {naturalHeight:height,naturalWidth:width}=target;
 let verticality=height-width,normal=verticality/(verticality>0?height:width);
 target[verticality>0?'width':'height']='15em';
 target.style['margin']=
 [(normal/4)*(verticality>0?-1:1)*(100+Math.abs(normal)*100)+'%',"0px"].sort(clip=>verticality>0?1:-1).join(" ");
}}
 };
