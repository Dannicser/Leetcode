def longestPalindrome(s):
    res = ''

    if len(s) < 2:
        return s

    # Для нечетных сabaс
    for i in range(len(s)-1):
        l = i
        r = i

        while True:
            # проверяем что не выходим за рамки справа
            if r > len(s)-1 or s[l] != s[r]:
                break
            else:
                res = res if len(res) > len(s[l:r+1]) else s[l:r+1]

            l = l - 1
            r = r + 1

    # Для четных abba
    for i in range(len(s)-1):
        l = i
        r = i+1  # меняем алгоритм прохода

        while True:
            # проверяем что не выходим за рамки справа
            if r > len(s)-1 or s[l] != s[r]:
                break
            else:
                res = res if len(res) > len(s[l:r+1]) else s[l:r+1]

            l = l - 1
            r = r + 1

    return res
