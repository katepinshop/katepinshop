const PRODUCTS = [
  {id:"gatita-rosa",name:"Gatita Rosa",desc:"Pin metálico esmaltado de gatita kawaii con ojos brillantes.",price:12000,img:"img/pin-cat-pink.png",cat:"animales",col:"san-valentin",badge:"hot",tab:"vendidos"},
  {id:"unicornio-arcoiris",name:"Unicornio Arcoíris",desc:"Pin de unicornio con detalles arcoíris y borde dorado.",price:14000,img:"img/pin-unicorn.png",cat:"fantasia",col:"verano",badge:"new",tab:"nuevos"},
  {id:"fresita-feliz",name:"Fresita Feliz",desc:"Pin esmaltado de fresa sonriente con acabado dorado.",price:10000,img:"img/pin-strawberry.png",cat:"comida",col:"verano",badge:"sale",tab:"ofertas"},
  {id:"luna-y-estrellas",name:"Luna y Estrellas",desc:"Pin de luna creciente con estrellas en lavanda y dorado.",price:13000,img:"img/pin-moon-star.png",cat:"fantasia",col:"halloween",badge:"new",tab:"nuevos"},
  {id:"conejita-tierna",name:"Conejita Tierna",desc:"Pin de conejita blanca con mejillas rosadas y borde oro.",price:11000,img:"img/pin-bunny.png",cat:"animales",col:"san-valentin",badge:"hot",tab:"vendidos"},
  {id:"sakura-bloom",name:"Sakura Bloom",desc:"Pin de flor de cerezo sakura en rosa pastel.",price:12000,img:"img/pin-cherry-blossom.png",cat:"flores",col:"navidad",badge:"new",tab:"nuevos"},
  {id:"corazon-alado",name:"Corazón Alado",desc:"Pin de corazón con alas de ángel, rosado y lavanda.",price:15000,img:"img/pin-heart-wings.png",cat:"fantasia",col:"san-valentin",badge:"new",tab:"nuevos"},
  {id:"nube-arcoiris",name:"Nube Arcoíris",desc:"Pin de nube feliz con arcoíris en colores pastel.",price:11000,img:"img/pin-cloud-rainbow.png",cat:"fantasia",col:"verano",badge:"sale",tab:"ofertas"},
  {id:"gatita-rosa-mini",name:"Gatita Rosa Mini",desc:"Pin metálico esmaltado de gatita rosa tamaño mini.",price:9000,img:"img/pin-cat-pink.png",cat:"animales",col:"san-valentin",badge:"",tab:""},
  {id:"unicornio-dorado",name:"Unicornio Dorado",desc:"Pin de unicornio con detalles bañados en oro.",price:16000,img:"img/pin-unicorn.png",cat:"fantasia",col:"navidad",badge:"hot",tab:"vendidos"},
  {id:"sakura-dorada",name:"Sakura Dorada",desc:"Flor de cerezo sakura con bordes dorados.",price:13000,img:"img/pin-cherry-blossom.png",cat:"flores",col:"navidad",badge:"",tab:""},
  {id:"mariposa-monarca",name:"Mariposa Monarca",desc:"Pin metálico esmaltado de mariposa monarca clásica.",price:12000,img:"img/pinmariposa.png",cat:"animales",col:"verano",badge:"new",tab:"nuevos"},
  {id:"mariposa-turquesa",name:"Mariposa Turquesa",desc:"Pin esmaltado de mariposa en tono turquesa y dorado.",price:13000,img:"img/pinmariposa2.png",cat:"animales",col:"verano",badge:"",tab:"nuevos"},
  {id:"mariposa-nocturna",name:"Mariposa Nocturna",desc:"Pin de mariposa con tonos oscuros y elegantes.",price:14000,img:"img/pinmariposa3.png",cat:"animales",col:"halloween",badge:"hot",tab:"vendidos"},
  {id:"mariposa-rosa",name:"Mariposa Rosa",desc:"Pin metálico de mariposa rosa pastel kawaii.",price:12000,img:"img/pinmariposa4.png",cat:"animales",col:"san-valentin",badge:"new",tab:"nuevos"},
  {id:"mariposa-esmeralda",name:"Mariposa Esmeralda",desc:"Hermoso pin de mariposa color esmeralda.",price:13000,img:"img/pinmariposa5.png",cat:"animales",col:"navidad",badge:"",tab:"nuevos"},
  {id:"mariposa-solar",name:"Mariposa Solar",desc:"Pin de mariposa con diseño inspirado en el sol.",price:14000,img:"img/pinmariposa6.png",cat:"animales",col:"verano",badge:"sale",tab:"ofertas"},
  {id:"mariposa-violeta",name:"Mariposa Violeta",desc:"Mariposa esmaltada en tonos violeta y morado.",price:12000,img:"img/pinmariposa7.png",cat:"animales",col:"halloween",badge:"",tab:"nuevos"},
  {id:"mariposa-cristal",name:"Mariposa Cristal",desc:"Pin de mariposa con acabado perlado brillante.",price:15000,img:"img/pinmariposa8.png",cat:"animales",col:"navidad",badge:"hot",tab:"vendidos"}
];

