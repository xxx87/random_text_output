var quote = [
    {"name": "Йожеф Этвес", "quot": "Благосостояние государства обеспечивают не те деньги, которые оно ежегодно отпускает чиновникам, а те, что оно ежегодно оставляет в карманах граждан"}, 
    {"name": "Бенджамин Франклин", "quot": "Большая империя, как и большой пирог, начинает крошиться с краев"}, 
    {"name": "Аристотель", "quot": "В тех демократических государствах, где решающее значение имеет закон, демагогам нет места, там на первом месте стоят лучшие граждане; но там, где верховная власть основана не на законах, появляются демагоги"},
    {"name": "Уинстон Черчилль", "quot": "Главный недостаток капитализма – неравное распределение благ; главное преимущество социализма – равное распределение лишений"},
    {"name": "Жан Массийон", "quot": "Государства, в которых правит толпа, отрекаются от законов так же легко, как и от веры своих отцов"},
    {"name": "Вольтер", "quot": "Государственное образование, именовавшееся Священной римской империей, не было ни священной, ни римской, ни империей"},
    {"name": "Антон Чехов", "quot": "Государство – не Бог, оно не имеет права отнимать то, что не может вернуть, если захочет"},
    {"name": "Артур Шопенгауэр", "quot": "Государство – не что иное, как намордник для усмирения плотоядного животного, называющегося человеком, для придания ему отчасти травоядного характера"},
    {"name": "Николай Бердяев", "quot": "Государство существует не для того, чтобы превращать земную жизнь в рай, а для того, чтобы помешать ей окончательно превратиться в ад"},
    {"name": "Людвиг Берне", "quot": "Если бы природа имела столько законов, как государство, сам Господь не в состоянии был бы управлять ею"},
    {"name": "Конфуций", "quot": "Когда государство управляется согласно с разумом, постыдны бедность и нужда; когда государство не управляется согласно с разумом, то постыдны богатства и почести"},
    {"name": "Никколо Макиавелли", "quot": "Коли нету здравого ума,	Не будут долговечными державы, Где перемен сплошная кутерьма"},
    {"name": "Мишель де Монтень", "quot": "Лучшее государственное устройство для любого народа – это то, которое сохранило его как целое"},
    {"name": "Уинстон Черчилль", "quot": "Репутация государства точнее всего определяется суммой, которую оно способно взять в долг"},
    {"name": "Франсуа де Ларошфуко", "quot": "Роскошь и чрезмерная изысканность предрекают верную гибель государству, ибо свидетельствуют о том, что все частные лица пекутся лишь о собственном благе, нисколько не заботясь о благе общественном"},
    {"name": "Джордж Оруэлл", "quot": "Тоталитарное государство устанавливает неопровержимые догмы и меняет их со дня на день"},
    {"name": "Станислав Ежи Лец", "quot": "Чем мельче граждане, тем больше кажется империя"},
    {"name": "Тацит", "quot": "Чем сильнее падение государства, тем больше у него законов"},
    {"name": "Фридрих Дюрренматт", "quot": "Государство всегда именуют отечеством, когда готовятся к убийству людей"}
];

var _quote = document.getElementById('quote');
var _autor = document.getElementById('autor');

function randomQuote() {

    var rand_quote = Math.floor(Math.random()*quote.length);
    var rand_text = quote[rand_quote];

    _quote.innerHTML = rand_text['quot'];
    _autor.innerHTML = rand_text['name'];
};

randomQuote();

function timer(){

    var divT = document.getElementById('timer');
    divT.innerHTML--;

    if(divT.innerHTML==0){
        randomQuote();
        divT.innerHTML = '11';
        timer();
    } else {
        setTimeout(timer,1000);
    };
};


