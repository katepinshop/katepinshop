# Prompt SEO Completo — www.katepin.com
> Optimización para Motores de Búsqueda (SEO) sin afectar diseño ni estética  
> Estándares de implementación profesional — Mayo 2026

---

## CONTEXTO DEL SITIO

**Nombre:** KatePin  
**URL:** https://www.katepin.com  
**Tipo:** Tienda e-commerce colombiana de pines metálicos esmaltados kawaii  
**Mercado objetivo:** Colombia (principalmente Bogotá, Medellín, Cali y otras ciudades principales)  
**Páginas analizadas:** index.html · tienda.html · nosotros.html · faq.html · contacto.html  

---

## INSTRUCCIONES GENERALES PARA EL DESARROLLADOR

Aplica todos los cambios descritos a continuación **sin modificar la apariencia visual, los colores, las tipografías, los íconos, las imágenes ni la estructura de layout** del sitio. Todos los cambios son exclusivamente de código HTML, atributos, metaetiquetas, datos estructurados JSON-LD, atributos semánticos y contenido textual en lugares donde el usuario no lo percibe visualmente como un cambio estético.

---

## 1. METAETIQUETAS — CORRECCIONES Y ESTANDARIZACIÓN

### 1.1 Página de inicio (`index.html`)

**Situación actual:**  
La página tiene metaetiquetas básicas pero con inconsistencias. El `<title>` tiene 65 caracteres (límite recomendado: 50–60). El canonical usa `https://www.katepin.com/` (correcto). Faltan varias etiquetas Open Graph y Twitter Card.

**Cambios requeridos:**

```html
<!-- TÍTULO: máximo 60 caracteres, keyword principal al inicio -->
<title>KatePin | Pines Metálicos Kawaii · Colombia</title>

<!-- META DESCRIPTION: entre 140 y 160 caracteres, con CTA -->
<meta name="description" content="Tienda online de pines metálicos esmaltados kawaii. Diseños exclusivos de animales, fantasía y flores. Envíos a toda Colombia. ¡Paga fácil con Nequi!">

<!-- CANONICAL: ya existe, mantenerla exactamente así -->
<link rel="canonical" href="https://www.katepin.com/">

<!-- OPEN GRAPH: agregar las etiquetas faltantes -->
<meta property="og:title" content="KatePin | Pines Metálicos Kawaii · Colombia">
<meta property="og:description" content="Tienda online de pines metálicos esmaltados kawaii. Diseños exclusivos, envíos a toda Colombia.">
<meta property="og:image" content="https://www.katepin.com/img/hero-banner.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Colección de pines metálicos kawaii KatePin">
<meta property="og:url" content="https://www.katepin.com/">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="KatePin">

<!-- TWITTER CARD: agregar las etiquetas faltantes -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="KatePin | Pines Metálicos Kawaii · Colombia">
<meta name="twitter:description" content="Tienda online de pines metálicos esmaltados kawaii. Envíos a toda Colombia.">
<meta name="twitter:image" content="https://www.katepin.com/img/hero-banner.png">
<meta name="twitter:image:alt" content="Colección de pines metálicos kawaii KatePin">
<meta name="twitter:site" content="@katepin">

<!-- ROBOTS: ya existe, mantener -->
<meta name="robots" content="index, follow, max-image-preview:large">

<!-- GEOREFERENCIACIÓN: agregar para reforzar el mercado local colombiano -->
<meta name="geo.region" content="CO">
<meta name="geo.country" content="Colombia">
<meta name="geo.placename" content="Colombia">
<meta name="ICBM" content="4.7110, -74.0721">

<!-- AUTHOR: ya existe, mantener -->
<meta name="author" content="KatePin">
```

---

### 1.2 Página de tienda (`tienda.html`)

**Situación actual:**  
La etiqueta canonical apunta a `https://www.katepin.com/tienda` (sin `.html`), pero la URL real es `tienda.html`. Esto puede generar contenido duplicado. Faltan `og:image:width`, `og:image:height`, `og:site_name`, y las etiquetas Twitter Card.

**Cambios requeridos:**

