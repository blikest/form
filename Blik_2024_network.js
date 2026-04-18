 import {infer,tether,sum,extreme,search,merge,prune,record,remember,simple,swap,wait,numeric,drop,pass,note,lift,has,collect,compose,combine,whether,each,slip,differ,buffer,observe,ascending,defined,compound,array,string,clock,revert,rank,plural,when,debug,is} from "./Blik_2023_inference.js";
 import {extract,unfold,isolate} from "./Blik_2023_search.js";
 import {window,fetch,digest,resolve,path} from "./Blik_2023_interface.js";
 import {document,demarkup,namespaces,deselect,css,capture,destroy,ascend,form,fill,transform,annotate,canvas,image,metamarkup} from "./Blik_2023_fragment.js";
 import * as layout from "./Blik_2023_layout.js";
 import {color} from "./Blik_2023_layout.js";
 import * as d3 from './Bostock_2011_d3.js';
 import {select,selectAll} from './Bostock_2011_d3_select.js';
 import {forceSimulation as force3d,forceX,forceY,forceZ,forceLink,forceCenter,forceCollide,forceManyBody} from './Vasturiano_2016_force3d.js';
 import extend from "./Blik_2023_d4.js";
 import * as vectors from "./Blik_2024_svg.js";
 var browser=Boolean(globalThis.window);
 let location=new URL(import.meta.url).pathname.replace(/.*\//,"");

 export default compose
(drop(1),combine(sprawl,drop(1)),lift,combine(spread,drop(1)),lift,chart,simulate
,pass(whether(search(["dataset","actions"]),report,tether(capture,["",location,"module","actions","module"].join("/"))))
);

 var svg=
 {fold:false,call(fragment)
{if(!browser||fragment.datum().still)return;
 observe.call(d3.zoom().scaleExtent([0.1,100000]),{zoom({transform})
{extend.call(this,{fold:false,g:{fold:false,class:"graph",transform}});
}})(fragment);
},id:(node)=>deselect([node].flat()[0].name||"get"),class:"d3"
 ,"data-options":(nodes)=>JSON.stringify(prune.call(nodes,([field,value])=>isNaN(field)?value:undefined,1,0))
 ,title(node){return [node].flat()[0].name;}
 ,viewBox({monospace=10,spread="force",gap=0.2})
{let {up,down,force,radial}={[spread]:true},vertical=Boolean(up||down);
 let {breadth,length}=measure(arguments[0][0]);
 let [nodes,links]=forage(this);
 let density=links.size()/(nodes.size()*(nodes.size()-1)/2);
 let [width,height]=force
?Array(2).fill(scale(nodes.size()/Math.sqrt(density)||0))
:[breadth*(1+gap),(length||breadth)+5].map(size=>size*monospace).sort(size=>vertical?1:-1);
 let space=radial?[-width,-width,width*2,width*2]:[-width/2,-height/2,width,height];
 merge(arguments[0],{space});
 return space.join(" ");
},g:
 {update:true,class:"graph",transform({monospace,spread})
{let [width,height]=box(ascend.call(this)[0]);
 let translate={nonradial:[width/2,height/2]}[spread]||[0,0];
 return "translate("+translate+")";
},g:
[{update:true,class:"network",fill:"none",stroke:"#555","stroke-width":1.5,g:
 {class:"link"
 ,fold(node){return connect(node);}
 ,match:linkindex
 ,update(links){if(select(ascend.call(links)[0]).datum().spread==="force")links.each(link.each).call(drag);}
 ,call(links){links.remove();}
 }
 }
,{update:true,class:"cluster","stroke-linejoin":"round","stroke-width":1,g:
 {class:"node"
 ,fold(nodes){return unfold.call({nodes},childfold).slice(1);}
 ,match:nodeindex
 ,update(nodes){if(select(ascend.call(nodes)[0]).datum().spread==="force")nodes.each(locate).call(drag);}
 ,call(nodes){nodes.remove();}
 }
 }
]}
 };

 var node=
 {fold:false,match:nodeindex
 ,class:"node",id:nodeindex,filter:"url(#shadow)"
 ,update(nodes)
{let fragment=select(ascend.call(nodes)[0]);
 let {gradual}=fragment.datum();
 extend.call(nodes
,{fold:false,...extract.call(node,["transform"])
 ,...gradual&&
 {circle:{update:true,...extract.call(node.circle[0],["class","r"])}
 ,text:{fold:false,update:true,...extract.call(node.text,"font-size")}
 }
 });
},call(nodes){if(browser)drag(nodes);}
 ,fill:node=>paint(node)
 ,transform({x=0,y=0,source})
{let svg=ascend.call(this)[0];
 let {spread}=select(svg).datum();
 let {up,down,right,left,radial,force}={[spread]:true};
 if(!defined(x))
 note(transform(this));
 return force?"translate("+[x,y].map(x=>x.toPrecision(5).replace(/e\+\d+/,""))+")"
:radial?"rotate("+(x*180/Math.PI-90)+") translate("+y+",0)"
:"translate("+[x,y]+") rotate("+(right?0:down?90:up?-90:0)+")";
},title:{text:({name})=>name}
 ,circle:
[{name({name,source,nodes}){return source&&!nodes?source.name+"_"+name:null;}
 ,r(node)
{let {size:field,spread}=select(ascend.call(this)[0]).datum();
 return spread==="force"?scale(size(node,field)):5;
},fill:node=>paint(node)||"var(--text)"
 // ,title:{text({value,name}){return value?.progress?.concat("%")||this.remove();}}
 }
,{fold(node)
{return ["image","wiki"].includes(select(ascend.call(this)[0]).datum().labels)?[node]:[];
},class:"label"
 ,r(node){return this.previousSibling?.getAttribute("r")*0.9;}
 ,fill(node){pattern.call(this,node);return "url(#"+node.name?.replace(/ /g,"_")+")"}
 }
],text:
 {fold:infer(wrap,15),update:false,class:"label"
 ,fill()
{let {force}={[select(ascend.call(this)[0]).datum().spread]:true};
 return force?"black":undefined;
},stroke(){return {force:"black"}[select(ascend.call(this)[0]).datum().spread];}
 ,opacity(){return {force:0.5}[select(ascend.call(this)[0]).datum().spread];}
 ,style(){return select(ascend.call(this)[0]).datum().spread==="force"?undefined:"filter:url(#contour)";}
 ,"text-anchor":function()
{let {spread}=select(ascend.call(this)[0]).datum();
 let {force,left,up}={[spread]:true};
 let {nodes}=select(ascend.call(this,1)[0]).datum();
 return force?"middle":["start","end"][sum([Boolean(nodes?.length),left])%2];
},"stroke-width":function()
{let {force}={[select(ascend.call(this)[0]).datum().spread]:true};
 let size=this.parentNode.querySelector("circle").getAttribute("r");
 return size*(force?0.02:0.2)+"px";
},"font-size":function(text,index,{length})
{let {force,monospace}={[select(ascend.call(this)[0]).datum().spread]:true};
 let node=select(ascend.call(this,1)[0]).datum();
 let size=this.parentNode.querySelector("circle").getAttribute("r");
 return force?size/4:size*2;
},dx()
{let {spread}=select(ascend.call(this)[0]).datum();
 let {force,left,up}={[spread]:true};
 let {nodes}=select(ascend.call(this,1)[0]).datum();
 return !force?[6,-6][sum([Boolean(nodes?.length),left])%2]:null;
},dy(text,index,{length})
{let force=select(ascend.call(this)[0]).datum().spread==="force";
 return force?scale(index+1-(length)/2)+"em":".25em";
},transform()
{let radial=select(ascend.call(this)[0]).datum().spread==="radial";
 return radial?"rotate(180)":null;
},text(text){return text;}
 }
 };

 var link=
 {fold:false,match:linkindex
 ,update(links)
{let force=select(ascend.call(links)[0]).datum().spread==="force";
 let fields=force?[]:["transform"];
 extend.call(links,{fold:false,...extract.call(link,["path","line",fields].flat())});
},drop(links)
{extend.call(links,{fold:false,each(link)
{let detached=degree(link,-1).filter(node=>!node.degree);
 detached.forEach(infer("remove"));
}});
 return links;
},call(links){if(browser)drag(links)}
 ,each(link)
{degree(link);
 let fragment=ascend.call(this)[0];
 let {gradual}=select(fragment).datum();
 let unlocated=[link.source,link.target].filter(node=>
 ["x","y"].some(axis=>isNaN(node[axis])));
 if(!gradual||!unlocated.length)
 return;
 let parent=[node.parent].flat()[0];
 if(["x","y"].some(axis=>isNaN(parent?.[axis])))
 parent=demarkup(fragment,"viewBox").viewBox.split(" ").map((side,index,sides)=>
 Number(side)+(sides.splice(2,1)[0])/2).reduce((x,y)=>({x,y}));
 unlocated.forEach(node=>[parent,node].reduce(({x,y},node)=>Object.assign(node,{x,y})));
},id:linkindex,class:"link",opacity:0.5
 ,title:{text:(link)=>
[{R:"responsible",A:"accountable",C:"consulted",I:"informed"}[link.value]||
 link.value,...[link.source,link.target].map(({name})=>name)
].join("\n")}
 ,transform(link,index,links)
{let twins=selectAll(links).select(function(twin)
{return ["source","target"].every(key=>twin[key]===link[key])&&this;
}).data();
 let twinindex=twins.indexOf(link);
 return "translate(0,"+(scale(!link.value||isNaN(link.value)?1:link.value)/7/twins.length)*Math.ceil(twinindex/2)*(twinindex%2||-1)+")";
},line:
 {fold(link)
{let fragment=ascend.call(this)[0];
 let {spread,layered,direction,space}=select(fragment).datum();
 let {up,down,right,left,radial,force}={[spread]:true};
 let [vertical,horizontal]=[up||down,left||right];
 return !horizontal&&!vertical&&!radial&&!layered?[link]:[];
},update(line)
{extend.call(line,{fold:false,...extract.call(link.line,["x1","y1","x2","y2"])});
},stroke({value,source}){return paint(value&&isNaN(value)?value:source);}
 ,"stroke-width":({value})=>scale(!value||isNaN(value)?1:(value*(value<0?10:1)))/2
 ,x1:({source:{x}})=>x,y1:({source:{y}})=>y
 ,x2:({target:{x}})=>x,y2:({target:{y}})=>y
 }
 ,path:
[{fold(link)
{let fragment=ascend.call(this)[0];
 let {spread,layered,direction,space}=select(fragment).datum();
 let {up,down,right,left,radial,force}={[spread]:true};
 let [vertical,horizontal]=[up||down,left||right];
 return !horizontal&&!vertical&&!radial&&!layered?[]:[link];
},update(path){extend.call(path,{fold:false,...extract.call(link.path[0],["d"])});}
 ,stroke({value,source}){return paint(value&&isNaN(value)?value:source);}
 ,"stroke-width":({value})=>scale(!value||isNaN(value)?1:(value*(value<0?10:1)))/2
 ,d:line
 }
//,{update(path){extend.call(path,{fold:false,...extract.call(link.path[1],["d"])});}
//  ,class:"arrow"
//  ,d:buffer(function({source,target})
// {if(!this.previousSibling.getPointAtLength)
//  return null;
//  let curve=[source,source,this.previousSibling.getPointAtLength?.(scale(size(source)))||target];
//  return curve.map(({x,y},index)=>["M","S"," "][index]+[x,y]).join("");
//},swap(undefined))
//  ,"stroke-width"(){return this.previousSibling.getAttribute("stroke-width")/2}
//  ,"marker-end":function({source})
// {let [fragment]=ascend.call(this);
//  let marker=trace(source,[]).pop()?.replace(/[^a-zA-Z0-9]/g,"").replace(/^[0-9]+/,number=>
//  number.split("").map(number=>String.fromCharCode(65+number))).replace(/,/g,"")||"none";
//  if(!fragment.querySelector("marker#"+marker))
//  extend.call(fragment,{fold:false,defs:
//  {fold:false,marker:
//  {id:marker,orient:"auto",markerWidth:"2",refX:"0.1",refY:"1"
//  ,path:{d:"M0,0 V2 L2,1 Z",fill:paint(source)}
//  }
//  }});
//  return "url(#"+marker+")";
// }}
]};

 export var actions={imports:
 {["/"+location]:["","forage"]
 ,"/Blik_2023_inference.js":["","infer","compose","combine","buffer","each","when","array","has","differ","slip","collect","drop"]
 ,"/Blik_2023_search.js":["","unfold"]
 ,"/Bostock_2011_d3_select.js":["","select"]
 ,"/Blik_2023_d4.js":["extend"]
 }
 ,exports:{default:
 {"svg.d3":
 {async contextrestored()
{let options=JSON.parse(this.dataset.options);
 let module=await import(import.meta.url.replace(/\.js.*/,".js"));
 return infer("default",options.source,options,this)(module);
}}
 ,"g.link":
 {...observe({hover({target})
{target=target.closest(".link");
 target.style.removeProperty("filter");
 target.setAttribute("opacity",target.getAttribute("opacity")<1?1:0.5);
}//,mouseout({target}){target.dispatchEvent(new Event("mouseover",{bubbles:true}));}
 })
 }
 ,"g.node":
 {...observe({hover({target})
{compose
(combine(compose("svg","closest",forage),compose(select,"datum"))
,when(array,has(["x","y"]))
,combine("0",compose
(each(["1",compose
(combine
(infer()
,buffer(differ("source"),drop())
,buffer(differ("nodes"),drop())
,buffer(compose(differ("relations"),"keys",Array.from),drop())
),collect,"flat",collect,slip(Set),Reflect.construct
)
])
,(links,nodes)=>links.each(dim).filter(({source,target})=>[source,target].every(node=>nodes.has(node)))
,infer("each",infer("dispatchEvent",new Event("pointerover",{bubbles:true})))
,links=>new Set(links.data().flatMap(({source,target})=>[source,target]))
))
,(nodes,cluster)=>nodes.each(dim).filter(node=>cluster.has(node)).each(highlight)
)(target.closest(".node"));
}//,pointerout({target}){target.dispatchEvent(new Event("pointerover",{bubbles:true}));}
 ,click:interact
 })
 }
 }
 ,dim,highlight
 }};

 export function sprawl(resource,options={})
{// parse object as a nodes. 
 // {node:{node:[{node:"node",relations:["node"]},"node"]}} or [{name,relations}]
 if(typeof resource==="string")
 return compose(fetch,digest,infer(sprawl,Object.assign(options,{source:resource})))(resource);
 if(resource.nodeName)
 return Graph(resource);
 let {relations,spread,title,monospace=10,still,source,gradual,linear=true,depth,matrix}=options;
 if(resource.constructor.name==="Node")
 return resource;
 matrix=matrix?isolate.call(resource,[matrix].flat())
:search.call(resource,([field,records])=>
 array(records)&&records.some(record=>
 array(record)&&record.every(numeric)));
 if(Object.values(matrix).length)
 return compose.call
(resource,infer(({fields,records,direction},matrix)=>
 Object.values(Object.entries(matrix).reduce(infer(project,direction)
,sprawl({fields,records}).map(({nodes})=>
 unfold.call(note({nodes}),childfold).filter(({nodes})=>
 !nodes)).reduce((range,domain)=>({range,domain})))).flat(),matrix)
,pass(nodes=>merge(options
,{direction:Array.from(new Set(Array.from(nodes.reduce((direction,{source:[{name:source}],relations})=>
 Array.from(relations?.entries()||[]).reduce((direction,[{source:[{name:target}]}])=>
 direction.set(source,target),direction),new Map()).entries()).flat()))
 ,monospace
 }))
);
 let direct=false&&!Object.keys(search.call(resource,({1:value})=>
 !simple(value)&&!numeric(value))).length;
 if(direct)
 return Object.entries(Object.entries(search.call(resource,({1:value})=>
 numeric(value))).map(([path,weight])=>
 path.split("/").reverse().reduce((name,parent,index,path)=>(
 {[name]:{[path.splice(1).join("/")]:weight}}))).reduce((past,next)=>
 merge(past,next,0))).map(([name,relations])=>(
 {name,relations})).map((node,index,nodes)=>Object.assign(node
,{relations:new Map(Object.entries(node.relations).map(([field,weight])=>
 [nodes.find(({name})=>name===field),weight/10]).filter(([node])=>node))
 }));
 if(source&&linear&&Object.keys(resource).length>1)
 resource=record(resource,[source==="/get"?window.location.origin:source]);
 let {resource:{nodes}}=prune.call({resource},split,false,"value");
 prune.call(nodes,backlink,false,["source","value"]);
 if(!linear)
 nodes=unfold.call({nodes},childfold).slice(1).map(deduplicate);
 return note(nodes);
//  note(unfold.call(nodes[0],childfold));
//  if(depth)nodes.forEach(node=>node.depth===depth&&delete node.children);
//  nodes.forEach((node,index,{length})=>Object.assign(node
// ,{title:title&&node.data[title]||(string(node.data)?node.data:Object.keys(node.data).slice(0,2).map((field,index)=>index?"":field).join("..."))
//  }));
//  let [min,max]=extreme(nodes.flatMap(period).filter(Boolean).sort(ascending));
//  let time=d3.scaleLinear().domain([min-(max-min)/5,max+(max-min)/5]).range([0,(max-min)/14000000])
//  Object.assign(node,{matrix,spread,monospace,still,cluster,gradual,time});
//  return node;
};

 function split([name,value],path=[])
{// split entries into nodes. 
 let fields="value,name,nodes,depth".split(",");
 let node=compound(this)&&has.call(this||{},fields)&&Object.keys(this).length===fields.length;
 if(node)return value;
 let entry=path.at(-1)==="nodes";
 if(entry&&array(this))
 return rank((compound(value)?Object.entries(value):[[value]]).map(entry=>split.call(value,entry,path)));
 let nodes=compound(value)?[value].flat().filter(node=>
 !compound(node)||Object.keys(node).length):undefined;
 // search.prune collects array indices in path, which doubles the depth. 
 // first entries only serve to expose resource entries, which increments depth. 
 let depth=path.length/2-1;
 return {name:String(name),value,nodes,depth};
};

 function backlink([field,value],path)
{if(!path.length)return value;
 let {nodes,depth}={[field]:true};
 if(nodes&&array(value))
 value.forEach(entry=>merge(entry,{source:[this]},0));
 let terminal=depth&&!this.nodes?.length;
 if(terminal)
 unfold.call(this,"source").reverse().forEach((node,index)=>
 merge(node,{height:Math.max(node.height||0,value-index)}));
 return value;
};

 function deduplicate(node,index,cluster)
{return cluster.slice(index+1).filter(({name})=>name===node.name).flatMap(duplicate=>
 cluster.splice(cluster.indexOf(duplicate),1)).reduce((node,duplicate)=>
 merge(node,prune.call(duplicate,([field,value])=>["source","nodes"].includes(field)
?[value,["source","nodes"].find(name=>name!==field)].reduce((contingent,reverse)=>
 contingent.filter(contingent=>
 contingent[reverse].splice(contingent[reverse].indexOf(duplicate),1,node)&&
 !node[field]?.includes(contingent)))
:value,0,0),0)
,node);
};

 function spread(nodes,{spread="force",monospace=10,matrix,linear,gap=0.2}={})
{let {force,radial,up,down,left,right,collapse}={[spread]:true};
 if(matrix)
 nodes=nodes.filter(({occurrence})=>occurrence);
 if(force)
 return nodes;
//  nodes.reverse().reduce(({x,y},node)=>Object.assign(node,{x,y})
// ,[breadth,length].map(size=>size*monospace/2).reduce((x,y)=>({x,y})));
 let horizontal=left||right;
 let vertical=down||up;
 let inverse=up||left||radial;
 nodes=unfold.call({nodes},collapse?whether(({name})=>collapse.includes(name),swap([]),childfold):childfold).slice(1);
 let {breadth,length}=measure(nodes[0]);
 let terminal=5;
 nodes.map(node=>
[node
,unfold.call(node,node=>[node.source].flat().slice(0,1))
]).forEach(([node,sources])=>Object.assign(node,[
[-breadth*(1+gap)/2
,measure(node,0).breadth*(1+gap)/2
,sources.flatMap(offset).map(offset=>offset*(1+gap))
],
[radial?-indent(nodes[0]):-(length+terminal)/2
,sources.map(indent)
]].map(size=>sum(...size)*monospace).sort(size=>horizontal?-1:0).reduce((x,y)=>({x,y}))));
 if(inverse)
 nodes.forEach(node=>Object.assign(node,horizontal?{x:-node.x}:{y:-node.y}));
 return nodes;
};

 function offset(node)
{return [node.source].flat().flatMap(node=>node?.nodes||[]).flatMap((child,index,nodes)=>
 child===node?nodes.splice(index)&&[]:child).map(node=>measure(node,0).breadth);
};

 function indent(node)
{let [source]=[node.source].flat();
 return extreme([source?.nodes||node].flat().flatMap(({name})=>name?.length||0))[1];
};

 function measure(node,length=true)
{let terms=unfold.call({nodes:[node]},childfold).filter(node=>!node?.nodes?.length);
 let breadth=terms.length;
 let depth=numeric(length)?length:(node.name?.length||0)+
 extreme(terms.map(node=>sum(unfold.call(node,"source").map(({nodes,name},index)=>
 extreme((nodes?.length?nodes:[{name}]).map(({name})=>name?.length))[1]))))[1];
 return {breadth,length:depth};
};

 function chart(nodes,options={},fragment)
{merge(options,{spread:"force"},0);
 let {axis}=options;
 return compose.call
(is(window.SVGSVGElement)(fragment)?fragment:compose(document,spill,lift,crop(1))(
 {svg:
 {"xmlns:xlink":namespaces.xlink,preserveAspectRatio:"xMidYMid meet"
 ,class:"d3"
 ,"data-source":options.source
 ,style:{"#text":css({".d3":layout.media})}
 ,defs:{filter:
[vectors.effect.shadow.defs.filter
,vectors.effect.shadow_white.defs.filter
,prune.call(vectors.effect.contour,([field,value])=>(
 {"flood-color":"black"}[field]||value))
]}
 }
 })
,axis===3?compose(slip("./Blik_2025_extrude.js","default",nodes,options),resolve.bind(import.meta.url)):undefined
,{datum:Object.assign(nodes,options),...svg},tether(extend)
);
};

 function line(link,index,paths)
{let fragment=ascend.call(this)[0];
 let {spread,layered,direction,space}=select(fragment).datum();
 let {up,down,right,left,radial,force}={[spread]:true};
 let [vertical,horizontal]=[up||down,left||right];
 let [field]=Object.entries({vertical,horizontal,radial}).find(({1:value})=>value)||[];
 let line=d3["link"+field?.replace(/./,initial=>initial.toUpperCase())];
 if(line)
 return line()[radial?"angle":"x"](({x})=>x)[radial?"radius":"y"](({y})=>y)(link);
 let {source,target:{x,y}}=link;
 let {0:x0,2:width}=space;
 let curve=!horizontal&&!vertical&&!layered?""
://"C"+source.x+","+(source.y+y)/2+" "+x+","+(source.y+y)/2:
 compose.call(
 {distance:Math.sqrt((source.x-x)**2+(source.x-x)**2)
 ,middle:(y+source.y)/2
 ,side:(width/2+x0)<source.x?1:-1
 ,steer:Math.abs(source.x-width/2)
 ,feedback:direction.at(-2)===source.source[0].name
 }
,({steer,...curve})=>(
 {...curve,steer
 ,ascent:curve.middle-(y-source.y)/4
 ,descent:curve.middle+(y-source.y)/4
 ,scope:((width/2/steer)*Math.sqrt(steer**2/4))
 })
,({distance,middle,side,steer,scope,feedback,ascent,descent})=>
["C",feedback?[source.x,source.y-scope/3]:[source.x,ascent]
    ,feedback?" "+[source.x+scope*side,source.y-scope/3]:""
," ",feedback?[source.x+scope*side,middle]:[x,descent]
    ,feedback?" "+[source.x+scope*side,y+distance]:""
    ,feedback?" "+[x,y+scope/3]:""
].join("")
);
 let end=radial?Math.cos(x-Math.PI/2)*y+","+Math.sin(x-Math.PI/2)*y:[x,y];
 return "M"+[source.x,source.y]+curve+" "+end;
};

 function pattern(node)
{extend.call(ascend.call(this)[0]
,{fold:false,defs:{fold:false,pattern:
 {fold(){return select(this).selectAll("pattern").data().concat(node);}
 ,match:patternindex
 ,id:patternindex,name({value,name}){return value||name;}
 ,viewBox({centrality:size}){return [0,0,size,size];}
 ,width:1,height:1,x:0,y:0
 ,each({name,centrality,source:[{name:category}]},index,patterns)
{let {labels}=select(ascend.call(this)[0]).datum();
 let color=paint(arguments[0]);
 let diameter=scale(centrality);
 let src=labels!=="image"
?compose(fetch,"json",json=>json.items?.[0].link)("/google/search?scope=wiki&q="+name)
:name.startsWith("http")?name:name==="image"
?search.call(vectors,name.split("/"))?"/vector/"+name:("/icon/"+name+".png")
:("/icon/"+name.replace(/ /g,"_")+".png");
 compose(image,canvas,combine(infer(),compose("2d","getContext")),Math
,(canvas,context,{ceil})=>[canvas.width,canvas.height].reduce((x,y)=>
[canvas,x/y
,[[1,1],[1,ceil(y/2)],[ceil(x/2),1],[x,y]].every(([x,y])=>
 !context?.getImageData(x-1,y-1,x,y).data[3])?diameter*0.15:0
])
,([canvas,ratio,inset])=>(
 {image:
 {[ratio<1?"width":"height"]:diameter*(!inset||0.7)
 ,[ratio<1?"y":"x"]:diameter*(ratio<1?ratio-1:1-ratio)/2+inset
 ,[ratio<1?"x":"y"]:inset
 ,href:canvas.toDataURL("image/"+canvas.dataset?.source.slice(-3))
 }
 }),document.bind(this),spill())(src);
}}}
 });
};

 var drag=observe.call(d3.drag()
,{start(drag,node)
{["x","y"].forEach(dimension=>node["s"+dimension]=node[dimension]);
 this.dispatchEvent(new Event("mouseout"));
 //setTimeout(tick=>event.target.editing&&this.window.subject.reform({delete:{name:node.title}}),event.target.editing=1000);
},drag(drag,node)
{["x","y"].forEach(dimension=>node["f"+dimension]=drag[dimension]);
 this.style.zIndex=0;
 let fragment=this.closest("svg");
 let {spread}=select(fragment).datum();
 let {force}={[spread]:true};
 if(force)
 return;
 let parents=[node.parent||{}].flat();
 let siblings=parents.flatMap(({children})=>children||[]);
 let index=siblings.indexOf(node);
 let [sort,sibling]=[-1,1].map(sort=>
 [sort,siblings[index+sort]]).find(({1:sibling},next)=>
 sibling&&(node.y-sibling.y<0)!==Boolean(next))||[];
 if(!sibling)
 return;
 let source=["data","title"].map(key=>parent[key]).reduce(Reflect.get);
 node.edited=true;
 parent.children=siblings.sort(({title})=>title==node.title&&sort);
 Object.assign(source,Object.fromEntries(Object.entries(source).sort(([key])=>key==node.title&&sort)));
 ["x","y"].forEach(dimension=>[node["s"+dimension],sibling[dimension]]=[sibling[dimension],node["s"+dimension]]);
 let {1:links}=forage(fragment);
 links.filter(({source,target})=>[source,target].includes(node.datum())).remove();
 // [this,this[(sort<0?"previous":"next")+"Sibling"]].filter(Boolean).map(select).forEach(node=>
 // node.update(node)||
 // link.update(links.filter(({source,target})=>[source,target].includes(node.datum()))));
},end(drag,node)
{let fragment=this.closest("svg");
 let radius=Number(this.querySelector("circle").getAttribute("r"));
 let source=fragment.simulation.find(node.x,node.y,radius);
 //["x","y"].map(dimension=>node[dimension]=node["s"+dimension]);
 let {1:links}=forage(fragment);
 //node.update(select(this));
 //links.filter((link)=>[link.source,link.target].includes(node)).remove();
 fragment.simulation.alpha(fragment.simulation.alpha()+0.1);
 //link.update(links.filter((link)=>[link.source,link.target].includes(node)))
 this.dispatchEvent(new Event("mouseover"));
 ["fx","fy","sx","sy"].forEach(track=>delete node[track]);
 delete this.style.zIndex;
 let title=fragment.getAttribute("title");
 if(node.edited)
 delete node.edited&&
 Object.entries({join:title,put:{room:title,body:node}}).forEach(([emit,body])=>
 window.subject?.room.emit(emit,body));
 if(!source)return;
 let force=fragment.simulation.force("link");
 force.links(force.links().concat({source,target:node}));
 //simulation.restart();
}});

 function nodeindex(node){return node?[node.source?.[0].name||[],node.name].join("/"):this?.getAttribute("id");};
 function linkindex(link){return link?[link.source,link.target].map(nodeindex).join("_"+link.value+"_"):this.getAttribute("id");};
 function patternindex({name}){return name.replace(/[^\d\w]/g,"");};
 function size(node,field){return node[field]||Math.cbrt(node.value?.weight)||node.centrality||1;};
 function scale(value){return value};
 function period(node){return ["start","end"].map(field=>search.call(node.value,field));};
 function box(svg)
{return demarkup(svg,"viewBox").viewBox.split(" ").map((side,index,sides)=>
 sides[index+2]-side);
};
 var childfold=["nodes",node=>Array.from(node.relations?.keys()||[])];

 export function trace(node,path)
{console.log(node);return !node.source?.[0]
?[node.name,...path||[]]
:trace(node.source[0],path?[node.name,...path]:path);
};

 function paint(node,scale)
{if(string(node))
 return {R:color.red,A:color.yellow,C:color.green}[node]||color.indigo;
 let {progress}=node.value||{};
 return defined(progress)
?Number(progress)?color.health(Number(progress)/100):"#616161"
:node.color||color[node.source?.[0].name]||
 (scale||color.rainbow).call(color,node.height/(node.depth+node.height));
};

 function wrap(node,radius,{name})
{if(select(ascend.call(node)[0]).datum().labels==="image")
 return [];
 if(!name?.slice)
 return [];
 let {force}={[select(ascend.call(node)[0]).datum().spread]:true};
 return force?!name||Array(8).fill(0).map((max,index,{length})=>
 Math.floor(Math.acos(Math.abs(index-length/2)/(length/2))*2/Math.PI*radius)).sort((past,next)=>
 next-past).filter((slot,index,slots)=>
 !index||sum(slots.slice(0,index))<name.length).reduce((axis,slot,index)=>
 merge(axis,{[index%2]:[slot]},0)
,[[],[]]).map((axis,index)=>!index?axis.sort((past,next)=>past-next):axis).flat().map((slot,index,slots)=>
 name.slice(...Array(2).fill(sum(slots.slice(0,index))).map((field,index)=>
 field+index*slot)))
//   (String(name).match(/.+?(_|\/|$)/g)||[]).flatMap(split=>
//  split.match(new RegExp(".{1,"+radius+"}","g"))).reduce((wrap,split,index,{length})=>
// [wrap
// ,index&&(split.length+wrap.at(-1).length<radius)?wrap.pop()+split:split
// ].flat(),[])
:[name];
};

 function locate(node){return merge(node,transform(this));};

 function left(node)
{let {width,spread}=select(ascend.call(node)[0]).datum();
 let {x,source}=select(ascend.call(node,1)[0]).datum();
 let {radial}={[spread]:true};
 return radial?x>0||!source:(x<width/2?source:!source);
};

 export function forage(node)
{if(!node.ownerDocument)
 throw Error("can't "+forage.name+node);
 return [["cluster","node"],["network","link"]].map(([group,name],index)=>
 select(node).select("g."+group).selectAll("g."+name));
};

 function connect(node,sources=new Set())
{return [node].flat().filter(source=>source&&!sources.has(source)&&sources.add(source)).flatMap(source=>
 [source.nodes||[],Array.from(source.relations||[])].flat().flatMap(relation=>
 relation?[{source,target:relation[0]||relation,value:relation[1]},connect(relation[0]||relation,sources)].flat():[]));
};

 function neighbors({target})
{let node=select(target).datum();
 let {source,nodes}=node;
 let {1:links}=forage(target.closest("svg"));
 let cluster=[node,source,nodes].flat().filter(Boolean).map();
 return links.filter(({source,target})=>[source,target].every(node=>cluster.includes(node)));
};

 function degree(link,rate=1)
{if(!link)return [];
 let {source,target,value}=link;
 return [source,target].map((concept,vertex)=>
 ["imposure","exposure","outdegree","indegree"].map((score,index)=>
 concept[score]=index%2==vertex?(concept[score]||0)+(index<2&&value||1)*rate:concept[score]||0)&&
 Object.assign(concept
,{degree:concept.indegree+concept.outdegree
 ,centrality:concept.exposure+concept.imposure
 ,complexity:concept.exposure/concept.imposure
 }));
};

 export function serialize(concept)
{let children=Array.isArray(concept.children)?concept.children.map(subceive):[];
 Object.assign(concept.data[concept.title]||{},...children);
 return concept.data;
};

 function report(fragment)
{note(select(fragment).datum().source,fragment.parentNode?"tethered.":"ready.");
};

 function simulate(fragment)
{//let {requestAnimationFrame:frame}=fragment.ownerDocument.defaultView;
 //let throttle=frame?revert((tick,simulation)=>frame(time=>tick(simulation))):infer();
 let {spread,layered,direction}=select(fragment).datum();
 let {force}={[spread]:true};
 let layer=layered
?function layer(alpha)
{let {1:y,2:height}=demarkup(fragment,"viewBox").viewBox.split(" ");
 for(let node of fragment.simulation.nodes())
 node.y=(direction.length-0.5-(direction.indexOf(node.source[0]?.name)+1)%direction.length)/direction.length*height+Number(y);
}
:forceY(0).strength(0);
 return compose
(0.01,"alphaTarget"
,!layered&&infer("force","link",forceLink([]).strength(0))
,infer("force","charge",forceManyBody().strength(0))
,infer("force","collision",forceCollide().radius(0))
,infer("force","center",forceCenter(0,0).strength(0.25))
,infer("force","z",forceZ(0).strength(0))
,infer("force","x",forceX(0).strength(layered?0.01:0))
,infer("force","y",layer)
,{fragment,clock:0},Object.assign
,tether(observe,{tick:buffer(compose(populate,force&&charge),note.bind(1))})
,"fragment"
)(fragment.simulation=fragment.simulation||merge(force3d(),{fragment}));
};

 function populate(simulation)
{// reflect changes to simulation on chart. 
 let {fragment,clock=0}=simulation;
 if(!fragment.parentNode)
 return note({detached:simulation.stop().fragment}),simulation;
 let datum=select(fragment).datum();
 if(!browser&&datum.gradual)
 return simulation.alpha(0).stop();
 let [cluster,network]=forage(fragment);
 let nodes=unfold.call({nodes:datum},"nodes").slice(1);
 let links=connect(nodes);
 let complete=cluster.size()===nodes.length;
 if(datum.gradual)
 links=links.slice(0,network.size()+!clock)
,nodes=Array.from(new Set(links.flatMap(({source,target})=>[source,target])));
 extend.call(fragment
,{fold:false,g:
 {fold:false,class:"graph",g:
[{fold:false,class:"network",g:{...link,fold:links}}
,{fold:false,class:"cluster",g:{...node,fold:nodes}}
]}
 ,viewBox:svg.viewBox
 });
 let {force}={[datum.spread]:true};
 if(!force&&complete)
 return simulation.alpha(0).stop();
 return Object.assign(simulation,{clock:(clock+1)%2});
 //form.style.backgroundImage=nodes.size()==this.nodes()[0].value?"":"linear-gradient(to right,"+[...this.nodes(),...new Array(this.nodes()[0].value-this.nodes().length)].map(node=>!node?"var(--isle)":paint(node).replace(")",",0.3)")).join(",")+")";
};

 function charge(simulation)
{let [cluster,network]=forage(simulation.fragment);
 let [population,connections]=[cluster,network].map(selection=>selection.size());
 let [nodes,links]=[simulation.nodes(),simulation.force("link")?.links()];
 let change=[population,connections].some((size,index)=>size!==[nodes,links][index]?.length);
 if(!change||!simulation.alpha())return simulation;
 [nodes,links]=[cluster.data(),network.data()];
 let density=connections/(population*(population-1)/2)||0;
 let [width,height]=["width","height"].map(dimension=>scale(population**2/(density||1)));
 let [exposure,imposure,internal,balance]=nodes.reduce((metric,{exposure,imposure,complexity},internal)=>
[exposure,imposure,internal=complexity?(complexity!==Infinity):0,internal?complexity:0
].map((value,index)=>metric[index]+value)
,[0,0,0,0]);
 let complexity=balance/internal||0;
 let hierarchy=nodes.reduce((hierarchy,node,index,{length})=>
 hierarchy+(((node.imposure-imposure)/length)**2),0);
 let dominance=(12/(population**3-population))*hierarchy;
 let charge=-population/complexity||1;
 let tension=complexity**2*2;
 let spacing=scale(population/complexity||1);
 let {size:field}=select(simulation.fragment).datum();
 combine
(infer(),infer("alpha",1)//,infer("alphaDecay",0.3)
,infer("nodes",nodes,nodeindex)
,compose("charge","force",infer("strength",node=>scale(size(node,field))**2*-2))
,compose("collision","force",infer("radius",node=>scale(size(node,field))))
,compose("link","force"
,infer("links",links,linkindex)
,infer("strength",({value})=>(value*2||tension))
,infer("distance",({source,target})=>scale(size(source,field)*2+size(target,field)*2)||spacing)
//,infer("distance",({source:{centrality:source},target:{centrality:target}})=>scale(source+target)||spacing)
))(simulation);
 return simulation;
};

/* function conceptualise()
{return Object.entries(seed).reduce(function latch(concepts,[name,concept])
{path.push(name);
 let passive=!concept||["string","number"].includes(typeof concept)||["/awesome","/vectors","/d3"].includes(name);
 let relations=passive?[]:!concept[reference]?reference?[]:concept
:Array.isArray(concept[reference])||!Object.values(concept[reference]).some(isNaN)?concept[reference]:[concept[reference]];
 relations=Object.entries(relations).map(([key,relation],index)=>
 parseInt(key)==index&&!relation.length&&!reference
?Object.entries(relation).reduce(latch,concepts)
&&Object.keys(relation).map(relation=>[relation,1])
:latch(concepts,[key=parseInt(key)==index?typeof relation.name=="string"?relation.name:relation:key,relation])
&&[[key,typeof relation=="number"?relation:1]]).flat();
 console.log(concept,relations);
 relations=Object.fromEntries([...concepts[name]&&concepts[name].relations?concepts[name].relations.length?concepts[name].relations.map(relation=>[relation,1]):Object.entries(concepts[name].relations):[],...relations]);
 concepts[path.pop()]=Object.assign({data:{name,path:[...path]},parent:concepts[path.slice(-1)[0]]},concept.length||concept,concepts[name],{relations});
 if(!reference&&!path.length&&Object.keys(seed)[1])
 concepts[seed.name||""]={data:{relations:{...(concepts[seed.name||""]||{}).relations,[name]:1}}};
 return concepts;
},{})
};*/

 export function Graph(xml)
{let graph=xml.getElementsByTagName('graph')[0];
 let meta=xml.getElementsByTagName('meta')[0];
 let hasViz=Boolean(xml.getAttribute("xmlns:viz")??xml.getAttributeNS("xmlns","viz")??xml.getAttribute("viz"));
 let version=xml.getAttribute('version')||'1.0';
 let mode=graph.getAttribute('mode')||'static';
 let defaultEdgetype=graph.getAttribute('defaultedgetype')||'undirected';
 let attributes=Array.from(xml.getElementsByTagName('attribute')).filter(node=>node.nodeName!=="#text").map(node=>(
 {defaultValue:Array.from(node.childNodes).filter(node=>node.nodeName!=="#text")[0]?.textContent
 ,id:node.getAttribute('id')||node.getAttribute('for')
 ,type:node.getAttribute('type')||'string'
 ,title:node.getAttribute('title')||''
 }));
 let model=Object.fromEntries(attributes.map(model=>[model.title.toLowerCase(),model.defaultValue]));
 let nodes=Array.from(xml.getElementsByTagName('node')).filter(node=>node.nodeName!=="#text").map(n=>(
 {id:n.getAttribute('id'),label:n.getAttribute('label')||''
 ,attributes:[{},model
,Object.fromEntries(Array.from(n.getElementsByTagName('attvalue')).filter(node=>
 node.nodeName!=="#text").map(node=>
 Array.from(node.attributes).map(node=>node.value)).map(([field,value])=>
 [attributes.find(model=>model.id===field),value].reduce((model,value)=>
[model.title.toLowerCase()
,[model.type,value].reduce((type,value)=>type==="boolean"?value===true
:'integer/long/float/double'.split('/').includes(type)?+value:value)
])))].reduce(merge)
 ,viz:hasViz?
 {color:[getFirstElementByTagNS(n,'viz','color'),"rgba"].reduce((color,fields)=>
 color?fields.split("").map(field=>color.getAttribute(field)).filter(Boolean).reduce((color,hue,index,{length})=>
 color+(!index?length>3?"a(":"(":",")+hue,"rgb")+")":undefined)
 ,position:[getFirstElementByTagNS(n,'viz','position'),"xyz"].reduce((position,fields)=>
 position?Object.fromEntries(fields.split("").map(p=>[p,+position.getAttribute(p)])):undefined)
 ,size:[getFirstElementByTagNS(n,'viz','size')?.getAttribute('value')].map(size=>size&&Number(size)).shift()
 ,shape:getFirstElementByTagNS(n,'viz','shape')?.getAttribute('value')
 }:{}
 })).map(({id,label,viz,attributes})=>({id,name:label,...viz,value:attributes}));
 let links=Array.from(xml.getElementsByTagName('edge')).filter(node=>node.nodeName!=="#text").map(e=>(
 {type:defaultEdgetype||"undirected",label:'',weight:1.0
 ,...Object.fromEntries(Array.from(e.attributes).map(node=>[node.name,node.value]).map(([field,value])=>
 [field,field==="weight"?Number(value):value]))
 ,viz:hasViz?
 {shape:getFirstElementByTagNS(e,'viz','shape')?.getAttribute('value')
 ,thickness:Number(getFirstElementByTagNS(e,'viz','thickness')?.getAttribute('value'))
 ,color:[getFirstElementByTagNS(e,'viz','color'),"rgba"].reduce((color,fields)=>color?fields.split("").map(field=>
 color.getAttribute(field)).filter(Boolean).reduce((color,hue,index,{length})=>
 color+(!index?length>3?"a(":"(":",")+hue,"rgb")+")":undefined)
 }:{}
 }));
 links.forEach(({source,target,weight})=>[source,target].map(name=>
 nodes.find(({id})=>id===name)).forEach((node,index,nodes)=>merge(node
,{[index?"source":weight?"relations":"nodes"]
 :new (!index&&weight?Map:Set)(!index&&weight?[[nodes[(index+1)%2],weight]]:[nodes[(index+1)%2]])
 },0)));
 return nodes.map(node=>merge(node,Object.fromEntries(["nodes","source"].map(field=>
 [field,node[field]?Array.from(node[field]):undefined])),1));
 //return {nodes,edges:links,version: version,mode: mode,defaultEdgeType: defaultEdgetype
 //,meta:meta&&{lastmodifieddate:meta.getAttribute('lastmodifieddate'),...Object.fromEntries(Array.from(meta.childNodes).filter(node=>node.nodeName!=="#text").map(child=>[child.tagName.toLowerCase(), child.textContent]))}
 // ,model: attributes
 // };
 function getFirstElementByTagNS(node, ns, tag)
{return node.getElementsByTagName(ns+':'+tag)[0]||
 node.getElementsByTagNameNS(ns,tag)[0]||
 node.getElementsByTagName(tag)[0];
};
};

 function project({domain,range},direction,[name,records])
{records.forEach((vector,record)=>vector.forEach((value,field)=>
{if(!value)return;
 let [source,target]=[domain[record],range[field]].map(node=>
 merge(node,{occurrence:new Set([name])},0)).sort((source,target)=>
 ["i","lastI"].map(i=>
 sum([source,target].map(({source:[{name}]},target)=>
 direction[i+"ndexOf"](name)*(!target||-1)))).find((sum,index,sums)=>
 Math.min(...[sum,sums[(index+1)%2]].map(Math.abs))===Math.abs(sum)));
 merge(source,{adjacency:{[target.name]:new Set([name])}},0);
 merge(source,{relations:new Map([
[target,isNaN(value)
?[source.relations?.get(target)||[],value].flat()
:sum(source.relations?.get(target),value)/source.adjacency[target.name].size
]])},0);
}));
 return {domain,range};
};

//  function descend(value,{relations,title,routed})
// {// split data structure into node hierarchy. cyclical references 
//  if(!value)return [];
//  if(array(value))return value;
//  if(string(value))return {[value]:undefined};
//  if(value[relations])return value[relations];
//  if(relations)return [];
//  let flatten=array(value);
//  let children=Object.entries(value);
//  return children.flatMap(([field,value],index,{length})=>
//  flatten||(length==1)
// ?!value||Object.keys(value).length>1
// ?descend(value,{relations,title,routed})
//  // routed records refer to terminal objects, which shouldn't be strings. 
// :(routed&&Object.values(value).every(value=>string(value)||array(value)))
// ?[]:value
// :{[field]:value})
// };

//  function relate(node)
// {if(array(node))return node;
//  [node,...node.matrix].reduce((node,[path,records])=>
//  records.reduce((node,vectors,record)=>vectors.reduce((node,vector,field)=>
// {if(!vector||!node)return;
//  let [domain,range]=[0,1].map(index=>node.children[index].leaves());
//  let [source,target]=array(path)?
// [[node,...path].reduce(({children},field)=>children.find(({title})=>title==field))
// ,domain[field]
// ]:[domain,range].map((nodes,index)=>nodes[[field,record][index]]);
//  // clear child node representing these relation records. 
//  let [referral]=Object.entries(source.data[source.title]||{}).find(({1:value})=>value==records[0])||[];
//  if(source.children?.find(({title})=>title==referral)||!source.children?.length)
//  delete source.children;
//  let domains=["stakeholder"];
//  let ranges=["service","provider"];
//  [source,target]=[source,target].sort((source,target)=>
//  // parent title indicates the direction of the relationship. 
//  [source,target].map(({parent:{title}})=>title).reduce((independent,title)=>
//  [ranges,domains][Number(independent)].includes(title),false)-1);
//  [source,target].forEach(node=>merge(node,{occurence:new Set([path])},0));
//  merge(source,{adjacency:{[target.title]:new Set([path])}},0);
//  let relation=source.relations?.get(target);
//  relation=isNaN(vector)?[...relation||[],...[vector].flat()]:((relation||0)+vector)/source.adjacency[target.title].size;
//  merge(source,{relations:new Map([[target,relation]])},0);
//  return node;
// },node),node));
//  return node;
// };

 function dim()
{let mode=this.style.filter?"remove":"set";
 this.style[mode+"Property"]("filter","brightness(0.2)");
};

 function highlight(node)
{this.style.removeProperty("filter");
 let filter="url(#shadow"+(this.getAttribute("filter")==="url(#shadow)"?"_white)":")");
 extend.call(this,{fold:false,filter});
};

 function interact({target})
{target=target.closest(".node");
 if(target.editing)
 return;
 let composer=target.closest("body").querySelector("#composer");
 let node=select(target).datum();
 let source=compose(tether(unfold,"source"),rank,each("name"),collect,"reverse")(node);
 return form.call(composer
,{get:annotate({source:"",gradual:true},{source:""})})
,fill.call(composer,{source:source.length>1?source.slice(1).join("/"):"..",gradual:true})
,composer.dispatchEvent(new Event("submit"));
 //if(!node.parent)return retreat();
 //let simulation=target.closest("svg").simulation.force("link");
 //let linked=simulation.links().length-
 //note(simulation.links(simulation.links().filter(link=>
 //!node.descendants().includes(link.source)||
 //!fuse(link,-1))).links()).length
 //if(linked)return;
 //let links=node.descendants().slice(1).map(target=>(
 //{source:(target[0]||target).parent
 //,target:target[0]||target
 //,value:target[1]||1
 //}));
 //simulation.links(simulation.links().concat(links));
 edit(target);
};

 function update(node,body,root)
{let presence=[node.parent.data[node.parent.title],node.data];
 if(!body)return presence.forEach(place=>place[node.title]=undefined);
 let related=root.descendants().filter(({relations})=>relations);
 let domain=root.children[0];
 let relations=related.map(({relations})=>relations.filter(({target})=>target==node))
 relations=relations.flat().reduce((relations,{source:{title},value})=>Object.assign(relations
,{[title]:!relations[title]?value
:(Array.isArray(relations[title])?relations[title]:[relations[title]]).concat(value)}),{});
 node[domain.title]=domain.leaves().map(({title})=>relations[title]);
 Object.entries(body).forEach(function([key,value])
{if(key==node.title)
 return value?node.data[body.name][value]={roles:[],progress:0}:null;
 note(key,value)
 if(key!="name"||node.data[node.title][key])
 return (value||confirm("delete "+key+"?"))&&
 (node.data[body.name][key]=!value?undefined:
 Array.isArray(node.data[node.title][key])?value.split(","):value);
 if(value==node.title)return;
 value={[value]:node.data[node.title],[node.title]:undefined};
 presence.forEach(data=>Object.assign(data,value));
});
 note(node.data)
};

 export var tests=
 {sprawl:compose.call
({a:{b:"c"}}
,{name:"a",height:1,depth:0,nodes:
[{name:"b",depth:1,height:0}
]},(context,term)=>(
 {context:[context]
 ,terms:[[merge(term,{value:context.a,nodes:Object.assign({},[{source:[term],value:context.a.b}])})]]
 ,condition:"deepEqual"
 })
)};
