$(function(){
  //j'ajoute un évènement à mon bouton id overallAverage
  $('#overallAverage').click(function(){
    // Je stock dans des variables la valeur des inputs
    var resultInFrench = $('#french').val();
    var resultInEnglish = $('#english').val();
    var mathResult = $('#maths').val();
    var resultInPhysicalSciences = $('#physicalScience').val();
    var sportResult = $('#sport').val();
    // Je stock dans la variable result la moyenne des notes. J'utilise parseFloat pour transfoerm des chianes de caractères renvoyées par .val() en valeur numériques
    var result = ((parseFloat(resultInFrench) + parseFloat(resultInEnglish) + parseFloat(mathResult) + parseFloat(resultInPhysicalSciences) + parseFloat(sportResult)) / 5);
    console.log(result);
    // Je compare ma variable résult par des intervalles
    if (result > 0 && result <= 10){
      alert('En dessous de la moyenne');
    }
    else if (result > 10 && result <= 13){
      alert('Moyen');
    }
    else if (result > 13 && result <= 16){
      alert('Bien');
    }
    else if (result > 16 && result <= 20){
      alert('Très bien');
    }
    else if(result == 20){
      alert('Excellent');
    }
  });
});
