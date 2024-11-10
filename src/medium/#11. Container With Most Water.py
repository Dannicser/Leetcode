# https://leetcode.com/problems/container-with-most-water/description/

def maxArea(arr):
    l = 0
    r = len(arr) - 1
    max_amount = 0

    while l < r:
        max_amount = max(max_amount, min(arr[l], arr[r]) * (r-l))

        if arr[l] < arr[r]:
            l = l + 1
        else:
            r = r - 1

    return max_amount
