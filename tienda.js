/* ===== TIENDA PAGE LOGIC ===== */

const ALL_PINS = [
  {id:"gatita-rosa",name:"Gatita Rosa",price:12000,img:"img/pin-cat-pink.png",cat:"animales",col:"san-valentin",badge:"hot",color:"rosa",material:"oro-rosa"},
  {id:"unicornio-arcoiris",name:"Unicornio Arcoíris",price:14000,img:"img/pin-unicorn.png",cat:"fantasia",col:"verano",badge:"new",color:"lila",material:"oro"},
  {id:"fresita-feliz",name:"Fresita Feliz",price:10000,img:"img/pin-strawberry.png",cat:"comida",col:"verano",badge:"sale",color:"coral",material:"oro"},
  {id:"luna-y-estrellas",name:"Luna y Estrellas",price:13000,img:"img/pin-moon-star.png",cat:"fantasia",col:"halloween",badge:"new",color:"lila",material:"plata"},
  {id:"conejita-tierna",name:"Conejita Tierna",price:11000,img:"img/pin-bunny.png",cat:"animales",col:"san-valentin",badge:"hot",color:"blanco",material:"oro"},
  {id:"sakura-bloom",name:"Sakura Bloom",price:12000,img:"img/pin-cherry-blossom.png",cat:"flores",col:"navidad",badge:"new",color:"rosa",material:"oro-rosa"},
  {id:"corazon-alado",name:"Corazón Alado",price:15000,img:"img/pin-heart-wings.png",cat:"fantasia",col:"san-valentin",badge:"new",color:"rosa",material:"oro"},
  {id:"nube-arcoiris",name:"Nube Arcoíris",price:11000,img:"img/pin-cloud-rainbow.png",cat:"fantasia",col:"verano",badge:"sale",color:"azul",material:"plata"},
  {id:"gatita-rosa-mini",name:"Gatita Rosa Mini",price:9000,img:"img/pin-cat-pink.png",cat:"animales",col:"san-valentin",badge:null,color:"rosa",material:"plata"},
  {id:"unicornio-dorado",name:"Unicornio Dorado",price:16000,img:"img/pin-unicorn.png",cat:"fantasia",col:"navidad",badge:"hot",color:"dorado",material:"oro"},
  {id:"sakura-dorada",name:"Sakura Dorada",price:13000,img:"img/pin-cherry-blossom.png",cat:"flores",col:"navidad",badge:null,color:"rosa",material:"oro"},
  {id:"mariposa-monarca",name:"Mariposa Monarca",price:12000,img:"img/pinmariposa.png",cat:"animales",col:"verano",badge:"new",color:"coral",material:"oro"},
  {id:"mariposa-turquesa",name:"Mariposa Turquesa",price:13000,img:"img/pinmariposa2.png",cat:"animales",col:"verano",badge:null,color:"azul",material:"plata"},
  {id:"mariposa-nocturna",name:"Mariposa Nocturna",price:14000,img:"img/pinmariposa3.png",cat:"animales",col:"halloween",badge:"hot",color:"negro",material:"plata"},
  {id:"mariposa-rosa",name:"Mariposa Rosa",price:12000,img:"img/pinmariposa4.png",cat:"animales",col:"san-valentin",badge:"new",color:"rosa",material:"oro-rosa"},
  {id:"mariposa-esmeralda",name:"Mariposa Esmeralda",price:13000,img:"img/pinmariposa5.png",cat:"animales",col:"navidad",badge:null,color:"verde",material:"oro"},
  {id:"mariposa-solar",name:"Mariposa Solar",price:14000,img:"img/pinmariposa6.png",cat:"animales",col:"verano",badge:"sale",color:"amarillo",material:"oro"},
  {id:"mariposa-violeta",name:"Mariposa Violeta",price:12000,img:"img/pinmariposa7.png",cat:"animales",col:"halloween",badge:null,color:"lila",material:"plata"},
  {id:"mariposa-cristal",name:"Mariposa Cristal",price:15000,img:"img/pinmariposa8.png",cat:"animales",col:"navidad",badge:"hot",color:"blanco",material:"plata"}
];

