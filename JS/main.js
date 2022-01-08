const section = document.querySelector('.row');
// console.log(section);


const getNews = async (category) =>{
    try {
        const res = await axios.get(`https://inshortsapi.vercel.app/news?category=${category}`);
        
        return res.data;

    } catch (error) {
        console.warn(error);
        return false;
    }
};


const data = async (variable) =>{
    const data = await getNews(variable);
    console.log(data);
};

// data('world');





const homeSection = () =>{

        document.querySelector('body').style.backgroundImage = `url(' +https://i.gifer.com/V1nb.gif')`;
        section.innerHTML='';

        // section.style.backgroundImage = `url('https://i.gifer.com/')`
        const col1 =document.createElement('div');
        const col2 =document.createElement('div');

        col1.className = "col-lg-4 col-md-6 d-flex justify-content-center align-items-center";
        col2.className = "col-lg-4 col-md-6 d-flex justify-content-center align-items-center";


        const h1 = document.createElement('h1');

        h1.innerHTML = "News";
        h1.style.fontSize = "150px";
        h1.style.textShadow = "5px 5px 1px silver, 10px 10px 1px gray";

        col1.append(h1);

        // const img = document.createElement('img');
        // img.src = `https://i.gifer.com/V1nb.gif`;
        // img.className = "rounded"
        // img.style.width = "100%";
        // img.style.height = "400px"
        // col2.append(img);


        section.append(col1,col2);

};

homeSection();


const renderPage = async (title) =>{
    console.log(category(title));

    try {
            `${e}renderPage()`

    } catch (error) {
        console.log(error);
    }

};

const renderFunc = async (a ='all') =>{
    const data = await getNews(a);
    section.innerHTML = "";

    console.log(data);
    const h2 = document.createElement('h2');
    // const arr = Object.entries(data);
    
    // console.log(arr);
    h2.innerHTML = `${data.category}`;

    const title = `${data.category}`;

    section.append(h2);

    nationalyRenderPage(title);
}

const nationalyRenderPage = async (title) =>{

    section.innerHTML='';
    const datas = await getNews(title);
    const arr = Object.entries(datas);
    // console.log(arr);
    const h2 = document.createElement('h2');
    h2.innerHTML = datas['category'].toUpperCase();
    section.append(h2)
    const mass = datas.data;
    // console.log(mass, 'mass');

    mass.map((item ,i) =>{
        console.log(item);


        const col = document.createElement('div');
        col.className = 'col-lg-4  col-sm-6';

        const card = document.createElement('div');
        card.className = 'card shadow text-center my-3';

        col.append(card);



        const img = document.createElement('img');
        img.className = "rounded image";
        img.src = item.imageUrl;

        card.append(img);


        const content = document.createElement('div');
        content.className = 'content p-3  text-start';

        const date = document.createElement('p');
        date.innerHTML = `${item.time} ${item.date}`;
        date.className = "text-warning";

        content.append(date);


        const textDiv =  document.createElement('div');
        textDiv.className = 'accordion py-2';
        textDiv.innerHTML = 
        `
        <div class="accordion-item">
    <h2 class="accordion-header" id="heading${i}">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
        <span class= "text-info" > Content </span>
      </button>
    </h2>
    <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      ${
          item.content
      }
    <code>.accordion-body</code>,
      </div>
    </div>
  </div>
  `;
        


        content.append(textDiv);


        const Author = document.createElement('p');
        Author.innerHTML =`<span class="fw-bold">Author:<span> <span class = "fw-normal">${item['author']}</span>`;

        content.append(Author);

        card.append(content)
        section.append(col);
    });








}


