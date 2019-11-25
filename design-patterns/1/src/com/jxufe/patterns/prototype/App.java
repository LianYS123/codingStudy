package com.jxufe.patterns.prototype;

import java.io.*;
import java.util.Date;

class User implements Cloneable,Serializable {
    private String username;
    private String password;
    private Date birth;

    public User(String username, String password, Date birth) {
        this.username = username;
        this.password = password;
        this.birth = birth;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", birth=" + birth +
                '}';
    }

    @Override
    public User clone() throws CloneNotSupportedException { //重写这个方法完成深克隆
        User user = null;

        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream(); //写入内存的流
            ObjectOutputStream oos = new ObjectOutputStream(out);
            oos.writeObject(this);
            byte[] bb = out.toByteArray();
            ByteArrayInputStream in = new ByteArrayInputStream(bb);

            ObjectInputStream ois = new ObjectInputStream(in);
            user = (User)ois.readObject();
            ois.close();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return user;
    }
}

public class App {
    public static void main(String[] args) throws CloneNotSupportedException {
        User user = new User("lian","123456",new Date());
        User clone = user.clone();
        clone.getBirth().setTime(0);
        System.out.println(user);
        System.out.println(clone);
    }
}
