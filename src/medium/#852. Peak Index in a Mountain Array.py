import math


def peakIndexInMountainArray(arr):
    return bin_search(arr, 0, len(arr)-1)


def bin_search(arr, start, end):
    middleIndex = math.floor((start + end) / 2)

    if start > end:
        return -1

    if arr[middleIndex] > arr[middleIndex + 1] and arr[middleIndex] > arr[middleIndex - 1]:
        return middleIndex

    # не обязательно проверять, что текущий элемент меньше предыдущего
    if arr[middleIndex] > arr[middleIndex+1]:
        return bin_search(arr, start, middleIndex-1)
    else:
        return bin_search(arr, middleIndex+1, end)
