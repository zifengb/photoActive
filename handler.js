// JavaScript Document

//关键点是布局转换
window.onload=function()
{
	var aImg=document.getElementsByTagName('img');
	
	for(var i=0;i<aImg.length;i++)
	{
		//布局转换——首先给图片的left和top赋值为offsetLeft和offsetTop，便于后面设置position
		
		aImg[i].style.left=aImg[i].offsetLeft+'px';
		aImg[i].style.top=aImg[i].offsetTop+'px';
	}
	
	for(var i=0;i<aImg.length;i++)
	{
		//布局转换——设置position。谨记：设置定位这一步骤不可与上面步骤合并
		
		aImg[i].style.position='absolute';
	}
	
	var zIndex=1;		//存放z-index值
	
	//原地缩放的实现思路：尺寸值、左margin和上margin同时改变，这种方式比直接改变left和top更快捷
	for(var i=0;i<aImg.length;i++)
	{
		aImg[i].onmouseover=function()
		{
			this.style.zIndex=zIndex++;
			move(this,{marginTop:-50,marginLeft:-50,width:528,height:330});
		};
		
		aImg[i].onmouseout=function()
		{
			move(this,{marginTop:0,marginLeft:0,width:352,height:220});
		};
	}
};