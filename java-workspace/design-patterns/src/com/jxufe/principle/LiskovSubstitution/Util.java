package com.jxufe.principle.LiskovSubstitution;

public class Util {
    //长方形变形方法
    public static void transform(Rectangle rec){
        while(rec.getWidth() >= rec.getHeight()) { //当高比宽大小或相等时，让高加1
            rec.setHeight(rec.getWidth() + 1);
            System.out.println(rec);
        }
    }
}
