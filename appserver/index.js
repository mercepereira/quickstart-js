var request = require('request');

function sendMessageToUser(deviceId, message) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': 'key=AIzaSyDufe0MlMZVaux-2P0smn9fehM9hVV_b84'
    },
    body: JSON.stringify(
      {
        "to" : deviceId,
        "notification": {
            "title": "Background Message Title 8",
            "body": "Background message body 8",
            "icon": "firebase-logo.png",
            "click_action": "https://testnotifications-154610.firebaseapp.com/"
        },
        "data": {
            "cmd": "new",
            "entity": "prestec",
            "id": message
        }
      }
    )
  }, function(error, response, body) {
    if (error) { 
      console.error(error, response, body); 
    }
    else if (response.statusCode >= 400) { 
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body); 
    }
    else {
      console.log('Done!')
    }
  });
}

// chrome merce
sendMessageToUser(
  "eOmL6-ogUAg:APA91bEdqwCPrImgd0-FGmjH2bSiUKyWj_vwda_iw3bE6r1rPIM8wqVxa2A6FJelEoliGafyD_u4ENJe1dIHllivPdvm8OTIgDacU-Zg2t3pky5hwSgk9Vq3zBkdA5_JhbWNNvTsy_Gi",
  "12349"
);

// firefox victor
sendMessageToUser(
  "dxgGfw_kvYQ:APA91bEp0MpHOQy9YSvAVyoVHepPSmB2ywD-cj1jPAXhQ_e-UpIouw3AYW3X5U5HQeQXoi9_AxS9xhEJhK8L4W8yAZXI3wI85yrupckb1yODNarQKryl9C6aYp1BXZFs-JSr-F2-02_f",
  "12349"
);
