'use strict';

new TypeIt('.home__title--strong', {
    loop: true,
    speed: 80,
})
    .pause(2000)
    .move(null, { to: 'START' })
    // .type('Big ')
    // .pause(2000)
    .move(null, { to: 'END' })
    // .delete()
    // .type('Front-end Engineer')
    // .pause(2000)
    // .move(-9)
    // .delete(9)
    // .type('Back-end')
    // .pause(1000)
    // .delete(8)
    // .type('Full-stack')
    // .pause(1000)
    // .move(9)
    .delete()
    .go()