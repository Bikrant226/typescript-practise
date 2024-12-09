class School{
    schoolName: string;
    private teachers: string []=[];

    constructor(n: string){
        this.schoolName=n;
    }

    describe(){
        console.log(`The school name is ${this.schoolName}`);
    }

    addEmployee(teacher: string){
        this.teachers.push(teacher);
    }

    getEmployee(){
        console.log(this.teachers);
    }
}

const school=new School('Caesar School');
school.describe();

const newSchool=new School('Don Bosco');
newSchool.describe();

school.addEmployee("Max");
school.addEmployee("Ram");

school.teachers[2]="Simran";  // property is directly modified ---- to avoid this, private modifier can be used.
school.addEmployee("Roy");
school.getEmployee();