package p8;

public class Factorial {
    //用递归方法求n的阶层 n!
    public static long getFactorial(int n){
        if(n == 1) return 1;
        return (long) n * getFactorial(n - 1);
    }

    public static void main(String[] args) {
        long res = getFactorial(10);
        System.out.println(res);
    }
}
