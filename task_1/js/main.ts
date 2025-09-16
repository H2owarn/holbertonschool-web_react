// Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

// Printing teachers
function printTeacher(teacher: Teacher): string  {
  return `${teacher.firstName.charAt(0)}. ${teacher.lastName}`;
}


// Writing a class
// describing
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firsName: string;
  private lastName: string;

  constructor({ firsName, lastName }: StudentConstructor) {
    this.firsName = firsName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firsName;
  }
}
