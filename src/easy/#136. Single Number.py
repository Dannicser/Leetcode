def singleNumber(arr):
    d = {}

    for el in arr:
        if el in d:
            del d[el]
        else:
            d[el] = 1

    return list(d.keys())[0]
