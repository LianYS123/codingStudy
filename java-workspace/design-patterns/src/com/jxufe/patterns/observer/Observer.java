package com.jxufe.patterns.observer;

public interface Observer {
    void ActionOnWakeUp(WakeUpEvent<Child> event);
}
