// https://leetcode.com/problems/unique-email-addresses/description/

function numUniqueEmails(arr) {
  const store = new Set();

  for (let i = 0; i < arr.length; i++) {
    let name = arr[i].split("@")[0];
    let domen = arr[i].split("@")[1];

    name = name.split("+")[0];
    name = name.replace(/\./gi, "");

    store.add(`${name}@${domen}`);
  }

  return store;
}

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]));
