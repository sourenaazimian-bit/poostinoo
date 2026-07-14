// ===============================
// Poostinoo Professional Script
// Version 1.0
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    let cartCount = 0;

    const cartBadge = document.querySelector(".cart-count");

    const addButtons = document.querySelectorAll(".product-card button");

    addButtons.forEach(button => {

        button.addEventListener("click", () => {

            cartCount++;

            if(cartBadge){

                cartBadge.textContent = cartCount;

            }

            showToast("محصول به سبد خرید اضافه شد.");

        });

    });

    function showToast(message){

        const toast = document.createElement("div");

        toast.className = "toast";

        toast.innerText = message;

        document.body.appendChild(toast);

        setTimeout(()=>{

            toast.classList.add("show");

        },100);

        setTimeout(()=>{

            toast.classList.remove("show");

            setTimeout(()=>{

                toast.remove();

            },400);

        },2500);

    }

});

document.querySelectorAll('a[href="#"]').forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

    });

});
