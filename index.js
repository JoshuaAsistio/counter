window.addEventListener('DOMContentLoaded', () => {
    /* VARIABLE DECLARATION */

    //declare the count which will be increased later on, the value which targets the number below the counter text that will get updated later on, and the btn which targets the increase, decrease, and reset buttons.

    let count = 0;
    const value = document.querySelector('#num-text')
    const btn = document.querySelectorAll('.button')
    
    /* ------------------------------------------------------- */

    /* FUNCTIONALITY */ 
    
    //use a for each loop to loop through the three button elements in the node list and add an event listener 'click'.

    btn.forEach(buttons => {
        buttons.addEventListener('click', e => {

            //gets the current element you clicked on using the curentTarget method and then gets the class list of that element.

            const currentButton = e.currentTarget.classList

            //tests whether or not the button you clicked on has the class list decrease, increase, or reset, and then sets the text content of value to the value of count.

            if (currentButton.contains('decrease')) {
                count--
            } else if (currentButton.contains('increase')) {
                count++
            } else {
                count = 0;
            }

            value.textContent = count

            //This changes the color of the value element in the home page depending on whether it's positive, negative, or zero.

            if (count > 0) {
                value.style.color = 'rgb(49, 233, 129)'
            } else if (count < 0) {
                value.style.color = 'rgb(255, 27, 28)'
            } else {
                value.style.color = 'rgb(239, 233, 244)'
            }
        })
    })

    /* ------------------------------------------------------- */
})