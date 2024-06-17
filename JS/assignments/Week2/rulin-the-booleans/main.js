/********************
 * YOUR CODE BELOW! *
 ********************/
//MORE THAN FIVE
function moreThan5(number) {
if (number > 5) {
    return true
}
else
    {return false}
}

//TOP SCORE
function isNewTopScore(score, topScore) {
  if (score > topScore) {
    return true
  } 
  else {return false}
}

//IN DANGER
function isInDanger(grade) {
  if (grade >= 60 && grade <= 71) {
      return true
  }
  else {
      return false
  }
}
//COASTING
function isCoasting(grade) {
  if (grade >= 72 && grade <=83) {
    return true
  }
  else {return false}
}

//SUCCEEDING
function isSucceeding(grade) {
  if (grade >= 84 && grade <= 92) {
    return true
  }
  else {return false}
}

//FAILING
function isFailing(grade) {
  if (grade < 60) {
    return true
  }
  else {return false}
}

//ACING
function isAcing(grade) {
  if (grade > 92) {
    return true
  }
  else {return false}
}

//STUDENT
function isStudent(role) {
  if (role === "student") {
    return true
  }
  else {
    return false
  }
}

//TEACHER
function isTeacher(role) {
  if (role === "teacher") {
    return true
  }
  else {
    return false
  }
}

//ADMIN
function isAdmin(role) {
  if (role === "admin") {
    return true
  }
  else {
    return false
  }
}

//ELEMENTARY
function isElementary(level) {
  if (level === "elementary") {
    return true
  }
  else {
    return false
  }
}

//DIFFERENT PEOPLE
function areDifferentPeople()


/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
