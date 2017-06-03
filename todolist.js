(function() {
  var i; /*index*/
  
  /*为每个li后面加上关闭按钮*/
  function closeBtn() {
    var myNodelist = document.getElementsByTagName("li");
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7"); /*unicode代码*/
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
  }

  /*点击关闭按钮，隐藏当前li*/
  function closeElement() {
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement; 
        div.style.display = "none";
      }
    }
  }/*删除功能的实现*/

  /*点击li的时候，加上.checked，再点击则取消*/
  function ifChecked() {
    var list = document.querySelector('ul');
    list.onclick = function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }
  }/*完成功能的实现*/

  
  /*点击添加时，创建一个新的ul*/
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("taskbox").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("别给自己增加空白任务噢~");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("taskbox").value = ""; /*清空输入*/
  }

 /* function changelist(element){
      var oldtext = element.innerHTML;
      var newobj = document.createElement('input');
      //创建新的input元素
      newobj.type = 'text';
      //为新增元素添加类型
      newobj.onblur = function(){
      element.innerHTML = this.value ? this.value : oldhtml;
      //当触发时判断新增元素值是否为空，为空则不修改，并返回原有值 
      }
      element.innerHTML = '';
      element.appendChild(newobj);
      newobj.focus();
  }


    Li.ondblclick=function{
      changelist();

  }大佬们。。。我真的写不来修改，试了好多种总有bug。。。。*/
   
  function initList() {   
    closeBtn();
    closeElement();
    ifChecked();
  }
  
  function init() {
    var addButton = document.getElementById("addButton"); 
    initList();

    /*var handler=function(event){
      switch(event.type){

        case"click":
        alert("添加成功！")；
        break；

        case"mouseover":
        event.target.style.backgroundColor="red";
        break；

        case"mousout":
        event.target.style.backgroundColor="white";
        break；

      }
    };
    */



    /*添加按钮点击时执行*/
    addButton.onclick = function() {
      alert("任务添加成功！一定要好好完成噢~♥♥");
      newElement();
      initList();
      handler();
     
    }

    /*addButton.onmouseover=handler();

    addButton.onmouseout=handler();
    */

    /*按回车时执行*/
    document.onkeydown = function(event) {
      if(event.keyCode == 13) {
        newElement();
        initList();
      }
    }
  }/*添加功能的实现*/




  init();

})();

/*//将添加的任务存储到localStorage  
    if (window.localStorage) {  
        localStorage.setItem("taskbox",document.getElementById("list").innerHTML);  
        } else {  
                Cookie.write("taskbox", document.getElementById("list").innerHTML);     
        }  
}  尝试着写了下存数据，还是失败了，这方面我确实没怎么学，以后会加强学习的*/ 