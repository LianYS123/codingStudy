package p2;

import org.junit.Test;

import java.util.Arrays;

public class Code_01_NetherlandsFlag {
    @Test
    public void test1(){
        int[] arr = {1,2,5,5,8,3,3,5,4,7};
        int[] boundary = partition(arr, 0, arr.length - 1, 5);
        System.out.println(Arrays.toString(arr));
        System.out.println(Arrays.toString(boundary));
    }
    //荷兰国旗问题
    public int[] partition(int[] arr, int L, int R, int num) {
        int less = L - 1;
        int more = R + 1;
        int cur = less + 1;
        while(cur < more){
            if(arr[cur] < num) {
                swap(arr, ++less, cur++);
            } else if(arr[cur] > num) {
                swap(arr, --more, cur);
            } else { // =num
                cur++;
            }
        }
        return new int[]{less+1,more-1};
    }

    public void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
