if (!JSON.parse(localStorage.getItem("login"))) {
    window.location.href = "/login.html"
}

if (!JSON.parse(localStorage.getItem("products"))) {
    const products = [
        {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/388549/01/sv01/fnd/PNA/fmt/png",
            title: "Slipstream Men's Sneakers",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/385962/01/sv01/fnd/PNA/fmt/png",
            title: "TRC Blaze Hill Camp Men's Sneakers",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/372832/01/sv01/fnd/PNA/fmt/png",
            title: "RS-X Blank Men's Sneakers",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/366613/01/sv01/fnd/PNA/fmt/png",
            title: "GV Special+ Sneakers",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/374915/07/sv01/fnd/PNA/fmt/png",
            title: "Black Fives Future Rider Sneakers",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/381174/02/sv01/fnd/PNA/fmt/png",
            title: "Suede Gum Men's Sneakers",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/353572/12/sv01/fnd/PNA/fmt/png",
            title: "Roma Basic Sneakers",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_800,h_800/global/383355/02/sv01/fnd/PNA/fmt/png",
            title: "Future Rider Go For Sneakers",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
    ]
    
    localStorage.setItem("products", JSON.stringify(products));
}