def removeDuplicates(s):
    stack = []

    i = 0

    while i < len(s):

        if len(stack) and stack[-1] == s[i]:
            stack.pop(-1)
        else:
            stack.append(s[i])

        i = i + 1
        print(i, stack)

    return "".join(stack)
