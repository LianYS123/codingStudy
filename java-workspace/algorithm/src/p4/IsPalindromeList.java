package p4;

class Node {
    public Node(int value) {
        this.value = value;
    }
    int value;
    Node next;
}
public class IsPalindromeList {
    //不使用额外空间判断一个链表是否是回文结构：
    public static boolean isPalindrome(Node head){
        Node n1 = head; // 快指针
        Node n2 = head; // 慢指针
        while(n1.next != null && n2.next != null && n2.next.next != null) {
            n1 = n1.next;
            n2 = n2.next.next;
        }
        n2 = n1.next;
        n1.next = null;
        Node tmp = null;
        while(n2.next != null) {
            tmp = n2.next;
            n2.next = n1;
            n1 = n2;
            n2 = tmp;
        }
        tmp = n1; //保存最后一个节点
        n1 = head;
        n2 = n1;
        boolean res = true;
        while(n1 != null && n2 != null) {
            System.out.println(n1.value+"---"+n2.value);
            if(n1.value != n2.value){
                res = false;
                break;
            }
            n1 = n1.next;
            n2 = n2.next;
        }
        n1 = tmp.next;
        tmp.next = null;
        while(n1 != null) {
            n2 = n1.next;
            n1.next = tmp;
            tmp = n1;
            n1 = n2;
        }
        return res;
    }

    public static void main(String[] args) {
        Node head = new Node(0);
        Node n = head;
        for (int i = 0; i < 5; i++) {
            n.next = new Node(0);
            n = n.next;
        }
        head.value = 1;
        head.next.value = 2;
        head.next.next.value = 3;
        head.next.next.next.value = 3;
        head.next.next.next.next.value = 2;
        head.next.next.next.next.next.value = 1;


        n = head;
        while (n != null) {
            System.out.print(n.value + "->");
            n = n.next;
        }
        System.out.println(isPalindrome(head));
        System.out.println();
        while (head != null) {
            System.out.print(head.value + "->");
            head = head.next;
        }
    }
}
