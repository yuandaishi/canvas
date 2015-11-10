var arr1=[50,479];
var arr2=[100,450];
var arr3=[500,380];
var arr4=[300,300];
var arr5=[190,250];
var arr6=[270,150];
var arr7=[550,100];
var arr8=[430,60];
var arr9=[580,10];
var canvas=$("#canvas")[0];
var ctx=canvas.getContext("2d");
var con=true;
var con2=true;
var con3=true;
var con4=true;
var con5=true;
var con6=true;
var con7=true;
var con8=true;
var con9=true;
var v=1;//绘制线条的速率
$(document).ready(function(){
	$(".button").click(function(){
		draw();
	})	
})
function draw(){
		conditions=window.requestAnimationFrame(draw,canvas);
		line1();
	}
function line1(){
//	(function draw(){//每隔固定时间执行以下函数
//			con=window.requestAnimationFrame(draw,canvas);
		if(con){
			ctx.beginPath();
			// 计算斜率
			var a=(arr2[1]-arr1[1])/(arr2[0]-arr1[0]);
			arr1[0]+=v;
			arr1[1]+=a*v;

			ctx.moveTo(arr1[0]-v,arr1[1]-(a*v));
			//console.log(arr[i][0]-v);
			ctx.lineTo(arr1[0],arr1[1]);
			ctx.strokeStyle="#003300";
			ctx.lineWidth=4;
			ctx.stroke();
			$(".logo").css({
				"top":arr1[1]-21,
				"left":arr1[0]-42
			})
		}
		if(arr1[0]>=100){//写在if之外，上一条线段绘制完成之后不在绘制。
			arr1[0]=100;
			con=false;
			ctx.beginPath();
			ctx.arc(arr1[0],arr1[1],Math.random()*10+5,0,Math.PI*2,true);
			ctx.fillStyle="#000000";
			ctx.fill();
			line2();//执行下一条线的绘制
		}
//	}())
}

function line2(){
//	(function draw(){//每隔固定时间执行以下函数
//			con=window.requestAnimationFrame(draw,canvas);
		if(con2){
			ctx.beginPath();
			// 计算斜率
			var a=(arr3[1]-arr2[1])/(arr3[0]-arr2[0]);
			arr2[0]+=v;
			arr2[1]+=a*v;

			ctx.moveTo(arr2[0]-v,arr2[1]-(a*v));
			//console.log(arr[i][0]-v);
			ctx.lineTo(arr2[0],arr2[1]);
			ctx.strokeStyle="#000099";
			ctx.lineWidth=4;
			ctx.stroke();
			$(".logo").css({
				"top":arr2[1]-21,
				"left":arr2[0]-42
			})
		}
		if(arr2[0]>=500){//写在if之外，上一条线段绘制完成之后不在绘制。
			arr2[0]=500;
			con2=false;
			ctx.beginPath();
			ctx.arc(arr2[0],arr2[1],Math.random()*10+5,0,Math.PI*2,true);
			ctx.fillStyle="#000000";
			ctx.fill();
			line3();//执行下一条线的绘制
		}
//	}())
}

function line3(){
//	(function draw(){//每隔固定时间执行以下函数
//			con=window.requestAnimationFrame(draw,canvas);
		if(con3){
			ctx.beginPath();
			// 计算斜率
			var a=(arr4[1]-arr3[1])/(arr4[0]-arr3[0]);
			arr3[0]-=v;
			arr3[1]-=a*v;

			ctx.moveTo(arr3[0]+v,arr3[1]+(a*v));
			//console.log(arr[i][0]-v);
			ctx.lineTo(arr3[0],arr3[1]);
			ctx.strokeStyle="#04569A";
			ctx.lineWidth=4;
			ctx.stroke();
			$(".logo").css({
				"top":arr3[1]-21,
				"left":arr3[0]-42
			})
		}
		if(arr3[0]<=300){//写在if之外，上一条线段绘制完成之后不在绘制。
			arr3[0]=300;
			con3=false;
			ctx.beginPath();
			ctx.arc(arr3[0],arr3[1],Math.random()*10+5,0,Math.PI*2,true);
			ctx.fillStyle="#000000";
			ctx.fill();
			line4();//执行下一条线的绘制
		}
//	}())
}
function line4(){
//	(function draw(){//每隔固定时间执行以下函数
//			con=window.requestAnimationFrame(draw,canvas);
		if(con4){
			ctx.beginPath();
			// 计算斜率
			var a=(arr5[1]-arr4[1])/(arr5[0]-arr4[0]);
			arr4[0]-=v;
			arr4[1]-=a*v;

			ctx.moveTo(arr4[0]+v,arr4[1]+(a*v));
			//console.log(arr[i][0]-v);
			ctx.lineTo(arr4[0],arr4[1]);
			ctx.strokeStyle="#080808";
			ctx.lineWidth=4;
			ctx.stroke();
			$(".logo").css({
				"top":arr4[1]-21,
				"left":arr4[0]-42
			})
		}
		if(arr4[0]<=190){//写在if之外，上一条线段绘制完成之后不在绘制。
			arr4[0]=190;
			con4=false;
			ctx.beginPath();
			ctx.arc(arr4[0],arr4[1],Math.random()*10+5,0,Math.PI*2,true);
			ctx.fillStyle="#000000";
			ctx.fill();
			line5();//执行下一条线的绘制
		}
//	}())
}

