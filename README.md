
# Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.


Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` if `n` new flowers can be planted in the `flowerbed` without violating the no-adjacent-flowers rule and `false` otherwise.
##
### Running Tests

#### ***Example 1:***

*Input:* `flowerbed = [1,0,0,0,1], n = 1`

*Output:* `true`

*Explanation:*
- Before planting any flowers: `[1,0,0,0,1]` → 🌻🟫🟫🟫🌻
- After planting `n = 1` flower: `[1,0,1,0,1]` → 🌻🟫🌻🟫🌻
- *Bottom line: There is space to plant 1 flower without violating the no-adjacent-flowers rule. Therefore, the output is true.*

#### ***Example 2:***

*Input:* `flowerbed = [1,0,0,0,1], n = 1`

*Output:* `true`

*Explanation:*
- Before planting any flowers: `[1,0,0,0,1]` → 🌻🟫🟫🟫🌻
- After planting `n = 1` flower: `[1,0,1,0,1]` → 🌻🟫🌻🟫🌻
- *Bottom line: It is only possible to plant 1 flower without violating the no-adjacent-flowers rule. Therefore, the output is true.*

