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
    $('.login100-form-btn').click(function() {
        var email = $('input[name="username"]').val();
        var password = $('input[name="pass"]').val();
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log('Inicio de sesión exitoso');
            // Realizar acciones adicionales después del inicio de sesión exitoso
        })
        .catch(function(error) {
            console.log('Error en el inicio de sesión: ' + error.message);
        });
    });

    // Registro
    $('.login100-form-btn').click(function() {
        var email = $('input[name="username"]').val();
        var password = $('input[name="pass"]').val();
    
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            console.log('Registro exitoso');
            // Realizar acciones adicionales después del registro exitoso
        })
        .catch(function(error) {
            console.log('Error en el registro: ' + error.message);
        });
    });
    
  