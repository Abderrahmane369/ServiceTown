import { Button } from 'antd';

export default function AuthBar() {
  return (
    <div className='authbar'>

        <Button type='text' className='login-button'>Log in</Button>
        <Button type='primary' className='signup-button' >Sign up</Button>
    </div>
  )
}
