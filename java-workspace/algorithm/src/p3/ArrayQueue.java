package p3;

public class ArrayQueue {
    private int size = 0; //队列真实大小
    private int start = 0; //取值时从哪里取
    private int end = 0;  //push 时从哪里加
    private Integer[] arr;

    public ArrayQueue(int initSize) {
        this.arr = new Integer[initSize];
    }
    public Integer peek(){
        if(size == 0) return null;
        return arr[size - 1];
    }
    public void push(Integer obj){
        if(size == arr.length) throw new ArrayIndexOutOfBoundsException("The queue is full");
        size ++;
        arr[end] = obj;
        end = end == arr.length - 1 ? 0 : end + 1;
    }
    public Integer poll(){
        if(size == 0) throw new ArrayIndexOutOfBoundsException("The queue is empty");
        int tmp = start;
        start = start == arr.length - 1 ? 0 : start + 1;
        size --;
        return arr[tmp];
    }
    public Integer getSize(){
        return this.size;
    }

    public static void main(String[] args) {
        ArrayQueue queue = new ArrayQueue(3);
        queue.push(1);
        queue.push(2);
        queue.push(3);
        System.out.println("size:" + queue.getSize());
        System.out.println(queue.peek());
        for (int i = 0; i < 3; i++) {
            System.out.println(queue.poll());
            System.out.println("size:" + queue.getSize());
        }
    }
}
