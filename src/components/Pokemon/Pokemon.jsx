/* @flow */

import React from 'react';
import axios from 'axios';
import _ from 'underscore';

export default class Pokemon extends React.Component {
  constructor(props: Object){
    super(props);
    this.state = {
      url: '',
      pokeInfo: {}
    };
  }

  componentWillMount(){
    let url = '';
    var pokeInfo;
    var pokeName = this.props.params.name;

    if(this.props.location.state.url){
      url = this.props.location.state.url;
    }else {
      url = `http://pokeapi.co/api/v2/pokemon/${this.props.location.params.id}`;
    }

    if(sessionStorage.getItem(`pokemon-${pokeName}`) === null){
      axios.get(url)
        .then((response)=>{
          pokeInfo = response.data;

          sessionStorage.setItem(`pokemon-${pokeName}`, JSON.stringify(pokeInfo));
          this.setState({
            url: url,
            pokeInfo: pokeInfo
          });
        });
    }else {
      pokeInfo = JSON.parse(sessionStorage.getItem(`pokemon-${pokeName}`));

      this.setState({
        url: url,
        pokeInfo: pokeInfo
      });
    }
  }

  render(): Object{

    let name = 'loading...';
    let url = '';
    let stats = ['loading...'];
    let types = ['loading...'];
    let weight = '';
    let height = '';

    console.log(this.state.pokeInfo);

    if(!_.isEmpty(this.state.pokeInfo)){
      name = this.state.pokeInfo.name;
      url = this.state.pokeInfo.sprites.front_default;
      stats = this.state.pokeInfo.stats.map((stat, idx)=>{
        return (
          <li key={idx} className='poke-info__stat-list__item'><p><strong>Name:</strong> {stat.stat.name}</p><p><strong>Base:</strong> {stat.base_stat}</p></li>
        );
      });
      types = this.state.pokeInfo.types.map((type, idx)=>{
        return (
          <li key={idx} style={{color: colors[type.type.name]}} className='poke-info__type-list__item'>{type.type.name}</li>
        );
      });
    }

    return (
      <div className='poke-info'>
        <h1 className='poke-info__name'>{name}</h1>
        <img className='poke-info__img' style={{display: url.length === 0 ? 'none' : 'block'}} src={url} />
        <h3 className='poke-info__title'>Types</h3>
        <ul className='poke-info__type-list'>
          {types}
        </ul>
        <h3 className='poke-info__title'>Stats</h3>
        <ul className='poke-info__stat-list'>
          {stats}
        </ul>
      </div>
    );
  }
}

var colors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting:'#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark:'#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
}
