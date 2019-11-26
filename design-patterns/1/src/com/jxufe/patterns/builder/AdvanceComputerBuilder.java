package com.jxufe.patterns.builder;

public class AdvanceComputerBuilder extends ComputerBuilder {
    @Override
    public void setCpu() {
        computer.setCpu("i7");
    }

    @Override
    public void setHd() {
        computer.setHd("1T");
    }

    @Override
    public void setMemery() {
        computer.setMemery("16G");
    }

}
