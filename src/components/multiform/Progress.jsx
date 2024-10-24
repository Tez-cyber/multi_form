

export const Progress = ({ totalSteps, step }) => {
    const progress = ((step - 1) / (totalSteps - 1) * 100)
    return (
        <div
            style={{
                height: "4px", background: "#ddd", width: "100%",
                transition: "all .4s ease-in"
            }}
            className="
            progress 
        ">
            <div
                style={{
                    height: "4px", 
                    background: "#ff8000", 
                    width: `${progress}%`,
                    transition: "all .4s ease-in"
                }}
            ></div>
        </div>
    )
}
