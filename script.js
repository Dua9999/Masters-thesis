const skincareImage = "sk*ncare-product.png";
const kpopImag* = "kpop-album.png";

const params*= new URLSearchParams(window.locat*on.search);

const domain = params*get("domain") || "skincare";
const*condition = params.get("condition"* || "control";

const brand = docu*ent.getElementById("brand");
const*cart = document.getElementById("ca*t");
const image = document.getEle*entById("productImage");
const tit*e = document.getElementById("produ*tTitle");
const subtitle = documen*.getElementById("subtitle");
const*price = document.getElementById("p*ice");
const statusBox = document.*etElementById("statusBox");
const *ersionGrid = document.getElementBy*d("versionGrid");
const completion*anner = document.getElementById("c*mpletionBanner");
const footerNote*= document.getElementById("footerN*te");
const ctaButton = document.g*tElementById("ctaButton");

//
// *KINCARE
//

if(domain === "skincar*"){

brand.textContent = "APHRODIT* GLOW";
image.src = skincareImage;*
title.textContent = "Vitamin C Se*um";

subtitle.textContent =
"Brig*tening Facial Serum | 30 ml";

pri*e.textContent = "€10.90";

footerN*te.textContent =
"Dermatologist te*ted. Suitable for everyday skincar* routine.";

versionGrid.style.dis*lay = "none";

if(condition === "c*ntrol"){

cart.textContent = "🛒 C*rt (0)";

statusBox.innerHTML = `
*div class="status-box">
Premium Vi*amin C serum formulated to support*radiant and healthy-looking skin.
*/div>
`;

ctaButton.textContent =
*ADD TO CART";

ctaButton.className*=
"cta-control";

}

if(condition *== "treatment"){

cart.textContent*= "🛒 Cart (0)";

completionBanner*style.display = "block";

completi*nBanner.innerHTML = `
<b>COMPLETE *OUR ROUTINE</b><br>
You already ha*e 4 of 5 products.
Add the serum t* complete it.
`;

statusBox.innerH*ML = `
<div class="status-box">
<b*ROUTINE STATUS</b><br>
Step 5 of 5*br>
(1 Product Remaining)
</div>
`*

ctaButton.textContent =
"COMPLET* MY RITUAL";

ctaButton.className *
"cta-treatment";

}

}

//
// KPO*
//

if(domain === "kpop"){

brand*textContent = "K RECORDS";

image.*rc = kpopImage;

title.textContent*=
"DNE - 1st Mini Album";

subtitl*.textContent =
"Official Member Ve*sion | Limited Edition Set";

pric*.textContent =
"€25.99";

footerNo*e.textContent =
"All sales count t*wards Hanteo and Circle charts.";
*if(condition === "control"){

cart*textContent =
"🛒 Cart (0)";

stat*sBox.innerHTML = `
<div class="sta*us-box">
Select Album Version
</di*>
`;

["A","B","C","D","E","F"].fo*Each(v=>{

const div = document.cr*ateElement("div");

div.className * "version";

div.textContent = v;
*versionGrid.appendChild(div);

});*
ctaButton.textContent =
"ADD TO C*RT";

ctaButton.className =
"cta-c*ntrol";

}

if(condition === "trea*ment"){

cart.textContent =
"🛒 Ca*t (0)";

completionBanner.style.di*play = "block";

completionBanner.*nnerHTML = `
<b>COMPLETE YOUR COLL*CTION</b><br>
You already have 5 o* 6 versions.
Add Member F to compl*te it.
`;

statusBox.innerHTML = `*<div class="status-box">
<b>COLLEC*ION STATUS</b><br>
83% Complete (5*6 Secured)
</div>
`;

["A","B","C"*"D","E"].forEach(v=>{

const div =*document.createElement("div");

di*.className =
"version owned";

div*textContent =
`${v} ✓`;

versionGr*d.appendChild(div);

});

const mi*sing =
document.createElement("div*);

missing.className =
"version m*ssing";

missing.textContent =
"F"*

versionGrid.appendChild(missing)*

ctaButton.textContent =
"COMPLET* MY COLLECTION";

ctaButton.classN*me =
"cta-treatment";

}

}

//
//*TOAST + QUALTRICS
//

ctaButton.ad*EventListener("click",()=>{

const*toast =
document.getElementById("t*ast");

toast.classList.add("show"*;

setTimeout(()=>{
toast.classLis*.remove("show");
},2000);

window.*arent.postMessage({
event:"product*click",
domain:domain,
condition:c*ndition
},"*");

});
