interface ContainerProps {
    children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
    )
}