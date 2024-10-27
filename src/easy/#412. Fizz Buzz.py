def fizzBuzz(n):
    res = []

    if n < 1:
        return res

    if n % 3 == 0 and n % 5 == 0:
        return fizzBuzz(n-1) + ['FizzBuzz']
    elif n % 3 == 0:
        return fizzBuzz(n-1) + ['Fizz']
    elif n % 5 == 0:
        return fizzBuzz(n-1) + ['Buzz']
    else:
        return fizzBuzz(n-1) + [str(n)]


def fizzBuzz(n):
    l = [0, 1]
    i = 0

    if n < 2:
        return l[n]

    while i < n-1:
        sum = l[0]+l[1]
        l.pop(0)
        l.append(sum)
        i = i + 1
