function Person(name, age, education, teach) {
    this.name = name;
    this.age = age;
    this.education = education;
    this.teach = teach;
}

Person.prototype.teachJs = function(){
    if (this.teach) {
        console.log(`${this.name} учит JS.`);
    }
};

  export { Person };

