var Drop=function(){
    this.render=function(){
        var container=document.getElementById("drop-head");
        var drop_tag=document.createElement("span");
        //设置三角形的class
        drop_tag.setAttribute("class","caret");
        var parent_ul=document.createElement("ul");
        parent_ul.setAttribute("class","nav");
        for(var i=0;i<this.setting.data.length;i++){
            var data=this.setting.data[i];
            var parent_li=document.createElement("li");
            parent_li.setAttribute("class","drop");
            var a=document.createElement("a");
            a.setAttribute("href",data.url);
            a.innerHTML=data.title;
            if(data.child){
                a.appendChild(drop_tag);

                parent_li.appendChild(a);
                //创建子ul
                var child_ul=document.createElement("ul");
                child_ul.setAttribute("class","nav-sub");
                for(var j=0;j<data.child.length;j++){
                    //加入到父li
                    var child_li=document.createElement("li");
                    var child_a=document.createElement("a");
                    child_a.setAttribute("href",data.child[j].url);
                    child_a.innerHTML=data.child[j].title;
                    child_li.appendChild(child_a);
                    child_ul.appendChild(child_li)
                }
                //把事件加上去
                a.onmousemove=function () {
                    child_ul.style.display="block";
                };
                parent_li.onmousemove=function () {
                    child_ul.style.display="block";
                };
                parent_li.onmouseout=function () {
                    child_ul.style.display="none";
                };
                parent_li.appendChild(child_ul);
            }else{
                parent_li.appendChild(a);
            }
            parent_ul.appendChild(parent_li);
        }
        container.appendChild(parent_ul);
    }
};