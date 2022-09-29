
import './Break.css'
const Break = ({ handleBreake }) => {
    return (
        <div>
            <div className='weight-container'>
                <div className='weight-details'>
                    <h2>75 kg</h2>
                    <p>weight</p>
                </div>
                <div className='height-details'>
                    <h2>6.5</h2>
                    <p>height</p>
                </div>
                <div className='years-details'>
                    <h2>25 years</h2>
                    <p>age</p>
                </div>
            </div>
            <div className='breake-time-container'>
                <button onClick={() => handleBreake(10)} className='btn-time'>10s</button>
                <button onClick={() => handleBreake(20)} className='btn-time'>20s</button>
                <button onClick={() => handleBreake(30)} className='btn-time'>30s</button>
                <button onClick={() => handleBreake(40)} className='btn-time'>40s</button>
            </div>
        </div>
    );
};

export default Break;