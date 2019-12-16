package p3;

public class MinStack {
    private ArrayStack stack;
    private ArrayStack minStack;
    public MinStack(Integer initSize) {
        stack = new ArrayStack(initSize);
        minStack = new ArrayStack(initSize);
    }
    public void push(int obj){
        stack.push(obj);
        Integer curMin = minStack.peek();
        Integer min = curMin == null || obj < curMin ? obj : curMin;
        minStack.push(min);
    }
    public int pop(){
        minStack.pop();
        return stack.pop();
    }
    public Integer peek(){
        return stack.peek();
    }
    public Integer getMin(){
        return minStack.peek();
    }

    public static void main(String[] args) {
        MinStack stack = new MinStack(10);
        stack.push(3);
        stack.push(6);
        stack.push(4);
        stack.push(2);
        stack.push(6);
        stack.pop();
        stack.push(7);
        stack.push(4);
        stack.pop();
        stack.push(9);
        stack.pop();
        Integer min = stack.getMin();
        System.out.println(min);
        for (int i = 0; i < 5; i++) {
            System.out.print(stack.pop() + " ");
        }
    }
}
