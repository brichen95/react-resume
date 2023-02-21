import {FC, memo, useEffect, useState} from 'react';

const KonamiCode: FC <{func: Function}> = memo(({func}) => {
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
        // const keyDownHandler = ({ code }) => setKey(code);
        const keyDownHandler: FC <{code: React.SetStateAction<null> }> = ({ code }) => {
            setKey(code);
            return;
        };
        const keyUpHandler = () => setKey(null);
        global.addEventListener('keydown', keyDownHandler);
        global.addEventListener('keyup', keyUpHandler);
        return;
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