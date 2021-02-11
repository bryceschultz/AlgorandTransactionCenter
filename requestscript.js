window.onload = function () {
    //Defining the function that will send a post request to the heroku API
    function sendRequest(requestToEmailOrAlgoAddress, requestFromEmail, transactionAmount, requestNote) {
        document.getElementById("newTransactionButtons").style.display = "none";
        document.getElementById("errorButton").style.display = "none";
        $("#loadingStatement").text("Your request transaction has been submitted and will be confirmed shortly. Please standby for confirmation.");
        document.getElementById("loadingGif").style.display = "block";
        modal.style.display = "block";
        var postString =
            "https://algorandtransactioncenter.herokuapp.com/postRequestTransaction?"+
            "transactionAmountInAlgos=" +
            transactionAmount +
            "&requestToEmailOrAlgoAddress=" +
            requestToEmailOrAlgoAddress +
            "&requestFromEmail=" +
            requestFromEmail +
            "&requestNote=" +
            requestNote;
        var form = new FormData();
        var settings = {
            url: postString,
            method: "POST",
            timeout: 0,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            data: form,
        };

        $.ajax(settings)
            //defining done function which will execute if the post request is successful
            .done(function (response) {
                console.log(response);
                var respObj = JSON.parse(response);
                $("#successStatement").text("Request Successful.  Your request has been sent to: " + requestFromEmail);
                document.getElementById("loadingGif").style.display = "none";
                document.getElementById("loadingStatement").style.display = "none";
                document.getElementById("newTransactionButtons").style.display = "block";
            })
            //defining fail function which will execute if the post request is not successful
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
                document.getElementById("loadingGif").style.display = "none";
                document.getElementById("loadingStatement").style.display = "none";
                document.getElementById("errorButton").style.display = "block";
                $("#errorStatement").text("We were not able to send the request email. Please double check your inputs and try again.");
            });
    }

    // Get the main modal
    var modal = document.getElementById("myModal");

    // javascript function that will prevent user from submitting request if not all fields are filled out
    (function () {
        "use strict";
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll(".needs-validation");

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
                "submit",
                function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else {
                        modal.style.display = "block";
                        event.preventDefault();
                        var requestToEmailOrAlgoAddress = document.getElementById("requestToEmailOrAlgoAddress").value;
                        var requestFromEmail = document.getElementById("requestFromEmail").value;
                        var transactionAmount = document.getElementById("transactionAmount").value;
                        var requestNote = document.getElementById("requestNote").value;
                        var transactionResult = sendRequest(requestToEmailOrAlgoAddress, requestFromEmail, transactionAmount, requestNote);
                    }

                    form.classList.add("was-validated");
                },
                false
            );
        });
    })();
};
