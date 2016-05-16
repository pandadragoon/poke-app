/* @flow */
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';



export default class Home extends React.Component {

  constructor(props: Object){
    super(props);

    this.state = {
      pokemon: [],
      shownPokemon: [],
      skip: 0,
      take: 20,
      search: ''
    };

  }

  componentDidMount(){
    if(!localStorage.getItem('pokemon')){
      axios.get('http://pokeapi.co/api/v2/pokemon/?limit=811')
        .then((response)=>{
          let pokemon = JSON.stringify(response.data.results);
          localStorage.setItem('pokemon', pokemon);
        })
        .catch((error)=>{
          console.error(error);
        });
    }

    try {
      let storedPokemon = JSON.parse(localStorage.getItem('pokemon'));
      let skip = this.state.skip + this.state.take;
      let take = this.state.take;

      this.setState({
        pokemon: storedPokemon,
        shownPokemon: storedPokemon.slice(0, take),
        skip: skip
      });

    } catch (e) {
      console.error(e);
    }

  }

  loadMore(){
    let skip = this.state.skip + this.state.take;
    let take = this.state.take;
    let shownPokemon = this.state.shownPokemon.concat(this.state.pokemon.slice(this.state.skip, this.state.skip + take));

    this.setState({
      shownPokemon: shownPokemon,
      skip: skip
    });
  }

  search(event: Object){
    let pokemon;

    if(event.target.value.length === 0){
      pokemon = this.state.pokemon.slice(0, 20);
    }else {
      pokemon = this.state.pokemon.filter((poke)=>{
        return poke.name.indexOf(event.target.value) !== -1;
      });
    }


    this.setState({
      search: event.target.value,
      shownPokemon: pokemon,
      skip: 20
    });
  }

  render(): Object{
    let pokemon = this.state.shownPokemon.map((poke, idx)=>{
      return (
        <div key={idx} className='pokemon' style={styles.pokemon}>
          <div className='inner-ball'>
            <h1 style={styles.name}>{poke.name}</h1>
            <Link to={{
              pathname: `/pokemon/${poke.name}`,
              state: {
                url: poke.url
              },
              query: {
                id: idx + 1
              }
            }}>More Info</Link>
          </div>
          <div className='lower-ball'>

          </div>
        </div>
      );
    });

    return (
      <div>
        <div className='form-group search'>
          <label>Search Pokemon: </label>
          <input type='text' className='form-control' value={this.state.search} onChange={this.search.bind(this)} />
        </div>
        <div style={styles.container}>
          {pokemon}
        </div>
        <a
          style={{display: this.state.search.length === 0 && this.state.shownPokemon.length !== this.state.pokemon.length ? 'block' : 'none'}}
          className='load-more' onClick={this.loadMore.bind(this)}>Load More</a>
      </div>

    );
  }
}

let styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  pokemon: {
    width: '23%',
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '1%',
    marginBottom: '1%',
    borderColor: 'black',
    backgroundColor: 'tomato',
    borderRadius: '50%'
  },
  name: {
    alignText: 'center',
    color: 'tomato',
    fontFamil: 'Helvetica'
  },
  info: {
    textDecoration: 'none',
    color: 'black'
  }
};