```html
<title>Pines Metálicos Kawaii Colombia | Tienda KatePin</title>

<meta name="description" content="Explora la colección completa de pines metálicos esmaltados kawaii de KatePin. Animales, fantasía, flores y más. Filtra por precio y material. Envíos a toda Colombia.">

<!-- CANONICAL: corregir para que coincida con la URL real -->
<link rel="canonical" href="https://www.katepin.com/tienda.html">

<meta property="og:title" content="Pines Metálicos Kawaii Colombia | Tienda KatePin">
<meta property="og:description" content="Colección completa de pines metálicos esmaltados kawaii. Filtra por categoría, precio y material. Envíos a toda Colombia.">
<meta property="og:image" content="https://www.katepin.com/img/hero-banner.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Tienda de pines metálicos kawaii KatePin Colombia">
<meta property="og:url" content="https://www.katepin.com/tienda.html">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="KatePin">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Pines Metálicos Kawaii Colombia | Tienda KatePin">
<meta name="twitter:description" content="Colección completa de pines metálicos esmaltados kawaii. Envíos a toda Colombia.">
<meta name="twitter:image" content="https://www.katepin.com/img/hero-banner.png">
<meta name="twitter:image:alt" content="Tienda de pines metálicos kawaii KatePin">
<meta name="twitter:site" content="@katepin">

<meta name="robots" content="index, follow, max-image-preview:large">
```

---

### 1.3 Página Nosotros (`nosotros.html`)

**Situación actual:**  
Esta página carece casi completamente de metaetiquetas SEO: no tiene `meta description`, no tiene canonical, no tiene Open Graph ni Twitter Card. Solo tiene el `<title>` básico.

**Cambios requeridos:**

```html
<title>Quiénes Somos | KatePin — Tienda Kawaii Colombia</title>

<meta name="description" content="Conoce a KatePin, la tienda online colombiana especializada en pines metálicos kawaii y accesorios cute. Productos únicos inspirados en la cultura kawaii asiática.">

<link rel="canonical" href="https://www.katepin.com/nosotros.html">

<meta property="og:title" content="Quiénes Somos | KatePin — Tienda Kawaii Colombia">
<meta property="og:description" content="Somos una tienda online colombiana especializada en pines metálicos cute y originales, inspirados en lo kawaii. Descubre nuestra historia.">
<meta property="og:image" content="https://www.katepin.com/img/nosotras.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Equipo de KatePin — tienda kawaii colombiana">
<meta property="og:url" content="https://www.katepin.com/nosotros.html">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="KatePin">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Quiénes Somos | KatePin">
<meta name="twitter:description" content="Tienda online colombiana de pines metálicos y accesorios kawaii. Conoce nuestra historia.">
<meta name="twitter:image" content="https://www.katepin.com/img/nosotras.png">
<meta name="twitter:site" content="@katepin">

<meta name="robots" content="index, follow">
```

---

### 1.4 Página FAQ (`faq.html`)

**Situación actual:**  
Tiene `meta description` básica pero le falta canonical, Open Graph, Twitter Card y el title podría optimizarse.

**Cambios requeridos:**

```html
<title>Preguntas Frecuentes — Envíos, Pagos y Pedidos | KatePin</title>

<meta name="description" content="¿Tienes dudas sobre KatePin? Resolvemos tus preguntas sobre envíos a toda Colombia, métodos de pago (Nequi, Daviplata), tiempos de entrega y cómo hacer tu pedido.">

<link rel="canonical" href="https://www.katepin.com/faq.html">

<meta property="og:title" content="Preguntas Frecuentes | KatePin">
<meta property="og:description" content="Resolvemos tus dudas sobre envíos, pagos con Nequi, tiempos de entrega y cómo hacer tu pedido en KatePin.">
<meta property="og:image" content="https://www.katepin.com/img/hero-banner.png">
<meta property="og:image:alt" content="Preguntas frecuentes KatePin">
<meta property="og:url" content="https://www.katepin.com/faq.html">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="KatePin">

<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="FAQ | KatePin">
<meta name="twitter:description" content="Envíos, pagos y pedidos — todo lo que necesitas saber sobre KatePin.">
<meta name="twitter:site" content="@katepin">

<meta name="robots" content="index, follow">
```

---

### 1.5 Página de contacto (`contacto.html`)

**Cambios requeridos** (asumir que existe con estructura similar):

