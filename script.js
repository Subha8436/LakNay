const products = [
    {
        name: "ZEBRONICS Thunder Bluetooth 5.3 Wireless Over ear Headphones",
        image: "https://m.media-amazon.com/images/I/61smYWXWx9L._SL1500_.jpg",
        price: "₹698",
        link: "https://amzn.to/46cBzpM",
    },
    {
        name: "SKMEI Men's Digital Sports Watch",
        image: "https://m.media-amazon.com/images/I/61A8Y+BMLXL._SX679_.jpg",
        price: "₹499",
        link: "https://amzn.to/46epbWk",
    },
    {
        name: "TIMEWEAR Analog Day Date Functioning Stainless Steel Chain Watch for Men",
        image: "https://m.media-amazon.com/images/I/81nj6IlZpVL._SY879_.jpg",
        price: "₹299",
        link: "https://amzn.to/4fa7mMf",
    },
    {
        name: "Noise Twist Round dial Smart Watch",
        image: "https://m.media-amazon.com/images/I/41wp3NoyIXL._SX300_SY300_QL70_FMwebp_.jpg",
        price: "₹1299",
        link: "https://amzn.to/3Wvvp0O",
    },
    {
        name: "Noise Force Rugged & Sporty 1.32 Bluetooth Calling Smart Watch",
        image: "https://m.media-amazon.com/images/I/614pTKzcPiL._SX679_.jpg",
        price: "₹1499",
        link: "https://amzn.to/4dvEX1F",
    },
];

let rewardPoints = 0;

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 2000);

    const productsContainer = document.getElementById("products");
    const searchBar = document.getElementById("search-bar");

    function displayProducts(productsToDisplay) {
        productsContainer.innerHTML = "";
        productsToDisplay.forEach((product) => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
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
    }

    displayProducts(products);

    searchBar.addEventListener("input", (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchText)
        );
        displayProducts(filteredProducts);
    });
});
