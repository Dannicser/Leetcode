def productExceptSelf(arr):
    res = []
    template_one = [1]
    template_two = [1]
    mul = 1

    for i in range(len(arr)-1):
        mul = mul * arr[i]
        template_one.append(mul)

    mul = 1

    for i in range(len(arr)-1):
        mul = mul * arr[len(arr)-1-i]
        template_two.insert(0, mul)

    for i in range(len(template_one)):
        res.append(template_one[i] * template_two[i])

    return res
