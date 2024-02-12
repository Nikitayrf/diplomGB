const userName = 'Name';
export const sceneConfigurations = [
    {
        background: ["./images/bg1.png"],
        dialogues: [
            {
                dialogue: [
                    `Здравствуй ${userName}, я Бабушка, и у меня беда, книжка упала, и все герои перемешались, я уже старенькая, и самой мне их не собрать, поможешь мне это сделать? Тогда в путь!`,
                ],
                btns: ["Поехали!"],
            },
            {
                dialogue: ["Кто из героев сказки тянул репку после Жучки?"],
                btns: ["Кошка", "Внучка", "Мышка"],
                isTestBtns: true,
                actionImage: ["./images/2.png"],
            },
            {
                dialogue: [`Молодец ${userName}, начинает получаться. Так же, как и в сказке 'Репка', мы помогаем друг другу, идём дальше?`],
                btns: ["Далее..."],
            },
            {
                dialogue: ["Сивка-Бурка это?"],
                btns: ["Корова", "Конь", "Бык", "Курица"],
                isTestBtns: true,
                actionImage: ["./images/3.png"],
            },
            {
                dialogue: ["Посмотри, впереди девочка, ей нужна помощь, давай скорей поможем ей!"],
                btns: ["Далее..."],
            },
            {
                dialogue: ["Кто обижает добрую девочку-сироту в сказке «Морозко»?"],
                btns: ["Злая мачеха", "Баба-Яга", "Змей Горыныч"],
                isTestBtns: true,
                actionImage: ["./images/4.png"],
            },
            {
                dialogue: ["Обижать людей нехорошо, а что это за странный дом впереди?"],
                btns: ["Далее..."],
            },
            {
                dialogue: ["На каких ножках стоит дом Бабы-Яги?"],
                btns: ["На деревянных", "На курьих", "На железных", "На бетонных"],
                isTestBtns: true,
                actionImage: ["./images/5.png"],
            }
        ],
    },
    {
        background: ['./images/bg2.png'],
        dialogues: [
            {
                dialogue: [`Мяу-мяу, ну что ж приятно познакомиться ${userName}, я Кот учёный, бабушкин друг, пойдём покажу, что ещё в книге нужно расставить по местам.`],
                btns: ["Далее..."],
            },
            {
                dialogue: ["Имя царя, у которого Иван-царевич украл Жар-птицу?"],
                btns: ["Николай", "Салтан", "Афрон", "Алексей", "Добрыня"],
                isTestBtns: true,
                actionImage: ["./images/6.png"],
            },
            {
                dialogue: ["Кто это у нас тут отдыхает, давай-ка узнаем."],
                btns: ["Далее..."],
            },
            {
                dialogue: ["Какое самое любимое место Иванушки-дурачка для сна и отдыха?"],
                btns: ["Кровать", "Печь", "Пол", "Парк"],
                isTestBtns: true,
                actionImage: ["./images/7.png"],
            },
            {
                dialogue: ["Что ж, надёюсь мы не ошиблись, пойдём дальше."],
                 btns: ["Далее..."],
             }, 
            {
                dialogue: ["Кто разбил золотое яйцо?"],
                isTestBtns: true,
                btns: ["Дед", "Мышка", "Баба", "Курица"],
                actionImage: ["./images/1.png"],
            },
            {
                dialogue: [`Так держать ${userName},не сбавляем темп!Мур-мяу.`],
                btns: ["Далее..."],
            },
            {
                dialogue: ["Избушку какого героя заняла коза-дереза?"],
                isTestBtns: true,
                btns: ["Зайчика", "Медведя"],
                actionImage: ["./images/8.png"],
            },
            {
                dialogue: [`Ну как тебе ${userName}?Не слишком сложно?Всё получится, нужно помочь ещё паре героев, вперёд.`],
                btns: ["Далее..."],
            },
            {
                dialogue: ["Иванушка стал козленочком, когда выпил воду из козьего копытца. А как он снова стал мальчиком?"],
                isTestBtns: true,
                btns: ["Три раза перекувыркнулся через голову", "Выпил волшебной воды", "Искупался в чистой реке"],
                actionImage: ["./images/9.png"],
            },
            {
                dialogue: ["Что ж, думаю мы на правильном пути!"],
                btns: ["Далее..."],
            },
            {
                dialogue: ["Птицы, которые унесли братца, в то время как сестрица загулялась-заигралась, были?"],
                isTestBtns: true,
                btns: ["Сороки-вороны", "Гуси-лебеди", "Утки-крякушки"],
                actionImage: ["./images/10.png"],
            },
            {
                dialogue: ["Молодец, мы очень ценим твою помощь, пришло время узнать результат."],
                btns: ["Результат"],
            },
            {
                dialogue: ["Что предлагала лиса петушку, чтобы он выглянул в окошко?"],
                isTestBtns: true,
                btns: ["Молочко", "Зернышко", "Горошек"],
                actionImage: ["./images/11.png"],
            },
            {
                dialogue: ["Что в сказке «Иван-царевич и серый волк» называется «живой» и «мертвой»"],
                isTestBtns: true,
                btns: ["Земля", "Трава", "Вода"],
                actionImage: ["./images/1.png"],
            },
            {
                dialogue: ["Какой продукт лиса размазала по тарелке и подала журавлю в сказке «Лиса и журавль»?"],
                isTestBtns: true,
                btns: ["Суп", "Кашу", "Оладушек", "Пюре"],
                actionImage: ["./images/1.png"],
            },
            {
                dialogue: ["Кто сломал теремок в сказке «Теремок»?"],
                isTestBtns: true,
                btns: ["Чудо-юдо", "Волк", "Медведь"],
                actionImage: ["./images/1.png"],
            }
        ]
    }
]