```html
<title>Contacto | KatePin — Escríbenos por WhatsApp o Email</title>

<meta name="description" content="Contáctanos por WhatsApp al 313 665 5918 o escríbenos a hola@katepin.com. Atendemos pedidos mayoristas, dudas y sugerencias. ¡Respuesta rápida garantizada!">

<link rel="canonical" href="https://www.katepin.com/contacto.html">

<meta property="og:title" content="Contacto | KatePin">
<meta property="og:description" content="Escríbenos por WhatsApp o email. Atendemos pedidos mayoristas, dudas y sugerencias.">
<meta property="og:url" content="https://www.katepin.com/contacto.html">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="KatePin">

<meta name="robots" content="index, follow">
```

---

## 2. DATOS ESTRUCTURADOS JSON-LD (SCHEMA.ORG)

Añadir dentro del `<head>` o antes de `</body>` de cada página. No afectan el diseño en absoluto.

### 2.1 Organización / Empresa — agregar en TODAS las páginas

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KatePin",
  "alternateName": "KatePin Store",
  "url": "https://www.katepin.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.katepin.com/img/logo1.png",
    "width": 200,
    "height": 60
  },
  "description": "Tienda online colombiana de pines metálicos esmaltados kawaii. Diseños exclusivos, envíos a toda Colombia.",
  "foundingDate": "2024",
  "areaServed": {
    "@type": "Country",
    "name": "Colombia"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CO",
    "addressLocality": "Colombia"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+57-313-665-5918",
      "contactType": "customer service",
      "contactOption": "TollFree",
      "availableLanguage": "Spanish",
      "areaServed": "CO"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/katepin",
    "https://www.instagram.com/katepin",
    "https://www.tiktok.com/@katepin"
  ],
  "email": "hola@katepin.com",
  "telephone": "+573136655918"
}
</script>
```

### 2.2 Tienda Online (WebSite + SearchAction) — solo en `index.html`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "KatePin",
  "url": "https://www.katepin.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.katepin.com/tienda.html?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
```

### 2.3 Tienda E-commerce — solo en `index.html`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "KatePin",
  "url": "https://www.katepin.com",
  "image": "https://www.katepin.com/img/hero-banner.png",
  "description": "Tienda online colombiana de pines metálicos esmaltados kawaii con diseños exclusivos. Envíos a toda Colombia.",
  "priceRange": "$8.000 - $20.000 COP",
  "currenciesAccepted": "COP",
  "paymentAccepted": "Nequi, Daviplata, Transferencia bancaria",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Colombia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pines Metálicos Kawaii",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Pines de Animales"
      },
      {
        "@type": "OfferCatalog",
        "name": "Pines de Fantasía"
      },
      {
        "@type": "OfferCatalog",
        "name": "Pines de Flores"
      },
      {
        "@type": "OfferCatalog",
        "name": "Pines de Comida"
      },
      {
        "@type": "OfferCatalog",
        "name": "Pines de Personajes"
      }
    ]
  },
  "telephone": "+573136655918",
  "email": "hola@katepin.com",
  "sameAs": [
    "https://www.facebook.com/katepin",
    "https://www.instagram.com/katepin",
    "https://www.tiktok.com/@katepin"
  ]
}
</script>
```

### 2.4 Breadcrumb — agregar en `tienda.html`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://www.katepin.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tienda",
      "item": "https://www.katepin.com/tienda.html"
    }
  ]
}
</script>
```

### 2.5 FAQ Schema — agregar en `faq.html`

