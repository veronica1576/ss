<template>

    <div id="MyIntro">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <link rel="stylesheet" href="../styles/login.css">

    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300&family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet">

</head>
<body>
    <header>
        <nav>
            <section class="contenedor nav">
                <div class="logo">
                    <a href="../index.html">
                        <img src="../img/logoEstigma.png" alt="logo">
                    </a>
                </div>
                <div class="enlaces-header">
                    <a href="../index.html">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Services</a>
                    <a href="#">FQA</a>
                    <a href="login.html">Login</a>
                </div>
                <div class="hamburguer">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </section>
        </nav>
    </header>
</body>

    </div>
</template>

<script>

//---menu hamburguesa---//
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];let semaforo = true;document.querySelectorAll(".hamburguer")[0].addEventListener("click", () => {    if (semaforo) {        document.querySelectorAll(".hamburguer")[0].style.color = "

</script>