package p1;

import org.junit.Test;
import java.util.Arrays;

public class Code_01_BubbleSort {
    @Test
    public void test1(){
        int testTime = 50000;
        int value = 100;
        int size = 10;
        boolean success = true;
        for (int i = 0; i < testTime; i++) {
            int[] arr = generateRandomArray(size, value);
            int[] arr1 = copyArray(arr);
            int[] arr2 = copyArray(arr);
            bubbleSort(arr1);
            rightMethod(arr2);
            if(!isEqual(arr1,arr2)) {
                System.out.println(arr);
                System.out.println(arr1);
                System.out.println(arr2);
                break;
            }
        }
        System.out.println(success ? "成功" : "失败");
    }

    @Test
    public void test2(){
        int[] array = generateRandomArray(100, 1000);
        System.out.println(Arrays.toString(array));
        System.out.println(array.length);
    }
    //冒泡排序，O(N^2)
    public void bubbleSort(int[] arr){
        if(arr == null || arr.length < 2) return;
        for(int end = arr.length - 1; end > 0; end --) {
            for(int i = 0; i < end; i++) {
                if(arr[i] > arr[i + 1]) swap(arr,i,i+1);
            }
        }
    }
    public void swap(int[] arr, int i, int j){
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    //一下是对数器代码辅助函数
    public int[] copyArray(int[] arr){
        if(arr == null) return null;
        int[] arr1 = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            arr1[i] = arr[i];
        }
        return arr1;
    }

    public int[] generateRandomArray(int size, int value) {
        int[] arr = new int[(int) (Math.random() * (size + 1))];
        for(int i = 0; i < arr.length; i ++) {
            arr[i] = (int) ((value + 1) * Math.random()) - (int) (value * Math.random());
        }
        return arr;
    }
    public void rightMethod(int[] arr){
        Arrays.sort(arr);
    }
    public boolean isEqual(int[] arr1, int[] arr2){
        if(arr1 == null && arr2 == null) return true;
        if(arr1 == null && arr2 != null) return false;
        if(arr1 != null && arr2 == null) return false;
        if(arr1.length != arr2.length) return false;
        for (int i = 0; i < arr1.length; i++) {
            if(arr1[i] != arr2[i]) return false;
        }
        return true;
    }

}
