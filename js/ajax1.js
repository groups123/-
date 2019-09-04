
function getajax(){
    var mobile= sessionStorage.get('mobile');
    var password=sessionStorage.get('password')
    var putajax = getAjax('post', 'user_systems/login/', {mobile : mobile,password: password}, sessionStorage.access,fn);
    putajax.then(
        resolve => {
            if (resolve[0].code == 200){
                fn(resolve)
            }
            if (resolve[0].code == 601) {
                getAjax('post', 'api/token/refresh/', {
                    refresh: sessionStorage.refresh
                }).then(
                    resolve => {
                        sessionStorage.setItem('access', resolve[0].data.access);
                        getajax()
                    },
                    reject => {
                        console.log(reject)
                    }
                )
            }
            console.log(resolve);
        },
        reject => {
            console.log(reject);
        }
    )   
}
function getAjax(type, url, data,token,fn){
    return  Promise.all([
        $.ajax({
          url: 'http://10.2.2.7:8000/' + url,
          type: type,
          data:data,
          headers:{"Authorization":"Bearer " + token}  
        })
     ])
}

export { getAjax };
export { getajax }

