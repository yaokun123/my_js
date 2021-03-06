var BinarySearchTree = function(){
    //属性
    this.root = null;
};
var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
};

BinarySearchTree.prototype = {
    'insert':function (key) {
        //1、根据key创建节点
        var newNode = new Node();
        newNode.key = key;

        //2、判断根节点是否有值
        if(this.root == null){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    },
    'insertNode':function(node,newNode){
        if(newNode.key < node.key){//向左查找
            if(node.left == null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode);
            }
        }else{//向右查找
            if(node.right == null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode);
            }
        }
    },
    //先序遍历
    /**
     * 1、访问根结点
     * 2、先序遍历其左子树
     * 3、先序遍历其右子树
     */
    'preOrderTraversal':function (handler) {
        this.preOrderTraversalNode(this.root,handler);
    },
    'preOrderTraversalNode':function (node,handler) {
        if(node != null){
            //1、处理经过的节点
            handler(node.key);

            //2、处理经过节点的左子节点
            this.preOrderTraversalNode(node.left,handler);

            //3、处理经过节点的右子节点
            this.preOrderTraversalNode(node.right,handler);
        }
    },

    //中序遍历
    /**
     * 1、中序遍历其左子树
     * 2、访问根节点
     * 3、中序遍历其右子树
     */
    'midOrderTraversal':function (handler) {
        this.midOrderTraversalNode(this.root,handler)
    },
    'midOrderTraversalNode':function (node,handler) {
        if(node !== null){
            //1、处理左子树最中的节点
            this.midOrderTraversalNode(node.left,handler);

            //2、处理节点
            handler(node.key);

            //3、处理右子树中的节点
            this.midOrderTraversalNode(node.right,handler)
        }
    },

    //后序遍历
    /**
     * 1、后序遍历其左子树
     * 2、后序遍历其右子树
     * 3、访问根节点
     */
    'postOrderTraversal':function (handler) {
        this.postOrderTraversalNode(this.root,handler)
    },
    'postOrderTraversalNode':function (node,handler) {
        if(node != null){
            this.postOrderTraversalNode(node.left,handler);
            this.postOrderTraversalNode(node.right,handler);
            handler(node.key);
        }
    },
    //最小值
    'min':function () {
        var node = this.root;
        var current = null;
        while (node != null){
            current = node;
            node = node.left;
        }
        return current.key;
    },
    //最大值
    'max':function () {
        var node = this.root;
        var current = null;
        while (node != null){
            current = node;
            node = node.right;
        }
        return current.key;
    },
    //搜索特定的值（递归实现）
    'search':function(key){
        return this.searchNode(this.root,key)
    },
    'searchNode':function (node,key) {
        if(node != null){
            if(node.key>key){
                return this.searchNode(node.left,key);
            }else if(node.key<key){
                return this.searchNode(node.right,key);
            }else{
                return true;
            }
        }
        return false;
    },
    //搜索特定的值（循环实现）
    'searchFor':function (key) {
        var node = this.root;
        while (node != null){
            if(node.key > key){
                node = node.left;
            }else if(node.key < key){
                node = node.right;
            }else {
                return true;
            }
        }
        return false;
    },
    //删除
    /**
     * 1、先找到要删除的节点，如果没有找到不需要删除
     * 2、找到要删除的节点
     *  -》1，删除叶子节点
     *  -》2，删除只有一个子节点的节点
     *  -》3，删除有两个子节点的节点
     */
    'remove':function (key) {
        //1、寻找到要删除的节点
        var current = this.root;
        var parent = null;
        var isLeftChild = true;

        while (current!=null){

            if(current.key > key){//向左找
                parent = current;
                isLeftChild = true;
                current = current.left;
            }else if(current.key < key){//向右找
                parent = current;
                isLeftChild = false;
                current = current.right;
            }else{
                //2、根据对应的情况删除节点

                if(current.left == null && current.right == null){//第一种情况：删除叶子节点
                    if(current == this.root){
                        this.root = null;
                    }else{
                        if(isLeftChild){
                            parent.left = null;
                        }else {
                            parent.right = null;
                        }
                    }
                }else if(current.left==null || current.right == null){//第二种情况：删除只有一个子节点的节点
                    var tmp = current.left!=null ? current.left : current.right;
                    if(current == this.root){
                        this.root = tmp;
                    }else{
                        if(isLeftChild){
                            parent.left = tmp;
                        }else{
                            parent.right = tmp;
                        }
                    }
                }/*else if(current.left !=null && current.right!=null){
                        //第三种情况:删除有两个子节点的节点

                        //寻找前驱
                        var result = this.findLeftOfRightNode(current,parent);
                        var preNode = result['current'];
                        var preNodeParent = result['parent'];
                        if(current == this.root){
                            //如果前驱有左节点，需要处理左节点
                            if(preNode.left != null){
                                if(this.root.left == preNode){
                                    preNode.right = this.root.right;
                                    this.root = preNode;
                                }else {
                                    preNode.left = this.root.left;
                                    preNode.right = this.root.right;
                                    this.root = preNode;
                                    preNodeParent.right = preNode.left;
                                }
                            }else{
                                if(this.root.left == preNode){
                                    preNode.right = this.root.right;
                                    this.root = preNode;
                                }else{
                                    preNode.left = this.root.left;
                                    preNode.right = this.root.right;
                                    this.root = preNode;
                                }
                            }
                        }else{
                            if(preNode.left != null){
                                if(current.right!=preNode){
                                    preNode.right = current.right;
                                }

                                var tmp = preNode;
                                while (tmp.left != null){
                                    tmp = tmp.left;
                                }

                                tmp.left = current.left;
                                //console.log(tmp.left.left)
                                preNodeParent.right = null;

                                if(isLeftChild){
                                    parent.left = preNode;
                                }else{
                                    parent.right = preNode;
                                }
                            }else{
                                preNode.left = current.left;
                                if(current.right!=preNode){
                                    preNode.right = current.right;
                                }
                                preNodeParent.right = null;
                                if(isLeftChild){
                                    parent.left = preNode;
                                }else{
                                    parent.right = preNode;
                                }
                            }
                        }
                    }*/
                else if(current.left !=null && current.right!=null){
                    //1、获取后继节点
                    var successor = this.findRightOfLeftNode(current);

                    //2、判断是否根节点
                    if(current == this.root){
                        this.root = successor;
                    }else if(isLeftChild){
                        parent.left = successor;
                    }else {
                        parent.right = successor;
                    }

                    //3、将删除节点的左子树 = current.left
                    successor.left = current.left;
                }
                return true;
            }
        }
        return false;
    },
    //寻找左子树的右节点（前驱）
    'findLeftOfRightNode':function (node,parent) {
        //先找左子树
        var current = node.left;

        //再找左子树的右子树
        while (current.right != null){
            parent = current;
            current = current.right;
        }
        return {'current':current,'parent':parent};

    },
    //寻找右子树的左节点（后继）
    'findRightOfLeftNode':function (delNode) {
        //1、定义变量，保存找到的后继
        var successor = delNode;
        var current = delNode.right;
        var successorParent = delNode;

        //2、循环查找
        while (current != null){
            successorParent = successor;
            successor = current;
            current = current.left;
        }

        //3、判断寻找的后继节点是否直接就是delNode得right节点
        if(successor != delNode.right){
            successorParent.left = successor.right;
            successor.right = delNode.right;
        }
        return successor;
    }
};