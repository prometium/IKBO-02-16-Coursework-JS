import React from 'react';

export default function useMemeComponent(initState=true) {
    const [open, setOpen] = React.useState(initState);

    const openMeme = () => {
        setOpen(true);
    };

    const closeMeme = () => {
        setOpen(false);
    };

    return {
        open,
        setOpen,
        openMeme,
        closeMeme
    };
}