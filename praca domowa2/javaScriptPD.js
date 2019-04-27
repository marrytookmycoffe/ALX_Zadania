//zadanie 1 powielanie tekstu
function task1(){
	var text = prompt("Podaj jakiś tekst");
	var textToShow= "";
	for(var i =1; i< 31; i++)
	{
		
		textToShow += "nr " + i +": "+  text + "\n";
	}
	alert(textToShow);
	console.log(textToShow);
}
//zadanie 2 potegowanie liczb
function task2(){
	var podstawa = parseFloat(prompt("podaj podstawę liczbę"));
	var wykladnik =parseInt( prompt("podaj do jakiej potęgi ma być liczba " + podstawa));
	alert("wynik to " + potegowanie(podstawa, wykladnik));
}

function potegowanie(podstawa, wykladnik){
	for(var i= 0, liczba = 1; i < wykladnik; i++){
		liczba*=podstawa;
	}
	return liczba;
} 

//zadanie 3 dodawanie i dzielenie liczb w pętli 
function task3(){
	var liczba = 0.0;
	for(var i = 1;; i++){
		var cyfra = parseFloat(prompt("podaj cyfrę"));
		if(Number.isNaN(cyfra))
			continue;
		if(cyfra == 0)
			return;
		liczba += cyfra;
		var tekst = "suma = " + liczba + " srednia = " + (liczba/i);
		console.log(tekst);
		alert(tekst);
	}
}
//zadanie 4 określenie czy liczby są mniejsze czy większe
function task4(){
	var cyfra = parseInt(prompt("podaj cyfrę"));
	for(var i = 0; i< 5; i++){
		var liczba = randomInt(5);
		var poczatekTekstu  ="wylosowana " + liczba + " "; 
		if(liczba > cyfra){
			alert(poczatekTekstu + "jest większa od wybranej " + cyfra);
		}
		else if(liczba<cyfra){
		alert(poczatekTekstu + "jest mniejsza od wybranej " + cyfra);
		}
		else{
		alert(poczatekTekstu + "jest równa wybranej " + cyfra);
		}
	}
}
function randomInt(max){
	return Math.floor((Math.random()*max)+1);
}
//prosty kaukulator używający +-/*
function task5(){
	var cyfra1 = parseFloat(prompt("podaj cyfrę"));
	var znak = prompt("podaj operator");
	var cyfra2 = parseFloat(prompt("podaj cyfrę"));
	var wynik = calck(znak, cyfra1, cyfra2);
	alert("" + cyfra1 + " " + znak + " " + cyfra2 + " = " + wynik);
}
function calck(znak, cyfra1, cyfra2){
	switch(znak){
		case "+":
		return cyfra1+cyfra2;
		case "-":
		return cyfra1-cyfra2;
		case "*":
		return cyfra1 * cyfra2;
		case "/":
		return cyfra1 / cyfra2;
		default:
		break;
	}
	return undefined;
}	
//task6 -interaktywny sklep
function task6(){
	alert("chleb – 6.50 \n Sok – 4 \n Pączek – 5.50");
	var ileChleba = parseInt(prompt("podaj ile chcesz bochenków chleba"));
	if(Number.isNaN( ileChleba)|| ileChleba == undefined)
		ileChleba = 0;
	var ileSoku = parseInt(prompt("podaj ile chcesz kartonów soku"));
	if(Number.isNaN( ileSoku) || ileSoku == undefined)
		ileSoku = 0;
	var ileDonat = parseInt(prompt("podaj ile chcesz pączków"));
	if(Number.isNaN( ileDonat) || ileDonat == undefined)
		ileDonat = 0;
	var suma = ileChleba * 6.5 + ileSoku * 4.0+ ileDonat * 5.5;
	alert("razem do zapłaty " + suma);
}