import math

# linear


def mySqrt(n):
    i = 0

    while True:
        if i * i > n:
            return i - 1

        i = i + 1

# log


def mySqrt(n: int) -> int:
    start = 0
    end = n

    if n < 2:
        return n
    if n == 2:
        return 1

    while start <= end:
        middleEl = (start + end) / 2
        sqr = middleEl * middleEl

        if math.floor(sqr) == n:
            return math.floor(middleEl)

        if sqr > n:
            end = middleEl + 1
        else:
            start = middleEl - 1
