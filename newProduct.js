const Products = JSON.parse(localStorage.getItem("products"));

const newProductsContainer = document.getElementById('new-products');

newProductsContainer.innerHTML = Products.map(({ title }, i) => {
    return  (
                `
                    <ul class="list-group" id="list-products" data-idx="${i}">
                        <li class="list-group-item">${title}</li>
                    </ul>
                `
            );
}).join('')

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let listProducts = document.getElementById("list-products");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
    } else {
        msg.innerHTML = "";
        acceptData()
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    createPost();
};

let createPost = () => {
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt = randomIntFromInterval(1, 8)

    const imgRandom = {
        1: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/388549/01/sv01/fnd/PNA/fmt/png",
        2: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/385962/01/sv01/fnd/PNA/fmt/png",
        3: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/372832/01/sv01/fnd/PNA/fmt/png",
        4: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/366613/01/sv01/fnd/PNA/fmt/png",
        5: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/374915/07/sv01/fnd/PNA/fmt/png",
        6: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/381174/02/sv01/fnd/PNA/fmt/png",
        7: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/353572/12/sv01/fnd/PNA/fmt/png",
        8: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/383355/02/sv01/fnd/PNA/fmt/png",
    }

    const img = Object.values(imgRandom)[rndInt]
    Products.push({ img: img, title: data.text, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."});
    input.value = "";
    window.location.reload()
    localStorage.setItem("products", JSON.stringify(Products));
};

