import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
const fetch = require("node-fetch");

const fetchConfig = {
  headers: {
    accept: "application/json, text/javascript, */*; q=0.01",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-ch-ua":
      '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    Referer: "https://forzadelivery.com/",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: "action=fdapi&method=Ecommerce%2FGetShippingRatesByHeaderCode&payload%5BMethod%5D=GetShippingRatesByHeaderCode&payload%5BParams%5D%5BHeaderCodeSource%5D=0101&payload%5BParams%5D%5BHeaderCodeDestiny%5D=1612&payload%5BParams%5D%5BDateOfSale%5D=2023-01-27&payload%5BParams%5D%5BIdCountry%5D=GT&payload%5BParams%5D%5Bparcels%5D%5B0%5D%5Bweight%5D=10&payload%5BParams%5D%5Bparcels%5D%5B0%5D%5Bamount%5D=0.00&payload%5BParams%5D%5Bparcels%5D%5B0%5D%5Bcurrency%5D=GTQ&payload%5BParams%5D%5Bparcels%5D%5B0%5D%5Bfragil%5D=false&payload%5BParams%5D%5Bparcels%5D%5B0%5D%5Bdescription%5D=Paquete+peque%C3%B1o&payload%5BParams%5D%5Bparcels%5D%5B0%5D%5Blength%5D=28&payload%5BParams%5D%5Bparcels%5D%5B0%5D%5Bwidth%5D=28&payload%5BParams%5D%5Bparcels%5D%5B0%5D%5Bheight%5D=28&payload%5BParams%5D%5Bparcels%5D%5B0%5D%5BParcelCode%5D=EXP076&payload%5BParams%5D%5BTotalWeight%5D=10&payload%5BParams%5D%5BTotalValue%5D=0&payload%5BParams%5D%5BCurrency%5D=GTQ&payload%5BParams%5D%5BCountPieces%5D=1&payload%5BParams%5D%5BObjectType%5D=&payload%5BParams%5D%5BCreditCode%5D=0&payload%5BParams%5D%5BIdMerchant%5D=0&payload%5BParams%5D%5BIsFragile%5D=false&payload%5BParams%5D%5BIsInsurance%5D=false&payload%5BParams%5D%5BIsCollected%5D=false&payload%5BParams%5D%5BIsCreditCardPayment%5D=false&payload%5BParams%5D%5BCodeOfReferenceDestiny%5D=0",
  method: "POST",
};

const FORZA_URL = "https://forzadelivery.com/wp-admin/admin-ajax.php";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const response = await fetch(FORZA_URL, fetchConfig);
  const data = await response.json();
  console.log(data);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
