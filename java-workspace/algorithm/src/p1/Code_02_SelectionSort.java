package p1;

import org.junit.Test;
import java.util.Arrays;

public class Code_02_SelectionSort {
    @Test
    public void test1(){
        int arr[] = {1,3,7,9,22,6,8,4};
        selectionSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    //选择排序，O(N^2)
    public void selectionSort(int[] arr){
        if(arr == null || arr.length < 2) return;
        for(int i = 0; i < arr.length; i++) { //外层循环：最小的数
            int minIndex = i;
            for(int j = i; j < arr.length; j ++) {
                minIndex = arr[j] < arr[i] ? j : minIndex;
            }
            swap(arr,minIndex,i);
        }
    }
    public void swap(int[] arr, int i, int j){
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

}
