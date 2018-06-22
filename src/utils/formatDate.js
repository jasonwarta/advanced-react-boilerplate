import dateformat from 'dateformat';

const formatDate = (date, format = 'ddd, mmm d, h:MM TT') => {
  try {
    return dateformat(date, format);
  } catch (e) {
    console.warn(`Error parsing date with date:'${date}' and format:'${format}'`); // eslint-disable-line no-console
    return '';
  }
};

export default formatDate;
