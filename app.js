const showProductDetailsBtn = document.querySelector(".click-btn");

showProductDetailsBtn.addEventListener("click", () => {
  showProductDetailsBtn.classList.toggle("clicked");

  const productImageContainer = document.querySelector("#product-img");
  const type =
    productImageContainer.getAttribute("type") === "img" ? "gif" : "img";
  productImageContainer.setAttribute("type", type);

  type === "gif"
    ? (productImageContainer.src = "/product-card/assets/sofa-gif.gif")
    : (productImageContainer.src = "/product-card/assets/sofa.png");
});
