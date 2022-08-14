'use strict';

class ChatManager {
    constructor(e) {
        this.phoneScreen = document.querySelector(e.screen);
        this.sendBtn = document.querySelector(e.sendBtn);
        this.offBtn = document.querySelector(e.offBtn);
        this.userInput = document.querySelector(e.userInput);

        this.listOfBotReplies = ["Ты такой прикольный","Вы высокоинтеллектуальный собеседник",
        "Цой жив.","Помогите, меня взяли в заложники и заставили отвечать на ваши сообщения!", "В чём смысл жизни?","А ты подписан(а) на инсту разраба? P.S zeldr1zz",
        "Отличная погода сегодня!","Псс если нашёл баги, пиши разрабу!", "Меня похитили, заставили работать и платят за это дошиком.",
        "Пиши что-нибудь полегче", "Мне тяжело, решать твои уравнения.", `Штирлиц долго смотрел в одну точку. Потом перевел взгляд и посмотрел на другую. "Двоеточие!" - догадался Штирлиц.`, 
        `Штирлиц стрелял вслепую. Слепая бегала зигзагами и кричала`, `Штирлицу в голову попала пуля. "Разрывная" - подумал Штирлиц пораскинув мозгами.`,
        `Штирлиц мог спать сутками. Но утки с ним спать не хотели.`, `- Штирлиц катался на велосипеде и разбил яйца об раму.
        - Через два дня Абрам умер.`, `– Как отличить Снеговика от Снежной бабы?
        – Очень просто, надо посмотреть, куда детишки воткнули морковку.`, `Как по–татарски будет «Примите к сведению»?
        «Учти, бля!»`, `Каждый китаец делает по утрам зарядку.
        А по вечерам относит ее на рынок.`, `Извините, я не знакомлюсь, у меня есть жена, мы с ней обречены.`, `Дружба начинается с того момента, когда ваши переписки становятся похожими на разговор двух недоразвитых гопников.`,
        `— Вы что-нибудь умеете делать быстро?
        — Да, я быстро устаю.`, `Трудно говорить о дружбе Украины и России, когда на одном гербе вилка, а на другом - курица.`, `Самое большое заблуждение у женщин: он изменится
        Самое большое заблуждение у мужчин: возьмем литр, должно хватить …`, `Мой жизненный опыт показал что в жизни не врут две вещи… Это зеркало и исправные весы.`,
        `- Чем отличается опытный специалист от молодого?
        - Молодой специалист не умеет работать, а опытный - умеет не работать.`, `Что сделал казах в первую очередь, когда играл в шахматы? - Съел коня`];

        this.listOfBotRepliesCopy = this.listOfBotReplies.slice(0);

        this.sendBtn.addEventListener("click", () => this.sendBtnFunc());
        this.userInput.addEventListener("keydown", (e)=> e.keyCode == 13 ? this.sendBtnFunc() : null);
        this.offBtn.addEventListener("click", ()=> this.offBtnFunc());
    }
    sendBtnFunc() {
        if (window.clientWidth > 800) {
            if (this.phoneScreen.clientHeight > 480) {
                let text = this.userInput.value;
                this.phoneScreen.innerHTML = `<p class="user__message">${text}</p>`;
                this.userInput.value = '';
                this.radomBotMessage()
            } else {
                let text = this.userInput.value;
                this.phoneScreen.innerHTML += `<p class="user__message">${text}</p>`;
                this.userInput.value = '';
                this.radomBotMessage()
            }
        } else {
            if (this.phoneScreen.clientHeight > 360) {
                let text = this.userInput.value;
                this.phoneScreen.innerHTML = `<p class="user__message">${text}</p>`;
                this.userInput.value = '';
                this.radomBotMessage()
            } else {
                let text = this.userInput.value;
                this.phoneScreen.innerHTML += `<p class="user__message">${text}</p>`;
                this.userInput.value = '';
                this.radomBotMessage()
            }
        }
    }
    radomBotMessage() {
        if (this.listOfBotRepliesCopy.length > 0) {
            let randomReply = Math.floor(Math.random() * this.listOfBotRepliesCopy.length);
            this.phoneScreen.innerHTML += `<p class="bot__message">${this.listOfBotRepliesCopy[randomReply]}</p>`;
            this.listOfBotRepliesCopy.splice(randomReply, 1);
        } else {
            this.listOfBotRepliesCopy = this.listOfBotReplies.slice(0);
            let randomReply = Math.floor(Math.random() * this.listOfBotRepliesCopy.length);
            this.phoneScreen.innerHTML += `<p class="bot__message">${this.listOfBotRepliesCopy[randomReply]}</p>`;
            this.listOfBotRepliesCopy.splice(randomReply, 1);
        }
        console.log(this.listOfBotReplies);
        console.log(this.listOfBotRepliesCopy);
    }
    offBtnFunc() {
        location.reload();
    }
}

const chat = new ChatManager({
    screen: ".phone__screen_messageBox",
    sendBtn: ".phone__input_sendBtn",
    offBtn: ".phone__bottom_offBtn",
    userInput: ".phone__input_inp"
});