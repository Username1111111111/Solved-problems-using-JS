class Options {
    constructor (height = 100, width = 100, bg = 'grey', fontSize = 16, textAlign = 'center', text = 'Hello World!') {
        this.height = height + 'px';
        this.width = width + 'px';
        this.bg = bg;
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;
        this.text = text;
    }
    newDiv (text = this.text, cssTextRules) {
        let newElement = document.createElement('div');
        newElement.innerHTML = `${text}`;
        newElement.style.cssText = 
            `height: ${this.height};
             width: ${this.width}; 
             background: ${this.bg}; 
             font-size: ${this.fontSize}; 
             text-align: ${this.textAlign}`;
        document.body.appendChild(newElement);
    }
}

let newObj = new Options(200, 200, 'green', 20, 'center', 'aaaaaaaaaaaaaaaaaa');
newObj.newDiv();

let oldObj = new Options();
oldObj.newDiv();
