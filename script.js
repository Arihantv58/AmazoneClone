document.addEventListener("DOMContentLoaded", () => {
    // Search Functionality
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");
  
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query !== "") {
        alert(`Searching for: ${query}`);
        searchInput.value = "";
      } else {
        alert("Please enter a search term.");
      }
    });
  
    // Dynamically Add Categories
    const categorySelect = document.getElementById("types");
    const categories = ["Electronics", "Fashion", "Books", "Toys", "Home & Kitchen"];
  
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.toLowerCase();
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  
    // Cart Counter
    const cartButton = document.querySelector(".nav-cart");
    let cartCount = 0;
    cartButton.addEventListener("click", () => {
      cartCount++;
      alert(`Items in cart: ${cartCount}`);
    });
  
    // Smooth Scroll to Top
    const backToTop = document.querySelector(".foot-panel1");
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Navbar Hover Effects
    const navItems = document.querySelectorAll(".border");
    navItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        item.style.border = "1.5px solid white";
      });
      item.addEventListener("mouseleave", () => {
        item.style.border = "1.5px solid transparent";
      });
    });
  });
  