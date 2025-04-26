document.addEventListener('DOMContentLoaded', function() {
    const accordionTitles = document.querySelectorAll('.footer-mobile .accordion-title');
  
    accordionTitles.forEach(title => {
      title.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains('active');
  
        const allActiveTitles = this.closest('.footer-mobile').querySelectorAll('.accordion-title.active');
        allActiveTitles.forEach(otherTitle => {
          if (otherTitle !== this) {
            otherTitle.classList.remove('active');
            otherTitle.nextElementSibling.classList.remove('open');
          }
        });
  
        this.classList.toggle('active');
        content.classList.toggle('open');
      });
    });
  });