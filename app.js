const btn = document.querySelector("#btn");
const img = document.querySelector("#cats-img");
const p = document.querySelector("#results");
const spinner = document.querySelector(".spinner");

const RANDOM_IMG_API = "https://api.thecatapi.com/v1/images/search";
const RANDOM_FACT_API = "https://catfact.ninja/fact";

async function getImage() {
    const res = await axios.get(RANDOM_IMG_API);
    return res.data[0].url;
}

async function getFact() {
    const res = await axios.get(RANDOM_FACT_API);
    return res.data.fact;
}

btn.addEventListener("click", async () => {
    try {
        btn.disabled = true;
        btn.innerText = "Loading...";
        p.innerText = "Fetching a cute cat fact 🐱...";

        spinner.classList.remove("hidden");
        img.style.opacity = "0";

        const [imgLink, fact] = await Promise.all([
            getImage(),
            getFact()
        ]);

        p.innerText = fact;

        img.onload = () => {
            spinner.classList.add("hidden");
            img.style.opacity = "1";
            btn.disabled = false;
            btn.innerText = "Another One";
        };

        img.onerror = () => {
            throw new Error("Image failed to load");
        };

        img.src = imgLink;

    } catch (err) {
        console.error(err);
        spinner.classList.add("hidden");
        p.innerText = "Oops! Something went wrong 😿";
        btn.disabled = false;
        btn.innerText = "Get Fact";
    }
});
