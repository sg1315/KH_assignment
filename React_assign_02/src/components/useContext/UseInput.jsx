import React, { useState } from 'react'

const UseInput = (values) => {
    const [value, setValue] = useState(values);

    const onChange = (ev) => {
        setValue(ev.target.value);
    }

    return {value, onChange}
}

export default UseInput