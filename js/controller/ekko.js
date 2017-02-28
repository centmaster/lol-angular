myApp.controller('ekko', ['$scope','$ekkoService',function($scope,$ekkoService) {
	$scope.abc = "my name is Ekko";
	$ekkoService.getData().then(function(result){
		$scope.ekko=result.ekko;
		$scope.jinx=result.jinx;
		$scope.lux=result.lux;
		$scope.ezreal=result.ezreal;
		$scope.fizz=result.fizz;

var myChart = echarts.init(document.getElementById('winper'));
var myChart2=echarts.init(document.getElementById('usetime'));

        // 指定图表的配置项和数据
        var option = {
         series:[
         {
         	type:'pie',
         	radius:'55%',
         	roseType:'angle',
         	 itemStyle: {
   	 emphasis: {
        		shadowBlur: 200,
        		shadowColor: 'rgba(0, 0, 0, 0.5)'
    		}
	},
         	data:[
         		{value:$scope.jinx[1], name:$scope.jinx[0],itemStyle:{
         			normal:{color:'#CB732C'}
         		}},
         		{value:$scope.lux[1],name:$scope.lux[0],itemStyle:{
         			normal:{color:'#CB732C'}
         		}},
         		{value:$scope.fizz[1],name:$scope.fizz[0],itemStyle:{
         			normal:{color:'#CB732C'}
         		}},
         		{value:$scope.ezreal[1],name:$scope.ezreal[0],itemStyle:{
         			normal:{color:'#CB732C'}
         		}},
         		{value:$scope.ekko[1],name:$scope.ekko[0],itemStyle:{
         			normal:{color:'#CCE23D'}
         		}}
         			]
        		 }
         	]
        };

        var option2 = {
            title: {
                text: '英雄使用次数'
            },
             emphasis: {
        		shadowBlur: 200,
        		shadowColor: 'rgba(0, 0, 0, 0.5)'
	},
	
            tooltip: {},
            xAxis: {
                data: [$scope.jinx[0],$scope.fizz[0],$scope.ekko[0],$scope.ezreal[0],$scope.lux[0]]
            },
            yAxis: {},
            series: [{
                name: '场次',
                type: 'bar',
                data: [$scope.jinx[2],$scope.fizz[2],$scope.ekko[2],$scope.ezreal[2], $scope.lux[2],]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.showLoading();
        setTimeout(function(){
        	myChart.hideLoading();
        	myChart.setOption(option);
        },2000);
        myChart2.setOption(option2);


	})

	
}])