let cart = JSON.parse(localStorage.getItem('katepin_cart')||'[]');
let reviews = JSON.parse(localStorage.getItem('katepin_reviews')||'{}');
let currentTab = 'nuevos';
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

document.addEventListener('DOMContentLoaded',()=>{
  renderProducts();updateCartUI();initScrollAnim();
  initHeader();initMobile();initCart();initCheckout();initTabs();initNewsletter();initSearch();initProductPage();
});

function getFiltered(){
  if(currentTab==='vendidos') return PRODUCTS.filter(p=>p.tab==='vendidos'||p.badge==='hot');
  if(currentTab==='ofertas') return PRODUCTS.filter(p=>p.tab==='ofertas'||p.badge==='sale');
  return PRODUCTS.filter(p=>p.tab==='nuevos'||p.badge==='new');
}

function renderProducts(){
  const grid=$('#product-grid');
  if(!grid) return;
  const items=getFiltered();
  grid.innerHTML=items.map(p=>{
    const badgeLabel=p.badge==='new'?'NUEVO':p.badge==='hot'?'HOT':'-15%';
    return `<a href="producto.html#id=${p.id}" class="product-card-link"><article class="product-card fade-up" itemscope itemtype="https://schema.org/Product">
      <div class="product-img-wrap">
        <span class="badge ${p.badge}">${badgeLabel}</span>
        <button class="heart-btn" onclick="event.preventDefault();event.stopPropagation();this.classList.toggle('liked')" aria-label="Favorito">♡</button>
        <img src="${p.img}" alt="Pin metálico ${p.name} - KatePin" loading="lazy" itemprop="image">
      </div>
      <div class="product-name" itemprop="name">${p.name}</div>
      <div class="product-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
        <meta itemprop="priceCurrency" content="COP">
        <span itemprop="price" content="${p.price}">$${p.price.toLocaleString('es-CO')}</span>
      </div>
      <button class="btn-pink" style="margin-top:8px;font-size:.7rem;padding:7px 20px" onclick="event.preventDefault();event.stopPropagation();addToCart('${p.id}')" id="add-btn-${p.id}">Agregar 🛒</button>
    </article></a>`;
  }).join('');
  initScrollAnim();
}

function initTabs(){
  $$('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      $$('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      currentTab=btn.dataset.tab;
      renderProducts();
    });
  });
}

// Cart
function addToCart(id){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const ex=cart.find(i=>i.id===id);
  if(ex)ex.qty++;else cart.push({...p,qty:1});
  saveCart();updateCartUI();showToast(`✨ ${p.name} agregado`);
}
window.addToCart = addToCart; // Para que funcione desde el HTML

function removeFromCart(id){cart=cart.filter(i=>i.id!==id);saveCart();updateCartUI();renderCartItems();}
window.removeFromCart = removeFromCart;

function updateQty(id,d){
  const it=cart.find(i=>i.id===id);if(!it)return;
  it.qty+=d;if(it.qty<=0){removeFromCart(id);return;}
  saveCart();updateCartUI();renderCartItems();
}
window.updateQty = updateQty;

function saveCart(){localStorage.setItem('katepin_cart',JSON.stringify(cart));}
function getTotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0);}
function getCount(){return cart.reduce((s,i)=>s+i.qty,0);}
function updateCartUI(){
  const c=$('#cart-count'),n=getCount();
  if(c){c.textContent=n;c.style.display=n>0?'flex':'none';}
}

function renderCartItems(){
  const el=$('#cart-items');
  if(!el) return;
  if(!cart.length){el.innerHTML='<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Tu carrito está vacío</p></div>';const total=$('#cart-total-amount'); if(total) total.textContent='$0';return;}
  el.innerHTML=cart.map(i=>`<div class="cart-item"><img src="${i.img}" alt="${i.name}"><div class="cart-item-info"><div class="cart-item-name">${i.name}</div><div class="cart-item-price">$${(i.price*i.qty).toLocaleString('es-CO')}</div><div class="cart-item-qty"><button class="qty-btn" onclick="updateQty('${i.id}',-1)">−</button><span class="qty-val">${i.qty}</span><button class="qty-btn" onclick="updateQty('${i.id}',1)">+</button></div></div><button class="cart-item-remove" onclick="removeFromCart('${i.id}')">✕</button></div>`).join('');
  const totalAmount=$('#cart-total-amount'); if(totalAmount) totalAmount.textContent=`$${getTotal().toLocaleString('es-CO')}`;
}

