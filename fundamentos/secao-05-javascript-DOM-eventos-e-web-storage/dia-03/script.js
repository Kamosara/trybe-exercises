function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for(let index of decemberDaysList) {
    const whereP = document.querySelector('#days');
    const element = document.createElement('li');
    element.innerText = index;
    element.className = 'day'
    if(index == 24 || index == 31) {
        element.className = 'day holiday';
    }
    if(index == 4 || index == 11 || index == 18) {
        element.className = 'day friday';
    }
    if(index == 25) {
        element.className = 'day friday holiday';
    }
    whereP.appendChild(element);
  }


  function addButton(s) {
    const whereP2 = document.querySelector('.buttons-container');
    element2 = document.createElement('button');
    element2.className = 'btn-holiday';
    element2.innerText = s;
    whereP2.appendChild(element2);
  }

  addButton('Feriados');


  const botaozin = document.querySelector('.btn-holiday');
  botaozin.addEventListener('click', mudaCor);
  

    
  function mudaCor(){
    const whereB = document.getElementsByClassName('holiday');

    

    for(let i = 0; i < whereB.length; i += 1) {
        
        if(whereB[i].style.backgroundColor == 'rgb(139, 222, 122)') {
          whereB[i].style.backgroundColor = '#eee';
        }else{
          whereB[i].style.backgroundColor = 'rgb(139, 222, 122)';
        }
            
    }
  }
  


  function addButtonF(s) {
    const whereP3 = document.querySelector('.buttons-container');
    element3 = document.createElement('button');
    element3.className = 'btn-friday';
    element3.innerText = s;
    whereP3.appendChild(element3);
  }

  addButtonF('Sexta-feira');

  const botaoF = document.querySelector('.btn-friday');
  botaoF.addEventListener('click', mudaTexto);

  function mudaTexto() {
    const whereC = document.getElementsByClassName('friday');

    for(let i = 0; i < whereC.length; i += 1) {
      if(whereC[i].innerText == 'SEXTOU!!'){
        whereC[i].innerText = whereC[i];
      }else{
        whereC[i].innerText = 'SEXTOU!!';
      }
        
    }
  }


  const botaoZ = document.getElementsByClassName('day');
  botaoZ[0].addEventListener('mouseover', zoom);

  function zoom() {
    botaoZ.fontsize = '25px';
  }

  function task(str) {
    const whereP4 = document.querySelector('.my-tasks');
    element4 = document.createElement('span');
    element4.innerText = str;
    whereP4.appendChild(element4);
  }

  task('projeto');

  function cor(str) {
    const whereP5 = document.querySelector('.my-tasks');
    element5 = document.createElement('div');
    element5.style.backgroundColor = str;
    element5.className = 'task'
    whereP5.appendChild(element5);
  }

  cor('rgb(52, 97, 64)');


  const whereP6 = document.querySelector('.task');
  whereP6.addEventListener('click', taskSelect);
  function taskSelect() {
    if(whereP6.className == 'task'){
      whereP6.className = 'task selected';
    }else{
      whereP6.className = 'task';
    }

    console.log(whereP6.className);
  }


