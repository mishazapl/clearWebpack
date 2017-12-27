const createPerson = (name, surname) => {
    let fullname = 'Ваше имя и фамилия ' +name + ' ' + surname;
    return fullname;
};

console.log(createPerson('Misha', 'Zapalenov'));