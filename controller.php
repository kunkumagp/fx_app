<?php 
function getUrlParams(){
    $url = $_SERVER['REQUEST_URI'];
    $query_str = parse_url($url, PHP_URL_QUERY);
    parse_str($query_str, $query_params);
    return $query_params;
}

// function pp_signal($api_url){

//     // Initialize CURL: 
//     $ch = curl_init($api_url); 
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
//     $json = curl_exec($ch); // Store the data 
//     curl_close($ch); 

//     $response = json_decode($json, true); // convert JSON into Array 
//     return $json;
// }

function getData($api_url){
    // Initialize CURL: 
    $ch = curl_init($api_url); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
    $json = curl_exec($ch); // Store the data 
    curl_close($ch); 


    $response = json_decode($json, true); // convert JSON into Array 
    return $json;
}
?>