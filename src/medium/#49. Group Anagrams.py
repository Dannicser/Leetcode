# https://leetcode.com/problems/group-anagrams/description/

def groupAnagrams(arr):
    d = {}

    for i in range(len(arr)):
        key = ''.join(sorted(arr[i]))

        if d.get(key):
            d[key].append(arr[i])
        else:
            d[key] = [arr[i]]

    return list(d.values())
