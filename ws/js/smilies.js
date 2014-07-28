var categories = ["people","nature","objects","places","symbols"];
var active = 0;
var smilie_state = false;
var div = document.getElementById('description');

function change_active(x) {
	active = x;	
	div.innerHTML = '';
	highlight_active();
	show();
}

function highlight_active() {
	//reset all the highlights
	for(var x in categories) {
		var element = document.getElementById(categories[x]);
		element.style.boxShadow = "0px 0px 0px 0px white";
	}
	
	//set current highlight
	var tab = document.getElementById(categories[active]);
	tab.style.boxShadow = "0px 6px 0px 0px rgba(85, 200, 300, 1)";
}

function append_smilie(smilie_id) {
	var text_box = document.getElementById('input');
	var smilie_code = ':' + smilie_id + ':';
	text_box.innerHTML += smilie_code;
}

function show() {
	var count=0;
	highlight_active();
	for(var x=0 ; x < data[categories[active]].length ; x++) {
		var input = ":" + data[categories[active]][x] + ":";
		var cont = document.createElement('div');
		cont.setAttribute('id',data[categories[active]][x]);
		cont.setAttribute('onclick','append_smilie(this.id)');
		cont.style.display = "inline-block";
		cont.innerHTML = input;
		div.appendChild(cont);
		count++;
	}
	emojify.run();
	//alert("count = " + count)
};

function toggle_smilie_state() {
	if(smilie_state) {
		smilie_state = false;
	}
	
	else if(!smilie_state) {
		smilie_state = true;
	}
	
	toggle_smilies();
}

function toggle_smilies() {
	var box = document.getElementById("container");
	if(smilie_state) {
		box.style.visibility = "visible";
		show();
	}
	
	else {
		box.style.visibility = "hidden";
	}
}

emojify.setConfig({
	emojify_tag_type : 'div',
	only_crawl_id : null,
	img_dir : 'emoji/',
	ignored_tags : {
		'SCRIPT' : 1
	}
});
