(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 747,
	height: 420,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Layer2.png", id:"Layer2"},
		{src:"images/Layer3.png", id:"Layer3"},
		{src:"images/Layer4.png", id:"Layer4"},
		{src:"images/Layer5.png", id:"Layer5"},
		{src:"images/oakbg.jpg", id:"oakbg"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Layer2 = function() {
	this.initialize(img.Layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,170);


(lib.Layer3 = function() {
	this.initialize(img.Layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,187);


(lib.Layer4 = function() {
	this.initialize(img.Layer4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,186);


(lib.Layer5 = function() {
	this.initialize(img.Layer5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,168);


(lib.oakbg = function() {
	this.initialize(img.oakbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,747,420);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.557)").s().p("EghRAHBIAAuCMA/bAAAQDIAAAADJIAAHxQAADIjIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213,-45,426.1,90);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.557)").s().p("EghRAHBIAAuCMA/bAAAQDIAAAADJIAAHxQAADIjIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-213,-45,426.1,90);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwByQgbgLgQgZIAcgUQAJAQASALQASALAUAAIAUgCQALgCAHgFQAIgGAFgIQAEgHABgMQgBgJgEgIQgEgHgKgFQgSgJgggIIgXgHQgMgBgKgIQgKgHgHgMQgGgLgBgRQAAgRAIgNQAHgOAMgIQAMgIAPgFQAPgEAPAAQAYAAAYAMQAYAKALAVIgaAUQgIgOgPgKQgQgKgTABIgRACQgJACgHAEQgIAEgEAIQgEAHAAAKQAAAQAOAKQAOAIAbAGQAqAJAUAOQAVARAAAcQgBAUgHAPQgIAOgNAIQgNAKgQADQgQAEgQAAQgZAAgZgLg");
	this.shape.setTransform(131.4,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpB0QgXgKgQgRQgRgRgJgWQgKgYAAgaQAAgaAKgWQAJgXAQgRQAQgRAWgKQAWgJAYAAQAcAAAVAJQAWAKAOAQQAOARAHAUQAIAWAAAYIAAAGIgBAJIjEAAQABASAHAQQAGAPAMAMQAMALAQAHQAPAIARAAQANAAAMgDQAMgEAJgGQAUgMAKgRIAaAVQgKANgMAKQgMAJgNAHQgaALgdAAQgZAAgWgJgABSgRQgCghgUgXQgUgWglABQgQAAgOAFQgPAHgLALQgMALgGAOQgHAOgBAPIChAAIAAAAg");
	this.shape_1.setTransform(105.6,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRB3IhijtIAnAAIBMDIIAAAAIBPjIIAlAAIhhDtg");
	this.shape_2.setTransform(78.7,4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguB5QgQgDgLgJQgMgJgIgOQgIgNAAgVQAAgOADgLQAEgKAHgJQAOgNAYgIQAXgIAdgDIA+gCIAAgIQAAgfgQgPQgIgHgMgEQgMgDgPAAQgUgBgSAIQgTAHgMANIgTgXQAOgOAZgKQAYgKAcAAQAUAAARAGQAQAFANALQAMAKAIARQAHAQAAAWIAABnIABAcIADAZIgfAAIgCgTIgBgUIgBAAQgJAMgJAJQgJAJgKAFQgWAKgbAAQgNAAgOgEgAAMABQgTACgSAFQgSAGgLAKQgLALAAAQQAAANAEAIQAFAJAJAGQAHAFALADIAUABQAQAAAPgGQAOgGAJgLQALgLAEgOQAFgPAAgQIAAgRIgJAAg");
	this.shape_3.setTransform(52.1,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpB0QgXgKgQgRQgRgRgJgWQgKgYAAgaQAAgaAKgWQAJgXAQgRQAQgRAWgKQAWgJAYAAQAcAAAVAJQAWAKAOAQQAOARAHAUQAIAWAAAYIAAAGIgBAJIjEAAQABASAHAQQAGAPAMAMQAMALAQAHQAPAIARAAQANAAAMgDQAMgEAJgGQAUgMAKgRIAaAVQgKANgMAKQgMAJgNAHQgaALgdAAQgZAAgWgJgABSgRQgCghgUgXQgUgWglABQgQAAgOAFQgPAHgLALQgMALgGAOQgHAOgBAPIChAAIAAAAg");
	this.shape_4.setTransform(24.4,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhlC0IAAlnIAkAAIAAFHICnAAIAAAgg");
	this.shape_5.setTransform(-1.1,-1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABFB6IAAiCQAAgTgDgQQgDgOgIgMQgHgKgMgHQgNgFgTAAQgMgBgMAGQgNAFgLAMQgKALgGASQgGARAAAXIAAB6IgjAAIAAi4IAAgZIgCgcIAhAAIACAWIAAATIABAAQAKgVAYgNQALgGAMgDQAKgEANAAQAtAAAXAbQALAOAGASQAGASAAAVIAACRg");
	this.shape_6.setTransform(-43.7,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACSB6IAAiCQAAgmgOgXQgHgLgMgGQgMgGgRABQgTgBgNAIQgNAHgIANQgHANgEAQQgDAPAAARIAAB9IghAAIAAiJIgDggQgCgOgHgKQgGgKgLgGQgLgEgSAAQgMgBgMAGQgNAFgKAMQgKALgGASQgGARAAAXIAAB6IgjAAIAAi4IAAgZIgCgcIAhAAIACAWIAAATIABAAQAKgVAWgNQAKgGAMgDQAMgEANAAIAUACQALACAJAGQAKAGAJAJQAGALAGAPQANgZAVgNQAKgGANgDQAMgEAPAAQAtAAAXAbQALAOAGASQAGASAAAVIAACRg");
	this.shape_7.setTransform(-81,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BzQgRgHgLgNQgXgbAAgtIAAiQIAjAAIAACCQAAATADAPQADAQAHALQAIALAMAGQANAGASAAQAMAAANgGQANgFAKgMQALgLAGgSQAGgSAAgXIAAh5IAjAAIAAC4IAAAZIACAcIghAAIgCgWIgBgTIgBAAQgFAKgIAJQgIAIgMAHQgXANgXAAQgXAAgRgHg");
	this.shape_8.setTransform(-118.3,4.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOCYQgLgDgHgHQgJgIgGgMQgGgMAAgUIAAiTIgxAAIAAgdIAxAAIAAhDIAhAAIAABDIBDAAIAAAdIhDAAIAACKQAAANACAIQADAJAFAFQAFAFAGABIAPADIAPgDIAPgFIABAeIgTAFIgVACg");
	this.shape_9.setTransform(-141.5,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0BzQgRgHgLgNQgXgbAAgtIAAiQIAjAAIAACCQAAATADAPQADAQAHALQAIALAMAGQANAGASAAQAMAAANgGQANgFAKgMQALgLAGgSQAGgSAAgXIAAh5IAjAAIAAC4IAAAZIACAcIghAAIgCgWIgBgTIgBAAQgFAKgIAJQgIAIgMAHQgXANgXAAQgXAAgRgHg");
	this.shape_10.setTransform(-164,4.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACEC0IgnhfIi6AAIgmBfIgpAAICclnIAiAAICbFngABOAzIhOi9IhOC9ICcAAg");
	this.shape_11.setTransform(-196.7,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.5,-36.8,433.1,73.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113,170);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,187);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111,168);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,186);


(lib.leaves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// leaf4
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(577.5,-76,1,1,0,0,0,86.5,93);

	this.instance_1 = new lib.Layer4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(491,-169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:564.3,y:-61.8},0).wait(1).to({x:551.5,y:-47.2},0).wait(1).to({x:539.2,y:-32.2},0).wait(1).to({x:527.4,y:-16.8},0).wait(1).to({x:516,y:-1.1},0).wait(1).to({x:505.3,y:15},0).wait(1).to({x:495.1,y:31.5},0).wait(1).to({x:485.5,y:48.4},0).wait(1).to({x:476.5,y:65.6},0).wait(1).to({x:468.2,y:83.1},0).wait(1).to({x:460.6,y:100.9},0).wait(1).to({x:453.6,y:119},0).wait(1).to({x:447.4,y:137.3},0).wait(1).to({x:441.9,y:155.9},0).wait(1).to({x:437.1,y:174.7},0).wait(1).to({x:433.1,y:193.7},0).wait(1).to({x:429.7,y:212.8},0).wait(1).to({x:427.1,y:232},0).wait(1).to({x:425.2,y:251.3},0).wait(1).to({x:423.9,y:270.6},0).wait(1).to({x:423.4,y:290},0).wait(1).to({x:423.5,y:309.4},0).wait(1).to({x:424.2,y:328.8},0).wait(1).to({x:425.5,y:348.1},0).wait(1).to({x:427.5,y:367.4},0).wait(1).to({x:429.9,y:386.7},0).wait(1).to({x:433,y:405.8},0).wait(1).to({x:436.5,y:424.9},0).wait(1).to({x:440.5,y:443.8},0).wait(1).to({x:445,y:462.7},0).wait(1).to({x:449.9,y:481.5},0).wait(1).to({x:455.2,y:500.1},0).wait(1).to({x:461,y:518.6},0).wait(1).to({x:467.1,y:537},0).wait(1).to({x:473.6,y:555.3},0).wait(1).to({x:480.4,y:573.5},0).wait(1).to({x:487.6,y:591.5},0).wait(1).to({x:495,y:609.4},0).wait(1).to({x:502.8,y:627.2},0).wait(1).to({x:510.8,y:644.8},0).wait(1).to({x:519.1,y:662.3},0).wait(1).to({x:527.7,y:679.7},0).wait(1).to({x:536.5,y:697},0).wait(1).to({x:545.5,y:714.2},0).wait(34).to({_off:true},1).wait(1));

	// leaf3
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(259.5,-284,1,1,0,0,0,55.5,84);

	this.instance_3 = new lib.Layer5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(204,-368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:250,y:-266.5},0).wait(1).to({x:240.6,y:-248.9},0).wait(1).to({x:231.5,y:-231.2},0).wait(1).to({x:222.5,y:-213.5},0).wait(1).to({x:213.8,y:-195.6},0).wait(1).to({x:205.2,y:-177.6},0).wait(1).to({x:196.9,y:-159.5},0).wait(1).to({x:188.8,y:-141.4},0).wait(1).to({x:181,y:-123.1},0).wait(1).to({x:173.3,y:-104.7},0).wait(1).to({x:166,y:-86.2},0).wait(1).to({x:158.9,y:-67.6},0).wait(1).to({x:152,y:-48.9},0).wait(1).to({x:145.4,y:-30.1},0).wait(1).to({x:139.1,y:-11.2},0).wait(1).to({x:133.1,y:7.7},0).wait(1).to({x:127.4,y:26.8},0).wait(1).to({x:122,y:45.9},0).wait(1).to({x:116.9,y:65.2},0).wait(1).to({x:112.1,y:84.4},0).wait(1).to({x:107.6,y:103.8},0).wait(1).to({x:103.5,y:123.3},0).wait(1).to({x:99.8,y:142.9},0).wait(1).to({x:96.3,y:162.5},0).wait(1).to({x:93.3,y:182.1},0).wait(1).to({x:90.6,y:201.8},0).wait(1).to({x:88.3,y:221.6},0).wait(1).to({x:86.4,y:241.4},0).wait(1).to({x:84.9,y:261.3},0).wait(1).to({x:83.7,y:281.1},0).wait(1).to({x:83,y:301},0).wait(1).to({x:82.7,y:320.9},0).wait(1).to({x:82.8,y:340.8},0).wait(1).to({x:83.3,y:360.7},0).wait(1).to({x:84.2,y:380.6},0).wait(1).to({x:85.6,y:400.5},0).wait(1).to({x:87.4,y:420.3},0).wait(1).to({x:89.6,y:440.1},0).wait(1).to({x:92.2,y:459.8},0).wait(1).to({x:95.3,y:479.5},0).wait(1).to({x:98.8,y:499.1},0).wait(1).to({x:102.7,y:518.6},0).wait(1).to({x:107,y:538},0).wait(1).to({x:111.8,y:557.3},0).wait(1).to({x:117,y:576.5},0).wait(1).to({x:122.6,y:595.6},0).wait(1).to({x:128.6,y:614.6},0).wait(1).to({x:134.9,y:633.5},0).wait(1).to({x:141.7,y:652.2},0).wait(1).to({x:148.9,y:670.7},0).wait(1).to({x:156.4,y:689.2},0).wait(1).to({x:164.3,y:707.4},0).wait(1).to({x:172.6,y:725.6},0).wait(1).to({x:181.2,y:743.5},0).wait(1).to({x:190.1,y:761.3},0).wait(1).to({x:199.4,y:778.9},0).wait(1).to({x:209,y:796.3},0).wait(1).to({x:218.9,y:813.5},0).wait(1).to({x:229.2,y:830.6},0).wait(1).to({x:239.7,y:847.5},0).wait(1).to({x:250.5,y:864.3},0).wait(17).to({_off:true},1).wait(1));

	// leaf2
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(248,-67.5,1,1,0,0,0,58,93.5);

	this.instance_5 = new lib.Layer3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(190,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:209.9,y:-93.5},0).wait(1).to({x:171,y:-118.2},0).wait(1).to({x:130.8,y:-141.1},0).wait(1).to({x:89.2,y:-161.1},0).wait(1).to({x:45.9,y:-176.7},0).wait(1).to({x:0.5,y:-184.2},0).wait(1).to({x:-44.4,y:-175.4},0).wait(1).to({x:-76.9,y:-143.7},0).wait(1).to({x:-92,y:-100.2},0).wait(1).to({x:-96.4,y:-54.4},0).wait(1).to({x:-94.9,y:-8.2},0).wait(1).to({x:-89.8,y:37.6},0).wait(1).to({x:-82.1,y:83.2},0).wait(1).to({x:-72.7,y:128.3},0).wait(1).to({x:-61.8,y:173.2},0).wait(1).to({x:-49.8,y:217.7},0).wait(1).to({x:-36.9,y:262.1},0).wait(1).to({x:-23.3,y:306.2},0).wait(1).to({x:-9,y:350.1},0).wait(1).to({x:5.8,y:393.8},0).wait(1).to({x:21.2,y:437.3},0).wait(1).to({x:36.9,y:480.7},0).wait(1).to({x:53.1,y:523.9},0).wait(1).to({x:69.5,y:567.1},0).wait(1).to({x:86.3,y:610},0).wait(1).to({x:103.4,y:653},0).wait(1).to({x:120.8,y:695.8},0).wait(1).to({x:138.3,y:738.4},0).wait(1).to({x:156.1,y:781},0).wait(1).to({x:174.1,y:823.5},0).wait(1).to({x:192.3,y:865.9},0).wait(1).to({x:210.7,y:908.2},0).wait(1).to({x:229.3,y:950.5},0).wait(1).to({x:248,y:992.8},0).wait(44).to({_off:true},1).wait(1));

	// leaf1
	this.instance_6 = new lib.Symbol4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,-416.1,1,1,0,0,0,56.5,85);

	this.instance_7 = new lib.Layer2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-56.5,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:9,y:-395.4},0).wait(1).to({x:17.9,y:-374.7},0).wait(1).to({x:26.5,y:-353.9},0).wait(1).to({x:34.9,y:-333.1},0).wait(1).to({x:43.1,y:-312.1},0).wait(1).to({x:51.1,y:-291.1},0).wait(1).to({x:58.9,y:-270},0).wait(1).to({x:66.4,y:-248.8},0).wait(1).to({x:73.8,y:-227.5},0).wait(1).to({x:80.9,y:-206.2},0).wait(1).to({x:87.7,y:-184.7},0).wait(1).to({x:94.3,y:-163.2},0).wait(1).to({x:100.7,y:-141.7},0).wait(1).to({x:106.8,y:-120},0).wait(1).to({x:112.5,y:-98.2},0).wait(1).to({x:118,y:-76.4},0).wait(1).to({x:123.2,y:-54.5},0).wait(1).to({x:128.1,y:-32.6},0).wait(1).to({x:132.7,y:-10.5},0).wait(1).to({x:136.9,y:11.6},0).wait(1).to({x:140.8,y:33.8},0).wait(1).to({x:144.4,y:56},0).wait(1).to({x:147.5,y:78.2},0).wait(1).to({x:150.3,y:100.5},0).wait(1).to({x:152.7,y:122.9},0).wait(1).to({x:154.7,y:145.3},0).wait(1).to({x:156.3,y:167.8},0).wait(1).to({x:157.5,y:190.2},0).wait(1).to({x:158.2,y:212.7},0).wait(1).to({x:158.5,y:235.2},0).wait(1).to({x:158.3,y:257.7},0).wait(1).to({x:157.7,y:280.2},0).wait(1).to({x:156.6,y:302.7},0).wait(1).to({x:154.9,y:325.1},0).wait(1).to({x:152.8,y:347.5},0).wait(1).to({x:150.1,y:369.9},0).wait(1).to({x:147,y:392.2},0).wait(1).to({x:143.3,y:414.3},0).wait(1).to({x:139,y:436.4},0).wait(1).to({x:134.3,y:458.4},0).wait(1).to({x:128.9,y:480.3},0).wait(1).to({x:123.1,y:502},0).wait(1).to({x:116.7,y:523.6},0).wait(1).to({x:109.7,y:545},0).wait(1).to({x:102.2,y:566.2},0).wait(1).to({x:94.1,y:587.2},0).wait(1).to({x:85.5,y:608},0).wait(1).to({x:76.3,y:628.6},0).wait(1).to({x:66.7,y:648.9},0).wait(1).to({x:56.5,y:668.9},0).wait(1).to({x:45.8,y:688.7},0).wait(1).to({x:34.6,y:708.3},0).wait(1).to({x:23,y:727.5},0).wait(1).to({x:10.8,y:746.4},0).wait(1).to({x:-1.8,y:765},0).wait(1).to({x:-14.9,y:783.4},0).wait(1).to({x:-28.3,y:801.4},0).wait(1).to({x:-42.2,y:819.1},0).wait(1).to({x:-56.5,y:836.5},0).wait(1).to({x:-71.2,y:853.5},0).wait(1).to({x:-86.3,y:870.2},0).wait(1).to({x:-101.7,y:886.6},0).wait(1).to({x:-117.4,y:902.7},0).wait(1).to({x:-133.5,y:918.5},0).wait(1).to({x:-149.9,y:933.9},0).wait(1).to({x:-166.5,y:949},0).wait(1).to({x:-183.5,y:963.8},0).wait(1).to({x:-200.7,y:978.3},0).wait(1).to({x:-218.2,y:992.5},0).wait(1).to({x:-235.9,y:1006.4},0).wait(1).to({x:-253.8,y:1020},0).wait(1).to({x:-272,y:1033.3},0).wait(6).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.5,-501.1,720.5,527.1);


// stage content:



(lib.oakleaves = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// leaves
	this.instance = new lib.leaves();
	this.instance.parent = this;
	this.instance.setTransform(159.5,-142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// Text
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239.6,158.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({alpha:1},26).wait(20));

	// Solid
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-228.9,160.1);

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(211.1,160.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},34).to({state:[{t:this.instance_3}]},26).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},34,cjs.Ease.get(0.39)).to({_off:true,x:211.1},26,cjs.Ease.get(0.39)).wait(20));

	// bg
	this.instance_4 = new lib.oakbg();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-433.1,1265.5,1063.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;