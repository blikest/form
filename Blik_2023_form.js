 import {note,crop,swap,is,are,either,functor,buffer,provide,compound,collect,same,pass,stash,compose,each,infer,tether,combine,string,whether,drop,slip,exit,numeric,match,when,has,basic,ascend,heritage,observe} from "./Blik_2023_inference.js";
 import {document,hypertext,dispose,throttle,capture,defer,delegate,form,progress,insert,namespaces,css,fill,deselect,expand,spell,syndicate,article,demarkup,media,stylerules} from "./Blik_2023_fragment.js";
 import {serialize,proceduralize,parse,mime,calendar} from "./Blik_2023_meta.js";
 import * as layout from "./Blik_2023_layout.js";
 import {fontface,animation} from "./Blik_2023_layout.js";
 import {merge,search,prune,extract,encrypt,route,record} from "./Blik_2023_search.js";
 import {access,resolve,locate,window,sourcemap,fetch,digest,cookie,cookies,script,query,path,stage} from "./Blik_2023_interface.js";
 import routes from "./Blik_2023_form.js";
 import network from "./Blik_2024_network.js";
 import editor from "./Blik_2024_script.js";
 import extend from "./Blik_2023_d4.js";
 import wikipedia from "./Blik_2024_wikipedia.js";
 import * as svg from "./Blik_2024_svg.js";
 import local,{persistence,encryption,publish,published,classify,classified,permit} from "./Blik_2024_static.js";
 export {encryption,classify,classified,published,permit};
 var address=new URL(import.meta.url).pathname;
 export const file=address.replace(/.*\//,"");
 await publish("./Blik_2024_comments.json",new RegExp(".*\\/author.*[^\\/]$"));
 var {default:fonts}=await resolve("./Blik_2025_fonts.json");
 export var syndication=
 {rss2json:{key:undefined}
 ,google:{api:undefined,search}
 ,elsevier:{api:undefined}
 ,mapbox:undefined
 };

 export default
 {...local
 ,svg(){return svg;}
 // ,fonts:compose.call
// (fonts.truetype,Object.entries,infer("map",([name,variants])=>
// [name,compose(Object.entries,infer("map",([variant,truetype])=>
// [variant||"regular"
// ,{src:"url(data:font/truetype;charset=utf-8;base64,"+truetype+")"
//  ,"font-family":[name,variant].filter(Boolean).join("-")
//  ,"font-weight":"normal","font-style":"normal"
//  }
// ]),Object.fromEntries)(variants.length?{"":variants}:variants)
// ]),Object.fromEntries,["truetype"],record,fonts,merge
 ,author:persistence("Blik_2024_author.json")
 ,document:compose(crop(1),infer(record,["svg"]),document)
 ,media:compose(crop(1),"toString",media,collect,document)
 ,interface:async function(request)
{let queries=query(request.url);
 let fragment=numeric(this.put)?"fragment/feed":basic(this)?"network":"fragment/media";
 let {controls,...fields}={source:"",fragment,...queries};
 let form=compose(composer,document)(fields);
 toggle.call(form,"get");
 let body=
 {span:form,style:compose
({"#frame":layout.frame},layout.theme,layout.goo,layout.link
,collect,infer("reduce",merge)
)(extract.call(layout,["body","a","blockquote","table"]))
 };
 let {averia,oswald,ranger}=fontface;
 let style=css(
 {"@font-face":[averia,oswald,ranger]
 ,"@keyframes wave":{"0%":{height:0,transform:"translate(0,-100%)",opacity:0},"50%":{opacity:0.25},"100%":{transform:"translate(0,100%)",opacity:0}}
 ,...animation.dotdot
 });
 let url=request.url.replace(/\/($|\?.*)/g,"");
 let title=url.split("/").reverse().find(Boolean)||"JSInterface";
 fragment=compose.call(body,title,"/svg/object/node/document",[],style,hypertext,document);
 merge(fields
 // root needs explicit /get method to reach json representation. 
,{source:path(window.origin+(this===routes?"/get":request.url))
 ,resource:this!==routes&&compose(stage,digest)(this.get?.(...arguments)||this
,{url,headers:request.headers})
 },1);
 await buffer(compose(tether(submission.get),throttle))(form,fields);
 if(String(controls)==="false")
 form.remove();
 return fragment;
},network:compose
(combine(swap(null),crop(1),compose(drop(1),query)),tether(network),throttle,{style:"background:#222222"},tether(document)
),relay()
{let relay=
 {imports:
 {"./Blik_2023_inference.js":["","note","each","infer","buffer","provide","collect","compose","wait","has","clock"]
 ,"./Blik_2023_interface.js":["","path","query","locate","resolve"]
 ,"./Blik_2023_fragment.js":["","demarkup","document","insert","fill","image","canvas","message as entry"]
 ,"./Blik_2023_search.js":["","record"]
 }
 ,exports:
 {default: 
 {check(){this.send(JSON.stringify({action:"check"}));}
 ,signal({author},window)
{let form=window.document.querySelector("#composer");
 let fields=Array.from(form.querySelectorAll("span[role=textbox]"));
 let input=fields.find(input=>demarkup(input,"id").id==="message");
 let label=input.closest("label");
 let list=label.querySelector("ul")||label.appendChild(document({ul:{}}));
 let node=list.querySelector("span#signal");
 let entry=document({span:{id:"signal","#text":author.name+" is typing..."}});
 list[node?"replaceChild":"appendChild"](entry,node);
 compose(wait(3000),node=>node.parentNode&&node.remove())(entry);
},async message({message,put,author:{name,icon}={name:"system",icon:"/svg/object/cog/document"}},window)
{let form=window.document.querySelector("#composer");
 let span=document({span:await entry({icon:icon||"/svg/animal/deer/document",name:name||"anonymous",put,message})});
 if(form.querySelector("#message"))
 document.call(form,{span:{id:"message",span:{class:"messages",role:"list",span}}});
 if(name==="system")
 compose(wait(10000),{style:"transition:all 1s;opacity:0;"},Object.assign,wait(1000),"remove")(li);
},broadcast({message,room,author})
{let {href}=window.location;
 compose({source:room,...query(href)},transform,infer(insert,"under",window.document.querySelector("[actions='"+room+"']")))(message);
},history({messages},window)
{collect(each.call(provide(messages),async event=>entry(event,window)));
},save({author,room,updates})
{if(author==window.room.labels.message)
 return window.Tone.Transport.start();
 let {state}=this.room.content.viewState;
 import("./haverbeke_2020_codemirror.js").then(({ChangeSet,receiveUpdates})=>
 receiveUpdates(state,updates.map(({changes})=>
 Array.isArray(changes)
?ChangeSet.fromJSON(changes)
:changes.toJSON()).map((changes,index)=>
 Object.assign(updates[index],{changes})))).then(updates=>
 this.room.content.update([updates]));
}}
 ,transform
 }
 };
 return compose.call(relay,serialize,["body"],record,{type:mime("js")},Object.assign);
},manifest()
{return {name:"JS Interface",short_name:"interface",theme_color:"#ffcbe4",background_color:"#fa99ca"
 ,display:"standalone",scope:"/",start_url:"https://jsinterface.org/",description:"public js interface"
 ,orientation:"any",icons:[{src:"/svg/object/node/document",sizes:"1024x1024"}]
 };
},async rss(request)
{when(has(["pub","put"]))(this);
 let queries=query(request.url);
 let item=await Object.keys(this.pub).reduce(record(async item=>
{let description=item;
 let pubDate=await compose(access,"birthtime","toString")(item);
 let content=await compose(fetch,"text",queries.augment?media
:infer("replace",/[<>]/g,match=>"&"+{"<":"l",">":"g"}[match]+"t;"))(item);
 return prune.call({description,pubDate,content}
,([field,value])=>({"#text":value}),0,1);
}),[]);
 //let xml=await import("./dylang_2017_xml.js").then(module=>module.default);
 let channel=prune.call({title:"",description:""}//link:request.url}
,([field,value])=>({"#text":value}),0,1);
 let {outerHTML:body}=document({rss:{version:"2.0",channel:{...channel,item}}});
//,{declaration:true,indent:" "})
 return {status:200,type:"rss+xml",body:'<?xml version="1.0" encoding="UTF-8" ?>'+body};
},"robots.txt":function(){return "User-agent: *\nDisallow: "}
 ,rss2json:request=>compose(fetch,"json",["body"],record)("https://api.rss2json.com/v1/api.json?"+new URLSearchParams(
 {rss_url:string(request)?request:query(request.url).url
 ,api_key:syndication.rss2json.key
 }))
 ,wordpress(request)
{return compose
(resolve,request.url.split("/").slice(2).join("/"),"site"
,{number:15},"postsList",request.url.split("/").slice(2),record,note
)("./wordpress_2019_wpcom.js","WPCOM");
},google:
 {files(request)
{return compose(fetch,"json",["body"],record)("https://www.googleapis.com/drive/v3/files/"+"?alt=media&key="+syndication.google.api);
},search(request)
{let {q,type="image"}=query(request.url);
 return compose(fetch,"json",["body"],record)(
["https://www.googleapis.com/customsearch/v1?"+new URLSearchParams(
 {q,searchType:type,key:syndication.google.api
 ,cx:syndication.google.search
 })
].join(""));
},map(request)
{let options=query(request.url);
 merge(options,{zoom:1,size:"600x500",maptype:"satellite",key:syndication.google.api},0);
 return compose(fetch)("https://maps.googleapis.com/maps/api/staticmap?"+new URLSearchParams(options));
}}
 ,facebook(request)
{return compose(revert((resolve,reject,{source},fields)=>
 FB.api("/"+source,"GET",{fields},resolve)),note
,({object_id:id,message,name,link})=>id?compose
(revert((resolve,reject,id,fields)=>
 FB.api("/"+id,"GET",{fields},resolve)),note
,responseobject=>responseobject.embed_html+" \n"+message
)(id,'id,title,format,source,embed_html')
:[response.message,name&&link?name.replace(/ /g,"_")+"@"+link:""].join())
(query(request.url)
,'id,name,from,created_time,message,type,timeline_visibility,link,object_id'
);
},https:({url})=>compose(fetch,"json")("https:/"+url)
 ,http:({url})=>compose(fetch,"json")("http:/"+url)
 ,medium:request=>compose(fetch,"text",note,slip(new DOMParser()),"text/xml","parseFromString","item","querySelectorAll")("https://medium.com/feed/"+new URL(request.url).pathname.split("/").slice(2).join("/"))
 ,wikipedia
 ,mapbox(request){return infer("mapbox",request,syndication.mapbox)(resolve("./Blik_2024_map.js","proxy"));}
 ,overpass()
{return fetch('https://www.overpass-api.de/api/interpreter?'+new URLSearchParams({data:'[out:json];rel[admin_level=2]'/*'convert item ::=::,::geom=geom(),_osm_type=type();'*/+';out geom;'}));
},elsevier(request)
{if(!syndication.elsevier.token)
 return compose(note,fetch,note,"text",note)("https://api.elsevier.com/authenticate?platform=SCOPUS",{headers:
 {"X-ELS-APIKey":syndication.elsevier.api
 }})
 let address="https://api.elsevier.com/content/search/scidir";
 let options=query(request.url);
 let field="dc:title,dc:creator,prism:publicationName,prism:coverDate,dc:description,prism:doi";
 merge(options,{field,count:25,view:"COMPLETE"},0);
 return compose(fetch,note,"text",note)(note(address+"?"+new URLSearchParams(options)),{headers:
 {"X-ELS-APIKey":syndication.elsevier.api
 ,Accept:"application/json"
 }})
},".well-known":{appspecific:{"com.chrome.devtools.json":function()
{return {"workspace":{"root":process.env.PWD,"uuid":"53b029bb-c989-4dca-969b-835fecec3717"}};
}}}
 ,worker(){return {};}
 ,calendar()
{return compose("toString",JSON.parse,calendar,["body"],record,{type:"text/calendar"},merge)(this);
},actions()
{return {imports:{"/Blik_2023_inference.js":["","compose","wait"]}
 ,exports:
 {default:
 {"#Interface":
 {async mousedown({target})
{let circle=this.querySelector("circle");
 if(target!==circle)
 return;
 let icon=this.querySelector("g").lastChild;
 circle.style.transition="0s";
 circle.style.transform="scale(1)";
 icon.style.transform="scale(1)";
 let pulse=circle.cloneNode(true);
 pulse.style.opacity=0.1;
 pulse.style.pointerEvents="none";
 pulse.style.transition="1.5s ease-out";
 circle.insertAdjacentElement("afterEnd",pulse);
 await wait(100)();
 icon.style.transform="scale(1.1)";
 circle.style.transition="0.1s";
 circle.style.removeProperty("transform");
 pulse.style.transform="scale(16)";
 pulse.style.opacity=0;
 compose(wait(3000),"remove")(pulse);
 //await wait(5000)();
 //this.dispatchEvent(new Event("mousedown",{bubbles:true}))
}}
 }
}};
}};

 export function composer(fields)
{if(this)
 return {imports:
 {"/Blik_2023_interface.js":["","path","resolve","locate","digest","cookie","cookies","query"]
 ,"/Blik_2023_inference.js":";note;expect;compose;combine;pass;stash;trace;drop;crop;slip;infer;tether;whether;wait;observe;buffer;swap;when;array;has;each;differ;provide;collect;is;match;basic;defined;functor".split(";")
 ,"/Blik_2023_fragment.js":";* as fragment;document;form;progress;image;canvas;demarkup;insert;navigate;metamarkup;detransform;stretch;vectorspace;error;drillresize;deselect;namespaces;keyboard;spell;expand;parse;semiotics;consume;syndicate;article;destroy;reference;fill;qualify;cursor;capture;css".split(";")
 ,"/Blik_2023_layout.js":["* as layout"]
 ,"/Blik_2023_meta.js":["","domain"]
 ,"/Blik_2023_search.js":["","merge","unfold","route","record","search","prune","extract"]
 ,"/Blik_2024_svg.js":"* as svg"
 }
 ,exports:
 {default:
 {"[role=form]":
 {submit(event)
{event?.preventDefault();
 let form=this;
 let {method}=demarkup(form,"method");
 let fields=fill.call(form,method);
 if(fields.source)
 fill.call(form,{[method]:{source:""}});
 return submission[method].call(form,fields);
},...observe({draw({isTrusted:click}){this.drag=click;}})
 ,mousemove(event)
{if(this.drag)
 console.log(this.margin);
}}
 ,"span[name]":
 {focusin({isTrusted:focus,target})
{if(target.nodeName==="#text")
 target=target.parentNode;
 if(target.role!=="input")
 return;
 let [form,label]=["[role=form]","[title]"].map(tag=>target.closest(tag));
 form.classList.toggle("focused");
 let {name,type}=demarkup(target,["name","text"]);
 let value=target.textContent;
 let {method}=demarkup(form,"method");
 if(!focus&&method==="erase")
 toggle.call(form,"get");
 if(method==="get"&&name!=="source"&&!value)
 toggle.call(form,"erase");
 let singular=Array.from(form.querySelectorAll("span[role=textbox]")).filter(input=>input.type=="text");
 if(singular.length>1)
 form.style.setProperty("--scroll","-"+form.scrollLeft);
 if(type=="text")
 cursor(target);
 if(label)
 label.setAttribute("focused",label.getAttribute("focused")!=="true");
},focusout({target}){return target.dispatchEvent(new Event("focusin",{bubbles:true}));}
 ,keydown(event)
{let {target,keyCode,ctrlKey}=event;
 let {enter,escape,updown,leftright}=keyboard(keyCode);
 let list=this.closest("[title]").querySelector("ul");
 let selection=Array.from(list?.querySelectorAll("li.hover")||[]);
 let message=target.id==="message";
 if(enter&&(!message||ctrlKey))
 return event.preventDefault(),selection.pop()?.click()||this.dispatchEvent(new Event("submit",{bubbles:true}));
 if(escape)
 return target.dispatchEvent(new Event("blur",{bubbles:true}));
 if(!list||message)return;
 if(updown||leftright)
 return [Array.from(list.querySelectorAll("li")),![38,39].includes(keyCode)||-1].reduce((list,step)=>compose
(next=>selection.at(-1)?.contains(next)?[next]:[selection,unfold.call(next,({parentNode:node})=>node.closest("li"))]
,"flat",infer("forEach",selection=>selection.classList.toggle('hover'))
)(list.at((list.indexOf(selection.at(-1))+step)%list.length)));
},input({target})
{let form=target.closest("[role=form]");
 let value=target.textContent;
 let {name}=demarkup(target,"name");
 if(name==="message"&&value)
 form.dispatchEvent(new MessageEvent("message",{data:{action:"signal"},bubbles:true}));
 let list=target.parentNode.querySelectorAll("li");
 if(name!=="message")
 Array.from(list).map(li=>
[li,value&&!unfold.call(li,li=>li.parentNode.closest("li")).map(li=>
 li.firstChild?.nodeValue||"").join("/").includes(value)?"setProperty":"removeProperty"
]).forEach(([li,term])=>li.style[term]("display","none"));
 let {message,code}=fill.call(form);
 let method=
 {put:!code&&"send"
 ,get:name!=="source"&&!value&&"erase"
 ,erase:value&&"get"
 ,send:code?"put":message?.length<2?"send":undefined
 }[form.getAttribute("method")];
 if(method)
 toggle.call(form,method);
},change({target})
{let {method}=demarkup(this.closest("[role=form]"),"method");
 if(target.type!=="text"&&method==="get")
 return target.form.dispatchEvent(new target.ownerDocument.defaultView.Event("submit",{bubbles:true}));
}}
 ,"[role=checkbox]":
 {click({target})
{document.call(target,{"aria-checked":target.getAttribute("aria-checked")==="false"});
},keydown({keyCode,target})
{let {space}=keyboard(keyCode);
 if(!space)return;
 document.call(target,{"aria-checked":target.getAttribute("aria-checked")==="false"});
}}
 ,li:
 {click({target})
{if(target.nodeName.toLowerCase()!=="li")
 return;
 let label=this.closest("[title]");
 if(!label.getAttribute("for")==="message")
 return;
 let input=label.querySelector("span[role=menu]");
 input.textContent=[target.closest("li")].reduce(function prepend(path,item)
{let parent=item.parentNode.closest("li");
 path.unshift(item.childNodes[0].nodeValue);
 return parent?prepend(path,parent):path;
},[]).join("/");
 input.dispatchEvent(new Event("blur",{bubbles:true})); 
 input.closest("[role=form]").dispatchEvent(new Event("submit",{bubbles:true}));
}}
 ,"#toggle":
 {async click({isTrusted:genuine}={})
{let form=this.closest("[role=form]");
 let method=form.getAttribute("method");
 let {message}=fill.call(form,method);
 if({erase:true,send:message,put:true}[method])
 return form.dispatchEvent(new Event("submit",{bubbles:true}));
 toggle.call(form,{get:"send",send:"get"}[method]);
}}
 ,"#extend":
 {keydown(event)
{event.stopPropagation();
 let {target,keyCode,ctrlKey}=event;
 let {enter}=keyboard(keyCode);
 if(!enter||!ctrlKey)return;
 event.preventDefault();
 let value=target.textContent;
 if(/^\.+$/.test(value))
 return this.dispatchEvent(new Event("submit",{bubbles:true}));
 let form=this.closest("[role=form]");
 let method=form.getAttribute("method");
 document.call(form,fragment.form({[method]:{[value]:""}}));
 form.appendChild(this);
 form.querySelector("[name="+value+"]").focus();
 target.textContent="";
}}
 }
 ,toggle,submission,profile,transform
 }
 };
 let composer=
 {span:merge(form({get:fields})
,{id:"composer",style:[{"#composer":
 {...layout.material,...layout.pill
 ,position:"fixed","z-index":100,bottom:"0px",left:"0px",margin:"1em"
 ,"padding-right":"1.5em",overflow:"scroll","box-sizing":"border-box","max-width":"calc(100% - 20px)"
 ,background:"var(--isle)","vertical-align":"middle","white-space":"nowrap"
 ,"font-family":"averia","font-size":"var(--size)",transition:"all var(--transition)"
 ,"&:not(.focused):not(:hover)":
 {[[Object.entries({send:"message",get:"source"}).map(([method,primary])=>
 "&[method="+method+"]>span:not([title="+primary+"])"),"&>span#extend"]]:{width:0,display:"none"}
 }
 ,"&>span[title]":
[{"&>span[role=textbox]":{"&#code":{"-webkit-text-security":"disc"}}
 ,"&>ul":{"padding-top":"6em",bottom:"6em"}
 }
,Object.entries({message:"",source:"",fragment:"as",title:"of",category:"on",spread:"by",matrix:"from",relations:"with"}).map(([field,value])=>(
 {["&[title="+field+"]"]:{"&>span:first-child":{display:"none"},"&:before":{content:"'"+value+"'"}}}))
].flat().reduce(merge)
 ,[["source","message"].map(title=>"&>span[title="+title+"]")]:
 {"&>ul":
 {"text-align":"left",width:"auto","margin-left":"-0.5em"
 ,"&>li":{"white-space":"nowrap"}
 }
 ,"&>.messages":{"margin-left":"-6em"}
 }
 ,"&:hover>span[title=message]>ul>li":{opacity:1,animation:"fadein 1s"}
 ,...Object.fromEntries(["erase","get","put","send"].map((method,index)=>
 ["&[method="+method+"]>span[title]:not(."+(index?method:"get")+")",{display:"none"}]))
 ,"&>span[role=textbox]#extend":{...layout.input,"&:empty:after":{content:'"..."'}}
 }}]
 ,span:[{id:"extend",role:"textbox",contenteditable:true}]
 },0)
 };
 return capture.call(composer,["",file,"module","composer","module"].join("/"));
};

 var submission=
 {async get({source,resource,...fields})
{let {origin,pathname:path}=this.ownerDocument.defaultView.location;
 let [back,remote]=[source==="..",/^https*:\/\//.test(source)];
 let query=new URLSearchParams(prune.call(fields
,({1:value})=>value??undefined,0,1)).toString().replace(/^(.)/,"?$1");
 path=back?path.replace(/[^\/]*\/$/,""):remote?source:path+source;
 if(globalThis.window)
 this.ownerDocument.defaultView.history.pushState({},null,[origin,remote?encodeURI(source):path.replace(/(^\/*|\/*$)/g,""),query].filter(Boolean).join("/"));
 let route=[path,path==="/"?"get":""].join("").replace(/\/+$/,"");
 resource=resource||compose(fetch,digest)(route+query);
 let clear=compose(swap(form({get:{source:""}})),document.bind(this));
 await compose(profile,["get"],record,form,pass(clear),document.bind(this))(resource);
 let frame=this?.ownerDocument.defaultView.frame||insert(document({div:{id:"frame"}}),"before",this);
 frame.dataset.source=route;
 let fragment=infer(transform)(resource,{source:route,...fields});
 return compose.call(each.call(fragment
,async fragment=>insert(fragment,"after",frame.lastChild)
,insert(document(progress),"under",frame))
,pass(compose(swap(frame),"firstChild","remove")));
},async put(fields)
{let {method}=demarkup(this,"method");
 let {name}=fields;
 let action="/author/"+name;
 let request={method,body:JSON.stringify(fields),headers:{"Content-Type":"application/json"}};
 let [status,author]=await compose(fetch,combine("status","text"))(action,request);
 if(status!==200)
 return toggle.call(this,"send")
,this.ownerDocument.defaultView.socket.dispatchEvent(new MessageEvent("message"
,{data:JSON.stringify({action:"message",message:author})}));
 let expires=new Date(Date.now()+1000*60*60).toUTCString();
 this.ownerDocument.cookie=cookie({author:name,path:"/",expires});
 if(author.rank)
 this.ownerDocument.cookie=cookie({rank:author.rank,path:"/",expires});
 let address=this.ownerDocument.defaultView.location.href;
 let room=["",path(address),query(address).source].join("/");
 this.dispatchEvent(new MessageEvent("message",{data:{action:"sign",name,room},bubbles:true}));
 fill.call(this,{name:"",code:""});
 toggle.call(this,"send");
},erase()
{let {method}=demarkup(this,"method");
 let active=this.ownerDocument.activeElement;
 let input=[this.contains(active)?active
:Array.from(this.querySelectorAll("span[role=textbox]:not([id=source])")).filter(({textContent:text})=>!text)].flat();
 input.forEach(input=>demarkup(input,"role").role!=="input"||input.textContent
?console.error("erasure called on non-empty field:",input)
:input.closest("label").remove());
 toggle.call(this,"get");
},send({message})
{if(!message)return;
 let address=this.ownerDocument.defaultView.location.href;
 let room=["",path(address),query(address).source].join("/");
 this.dispatchEvent(new MessageEvent("message",{data:{action:"message",room,message,put:Date.now()},bubbles:true}));
 fill.call(this,{message:""});
 toggle.call(this,"send");
}};

 export async function profile(resource)
{let source=basic(resource)?resource:"";
 let fragment={"fragment":"","script":"","chart":"","network":"","extrude":"","map":""};
 return {source,fragment};
 fragment=await compose(Object.keys,provide,each(compose(crop(1),stash(compose
(locate,provide,crop(1),slip("/"),"concat",infer("concat","/module/namespace"),fetch,digest
,({default:fragment,...exports})=>prune.call(exports,({1:value})=>
 string(value)&&value.startsWith("data:text/javascript;")?value:undefined,0,0),Object.keys
)),(name,fragments)=>({[name]:fragments})
)),collect,infer("reduce",merge))(fragment);
 return {source,fragment};
};

 export async function transform(resource,{fragment,incumbent,...fields})
{let [module,feature]=await locate(fragment);
 let fail=compose(crop(1),note.bind(1),"message",document);
 return buffer(resolve,fail)(module,feature,resource,fields,incumbent||window);
};

 async function toggle(method)
{let active=this.ownerDocument.activeElement;
 if(!this.contains(active))active=undefined;
 let {source,message,name,code}=fill.call(this);
 let icon=
 {get:"node",put:code?"fingerprint":"plus"
 ,erase:"plus",send:message?"paperplane/up":"chat"
 }[method];
 let style=document({style:{class:"icon","#text":css(
 {"#toggle":
 {height:"3em",width:"3em",cursor:"pointer",fill:"var(--isle)","vertical-align":"middle","background-color":"black"
 ,"clip-path":"circle(50%)",padding:"1em",transform:"scale(0.8)",position:"sticky",left:0
 ,...["node","fingerprint"].includes(icon)&&{padding:0,width:"5em",height:"5em"}
 ,"&>path":{erase:{transform:"rotate(45deg)","transform-origin":"center center"}}[method]
 }
 })}});
 let fields=
 {send:{message:[],code:message||cookie("author")?undefined:""}
 ,put:{name:message,code:code}
 ,code:method==="put"||{[code?"name":"message"]:code?message:name}
 }[method]||{};
 document.call(this,{method:method,...prune.call(form({[method]:fields}),([field,value])=>
 value?.title==="message"?merge(value,{style:{"@scope":{":scope":
 {"&>ul":
 {display:"block","margin-left":"-5em","max-height":"50vh","min-width":"150px"
 ,"&>span":{position:"fixed",bottom:"1.5em",left:"5.5em",color:"black"}
 ,"&>li":
 {...layout.animation.fade.out,opacity:0,animation:"fadeout 6s","padding-left":0,"min-height":"4em","white-space":"normal"
 ,...layout.message
 ,"&:not(:last-of-type)":{animation:"fadeout 2s"}
 }
 ,"&:hover>li":{opacity:1,animation:"fadein 1s"}
 }
 ,"&>span.status":{position:"absolute",left:"-0.5em",top:"-1.5em",color:"black"}
 }}}}):value)});
 this.appendChild(this.querySelector("#extend"));
 if(active)
 focus(this.querySelector(qualify(active)));
 let control=this.querySelector("#toggle");
 insert(style,control?"over":"after",control?this.querySelector("style.icon"):this.lastChild);
 insert(document({svg:
 {...search.call(svg.object,icon.split("/")),title:method,id:"toggle"
 }}),control?"over":"before",control||this.firstChild);
 let room=["",path(this.ownerDocument.defaultView.location.href),fill.call(this).source].join("/");
 if(method==="send"&&!defined(message))
 this.dispatchEvent(new MessageEvent("message",{data:{action:"join",room},bubbles:true}));
};

 function edit(target)
{let label=target.querySelector("text.label");
 let form=target.querySelector("form");
 label.style.display=form?"block":"none";
 let node=d3.select(target).datum();
 if(form)return delete node.selected&&form.remove();
 node.selected=true;
 let {x,width,y,height}=target.querySelector("circle").getBoundingClientRect();
 form=target.appendChild(document(
 {foreignObject:
 {requiredExtensions:"http://example.com/SVGExtensions/EmbeddedXHTML"
 ,height,width:"400px"
 ,body:{xmlns:namespaces.xhtml
 ,form:
 {class:"editor"
 ,title:node.title
 ,"data-inputs":JSON.stringify({source:"string",start:"date",end:"date"})
 }     }
 }
 },namespaces.svg).next().value).querySelector("form");
 let record=Object.entries(node.data[node.title]);
 record=record.filter(([key,value])=>typeof value=="string"||form.dataset.inputs[key]);
 record.unshift(["source",node.title]);
 note(form)
 form.call(form,{[node.title]:Object.fromEntries(record)});
 form.appendChild(document({span:{class:"field","#text":"+",style:"cursor:pointer"}}).next().value);
 form.source.focus()
 window.room.on("put",function({body,room})
{window.Tone.Transport.start();
 if(fragment.getAttribute("title")==room)
 network(sprawl(body),{fragment,still:true,spread:"left",cluster:true});
 else actions.get({name:room},window.document.querySelector("div[title$='"+room+"']"))
});
};

 export var relay=
 {check(event,peer){peer.connected=true;}
 ,join({room},peer)
{this.rooms[room]=this.rooms[room]||{messages:[]};
 let {author}=merge(peer,{room},0);
 let event={action:"message",message:author.name+" joined.",room};
 relay.broadcast.call(this,event,peer);
 let {messages}=this.rooms[room];
 if(messages.length)
 peer?.send(JSON.stringify({action:"history",messages}));
 return this.rooms[room];
},async sign({name},peer)
{let author=await compose(fetch,"json",extract(["name","icon"]))("/author/"+name);
 Object.assign(peer,{author});
 peer.send(JSON.stringify({action:"message",author,message:"signed in as "+author.name}));
},signal({room},peer)
{let event={action:"signal",author:peer.author,room};
 relay.broadcast.call(this,event,peer);
},message({message,room,put},peer)
{let event={action:"message",author:peer.author,message,room,put};
 this.rooms[room].messages.push({message,author:peer.author,put});
 relay.broadcast.call(this,event);
},broadcast(event,peer)
{let message=JSON.stringify(event);
 this.clients.forEach(client=>
 client.readyState===1&&client!==peer&&client.room===event.room&&
 client.send(message));
},save:async function({room,content,updates,version},peer)
{peer.room=this.rooms[room]||message.join.call(...arguments);
 let {EditorState,collab,receiveUpdates,getSyncedVersion,ChangeSet}=await import("./haverbeke_2020_codemirror.js");
 if(!peer.room.track)
 peer.room.track=await fetch(room).then(doc=>
 EditorState.create({doc:doc.toString(),extensions:[collab()]}));
 //if(note([version,getSyncedVersion(this.room.content)]).reduce((next,past)=>next>past))
 await update(peer.room.track,updates);
 let body=this.room.track.doc.toString();
 let headers={"Content-Type":"text/plain"};
 let message=await fetch(room+"?force=overwrite",{method:"put",body,headers});
 if(message instanceof Error)
 return this.emit("message",{message});
 else message=this.author+" edited "+room;
[["save",{author:this.author,room,updates}]
,["message",{message}]
].map(event=>
 this.server.sockets.in(room).emit(...event));
},disconnect(text)
{Object.keys(this.rooms).forEach(room=>
 this.leave(room)&&
 this._events.message.bind(this)({message:this.author+" left "+room,room}));
},put:async function({room,content},peer)
{peer.room=this.rooms[room]||message.join.call(this,...arguments);
 peer.room.content=content;
 let body=Buffer.from(content,"base64").toString("utf8");
 let message=await fetch(room+"?override=true",{method:"put",body,headers:{"Content-Type":"text/plain"}});
 if(message.status!==200)
 return peer.send(JSON.stringify({action:"message",message:await message.text()}));
[{action:"put",body:content}
,{action:"message",message:this.author+" updated "+room}
].forEach(event=>message.broadcast.call(this,event));
}};

 var body=
 // under isolation to event capture islands. 
 {imports:
 {"./Blik_2023_interface.js":["","resolve","locate","digest","cookie","cookies","query","path"]
 ,"./Blik_2023_search.js":["","merge","unfold","search","prune","extract"]
 ,"./Blik_2023_inference.js":";note;expect;compose;combine;pass;route;record;trace;drop;crop;slip;infer;tether;whether;wait;observe;buffer;swap;when;array;has;each;differ;provide;collect;is;match;basic;defined".split(";")
 ,"./Blik_2023_fragment.js":";* as fragment;document;form;image;canvas;demarkup;insert;navigate;metamarkup;detransform;stretch;vectorspace;error;drillresize;deselect;namespaces;keyboard;spell;expand;parse;semiotics;consume;syndicate;article;destroy;reference;fill;qualify;focus;capture;socket".split(";")
 ,"./Blik_2023_layout.js":["* as layout"]
 }
 ,exports:
 {default:
 {".editor":
 {submit(event)
{event.preventDefault();
 let record=Object.fromEntries(Object.values(form.elements).map(({id,value})=>[id,value]));
 for(let [key,value] of Object.entries(record))
 if(form.inputs[key]==Date)
 record[key]=Number(new Date(value));
 if(record.key)
 Object.assign(record,{[record.key]:record.value})&&
 delete record.key&&delete record.value;
 let svg=fragment.querySelector("svg");
 let blank=!record.name&&confirm("delete "+node.title+"?");
 let match=blank?d3.select()
:d3.select(svg).selectAll("g.node").select(function(other){return other!=node&&(other.parent==node.parent)&&(other.title==record.name)&&this});
 let progress=node.data[node.title].progress;
 progress=!progress||[record.progress,progress].map(Number).reduce((was,is)=>was-is);
 if(match.size()||isNaN(progress))
 return [form[isNaN(progress)?"progress":"name"],...match.nodes()].forEach(node=>node.style.animation="pulse 2s");
 let root=[svg.simulation.nodes()[0],0].reduce(function root(node){return node.parent?root(node.parent):node});
 update(node,blank?undefined:record,root);
 let room=fragment.getAttribute("title");
 let body=root.data;
 let report={join:room,put:[]};
 report.put.push({room,body})
 if(progress)
 report.put.push(
 {room:room.replace(/\.json$/,"_log.json"),append:true,body:
 {[Date.now()]:root.children[1].leaves().map(task=>
 task.data[task.title]).filter(Boolean).reduce((progress,task)=>
 progress+Number(task.progress||0)/100,0)
 }
 });
 Object.entries(report).forEach(([emit,body])=>
 (Array.isArray(body)?body:[body]).forEach(body=>
 window.composer.room.emit(emit,body)));
 this.escape();
 //Object.entries({join:this.closest("div").title,put:{room,body}}).forEach(entry=>window.room.room.emit(...entry));
},keydown({keyCode})
{if(keyCode!=27)return;
 let label=target.parentNode.querySelector("text.label");
 label.style.display="block";
 delete node.selected;
 this.remove();
}}
 }
 ,edit,proceduralize
 }
 };

