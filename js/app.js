
let currencyList = [
    {
        "id": "1",
        "name": "Euro US Dollar",
        "decimal": "4",
        "symbol": "EUR/USD"
    },
    {
        "id": "39",
        "name": "British Pound US Dollar",
        "decimal": "4",
        "symbol": "GBP/USD"
    }
];
let defaultCurrency = "EUR/USD";


// set currency list
var wrapper = document.getElementById("currencySelector");
var options = [];
currencyList.forEach(element => {
    if (defaultCurrency == element.symbol) {
        options.push('<option selected value="' + element.symbol + '">' + element.name + '</option>');
    } else {
        options.push('<option value="' + element.symbol + '">' + element.name + '</option>');
    }

});
wrapper.innerHTML = options
// end currency list



let timeframes = [
    { lable: "1 Minutes", value: "1m" },
    { lable: "5 Minutes", value: "5m" },
    { lable: "15 Minutes", value: "15m" },
    { lable: "30 Minutes", value: "30m" },
    { lable: "1 Hour", value: "1h" },
    { lable: "4 Hours", value: "4h" },
    { lable: "5 Hours", value: "5h" },
    { lable: "1 Day", value: "1d" },
    { lable: "1 Week", value: "1w" },
    { lable: "A Month", value: "month" },
];
let defaultTimeframe = "1h";

// set timeframe list
var wrapper = document.getElementById("timeframeSelector");
var options = [];
timeframes.forEach(element => {
    if (defaultTimeframe == element.value) {
        options.push('<option selected value="' + element.value + '">' + element.lable + '</option>');
    } else {
        options.push('<option value="' + element.value + '">' + element.lable + '</option>');
    }
});
wrapper.innerHTML = options
// end timeframe list







function generateSignal() {
    var symbol = document.getElementById("currencySelector").value;
    var period = document.getElementById("timeframeSelector").value;

    // let ma_url = "https://fcsapi.com/api-v2/forex/ma_avg?symbol=" + symbol + "&period=" + period + "&access_key=" + accessKey;

    // $.ajax({
    //     url: ma_url,
    //     context: document.body,
    //     success: function (result) {
    //             console.log(result);
    //     },
    //     error: function (result) {
    //         console.log(result);
    //     }
    // });


    let ti_url = "https://fcsapi.com/api-v2/forex/indicators?symbol=" + symbol + "&period=" + period + "&access_key=" + accessKey;
    var table = $("#technical_indicators tbody");
    $.ajax({
        url: ti_url,
        context: document.body,
        success: function (result) {
            tiArray = result.response.indicators;
            const indicatorArray = Object.keys(tiArray);
            var tdArray = [];

            indicatorArray.forEach((indicator) => {
                if (tiArray[indicator].v != undefined) {
                    let signal;

                    console.log(tiArray[indicator]);

                    if (tiArray[indicator].s == "Buy") {
                        signal = '<span class="green bold uppercase">' + tiArray[indicator].s + '</span>';
                    } else if (tiArray[indicator].s == "Sell") {
                        signal = '<span class="red bold uppercase">' + tiArray[indicator].s + '</span>';
                    } else if (tiArray[indicator].s == "Neutral") {
                        signal = '<span class="gray bold uppercase">' + tiArray[indicator].s + '</span>';
                    } else {
                        signal = '<span class="gray uppercase">' + tiArray[indicator].s + '</span>';
                    }

                    tdArray.push('<tr><td class="tg-0lax">' + indicator + '</td><td class="tg-0lax">' + tiArray[indicator].v + '</td><td class="tg-0lax">' + signal + '</td></tr>');
                }
            });
            table[0].innerHTML = tdArray.join("");
        },
        error: function (result) {
            console.log(result);
        }
    });

    // let url = "https://fcsapi.com/api-v3/forex/profile?symbol=EUR/USD,GBP/CHF&access_key=" + accessKey;
    // $.ajax({
    //     url: url,
    //     context: document.body,
    //     success: function (result) {
    //         //   $(this).addClass("done");
    //         if (result.code == 200) {
    //             console.log(result);
    //         }

    //     },
    //     error: function (result) {
    //         console.log(result);
    //     }
    // });
}

function moving_averages() {

}


function getAllCurrencies() {
    let url = "https://fcsapi.com/api-v3/forex/list?type=forex&access_key=" + accessKey;
    $.ajax({
        url: url,
        context: document.body,
        success: function (result) {
            console.log(result);
        },
        error: function (result) {
            console.log(result);
        }
    });
}