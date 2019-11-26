package com.jxufe.patterns.builder;

public class Director {
    Computer build(ComputerBuilder builder) {
        builder.setCpu();
        builder.setHd();
        builder.setMemery();
        return builder.build();
    }
}
