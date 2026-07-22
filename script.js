function convertTemperature() {

    const temperatureInput =
        document.getElementById("temperature").value;

    const unit =
        document.getElementById("unit").value;

    const celsiusResult =
        document.getElementById("celsiusResult");

    const fahrenheitResult =
        document.getElementById("fahrenheitResult");

    const kelvinResult =
        document.getElementById("kelvinResult");


    if (temperatureInput === "") {

        celsiusResult.textContent =
            "Please enter a temperature.";

        fahrenheitResult.textContent = "";

        kelvinResult.textContent = "";

        return;
    }


    const temperature =
        Number(temperatureInput);


    let celsius;
    let fahrenheit;
    let kelvin;


    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit =
            (temperature * 9 / 5) + 32;

        kelvin =
            temperature + 273.15;

    }


    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius =
            (temperature - 32) * 5 / 9;

        kelvin =
            (temperature - 32) * 5 / 9
            + 273.15;

    }


    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius =
            temperature - 273.15;

        fahrenheit =
            (temperature - 273.15)
            * 9 / 5 + 32;

    }


    celsiusResult.textContent =
        "Celsius: "
        + celsius.toFixed(2)
        + " °C";


    fahrenheitResult.textContent =
        "Fahrenheit: "
        + fahrenheit.toFixed(2)
        + " °F";


    kelvinResult.textContent =
        "Kelvin: "
        + kelvin.toFixed(2)
        + " K";
}


function clearResult() {

    document.getElementById("temperature").value = "";

    document.getElementById("unit").value =
        "celsius";


    document.getElementById("celsiusResult").textContent =
        "Celsius: -";


    document.getElementById("fahrenheitResult").textContent =
        "Fahrenheit: -";


    document.getElementById("kelvinResult").textContent =
        "Kelvin: -";
}
