import {FC, memo, useEffect, useState} from 'react';

const KonamiCode: FC <{func: Function}> = memo(({func}) => {
    // const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    const KONAMI_CODE = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA',
    ];
    const [key, setKey] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const keyDownHandler = ({ code }) => setKey(code);
        const keyUpHandler = () => setKey(null);
        global.addEventListener('keydown', keyDownHandler);
        global.addEventListener('keyup', keyUpHandler);
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