/*******住宿详情页面时间控件******/
(function($){
    stay = {
        start:$('#startDate'),
        end:$('#endDate'),
        today:(new Date()),
        init:function(){
        	if($('#startDate').val()){
        		//存在，则什么也不做
        	}else{
        		stay.inputVal();
        	}
            stay.endFun();
            stay.startFun();
        },
        startFun:function(){
            stay.start.datepicker({
                dateFormat : 'yy-mm-dd',
                dayNamesMin : ['日','一','二','三','四','五','六'],
                monthNames : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                altFormat : 'yy-mm-dd',
                yearSuffix:'年',
                showMonthAfterYear:true,
                firstDay : 1,
                showOtherMonths:true,
                minDate : 0,
                maxDate:180/*,
                onSelect:function(dateText,inst){
                    stay.end.datepicker('option', 'minDate', new Date(moment(dateText).add('days', 1)));
                    stay.end.datepicker('option', 'maxDate', new Date(moment(dateText).add('days', 180)));
                    var strDay =  stay.compare($(this));
                    stay.start.datepicker('option', 'appendText', strDay);
                    if((new Date(stay.end.val()) - new Date(dateText)) <= (24*60*60*1000)){
                        stay.end.datepicker('option', 'appendText', stay.compare(stay.end));
                    }
                }*/

            });
        },
        endFun:function(){
            stay.end.datepicker('refresh');
            stay.end.datepicker({
                dateFormat : 'yy-mm-dd',
                dayNamesMin : ['日','一','二','三','四','五','六'],
                monthNames : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                altFormat : 'yy-mm-dd',
                yearSuffix:'年',
                showMonthAfterYear:true,
                firstDay : 1,
                showOtherMonths:true,
                minDate : 1,
                maxDate:180,
                    onSelect:function(){
                        stay.end.datepicker('option');
                    }
            });
        },
        transformStr:function(day,strDay){
            switch (day){
                    case 1:
                        strDay  = '星期一';
                        break;
                    case 2:
                        strDay  = '星期二';
                        break;
                    case 3:
                        strDay  = '星期三';
                        break;
                    case 4:
                        strDay  = '星期四';
                        break;
                    case 5:
                        strDay  = '星期五';
                        break;
                    case 6:
                        strDay  = '星期六';
                        break;
                    case 0:
                        strDay  = '星期日';
                        break;
                }
            return strDay;
        },
        compare:function(obj){
            var strDay = '今天';
            var myDate = new Date(stay.today.getFullYear(),stay.today.getMonth(),stay.today.getDate());
            var day = (obj.datepicker('getDate') - myDate)/(24*60*60*1000);
            day == 0 ? strDay: day == 1 ?
                (strDay = '明天') : day == 2 ?
                (strDay = '后天') : (strDay = stay.transformStr(obj.datepicker('getDate').getDay(),strDay));
            return strDay;
        },
        inputVal:function(){
            stay.inputTimes(stay.start,1);
            stay.inputTimes(stay.end,2);
        },
        inputTimes:function(obj,day){
            var m = new Date(moment(stay.today).add('days', day));
            obj.val(m.getFullYear() + "-" + stay.addZero((m.getMonth()+1)) + "-" + stay.addZero(m.getDate()));
        },
        addZero:function(num){
            num < 10 ? num = "0" + num : num ;
            return num;
        }
    }
    stay.init();
    delivery = {
        start:$('#startDelivery'),
        end:$('#endDelivery'),
        today:(new Date()),
        init:function(){
        	if($('#startDelivery').val()){
        		//存在，则什么也不做
        	}else{
        		delivery.inputVal();
        	}
            delivery.endFun();
            delivery.startFun();
        },
        startFun:function(){
            delivery.start.datepicker({
                dateFormat : 'yy-mm-dd',
                dayNamesMin : ['日','一','二','三','四','五','六'],
                monthNames : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                altFormat : 'yy-mm-dd',
                yearSuffix:'年',
                showMonthAfterYear:true,
                firstDay : 1,
                showOtherMonths:true,
                minDate : 0,
                maxDate:180
            });
        },
        endFun:function(){
            delivery.end.datepicker('refresh');
            delivery.end.datepicker({
                dateFormat : 'yy-mm-dd',
                dayNamesMin : ['日','一','二','三','四','五','六'],
                monthNames : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                altFormat : 'yy-mm-dd',
                yearSuffix:'年',
                showMonthAfterYear:true,
                firstDay : 1,
                showOtherMonths:true,
                minDate : 1,
                maxDate:180,
                    onSelect:function(){
                        delivery.end.datepicker('option');
                    }
            });
        },
        transformStr:function(day,strDay){
            switch (day){
                    case 1:
                        strDay  = '星期一';
                        break;
                    case 2:
                        strDay  = '星期二';
                        break;
                    case 3:
                        strDay  = '星期三';
                        break;
                    case 4:
                        strDay  = '星期四';
                        break;
                    case 5:
                        strDay  = '星期五';
                        break;
                    case 6:
                        strDay  = '星期六';
                        break;
                    case 0:
                        strDay  = '星期日';
                        break;
                }
            return strDay;
        },
        compare:function(obj){
            var strDay = '今天';
            var myDate = new Date(delivery.today.getFullYear(),delivery.today.getMonth(),delivery.today.getDate());
            var day = (obj.datepicker('getDate') - myDate)/(24*60*60*1000);
            day == 0 ? strDay: day == 1 ?
                (strDay = '明天') : day == 2 ?
                (strDay = '后天') : (strDay = delivery.transformStr(obj.datepicker('getDate').getDay(),strDay));
            return strDay;
        },
        inputVal:function(){
            delivery.inputTimes(delivery.start,0);
            delivery.inputTimes(delivery.end,1);
        },
        inputTimes:function(obj,day){
            var m = new Date(moment(delivery.today).add('days', day));
            obj.val(m.getFullYear() + "-" + delivery.addZero((m.getMonth()+1)) + "-" + delivery.addZero(m.getDate()));
        },
        addZero:function(num){
            num < 10 ? num = "0" + num : num ;
            return num;
        }
    }
    delivery.init();
    delivery1 = {
    	getLastDay: function (year,month){
			 var new_year = year;    //取当前的年份           
			 var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）           
			 if(month>12)            //如果当前大于12月，则年份转到下一年           
			 {          
			  new_month -=12;        //月份减           
			  new_year++;            //年份增           
			 }          
			 var new_date = new Date(new_year,new_month,1);                //取当年当月中的第一天           
			 var date_count =   (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月的天数         
			 var last_date =   new Date(new_date.getTime()-1000*60*60*24);//获得当月最后一天的日期  
			return date_count;  
		},
        start:$('#startDelivery1'),
        end:$('#endDelivery1'),
        reportFirstDay:$('#reportFirstDay'),
        reportLastDay:$('#reportLastDay'),
        today:(new Date()),
        init:function(){
        	if($('#startDelivery1').val()){
        		//存在，则什么也不做
        	}else{
        		delivery1.inputVal();
        	}
            delivery1.endFun();
            delivery1.startFun();
        },
        startFun:function(){
            delivery1.start.datepicker({
                dateFormat : 'yy-mm-dd',
                dayNamesMin : ['日','一','二','三','四','五','六'],
                monthNames : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                altFormat : 'yy-mm-dd',
                yearSuffix:'年',
                //showMonthAfterYear:true,
                firstDay : 1,
                showOtherMonths:true,
                minDate : 0,
                //maxDate:180
            });
        },
        endFun:function(){
            //delivery1.end.datepicker('refresh');
            delivery1.end.datepicker({
                dateFormat : 'yy-mm-dd',
                dayNamesMin : ['日','一','二','三','四','五','六'],
                monthNames : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                altFormat : 'yy-mm-dd',
                yearSuffix:'年',
                //showMonthAfterYear:true,
                firstDay : 1,
                showOtherMonths:true,
                minDate : 1,
                /*maxDate:180,
                    onSelect:function(){
                        delivery1.end.datepicker('option');
                    }*/
            });
        },
        transformStr:function(day,strDay){
            switch (day){
                    case 1:
                        strDay  = '星期一';
                        break;
                    case 2:
                        strDay  = '星期二';
                        break;
                    case 3:
                        strDay  = '星期三';
                        break;
                    case 4:
                        strDay  = '星期四';
                        break;
                    case 5:
                        strDay  = '星期五';
                        break;
                    case 6:
                        strDay  = '星期六';
                        break;
                    case 0:
                        strDay  = '星期日';
                        break;
                }
            return strDay;
        },
        compare:function(obj){
            var strDay = '今天';
            var myDate = new Date(delivery1.today.getFullYear(),delivery1.today.getMonth(),delivery1.today.getDate());
            var day = (obj.datepicker('getDate') - myDate)/(24*60*60*1000);
            day == 0 ? strDay: day == 1 ?
                (strDay = '明天') : day == 2 ?
                (strDay = '后天') : (strDay = delivery1.transformStr(obj.datepicker('getDate').getDay(),strDay));
            return strDay;
        },
        inputVal:function(){
        	var today1 = new Date();//获得当前日期
		    var year = today1.getFullYear();//获得年份
		    var month = today1.getMonth() + 1;//此方法获得的月份是从0---11，所以要加1才是当前月份
   			var currentDays=delivery1.getLastDay(year,month);
            delivery1.inputTimes(delivery1.start,currentDays);
            delivery1.inputTimes(delivery1.reportFirstDay,currentDays);
            
            delivery1.inputTimes(delivery1.end,0);
            delivery1.inputTimes(delivery1.reportLastDay,0);
        },
        inputTimes:function(obj,day){
            var m = new Date(moment(delivery1.today).add('days', day));
            obj.val(m.getFullYear() + "-" + delivery1.addZero((m.getMonth()+1)) + "-" + delivery1.addZero(m.getDate()));
        },
        addZero:function(num){
            num < 10 ? num = "0" + num : num ;
            return num;
        }
    }
    
    delivery1.init();
})(jQuery);