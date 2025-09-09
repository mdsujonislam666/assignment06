const loadCategories = () => {
    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((categories) => {
            displayCategories(categories.categories)
        })
};

const removeActive = () => {
    const categoriesButton = document.querySelectorAll(".categories-btn");
    categoriesButton.forEach((btn) => btn.classList.remove('active'));
}

const manageSpinner = (status) =>{
    if(status === true){
        document.getElementById('spinner').classList.remove("hidden");
        document.getElementById('card-container').classList.add("hidden");
    }
    else{
        document.getElementById('card-container').classList.remove("hidden");
        document.getElementById('spinner').classList.add("hidden");
    }
}

const allCategoriesCard = () => {
    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
        .then((res) => res.json())
        .then((data) => {

            displayCategoriesCard(data.plants)
        })
};

let cardHistory = [];

const cardContainer = document.getElementById('card-container').addEventListener('click', (e) => {
    if (e.target.innerText === 'Add to Cart') {
        handleHistory(e);
    }
})

const handleHistory = (e) => {
    console.log('add to cart clicked');
    const price = e.target.parentNode.children[3].children[1].innerText;
    const name = e.target.parentNode.children[1].innerText;
    const id = e.target.parentNode.id;
    alert(`${name} has been added to the cart.`);

    cardHistory.push({
        price: price,
        name: name,
        id: id
    })

    showHistory(cardHistory);

};

const showHistory = (cardHistory) => {
    console.log(cardHistory);
    const totalCount = document.getElementById('totalCount');

    const historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = "";

    let count = 0;
    cardHistory.forEach(history => {
        historyContainer.innerHTML += `
        <div id ="cartId-(${history.id})" class ="flex justify-between border my-2 p-2 rounded-sm">
        <div>
            <h2 class ="font-bold">${history.name}</h2>
            <h3>${history.price}</h3>
        </div>
        <button  onclick="handleDeleteBookmark(${history.id})" class="transparent outline-none p-2 cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        </div>`;


    })

};

const handleDeleteBookmark = (bookmarkId) =>{
    console.log(bookmarkId);
    const filteredBookmarks = cardHistory.filter(id => {
        console.log(id);
        if(id.id === bookmarkId ){
            document.getElementById(`cartId-(${bookmarkId})`).style.display = "none";
        }
    })
    cardHistory = filteredBookmarks;
    showHistory(cardHistory);
}




const loadModal = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayModal(data.plants);
}

const displayModal = (information) => {
    //  console.log(information);
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

        // onclick="loadHistory(${data.id})"
        const card = document.createElement("div");
        card.innerHTML = `<div id="${data.id}" class="bg-white p-5 space-y-3 h-full  rounded-xl">
                    <img class="w-full h-40 rounded-xl" src="${data.image}" alt="">
                    <h2 onclick="loadModal(${data.id})" class="text-xl cursor-pointer font-bold">${data.name}</h2>
                    <p>${data.description}</p>
                    <div class="flex items-center justify-between">
                        <button class="btn btn-prymary rounded-3xl bg-green-500">${data.category}</button>
                        <h2 class="font-bold">$ ${data.price}</h2>
                    </div>
                    <a  class="btn btn-active btn-success rounded-3xl  w-full hover:text-white hover:bg-[#15803D] ">Add to Cart</a>
                </div>`;
        cardContainer.append(card);
        manageSpinner(false);
    });

};
allCategoriesCard();



const loadCategoriesData = (categoriesId) => {
    manageSpinner(true);
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
                    <h2 onclick="loadModal(${data.id})" class="text-xl font-bold cursor-pointer">${data.name}</h2>
                    <p>${data.description}</p>
                    <div class="flex items-center justify-between">
                        <button class="btn btn-prymary rounded-3xl bg-green-500">${data.category}</button>
                        <h2 class="font-bold">$ ${data.price}</h2>
                    </div>
                    <button onclick="loadHistory(${data.id})" class="btn btn-active btn-success rounded-3xl  w-full hover:text-white hover:bg-[#15803D] ">Add to Cart</button>
                </div>`;
        cardContainer.append(card);
        manageSpinner(false);
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
        manageSpinner(false);
    });
}
loadCategories();