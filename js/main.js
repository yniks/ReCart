
async function init()
{
   window.resp=await fetch("./%%%")
    resp=await resp.json();
    
    window.listView=document.createElement('div');
    listView.setAttribute('class',"polaroid-images container");
    listView.br1=document.createElement('br')
    listView.br2=document.createElement('br')
    listView.set=function(list)
    {
        if(!list)list=resp
        listView.innerHTML=""
        for(let each of list)
        {
            var a=document.createElement('a');
                a.title=each.name
                a.onclick=function()
                {
                    window.si=each
                    location.hash='detailView'
                }
            a.innerHTML=`<img class="polaroid-images" src=\"`+(each.image||'./images/not_available.jpg')+`\" alt=\"`+each.name+`\">`
            listView.appendChild(a)
        }
        detailView.unset()
        document.body.appendChild(listView.br1)
        document.body.appendChild(listView.br2)
        document.body.appendChild(listView)
    }
    listView.unset=function()
    { 
        try{
        document.body.removeChild(listView.br1)
        document.body.removeChild(listView.br2)
        document.body.removeChild(listView)
        }catch(e){}
    }
    window.detailView=document.createElement('div');
    detailView.setAttribute('class',"items_info container");
    detailView.set=function(item)
    {   if(!item)item=window.si
        if(!item.name)return;
        detailView.innerHTML=`
      <div class="row info">
        <div class="col-sm-4" style="border-right: 1px solid #ccc;padding-bottom: 15px;">
          <img src="`+(item.image||'./images/not_available.jpg')+`" class="img_info">
          <button class="btn btn-lg btn-success btn_sell">SELL</button>
          <button class="btn btn-lg btn-success btn_price">`+item.price+`</button>
        </div>
        <div class="col-sm-8">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Product Info</a>
              </div>
              <ul class="nav navbar-nav">
                <li class="active"><a href="#">About</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Agents</a></li>
                <li><a href="#">Locality</a></li>
              </ul>
            </div>
          </nav>
          <p class="product_info">`+item.description+`
          </p>
        </div>
      </div>
    `
    detailView.setAttribute('class','items_info container')
    detailView.setAttribute('style',"width: 100%;text-align: center;")
    listView.unset()
    document.body.appendChild(detailView)
    }
    detailView.unset=function()
    {
        try{
        document.body.removeChild(detailView);
        }catch(r){}
    }
    document.body.innerHTML=`
    <div class="row header">

      <div class="col-md-4">
      </div>
      <div class="col-md-4 caption">
				<img src="./images/greenlogo.png" class="img_logo">
				ReCart
        <br>
        <p id="sub_cap">Waste to Industry</p>
      </div>

      <div class="col-md-4">
        <button class="btn button"><i class="fa fa-search"></i></button>
        <input id="srch" class="form-control mr-sm-2" type="Search" placeholder="SEARCH" aria-label="search">
      </div>
    </div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#main">ReCart</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active"><a href="">Home</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">Re-Agents</a></li>
						<li><a href="#">About Us</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="./signup.html"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </div>

    </nav>
		`
    return resp
}
