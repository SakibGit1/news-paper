const handleCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    // console.log(data.data.news_category);
    const categories = data.data.news_category.slice(0, 3);

    const tadContainer = document.getElementById('tab-container');

    categories.forEach((category) => {
        // console.log(category);
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="text-xl font-semibold" href="">${category.category_name}</a>
      
        `
        tadContainer.appendChild(div)

    });

};
// news box container content
const handleLoadNews = async (categoryId) => {
    // console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await res.json();
    // console.log(data);

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    data.data?.forEach((news) => {
        console.log(news);
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card w-96 bg-base-100 shadow-xl">
             <figure><img src="${news?.image_url
             }" alt="Shoes" /></figure>
            <div class="card-body">
            <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
            </div>
            </div>
        </div>
            
            
            `

        cardContainer.appendChild(div);

    })

}



handleCategory();
handleLoadNews('01')