let filters = { cat:'todos', col:'todos', color:'todos', material:'todos', priceMin:8000, priceMax:20000, sort:'relevancia' };
const PER_PAGE = 9;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
  checkHashCategory();

  renderStore();
  initCatLinks();
  initColorSwatches();
  initMaterialBtns();
  initPriceRange();
  initSort();
  initSidebarToggle();
});

window.addEventListener('hashchange', () => {
  checkHashCategory();
});

function checkHashCategory() {
  const hashVal = window.location.hash.substring(1);
  const validCats = [
    'animales', 'fantasia', 'flores', 'comida', 'personajes', 'naturaleza',
    'ropa-vestidos', 'ropa-chaquetas', 'ropa-blusas', 'ropa-pantalones', 'ropa-faldas',
    'accesorios-pines',
    'zapatos-sandalias', 'zapatos-botas', 'zapatos-tenis'
  ];
  const validCols = ['san-valentin', 'navidad', 'verano', 'halloween'];
  if (validCats.includes(hashVal)) {
    applyCategoryFilter(hashVal);
    currentPage = 1;
    renderStore();
  } else if (validCols.includes(hashVal)) {
    applyCollectionFilter(hashVal);
    currentPage = 1;
    renderStore();
  }
}

function applyCategoryFilter(cat) {
  filters.cat = cat;
  filters.col = 'todos';
  const link = document.querySelector(`.cat-link[data-cat="${cat}"]`);
  if (link) {
    document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
    if(document.querySelector('.col-link')) {
      document.querySelectorAll('.col-link').forEach(l => l.classList.remove('active'));
      document.querySelector('.col-link[data-col="todos"]').classList.add('active');
    }
    link.classList.add('active');
    document.getElementById('breadcrumb-cat').textContent = link.textContent;
  } else {
    let name = cat.replace(/-/g, ' ');
    name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    document.getElementById('breadcrumb-cat').textContent = name;
  }
}

function applyCollectionFilter(col) {
  filters.col = col;
  filters.cat = 'todos';
  
  // Reseteamos las categorias activas siempre
  document.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
  const allCat = document.querySelector('.cat-link[data-cat="todos"]');
  if (allCat) allCat.classList.add('active');

  const link = document.querySelector(`.col-link[data-col="${col}"]`);
  if (link) {
    document.querySelectorAll('.col-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    document.getElementById('breadcrumb-cat').textContent = link.textContent;
  } else {
    document.getElementById('breadcrumb-cat').textContent = col.charAt(0).toUpperCase() + col.slice(1).replace(/-/g, ' ');
  }
}

function getFiltered() {
  let items = [...ALL_PINS];
  const pinCats = ['animales', 'fantasia', 'flores', 'comida', 'personajes', 'naturaleza'];
  
  if (filters.cat !== 'todos') {
    if (filters.cat === 'accesorios-pines') {
      items = items.filter(p => pinCats.includes(p.cat));
    } else {
      items = items.filter(p => p.cat === filters.cat);
    }
  }
  if (filters.col !== 'todos') items = items.filter(p => p.col === filters.col);
  if (filters.color !== 'todos') items = items.filter(p => p.color === filters.color);
  if (filters.material !== 'todos') items = items.filter(p => p.material === filters.material);
  items = items.filter(p => p.price >= filters.priceMin && p.price <= filters.priceMax);

  switch(filters.sort) {
    case 'precio-asc': items.sort((a,b) => a.price - b.price); break;
    case 'precio-desc': items.sort((a,b) => b.price - a.price); break;
    case 'nombre': items.sort((a,b) => a.name.localeCompare(b.name)); break;
    case 'nuevos': items.sort((a,b) => (b.badge==='new'?1:0)-(a.badge==='new'?1:0)); break;
  }
  return items;
}

function renderStore() {
  const all = getFiltered();
  const total = Math.ceil(all.length / PER_PAGE);
  if (currentPage > total && total > 0) currentPage = total;
  const start = (currentPage - 1) * PER_PAGE;
  const items = all.slice(start, start + PER_PAGE);

  const grid = document.getElementById('store-grid');
  if (!items.length) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-light);font-size:.95rem">No se encontraron productos con estos filtros 😿</p>';
  } else {
    grid.innerHTML = items.map(p => {
      const badgeHTML = p.badge ? `<span class="store-badge ${p.badge}">${p.badge==='new'?'NUEVO':p.badge==='hot'?'HOT':'-15%'}</span>` : '';
      return `<a href="producto.html#id=${p.id}" class="store-card-link"><article class="store-card" itemscope itemtype="https://schema.org/Product">
        <div class="store-card-img">
          ${badgeHTML}
          <button class="store-heart" onclick="event.preventDefault();event.stopPropagation();this.classList.toggle('liked')" aria-label="Favorito">♡</button>
          <img src="${p.img}" alt="Pin metálico ${p.name}" loading="lazy" itemprop="image">
        </div>
        <div class="store-card-name" itemprop="name">${p.name}</div>
        <div class="store-card-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <meta itemprop="priceCurrency" content="COP">
          <span itemprop="price" content="${p.price}">$${p.price.toLocaleString('es-CO')}</span>
        </div>
      </article></a>`;
    }).join('');
  }

  // Pagination
  const pag = document.getElementById('pagination');
  if (total <= 1) { pag.innerHTML = ''; return; }
  let html = '<span class="page-label">página</span>';
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
  }
  pag.innerHTML = html;
}

