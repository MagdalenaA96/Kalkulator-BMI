let $button = document.getElementById("BMIButton");
let $placeholder = document.getElementById("placeholder");

$button.addEventListener("click", countBMI);

function countBMI(height, weight) {
    let previousResult = document.getElementById("result");
    let previousDescription = document.getElementById("description");
    let previousRange = document.getElementById("rangeOfBMI");
    if (previousResult) {
        $placeholder.removeChild(previousResult);
    }

    if (previousDescription) {
        $placeholder.removeChild(previousDescription);
    }

    if (previousRange) {
        $placeholder.removeChild(previousRange);
    }

    height = parseFloat(document.getElementById("height").value);
    weight = parseFloat(document.getElementById("weight").value);

    if (height > 0 && weight > 0) {
        height = height / 100;
        let result = weight / height ** 2;
        let BMI = result.toFixed(1);
        interpretationOfResult(BMI);
    } else {
        alert("Podaj właściwe dane!");
    }
}

function interpretationOfResult(BMI) {
    let myDiv = document.createElement("div");
    let pBMI = document.createElement("p");
    let spanBMI = document.createElement("span");
    let description = document.createElement("p");
    let rightRange = document.createElement("p");
    myDiv.id = "result";
    myDiv.appendChild(pBMI);
    pBMI.classList.add("myBMI");
    spanBMI.classList.add("myBMI");
    spanBMI.id = "BMIResult";
    pBMI.innerText = "Twoje BMI:";
    spanBMI.innerText = `${BMI}`;
    myDiv.appendChild(spanBMI);
    $placeholder.appendChild(myDiv);
    $placeholder.appendChild(description);
    $placeholder.appendChild(rightRange);
    rightRange.id = "rangeOfBMI";
    rightRange.innerText = "Prawidłowy zakres BMI: 18.5 - 24.9";
    description.id = "description";
    if (BMI < 18.5) {
        description.innerText =
            "Wartość Twojego BMI wskazuje na niedowagę. W zależności od tego, jaką przemianę materii posiadasz, może być to naturalne. Warto jednak zastanowić się, czy jedzenie, które spożywasz na pewno pokrywa Twoje dzienne zapotrzebowanie energetyczne. Pamiętaj, zdrowie jest najważniejsze! :)";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        description.innerText =
            "Gratulacje! Twoje BMI jest w normie. Oby tak dalej! Pamiętaj, że dla utrzymania zdrowia ważne jest spożywanie zbilansowanych poisłków i uprawianie aktywności fizycznej.";
    } else if (BMI >= 25 && BMI <= 29.9) {
        description.innerText =
            "Wartość Twojego BMI wskazuje na nadwagę. Pamiętaj, że nadwaga to nie otyłość. Powodów wystąpienia nadwagi może być naprawdę wiele. Warto jednak przyjrzeć się, czy Twoja dieta i częstotliwość podejmowania aktywnosci fizycznej odpowiadają potrzebom Twojego organizmu i przyczyniają się do utrzymania zdrowia.";
    } else {
        description.innerText =
            "Wartość Twojego BMI wskazuje na otyłość. Waga nie jest w życiu najważniejsza, jednak warto się przyjrzeć, czy Twoja dieta i częstotliwość uprawiania aktywności fizycznej przyczyniają się do utrzymania przez Ciebie zdrowia. Pamiętaj, że długo utrzymująca się otyłość połączona z brakiem ruchu, może prowadzić do szeregu powikłań w przyszłości. Być moze warto skonsultować się z dietetykiem.";
    }
}
