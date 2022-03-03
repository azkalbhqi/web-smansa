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

  var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  var alertTrigger = document.getElementById('liveAlertBtn')
  
  function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertPlaceholder.append(wrapper)
  }
  
  if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
      alert('Aspirasi anda sudah terekam! Terimakasih', 'success')
    })
  }

