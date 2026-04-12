const person =  {
    startName: "kelvin",
    middleName: "Crey",
    lastName: "emmaneul",
    fullName: function() {
        console.log(this.fullName);
        return this.startName + "" + this.middleName + ""  + this.lastName;

    }
};

console.log(person.fullName ());