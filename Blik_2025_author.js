 import {resolve,locate,fetch,digest,cookie,cookies,query,path,socket} from "./Blik_2023_interface.js";
 import {unfold,extract} from "./Blik_2023_search.js";
 import {note,debug,search,merge,prune,route,record,stagger,spill,model,lift,expect,compose,combine,compound,string,either,pass,trace,drop,crop,slip,flip,infer,tether,whether,modular,wait,trickle,observe,buffer,swap,when,array,has,each,differ,rank,collect,is,match,basic,defined,stash} from "./Blik_2023_inference.js";
 import * as fragment from "./Blik_2023_fragment.js";
 import {document,form,image,canvas,message,demarkup,insert,navigate,metamarkup,detransform,stretch,vectorspace,error,drillresize,deselect,namespaces,keyboard,spell,expand,parse,semiotics,destroy,reference,fill,annotate,qualify,cursor,capture} from "./Blik_2023_fragment.js";
 import * as layout from "./Blik_2023_layout.js";
 var address=new URL(import.meta.url).pathname;
 var file=address.replace(/.*\//,"/");

 export default async function* author({source,name,icon,info,address},expand)
{if(this&&!modular(this)||arguments[0].constructor?.name==="IncomingMessage")
 return yield {imports:
 {"/Blik_2023_interface.js":["","agent","resolve","locate","digest","cookie","cookies","query","path","socket"]
 ,"/Blik_2023_search.js":["","unfold","extract"]
 ,"/Blik_2023_inference.js":";control;note;stagger;expect;spill;generator;asyncgenerator;compose;combine;pass;trace;drop;crop;slip;infer;tether;whether;wait;observe;buffer;swap;when;array;has;each;differ;rank;collect;is;match;basic;defined;merge;prune;route;record;search".split(";")
 ,"/Blik_2023_fragment.js":";* as fragment;document;descend;form;image;canvas;link;message;demarkup;insert;navigate;metamarkup;detransform;stretch;vectorspace;error;drillresize;deselect;namespaces;keyboard;spell;expand;parse;semiotics;destroy;reference;fill;annotate;qualify;cursor;capture".split(";")
 ,"/Blik_2023_layout.js":["* as layout"]
 ,[file]:["author","syndicate","pub","comments"]
 }
 ,exports:{default:
 {"[data-source]":
 {async click(event)
{if(event.target.closest(".article"))return;
 let [title]=descend.call(this,".author",0);
 let description=title.firstChild.nextSibling;
 if(title.nextSibling)
 return destroy(title.nextSibling),merge(description,{style:"display:none"});
 buffer(spell)(description);
 let source=this.dataset.source;
 await compose
(buffer(compose(fetch,"json"),fail=>({fail})),{name:title.textContent}
,merge,source,pub,rank,each(document.bind(this)),spill,lift
)(source);
}}
 ,".title":
 {async click(event)
{let author=this.closest(".feed");
 let [{textContent:name}]=descend.call(author,".author",0);
 let expanded=this.nextSibling;
 let multiple=Array.from(author.querySelectorAll(".title")).filter(node=>
 node!==this).some(node=>node.nextSibling);
 author.style.setProperty("max-width",!expanded||multiple?"calc(100% - 2em)":"revert");
 if(expanded)
 return this.controller?.abort("Rendering cancelled"),[this,"nextSibling"].reduce(function trim(node,next){destroy(node[next])&&trim(...arguments);});
 let {source}=author.dataset;
 let article=await compose(buffer(compose(fetch,"json"),fail=>({fail})),source,syndicate,"pub",this.dataset.source)(source);
 compose(tether(document),spill)(this.parentNode,{span:
 {class:"content",span:
 {class:"progress"
 ,style:"display:inline-block;white-space:nowrap;overflow:hidden;font-family:monospace;animation:dotdot 3s infinite normal;"
 ,"#text":"..."
 }
 }});
 let content=defined(article?.content)
?[this.ownerDocument.createRange().createContextualFragment(article.content),/#.*$/].reduce((fragment,hash)=>
 Array.from(fragment.querySelectorAll("a")).map(link=>[link,link.getAttribute("href")]).forEach(([link,href])=>
 hash.test(href)&&link.setAttribute("href",href.replace(/[^#]*/,"")))||fragment)
:await compose(fetch,whether
(compose("headers","Content-Type","get",is("text/html"))
,compose("text",text=>this.ownerDocument.createRange().createContextualFragment(text))
,compose("text",semiotics,parse)
))(["",this.parentNode.dataset.source].join("/"));
 this.controller=new AbortController();
 await compose(tether(document),spill.bind(this.controller),lift)(this.parentNode.querySelector(".content"),content);
 spill(document.call(this.parentNode.querySelector(".content"),{span:{class:"progress",drop:true}}));
 spill(document.call(this.parentNode,{span:await comments(this.parentNode.dataset.source)}));
 //article.media&&link(article?.media,"");
 //,article.link&&link(article.link,this.parentNode.querySelector("span").textContent);
}}
 }}};
 source=source||["","author",name].join("/");
 let span=
 {span:
 {class:"feed",id:source.replace(/\W/g,'_')
 ,dataset:{source}
 ,style:
 {"@keyframes flash":
 {"0%":{"box-shadow":"black 0 0 10px"}
 ,"33%":{"box-shadow":"var(--text) 0 0 10px"}
 ,"66%":{"box-shadow":"black 0 0 20px"}
 ,"100%":{"box-shadow":"revert-layer"}
 }
 ,"@scope":{":scope":
 {...prune.call(layout.material,([field,value])=>
 field==="&:hover"?{...value,animation:"flash .5s ease-in"}:value)
 ,display:"inline-block",overflow:"hidden","vertical-align":"middle"
 ,"max-width":"20em",transition:".3s",background:"var(--platform)","border-radius":"1.5em"
 ,position:"relative"
 ,"&>.author":
 {display:"block",cursor:"pointer",padding:"0.5em","text-align":"center"
 ,"&>span":
 {"white-space":"pre-wrap",color:"var(--note)"
 ,"&:first-of-type":{color:"var(--text)","&:hover":layout.text.glow,"&+span":{display:"block","text-align":"left"}}
 }
 ,"& canvas":{width:"2em",height:"2em","border-radius":"1em","vertical-align":"middle","&+span:before":{content:"' '"}}
 ,"& span[role=link]":{display:"block","text-align":"right",color:"var(--note)","font-style":"italic","&:hover":layout.text.glow,"&:before":{content:"' - '"}}
 }
 }}
 }
 ,span:
 {class:"author"
 ,span:
[{canvas:icon&&await buffer(compose(image,canvas),undefine)(icon)
 ,span:{"#text":name?.replace(/&amp;/g,match=>({"&amp;":"&"}[match]))}
 }
,info&&
 {class:"spell"
 ,style:"display:none"
 ,"#text":info
 ,link:address&&fragment.link.call(null,address)
 }
]}
 }
 };
 yield capture.call(span,[file,"module","default","module"].join("/"));
 let align=infer("map",compose(lift,infer(record,["span"]),{span:{class:"feed"}},merge));
 let articles=expand?compose(pub,align)(arguments[0],source):undefined;
 let authors=Object.entries(arguments[0].sub||[]).map(compose
(rank,combine
(compose(combine(buffer(compose(crop(1),fetch,"json"),fail=>({fail})),drop(1)),lift,0,merge)
,crop(1)
),lift,syndicate,infer(author,0)
,{"@scope":{":scope":{display:"block"}}}
,(author,style)=>({span:{class:"sub",style,...author}})
,cede()
));
 yield* await compose(articles,authors,collect,"flat",trickle)();
};

 export var syndicate=compose
(when(compound,string),stash(either("items","posts","data",drop()))
,({feed,...author},source,pub)=>(
 {source,...pub
?{name:author?.name||feed?.author||feed?.title
 ,icon:author?.icon||feed?.image
 ,info:author.info||feed?.description
 ,address:feed?.link
 ,pub:Object.fromEntries(pub.map(pub=>
[pub.title||pub.message
,{name:pub.author
 ,avatar:author?.icon||pub.avatar||pub.author?.avatar_URL||feed.feed?.image
 ,put:either("createdTime","pubDate","created_time","date",swap(0))(pub)||pub.common?.put
 ,id:pub.id||pub.site_ID||pub.source
 ,content:pub.content
 ,media:pub.enclosure&&pub.enclosure.link
 }
]))
 }
:{icon:author.icon
 ,pub:Object.fromEntries(Object.entries(author.pub||[]).map(([title,pub])=>
[title
,{...pub
 ,name:title.substring(0,title.search(/_\d\d/)).replace("_"," & ")
 ,put:pub.put||title?.substring(title.search(/_\d\d/)+1,title?.search(/\d\d_/)+2).split("").map((digit,index,date)=>
{if([3,6].includes(index))date.splice(index+1,0,"-");
 return digit;
}).join("")
 ,title:title.substring(title.search(/\d\d_/)+3).replace(/\.txt/g,"").replace(/_/g," ")
 }
]))
 }
 })
);

 export var pub=compose
(syndicate,compose
(combine
(compose("pub",Object.entries,infer("sort",({1:{put:past}},{1:{put:next}})=>
 [next,past].map(time=>new Date(clock(time,"datetime")).getTime()).reduce((next,past)=>
 next-past)))
,compose(slip(compose
(([source,article],author)=>({author,source,...article}) 
,buffer(article,fail=>({"#text":fail.message}))
)),infer)
),lift,"map"
),infer("map",compose(lift,infer(record,["span"]),{span:{class:"pub"}},merge))
);

 async function article({source,title=source,put,author})
{let span=
 {class:"article",id:title.replace(/\W/g,"_")
 ,dataset:{source}
 ,style:{"@scope":
 {":scope":
 {display:"block","white-space":"pre-wrap"
 ,padding:"0.5em",position:"relative","z-index":2
 }
 }}
 ,span:
 {class:"title"
 ,style:{"@scope":{":scope":
 {color:"#b71c1c",cursor:"pointer"
 ,"&>canvas":{"border-radius":"50%",height:"1em",width:"1em","vertical-align":"bottom"}
 ,"&>span":{color:"var(--text)",display:"block"}
 ,"&:hover>span":layout.text.glow
 ,"&+span":{"text-align":"left","&>img":{"max-width":"100%",height:"auto"},"&>audio":layout.audio}
 }}}
 ,canvas:await buffer(compose(image,canvas),undefine)(author.icon)
 ,"#text":" "+(put?clock(put,"date"):title)
 ,span:{"#text":title+"\n"}
 }
 };
 return {span};
};

 async function comment({put,name,comment},index,comments)
{if(this&&!modular(this)||arguments[0].constructor?.name==="IncomingMessage")
 return {imports:
 {"/Blik_2023_interface.js":["","resolve","locate","digest","cookie","cookies","query","path","socket"]
 ,"/Blik_2023_search.js":["","merge","unfold","search","prune","extract","route","record"]
 ,"/Blik_2023_inference.js":";note;expect;compose;combine;pass;trace;drop;crop;slip;infer;tether;whether;wait;observe;buffer;swap;when;array;has;each;differ;rank;collect;is;match;basic;defined".split(";")
 ,"/Blik_2023_fragment.js":";* as fragment;document;descend;form;image;canvas;link;message;demarkup;insert;navigate;metamarkup;detransform;stretch;vectorspace;error;drillresize;deselect;namespaces;keyboard;spell;expand;parse;semiotics;destroy;reference;fill;annotate;qualify;cursor;capture".split(";")
 ,"/Blik_2023_layout.js":["* as layout"]
 ,[file]:["author","syndicate","pub"]
 }
 ,exports:
 {".comment":
 {keydown({target,keyCode:code,ctrlKey})
{let {enter}=keyboard(code);
 if(!enter)
 return;
 if(target.getAttribute("name")==="name")
 return arguments[0].preventDefault();
 if(ctrlKey)
 this.querySelector("[role=button]").dispatchEvent(new Event("click",{bubbles:true}));
},async click({target})
{if(!target.closest("[role=button]"))
 return;
 let fields=fill.call(this);
 let empty=Object.keys(fields).find(field=>!fields[field]);
 if(empty)
 return ["warn 1s","unset"].forEach((animation,index)=>
 compose(wait(1000*index),Object.assign)(this.querySelector("span[title="+empty+"]").style,{animation}));
 let source=this.closest(".comments").parentNode.querySelector(".article").getAttribute("source");
 let comments=target.closest(".comments").querySelector(".history");
 let text={put:note(Date.now()),...fields};
 let body=JSON.stringify({[source]:[text]});
 let {status}=await fetch("/Blik_2024_comments.json",{method:"put",body});
 if(status!==200)
 return ["warn 1s","unset"].forEach((animation,index)=>
 compose(wait(1000*index),Object.assign)(target.closest(".comment").style,{animation}));
 await message(text,comments.childNodes.length,comments);
 fill.call(this,{comment:""});
 if(cookie("author")===fields.name)
 return;
 this.ownerDocument.cookie=cookie({author:fields.name,path:"/"});
 let rank=await fetch("/author/"+fields.name+"/rank");
 let expires=rank.status===200?undefined:new Date().toUTCString();
 this.ownerDocument.cookie=cookie({rank:await rank.text(),path:"/",expires});
}}
 ,".message>span:first-of-type":
 {...observe({hover({isTrusted:hover,target})
{if(this!==target)return;
 if(!hover)
 return [target.firstChild.nextSibling].forEach(function remove(node){node&&remove(node.nextSibling),node?.remove();});
 let name=this.closest(".message").querySelector(".name").textContent;
 if(name!==cookie("author")&&cookie("rank")!=="ranger")
 return;
 let actions=document({span:{class:"actions",style:"width:0",svg:
 {role:"button",viewBox:"0 0 448 512"
 ,...svg.effect.shadow_amber
 ,path:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}
 }}});
 this.firstChild.after(actions);
 actions.style.width="auto";
}})
 //,touchstart(event){event.preventDefault();}
 }
 ,".message svg[role=button]":
 {async click()
{let source=this.closest(".comments").parentNode.querySelector(".article").getAttribute("source");
 let message=this.closest(".message");
 let {index}=message.dataset;
 let body=JSON.stringify({[source]:{[index]:null}});
 let comments=await fetch("/Blik_2024_comments.json?override=true",{method:"put",body});
 if(comments.status!==200)return;
 let style=message.querySelector("style");
 if(style)
 (message.nextSibling||message.previousSibling)?.append(style);
 [message.previousSibling].forEach(function decrement(node){if(!node)return;decrement(node.previousSibling);node.dataset.index-=1;});
 message.remove();
}}
 }};
 return compose
(fetch,buffer("json",swap({name})),{comment},merge
,async({name,icon,comment,put})=>insert(document({span:
 {class:"comment",...await message({icon,name,put,message:comment},index)
 }}),comments.firstChild?"before":"under",comments.firstChild||comments)
)("/author/"+name);
};

 export function comments(source)
{let icon=compose(image,canvas)("/svg/object/paperplane/tilt/document");
 let messages=compose
(fetch,either("json",swap([])),rank,each(message)
,collect,["span","span"],record
,{span:{class:"history"}},merge
)("/Blik_2024_comments.json/module/namespace/default/"+source);
 let span=
 {class:"comments"
 ,span:[merge
(form({name:cookie("author")||"",comment:""})
,{class:"comment"
 ,style:
[{"@scope":{":scope":
 {"&>span[title]":
 {display:"table-cell","align-content":"center","min-height":"2.5em"
 ,"&[id=name]":{"margin-right":0,"border-radius":"2.1em 0 0 2.1em","padding":"0 .5em"}
 ,"&[id=comment]":
 {"max-width":"100%","word-break":"break-all"
 ,"&>span:first-of-type":{display:"none"}
 ,"&>span[role=textbox]":{"min-width":0,"text-align":"left","white-space":"pre"}
 }
 }
 ,"&>span[role=button]":
 {"border-radius":"0 2.1em 2.1em 0","margin-left":0,padding:".5em","vertical-align":"middle",overflow:"hidden",cursor:"pointer"
 ,"&>canvas":{width:"1.2em",height:"1.2em","vertical-align":"middle"}
 }
 ,"&:hover>span[id=comment]>span[role=textbox]":{"min-width":"5em"}
 }}
 }
],span:[{role:"button",icon}]
 },0)
,messages]
 ,style:
 {"@scope":{":scope":
 {display:"inline-block"
 ,"&>span.history":{display:"table-cell","border-spacing":"0 1em","text-align":"left"}
 ,"&>span.comment":
 {...layout.material,display:"inline-block","border-radius":"2.1em"
 }
 ,"@keyframes warn":{from:{"box-shadow":"#880e4f 0px 0px 5px inset"},to:{"box-shadow":"revert"}}
 }}}
 };
 return capture.call(span,[file,"module",comments.name,"module"].join("/"));
};