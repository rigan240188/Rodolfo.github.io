
function fecha() {
    alert("Hola fecha");
    var fecha = moment().format('LL');
    var hor=moment().hours();
      document.getElementById('hora').innerHTML = hor; 
    document.getElementById('respuesta').innerHTML = fecha;
    if(hor<12)
        alert("Buenos días");
        else
            alert("Buenas tardes");
    }
    function escribir() {
    valor = document.getElementById('entrada').value;
    document.getElementById('cont3').innerHTML=' '+valor;
    }
        function consola(){
            alert("Hola");
    Letnow=moment('17/10/2020', 'DD/MM/YYYY'); //Determinada 
    console.log(now.format('LLL'));

    console.log(now.isValid()); //Validar fecha

    Letnow1=moment(); //Actual
    console.log(now1.format('LLL'));

    //Comparar fechas
    Letdate1=moment();
    Letdate2=moment ('2020-09-01');
    console.log(date2.isAfter (date1));
    }
    function lanzadera(){
        fecha();
        escribir();
        consola();
    }
    window.onload = lanzadera;