 import {defined, compose, rank, expect, observe, infer, either, tether, swap, crop, not, note, slip, wait, buffer, control, drop, each, string, functor,pass, compound, array, is, has, revert, exit, whether, collect, combine,extract,search, merge, prune,record} from "./Blik_2023_inference.js";
 import {calendar, date, nearest, normalize, quadrate, round, time} from './Blik_2023_search.js';
 import {window,document, qualify, demarkup, snap, namespaces, ascend} from './Blik_2023_fragment.js';
 import {mime,records,url} from './Blik_2023_meta.js';
 import {fetch, command, delegate, query} from "./Blik_2023_interface.js";
 import * as d3 from './Bostock_2011_d3.js';
 import {select} from './Bostock_2011_d3_select.js';
 import * as geo from './Bostock_2016_geo.js';
 import {tile, tileWrap} from './Bostock_2016_tiles.js';
 import extend from './Blik_2023_d4.js';
 import {color} from "./Blik_2023_layout.js";
 let {default:{webp}}=await command.call(import.meta.url,"./Blik_2025_base64.json");
 let browser = globalThis.window;
 let address = globalThis.origin || globalThis.process.cwd();
 let curve = d3.line().curve(d3.curveLinear);
 //Cardinal.tension(0.5));

 // https://observablehq.com/@toja/aspect-ratio-vs-space-efficency-of-map-projecions 
 let ratios={Mercator:1,Equirectangular:2};

 export default async function()
{let focus=await revert((done,fail,{geolocation:geo})=>geo.getCurrentPosition
(compose("coords",combine("latitude","longitude"),lift,collect,done)
,fail=>[0,0]
))(window.navigator);
 return extend.bind(is(window.Node)(this)?this:undefined)({fold:[{sources,focus,depth:[2**3.9,2**15],rescale:2**12}],update:true,svg:map});
};

 let sources=
 {satellite:{source:"mapbox"}
 ,focus:
 {transform(address)
{return prune.call(address,([field,value])=>field==="features"?value.slice(0,1):value,1);
}}
 };

 export var {viewBox,dimensions,filter,...svg}=
 {viewBox({center=[0, 0], size}) {
    size = size || Object.values(extract.call(this.getBoundingClientRect?.(), ["width", "height"])) || [1024, 768];
    var corner = center.map( (axis, index) => axis - size[index] / 2);
    return [corner, size].flat().join(' ');
  }
 ,dimensions: Object.fromEntries(['x', 'y', 'width', 'height'].map( (field, index) => [field, function({center=[0, 0], size}) {
    let[width,height] = size || Object.values(demarkup(this, ["width", "height"])) || [1024, 768];
    return quadrate(center, width, width / height).reduce( (start, end) => index > 1 ? end[index % 2] - start[index % 2] : start[index % 2]);
  }
  ]))
 ,unit:
 {path:
 {
      '+': ['M', 0, -1, 'L', 0, 1, 'M', -1, 0, 'L', 1, 0],
      '-': ['M', -1, 0, 'L', 1, 0],
      frame: [-0.8, 0.8].flatMap( (y) => [-1, 1].flatMap( (x) => [[0.3, 0.85], [0, 0.4]].flatMap( ([dash,radius]) => ['M', dash * x, radius * y, 'L', radius * x, radius * y, radius * x, dash * y]))),
      expand: [-1, 1].flatMap( (x) => [-1, 1].flatMap( (y) => ['M', 0.2 * x, 0.2 * y, 'L', 0.85 * x, 0.85 * y, 0.4 * x, 0.7 * y, 0.7 * x, 0.4 * y, 0.85 * x, 0.85 * y, 'z'])).concat('z'),
      shrink: [-1, 1].flatMap( (x) => [-1, 1].flatMap( (y) => ['M', 0.85 * x, 0.85 * y, 'L', 0.15 * x, 0.15 * y, 0.7 * x, 0.4 * y, 0.4 * x, 0.7 * y, 0.15 * x, 0.15 * y, 'z'])).concat('z')
 }
 ,circle:
 {viewBox: [0, 0, 1, 1].join(''),
      circle: {
        cx: 0.5,
        cy: 0.5,
        r: 0.3,
        fill: 'none',
        stroke: 'grey',
        'stroke-width': 0.1,
        'stroke-dasharray': '10.3'
      },
      path: {
        d: 'M 0.35 0.5 L 0.65 0.5 0.5 0.7 z',
        fill: 'grey',
        'transform-origin': '0.5 0.5',
        transform: 'rotate(-20) translate(0, -0.3) rotate(90)'
      }
 }
 }
 ,filter:
 {goo:
 {id: "goo",
      feGaussianBlur: {
        result: 'blur',
        in: 'SourceGraphic',
        stdDeviation: '0.5',
        'color-interpolation-filters': 'sRGB'
      },
      feColorMatrix: {
        result: 'goo',
        in: 'blur',
        class: 'blurValues',
        mode: 'matrix',
        values: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5'
      },
      feComposite: {
        in: 'SourceGraphic',
        in2: 'goo',
        operator: 'atop'
      }
 }
 ,glow:
 {id: "glow"
 ,feColorMatrix: {
        type: "matrix",
        values: "0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0",
        in: "SourceGraphic",
        result: "white"
      },
      feGaussianBlur: {
        in: "white",
        stdDeviation: "0.00025",
        edgeMode: "none",
        result: "halo"
      },
      feComposite: [{
        id: "composite1",
        in: "SourceAlpha",
        in2: "SourceAlpha",
        operator: "arithmetic",
        result: "copy",
        height: "100%",
        k2: "3"
      }, {
        id: "composite2",
        in: "halo",
        in2: "copy",
        operator: "out",
        result: "glow"
      }],
      feMerge: {
        feMergeNode: [{
          id: "glow1",
          in: "glow"
        }, {
          id: "glow2",
          in: "SourceGraphic"
        }]
      }
 }
 ,shade:
 {id: "shade"
 ,feDropShadow:{dx:0,dy:0,stdDeviation:"0.3","flood-color":"white"}
 ,feComposite: {operator:"out",in2:"SourceGraphic"}
 }
 ,contour:
 {id: "contour"
 ,feMorphology: [{
        id: 'grow',
        operator: 'dilate',
        radius: '0.75',
        result: 'grow'
      }, {
        id: 'shrink',
        in: 'SourceGraphic',
        operator: 'erode',
        radius: '0.75',
        result: 'shrink'
      }],
      feFlood: {
        'flood-color': '#004ae4',
        'flood-opacity': '1',
        result: 'color'
      }
 ,feComposite:
[{id:'plane',operator: 'in',in: 'color',in2: 'grow',result: 'plane'}
,{id: 'mask',operator: 'over',in: 'shrink',in2: 'plane'}
]}
 }
 ,gradient(orientation)
{return orientation === "vertical"
?{x1: '0%',y1: '0%',x2: '0%',y2: '100%'}
:{x1: '0%',y1: '0%',x2: '100%',y2: '0%'};
},stop:
 {offset:({1:value},index,{length})=>(value??(index/(length-1))*100)+"%"
 ,style:{'stop-color':({0:color})=>color}
 }
 };

 export var map=
 {class:"map"
 ,fold({sources,center=[0,0],depth=[1,1000],focus,rescale,projection},index)
{let framed=browser&&this?.ownerDocument.contains(this);
 let {width,height}=framed&&this.getBoundingClientRect?.()||{width:1500,height:1500};
 projection=projection?Object.values(projection)[0]:"Mercator";
 let ratio=ratios[projection]||1;
 let project=geo['geo'+projection]().scale(width/Math.PI/2).center(center).translate(center);
 focus=focus?project(focus):center,depth=
[[depth[0],height/width/ratio,1],[depth[1],1000]
].map(depth=>Math.max(...depth));
 let scale=Math.max(depth[0]/2,1);
 // for some reason extent needs be proportional to the view bounds beyond the ratio, to accomodate the limit constraints. 
 let extent=quadrate(center, width, width / height);
 let limits=quadrate(focus, width / scale, ratio);
 if (height<width)
 // depth fits vertical limits, so shrink them to half when width is larger. 
 [rescale,...depth]=[rescale,...depth].map(depth=>depth/2||undefined);
 let zoom=d3.zoom().extent(extent).translateExtent(limits).scaleExtent(depth).on('zoom',pan);
 let {size:past}=select(this).selectAll(".map")[index]?.datum()||{};
 let resize=[width,height].some((size,index)=>past?.[index]!==size);
 return [{sources,center,depth,size:[width,height],focus,rescale,resize,ratio,project,zoom}];
},update:true
 ,viewBox
 ,style:{width:'100%',height: '100%'}
 ,call:map=>map.call(map.datum().zoom)
 ,g:
[{class:"layers"
 ,update:true
 ,each({sources,center,depth:[scale],ratio,project,resize,focus,rescale,zoom})
{let reset=focus||rescale;
 if(!this.getAttribute("transform")&&reset)
 pan.call(this.parentNode
,{transform:[transform(this),rescale||scale].reduce(({x,y,k},scale)=> 
 new d3.ZoomTransform(scale=Math.max(k,scale),...focus?.map(axis=>
 -axis*scale)||[x,y]))
 });
 let assets=Object.entries(sources).flatMap(([field,value])=>
 [value,...Object.values(value.metadata||{})].map(value=>[field,value]));
 let report=pass(compose(slip("Loading "),"...",note.bind(3)));
 let pending=assets.filter(({1:{data,source}})=>
 !data&&string(source)&&!client[source]).map(({1:value})=>
 value.data=record(compose("source",report,acquire.bind({}),value.transform),"data")(value));
 if(pending.length)
 compose.call(pending,rank,collect,drop(),lift,extend.bind(this.parentNode
,{fold:false,g:map.g}));
 let tiles=assets.filter(({1:{source}})=>functor(source)||client[source]).map(pave.bind(this));
 if(!tiles.length)
 return;
//  buffer.call(tiles
// ,compose(rank,tiles=> 
//  extend.call(this.ownerDocument.querySelector(".icon")
// ,{fold:false,transform:null,g:{fold:false,transform:null}}))
// ,compose("message",note.bind(3)));
//  extend.call(this.ownerDocument.querySelector(".icon")
// ,{fold:false,transform:"scale(1.5)","transform-origin":"50%"
//  ,g:{fold:false,transform:"scale(0.5)","transform-origin":"50%",style:{transition:"all 1s"}}
//  });
},g:
[{class: "raster layer"
 ,fold({sources})
{return Object.entries(sources).filter(({1:{data}})=>
 [data].flat().filter(Boolean).some(({source})=>string(source)));
},match(entry){return entry?.[0]||this?.getAttribute("id");}
 ,update:true,drop:false
 ,id(){return raster.match.call(this,...arguments);}
 ,image:
 {class:"raster"
 ,fold:entry=>Object.values(entry[1].data||{}).filter(tile => tile?.data)
 ,match(value){return value?.tile.join("_") || this?.getAttribute("id");}
 ,drop: false
 ,id() {return raster.image.match.call(this, ...arguments);}
 //,load(){URL.revokeObjectURL(this.href.baseVal||this.href);}
 ,href:({data})=>data,opacity: 0
 ,x: ({tile: {0: axis}, translate: {0: translate}, size}) => (axis + translate) * size
 ,y:({tile: {1: axis}, translate: {1: translate}, size})=>(axis+translate) * size 
 //,dx:({size})=>size*-0.001,dy:({size})=>size*-0.001
 ,width:({size})=>size,height:({size})=>size
 ,transition:500,style:{opacity:1}
 }
 }
,{class:'vector layer'
 ,fold:({sources})=>Object.entries(sources).filter(({1:{data}})=>
 [data].flat().some(feature=>feature?.features||feature?.geometry))
 ,match(entry)
{return entry?[entry[0]].flat().join("/"):this.getAttribute("id");
},update:true,drop:false
 ,id(){return vector.match.call(this, ...arguments);}
 ,path:
 {class:"area"
 ,fold:entry=>[entry?.[1].data||[]].flat().flatMap(feature=>
 feature.features||[feature]).filter(({geometry})=>
 geometry&&geometry.type!=="Point")
 ,match(feature)
{return feature?["SA1_7DIG16","tile"].flatMap(field=>
 feature.properties[field]).join("-"):this?.getAttribute("id");
},drop:false
 ,id(feature){return vector.path.match.call(this,feature);}
 ,opacity:0
 ,d(feature)
{let {project}=select(ascend.call(this,'svg')[0]).datum();
 let {MultiPolygon:multi}={[feature.geometry.type]:true};
 let polygons=feature.geometry.coordinates.flatMap(polygon=>multi?polygon:[polygon]);
 return polygons.map(polygon=>curve(polygon.map(project))).join(" ");
 let path = geo.geoPath(project);
 let d = path(feature);
 return d;
},fill({properties})
{let {1:{metadata,gradient,field="Renter Percentage"}}=select(ascend.call(this, '.layer')[0]).datum();
 let id=properties?.SA1_7DIG16;
 if(metadata)
 return Object.entries(metadata).reduce((fill,[,{data,domain=[0,1],gradient=[]}])=>
{var value = Number(data[id]?.[field]?.replace("%", ""));
 if (!defined(value))
 return fill;
 let range=Object.assign(["transparent", "black"],[gradient].flat().reverse()).reverse();
 return d3.scaleLinear().domain([0, 100]).range(range)(value || 0);
},'transparent');
 gradient=gradient==='random'?gradient(Math.random()):gradient;
 return gradient || 'transparent';
},stroke: "rgba(33,33,33,0.7)"
 ,"stroke-width": "2px"
 ,"vector-effect": "non-scaling-stroke"
 ,click(event,feature)
{var layers = this.closest('.layers');
 let map = select(layers).datum();
 let {size: [width,height], project} = map;
 let path = geo.geoPath(project);
 //let [x,y] = path.centroid(feature);
 let[[left,top],[right,bottom]] = path.bounds(feature);
 let x = left + (right - left) / 2;
 let y = top + (bottom - top) / 2;
 let range = Math.max((right - left) / width, (bottom - top) / height);
 let scale = Math.max(0.9 / range, 1);
 let scroll={transform:new d3.ZoomTransform(scale,-x*scale,-y*scale)};
 return pan.call(layers.parentNode,scroll,map);
},...observe({hover({isTrusted: hover})
{var [{1: {stroke}}] = select(ascend.call(this, '.layer')[0]).data();
 let highlight = 'rgb(0,0,0,0.25)';
 extend.call(this,{fold:false,stroke:hover?highlight:stroke||'none'});
}})
 ,...tooltip({text({target})
{var {1:{metadata,field="Renter Percentage"}}=select(ascend.call(target,".layer")[0]).datum();
 let {properties} = select(target).datum()
 let id=properties?.SA1_7DIG16;
 let name=[properties?.SA2_NAME16, "(" + id + ")"].join(" ");
 let values=Object.entries(metadata).map(([name,{data}])=>
 [field, data[id]?.[field]||"no information"])
 return [name, values.map(infer("join", ": "))].flat().filter(Boolean).join('\n');
}})
 ,transition: 500,style:{opacity:1}
  //  ,title:{text:{text({properties})
        // {var {1:{metadata,field="Renter Percentage"}}=select(ascend.call(this,'.layer')[0]).datum();
        //  let name=properties?.["SA2_NAME16"]+" ("+properties?.SA1_7DIG16+")";
        //  let id=properties?.["SA1_7DIG16"];
        //  let values=Object.entries(metadata).map(([name,{data}])=>[field,data[id]?.[field]||"no information"])
        //  return [name,values.map(infer("join",": "))].flat().filter(Boolean).join('\n');
        // }}}
 },g:
 {class: "location"
 ,fold:({1:{data}})=>[data].flat().flatMap(feature=>feature.features||[feature]).filter(({geometry})=>geometry?.type==='Point')
 ,match(feature){return feature?.id||this?.getAttribute("id");}
 ,update(location){extend.call(location,{fold: false,transform:vector.g.transform});}
 ,id(){return vector.g.match.call(this,...arguments);}
 ,style:"cursor:grab;"
 ,transform({geometry})
{var [x,y]=select(this.closest('.layers')).datum().project(geometry.coordinates);
 let {k:scale}=transform(this.closest('.layers'));
 return 'translate('+[x,y]+') scale('+1/scale+')';
},image:
 {href:"data:"+mime("webp")+";base64,"+webp.pushpin
 ,x:-14,y:-38
  //,dx:({size})=>size*-0.001,dy:({size})=>size*-0.001
 ,width:50,height:50
 ,...observe({hover({isTrusted: hover})
{//this.style.transform=hover?"scale(1.2)":null;
 //merge(this.nextSibling,{style:{display:hover?"block":"none"}});
 //extend.call(this,{fold:false,transition:500,dy:hover?"-1em":"0em"});
}})
 }
 ,text:
 {fill:'white',stroke:'black'
 ,'stroke-width':1,'font-size':"25"
 ,'font-weight':800,'text-anchor':"left"
 ,dy:"-30",dx:"45"
 ,style: "cursor:default;display:none;"
 ,text:({properties})=>properties?.name
 }
 ,click(event, feature)
{let layers = this.closest('.layers');
 let map = select(layers).datum();
 let {project,center,ratio}=map;
 let path=geo.geoPath(project);
 let[x,y]=path.centroid(feature);
 let {k:scale}=transform(layers);
 let scroll={transform:new d3.ZoomTransform(scale,-x*scale,-y*scale)};
 return pan.call(layers.parentNode,scroll,map);
}}
}
,{fold:false
 ,sort(next,past)
{const priority=
 {raster:({data})=>string(data)
 ,rastertile:({source,data})=>(functor(source)||client[source])&&
 [data].flat().filter(Boolean).some(priority.raster)
 ,vector:({data})=>compound(data)
 ,vectortile:({source,data})=>functor(source)&&
 [data].flat().filter(Boolean).some(priority.vector)
 };
 const shift=[past,next].filter(Boolean).map(({1:layer})=> 
 Object.values(priority).findIndex(priority=>
 priority(layer))).reduce((past,next)=>
 past<=next?next:-1,0);
 return shift;
},each(){if(!this.classList.length)this.remove();}
 }
]}
,{class:"progress"
 ,fold({sources,center=[0,0],size})
{let pending=Object.entries(sources).flatMap(({1:{tiles,data,metadata}})=>
 [[data],Object.values(tiles||data||{}),Object.values(metadata||{}).map(infer("data"))]).flat().some(data=>data instanceof Promise);
 return pending?[{center,size}]:[];
},defs:
 {linearGradient:
 {id: 'fade',...svg.gradient('vertical')
 ,stop:{fold:[['transparent',0],["rgba(33,150,243,0.25)",75],['transparent',100]],...svg.stop}
 }
 },rect:
 {fill:'url(#fade)',...dimensions
 ,style:{'pointer-events': 'none',height: "100%",transform: 'translate(0,-100%)',animation: "wave 3s ease 1s infinite"}
 ,opacity: 0.25
 }
 }
],defs:{filter:filter.glow}
 };

 var layers=Object.values(search.call(map,({1:fragment})=>fragment.class==="layers"))[0].g;
 var raster=Object.values(search.call(layers,({1:fragment})=>fragment.class==="raster layer"))[0];
 var vector=Object.values(search.call(layers,({1:fragment})=>fragment.class==="vector layer"))[0];
 var progress=Object.values(search.call(map,({1:fragment})=>fragment.class==="progress"))[0];
 var repave=prune.call(layers,({1:fragment})=>["area","raster"].includes(fragment?.class)?{...fragment,drop:true,opacity:undefined}:fragment);
 function fade(selection)
{selection.on(".", null);
 compose(tether(extend,{fold:false,datum:undefined,transition: 1000,opacity:0}),wait(1000),"remove")(selection);
};

 function pan({type, transform: next}, global)
{if (this.__zoom !== next)
 // d3.zoom eventlistener tracks its own transformation instead of this.style.transform, just like our "reference".
 this.__zoom = next;
 let layers = this.querySelector(".layers");
 let datum = select(layers).datum();
 let {reference, size: [width,height]} = datum;
 let past = transform(layers);
 let scale = reference?.k ?? 1;
 let exponent = Math.log2(next.k / scale);
 let magnitude = Math.floor(exponent);
 let buffer = 512 / 2 / scale;
 let reframe = magnitude || Array.from("xy").map(axis => [reference || past, next].map(transform => -transform[axis] / transform.k).reduce( (past, next) => Math.abs(next - past))).find(pan => buffer < pan);
 let transition = !browser || type ? 0 : 1000;
 if (reframe || !reference)
 datum.reference = [next.x, next.y].reduce( ({k, x, y}, axis, index) => (
 {k,x,y,["xy"[index]]: (axis / next.k)*k})
,{...reference,k: scale * 2 ** magnitude})
 extend.call(layers
,{fold:false,datum,/*...transition&&{transition},*/transform:next});
 if(reframe)
 compose.call(map.g[0],reframe&&transition?wait(transition):infer()
,each(fragment=>extend.call(this.querySelectorAll(qualify(fragment)),{...fragment,fold:false})),lift,collect);
};

 async function pave([name,layer])
{let {center, size: [width,height]} = select(this).datum();
 let {x, y, k: scale} = transform(this);
 [x,y,scale] = [-x, -y, scale];
 let ratio = width / height;
 let extent = quadrate([x, y], width + 512, ratio);
 //extend.call(this.parentNode,{fold:false,rect:extent.reduce((left,right)=>[left.map(x=>x/scale),right.map((x,axis)=>(x-left[axis])/scale/2)]).reduce(([x,y],[width,height])=>({fold:false,x:x+width/2,y:y+height/2,width,height,stroke:"red","stroke-width":2,fill:"none","vector-effect":"non-scaling-stroke"}))})
 let[translate,size,grid]=compose
(extent,"extent",width*scale,"scale",center,"translate",512,"tileSize",{x,y,k:scale},infer
,Function.call,combine("translate","scale",compose(infer("map",tile=>[tile.join("/"),tile]),Object.fromEntries),lift)
)(tile());
 //note({x,y,scale},...extent)
 let {grid: past={}}=layer;
 Object.assign(layer,{data:layer.data||[],tiles:layer.tiles||{},grid});
 let source=client[layer.source]||layer.source;
 let abort=compose(source,false,buffer(/*browser?delegate.bind(worker,"acquire"):*/
 acquire.bind(layer.tiles), note.bind(1)));
 let kept = prune.call(past,([field,tile])=>grid[field]||
 (layer.tiles[field] instanceof Promise?abort(tileWrap(field.split("/"))):undefined),false,1);
 if (Object.keys(layer.tiles).length > 10000)
 Object.keys(layer.tiles).slice(0, 1000).forEach(field => URL.revokeObjectURL(layer.tiles[field].source) || delete layer.tiles[field]);
 let unfold=either
(([field,tile],index,tiles)=>
 layer.tiles[field]=layer.tiles[field]||compose
(combine(source,infer()),lift
 /*,browser
?delegate.bind(worker,"acquire")//,TextDecoder.prototype.decode.bind(new TextDecoder()),either(JSON.parse,infer()))
:*/
,acquire.bind(layer.tiles),data=>layer.tiles[field]=string(data)
?{source:data,data,tile,size:size/scale,translate}
:data.map(feature=>merge(feature,{properties:{tile}}))
,pass(compose(infer(undefined,field,layer,this,index,tiles.length)
,async function add(tile,field,layer,fragment,index,length)
{if(kept[field])
 return;
 layer.data.push(...[tile].flat());
 extend.call(fragment,{fold:false,g:layers});
}))
)(tile)
,([field],index,tiles,fail)=>delete layer.tiles[field]&&fail
);
 // performance.mark("a")
 let next=Object.entries(grid);
 let fold=await compose.call
(next,infer("sort",([field,tile])=>kept[field]&&-1),infer("map", buffer(compose(combine(unfold,drop(1)),lift,pass(track,name,this,true),crop(1)), infer())),rank,collect,"flat",whether(infer("some",is(Error)),compose(drop(),"aborted "+next.length+" "+name+" tiles: "+next[0]?.[0],Error,exit),infer()),whether(infer("some",has("geometry"))
 /*,browser?delegate.bind(worker,"dissolve"):*/
,dissolve,infer())
);
 // console.log(performance.measure("a").duration/1000+"s")
 note.call(2,"paving "+next.length+" "+name+" tiles: ",next[0]?.[0]);
 Object.assign(layer,{data:fold});
 extend.call(this.parentNode
,{fold:false,g:[{fold:false,class:"layers",g:repave},progress]});
 extend.call(this.ownerDocument.querySelector(".icon")
,{fold:false,circle:{fold:[name],match:name=>name,drop:false,update:fade}
 });
};

 function track(tile,name,fragment,ready,index,{length})
{extend.call(fragment.ownerDocument.querySelector(".icon")
,{fold:false,circle:
 {fold:[name],class:name=>name,match:name=>name,drop:false,update:true
 ,cx:"50%",cy:"50%",r:"44%",fill:"none"
 ,stroke:name =>({satellite:"#111111",administration:"#4A722D"}[name])
 ,"stroke-width":"12%","stroke-linecap": "butt"
 ,"stroke-dasharray":function()
{return Object.assign(this.getAttribute("stroke-dasharray")?.split(",").map( (dash,index,array)=>
 array.splice(index,2,dash)).filter(Boolean)||Array(length*2).fill([0,277/(length)+"%"])
,{[index+ready*0]:[277/(length)+"%",0]}).join();
}}
 });
 //,"stroke-dashoffset":(1-progress)*277+"%"}
};

 export async function dissolve(features)
{let {default:polygon}=await import("./Fogel_2016_polygonclipping.js");
 return features.map(function(feature,index,features)
{let siblings=features.slice(index+1).filter(({properties:{SA1_7DIG16:id}},offset)=>
 id===feature.properties.SA1_7DIG16&&delete features[index+1+offset]);
 let coordinates=({geometry:{coordinates}})=>coordinates;
 let rewind=polygon=>polygon.map(polygon=>polygon.reverse());
 return [feature,siblings].flat().reduce((feature,sibling,index,features)=>
 prune.call(feature,([field,value])=>field==="geometry"
?{type:"MultiPolygon",coordinates:polygon.union(...features.map(coordinates)).map(rewind)}
:field==="properties"
?features.splice(0).map(({properties})=>properties).reduce((past,next)=>
 merge(past,next,0),{})
:value,false,1));
 });
};

 function transform(node)
{var value=node?.transform?.baseVal.consolidate();
 if(!value)
 return node?.getAttribute("transform")?.split(/translate\(|scale\(|,|\) */).filter(Boolean).map(Number).reduce((transform, axis, index)=> 
 ({...transform,["xyk"[index]]:axis}),{})||{x: 0,y: 0,k: 1};
 let {matrix: {a, b, c, d, e: x, f: y}, } = value;
 //from private method in d3-interpolate/transform/decompose.js.
 let scaleX = Math.sqrt(a * a + b * b);
 if (scaleX)
 (a /= scaleX),(b /= scaleX);
 let skewX = a * c + b * d;
 if (skewX)
 (c -= a * skewX),(d -= b * skewX);
 let scaleY = Math.sqrt(c * c + d * d);
 if (scaleY)
 (c /= scaleY),(d /= scaleY),(skewX /= scaleY);
 if (a * d < b * c)
 [a,b,skewX,scaleX]=[-a, -b, -skewX, -scaleX];
 return {x,y,k:Math.max(scaleX,scaleY),rotate: (Math.atan2(b, a) * 180) / Math.PI,skewX: (Math.atan(skewX) * 180) / Math.PI,scaleX: scaleX,scaleY: scaleY};
};

 export function acquire(source, tile)
{if (!defined(this))
 exit(Error(acquire.name+" called without scope to track abortcontrollers."));
 let csv = /.csv$/.test(source);
 let fail = Error(source + " aborted.");
 if (tile === false)
 return this[source]?.abort([fail])||fail.message;
 if (this[source])
 return control(this[source]);
 let {signal}=this[source]=new AbortController();
 let halt=pass(context=>signal.aborted&&exit(fail));
 return control(this[source],({signal})=>
 compose.call(source,wait(1000),halt,{signal},fetch,halt, whether(compose("status",is(200)),"arrayBuffer",compose(combine("status", "statusText"),lift,collect,": ","join",Error,exit)),halt,{tile,source},csv?compose(records,infer("map",({id,...record},index)=>({[id||index]:record})),infer("reduce",merge)):georead, halt).catch(exit).finally(term=>delete this[source]));
};

 export async function georead(buffer,{color,tile,source}={})
{var bytes=buffer.buffer?buffer:new Uint8Array(buffer);
 try
{var value = JSON.parse(new TextDecoder('utf-8').decode(bytes));
 if(value.type === 'Topology')
 return import("./Bostock_2016_topojson.js").then(({default:feature}) =>
 feature(value,Object.keys(value.objects)[0]));
 if(value.osm3s)
 return import('osmtogeojson').then(({default:convert})=>convert(value));
 return value;
}catch(fail)
{// https://github.com/sindresorhus/file-type/blob/9b24116d7b386141978d51c4cc582cee010cc839/core.js#L57
 let tif=Object.values({littleendian:[0x49,0x49],bigendian:[0x4d,0x4d]}).some(headers=>
 headers.every((header,index)=>bytes[index]===header));
 if(tif)
 return image.geotiff(buffer,color);
 try
{let {default:{VectorTile}}=await import('./mapbox_2014_vectortile.js');
 let {default:protocolbuffer}=await import("./mapbox_2014_protocolbuffer.js");
 //if(/^http/.test(source))note(tile.join("/"),buffer)
 let {layers}=new VectorTile(new protocolbuffer(bytes));
 //.readFields(vectortile,{});
 return Object.entries(layers).flatMap(([name,layer])=> 
 layer._features.map((position,index)=>
 layer.feature(index).toGeoJSON(...tile)));
}catch(fail)
{if(browser)
 return URL.createObjectURL(new Blob([buffer],{type:'image/webm'}))
 return "data:image/webp;base64,"+btoa(bytes.reduce((data,byte)=>
 data+String.fromCharCode(byte),''));
}}
};

 function tooltip(fragment) {
  return observe({
    hover(event) {
      let {isTrusted: hover, layerX: x, layerY: y} = event;
      let[left,top] = [x + "px", y - 8 + "px"];
      let frame = this.closest('.map').parentNode;
      extend.call(this, {
        fold: false,
        filter: hover ? "url(#glow)" : ""
      });
      extend.call(frame, {
        fold: false,
        div: {
          fold: hover ? [event] : [],
          update(pin) {
            extend.call(pin, {
              fold: false,
              style: {
                left,
                top
              },
              each: snap
            });
          },
          class: "pin",
          style: {
            position: "absolute",
            "box-shadow": 'black 0px 0px 5px',
            "border-radius": "10px",
            background: "rgba(70,70,70,0.8)",
            width: "auto",
            transform: "translate(-50%,-100%)",
            padding: "0.5rem",
            "font-size": ".8rem",
            "white-space": "pre",
            "text-align": "center",
            left,
            top //,top:top+'px',left:left+width/2+'px'
            ,
            "pointer-events": "none"
          },
          mouseleave() {
            this.remove();
          },
          filter: "none",
          p: fragment,
          div: {
            class: "arrow",
            style: {
              position: "absolute",
              top: '100%',
              left: '50%',
              transform: 'translate(-7px)',
              width: 0,
              'border-top': '8px solid rgba(70,70,70,0.8)',
              'border-left': '7px solid transparent',
              'border-right': '7px solid transparent',
              "pointer-events": "none"
            }
          },
          each: snap
        }
      });
    }
  });
};

 export var gudermannian = normal => ((2 * Math.atan(Math.exp(normal * Math.PI)) - Math.PI / 2) * 180) / Math.PI;
 export var antipode = (point, scale) => point / (scale / 360) - 180;
 export var bisection = (point, scale) => (point / (scale / 2) - 1) * -1;

 export var proxy=
 {mapbox(request,access_token)
{let host="https://api.mapbox.com";
 let {address,theme,tiles,scale=""}=query(url(request))||{};
 if(address)
 return host+"search/geocode/v6/forward?"+new URLSearchParams({q:address,access_token});
 return fetch([host,"styles/v1/mapbox",theme,"tiles",256,tiles+scale].join("/")+"?"+new URLSearchParams({access_token}));
}};

 export var client=
 {"mapbox":([x,y,z])=>"/mapbox?"+new URLSearchParams(
 {theme:globalThis.window?.matchMedia('(prefers-color-scheme: dark)').matches?"dark-v11":"outdoors-v12"
 ,tiles:[z,x,y].join("/")
 ,scale:globalThis.devicePixelRatio>1?"@2x":""
 })
 };
