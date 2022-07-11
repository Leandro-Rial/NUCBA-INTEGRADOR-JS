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

const Products = JSON.parse(localStorage.getItem("products"));

const cardContainer = document.getElementById('card-lists');

cardContainer.innerHTML = Products.map(({ img, title, text }, i) => {
    
    return  (`
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" data-idx="${i}">
                    <!-- Card-->
                    <div class="card rounded shadow-sm border-0">
                        <div class="card-body p-4">
                            <img src="${img}" alt="${title}" class="img-fluid d-block mx-auto mb-3" style="width: 100%; height: 100%; object-fit: cover;">
                            <h5> <a href="#" class="text-dark">${title}</a></h5>
                            <p class="small text-muted font-italic">${text}</p>
                            <ul class="list-inline small">
                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                                <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `);
}).join('')

function searchProducts() {
    const input = document.getElementById("filter").value.toUpperCase();
    
    const cards = cardContainer.getElementsByClassName("card")
    
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-body h5 a.text-dark");

        if (title.innerHTML.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = ""
        } else {
            cards[i].style.display = "none"
        }
    }
}

function show() {
    document.getElementById('text').style.display = "";
    document.getElementById('p1').style.display = "none";
}

function hide() {
    document.getElementById('text').style.display = "none";
    document.getElementById('p1').style.display = "";
}

let p1 = document.getElementById("p1");
p1.onclick = show;
let p2 = document.getElementById("p2");
p2.onclick = hide;