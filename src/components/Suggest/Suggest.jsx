import Button from '../Button/Button';
import './Suggest.css'

const Suggest = () => {
    return ( 
        <div className="suggest-container">
            <h1>Suggest me</h1>
            <form action='' method='POST' className='form'>
                <input type="text" name="nome" placeholder='Name' required/>
                <input type="text" name='assunto' placeholder='Subject' required/>
                <input type="email" name='email' placeholder='Email' required/>
                <textarea cols="30" rows="10" placeholder='Message' name='message' required></textarea>
                <Button component='button' className='form-button' type='submit' >Send</Button>
            </form>    
        </div>
     );
}
 
export default Suggest;