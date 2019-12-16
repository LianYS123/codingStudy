package test;

public class MaxString {
    //查找最长子串
    public static String findMaxStr(String str1, String str2){
        String maxStr = str1.length() >= str2.length() ? str1 : str2;
        String minStr = str1.length() < str2.length() ? str1 : str2;
        int length = minStr.length();
        for (int i = 0; i < length; i++) { //i:去掉几个
            for(int x = 0, y = length - i; y < length; x ++, y ++){
                String subStr = minStr.substring(x,y);
                if(maxStr.contains(subStr)) return subStr;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        String maxStr = findMaxStr("abcdefg", "acdea");
        System.out.println(maxStr);
    }
}
