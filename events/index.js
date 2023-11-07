// TODO 1
const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name},`);
};

const countYear = (year) => {
    console.log(`You are in ${year} year old!`);
};

const onBirthdayCountYearListener = ({ name, year }) => {
    birthdayEventListener(name);
    countYear(year);
};

// TODO 2
const myEmitter = new EventEmitter;

// TODO 3
myEmitter.on('birthday', onBirthdayCountYearListener);

// TODO 4
myEmitter.emit('birthday', { name: 'Gamal', year: 24 });