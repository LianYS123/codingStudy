package com.jxufe.patterns.composite;

public class App {
    public static void main(String[] args) {
        BranchNode root = new BranchNode("root");
        BranchNode dir1 = new BranchNode("dir1");
        BranchNode dir2 = new BranchNode("dir2");
        LeafNode leaf = new LeafNode("index.html");
        LeafNode leaf1 = new LeafNode("1.html");
        LeafNode leaf2 = new LeafNode("2.html");
        LeafNode leaf3 = new LeafNode("3.html");

        root.add(dir1);
        root.add(dir2);
        root.add(leaf);
        dir1.add(leaf1);
        dir1.add(leaf2);
        dir2.add(leaf3);

        print(root, 0);
    }
    public static void print(Node node, int depth) {
        for(int i = 0; i < depth; i ++){
            System.out.print("--");
        }
        node.print();
        if(node instanceof BranchNode) {
            for(Node n : ((BranchNode) node).getNodes()) {
                print(n, depth+1);
            }
        }
    }
}
