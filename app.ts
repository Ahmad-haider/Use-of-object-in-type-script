console.log(`1. Write a TypeScript program to list the properties of a TypeScript object`);

var student = {

    name: `Ali`,
    class: 7,
    roll_no: 23,


}

console.log(student);


console.log(`2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.`);


var student1 = {

    name: `Ali`,
    class: 7,
    roll_no: 23,


}

console.log(student1);

delete student1.roll_no


console.log(student1);


console.log(`3. Write a TypeScript program to get the length of a TypeScript object. `);

var student2 = {

    name: `Ali`,


}

console.log(student2.name.length);


console.log(`4. Write a TypeScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   
`);



var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

console.log(`Authors:`,

    library[0].author, `&`,
    library[1].author, `&`,
    library[2].author,

);

console.log(`Book names :`,
    library[0].title, `&`,
    library[1].title, `&`,
    library[2].title,

);



console.log(`reading status :`,
    library[0].readingStatus, `&`,
    library[1].readingStatus, `&`,
    library[2].readingStatus,

);





 

 
 
 



console.log(`10. Write a TypeScript program to sort an array of TypeScript objects.`);


var library1 = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];


    console.log(`Obj 1:`,
    library1[0].author, `&`,
    library1[0].libraryID, `&`,
    library1[0].title,

);

console.log(`obj 2 :`,
    library1[1].author, `&`,
    library1[1].libraryID, `&`,
    library1[1].title,

);



console.log(`obj 3 :`,
    library1[2].author, `&`,
    library1[2].libraryID, `&`,
    library1[2].title,

);




console.log(`13. Write a TypeScript function to retrieve all the names of object's own and inherited properties.`);


var IDs = {

    student_id: `pkfsbgo150046`,

    CNIC:23429382

}


var person = {

 age: 13,
 gender: `male`,
IDs
 

}

console.log(person);

