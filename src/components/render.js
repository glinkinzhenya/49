function render(mass) {

    const divContainer = document.createElement("div");
    divContainer.classList.add("container");
    document.querySelector("body").append(divContainer);

    mass.forEach(element => {

        const div = document.createElement("div");
        div.classList.add("person");

        const name = document.createElement("p");
        name.innerText = `Имя: ${element.name}`;
        div.append(name);

        const age = document.createElement("p");
        age.innerText = `Возраст: ${element.age}`;
        div.append(age);

        const email = document.createElement("p");
        email.innerText = `email: ${element.email}`;
        div.append(email);

        const country = document.createElement("p");
        country.innerText = `страна: ${element.country}`;
        div.append(country);

        const company = document.createElement("p");
        country.innerText = `компания: ${element.company}`;
        div.append(company);

        const birthday = document.createElement("p");
        birthday.innerText = `день рождения: ${element.birthday}`;
        div.append(birthday);

        divContainer.append(div);

    });
}

export default render;