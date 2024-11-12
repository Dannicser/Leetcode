# https://leetcode.com/problems/coin-change/description/

def coinChange(amount, coins):
    memo = {}

    def helper(amount, coins):
        if amount == 0:
            return 0

        if amount < 0:
            return float('inf')

        if amount in memo:
            return memo[amount]

        ret = float('inf')

        for c in coins:
            # на каждой итерации прибавляем один к результату, если опускаемся вниз по дереву
            # мы опускаемся вниз по дереву, вычитая все допустимые значения из начального amount
            # самая первая ветвь, которая будет 0, первая и вернет значение
            # 1+helper() - позволяет считать шаги вниз, которые в конечном итоге прибавятся к return 0
            ret = min(ret, 1+helper(amount-c, coins))
        memo[amount] = ret

        return ret

    ans = helper(amount, coins)

    return ans