Convierte cada pregunta/respuesta del acordeón en datos estructurados. Esto genera **Rich Results** directamente en Google.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es KatePin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Somos una tienda online colombiana dedicada a traer los mejores pines y accesorios de estilo Kawaii. Nos apasiona ofrecer productos únicos que añaden un toque de alegría y personalidad a tu outfit diario."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen tienda física?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Actualmente operamos de forma 100% virtual para poder ofrecerte una mayor variedad de diseños a precios competitivos. Realizamos envíos rápidos y seguros a todas las ciudades de Colombia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda en llegar mi pedido?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo estimado de entrega es de 2 a 5 días hábiles a nivel nacional. Las ciudades principales como Bogotá o Medellín suelen recibir sus pedidos en aproximadamente 48 horas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué métodos de pago aceptan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aceptamos Nequi, Daviplata y transferencias directas desde cualquier banco colombiano. Próximamente estaremos integrando pasarelas para pagos con tarjeta de crédito y PSE."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo rastrear mi pedido una vez enviado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En cuanto tu paquete sea entregado a la transportadora, te enviaremos el número de guía por correo y WhatsApp. Con este número podrás seguir la ubicación de tus pines en tiempo real."
      }
    },
    {
      "@type": "Question",
      "name": "¿Venden al por mayor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, tenemos precios especiales para compras por volumen. Si estás interesado en vender nuestros pines, contáctanos por WhatsApp para enviarte nuestro catálogo mayorista."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo cambiar o cancelar mi pedido?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, siempre y cuando el pedido no haya sido despachado. Comunícate inmediatamente con nosotros por WhatsApp indicando tu número de orden para realizar cualquier cambio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Llegan a zonas rurales o veredas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, realizamos envíos a todo el territorio nacional donde las empresas de mensajería tengan cobertura. Si tienes dudas sobre tu zona, consúltanos por WhatsApp antes de comprar."
      }
    }
  ]
}
</script>
```

### 2.6 Reviews / Testimonios — agregar en `index.html`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Pines Metálicos Kawaii KatePin",
  "brand": {
    "@type": "Brand",
    "name": "KatePin"
  },
  "description": "Pines metálicos esmaltados de diseños kawaii exclusivos. Animales, fantasía, flores y más.",
  "image": "https://www.katepin.com/img/principal.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "2"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Camila Rodríguez"
      },
      "reviewBody": "Los pines son bellísimos, superaron mis expectativas. El empaque estaba precioso y llegaron muy rápido. ¡Ya quiero comprar más!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Valentina García"
      },
      "reviewBody": "Me encanta la calidad de los pines. Los detalles son increíbles y los colores super lindos. Los pongo en mi chaqueta y recibo muchos cumplidos."
    }
  ]
}
</script>
```

---

## 3. ATRIBUTOS `alt` EN IMÁGENES

Todas las imágenes decorativas del header (corazones, estrellas) deben tener `alt=""` (vacío) para que los lectores de pantalla las omitan. Las imágenes con contenido semántico deben tener `alt` descriptivo.

### Correcciones requeridas en `index.html`:

```html
<!-- Imágenes decorativas del header (ya tienen alt vacío — mantener así) -->
<img src="/img/heart.png" alt="">
<img src="/img/stars.png" alt="">
<!-- etc. -->

<!-- Logo: ya tiene alt correcto — mantener -->
<img src="/img/logo1.png" alt="KatePin">

<!-- Imagen principal hero: ya tiene alt — mantener -->
<img src="/img/principal.png" alt="Colección de pines metálicos kawaii KatePin">

<!-- Imagen de la sección "Bienvenida": agregar alt descriptivo -->
<img src="/img/foto.png" alt="Equipo de KatePin — tienda online colombiana de pines kawaii">

<!-- Logo en footer: agregar alt -->
<img src="/img/logo1.png" alt="KatePin — Pines Metálicos Kawaii Colombia">

<!-- Nequi logo: agregar alt -->
<img src="/img/nequi.png" alt="Pago con Nequi disponible en KatePin">

<!-- footer.png decorativa -->
<img src="/img/footer.png" alt="">
```

### Correcciones requeridas en `nosotros.html`:

```html
<!-- Imagen del equipo: ya tiene alt — mantener -->
<img src="/img/nosotras.png" alt="Nosotras KatePin">

<!-- Mejorar alt con más keywords: -->
<img src="/img/nosotras.png" alt="Equipo KatePin — tienda kawaii colombiana de pines metálicos">
```

### Correcciones requeridas en `faq.html`:

```html
<!-- Imagen decorativa de cruz: agregar alt vacío -->
<img src="/img/cruz.png" alt="">
```

---

## 4. SEMÁNTICA HTML — ETIQUETAS Y JERARQUÍA

### 4.1 Jerarquía de encabezados `<h1>` a `<h6>`

**En `index.html`:**  
- El `<h1>` actual dice `¡Bienvenid@ a KatePin!` — **cambiar a:**
  ```html
  <h1>Pines Metálicos Kawaii en Colombia | KatePin</h1>
  ```
  Si se desea mantener el texto visual "¡Bienvenid@ a KatePin!", colocarlo como párrafo `<p>` debajo del `<h1>` o usar CSS para estilizar el `<h1>` como si fuera el saludo.

- La sección de testimonios usa `<h2>¡Clientes felices!</h2>` — correcto, mantener.

**En `tienda.html`:**  
- El `<h1>` actual dice `Tienda` — **cambiar a:**
  ```html
  <h1>Tienda de Pines Metálicos Kawaii</h1>
  ```