function line5(){
//	(function draw(){//每隔固定时间执行以下函数
//			con=window.requestAnimationFrame(draw,canvas);

		if(con5){
			ctx.beginPath();
			// 计算斜率
			var a=(arr6[1]-arr5[1])/(arr6[0]-arr5[0]);
			arr5[0]+=v;
			arr5[1]+=a*v;

			ctx.moveTo(arr5[0]-v,arr5[1]-(a*v));
			//console.log(arr[i][0]-v);
			ctx.lineTo(arr5[0],arr5[1]);
			ctx.strokeStyle="#140259";
			ctx.lineWidth=4;
			ctx.stroke();
			$(".logo").css({
				"top":arr5[1]-21,
				"left":arr5[0]-42
			})
		}
		if(arr5[0]>=270){//写在if之外，上一条线段绘制完成之后不在绘制。
			arr5[0]=270;
			con5=false;
			ctx.beginPath();
			ctx.arc(arr5[0],arr5[1],Math.random()*10+5,0,Math.PI*2,true);
			ctx.fillStyle="#000000";
			ctx.fill();
			line6();//执行下一条线的绘制
		}
//	}())
}

function line6(){
//	(function draw(){//每隔固定时间执行以下函数
//			con=window.requestAnimationFrame(draw,canvas);

		if(con6){
			ctx.beginPath();
			// 计算斜率
			var a=(arr7[1]-arr6[1])/(arr7[0]-arr6[0]);
			arr6[0]+=v;
			arr6[1]+=a*v;

			ctx.moveTo(arr6[0]-v,arr6[1]-(a*v));
			//console.log(arr[i][0]-v);
			ctx.lineTo(arr6[0],arr6[1]);
			ctx.strokeStyle="#1C444E";
			ctx.lineWidth=4;
			ctx.stroke();
			$(".logo").css({
				"top":arr6[1]-21,
				"left":arr6[0]-42
			})
		}
		if(arr6[0]>=550){//写在if之外，上一条线段绘制完成之后不在绘制。
			arr6[0]=550;
			con6=false;
			ctx.beginPath();
			ctx.arc(arr6[0],arr6[1],Math.random()*10+5,0,Math.PI*2,true);
			ctx.fillStyle="#000000";
			ctx.fill();
			line7();//执行下一条线的绘制
		}
//	}())
}
function line7(){
//	(function draw(){//每隔固定时间执行以下函数
//			con=window.requestAnimationFrame(draw,canvas);

		if(con7){
			ctx.beginPath();
			// 计算斜率
			var a=(arr8[1]-arr7[1])/(arr8[0]-arr7[0]);
			arr7[0]-=v;
			arr7[1]-=a*v;

			ctx.moveTo(arr7[0]+v,arr7[1]+(a*v));
			//console.log(arr[i][0]-v);
			ctx.lineTo(arr7[0],arr7[1]);
			ctx.strokeStyle="#22C122";
			ctx.lineWidth=4;
			ctx.stroke();
			$(".logo").css({
				"top":arr7[1]-21,
				"left":arr7[0]-42
			})
		}
		if(arr7[0]<=430){//写在if之外，上一条线段绘制完成之后不在绘制。
			arr7[0]=430;
			con7=false;
			ctx.beginPath();
			ctx.arc(arr7[0],arr7[1],Math.random()*10+5,0,Math.PI*2,true);
			ctx.fillStyle="#000000";
			ctx.fill();
			line8();//执行下一条线的绘制
		}
//	}())
}

function line8(){
//	(function draw(){//每隔固定时间执行以下函数
//			con=window.requestAnimationFrame(draw,canvas);

		if(con8){
			ctx.beginPath();
			// 计算斜率
			var a=(arr9[1]-arr8[1])/(arr9[0]-arr8[0]);
			arr8[0]+=v;
			arr8[1]+=a*v;

			ctx.moveTo(arr8[0]-v,arr8[1]-(a*v));
			//console.log(arr[i][0]-v);
			ctx.lineTo(arr8[0],arr8[1]);
			ctx.strokeStyle="#2B521C";
			ctx.lineWidth=4;
			ctx.stroke();
			$(".logo").css({
				"top":arr8[1]-21,
				"left":arr8[0]-42
			})
		}
		if(arr8[0]>=580){//写在if之外，上一条线段绘制完成之后不在绘制。
			arr8[0]=580;
			con8=false;
			ctx.beginPath();
			ctx.arc(arr8[0],arr8[1],Math.random()*10+5,0,Math.PI*2,true);
			ctx.fillStyle="#000000";
			ctx.fill();
		}
//	}())
}

