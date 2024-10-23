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
