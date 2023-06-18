function highlight() {
    //Write your code here
	    var x = document.getElementsByTagName('strong');
	     // x.style.color = "green";
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.color = "green";
		}
}

function return_normal() {
    //Write your code here

	    var x = document.getElementsByTagName('strong');
		var i;
		for (i = 0; i < x.length; i++) {
			x[i].style.color = "black";
		}
}
