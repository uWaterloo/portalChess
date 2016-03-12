// OPEN DATA API EXAMPLE
function getOpenData() {
    var apiKey = ""; // Paste your API key here. IMPORTANT: DO NOT PUSH THIS TO GITHUB, STORE KEY IN DB
    return proxy.GetProxy("https://api.uwaterloo.ca/v2/foodservices/watcard.json?key=" + apiKey);
}
// OPEN DATA API EXAMPLE
