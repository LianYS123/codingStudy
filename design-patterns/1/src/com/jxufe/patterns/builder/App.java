package com.jxufe.patterns.builder;

class LowComputer extends ComputerBuilder {

    @Override
    public void setCpu() {
        computer.setCpu("i5");
    }

    @Override
    public void setHd() {
        computer.setHd("128G");
    }

    @Override
    public void setMemery() {
        computer.setMemery("4G");
    }
}

public class App {
    public static void main(String[] args) {
        Director director = new Director();
        Computer c1 = director.build(new AdvanceComputerBuilder());
        Computer c2 = director.build(new MiddleComputerBuilder());

        System.out.println(c1);
        System.out.println(c2);

        Computer c3 = director.build(new LowComputer());
        System.out.println(c3);
    }
}
