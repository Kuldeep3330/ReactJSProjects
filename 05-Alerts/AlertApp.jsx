import React from 'react'
import Alert from './Alert'

const AlertApp = () => {
  return (
    <div className='container mx-auto'>
        <Alert type='success' message='successful login'/>
        <Alert type='info' message='coming soon' delay={true}/>
    </div>
    
  )
}

export default AlertApp