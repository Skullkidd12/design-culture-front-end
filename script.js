window.setTimeout(
    function(){
        carregaAlunos();
    },5000)

window.setInterval(function(){window.alert('bololo')},3000);

function carregaAlunos(){
    var alunos = ['boris','maria','joao','dalila',2,true]
var objetosAlunos = document.querySelectorAll('ul li');
    alunos.forEach(function(item,index,array){
          if(index == 0){ 
                objetosAlunos[index].innerHTML = `Campeão: ${alunos[index]}`;
                objetosAlunos[index].style.color= 'blue'
                objetosAlunos[index].style.fontSize="30px"
                objetosAlunos
        
            }else if(index == array.length-1){
                objetosAlunos[index].innerHTML =  index+1+"º" + " lugar: " + alunos[index];
                objetosAlunos[index].style.color = "darkred";
                objetosAlunos[index].style.fontSize="12px"
            }else{
                objetosAlunos[index].innerHTML =  index+1+"º" + " lugar: " + alunos[index];
            }
        })
        

}









alunos.forEach(function(item,index,array){
//criando ELEMENTOS li
    /*
var liNova = document.createElement("li");
var nomeAluno = document.createTextNode("RENANZINHU")
liNova.appendChild(nomeAluno);
document.querySelector('ul').appendChild(liNova)
*/
  

//transportando elementos da array (alunos) para o objeto (objetosAlunos)


  if(index == 0){ 
        objetosAlunos[index].innerHTML = `Campeão: ${alunos[index]}`;
        objetosAlunos[index].style.color= 'blue'
        objetosAlunos[index].style.fontSize="30px"
        objetosAlunos

    }else if(index == array.length-1){
        objetosAlunos[index].innerHTML =  index+1+"º" + " lugar: " + alunos[index];
        objetosAlunos[index].style.color = "darkred";
        objetosAlunos[index].style.fontSize="12px"
    }else{
        objetosAlunos[index].innerHTML =  index+1+"º" + " lugar: " + alunos[index];
    }
})
