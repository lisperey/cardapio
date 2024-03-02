import { useEffect, useState } from "react";
import { FoodData } from "../../interaface/FoodData";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";

import './modal.css';

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: unknown): void
}

const Input = ({ label , value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e =>updateValue(e.target.value)} type="text" />
        </>
    )
}
export function CreateModal(){
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate } = useFoodDataMutate();

    const submit = () =>{
        const fooData: FoodData = {
            title,
            price,
            image
        }
        mutate(fooData);
    }

    // useEffect(()=>{
    //     if(!isSuccess) return
    //     // closeModal();
    // }, [isSuccess])
    
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}></Input>
                    <Input label="price" value={price} updateValue={setPrice}></Input>
                    <Input label="image" value={image} updateValue={setImage}></Input>
                </form>
                <button onClick={submit} className="btn-secondary">
                    postar
                    {/* {isLoasding? 'postando...':'postar'} */}
                </button>

            </div>

        </div>
    )
}