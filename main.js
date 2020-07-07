let coin = {
    state: 0,
    flip: function () {
        if (Math.floor(Math.random() * 2)) {
            this.state = 0
        } else {
            this.state = 1
        }
    },

    toString: function () {
        if (this.state === 1) {
            return "Heads"
        } else {
            return "Tails"
        }
    },

    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 1) {
            image.src = "./images/heads.jpg"
        } else {
            image.src = "./images/tails.jpg"
        }
        image.width = 100

        return image;
    }
};

console.log(coin.toString())
console.log(coin.toHTML())

display20Flips()
display20Images()

function display20Flips() {
    for (i = 0; i < 20; i++) {
        coin.flip();
        let string = coin.toString();
        document.body.append(string, " ");
    }
}

function display20Images() {
    for (i = 0; i < 20; i++) {
        coin.flip();
        let index = coin.toHTML();
        document.body.append(index, " ")
    }
}