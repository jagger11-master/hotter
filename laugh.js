const person =  {
    startName: "kelvin",
    middleName: "Crey",
    lastName: "emmaneul",
    fullName: function() {
        console.log(fullnName);
        return this.startName + "" + this.middleName + ""  + this.lastName;

    }
};

person.fullName ();