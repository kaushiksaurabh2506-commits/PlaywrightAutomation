type paymentmethod="UPI"|"CreditCard"|"PayPal";

function makePayment(method: paymentmethod) {
    console.log(`Payment method selected:`, method)
}

makePayment("UPI");
makePayment("CreditCard");
makePayment("PayPal");