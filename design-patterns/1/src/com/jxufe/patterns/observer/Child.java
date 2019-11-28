package com.jxufe.patterns.observer;

import java.util.ArrayList;
import java.util.List;

public class Child {
    private boolean cry = false;
    private List<Observer> list = new ArrayList<>();

    public void add(Observer o) {
        list.add(o);
    }

    public void wakeup() {
        cry = true;
        System.out.println("wuwuwuwu....");
        for(Observer o : list) {
            o.ActionOnWakeUp(new WakeUpEvent<>(this, System.currentTimeMillis()));
        }
    }
}
