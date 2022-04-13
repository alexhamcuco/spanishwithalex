const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.awsKey,
    secretAccessKey: process.env.awsSecret,
    region: 'us-east-1',
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

const sendEmail = (emailFrom, message) => {
    const params = {
        Destination: {
            ToAddresses: ['@gmail.com'],
        },
        Source: '@gmail.com',
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data:
                        'New email from: ' +
                        emailFrom +
                        '<br /><br />' +
                        message,
                },
                /* replace Html attribute with the following if you want to send plain text emails. 
                Text: {
                    Charset: "UTF-8",
                    Data: message
                }
             */
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'new student request',
            },
        },
    };

    ses.sendEmail(params, (err, data) => {
        if (err) {
            return console.log(err, err.stack);
        } else {
            console.log('Email sent.', data);
        }
    });
};

module.exports = { sendEmail };
