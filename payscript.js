window.onload = function () {
    //Get both variables that are passed along with URL
    function grabLinkParams() {
        var url = new URL(window.location.href);
        var fulfillRequestTo = url.searchParams.get("fulfillRequestTo");
        $("#destinationWalletOrEmail").val(fulfillRequestTo);
        var fulfillRequestAmount = url.searchParams.get("fulfillRequestAmount");
        $("#transactionAmount").val(fulfillRequestAmount);
    }

    //Calling function on page load to grab variables from link
    grabLinkParams();

    //Defining the function that will send a post request to the heroku API
    function sendTransaction(originWalletAddress, originWalletPassphrase, destinationWalletOrEmail, transactionAmount) {
        document.getElementById("transactionDetails").style.display = "none";
        document.getElementById("errorButton").style.display = "none";
        document.getElementById("loadingGif").style.display = "block";
        modal.style.display = "block";
        $("#loadingStatement").text("Your transaction has been sent to the Algorand network and will be confirmed shortly. Please standby for confirmation.");
        var postString =
            "https://algorandtransactioncenter.herokuapp.com/postPaymentTransaction?"+
            "transactionAmountInAlgos=" +
            transactionAmount +
            "&originWalletPassphrase=" +
            originWalletPassphrase +
            "&originWalletAddress=" +
            originWalletAddress +
            "&destinationWalletOrEmail=" +
            destinationWalletOrEmail;
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
                $("#intercept").text(respObj.Intercept);
                $("#transactionId").text(respObj.transaction_id);
                $("#originAccountId").text(respObj.origin_account_id);
                $("#destinationAccountId").text(respObj.destination_account_id);
                $("#confirmationRound").text(respObj.confirmed_round);
                var transactionLink = "https://testnet.algoexplorer.io/tx/" + respObj.transaction_id;
                document.getElementById("transactionLink").href = transactionLink;
                var confirmedRoundLink = "https://testnet.algoexplorer.io/block/" + respObj.confirmed_round;
                document.getElementById("confirmedRoundLink").href = confirmedRoundLink;
                var fromAddressLink = "https://testnet.algoexplorer.io/address/" + respObj.origin_account_id;
                document.getElementById("fromAddressLink").href = fromAddressLink;
                var toAddressLink = "https://testnet.algoexplorer.io/address/" + respObj.destination_account_id;
                document.getElementById("toAddressLink").href = toAddressLink;
                document.getElementById("loadingStatement").style.display = "none";
                document.getElementById("loadingGif").style.display = "none";
                document.getElementById("transactionDetails").style.display = "block";
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
            //defining fail function which will execute if the post request is not successful
                console.log(errorThrown);
                document.getElementById("loadingGif").style.display = "none";
                document.getElementById("loadingStatement").style.display = "none";
                document.getElementById("errorButton").style.display = "block";
                $("#errorStatement").text("This transaction was not able to be confirmed by the Algorand network. Please double check your inputs and try again.");
            });
    }

    // Get the main modal
    var modal = document.getElementById("myModal");

    // javascript function that will prevent user from submitting payment if not all fields are filled out
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
                        event.preventDefault();
                        //grabbing all the inputs from the form and then calling the sendTransaction function which is defined above
                        var originWalletAddress = document.getElementById("originWalletAddress").value;
                        var originWalletPassphrase = document.getElementById("originWalletPassphrase").value;
                        var destinationWalletOrEmail = document.getElementById("destinationWalletOrEmail").value;
                        var transactionAmount = document.getElementById("transactionAmount").value;
                        var transactionResult = sendTransaction(originWalletAddress, originWalletPassphrase, destinationWalletOrEmail, transactionAmount);
                    }

                    form.classList.add("was-validated");
                },
                false
            );
        });
    })();
};
