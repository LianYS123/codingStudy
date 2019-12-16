package com.jxufe.patterns.composite;

import java.util.ArrayList;
import java.util.List;

public class BranchNode extends Node {
    private String name;
    private List<Node> nodes = new ArrayList<>();

    public BranchNode(String name) {
        this.name = name;
    }

    public void add(Node n) {
        nodes.add(n);
    }

    public List<Node> getNodes() {
        return nodes;
    }

    @Override
    public void print() {
        System.out.println(name);
    }
}
