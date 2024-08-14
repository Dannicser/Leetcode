// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

function removeDuplicates(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    // если равен, то удаляем последний элемент стека и идем на следующей элемент строки
    if (str[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(str[i]); // если последний элемент стека не равен текущего элемента строки, то закидываем в стек
    }
  }

  return stack.join("");
}
