let count = 0;

class ButtonCount extends HTMLElement {
    constructor() {
        super();
    

    //create shadow root
    const shadow = this.attachShadow({mode: 'open'});
    };
};

customElements.define("button-count", ButtonCount);