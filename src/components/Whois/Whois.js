
function Whois(ip){
    const token = 'c03b3eb8267d51';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipinfo.io/'+ip+'?token='+ token, false);
    xhr.send();
    
    if (xhr.status == 200) {
      var temp = JSON.parse(xhr.responseText);
      var arr = [];
     Object.entries(temp).map(([key, val]) => {
      arr.push({name: key, value: val})
     });
      return arr;
    } 
    return false;
}

export default Whois;