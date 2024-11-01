def reverseWords(s: str) -> str:
    arr = s.strip().split(' ')

    return " ".join(list(map(lambda word: ''.join(reversed(word)), arr)))


def reverseWords(s):
    arr = s.split(' ')
    res = ''

    for i in range(len(arr)):
        res = res + arr[i][::-1]+' '

    return res.strip()
