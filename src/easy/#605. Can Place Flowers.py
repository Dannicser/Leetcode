def canPlaceFlowers(arr: list[int], n: int) -> bool:
    arr.insert(0, 0)
    arr.append(0)

    i = 1

    while i < len(arr)-1:
        if arr[i] == 0 and arr[i-1] == 0 and arr[i+1] == 0:
            arr[i] = 1
            n = n - 1

        i = i + 1

    return n <= 0
