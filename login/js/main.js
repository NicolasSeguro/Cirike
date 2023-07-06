    // Inicializar la configuración de Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyDnD16spdFbTw3nUycWhpNQaPGbTYd9kOI",
        authDomain: "cirike-141a3.firebaseapp.com",
        projectId: "cirike-141a3",
        storageBucket: "cirike-141a3.appspot.com",
        messagingSenderId: "1035532664225",
        appId: "1:1035532664225:web:f6d61bee88326ecffa9fe0",
        measurementId: "G-NRM5892FT1"
    };
    firebase.initializeApp(firebaseConfig);
  
// Inicio de sesión
$('.btn-login').click(function(event) {
    event.preventDefault();  // Evita el comportamiento predeterminado del botón

    var email = $('input[name="username"]').val();
    var password = $('input[name="pass"]').val();

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
        console.log('Inicio de sesión exitoso');
        window.location.href = "/index.html";  // Redirige a la página principal después de iniciar sesión
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
            console.log('Error en el inicio de sesión: Contraseña incorrecta');
        } else if (errorCode === 'auth/user-not-found') {
            console.log('Error en el inicio de sesión: Usuario no encontrado');
        } else {
            console.log('Error en el inicio de sesión: ' + errorMessage);
        }
    });
});

// Registro
$('.btn-register').click(function(event) {
    event.preventDefault();  // Evita el comportamiento predeterminado del botón

    var email = $('input[name="username"]').val();
    var password = $('input[name="pass"]').val();

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(user) {
        console.log('Registro exitoso');
        window.location.href = "/index.html";  // Redirige a la página principal después del registro
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/email-already-in-use') {
            console.log('Error en el registro: La dirección de correo electrónico ya está siendo utilizada por otra cuenta');
        } else {
            console.log('Error en el registro: ' + errorMessage);
        }
    });
});

// Olvidé mi contraseña
$('#forgot-password-link').click(function(event) {
    event.preventDefault();  // Evita el comportamiento predeterminado del enlace

    var email = prompt('Por favor, ingresa tu correo electrónico:');

    if (email) {
        firebase.auth().sendPasswordResetEmail(email)
        .then(function() {
            console.log('Correo electrónico de restablecimiento de contraseña enviado correctamente');
            alert('Se ha enviado un correo electrónico de restablecimiento de contraseña a ' + email);
        })
        .catch(function(error) {
            console.log('Error al enviar el correo electrónico de restablecimiento de contraseña:', error);
            alert('Ha ocurrido un error al enviar el correo electrónico de restablecimiento de contraseña');
        });
    }
});

 // Configuración de Firebase
 var firebaseConfig = {
    // Tu configuración de Firebase aquí
  };
  firebase.initializeApp(firebaseConfig);

  // Referencia al elemento del navbar para logueado
  var loggedInLink = document.getElementById('logged-in-link');

  // Referencia al enlace de cerrar sesión
  var logoutLink = document.getElementById('logout-link');

  // Verifica si el usuario está logueado
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Usuario logueado
      loggedInLink.style.display = 'block'; // Mostrar el elemento del navbar para logueado
    } else {
      // Usuario no logueado
      loggedInLink.style.display = 'none'; // Ocultar el elemento del navbar para logueado
    }
  });

  // Agrega un evento click al enlace de cerrar sesión
  logoutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    firebase.auth().signOut().then(function() {
      // Cerrar sesión exitoso
      window.location.href = "/login/login.html"; // Redirigir a la página de inicio de sesión
    }).catch(function(error) {
      // Ocurrió un error al cerrar sesión
      console.error('Error al cerrar sesión:', error);
    });
  });



(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(event){
        event.preventDefault();  // Evita el envío del formulario
    
        var check = true;
    
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
    
        return check;
    });
    


    $('.validate-form .input100').each(function(){
        event.preventDefault();  // Evita el envío del formulario
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }
        
    });

})(jQuery);