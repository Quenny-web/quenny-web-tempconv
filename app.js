function fahrenheitTemperatureConverterToCelsius(valNum)
    {
      valNum = parseFloat(valNum);
      document.getElementById("outputCelsius").innerHTML=((valNum-32)/1.8);        valNum = parseFloat(valNum);
      document.getElementById("outputKelvin").innerHTML=((valNum-32)/1.8+273);
    }

    function celsiusTemperatureConverterToFahrenheit(valNum)
    {
        valnum = parseFloat(valNum);
        document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
        document.getElementById("outputKelvin2").innerHTML=valNum+273.15;
    }

  function kelvinTemperatureConverterToFahrenheit2(valNum)
  {
      valNum = parseFloat(valNum);
      document.getElementById("outputFahrenheit2").innerHTML=((valNum-273.15)*1.8)+32;
      document.getElementById("outputCelsius2").innerHTML=valNum-273.15;
  }
