window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(foods_title)
    displayMenucategory(children)
    displayMenucategory2(children)
    foodmenu(foods_menu)
    // booking(booking)
})
let tabs = document.querySelectorAll(".header_links");
let contents = document.querySelectorAll(".header_content");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
            contents[j].classList.remove("active");
            tabs[i].classList.add("active");
            contents[i].classList.add("active");
        }
    });
}

const foods_title = [
    {
        id: 1,
        title: "stake",
        category: "biryani",
        img: "./img/stakes_2.webp",
    },
    {
        id: 2,
        title: "biryani",
        category: "biryani",
        img: "./img/Biryani popular.png",
    },
    {
        id: 3,
        title: "burger",
        category: "burger",
        img: "./img/Burger popular.png",
    },
    {
        id: 4,
        title: "dessert",
        category: "dessert",
        img: "./img/desert_1.jpg",
    },
    {
        id: 5,
        title: "shake",
        category: "shake",
        img: "./img/shakes-2.jpeg",
    },
    {
        id: 6,
        title: "drink",
        category: "drink",
        img: "./img/drinks.jpg",
    },

]
const popular_category = document.querySelector(".popular_category_boxs");
function displayMenuItems(menuItems) {

    let displayMenu = menuItems.map(function (item) {
        return `<a href="#${item.category}" class="popular_category_box">
                    <img src='${item.img}' alt="">
                    <h4>${item.title}</h4>
                </a>`

    });

    displayMenu = displayMenu.join("");
    popular_category.innerHTML = displayMenu
}
const popular_see = document.querySelector('.see_all');
const popular_boxs = document.querySelector('.popular_category_boxs')

