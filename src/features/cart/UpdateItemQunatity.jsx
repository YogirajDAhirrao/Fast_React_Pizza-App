import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice"

function UpdateItemQunatity({id , currentQuantity}) {
    const dispatch = useDispatch()
    
    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button type="round" onClick={()=>dispatch(decreaseItemQuantity(id))}>-</Button>
            {currentQuantity}
            <Button type="round" onClick={()=>dispatch(increaseItemQuantity(id))}>+</Button>
        </div>
    )
}

export default UpdateItemQunatity
