import {FC, memo, useEffect, useState, useCallback} from 'react';

const KonamiCode: FC <{func: Function}> = memo(({func}) => {
    const KONAMI_CODE = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA',
    ];

    const [count, setCount] = useState(0);

    const [key, setKey] = useState(null);
    const keyDownHandler  = useCallback(({ code }) => {
        setKey(code);
    }, []);
    const keyUpHandler = () => setKey(null);

    useEffect(() => {
        // const keyDownHandler = ({ code }) => setKey(code);
        
        global.addEventListener('keydown', keyDownHandler);
        global.addEventListener('keyup', keyUpHandler);
        return () => {
            global.removeEventListener("keydown", keyDownHandler);
            global.removeEventListener("keyup", keyUpHandler)
          }
    }, []);

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
    }, [key]);

    return(
        <div style={{ display: 'none' }}>yeet</div>
    );
});

export default KonamiCode;