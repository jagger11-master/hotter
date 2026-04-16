/*learning the fundamental of oop in c++*/

class Employee(){
    private :
    int emplID;
    
    double salary;
    
    public:
    string name;
    string occcupation;

    Employee(int ID,double sal, string ename, string occupy){
//note that private data member can only be accessed in the class they can not be accessed outside the classs 

emplID =  ID;
Salary  = sal;
name = ename;
occupation = occupy;
}

void displayInfo(){
    cout <<"Employee iD is" << employID<<end;
    cout<<"Employee Salary is"<< salary<<endl;
    cout<<"Employee Occcupation is"<<occupation<<endl;
  }
};

int main(){
    Employee e1(101,50000,"godfrey marco","programmer");
    e1.displayInfo();
    e1.salary = 100000; // this will split error 
    e1.name = "eng Godfrey Marco";
    e1.displayinfo();

    return 0;
};