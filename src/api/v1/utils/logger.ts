import winston from 'winston';

const { combine, timestamp, printf } = winston.format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const accessLogStream = new winston.transports.File({
  filename: 'logs/access.log',
  level: 'info',
});

const errorLogStream = new winston.transports.File({
  filename: 'logs/error.log',
  level: 'error',
});

const consoleTransport = new winston.transports.Console({
  format: combine(
    timestamp(),
    logFormat,
  ),
});

const logger = winston.createLogger({
  level: 'info',  
  format: combine(
    timestamp(),
    logFormat
  ),
  transports: [
    consoleTransport,   
    accessLogStream,    
    errorLogStream,     
  ],
});

export default logger;