function initCart(){
  const btn=$('#cart-btn'),ov=$('#cart-overlay'),cl=$('#cart-close'),ch=$('#checkout-btn');
  if(btn) btn.addEventListener('click',openCart);
  if(ov) ov.addEventListener('click',closeCart);
  if(cl) cl.addEventListener('click',closeCart);
  if(ch) ch.addEventListener('click',()=>{
    if(!cart.length){showToast('⚠️ Carrito vacío');return;}
    closeCart();setTimeout(openCheckout,300);
  });
}
function openCart(){renderCartItems();const ov=$('#cart-overlay'),dr=$('#cart-drawer'); if(ov) ov.classList.add('active'); if(dr) dr.classList.add('active');document.body.style.overflow='hidden';}
function closeCart(){const ov=$('#cart-overlay'),dr=$('#cart-drawer'); if(ov) ov.classList.remove('active'); if(dr) dr.classList.remove('active');document.body.style.overflow='';}

function openCheckout(){
  const m=$('#checkout-modal'); if(!m) return;
  const formSec=$('#checkout-form-section'), succ=$('#checkout-success'), summ=$('#order-summary-items');
  if(formSec) formSec.style.display='block';
  if(succ) succ.classList.remove('active');
  if(summ) summ.innerHTML=cart.map(i=>`<div class="order-line"><span>${i.name} x${i.qty}</span><span>$${(i.price*i.qty).toLocaleString('es-CO')}</span></div>`).join('')+`<div class="order-line total"><span>Total</span><span>$${getTotal().toLocaleString('es-CO')}</span></div>`;
  m.classList.add('active');document.body.style.overflow='hidden';
}
function closeCheckout(){const m=$('#checkout-modal'); if(m) m.classList.remove('active');document.body.style.overflow='';}

function initCheckout(){
  const cl=$('#checkout-close'), m=$('#checkout-modal'), fi=$('#payment-proof'), fn=$('#file-name'), form=$('#order-form');
  if(cl) cl.addEventListener('click',closeCheckout);
  if(m) m.addEventListener('click',e=>{if(e.target===e.currentTarget)closeCheckout();});
  if(fi && fn) fi.addEventListener('change',e=>{if(e.target.files.length)fn.textContent=e.target.files[0].name;});
  if(form) form.addEventListener('submit',e=>{
    e.preventDefault();
    const n=$('#customer-name').value.trim(),p=$('#customer-phone').value.trim(),a=$('#customer-address').value.trim(),nq=$('#nequi-number').value.trim();
    if(!n||!p||!a||!nq){showToast('⚠️ Completa todos los campos');return;}
    const pf=$('#payment-proof');
    if(!pf || !pf.files[0]){showToast('⚠️ Adjunta el comprobante');return;}
    const fs=$('#checkout-form-section'), cs=$('#checkout-success');
    if(fs) fs.style.display='none';
    if(cs) cs.classList.add('active');
    cart=[];saveCart();updateCartUI();showToast('🎉 ¡Pedido enviado!');
  });
}

// Search
function initSearch(){
  const btns = $$('[aria-label="Buscar"]');
  btns.forEach(btn => {
    btn.addEventListener('click', openSearch);
  });
  const ov=$('#search-overlay'), cl=$('#search-close'), input=$('#search-input');
  if(ov) ov.addEventListener('click', e => { if(e.target===ov) closeSearch(); });
  if(cl) cl.addEventListener('click', closeSearch);
  if(input) {
    input.addEventListener('input', e => {
      const q = e.target.value.toLowerCase().trim();
      renderSearchResults(q);
    });
  }
}
function openSearch(){
  let ov=$('#search-overlay');
  if(!ov){
    ov=document.createElement('div'); ov.id='search-overlay'; ov.className='search-overlay';
    ov.innerHTML=`
      <div class="search-modal">
        <button class="search-close" id="search-close">✕</button>
        <div class="search-header">
          <input type="text" id="search-input" placeholder="¿Qué estás buscando?..." autofocus>
        </div>
        <div class="search-results" id="search-results"></div>
      </div>
    `;
    document.body.appendChild(ov);
    initSearch(); // Re-init listeners for the new elements
  }
  ov.classList.add('active');
  $('#search-input').focus();
  document.body.style.overflow='hidden';
}
function closeSearch(){ const ov=$('#search-overlay'); if(ov) ov.classList.remove('active'); document.body.style.overflow=''; }
function renderSearchResults(q){
  const res=$('#search-results'); if(!res) return;
  if(!q){ res.innerHTML=''; return; }
  const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  if(!matches.length){ res.innerHTML='<p class="search-no-results">No encontramos nada con ese nombre 🌸</p>'; return; }
  res.innerHTML = matches.map(p => `
    <a href="producto.html#id=${p.id}" class="search-item" onclick="closeSearch()">
      <img src="${p.img}" alt="${p.name}">
      <div class="search-item-info">
        <div class="search-item-name">${p.name}</div>
        <div class="search-item-price">$${p.price.toLocaleString('es-CO')}</div>
      </div>
    </a>
  `).join('');
}

