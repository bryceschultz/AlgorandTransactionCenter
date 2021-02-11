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
1. From the home page (https://sendalgo.com) click anywhere
1. Now click on the 'Pay' side of the page
1. Fill out the payment transaction form:
   1. Enter your algorand address in the first box.
   1. Enter your algorand passphrase in the second box.
   1. Enter another users algorand address you wish to send the algos to in the third box.
   1. Enter the amount of algos you want to send in the fourth box.
  <img src="documentation-images/paymenttransaction.png">
1. Hit enter
   1. If your transaction is successful you will see the below message:
  <img src="documentation-images/paymentsuccessful.png">

## Functionality 2. pay an Email
2. From the home page (https://sendalgo.com) click anywhere
2. Now click on the 'Pay' side of the page
2. Fill out the payment transaction form:
   2. Enter your algorand address in the first box.
   2. Enter your algorand passphrase in the second box.
   2. Enter another users email address you wish to send the algos to in the third box.
   2. Enter the amount of algos you want to send in the fourth box.
   <img src="documentation-images/paymenttransactiontoemail.png">
2. Hit enter
   2. If your transaction is successful you will see the below message:
   <img src="documentation-images/paymentsuccessful.png">
  
  ## Functionality 3. request a user to pay you
3. From the home page (https://sendalgo.com) click anywhere
3. Now click on the 'Request' side of the page
3. Fill out the request transaction form:
   3. Enter your algorand address in the first box.
   3. Enter your algorand passphrase in the second box.
   3. Enter another users email address you wish to send the algos to in the third box.
   3. Enter the amount of algos you want to send in the fourth box.
   <img src="documentation-images/paymenttransactiontoemail.png">
3. Hit enter
   3. If your transaction is successful you will see the below message:
   <img src="documentation-images/paymentsuccessful.png">
  
  ## Functionality 3. creating a wallet
  
  ## Functionality 3. funding a wallet
