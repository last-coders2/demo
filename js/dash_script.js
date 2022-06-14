function openside()
{

	if(document.getElementById('sidenav').style.width =='0px')
	{
		document.getElementById('sidenav').style.width='250px';
		document.getElementById('p').style.marginLeft='250px';
	}
	else
	{
		document.getElementById('sidenav').style.width='0px';
		document.getElementById('p').style.marginLeft='0px';
	}
}
