<?php
    require __DIR__ . '/controller.php';
    $env = json_decode(file_get_contents("env.json"), true)['env'];
    $params = getUrlParams();

    // Pivot Point
    $api_url_1 = $env['API_V2'].$env['API_TYPE']."/pivot_points?symbol=".$params['symbol']."&period=".$params['period']."&access_key=".$env['APP_KEY'];
    $returnObject = json_decode(getData($api_url_1), true);
    $pp_signal = $returnObject['response']['oa_summary'];
    // echo $pp_signal;

    // Moving Average
    $api_url_2 = $env['API_V2'].$env['API_TYPE']."/ma_avg?symbol=".$params['symbol']."&period=".$params['period']."&access_key=".$env['APP_KEY'];
    $returnObject = json_decode(getData($api_url_2), true);
    $ma_signal = $returnObject['response']['oa_summary'];

    // Technical Indicator
    $api_url_2 = $env['API_V2'].$env['API_TYPE']."/indicators?symbol=".$params['symbol']."&period=".$params['period']."&access_key=".$env['APP_KEY'];
    $returnObject = json_decode(getData($api_url_2), true);
    $ti_signal = $returnObject['response']['oa_summary'];

    echo "Pivot Point : ".$pp_signal."<br>Moving Average : ".$ma_signal."<br>Technical Indicator : ".$ti_signal;


    // var_dump($pp_signal);
    // var_dump($params);
?>