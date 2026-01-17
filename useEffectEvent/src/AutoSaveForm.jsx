import { useEffect, useEffectEvent, useState } from 'react'

export default function AutoSaveForm(){

    const [formData, setFormData] = useState({name:"", email:""})
    const saveData = useEffectEvent(() => {
                        console.log('Form Data :', formData);
                    })
                    
    useEffect(() => {
        const interval = setInterval(() => {
            saveData();
        }, 3000)

        return() => clearInterval(interval);
    }, [])

    return(
        <>
            <h1>Auto save form</h1>

            <form action="">
                <input 
                    type="text"
                    placeholder="name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    
                    /> 
                    <br /><br />

                <input 
                    type="text"
                    placeholder="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    
                    />
            </form>
        </>
    )

}