      import { Room } from './room.js';
      import { People } from './people.js';
      import { Computer } from './computer.js';
      import { Size } from './size.js';
      import { Specifications } from './specifications.js';
      import { Person } from './person.js';

      const myPerson = new Person('Евгений', 30, 'высшее', true); //область видимости модуль main.js
      const specifications57 = new Specifications(7, 'Apple', 'NVidia', '19"'); //область видимости модуль main.js
      const computerRoom57 = new Computer(20, 18); //область видимости модуль main.js
      const peopleRoom57 = new People(12, 9, 3); //область видимости модуль main.js
      const sizeRoom57 = new Size(2.5, 6, 7); //область видимости модуль main.js
      computerRoom57.specifications = specifications57;
      const room57 = new Room(57, computerRoom57, sizeRoom57, 8); //область видимости модуль main.js

      console.log(room57);

      room57.assignNumber(peopleRoom57);
      sizeRoom57.writeSize();
      peopleRoom57.countPeople(myPerson);
      myPerson.teachJs(true);
      specifications57.checkIfCompile(true);
      computerRoom57.checkIfNeedsRepair();
      room57.cleanRoom();
      peopleRoom57.checkIfPassTest();
      myPerson.checkIfTired();
      myPerson.checkIfOld();
      sizeRoom57.checkIfNeedRenovation();
      specifications57.checkCpu();