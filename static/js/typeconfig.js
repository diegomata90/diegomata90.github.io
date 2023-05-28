// ============ Forma 1 ====================
// ===== Solo Salga la palabra =============

// const typed = new Typed('.typed',{
//     strings: [
//         '<i class="profesion">Devoloper</i>',
//         '<i class="profesion">Analista</i>',
//         '<i class="profesion">Other</i>',
//         '<i class="profesion">A ver..</i>'
//     ],

// 	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
// 	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
// 	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
// 	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
// 	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
// 	shuffle: false, // Alterar el orden en el que escribe las palabras.
// 	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
// 	loop: true, // Repetir el array de strings
// 	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
// 	showCursor: true, // Mostrar cursor palpitanto
// 	cursorChar: '|', // Caracter para el cursor
// 	contentType: 'html', // 'html' o 'null' para texto sin formato
//   });

// ============ Forma 2 ====================
// ===== Sirva para SEO =============

const typed = new Typed('.typed',{

	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
  });


  const typed2 = new Typed('.typedName',{

	stringsElement: '#cadenas-texto-name', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 400, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
  }); 