import {FC, memo, useCallback,useEffect, useState} from 'react';

const KonamiCode: FC <{func: (() => void)}> = memo(({func}) => {
    const KONAMI_CODE = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA',
    ];

    const [count, setCount] = useState(0);

    const [key, setKey] = useState(null);
    const keyDownHandler  = useCallback(({code}) => {
        setKey(code);
    }, []);
    const keyUpHandler = useCallback(() => {
        setKey(null)
    }, []);

    useEffect(() => {        
        global.addEventListener('keydown', keyDownHandler);
        global.addEventListener('keyup', keyUpHandler);
        return () => {
            global.removeEventListener("keydown", keyDownHandler);
            global.removeEventListener("keyup", keyUpHandler)
          }
    }, [keyDownHandler, keyUpHandler]);

    useEffect(() => {
        if (key == null) return;
        if (key !== KONAMI_CODE[count]) {
            setCount(0);
            return;
        }
        setCount((state) => state + 1);
        if (count + 1 === KONAMI_CODE.length) {
            func();
            setCount(0);
        }
        // eslint-disable-next-line
    }, [key]);

    return(
        <div style={{display: 'none'}}>yeet</div>
    );
});

export default KonamiCode;