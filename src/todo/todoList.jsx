import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'

const todoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(item => (
      <tr key={item._id}>
        <td className={item.done ? 'markedAsDone' : ''}>
          {item.description}
        </td>
        <td>
          <IconButton style='success' icon='check' 
            onClick={() => props.handleMarkAsDone(item)}
            hide={item.done} />
          
          <IconButton style='warning' icon='undo'
            onClick={() => props.handleMarkAsPending(item)} 
            hide={!item.done}/>
          
          <IconButton style='danger' icon='trash-o' 
            onClick={() => props.handleRemove(item)} 
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
export default connect(mapStateToProps)(todoList)