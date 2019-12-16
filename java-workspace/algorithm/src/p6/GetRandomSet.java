package p6;

import java.util.HashMap;
import java.util.Map;

public class GetRandomSet {
    private Map<String,Integer> map1 = new HashMap<>();
    private Map<Integer,String> map2 = new HashMap<>();
    private int size;
    public void add(String value){
        if(map1.containsKey(value)) return;
        map1.put(value,size);
        map2.put(size,value);
        size ++;
    }
    public void remove(String value){
        if(!map1.containsKey(value)) return;
        int deleteIndex = map1.get(value);
        int lastIndex = --size;
        String lastValue = map2.get(lastIndex);
        map1.put(lastValue,deleteIndex);
        map2.put(deleteIndex,lastValue);
        map1.remove(value);
        map2.remove(lastIndex);
    }
    public String getRandom(){
        return map2.get( (int)(Math.random() * size) );
    }

    public static void main(String[] args) {
        GetRandomSet set = new GetRandomSet();
        set.add("abc");
        set.add("def");
        set.add("ghi");
        set.remove("abc");
        set.add("hahaha");
        System.out.println(set.getRandom());
    }
}
