//================================================
// IMAGE FILES
//================================================

const skincareImage = "skincare-product.png";
const kpopImage = "kpop-album.png";

//================================================
// URL PARAMETERS
//================================================

const params = new URLSearchParams(window.location.search);

const domain =
params.get("domain") || "skincare";

const condition =
params.get("condition") || "control";

//================================================
// ELEMENTS
//================================================

const image =
document.getElementById("product-image");

const brand =
document.getElementById("brand");

const title =
document.getElementById("title");

const price =
document.getElementById("price");

const description =
document.getElementById("description");

const progressText =
document.getElementById("progress-text");

const versionGrid =
document.getElementById("version-grid");

const cta =
document.getElementById("cta");

//================================================
// SKINCARE
//================================================

if(domain === "skincare"){

image.src = skincareImage;

brand.textContent =
"APHRODITE GLOW";

title.textContent =
"Vitamin C Serum";

price.textContent =
"€10.90";

versionGrid.style.display = "none";

if(condition === "control"){

progressText.textContent =
"🛒 Cart (4 Items)";

description.innerHTML = `
<div class="description-box">
Brightening Vitamin C serum formulated
to support radiant, healthy-looking skin.
</div>
`;

cta.textContent =
"Add to Cart";

cta.className =
"standard";

}

if(condition === "treatment"){

progressText.innerHTML =
"🛒 Ritual Progress: <strong>80% Complete</strong>";

description.innerHTML = `
<div class="completion-box">
<strong>You're almost there.</strong><br>
4 of 5 products in your skincare ritual
are already selected. Add this serum to
complete your ritual.
</div>
`;

cta.textContent =
"Complete My Ritual";

cta.className =
"treatment";

}

}

//================================================
// KPOP
//================================================

if(domain === "kpop"){

image.src = kpopImage;

brand.textContent =
"K RECORDS";

title.textContent =
"DNE – 1st Mini Album";

price.textContent =
"€25.99";

const versions =
["A","B","C","D","E","F"];

versions.forEach(v=>{

const item =
document.createElement("div");

item.className =
"version";

item.textContent =
`Version ${v}`;

versionGrid.appendChild(item);

});

if(condition === "control"){

progressText.textContent =
"🛒 Cart (5 Items)";

description.innerHTML = `
<div class="description-box">
Select your preferred album version.
</div>
`;

cta.textContent =
"Add to Cart";

cta.className =
"standard";

}

if(condition === "treatment"){

progressText.innerHTML =
"🛒 Collection Progress: <strong>83% Complete</strong>";

description.innerHTML = `
<div class="completion-box">
<strong>Only one version remains.</strong><br>
5 of 6 versions have already been collected.
Add the final version to complete the collection.
</div>
`;

cta.textContent =
"Complete My Collection";

cta.className =
"treatment";

}

}

//================================================
// TOAST
//================================================

cta.addEventListener("click", () => {

const toast =
document.getElementById("toast");

toast.textContent =
"Added to Cart";

toast.classList.add("show");

setTimeout(() => {

toast.classList.remove("show");

},2000);

// Qualtrics Tracking

window.parent.postMessage({
event:"product_click",
domain:domain,
condition:condition
},"*");

});
