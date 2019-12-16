package com.jxufe.patterns.proxy.statciproxy;

public class Client {
    public static void main(String[] args) {
        TeacherDao teacherDao = new TeacherDao();
        TeacherDaoProxy proxy = new TeacherDaoProxy(teacherDao);
        proxy.teach();
    }
}
