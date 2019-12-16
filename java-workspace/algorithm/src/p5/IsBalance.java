package p5;

import org.junit.Test;

class ReturnData{
    int h;
    boolean isB;

    public ReturnData(int h, boolean isB) {
        this.h = h;
        this.isB = isB;
    }
}

public class IsBalance {
    public static ReturnData isBalance(Node node){
        if(node == null) return new ReturnData(0,true);
        ReturnData left = isBalance(node.left);
        if(!left.isB) return new ReturnData(0,false);
        ReturnData right = isBalance(node.right);
        if(!right.isB) return new ReturnData(0,false);
        if(Math.abs(left.h - right.h) > 1) return new ReturnData(0,false);
        return new ReturnData(Math.max(left.h,right.h) + 1,true);
    }

    public static void main(String[] args) {

    }
}
