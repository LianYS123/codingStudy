package com.jxufe.patterns.proxy.statciproxy;

public class TeacherDaoProxy implements ITeacherDao {
    private ITeacherDao teacherDao;

    public TeacherDaoProxy(ITeacherDao teacherDao) {
        this.teacherDao = teacherDao;
    }

    @Override
    public void teach() {
        System.out.println("开始代理");
        teacherDao.teach();
        System.out.println("结束代理");
    }
}
