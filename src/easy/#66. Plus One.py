def plusOne(arr):
    return list(map(lambda el: int(el), list(str(int("".join(map(lambda el: str(el), arr)))+1))))
