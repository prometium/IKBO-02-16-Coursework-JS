
function Whois(ip){
    const token = 'c03b3eb8267d51';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipinfo.io/'+ip+'?token='+ token, false);
    xhr.send();
    
    if (xhr.status == 200) {
      return JSON.parse(xhr.responseText);
    } 
    return false;
}

export default Whois;