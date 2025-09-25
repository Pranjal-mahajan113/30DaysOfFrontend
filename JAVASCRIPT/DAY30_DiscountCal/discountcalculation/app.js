// const price = document.querySelector("#price");
// const discount = document.querySelector("#discount")
// const btn = document.querySelector("#btn");
// const result = document.querySelector("#result");
 
// btn.addEventListener("click",() =>{
//      if (isNaN(price) || isNaN(discount)) {
//         alert("Please enter valid numbers.");
//         return;
//       }

// })


const price = document.querySelector("#price");
const discount = document.querySelector("#discount");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    const priceValue = parseFloat(price.value);
    const discountValue = parseFloat(discount.value);

    if (isNaN(priceValue) || isNaN(discountValue)) {
        alert("Please enter valid numbers.");
        return;
    }

    const discountAmt = (priceValue * discountValue) / 100;
    const finalAmt = priceValue - discountAmt;

    document.querySelector("#discountamount").textContent = `Discount: ₹${discountAmt.toFixed(2)}`;
    document.querySelector("#finalprice").textContent = `Final Price: ₹${finalAmt.toFixed(2)}`;
});
