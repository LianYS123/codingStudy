package java8.optional;

public class Boy {
    private String name;
    private Girl girl;

    public Boy(String name, Girl girl) {
        this.name = name;
        this.girl = girl;
    }

    public Boy(String name) {
        this.name = name;
    }

    public Boy(Girl girl) {
        this.girl = girl;
    }

    public Boy() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Girl getGirl() {
        return girl;
    }

    public void setGirl(Girl girl) {
        this.girl = girl;
    }

    @Override
    public String toString() {
        return "Boy{" +
                "name='" + name + '\'' +
                ", girl=" + girl +
                '}';
    }
}
