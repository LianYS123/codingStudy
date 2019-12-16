package com.jxufe.patterns.builder;

public class Computer {
    private String cpu;
    private String hd; //硬盘
    private String memery;  //内存

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public void setHd(String hd) {
        this.hd = hd;
    }

    public void setMemery(String memery) {
        this.memery = memery;
    }

    @Override
    public String toString() {
        return "Computer{" +
                "cpu='" + cpu + '\'' +
                ", hd='" + hd + '\'' +
                ", memery='" + memery + '\'' +
                '}';
    }
}
