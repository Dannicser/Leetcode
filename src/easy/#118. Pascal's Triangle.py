def generate(n):
    arr = [[1], [1, 1]]
    i = 2

    while i < n:
        arr.append([])
        arr[i].append(1)

        for j in range(len(arr[i-1])-1):
            arr[i].append(arr[i-1][j] + arr[i-1][j+1])

        arr[i].append(1)

        i = i + 1

    return arr
