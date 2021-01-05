		<script>
			var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'novmeber', 'december');
			var weekdag = new Array('maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag' , 'zaterdag', 'zondag');
			var tijd = Date.now();
			document.write('<br> Vandaag is: ' + getDate() + tijd);
			document.write('<br> Vandaag is: ' + weekdag[3] + '31' + maanden[9] + getFullYear());
		</script>