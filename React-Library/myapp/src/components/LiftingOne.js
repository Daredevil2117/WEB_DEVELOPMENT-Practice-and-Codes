import React from 'react'

export default function LiftingOne(props) {
    const param= props.params
    const update = props.update

    const handlefirst=(event)=>{

        update({...param,firstName:event.target.value})

    }
    const handlelast=(event)=>{
        update({...param,lastName:event.target.value})

    }

    return (
        <div className='container'>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name"
                        value={param.firstName} onChange={handlefirst}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name"
                        value={param.lastName} onChange={handlelast}/>
                    </div>
                </div>
            </form>
        </div>

    )
}
