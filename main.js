import { sceneConfigurations } from "./components/sceneConfigurations.js";

const startBtn = document.querySelector(".start-quest__btn");
const closeQuest = document.querySelector(".quest__controls-close");
const questWindow = document.querySelector(".quest");
const questCharacterPage = questWindow.querySelector(".quest__character");
const startQuiz = questCharacterPage.querySelector(".quest__character-start");
const questCharacterParts = questCharacterPage.querySelectorAll(".quest__character-part");
const questFirstPartBtn = questWindow.querySelector(".quest__character-begin");
const chooseCharacterBtns = document.querySelectorAll(".quest__character-item");
const questCharacterInput = questCharacterPage.querySelector(".quest__character-input");
const questBackground = questWindow.querySelector(".quest__background");
const questBackgroundImage = questBackground.querySelector(".quest__background-image");
const questBtnsContainer = questWindow.querySelector(".quest__btns");
const questDialogue = questWindow.querySelector(".quest__dialogue");
let response = [];
let sceneCounter = 0;
let dialogueCounter = 0;
let userName;

function switchScene() {
    if (sceneCounter < sceneConfigurations(userName).length) {
        const currentScene = sceneConfigurations(userName)[sceneCounter];
        const currentDialogue = currentScene.dialogues[dialogueCounter];
        questBackgroundImage.src = currentScene.background;
        questDialogue.textContent = currentDialogue.dialogue;
        if (currentDialogue.isTestBtns) {
            questWindow.setAttribute("istest", "true");
            const questContainer = document.querySelector(".quest__btns");
            questContainer.insertAdjacentHTML(
                "beforebegin",
                `<div class="quest__action-img">
                    <img src="${currentDialogue.actionImage}" alt="action image">
                </div>`
            );
        } else {
            questWindow.setAttribute("istest", "false");
            const questActionImg = document.querySelector(".quest__action-img");
            if (questActionImg) {
                questActionImg.remove();
            }
        }
        questBtnsContainer.innerHTML = "";
        currentDialogue.btns.map((btn, index) => {
            const btnElement = document.createElement("div");
            btnElement.className = "quest__btns-item";
            btnElement.textContent = btn;
            btnElement.addEventListener("click", () => {
                switchScene();
                if (currentDialogue.isTestBtns) {
                    response.push(index);
                    console.log(response);
                }
            });
            questBtnsContainer.append(btnElement);
        });
        if (dialogueCounter < currentScene.dialogues.length - 1) {
            dialogueCounter++;
        } else {
            dialogueCounter = 0;
            sceneCounter++;
        }
    } else {
        questBtnsContainer.innerHTML = "";
    }
}

function handleCharacterPage(bool) {
    bool ? questCharacterPage.classList.add("active") : questCharacterPage.classList.remove("active");
    questDialogue.style.display = bool ? "none" : "";
    questBtnsContainer.style.display = bool ? "none" : "";
    handleCharactersParts();
}

function handleCharactersParts() {
    questCharacterParts.forEach((part) => {
        if (part.classList.contains("active")) {
            part.classList.remove("active");
        }
    });
}

function activateNextPart() {
    const currentPart = questWindow.querySelector(".quest__character-part.active");

    if (currentPart) {
        currentPart.classList.remove("active");
        const nextPart = currentPart.nextElementSibling;
        if (nextPart) {
            nextPart.classList.add("active");
        }
    }
}

function init() {
    startBtn.addEventListener("click", () => {
        if (!questWindow.classList.contains("active")) {
            questBackgroundImage.src = "./images/bg2.png";
            handleCharacterPage(true);
            questWindow.classList.add("active");
            questCharacterParts[0].classList.add("active");
            setTimeout(() => {
                questWindow.style.opacity = "1";
            }, 100);
        }
    });

    questFirstPartBtn.addEventListener("click", activateNextPart);
    chooseCharacterBtns.forEach((item) => item.addEventListener("click", activateNextPart));

    startQuiz.addEventListener("click", () => {
        if (questCharacterInput.value == "") {
            questCharacterInput.classList.add("error");
        } else {
            if (questCharacterInput.classList.contains("error")) {
                questCharacterInput.classList.remove("error");
            }
            handleCharacterPage(false);
            userName = questCharacterInput.value;
            switchScene();
        }
    });

    closeQuest.addEventListener("click", () => {
        questWindow.insertAdjacentHTML(
            "beforeend",
            `<div class="quest__confirm">
                <h3 class="quest__confirm-title">Точно хочешь уйти? <br> Прогресс сбросится...</h3>
                <div class="quest__confirm-btns">
                    <div class="quest__confirm-btns-item" id="confirm__yes">
                        <img src="./images/yes.svg" alt="yes">
                    </div>
                    <div class="quest__confirm-btns-item" id="confirm__no">
                        <img src="./images/no.svg" alt="no">
                    </div>
                </div>
            </div>`
        );

        questWindow.classList.add("confirm");

        document.getElementById("confirm__yes").addEventListener("click", () => {
            questWindow.querySelector(".quest__confirm").remove();
            if (questWindow.classList.contains("active")) {
                questWindow.style.opacity = "0";
                setTimeout(() => {
                    questWindow.classList.remove("active");
                    sceneCounter = 0;
                    dialogueCounter = 0;
                    response = [];
                    switchScene();
                }, 400);
            }
            questWindow.classList.remove("confirm");
        });

        document.getElementById("confirm__no").addEventListener("click", () => {
            questWindow.querySelector(".quest__confirm").remove();
            questWindow.classList.remove("confirm");
        });

        questWindow.addEventListener("click", (event) => {
            if (questWindow.querySelector(".quest__confirm") && !event.target.closest(".quest__confirm") && !event.target.closest(".quest__controls-close")) {
                questWindow.querySelector(".quest__confirm").remove();
                questWindow.classList.remove("confirm");
            }
        });
    });
}

init();
