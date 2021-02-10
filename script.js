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

// Get the modals
var modal = document.getElementById("myModal");
var createwalletmodal = document.getElementById("createWalletModal");
var createwalletbtn = document.getElementById("createWalletButton");
var fundwalletbtn = document.getElementById("fundWalletButton");
var fundwalletmodal = document.getElementById("fundWalletModal");
var plusbtn = document.getElementById("plusButton");
var plusbtnmodal = document.getElementById("plusButtonModal");

// When the user clicks on the button, open the modal
createwalletbtn.onclick = function () {
    makeNewOriginWallet();
    createwalletmodal.style.display = "block";
};

// When the user clicks on the button, open the modal
fundwalletbtn.onclick = function () {
    fundwalletmodal.style.display = "block";
};

// When the user clicks on the button, open the modal
plusbtn.onclick = function () {
    if ($(this).css("transform") == "none") {
        $(this).css("transform", "rotate(45deg)");
    } else {
        $(this).css("transform", "");
    }
    if (plusbtnmodal.style.display == "block" || createwalletmodal.style.display == "block" || fundwalletmodal.style.display == "block") {
        plusbtnmodal.style.display = "none";
        createwalletmodal.style.display = "none";
        fundwalletmodal.style.display = "none";
    } else {
        plusbtnmodal.style.display = "block";
    }
};

window.onclick = function (event) {
    if (event.target == plusbtnmodal || event.target == createwalletmodal || event.target == fundwalletmodal) {
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
