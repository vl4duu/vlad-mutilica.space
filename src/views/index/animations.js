function expand() {
    new anime({
        targets: '.avatar-container',
        scale: [
            {value: 1.3, duration: 1000}
        ],
        translateY: [{value: 10, duration: 1000}]
    })

    new anime({
        targets: '.contents',
        scale: [
            {value: 0.9, duration: 1000}
        ],
        translateY: [{value: 20, duration: 1000}]
    })
}

function contract() {
    new anime({
        targets: '.avatar-container',
        scale: [
            {value: 1, duration: 1000}
        ],
        translateY: [{value: -10, duration: 1000}]
    })

    new anime({
        targets: '.contents',
        scale: [
            {value: 1, duration: 1000}
        ],
        translateY: [{value: -20, duration: 1000}]
    })

    return null;
}