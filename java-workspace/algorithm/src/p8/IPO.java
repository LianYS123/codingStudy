package p8;

import java.util.PriorityQueue;

class Project {
    int profit; //利润
    int cost;   //花费

    public Project(int profit, int cost) {
        this.profit = profit;
        this.cost = cost;
    }
}
//已知一个项目数组和利润数组，记录了做每个项目所需的利润，最多做k个项目，初始资金为w,
//求以最大利润做完所有项目后的资金
public class IPO {
    //w:初始资金, k: 最多做k个项目，profits:每个项目的利润数组， capital: 每个项目的花费数组
    //求以最大利润做完所有项目后的资金
    public static int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        Project[] projects = new Project[profits.length];
        //初始化projects
        for (int i = 0; i < profits.length; i++) {
            projects[i].cost = capital[i];
            projects[i].profit = profits[i];
        }
        //小根堆,最小花费在顶部，用来存放未解锁的项目
        PriorityQueue<Project> minCostQ = new PriorityQueue<>((p1, p2) -> p1.cost - p2.cost);
        //大根堆,最大利润在顶部，用来存放已解锁的项目
        PriorityQueue<Project> maxProfitQ = new PriorityQueue<>((p1, p2) -> p2.profit - p1.profit);
        //所有项目都未解锁，近大根堆
        for (int i = 0; i < projects.length; i++) {
            maxProfitQ.add(projects[i]);
        }

        //开始做项目
        for (int i = 0; i < k; i++) {
            //将所有能做的项目放入小根堆:解锁项目
            while (!minCostQ.isEmpty() && minCostQ.peek().cost <= w) {
                maxProfitQ.add(minCostQ.poll());
            }
            if (maxProfitQ.isEmpty()) {
                break;
            }
            //做大根堆中堆顶的项目，即已解锁的项目中利润最大的项目
            w += maxProfitQ.poll().profit; //更新现有资金
        }
        return w;
    }
}
