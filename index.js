var quotes= [
"The greatest glory in living lies not in never falling, but in rising every time we fall -Nelson Mandela",
"The way to get started is to quit talking and begin doing. -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking-Steve Jobs",
"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.-Oprah Winfrey"
];
var colours=["tomato","pink","green","yellow","purple","grey"];
function getRandomColour()
{
	var num1 = Math.random()*(colours.length-1);
	var num2 = Math.floor(num1);
	return colours[num2];
}
function getRandomNumber()
{
	var arr=[0,1,2,3,4];
	var num= Math.random()*(arr.length-1);
	var num1 = Math.floor(num);
	return num1;
}

function getRandomQuotes()
{
	var randomQuotes = quotes[getRandomNumber()];
	var randomColour = getRandomColour();
	console.log(quotes[getRandomNumber()]);
	document.getElementById('displayQuote').innerHTML=randomQuotes ;
	document.getElementById('displayQuote').style.backgroundColor =randomColour;
}
	