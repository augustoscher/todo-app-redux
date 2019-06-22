import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { add, changeDescription, search } from './todoActions'

class TodoForm extends React.Component {

  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    //usando destructuring
    const { add, search, description } = this.props 
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
    const { add, search, description } = this.props 
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description' className='form-control' 
            placeholder='Adicionar tarefa'
            onChange={this.props.changeDescription} //utiliza a action importada
            onKeyUp={this.keyHandler}
            value={this.props.description}>  
          </input>
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={() => add(description)}/>
          <IconButton style='info' icon='search' onClick={() => search()}/>
          <IconButton style='default' icon='close' onClick={this.props.handleClear}/>
        </Grid>
      </div>
    )
  }
}

//map do estado para props
const mapStateToProps = state => ({ description: state.todo.description })

//map da action changeDescription para props
const mapDispatchToProps = dispacth => bindActionCreators({ add, changeDescription, search }, dispacth)
// const mapDispatchToProps = function (dispacth) {
//   bindActionCreator({ changeDescription }, dispacth)
// }
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)