var resimler=new Array("","url(images/slider1.jpg)","url(images/slider2.jpg)","url(images/slider3.jpg)")
var zaman;
function basla(x)
{
  if(x==1)
  {
    document.getElementById("slider").style.background=resimler[x];
    document.getElementById("slider").style.backgroundSize="600px";
    document.getElementById("sayi"+x).style.background="#45d30d";
  }
  zaman=window.setInterval(
    function()
    {
      document.getElementById("slider").style.background=resimler[x];
      document.getElementById("slider").style.backgroundSize="600px";
      document.getElementById("slider").style.backgroundRepeat="no-repeat";
      for(var i=1;i<=3;i++)
      {
        if(i==x)
        {
          document.getElementById("sayi"+i).style.background="#45d30d";
        }
        else
        {
          document.getElementById("sayi"+i).style.background="#f8f8f8";
        }
      }
      x++;
      if(x==4)
      {
        x=1;
      }
    }
    
    
    ,2000)
}