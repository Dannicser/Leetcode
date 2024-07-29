// https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

function canConstruct(a, b) {
  const dictionary = {};

  for (let i = 0; i < b.length; i++) {
    if (dictionary[b[i]]) {
      dictionary[b[i]] = dictionary[b[i]] + 1;
    } else {
      dictionary[b[i]] = 1;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (!dictionary[a[i]]) {
      return false;
    }

    dictionary[b[i]] = dictionary[b[i]] - 1;
  }

  return true;
}

// если в словаре нет такой буквы или значение равно 0, то false

function canConstruct(a, b) {
  a = a.split("");

  for (let i = 0; i < b.length; i++) {
    const index = a.indexOf(b[i]);

    if (index >= 0) {
      a.splice(index, 1);
    }

    if (!a.length) {
      return true;
    }
  }

  return false;
}
