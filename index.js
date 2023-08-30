const handleCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
    const data = await res.json();
    // console.log(data.data.news_category);
    const categories = data.data.news_category.slice(0, 3);
    
    const tadContainer = document.getElementById('tab-container');
    // tadContainer = "";
    


    categories.forEach((category) => {
        // console.log(category);
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="text-xl font-semibold" href="#">${category.category_name}</a>
      
        `;
        tadContainer.appendChild(div)

    });

};
// news box container content



const handleLoadNews = async (categoryId) => {
    console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await res.json();
    console.log(data);
    const newsData = data.data;

    const cardContainer = document.getElementById('card-container');
    // cardContainer.innerHTML = "";

    newsData.forEach((news) => {
        // console.log(news);
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card bg-base-100 shadow-xl">
             <figure><img src="${news?.image_url
             }" alt="Shoes" /></figure>
            <div class="card-body">
            <h2 class="card-title">
            ${news.title.slice(0,40)}
            <div class="badge badge-secondary py-4">${news?.rating?.badge}</div>
            </h2>
            <p>${news.details.slice(0,80)}</p>
            <h3 class="text-xm font-semibold"> total views: ${news.total_view?news.total_view:"no views"}</h3>
            <div class="card-actions flex justify-between mt-4">

             <div class="avatar gap-2 flex items-center">
        <div class="w-14 rounded-full">
            <img src="${news.author?.img}" />
                  
            </div>
           <div>
          <h6>${news?.author?.name?.slice(0,5)}</h6>
           
           </div>
  
      
             </div>

             <div>
             <button class="btn bg-blue-100">Details</button>
             </div>
            </div>
            </div>
        </div>
            
            
            `

        cardContainer.appendChild(div);

    })

}



handleCategory();
handleLoadNews('01');