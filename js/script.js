    const coutry = document.querySelector(".search")
    const input = document.querySelector(".look-for")



 let getinfo = function (){
    request({
        metod:"GET",
        url:`https://restcountries.com/v3.1/name/{${coutry.value}} `,
        succes: response =>{    
            const res = JSON.parse(response);
            console.log(res);
             
            const name = document.getElementById("name");
            const redion = document.getElementById("Redion");
            const subregion = document.getElementById("Subregion");
            const capital = document.getElementById("Capital");
            const flag = document.getElementById("Flag");

            flag.style.width = "150px"
            flag.setAttribute("src", res[0]["flags"]["svg"])

            name.innerHTML = res[0]["name"]["official"]
            redion.innerHTML = res[0]["region"]
            subregion.innerHTML = res[0]["subregion"]
            capital.innerHTML = res[0]["capital"]
            flag.innerHTML = flag


          
        },
    
        error : massage =>{
            console.log(`error ${massage}`);
        }
    
    })
}
input.addEventListener("click", () =>{
    getinfo();
})
