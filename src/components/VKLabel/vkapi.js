module.exports = {    
    Request : function(setData, input, fetchJsonp) {
        const url = `https://api.vk.com/method/users.get?user_ids=${input}&fields=status,photo_400_orig&access_token=d365c887d365c887d365c887d9d30b8000dd365d365c8878e84da3432d7b878418946f9&v=5.103`;
        fetchJsonp(url)
            .then(response => response.json())
            .then(data => {
                setData(data.response[0]);
                console.log(data);
            });
    }
}