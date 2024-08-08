// https://leetcode.com/problems/student-attendance-record-i/description/

function checkRecord(str) {
  let absences = 0;
  let lateness = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      absences++;
    }

    if (str[i] === "L") {
      lateness++;
    } else {
      lateness = 0;
    }

    if (absences >= 2 || lateness > 2) {
      return false;
    }
  }

  return true;
}

console.log(checkRecord("AA"));
