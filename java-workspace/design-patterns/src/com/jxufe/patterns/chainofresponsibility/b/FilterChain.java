package com.jxufe.patterns.chainofresponsibility.b;

import java.util.ArrayList;
import java.util.List;

public class FilterChain {
    private List<Filter> filters = new ArrayList<>();
    private int index = 0;  //用来记录现在执行那个filter
    public FilterChain add(Filter filter) {
        filters.add(filter);
        return this;
    }
    public boolean doFilter(Request request, Response response) {
        if(index == filters.size()) return false;
        Filter f = filters.get(index);  //谁调用了我
        index ++; //执行完这个，执行下一个，将index指向下一个
        return f.doFilter(request, response,this); //将责任链传下去
    }
}
