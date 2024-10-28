def isSubsequence(a, b):
    stack = list(a)

    for i in range(len(b)):
        if len(stack) and stack[0] == b[i]:
            stack.pop(0)

    return not bool(len(stack))
