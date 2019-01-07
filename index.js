const axios = require('axios');

const interval = () => {
    axios.get('https://www.ze2019.com/storage/counters.json?rand='+Math.random())
        .then(function (response) {
            console.log(new Date(), response.data);
            axios.post('https://api.devicepilot.com/devices', {
                "$id":"demoDevice",
                "volunteer_amount": response.data.volunteer_amount
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token <token>' 
                }
            })
            .then((response)=>{console.log('OK', response.data);})
            .catch((error)=>{console.log('ER', error);});
        })
        .catch(function (error) {
            console.log(error);
        });
    setTimeout(interval, 1000 * 60);
};

interval();
