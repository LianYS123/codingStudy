package p1;

import org.junit.Test;

import java.util.Arrays;

public class Code_04_MergeSort {
    @Test
    public void test1(){
        int arr[] = {1,3,7,9,22,6,8,4};
        mergeSort(arr,0,arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
    //归并排序
    public void mergeSort(int[] arr,int L, int R){
        if(arr == null || arr.length < 2) return;
        if(L == R) return;
        int mid = L + ((R-L) >> 1);
        mergeSort(arr,L,mid);
        mergeSort(arr,mid+1,R);
        merge(arr,L,mid,R);
    }
    public void merge(int[] arr, int L, int mid, int R) {
        int i = 0;
        int p1 = L;
        int p2 = mid + 1;
        int[] help = new int[R - L + 1];
        while(p1 <= mid && p2 <= R){
            help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
        }
        while(p1 <= mid) {
            help[i++] = arr[p1 ++];
        }
        while(p2 <= R) {
            help[i++] = arr[p2 ++];
        }
        for(i = 0; i < help.length; i ++){
            arr[L+i] = help[i];
        }
    }
    public void swap(int[] arr, int i, int j){
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
