let lecture = 10;
let section = 3;
let title = 'Javascript';

console.log(lecture);

// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'Javascript',
//     notes: {
//         introduction: "Welcome to JS course"
//     },
//     enroll(){
//         console.log('you are successfully enrolled')
//     }
// }

// Factory Function
function createCourse(title) {
    return {
            title: title,
            enroll(){
                console.log('you are successfully enrolled')
            }
        }
}

const newCourse = createCourse('Javascipt');

// Constructor Function

class Course {
    constructor(title) {
        this.title = title,
            this.enroll = function () {
                console.log('You are successfully enrolled');
            };
    }
}



const course = new Course