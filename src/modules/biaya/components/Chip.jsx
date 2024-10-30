/* eslint-disable react/prop-types */
const Chip = ({text, ring, background}) => {
    return (
        <div className={`${ring ? 'ring-1' : ''} ring-${ring} bg-${background} px-2 rounded-full`}>  <p className="text-xs md:text-sm">{text}</p> </div>
    )
}
export default Chip