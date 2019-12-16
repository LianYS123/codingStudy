package p5;

import java.util.LinkedList;
import java.util.Queue;

public class IsCBT {
    //判断一棵树是否为完全二叉树
    public static boolean isCBT(Node node){
        Queue<Node> queue = new LinkedList<>();
        boolean leaf = false;
        queue.offer(node);
        while(!queue.isEmpty()){
            node = queue.poll();
            if((leaf && (node.left != null || node.right != null)) //开启阶段之后左右孩子有一个不为空
                    || (node.right != null && node.left == null)) { //右孩子不为空，左孩子为空
                return false;
            }
            if(node.left != null) {
                queue.offer(node.left);
            }
            if(node.right != null) {
                queue.offer(node.right);
            }
            if(node.left == null || node.right == null){
                leaf = true;
            }
        }
        return true;
    }
}
