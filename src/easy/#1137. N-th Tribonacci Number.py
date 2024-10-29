def tribonacci(n):
    arr = [0, 1, 1]

    if n < 3:
        return arr[n]

    i = 3

    while i <= n:
        s = sum(arr)
        arr.pop(0)
        arr.append(s)
        i = i + 1

    return arr[2]


def tribonacci(n):
    arr = [0, 1, 1]

    if n < 3:
        return arr[n]

    i = 3

    while i <= n:
        arr.append(arr[i-3] + arr[i-2] + arr[i-1])
        i = i + 1

    return arr
