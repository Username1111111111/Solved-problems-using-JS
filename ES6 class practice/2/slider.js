function button() {
    return 'button';
}

class Slider {
    constructor(width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nextSlide () {
        console.log('Moving forward');
    }
    prevSlide () {
        console.log('Moving back');
    }
    whoAmI () {
        console.log(this.width, this.height, this.count);
    }
}

// const slider = new Slider (600, 400, 5),
//     someSlider = new Slider(300, 350, 10);

// slider.whoAmI();
// someSlider.whoAmI();

class AutoSlider extends Slider {
    constructor(weight, height, count, auto) {
        super(weight, height, count);
        this.auto = auto;
    }
    play () {
        console.log(`Autoplay: ${this.auto}`);
    }
}

const slider = new AutoSlider(500, 500, 4, true);
slider.whoAmI();
slider.play();

// export {button, Slider};
export {button};
export default Slider;