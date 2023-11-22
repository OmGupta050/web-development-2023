// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName: {
            firstName: "Om",
            lastName: "Gupta",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "A", 2: "B"};
const obj2 = {3: "C", 4: "D"};
const obj3 = {5: "E", 6: "F"};

// const obj = {obj1, obj2, obj3};
// const obj = Object.assign({}, obj1, obj2, obj3);
const obj = {...obj1, ...obj2, ...obj3};
// console.log(obj);

const users = [
    {
        id: 1,
        email: "o@gmail.com",
    }
    ,{
        id: 2,
        email: "om@gmail.com",
    }
    ,{
        id: 3,
        email: "omg@gmail.com",
    }
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "Web Development",
    price: 199,
    courseInstructor: "Om Gupta"
}

// course.courseInstructor

const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "Om",
//     "coursename": "Web Development",
//     "price": "free"
// }

[
    {},
    {},
    {},
]