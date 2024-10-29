/* eslint-disable react/prop-types */
const Container = ({ children }) => {
    return (
        <div className="flex flex-col gap-6 text-center px-1 md:px-4">
            {children}
        </div>
    )
}

export default Container
