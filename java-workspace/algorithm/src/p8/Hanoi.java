package p8;

//汉诺塔问题
public class Hanoi {
    //目前是1~n的问题，
    //三根杆子，开始时所有的东西都在from这根杆上
    //将所有东西移动到to这根杆上
    //每次只能挪动一个，大的必须在小的上面
    public static void hanoi(int n, String from, String to, String help){
        //如果只有一个元素，直接将它从from移动到to即可
        if(n == 1) {
            System.out.println(1 + from + "->" + to);
            return;
        }
        // 1.将n-1层挪到help这根杆上
        hanoi(n-1,from,help,to);
        // 2.将这最后一个挪到to上
        System.out.println(n + from + "->" + to);
        // 3.将help上的东西挪到to上
        hanoi(n-1,help,to,from);
    }
    public static void main(String[] args) {
        hanoi(3,"左","右","中");
    }
}
