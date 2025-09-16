// Student interface

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// student objects

const student1: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 22,
    location: "Thailand"
};

const student2: Student = {
    firstName: "Elice",
    lastName: "Johnson",
    age: 24,
    location: "Taiwan"
};

// Store them in an array

const studentsList: Student[] = [student1, student2];

// Create the table and header row

const table: HTMLTableElement = document.createElement("table");


const headerRow: HTMLTableRowElement = table.insertRow();
const nameHeader: HTMLTableCellElement = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);


// loop

studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const nameCell: HTMLTableCellElement = row.insertCell();
    nameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = row.insertCell();
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
