var request=require('request')
async function sear(question,options)
{
    var res=await request('https://google.co.in/?search='+question);
    res=[]
    for(let each of options)
    {
        res.push(res.search(each))
    }
    return res.sort()[0]
}