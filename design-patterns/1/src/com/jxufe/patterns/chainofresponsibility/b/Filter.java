package com.jxufe.patterns.chainofresponsibility.b;

public interface Filter {
    boolean doFilter(Request request, Response response, FilterChain chain);
}
