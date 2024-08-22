const burgerbutton = () => {
  const burgerButton = document.querySelector('.burger');
  const modalNavigation = document.querySelector('.navigation');
  const modalLinks = document.querySelectorAll('.navigation__list-link');
  
  burgerButton.addEventListener('click', () => {
    if (!burgerButton.classList.contains('active')) {
      burgerButton.classList.toggle('active');
      burgerButton.classList.toggle('modal__button');
      modalNavigation.classList.toggle('show');
    } else {
      burgerButton.classList.remove('active');
      burgerButton.classList.remove('modal__button');
      modalNavigation.classList.remove('show');
    }
  });
  
  modalLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerButton.classList.remove('active');
      burgerButton.classList.remove('modal__button');
      modalNavigation.classList.remove('show');
    })
    
  })
}

const progressLine = () => {
  
  const progressBars = document.querySelectorAll('.technologies__item-progress-line');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const progressBar = entry.target;
      if (entry.isIntersecting) {
        const progress = progressBar.getAttribute('data-level');
        progressBar.style.width = progress + '%';
      } else {
        progressBar.style.width = '0';
      }
    });
  }, { threshold: [0.5] });
  
  progressBars.forEach(bar => {
    observer.observe(bar);
  });
}


const techButton = () => {
  const backend = document.getElementById('buttonBackend');
  const frontend = document.getElementById('buttonFrontend');
  const frontendList = document.getElementById('frontend');
  const backendList = document.getElementById('backend');
  
  backend.addEventListener('click', () => {
    frontend.classList.remove('active');
    backend.classList.add('active');
    frontendList.classList.remove('show');
    backendList.classList.add('show');
  })
  
  frontend.addEventListener('click', () => {
    backend.classList.remove('active');
    frontend.classList.add('active');
    backendList.classList.remove('show');
    frontendList.classList.add('show');
  }) 
}

document.addEventListener('DOMContentLoaded', () => {
  
  burgerbutton();
  
  progressLine();
  
  techButton();
});
