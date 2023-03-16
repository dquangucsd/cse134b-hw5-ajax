let count = 0;

class ButtonCount extends HTMLElement {
    constructor() {
        super();
    

    //create shadow root
    const shadow = this.attachShadow({mode: 'open'});
    
    //make button that increments
    const button = document.createElement("button");
    //button.innerText = "button";

    let counter = 0;

    button.innerText = `button: ${counter}`;


    shadow.appendChild(button);

    button.addEventListener('click', function() {
        counter += 1;
        button.innerText = `button: ${counter}`
    });


    };
};

customElements.define("button-count", ButtonCount);