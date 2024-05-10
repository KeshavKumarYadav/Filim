import './Box.css'
import './WatchBox.css'

const WatchedBox = function({children}){
    return (
        <div className="box watch-box">
            <button className='collapse-btn'>+</button>
            {children}
        </div>
    )
}

export default WatchedBox