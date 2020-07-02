import moment from 'moment';

const writeLog = (text, ip) => {
  if (process.env.IS_LOG === 'true') {
    const date = moment(); // dateFormat(new Date(), "dd/mm/yyyy HH:MM:ss");
    const log = `${date} ${text}. ip: ${ip}`;

    console.log(log);
  }
};

export default { writeLog };
