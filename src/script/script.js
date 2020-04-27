
function script() {
    const getHeadline = async () => {
        try {
          const response = await fetch('https://berita-news.herokuapp.com/');
          const responseJson = await response.json();
          if(responseJson.error) {
             showResponseMessage(responseJson.message);
          } else {
              console.log(responseJson.data[0].poster);
             renderHeadline(responseJson.data);
             renderBerita(responseJson.data);
          }
        } catch(error) {
           console.log(error);
        }
    }

    const getArtKesehatan = async () => {
        try {
          const response = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=9545be0786aa49248c29589577f97d13');
          const responseJson = await response.json();
          if(responseJson.error) {
             showResponseMessage(responseJson.message);
          } else {
            console.log(responseJson.articles);
            renderKesehatan(responseJson.articles);
          }
        } catch(error) {
           console.log(error);
        }
    }

    const getArtOlahraga = async () => {
        try {
          const response = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=9545be0786aa49248c29589577f97d13');
          const responseJson = await response.json();
          if(responseJson.error) {
             showResponseMessage(responseJson.message);
          } else {
            renderOlahraga(responseJson.articles);
          }
        } catch(error) {
           console.log(error);
        }
    }
  
    const getArtEntertaiment = async () => {
        try {
          const response = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=9545be0786aa49248c29589577f97d13');
          const responseJson = await response.json();
          if(responseJson.error) {
             showResponseMessage(responseJson.message);
          } else {
            renderEntertaiment(responseJson.articles);
          }
        } catch(error) {
           console.log(error);
        }
    }




   
    const renderBerita = (data) => {
        const listBerita = document.querySelector("#terbaru");
        listBerita.innerHTML="";
        data.forEach(data => {
            listBerita.innerHTML += `
            <a href=${data.link} class="list-group-item list-group-item-action list-group-item-ligth">${data.judul} <br>
            ${data.waktu}
            </a>

            `;
        });
        
     }

    const renderHeadline = (data) => {
        const listHeadline = document.querySelector("#headline");
        listHeadline.innerHTML="";

        listHeadline.innerHTML += `
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <a href=${data[0].link} class="carousel-item active">
            <img class="d-block w-100" src=${data[0].poster} alt="First slide">
            <div class="carousel-caption d-none d-md-block">
            <h5>${data[0].judul}</h5>
            <p>${data[0].waktu}</p>
          </div>
          </a>
          <a href=${data[1].link} class="carousel-item">
            <img class="d-block w-100" src=${data[1].poster}  alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
            <h5>${data[1].judul}</h5>
            <p>${data[1].waktu}</p>
          </div>       
        </a>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
            `;
        
     }


     const renderKesehatan = (articles) => {
        const ArtikelKesehatan = document.querySelector("#kesehatan");
        const allKesehatan = document.querySelector("#allKesehatan");
        allKesehatan.innerHTML="";
        articles.forEach(articles => {
            allKesehatan.innerHTML += `
            <a href=${articles.url} class="list-group-item list-group-item-action list-group-item-ligth">${articles.title} <br>
            ${articles.publishedAt}
            </a>

            `;
        });
        ArtikelKesehatan.innerHTML="";
        ArtikelKesehatan.innerHTML += `
        <a href="${articles[0].url}" class="card-title text-dark h5">${articles[0].title}</a>
        <p class="card-text">${(articles[0].description).substring(0,100)}</p>
        <p class="card-text"><small class="text-muted">${articles[0].publishedAt}</small></p>
     
        `;

        
     }
     const renderOlahraga = (articles) => {
        const ArtikelOlahraga = document.querySelector("#olahraga");
        const allOlahraga = document.querySelector("#allOlahraga");
        allOlahraga.innerHTML="";

        articles.forEach(articles => {
            allOlahraga.innerHTML += `
            <a href=${articles.url} class="list-group-item list-group-item-action list-group-item-ligth">${articles.title} <br>
            ${articles.publishedAt}
            </a>

            `;
        });
        ArtikelOlahraga.innerHTML="";
        ArtikelOlahraga.innerHTML += `
        <a href="${articles[0].url}" class="card-title text-dark h5">${articles[0].title}</a>
        <p class="card-text">${(articles[0].description).substring(0,100)}</p>
        <p class="card-text"><small class="text-muted">${articles[0].publishedAt}</small></p>
     
        `;

        
     }
     const renderEntertaiment = (articles) => {
        const Artikelentertaiment = document.querySelector("#entertaiment");
        
        const allEntertaiment = document.querySelector("#allEntertaiment");
        allEntertaiment.innerHTML="";
        articles.forEach(articles => {
            allEntertaiment.innerHTML += `
            <a href=${articles.url} class="list-group-item list-group-item-action list-group-item-ligth">${articles.title} <br>
            ${articles.publishedAt}
            </a>

            `;
        });
        Artikelentertaiment.innerHTML="";

        Artikelentertaiment.innerHTML += `
        <a href="${articles[0].url}" class="card-title text-dark h5">${articles[0].title}</a>
        <p class="card-text">${(articles[0].description).substring(0,100)}</p>
        <p class="card-text"><small class="text-muted">${articles[0].publishedAt}</small></p>
     
        `;

        
     }



    getHeadline();
    getArtEntertaiment();
    getArtKesehatan();
    getArtOlahraga();
}
export default script;