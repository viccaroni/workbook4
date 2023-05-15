"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "49.95",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// for (let index = 0; index < courses.length; index++) {
//   const course = courses[index];

//     if (course.CourseId == "PROG200") {
//       console.log(`The ${course.CourseId} starts on ${course.StartDate}`);
//           console.log("-------------");
//     }

// }

// for (let index = 0; index < courses.length; index++) {
//     const course = courses[index];
    
//     if (course.CourseId == "PROJ500") {
//         console.log(
//           `The title for the ${course.CourseId} course is "${course.Title}"`
//         );
//         console.log("-------------");
//       }
  
// }

for (let index = 0; index < courses.length; index++) {
    const course = courses[index];
   let feeAsNumber = parseFloat(course.Fee)
    

    if (feeAsNumber <= 50.00) {
        console.log(`The titles that cost $50 or less are: "${course.Title}"`);
        console.log("-------------");
      }
    
}

// for (let index = 0; index < courses.length; index++) {
//     const course = courses[index];

//     if (course.Location == "Classroom 1") {
//         console.log(
//           `The classes that will have the sessions in Classroom 1 are: ${course.CourseId}`
//         );
//         console.log("-------------");
//       }
// }