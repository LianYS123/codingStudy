package p7;

public class TrieTree {
    public static class TrieNode {
        int path; //被经过了多少次
        int end; //有多少个字符串以这个节点结尾
        TrieNode[] nexts = new TrieNode[26];  //路，用于存放字符,假设只可能是a~z的字母
    }

    //前缀树
    public static class Trie {
        private TrieNode root = new TrieNode();

        public void insert(String str) {
            if (str == null) return;
            char[] chars = str.toCharArray();
            int index = 0;
            TrieNode node = root;
            for (int i = 0; i < chars.length; i++) {
                index = chars[i] - 'a'; //当前字符对应的路的索引
                if (node.nexts[index] == null) {
                    node.nexts[index] = new TrieNode(); //如果不存在，创建这条路
                }
                node = node.nexts[index]; //node 指向下一个
                node.path++;
            }
            node.end++;
        }
        public int search(String str){
            if(str == null) return 0;
            char[] chars = str.toCharArray();
            int index = 0;
            TrieNode node = root;
            for (int i = 0; i < chars.length; i++) {
                index = chars[i] - 'a'; //当前字符对应的路的索引
                if (node.nexts[index] == null) {
                    return 0;
                }
                node = node.nexts[index]; //node 指向下一个
            }
            return node.end;
        }
        public void delete(String str){
            if(search(str) == 0) return;
            char[] chars = str.toCharArray();
            int index = 0;
            TrieNode node = root;
            for (int i = 0; i < chars.length; i++) {
                index = chars[i] - 'a'; //当前字符对应的路的索引
                if (--node.nexts[index].path == 0) {
                    node.nexts[index] = null;
                    return;
                }
                node = node.nexts[index]; //node 指向下一个
            }
            node.end --;
        }
        public int prefixNumber(String pre){ //这棵树中以pre作为前缀的词的数量
            if(pre == null) return 0;
            char[] chars = pre.toCharArray();
            int index = 0;
            TrieNode node = root;
            for (int i = 0; i < chars.length; i++) {
                index = chars[i] - 'a'; //当前字符对应的路的索引
                if (node.nexts[index] == null) {
                    return 0;
                }
                node = node.nexts[index]; //node 指向下一个
            }
            return node.path;
        }
    }

    public static void main(String[] args) {
        Trie trie = new Trie();
        trie.insert("abc");
        trie.insert("def");
        trie.insert("abcde");
        trie.insert("cdefg");
        trie.insert("abc");
        trie.insert("abc");
        System.out.println(trie.search("abc"));
//        System.out.println(trie.prefixNumber("cde"));
        trie.delete("abc");
        System.out.println(trie.search("abc"));
    }

}
