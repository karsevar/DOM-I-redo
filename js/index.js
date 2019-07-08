const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);

// navigation bar:
const navItems = document.querySelectorAll('nav a');
console.log(navItems);

navItems.forEach((navItem, index) => {
  navItem.textContent = siteContent['nav'][`nav-item-${index+1}`];
});

//navigation image:
const navImage = document.querySelector('#logo-img');
navImage.src = siteContent['nav']['img-src'];

// <div class='cta-text'> <h1></h1> </div>
const ctaContent = document.querySelector('.cta-text h1');
ctaContent.textContent = siteContent['cta']['h1'];

// <button></button>
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button']

//<img id='cta-img' ...>
const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent['cta']['img-src'];

// All of the h4s within the main content section.
const contentHeaders = document.querySelectorAll('.text-content h4');
contentHeaders[0].textContent = siteContent['main-content']['features-h4'];
contentHeaders[1].textContent = siteContent['main-content']['about-h4'];
contentHeaders[2].textContent = siteContent['main-content']['services-h4'];
contentHeaders[3].textContent = siteContent['main-content']['product-h4'];
contentHeaders[4].textContent = siteContent['main-content']['vision-h4'];

// All of the p tags within the main-content section.
const contentParagraphs = document.querySelectorAll('.text-content p');
contentParagraphs[0].textContent = siteContent['main-content']['features-content'];
contentParagraphs[1].textContent = siteContent['main-content']['about-content'];
contentParagraphs[2].textContent = siteContent['main-content']['services-content'];
contentParagraphs[3].textContent = siteContent['main-content']['product-content'];
contentParagraphs[4].textContent = siteContent['main-content']['vision-content'];
console.log(contentParagraphs);

// main content image
const mainContentImage = document.querySelector('.middle-img');
mainContentImage.src = siteContent['main-content']['middle-img-src'];

// contact section:
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4']

const contactParagraphs = document.querySelectorAll('.contact p');
contactParagraphs[0].textContent = siteContent['contact']['address'];
contactParagraphs[1].textContent = siteContent['contact']['phone'];
contactParagraphs[2].textContent = siteContent['contact']['email'];


// footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];











