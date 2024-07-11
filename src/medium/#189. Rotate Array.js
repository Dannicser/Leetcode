// https://leetcode.com/problems/rotate-array/description/

function rotate(head, k) {
  const limit = k > head.length ? k % head.length : k;
  const end = head.splice(-limit);

  head.unshift(...end);

  return head;
}
