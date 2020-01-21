function changeState(isChecked){
  var checkpoint = document.getElementsByTagName("input");
      for(var i = 0; i<checkpoint.length; i++){
        if(checkpoint[i].type=="checkbox"){
           checkpoint[i].checked=isChecked;}}
        };

$(document).ready(function(){
  $("input[name='item']").change(function(){
    var checkeditems = $("input[name='item']:checked");
    var items = [];
    for(var i = 0; i<checkeditems.length; i++) {
      items.push(checkeditems[i].value);
    }
    $("#itemlist").val(items.join(" && "));

  });
  

  $("#copyBtn").click(function() {
    var copyText = document.getElementById("itemlist");
    copyText.select();
    document.execCommand("Copy");
    alert("已复制代码：" + copyText.value);
  });
});
  