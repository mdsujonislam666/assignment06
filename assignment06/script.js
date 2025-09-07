const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((categories) => displayCategories(categories.categories
))
};

const displayCategories = (categories) =>{
    console.log(categories);

    const allCategories = document.getElementById('all-categories');
    allCategories.innerHTML = "";

    categories.forEach(cate => {
        console.log(cate);

        const categoriesDiv = document.createElement("div");
        categoriesDiv.innerHTML = `<button class="btn btn-outline w-full hover:text-white hover:bg-[#15803D] flex justify-start">${cate.category_name
}</button>`;
        allCategories.append(categoriesDiv);
    });
}
loadCategories();