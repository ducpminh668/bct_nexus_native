export const formatCurrency = (price) => {
  console.log({price});
  if (!price){
    return '';
  }
  return (+price).toFixed(0).replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
};
