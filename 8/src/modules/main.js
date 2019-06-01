      import { Room } from './room.js';
      import { People } from './people.js';
      import { Computer } from './computer.js';
      import { Size } from './size.js';
      import { Specifications } from './specifications.js';
      import { Person } from './person.js';

      const myPerson = new Person('Евгений', 29, 'высшее', true);
      const specifications57 = new Specifications(7, 'Intel 9700', 'NVidia GTX 2080', '19"', true);
      const computerRoom57 = new Computer(20, 18, 2);
      const peopleRoom57 = new People(12, 9, 3);
      const sizeRoom57 = new Size(2.5, 6, 7);
      computerRoom57.specifications = specifications57;
      peopleRoom57.person = myPerson;
      const room57 = new Room(57, computerRoom57, peopleRoom57, sizeRoom57);

      console.log(room57);

      room57.assignNumber();
      sizeRoom57.writeSize();
      peopleRoom57.countPeople();
      myPerson.teachJs();
      specifications57.compilePc();