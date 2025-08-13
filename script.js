const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); 

      /*check validity*/
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      if (name && email && subject && message) {
      /*success msg*/  
        form.reset();
        successMessage.style.display = 'block';

      /*hide time*/ 
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
    });
