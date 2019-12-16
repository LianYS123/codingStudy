package p4;

public class CirclePrintArray {

    public static void printCircle(int[][] arr){
        if(arr == null || arr.length == 0) return;

        int a = 0, b = 0, c = arr.length - 1, d = arr[0].length - 1;
        printEdge(arr,a,b,c,d);
        while(a <= c && b <= d) {
            a ++;
            b ++;
            c --;
            d --;
            printEdge(arr,a,b,c,d);
        }
    }

    public static void printEdge(int[][] arr, int a, int b, int c, int d){
        if(a == c) {
            for (int i = b; i <= d; i++) {
                System.out.print(arr[a][i] + "->");
            }
            return;
        }
        if(b == d ) {
            for (int i = a; i <= c; i++) {
                System.out.print(arr[i][d] + "->");
            }
            return;
        }
        for (int i = b; i < d; i++) {
            System.out.print(arr[a][i] + "->");
        }
        for (int i = a; i < c; i++) {
            System.out.print(arr[i][d] + "->");
        }
        for (int i = d; i > b; i--) {
            System.out.print(arr[c][i] + "->");
        }
        for (int i = c; i > a; i--) {
            System.out.print(arr[i][b] + "->");
        }
    }

    public static void main(String[] args) {
        int[][] arr = new int[5][6];
        for (int i = 0; i < 5; i++) {
            System.out.println();
            for (int j = 0; j < 6; j++) {
                arr[i][j] = (int)(Math.random() * 100 + 1);
                System.out.print(arr[i][j] + " ");
            }
        }
        System.out.println();
        printCircle(arr);
    }

}
