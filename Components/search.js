function commandSearch(input){
    if((input=="projectpulse --version")||(input=="projectpulse://version")){
    	alert(`${locals.com.name} run in version ${locals.web.version}`);
    }else if((input=="projectpulse --newtab")||(input=="projectpulse://newtab")){
    	window.location.reload();
    }else if((input=="projectpulse --home")||(input=="projectpulse://home")){
    	pageRout(0);
    }else if((input=="projectpulse --about")||(input=="projectpulse://about")){
    	pageRout(1);
    }else if((input=="projectpulse --project")||(input=="projectpulse://project")){
    	pageRout(2);
    }else if((input=="projectpulse --help")||(input=="projectpulse://help")){
    	pageRout(3);
    }else if((input=="projectpulse --account")||(input=="projectpulse://account")){
    	account();
    }else if((input=="projectpulse --date")||(input=="projectpulse://date")){
    	alert("Time: \n"+new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()+", "+new Date().getMinutes()+":"+new Date().getSeconds());
    }else{
    	//search(input.replace("--",""));
    }
}