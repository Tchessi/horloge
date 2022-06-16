var hoursLine = document.querySelector('.hours');

var dateLine = document.querySelector('.date');

var displayHours = function () {
	// On déclares les variables qui vont etre utilisées

	var toDay,
		year,
		monthsList,
		month,
		daysList,
		dayNumber,
		dayName,
		hours,
		minutes,
		seconds,
		twoNumber;

	// On récupère la date actuelle
	toDay = new Date();

	// On récupère l'année

	year = toDay.getFullYear();

	// On récupère les mois

	monthsList = [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Août',
		'Septembre',
		'Octobre',
		'Novembre',
		'Décembre',
	];

	month = monthsList[toDay.getMonth()];

	// On récupère le numéro du jour du mois
	dayNumber = toDay.getDate();

	// On récupère le jour
	daysList = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Vendredi', 'Samedi'];

	dayName = daysList[toDay.getDay()];

	// On affiches les heures, minutes, et secondes

	twoNumber = function (element) {
		if (element < 10) {
			return (element = '0' + element);
		} else {
			return element;
		}
	};

	// On récupère les heures
	hours = twoNumber(toDay.getHours());

	// On récupère les minutes
	minutes = twoNumber(toDay.getMinutes());

	// On récupère les secondes
	seconds = twoNumber(toDay.getSeconds());

	// Affichage des div "clock" du HTML

	hoursLine.textContent = hours + ':' + minutes + ':' + seconds;
	dateLine.textContent = dayName + ', ' + dayNumber + ' ' + month + ' ' + year;
	// Lancement de la fonction displayHours

	setTimeout(displayHours, 1000);
};

// Lancer la fonction une fois au début

displayHours();
