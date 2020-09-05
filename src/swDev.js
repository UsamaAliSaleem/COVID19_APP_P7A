export default function swDev(){
let swDev=`${process.env.PUBLIC_URL}/sw.js`
navigator.serviceWorker.register(swDev).then((result)=>{
    console.warn("result",result)
})
.catch((err)=>{

    console.log("error" , err)
})
}