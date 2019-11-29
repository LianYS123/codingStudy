package test;

import java.util.ArrayList;
import java.util.Arrays;
//24:4组*6人->12：2组*6人->1组*6人->前3
class Player {
    public Player(String name) {
        this.name = name;
    }
    String name;
    long score;
    @Override
    public String toString() {
        return "Player{" +
                "name='" + name + '\'' +
                ", score=" + score +
                '}';
    }
}
public class Main {
    public static Player[] six2three(Player[] group){
        ArrayList<Player> list = new ArrayList<>(); //零时取出数据
        //评委评分：
        for (Player player : group) {
            player.score = Math.round( Math.random() * 100 );
            list.add(player);
        }
        System.out.println(Arrays.toString(group));
        //选出最高的三个人
        Player[] result = new Player[3];
        for (int i = 0; i < 3; i++) {
            Player max = list.get(0);
            for (Player player : list) {
                if (max.score < player.score) max = player;
            }
            list.remove(max);
            result[i] = max;
        }
        return result;
    }
    public static ArrayList<Player[]> group(ArrayList<Player> players){ //将所有人以六人一组分组
        int n = players.size() / 6;
        //初始化groups
        ArrayList<Player[]> groups = new ArrayList<>();
        for(int i = 0; i < n; i ++){
            groups.add(new Player[6]);
        }
        //分组
        for(int i = 0; i < n; i ++){
            for(int j = 0; j < 6; j ++){
                groups.get(i)[j] = players.get(i * 6 + j); //
            }
        }
        return groups;
    }
    public static ArrayList<Player> initPlayer(int n){
        ArrayList<Player> players = new ArrayList<>();
        for(int i = 0; i < n; i++){
            players.add(new Player((i+1)+"号选手"));
        }
        return players;
    }
    public static ArrayList<Player> combine(ArrayList<Player[]> groups){
        ArrayList<Player> players = new ArrayList<>();
        for (Player[] group : groups) {
            Player[] res = six2three(group);
            System.out.println(Arrays.toString(res));
            System.out.println("----------------------");
            for (Player player : res) {
                players.add(player);
            }
        }
        return players;
    }
    public static ArrayList<Player> play(ArrayList<Player> players) {
        //选手分组
        ArrayList<Player[]> groups = group(players);
        //决出前三重新组合
        return combine(groups);
    }

    public static void main(String[] args) {
        ArrayList<Player> players = initPlayer(24); //选手初始化
        System.out.println("第一轮");
        ArrayList<Player> players1 = play(players);
        System.out.println("第二轮");
        ArrayList<Player> players2 = play(players1);
        System.out.println("第三轮");
        play(players2);
    }

    static void printGroup(ArrayList<Player[]> group){
        for (Player[] players : group) {
            System.out.println(Arrays.toString(players));
        }
    }
}
