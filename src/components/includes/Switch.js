const Switch = ({name, isChecked, func}) => {
    if (!isChecked) {
        return (
            <label className="switch">
                <input name={name} onChange={e => func(e)} type="checkbox"/>
                <span className="slider round"></span>
            </label>
        )
    }

    return (
        <label className="switch">
            <input name={name} onChange={e => func(e)} type="checkbox" defaultChecked/>
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;