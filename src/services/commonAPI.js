
import axios from 'axios'
const commonAPI =async(httpMethod,url,reqBody)=>{
    const reqCongfig={
        method:httpMethod,
        url,
        data:reqBody,
        headers:{"Content-Type": "application/json"}
    }
    return await axios(reqCongfig).then((res)=>{
        return res
    }).catch((err)=>{
return err
    })
}
export default commonAPI