// BAGGU KNOT & BLOOM — EDIT THESE SETTINGS BEFORE PUBLISHING.
const WHATSAPP_NUMBER = "919699534972";
const INSTAGRAM_URL = ""; // Optional: paste your Instagram profile URL.

 const products = [
  {
    id: 1,
    name: "Evil Eye Keychain",
    category: "All Goodies",
    price: 60,
    image: "images/Evil Eye Keychain.jpg",
    description: "A cheerful handmade mini keychain."
  },
  {
    id: 2,
    name: "Sunflower Bouquet",
    category: "Flowers",
    price: 299,
    image: "images/Sunflower Bouquet.jpg",
    description: "A sweet little handmade bloom."
  },
  {
    id: 3,
    name: "Flower Clips",
    category: "Flowers",
    price: 59,
    image: "images/Flower Clip.jpg",
    description: "Bright daisies made with care."
  }
];

let cart = [];
const money = value => "₹" + value;
const grid = document.getElementById("productGrid");

function renderProducts(filter="all") {
  grid.innerHTML = products.filter(p => filter==="all" || p.category===filter).map(p => `
    <article class="product-card">
   <div class="product-art">
    <img src="${p.image}" alt="${p.name}">
</div>
      <div class="product-info">
        <h3>${p.name}</h3><p>${p.description}</p>
        <div class="product-bottom"><span class="price">${money(p.price)}</span>
        <button class="add-button" data-add="${p.id}">＋ Add to basket</button></div>
      </div>
    </article>`).join("");
}
function renderCart() {
  const count = cart.reduce((sum,item)=>sum+item.qty,0);
  const total = cart.reduce((sum,item)=>sum+item.price*item.qty,0);
  document.getElementById("cartCount").textContent=count;
  document.getElementById("cartCountLarge").textContent=`(${count})`;
  document.getElementById("cartTotal").textContent=money(total);
  document.getElementById("cartItems").textContent = cart.length
    ? cart.map(item=>`${item.name} × ${item.qty} — ${money(item.price*item.qty)}`).join(" | ")
    : "Your basket is waiting for something lovely.";
}
function whatsappLink(message) {
  if (!/^91\d{10}$/.test(WHATSAPP_NUMBER)) {
    alert("Please add your 10-digit WhatsApp number with country code in script.js first.");
    return null;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
grid.addEventListener("click",event=>{
  const button=event.target.closest("[data-add]");
  if(!button)return;
  const product=products.find(p=>p.id===Number(button.dataset.add));
  const existing=cart.find(item=>item.id===product.id);
  if(existing)existing.qty++;else cart.push({...product,qty:1});
  renderCart();
  button.textContent="✓ Added";
  setTimeout(()=>button.textContent="＋ Add to basket",900);
});
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  button.classList.add("active");renderProducts(button.dataset.filter);
}));
document.getElementById("orderButton").addEventListener("click",()=>{
  if(!cart.length){alert("Please add a product to your basket first.");return;}
  const lines=cart.map(item=>`${item.name} x ${item.qty} = ${money(item.price*item.qty)}`);
  const total=cart.reduce((sum,item)=>sum+item.price*item.qty,0);
  const link=whatsappLink(`Hello Baggu Knot & Bloom! I'd like to order:\n${lines.join("\n")}\nTotal: ${money(total)}\n\nMy name:\nDelivery location:`);
  if(link)window.open(link,"_blank","noopener");
});
document.getElementById("contactWhatsApp").addEventListener("click",event=>{
  event.preventDefault();
  const link=whatsappLink("Hello Baggu Knot & Bloom! I'd like to know more about your handmade products.");
  if(link)window.open(link,"_blank","noopener");
});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();renderCart();
if(INSTAGRAM_URL)document.querySelector(".contact-email").innerHTML=`Follow our creations on <a class="text-link" href="${INSTAGRAM_URL}" target="_blank" rel="noopener">Instagram ↗</a>`;
