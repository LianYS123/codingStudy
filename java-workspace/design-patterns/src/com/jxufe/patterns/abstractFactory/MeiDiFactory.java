package com.jxufe.patterns.abstractFactory;

public class MeiDiFactory implements Factory {
    @Override
    public IXYJ getXYJ() {
        return new MeiDiXYJ();
    }

    @Override
    public IDBX getDBX() {
        return new MeiDiDBX();
    }

    @Override
    public IDSJ getDSJ() {
        return new MeiDiDSJ();
    }
}
