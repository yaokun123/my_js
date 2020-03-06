import axios from 'axios'


export function request(config,success,failure ) {
  //1、创建axios的实例
  const instance = axios.create({
    baseURL:'',
    timeout:5000,
  })

  //发送真正的网络请求
  instance(config).then(res=>{
    console.log(res);
    success(res)
  }).catch(err=>{
    console.log(err);
    failure(err)
  })
}

export function request2(config) {
  return new Promise((resolve,reject)=>{
    //1、创建axios的实例
    const instance = axios.create({
      baseURL:'',
      timeout:5000,
    })

    //发送真正的网络请求
    instance(config).then(res=>{
      console.log(res);
      resolve(res)
    }).catch(err=>{
      console.log(err);
      reject(err)
    })
  })
}

export function request3(config) {
  //1、创建axios的实例
  const instance = axios.create({
    baseURL:'',
    timeout:5000,
  });


  //返回的就是promise
  return instance(config)
}
