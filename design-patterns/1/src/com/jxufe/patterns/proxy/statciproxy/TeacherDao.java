package com.jxufe.patterns.proxy.statciproxy;

public class TeacherDao implements ITeacherDao {
    @Override
    public void teach() {
        System.out.println("start teaching...");
    }
}
