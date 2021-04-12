let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenV = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenV += buttonText;
            screen.value = screenV;
        }
        else if (buttonText == 'C') {
            screenV = "";
            screen.value = screenV;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenV);
        }
        else if(buttonText == "CE")
        {
            screenV=screenV.slice(0,screenV.length-1);
            screen.value = screenV;
        }
        else if(buttonText=="sqrt")
        {
            screenV=Math.sqrt(screenV);
            screen.value=screenV;
        }
        else {
            screenV += buttonText;
            screen.value = screenV;
        }

    })
}

