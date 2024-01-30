// This function format number with comma
const NumberFormatter = (x: number): string => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default NumberFormatter;
