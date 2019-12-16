package p1;

import org.junit.Test;

import java.util.Arrays;

public class Code_03_InsertionSort {
    @Test
    public void test1(){
        int arr[] = {1,3,7,9,22,6,8,4};
        selectionSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    //插入排序，O(N^2):实际时间和数据状况有关系
    public void selectionSort(int[] arr){
        if(arr == null || arr.length < 2) return;
        for(int i = 1; i < arr.length; i++) { //已经排好序的数的后一个数：即将要排序的数
            for(int j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j --) { //要排序的数：
                swap(arr,j,j+1);
            }
        }
    }
    public void swap(int[] arr, int i, int j){
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
