    angular.module("myapp",[])
        .controller("ctrl",["$scope","$http","$filter",function(a,b,c){
            b({url:"/ajax"}).then(function(e){
                a.data=e.data;
                var arr=[];
                for(var i=0; i<a.data.length ; i++){
                    var current=[];
                    for(var j=1; j<a.data.length ; j++){
                        if(a.data[i].en==a.data[j].en&&!a.data[j].flag){
                            current.push(a.data[j]);
                            current.en=a.data[i].en;
                            a.data[j].flag=true;
                        }
                    }
                    if(current.length!=0){
                        arr.push(current);
                    }
                }
                var newarr=c("orderBy")(arr,"en");
                console.log(newarr)
                a.data=newarr;
                a.type="";
                a.getEn=function(en){
                    a.type=en;
                }
                a.getAll=function(){
                    a.type="";
                }
            })
        }])
