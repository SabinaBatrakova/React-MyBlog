let buttonCounter = document.querySelector('.button_counter');/* это связь с элементами на странице*/
let buttonReset = document.querySelector('.button_reset');
let counterText = document.querySelector('.counter_text')

let counter_text = 0; /*это данные по кнопке*/

buttonCounter.addEventListener('click', function()  {
    counter_text++;
    counterText.innerText = counter_text; /*внутри параграфа измени текст*/
},
buttonReset.addEventListener('click', function()  {
    counter_text = 0;
    counterText.innerText = counter_text; /*внутри параграфа измени текст*/
})
)


//DOM docement object model


 
 