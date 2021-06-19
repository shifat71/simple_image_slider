var counter=1;


function previous(){
    counter--;
    if(counter<=0)
    {
        counter=3;
    }
    
    var sourceChange = document.querySelector("#imgID");
    sourceChange.src="image"+counter+".jpg";
    
    
}

function next(){
    counter++;
    if(counter>3)
    {
      counter=1;
    }
    
    var sourceChange = document.querySelector("#imgID");
    sourceChange.src="image"+counter+".jpg";
    
    
}
