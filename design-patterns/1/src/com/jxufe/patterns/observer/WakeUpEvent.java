package com.jxufe.patterns.observer;

public class WakeUpEvent<T> {
    private T source;
    private long time;

    public WakeUpEvent(T source, long time) {
        this.source = source;
        this.time = time;
    }

    public T getSource() {
        return source;
    }

    public void setSource(T source) {
        this.source = source;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }
}
