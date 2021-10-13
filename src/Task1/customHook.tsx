import React, {useRef} from "react";

interface Props{
    name: string,
    email: string,
    pass: string,
    repass: string,
};

const initialValue = {
    name: '',
    email: '',
    pass: '',
    repass: '',
}

export const useForm = () => {
    const ref = useRef(initialValue); // nie wiedziałem dzięki

    const handledFieldUpdate = (field: keyof Props, value: string) => {


        ref.current[field] = value;
    }

    const validation = (form:{current: Props}) => ({
        name : () =>  form.current.name !== '',
        email : () => form.current.email !=='',
        pass : () =>  form.current.pass !== '', 
        repass : () =>  form.current.repass === form.current.pass, 
    })

    const validators = validation(ref);

    return {
        form : ref.current,
        handledFieldUpdate, 
        validators,
    }
}

