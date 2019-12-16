package p2;

import org.junit.Test;

import java.util.Arrays;

public class Code_03_HeapSort {
    @Test
    public void test(){
        int[] arr = {-1, -5, -32, 59, 60, -5, 17, -9, 21, 93, -19, 72, -62, 32, 42, -20, 67, 0, 14, -13, -20, -18, 6, -15, -13, 2, -40, -60, -57, -18, -8, 27, 8, -6, 10, -80, 7, 68, -32, -21, -52, 4, 15, -5, 73, 53, -21, 80, -25, 25, -6, 8, -21, -12, 59, 29, -4, 8, -34, -39, -37, 4, 83, -39, -20, 56, 19, -1, 49, 49, -38, -80, -83, -7, -81, -50, -31, -7, 56, -10, 10, 18, -57, -25};
        heapSort(arr);
        System.out.println(Arrays.toString(arr));
    }
    public void heapSort(int[] arr){
        if(arr == null || arr.length < 2) return;
        //1.将数组调整为大根堆
        for (int i = 0; i < arr.length; i++) {
            heapInsert(arr,i);
        }
        //2.
        int heapSize = arr.length - 1;
        swap(arr,0, heapSize);
        while (heapSize > 0) {
            heapify(arr,0,heapSize);
            swap(arr,0,--heapSize);
        }
    }

    public void heapInsert(int[] arr, int index){ //一个新的数进入大根堆中，将自己调整到对应的位置
        while(arr[index] > arr[(index-1) / 2]){
            swap(arr,index,(index-1)/2);
            index = (index-1) / 2;
        }
    }
    //一个数变小了的调整过程
    public void heapify(int[] arr, int index, int heapSize){//heapSize:数组从0到heapSize已经形成了堆
        int left = 2 * index + 1;
        while(left < heapSize) {
            int largest = left;
            if(left + 1 < heapSize && arr[largest] < arr[left + 1] ) largest = left + 1;
            if(arr[index] > arr[largest]) largest = index;
            if(largest == index) break;
            swap(arr,index,largest);
            index = largest;
            left = 2 * index + 1;
        }
    }
    public void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
