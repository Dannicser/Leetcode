# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

def maxProfit(arr):
    min_price = float('inf')
    max_profit = float('-inf')

    for i in range(len(arr)):
        min_price = min(min_price, arr[i])
        max_profit = max(arr[i]-min_price, max_profit)

    return max_profit
