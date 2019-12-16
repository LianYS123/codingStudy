package com.jxufe.patterns.abstractFactory;

public class HaierFactory implements Factory {
    @Override
    public IXYJ getXYJ() {
        return new HaierXYJ();
    }

    @Override
    public IDBX getDBX() {
        return new HaierDBX();
    }

    @Override
    public IDSJ getDSJ() {
        return new HaierDSJ();
    }
}
