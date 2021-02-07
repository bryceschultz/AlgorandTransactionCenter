window.onload = function(){  
//Get any variables passed along with URL
  function grabLinkParams() {
    var url = new URL(window.location.href);
    var fulfillRequestTo = url.searchParams.get("fulfillRequestTo");
    console.log(fulfillRequestTo);
    $('#destinationWalletEmail').val(fulfillRequestTo);
    var fulfillRequestAmount = url.searchParams.get("fulfillRequestAmount");
    $('#transactionAmount').val(fulfillRequestAmount);
    console.log(fulfillRequestAmount);
  };
  
  //Calling function on page load
  window.onload = grabLinkParams;
  
  
  // Get the modal
var modal = document.getElementById("myModal");
  
  
  function sendTransaction(originWalletAddress, originWalletPassphrase, destinationWalletEmail, transactionAmount) {
	modal.style.display = "block";
	   $('#loadingStatement').text('Your transaction has been sent to the Algorand network and will be confirmed shortly. Please standby for confirmation.');
    var postString = "https://algorandtransactioncenter.herokuapp.com/postTransactionToNewAccount?transactionAmountInAlgos="+transactionAmount+"&originWalletPassphrase="+originWalletPassphrase+"&originWalletAddress="+originWalletAddress+"&destinationWalletEmail="+destinationWalletEmail;    
    var form = new FormData();
    var settings = {
    "url": postString,
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    var respObj = JSON.parse(response);
    $('#intercept').text(respObj.Intercept);
    $('#transactionId').text(respObj.transaction_id);
    $('#originAccountId').text(respObj.origin_account_id);
    $('#destinationAccountId').text(respObj.destination_account_id);
    $('#confirmationRound').text(respObj.confirmed_round);
	var transactionLink = 'https://algoexplorer.io/tx/' + respObj.transaction_id;
	document.getElementById("transactionLink").href=transactionLink;
	var fromAddressLink = 'https://algoexplorer.io/address/' + respObj.origin_account_id;
	  document.getElementById("transactionLink").href=fromAddressLink;
	var toAddressLink = 'https://algoexplorer.io/address/' + respObj.destination_account_id;
	  document.getElementById("transactionLink").href=toAddressLink;
  });
  }
  
var newTransactionToSameWalletBtn = document.getElementById("newTransactionToSameWallet");  
 newTransactionToSameWalletBtn.onclick = function() {
   modal.style.display = "none";
 }

var createwalletmodal = document.getElementById("createWalletModal");
var createwalletbtn = document.getElementById("createWalletButton");

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

  const baseServer = 'https://testnet-algorand.api.purestake.io/ps2'
  const port = '';
  const token = {
      'X-API-Key': 'cfoNpaCzsF9xJRTOO39rF78aJRbK4fqj4W8LNv6k'
  }
  
  const algodClient = new algosdk.Algodv2(token, baseServer, port);
  let needToMakeNewDestinationWallet = false;
  let needToMakeNewOriginWallet = false;
	
  function makeNewOriginWallet() {
          var account = algosdk.generateAccount();
          var passphrase = algosdk.secretKeyToMnemonic(account.sk);
          document.getElementById("walletId").innerHTML = account.addr;
          document.getElementById("passphrase").innerHTML = passphrase;
          console.log( "My address: " + account.addr );
          console.log( "My passphrase: " + passphrase )
  }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
		  event.preventDefault()
		  var originWalletAddress = document.getElementById("originWalletAddress").value;
		  console.log(originWalletAddress);
		  var originWalletPassphrase = document.getElementById("originWalletPassphrase").value;
		  console.log(originWalletPassphrase);
		  var destinationWalletEmail = document.getElementById("destinationWalletEmail").value;
		  console.log(destinationWalletEmail);
		  var transactionAmount = document.getElementById("transactionAmount").value;
		  console.log(transactionAmount);
		  var transactionResult = sendTransaction(originWalletAddress, originWalletPassphrase, destinationWalletEmail, transactionAmount);
	}

        form.classList.add('was-validated')
      }, false)
    })
})()
  
};
