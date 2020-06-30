
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie-edge">	
	<title>Usuario</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">	
</head>
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-auth.js"></script>
<script src="firebase.js"></script>
<body>
<div id="Contenedor" class="opacity">
  <div>
    <center><h1 class="text">Registrarse</h1></center>
  </div>
  <hr color="#D8D8D8">

  <div class="card" style="width: 30rem; /* ó absolute */
  position: fixed;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);">
    <div class="card-body">
      <from>
         <div class="form-row">
          <div class="col-md-12 mb-3">
            <label>Correo:</label>
                  <input  class="form-control " type="email"  id="email" required />    
              </div>
              <div class="col-md-12 mb-3">
            <label>Contraseña:</label>
                  <input  class="form-control " type="password"  id="contrasena" required/>    
              </div>
              <div class="col-md-12 mb-3">
                <button  class="btn btn-primary btn-lg btn-block"  onclick="registrar()" >REGISTRAR</button>
              </div>
          <div class="col-md-12 mb-3">
          <p align="center">Si, tienes una cuenta "click" en  <a href="index.php">Iniciar</a></p>
          </div>
           </div>
         </from>
    </div>
  </div>
  
  </div> 
<script src="gg.js">
</script>
</body>
</html>