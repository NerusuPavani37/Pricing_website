document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.querySelector(".toggle input");
  const monthlyPrices = document.querySelectorAll(".monthly");
  const annuallyPrices = document.querySelectorAll(".annually");

  // Function to update the price display based on the toggle state
  const updatePriceDisplay = () => {
    if (toggleSwitch.checked) {
      // If toggle is checked (monthly), show monthly prices and hide annually prices
      monthlyPrices.forEach((price) => (price.style.display = "block"));
      annuallyPrices.forEach((price) => (price.style.display = "none"));
    } else {
      // If toggle is not checked (annually), show annually prices and hide monthly prices
      monthlyPrices.forEach((price) => (price.style.display = "none"));
      annuallyPrices.forEach((price) => (price.style.display = "block"));
    }
  };

  // Initial setup based on the default state of the toggle
  updatePriceDisplay();

  // Add event listener to the toggle switch for changes
  toggleSwitch.addEventListener("change", updatePriceDisplay);
});
