package com.jxufe.patterns.proxy.dynamic;

public class TeacherDao implements ITeacherDao {
    @Override
    public void teach() {
        System.out.println("start teaching...");
    }
}
