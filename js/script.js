// insertion dom et navigation dans le dom

let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;
/* Menu mobile */

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');
  
    btn.addEventListener('click', () => {
      header.classList.toggle('show-nav');
    });
  
    links.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('show-nav');
      });
    });
  }
  
  menuMobile();
/* Porfolio */



function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');
  
    const resetActiveLinks = () => {
      tabs.forEach(elem => {
        elem.classList.remove('active');
      })
    }
  
    const showProjets = (elem) => {
      console.log(elem);
      projets.forEach(projet => {
  
        let filter = projet.getAttribute('data-category');
  
        if (elem === 'all') {
          projet.parentNode.classList.remove('hide');
          return
        }
  
        console.log('tutu');
        filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');
  
      });
    }
  
    tabs.forEach(elem => {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        let filter = elem.getAttribute('data-filter');
        showProjets(filter)
        resetActiveLinks();
        elem.classList.add('active');
      });
    })
  }
  
  tabsFilters();

