const person =  {
    startName: "kelvin",
    middleName: "Crey",
    lastName: "emmaneul",
    fullName: function() {
        console.log(fullName);
        return this.startName + "" + this.middleName + ""  + this.lastName;

    }
};

person.fullName ();