// Les varibles
let citation = document.querySelector('.citation');
let authour = document.querySelector('.author');
let nouvelleCitation = document.querySelector('.newsCitation');
// La variable qui va initialiser l'index du tableau
let index = 0;
// la variable qui va prendre le nombre nombre aléatoire de l'index
let nombreAleatoire = 0; 
// Tableau de citations
let citations = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"],
    ["Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.", "Winston Churchill"],
    ["La seule façon de faire du bon travail, c’est d’aimer ce que vous faites.", "Steve Jobs"],
    ["Dans la vie, rien n’est à craindre, tout est à comprendre.", "Marie Curie"],
    ["Le futur appartient à ceux qui croient en la beauté de leurs rêves.", "Eleanor Roosevelt"],
    ["La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.", "Albert Einstein"],
    ["Ne laissez pas le bruit des opinions des autres étouffer votre voix intérieure.", "Steve Jobs"],
    ["Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.", "Albert Schweitzer"],
    ["Il n’y a pas de chemin vers le bonheur, le bonheur est le chemin.", "Bouddha"],
    ["La connaissance parle, mais la sagesse écoute.", "Jimi Hendrix"],
    ["Votre temps est limité, ne le gâchez pas en menant une existence qui n’est pas la vôtre.", "Steve Jobs"]
  ];


function generateurNombre(max){
    return Math.floor(Math.random() * Math.floor(max))
   }

  nouvelleCitation.addEventListener('click', () =>{
    do{
      nombreAleatoire = generateurNombre(citations.length)
    }while(nombreAleatoire == index);

     citation.textContent = citations[nombreAleatoire][0];
     authour.textContent = citations[nombreAleatoire][1];
    //  Pour ne pas retrouver deux fois la même citation 
     index = nombreAleatoire;
  })
