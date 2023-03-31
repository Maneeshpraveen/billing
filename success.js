function fillBill(){
var formData = JSON.parse(sessionStorage.getItem("formData"));
document.getElementById("name").innerHTML = formData.name;
document.getElementById("mobile").innerHTML = formData.mobile;
document.getElementById("address").innerHTML = formData.address;
document.getElementById("product-name").innerHTML = formData.productName;
document.getElementById("id").innerHTML = formData.id;
document.getElementById("cost").innerHTML = formData.cost;
document.getElementById("quantity").innerHTML = formData.quantity;
document.getElementById("brand").innerHTML = formData.brand;
}

function printPage() {
    window.print();
  }

  /*setTimeout(function(){
    location.href = "index.html";
 }, 5000);   this is for reload the page*/  
 
 