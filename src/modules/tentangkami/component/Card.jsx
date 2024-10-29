/* eslint-disable react/prop-types */
const Card = ({ children }) => {
    return (
        <div className="text-center flex flex-col justify-around gap-4">
            {children}
        </div>
    )
}

export default Card