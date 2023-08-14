// Currency data ---------------------------------------------------------

export const getCurrencyConversionData = async () => {
    const headers = new Headers();
    headers.append("access_key", "36a0e71f6ed10f4eea49bb8ed8968048");
    const options = {
      method: "GET",
      redirect: 'follow',
      headers
    };
    const response = await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=36a0e71f6ed10f4eea49bb8ed8968048&format=1&base=EUR`, options);
    if(!response.ok) {
      throw new Error("Cannot fetch currency data.");
    }
    return await response.json();
  }
  
export  const getSalary = (amountUSD, currency, currencyData) => {
    const amount = (currency === "USD") ? amountUSD : amountUSD * currencyData.rates[currency];
    const formatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    });
    return formatter.format(amount);
  }
