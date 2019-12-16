package p5;

import org.junit.Test;

import java.util.Stack;

class Node {
    int value;
    Node left;
    Node right;

    public Node(int value) {
        this.value = value;
    }
}

public class Recur {
    public void preOrderRecur(Node node){
        if(node == null) return;
        System.out.print(node.value + " ");
        preOrderRecur(node.left);
        preOrderRecur(node.right);
    }
    public void inOrderRecur(Node node){
        if(node == null) return;
        inOrderRecur(node.left);
        System.out.print(node.value + " ");
        inOrderRecur(node.right);
    }
    public void posOrderRecur(Node node){
        if(node == null) return;
        posOrderRecur(node.left);
        posOrderRecur(node.right);
        System.out.print(node.value + " ");
    }
    public void preOrderUnRecur(Node node){
        if(node == null) return;
        Stack<Node> stack = new Stack<>();
        stack.add(node);
        while(!stack.isEmpty()) {
            node = stack.pop();
            System.out.print(node.value + " ");  //弹出就打印
            //先压右，后压左
            if(node.right != null) stack.push(node.right);
            if(node.left != null)  stack.push(node.left);
        }
    }
    public void inOrderUnRecur(Node node){
        if(node == null) return;
        Stack<Node> stack = new Stack<>();
        while(node != null || !stack.isEmpty()) {
            if(node != null) {  //当前节点不为空，压入当前节点
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                System.out.print(node.value + " "); //弹出就打印
                node = node.right;
            }
        }
    }
    public void posOrderUnRecur(Node node){
        if(node == null) return;
        Stack<Node> stack = new Stack<>();
        Stack<Node> helper = new Stack<>();
        stack.add(node);
        while(!stack.isEmpty()) {
            node = stack.pop();
            helper.push(node);
            //先压右，后压左
            if(node.left != null)  stack.push(node.left);
            if(node.right != null) stack.push(node.right);
        }
        while(!helper.isEmpty()){
            System.out.print(helper.pop().value + " ");
        }
    }
    @Test
    public void test1(){
        Node node = init();
        preOrderRecur(node);
        System.out.println();
        preOrderUnRecur(node);
    }
    @Test
    public void test2(){
        Node node = init();
        inOrderRecur(node);
        System.out.println();
        inOrderUnRecur(node);
    }
    @Test
    public void test3(){
        Node node = init();
        posOrderRecur(node);
        System.out.println();
        posOrderUnRecur(node);
    }
    public Node init(){
        Node node = new Node((int) (Math.random() * 100));
        helper(node,2);
        return node;
    }
    public void helper(Node node,int deep){
        if(deep == 0) return;
        node.left = new Node((int) (Math.random() * 100));
        node.right = new Node((int) (Math.random() * 100));
        deep --;
        helper(node.left,deep);
        helper(node.right,deep);
    }

}
