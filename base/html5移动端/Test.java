public class Test {
    public static int helper(int[] arr){
        int sum1 = arr[0] + arr[1] + arr[2] + arr[3];
        int sum2 = arr[4] + arr[5] + arr[6] + arr[7]; 
        if(sum1 > sum2) return 1;
        if(sum1 < sum2) return -1;
        return 0;
    }
    public static int ballNum(int[] arr){
        int a1[] = new int[8];
        a1[0] = arr[0];
        a1[1] = arr[1];
        a1[2] = arr[7];
        a1[3] = arr[9];
        a1[4] = arr[3];
        a1[5] = arr[4];
        a1[6] = arr[6];
        a1[7] = arr[10];

        int a2[] = new int[8];
        a2[0] = arr[2];
        a2[1] = arr[5];
        a2[2] = arr[6];
        a2[3] = arr[10];
        a2[4] = arr[1];
        a2[5] = arr[3];
        a2[6] = arr[4];
        a2[7] = arr[11];

        int a3[] = new int[8];
        a3[0] = arr[4];
        a3[1] = arr[8];
        a3[2] = arr[9];
        a3[3] = arr[10];
        a3[4] = arr[5];
        a3[5] = arr[6];
        a3[6] = arr[7];
        a3[7] = arr[11];

        int a = helper(a1);
        int b = helper(a2);
        int c = helper(a3);
        return Math.abs(c * 9 + b * 3 + a);
    }
    public static void main(String[] args){
        // 球编号1-12号,按以下编号称三次
        // a.1 2 8 10 T 4 5 7 11 (左重a=1,平衡a=0,左轻a=-1)
        // b.3 6 7 11 T 2 4 5 12 (左重b=1,平衡b=0,左轻b=-1)
        // c.5 9 1011 T 6 7 8 12 (左重c=1,平衡c=0,左轻c=-1)
        // 异常球编号为|c*9+b*3+a|

        int[] arr = {1,1,1,1, 1,1,1,1, 1,1,0,1};
        System.out.println(ballNum(arr));
    }
}