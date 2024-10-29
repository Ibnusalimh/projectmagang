/* eslint-disable react/prop-types */
const Container = ({children}) => {
    return (
        <div className="w-full px-4 pt-16 md:px-20 md:pt-24">
            {children}
        </div>
    )
}

export default Container