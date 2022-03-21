import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Suggest.css'

const Suggest = () => {
    return ( 
        <main className="suggest-container">
            <Navbar />
            <div className='suggest-banner'>
                
            </div>
            <div className="form-container">
                <h1>Suggest me</h1>
                <form action='' method='POST' className='form'>
                    <input type="text" name="nome" placeholder='Name' required/>
                    <input type="text" name='assunto' placeholder='Subject' required/>
                    <input type="email" name='email' placeholder='Email' required/>
                    <textarea cols="30" rows="10" placeholder='Message' name='message' required></textarea>
                    <Button component='button' className='form-button' type='submit' >Send</Button>
                </form>
            </div>
            <Footer/>    
        </main>
     );
}
 
export default Suggest;