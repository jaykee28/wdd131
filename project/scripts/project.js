
document.addEventListener('DOMContentLoaded', () => {
  
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  navToggle?.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

 
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  
  const services = [
    { name: "HTML & CSS Lessons", category: "programming", price: 500 },
    { name: "C# Programming", category: "programming", price: 800 },
    { name: "Java & Python Lessons", category: "programming", price: 600 },
    { name: "Printing & Scanning", category: "printing", price: 10 },
    { name: "Stationery Sales", category: "stationery", price: 10 },
    { name: "Internet Café Access", category: "stationery", price: 50 }
  ];

 
  const servicesList = document.getElementById('services-list');
  const filterButtons = document.querySelectorAll('.filter-buttons button');

  function displayServices(filter = 'all') {
    if (!servicesList) return;
    servicesList.innerHTML = '';
    const filtered = filter === 'all' ? services : services.filter(s => s.category === filter);
    filtered.forEach(s => {
      const card = document.createElement('div');
      card.className = 'service-card card fade-in';
      card.innerHTML = `
        <h3>${s.name}</h3>
        <p>Category: ${s.category}</p>
        <p>Price: From R${s.price}</p>
        <p class="muted small">*Starting from this price</p>
      `;
      servicesList.appendChild(card);
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); 
      displayServices(btn.dataset.category);
    });
  });


  displayServices();

  
  /*Budget Checking with localStorage*/
  
  const budgetInput = document.getElementById('budget');
  const saveBudgetBtn = document.getElementById('save-budget');
  const showServicesBtn = document.getElementById('show-services');
  const budgetResult = document.getElementById('budget-result');

  // Load saved budget on page load
  if (budgetInput) {
    const savedBudget = localStorage.getItem('userBudget');
    if (savedBudget) budgetInput.value = savedBudget;
  }

  function checkBudget() {
    const budget = parseInt(budgetInput.value);
    if (isNaN(budget)) {
      budgetResult.textContent = "Please enter a valid budget.";
      return;
    }

    localStorage.setItem('userBudget', budget);

    const affordable = services.filter(s => s.price <= budget);
    if (affordable.length === 0) {
      budgetResult.textContent = "No services fit your budget.";
    } else {
      budgetResult.textContent = `You can afford: ${affordable.map(s => s.name).join(', ')}`;
    }
  }

  saveBudgetBtn?.addEventListener('click', checkBudget);
  showServicesBtn?.addEventListener('click', () => {
    displayServices();
    budgetResult.textContent = '';
    filterButtons.forEach(b => b.classList.remove('active'));
    filterButtons[0].classList.add('active'); // reset to 'All'
  });

 
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = lightbox?.querySelector('.close');
  const prevBtn = lightbox?.querySelector('.prev');
  const nextBtn = lightbox?.querySelector('.next');

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const img = galleryItems[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.parentElement.dataset.caption || '';
    lightbox.style.display = 'block';
    lightbox.setAttribute('aria-hidden', 'false');
    lightboxImg.focus();
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach((img, i) => {
    img.addEventListener('click', () => openLightbox(i));
  });

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', showPrev);
  nextBtn?.addEventListener('click', showNext);

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape') closeLightbox();
    }
  });


  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

 
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please fill out all required fields.";
      formStatus.style.color = "red";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.style.color = "red";
      return;
    }

    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";
    contactForm.reset();
  });
});
