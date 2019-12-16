package com.jxufe.patterns.builder;

public abstract class ComputerBuilder {
    protected Computer computer = new Computer();
    abstract void setCpu();
    abstract void setHd();
    abstract void setMemery();
    Computer build() {
        return computer;
    }
}
