package com.jxufe.patterns.builder;

public class MiddleComputerBuilder extends ComputerBuilder {
    @Override
    public void setCpu() {
        computer.setCpu("i7");
    }

    @Override
    public void setHd() {
        computer.setHd("500G");
    }

    @Override
    public void setMemery() {
        computer.setMemery("8G");
    }
}
