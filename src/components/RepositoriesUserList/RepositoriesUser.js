import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./ReposUser.css"
import ItemRepos from './ItemRepos';

function  getReposUser(name, setRepos) {
    return fetch('https://api.github.com/users/' + name + '/repos')
    .then((response) => {
        if (response.ok)
            return response;
        else if (response.status == 404) 
        {
            setRepos([])
            alert('неверный ник github');
        }    
    })
    .then((response) => {
        let json = response.json();
        if (json != undefined)
            return json;
        else 
        {
            setRepos([])
            alert(response.statusText);
        }
    })
    .then(json => {
        return json;
    })
    
}

function RepositoriesUser({name }){
    const [listRepositories, setRepos] = React.useState([]);
    useEffect(() =>
    {
        if (name != '')
        {
            getReposUser(name, setRepos).then(result =>{
                if (result != undefined || result.length != 0)
                {
                    console.log(result);
                    setRepos(result);
                }
            })
        }
         
    },
    [name]
    );
    return (
        <div>
            <ul>
                {
                    listRepositories.map(itemArray => {
                        let index = listRepositories.indexOf(itemArray);
                        return <ItemRepos item = {itemArray.name} key = {index}/>
                    }
                    )
                }
            </ul>
        </div>
     );

}

RepositoriesUser.propTypes = {
    name: PropTypes.string.isRequired
}
export default RepositoriesUser