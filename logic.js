window.addEventListener('load',set);
function set()
{ 
   var a= document.getElementById('check');
    a.addEventListener('click',calc);
    var b= document.getElementById('clear');
    b.addEventListener('click',clean);
}
var h,w;
function clean()
{
    document.getElementById('h').value='';
    document.getElementById('w').value='';
    document.getElementById('b').innerText='---';
    document.getElementById('uw').style.display='inline';
    document.getElementById('nw').style.display='inline';
    document.getElementById('ow').style.display='inline';
    document.getElementById('o').style.display='inline';
}
        
function calc()
    {
        var x=document.getElementById('h').value;
        var y=document.getElementById('w').value;
        var a= document.getElementById('uw');
        var b= document.getElementById('nw');
        var c= document.getElementById('ow');
        var d= document.getElementById('o');
            if(x!=''&&y!='')
            {
                h=document.getElementById('h').value;
                w=document.getElementById('w').value;
                var res=w/(h*h);
                if(res<18.5)
                {
                    
                    b.style.display='none';
                    c.style.display='none';
                    d.style.display='none';
                    

                }
                else if(res>=18.5&&res<25)
                {
                    a.style.display='none';
                    c.style.display='none';
                    d.style.display='none';
                }
                else if(res>=25&&res<30)
                {
                    b.style.display='none';
                    a.style.display='none';
                    d.style.display='none';
                }
                else if(res>=30)
                {
                    b.style.display='none';
                    c.style.display='none';
                    a.style.display='none';
                }

                document.getElementById('b').innerText=res;
            }
            else
            {
                alert("Fill all input fields! ")
            }
     }    