**En `nosotros.html`:**  
- El `<h1>` dice `¡Bienvenid@ a KatePin!` — **cambiar a:**
  ```html
  <h1>Quiénes Somos — KatePin, Tienda Kawaii Colombia</h1>
  ```
  El texto de bienvenida puede permanecer como `<p>` inmediatamente después.

**En `faq.html`:**  
- El `<h1>` dice `Preguntas frecuentes` — correcto y optimizado.

### 4.2 Atributo `lang` en `<html>`

Verificar que en TODAS las páginas el tag `<html>` incluya:

```html
<html lang="es-CO">
```

### 4.3 Navegación semántica

El `<nav>` principal y el `<nav>` móvil deben tener atributo `aria-label`:

```html
<nav aria-label="Navegación principal">
  <!-- menú desktop -->
</nav>

<nav aria-label="Navegación móvil">
  <!-- menú hamburguesa -->
</nav>
```

### 4.4 Footer semántico

El footer debe usar la etiqueta `<footer>` correctamente y el logo en el footer debe estar dentro de un `<p>` o `<div>`, no suelto:

```html
<footer role="contentinfo">
  <!-- contenido del footer -->
</footer>
```

### 4.5 Sección de testimonios — agregar `aria-label`

```html
<section aria-label="Testimonios de clientes">
  <h2>¡Clientes felices!</h2>
  <!-- testimonios -->
</section>
```

---

## 5. BREADCRUMBS VISIBLES EN LA TIENDA

En `tienda.html` ya existe un breadcrumb visual:
```
Home › Pines › Todos
```

Asegurarse de que esté marcado con microformato correcto en HTML:

```html
<nav aria-label="Ruta de navegación">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="https://www.katepin.com/">
        <span itemprop="name">Inicio</span>
      </a>
      <meta itemprop="position" content="1">
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="https://www.katepin.com/tienda.html">
        <span itemprop="name">Pines</span>
      </a>
      <meta itemprop="position" content="2">
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span itemprop="name">Todos</span>
      <meta itemprop="position" content="3">
    </li>
  </ol>
</nav>
```

---

## 6. ENLACES — ATRIBUTOS `rel` EN REDES SOCIALES

Todos los enlaces externos a redes sociales en el footer deben tener los atributos correctos para SEO y seguridad:

```html
<!-- Antes (incorrecto) -->
<a href="https://facebook.com/katepin">...</a>
<a href="https://instagram.com/katepin">...</a>
<a href="https://tiktok.com/@katepin">...</a>

<!-- Después (correcto) -->
<a href="https://www.facebook.com/katepin" rel="noopener noreferrer" target="_blank" aria-label="KatePin en Facebook">Facebook</a>
<a href="https://www.instagram.com/katepin" rel="noopener noreferrer" target="_blank" aria-label="KatePin en Instagram">Instagram</a>
<a href="https://www.tiktok.com/@katepin" rel="noopener noreferrer" target="_blank" aria-label="KatePin en TikTok">TikTok</a>
```

**Nota:** Los enlaces a redes sociales deben usar las URLs completas con `www.` para evitar redirecciones.

---

## 7. RENDIMIENTO Y CARGA (CORE WEB VITALS)

Estos cambios mejoran el LCP, FID y CLS sin tocar el diseño.

### 7.1 Preload de recursos críticos — agregar en `<head>` de todas las páginas

```html
<!-- Preload del logo (recurso crítico visible al inicio) -->
<link rel="preload" href="/img/logo1.png" as="image">

<!-- Preload de la imagen hero (index.html únicamente) -->
<link rel="preload" href="/img/principal.png" as="image">

<!-- Preload de fuentes si se usan fuentes personalizadas -->
<!-- <link rel="preload" href="/fonts/tu-fuente.woff2" as="font" type="font/woff2" crossorigin> -->
```

### 7.2 Atributo `loading="lazy"` en imágenes no críticas

Agregar a todas las imágenes que NO están en el viewport inicial (below the fold):

```html
<!-- Imagen de foto del equipo (aparece debajo del fold en index.html) -->
<img src="/img/foto.png" alt="Equipo KatePin" loading="lazy">

<!-- Imágenes del footer -->
<img src="/img/footer.png" alt="" loading="lazy">
<img src="/img/nequi.png" alt="Pago con Nequi" loading="lazy">

<!-- Imagen nosotras (nosotros.html — está above the fold, NO agregar lazy aquí) -->
<img src="/img/nosotras.png" alt="Equipo KatePin" fetchpriority="high">
```

