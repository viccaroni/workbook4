let shippingLabel = {
  shippingName: "Victoria Hernandez",
  shippingAddress: "4646 whoville hehe street",
  shippingCity: "Some Place,",
  shippingState: "yassss",
  shippingZip: 26439,
};
function printContact(shippingLabel){
    console.log(shippingLabel.shippingName);
    console.log(shippingLabel.shippingAddress);
    console.log(shippingLabel.shippingCity, shippingLabel.shippingState, shippingLabel.shippingZip);
 

    // console.log(`
    // ${shippingLabel.shippingName}
    // ${shippingLabel.shippingAddress}
    // ${shippingLabel.shippingCity}, ${shippingLabel.shippingState} ${shippingLabel.shippingZip}`);
}
printContact(shippingLabel)