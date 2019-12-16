package p2;

import org.junit.Test;

import java.util.Arrays;

//快排的额外空间复杂度：O(logN),事件时间复杂度：O(N*logN)
public class Code_02_QuickSort {
    @Test
    public void test(){
        int[] arr = {1,2,5,5,8,3,3,5,4,7};
        quickSort(arr,0,arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
    public void quickSort(int[] arr, int L, int R){
        if(L < R){
            int[] p = partition(arr, L, R);  //对以最后一位数组进行划分
            quickSort(arr, L, p[0] - 1);//划分后的两部分都继续划分
            quickSort(arr,p[1] + 1,R);//
        }
    }
    public int[] partition(int[] arr, int L, int R) {
        int less = L - 1;
        int more = R + 1;
        int cur = less + 1;
        int num = L + (int)(Math.random() * (R - L + 1)); //随机快排
        while(cur < more){
            if(arr[cur] < arr[num]) {
                swap(arr, ++less, cur++);
            } else if(arr[cur] > arr[num]) {
                swap(arr, --more, cur);
            } else {
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
