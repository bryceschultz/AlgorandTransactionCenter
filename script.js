var plusbtn = document.getElementById("plusButton");
var plusbtnmodal = document.getElementById("plusButtonModal");

// When the user clicks on the button, open the modal
plusbtn.onclick = function() {
	    if (  $( this ).css( "transform" ) == 'none' ){
		$(this).css("transform","rotate(45deg)");
	    } else {
		$(this).css("transform","" );
	    }
	if (plusbtnmodal.style.display == "block") {
	plusbtnmodal.style.display = "none"; 
	} else {
	plusbtnmodal.style.display = "block";	
	}
}

var createwalletbtn = document.getElementById("createWalletButton");
var createwalletmodal = document.getElementById("createWalletModal");

// When the user clicks on the button, open the modal
createwalletbtn.onclick = function() {
	console.log('create wallet button has fired');
	makeNewOriginWallet();
	createwalletmodal.style.display = "block";
}
	
var fundwalletbtn = document.getElementById("fundWalletButton");
var fundwalletmodal = document.getElementById("fundWalletModal");
	
// When the user clicks on the button, open the modal
fundwalletbtn.onclick = function() {
	console.log('fund wallet button has fired');
	fundwalletmodal.style.display = "block";
}
  // Get the modal
var modal = document.getElementById("myModal");
  
window.onclick = function(event) {
  if (event.target == modal || event.target == plusbtnmodal || event.target == createwalletmodal || event.target == fundwalletmodal) {
    	modal.style.display = "none";
	plusbtnmodal.style.display = "none";
	createwalletmodal.style.display = "none";
	fundwalletmodal.style.display = "none";
	  console.log('window.onclick has fired');
	 	if (  $('#plusButton').css( "transform" ) == 'none' ){
		console.log('$#plusButton.css if has fired');
		$('#plusButton').css("transform","rotate(45deg)");
	    } else {
		$('#plusButton').css("transform","" );
	    }
  }
}
