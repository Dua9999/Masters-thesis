const skincareImage = "skincare-product.png";
const kpopImage = "kpop-album.png";

const params = new URLSearchParams(window.location.search);

const domain = params.get("domain") || "skincare";
const condition = params.get("condition") || "control";

const brand = document.getElementById("brand");
const image = document.getElementById("product-image");
const title = document.getElementById("product-title");
const price = document.getElementById("price");
const content = document.getElementById("condition-content");
const versionGrid = document.getElementById("version-grid");
const badge = document.getElementById("condition-badge");
const button = document.getElementById("cta-button");

if(domain === "skincare"){

image.src = skincareImage;

brand.textContent = "APHRODITE GLOW";

title.textContent = "Vitamin C Serum";

price.textContent = "€10.90";

versionGrid.style.display = "none";

if(condition === "treatment"){

badge.classList.add("active");

badge.textContent =
"COMPLETE YOUR ROUTINE";

content.innerHTML =
`<div class="condition-message">
<strong>You already have 4 of 5 products.</strong>
<br><br>
Add the serum to complete your skincare ritual.
</div>`;

button.textContent =
"Complete My Ritual";

button.className =
"treatment";

}
else{

content.innerHTML =
`<div class="description">
Brightening Vitamin C serum
designed for radiant skin.
</div>`;

button.textContent =
"Add to Cart";

button.className =
"standard";

}

}

if(domain === "kpop"){

image.src = kpopImage;

brand.textContent = "K RECORDS";

title.textContent =
"DNE - 1st Mini Album";

price.textContent =
"€25.99";

if(condition === "treatment"){

badge.classList.add("active");

badge.textContent =
"COMPLETE YOUR COLLECTION";

content.innerHTML =
`<div class="condition-message">
<strong>You already own 5 of 6 versions.</strong>
<br><br>
Add Member F to complete your collection.
</div>`;

["A","B","C","D","E","F"].forEach(v=>{

const div =
document.createElement("div");

if(v==="F"){

div.className =
"version missing";

div.innerHTML =
`Member ${v}<br>Missing`;

}else{

div.className =
"version owned";

div.innerHTML =
`✓ Member ${v}`;

}

versionGrid.appendChild(div);

});

button.textContent =
"Complete My Collection";

button.className =
"treatment";

}
else{

["A","B","C","D","E","F"].forEach(v=>{

const div =
document.createElement("div");

div.className =
"version";

div.textContent =
`Version ${v}`;

versionGrid.appendChild(div);

});

button.textContent =
"Add to Cart";

button.className =
"standard";

}

}

button.addEventListener("click", ()=>{

const toast =
document.getElementById("toast");

toast.textContent =
"Added Successfully";

toast.classList.add("show");

setTimeout(()=>{
toast.classList.remove("show");
},2500);

window.parent.postMessage({
event:"product_click",
domain:domain,
condition:condition
},"*");

});
