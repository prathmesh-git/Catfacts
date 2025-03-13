let btn = document.querySelector("#btn");
let randomImg = "https://api.thecatapi.com/v1/images/search";
let randomFact = "https://catfact.ninja/fact";

async function getImage(){
    try{
        let res = await axios.get(randomImg);
        return res.data[0].url;


    }catch(err){
        console.log("Error - ", err);
    }
}

async function getFact(){
    try{
        let res = await axios.get(randomFact);
        return res.data.fact;
    }
    catch(err){
        console.log("Error - ", err);      
    }
}

btn.addEventListener("click", async ()=>{
    let imgLink = await getImage();
    let img = document.querySelector("#cats-img");
    img.setAttribute("src", imgLink)

    let factLink = await getFact();
    let p = document.querySelector("#results");
    p.innerText = factLink;

    if (btn.innerText === "Get Fact") {
        btn.innerText = "Another One";
    }

})


