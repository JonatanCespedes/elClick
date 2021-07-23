let $popup = document.querySelector("#pop-up__container");

function closePopUp(){
    $popup.style.display = "none"  
}

window.addEventListener("load", () => {
   const BASE_URL = "http://191.232.170.254:81/api/popups.json";
    
    /* Hacer la consulta a la api */
    fetch(BASE_URL)
    .then(response => response.json())
    .then(result => {
        if(result[0].active){
            result[0]
            $popup.style.display = "flex";
            $popup.innerHTML += `
            ${
                result[0].type !== "imagen" && result[0].type !== "video" ? 
                   
            `
            <section class="pop-up">
                <div class="close-button" onclick="closePopUp()"> 
                    <p>&#10006;</p>
                </div>
                <div class="content-container">
                    ${result[0].title ? `<h2 class="title" id="title">${result[0].title}</h2>` : ""}
                    ${result[0].content ? `<div class="paragraph" id="paragraph">${result[0].content}</div>` : ""} 
                    ${result[0].titlebutton ?`<div class="button btn-desktop"><a href="${result[0].linkbutton}" target="_blank" rel="noreferrer">${result[0].titlebutton}</a></div>` : ""}   
                </div>
                ${
                    result[0].image ? `
                    <div class="image-container-content only-media">
                        <img src="${result[0].image}">
                    </div>
                    ` : ""
                }
                ${
                    result[0].video ? `
                    <div class="image-container-content only-media">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${result[0].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    ` : ""
                }
                ${result[0].titlebutton !== null ? `
                <div class="button btn-desktop"><a href="${result[0].linkbutton}" target="_blank" rel="noreferrer">${result[0].titlebutton}</a></div>
                <div class="button btn-mobile"><a href="${result[0].linkbutton}" target="_blank" rel="noreferrer">${result[0].titlebutton}</a></div>
                ` : "" }   
            </section>
            `: ""
            }
           
            ${result[0].type == "imagen" ? `
            <section class="pop-up media">
                <div class="close-button" onclick="closePopUp()"> 
                    <p>&#10006;</p>
                </div>
                <div class="media-container">             
                        <div class="image-container-content only-media">
                            <img src="${result[0].image}">
                        </div>
                    ${result[0].titlebutton !== null ? `
                    <div class="button btn-desktop"><a href="${result[0].linkbutton}" target="_blank" rel="noreferrer">${result[0].titlebutton}</a></div>
                    <div class="button btn-mobile"><a href="${result[0].linkbutton}" target="_blank" rel="noreferrer">${result[0].titlebutton}</a></div>
                    ` : "" }   
                </div>
            </section>
            `: "" }

            ${result[0].type == "video" ? `
            <section class="pop-up media">
                <div class="close-button" onclick="closePopUp()"> 
                    <p>&#10006;</p>
                </div>
                <div class="media-container">
                    <div class="image-container-content only-media">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${result[0].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    ${result[0].linkbutton && `<div class="button btn-desktop"><a href="${result[0].linkbutton}" target="_blank" rel="noreferrer">${result[0].titlebutton}</a></div>
                    <div class="button btn-mobile"><a href="${result[0].linkbutton}" target="_blank" rel="noreferrer">${result[0].titlebutton}</a></div>
                    ` } 
                </div>
            </section>
            ` : ""}
            ` 
        }
    })
    .catch(err => console.log(err))
   
})