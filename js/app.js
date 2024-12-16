const App = {
    $: {
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu__items"]'),
        resetBtn: document.querySelector('[data-id="menu__button_reset"]'),
        newRoundBtn: document.querySelector('[data-id="menu__button_new"]'),
        squares: document.querySelectorAll('[data-id="square"]'),
    },
    state: {
        currentPlayer: 1,
    },

    init() {
        App.registerEventListeners();
    },

    registerEventListeners() {
        App.$.menu.addEventListener('click', (e) => {
            App.$.menuItems.classList.toggle('hidden');
        });
        App.$.resetBtn.addEventListener('click', () => {
            console.log('Reset');
        });
        App.$.newRoundBtn.addEventListener('click', () => {
            console.log('New round');
        });
        App.$.squares.forEach((square) => {
            square.addEventListener('click', (e) => {
                if (square.hasChildNodes()) return;

                // <i className="fa-solid fa-x color-player-1"></i>
                const icon = document.createElement('i');

                if (App.state.currentPlayer === 1) {
                    icon.className = 'fa-solid fa-x color-player-1';
                } else {
                    icon.className = 'fa-solid fa-o color-player-2';
                }
                square.replaceChildren(icon);

                App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;
            });
        });
    },
}

window.addEventListener('load', () => App.init());