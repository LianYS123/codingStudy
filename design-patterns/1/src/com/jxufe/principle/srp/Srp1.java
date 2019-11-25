package com.jxufe.principle.srp;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.Reader;
import java.util.Arrays;

public class Srp1 {
    public static String loadFile(String path) throws Exception{
        Reader reader = new FileReader(path);
        BufferedReader br = new BufferedReader(reader);
        String line = null;
        StringBuilder str = new StringBuilder("");
        while(( line=br.readLine() ) != null){
            str.append(line);
            str.append(" ");
        }
        br.close();
        return str.toString();
    }
    public static String[] getWords(String str){
        return str.split("[^a-zA-Z]+");
    }
    public static void main(String[] args) throws Exception {
        String s = loadFile("E://hello.txt");
        String[] words = getWords(s);
        System.out.println(Arrays.toString(words));
        //单一职责原则：
        //一个方法只干一件事
    }
}
