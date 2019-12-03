package enum_annotation;

public class EnumTest1 {
    public static void main(String[] args) {
        Season1 spring = Season1.SPRING;
        System.out.println(spring);
        System.out.println(spring.getClass().getSuperclass());
    }
}
enum Season1 {
    //public static final Season SPRING = new Season("春天","春暖花开");枚举类简化
    SPRING("春天","春暖花开"),
    SUMMER("夏天","夏日炎炎"),
    AUTUMN("秋天","秋高气爽"),
    WINTER("冬天","冰天雪地");
    private final String seasonName;
    private final String seasonDesc;

    Season1(String seasonName, String seasonDesc) {
        this.seasonName = seasonName;
        this.seasonDesc = seasonDesc;
    }

    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }
    //不用重写toString方法，默认父类是Enum类
}
