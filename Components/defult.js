let nav = 0;
let pageList = ["HomePage","AboutPage","ProjectPage","HelpPage"];
let aboutList = ["abtn0","abtn1","abtn2"];
let cls = 1;
function menubar(){
    if(nav==0){
        document.querySelector(".downMenu").style.display="block";
        nav=1;
    }else{
        document.querySelector(".downMenu").style.display="none";
        nav=0;
    }
}
function user(){
    const body = document.getElementById("root");
    body.innerHTML = body.innerHTML.replaceAll('{{com.name}}',locals.com.name);
    body.innerHTML = body.innerHTML.replaceAll('{{com.owner}}',locals.com.owner);
    body.innerHTML = body.innerHTML.replaceAll('{{com.founder}}',locals.com.founder);
    document.title = locals.com.name;
    pageRout(0);
    typing();
}
function pageRout(id){
    for(let i=0; i<pageList.length; i++){
        document.getElementById(`${pageList[i]}`).style.display = "none";
        document.getElementById(`p${i}`).style.fontWeight = "normal";
        document.getElementById(`pm${i}`).style.fontWeight = "normal";
        document.getElementById(`p${i}`).style.textDecoration = "none";
        document.getElementById(`pm${i}`).style.textDecoration = "none";
    }
    document.getElementById(`${pageList[id]}`).style.display = "block";
    document.getElementById(`p${id}`).style.fontWeight = "bold";
    document.getElementById(`pm${id}`).style.fontWeight = "bold";
    document.getElementById(`p${id}`).style.textDecoration = "underline";
    document.getElementById(`pm${id}`).style.textDecoration = "underline";
    if(aboutList.length==3){
    	aboutList.length=4;
        aboutList[3]="abtn3";
    	aboutRout(0);
    }
}
function aboutRout(id){
	for(let j=0; j<aboutList.length; j++){
		document.getElementById(`${aboutList[j]}`).style.background = "transparent";
		document.getElementById(`ad${j}`).style.display = "none";
	}
	document.getElementById(`${aboutList[id]}`).style.background = "#28a745";
	document.getElementById(`ad${id}`).style.display = "block";
}
function search(data){
	let input = document.getElementById(`${data}`).value;
    input=input.toLowerCase();
    //console.log(input);
}
function typing(){
    var text = 0;
    setInterval(() => {
        document.getElementById('h40').style.display='none';
        for(i=0; i<5; i++){
            document.getElementById(`h4${i+1}`).style.display='none';    
        }
        document.getElementById(`h4${text+1}`).style.display='block';
        text++;
        if(text>=5){
            text=0;
        }
    },5000);
}
function colorTogule(){
	for(let j=0; j<colorLib[cls].collist.length; j++){
		document.documentElement.style.setProperty(colorLib[cls].collist[j][0], colorLib[cls].collist[j][1]);
	}
	if(cls==0){ //dark
        document.getElementById('p4').innerHTML = `<a class="menu-link" title="Shift to light mode">&#x2600;</a>`;
        document.getElementById('pm4').innerHTML = `<a class="menu-link">&#x2600;</a>`;
        cls=1;
	}else{ //light
        document.getElementById('p4').innerHTML = `<a class="menu-link" title="Shift to dark mode">&#x1f319;</a>`;
        document.getElementById('pm4').innerHTML = `<a class="menu-link">&#x1f319;</a>`;
		cls=0;
	}
}