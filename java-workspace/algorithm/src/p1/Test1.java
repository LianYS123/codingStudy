package p1;

public class Test1 {
    public static void main(String[] args) {

    }
    //使用递归求数组中的最大值
    public static int getMax(int arr[], int l, int r){
        if(l == r) return arr[l];
        int mid = (l + r) / 2;
        int LeftMax = getMax(arr, l, mid);
        int RightMax = getMax(arr,mid+1,r);
        return Math.max(LeftMax,RightMax);
    }
}
