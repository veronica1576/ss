<template>
 <div class="the-login">
        <!-- Formularios -->
        <div class="contenedor-formularios">
            <!-- Links de los formularios -->
            <ul class="contenedor-tabs">
                <li class="tab tab-segunda active">
                    <a href="#iniciar-sesion">Iniciar Sesión</a>
                </li>

                <li class="tab tab-primera">
                    <a href="#registrarse">Registrarse</a>                    
                </li>
            </ul>


            <!-- Contenido de los Formularios -->
            <div class="contenido-tab">
            <!-- Iniciar Sesión -->

                <div class="bloque active" id="iniciar-sesion">
                    <h1>Iniciar Sesión</h1>
                    <form action="#" method="post">
                        <div class="contenedor-input">
                            <label class="label"><span class="req"></span></label>
                            <input 
                                type="email"
                                required
                                placeholder="Email"
                            >
                        </div>

                        <div class="contenedor-input">
                            <label class="label"><span class="req"></span></label>
                            <input 
                                type="password"
                                required
                                placeholder="Password"
                            >
                        </div>

                        <p class="forgot"><a href="#">¿Se te olvidó la contraseña?</a></p>

                        <input 
                            type="submit"
                            class="button button-block"
                            value="Iniciar Sesión"
                        >
                    </form>
                </div>

                <!-- Registrarse -->
                <div class="bloque" id="registrarse">
                    <h1>Registrarse</h1>
                    <form action="#" method="post">
                        <div class="fila-arriba">
                            <div class="contenedor-input">
                                <label><span class="req"></span></label>
                                <input 
                                    type="text"
                                    required
                                    placeholder="Nombre"
                                >
                            </div>
                            
                            <div class="contenedor-input">
                                <label><span class="req"></span></label>
                                <input 
                                    type="text"
                                    required
                                    placeholder="Apellidos"
                                >
                            </div>
                        </div>

                        <div class="contenedor-input">
                            <label class="label"><span class="req"></span></label>
                            <input 
                                type="email"
                                required
                                placeholder="Email"
                            >
                        </div>

                        <div class="contenedor-input">
                            <label class="label"><span class="req"></span></label>
                            <input 
                                type="password"
                                required
                                placeholder="Password"
                            >
                        </div>

                        <div class="contenedor-input">
                            <label class="label"><span class="req"></span></label>
                            <input 
                                type="password"
                                required
                                placeholder="Verificar Password"
                            >
                        </div>

                        <input 
                            type="submit"
                            class="button button-block"
                            value="Registrarse"
                        >                    
                    </form>
                </div>
            </div>
        </div>



    </div>

    </template>


    
    <style scoped>

:root{
    /*Navegador*/
    --dark-blue: #1d273b;
    --middle-blue: #2570ff;
    --light-blue: #5D6678;
    --purple-blue: #667db6;
    --gray:#adb6c7;
    --light-green: #1FDE82;
    --white: #fff;
    --light-gray: #f2f2f2;
    --white-gray: #f2f5fc;


    /*Login*/
    --form-bg: #13232f;
    --form-bg-light: #13232fef;
    --blanco: #fff;
  
    --color-principal: #1ab188;
    --color-principal-light: #1ab18952;
    --color-principal-dark: #1ab189b2;
  
    --gris-light: #a0b3b038;
    --gris-lightest: #a0b3b093;
    --gris: #ddd;
  
    --thin: 300;
    --normal: 400;
    --bold: 600;
    --br: 20px;
  
    --fuente-principal: "Ubuntu", helvetica;
    --fuente-secundaria: "Raleway", arial;
}

h1, h2, h3, h4, h5, h6 {
    color: var(--dark-blue);
    font-weight: 300;
}

.contenedor {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
}

.contenedor1 {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
    padding: 60px 0;
}

h1{
    font-size: 50px;
}


/*--Header--*/

header::before {
    content: "";
    display: block;
    margin-bottom: 80px;
    /*Esto es para que cuando el nav que esta fixed no se superponga a elementos, tambien el top y z-index del nav*/
}

nav {
    width: 100%;
    height: 100px;
    background: var(--white);
    border-bottom: 1px solid transparent;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, .2);
    position: fixed;
    top: 0;
    z-index: 100;
    transition: ease-in-out 0.5s;
}

.nav {
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    align-items: center;
    padding: 0 40px;
}

.nav .logo {
    height: 100px;
}

.nav .logo img {
    height: 100%;
    vertical-align: top;
    cursor: pointer;
}

.enlaces-header {
    font-weight: 300;
    transition: ease-in-out 0.5s;
}

.nav .enlaces-header a {
    color: var(--light-blue);
    text-decoration: none;
    margin-left: 20px;
}

