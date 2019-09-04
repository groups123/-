// import { getajax } from "./ajax.js";
$(function(){
    Promise.all([
        $.ajax({
          url: "http://10.1.0.52:8000/zhuhongbao/BigArtType/",
          type: "get",
          dataType: "json"
        }),
        $.ajax({
          url: "http://10.1.0.52:8000/zhuhongbao/BigArtTypeModel/",
          type: "get",
          dataType: "json"
        })
      ]).then(
        resolve => {
          console.log(resolve);
        },
        reject => {
          console.log(reject);
        }
      );
    

})
