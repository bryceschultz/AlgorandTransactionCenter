  window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});
  
  const baseServer = 'https://testnet-algorand.api.purestake.io/ps2'
  const port = '';
  const token = {
      'X-API-Key': 'cfoNpaCzsF9xJRTOO39rF78aJRbK4fqj4W8LNv6k'
  }
  
  const algodClient = new algosdk.Algodv2(token, baseServer, port);
  let needToMakeNewDestinationWallet = false;
  let needToMakeNewOriginWallet = false;
  
  
    //////////////////////////
  ///            Letting the below function know how many wallets it needs to make
  //////////////////////////
  document.getElementById("destinationwalletbutton").addEventListener("click", updateDestinationWallet)
  function updateDestinationWallet() {
    if (needToMakeNewDestinationWallet == true) {
      needToMakeNewDestinationWallet = false;
      document.getElementById("explanationDestinationWallet").innerHTML = "";
      console.log(needToMakeNewDestinationWallet);
    } else {
      needToMakeNewDestinationWallet = true
      document.getElementById("explanationDestinationWallet").innerHTML = "No problem we'll setup a new account for the transaction receiver and send it to their email";
      console.log(needToMakeNewDestinationWallet);
    }
  }
  
  document.getElementById("originwalletbutton").addEventListener("click", updateOriginWallet)
  function updateOriginWallet() {
    if (needToMakeNewOriginWallet == true) {
      needToMakeNewOriginWallet = false;
      document.getElementById("explanationOriginWallet").innerHTML = "";
      console.log(needToMakeNewOriginWallet);
    } else {
      needToMakeNewOriginWallet = true
      document.getElementById("explanationOriginWallet").innerHTML = "No problem we'll setup a new account for you";
      console.log(needToMakeNewOriginWallet);
    }
  }
  
  function makeNewOriginWallet() {
          var account = algosdk.generateAccount();
          var passphrase = algosdk.secretKeyToMnemonic(account.sk);
          document.getElementById("walletId").innerHTML = account.addr;
          document.getElementById("passphrase").innerHTML = passphrase;
          console.log( "My address: " + account.addr );
          console.log( "My passphrase: " + passphrase )
  }  
  
  //////////////////////////
  ///            Modal
  //////////////////////////
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("nextButton");

// When the user clicks on the button, open the modal
btn.onclick = function() {
            if (needToMakeNewOriginWallet == true && needToMakeNewDestinationWallet == true) {
            makeNewOriginWallet();
            document.getElementById("modalLink").href = "https://bryceschultz.github.io/AlgorandTransactionCenter/paymenttransactiontoemail.html";
            modal.style.display = "block";
          } else if (needToMakeNewOriginWallet == false && needToMakeNewDestinationWallet == true) {
            window.location.replace("https://bryceschultz.github.io/AlgorandTransactionCenter/paymenttransactiontoemail.html");
          } else if (needToMakeNewOriginWallet == true && needToMakeNewDestinationWallet == false) {
            makeNewOriginWallet();
            document.getElementById("modalLink").href = "https://bryceschultz.github.io/AlgorandTransactionCenter/paymenttransactiontowallet.html";
            modal.style.display = "block";
          } else {
            console.log('nice! no wallets to generate');
            window.location.replace("https://bryceschultz.github.io/AlgorandTransactionCenter/paymenttransactiontowallet.html");
          }
}
