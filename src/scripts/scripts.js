class ProjectManager {
  constructor(projectCard, frontendSkills, backendSkills, subSkills, aboutMe, moreInfoList) {
    this.moreInfoContainer = document.querySelector(moreInfoList)
    this.projectCardContainer = document.querySelector(projectCard);
    this.frontendContainer = document.getElementById(frontendSkills);
    this.backendContainer = document.getElementById(backendSkills); 
    this.subSkillsContainer = document.querySelector(subSkills);
    this.aboutMeContainer = document.querySelector(aboutMe);
    this.validateContainers();
  }
  
  
  validateContainers() {
    if (!this.projectCardContainer || !this.frontendContainer || !this.backendContainer || !this.subSkillsContainer || !this.aboutMeContainer) {
      throw new Error("One or more DOM elements not found. Please check your selectors.");
    }
  }
  
  createProjectCard(project) {
    const cardHTML = `
            <article class="projectCard">
                <img src="${project.imgSrc}" alt="Проект" class="projectCard__image" width="500px" height="250px" loading="lazy">
                <h3 class="projectCard__title">
                    ${project.title}
                </h3>
                <div class="projectCard__line"></div>
                <p class="projectCard__description">
                    ${project.description}
                </p>
                <a href="${project.githubLink}" alt="Ссылка на GitHub" class="button projectCard__button" target="_blank">
                    GitHub
                </a>
            </article>
        `;
    this.projectCardContainer.insertAdjacentHTML('beforeend', cardHTML);
  }
  
  createFrontendList(item) {
    const frontendListHTML = `
      <li class="technologies__item">
        <div class="technologies__item-container">
            <p class="technologies__item-name">${item.title}</p>
            <span class="technologies__item-level">${item.level}</span>
            </div>
              <div class="technologies__item-progress">
              <div class="technologies__item-progress-line" data-level="${item.levelScore}"></div>
            </div>
        </li>
    `
    this.frontendContainer.insertAdjacentHTML('beforeend', frontendListHTML);
  }
  
  createBackendList(item) {
    const backendListHTML = `
      <li class="technologies__item">
        <div class="technologies__item-container">
            <p class="technologies__item-name">${item.title}</p>
            <span class="technologies__item-level">${item.level}</span>
            </div>
              <div class="technologies__item-progress">
              <div class="technologies__item-progress-line" data-level="${item.levelScore}"></div>
            </div>
        </li>
    `
    this.backendContainer.insertAdjacentHTML('beforeend', backendListHTML);
  }
  
  createSubSkills(item) {
    const subSlillListHTML = `
    <li class="technologies__item-name technologies__item-substack">${item}</li>
    `
    this.subSkillsContainer.insertAdjacentHTML('beforeend', subSlillListHTML);
  }
  
  createAboutMeCard(item) {
    const subSlillListHTML = `
    <article class="aboutMe__card">
      <span class="aboutMe__card-year">
          ${item.year}
      </span>
      <div class="aboutMe__card-timeLine">
        <img src="./src/image/icons/dot.svg" class="aboutMe__card-timeLine-dot" width="32px" height="32px">
        <div class="aboutMe__card-timeLine-line"></div>
      </div>
      <p class="aboutMe__card-description">${item.description}.</p>
    </article>
    `
    this.aboutMeContainer.insertAdjacentHTML('beforeend', subSlillListHTML);
  }
  
  createMultipleProjectCards(items) {
    items.forEach(item => this.createProjectCard(item));
  }
  
  createMultipleFrontendList(items) {
    items.forEach(item => this.createFrontendList(item));
  }
  
  createMultipleBackendList(items) {
    items.forEach(item => this.createBackendList(item));
  }
  
  createMultipleSubSkills(items) {
    items.forEach(item => this.createSubSkills(item));
  }
  
  createMultipleAboutMeCard(items) {
    items.forEach(item => this.createAboutMeCard(item));
  }
  
}


const projectManagerPacket = new ProjectManager(
  '.project__wrapper',
  'frontend',
  'backend',
  '.technologies__list-substack',
  '.aboutMe__wrapper',
  '.hero__more-info-list'
)

const projects = [
  {
    imgSrc: './src/image/WeatherApp.jpg',
    title: 'Погодное приложение',
    description: 'Проект реализован с использованием HTML, CSS, Vue.js, Tailwind. Также в нем использует два бесплатных API для поиска городов и погодных данных.',
    githubLink: 'https://github.com/Ksylika/Weather-APP'
  },
  {
    imgSrc: './src/image/kseniaPorfolio.jpg',
    title: 'Личный сайт портфолио',
    description: 'Проект реализован с использованием HTML, CSS, JavaScript и SASS. Применены методология БЭМ и адаптивная верстка, что обеспечивает структурированность кода и удобство просмотра.',
    githubLink: 'https://github.com/Ksylika/KseniaPortfolio'
  },
  {
    imgSrc: './src/image/kropp-fitness.jpg',
    title: 'Сайт Kropp Fitness',
    description: 'Учебный проект по верстке с использованием адаптивной верстки. Проект реализован с использованием HTML, CSS, адаптивная верстка.',
    githubLink: 'https://github.com/Ksylika/kropp-fitness-project'
  },
  {
    imgSrc: './src/image/TheaterProject.jpg',
    title: 'Сайт Афиша Театра',
    description: 'Учебный проект по верстке, только декстоп версия. Проект реализован с использованием HTML, CSS.',
    githubLink: 'https://github.com/Ksylika/Theater-Project'
  },
];

const frontendSkills = [
  {
    title: 'HTML',
    level: 'Продвинутый',
    levelScore: '80',
  },
  {
    title: 'CSS, SASS',
    level: 'Продвинутый',
    levelScore: '80',
  },
  {
    title: 'JavaScript',
    level: 'Средний',
    levelScore: '60',
  },
  {
    title: 'Vue',
    level: 'Средний',
    levelScore: '60',
  },
  
]

const backendSkills = [
  {
    title: 'Python',
    level: 'Продвинутый',
    levelScore: '80',
  },
  {
    title: 'PHP',
    level: 'Средний',
    levelScore: '60',
  },
  {
    title: 'MySQL',
    level: 'Средний',
    levelScore: '60',
  },
]

const subSkills = [
  'Git',
  'БЭМ',
  'VS Code',
  'Адаптивная верстка',
  'Figma'
]

const aboutMe = [
  {
    year: '2021',
    description: 'Я завершила обучение в колледже "МГОК" по специальности системного администрирования'
  },
  {
    year: '2021 - н.в.',
    description: `
    На нынешней работе, прошла путь от мл. Системного администратора до Старшей группы Системного администрирования. 
    Выполняя различные задачи от тех. поддержки до написания скриптов и веб. разработки`
  },
  {
    year: '2023 - н.в.',
    description: `Я учусь в университете Витте, на прикладной информатики по специализации Искусственный интеллект и анализ данных`
  }
  
]



projectManagerPacket.createMultipleProjectCards(projects);
projectManagerPacket.createMultipleFrontendList(frontendSkills);
projectManagerPacket.createMultipleBackendList(backendSkills);
projectManagerPacket.createMultipleSubSkills(subSkills);
projectManagerPacket.createMultipleAboutMeCard(aboutMe);

const buttonMoreInfo = () => {
  const moreInfo = document.getElementById('more-info');
  
  const moreInfoContainer = document.querySelector('.more-info')
  moreInfo.addEventListener('click', () => {
    moreInfoContainer.classList.add('show');
  });
}







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
  
  buttonMoreInfo();
  
  
  burgerbutton();
  
  progressLine();
  
  techButton();
});
