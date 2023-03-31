         
function registration() {
  var formData = {
    name: document.getElementById("t0").value,
    mobile: document.getElementById("t1").value,
    address: document.getElementById("t2").value,
    productName: document.getElementById("product-name").value,
    id: document.getElementById("t4").value,
    cost: document.getElementById("cost-field").value,
    quantity: document.getElementById("quantity-field").value,
    brand: document.getElementById("brand-field").value
  };
  sessionStorage.setItem("formData", JSON.stringify(formData));
  window.location.href = "success.html";
}



function checkName(input){
  var name = input.value;
  var patt = /^[a-zA-Z," "]+$/;
  if(!patt.test(name)){
    alert("Please enter only letters");
    input.value = "";
  }
}

  function showError(input) {
    alert("Please enter a valid mobile number with 10 digits");
  }
    
  function showError1(input) {
    alert("Please enter only letters");
  }
    

  
  const productPrices = {
    Rice: {
      Basmathi: 50,
      Ponni: 40
    },
    Cement: {
      Ramco: 500,
      Bharathi: 400
    }
  }

  function updateBrandOptions() {
    var productName = document.getElementById("product-name").value;
    var brandField = document.getElementById("brand-field");
    var costField = document.getElementById("cost-field");
  
    var defaultOption = brandField.innerHTML;
    brandField.disabled = false;
    costField.value = "";
  
    if(productName === "") {
      brandField.innerHTML = defaultOption;
    } else {
      var brandOptions = "";
      for (const brand in productPrices[productName]) {
        brandOptions += `<option value="${brand}">${brand}</option>`;
      }
      brandField.innerHTML = brandOptions;
    }
    brandField.selectedIndex = 0;
  }

  function updateCostField() {
    var brandField = document.getElementById("brand-field");
    var selectedBrand = brandField.value;
    var quantityField = document.getElementById("quantity-field");
    var quantity = quantityField.value;
    var costField = document.getElementById("cost-field");

    // Define an object with the prices of each brand
    var brandPrices = {
        "Basmathi": 700,
        "Ponni": 820,
        "Ramco": 450,
        "Bharathi": 400
    };

    costField.value = brandPrices[selectedBrand] * quantity;
}    
