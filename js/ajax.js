function getajax(type,url,data,token){
    return Promise.all([
        $.ajax({
            url:'http://10.1.0.52:8000/'+url,
            type:type,
            data:data,
            headers:{'Authorization':'Bearer'+token},
        })])}

        export { getajax }