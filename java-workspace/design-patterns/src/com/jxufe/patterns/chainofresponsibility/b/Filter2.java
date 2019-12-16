package com.jxufe.patterns.chainofresponsibility.b;

public class Filter2 implements Filter {
    @Override
    public boolean doFilter(Request request, Response response, FilterChain chain) {
        request.str += " RequestFilter2";
        System.out.println(2);
        chain.doFilter(request, response);
        response.str += " ResponseFilter2";
        System.out.println(3);
        return true;
    }
}
