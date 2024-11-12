
   <script type="text/javascript">
    function check(){
        var flag = true;
        var pass = document.getElementById("pass").value;
        for(var i = 0;i<pass.length;i++)
    {
        if((pass.charAt(i)<"0")||(pass.charAt(i)>"9")){
            flag = false;
            break;
        }
    }
    if(flag){
        alert("密码正确");
        window.location.href="1-1.html";}
        else
        alert("输入不合法！请重新输入");
    }
</script>
