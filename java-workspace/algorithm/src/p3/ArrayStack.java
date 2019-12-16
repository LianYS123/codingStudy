package p3;

public class ArrayStack {
    private int size;
    private Integer[] arr;
    public ArrayStack(Integer initSize){
        this.arr = new Integer[initSize];
        size = 0;
    }
    public void push(int obj){
        if(size == arr.length) throw new IndexOutOfBoundsException("The stack is full");
        arr[size ++] = obj;
    }
    public int pop(){
        if(size == 0) throw new ArrayIndexOutOfBoundsException("The stack is empty");
        return arr[-- size];
    }
    public Integer peek(){
        if(size == 0) return null;
        return arr[size - 1];
    }

    public static void main(String[] args) {
        ArrayStack stack = new ArrayStack(3);
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println(stack.peek());
        for (int i = 0; i < 3; i++) {
            System.out.println(stack.pop());
        }
    }
}
