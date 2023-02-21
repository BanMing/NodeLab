console.log("Hello World");


// export class
function Hello() {
    var name;
    this.setName = function (theName) {
        name = theName;
    };
    this.sayHello = function () {
        console.log('Hello' + name);
    };
}


module.exports = Hello;

// exports.world = function () {
//     console.log('exports hello');
// }
