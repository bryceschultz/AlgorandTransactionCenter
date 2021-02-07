window.onload = function(){  
  
  // Get the modal
var modal = document.getElementById("myModal");
  
  
  function sendRequest(requestToEmailOrAlgoAddress, requestFromEmail, transactionAmount, requestNote) {
    var postString = "https://algorandtransactioncenter.herokuapp.com/postRequestTransaction?transactionAmountInAlgos="+transactionAmount+"&requestToEmailOrAlgoAddress="+requestToEmailOrAlgoAddress+"&requestFromEmail="+requestFromEmail+"&requestNote="+requestNote;    
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
    if (respObj.emailSent == true) {
      $('#emailSent').text('Request has been sent to: ' + requestFromEmail);
    } else {
      $('#emailSent').text('We were not able to send the email. Please reload the page and try again.');
    }
  });
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
		    var requestToEmailOrAlgoAddress = document.getElementById("requestToEmailOrAlgoAddress").value;
        console.log(requestToEmailOrAlgoAddress);
        var requestFromEmail = document.getElementById("requestFromEmail").value;
        console.log(requestFromEmail);
        var transactionAmount = document.getElementById("transactionAmount").value;
        console.log(transactionAmount);
        var requestNote = document.getElementById("requestNote").value;
        console.log(requestNote);
        var transactionResult = sendRequest(requestToEmailOrAlgoAddress, requestFromEmail, transactionAmount, requestNote);
	}

        form.classList.add('was-validated')
      }, false)
    })
})()
  
}
