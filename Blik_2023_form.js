 import {note,lift,debug,extract,model,spill,crop,swap,is,are,either,functor,buffer,rank,compound,collect,same,pass,stash,compose,each,infer,tether,combine,string,whether,drop,slip,exit,numeric,match,when,has,basic,heritage,observe,merge,search,prune,route,record,major} from "./Blik_2023_inference.js";


 import media,{window,document,hypertext,throttle,capture,defer,form,progress,insert,namespaces,css,fill,deselect,expand,spell,demarkup,stylerules,memory,image,canvas} from "./Blik_2023_fragment.js";
 import {url,serialize,proceduralize,parse,mime,calendar,cookie,query,path} from "./Blik_2023_meta.js";
 import * as layout from "./Blik_2023_layout.js";
 import {fontface,animation} from "./Blik_2023_layout.js";
 import {encrypt} from "./Blik_2023_search.js";
 import {access,command,locate,fetch,digest,script,stage,worker} from "./Blik_2023_interface.js";
 import routes from "./Blik_2023_form.js";
 import network from "./Blik_2024_network.js";
 import editor from "./Blik_2024_script.js";
 import extend from "./Blik_2023_d4.js";
 import wikipedia from "./Blik_2024_wikipedia.js";
 import * as svg from "./Blik_2024_svg.js";
 import local,{syndication,persistence,encryption,publish,published,classify,classified,permit} from "./Blik_2024_static.js";
 import mail from "./Blik_2025_email.js";
 merge(syndication,
 {rss2json:{key:undefined}
 ,google:{api:undefined}
 ,elsevier:{api:undefined}
 ,mapbox:undefined
 });
 export {encryption,classify,classified,published,permit,syndication};
 var address=new URL(import.meta.url).pathname;
 export const file=address.replace(/.*\//,"");
 // Port excludes published paths from cache. 
 await publish(/^(?!.*\/module)(?!.*\/sourcemap)(?!.*\/interface$)(?!.*\.js$).*\/Blik_/,/^(?!.*\/interface$).*\/(author|mail)/);
 var {default:fonts}=await command.call(import.meta.url,"./Blik_2025_fonts.json");

 export default
 {...local,mail
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
 ,author:prune.call(persistence("Blik_2024_author.json"),([field,value],path)=>field==="get"&&!path.length
?compose(value,prune(([field,value])=>["signature","code"].includes(field)?undefined:value,0,2))
:value)
 ,media:compose(crop(1),"toString",media,collect,document,spill,lift,crop(1))
 ,interface:async function(request)
{let queries=query(url(request));
 let fragment=match(["author",string])(arguments[3])?"author":basic(this)?"network":"fragment";
 let {controls,...fields}={source:"",fragment,...queries};
 let [form]=compose(composer,document,spill,lift)(fields);
 let wrapper=form.querySelector("[role=form]");
 await toggle.call(wrapper,"get");
 let body=
 {style:
[extract.call(layout,["body","a","blockquote","table"])
,{"#frame":layout.frame},layout.theme,layout.goo,layout.link
].reduce(merge)
 ,span:form
 };
 let {averia,oswald,ranger}=fontface;
 let style=css(
 {"@font-face":[averia,oswald,ranger]
 ,"@keyframes wave":
 {"0%":{height:0,transform:"translate(0,-100%)",opacity:0}
 ,"50%":{opacity:0.25}
 ,"100%":{transform:"translate(0,100%)",opacity:0}
 }
 ,...animation.dotdot
 });
 let address=request.url.replace(/\/($|\?.*)/g,"");
 let title=address.split("/").reverse().find(Boolean)||"JSRebels";
 [fragment]=compose.call(body,{title,icon:"/svg/object/node/vector",scripts:[],styles:style},hypertext,document,spill,lift);
 merge(fields
 // root needs explicit /get method to reach json representation. 
,{source:path(window.origin+(this===routes?"/get":request.url)).slice(1)
 ,resource:this!==routes&&
 await compose.call(this.get?.(...arguments)||this,{url:address,headers:request.headers},stage,digest,cede)
 },1);
 await buffer(compose(tether(submission.get),throttle))(wrapper,fields);
 if(String(controls)==="false")
 form.remove();
 return fragment;
},network:compose
(combine(swap(null),crop(1),compose(drop(1),query)),tether(network),throttle,{style:"background:#222222"},tether(document)
),relay()
{return {imports:
 {"/Blik_2023_inference.js":["","note","record","each","infer","buffer","rank","collect","compose","wait","has","clock","string","prune","flatten","spill","lift","tether"]
 ,"/Blik_2023_interface.js":["","locate","reload","recompose"]
 ,"/Blik_2023_fragment.js":["","demarkup","document","insert","fill","image","canvas","message as entry"]
 ,"/Blik_2023_meta.js":["","query","relate"]
 }
 ,exports:
 {default:
 {check(){this.send(JSON.stringify({action:"check"}));}
 ,update({scope,command,context},window)
{let svg=window.document.getElementById(scope);
 compose.call([[svg],{"inference/tether":[command,context]}],recompose,compose,"call");
}
 ,signal({author},window)
{let form=window.document.querySelector("#composer");
 let toggle=form.querySelector("#toggle");
 let [entry]=compose(document.bind(toggle),spill,lift,drop(1))({span:{id:"signal","#text":author.name+" is typing..."}});
 compose(wait(3000),node=>node.parentNode&&node.remove())(entry);
},async message({message,put,author:{name,icon}={name:"system",icon:"/svg/object/cog/vector"}},window)
{let form=window.document.querySelector("#composer");
 let [span]=compose(document,spill,lift)({span:await entry({icon:icon||"/svg/animal/deer/vector",name:name||"anonymous",put,message})});
 compose
(tether(document),spill,lift,collect,infer("find",match({className:"message"}))
,name==="system"&&compose(wait(5000),{style:"transition:all 1s;opacity:0;"},Object.assign,wait(1000),"remove")
)(form,{span:{id:"messages",class:"messages",role:"list"
,dataset:{source:"/Blik_2026_chat.json"+window.location.pathname,actions:["/Blik_2023_fragment.js/module/message/module"]}
,span}});
},broadcast({message,room,author})
{let {href}=window.location;
 compose({source:room,...query(href)},transform,infer(insert,"under",window.document.querySelector("[actions='"+room+"']")))(message);
},async history({messages},window)
{let form=window.document.querySelector("#composer");
 let span=await collect(each.call(rank(messages),async(event,context)=>entry(event,context)));
 compose(tether(document),spill,lift)(form,{span:{id:"messages",class:"messages",role:"list"
 ,dataset:{source:"/Blik_2026_chat.json"+window.location.pathname,actions:["/Blik_2023_fragment.js/module/message/module"]}
 ,span}});
},save({author,room,updates})
{if(author===window.room.labels.message)
 return window.Tone.Transport.start();
 let {state}=this.room.content.viewState;
 import("./haverbeke_2020_codemirror.js").then(({ChangeSet,receiveUpdates})=>
 receiveUpdates(state,updates.map(({changes})=>
 Array.isArray(changes)
?ChangeSet.fromJSON(changes)
:changes.toJSON()).map((changes,index)=>
 Object.assign(updates[index],{changes})))).then(updates=>
 this.room.content.update([updates]));
},async bust({modules}){return reload(modules);}
 }
 }
 };
},async rss(request)
{when(has(["pub","put"]))(this);
 let queries=query(url(request));
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
 let {outerHTML:body}=compose(document,"firstChild")({rss:{version:"2.0",channel:{...channel,item}}});
//,{declaration:true,indent:" "})
 return {status:200,type:"rss+xml",body:'<?xml version="1.0" encoding="UTF-8" ?>'+body};
},"robots.txt":function(){return "User-agent: *\nDisallow: "}
 ,rss2json:request=>compose(fetch,"json",["body"],record)("https://api.rss2json.com/v1/api.json?"+new URLSearchParams(
 {rss_url:string(request)?request:query(url(request)).url
 ,api_key:syndication.rss2json.key
 }))
 ,wordpress(request)
{return compose
(command.bind(import.meta.url),request.url.split("/").slice(2).join("/"),"site"
,{number:15},"postsList",request.url.split("/").slice(2),record,note
)("./wordpress_2019_wpcom.js","WPCOM");
},google:
 {files(request)
{return compose(fetch,"json",["body"],record)("https://www.googleapis.com/drive/v3/files/"+"?alt=media&key="+syndication.google.api);
},search(request)
{let {q,type="image"}=query(url(request));
 return compose(fetch,"json",["body"],record)(
["https://www.googleapis.com/customsearch/v1?"+new URLSearchParams(
 {q,searchType:type,key:syndication.google.api
 ,cx:syndication.google.search
 })
].join(""));
},map(request)
{let options=query(url(request));
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
(query(url(request))
,'id,name,from,created_time,message,type,timeline_visibility,link,object_id'
);
},https:({url})=>compose(fetch,"json")("https:/"+url)
 ,http:({url})=>compose(fetch,"json")("http:/"+url)
 ,medium:request=>compose(fetch,"text",note,slip(new DOMParser()),"text/xml","parseFromString","item","querySelectorAll")("https://medium.com/feed/"+new URL(request.url).pathname.split("/").slice(2).join("/"))
 ,wikipedia
 ,mapbox(request){return compose.call(command.call(import.meta.url,"./Blik_2024_map.js","proxy"),infer("mapbox",request,syndication.mapbox));}
 ,overpass()
{return fetch('https://www.overpass-api.de/api/interpreter?'+new URLSearchParams({data:'[out:json];rel[admin_level=2]'/*'convert item ::=::,::geom=geom(),_osm_type=type();'*/+';out geom;'}));
},elsevier(request)
{if(!syndication.elsevier.token)
 return compose(note,fetch,note,"text",note)("https://api.elsevier.com/authenticate?platform=SCOPUS",{headers:
 {"X-ELS-APIKey":syndication.elsevier.api
 }})
 let address="https://api.elsevier.com/content/search/scidir";
 let options=query(url(request));
 let field="dc:title,dc:creator,prism:publicationName,prism:coverDate,dc:description,prism:doi";
 merge(options,{field,count:25,view:"COMPLETE"},0);
 return compose(fetch,note,"text",note)(note(address+"?"+new URLSearchParams(options)),{headers:
 {"X-ELS-APIKey":syndication.elsevier.api
 ,Accept:"application/json"
 }})
},".well-known":{appspecific:{"com.chrome.devtools.json":function()
{return {"workspace":
 {root:process.env.PWD.replace
("/mnt/shared/GoogleDrive/MyDrive"
,"/media/fuse/drivefs-062c2a5118ec2abb3fe013c8e3b3cbeb/root"
),uuid:"53b029bb-c989-4dca-969b-835fecec3717"
 }};
}}}
 ,calendar()
{return compose("toString",note,JSON.parse,note,calendar,["body"],record,{type:"text/calendar"},merge)(this);
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
},worker(){return merge({exports:{name:"Generic worker"}},worker,0);}
,manifest(request)
{let {origin}=url(request);
 let module=
 {name:"JS Rebels",short_name:"jsrebels",theme_color:"#ffcbe4",background_color:"#fa99ca"
 ,display:"standalone",scope:"/",start_url:origin,description:"JS Rebels",orientation:"any",icons:
[{src:"/svg/object/node/vector?fill=%23303030",type:"image/svg+xml",sizes:"any"}
,{src:"/svg/object/node/vector/raster?fill=%23303030&width=512&height=512&background=black",type:"image/png",sizes:"512x512"}
]
 };
 return module;
}};

 export var serviceworker={imports:
 {"/Blik_2023_inference.js":["","compose","produce","induce","infer","note","rank","exit","observe","string"]
 }
 ,exports:
 {name:"Service worker"
 ,census(cache)
{return cache.keys().then(keys=>Promise.all(keys.map(request=>
 cache.match(request).then(response=>response.headers.get("Content-Type")||"")))).then(types=>
 ({total:types.length
 ,html:types.filter(type=>type.includes("html")).length
 ,css:types.filter(type=>type.includes("css")).length
 ,js:types.filter(type=>type.includes("javascript")).length
 }));
},checkout(request,cache)
{// bust timestamp on js only hits the page memory, never this cache or the server (like Interface's resolve/load)
 let raw=request.url||request;
 // reload and install message/event request string specifiers of js.  
 let script=request.destination==="script"||string(request);
 let identifier=script?raw.replace(/\?.*$/,""):raw;
 let referrer=request.referrer;
 return cache.match(identifier).then(existing=>
{let headers=new Headers(request.headers);
 // express script destination from imports lost by fetch with accept header.
 if(script)headers.set("Accept","text/javascript");
 if(existing)headers.set("If-None-Match",existing.headers.get("ETag"));
 // navigate-mode request headers can't be overridden by fetch context.
 return fetch(request.mode==="navigate"?identifier:request,{headers,referrer}).then(conditional=>
 conditional.status===304?existing:conditional.status<400
?cache.put(identifier,conditional.clone()).then(cached=>
 console.debug("Installed "+identifier)||conditional)
:existing?cache.delete(identifier).then(evicted=>
 console.debug("Uninstalled "+identifier+" ("+conditional.status+")")||conditional)
:conditional).catch(fail=>
 console.error(fail)||existing||Promise.reject(fail));
});
},install()
{// pull the server cache for offline use — to be called on appinstalled (PWA), not controllerchange (SW).
 produce.call
("/sources",fetch,"json",Object.keys,infer("filter",file=>
 /\.js$/.test(file)),caches.open("assets"),(modules,cache)=>
 modules.map(file=>checkout(self.location.origin+file,cache))
,rank,collect
);
}}
 ,procedures:{register()
{var address=new URL(import.meta.url).pathname;
 observe.call(self
,{install(event)
{console.log(address+" installed.");
 event.waitUntil(Promise.all([caches.open("assets").then(cache=>checkout(import.meta.url,cache)),self.skipWaiting()]));
},activate(event)
{console.log(address+" activated.");
 event.waitUntil(Promise.all(
[caches.keys().then(keys=>Promise.all(keys.filter(key=>key!=="assets").map(key=>caches.delete(key))))
 // dispatches controllerchange event on clients' navigator.serviceWorker-s. 
,self.clients.claim()
]));
},fetch(event)
{event.respondWith(event.request.method==="GET"
?caches.open("assets").then(cache=>checkout(event.request,cache))
:fetch(event.request));
},message(event)
{let {action}=event.data||{};
 // bypass the browser's own slow update polling, but only when the conditional fetch found a real change.
 if(action==="PWAinstall")
 return event.waitUntil(install());
 if(action==="reload")
 return event.waitUntil(caches.open("assets").then(cache=>
 cache.match(import.meta.url).then(existing=>
 checkout(import.meta.url,cache).then(fresh=>
 [existing,fresh].map(copy=>copy?.headers.get("ETag")).reduce((past,next)=>past!==next)&&
 self.registration.update()).catch(fail=>
 census(cache).then(stats=>
 self.clients.matchAll({includeUncontrolled:true}).then(clients=>
 clients.forEach(client=>client.postMessage(JSON.stringify(
 {action:"message",message:self.location.origin+" down. Installed offline: "+stats.total+" ("+stats.html+" html, "+stats.css+" css, "+stats.js+" js)."
 })))))))));
}});
}}};

 export function composer(fields)
{if(this)
 return {imports:
 {"/Blik_2023_interface.js":["","command","locate","digest","fetch","socket"]
 ,"/Blik_2023_inference.js":";note;unit;merge;route;record;search;prune;spill;lift;debug;expect;compose;combine;pass;stash;trace;drop;crop;slip;infer;tether;whether;wait;observe;buffer;swap;when;array;has;each;differ;rank;collect;is;match;basic;defined;functor;extract;major".split(";")
 ,"/Blik_2023_fragment.js":";* as fragment;document;form;progress;image;canvas;demarkup;insert;navigate;detransform;transform;stretch;vectorspace;error;drillresize;deselect;namespaces;keyboard;spell;expand;parse;semiotics;destroy;reference;fill;qualify;cursor;capture;css;focus;drag;list;memory".split(";")
 ,"/Blik_2023_layout.js":["* as layout"]
 ,"/Blik_2023_meta.js":["","domain","url","query","path"]
 ,"/Blik_2023_search.js":["","unfold"]
 ,"/Blik_2024_svg.js":"* as svg"
 }
 ,exports:
 {default:
 {"[role=form]":
 {async submit(event)
{event?.preventDefault();
 this.style.pointerEvents="none";
 let form=this;
 let {method}=demarkup(form,"method");
 let fields=fill.call(form)[method]||{};
 if(fields.source)
 fill.call(form,{[method]:{source:""}});
 await buffer(submission[method].bind(form),note)(fields);
 this.style.pointerEvents="";
}}
 ,"#composer":
 {...observe({point({x,y,target,isTrusted:click})
{if(target.closest("span[role=list]")||target.closest("ul"))
 return;
 drag.pointerdown.call(this,...arguments);
}})
 }
 ,"span[name]":
 {...observe({focus({isTrusted:focus,target})
{if(target.nodeName==="#text")
 target=target.parentNode;
 if(!["textbox","menu"].includes(target.role))
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
 if(type=="text")
 cursor(target);
 label?.setAttribute("focused",label.getAttribute("focused")!=="true");
}})
 ,input({target})
{let form=target.closest("[role=form]");
 let value=target.textContent;
 let {name}=demarkup(target,"name");
 if(name==="message"&&value)
 form.dispatchEvent(new MessageEvent("message",{data:{action:"signal"},bubbles:true}));
 let {message,code}=fill.call(form)[form.getAttribute("method")]||{};
 let method=
 {put:!code&&"send"
 ,get:name!=="source"&&!value&&"erase"
 ,erase:value&&"get"
 ,send:code?"put":message?.length<2?"send":undefined
 }[form.getAttribute("method")];
 if(method)
 toggle.call(form,method);
 if(name==="message")return;
 let list=target.parentNode.querySelectorAll("li");
 let matching=Array.from(list).filter(li=>li.children.length<2).map(leaf=>
{let branch=unfold.call(leaf,li=>li.parentNode.closest("li"));
 let path=branch.toReversed().map(li=>li?.firstChild?.textContent||"").join("/");
 let match=value&&path.includes(value);
 let show=!value||match;
 branch.forEach((li,height)=>li?.style[(!show
?!height||unfold.call(li,li=>li.querySelector("li")).at(-2)===leaf&&"set"
:"remove")+"Property"]?.("display","none"));
 return match&&path;
}).filter(Boolean);
 if(name!=="source")return;
 let svg=form.ownerDocument.getElementById("frame")?.querySelector("svg.d3");
 let source=form.ownerDocument.defaultView.frame.dataset.source;
 let root=source==="/get"?form.ownerDocument.defaultView.location.origin:source;
 let cluster=matching.flatMap(path=>
{let segments=[root,...path.split("/").slice(1)];
 return segments.slice(0,-1).map((segment,index)=>
 form.ownerDocument.getElementById(deselect([segments[index-1]||[],segment].join("-"))));
}).filter(Boolean);
 if(svg)
 value?command.call(import.meta.url,"/Blik_2024_network.js","region",svg,cluster)
 :command.call(import.meta.url,"/Blik_2024_network.js","region",svg);
},change({target})
{let form=target.closest("[role=form]");
 let value=target.textContent;
 let {name}=demarkup(target,"name");
 let sidestep=value.startsWith("../");
 let sidestepped=form.getAttribute("sidestep");
 if(name==="source"&&(sidestep||sidestepped))
 return compose.call(form,{sidestep:form.getAttribute("sidestep")?undefined:true},tether(document),spill,lift)
,sidestep&&sidestepped||compose
(fetch,digest,whether(compound,unit,swap(value)),collect
,source=>fragment.form({[form.getAttribute("method")]:{source}})
,document.bind(form),spill,lift
)(sidestep
?form.ownerDocument.defaultView.location.href.replace
(form.ownerDocument.defaultView.location.pathname.replace(/.*\/([^$])/,"$1")
,form.ownerDocument.defaultView.location.pathname.split("/").length<4?"files":"get"
)
:form.ownerDocument.defaultView.frame.dataset.source);
}}
 ,"span[name=source]":
 {...observe({focus({isTrusted:focus})
{if(focus)
 return this.dispatchEvent(new Event("input",{bubbles:true}));
 let form=this.closest("[role=form]");
 let svg=form.ownerDocument.getElementById("frame")?.querySelector("svg.d3");
 svg&&command.call(import.meta.url,"/Blik_2024_network.js","region",svg);
}})
 }
 ,".actions>#unsign":
 {async click()
{let author=memory("author",match({expires:major(Date.now())}));
 await fetch("/author/"+author.name+"?override=true",{method:"put",body:JSON.stringify({signature:null})});
 localStorage.removeItem("author");
 let control=this.closest("#toggle");
 let form=control.parentNode.querySelector("[role=form]");
 let window=this.ownerDocument.defaultView;
 await socket(window.location.origin,window);
 let room=path(window.location.href);
 form.dispatchEvent(new MessageEvent("message",{data:{action:"join",room},bubbles:true}));
 toggle.call(form,form.getAttribute("method"));
}}
 ,"#toggle":
 {async click({isTrusted:genuine,target}={})
{if(target?.closest(".actions"))return;
 let form=this.parentNode.querySelector("[role=form]");
 let method=form.getAttribute("method");
 let {message}=fill.call(form,method);
 if({send:message,put:true}[method])
 return form.dispatchEvent(new Event("submit",{bubbles:true}));
 toggle.call(form,{get:"send",send:"get"}[method]);
},...observe({hover({isTrusted:hover,relatedTarget})
{if(this.contains(relatedTarget))return;
 let icon=this.children[1];
 if(!hover)
 return [icon.nextSibling].forEach(function remove(node){node&&remove(node.nextSibling),node?.remove();});
 let form=this.parentNode.querySelector("[role=form]");
 let author=memory("author",match({expires:major(Date.now())}));
 if(form.getAttribute("method")!=="send"||!author)
 return;
 let glyph=
 {id:"unsign",role:"button",viewBox:"0 0 512 512"
 ,...svg.effect.shadow_amber
 ,path:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24V208c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.4 9.4 9.4 24.6 0 34zM192 436V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}
 };
 compose(tether(document),spill,lift)
(this,{span:{class:"actions",svg:[{...glyph,style:"transform:translate(-50%,-50%) rotate(-30deg) translate(3em) rotate(30deg)"}]}
 });
}})
 }
 ,"#extend":
 {input(event)
{event.stopPropagation();
 let {target,inputType:type,ctrlKey}=event;
 if(type!=="insertParagraph")return;
 event.preventDefault();
 let value=target.textContent;
 if(!value)
 return this.dispatchEvent(new Event("submit",{bubbles:true}));
 let form=this.closest("[role=form]");
 let method=form.getAttribute("method");
 compose.call(form,fragment.form({[method]:{[value]:""}}),tether(document),spill,lift);
 form.appendChild(this);
 form.querySelector("[name="+value+"]").focus();
 target.textContent=""; 
}}
 }
 ,toggle,submission,profile
 }
 };
 let composer=
 {span:{id:"composer",style:[{id:"composer-pill",fragment:"/Blik_2023_form.js/composer"
 ,"@scope":{":scope":
 {...[layout.material,layout.pill,layout.animation.fade.out,layout.dropcap].reduce(merge,{})
 ,position:"fixed","z-index":100,bottom:"0px",left:"0px",margin:"1em",height:"5em",cursor:"grab"
 ,"&.right":{left:"unset",right:"0px"},"&.top":{bottom:"unset",top:"0px"}
 ,"max-width":"calc(100% - 20px)"
 ,background:"var(--isle)","vertical-align":"middle"
 ,"font-family":"averia","font-size":"var(--size)",transition:"all var(--transition)"
 ,"&>.messages":
 {position:"absolute",bottom:"100%",left:0,overflow:"scroll",cursor:"auto"
 ,display:"block","margin-left":"1em","max-height":"calc(100vh - 6em)","max-width":"300px","pointer-events":"none"
 ,"&>.message":
 {opacity:0,animation:"fadeout 2s","padding-left":0,"margin-bottom":"0.5em"
 ,...layout.message
 ,"&>span>.title+span":{}
 ,"&:last-of-type":{animation:"fadeout 6s"}
 }
 }
 ,[["&:hover>span[method=send]+.messages"]]:{"pointer-events":"all",[["&>.message","&>.message:last-of-type"]]:{opacity:1,animation:"fadein 1s"}}
 }}}]
 ,span:[merge(form({get:fields})
,{id:"fields",style:[{id:"fields-pill",fragment:"/Blik_2023_form.js/composer"
 ,"@scope":{":scope":
 {...layout.fields
 ,"padding-right":"1.5em","max-width":"calc(100% - 3.5em)"
 ,"&:not(.focused):not(:hover)":
 {[[Object.entries({send:"message",get:"source"}).map(([method,primary])=>
 "&[method="+method+"]>span:not([title="+primary+"])"),"&>span#extend"]]:{width:0,display:"none"}
 }
 ,"&:not([method=get])>span[role=textbox]#extend":{display:"none"}
 ,"&>span[title]":
[{cursor:"auto"
 ,"&>span":
 {margin:"0 .4em"
 ,"&[role=textbox],&[role=menu]":{"min-width":"20px"}
 ,"&[name=code]":{"-webkit-text-security":"disc"}
 }
 ,"&>ul":
 {"margin-top":"calc(-100vh + 3em)"
 ,"padding-top":"calc(100vh - 9em)"
 ,"max-height":"calc(100vh - 6em)"
 ,"overflow":"scroll"
 }
 }
,Object.entries({message:"",source:"",fragment:"as",title:"of",category:"on",spread:"by",matrix:"from",relations:"with"}).map(([field,value])=>(
 {["&[title="+field+"]"]:{"&>span:first-child":{display:"none"},"&:before":{content:"'"+value+"'"}}}))
].flat().reduce(merge)
 ,[["source","message"].map(title=>"&>span#"+title)]:
 {"&>ul":
 {"text-align":"left",width:"auto","margin-left":"-0.5em"
 ,"&>li":{"white-space":"nowrap"}
 }
 }
 ,...Object.fromEntries(["erase","get","put","send"].map((method,index)=>
 ["&[method="+method+"]>span[title]:not(."+(index?method:"get")+")",{display:"none"}]))
 ,"&>span[role=textbox]#extend":{...layout.input,"&:empty:after":{content:'"..."'}}
 ,"&.toggling":{"&>span":{width:0,"min-width":0},padding:0}
 }}}]
 ,span:[{id:"extend",role:"textbox",contenteditable:true}]
 },0)]
 }};
 return capture.call(composer,["",file,"module","composer","module"].join("/"));
};

 async function toggle(method)
{this.classList.add("toggling");
 let active=this.ownerDocument.activeElement;
 if(!this.contains(active))active=undefined;
 let author=memory("author",match({expires:major(Date.now())}));
 let {source,message,name,code}=fill.call(this)[this.getAttribute("method")]||{};
 let icon=
 {get:"node",put:code?"fingerprint":"plus"
 ,erase:"plus",send:message?"paperplane/up":"chat"
 }[method];
 await compose.call
({send:{message:name||message||"",code:message||author?null:""}
 ,put:{name:message,code}
 }[method]||{},[method],record,form,slip(this),tether(document),spill,lift
);
 this.append(...[this.querySelector("#code"),this.querySelector("#extend")].filter(Boolean));
 if(active)
 focus(this.querySelector(qualify(active)));
 let composer=this.closest("#composer");
 let picture=method==="send"&&author?.icon;
 let node=picture&&await buffer(compose(fetch,digest,whether(is(Blob),compose(image,canvas),infer())),swap({role:"img"}))(picture);
 let [next]=node?.nodeType?[node]:await compose(document,spill,lift)(node?{canvas:node}:{svg:{...search.call(svg.object,icon.split("/"))}});
 let toggle=await compose(tether(document),spill,lift,drop(1,2))
 (composer,{span:{id:"toggle",sort:0,style:{"@scope":{"#toggle:scope":
 {height:"4em",width:"4em",cursor:"pointer",position:"relative",padding:".5em"
 ,"&>svg,&>canvas,&>img":{width:"100%",height:"100%",fill:"var(--isle)","clip-path":"circle(50%)","background-color":"black"}
 ,"& path":{erase:{transform:"rotate(45deg)","transform-origin":"center center"}}[method]
 ,"&>.actions":
 {position:"absolute",top:0,left:0,width:"100%",height:"100%","pointer-events":"none"
 ,"&>svg":{position:"absolute",top:"50%",left:"50%",width:"1.5em",height:"1.5em","pointer-events":"auto"}
 }
 ,"&>span#signal":{color:"black","text-shadow":layout.text.outline}
 }}}}});
 let past=toggle.firstChild.nextSibling;
 toggle[(past?"replace":"append")+"Child"](next,past);
 let room=path(this.ownerDocument.defaultView.location.href)
 this.classList.remove("toggling");
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
 let composer=this.closest("#composer")||this;
 let frame=this?.ownerDocument.defaultView.frame||
 compose(document,spill,lift,infer(insert,"before",composer),cede)({div:{id:"frame"}});
 frame.dataset.source=route;
 frame.controller?.abort("Rendering canceled.");
 frame.controller=new AbortController();
 compose(document,spill,lift,infer(insert,"under",frame))(progress);
 resource=resource||buffer(compose(fetch,digest),()=>fetch(route,{method:"put",body:""}).then(()=>""))(route+query);
 let clear=compose(swap(form({get:{source:""}})),document.bind(this),spill,crop(1));
 buffer(produce(profile,["get"],record,form,pass(clear),document.bind(this),spill.bind(frame.controller)),note)(resource);
 let [module,feature]=await locate.call(import.meta.url,"./"+fields.fragment);
 let fail=compose(crop(1),note.bind(1),"stack",note,document);
 let fragment=await buffer(command.bind(import.meta.url),fail)(module,feature,resource,{source:route,...fields},fields.incumbent||this.ownerDocument.defaultView);
 return compose
(document.bind(frame),spill.bind(frame.controller)
,buffer(lift,compose(fail,document.bind(frame),spill,lift))
,pass(compose("firstChild","remove"))
,"firstChild"
)(fragment);
},async put(fields)
{let form=this;
 let {method}=demarkup(form,"method");
 let {name}=fields;
 let action="/author/"+name;
 let request={method,body:JSON.stringify(fields),headers:{"Content-Type":"application/json"}};
 let [status,message]=await compose(fetch,combine("status","text"),lift)(action,request);
 if(status!==200)
 return toggle.call(form,"send")
,form.dispatchEvent(new MessageEvent("message",{data:{action:"message",message},bubbles:true}));
 let author=JSON.parse(message);
 localStorage.setItem("author",JSON.stringify(author));
 let window=form.ownerDocument.defaultView;
 await socket(window.location.origin,window);
 let room=path(window.location.href);
 form.dispatchEvent(new MessageEvent("message",{data:{action:"join",room},bubbles:true}));
 fill.call(form,{name:"",code:"",message:""});
 toggle.call(form,"send");
},erase()
{let {method}=demarkup(this,"method");
 let active=this.ownerDocument.activeElement;
 let input=[this.contains(active)?active
:Array.from(this.querySelectorAll("span[role=textbox]:not([name=source])")).filter(({textContent:text})=>!text)].flat();
 input.forEach(input=>demarkup(input,"role").role!=="textbox"||input.textContent
?console.error("erasure called on non-empty field:",input)
:input.parentNode.remove());
 toggle.call(this,"get");
},send({message})
{if(!message)return;
 let {href}=this.ownerDocument.defaultView.location;
 let room=path(href);
 this.dispatchEvent(new MessageEvent("message",{data:{action:"message",room,message,put:Date.now()},bubbles:true}));
 fill.call(this,{message:""});
 toggle.call(this,"send");
}};

 export async function profile(resource)
{let source=basic(resource)?resource:"";
 let fragment={fragment:"",script:"",chart:"",network:"",extrude:"",map:"",canvas:""};
 return {source,fragment};
 fragment=await compose(Object.keys,rank,each(compose(crop(1),stash(compose
(locate,crop(1),infer("concat","/module/namespace"),fetch,digest
,({default:fragment,...exports})=>prune.call(exports,({1:value})=>
 string(value)&&value.startsWith("data:text/javascript;")?value:undefined,0,0),Object.keys
)),(name,fragments)=>({[name]:fragments})
)),collect,infer("reduce",merge))(fragment);
};

 export var relay=
 {check(event,peer){peer.connected=true;}
 ,broadcast(event,peer)
{let message=JSON.stringify(event);
 this.clients.forEach(client=>
 client.readyState===1&&client!==peer&&client.room===event.room&&
 client.send(message));
},update({scope,command,context},peer)
{relay.broadcast.call(this,{action:"update",scope,command,context,room:peer.room},peer);
},message({message,room,put},peer)
{let event={action:"message",author:peer.author,message,room,put};
 this.rooms[room].messages.push({message,author:peer.author,put});
 relay.broadcast.call(this,event);
},join({room},peer)
{this.rooms[room]=this.rooms[room]||{messages:[]};
 let {author}=merge(peer,{room},0);
 let event={action:"message",message:author.name+" joined.",room};
 relay.broadcast.call(this,event);
 let {messages}=this.rooms[room];
 if(messages.length)
 peer?.send(JSON.stringify({action:"history",messages}));
 return this.rooms[room];
},signal({room},peer)
{let event={action:"signal",author:peer.author,room};
 relay.broadcast.call(this,event);
},save:async function({room,content,updates,version},peer)
{peer.room=this.rooms[room]||relay.join.call(this,...arguments);
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
 message=this.author+" edited "+room;
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
