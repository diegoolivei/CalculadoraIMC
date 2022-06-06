let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");


function calcular(){
    let p = peso.value
    let a = altura.value
    let r = resultado

  let resultImc = r = (p / (a/100 * a/100)).toFixed(2);


  if(resultImc >= 18.5 && resultImc <= 24.99){
    return(
    resultado.innerHTML = `<p> O seu Imc é: ${resultImc} e o seu peso está normal</p>`)
  }
  else if(resultImc >= 17 && resultImc <= 18.49){
    return(
    resultado.innerHTML = `<p> O seu Imc é: ${resultImc} e você está abaixo do peso</p>`)
  }
  else if(resultImc < 17){
    return(
    resultado.innerHTML = `<p> O seu Imc é: ${resultImc} e você está muito abaixo do peso</p>`)
  }
  else if(resultImc >= 25 && resultImc <= 29.99){
    return(
    resultado.innerHTML = `<p> O seu Imc é: ${resultImc} e você está acima do peso</p>`)
  }

  else if(resultImc >= 30 && resultImc <= 34.99){
    return(
    resultado.innerHTML = `<p> O seu Imc é: ${resultImc} e você foi classificado como Obeso</p>`)
  }
  else if(resultImc >= 35 && resultImc <= 39.99){
    return(
    resultado.innerHTML = `<p> O seu Imc é: ${resultImc} e você está com obesidade severa</p>`)
  }
 
  else if(resultImc >= 40){
    return(
    resultado.innerHTML = `<p> O seu Imc é: ${resultImc} e você está com obesidade mórbida</p>`)
  }
}

