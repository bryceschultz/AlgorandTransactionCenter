//defining algod client
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

// Get all modals on page
var modal = document.getElementById("myModal");
var createwalletmodal = document.getElementById("createWalletModal");
var fundwalletmodal = document.getElementById("fundWalletModal");
var plusbtnmodal = document.getElementById("plusButtonModal");

// Get all buttons on page
var createwalletbtn = document.getElementById("createWalletButton");
var fundwalletbtn = document.getElementById("fundWalletButton");
var plusbtn = document.getElementById("plusButton");

// When the user clicks on the Create Wallet button, open the modal
createwalletbtn.onclick = function () {
    makeNewOriginWallet();
    createwalletmodal.style.display = "block";
};

// When the user clicks on the Fund Wallet button, open the modal
fundwalletbtn.onclick = function () {
    fundwalletmodal.style.display = "block";
};

//Fire this function when the user clicks on the round Plus button
plusbtn.onclick = function () {
    if ($(this).css("transform") == "none") {
        $(this).css("transform", "rotate(45deg)");
    } else {
        $(this).css("transform", "");
    }
    //If the user clicks on the round Plus button when any of the modals are already open then close the modals
    if (plusbtnmodal.style.display == "block" || createwalletmodal.style.display == "block" || fundwalletmodal.style.display == "block") {
        plusbtnmodal.style.display = "none";
        createwalletmodal.style.display = "none";
        fundwalletmodal.style.display = "none";
    } else {
        // When the user clicks on the round Plus Button but no modals are open, open the Plus button modal
        plusbtnmodal.style.display = "block";
    }
};

window.onclick = function (event) {
    if (event.target == plusbtnmodal || event.target == createwalletmodal || event.target == fundwalletmodal) {
        //If the user clicks outside of one of the modals then close the modals - this applies to all modals besides 
        //the main modal which shows after completion of the transaction and will not allow a user to click outside of it
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
