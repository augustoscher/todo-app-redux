import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(item => (
      <tr key={item._id}>
        <td className={item.done ? 'markedAsDone' : ''}>
          {item.description}
        </td>
        <td>
          <IconButton style='success' icon='check' 
            onClick={() => props.markAsDone(item)}
            hide={item.done} />
          
          <IconButton style='warning' icon='undo'
            onClick={() => props.markAsPending(item)} 
            hide={!item.done}/>
          
          <IconButton style='danger' icon='trash-o' 
            onClick={() => props.remove(item)} 
            hide={!item.done}/>
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispacth => bindActionCreators({ markAsDone, markAsPending, remove }, dispacth)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)