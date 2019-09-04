// import { getajax } from './ajax';

function getajax(type,url,data,token){
    return Promise.all([
        $.ajax({
            url:'http://10.1.0.52:8000'+url,
            type:type,
            data:data,
            header:{'Authorization':'Bearer '+sessionStorage.token},
        })
    ])
}

// export {getajax};
 let url='/user_systems/login/';
    getajax('get',url,'').then(
    resolve=>{
        console.log(resolve); 
               
    //     if(resolve[0].code==200){
    //         console.log(data);
    //    }
    },
    // reject=>{
    //     console.log(reject);    
    // }
);