// Product Page & Reviews
function initProductPage(){
  if(!window.location.pathname.includes('producto.html')) return;
  const hash = window.location.hash;
  if(!hash.includes('id=')) return;
  const id = hash.split('id=')[1];
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  
  // Update UI (Basic update, assuming the HTML has these elements)
  const name=$('#producto-name'), desc=$('#prod-desc'), price=$('#producto-price'), img=$('#main-product-img');
  if(name) name.textContent = p.name;
  if(desc) desc.textContent = p.desc;
  if(price) price.textContent = `$${p.price.toLocaleString('es-CO')}`;
  if(img) img.src = p.img;
  
  const addBtn = $('#btn-add-cart');
  if(addBtn) addBtn.onclick = () => addToCart(p.id);

  renderReviews(p.id);
  initReviewForm(p.id);
}

function initReviewForm(prodId){
  const stars = $$('.star-rating .star');
  let rating = 0;
  stars.forEach(s => {
    s.addEventListener('click', () => {
      rating = s.dataset.val;
      stars.forEach(st => st.classList.toggle('active', st.dataset.val <= rating));
    });
  });

  const form = $('#review-form');
  if(form){
    form.onsubmit = (e) => {
      e.preventDefault();
      const text = $('#review-text').value.trim();
      const user = $('#review-user').value.trim() || 'Anónimo';
      if(rating === 0) { showToast('⚠️ Por favor selecciona una calificación'); return; }
      if(!text) { showToast('⚠️ Escribe un comentario'); return; }
      
      if(!reviews[prodId]) reviews[prodId] = [];
      reviews[prodId].unshift({ user, text, rating: parseInt(rating), date: new Date().toLocaleDateString() });
      localStorage.setItem('katepin_reviews', JSON.stringify(reviews));
      
      showToast('💖 ¡Gracias por tu reseña!');
      $('#review-text').value = '';
      $('#review-user').value = '';
      rating = 0;
      stars.forEach(st => st.classList.remove('active'));
      renderReviews(prodId);
    };
  }
}

function renderReviews(prodId){
  const container = $('#reviews-list');
  if(!container) return;
  const prodReviews = reviews[prodId] || [];
  if(!prodReviews.length){
    container.innerHTML = '<p class="no-reviews">Aún no hay reseñas. ¡Sé el primero!</p>';
    return;
  }
  container.innerHTML = prodReviews.map(r => `
    <div class="review-card">
      <div class="review-top">
        <span class="review-user">${r.user}</span>
        <span class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
      </div>
      <div class="review-date">${r.date}</div>
      <p class="review-content">${r.text}</p>
    </div>
  `).join('');
}

function initHeader(){
  const h=$('.header');
  window.addEventListener('scroll',()=>h.classList.toggle('scrolled',scrollY>40));
}
function initMobile(){
  const t=$('#menu-toggle'),n=$('#mobile-nav');
  if(t && n){
    t.addEventListener('click',()=>{n.classList.toggle('active');t.textContent=n.classList.contains('active')?'✕':'☰';});
    $$('#mobile-nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('active');t.textContent='☰';}));
  }
}
function initScrollAnim(){
  const obs=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*60);obs.unobserve(e.target);}});},{threshold:.1});
  $$('.fade-up:not(.visible)').forEach(el=>obs.observe(el));
}
function initNewsletter(){
  const f=$('#newsletter-form');if(!f)return;
  f.addEventListener('submit',e=>{e.preventDefault();showToast('💌 ¡Gracias por suscribirte!');f.querySelector('input').value='';});
}
function showToast(msg){
  let t=$('#toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}
  t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500);
}
