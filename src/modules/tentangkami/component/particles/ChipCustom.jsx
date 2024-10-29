/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ChipsCustom = ({text, icon, addOns}) =>{
    return(
        <div className="w-fit py-1 px-2 bg-transparen flex text-primary font-medium gap-2 rounded-full items-center">
            {addOns?addOns:''}
            <p className="text-xs md:text-sm">{text}</p>
            <FontAwesomeIcon icon={icon} size='xs'/>
        </div>
    )
}
export default ChipsCustom