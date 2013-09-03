 var Sendgrid = require("sendgrid-web"); 
   var sendgrid = new Sendgrid({
      user: "kuldeep@unixell.in",
      key: "huawei6712"
    });

    sendgrid.send({
      to: 'kuldeep@unixell.in',
      from: 'mohankuldeepis@gmail.com',
      subject: 'Hello world!',
      html: '<h1>Hello world!</h1>'
    }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success.");
      }
    });