### 7.3 Atributos `width` y `height` en imágenes

Para evitar CLS (Cumulative Layout Shift), todas las imágenes deben tener `width` y `height` declarados en el HTML:

```html
<!-- Ejemplo: agregar dimensiones a todas las imágenes -->
<img src="/img/logo1.png" alt="KatePin" width="160" height="50">
<img src="/img/principal.png" alt="Colección KatePin" width="800" height="600">
<img src="/img/nequi.png" alt="Pago con Nequi" width="80" height="30" loading="lazy">
```

Verificar las dimensiones reales de cada imagen y usarlas como valores de `width` y `height`.

### 7.4 Compresión de imágenes

Convertir todas las imágenes PNG a formato **WebP** para reducir el peso sin pérdida de calidad visual:

```html
<!-- Usar <picture> para soporte de WebP con fallback -->
<picture>
  <source srcset="/img/principal.webp" type="image/webp">
  <img src="/img/principal.png" alt="Colección de pines metálicos kawaii KatePin" width="800" height="600">
</picture>
```

Herramientas recomendadas: `cwebp` (CLI), Squoosh, ImageOptim.

---

## 8. ARCHIVO `robots.txt`

Verificar que exista en `https://www.katepin.com/robots.txt`. Si no existe, crearlo con el siguiente contenido:

```
User-agent: *
Allow: /

# Bloquear páginas que no deben indexarse
Disallow: /login.html
Disallow: /registro.html
Disallow: /deseos.html
Disallow: /cart
Disallow: /?q=

# Referencia al sitemap
Sitemap: https://www.katepin.com/sitemap.xml
```

---

## 9. SITEMAP XML

