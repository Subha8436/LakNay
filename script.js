const products = [
    {
        name: "ZEBRONICS Thunder Bluetooth 5.3 Wireless Over ear Headphone",
        image: "https://m.media-amazon.com/images/I/41mkKnWxMCL._SX300_SY300_QL70_FMwebp_.jpg",
        link: "https://amzn.to/46cBzpM",
    },
    {
        name: "V2A Chronograph Analogue and Digital Sports Watch for Men",
        image: "https://m.media-amazon.com/images/I/71EcGgX9miL._SY879_.jpg",
        link: "https://amzn.to/46epbWk",
    },
    {
        name: "Product 3",
        image: "https://via.placeholder.com/150",
        link: "https://affiliate-link-3.com",
    },
        {
        name: "Product 4",
        image: "https://via.placeholder.com/150",
        link: "https://affiliate-link-4.com",
    },
];

let rewardPoints = 0;

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");
    products.forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <a href="${product.link}" target="_blank" class="buy-link">Buy Now</a>
        `;
        productsContainer.appendChild(productElement);
    });

    document.querySelectorAll('.buy-link').forEach(link => {
        link.addEventListener('click', () => {
            rewardPoints += 10; // Add 10 points for each purchase
            document.getElementById('rewardPoints').innerText = `Reward Points: ${rewardPoints}`;
        });
    });
});
