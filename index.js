const handleCategory = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
    const data = await res.json();
    // console.log(data.data.news_category);
    const categories = data.data.news_category.slice(0, 4);
    
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
    // console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await res.json();
    // console.log(data);
    const newsData = data.data;
    const s =  newsData.sort((a, b) => a.total_view - b.total_view);

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    s.forEach((news) => {
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
             <button onclick="showModal('${news._id}')" class="btn bg-blue-100">Details</button>
             </div>
            </div>
            </div>
        </div>
            
            
            `

        cardContainer.appendChild(div);

    })

}

const showModal = async (newId) =>{
    // console.log(newId);
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${newId}`)
    const data = await res.json()
    console.log(data.data[0]);
    const modalId = data.data[0];
    const modalBx = document.getElementById('my_modal_5');
    modalBx.innerHTML = `
    
    


  <form method="dialog" class="modal-box">
  <img src="${modalId.image_url}" />
    <h3 class="font-bold text-lg">${modalId.title}</h3>
    <p class="py-4">${modalId.details}</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>

    
    
    `;
    my_modal_5.showModal()


}

handleCategory();
handleLoadNews('01');