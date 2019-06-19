import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescription } from './todoActions'

const todoForm = props => {

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input id='description' className='form-control' 
          placeholder='Adicionar tarefa'
          onChange={props.changeDescription} //utiliza a action importada
          onKeyUp={keyHandler}
          value={props.description}>  
        </input>
      </Grid>
      <Grid cols='12 3 2'>
        <IconButton style='primary' icon='plus' onClick={props.handleAdd}/>
        <IconButton style='info' icon='search' onClick={props.handleSearch}/>
        <IconButton style='default' icon='close' onClick={props.handleClear}/>
      </Grid>
    </div>
  )
}

//map do estado para props
const mapStateToProps = state => ({ description: state.todo.description })

//map da action changeDescription para props
const mapDispatchToProps = dispacth => bindActionCreators({ changeDescription }, dispacth)
// const mapDispatchToProps = function (dispacth) {
//   bindActionCreator({ changeDescription }, dispacth)
// }
export default connect(mapStateToProps, mapDispatchToProps)(todoForm)