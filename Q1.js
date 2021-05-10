// https://github.com/lgwebdream/FE-Interview/issues/7

// recursion start() function. clear by handler.
function mySetInterVal(fn, a, b) {
    this.a = a;
    this.b = b;
    this.time = 0;
    this.handler = -1;
    this.start = () => {
        this.handler = setTimeout(() => {
            fn();
            this.time ++;
            this.start();
        }, this.a + this.time * this.b)
    };
    
    this.stop = () => {
        this.time = 0;
        clearTimeout(this.handler)
    }
}
const a = new mySetInterVal(() => {console.log('123');}, 1000, 2000);
a.start();
a.stop();
