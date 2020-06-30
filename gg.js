function registrar(){
	var email = document.getElementById("email").value;
  	var contrasena = document.getElementById("contrasena").value;

	firebase.auth().createUserWithEmailAndPassword(email, contrasena)
	.then(function(){
		verificar();    
	})
	.catch(function(error) {
  // Handle Errors here.

  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorCode + " " +errorMessage);

  

});
}
function ingresar(){
	var email2 = document.getElementById("email2").value;
  	var contrasena2 = document.getElementById("contrasena2").value;
  	firebase.auth().signInWithEmailAndPassword(email2, contrasena2).then(function(){
    console.log("Hola");
    document.getElementById("contenedor").innerHTML = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="#">Navbar</a><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li></ul><form class="form-inline my-2 my-lg-0"><button class="btn btn-outline-success my-2 my-sm-0" onclick="cerrar()">Salir</button></form></div></nav><div class="alert alert-primary" style="width: 30rem;position: fixed;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);" role="alert">Bienvenidos al sistema!</div>';
  })


    .catch(function(error) {
  // Handle Errors here.
  alert('Ingresar tu correo y contraseña o registrate!')
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode + " " +errorMessage);
  // ...
});
}

firebase.auth().onAuthStateChanged(function(user) {
  var contenedor = document.getElementById('contenedor');
  //var div_dashboar = document.getElementById('dashboard');
  if (user) {   
    //aparece(user);


    //document.body.innerHTML = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="#">Navbar</a><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li></ul><form class="form-inline my-2 my-lg-0"><button class="btn btn-outline-success my-2 my-sm-0" onclick="cerrar()">Salir</button></form></div></nav><div class="alert alert-primary" style="width: 30rem;position: fixed;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);" role="alert">A simple primary alert—check it out!</div>';

    
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    console.log(email);
    //console.log(email);
    var emailVerified = user.emailVerified;

    console.log(firebase.auth());
   // console.log('******')
    console.log(user.emailVerified)
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

    if (emailVerified == false) {
      document.getElementById("contenedor").innerHTML = '<div class="alert alert-primary" style="width: 30rem;position: fixed;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);" role="alert">Verifique su email para ingresar al sistema<button style="margin-left: 15%;" class="btn btn-outline-danger my-2 my-sm-0" onclick="cerrar()">Salir</button></div>';
    }else{
      document.getElementById("contenedor").innerHTML = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><a class="navbar-brand" href="#">Navbar</a><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li></ul><form class="form-inline my-2 my-lg-0"><button class="btn btn-outline-success my-2 my-sm-0" onclick="cerrar()">Salir</button></form></div></nav><div class="alert alert-primary" style="width: 30rem;position: fixed;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);" role="alert">Bienvenidos al sistema web!</div>';
    }



    // ...
  } else {
    // User is signed out.
    // ...
    document.getElementById("contenedor").innerHTML = '<div><center><h1 class="text"><i class="fa fa-user icon-title"></i>Iniciar Sesión</h1></center></div><hr color="#D8D8D8"><div class="card" style="width: 30rem;position: fixed;top: 50%;left: 50%;-webkit-transform: translate(-50%, -50%);transform: translate(-50%, -50%);"><div class="card-body"><div class="form-row"><div class="col-md-12 mb-3"><label>Correo:</label><input  class="form-control " type="text"  id="email2" required /></div><div class="col-md-12 mb-3"><label>Contraseña:</label><input  class="form-control " type="password" id="contrasena2" required /></div><div class="col-md-12 mb-3"><button  class="btn btn-primary btn-lg btn-block"  onclick="ingresar()">INGRESAR</button></div><div class="col-md-12 mb-3"><p align="center">Crear una nueva cuenta  <a href="ingresar.php">Registar</a></p><p align="center">Olvisdaste tú contraseña  selecciona <a href="contraseña.php">Aquí</a></p></div></div></div></div>';
  }
});


//observador();
function aparece(user){
	var user = user;
	var contenido = document.getElementById('contenido');
	if(user.emailVerified){
contenido.innerHTML = `
<div  class="container">
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Bienvenido! ${user.email}</h4>
  <p>Ya tiene acceso a nuestra pagina.</p>
  <hr>
</div>
<button onclick="cerrar()" class="btn btn-danger">Cerrar sesion</button>
</div>`
	;
	}
	
}
function cerrar(){
	firebase.auth().signOut().then(function(){
		console.log('saliendo..')
	})
	.catch(function(error){
		console.log(error)
	})
}
function verificar(){
	var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {

  var mensaje;
    var opcion = confirm('Se envio una verificación a tu correo!');
    if (opcion == true) {
        window.location.href = "http://localhost/proyecto/index.php";
  } else {
      window.location.href = "http://localhost/proyecto/ingresar.php";
  }
  // Email sent.
}).catch(function(error) {
  // An error happened.
  alert('Error')
});
}
 function restaurar(){
  //console.log(restaurar);
 // alert('click');
var auth = firebase.auth();
var email3 = document.getElementById("email3").value;

auth.sendPasswordResetEmail(email3).then(function() {
  // Email sent.
  alert('Se le envio un correo para restablecer su contraseña ')
})
.catch(function(error) {
   alert('El correo ingresado no esta registrato')
  // An error happened.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode + " " +errorMessage);
});
 }
