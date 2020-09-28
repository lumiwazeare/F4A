var f4aLoaded = {
    css:false,
    js:false,
    init:false
};

function f4aLoadCss(path){
    return new Promise(function(resolve, reject){
        var link = document.createElement('link');
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = path;

        document.head.appendChild(link);

        link.onload = function(){
            resolve();
        }
    });
}

function f4aLoadJS(path){
    return new Promise(function(resolve, reject){
        var link = document.createElement('script');
        link.type = "text/javascript";
        link.src = path;

        document.body.appendChild(link);

        link.onload = function(){
            resolve();
        }
    });
}

f4aLoadCss('https://fonts.googleapis.com/icon?family=Material+Icons').then(function(){
    f4aLoadCss('f4a-src/f4a-ui.css').then(function(){
        f4aLoaded.css = true;
    });
});

f4aLoadJS('f4a-src/materialize.min.js').then(function(){
    f4aLoaded.js = true;
});

const F4A = (function(){
    var F4AClass = function(){
        this.apiKey = null;
        this.secretKey = null;
        this.gameId = null;
    };

    F4AClass.prototype.init = function(apiKey, gameId){
        this.apiKey = apiKey;
        this.gameId = gameId;
    };

    return new F4AClass();
})();

//---inflated UI component
popModal = ' <!-- Modal Trigger -->\
<!--<a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> -->\
<!-- Modal Structure -->\
<div id="fra-ui-modal1" class="modal" style="background-color:#032944">\
  <div class="modal-content container white-text" id="fra-ui-modalcontent">\
    <h4>Modal Header</h4>\
    <p>A bunch of text</p>\
  </div>\
  <!-- <div class="modal-footer">\
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>\
  </div>-->\
</div>';

//instantiate javascript file
document.addEventListener('DOMContentLoaded', function(){
    var loadedInterval = setInterval(function(){
        console.log("out");
        if(f4aLoaded.css === true && f4aLoaded.js === true){
            //append the ui
            var mainDiv = document.createElement('div');
            mainDiv.classList.add('fra-ui');
            mainDiv.innerHTML = popModal;
            document.body.appendChild(mainDiv);

            var modalContent = document.querySelector('#fra-ui-modalcontent');
            var testContent = document.querySelector('#fra-ui-login');
            modalContent.innerHTML = testContent.innerHTML;


            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});

            var modalElement = document.querySelector('#fra-ui-modal1');
            var instance = M.Modal.getInstance(modalElement);

            instance.open();


            f4aLoaded.init = true;
            clearInterval(loadedInterval);
        }
    },2000);
});


function fra_ui_switchToLogin(){
    let modalContent = document.querySelector('#fra-ui-modalcontent');
    let content = document.querySelector('#fra-ui-login');
    modalContent.innerHTML = content.innerHTML;
}

function fra_ui_switchToRegister(){
    let modalContent = document.querySelector('#fra-ui-modalcontent');
    let registerContent = document.querySelector('#fra-ui-register');
    modalContent.innerHTML = registerContent.innerHTML;
}

function fra_ui_switchToForgot(){
    let modalContent = document.querySelector('#fra-ui-modalcontent');
    let content = document.querySelector('#fra-ui-forgot');
    modalContent.innerHTML = content.innerHTML;
}

//forgot password
function fra_ui_forgot(element){
    let email = element.querySelector("#fra-ui-forgot-email").value;

    //call the api and login


    //switch the user to login page
    fra_ui_switchToLogin();
    return false;
}

function fra_ui_login(element){
    let email = element.querySelector("#fra-ui-login-email").value;
    let password = element.querySelector("#fra-ui-login-password").value;

    //call the api and login

    return false;
}

function fra_ui_register(element){
    let email = element.querySelector("#fra-ui-register-email").value;
    let password = element.querySelector("#fra-ui-register-password").value;
    let phone = element.querySelector("#fra-ui-register-phone").value;

    //call the api and login

    return false;
}