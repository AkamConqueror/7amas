let input = document.querySelector('.outPuts');
let range = document.querySelector('.input');
let uotPut = document.querySelector('.uotPut');
//let btn = document.querySelector('.btn');
let checks = document.querySelectorAll('.check');
//let p = document.querySelector('.p');

//range.addEventListener('input', () => {
//    p.innerHTML = range.value;
//})

let char = {
    upper: 'QWERTYUIOPASDFGHJKLZXCVBNM',
    law: 'qwertyuiopasdfghjklzxcvbnm',
    num: '1234567890',
    sym: '|^[](){};:,!?<>|+~*#@%.',
}

 checks.forEach((box) => {
    box.addEventListener('change', ()=> {
        LoadAll();
    });

})


window.addEventListener('load',LoadAll)



 range.addEventListener('input',LoadAll);
function LoadAll() {
    let Password = '';
    let Random = '';


    checks.forEach((check) => {
        if (check.checked) {
            Password += char[check.id];

        }
    })

    for (i = 0; i < range.value; i++) {

        Random += Password[Math.floor(Math.random() * Password.length)]

    }

    input.innerHTML = Random;
}



uotPut.addEventListener('click',()=>{
    try{
        
    
    navigator.clipboard.writeText(input.innerHTML);
    }catch {
        console.log('didnt copy');
    }
    try {
    window.Clipboard = (function(window, document, navigator) {
        var textArea,
            copy;
    
        function isOS() {
            return navigator.userAgent.match(/ipad|iphone/i);
        }
    
        function createTextArea(text) {
            textArea = document.createElement('textArea');
            textArea.value = text;
            document.body.appendChild(textArea);
        }
    
        function selectText() {
            var range,
                selection;
    
            if (isOS()) {
                range = document.createRange();
                range.selectNodeContents(textArea);
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textArea.setSelectionRange(0, 999999);
            } else {
                
                navigator.clipboard.writeText(input.innerHTML);
                //textArea.select();
                
            }
        }
    
        function copyToClipboard() {
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    
        copy = function(text) {
            createTextArea(text);
            selectText();
            copyToClipboard();
        };
    
        return {
            copy: copy
        };
    })(window, document, navigator);
    
    Clipboard.copy(input.innerHTML);
    
    }catch{
        console.log('didnt copy ');
    }
    
    
});
