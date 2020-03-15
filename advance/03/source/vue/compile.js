class Compile{
    constructor(el,vm){
        this.$el = document.querySelector(el);
        this.$vm = vm;
        if(this.$el){
            let fragment = this.node2fragment(this.$el);
            this.compile(fragment);
        }
    }
    node2fragment(el){
        let fragment = document.createDocumentFragment();
        let child;
        while(child = el.firstChild){
            fragment.appendChild(child);
        }
        return fragment;
    }
    compile(el){
        if(el && el.childNodes){
            let nodes = el.childNodes;
            [...nodes].forEach(node => {
                if(node.nodeType === 1) {
                    //元素节点
                    this.compileElement(node);
                }
                if(isInterpolation(node)){
                    //插值文本
                    this.compileText(node);
                }
                this.compile(node)  //递归
            })
        }
    }
    isInterpolation(node){
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
    }
    compileElement(el){

    }
    compileText(el){

    }
    update(){
        
    }
}