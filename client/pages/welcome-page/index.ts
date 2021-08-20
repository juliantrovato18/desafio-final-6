const imgFondo = require("url:../../img/fondo.png");


export function initWelcomePage(params){
    const div = document.createElement("div");
    div.innerHTML = `
    <section class= "section">
    <div class="container-title">
    <custom-text  variant="title">Piedra, Papel o Tijera</custom-text>
    </div>
    <div class="container-button">
    <button-comp class="button">Comenzar</button-comp>
    </div>
    <div class = "contenedor-ppt">
    <custom-tijera variant="small" class="elementos"></custom-tijera>
    <custom-piedra variant="small" class="elementos" ></custom-piedra>
    <custom-papel variant = "small" class="elementos" ></custom-papel>
    </div>
    </section>
    `
    
    const style = document.createElement("style");
    style.innerHTML=`
             * {
            box-sizing: border-box;
         }
         body {
          margin: 0;
         }
  
         .contenedor-ppt {
         display: flex;
         flex-direction: row;
         margin: 0px;
        }
        @media (min-width: 700px){
           .contenedor-ppt{
              display:flex;
              flex-direction: row;
              justify-content: flex-end;
           }
        }
  
        .elementos {
         padding: 10px;
         position: relative;
         top: 40px;
         }
            .container-title {
         margin: 30px 20px;
             }
        .container-button {
         min-width: 320px;
         padding: 10px;
            align-items: center;
            justify-content: center;
         }
         .section {
            background-image:url(${imgFondo});
            display: flex;
            height: 100vh;
         flex-direction: column;
            justify-content: center;
        align-items: center;
         }
         @media (min-width: 700px){
            .section{
               background-image:url(${imgFondo});
               display:flex;
               height: 100vh;
               flex-direction:column;
               justify-content:space-around;
               align-items:center;

            }
         }
        .container {
         display: flex;
         flex-direction: row;
            padding: 20px;
         }
  
    `
    div.appendChild(style);
   
    div.querySelector(".button").addEventListener("click",()=>{
        params.goTo("/instructions");
    })
    return div;

}