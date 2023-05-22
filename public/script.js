
   
    const main = document.getElementById('translation-result');
  let button = document.querySelector('button');

  button.addEventListener('click', ()=>{
    const select1 = document.getElementById('source-language');
    const select2 = document.getElementById('target-language');
  
  
    const value1 = select1.value;
    const value2 = select2.value;
    if (value1 === value2) {
        alert('Abeg select a language to be translated to');
      }
    
  })
  window.addEventListener('DOMContentLoaded',()=>{
    if(main.textContent === '{{answer}}'){
        main.style.display = 'none';
      }
      else{
        main.style.display = 'block';
      }
  })