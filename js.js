/*
* @Author: lisheng
* @Date:   2018-06-08 11:52:03
* @Last Modified by:   lisheng
* @Last Modified time: 2018-06-15 08:37:46
*/
window.onload=function(){
	let shopping=document.getElementsByClassName("shopping")[0];
	let shopxiala=document.getElementsByClassName("shopxiala")[0];
	shopping.onmouseenter=function(){
		shopxiala.style.height="98px";
	}
	shopping.onmouseleave=function(){
		shopxiala.style.height="0";
	}
	let aside=document.getElementsByClassName("aside")[0];
	console.log(aside);
	let li=aside.getElementsByTagName("li");
	console.log(li)
	let asidebox=document.getElementsByClassName("asidebox");
	let xiatu=document.getElementsByClassName("xiatu1");
	let shanglan=document.getElementsByClassName("shanglan")[1];
	let a=shanglan.getElementsByTagName("a");
	let xilalan=document.getElementsByClassName("xilalan");
	let sp=document.getElementsByClassName("sp");

	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			for(let j=0;j<li.length;j++){
				asidebox[j].style.display="none";
			}
			asidebox[i].style.display="block";
		}
		li[i].onmouseleave=function(){
			asidebox[i].style.display="none";
		}
	}
	for(let a=0;a<sp.length;a++){
		sp[a].onmouseenter=function(){
			for(let b=0;b<sp.length;b++){
				xilalan[b].style.height="0";
			}
			xilalan[a].style.height="230px";
			xilalan[a].style.borderBottom="1px solid #ccc"
		}
		sp[a].onmouseleave=function(){
			xilalan[a].style.height="0";
		}
	}
	xiatu[3].style.display="block";
	for(let k=0;k<a.length;k++){
		a[k].onmouseenter=function(){
			for(let l=0;l<a.length;l++){
				xiatu[l].style.display="none";
                a[l].className=""
			}
			xiatu[k].style.display="block";
			a[k].className="pop"
		}
	}
	let banner=document.querySelector(".banner");
	let imgbox=document.querySelector(".imgbox")
	let li2=document.querySelectorAll(".imgbox li");
	let btn=document.querySelectorAll(".btn li");
	let anniuz=document.querySelector(".anniuz");
	let anniuy=document.querySelector(".anniuy");
	let index=0;
	li2[0].style.zIndex=10;
	btn[0].className="hot";
	let t=setInterval(move,2000);

	for(let l=0;l<btn.length;l++){
		btn[l].onclick=function(){
			li2.forEach(function(elements){
			elements.style.zIndex=5;
		})
			btn.forEach(function(elements){
			elements.className="";
		})
			li2[l].style.zIndex=20;
			btn[l].className="hot";
			index=l;
		}
	}
	anniuz.onclick=function(){
		movel();
	}
	anniuy.onclick=function(){
		move();
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	function move(){
		index++;
		if(index==li2.length){
			index=0;
		}
		li2.forEach(function(elements,index,obj){
			elements.style.zIndex=5;
		})
		btn.forEach(function(elements,index,obj){
			elements.className="";
		})
		li2[index].style.zIndex=10;
		btn[index].className="hot";
	}
	function movel(){
		index--;
		if(index<0){
			index=li2.length-1;
		}
		li2.forEach(function(elements,index,obj){
			elements.style.zIndex=5;
		})
		btn.forEach(function(elements,index,obj){
			elements.className="";
		})
		li2[index].style.zIndex=10;
		btn[index].className="hot";
	}
	//封装函数，给左右按钮一个点击事件，移动时位置由296移动至0点，或
	//-296到0，调用。
	function fz(flag){
	let lis=flag.querySelectorAll("li");
	let anniuzz=flag.querySelector(".anniuzz");
	let anniuyy=flag.querySelector(".anniuyy");
	let yuan=flag.querySelectorAll(".yuan div");
	let width1=parseInt(getComputedStyle(flag,null).width);
	console.log(width1);
	// let p=setInterval(actl,1000);
	let current=0;
	let next=0;
	yuan[0].className="dayuan";
	let ll=true;
	console.log(ll)
	anniuzz.onclick=function(){
        if(!flag){
            return;
        }
        if (next==0) {
            next=0;
            return;
        }
        flag=false;
		actl();
	}
	anniuyy.onclick=function(){
        if(!flag){
            return;
        }
        if (next==lis.length-1) {
            next=lis.length-1;
            return;
        }
        flag=false;
		act();
	}
	yuan.forEach(function(v,i){
		v.onclick=function(){
			yuan[current].classList.remove("dayuan");
			yuan[i].classList.add("dayuan");
			if(current<i){
				lis[i].style.left=`${width1}px`;
				animate(lis[current],{left:-width1});
				animate(lis[i],{left:0});
			}
			else if(current>i){
				lis[i].style.left=`${-width1}px`;
				animate(lis[current],{left:width1});
				animate(lis[i],{left:0});
			}
			current=next=i;
		}
	})
	// gezii.onmouseenter=function(){
	// 	clearInterval(p);
	// }
	// gezii.onmouseleave=function(){
	// 	p=setInterval(move,2000);
	// }
	function act(){
		next++;
		if (next==lis.length) {
			next=0;
		}
		yuan[current].classList.remove("dayuan");
		yuan[next].classList.add("dayuan");
		lis[next].style.left=`${width1}px`;
		animate(lis[current],{left:-width1},function(){flag=true;});
		animate(lis[next],{left:0},)
		current=next;
        flag=true;
	}
	function actl(){
		next--;
		if (next<0) {
			next=lis.length-1;
		}
		yuan[current].classList.remove("dayuan");
		yuan[next].classList.add("dayuan");
		lis[next].style.left=`${-width1}px`;
		animate(lis[current],{left:width1},function(){flag=true;});
		animate(lis[next],{left:0},)
		current=next;
        flag=true;
	}
	}
	let gezii=document.getElementsByClassName("gezii")[0];
	fz(gezii);

	let geziii=document.getElementsByClassName("gezii")[1];
	fz(geziii);
	let geziiii=document.getElementsByClassName("gezii")[2];
	fz(geziiii);
	let geziiiii=document.getElementsByClassName("gezii")[3];
	fz(geziiiii);
	// console.log("gezii")；
	let changlan=document.querySelector(".changlan");
	let but=document.querySelectorAll(".button");
	console.log(but,changlan);
	let cwidth=parseInt(getComputedStyle(changlan,null).width)/3;
	let times=0;
	but[1].onclick=function(){
		times++;
		if(times==3){
			times=2;
		}
		console.log(times);
		changlan.style.transform=`translateX(${-cwidth*times}px)`;
	}
	but[0].onclick=function(){
		times--;
		if(times<0){
			times=0;
		}
		changlan.style.transform=`translateX(${-cwidth*times}px)`;
	}
}