package p2;

import org.junit.Test;

import java.util.Arrays;
public class Code_04_MaxGap {
    @Test
    public void test(){
        int[] arr = {-704, 57, -310, 820, 649, 10, 316, -587, -329, -42, -115, 558, 28, 297, -163, 375, -223, 128, 23, 185, 42, 280, -709, -573, 163, 158, 597, 209, -86, -493, 234, -450, -592, 168};
        System.out.println(maxGap(arr));
//        Arrays.sort(arr);
//        System.out.println(Arrays.toString(arr));
//        System.out.println();
    }
    public int maxGap(int[] arr){
        if(arr == null || arr.length < 2) return 0;
        int len = arr.length;
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < len; i++) {
            if(min > arr[i]) min = arr[i];
            if(max < arr[i]) max = arr[i];
        }
        if(max == min) return 0;

        boolean[] hasNum = new boolean[len + 1];
        int[] maxs = new int[len + 1];
        int[] mins = new int[len + 1];
        int bid = 0;
        for (int i = 0; i < len; i++) {
            bid = (arr[i] - min) * len / (max - min);
            maxs[bid] = hasNum[bid] ? ( Math.max(arr[i],maxs[bid]) ) : arr[i];
            mins[bid] = hasNum[bid] ? ( Math.min(arr[i],mins[bid]) ) : arr[i];
//            System.out.println(mins[bid]);
            hasNum[bid] = true;
        }
        int res = 0;
        int lastMax = maxs[0];
        for (int i = 1; i < len; i++) {
            if(hasNum[i]){
                res = Math.max(res, mins[i] -  lastMax);
                lastMax = maxs[i];
            }
        }
        return res;
    }
    //计算一个数应该进哪个桶
    public int bucket(int num, int len, int min, int max){
//        return num / ((max - min) / len);
        return (num - min) * len / (max - min);
    }

}