function goPage(n) {
  currentPage = n;
  renderStore();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initCatLinks() {
  document.querySelectorAll('.cat-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      applyCategoryFilter(link.dataset.cat);
      currentPage = 1;
      renderStore();
    });
  });
  document.querySelectorAll('.col-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      applyCollectionFilter(link.dataset.col);
      currentPage = 1;
      renderStore();
    });
  });
}

function initColorSwatches() {
  document.querySelectorAll('.color-swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
      filters.color = sw.dataset.color;
      currentPage = 1;
      renderStore();
    });
  });
  document.getElementById('color-reset').addEventListener('click', () => {
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    document.querySelector('.color-swatch[data-color="todos"]').classList.add('active');
    filters.color = 'todos';
    currentPage = 1;
    renderStore();
  });
}

function initMaterialBtns() {
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filters.material = btn.dataset.material;
      currentPage = 1;
      renderStore();
    });
  });
  document.getElementById('material-reset').addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.size-btn[data-material="todos"]').classList.add('active');
    filters.material = 'todos';
    currentPage = 1;
    renderStore();
  });
}

function initPriceRange() {
  const min = document.getElementById('price-min');
  const max = document.getElementById('price-max');
  const minVal = document.getElementById('price-min-val');
  const maxVal = document.getElementById('price-max-val');

  function update() {
    let lo = parseInt(min.value), hi = parseInt(max.value);
    if (lo > hi) { [lo, hi] = [hi, lo]; }
    filters.priceMin = lo;
    filters.priceMax = hi;
    minVal.textContent = `$${lo.toLocaleString('es-CO')}`;
    maxVal.textContent = `$${hi.toLocaleString('es-CO')}`;
    currentPage = 1;
    renderStore();
  }
  min.addEventListener('input', update);
  max.addEventListener('input', update);

  document.getElementById('price-reset').addEventListener('click', () => {
    min.value = 8000; max.value = 20000;
    update();
  });
}

function initSort() {
  document.getElementById('sort-select').addEventListener('change', e => {
    filters.sort = e.target.value;
    currentPage = 1;
    renderStore();
  });
}

function initSidebarToggle() {
  const sidebar = document.getElementById('store-sidebar');
  const btn = document.getElementById('sidebar-toggle');
  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    btn.textContent = sidebar.classList.contains('open') ? '✕ Cerrar' : '☰ Filtros';
  });
}
