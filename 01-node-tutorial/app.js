// class Rectangle {
//   constructor(_width, _height){
//     this.width = _width;
//     this.height = _height;
//     this.color = 'blue';
//     this.rotated = this.rotate;
//   }
  
//   get area() {
//     return this.width * this.height;
//   }
  
//   set value(v) {
//     this.color = v;
//   }
  
//   static validator(a, b) {
//     return a === b;
//   }
  
//   rotate() {
//     console.log('rotate')
//   }
  
// }

// const rec1 = new Rectangle(5, 3);
// console.log(rec1.area);
// rec1.value = 'red';
// console.log(rec1.color);
// console.log(Rectangle.validator(1, 1))

// class Person {
//   constructor(_name, _age, _favColor) {
//     this.name = _name;
//     this.age = _age;
//     this.width = 5;
//     this.height = 5;
//   }
  
//   describe() {
//     console.log(`i am ${this.name} and i am ${this.age} years old`);
//   }
// }

// class Programmer extends Person {
//   constructor(_name, age, favColor) {
//     super(_name, age);
//     this.favColor = favColor;
//   }
  
//   show() {
//     super.describe();
//     console.log(this.name, this.age, this.favColor, this.width, this.height);
//   }
// }

// const p = new Programmer('cyrus', 16, 'maroon');
// p.show()

// const letters = {
//   a: 'a',
//   b: 'b',
//   c: 'c'
// }

// const letter = {
//   'a': 'ey',
//   'b': 'bi'
// }

// console.log(Object.keys(letters))
// console.log(letter['a'])
// console.log(letter.a)

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.logs(this.age);
//     this.logs(age);
//   }
//   logs(value) {
//     console.log(value);
//   }
// }

// const human = new Person('peter', 100);
// human.logs('myka')

// const string = 'filea.mp3 files.mp3 filed.mp3 doc.docx ppt.ppt';
// const regex = /(\w+)\.mp3/g;
// let match = regex.exec(string);

// while (match) {
//   console.log(match[1])
//   match = regex.exec(string)
// }

// console.log(regex.exec(string))
/*const queryObject = {}

const numericFilters = 'cute=myka,myka>22';

if (numericFilters) {
  const operatorMap = {
    '>': '$gt',
    '>=': '$gte',
    '<': '$lt',
    '<=': '$lte',
    '=': '$eq'
  }
  const regex = /\b(<|>|<=|>=|=)\b/g;
  const options = ['cute', 'myka'];
  let filters = numericFilters.replace(regex, (match) => `-${operatorMap[match]}-`);
  
  filters = filters.split(',').forEach(item => {
    const [fields, operator, value] = item.split('-')
    if (options.includes(fields)) {
      queryObject[fields] = {[operator]: value}
    }
  })
}

console.log(queryObject)*/

// console.log(new Date().getDate())

const obj = {
  a: 1,
  b: 2,
  c: 3
}

console.log(obj)