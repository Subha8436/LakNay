const products = [
    {
        name: "Color Block Men Multicolor, Black, White",
        image: "https://rukminim1.flixcart.com/image/850/1050/xif0q/shopsy-t-shirt/x/c/e/l-round-neck-farrowx-original-imagpycsz539myzs.jpeg?q=20&crop=false",
        price: "₹175",
        link: "https://www.shopsy.in/color-block-men-multicolor-black-white-t-shirt/p/itm24a036cb5eaa9?pid=XPTGPYCSEFYY7EW9&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.b9925eb7-e8b5-46c1-9100-7e0bd55e0b68.XPTGPYCSEFYY7EW9&_appId=CL",
    },
    {
        name: "Self Design Men Black Track Pants",
        image: "https://rukminim1.flixcart.com/image/850/1050/xif0q/shopsy-track-pant/x/f/e/xxl-spy-l15-cut-rusksun-original-imah2vuw4byyhnzs.jpeg?q=20&crop=false",
        price: "₹159",
        link: "https://www.shopsy.in/self-design-men-black-track-pants/p/itm6701125575175?pid=XTPGXYBRW4SGFTJY&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.fd0d35ba-656a-48eb-a094-1ad9b8e96250.XTPGXYBRW4SGFTJY&_appId=CL",
    },
    {
        name: "Men Checkered Formal Grey Shirt",
        image: "https://rukminim1.flixcart.com/image/850/1050/xif0q/shopsy-shirt/8/h/g/xxl-s-check-grey-rodeiz-original-imah3etwyqfpzrts.jpeg?q=20&crop=false",
        price: "₹269",
        link: "https://www.shopsy.in/men-checkered-formal-grey-shirt/p/itm063bd772e8e16?pid=XSRGYR8DZSRTDZFZ&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.196400c6-29e1-4d95-b526-e2124fdcfd2d.XSRGYR8DZSRTDZFZ&_appId=CL",
    },
    {
        name: "Avio Lather buy 1 get 1 FREE Analog Watch  - For Men",
        image: "https://rukminim1.flixcart.com/image/850/850/xif0q/shopsy-watch/c/q/c/2-buy-1-get-1-free-daniel-radcliffe-men-original-imagzgk7ssvpfafu.jpeg?q=20&crop=false",
        price: "₹219",
        link: "https://www.shopsy.in/avio-lather-buy-1-get-free-analog-watch-men/p/itm421fe24306bed?pid=XWWGZGK7AJBSZ9E3&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.043bf58e-185b-49ea-87f3-f420411c921d.XWWGZGK7AJBSZ9E3&_appId=CL",
    },
    {
        name: "NIKE Mercurial Vapor 16 Club MG Football Shoes For Me",
        image: "https://rukminim1.flixcart.com/image/750/900/xif0q/shoe/8/c/q/6-fq8441-400-6-nike-glacier-blue-blue-orbit-original-imah2zdyz4csv8g6.jpeg?q=20&crop=false",
        price: "₹4990",
        link: "https://www.shopsy.in/nike-mercurial-vapor-16-club-mg-football-shoes-men/p/itmb72461b679b10?pid=SHOH2ZDYCJAZFTGH&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.4a186dc1-c753-4ccb-a829-40fc519aa79c.SHOH2ZDYCJAZFTGH&_appId=CL",
    },
    {
        name: "Stylish Comfortable Premium Sports Shoe for men Running Shoes",
        image: "https://rukminim1.flixcart.com/image/750/500/xif0q/shoe/r/i/v/8-stylish-comfortable-lightweight-running-shoes-walking-shoes-original-imagk6rpcq98hzny.jpeg?q=20&crop=false",
        price: "₹290",
        link: "https://www.shopsy.in/stylish-comfortable-premium-sports-shoes-men-running-casuals/p/itmf2cd147bcc9e3?pid=EOEGXW34QGE5FK9R&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.69560946-3355-4b0a-9768-44f812f78491.EOEGXW34QGE5FK9R&_appId=WA",
    },
    {
        name: "Wireless Gaming Sports Headphones Stereo With SD Card & 5-6h Battery Backup",
        image: "https://rukminim1.flixcart.com/image/750/750/xif0q/headphone/6/y/s/wireless-gaming-sports-headphones-stereo-with-sd-card-5-6h-original-imah2d78vufdgmtq.jpeg?q=20&crop=false",
        price: "₹299",
        link: "https://www.shopsy.in/wireless-gaming-sports-headphones-stereo-sd-card-5-6h-battery-backupwe353-bluetooth-headset/p/itm0570f5a5f8a24?pid=XHOH2D8FMM7UGDX2&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.8c49aef3-cb60-4724-897a-c11cac49d9f8.XHOH2D8FMM7UGDX2&_appId=CL",
    },
    {
        name: "ZEBRONICS Thunder Bluetooth 5.3 Wireless Over ear Headphones",
        image: "https://m.media-amazon.com/images/I/61smYWXWx9L._SL1500_.jpg",
        price: "₹698",
        link: "https://amzn.to/46cBzpM",
    },
        {
        name: "Black Day and Date Analog Watch",
        image: "https://rukminim1.flixcart.com/image/850/1050/xif0q/watch/x/v/p/1-eh-226-bk-eddy-hager-men-original-imahfqyqhgbtwmwu.jpeg?q=20&crop=false",
        price: "₹278",
        link: "https://www.shopsy.in/black-day-date-analog-watch-men/p/itme0a11754184c4?pid=XWWG9G9RRPHHYJS9&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.b6f0d275-a6a7-4318-b330-9a9784d8ee35.XWWG9G9RRPHHYJS9&_appId=CL",
    },
    {
        name: "CheckBlueRay0507 Day And Date Functioning Mens and Boys Solitary Blue Dial Unique Pattern New Latest Trendy Stylish Analog Watch",
        image: "https://rukminim1.flixcart.com/image/850/1050/kcxpbww0/watch/e/w/j/checkblueray0507-espoir-original-imafty4ujpfwj3dv.jpeg?q=20&crop=false",
        price: "₹311",
        link: "https://www.shopsy.in/checkblueray0507-day-date-functioning-mens-boys-solitary-blue-dial-unique-pattern-new-latest-trendy-stylish-analog-watch-men/p/itm8e4e528ea66a5?pid=XWWG8TM7HHUSQYBG&affid=inf_58a05c12-d91e-4903-a5e5-fb790385d6e6&cmpid=product.share.pp&_refId=PP.80b73f15-af30-49fa-98da-85b7a379a224.XWWG8TM7HHUSQYBG&_appId=CL",
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
