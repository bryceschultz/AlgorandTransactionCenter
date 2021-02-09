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
  
  
  function sendTransaction(originWalletAddress, originWalletPassphrase, destinationWalletEmail, transactionAmount) {
	document.getElementById('transactionDetails').style.display = "none";
        document.getElementById('errorButton').style.display = "none";
	document.getElementById('loadingGif').style.display = "block";
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
	    var transactionLink = 'https://testnet.algoexplorer.io/tx/' + respObj.transaction_id;
	    document.getElementById("transactionLink").href=transactionLink;
	    var confirmedRoundLink = 'https://testnet.algoexplorer.io/block/' + respObj.confirmed_round;
	    document.getElementById("confirmedRoundLink").href=confirmedRoundLink;
	    var fromAddressLink = 'https://testnet.algoexplorer.io/address/' + respObj.origin_account_id;
	    document.getElementById("fromAddressLink").href=fromAddressLink;
	    var toAddressLink = 'https://testnet.algoexplorer.io/address/' + respObj.destination_account_id;
	    document.getElementById("toAddressLink").href=toAddressLink;
	    document.getElementById("loadingStatement").style.display = "none";
	    document.getElementById('loadingGif').style.display = "none";
	    document.getElementById('transactionDetails').style.display = "block";
	})
	.fail(function (jqXHR, textStatus, errorThrown) {
		console.log(errorThrown);
		document.getElementById('loadingGif').style.display = "none";
	  	document.getElementById('loadingStatement').style.display = "none";
	        document.getElementById('errorButton').style.display = "block";
		$('#errorStatement').text('This transaction was not able to be confirmed by the Algorand network. Please double check your inputs and try again.');
  });
};

  const baseServer = 'https://testnet-algorand.api.purestake.io/ps2'
  const port = '';
  const token = {
      'X-API-Key': 'cfoNpaCzsF9xJRTOO39rF78aJRbK4fqj4W8LNv6k'
  }
  
  const algodClient = new algosdk.Algodv2(token, baseServer, port);
  let needToMakeNewDestinationWallet = false;
  let needToMakeNewOriginWallet = false;
	
// Get the main modal
var modal = document.getElementById("myModal");

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
  
}
