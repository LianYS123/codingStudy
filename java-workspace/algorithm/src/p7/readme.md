前缀树：
将字符串加到树里，从头节点开始看有没有可以重复的路，有就复用，没有就新建
字符是用路表示的，而不是节点
每一个节点上加上两个数据项：有多少个字符串是以他结尾的、每个节点被经过几次
贪心算法（英语：greedy algorithm），又称贪婪算法，
是一种在每一步选择中都采取在当前状态下最好或最优（即最有利）的选择，从而希望导致结果是最好或最优的算法。

要保证排序结果正确，定义的比较策略必须有传递性：a > b 且 b > c 一定能推出a > c