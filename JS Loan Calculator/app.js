// Listen for Submit button
document.getElementById("loan-form").addEventListener("submit", function (e) {
  //Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calcresult, 2000);
  e.preventDefault();
});

// The actual calculation function
function calcresult() {
  // alert("hi");
  //UI variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value); //as only amount will result in a string

  const calculatedInterest = parseFloat(interest.value) / 100 / 12;

  const calculatedPayments = parseFloat(years.value) * 12;

  //Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);

  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = monthly * calculatedPayments - principal.toFixed(2);

    //Show results
    document.getElementById("results").style.display = "block";

    //Hide spinner
    document.getElementById("loading").style.display = "none";
  } else {
    // console.log("Wrong input, please correct.");
    showError("Invalid input. Please check!");
  }
}

function showError(error) {
  //Show results
  document.getElementById("results").style.display = "none";

  //Hide spinner
  document.getElementById("loading").style.display = "none";
  //Create div
  const errorDiv = document.createElement("div");

  //Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //Add bootstrap classes
  errorDiv.className = "alert alert-danger";

  //Create text node and append
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3s
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
