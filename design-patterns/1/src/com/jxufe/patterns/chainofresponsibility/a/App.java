package com.jxufe.patterns.chainofresponsibility.a;

import java.util.ArrayList;

//敏感词过滤
public class App {
    public static void main(String[] args) {
        Msg msg = new Msg("message", "<div> :) what the fuck!!! lianys.top </div>");
        System.out.println(msg);
        FilterChain f1 = new FilterChain()
                .add(new HTMLFilter())
                .add(new FaceFilter());

        FilterChain f2 = new FilterChain().add(new SensitiveFilter()).add(new URLFilter());
        f1.add(f2);
        f1.dofilter(msg);
        System.out.println(msg);
    }
}
class Msg {
    private String name;
    private String msg;

    public Msg(String name, String msg) {
        this.name = name;
        this.msg = msg;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "Msg{" +
                "name='" + name + '\'' +
                ", msg='" + msg + '\'' +
                '}';
    }
}

interface Filter {
    boolean dofilter(Msg msg);
}
class HTMLFilter implements Filter {
    @Override
    public boolean dofilter(Msg msg) {
        String m = msg.getMsg()
                .replace("<div>","[div]")
                .replace("</div>","[/div]");
        msg.setMsg(m);
        return true;
    }
}
class SensitiveFilter implements Filter {
    @Override
    public boolean dofilter(Msg msg) {
        String m = msg.getMsg().replace("fuck", "***");
        msg.setMsg(m);
        return false;  //敏感词过滤停止继续过滤
    }
}
class FaceFilter implements Filter {

    @Override
    public boolean dofilter(Msg msg) {
        String m = msg.getMsg().replace(":)", "^_^");
        msg.setMsg(m);
        return true;
    }
}
class URLFilter implements Filter {

    @Override
    public boolean dofilter(Msg msg) {
        String m = msg.getMsg().replace("lianys.top", "http://lianys.top");
        msg.setMsg(m);
        return true;
    }
}
class FilterChain implements Filter {

    private ArrayList<Filter> filters = new ArrayList<>();

    public FilterChain add(Filter filter) {
        filters.add(filter);
        return this;//返回自己，方便链式编程
    }

    @Override
    public boolean dofilter(Msg msg) {
        for (Filter filter : filters) {
            if(!filter.dofilter(msg)) return false;
        }
        return true;
    }
}
