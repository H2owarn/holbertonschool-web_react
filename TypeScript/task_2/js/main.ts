// interface

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}


// class

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// function create employee

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500 ) {
        return new Teacher();
    }
    return new Director();
}


// function specific to employees
// If employee has a workDirectorTasks method, treat it as a Director.

function isDirector(employee: Director | Teacher ): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// function executeWork

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);

console.log(executeWork(emp1));
console.log(executeWork(emp2));