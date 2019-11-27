package com.jxufe.patterns.chainofresponsibility.b;

public class Filter1 implements Filter {

    @Override
    public boolean doFilter(Request request, Response response, FilterChain chain) {
        request.str += " RequestFilter1";
        System.out.println(1);
        chain.doFilter(request, response);
        response.str += " ResponseFilter1";
        System.out.println(4);
        return true;
    }
}
