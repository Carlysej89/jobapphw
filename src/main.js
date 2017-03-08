(function userModule() {
    //console.log('userMod');
    window.userApp = window.userApp || {};


    document.querySelector('#full-name')
      .addEventListener('blur', function checkLength(eventObj) {
        console.log(eventObj.target.value);

        

      });




})();
