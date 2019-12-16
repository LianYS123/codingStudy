package p3;

public class TwoQueuesStack {
    private ArrayQueue queue;
    private ArrayQueue help;

    public TwoQueuesStack(Integer initSize) {
        this.queue = new ArrayQueue(initSize);
        this.help = new ArrayQueue(initSize);
    }
    public void push(int obj){
        queue.push(obj);
    }
    public int pop(){
        while (queue.getSize() > 1) {
            help.push(queue.poll());
        }
        int res = queue.poll();
        swap();
        return res;
    }
    public Integer peek(){
        while (queue.getSize() > 1) {
            help.push(queue.poll());
        }
        Integer last = queue.poll();
        help.push(last);
        swap();
        return last;
    }
    private void swap(){
        ArrayQueue tmp = queue;
        queue = help;
        help = tmp;
    }

    public static void main(String[] args) {
        TwoQueuesStack stack = new TwoQueuesStack(3);
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println(stack.peek());
        for (int i = 0; i < 3; i++) {
            System.out.println(stack.pop());
        }
        stack.push(10);
        stack.push(20);
        stack.push(30);
    }
}
