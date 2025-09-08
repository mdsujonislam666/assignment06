const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((categories) => {
            displayCategories(categories.categories)
        } )
};

const removeActive = () => {
    const categoriesButton = document.querySelectorAll(".categories-btn");
    categoriesButton.forEach((btn) => btn.classList.remove('active'));
}

const allCategoriesCard = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((data) => {

            displayCategoriesCard(data.plants)
        })
};


// category: "Fruit Tree"
// description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
// id: 1
// image: "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
// name: "Mango Tree"
// price: 500

const loadHistory = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then((res) => res.json())
        .then((data) => {
            displayHistory(data.plants)

        } )
}

const displayHistory = (details) => {
    console.log(details);
    const historyBox = document.getElementById('historyContainer');
    historyBox.innerHTML += "";

    const items = Array.isArray(details) ? details : [details];



    items.forEach(detail => {
        alert(`${detail.name} has been added to the cart.`);
        const historyCard = document.createElement("div");
        historyCard.innerHTML = `<div id="cart-${detail.id}"  class="flex justify-between bg-[#dbdddc] rounded-xl p-3 w-full h-[70px]">
                    <div>
                        <h2 class="font-bold">${detail.name}</h2>
                        <p>$${detail.price} x 1</p>
                    </div>
                    <div>
                        <button id="deleteCart-${detail.id}" class="transparent outline-none p-2 cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>`;
        historyBox.appendChild(historyCard);
        document.getElementById(`deleteCart-${detail.id}`).addEventListener('click', function () {
            const removeHistoryContainer = document.getElementById(`cart-${detail.id}`).style.display = "none";
        })

    })
}
loadHistory();


const loadModal = async(id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayModal(data.plants);
}

const displayModal = (information) => {
    console.log(information);
    const informationContainer = document.getElementById('informationContainer');
    informationContainer.innerHTML = `
                    <div class="bg-white p-5 space-y-2 h-full  rounded-xl">
                        <h2 class="text-xl font-bold">${information.name}</h2>
                        <img class="w-full h-55 rounded-xl" src="${information.image}" alt="">
                        <h2 class="font-bold">Category: ${information.category}</h2>
                        <h3 class="font-bold">Price: ${information.price}</h3>
                        <p>${information.description}</p>
                    </div>
                <div class="modal-action -pb-14">
                    <form method="dialog">
                        <button class="btn">Close</button>
                    </form>
                </div>`;
    document.getElementById("name_modal").showModal();
}
loadModal();


const displayCategoriesCard = (cards) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    cards.forEach(data => {


        const card = document.createElement("div");
        card.innerHTML = `<div class="bg-white p-5 space-y-3 h-full  rounded-xl">
                    <img class="w-full h-40 rounded-xl" src="${data.image}" alt="">
                    <h2 onclick="loadModal(${data.id})" class="text-xl cursor-pointer font-bold">${data.name}</h2>
                    <p>${data.description}</p>
                    <div class="flex items-center justify-between">
                        <button class="btn btn-prymary rounded-3xl bg-green-500">${data.category}</button>
                        <h2 class="font-bold">$ ${data.price}</h2>
                    </div>
                    <a onclick="loadHistory(${data.id})" class="btn btn-active btn-success rounded-3xl  w-full hover:text-white hover:bg-[#15803D] ">Add to Cart</a>
                </div>`;
        cardContainer.append(card);
    });

};
allCategoriesCard();



const loadCategoriesData = (categoriesId) => {
    const url = `https://openapi.programming-hero.com/api/category/${categoriesId}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            removeActive();
            const clickBtn = document.getElementById(`categories-btn-${categoriesId}`);

            clickBtn.classList.add('active');
            displayCategoriesData(data.plants)
        })
}

const displayCategoriesData = (datas) => {
    console.log(datas);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    datas.forEach(data => {
        console.log(data);

        const card = document.createElement("div");
        card.innerHTML = `<div class="bg-white p-5 space-y-3 h-full  rounded-xl">
                    <img class="w-full h-50 rounded-xl" src="${data.image}" alt="">
                    <h2 class="text-xl font-bold">${data.name}</h2>
                    <p>${data.description}</p>
                    <div class="flex items-center justify-between">
                        <button class="btn btn-prymary rounded-3xl bg-green-500">${data.category}</button>
                        <h2 class="font-bold">$ ${data.price}</h2>
                    </div>
                    <button onclick="loadHistory(${data.id})" class="btn btn-active btn-success rounded-3xl  w-full hover:text-white hover:bg-[#15803D] ">Add to Cart</button>
                </div>`;
        cardContainer.append(card);
    });

};


const displayCategories = (categories) => {
    // console.log(categories);

    const allCategories = document.getElementById('all-categories');
    allCategories.innerHTML = "";

    categories.forEach(cate => {
        // console.log(cate);

        const categoriesDiv = document.createElement("div");
        categoriesDiv.innerHTML = `<button id="categories-btn-${cate.id}" onclick ="loadCategoriesData('${cate.id
            }')" class="transparent-btn p-2 rounded-sm  categories-btn  border-none outline-none w-full hover:text-white bg-transparent hover:bg-green-400 flex justify-start">${cate.category_name
            }</button>`;
        allCategories.append(categoriesDiv);
    });
}
loadCategories();