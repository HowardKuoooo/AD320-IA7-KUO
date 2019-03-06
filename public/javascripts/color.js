document.addEventListener('DOMContentLoaded', function() {
    
    
	document.querySelector('div').addEventListener("click", function() {   
		
		var lastestColor = document.querySelector("div").style.backgroundColor;
        
		if (lastestColor === 'blue') {
			document.querySelector("div").style.backgroundColor = "red";
		}
		else {
			document.querySelector("div").style.backgroundColor = "blue";
		}
        
        
	});
});