popular_see.addEventListener('click', function () {
    popular_boxs.classList.toggle('popular_category_box-wrap')
})
const foods_menu = [
    {
        id: 1,
        title: "Hyderabadi Biryani",
        category: "biryani",
        img: "./img/biryani_1.png",
        price: 299,
        heart: 0,
        precent: 20,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 2,
        title: "Bose Headphones",
        category: "biryani",
        img: "./img/biryani_2.png",
        price: 279,
        heart: 0,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 3,
        title: "cotta cake",
        category: "dessert",
        img: "./img/desert_1.jpg",
        price: 100,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 4,
        title: "Burger",
        category: "burger",
        img: "./img/Burger popular-2.jpg",
        price: 10,
        precent: 20,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 5,
        title: "CheeseBurger",
        category: "burger",
        img: "./img/Burger popular-4.jpeg",
        price: 45,
        precent: 15,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 6,
        title: "Agges Burger",
        category: "burger",
        img: "./img/Burger popular-5.jpeg",
        price: 25,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 7,
        title: "Burger",
        category: "burger",
        img: "./img/Burger popular-6.jpg",
        price: 15,
        precent: 5,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 8,
        title: "Double Burger",
        category: "burger",
        img: "./img/Burger popular-7.jpg",
        price: 25,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 9,
        title: "Burger with free Potatos",
        category: "burger",
        img: "./img/Burger popular-3.jpeg",
        price: 40,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 10,
        title: "Burger",
        category: "burger",
        img: "./img/Burger popular-8.jpeg",
        price: 25,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 11,
        title: "stake",
        category: "stake",
        img: "./img/stakes.jpeg",
        price: 100,
        heart: 0,
        precent: 20,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 12,
        title: "stake",
        category: "stake",
        img: "./img/stakes_2.webp",
        price: 125,
        heart: 0,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 13,
        title: "cake",
        category: "cake",
        img: "./img/cakes-1.jpg",
        price: 50,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 14,
        title: "Hyderabadi Biryani",
        category: "dessert",
        img: "./img/cakes-8.png",
        price: 120,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 15,
        title: "cup dessert",
        category: "dessert",
        img: "./img/dessert_img2.jpg",
        price: 90,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 16,
        title: "cake",
        category: "cake",
        img: "./img/cakes-3.jpg",
        price: 100,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 17,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img3.jpg",
        price: 125,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 18,
        title: "Cupcakes",
        category: "cake",
        img: "./img/cakes-5.jpg",
        price: 110,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 19,
        title: "godzilla Milkshake",
        category: "shake",
        img: "./img/shakes-1.jpeg",
        price: 10,
        precent: 5,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 20,
        title: "Oreo dream",
        category: "shake",
        img: "./img/shakes-2.jpeg",
        price: 20,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 21,
        title: "quarantine Buddy",
        category: "shake",
        img: "./img/shakes-3.jpeg",
        price: 30,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 22,
        title: "shake",
        category: "shake",
        img: "./img/shakes-5.jpg",
        price: 60,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 23,
        title: "Cold drinks",
        category: "drink",
        img: "./img/drink_img1.jpg",
        price: 15,
        precent: 5,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 24,
        title: "Fruits Drinks",
        category: "drink",
        img: "./img/drink_img3.jpg",
        price: 10,
        precent: 5,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 25,
        title: "dessert",
        category: "dessert",
        img: "./img/desert.png",
        price: 120,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 26,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img4.jpg",
        price: 125,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 27,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img5.jpg",
        price: 125,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 28,
        title: "shake",
        category: "shake",
        img: "./img/shakes-6.jpg",
        price: 100,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 29,
        title: "Cold drinks",
        category: "drink",
        img: "./img/drink_img4.webp",
        price: 15,
        precent: 5,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 30,
        title: "Cold drinks",
        category: "drink",
        img: "./img/drink_img5.jpg",
        price: 15,
        precent: 5,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 31,
        title: "Cold drinks",
        category: "drink",
        img: "./img/drinks.jpg",
        price: 15,
        precent: 5,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 32,
        title: "Fruits Drinks",
        category: "drink",
        img: "./img/cakes-6.jpg",
        price: 10,
        precent: 5,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
]
const special_boxs = document.querySelector(".special_boxs");
const burger_box = document.querySelector('.burger_box')
const desert_box = document.querySelector('.dessert_box')
const shake_box = document.querySelector('.shake_box')
const drink_box = document.querySelector('.drink_box')

function foodmenu(menuItems) {
    let specialmenu = menuItems.map(function (item) {
        if (item.category == 'biryani' || item.category == 'stake') {
            var number = `${item.price}`;
            var percentToGet = `${item.precent}`;
            const result = ((number / 100) * percentToGet)
            const allresult = `${item.price}` - result;
            return `<div class="special_category_box">
            <div class="special_category_box-top">
                <img src="${item.img}" alt="">
                <span class="favorites_heart" >
                    
                    <img class="favorites_heart-img favorites_heart-img1" src="img/Heart icons.png" alt=""> 
                    <img class="favorites_heart-img favorites_heart-img2" src="img/heart_icons-2.png">
                </span>
            </div>
            <div class="special_category_box-bottom">
                <h3 class="foods_title">${item.title}</h3>
                <div class="foods_price">
                    <div class="foods_price-into">
                        <h4 class="price_change">$${allresult}</h4>
                        <span class="price_old">$${item.price}</span>
                    </div>
                    <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
                </div>
                <p class="foods_text">${item.desc}</p>
                <div class="chef_pick">
                    <div class="chef_pick-left">
                        <img src="./img/star.png" alt="">
                        <h5>5.0 <span>(34)</span></h5>
                        <h4>Main Course</h4>
                    </div>
                    <button class="chef_pick_btn">Chef pick</button>
                </div>
            </div>
        </div>`
        }
    });
    // let heart_box = document.querySelectorAll('.favorites_heart');
    let heart_boxs = document.querySelector('.heart_boxs')


    specialmenu = specialmenu.join("");
    special_boxs.innerHTML = specialmenu
    // for (let i = 0; i < specialmenu.length; i++) {
    //     console.log(specialmenu[i]);

    // }
    // Burger
    let burgermenu = menuItems.map(function (item) {
        if (item.category == 'burger') {
            var number = `${item.price}`;
            var percentToGet = `${item.precent}`;
            const result = ((number / 100) * percentToGet)
            const allresult = `${item.price}` - result;
            return `<div class="special_category_box">
            <div class="special_category_box-top">
                <img src="${item.img}" alt="">
                <span class="favorites_heart">
                    <img class="favorites_heart-img" src="img/Heart icons.png" alt="">
                </span>
            </div>
            <div class="special_category_box-bottom">
                <h3 class="foods_title">${item.title}</h3>
                <div class="foods_price">
                    <div class="foods_price-into">
                        <h4 class="price_change">$${allresult}</h4>
                        <span class="price_old">$${item.price}</span>
                    </div>
                    <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
                </div>
                <p class="foods_text">${item.desc}</p>
                <div class="chef_pick">
                    <div class="chef_pick-left">
                        <img src="./img/star.png" alt="">
                        <h5>5.0 <span>(34)</span></h5>
                        <h4>Main Course</h4>
                    </div>
                    <button class="chef_pick_btn">Chef pick</button>
                </div>
            </div>
        </div>`
        }
    });
    burgermenu = burgermenu.join("");
    burger_box.innerHTML = burgermenu
    // Desert
    let desertmenu = menuItems.map(function (item) {
        if (item.category == 'dessert') {
            var number = `${item.price}`;
            var percentToGet = `${item.precent}`;
            const result = ((number / 100) * percentToGet)
            const allresult = `${item.price}` - result;
            return `<div class="special_category_box">
            <div class="special_category_box-top">
                <img src="${item.img}" alt="">
                <span class="favorites_heart">
                    <img class="favorites_heart-img" src="img/Heart icons.png" alt="">
                </span>
            </div>
            <div class="special_category_box-bottom">
                <h3 class="foods_title">${item.title}</h3>
                <div class="foods_price">
                    <div class="foods_price-into">
                        <h4 class="price_change">$${allresult}</h4>
                        <span class="price_old">$${item.price}</span>
                    </div>
                    <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
                </div>
                <p class="foods_text">${item.desc}</p>
                <div class="chef_pick">
                    <div class="chef_pick-left">
                        <img src="./img/star.png" alt="">
                        <h5>5.0 <span>(34)</span></h5>
                        <h4>Main Course</h4>
                    </div>
                    <button class="chef_pick_btn">Chef pick</button>
                </div>
            </div>
        </div>`
        }
    });
    desertmenu = desertmenu.join("");
    desert_box.innerHTML = desertmenu

    // shake
    let shakemenu = menuItems.map(function (item) {
        if (item.category == 'shake') {
            var number = `${item.price}`;
            var percentToGet = `${item.precent}`;
            const result = ((number / 100) * percentToGet)
            const allresult = `${item.price}` - result;
            return `<div class="special_category_box">
            <div class="special_category_box-top">
                <img src="${item.img}" alt="">
                <span class="favorites_heart">
                    <img class="favorites_heart-img" src="img/Heart icons.png" alt="">
                </span>
            </div>
            <div class="special_category_box-bottom">
                <h3 class="foods_title">${item.title}</h3>
                <div class="foods_price">
                    <div class="foods_price-into">
                        <h4 class="price_change">$${allresult}</h4>
                        <span class="price_old">$${item.price}</span>
                    </div>
                    <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
                </div>
                <p class="foods_text">${item.desc}</p>
                <div class="chef_pick">
                    <div class="chef_pick-left">
                        <img src="./img/star.png" alt="">
                        <h5>5.0 <span>(34)</span></h5>
                        <h4>Main Course</h4>
                    </div>
                    <button class="chef_pick_btn">Chef pick</button>
                </div>
            </div>
        </div>`
        }
    });
    shakemenu = shakemenu.join("");
    shake_box.innerHTML = shakemenu

    // drink
    let drinkmenu = menuItems.map(function (item) {
        if (item.category == 'drink') {
            var number = `${item.price}`;
            var percentToGet = `${item.precent}`;
            const result = ((number / 100) * percentToGet)
            const allresult = `${item.price}` - result;
            return `<div class="special_category_box">
            <div class="special_category_box-top">
                <img src="${item.img}" alt="">
                <span class="favorites_heart">
                    <img class="favorites_heart-img" src="img/Heart icons.png" alt="">
                </span>
            </div>
            <div class="special_category_box-bottom">
                <h3 class="foods_title">${item.title}</h3>
                <div class="foods_price">
                    <div class="foods_price-into">
                        <h4 class="price_change">$${allresult}</h4>
                        <span class="price_old">$${item.price}</span>
                    </div>
                    <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
                </div>
                <p class="foods_text">${item.desc}</p>
                <div class="chef_pick">
                    <div class="chef_pick-left">
                        <img src="./img/star.png" alt="">
                        <h5>5.0 <span>(34)</span></h5>
                        <h4>Main Course</h4>
                    </div>
                    <button class="chef_pick_btn">Chef pick</button>
                </div>
            </div>
        </div>`
        }
    });
    drinkmenu = drinkmenu.join("");
    drink_box.innerHTML = drinkmenu
}
const food_menu2 = [
    {
        id: 1,
        title: "Pizza",
        category: "burger",
        img: "./img/pizza_img1.jpeg",
        price: 50,
        precent: 20,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 2,
        title: "Pizza",
        category: "burger",
        img: "./img/pizza_img2.jpg",
        price: 120,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 3,
        title: "Pizza",
        category: "burger",
        img: "./img/pizza_img3.jpg",
        price: 20,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 4,
        title: "Pizza",
        category: "burger",
        img: "./img/pizza_img4.jpg",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 5,
        title: "Pizza",
        category: "burger",
        img: "./img/pizza_img5.jpg",
        price: 80,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 6,
        title: "Burger",
        category: "burger",
        img: "./img/burger_9.jpg",
        price: 20,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 7,
        title: "Burger",
        category: "burger",
        img: "./img/burger_8.jpg",
        price: 50,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 8,
        title: "Burger",
        category: "burger",
        img: "./img/burger_12.png",
        price: 100,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 9,
        title: "Burger",
        category: "burger",
        img: "./img/burger_10.png",
        price: 10,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 10,
        title: "Burger",
        category: "burger",
        img: "./img/burger_11.jpg",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 11,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img1.png",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 12,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img2.jpg",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 13,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img3.webp",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 14,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img4.jpg",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 15,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img5.jpg",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 16,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img6.webp",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 17,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img7.webp",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 18,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img8.webp",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 19,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img9.jpg",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 20,
        title: "Fish",
        category: "fish",
        img: "./img/fish_img10.webp",
        price: 35,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 21,
        title: "shake",
        category: "shake",
        img: "./img/shakes-7.jpg",
        price: 50,
        precent: 20,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 22,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img6.jpg",
        price: 60,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 23,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img7.jpg",
        price: 70,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 24,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img8.jpg",
        price: 30,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 25,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img9.jpg",
        price: 110,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 26,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img10.jpg",
        price: 130,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 27,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img11.jpg",
        price: 50,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 28,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img12.webp",
        price: 90,
        precent: 30,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 29,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img13.webp",
        price: 30,
        precent: 10,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 30,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img14.jpg",
        price: 140,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 31,
        title: "dessert",
        category: "dessert",
        img: "./img/dessert_img15.jpg",
        price: 175,
        precent: 37,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 32,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-8.jpg",
        price: 77,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 33,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-9.jpg",
        price: 177,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 34,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-10.jpg",
        price: 25,
        precent: 18,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 35,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-11.jpeg",
        price: 256,
        precent: 24,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 36,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-12.jpg",
        price: 322,
        precent: 45,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 37,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-13.jpg",
        price: 46,
        precent: 34,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 38,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-14.webp",
        price: 100,
        precent: 23,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 39,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-16.jpg",
        price: 300,
        precent: 50,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 40,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-17.webp",
        price: 50,
        precent: 20,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 41,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-18.webp",
        price: 100,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 42,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-19.webp",
        price: 200,
        precent: 60,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
    {
        id: 43,
        title: "cake",
        category: "cake",
        img: "./img/cakes_img-20.jpg",
        price: 150,
        precent: 40,
        desc: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.`
    },
]


const children = food_menu2.concat(foods_menu);

const menu_category = document.querySelector(".menu_category-boxs");
const menu_categoryfilter = document.querySelectorAll(".menu_category_btn")

// load items


// filter items
menu_categoryfilter.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        toggleClass(menu_categoryfilter, this)
        const category = e.currentTarget.dataset.menu;
        const menuCategory = children.filter(function (menuItem) {
            if (menuItem.category == category) {
                return menuItem
            }
        })
        if (category == 'burger') {
            displayMenucategory(menuCategory)
        } else {
            displayMenucategory(menuCategory)
        }
    });
});
function toggleClass(buttons, buttonToActivate) {
    buttons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    buttonToActivate.classList.add('active');
}


function displayMenucategory(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // if (item.category == 'burger') {
        var number = `${item.price}`;
        var percentToGet = `${item.precent}`;
        const result = ((number / 100) * percentToGet)
        const allresult = `${item.price}` - result;
        const ss = `<div class="menu_category-box">
        <div class="menu_category-box-left">
            <img src="${item.img}" alt="">
            <span class="favorites_heart menu_favorites_heart">
                <img class="favorites_heart-img menu_heart-img" src="img/Heart icons.png" alt="">
            </span>
        </div>
        <div class="menu_category-box-right">
            <div class="menu_category-box-right-into">
                <h3 class="foods_title menu_food-title">${item.title}</h3>
                <div class="foods_price">
                    <div class="foods_price-into">
                        <h4 class="price_change">$${allresult}</h4>
                        <span class="price_old">${item.price}</span>
                    </div>
                    <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
                </div>
                <div class="chef_pick">
                    <div class="chef_pick-left">
                        <img src="./img/star.png" alt="">
                        <h5>5.0</h5>
                        <h4>${item.category}</h4>
                    </div>
                    <button class="chef_pick_btn man_chef_pick-btn">Chef pick</button>
                </div>
            </div>
            <div class="menu_category-title-box" id="cart_btn">
                <button class="menu_category_btn menu_category_btn-bascet" type="button"><i class="fa-solid fa-basket-shopping"></i>Cart</button>
            </div>
        </div>
    </div>`
        return ss
    });
    displayMenu = displayMenu.join("");
    menu_category.innerHTML = displayMenu
}


function displayMenucategory2(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        if (item.category == 'burger') {
            var number = `${item.price}`;
            var percentToGet = `${item.precent}`;
            const result = ((number / 100) * percentToGet)
            const allresult = `${item.price}` - result;
            return `<div class="menu_category-box">
        <div class="menu_category-box-left">
            <img src="${item.img}" alt="">
            <span class="favorites_heart menu_favorites_heart">
                <img class="favorites_heart-img menu_heart-img" src="img/Heart icons.png" alt="">
            </span>
        </div>
        <div class="menu_category-box-right">
        <div class="menu_category-box-right-into">
            <h3 class="foods_title menu_food-title">${item.title}</h3>
            <div class="foods_price">
                <div class="foods_price-into">
                    <h4 class="price_change">$${allresult}</h4>
                    <span class="price_old">${item.price}</span>
                </div>
                <h4 class="foods_price-right"><span class="foods_price-percent">${item.precent}</span>% OFF</h4>
            </div>
            <div class="chef_pick">
                <div class="chef_pick-left">
                    <img src="./img/star.png" alt="">
                    <h5>5.0</h5>
                    <h4>${item.category}</h4>
                </div>
                <button class="chef_pick_btn man_chef_pick-btn">Chef pick</button>
            </div>
        </div>
        <div class="menu_category-title-box" id="cart_btn">
            <button class="menu_category_btn menu_category_btn-bascet" type="button"><i class="fa-solid fa-basket-shopping"></i>Cart</button>
        </div>
    </div>
    </div>`
        }
    });
    displayMenu = displayMenu.join("");
    menu_category.innerHTML = displayMenu
}

// const booking = {
//     guests: {
//         number: 0
//     },
//     select_time: {
//         time: `17.30`,
//         time: `17:00`,
//         time: `18.00`,
//         time: `18.30`,
//         time: `19.00`,
//         time: `19.30`,
//         time: `20.00`,
//         time: `20.30`,
//     },
//     date: {
//         days: 'mon',
//         days: 'tue',
//         days: 'wed',
//         days: 'thur',
//         days: 'fri',
//         days: 'sut',
//         days: 'sun',
//     }
// }


// const xres = document.querySelector('.bootking_kres')
// const bookinginto = document.querySelector('.booking_bottom-into')
// function booking(item) {
//     let bookingdisplay = item.map(function (t) {


//         });

//     })
//     bookinginto.innerHTML =bookingdisplay
// }


var count = 0;
const plusminus = document.querySelectorAll('.plus_minus-icon');
const value = document.querySelector('.main__product-num')
const span = document.querySelector('.spann')
const xres = document.querySelector('.bootking_kres')
const bookingRemove = document.querySelector('.booking-remove')
const time_btn = document.querySelectorAll('.booking_time-btn')
let guests = document.querySelector('.order-result__guests');
let comeTime = document.querySelector('.order-result__time');
let comeDate = document.querySelector('.order-result__date');
let order = document.querySelector(".booking_confirm-btn");
let orderRemove = document.querySelector('.order_remove');
let order_result = document.querySelector('.order-result');
// let orderActive = document.querySelector('.order-resultactive')
let bookingThinking = document.querySelector('.bookingThinking')
let bookingNoBtn = document.querySelector('.bookingThinking-btn-no')
let bookingYesBtn = document.querySelector('.bookingThinking-btn-yes')


bookingRemove.addEventListener('click', () => {
    count = 0;
    value.innerHTML = count;
    time_btn.forEach(function (item) {
        item.classList.remove('active')
    });
    date.forEach(function (item) {
        item.classList.remove('active')
    });
    bookingRemove.classList.remove('bootking_kresActive')
    xres.classList.remove('bootking_kresActive')
})
xres.addEventListener('click', () => {
    count = 0;
    value.innerHTML = count;
    time_btn.forEach(function (item) {
        item.classList.remove('active')
    });
    date.forEach(function (item) {
        item.classList.remove('active')
    });
    bookingRemove.classList.remove('bootking_kresActive')
    xres.classList.remove('bootking_kresActive')
})
orderRemove.addEventListener('click', () => {
    bookingThinking.classList.add('bookingThinkingActive')
    bookingNoBtn.addEventListener('click', function () {
        bookingThinking.classList.remove('bookingThinkingActive')
    })
    bookingYesBtn.addEventListener('click', function () {
        order_result.classList.remove('order-resultactive')
        bookingThinking.classList.remove('bookingThinkingActive')
    })
})
plusminus.forEach(btn => {
    btn.addEventListener("click", function (s) {
        const style = s.currentTarget.classList;
        if (style.contains("minus_icon") && count > 0) {
            count--;
        } else if (style.contains('plus_icon') && count < 10) {
            count++;
        }
        value.innerHTML = count
        if (count <= 0) {
            bookingRemove.classList.remove('bootking_kresActive')
            xres.classList.remove('bootking_kresActive')
        } else {
            bookingRemove.classList.add('bootking_kresActive');
            xres.classList.add('bootking_kresActive');
        }
    })
})
for (let i = 0; i < time_btn.length; i++) {
    time_btn[i].addEventListener("click", () => {
        time_btn.forEach(function (item) {
            if (item !== time_btn[i]) {
                item.classList.remove("active")
            }
        });
        time_btn[i].classList.toggle("active")
    });
}


let date = document.querySelectorAll('.booking_date-bottom-box')
for (let i = 0; i < date.length; i++) {
    date[i].addEventListener('click', () => {

        date.forEach(function (item) {
            if (item !== date[i]) {
                item.classList.remove("active")
            }
        });
        date[i].classList.toggle("active")
    })
}
order.addEventListener("click", () => {
    if (value.innerHTML > 0) {
        order_result.classList.add('order-resultactive')
    }
    guests.innerHTML = value.innerHTML;
    time_btn.forEach(time => {
        if (time.classList.contains('active')) {
            comeTime.innerHTML = time.innerHTML
        }
    });
    for (let i = 0; i < date.length; i++) {
        if (date[i].classList.contains('active')) {
            if (date[i].classList.contains('mon')) {
                comeDate.innerHTML = `monday`
            } else if (date[i].classList.contains('tue')) {
                comeDate.innerHTML = `tuesday`
            } else if (date[i].classList.contains('wed')) {
                comeDate.innerHTML = `wednesday`
            } else if (date[i].classList.contains('thur')) {
                comeDate.innerHTML = `thursday`
            } else if (date[i].classList.contains('fri')) {
                comeDate.innerHTML = `friiday`
            } else if (date[i].classList.contains('sat')) {
                comeDate.innerHTML = `saturday`
            } else if (date[i].classList.contains('sun')) {
                comeDate.innerHTML = `sunday`
            }
        }

    }

})











































let monthBottonBtn = document.querySelector('.b_d_top-right-into')
let booking_month = document.querySelector('.booking_month');
let monthH4 = document.querySelector('.booking_date-top-right-b')
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let dd = month.forEach(element => {
//     return `<h5 class="booking_all-title booking_month month_all">${element}</h5>`
// });
// monthH4.innerHTML = dd.innerHTML
let monthDate = month[new Date().getMonth()];
booking_month.innerHTML = monthDate;