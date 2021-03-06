# AlgorandTransactionCenter

## Usage
To interact with the existing application you can go to https://sendalgo.com where the application is hosted via github pages.

The application attemps to make it incredibly simple for a first time user to send transactions over the Algorand TestNet.

The application can also be forked and built upon by another user wishing to develop it further using the below cmd:
````
$ git clone https://github.com/bryceschultz/AlgorandTransactionCenter
````

## Architecture
<img src="documentation-images/SendAlgoArchitecture.png">

## Functionalities
The 5 main functionalities of the Algorand Transaction Center are as follows:
1. Allow a user to send a payment from their Algorand address to another users Algorand address
2. Allow a user to send a payment from their Algorand address to another users email (an Algorand address is created at the time of transaction and sent to the receiving user).
3. Allow a user to send a request for payment to another user via email.
4. Allow a user to create a wallet with a web UI
5. Guide a user through funding their wallet using a web UI

## Functionality 1. pay an existing Algorand address
<pre>
1. From the home page (https://sendalgo.com) click anywhere
2. Now click on the 'Pay' side of the page
3. Fill out the payment transaction form:
   a. Enter your algorand address in the first box.
   b. Enter your algorand passphrase in the second box.
   c. Enter another users algorand address you wish to send the algos to in the third box.
   d. Enter the amount of algos you want to send in the fourth box.</pre>
  <img src="documentation-images/paymenttransaction.png">
  <pre>
4. Hit enter
   a. If your transaction is successful you will see the below screen:</pre>
  <img src="documentation-images/paymentsuccessful.png">

## Functionality 2. pay an Email
<pre>
1. From the home page (https://sendalgo.com) click anywhere
2. Now click on the 'Pay' side of the page
3. Fill out the payment transaction form:
   a. Enter your algorand address in the first box.
   b. Enter your algorand passphrase in the second box.
   c. Enter another users email address you wish to send the algos to in the third box.
   d. Enter the amount of algos you want to send in the fourth box.</pre>
   <img src="documentation-images/paymenttransactiontoemail.png">
   <pre>
4. Hit enter
   a. If your transaction is successful you will see the below message:</pre>
   <img src="documentation-images/paymentsuccessful.png">
  <pre>
5. The user whose email you entered (the transaction recipient) will receive
   an email like the one shown below that will provide them with the ID and 
   passphrase to access the algos.</pre>
   <img src="documentation-images/paymenttoemailrecipient.png">
   
  ## Functionality 3. request a user to pay you
  <pre>
1. From the home page (https://sendalgo.com) click anywhere
2. Now click on the 'Request' side of the page
3. Fill out the request transaction form:
   a. Enter the amount of algos you're requesting in the first box
   b. Enter the email you're requesting the algos from in the second box.
   c. Enter your email or algorand address that you want the algos to be sent to in the third box.
   d. Enter what the request is for in the fourth box.</pre>
   <img src="documentation-images/requesttransaction.png">
   <pre>
4. Hit enter
   a. If your transaction is successful you will see the below screen:</pre>
   <img src="documentation-images/requestsuccessful.png">
   <pre>
5. The user whose email you requested the payment from will receive
   an email like the one shown below that will provide them with a link that 
   will autopopulate the payment screen with who the transaction is being sent
   to and how much the payment is for.</pre>
   <img src="documentation-images/requestrecipient.png">
   
  ## Functionality 4. creating a wallet
  <pre>
1. From either the send page (https://sendalgo.com/paymenttransaction.html)
 or the receive page (https://sendalgo.com/requesttransaction.html)
 click the big green plus button in the upper left corner and the below menu will pop up.</pre>
 <img src="documentation-images/plusbuttonmodal.png">
 <pre>
2. Click the "Create Wallet" button and a new Algorand address and passphrase 
 will be generated and displayed for you.</pre>
 
  ## Functionality 5. funding a wallet
1. From either the send page (https://sendalgo.com/paymenttransaction.html)
 or the receive page (https://sendalgo.com/requesttransaction.hmtl)
 click the big green plus button in the upper left corner and the below menu will pop up.</pre>
 <img src="documentation-images/plusbuttonmodal.png">
 <pre>
2. Click the "Fund Wallet" button and a box will pop up with instructions 
 and a link
3. Click on the "testnet faucet" link.
4. After arriving at the Test Net faucet (the url should be 'https://bank.testnet.algorand.network/') 
 enter the Algorand address you would like to 
 fund in the 'target address' input spot shown below.</pre>
  <img src="documentation-images/testnetfaucet.png">
  <pre>
5. Click the Dispense button
6. If successful you will receive a 200 messsage like shown below.</pre>
 <img src="documentation-images/testnetfaucetsuccessful.png">
