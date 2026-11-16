 import {string} from "./Blik_2026_type.js";
 import {merge,prune,numeric,functor,compound,note,defined,simple,exit,abort} from "./Blik_2023_inference.js";
 import {qualify,window,document,css} from "./Blik_2023_fragment.js";
 import {select,selectAll} from './Bostock_2011_d3_select.js';
 import * as d3 from './Bostock_2011_d3.js';

// Data-Driven Document Declarations (D4).

 export default function extend({fold=value=>[value],match,drop=true,update=false,...fragment},name)
{// extend bound nodes (and subselections qualified by fragment class/id attributes)
 // with declared nodes/attributes/events/operations (fragment).
 // (d3's fluent interface of select/datum/selectAll/data/append/attr/etc as a declarative reduction). 
 // Nodes are unfolded to "match" identities in a "fold" (inherited and indexed by default). 
 // To update existing nodes, specify {fold: false} or {update: true or a function returning them}. 
 // To preserve unmatched nodes, consume them in a "drop" function. 
 // To spawn extension of an empty selection, specify "name". 
 // eg: ul:{datum:1,li:{fold:n=>[n,n,n],update:true,text:n=>n}} = 1 ul, 3 li text, updated on each call.
 if(!this)
 return extend.call(compose.call({span:{style:"display:inline-block"}},document,spill,lift,crop(1),cede),...arguments);
 const [cast]=[[select,window.Node],[selectAll,window.NodeList]].find(({1:selectable})=>this instanceof selectable)||[];
 let selection=cast?.(this)||this;
 if(name)
 selection=[selection,selection.selectChildren(qualify({[name]:fragment}))].reduce((selection,children)=>
 children.size()||fold?children:selection.append(name));
 const nodes=selection.nodes();
 const values=selection.data();
 const precedent=selection.node()?.nodeName.toLowerCase();
 if(fold)
 if(!name&&!precedent)throw "can't append nodes without a name or precedent.";
 else
 selection=selection.data(fold,match).call(selection=>//.join(enter=>extend.call(enter.append(name||target),fragment));
 // "extension" only applies to new nodes by default, which the implicit "merge" of the common "join" doesn't distinguish. 
 // this recursion to bypass it is tail-call optimized instead. 
 selection.exit().call(selection=>selection.size()&&drop&&(drop===true?selection:drop(selection))?.remove())),
 selection=selection.enter().append(name||precedent).merge(selection.size()
?(update
?update===true
?//console.info('updating',selection.nodes(),'with',selection.data())|| // track updates
 selection
:update?.(selection)
 // d3 is only meant to persist matched values if update is specified.
:!selection.datum(function restore(){return values[nodes.indexOf(this)];}))||
 select(null)
:selection);
 if(selection.size())
 Object.entries(fragment).reduce((selection,entry)=>
 Object.values(extension).reduce((applied,extension)=>
 applied||extension.apply(selection,entry),undefined)||
 abort(exit("extension entry doesn't satisfy "+Object.keys(extension).join('/')+' namespaces: '+entry)),selection);
 return this;
}

 const extension=
{event(field,value)
{if(events.includes(field)&&functor(value))
 return this.on(field,value);
},style(field,value)
{if(field!=='style')
 return;
 if(string(value))
 return this.attr(field,value);
 if(functor(value))
 return this.each(function(){extension.style.call(select(this),field,value.call(this,...arguments));});
 if(!value)
 return this;
 if(Object.values(value).some(simple))
 return this.append(field).text(css(value)),this;
 return Object.entries(value).reduce((selection,entry)=>selection[field](...entry),this);
},operation(field,value)
{// specify operations to include in case of namespace collision with fragments/attributes.
 //const operations=['data','datum','each','call','attrs','text','classed','sort','transition'] as const;
 const fragment=Object.entries({text:['object'],filter:['object','string']}).some(([name,types])=>
 field===name&&types.includes(typeof value));
 if(fragment)
 return;
 if(!defined(value))
 return this;
 const [scope,operation]=field==='transition'?[this[field](),'duration']:[this,field];
 return scope[operation]?.(...(field==='classed'?[value,true]:[value].filter(defined)));
},fragment(field,value)
{const compoundattributes=['viewBox','transform','class'];
 if(compound(value)&&!compoundattributes.includes(field))
 return [value].flat().filter(Boolean).reduce((selection,fragment)=>
 extend.call(selection,fragment,field)
,this);
},attribute(field,value)
{try
{return this.attr(field,value);
}catch(fail){console.log(fail);}
}};

 var events=['load','click','change','input'];
 var mouseevents=['enter','leave','over','out','down','up','move'].map(event=>'mouse'+event);
 var pointerevents=['enter','leave','over','out','down','up','move'].map(event=>'pointer'+event);
 var focusevents=['','in','out'].map(event=>'focus'+event);
 events.push(...mouseevents,...pointerevents,...focusevents);

 export function jss(style)
{return Object.fromEntries(Object.entries(style).map(([field,value])=>
[field.replace(/-(.)/g,(match,lowerCase)=>lowerCase.toUpperCase())
,value
]));
};
