/**
 * Created by lg on 2016/7/26.
 */
function move(obj,json,options) {
    options=options||{};
    options.time=options.time||300;
    options.type=options.type||"linear";
    options.fn=options.fn||null;
    var cur=0;
    var a=0;
    var start={};
    var dis={};
    for(var key in json){
        start[key]=parseFloat(getStyle(obj,key));
        dis[key]=json[key]-start[key];
    }
    var count=Math.round(options.time/30);
    var n=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        n++;
        for(var key in json){
            switch (options.type){
                case "linear":
                    cur=start[key]+dis[key]*n/count;
                    break;
                case "ease-in":
                    a=n/count;
                    cur=start[key]+dis[key]*a*a*a;
                    break;
                case "ease-out":
                    a=1-n/count;
                    cur=start[key]+dis[key]*(1-a*a*a);
                    break;
            }
            if(key=="opacity"){
                obj.style.opacity=cur;
                obj.style.filter="alpha(opacity="+cur*100+")";
            }else {
                obj.style[key]=cur+"px";
            }
        }
        if(n==count){
            clearInterval(obj.timer);
            options.fn&&options.fn();
        }
    },30);
}
function getStyle(obj,attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
function ajax(opations) {
    opations=opations||{};
    if(!opations.url)return;
    opations.type=opations.type||"get";
    opations.timeout=opations.timeout||0;
    opations.data=opations.data||{};
    opations.success=opations.success||null;
    opations.error=opations.error||null;
    opations.data.t=Math.random();
    var arr=[];
    for(var key in opations.data){
        arr.push(key+"="+encodeURIComponent(opations.data[key]));
    }
    var str=arr.join("&");
    if(window.XMLHttpRequest){
        var xhr=new XMLHttpRequest();
    }else {
        var xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if(opations.type=="get"){
        xhr.open("get",opations.url+"?"+str,true);
        xhr.send();
    }else {
        xhr.open("post",opations.url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(str);
    }
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4){
            clearTimeout(timer);
            if(xhr.status>200&&xhr.status<300||xhr.status==304){
                opations.success&&opations.success(xhr.responseText);
            }else {
                opations.error&&opations.error(xhr.status);
            }
        }
    }
    if(opations.timeout){
        var timer=setTimeout(function () {
            xhr.abort();
        },opations.timeout);
    }
}
function jsonp(opations) {
    opations=opations||{};
    if(!opations.url||!opations.data)return;
    opations.cbKey=opations.cbKey||"cb";
    opations.timeout=opations.timeout||0;
    opations.success=opations.success||null;
    opations.error=opations.error||null;
    var cbValue="jsonp"+Math.random();
    opations.data[opations.cbKey]=cbValue.replace(",","");
    window[opations.data[opations.cbKey]]=function (json) {
        clearTimeout(timer);
        opations.success&&opations.success(json);
        document.getElementsByTagName("head")[0].removeChild(oSrc);
        window[opations.data[opations.cbKey]]=null;
    };
    var arr=[];
    for(var key in opations.data){
        arr.push(key+"="+encodeURIComponent(opations.data[key]));
    }
    var oSrc=document.createElement("script");
    oSrc.src=opations.url+"?"+arr.join("&");
    document.getElementsByTagName("head")[0].appendChild(oSrc);
    if(opations.timeout){
        var timer=setTimeout(function () {
            window[opations.data[opations.cbKey]]=null;
        },opations.timeout);
    }
}