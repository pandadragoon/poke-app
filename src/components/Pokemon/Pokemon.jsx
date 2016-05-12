/* @flow */

import React from 'react';
import axios from 'axios';

export default class Pokemon extends React.Component {
  constructor(props: Object){
    super(props);
    this.state = {
      url: '',
      pokeInfo: {}
    }
  }

  componentWillMount(){
    let url = '';
    var pokeInfo;
    var pokeName = this.props.params.name;

    if(this.props.location.state.url){
      url = this.props.location.state.url
    }else {
      url = `http://pokeapi.co/api/v2/pokemon/${this.props.location.params.id}`;
    }

    if(sessionStorage.getItem(`pokemon-${pokeName}`) === null){
      axios.get(url)
        .then((response)=>{
          pokeInfo = response.data;
          console.log('server', pokeInfo);
          sessionStorage.setItem(`pokemon-${pokeName}`, JSON.stringify(pokeInfo));
        });
    }

    pokeInfo = JSON.parse(sessionStorage.getItem(`pokemon-${pokeName}`));
    console.log('session', pokeInfo);
    this.setState({
      url: url,
      pokeInfo: pokeInfo
    });
  }

  render(): Object{
    return (
      <div>
        <h1>{this.state.pokeInfo.name}</h1>
        <img src={this.state.pokeInfo.sprites.front_default} />
      </div>
    );
  }
}
