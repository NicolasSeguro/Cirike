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
        console.log('Error en el inicio de sesión: ' + error.message);
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
        console.log('Error en el registro: ' + error.message);
    });
});

   