const handleCategory = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    const data = await res.json();
    // console.log(data.data.news_category);
    const categories = data.data.news_category.slice(0,3);

    const tadContainer = document.getElementById('tab-container');

    categories.forEach((category)=>{
        console.log(category);
        const div = document.createElement('div');
        div.innerHTML = `
        <a class="text-xl font-semibold" href="">${category.category_name}</a>
      
        `
        tadContainer.appendChild(div)

    })

}
handleCategory();