console.log("JS funcionando");

document.querySelector('.anclaInicio').addEventListener('click', function () {
    console.log('El ancla a Inicio fue clickeado');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'contenidoInicio.html', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.querySelector('main').innerHTML = this.responseText;
        }
    }
});

document.querySelector('.anclaTarifas').addEventListener('click', function () {
    console.log('El ancla a Tarifas fue clickeado');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'contenidoTarifas.html', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.querySelector('main').innerHTML = this.responseText;
        }
    }
});

document.querySelector('.anclaNosotros').addEventListener('click', function () {
    console.log('El ancla a Nosotros fue clickeado');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'contenidoNosotros.html', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.querySelector('main').innerHTML = this.responseText;
        }
    }
});