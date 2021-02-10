window.onload = function () {
    function sendRequest(requestToEmailOrAlgoAddress, requestFromEmail, transactionAmount, requestNote) {
        document.getElementById("newTransactionButtons").style.display = "none";
        document.getElementById("errorButton").style.display = "none";
        $("#loadingStatement").text("Your transaction has been sent to the Algorand network and will be confirmed shortly. Please standby for confirmation.");
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
            .done(function (response) {
                console.log(response);
                var respObj = JSON.parse(response);
                $("#successStatement").text("Request Successful.  Your request has been sent to: " + requestFromEmail);
                document.getElementById("loadingGif").style.display = "none";
                document.getElementById("loadingStatement").style.display = "none";
                document.getElementById("requestToEmailOrAlgoAddress").attr('readonly','readonly');
                document.getElementById("requestFromEmail").attr('readonly','readonly');
                document.getElementById("transactionAmount").attr('readonly','readonly');
                document.getElementById("requestNote").attr('readonly','readonly');
                document.getElementById("newTransactionButtons").style.display = "block";
            })
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

    // Example starter JavaScript for disabling form submissions if there are invalid fields
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
