export const container  = {

    hidden: {
        opacity: 0
    },

    animated: {
        opacity: 1,
        transition: {
            delayChild: 0.5,
            staggerChild: 0.2,
        },
    },

}


export const element = {

    hidden: {
        y:"100%"
    },

    animated: {
        y: "0%",
        transition: {
            duration: 0.5,
        },
    },
}