function igual() {
   const calc = document.getElementById('visor').innerHTML;

   document.getElementById('visor').innerHTML = eval(calc);

   if('calc' === 0){
      alert("Erro");
   }

}