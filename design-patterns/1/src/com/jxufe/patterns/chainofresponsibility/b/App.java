package com.jxufe.patterns.chainofresponsibility.b;

public class App {
    public static void main(String[] args) {
        Request request = new Request();
        Response response = new Response();
        FilterChain chain = new FilterChain().add(new Filter1()).add(new Filter2());
        chain.doFilter(request,response);  //主程序第一次调用doFilter
        System.out.println(request.str);
        System.out.println(response.str);
    }
}
