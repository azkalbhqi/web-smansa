function navbar(){
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav ul')

    menuToggle.addEventListener('click' , nav.classList.toggle('slide'))
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby8q2qdcFNZ8St3Z3Wh2Ip0tXVurByIkEdyrBohV-fWWvqL3IHQ0zqrq3Q7LuVmyMXSjA/exec'
  const form = document.forms['aspirasi']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

