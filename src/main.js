(function userModule() {
  //console.log('userMod');
  window.userApp = window.userApp || {};


  document.querySelector('#full-name')
  .addEventListener('blur', function checkLength(eventObj) {
    console.log(eventObj.target.value);

    if (eventObj.target.value.length) {

    } else {
      eventObj.target.parentNode.parentNode.classList.add('has-error');
    }

  });

  document.querySelector('#exp')
  .addEventListener('change', function updateText(eventObj) {
    console.log(eventObj.target.value);
    let newText = eventObj.target.value +' Years';
    eventObj.target.parentNode.childNodes[3].innerText = newText;
    // eventObj.target.parentNode.childNodes[].innerText = newText;

  });
  Array.from(document.querySelectorAll('[name="languages"]'))
  .forEach(function updateNumber(eventObj) {
    eventObj.addEventListener('change', function updateNumber(eventObj) {
      console.log(eventObj.target.checked);
      let checkedCount = 0;


      if (eventObj.target.checked) {
        checkedCount++;
      } else {
        checkedCount--;
      }
      eventObj.target.parentNode.parentNode.childNodes[7].innerText = checkedCount + 'languages';
    });

  });
  document.querySelector('form').addEventListener('submit',function applyNow(eventObj) {
    eventObj.preventDefault();

    console.log('APPLY NOW', eventObj);
    window.jobApp.applyNow({
      fullName: document.querySelector('#full-name').value,
      yearsExperience: document.querySelector('#exp').value,
      knownLanguages: document.querySelector('[name="languages"]').value,
      workUrl: document.querySelector('[name="work-url"]').value
    });

  } );

})();
