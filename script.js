window.onload = function () {
    const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
    const port = "";
    const token = {
        "X-API-Key": "cfoNpaCzsF9xJRTOO39rF78aJRbK4fqj4W8LNv6k",
    };

    const algodClient = new algosdk.Algodv2(token, baseServer, port);
    function makeNewOriginWallet() {
        var account = algosdk.generateAccount();
        var passphrase = algosdk.secretKeyToMnemonic(account.sk);
        document.getElementById("walletId").innerHTML = account.addr;
        document.getElementById("passphrase").innerHTML = passphrase;
    }

    var plusbtn = document.getElementById("plusButton");
    var plusbtnmodal = document.getElementById("plusButtonModal");

    // When the user clicks on the button, open the modal
    plusbtn.onclick = function () {
        if ($(this).css("transform") == "none") {
            $(this).css("transform", "rotate(45deg)");
        } else {
            $(this).css("transform", "");
        }
        if (plusbtnmodal.style.display == "block") {
            plusbtnmodal.style.display = "none";
        } else {
            plusbtnmodal.style.display = "block";
        }
    };

    var createwalletbtn = document.getElementById("createWalletButton");
    var createwalletmodal = document.getElementById("createWalletModal");

    // When the user clicks on the button, open the modal
    createwalletbtn.onclick = function () {
        makeNewOriginWallet();
        createwalletmodal.style.display = "block";
    };

    var fundwalletbtn = document.getElementById("fundWalletButton");
    var fundwalletmodal = document.getElementById("fundWalletModal");

    // When the user clicks on the button, open the modal
    fundwalletbtn.onclick = function () {
        fundwalletmodal.style.display = "block";
    };
    // Get the modal
    var modal = document.getElementById("myModal");

    window.onclick = function (event) {
        if (event.target == modal || event.target == plusbtnmodal || event.target == createwalletmodal || event.target == fundwalletmodal) {
            modal.style.display = "none";
            plusbtnmodal.style.display = "none";
            createwalletmodal.style.display = "none";
            fundwalletmodal.style.display = "none";
            if ($("#plusButton").css("transform") == "none") {
                $("#plusButton").css("transform", "rotate(45deg)");
            } else {
                $("#plusButton").css("transform", "");
            }
        }
    };
};
