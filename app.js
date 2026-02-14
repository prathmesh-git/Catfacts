const btn = document.querySelector("#btn");
const img = document.querySelector("#cats-img");
const p = document.querySelector("#results");
const spinner = document.querySelector(".spinner");

const RANDOM_IMG_API = "https://api.thecatapi.com/v1/images/search";
const RANDOM_FACT_API = "https://catfact.ninja/fact";

// Initial state
spinner.style.display = "none";

async function getImage() {
    try {
        const res = await axios.get(RANDOM_IMG_API);
        return res.data[0].url;
    } catch (e) {
        console.error("Error fetching image", e);
        return null;
    }
}

async function getFact() {
    try {
        const res = await axios.get(RANDOM_FACT_API);
        return res.data.fact;
    } catch (e) {
        console.error("Error fetching fact", e);
        return "Cats are amazing, but we couldn't fetch a new fact right now.";
    }
}

async function handleGetNewFact() {
    try {
        // UI Loading State
        btn.disabled = true;
        btn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i> Loading...';
        p.style.opacity = "0.5";

        spinner.style.display = "flex"; // Changed from block to flex for centering
        img.style.opacity = "0";
        img.classList.remove("fade-in"); // Reset animation

        // Fetch Data
        const [imgLink, fact] = await Promise.all([
            getImage(),
            getFact()
        ]);

        // Update Content
        if (fact) {
            p.innerText = fact;
            p.style.opacity = "1";
        }

        if (imgLink) {
            img.onload = () => {
                spinner.style.display = "none";
                img.style.opacity = "1";
                img.classList.add("fade-in"); // Trigger animation
                resetButton();
                triggerConfetti(); // Celebration!
            };
            img.onerror = () => {
                handleError();
            };
            img.src = imgLink;
        } else {
            handleError();
        }

    } catch (err) {
        handleError();
    }
}

function resetButton() {
    btn.disabled = false;
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" style="margin-right: 8px; fill: white; display: inline-block; vertical-align: middle;">
        <path d="M335.646 261.389c3.551 3.102 6.961 6.337 10.354 9.611.717.665 1.434 1.33 2.172 2.015 28.564 27.193 47.915 72.627 50.031 111.738.272 22.059-6.259 40.795-21.39 56.996-14.141 13.4-30.42 19.046-49.707 18.738-9.82-.503-19.08-3.767-28.406-6.668-32.937-10.01-66.717-6.271-98.934 4.234-13.685 4.06-29.657 3.561-42.765-2.054-.877-.362-1.753-.725-2.656-1.098-6.566-2.989-11.936-7.173-17.344-11.903-.616-.52-1.232-1.041-1.867-1.578-13.834-12.623-20.621-31.651-21.518-49.974-1.089-43.427 22.264-88.229 51.062-119.339 45.975-47.639 119.791-53.914 170.968-10.72z"/>
        <path d="M361.5 60.195c18.856 13.612 29.46 34.691 33.164 57.38 3.84 27.716-.329 56.952-17.164 79.921-9.066 11.708-21.563 21.165-36.5 23.504-17.592 1.118-31.499-2.572-45.125-14.187-17.802-16.715-26.264-41.398-27.059-65.414-.51-25.366 5.227-52.413 23.184-71.398 18.795-19.54 46.208-24.81 69.5-9.806z"/>
        <path d="M206.125 58.688c19.469 12.48 29.743 32.352 34.875 54.312 5.731 26.925 1.426 56.441-13 80-2.744 3.947-5.695 7.512-9 11-.686.727-1.372 1.454-2.079 2.203-10.849 10.529-24.492 15.237-39.341 15.161-15.067-.367-28.244-7.595-38.58-18.364-17.809-20.231-24.055-46.955-22.894-73.427 1.557-24.325 9.91-47.176 27.582-64.385 17.863-15.352 41.96-17.862 62.437-6.5z"/>
        <path d="M473.313 187.313c13.238 10.024 20.794 23.274 23.687 39.687 1.874 25.767-2.583 48.77-19.343 69.028-10.013 11.206-24.059 20.31-39.344 21.184-14.379.474-25.391-3.991-36.438-13.336-11.174-10.534-17.693-25.776-18.148-41.164-.56-24.464 4.571-46.478 21.488-64.871 18.032-18.386 45.328-26.684 68.098-11.528z"/>
        <path d="M92.688 187.188c18.68 12.824 30.604 31.785 34.901 54.023 3.118 21.133-.022 40.972-12.549 58.54-6.345 7.736-16.624 15.294-26.738 17.07-19.15 1.496-33.836-2.842-48.664-15.375-11.63-10.785-18.432-24.372-22.637-39.445-.281-.995-.281-.995-.569-2.009-1.683-6.586-1.764-13.033-1.744-19.803-.024-1.648-.024-1.648-.049-3.33-.01-16.501 5.383-31.738 17.007-43.674 17.252-15.862 40.887-18.113 61.042-5.997z"/>
    </svg> Get New Fact`;
}

function handleError() {
    spinner.style.display = "none";
    p.innerText = "Oops! Something went wrong. Please try again.";
    p.style.opacity = "1";
    img.style.opacity = "1"; // Show whatever placeholders or previous image
    resetButton();
}

function triggerConfetti() {
    // Fire confetti from both sides
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

// Event Listeners
btn.addEventListener("click", handleGetNewFact);

// Load initial content
document.addEventListener("DOMContentLoaded", handleGetNewFact);
