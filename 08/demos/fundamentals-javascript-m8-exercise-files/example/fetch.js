const myHeaders = new Headers();

myHeaders.append("access_key", "36a0e71f6ed10f4eea49bb8ed8968048");
myHeaders.append("base", "USD");
myHeaders.append("apikey", "36a0e71f6ed10f4eea49bb8ed8968048");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

try {
    // const result = await fetch("http://api.exchangeratesapi.io/v1/latest?", requestOptions);
    const result = await fetch("https://api.apilayer.com/exchangerates_data/latest?base=USD&access_key=36a0e71f6ed10f4eea49bb8ed8968048", requestOptions);
    const resultObj = await result.json();
    console.log(JSON.stringify(resultObj, null, 2));
} catch (err) {
    console.error(`Could not fetch currency data`);
    throw err;
}
