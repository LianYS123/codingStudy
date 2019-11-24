package demos.findSameWords;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.*;

public class App {
    public static void main(String[] args) throws Exception {
        String str1 = loadFileToString("E:\\Temp\\1.txt");
        String[] words1 = getWords(str1);
        System.out.println("words1:"+Arrays.toString(words1));

        String str2 = loadFileToString("E:\\Temp\\2.txt");
        String[] words2 = getWords(str2);
        System.out.println("words2"+Arrays.toString(words2));

        String[] sameWords = getSameWords(words1, words2);
        System.out.println("sameWords"+Arrays.toString(sameWords));


    }

    public static String[] getSameWords(String[] arr1, String[] arr2){
        List<String> list1 = new ArrayList<>(Arrays.asList(arr1));
        List<String> list2 = new ArrayList<>(Arrays.asList(arr2));
        list1.retainAll(list2); //返回两个集合的交集
        HashSet<String> set = new HashSet<>(list1); //去重

        return set.toArray(new String[] {}); //转化为数组并返回
    }

    private static String[] getWords(String str) {
        String[] words = str.split("[^a-zA-Z]+");
        return words;
    }

    private static String loadFileToString(String fileName) throws IOException {
        Reader reader = new FileReader(fileName);
        BufferedReader br = new BufferedReader(reader);
        StringBuilder builder = new StringBuilder("");
        String line = null;
        while((line = br.readLine()) != null){
            builder.append(line);
            builder.append(" ");
        }
        return builder.toString();
    }
}
