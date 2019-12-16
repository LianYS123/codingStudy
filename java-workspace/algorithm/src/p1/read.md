时间复杂度：O(n)：常数操作数量的指标
不要低阶项，不要高阶项，不要高阶项系数
二分查找时间复杂度：O(logN) 
master公式
T(N) = a*T(N/b) + O(N^d)
1) log(b,a) > d  ->  O(N^log(b,a))
2) log(b,a) = d  ->  O(N^d * logN)
3) log(b,a) < d  ->  O(N^d)



