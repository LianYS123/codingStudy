package com.jxufe.principle.LiskovSubstitution;

public class Square extends Rectangle {
    private double sideLength;

    public Square(double width, double height) {
        super(width, height);
        this.sideLength = width;
    }
    @Override
    public double getWidth() {
        return this.sideLength;
    }

    @Override
    public void setWidth(double width) {
        this.sideLength = width;
    }

    @Override
    public double getHeight() {
        return this.sideLength;
    }

    @Override
    public void setHeight(double height) {
        this.sideLength = height;
    }

    @Override
    public String toString() {
        return "Square{" +
                "sideLength=" + sideLength +
                '}';
    }
}
