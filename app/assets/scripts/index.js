import '../styles/styles.css';


function Person(name, number) {
    this.firstName = name;
    this.favNumber = number;

    this.greet = function() {
        console.log('this is ' + this.firstName , 'my number is ' + this.favNumber)
    }
}

const luke = new Person('luck', '15');
luke.greet()