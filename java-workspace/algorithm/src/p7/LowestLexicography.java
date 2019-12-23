package p7;

import java.util.Arrays;

//将所有字符串拼接起来，要求得到的结果字符串字典序最小
public class LowestLexicography {
    public static String lowestString(String[] strings){
        Arrays.sort(strings,(str1,str2) -> (str1 + str2).compareTo(str2 + str1));
        String res = "";
        for (int i = 0; i < strings.length; i++) {
            res += strings[i];
        }
        return res;
    }
}
