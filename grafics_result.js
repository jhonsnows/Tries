
function drawChart() {
   var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', 1000, 400, 200],
      ['2015', 1170, 460, 250],
      ['2016', 660, 1120, 300],
      ['2017', 1030, 540, 350]
   ]);

   var options = {
      chart: {
         title: 'Company Performance',
         subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      }
   };

   var chart = new google.charts.Bar(document.getElementById('contenedor2'));

   chart.draw(data, google.charts.Bar.convertOptions(options));
   }
function creadorDatos() {

  var datos = google.visualization.arrayToDataTable([
    ['CLASIFICACIÓN DE IMC', 'PORCENTAJE '],
    ['PESO INSUFICIENTE',     9.3],
    ['PESO NORMAL',      78.3],
    ['SOBREPESO',  11.1],
    ['OBESIDAD',  1.3]
  ]);
   return datos;
  
}

function dibujarPie(){
   let data= creadorDatos();
   var opciones={'title':'CLASIFICACIÓN NUTRICIONAL DE LOS ESTUDIANTES DE BOGOTÁ, SEGÚN SU IMC', 'width':600, 'height':500, };
   let grafico=new google.visualization.PieChart(document.getElementById('contenedor'));
   grafico.draw(data, opciones);
   
   
}