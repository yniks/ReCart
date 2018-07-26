var all;
function searchRows(search)
{
	var trs=document.getElementsByClassName('date_text1');
	trs=[...trs];
	var final=[]
	for(var each of trs)
		{
			if(each.innerText.search('Wishes..')>-1)
			{
				let parentEl=each.parentElement;
				let nameEl=parentEl.getElementsByClassName('readmore')[0];
				let wishEl=each.getElementsByTagName('a')[0];
				final.push({name:nameEl.innerText,wish:wishEl.href})
			}
		}
		window.rel=final.length;
	return final
}	
	var pup=require('puppeteer')
	async function init()
	{
		var browser=await pup.launch({
			headless:false,
			})
		var page=await browser.newPage();
		console.log('logging in as.. ','*******150');
		await page.goto('http://www.nietcampus.com/Home/');
		await page.type('#txtUserName','0171cse150');
		await page.type('#txtPassword','password@123');
		await page.evaluate(()=>Ulogin.click()).catch(console.log);
		await page.waitForNavigation(
			{
				waitUntil:'domcontentloaded',
				timeout:90000
			}
		);
		console.log('log in Sucessfull!');
		let list =await page.evaluate(searchRows);
		console.log('Cli started!')
		for(let each of list)
		{	
			let name=[];
			let fullName=""
			each.name.trim().split('(')[0].split(/\b/).forEach(m=>{let i=m.charAt(0).toUpperCase();
			m=i+m.slice(1).toLowerCase()
			fullName+=m;name.push(m)});
			fullName.charAt(0)!=32?fullName=" "+fullName:null;
			var body=`<h2 style="text-align: center;"><font size="7">Hey&nbsp;`+name[0]+`!</font></h2><div style="text-align: center;"><font size="6">Wish you a very very happy birthday...</font></div><div style="text-align: center;"><br></div><div style="text-align: center;"><b>On this special occasions We need a favour from you ...</b></div><div style="text-align: center;"><b><br></b></div><div style="text-align: center;"><b>We wish that you plant a "tree"</b></div><div style="text-align: center;"><b>Anywhere you find suitable so that you can ensure it's care as well.</b></div><div style="text-align: center;"><b><br></b></div><div style="text-align: center;"><b>Please share your photograph with the plant via whatsapp on 8585905869.&nbsp;</b></div><div style="text-align: center;"><b>We share the pictures on our Facebook page...</b></div><div style="text-align: center;"><br></div><div style="text-align: center;">Please like and share&nbsp;</div><div style="text-align: center; ">f<a href="http://fb.com/vecell.niet">b.com/vecell.niet</a></div><div style="text-align: center;"><br></div><div style="text-align: center;">For any query you can contact me.</div><div style="text-align: center;"><br></div><div style="text-align: center; ">With best regards</div><div style="text-align: center;"><br></div><div style="text-align: center;">Nikhilesh Yadav</div><div style="text-align: center;">Member</div><div style="text-align: center;">Value Education Cell</div>`
			console.log(`Wishing . . ${fullName}(${each.wish.search('student')?'student':'faculty'}) `)
			var page=await browser.newPage();
			await page.goto(each.wish,{
				waitUntil:'domcontentloaded'
			});
			await page.type('#ctl00_ctl00_ContentPane_ContentPane_txtSubject',"Happy Birthday"+fullName);
			await page.evaluate((text)=>
			{
				var body=document.querySelector('iframe').contentWindow.document.body;
				body.innerHTML=text;
			},body)
		await page.evaluate(()=>window['ctl00_ctl00_ContentPane_ContentPane_btnSend1'].click()).catch(console.log);

		console.log("	Wished => ",fullName)
		page.close();
		}
		console.log(' ')
		console.log('Cli finished!')
		return list.length
	}
	function emit(num)
	{
		console.log('Wished: ', num,'people.')
	}
	init().then(emit);