import Currency from "@/types/currency";

export const currenciesList: Currency[] = [
    {label: 'Kuwati Dinar', value: 'kuwatiDinar'},
    {label: 'Bahraini Dinar', value: 'bahrainiDinar'},
    {label: 'Omani Rial', value: 'omaniRial'},
    {label: 'British Pound Sterling', value: 'britishPoundSterling'},
    {label: 'European Euro', value: 'europeanEuro'},
    {label: 'US Dollar', value: 'usDollar'},
    {label: 'Brunei Dollar', value: 'bruneiDollar'},
    {label: 'New Zealand Dollar', value: 'newZealandDollar'},
    {label: 'Aruban Florin', value: 'arubanFlorin'},
    {label: 'Indian Rupee', value: 'indianRupee'},
];


export const dollarTo: {
    [key:string]: number
} = {
    kuwatiDinar: 0.31,
    bahrainiDinar: 0.38,
    omaniRial: 4319,
    britishPoundSterling: 0.82,
    europeanEuro: 0.92,
    usDollar: 1,
    bruneiDollar: 1.32,
    newZealandDollar: 1.54,
    arubanFlorin: 1.80,
    indianRupee: 82.24,
}