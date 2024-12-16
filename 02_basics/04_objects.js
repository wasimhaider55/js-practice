const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.email = "wasim@google.com"
tinderUser.name = "wasim haider"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));




const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "wasim",
            lastname: "haider"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}


// const obj4 = { obj1, obj2 , obj3 }
// console.log(obj4);

// const obj4 = Object.assign(obj1,obj2,obj3)
// console.log(obj4);


// spread or rest operator
// const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
    {
        id: 4,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(users[3].id);




const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// DeStructuring & you can also rename the propertiesName
const {courseInstructor: instructor ,price,coursename} = course

// console.log(courseInstructor);
// console.log(price);



// know about json and api

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]