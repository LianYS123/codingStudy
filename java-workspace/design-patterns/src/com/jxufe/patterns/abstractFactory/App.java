package com.jxufe.patterns.abstractFactory;

// 用户扩展...
class TecentXYJ implements IXYJ {
    @Override
    public void run() {
        System.out.println("腾讯洗衣机");
    }
}
class TecentDBX implements IDBX {
    @Override
    public void run() {
        System.out.println("腾讯电冰箱");
    }
}
class TecentDSJ implements IDSJ {
    @Override
    public void run() {
        System.out.println("腾讯电视机");
    }
}
class TecentFactory implements Factory {

    @Override
    public IXYJ getXYJ() {
        return new TecentXYJ();
    }

    @Override
    public IDBX getDBX() {
        return new TecentDBX();
    }

    @Override
    public IDSJ getDSJ() {
        return new TecentDSJ();
    }
}

public class App {
    public static void main(String[] args) {
        //海尔产品
        Factory haierFactory = new HaierFactory();
        haierFactory.getDBX().run();
        haierFactory.getDSJ().run();
        haierFactory.getXYJ().run();
        System.out.println("----------------------------");
        //美的产品
        Factory meidiFactory = new MeiDiFactory();
        meidiFactory.getDBX().run();
        meidiFactory.getDSJ().run();
        meidiFactory.getXYJ().run();

        //腾讯产品
        System.out.println("---------------------------");
        TecentFactory tecentFactory = new TecentFactory();
        tecentFactory.getDBX().run();
        tecentFactory.getDSJ().run();
        tecentFactory.getXYJ().run();
    }
}
