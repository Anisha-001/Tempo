const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

function toggleTabs(tab) {
  const all = document.querySelector('#portfolio-pic')
  const bike = document.querySelector('.bike');
  const car = document.querySelector('.car');
  const walk = document.querySelector('.walk');

  const bike_btn = document.querySelector('#bike');
  const car_btn = document.querySelector('#car');
  const walk_btn = document.querySelector('#walk');

  if (tab === 'all') {
    bike.style.display = 'inline-flex';
    car.style.display = 'inline-flex';
    walk.style.display = 'inline-flex';
  } else if (tab == 'bike') {
    bike.style.display = "inline-flex";
    car.style.display = "none";
    walk.style.display = "none";
  } else if (tab == 'car') {
    bike.style.display = "none"
    car.style.display = "inline-flex"
    walk.style.display = "none"
  } else if (tab == 'walk') {
    bike.style.display = "none"
    car.style.display = "none"
    walk.style.display = "inline-flex"
  }
  else{
    bike.style.display = "inline-flex";
    car.style.display = "inline-flex";
    walk.style.display = "inline-flex";
  }
}

function toggleFAQ(element) {
  const item = element.parentElement;
  item.classList.toggle('active');
}

 
    let map = L.map('map').setView([28.6139, 77.2090], 13); // New Delhi 

    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    
    L.marker([28.6139, 77.2090]).addTo(map)
      .bindPopup('You are here!')
      .openPopup();
