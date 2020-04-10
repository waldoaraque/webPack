import '../css/style.css';

class User {
    constructor(name) {
        this.name = name
    }
}

const user = new User('Waldo')
console.log(user)