import React from 'react';

export default function useMemeComponent() {
    const [open, setOpen] = React.useState(false);

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