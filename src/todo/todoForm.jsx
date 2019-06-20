import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescription, search } from './todoActions'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }

  render() {
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
          <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}/>
          <IconButton style='info' icon='search' onClick={this.props.handleSearch}/>
          <IconButton style='default' icon='close' onClick={this.props.handleClear}/>
        </Grid>
      </div>
    )
  }
}

//map do estado para props
const mapStateToProps = state => ({ description: state.todo.description })

//map da action changeDescription para props
const mapDispatchToProps = dispacth => bindActionCreators({ changeDescription, search }, dispacth)
// const mapDispatchToProps = function (dispacth) {
//   bindActionCreator({ changeDescription }, dispacth)
// }
export default connect(mapStateToProps, mapDispatchToProps)(todoForm)