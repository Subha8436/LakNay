const products = [
    {
        name: "Product 1",
        image: "https://via.placeholder.com/150",
        link: "https://affiliate-link-1.com",
    },
    {
        name: "Product 2",
        image: "https://via.placeholder.com/150",
        link: "https://affiliate-link-2.com",
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
            <h3>${product.name}</h3>
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