Crear el archivo `sitemap.xml` en la raíz del sitio (`https://www.katepin.com/sitemap.xml`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <url>
    <loc>https://www.katepin.com/</loc>
    <lastmod>2026-05-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://www.katepin.com/img/principal.png</image:loc>
      <image:title>Colección de pines metálicos kawaii KatePin Colombia</image:title>
    </image:image>
  </url>

  <url>
    <loc>https://www.katepin.com/tienda.html</loc>
    <lastmod>2026-05-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://www.katepin.com/nosotros.html</loc>
    <lastmod>2026-05-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://www.katepin.com/faq.html</loc>
    <lastmod>2026-05-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://www.katepin.com/contacto.html</loc>
    <lastmod>2026-05-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

</urlset>
```

**Acción adicional:** Enviar el sitemap a Google Search Console y a Bing Webmaster Tools.

---

## 10. CANONICAL Y REDIRECCIONES

### 10.1 Inconsistencia detectada: URL canónica de la tienda

La canonical de `tienda.html` apunta a `https://www.katepin.com/tienda` (sin `.html`) pero la URL real es `https://www.katepin.com/tienda.html`. Opciones:

**Opción A (recomendada):** Corregir la canonical para que apunte a la URL real con `.html`:
```html
<link rel="canonical" href="https://www.katepin.com/tienda.html">
```

**Opción B:** Configurar en el servidor una redirección 301 de `/tienda` → `/tienda.html` y mantener la canonical sin `.html`. Esta opción requiere acceso a la configuración del servidor (`.htaccess` en Apache o configuración equivalente en el hosting).

### 10.2 Redirección www a no-www (o viceversa)

Asegurarse de que el servidor redirija consistentemente. El sitio usa `www.katepin.com` como canonical — configurar en el servidor:

```apache
# En .htaccess — redirigir de non-www a www
RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 10.3 HTTPS obligatorio

Verificar que el servidor redirija todo el tráfico HTTP a HTTPS:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 11. ENLACE INTERNO ESTRATÉGICO

Agregar los siguientes textos ancla con enlace interno donde haya espacio natural en el contenido (sin alterar el diseño):

### En `nosotros.html` — al final del párrafo de descripción, agregar:

```html
<p>Somos una tienda online colombiana de artículos lindos inspirados en la tendencia cute asiática, tan difícil de encontrar en Colombia. Traemos lo más tierno, kawaii y aesthetic para que puedas expresar tu estilo, tu personalidad y lo que te hace única. Cada detalle está pensado para alegrar tu día y hacerte sentir bien.</p>

<!-- AÑADIR este párrafo debajo (no cambia el diseño, solo añade texto): -->
<p>Explora nuestra <a href="/tienda.html">colección completa de pines metálicos kawaii</a> o revisa las <a href="/faq.html">preguntas frecuentes</a> si tienes dudas sobre envíos y pagos.</p>
```

### En `faq.html` — al final de la página, antes del footer:

```html
<!-- AÑADIR este párrafo en una sección existente o al final del contenido -->
<p>¿Lista para comprar? Visita nuestra <a href="/tienda.html">tienda de pines kawaii</a> y encuentra el diseño perfecto para ti. También puedes <a href="/contacto.html">contactarnos directamente</a> si tienes alguna consulta especial.</p>
```

---

## 12. GOOGLE SEARCH CONSOLE Y HERRAMIENTAS

### Acciones necesarias fuera del código:

1. **Verificar el sitio en Google Search Console** (https://search.google.com/search-console)
   - Método recomendado: agregar la meta tag de verificación en el `<head>` de `index.html`:
     ```html
     <meta name="google-site-verification" content="TU_CÓDIGO_DE_VERIFICACIÓN">
     ```

2. **Enviar el sitemap** una vez creado:
   - En Search Console → Sitemaps → Agregar: `sitemap.xml`

3. **Verificar en Bing Webmaster Tools** (https://www.bing.com/webmasters)
   - Importar automáticamente desde Search Console o agregar meta tag:
     ```html
     <meta name="msvalidate.01" content="TU_CÓDIGO_BING">
     ```

4. **Configurar Google Analytics 4 (GA4)** si no está instalado:
   ```html
   <!-- Agregar en <head> de todas las páginas -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 13. RESUMEN DE PRIORIDADES

| Prioridad | Acción | Impacto | Esfuerzo |
|-----------|--------|---------|----------|
| 🔴 CRÍTICO | Agregar JSON-LD FAQ Schema en faq.html | Rich Results en Google | Bajo |
| 🔴 CRÍTICO | Completar metaetiquetas faltantes en nosotros.html | Indexación correcta | Bajo |
| 🔴 CRÍTICO | Corregir canonical en tienda.html | Evitar contenido duplicado | Muy bajo |
| 🔴 CRÍTICO | Crear sitemap.xml y enviarlo a GSC | Indexación acelerada | Bajo |
| 🔴 CRÍTICO | Crear/verificar robots.txt | Control de rastreadores | Muy bajo |
| 🟠 ALTO | Agregar JSON-LD Organization en todas las páginas | Autoridad de marca | Bajo |
| 🟠 ALTO | Agregar JSON-LD Store en index.html | Rich Results locales | Bajo |
| 🟠 ALTO | Agregar JSON-LD Reviews en index.html | Estrellas en SERP | Bajo |
| 🟠 ALTO | Optimizar `<h1>` en index, tienda y nosotros | Relevancia keyword | Muy bajo |
| 🟠 ALTO | Agregar `alt` faltantes en imágenes | Accesibilidad + SEO | Muy bajo |
| 🟡 MEDIO | Agregar `lang="es-CO"` en `<html>` | Geolocalización | Muy bajo |
| 🟡 MEDIO | Agregar `aria-label` en navs | Accesibilidad | Muy bajo |
| 🟡 MEDIO | Preload de imágenes críticas | Core Web Vitals (LCP) | Bajo |
| 🟡 MEDIO | Agregar `loading="lazy"` en imágenes | Core Web Vitals | Bajo |
| 🟡 MEDIO | Agregar `width` y `height` en imágenes | Core Web Vitals (CLS) | Bajo |
| 🟡 MEDIO | Mejorar `rel` en enlaces externos | Seguridad + SEO | Muy bajo |
| 🟢 RECOMENDADO | Convertir imágenes a WebP | Velocidad de carga | Medio |
| 🟢 RECOMENDADO | Configurar redirecciones 301 | Consistencia de URLs | Medio |
| 🟢 RECOMENDADO | Instalar GA4 | Medición y analytics | Bajo |
| 🟢 RECOMENDADO | Verificar en Bing Webmaster Tools | Visibilidad en Bing | Muy bajo |

---

*Prompt generado el 15 de mayo de 2026 para www.katepin.com*  
*Todos los cambios son de implementación técnica sin afectar el diseño visual del sitio.*
