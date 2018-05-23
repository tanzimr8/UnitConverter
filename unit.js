document.getElementById('input1').addEventListener('input',function(e){

		//1st row
		let inch = e.target.value;
		let inchtoFootTemp = inch/12;
		let inchtoFoot = inchtoFootTemp.toFixed(4);
		let inchtoMeterTemp = (inch/39.37);
		let inchtoMeter = inchtoMeterTemp.toFixed(4);

		document.getElementById('op-inchTofoot').innerHTML = 
		"<b>" + inchtoFoot + " " +  "FOOT</b>";
		

		document.getElementById('op-inchToMeter').innerHTML = 
		"<b>" + inchtoMeter + " " +  "METER</b>";
	
	})
	//2nd row
	document.getElementById('input2').addEventListener('input',function(e){
		let foot = e.target.value;
		console.log(foot);
		let footToInch = foot*12;
		let footToMeter = (foot*0.3048).toFixed(4);

		document.getElementById('op-footToInch').innerHTML = "<b>" + footToInch + " " +  "INCH</b>";
		document.getElementById('op-footToMeter').innerHTML = "<b>" + footToMeter + " " +  "METER</b>";
	});

	//3rd row
	document.getElementById('input3').addEventListener('input',function(e){
		let meter = e.target.value;
		//console.log(foot);
		let meterToFootTemp = meter*3.28;
		let meterToFoot = meterToFootTemp.toFixed(4);
		let meterToInch = (meter*39.37);

		document.getElementById('op-meterToFoot').innerHTML = "<b>" +  meterToFoot + " " +  "FOOT</b>";
		document.getElementById('op-meterToInch').innerHTML = "<b>" + meterToInch + " " +  "INCH</b>";
	});

	function animate(){
		document.getElementById('awesome').innerHTML = '&#xf067;';
		setTimeout(function(){
			document.getElementById('awesome').innerHTML = '&#xf068;';
		},1000);
		setTimeout(function(){
			document.getElementById('awesome').innerHTML = '&#xf00d;';
		},2000);
	
		
	}