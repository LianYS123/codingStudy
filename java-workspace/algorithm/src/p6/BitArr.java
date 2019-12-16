package p6;

public class BitArr {
    public static void main(String[] args) {
        int arr[] = new int[1000]; //可以表示4 * 8 * 1000 = 32000个bit位
        int index = 30000; //要定位第30000个
        int intIndex = index / 32; //定位到哪个桶
        int bitIndex = index % 32; //定位到哪个bit
        arr[intIndex] = arr[intIndex] | (1 << bitIndex);
    }
}
