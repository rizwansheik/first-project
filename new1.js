      function main(){
          var a = document.getElementsByTagName('button');
      for(var i = 0;i<a.length;i++)
      {
            a[i].onclick =function(){
                for(var j=0;j<a.length;i++){
                    a[j].style.backgroundColor = "";
                }
               this.style.backgroundColor = "red";
            }
      }
    }