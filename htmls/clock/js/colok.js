;(function(){
	var Clock=function(setting){
		var _this=this;//防止this漂移
		this.settings={//默认参数
			type:"circle",//钟表类型
			color:"vilot",//钟表颜色
			bgColor:"#cccccc",//钟表背景色
			zeroColor:"gold",//钟表零秒时眼色
			length:"200",//钟表半径，如果是矩形或者三角形，则是钟表边长
			fontSize:"50"
		};
		$.extend(this.settings,setting||{})//如果用户不传参数过来，则给一个空对象
		$(".clock")[0].style.position='relative';
		var width=$(".clock").width();
		var height=$(".clock").height();
		var k=_this.type(this.settings.type);
		var img=new Image()//实例化图片
		img.src="img/zk.jpg";
		//console.log(img);
		_this.appendCanvas(width,height);//创建canvas标签
		var canvas=$(".clock").find(".canvas")[0];
		//console.log(canvas);
		var ctx=canvas.getContext("2d");
		var canvas_bg=$(".clock").find(".canvas_bg")[0];
		var ctx_bg=canvas_bg.getContext("2d");
		img.onload=function(){//图片加载完成之后执行
			if(k=="circle"){//根据类型，执行相应的方法
				_this.circle_bg(_this.settings,width,height,ctx_bg);
				setInterval(function(){//文字时间变化
					var time=_this.getTime()[0];
					var second=_this.getTime()[1]
					_this.writeTime(time,width,height,img,ctx,_this.settings);
					_this.drawArc(_this.settings,width,height,ctx,second);
				},1000);
			}else if(k=="rect"){
				_this.rect_bg(_this.settings,width,height,ctx_bg);
				setInterval(function(){//文字时间变化
					var time=_this.getTime()[0];
					var second=_this.getTime()[1]
					_this.writeTime(time,width,height,img,ctx,_this.settings);
					_this.drawLine(_this.settings,width,height,ctx,second);
				},1000);
			}
			
		}
	}
	window["Clock"]=Clock;//注册全局变量，要不然外部读取不到，注册时，不能用写成Clock()的形式
	//开始定义方法
	Clock.prototype={
		appendCanvas:function(width,height){//给需要制作时钟的标签添加canvas标签
			$(".clock").append("<canvas class='canvas' width='"+width+"' height='"+height+"'></canvas><canvas class='canvas_bg' width='"+width+"' height='"+height+"'></canvas>");
		},
		type:function(k){//判断类型
			if(k=="circle"){
				return "circle";
			}else if(k=="rect"){
				return "rect";
			}else{
				console.log("没用正确定义类型");
				return false;
			}
		},
		circle_bg:function(k,width,height,ctx){
			ctx.arc(width/2,height/2,k.length,0,Math.PI*2,false);
			ctx.strokeStyle=k.bgColor;
			ctx.lineWidth=20;
			ctx.stroke();
		},
		getTime:function(){//获取时间函数并取0
			var _=["00","01","02","03","04","05","06","07","08","09"];
			var date=new Date();
			var h=date.getHours();
			var m=date.getMinutes();
			var s=date.getSeconds();
			var arr=[[_[h]||h,_[m]||m,_[s]||s].join(":"),s]
			return arr;
		},
		writeTime:function(k,width,height,img,ctx,prom){//显示时间
			var pattern=ctx.createPattern(img,"repeat");
			ctx.clearRect(0,0,width,height);
			ctx.beginPath();
			ctx.font="bold "+prom.fontSize+"px Arial";
			ctx.fillStyle=pattern;
			ctx.textAlign="center";
			ctx.textBaseline="middle";
			ctx.fillText(k,width/2,height/2);
		},
		drawArc:function(k,width,height,ctx,second){//画圆弧
			ctx.arc(width/2,height/2,k.length,-Math.PI/2,(Math.PI*2*second/60-Math.PI/2),false);
			if(second==0){
				ctx.strokeStyle=k.zeroColor;
				ctx.beginPath();
				ctx.arc(width/2,height/2,k.length,0,Math.PI*2,false);//0秒的时候画整个圆
			}else{
				ctx.strokeStyle=k.color;
			}
			ctx.lineWidth=20;
			ctx.stroke();
		},
		rect_bg:function(prom,width,height,ctx_bg){//方形背景
			var startX=width/2-prom.length/2;
			var startY=height/2-prom.length/2;
			ctx_bg.rect(startX,startY,prom.length,prom.length);
			ctx_bg.strokeStyle=prom.bgColor;
			ctx_bg.lineWidth=20;
			ctx_bg.stroke();
		},
		drawLine:function(k,width,height,ctx,second){//画方形线条
//			ctx.beginPath();
//			ctx.moveTo(width/2,height/2-k.length/2);
//			if(second<=7){
//				ctx.lineTo(width/2+second*(k.length)/15,height/2-k.length/2);
//			}else if(second>8&&second<=22){
//				ctx.beginPath();
//				ctx.lineTo(width/2+k.length/2,(height/2-k.length/2)+(second-7)*(k.length/15));
//			}
//			ctx.lineWidth=20;
//			ctx.strokeStyle=k.color;
//			ctx.stroke();
		}
	}
}(jQuery))
