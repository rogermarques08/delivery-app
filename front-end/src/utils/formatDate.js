const formatDate = (timeStamp) => {
  const date = new Date(timeStamp);
  const sliceNumber = -2;

  const day = (`0${date.getDate()}`).slice(sliceNumber);
  const month = (`0${date.getMonth() + 1}`).slice(sliceNumber);
  const year = date.getFullYear();

  const dataFormatada = `${day}/${month}/${year}`;

  return dataFormatada;
};

export default formatDate;
