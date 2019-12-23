package p8;

//打印字符串所有子序列
public class PrintAllSub {
    public static void printAllSub(char[] str, int i, String res){
        if(str.length == i) { //i走到最后,即走完整个字符串
            System.out.println(res);
            return;
        }
        printAllSub(str,i + 1, res); //不要当前字符
        printAllSub(str,i + 1, res + String.valueOf(str[i])); //要当前字符
    }

    public static void main(String[] args) {
        printAllSub("abc".toCharArray(),0,"");
    }
}
