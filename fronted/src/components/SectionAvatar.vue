<template>
    <div class="section">
        <div id="wrapper">
            <h1>Cat Avatar Generator</h1>

            <img id="avatar" class= "avatar" src="" title="Your cAT">

            <form action="">
                <br>
                <br>
                <h4>Your name?</h4>
                <input type="text" class="smallbutton" name="nameAvatar" id="nameAvatar" value="autofocus">
                <input type="submit" class="bigbutton" value="Generate new cat">
            </form>  
        </div>
    </div>
</template>

<style type="text/css" media="screen" scoped>
body { margin: 2em; padding: 0; background: #000; color: #666; font-size: .8rem; text-align: center; }
#wrapper { text-align: left; background: #fff; max-width: 300px; padding: 1rem;    margin: 0 auto; border: 1em #333 solid; text-align: center; }
h1 { font-variant: small-caps; color: hotpink; font-size: 1.8rem; font-family: Ubuntu, Arial, sans; font-weight: bold; margin: 0 0 0.3rem 0; }
.avatar { border: 0; margin: 2rem 0 0 0; }
a { color: #00aad4;}
a:hover {    color: #222;}
.smallbutton { font-size: 1rem; margin-bottom: 0.8rem; }
input[type=text]{width:90%}
.bigbutton { font-weight: bold; font-size: 1.3rem; margin-bottom: 1.3rem; }
@media (max-width: 500px) {
body { margin: 0; padding: 0; background: #FFF; font-size: 1rem; }
#wrapper { text-align: left; background: #fff; max-width: 100%; padding: 0; margin: 0 auto; border: none; text-align: center; }
h1 { font-size: 1.6rem; margin: 0.2rem 0 0.2rem 0; }
}
</style>

<script>

$("#wrapper")
.submit(function(event) {
        event.preventDefault();
        var name  = document.getElementById("nameAvatar");
        console.log(name);
        exit; 
    });
function fd(seed){
var arr = Object.assign([], seed);
console.log(arr);
return arr;
}
</script>