.hamburguer {
    width: 80px;
    height: 80px;
    display: none;
    /* background: #236363; */
    text-align: center;
    z-index: 100;
    cursor: pointer;
    transition: color 0.5s ease-in;
}

.hamburguer>i {
    font-size: 25px;
    line-height: 80px;
}



/* Login */
.the-login{
    margin-top: 20px;
    padding-top: 20px;
}

.tab a{
    text-decoration: none;
    color: var(--color-principal);
    transition: 0.5s ease; 
}

.tab a:hover{
    color: var(--color-principal-dark);
}

.contenedor-formularios {
    background: var(--form-bg);
    padding: 40px;
    max-width: 600px;
    margin: 40px auto;
    border-radius: var(--br);
    box-shadow: 0 4px 10px 4px var(--form-bg-light);
}

.contenedor-tabs {
    list-style: none;
    padding: 0;
    margin: 0 0 40px 0;
}

.contenedor-tabs:after {
    content: "";
    display: table;
    clear: both;
}

.contenedor-tabs li a {
    display: block;
    padding: 15px;
    background: var(--gris-light);
    color: var(--gris-lightest);
    font-size: 20px;
    float: left;
    width: 50%;
    text-align: center;
    cursor: pointer;
    transition: 0.5s ease;
}

.contenedor-tabs li a:hover {
    background: var(--color-principal-dark);
    color: var(--blanco);
}

.contenedor-tabs .active a {
    background: var(--color-principal);
    color: var(--blanco);
}

.contenido-tab > div{
    display: none;
}

.contenido-tab > .active{
    display: block;
}

h1 {
    text-align: center;
    color: var(--blanco);
    font-weight: var(--thin);
    margin: 0 0 40px;
}

label {
    position: absolute;
    transform: translateY(6px);
    left: 13px;
    color: rgba(var(--blanco), 0.5);
    transition: all 0.25s ease;
    --webkit-backface-visibility: visible;
    pointer-events: none;
    font-size: 22px;
}

/* label .req {
    margin: 2px;
    color: var(--color-principal);
} */

/* label .active {
    transform: translateY(50px);
    left: 2px;
    font-size: 14px;
}

label .active .req {
    opacity: 0;
}

label .highlight {
    color: var(--blanco);
} */

input {
    font-size: 22px;
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background: none;
    background-image: none;
    border: 1px solid var(--gris-light);
    border-top: none;
    border-left: none;
    border-right: none;
    color: var(--blanco);
    /* border-radius: 0; */
    transition: all 0.5s ease;
    border-radius: 5px;
}

input:focus {
    outline: none;
    border-color: var(--color-principal);
    background: none;
}

.contenedor-input {
    position: relative;
    margin-bottom: 40px;
}

.fila-arriba:after {
    content: "";
    display: table;
    clear: both;
}
  
.fila-arriba div {
    float: left;
    width: 48%;
    margin-right: 4%;
}

.fila-arriba div:last-child {
    margin: 0;
}

.button {
    border: 0;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 15px 0;
    font-size: 2rem;
    background: var(--color-principal);
    color: var(--blanco);
    transition: all 0.5s ease;
    /* -webkit-appearance: none;  */
}

.button:hover {
    background: var(--color-principal-dark);
}
  
.button:focus {
    background: var(--color-principal-light);
}

.button-block {
    display: block;
    width: 100%;
}

.forgot {
    margin-top: -20px;
    text-align: right;
    margin-bottom: 20px;
}

.forgot a{
    color: var(--color-principal);
}

.forgot a:hover{
    color: var(--color-principal-dark);
}


/* Mediaqueries */
@media screen and (max-width:600px) {
    .titulo {
        font-size: 35px;
    }

    h1{
        font-size:40px;
    }

    .contenido-header {
        height: 650px;
    }

    .nav {
        padding: 0 10px;
    }

    .contenido-header>img {
        width: 200px;
    }

    .enlaces-header {
        position: fixed;
        background: var(--purple-blue);
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);

        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        clip-path: circle(0.0% at 100% 0);

    }

    .nav .menudos {
        -webkit-clip-path: circle(150% at 100% 0);
        clip-path: circle(150% at 100% 0);

    }

    .nav .enlaces-header a {
        color: var(--white);

    }

    .hamburguer {
        display: block;
    }    
     
}

@media screen and (max-width: 500px) {
    .fila-arriba div {
      width: 100%;
    }
  
    .fila-arriba div :last-child {
      margin-bottom: 40px;
    }
}
  
@media screen and (max-width: 400px) {
    .contenedor-tabs li a {
      width: 100%;
    }
}
</style>
