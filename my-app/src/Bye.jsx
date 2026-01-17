import './Bye.css'
import style from './Bye.module.css'
function Bye(){

    // INLINE CSS
    const textstyle = {
        color: "red",
        fontSize: "20px"
    }
    return(
        <>
            <p style={textstyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora soluta magnam laudantium impedit facere ea. Autem, ut? Totam, velit.</p>
            <p style={{color: "red",fontSize: "20px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora soluta magnam laudantium impedit facere ea. Autem, ut? Totam, velit.</p>
            
            {/* EXTERNAL CSS */}
            <p className='bg-color'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora soluta magnam laudantium impedit facere ea. Autem, ut? Totam, velit.</p>

            {/* CSS MODULE : APPLY CSS TO SOME SPECIFIC COMPONENT OR FILE */}
            <p className={style.test}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, tempora soluta magnam laudantium impedit facere ea. Autem, ut? Totam, velit.</p>
            
        </>
    )
}

export default Bye